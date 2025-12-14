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
    light: "#f8fbff",           // чистый снег с лёгким фиолетовым отблеском
    lightgray: "#e5eaff",       // серебристо-фиолетовый иней
    gray: "#b8c5e0",            // холодный серый с фиолетовым подтоном
    darkgray: "#6a78a8",        // зимний сумеречный акцент
    dark: "#2a3458",            // глубокий тёмно-фиолетово-синий текст
    secondary: "#3e6878",       // цвет заснеженной хвои ночью
    tertiary: "#5a8a7a",        // приглушённый зимний еловый зелёный
    highlight: "rgba(160, 140, 255, 0.22)", // мягкое свечение блуждающих огней в снегу
    textHighlight: "#d0c0ffaa", // фиолетово-серебряный маркер (как лунный свет на снегу)
  },
  darkMode: {
    light: "#0f141e",           // ночное зимнее небо над тайгой
    lightgray: "#1e2533",       // тёмные заснеженные панели
    gray: "#444d66",            // средний холодный серый
    darkgray: "#a0b0d8",        // серебристо-фиолетовый акцент (иней)
    dark: "#e0e8ff",            // лунный свет на снегу — текст
    secondary: "#588aab",       // холодный голубой (зимняя река подо льдом)
    tertiary: "#6a9988",        // тёмно-зелёный хвойный в ночи
    highlight: "rgba(170, 150, 255, 0.38)", // ярче свечение духов в зимней темноте
    textHighlight: "#d0c8ffcc", // праздничное фиолетовое сияние маркера
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
