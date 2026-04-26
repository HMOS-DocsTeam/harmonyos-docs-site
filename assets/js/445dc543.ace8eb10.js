"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["306164"], {
972895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_intent_panel_start_intent_panel_md_445_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-specified-type-app-redirection-start-intent-panel-start-intent-panel-md-445.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_intent_panel_start_intent_panel_md_445_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/start-intent-panel","title":"拉起指定类型的应用概述","description":"本章节主要介绍拉起方应用如何通过指定应用类型、而非某个具体的应用，来实现应用跳转。通常有以下几种方式：","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/start-intent-panel.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel","slug":"/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"拉起指定类型的应用概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-intent-panel","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用链接说明","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/"},"next":{"title":"拉起导航类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel/start-intent-panel.md


const frontMatter = {
	title: '拉起指定类型的应用概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-intent-panel',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起指定类型的应用概述';

const assets = {

};



const toc = [{
  "value": "通过startAbilityByType接口拉起垂类应用选择框",
  "id": "通过startabilitybytype接口拉起垂类应用选择框",
  "level": 2
}, {
  "value": "实现机制",
  "id": "实现机制",
  "level": 3
}, {
  "value": "匹配规则",
  "id": "匹配规则",
  "level": 3
}, {
  "value": "通过mailto方式跳转电子邮件应用",
  "id": "通过mailto方式跳转电子邮件应用",
  "level": 2
}, {
  "value": "通过startAbility接口打开文件",
  "id": "通过startability接口打开文件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "拉起指定类型的应用概述",
        children: "拉起指定类型的应用概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节主要介绍拉起方应用如何通过指定应用类型、而非某个具体的应用，来实现应用跳转。通常有以下几种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87startabilitybytype%E6%8E%A5%E5%8F%A3%E6%8B%89%E8%B5%B7%E5%9E%82%E7%B1%BB%E5%BA%94%E7%94%A8%E9%80%89%E6%8B%A9%E6%A1%86",
          children: "通过startAbilityByType接口拉起垂类应用选择框"
        }), "：调用startAbilityByType接口拉起对应的垂类应用选择框（目前支持拉起导航、金融、邮件、航班、快递类应用）。选择框中将展示已接入的垂类应用，由用户选择打开指定的目标应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87mailto%E6%96%B9%E5%BC%8F%E8%B7%B3%E8%BD%AC%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E5%BA%94%E7%94%A8",
          children: "通过mailto方式跳转电子邮件应用"
        }), "：通过mailto电子邮件协议，可以创建指向电子邮件地址的超链接，方便用户通过网页或应用中的超链接直接跳转电子邮件应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%9A%E8%BF%87startability%E6%8E%A5%E5%8F%A3%E6%89%93%E5%BC%80%E6%96%87%E4%BB%B6",
          children: "通过startAbility接口打开文件"
        }), "：开发者可以通过调用startAbility接口，由系统从已安装的应用中寻找符合要求的应用，打开特定类型的文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过startabilitybytype接口拉起垂类应用选择框",
      children: "通过startAbilityByType接口拉起垂类应用选择框"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现机制",
      children: "实现机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过特定的业务类型如导航、金融、邮件等，调用startAbilityByType接口拉起对应的垂类应用选择框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果当前设备已安装应用中存在匹配的应用，选择框中将展示已接入的垂类应用，由用户选择打开指定应用以实现相应的意图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(418024)/* ["default"] */.A) + "",
            width: "1045",
            height: "212"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果当前设备已安装应用中没有匹配的应用，系统将自动弹窗提示用户没有相关应用（下图以导航类应用匹配失败为例）。无需开发者适配。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(201656)/* ["default"] */.A) + "",
            width: "378",
            height: "181"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种方式可以为调用方提供统一的安全、可信的目标方应用，同时降低调用方的接入成本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "匹配规则",
      children: "匹配规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybytype11",
        children: "UIAbilityContext.startAbilityByType"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession#startabilitybytype11",
        children: "UIExtensionContentSession.startAbilityByType"
      }), "接口支持基于业务类型拉起垂类应用选择框。调用方通过指定业务类型即可拉起对应的垂类应用选择框。选择框上将展示已接入的垂类应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统会根据调用方在startAbilityByType接口传入的type与wantParams.sceneType取值，按照如下映射关系，匹配到在module.json5配置文件中声明了对应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
        children: "linkFeature"
      }), "的目标应用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "支持的功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "调用方（startAbilityByType接口入参）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "目标方（配置文件linkFeature取值）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路线规划功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：navigation  - wantParams.sceneType：1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoutePlan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "导航功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：navigation  - wantParams.sceneType：2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "位置搜索功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：navigation  - wantParams.sceneType：3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PlaceSearch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转账汇款功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：finance  - wantParams.sceneType：1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "信用卡还款功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：finance  - wantParams.sceneType：2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreditCardRepayment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "撰写邮件功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：mail  - wantParams.sceneType：1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ComposeMail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "按航班号查询航班功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：flight  - wantParams.sceneType：1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QueryByFlightNo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "按起降地查询航班功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：flight  - wantParams.sceneType：2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QueryByLocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "快递查询功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- type：express  - wantParams.sceneType：1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QueryExpress"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过mailto方式跳转电子邮件应用",
      children: "通过mailto方式跳转电子邮件应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过mailto电子邮件协议，可以创建指向电子邮件地址的超链接，方便用户通过网页或应用中的超链接直接跳转电子邮件应用。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto",
        children: "拉起邮件类应用（mailto方式）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过startability接口打开文件",
      children: "通过startAbility接口打开文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调用startAbility接口，由系统从已安装的应用中寻找符合要求的应用，打开特定类型的文件。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup",
        children: "拉起文件处理类应用"
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
418024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957504-56daba12b13ea4f773cfd6ef4f7c4f7a.png");

},
201656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477505-9362d7d8acedf5f97ee93ed9f25d6848.png");

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