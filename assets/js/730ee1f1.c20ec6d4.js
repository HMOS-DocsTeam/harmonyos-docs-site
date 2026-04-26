"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["208198"], {
190662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_target_application_share_interface_description_share_interface_description_md_730_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-target-application-share-interface-description-share-interface-description-md-730.json
var site_docs_share_kit_guide_system_share_share_target_application_share_interface_description_share_interface_description_md_730_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-target-application/share-interface-description/share-interface-description","title":"应用内处理分享内容","description":"目标应用可以通过UIAbility构建接收分享内容的界面，并将应用显示到分享面板应用推荐区内，以实现将分享内容传递到目标应用内进行处理。开发时需要接入方实现UIAbility并于module.json5中注册支持分享内容的能力。","source":"@site/docs/share-kit-guide/system-share/share-target-application/share-interface-description/share-interface-description.md","sourceDirName":"share-kit-guide/system-share/share-target-application/share-interface-description","slug":"/share-kit-guide/system-share/share-target-application/share-interface-description/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-interface-description/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用内处理分享内容","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-interface-description","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取分享结果","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-share-completed/"},"next":{"title":"分享详情页处理分享内容","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-sec-panel/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-target-application/share-interface-description/share-interface-description.md


const frontMatter = {
	title: '应用内处理分享内容',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-interface-description',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内处理分享内容';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用内处理分享内容",
        children: "应用内处理分享内容"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目标应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "构建接收分享内容的界面，并将应用显示到分享面板应用推荐区内，以实现将分享内容传递到目标应用内进行处理。开发时需要接入方实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "并于module.json5中注册支持分享内容的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["getSharedData接口用于从want中获取分享数据；getContactInfo接口用于从want中获取联系人信息（仅当用户选择联系人分享时有返回值）。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-system-share/share-system-share#getshareddata",
        children: "接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 目标应用解析分享数据接口功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#getshareddata",
              children: "getSharedData"
            }), "(want: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-arkts-dep/ability-deprecated/js-apis-inner-ability-want/js-apis-inner-ability-want",
              children: "Want"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#shareddata",
              children: "SharedData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从want中获取分享数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#getcontactinfo",
              children: "getContactInfo"
            }), "(want: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-arkts-dep/ability-deprecated/js-apis-inner-ability-want/js-apis-inner-ability-want",
              children: "Want"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#contactinfo",
              children: "ContactInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从want中获取联系人信息"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { systemShare } from '@kit.ShareKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目标应用可实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "。在Ability被启动后，可以在其", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
            children: "onCreate"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
            children: "onNewWant"
          }), "回调中获取传入的want参数。将want参数通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/share-api/share-arkts/share-system-share/share-system-share#getshareddata",
            children: "getSharedData"
          }), "解析后得到分享数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class TestUIAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    systemShare.getSharedData(want)\n      .then((data: systemShare.SharedData) => {\n        data.getRecords().forEach((record: systemShare.SharedRecord) => {\n          // 处理分享数据\n        });\n      })\n      .catch((error: BusinessError) => {\n        console.error(`Failed to getSharedData. Code: ${error.code}, message: ${error.message}`);\n        this.context.terminateSelf();\n      });\n  }\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    windowStage.loadContent('pages/Index', (error) => {\n      if (error.code) {\n        console.error(`Failed to load the content. Code: ${error.code}, message: ${error.message}`);\n        return;\n      }\n      console.info('Succeeded in loading the content.');\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建完UIAbility，需要在应用配置文件（src/main/module.json5）的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "skills"
          }), "配置中注册。配置actions为ohos.want.action.sendData；uris需穷举所有支持的数据类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"abilities\": [\n  {\n    \"name\": \"TestUIAbility\",\n    \"srcEntry\": \"./ets/entryability/TestUIAbility.ets\",\n    \"description\": \"$string:EntryAbility_desc\",\n    \"icon\": \"$media:layered_image\",\n    \"label\": \"$string:EntryAbility_label\",\n    \"startWindowIcon\": \"$media:startIcon\",\n    \"startWindowBackground\": \"$color:start_window_background\",\n    \"exported\": true,\n    \"skills\": [\n      {\n        \"actions\": [\n          \"ohos.want.action.sendData\"\n        ],\n        // scheme为预留字段，在此处不生效，配置file仅为示例\n        // 目标应用在配置支持接收的数据类型时，需穷举支持的UTD，比如：支持全部图片类型，可声明：general.image\n        // maxFileSupported 对于归属指定类型的文件，标识一次支持接收的最大数量。默认为0，代表不支持此类文件的分享。\n        // 文件类型归属关系参考：@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)\n        \"uris\": [\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.text\",\n            \"maxFileSupported\": 1\n          },\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.png\",\n            \"maxFileSupported\": 1\n          },\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.jpeg\",\n            \"maxFileSupported\": 1\n          }\n        ]\n      }\n    ]\n  }\n]\n"
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