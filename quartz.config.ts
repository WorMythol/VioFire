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
    light: "#fafcfd",           // почти белый с лёгким голубым оттенком
    lightgray: "#e5ebf0",       // холодный светло-серый
    gray: "#b8c7d0",            // серебристо-серый
    darkgray: "#5e7a8a",        // серо-голубой акцент
    dark: "#1e2d3d",            // тёмно-синий текст
    secondary: "#4a7c9b",       // холодный голубой (ледяной ветер)
    tertiary: "#8aa7b8",        // приглушённый ледяной серо-голубой
    highlight: "rgba(150, 200, 240, 0.18)", // лёгкое ледяное свечение
    textHighlight: "#a0d0ff88", // голубой маркер текста
  },
  darkMode: {
    light: "#0f141a",           // глубокий тёмно-синий фон
    lightgray: "#1e2a34",       // тёмные холодные панели
    gray: "#445a6e",            // средний серо-синий
    darkgray: "#9ab8d0",        // светлый акцент для читаемости
    dark: "#d8e4f2",            // холодный белый текст
    secondary: "#6a9bc0",       // яркий ледяной голубой
    tertiary: "#8ab0c9",        // мягкий ледяной
    highlight: "rgba(150, 200, 240, 0.3)", // заметное ледяное свечение
    textHighlight: "#b0d8ff99", // голубой маркер
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
