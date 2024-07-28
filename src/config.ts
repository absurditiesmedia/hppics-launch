import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://hp.pics/", // replace this with your deployed domain
  author: "Mistress Olivia",
  desc: "Forever in awe of the vastness of existence, and how lame you are.",
  title: "Eternal Suffering of Your Pathetic Life",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Fetlife",
    href: "https://fetlife.com/users/9630463",
    linkTitle: ` ${SITE.title} on FetLife`,
    active: true,
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/lilitholivia",
    linkTitle: `${SITE.title} on Linktr.ee`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://hp.pics#mastodon.social/COMINGSOON",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://hp.pics#instagram.com/COMINGSOON",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://x.com/lilitholiviax",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@hp.pics",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },

  /*
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
*/
];
