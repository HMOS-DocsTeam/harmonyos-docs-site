"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["98538"], {
89823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_h_5_scenario_fusion_h_5_md_a27_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-tripartiteframework-scenario-fusion-h-5-scenario-fusion-h-5-md-a27.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_h_5_scenario_fusion_h_5_md_a27_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5/scenario-fusion-h5","title":"H5接入智能填充","description":"本章节介绍在ArkWeb的Web组件加载H5文件如何实现智能填充功能。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5/scenario-fusion-h5.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"H5接入智能填充","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-h5","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ContentType使用场景说明","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-appendix/"},"next":{"title":"React Native框架+H5接入智能填充","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5/scenario-fusion-h5.md


const frontMatter = {
	title: 'H5接入智能填充',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-h5',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'H5接入智能填充';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "效果图",
  "id": "效果图",
  "level": 2
}, {
  "value": "示例代码一",
  "id": "示例代码一",
  "level": 2
}, {
  "value": "示例代码二",
  "id": "示例代码二",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "h5接入智能填充",
        children: "H5接入智能填充"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍在ArkWeb的Web组件加载H5文件如何实现智能填充功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备智能填充开关必须处于打开状态，请前往“设置 > 隐私和安全 > 智能填充”页面开启开关。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备已连接互联网并且登录华为账号。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该应用需已接入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill#%E7%94%B3%E8%AF%B7%E6%8E%A5%E5%85%A5%E6%99%BA%E8%83%BD%E5%A1%AB%E5%85%85%E6%9C%8D%E5%8A%A1",
          children: "智能填充服务"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果图",
      children: "效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(130433)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码一",
      children: "示例代码一"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过ArkWeb的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web组件"
      }), "加载H5文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      // 在组件创建过程中加载HTML5文件。\n      Web({ src: $rawfile(\"autofill_h5.html\"), controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码二",
      children: "示例代码二"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["autofill_h5.html如下所示。其中通过给form表单的input输入框（form表单的子节点）配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship#h5-autocomplete%E5%92%8Charmonyos%E7%9A%84contenttype%E7%9A%84%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",
        children: "autocomplete"
      }), "属性来支持智能填充，action需要配置表单提交接口链接，当form表单提交后，页面导航发生变化时，满足历史表单输入保存的条件时会触发对应弹窗。参考下面示例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!DOCTYPE html>\n<html>\n<head>\n    <meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;\" name=\"viewport\"/>\n    <title>智能填充H5测试</title>\n</head>\n<body>\n<h4>智能填充H5测试</h4>\n<!--The link of the form submission interface must be configured for the value of the action tag.-->\n<form method=\"POST\" action=\"\">\n    <label for=\"nickname\" style=\"width: 90px; display: inline-block; text-align: end;\">昵称:</label>\n    <!--Smart fill is supported by configuring the autocomplete attribute.-->\n    <input type=\"text\" id=\"nickname\" autocomplete=\"nickname\"/><br/><br/>\n    <label for=\"name\" style=\"width: 90px; display: inline-block; text-align: end;\">姓名:</label>\n    <input type=\"text\" id=\"name\" autocomplete=\"name\"/><br/><br/>\n    <label for=\"tel-national\" style=\"width: 90px; display: inline-block; text-align: end;\">手机号:</label>\n    <input type=\"number\" id=\"tel-national\" autocomplete=\"tel-national\"/><br/><br/>\n    <label for=\"email\" style=\"width: 90px; display: inline-block; text-align: end;\">邮箱:</label>\n    <input type=\"text\" id=\"email\" autocomplete=\"email\"/><br/><br/>\n    <label for=\"id-card-number\" style=\"width: 90px; display: inline-block; text-align: end;\">身份证号:</label>\n    <input type=\"number\" id=\"id-card-number\" autocomplete=\"id-card-number\"/><br/><br/>\n    <label for=\"street-address\" style=\"width: 90px; display: inline-block; text-align: end;\">带街道地址:</label>\n    <input type=\"text\" id=\"street-address\" autocomplete=\"street-address\"/><br/><br/>\n    <div align=\"center\">\n        <button type=\"submit\" style=\"width: 80px\">提交</button>\n    </div>\n</form>\n</body>\n</html>\n"
      })
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
130433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479159-110e8a43e6d701c975aba8691b2b8a70.png");

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