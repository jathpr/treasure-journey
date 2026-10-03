export const locales = ["be", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  be: {
    language: "Мова",
    languageNames: { be: "Беларуская", ru: "Русский", en: "English" },
    homeLabel: "На галоўную",
    gathaLabel: "Адкрыць ці згарнуць гатху",
    gatha: "Дыханне ўваходзіць. Дыханне выходзіць. Цяперашні момант — ужо шлях.",
    menuLabel: "Адкрыць ці згарнуць меню",
    navigation: "Навігацыя",
    map: "Мапа",
    later: "пазней",
    homeTitle: "Мапа шляху — асабісты досвед медытацыі",
    homeDescription: "Рад што вы завіталі.",
    related: "З гэтым звязана",
    languageCode: "be",
  },
  ru: {
    language: "Язык",
    languageNames: { be: "Беларуская", ru: "Русский", en: "English" },
    homeLabel: "На главную",
    gathaLabel: "Открыть или свернуть гатху",
    gatha: "Вдох. Выдох. Настоящий момент — уже путь.",
    menuLabel: "Открыть или закрыть меню",
    navigation: "Навигация",
    map: "Карта",
    later: "позже",
    homeTitle: "Карта пути — личный опыт медитации",
    homeDescription: "Рад, что вы заглянули.",
    related: "Связано с этим",
    languageCode: "ru",
  },
  en: {
    language: "Language",
    languageNames: { be: "Беларуская", ru: "Русский", en: "English" },
    homeLabel: "Home",
    gathaLabel: "Expand or collapse the gatha",
    gatha: "Breathing in. Breathing out. This moment is already the path.",
    menuLabel: "Open or close menu",
    navigation: "Navigation",
    map: "Map",
    later: "coming later",
    homeTitle: "A Map of the Journey — personal meditation experience",
    homeDescription: "Glad you stopped by.",
    related: "Connected to this",
    languageCode: "en",
  },
} as const;

// Keeping URL construction here means the language menu and page links share one rule.
export function pathFor(
  locale: Locale,
  nodeId?: string,
  base = import.meta.env.BASE_URL,
) {
  const basePath = base.endsWith("/") ? base : `${base}/`;
  const localePath = `${locale}/`;
  const nodePath = nodeId && nodeId !== "home" ? `journey/${nodeId}/` : "";
  return `${basePath}${localePath}${nodePath}`;
}
