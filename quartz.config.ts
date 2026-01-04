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
    light: "#f3efff",            // очень светлый фиолетовый фон
    lightgray: "#d8ccff",        // мягкий сиреневый
    gray: "#a080ff",             // приглушённый фиолетовый
    darkgray: "#5a2dcc",         // затемнённый фиолет
    dark: "#191919",             // тёмный текст / UI
    secondary: "#8000ff",        // ОСНОВНОЙ VioFire (фиолетовый огонь)
    tertiary: "#ff3d81",         // огненно-розовый акцент
    highlight: "rgba(128, 0, 255, 0.25)", // фиолетовое свечение
    textHighlight: "#b580ffcc",  // неоновый маркер
  },
  darkMode: {
    light: "#000000",            // абсолютная тьма
    lightgray: "#0f0f14",        // глубокий тёмный фон
    gray: "#191919",             // базовый тёмный UI
    darkgray: "#8000ff",         // светящийся фиолет
    dark: "#e0d7ff",             // светлый текст
    secondary: "#9a40ff",        // усиленный VioFire
    tertiary: "#ff4f8b",         // огонь / энергия
    highlight: "rgba(128, 0, 255, 0.45)", // интенсивное фиолетовое пламя
    textHighlight: "#c090ffdd",  // яркий маркер
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
