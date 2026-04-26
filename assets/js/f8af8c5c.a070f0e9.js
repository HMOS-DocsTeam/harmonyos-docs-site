"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["621036"], {
155449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_add_arkts_ui_widget_open_formmanager_arkts_ui_widget_open_formmanager_md_f8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-add-arkts-ui-widget-open-formmanager-arkts-ui-widget-open-formmanager-md-f8a.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_add_arkts_ui_widget_open_formmanager_arkts_ui_widget_open_formmanager_md_f8a_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/arkts-ui-widget-open-formmanager","title":"应用内拉起卡片管理加桌","description":"从API version 18开始，Form Kit提供在应用内将ArkTS卡片添加到桌面的能力，以方便用户后续便捷查看信息或快速进入应用。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/arkts-ui-widget-open-formmanager.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用内拉起卡片管理加桌","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-open-formmanager","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片编辑概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/"},"next":{"title":"锁屏卡片开发指导","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/arkts-ui-widget-open-formmanager.md


const frontMatter = {
	title: '应用内拉起卡片管理加桌',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-open-formmanager',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内拉起卡片管理加桌';

const assets = {

};



const toc = [{
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用内拉起卡片管理加桌",
        children: "应用内拉起卡片管理加桌"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，Form Kit提供在应用内将ArkTS卡片添加到桌面的能力，以方便用户后续便捷查看信息或快速进入应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出示例，实现如下功能：在应用内点击“添加卡片到桌面”按钮，拉起卡片管理页面。用户可在卡片管理页面，点击“添加至桌面”按钮，此时在桌面即可看到新添加的卡片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
            children: "创建卡片"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovideropenformmanager18",
            children: "openFormManager"
          }), "方法在应用内添加拉起卡片管理页面入口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/Index.ets\nimport { formProvider } from '@kit.FormKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want } from '@kit.AbilityKit';\nimport { promptAction } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // 添加拉起卡片管理页面按钮\n        Button($r('app.string.open_form_manager_button'))\n          .onClick(() => {\n            const want: Want = {\n              bundleName: \"com.samples.formmanagerdemo\",\n              abilityName: 'EntryFormAbility',\n              parameters: {\n                'ohos.extra.param.key.form_dimension': 2,\n                'ohos.extra.param.key.form_name': 'widget',\n                'ohos.extra.param.key.module_name': 'entry'\n              },\n            };\n            try {\n              // 点击按钮后调用openFormManager方法，拉起卡片管理页面\n              formProvider.openFormManager(want);\n            } catch (error) {\n              promptAction.openToast({ message: (error as BusinessError).message });\n              hilog.info(DOMAIN, 'testTag', 'catch error ', 'code:', (error as BusinessError).code, 'message:',\n                (error as BusinessError).message);\n            }\n          })\n          .margin({ top: 10, bottom: 10 })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源文件如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/element/string.json\n{\n  \"string\": [\n    {\n      \"name\": \"open_form_manager_button\",\n      \"value\": \"添加应用卡片到桌面\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可在卡片管理页面，点击“添加至桌面”或者“添加至负一屏”，此时在桌面或者负一屏即可看到新添加的卡片。结果示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(71146)/* ["default"] */.A) + "",
            width: "522",
            height: "1080"
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
71146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958300-c0ac72ce23007243756a50368ea9f622.gif");

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