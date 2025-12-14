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
    light: "#fdf8f2",           // тёплый кремовый фон
    lightgray: "#f0e6d9",       // светло-бежевый
    gray: "#d0b8a0",            // приглушённый коричневатый
    darkgray: "#8a6b4e",        // тёмно-коричневый акцент
    dark: "#3d2a1a",            // глубокий коричневый текст
    secondary: "#a66b3e",       // тёплый оранжево-коричневый (очаг, дерево)
    tertiary: "#b08a6b",        // охра/песочный
    highlight: "rgba(220, 160, 100, 0.18)", // тёплое золотистое свечение
    textHighlight: "#ffb84d88", // оранжевый маркер текста
  },
  darkMode: {
    light: "#1a130f",           // тёмно-коричневый фон (ночь у камина)
    lightgray: "#2d231b",       // тёмные деревянные панели
    gray: "#5a4535",            // средний коричневый
    darkgray: "#c0a080",        // светлый бежевый акцент
    dark: "#f0e0d0",            // тёплый белый текст
    secondary: "#d08a50",       // яркий тёплый оранжевый
    tertiary: "#c09b78",        // мягкий песочный
    highlight: "rgba(220, 160, 100, 0.3)", // золотистое свечение
    textHighlight: "#ffca8099", // оранжевый маркер
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
