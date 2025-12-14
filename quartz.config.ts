import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "VioFire",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
colors: {
  lightMode: {
    light: "#fffff8",           // слегка желтоватый пергамент
    lightgray: "#f0e8e0",       // светло-бежевый
    gray: "#c8c0b0",            // серо-бежевый
    darkgray: "#706050",        // тёмно-сепия акцент
    dark: "#282020",            // почти чёрный текст
    secondary: "#5a4830",       // тёмно-коричневая сепия
    tertiary: "#908070",        // приглушённый серо-коричневый
    highlight: "rgba(180, 160, 120, 0.15)", // лёгкое старение бумаги
    textHighlight: "#e0c08088", // золотисто-сепиевый маркер
  },
  darkMode: {
    light: "#181010",           // тёмно-коричневый фон (старая книга ночью)
    lightgray: "#282018",       // тёмные страницы
    gray: "#504840",            // средний серый
    darkgray: "#a09080",        // светлый бежевый акцент
    dark: "#f0e8e0",            // кремовый текст
    secondary: "#8a7040",       // сепия для акцентов
    tertiary: "#a09078",        // мягкий коричневый
    highlight: "rgba(200, 180, 140, 0.25)", // тёплое свечение
    textHighlight: "#d8c09099", // сепиевый маркер
  },
},
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
