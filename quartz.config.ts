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
    light: "#e0f0ff",           // холодный ледяной фон
    lightgray: "#c0e0ff",       // светло-голубые стены
    gray: "#80c0ff",            // средний неон-голубой
    darkgray: "#4080c0",        // тёмный акцент
    dark: "#002040",            // глубокий синий текст
    secondary: "#ff4080",       // розовый неон (шестерёнки)
    tertiary: "#40ffc0",        // бирюзовый (механизмы)
    highlight: "rgba(255, 64, 128, 0.25)", // розовое свечение
    textHighlight: "#ff80c0aa", // неоновый маркер
  },
  darkMode: {
    light: "#000810",           // чёрный с синим отливом
    lightgray: "#101820",       // тёмные катакомбы
    gray: "#304060",            // средний
    darkgray: "#80a0ff",        // светлый неон
    dark: "#c0e0ff",            // голубой текст
    secondary: "#ff6090",       // яркий розовый
    tertiary: "#60ffd0",        // яркая бирюза
    highlight: "rgba(255, 64, 128, 0.45)", // мощное розовое свечение
    textHighlight: "#ff90d0bb", // яркий маркер
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
