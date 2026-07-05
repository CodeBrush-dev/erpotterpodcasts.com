// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.erpotterpodcasts.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.erpotterpodcasts.com/","title_tag":"Bible study podcasts & Scripture insights | E R Potter","meta_description":"Bible study podcasts, Psalm studies, and Christian living insights from E R Potter, veteran of 45 years of foreign missionary work in Brazil and Portugal."},{"page_url":"https://www.erpotterpodcasts.com/videos","title_tag":"Bible study podcasts & Christian living insights | E R Potter","meta_description":"Watch Bible study podcast vlogs with Scripture insights and Christian living applications from E R Potter, including episodes with Portuguese subtitles."},{"page_url":"https://www.erpotterpodcasts.com/links","title_tag":"Harrison Arkansas church & Portugal missionary | E R Potter","meta_description":"Links to Union Baptist Church in Harrison, Arkansas, Funchal Baptist Church in Portugal, and resources from Portugal missionary and Bible teacher E R Potter."},{"page_url":"https://www.erpotterpodcasts.com/about","title_tag":"foreign missionary work & Scripture insights | E R Potter","meta_description":"Learn about E R Potter’s 45 years of foreign missionary work in Brazil and Portugal, his language studies, and his passion for Scripture insights and Bible teaching."},{"page_url":"https://www.erpotterpodcasts.com/contact","title_tag":"Bible study podcasts & Christian living insights | E R Potter","meta_description":"Contact E R Potter about Bible study podcasts, Scripture insights, Christian living resources, and his foreign missionary work in Brazil and Madeira, Portugal."},{"page_url":"https://www.erpotterpodcasts.com/gmtm-podcast","title_tag":"foreign missionary work & Portugal missionary | E R Potter","meta_description":"Give Me This Mountain podcast shares E R Potter’s story of foreign missionary work as a Portugal missionary and church planter serving Brazil and Madeira Island."},{"page_url":"https://www.erpotterpodcasts.com/ttww-podcast","title_tag":"Bible study podcasts & Psalm studies | E R Potter","meta_description":"These Things Were Written podcast offers Bible study podcasts with Psalm studies and Scripture insights for deeper Christian living from teacher E R Potter."},{"page_url":"https://www.erpotterpodcasts.com/itlt-podcast","title_tag":"idolatry in America & Scripture insights | E R Potter","meta_description":"In Times Like These podcast explores idolatry in America, Minnesota issues, and current events through Scripture insights and Bible exposition from E R Potter."},{"page_url":"https://www.erpotterpodcasts.com/whistle-stop-podcast","title_tag":"Christian living insights & Scripture insights | E R Potter","meta_description":"Whistle Stops podcast delivers short Bible study podcasts with Christian living insights, Scripture insights, and practical applications from E R Potter."}],"keywords":["Bible study podcasts","Christian living insights","foreign missionary work","Portugal missionary","Minnesota issues","idolatry in America","Scripture insights","Psalm studies","E R Potter","Harrison Arkansas church"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.erpotterpodcasts.com/#blog",
  "url": "https://www.erpotterpodcasts.com/",
  "name": "E R Potter Podcasts | Bible study",
  "description": "Bible study blogs and podcasts on Christian living, and 45 years of foreign missionary work in Brazil and Madeira, Portugal.",
  "inLanguage": "en",
  "publisher": {
    "@type": "Person",
    "name": "Edgar Potter",
    "alternateName": "E R Potter",
    "description": "Bible teacher, missionary, and podcaster with 45 years of foreign missionary work in Brazil and Madeira, Portugal.",
    "url": "https://www.erpotterpodcasts.com/",
    "email": "ed@erpotterpodcasts.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/5367cc_32a8d15288594ba18fe34cc55c8dce5a%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/5367cc_32a8d15288594ba18fe34cc55c8dce5a%7Emv2.png"
    }
  },
  "author": {
    "@type": "Person",
    "name": "Edgar Potter",
    "alternateName": "E R Potter",
    "url": "https://www.erpotterpodcasts.com/",
    "email": "ed@erpotterpodcasts.com"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://static.wixstatic.com/media/5367cc_32a8d15288594ba18fe34cc55c8dce5a%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/5367cc_32a8d15288594ba18fe34cc55c8dce5a%7Emv2.png"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.erpotterpodcasts.com/"
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "TTWW-22 Managing the Minneapolis Madness",
      "name": "TTWW-22 Managing the Minneapolis Madness",
      "description": "A Bible-based look at the unrest in Minneapolis, arguing that immigration and deportation are not the core issues and exploring Psalm 144 as the key to understanding the city’s problems.",
      "author": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "publisher": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "datePublished": "2026-02-06",
      "articleSection": "Society and culture",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.erpotterpodcasts.com/"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "ITLT-17-E Idolatry in America - Part 2 Our Incurable Disease",
      "name": "ITLT-17-E Idolatry in America - Part 2 Our Incurable Disease",
      "description": "Continuation of a study on idolatry in America, examining a fatal spiritual disease that medical science cannot cure and reflecting on modern gods such as entertainment, sports, money, politics, and health and fitness.",
      "author": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "publisher": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "datePublished": "2025-12-04",
      "articleSection": "Society and culture",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.erpotterpodcasts.com/"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "ITLT-16-E Idolatry in America - Part I Our Latest False God",
      "name": "ITLT-16-E Idolatry in America - Part I Our Latest False God",
      "description": "An exploration of contemporary idolatry in America, contrasting it with Catholic cultures like Portugal and Brazil and discussing the rise of a new false god in modern society.",
      "author": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "publisher": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "datePublished": "2025-11-24",
      "articleSection": "Society and culture",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.erpotterpodcasts.com/"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "TTWW-19-E Our Subtle Selfishness in Serving God",
      "name": "TTWW-19-E Our Subtle Selfishness in Serving God",
      "description": "A reflection on how subtle selfishness can creep into Christian service, drawing on insights from the book of Psalms, a favorite biblical book for many believers.",
      "author": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "publisher": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "datePublished": "2025-09-01",
      "articleSection": "Life lessons",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.erpotterpodcasts.com/"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "TTWW-18-E - Christian Nationalism: The Faith of a Few vs. the Fears of Many",
      "name": "TTWW-18-E - Christian Nationalism: The Faith of a Few vs. the Fears of Many",
      "description": "A discussion of Christian nationalism, considering how the faith of a few interacts with the fears of many, and explaining why individuals are rarely called out by name in sermons and podcasts.",
      "author": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "publisher": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "datePublished": "2025-08-25",
      "articleSection": "Society and culture",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.erpotterpodcasts.com/"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "TTWW-17 Just what is an \"idle\" word? A study of the word Jesus used",
      "name": "TTWW-17 Just what is an \"idle\" word? A study of the word Jesus used",
      "description": "A word study on what Jesus meant by an \"idle\" word, comparing Bible translations and reflecting on the difference between dirty vs. clean and good vs. better translations.",
      "author": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "publisher": {
        "@type": "Person",
        "name": "Edgar Potter"
      },
      "datePublished": "2025-08-17",
      "articleSection": "Bible study",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.erpotterpodcasts.com/"
      }
    }
  ],
  "review": {
    "@type": "Review",
    "reviewBody": "...a dedication to Scripture and thought-provoking insights...a passion for Scripture with a unique perspective",
    "author": {
      "@type": "Person",
      "name": "Reader comment"
    }
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
