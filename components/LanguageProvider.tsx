"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ru";

export const translations = {
  en: {
    nav: {
      brand: "VIAUTOMATE",
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      brandAria: "Viautomate home",
    },
    hero: {
      label: "Automation Agency",
      headingBeforeFocus: "We automate the boring stuff so you can",
      focus: "focus",
      headingAfterFocus: "on",
      headingEmphasis: "what matters.",
      tagline:
        "Automations, AI agents, dashboards, and internal tools for businesses tired of manual work.",
      cta: "Let's talk ->",
    },
    whoWeAre: {
      title: "What We Do",
      serviceAlt: "Service",
    },
    about: {
      cardTitle: "The repeat work is costing you hours.",
      cardText: "We turn it into systems that run on their own.",
      cardCta: "Get Started",
      imageAlt: "Automate with us",
      heading:
        "Your team is busy... but not always with the work that matters.",
      body:
        "At Viautomate, we find the repetitive work hiding inside your business: messy spreadsheets, missed follow-ups, manual reports, payment reminders, client updates, and tasks that somehow still depend on memory. Then we build automations, AI tools, dashboards, voice agents, and internal systems that handle the boring parts quietly in the background. No tech drama. No overcomplicated software. Just useful systems that save time.",
      cta: "Talk to us",
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
      eyebrow: "What We Do",
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
      about: "About",
      services: "Services",
      contact: "Contact",
      body:
        "We build automations, voice agents, and websites that free your team from the tasks nobody wants to do.",
      builtBy: "Built by",
      builder: "Vishal Shetty",
      rights: "All rights reserved © 2026",
      bigText: "VIAUTOMATE",
    },
  },
  ru: {
    nav: {
      brand: "VIAUTOMATE",
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      contact: "Контакты",
      brandAria: "На главную Viautomate",
    },
    hero: {
      label: "Агентство автоматизации",
      headingBeforeFocus: "Автоматизируем рутину, чтобы вы могли",
      focus: "сфокусироваться",
      headingAfterFocus: "на",
      headingEmphasis: "важном.",
      tagline:
        "Автоматизации, ИИ-агенты, дашборды и внутренние инструменты для бизнеса, которому надоела ручная работа.",
      cta: "Обсудить задачу ->",
    },
    whoWeAre: {
      title: "Что мы делаем",
      serviceAlt: "Услуга",
    },
    about: {
      cardTitle: "Рутинная работа съедает часы.",
      cardText: "Мы превращаем ее в системы, которые работают сами.",
      cardCta: "Начать",
      imageAlt: "Автоматизация с Viautomate",
      heading:
        "Команда занята... но не всегда тем, что действительно двигает бизнес.",
      body:
        "В Viautomate мы находим повторяющуюся работу, которая прячется внутри бизнеса: хаотичные таблицы, пропущенные повторные сообщения, ручные отчеты, напоминания об оплате, обновления для клиентов и задачи, которые почему-то все еще держатся на памяти. Затем мы создаем автоматизации, ИИ-инструменты, дашборды, голосовых агентов и внутренние системы, которые спокойно забирают скучную часть на себя. Без технической драмы. Без перегруженного софта. Просто полезные системы, которые экономят время.",
      cta: "Поговорить",
    },
    team: {
      label: "Люди",
      title: "Команда",
      role: "Сооснователь",
      social: "LinkedIn ->",
    },
    marquee: {
      items: [
        "Автоматизация процессов",
        "Голосовые агенты",
        "Веб-разработка",
        "Свобода от таблиц",
        "Умные системы",
      ],
    },
    services: {
      eyebrow: "Что мы делаем",
      titleLine1: "Берем рутину на себя.",
      titleLine2: "Вы занимаетесь ростом.",
    },
    bento: {
      cards: [
        {
          color: "#0a0a0a",
          title: "Автоматизация процессов",
          description:
            "Автоматизируем повторяющиеся задачи, согласования, обновления и повторные сообщения, чтобы работа двигалась без ручного контроля.",
          label: "01",
        },
        {
          color: "#505a63",
          title: "Бизнес-дашборды",
          description:
            "Собираем лиды, оплаты, показатели и важные метрики в одном понятном месте.",
          label: "02",
        },
        {
          color: "#1a1a1a",
          title: "ИИ-ассистенты для бизнеса",
          description:
            "Создаем ИИ-ассистентов, которые читают таблицы, документы, отчеты и внутренние данные, а затем быстро отвечают на вопросы команды.",
          label: "03",
        },
        {
          color: "#1a1a1a",
          title: "ИИ-голосовые агенты",
          description:
            "Делаем голосовых агентов для звонков, сбора данных, квалификации лидов, записи на встречи и повторяющихся разговоров с клиентами.",
          label: "04",
        },
        {
          color: "#1a1a1a",
          title: "Веб-разработка",
          description:
            "Лендинги и сайты, которые собирают заявки и сразу запускают повторные касания.",
          label: "05",
        },
        {
          color: "#1a1a1a",
          title: "Внутренние инструменты",
          description:
            "Порталы, трекеры и внутренние приложения, собранные под ваш рабочий процесс.",
          label: "06",
        },
      ],
    },
    contact: {
      topLine: "Создадим вместе",
      brand: "Viautomate",
      year: "© 2026",
      heading: "Начнем с разговора",
      body:
        "Есть процесс, который съедает время? Расскажите нам. Мы разберемся, что именно стоит автоматизировать, и соберем это для вас.",
      available: "Открыты к новым проектам",
      remote: "Удаленно · по всему миру",
      name: "Имя",
      email: "Email",
      company: "Компания (необязательно)",
      message: "Расскажите, что нужно автоматизировать...",
      submit: "Отправить",
    },
    footer: {
      brand: "Viautomate",
      headlineLine1: "Хватит делать скучную работу.",
      headlineLine2: "Пусть ее делает система.",
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      contact: "Контакты",
      body:
        "Мы создаем автоматизации, голосовых агентов и сайты, которые освобождают команду от задач, которые никто не хочет делать вручную.",
      builtBy: "Сделано",
      builder: "Vishal Shetty",
      rights: "Все права защищены © 2026",
      bigText: "VIAUTOMATE",
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
  const [language, setLanguage] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("viautomate-language");
    if (storedLanguage === "en" || storedLanguage === "ru") {
      setLanguage(storedLanguage);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "ru" ? "ru" : "en";
    if (isLoaded) {
      window.localStorage.setItem("viautomate-language", language);
    }
  }, [language, isLoaded]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
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
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const options: Array<{ language: Language; label: string }> = [
    { language: "en", label: "EN" },
    { language: "ru", label: "RUS" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsSmallViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label="Language"
      onPointerDown={(event) => event.stopPropagation()}
      style={{
        position: "fixed",
        top: isSmallViewport ? 72 : 18,
        left: isSmallViewport ? 12 : 24,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 4,
        width: "max-content",
        padding: 4,
        border: "1px solid rgba(10, 10, 10, 0.14)",
        borderRadius: 999,
        background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 14px 40px rgba(0, 0, 0, 0.14)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        pointerEvents: "auto",
      }}
    >
      {options.map((option) => (
        <button
          key={option.language}
          type="button"
          className={language === option.language ? "is-active" : ""}
          aria-pressed={language === option.language}
          aria-label={`Switch to ${option.label}`}
          onClick={(event) => {
            event.stopPropagation();
            setLanguage(option.language);
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: option.language === "ru" ? 52 : 42,
            height: isSmallViewport ? 32 : 34,
            padding: "0 12px",
            border: 0,
            borderRadius: 999,
            background: language === option.language ? "#0a0a0a" : "transparent",
            color: language === option.language ? "#ffffff" : "#151515",
            cursor: "pointer",
            fontSize: isSmallViewport ? 11 : 12,
            fontWeight: 800,
            letterSpacing: "0.08em",
            lineHeight: 1,
            boxShadow:
              language === option.language
                ? "0 6px 16px rgba(0, 0, 0, 0.18)"
                : "none",
            transition:
              "background 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease",
            userSelect: "none",
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
