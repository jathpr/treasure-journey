export const locales = ["be", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  be: {
    language: "Мова",
    languageNames: { be: "Беларуская", ru: "Русский", en: "English" },
    homeLabel: "На галоўную",
    gathaLabel: "Адкрыць ці згарнуць гатху",
    gatha:
      "Дыханне ўваходзіць. Дыханне выходзіць. Цяперашні момант — ужо шлях.",
    navigation: "Навігацыя па шляху",
    menuLabel: "Адкрыць ці згарнуць меню",
    map: "Мапа",
    later: "пазней",
    homeTitle: "Мапа шляху — асабісты досвед медытацыі",
    homeDescription: "Асабістыя нататкі пра медытацыю і духоўны шлях.",
    homeEyebrow: "Асабісты досвед · адкрыты шлях",
    homeHeading: "Медытацыя як спосаб быць бліжэй да жыцця",
    homeLead:
      "Гэта месца для разважанняў пра медытацыю і духоўны шлях — не як гатовых адказаў, а як досведу, якім можна падзяліцца.",
    howToRead: "Як чытаць мапу",
    eachStep: "Кожны крок — асобны погляд",
    mapDescription:
      "Старонкі звязаныя паміж сабой, але іх можна чытаць у сваім тэмпе. Мапа дапамагае заўважыць сувязі; яна не замяняе сам шлях.",
    step: "Крок",
    related: "З гэтым звязана",
    previous: "Папярэдні крок",
    next: "Наступны крок",
    languageCode: "be",
  },
  ru: {
    language: "Язык",
    languageNames: { be: "Беларуская", ru: "Русский", en: "English" },
    homeLabel: "На главную",
    gathaLabel: "Открыть или свернуть гатху",
    gatha: "Вдох. Выдох. Настоящий момент — уже путь.",
    navigation: "Навигация по пути",
    menuLabel: "Открыть или свернуть меню",
    map: "Карта",
    later: "позже",
    homeTitle: "Карта пути — личный опыт медитации",
    homeDescription: "Личные заметки о медитации и духовном пути.",
    homeEyebrow: "Личный опыт · открытый путь",
    homeHeading: "Медитация как способ быть ближе к жизни",
    homeLead:
      "Это место для размышлений о медитации и духовном пути — не как готовых ответов, а как опыта, которым можно поделиться.",
    howToRead: "Как читать карту",
    eachStep: "Каждый шаг — отдельный взгляд",
    mapDescription:
      "Страницы связаны между собой, но их можно читать в своём темпе. Карта помогает увидеть связи, но не заменяет сам путь.",
    step: "Шаг",
    related: "Связано с этим",
    previous: "Предыдущий шаг",
    next: "Следующий шаг",
    languageCode: "ru",
  },
  en: {
    language: "Language",
    languageNames: { be: "Беларуская", ru: "Русский", en: "English" },
    homeLabel: "Home",
    gathaLabel: "Expand or collapse the gatha",
    gatha: "Breathing in. Breathing out. This moment is already the path.",
    navigation: "Journey navigation",
    menuLabel: "Open or close menu",
    map: "Map",
    later: "coming later",
    homeTitle: "A Map of the Journey — personal meditation experience",
    homeDescription: "Personal notes on meditation and the spiritual journey.",
    homeEyebrow: "Personal experience · an open path",
    homeHeading: "Meditation as a way to be closer to life",
    homeLead:
      "A place to reflect on meditation and the spiritual journey—not as ready-made answers, but as experience to share.",
    howToRead: "How to read the map",
    eachStep: "Each step offers a different perspective",
    mapDescription:
      "The pages are connected, but you can read them at your own pace. The map helps reveal connections; it does not replace the journey.",
    step: "Step",
    related: "Connected to this",
    previous: "Previous step",
    next: "Next step",
    languageCode: "en",
  },
} as const;

export function pathFor(locale: Locale, nodeId?: string, base = import.meta.env.BASE_URL) {
  const basePath = base.endsWith("/") ? base : `${base}/`;
  const prefix = locale === "be" ? "" : `${locale}/`;
  const section = nodeId ? `journey/${nodeId}/` : "";
  return `${basePath}${prefix}${section}`;
}
