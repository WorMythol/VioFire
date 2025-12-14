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
    light: "#f8f5fb",           // очень лёгкий фиолетово-белый фон (мягкий свет тайги)
    lightgray: "#e7e2ed",       // серо-фиолетовый для границ и фонов
    gray: "#b8afc9",            // приглушённый серый с фиолетовым подтоном
    darkgray: "#6a5687",        // тёмно-фиолетово-серый для акцентов
    dark: "#2d1b4a",            // глубокий тёмно-фиолетовый для основного текста
    secondary: "#3e6278",       // холодный сине-зелёный (цвет хвои и реки)
    tertiary: "#718a80",        // приглушённый лесной зелёный (тайга, ели)
    highlight: "rgba(148, 94, 255, 0.18)", // полупрозрачный фиолетовый хайлайт (свечение духов)
    textHighlight: "#d4a5ff88", // мягкий фиолетовый маркер текста
  },
  darkMode: {
    light: "#14101f",           // глубокий тёмно-фиолетовый фон (ночь в тайге)
    lightgray: "#2b2339",       // тёмный серо-фиолетовый для панелей
    gray: "#5c4e7a",            // средний фиолетово-серый
    darkgray: "#b8a6d9",        // светлее для хорошей читаемости акцентов
    dark: "#e8e0ff",            // почти белый текст с лёгким фиолетовым оттенком
    secondary: "#6890b0",       // холодный голубовато-зелёный (ночные реки и горы)
    tertiary: "#7a998c",        // тёмный лесной зелёный
    highlight: "rgba(148, 94, 255, 0.28)", // более насыщенный фиолетовый хайлайт в темноте
    textHighlight: "#c89aff88", // яркий фиолетовый маркер текста
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
