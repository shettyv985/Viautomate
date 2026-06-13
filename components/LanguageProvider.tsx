"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Language = "en" | "ru" | "ky";

const LANGUAGE_STORAGE_KEY = "viautomate-language";
const LANGUAGE_CHANGE_EVENT = "viautomate-language-change";

function normalizeLanguage(value: string | null): Language {
  if (value === "ru" || value === "ky") {
    return value;
  }

  return "en";
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
}

function getServerLanguageSnapshot(): Language {
  return "en";
}

function subscribeToLanguageChange(callback: () => void) {
  if (typeof window === "undefined") {
    return () => { };
  }

  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
  };
}

const englishTranslations = {
  nav: {
    brand: "VIAUTOMATE",
    home: "Home",
    about: "About us",
    services: "Services",
    contact: "Contact",
    brandAria: "Viautomate home",
  },
  hero: {
    label: "Automation Agency",
    headingIntro: "We automate the",
    headingLead: "boring, repetitive work",
    headingBeforeFocus: "so your team can",
    focus: "focus",
    headingAfterFocus: "on",
    headingEmphasis: "what matters.",
    tagline:
      "We build AI automations, dashboards, and smart tools that handle reports, follow-ups, data updates, and repeat tasks, giving your team more time for work that actually matters.",
    cta: "Get a Consultation",
  },
  whoWeAre: {
    title: "WHAT WE FIX",
    serviceAlt: "Service",
  },
  about: {
    cardTitle: "Your team should be growing the business, not filling the same sheets again.",
    cardText:
      "We build quiet systems that keep reports, updates, and follow-ups moving, giving your team more time for clients, sales, and growth.",
    cardCta: "Get Started",
    imageAlt: "Automate with us",
    heading: "Your team is busy... but not always with the work that grows the business.",
    body: [
      "Reports need updating. Follow-ups need chasing. Data needs moving. Payments need checking. Client updates need sending. And somehow, the whole process still depends on someone remembering the next step.",
      "That is exactly the kind of work Viautomate is built to fix.",
      "We turn repeat tasks, scattered data, missed follow-ups, and manual reporting into AI automations, dashboards, voice agents, and internal tools that keep your business moving in the background.",
      "Reports stay updated without someone rebuilding them every week. Follow-ups, reminders, and client updates go out before they get missed. Your business data becomes easier to track, understand, and act on. Your team gets more time for clients, sales, and growth.",
    ].join("\n"),
    cta: "Get a Consultation",
  },
  team: {
    label: "The People",
    title: "Team",
    role: "Co-Founder",
    social: "LinkedIn ->",
  },
  marquee: {
    items: [
      "Workflow Automation",
      "Voice Agents",
      "Web Development",
      "Spreadsheet Freedom",
      "Smart Systems",
    ],
  },
  services: {
    eyebrow: "WHAT WE FIX",
    titleLine1: "We handle the tedious.",
    titleLine2: "You handle the growth.",
  },
  bento: {
    cards: [
      {
        color: "#0a0a0a",
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks, approvals, updates, and follow-ups to keep work moving.",
        label: "01",
      },
      {
        color: "#505a63",
        title: "Business Dashboards",
        description:
          "Track leads, payments, performance, and key metrics in one place.",
        label: "02",
      },
      {
        color: "#1a1a1a",
        title: "AI Business Assistants",
        description:
          "We create AI assistants that can read spreadsheets, documents, reports, or internal data and answer questions instantly, so your team finds answers faster.",
        label: "03",
      },
      {
        color: "#1a1a1a",
        title: "AI Voice Agents",
        description:
          "We build voice agents that can answer calls, collect details, qualify leads, book appointments, and handle repetitive customer conversations.",
        label: "04",
      },
      {
        color: "#1a1a1a",
        title: "Web Development",
        description:
          "High-converting landing pages with built-in lead capture and follow-ups.",
        label: "05",
      },
      {
        color: "#1a1a1a",
        title: "Custom Internal Tools",
        description:
          "Custom portals, tracking systems, and internal apps built for your workflow.",
        label: "06",
      },
    ],
  },
  contact: {
    topLine: "Let's create together",
    brand: "Viautomate",
    year: "© 2026",
    heading: "Start a Conversation",
    body:
      "Got a process that's eating your time? Let's talk about it. We'll figure out exactly what to automate and build it for you.",
    available: "Available for new clients",
    remote: "Remote · Worldwide",
    name: "Name",
    email: "Email",
    company: "Company (optional)",
    message: "Tell us what you need automated...",
    submit: "Send Message",
  },
  footer: {
    brand: "Viautomate",
    headlineLine1: "Stop doing boring work.",
    headlineLine2: "Let us automate it.",
    home: "Home",
    about: "About us",
    services: "Services",
    contact: "Contact",
    body:
      "We build automations, voice agents, and websites that free your team from the tasks nobody wants to do.",
    builtBy: "Built by",
    builder: "Vishal Shetty",
    rights: "All rights reserved © 2026",
    bigText: "VIAUTOMATE",
  },
};

export const translations = {
  en: englishTranslations,
  ru: {
    ...englishTranslations,
    nav: {
      ...englishTranslations.nav,
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      contact: "Контакты",
    },
    hero: {
      ...englishTranslations.hero,
      label: "Агентство автоматизации",
      headingIntro: "Мы автоматизируем",
      headingLead: "рутинную и повторяющуюся работу,",
      headingBeforeFocus: "чтобы ваша команда могла",
      focus: "сфокусироваться",
      headingAfterFocus: "",
      headingEmphasis: "на главном.",
      tagline:
        "Мы создаём AI-автоматизации, дашборды и умные инструменты, которые берут на себя отчёты, follow-up’ы, обновление данных и повторяющиеся задачи , чтобы у команды было больше времени на действительно важную работу.",
      cta: "Получить консультацию",
    },
    whoWeAre: {
      ...englishTranslations.whoWeAre,
      title: "ЧТО МЫ РЕШАЕМ",
    },
    services: {
      ...englishTranslations.services,
      eyebrow: "ЧТО МЫ РЕШАЕМ",
    },
    footer: {
      ...englishTranslations.footer,
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      contact: "Контакты",
    },
  },
  ky: {
    ...englishTranslations,
    nav: {
      ...englishTranslations.nav,
      home: "Башкы бет",
      about: "Биз жөнүндө",
      services: "Кызматтар",
      contact: "Байланыш",
    },
    hero: {
      ...englishTranslations.hero,
      label: "Автоматташтыруу агенттиги",
      headingIntro: "Биз кызыксыз, кайталанма иштерди",
      headingLead: "автоматташтырабыз,",
      headingBeforeFocus: "командаңыз",
      focus: "көңүлүн бурушу",
      headingAfterFocus: "үчүн",
      headingEmphasis: "эң маанилүү нерсеге.",
      tagline:
        "Биз AI-автоматташтырууларды, дашборддорду жана акылдуу куралдарды түзөбүз. Алар отчетторду, кайра байланыштарды, маалымат жаңыртууларын жана кайталанма иштерди өзүнө алып, командаңызга маанилүү иштерге көбүрөөк убакыт берет.",
      cta: "Консультация алуу",
    },
    whoWeAre: {
      ...englishTranslations.whoWeAre,
      title: "ЭМНЕНИ ЧЕЧЕБИЗ",
    },
    services: {
      ...englishTranslations.services,
      eyebrow: "ЭМНЕНИ ЧЕЧЕБИЗ",
    },
    footer: {
      ...englishTranslations.footer,
      home: "Башкы бет",
      about: "Биз жөнүндө",
      services: "Кызматтар",
      contact: "Байланыш",
    },
  },
} as const;

type Translation = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const options: Array<{ language: Language; label: string }> = [
    { language: "en", label: "EN" },
    { language: "ru", label: "RUS" },
    { language: "ky", label: "KY" },
  ];

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label="Language"
      onPointerDown={(event) => event.stopPropagation()}
    >
      {options.map((option) => (
        <button
          key={option.language}
          type="button"
          data-language={option.language}
          className={language === option.language ? "is-active" : ""}
          aria-pressed={language === option.language}
          aria-label={`Switch to ${option.label}`}
          onClick={(event) => {
            event.stopPropagation();
            setLanguage(option.language);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
