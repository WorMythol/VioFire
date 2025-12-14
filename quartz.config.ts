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
    light: "#fdfbff",           // почти белый фон с лёгким лавандовым оттенком (чистый и не ослепляет)
    lightgray: "#f0e8ff",       // мягкие границы/панели
    gray: "#d0c0ff",            // средний серо-фиолетовый для второстепенного текста
    darkgray: "#9060e0",        // акцент для иконок/ссылок
    dark: "#401080",            // основной текст — насыщенный тёмно-фиолетовый (отличный контраст!)
    secondary: "#00a0ff",       // циан неон для ярких акцентов (духи, кнопки)
    tertiary: "#e040ff",        // магента для магии
    highlight: "rgba(160, 80, 255, 0.25)", // мягкое свечение
    textHighlight: "#d8b0ff88", // нежный маркер текста
  },
  darkMode: {
    light: "#0f0022",
    lightgray: "#22183d",
    gray: "#6040c0",
    darkgray: "#b090ff",
    dark: "#e5d5ff",
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
