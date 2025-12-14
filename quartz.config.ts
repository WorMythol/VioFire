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
    light: "#f0e6ff",           // неоново-фиолетовый свет
    lightgray: "#d8c8ff",       // лавандовые границы
    gray: "#b090ff",            // яркий средний фиолет
    darkgray: "#8050d0",        // глубокий неоновый акцент
    dark: "#4000a0",            // ультра-тёмный фиолетовый текст
    secondary: "#00ffff",       // циан неон (контраст духов)
    tertiary: "#ff00ff",        // магента для магии
    highlight: "rgba(150, 50, 255, 0.4)", // пульсирующее свечение
    textHighlight: "#ff88ffcc", // яркий неоновый маркер
  },
  darkMode: {
    light: "#0a001a",           // космическая чернота
    lightgray: "#1e0f3a",       // тёмный космос
    gray: "#5020a0",            // средний неон
    darkgray: "#a070ff",        // светлый акцент
    dark: "#e0c0ff",            // неоновый текст
    secondary: "#00aaff",       // яркий циан
    tertiary: "#ff60ff",        // магента свечение
    highlight: "rgba(150, 50, 255, 0.6)", // мощное неоновое свечение
    textHighlight: "#ff90ffdd", // супер-яркий маркер
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
