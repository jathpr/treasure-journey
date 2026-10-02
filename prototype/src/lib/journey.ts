import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./i18n";

export type JourneyEntry = CollectionEntry<"journey">;

// Astro gives collection files IDs such as "theory/be"; split that into graph node and language.
export function nodeIdFor(entry: JourneyEntry) {
  return entry.id.slice(0, entry.id.lastIndexOf("/"));
}

function localeFor(entry: JourneyEntry) {
  return entry.id.split("/").at(-1);
}

export async function getJourney(locale: Locale): Promise<JourneyEntry[]> {
  const allEntries = await getCollection("journey");
  const nodesByLocale = new Map<string, Set<string>>();

  for (const entry of allEntries) {
    const entryLocale = localeFor(entry) ?? "";
    const nodes = nodesByLocale.get(entryLocale) ?? new Set<string>();
    nodes.add(nodeIdFor(entry));
    nodesByLocale.set(entryLocale, nodes);
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

  const entries = allEntries.filter((entry) => localeFor(entry) === locale);
  const entriesByNodeId = new Map(entries.map((entry) => [nodeIdFor(entry), entry]));
  for (const entry of entries) {
    for (const targetId of entry.data.linksTo) {
      if (!entriesByNodeId.has(targetId)) {
        throw new Error(
          `Journey entry "${nodeIdFor(entry)}" (${locale}) links to missing entry "${targetId}".`,
        );
      }
    }
  }

  // A stable alphabetical order is only for rendering; graph links remain the source of navigation.
  return entries.sort((a, b) => nodeIdFor(a).localeCompare(nodeIdFor(b)));
}
