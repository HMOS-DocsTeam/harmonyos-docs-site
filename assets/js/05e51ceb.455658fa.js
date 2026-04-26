"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["565914"], {
482310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_customization_ide_hvigor_compilation_options_customizing_ide_hvigor_compilation_options_customizing_sample_ide_hvigor_compilation_options_customizing_sample_md_05e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-customization-ide-hvigor-compilation-options-customizing-ide-hvigor-compilation-options-customizing-sample-ide-hvigor-compilation-options-customizing-sample-md-05e.json
var site_docs_ide_build_customization_ide_hvigor_compilation_options_customizing_ide_hvigor_compilation_options_customizing_sample_ide_hvigor_compilation_options_customizing_sample_md_05e_namespaceObject = JSON.parse('{"id":"ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/ide-hvigor-compilation-options-customizing-sample","title":"实践说明","description":"应用正式对外发布版本前，需要对应用进行代码调试。调试和正式发布版本，两者编译行为可能不同。此时，可以利用buildMode能力，来定制两个版本的编译差异性。","source":"@site/docs/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/ide-hvigor-compilation-options-customizing-sample.md","sourceDirName":"ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample","slug":"/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实践说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-compilation-options-customizing-sample","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"能力说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide/"},"next":{"title":"能力说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/ide-hvigor-compilation-options-customizing-sample.md


const frontMatter = {
	title: '实践说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-compilation-options-customizing-sample',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '实践说明';

const assets = {

};



const toc = [{
  "value": "工程级build-profile.json5示例",
  "id": "工程级build-profilejson5示例",
  "level": 2
}, {
  "value": "模块级build-profile.json5示例",
  "id": "模块级build-profilejson5示例",
  "level": 2
}, {
  "value": "entry模块",
  "id": "entry模块",
  "level": 3
}, {
  "value": "指定构建模式",
  "id": "指定构建模式",
  "level": 2
}, {
  "value": "命令行",
  "id": "命令行",
  "level": 3
}, {
  "value": "DevEco Studio界面",
  "id": "deveco-studio界面",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实践说明",
        children: "实践说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用正式对外发布版本前，需要对应用进行代码调试。调试和正式发布版本，两者编译行为可能不同。此时，可以利用buildMode能力，来定制两个版本的编译差异性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设其中构建产物均为default，但编译行为不同：release模式下使能混淆，debug模式下使能debug调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例工程中包含一个模块entry，将entry模块交付到构建产物default中，模块定制两种不同的编译模式debug、release，将两种构建模式均绑定到构建产物default中。工程示例图如下（模块）："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650400)/* ["default"] */.A) + "",
        width: "1143",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工程级build-profilejson5示例",
      children: "工程级build-profile.json5示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"signingConfigs\": [],\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"strictMode\": {\n            \"caseSensitiveCheck\": true,\n            \"useNormalizedOHMUrl\": true\n          }\n        }\n      }\n    ],\n    \"buildModeSet\": [\n      {\n        \"name\": \"debug\"\n      },\n      {\n        \"name\": \"release\"\n      }\n    ]\n  },\n  \"modules\": [\n    {\n      \"name\": \"entry\",\n      \"srcPath\": \"./entry\",\n      \"targets\": [\n        {\n          \"name\": \"default\",\n          \"applyToProducts\": [\n            \"default\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块级build-profilejson5示例",
      children: "模块级build-profile.json5示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entry模块",
      children: "entry模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n  },\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"\n            ]\n          }\n        }\n      }\n    },\n    {\n      \"name\": \"debug\",\n      \"debuggable\": true,\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": false\n          }\n        }\n      }\n    }\n  ],\n  \"buildModeBinder\": [\n    {\n      \"buildModeName\": \"release\",\n      \"mappings\": [\n        {\n          \"buildOptionName\": \"release\",\n          \"targetName\": \"default\"\n        }\n      ]\n    },\n    {\n      \"buildModeName\": \"debug\",\n      \"mappings\": [\n        {\n          \"buildOptionName\": \"debug\",\n          \"targetName\": \"default\"\n        }\n      ]\n    }\n  ],\n  \"targets\": [\n    {\n      \"name\": \"default\",\n    },\n    {\n      \"name\": \"ohosTest\",\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定构建模式",
      children: "指定构建模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令行",
      children: "命令行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：构建APP时，构建产物为default，指定构建模式为debug，可执行如下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --mode project -p product=default -p buildMode=debug assembleApp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译产物示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(565101)/* ["default"] */.A) + "",
        width: "312",
        height: "347"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：构建APP时，构建产物为default，指定构建模式为release，可执行如下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --mode project -p product=default -p buildMode=release assembleApp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译产物示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432754)/* ["default"] */.A) + "",
        width: "279",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio界面",
      children: "DevEco Studio界面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio界面进行可视化配置，Build Mode下拉选择对应配置选项debug后，点击Build -> Build Hap(s)/APP(s) -> Build APP(s) ，构建编译模式为debug，构建产物为default的APP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(536844)/* ["default"] */.A) + "",
        width: "527",
        height: "350"
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
536844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752690-b2acb498ea39cb889561c0c3783605b9.png");

},
650400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752694-0dfcfdda492c737c422063287fe7c5b8.png");

},
565101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752631-8da88b5d72a29d539eb382d581fbfd61.png");

},
432754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912684-f9c7acae6a6b9ffaeaf19d6f1439eb25.png");

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