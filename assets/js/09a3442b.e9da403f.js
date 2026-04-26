"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["832619"], {
394149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_ime_kit_intro_ime_kit_intro_md_09a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-ime-kit-intro-ime-kit-intro-md-09a.json
var site_docs_ime_kit_ime_kit_intro_ime_kit_intro_md_09a_namespaceObject = JSON.parse('{"id":"ime-kit/ime-kit-intro/ime-kit-intro","title":"IME Kit简介","description":"IME Kit 负责建立编辑框所在应用与输入法应用之间的通信通道，确保两者可以共同协作提供文本输入功能，也为系统应用提供管理输入法应用的能力。","source":"@site/docs/ime-kit/ime-kit-intro/ime-kit-intro.md","sourceDirName":"ime-kit/ime-kit-intro","slug":"/ime-kit/ime-kit-intro/","permalink":"/harmonyos-docs-site/ime-kit/ime-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"IME Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ime-kit-intro","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JS卡片开发指导（FA模型）","permalink":"/harmonyos-docs-site/form-kit/form-js-ui/widget-development-fa/"},"next":{"title":"实现一个输入法应用","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-application-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/ime-kit-intro/ime-kit-intro.md


const frontMatter = {
	title: 'IME Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ime-kit-intro',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'IME Kit简介';

const assets = {

};



const toc = [{
  "value": "Kit使用场景",
  "id": "kit使用场景",
  "level": 2
}, {
  "value": "框架原理",
  "id": "框架原理",
  "level": 2
}, {
  "value": "功能特点",
  "id": "功能特点",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "IME Kit API参考",
  "id": "ime-kit-api参考",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ime-kit简介",
        children: "IME Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IME Kit 负责建立编辑框所在应用与输入法应用之间的通信通道，确保两者可以共同协作提供文本输入功能，也为系统应用提供管理输入法应用的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kit使用场景",
      children: "Kit使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IME Kit提供输入法框架和输入法服务两类API。用于实现输入法应用，也可以用于实现自绘编辑框以及实现对输入法应用的控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "框架原理",
      children: "框架原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(384430)/* ["default"] */.A) + "",
        width: "650",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能特点",
      children: "功能特点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入法应用："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持创建固定态、悬浮态、状态栏三种类型的Panel，可支持开发一个输入法应用同时部署在手机、平板等多设备中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义编辑框："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持开发者自定义编辑框，实现绑定输入法应用，并实现输入法应用的文字输入、删除、选中、光标移动等操作。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供输入法服务相关API，用于输入法应用，包括：创建软键盘窗口、插入/删除字符、选中文本、监听物理键盘按键事件等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供输入法框架相关API，可用于自绘编辑框，包括绑定输入法，实现输入、删除、选中、光标移动等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供系统应用管理输入法应用能力，实现对输入法应用的控制，包括显示/隐藏输入法软键盘、切换输入法、获取所有输入法列表。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI: IME Kit在输入法软键盘和自绘编辑框时使用ArkUI提供的部分组件、事件、动效、状态管理等能力，例如Text、Button组件，onClick点击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对切换输入法应用的系统API，需要申请系统权限，部分API仅支持当前输入法应用调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
        children: "模拟器与真机的差异"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ime-kit-api参考",
      children: "IME Kit API参考"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine",
          children: "inputMethodEngine"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod",
          children: "inputMethod"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-ability/js-apis-inputmethod-extension-ability",
          children: "InputMethodExtensionAbility"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-context/js-apis-inputmethod-extension-context",
          children: "InputMethodExtensionContext"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethodlist/js-apis-inputmethodlist",
          children: "inputMethodList"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-subtype/js-apis-inputmethod-subtype",
          children: "InputMethodSubtype"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-panel/js-apis-inputmethod-panel",
          children: "inputMethod.Panel"
        })
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
384430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798666-efa166f52b77d25fca723656236b8b09.png");

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