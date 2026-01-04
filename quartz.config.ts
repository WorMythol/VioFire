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
    light: "#0b0b10",            // основной фон (не абсолютный чёрный)
    lightgray: "#14141c",        // вторичный фон / панели
    gray: "#1f1f2a",             // карточки / разделители
    darkgray: "#8f6bff",         // активные элементы / hover
    dark: "#e6e6f0",             // ОСНОВНОЙ ТЕКСТ (высокая читаемость)
    secondary: "#8000ff",        // VioFire — основной акцент
    tertiary: "#ff4f8b",         // огненный акцент
    highlight: "rgba(128, 0, 255, 0.35)", // мягкое свечение
    textHighlight: "#c7b3ff",    // подсветка текста без выжигания
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
      Plugin.CustomOgImages({
        colorScheme: "lightMode", // what colors to use for generating image, same as theme colors from config, valid values are "darkMode" and "lightMode"
        width: 1200, // width to generate with (in pixels)
        height: 630, // height to generate with (in pixels)
        excludeRoot: false, // wether to exclude "/" index path to be excluded from auto generated images (false = use auto, true = use default og image)
        imageStructure: defaultImage, // custom image component to use
      }),
    ],
  },
}

export default config
