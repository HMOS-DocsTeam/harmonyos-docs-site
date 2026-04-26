"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["143309"], {
577165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_security_components_pastebutton_pastebutton_md_783_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-security-components-pastebutton-pastebutton-md-783.json
var site_docs_system_security_access_control_security_components_pastebutton_pastebutton_md_783_namespaceObject = JSON.parse('{"id":"system-security/access-control/security-components/pastebutton/pastebutton","title":"使用粘贴控件","description":"粘贴控件是一种特殊的系统安全控件，它允许应用在用户的授权下静默读取剪贴板数据。","source":"@site/docs/system-security/access-control/security-components/pastebutton/pastebutton.md","sourceDirName":"system-security/access-control/security-components/pastebutton","slug":"/system-security/access-control/security-components/pastebutton/","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/pastebutton/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用粘贴控件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pastebutton","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"安全控件概述","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/security-component-overview/"},"next":{"title":"使用保存控件","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/savebutton/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/security-components/pastebutton/pastebutton.md


const frontMatter = {
	title: '使用粘贴控件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pastebutton',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用粘贴控件';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
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
    img: "img",
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
        id: "使用粘贴控件",
        children: "使用粘贴控件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粘贴控件是一种特殊的系统安全控件，它允许应用在用户的授权下静默读取剪贴板数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集成粘贴控件后，单击该控件时，应用读取剪贴板数据不会弹窗提示。适用于任何需要读取剪贴板的应用场景，避免弹窗干扰用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，用户在应用外（如短信）复制了验证码，要在应用内粘贴验证码。用户原来在进入应用后，还需要长按输入框、在弹出的选项中点击粘贴，才能完成输入。而使用粘贴控件，用户只需进入应用后直接点击粘贴按钮，即可一步到位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粘贴控件效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(81086)/* ["default"] */.A) + "",
        width: "624",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "临时授权会持续到灭屏、应用切后台或应用退出时终止。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在授权期间的调用次数无限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为了保障用户隐私，应用需确保安全控件可见且可识别。开发者应合理配置控件的尺寸和颜色等属性，避免视觉混淆。若因控件样式不合法导致授权失败请检查设备错误日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以简化用户填写验证码为例，参考以下步骤：单击控件获取临时授权，将内容粘贴到文本框。效果图见上文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入剪贴板依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { pasteboard } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加输入框和粘贴控件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "粘贴控件是一种类似按钮的安全控件，由图标、文本和背景组成。其中，背景是必选的，而图标和文本至少需要选择其一。图标和文本不支持自定义，仅能在已有的选项中选择。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用安全控件的接口时，分为传参和不传参两种情况。不传参时，默认创建包含图标、文本和背景的按钮；传参时，根据传入的参数创建按钮，不包含未配置的元素。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前示例使用了默认参数。具体详情，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-pastebutton/ts-security-components-pastebutton",
            children: "PasteButton控件"
          }), "。此外，所有安全控件均继承了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-securitycomponent-attributes/ts-securitycomponent-attributes",
            children: "安全控件通用属性"
          }), "，可用于自定义样式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { pasteboard, BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  build() {\n    Row() {\n      Column({ space: 10 }) {\n        TextInput({ placeholder: $r('app.string.input_verify_code'), text: this.message })\n          .onChange((val: string) => {\n            this.message = val;\n          })\n        PasteButton()\n          .padding({top: 12, bottom: 12, left: 24, right: 24})\n          .onClick((event: ClickEvent, result: PasteButtonOnClickResult) => {\n            if (PasteButtonOnClickResult.SUCCESS === result) {\n              pasteboard.getSystemPasteboard().getData((err: BusinessError, pasteData: pasteboard.PasteData) => {\n                if (err) {\n                  console.error(`Failed to get paste data. Code is ${err.code}, message is ${err.message}`);\n                  return;\n                }\n                this.message = pasteData.getPrimaryText();\n              });\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
81086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798710-f6d14ded9379551b4560592ee7472772.gif");

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