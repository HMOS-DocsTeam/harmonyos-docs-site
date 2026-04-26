"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["410212"], {
431072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_introduction_ads_introduction_md_3e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-introduction-ads-introduction-md-3e9.json
var site_docs_ads_kit_guide_ads_introduction_ads_introduction_md_3e9_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-introduction/ads-introduction","title":"Ads Kit简介","description":"Ads Kit（广告服务）依托华为终端平台与数据能力为您提供流量变现服务，帮助您解决流量变现的难题；同时为广告主提供广告服务，配合华为终端平台向用户提供个性化的营销活动或商业广告。","source":"@site/docs/ads-kit-guide/ads-introduction/ads-introduction.md","sourceDirName":"ads-kit-guide/ads-introduction","slug":"/ads-kit-guide/ads-introduction/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Ads Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/account-kit-guide/account-appendix/account-appendix-support-regions/"},"next":{"title":"Ads Kit术语","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-kit-glossary/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-introduction/ads-introduction.md


const frontMatter = {
	title: 'Ads Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Ads Kit简介';

const assets = {

};



const toc = [{
  "value": "流量变现服务",
  "id": "流量变现服务",
  "level": 2
}, {
  "value": "开放匿名设备标识服务",
  "id": "开放匿名设备标识服务",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
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
        id: "ads-kit简介",
        children: "Ads Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ads Kit（广告服务）依托华为终端平台与数据能力为您提供流量变现服务，帮助您解决流量变现的难题；同时为广告主提供广告服务，配合华为终端平台向用户提供个性化的营销活动或商业广告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流量变现服务",
      children: "流量变现服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鲸鸿动能流量变现服务（以下简称流量变现服务）是广告服务依托华为终端强大的平台与数据能力为您提供的App流量变现服务，您通过该服务可以在自己的App中获取并向用户展示精美的、高价值的广告内容，并从中获得广告收益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为满足App不同场景下的内容形式，流量变现服务为您提供了横幅广告、原生广告、激励广告、插屏广告、开屏广告、贴片广告六种广告形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开放匿名设备标识服务",
      children: "开放匿名设备标识服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ads Kit提供开放匿名设备标识符和转化跟踪能力，方便广告平台和广告主进行个性化广告投放和广告转化渠道跟踪。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开放匿名设备标识符（Open Anonymous Device Identifier, OAID，以下简称OAID）：是一种非永久性设备标识符，基于开放匿名设备标识符，可在保护用户个人数据隐私安全的前提下，向用户提供个性化广告，同时三方监测平台也可以向广告主提供转化归因分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "流量变现服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "满足开发者在不同场景下，基于六种广告形式的设计需求。具体详情请参见下方表格。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "广告形式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "展示形式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "应用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "横幅广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "图片"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以通知栏或矩形固定展示在应用内页面顶部、中部或底部，适合用于用户停留较久或者访问频繁的页面。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "原生广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "图片、视频"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "界面内插入广告，与媒体内容无缝融合。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "激励广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "视频"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "游戏通关、复活、获取道具、积分、继续机会、人物技能升级时等展示。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "插屏广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "图片、视频"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "游戏或流媒体开启、暂停、过关、跳转、加载、退出时弹出。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "开屏广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "图片、视频"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "打开App时，以开屏形式全屏展现，展示时长3s-5s，展示完毕后自动关闭并进入应用主页面。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "贴片广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "图片、视频"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "前贴：视频播放前。  中贴：视频播放中。  后贴：视频播放结束后。  说明：您可以根据自身需求设置广告的播放时长。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开放匿名设备标识服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持广告平台、开发者、三方监测平台及广告主基于不同场景的使用。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "场景"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "使用对象"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "基于OAID的个性化广告"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告平台"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告平台可基于OAID，向用户提供更加个性化的营销活动或商业广告，提升转化效果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "基于OAID进行变现"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开发者"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "您需要按照广告平台的接入流程接入广告平台，即可在华为手机上进行个性化的广告展示和流量变现。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "基于OAID的转化归因分析"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "三方监测平台"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "三方监测平台可基于OAID，分析广告的曝光、点击事件和App激活、注册等后向转化交互事件，对广告投放效果进行归因分析。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "流量变现服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开放匿名设备标识服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、TV。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的国家/地区"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用限制说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "流量变现服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "横幅广告尺寸暂只支持宽360vp* 高57vp和宽360vp*高144vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "流量变现服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与华为联运的游戏应用禁止接入鲸鸿动能平台以外的其他广告平台、插件、SDK等。其他类型的应用允许接入鲸鸿动能平台且不受此限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开放匿名设备标识服务（OAID、App转化跟踪参数）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta5版本开始，本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
        children: "模拟器与真机的差异"
      }), "”。"]
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