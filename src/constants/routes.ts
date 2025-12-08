export const RouteName = {
  Home: "Home",
  TermsAndConditions: "TermsAndConditions",
  PrivacyPolicy: "PrivacyPolicy",
  NotFound: "NotFound",
} as const;

export type RouteNameType = (typeof RouteName)[keyof typeof RouteName];

export const RoutePath: Record<RouteNameType, string> = {
  [RouteName.Home]: "/",
  [RouteName.TermsAndConditions]: "/terms-and-conditions",
  [RouteName.PrivacyPolicy]: "/privacy-policy",
  [RouteName.NotFound]: "*",
};

export const RouteMeta: Record<
  RouteNameType,
  { title: string; description: string; keywords: string }
> = {
  [RouteName.Home]: {
    title: "Void Voyagers — Space Survival Game",
    description:
      "Void Voyagers is an intense iOS space survival game where you pilot a modular spaceship, dodge asteroid storms, defeat enemies, and unlock powerful upgrades. Built by Masoud Studios.",
    keywords:
      "Void Voyagers, space game, iOS space game, asteroid survival game, spaceship game, space shooter, modular spaceship, Masoud Studios, sci-fi game, cosmic action game",
  },
  [RouteName.TermsAndConditions]: {
    title: "Terms and Conditions — Void Voyagers",
    description:
      "Read the Terms and Conditions for Void Voyagers. Learn about gameplay rules, user responsibilities, and the legal guidelines for using the game and its related services.",
    keywords:
      "Void Voyagers terms and conditions, user agreement, game terms, mobile game terms, Masoud Studios terms",
  },
  [RouteName.PrivacyPolicy]: {
    title: "Privacy Policy — Void Voyagers",
    description:
      "Learn how Void Voyagers handles privacy and data. The game does not collect personal information and only uses anonymous analytics provided by Apple. No tracking, no third-party data collection.",
    keywords:
      "Void Voyagers privacy policy, mobile game privacy, no data collection game, Masoud Studios privacy, Apple analytics only",
  },
  [RouteName.NotFound]: {
    title: "404 — Lost in the Void",
    description:
      "This page drifted off into a black hole. Return to Void Voyagers and continue your cosmic journey.",
    keywords: "404, page not found, lost in space",
  },
};
