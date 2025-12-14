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
    light: "#f0e8ff",           // мягкий неоново-лавандовый фон
    lightgray: "#ddd0ff",       // чуть приглушённые лавандовые границы
    gray: "#b8a0ff",            // средний фиолет (меньше насыщенности)
    darkgray: "#8a60d8",        // глубокий, но не агрессивный акцент
    dark: "#4a1aa8",            // тёмно-фиолетовый текст — читаемый и не режет глаза
    secondary: "#00e0ff",       // циан чуть приглушён (всё ещё яркий контраст)
    tertiary: "#ff40ff",        // магента чуть мягче
    highlight: "rgba(160, 80, 255, 0.35)", // свечение духов осталось заметным, но мягче
    textHighlight: "#e8b0ff88", // маркер текста стал полупрозрачнее и приятнее
  },
  darkMode: {
    light: "#0f0022",           // глубокая космическая чернота с лёгким фиолетовым отливом
    lightgray: "#22183d",       // тёмные панели
    gray: "#6040c0",            // средний неон, но спокойнее
    darkgray: "#b090ff",        // светлый акцент для читаемости
    dark: "#e0d0ff",            // основной текст — мягкий неоново-лавандовый (очень комфортный)
    secondary: "#00c0ff",       // яркий циан остался контрастным
    tertiary: "#ff80ff",        // магента свечение чуть приглушено
    highlight: "rgba(170, 90, 255, 0.45)", // мощное, но не ослепляющее свечение
    textHighlight: "#f0c0ffaa", // маркер яркий, но не агрессивный
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
