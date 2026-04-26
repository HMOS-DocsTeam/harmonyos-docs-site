"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["405630"], {
464136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_assetdownload_faq_graphics_accelerate_assetdownload_faq_10_graphics_accelerate_assetdownload_faq_10_md_793_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-assetdownload-faq-graphics-accelerate-assetdownload-faq-10-graphics-accelerate-assetdownload-faq-10-md-793.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_assetdownload_faq_graphics_accelerate_assetdownload_faq_10_graphics_accelerate_assetdownload_faq_10_md_793_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-10/graphics-accelerate-assetdownload-faq-10","title":"若开发者在游戏中使用Unity Addressables资源管理框架，如何集成游戏资源包后台下载功能？","description":"Addressables资源加载机制是根据Addressables的缓存文件判定资源包是否已下载，若未下载再通过游戏资源包后台下载功能把资源文件下载到Addressables的缓存目录下。集成步骤如下：","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-10/graphics-accelerate-assetdownload-faq-10.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-10","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-10/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-10/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"若开发者在游戏中使用Unity Addressables资源管理框架，如何集成游戏资源包后台下载功能？","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-faq-10","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"是否可以申请长时任务，在游戏前台下载资源包过程中切后台时免冻结并继续下载资源包？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-9/"},"next":{"title":"通过加载内存镜像启动的游戏会全屏显示来电提醒，应该如何避免？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-10/graphics-accelerate-assetdownload-faq-10.md


const frontMatter = {
	title: '若开发者在游戏中使用Unity Addressables资源管理框架，如何集成游戏资源包后台下载功能？',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-faq-10',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '若开发者在游戏中使用Unity Addressables资源管理框架，如何集成游戏资源包后台下载功能？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "若开发者在游戏中使用unity-addressables资源管理框架如何集成游戏资源包后台下载功能",
        children: "若开发者在游戏中使用Unity Addressables资源管理框架，如何集成游戏资源包后台下载功能？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Addressables资源加载机制是根据Addressables的缓存文件判定资源包是否已下载，若未下载再通过游戏资源包后台下载功能把资源文件下载到Addressables的缓存目录下。集成步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在游戏资源包下载的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadcontentrequest",
            children: "onDownloadContentRequest"
          }), "生命周期函数中："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "下载远端服务器上的Addressables的资源索引hash文件，与本地Addressables的hash文件做对比。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若hash值不一样，则表示有热更资源，准备进行资源更新，下载远端服务器上的Addressables的资源索引文件catalog.json文件。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将远端的catalog.json文件以及本地的catalog.json文件，按照catalog解析规则（具体可参考Addressables源码中ContentCatalogData.cs的解析实现）解析其中关键字段，diff后获取下载资源包列表信息。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["把需要下载的资源列表信息转换成游戏资源包下载的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadconfig",
                children: "AssetDownloadConfig"
              }), "对象返回给系统。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "把catalog.json，catalog.hash以及GroupData.json文件存放在Addressables目标目录下，目录地址参考如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/data/app/el2/<USERID>/base/<PACKAGENAME>/haps/entry/files/com.unity.addressables\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在游戏资源包下载的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadsucceeded",
            children: "onBackgroundDownloadSucceeded"
          }), "生命周期函数中："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成下载的资源文件按照Addressables缓存文件规则，转移到Addressables缓存目录下。缓存目录参考如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 缓存目录规则：{缓存根目录}/{资源名称}/{资源哈希值}\n/data/app/el2/<USERID>/base/<PACKAGENAME>/haps/entry/files/TuanjieCache/Shared/feda8eb785f66e8cbfd86bda86dd111e/d73e91fc7611459d41ea88e823492c08\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);