import { getCollection } from "astro:content";
import type { Locale } from "./i18n";

export async function getJourney(locale: Locale = "be") {
  const allEntries = await getCollection("journey");
  const locales = new Set(allEntries.map((entry) => entry.data.locale));
  const nodesByLocale = new Map<string, Set<string>>();

  for (const entry of allEntries) {
    const nodes = nodesByLocale.get(entry.data.locale) ?? new Set<string>();
    nodes.add(entry.data.nodeId);
    nodesByLocale.set(entry.data.locale, nodes);
  }

  const referenceNodes = nodesByLocale.get("be") ?? new Set<string>();
  for (const requiredLocale of ["be", "ru", "en"]) {
    const localizedNodes = nodesByLocale.get(requiredLocale) ?? new Set<string>();
    if (
      localizedNodes.size !== referenceNodes.size ||
      [...referenceNodes].some((nodeId) => !localizedNodes.has(nodeId))
    ) {
      throw new Error(`Journey content is incomplete for locale "${requiredLocale}".`);
    }
  }
  if (locales.size !== 3) {
    throw new Error("Journey content must include Belarusian, Russian, and English.");
  }

  const entries = allEntries.filter((entry) => entry.data.locale === locale);
  const entriesByNodeId = new Map(entries.map((entry) => [entry.data.nodeId, entry]));

  for (const entry of entries) {
    for (const targetId of entry.data.linksTo) {
      if (!entriesByNodeId.has(targetId)) {
        throw new Error(
          `Journey entry "${entry.data.nodeId}" (${locale}) links to missing entry "${targetId}".`,
        );
      }
    }
  }

  return entries.sort((a, b) => a.data.order - b.data.order);
}
