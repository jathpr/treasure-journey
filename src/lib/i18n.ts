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
    homeGreeting: "Вітаю, мяне клічуць Міця.",
    homeIntro:
      "Гэты сайт прысвечаны духоўнаму шляху, у прыватнасці медытацыі.",
    homeNavigation: "Выберыце кірунак",
    theory: "Тэорыя",
    practice: "Практыка",
    why: "Навошта",
    step: "Крок",
    related: "З гэтым звязана",
    previous: "Папярэдні крок",
    next: "Наступны крок",
    videoSoon: "Тут будзе відэа з практыкай.",
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
    homeGreeting: "Здравствуйте, меня зовут Митя.",
    homeIntro:
      "Этот сайт посвящён духовному пути, в частности медитации.",
    homeNavigation: "Выберите направление",
    theory: "Теория",
    practice: "Практика",
    why: "Зачем",
    step: "Шаг",
    related: "Связано с этим",
    previous: "Предыдущий шаг",
    next: "Следующий шаг",
    videoSoon: "Здесь будет видео с практикой.",
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
    homeGreeting: "Hello, my name is Mitya.",
    homeIntro:
      "This site is about the spiritual journey, and meditation in particular.",
    homeNavigation: "Choose a direction",
    theory: "Theory",
    practice: "Practice",
    why: "Why",
    step: "Step",
    related: "Connected to this",
    previous: "Previous step",
    next: "Next step",
    videoSoon: "A guided practice video will appear here.",
    languageCode: "en",
  },
} as const;

export function pathFor(locale: Locale, nodeId?: string, base = import.meta.env.BASE_URL) {
  const basePath = base.endsWith("/") ? base : `${base}/`;
  const prefix = locale === "be" ? "" : `${locale}/`;
  const section = nodeId ? `journey/${nodeId}/` : "";
  return `${basePath}${prefix}${section}`;
}
