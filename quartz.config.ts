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
    light: "#fff0e0",           // тёплый персиковый свет
    lightgray: "#ffe0c0",       // оранжевые отблески
    gray: "#d8a080",            // приглушённый оранжевый
    darkgray: "#a05030",        // тёмно-багровый
    dark: "#401000",            // глубокий красный текст
    secondary: "#c04000",       // яркий закатный оранжевый
    tertiary: "#ff8040",        // золотисто-оранжевый
    highlight: "rgba(255, 100, 50, 0.3)", // огненное свечение
    textHighlight: "#ff8040aa", // оранжевый маркер
  },
  darkMode: {
    light: "#180800",           // тёмный багровый фон
    lightgray: "#301000",       // тёмные тени
    gray: "#602000",            // средний
    darkgray: "#ff9060",        // светлый оранжевый акцент
    dark: "#ffd0b0",            // тёплый текст
    secondary: "#ff5020",       // яркий огонь
    tertiary: "#ffa070",        // золотой
    highlight: "rgba(255, 80, 30, 0.5)", // мощное пламя
    textHighlight: "#ffb080bb", // огненный маркер
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
