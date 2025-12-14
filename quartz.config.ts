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
    light: "#f5f0ff",           // очень мягкий лавандово-белый фон (не ослепляет)
    lightgray: "#e8e0ff",       // приглушённые границы, почти белые с лёгким фиолетом
    gray: "#c8b8ff",            // спокойный средний фиолет (меньше насыщенности)
    darkgray: "#a080ff",        // мягкий акцент, не агрессивный
    dark: "#6030c8",            // тёмно-фиолетовый текст — отличная читаемость на светлом фоне
    secondary: "#00d0ff",       // циан чуть приглушён, но всё ещё яркий неоновый контраст
    tertiary: "#ff60ff",        // магента осталась сочной для магических элементов
    highlight: "rgba(160, 100, 255, 0.25)", // свечение духов мягче и полупрозрачнее
    textHighlight: "#e0c0ff88", // маркер текста стал нежнее, не вырвиглазный
  },
  darkMode: {
    light: "#0f0022",
    lightgray: "#22183d",
    gray: "#6040c0",
    darkgray: "#b090ff",
    dark: "#e5d5ff",            // чуть смягчил текст для лучшей гармонии
    secondary: "#00c0ff",
    tertiary: "#ff80ff",
    highlight: "rgba(170, 90, 255, 0.45)",
    textHighlight: "#f0c0ffaa",
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
