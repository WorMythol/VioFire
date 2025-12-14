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
    light: "#f6f8f9",           // холодный светлый фон с лёгким зелёно-фиолетовым оттенком
    lightgray: "#e2e8e9",       // нейтрально-серый с холодным подтоном
    gray: "#a8b8c2",            // холодный серый
    darkgray: "#5e7382",        // серо-синий для акцентов
    dark: "#242d47",            // тёмно-синий текст с фиолетовым намёком
    secondary: "#4a6b5e",       // тёмно-хвойный зелёный
    tertiary: "#8a9d80",        // оливково-зелёный (тайга и ели)
    highlight: "rgba(130, 90, 220, 0.2)", // приглушённое фиолетовое свечение
    textHighlight: "#baa0ff88", // мягкий фиолетовый маркер
  },
  darkMode: {
    light: "#0f1418",           // очень тёмный холодный фон
    lightgray: "#242c33",       // тёмные панели с зелёным оттенком
    gray: "#4b5c68",            // холодный серый
    darkgray: "#a3b8c9",        // светлый акцент
    dark: "#d8e4f0",            // холодный белый текст
    secondary: "#6d8a9b",       // холодный синий для ночи
    tertiary: "#7d998a",        // глубокий хвойный зелёный
    highlight: "rgba(130, 90, 220, 0.3)", // заметное фиолетовое свечение
    textHighlight: "#b8a0ff99", // полупрозрачный фиолетовый маркер
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
