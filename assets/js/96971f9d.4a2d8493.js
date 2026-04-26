"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["499805"], {
224964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_introduction_store_introduction_md_969_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-introduction-store-introduction-md-969.json
var site_docs_store_kit_guide_store_introduction_store_introduction_md_969_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-introduction/store-introduction","title":"AppGallery Kit简介","description":"AppGallery Kit（应用市场服务）提供应用市场业务的对外开放能力，可以更好地支持应用的下载、推荐和分发等场景以提高在应用市场上的曝光度，以及为开发者提供便捷高效的数字商品服务的接入流程和交互体验，助力开发者商业变现。","source":"@site/docs/store-kit-guide/store-introduction/store-introduction.md","sourceDirName":"store-kit-guide/store-introduction","slug":"/store-kit-guide/store-introduction/","permalink":"/harmonyos-docs-site/store-kit-guide/store-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AppGallery Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"鲸鸿动能Ads Kit个人数据处理说明","permalink":"/harmonyos-docs-site/ads-kit-guide/description-of-personal-data/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-introduction/store-introduction.md


const frontMatter = {
	title: 'AppGallery Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'AppGallery Kit简介';

const assets = {

};



const toc = [{
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "appgallery-kit简介",
        children: "AppGallery Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppGallery Kit（应用市场服务）提供应用市场业务的对外开放能力，可以更好地支持应用的下载、推荐和分发等场景以提高在应用市场上的曝光度，以及为开发者提供便捷高效的数字商品服务的接入流程和交互体验，助力开发者商业变现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AppGallery Kit为您的应用和应用内数字商品提供以下功能和服务："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-iap/store-iap-introduction",
            children: "数字商品服务"
          })
        })
      }), "：指华为为开发者的数字商品的管理、交易、售后提供的平台能力和服务，助力您实现数字商品交易和结算。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-productview",
            children: "应用市场推荐"
          })
        })
      }), "：用户可直达您的应用市场详情页或卡片加桌页面，有效提高您的应用曝光率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts",
            children: "产品特性按需分发"
          })
        })
      }), "：实现应用多子业务独立演进，能够提供动态分发和资源拆分，帮助提高分发效率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-erms",
            children: "生态查询服务"
          })
        })
      }), "：您可查询您的元服务/应用是通过何种场景被打开的，您还可基于场景值，做更多的业务设计和拓展。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-update",
            children: "应用市场更新功能"
          })
        })
      }), "：您可以通过本服务查询应用是否有可更新的版本。当存在可更新版本时，可为用户在应用内显示更新提醒。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-attribution/store-attribution-introduction",
            children: "应用归因服务"
          })
        })
      }), "：您可通过本服务判断用户下载应用和使用应用的原因，借助归因数据分析营销效果，评估多渠道商业价值和优化商业策略。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/store-privacy",
            children: "隐私管理服务"
          })
        })
      }), "：为用户提供统一隐私弹框，您可通过本服务查询隐私链接、隐私签署状态、撤销用户已同意签署的隐私协议记录。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/appgallery-appinfo/appgallery-appinfo-manage",
            children: "图标管理服务"
          })
        })
      }), "：您可以通过本服务管理动态图标，包括查询可选动态图标、切换动态图标、恢复默认图标。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/store-kit-guide/appgallery-comment",
            children: "应用评论服务"
          })
        })
      }), "：您可以通过本服务对应用进行评论，在应用内拉起应用评分弹窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数字商品服务"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-introduction#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AE%BE%E5%A4%87",
              children: "支持的设备"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "产品特性按需分发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "生态查询服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场更新功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、Wearable、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用归因服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "隐私管理服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图标管理服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet、Wearable、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用评论服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的国家/地区"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数字商品服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "产品特性按需分发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "生态查询服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用归因服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "隐私管理服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用评论服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场更新功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution-appendix/appgallery-support-regions",
              children: "支持的国家/地区"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图标管理服务"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution-appendix/appgallery-support-regions",
              children: "支持的国家/地区"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持数字商品服务、应用市场推荐、生态查询服务、应用市场更新功能、应用评论服务、图标管理服务，不支持端云交互。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该指南涉及到的示例代码均为片段，全量示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/appgallerykit-samplecode-clientdemo-arkts",
        children: "Samplecode"
      }), "。"]
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