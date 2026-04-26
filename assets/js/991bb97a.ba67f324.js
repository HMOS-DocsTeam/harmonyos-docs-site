"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["561036"], {
240474(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_app_integration_cannkit_compiling_the_napi_cannkit_compiling_the_napi_md_991_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-on-device-deployment-cannkit-app-integration-cannkit-compiling-the-napi-cannkit-compiling-the-napi-md-991.json
var site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_app_integration_cannkit_compiling_the_napi_cannkit_compiling_the_napi_md_991_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi/cannkit-compiling-the-napi","title":"配置项目NAPI","description":"编译HAP时，NAPI层的so需要编译依赖NDK中的libneural\\\\network\\\\core.so和libhiai\\\\_foundation.so。","source":"@site/docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi/cannkit-compiling-the-napi.md","sourceDirName":"cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi","slug":"/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"配置项目NAPI","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-compiling-the-napi","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建项目","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-creating-a-project/"},"next":{"title":"集成模型","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi/cannkit-compiling-the-napi.md


const frontMatter = {
	title: '配置项目NAPI',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-compiling-the-napi',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '配置项目NAPI';

const assets = {

};



const toc = [{
  "value": "头文件引用",
  "id": "头文件引用",
  "level": 2
}, {
  "value": "编写CMakeLists.txt",
  "id": "编写cmakeliststxt",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "配置项目napi",
        children: "配置项目NAPI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译HAP时，NAPI层的so需要编译依赖NDK中的libneural_network_core.so和libhiai_foundation.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "头文件引用",
      children: "头文件引用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按需引用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime",
        children: "NNCore"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h",
        children: "CANN Kit"
      }), "的头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"neural_network_runtime/neural_network_core.h\"\n#include \"CANNKit/hiai_options.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编写cmakeliststxt",
      children: "编写CMakeLists.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(CANNDemo)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\ninclude_directories(${HMOS_SDK_NATIVE}/sysroot/usr/lib)\nFIND_LIBRARY(cann-lib hiai_foundation)\n\nadd_library(entry SHARED Classification.cpp HIAIModelManager.cpp)\n\ntarget_link_libraries(entry PUBLIC libace_napi.z.so\n    libhilog_ndk.z.so\n    librawfile.z.so\n    ${cann-lib}\n    libneural_network_core.so\n    )\n"
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