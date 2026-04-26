"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["136708"], {
94824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ringtone_kit_guide_ringtone_introduction_ringtone_introduction_md_80d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ringtone-kit-guide-ringtone-introduction-ringtone-introduction-md-80d.json
var site_docs_ringtone_kit_guide_ringtone_introduction_ringtone_introduction_md_80d_namespaceObject = JSON.parse('{"id":"ringtone-kit-guide/ringtone-introduction/ringtone-introduction","title":"Ringtone Kit简介","description":"Ringtone Kit（铃声服务）是一个用于设置铃声的工具库。通过使用Ringtone Kit，开发者可以在HarmonyOS应用中提供铃声设置的功能，为用户提供简单一致、安全高品质的铃声设置体验。","source":"@site/docs/ringtone-kit-guide/ringtone-introduction/ringtone-introduction.md","sourceDirName":"ringtone-kit-guide/ringtone-introduction","slug":"/ringtone-kit-guide/ringtone-introduction/","permalink":"/harmonyos-docs-site/ringtone-kit-guide/ringtone-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Ringtone Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ringtone-introduction","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MediaAssetManager请求媒体资源(C/C++)","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/"},"next":{"title":"设置铃声","permalink":"/harmonyos-docs-site/ringtone-kit-guide/ringtone-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ringtone-kit-guide/ringtone-introduction/ringtone-introduction.md


const frontMatter = {
	title: 'Ringtone Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ringtone-introduction',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Ringtone Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "使用限制",
  "id": "使用限制",
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
        id: "ringtone-kit简介",
        children: "Ringtone Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ringtone Kit（铃声服务）是一个用于设置铃声的工具库。通过使用Ringtone Kit，开发者可以在HarmonyOS应用中提供铃声设置的功能，为用户提供简单一致、安全高品质的铃声设置体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ringtone Kit支持将音频文件设置成多种铃声类型，满足各类铃声需求场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多种铃声类型：可设置来电铃声、通知铃声、信息铃声、闹钟铃声。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持双卡铃声：可对双卡分别设置不同来电铃声和信息铃声。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "铃声快捷管理：点击我的铃声按钮快速跳转“设置-声音与振动”管理铃声。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "铃声设置组件效果图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623506)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "720",
        height: "1584"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例仅支持标准系统上运行，支持设备：Phone，Tablet。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当不满足所需条件时，部分功能不可使用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当HarmonyOS设备无SIM卡槽时，来电铃声和信息铃声设置功能将不可用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置的铃声最大时长为5分钟。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
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
623506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958610-3e3e967aaa33009b69153f8d2cca194f.jpg");

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