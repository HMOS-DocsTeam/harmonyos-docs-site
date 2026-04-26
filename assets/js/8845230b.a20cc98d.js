"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["649826"], {
440536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_hvigor_multi_module_ide_hvigor_multi_module_md_884_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-hvigor-multi-module-ide-hvigor-multi-module-md-884.json
var site_docs_ide_hvigor_configuration_ide_hvigor_multi_module_ide_hvigor_multi_module_md_884_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-hvigor-multi-module/ide-hvigor-multi-module","title":"多模块管理","description":"模块是应用/元服务的基本功能单元，包含了源代码、资源文件、第三方库及应用/元服务配置文件，Hvigor支持工程多模块管理。您可在工程下的build-profile.json5配置文件中增加对应模块信息，即可对模块进行工程绑定和管理，或在hvigorconfig.ts脚本中动态添加或排除某个模块。同时也支持分模块配置、编译和打包。","source":"@site/docs/ide-hvigor-configuration/ide-hvigor-multi-module/ide-hvigor-multi-module.md","sourceDirName":"ide-hvigor-configuration/ide-hvigor-multi-module","slug":"/ide-hvigor-configuration/ide-hvigor-multi-module/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-multi-module/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"多模块管理","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-multi-module","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模块级build-profile.json5文件","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-build-profile/"},"next":{"title":"添加依赖项","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-dependencies/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-hvigor-multi-module/ide-hvigor-multi-module.md


const frontMatter = {
	title: '多模块管理',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-multi-module',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '多模块管理';

const assets = {

};



const toc = [{
  "value": "多模块配置",
  "id": "多模块配置",
  "level": 2
}, {
  "value": "静态配置模块",
  "id": "静态配置模块",
  "level": 3
}, {
  "value": "动态配置模块",
  "id": "动态配置模块",
  "level": 3
}, {
  "value": "分模块编译",
  "id": "分模块编译",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "多模块管理",
        children: "多模块管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块是应用/元服务的基本功能单元，包含了源代码、资源文件、第三方库及应用/元服务配置文件，Hvigor支持工程多模块管理。您可在工程下的build-profile.json5配置文件中增加对应模块信息，即可对模块进行工程绑定和管理，或在hvigorconfig.ts脚本中动态添加或排除某个模块。同时也支持分模块配置、编译和打包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多模块配置",
      children: "多模块配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态配置模块",
      children: "静态配置模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["工程级build-profile.json5配置文件中\"modules\"字段，用于记录工程下的模块信息，主要包含模块名称、模块的源码路径以及模块的 target 信息。target信息主要用于定制多目标构建产物，更多详细信息可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
        children: "配置多目标产物"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如以下目录中存在两个模块目录，您可在工程下的build-profile.json5配置文件，添加模块信息，使得模块与工程进行绑定："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "工程结构\n└─ .hvigor目录    // 构建项目的缓存文件目录，不需要开发者改动，可以删除\n└─ module1\n   └─ 模块源码文件\n   └─ build-profile.json5    // 模块级别的构建静态配置文件，主要用于定义当前模块的构建信息、hap(hsp、har)的构建行为等\n   └─ hvigorfile.ts    // 模块级别的构建动态自定义脚本，主要用于定义和扩展hap(hsp、har)的构建流程\n   └─ 其他配置文件\n└─ module2\n└─ hvigor目录\n   └─ hvigor-config.json5    // 构建引擎的配置文件，主要用于定义开发态版本号、依赖插件的版本以及Hvigor相关能力的配置等\n└─ build-profile.json5    // 工程级别的构建静态配置文件，主要用于定义整个项目的模块信息、应用信息、app的构建行为等\n└─ hvigorfile.ts    // 工程级别的构建动态自定义脚本，主要用于定义和扩展app的构建流程\n└─ 其他配置文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他配置文件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "oh-package.json5：应用的三方包依赖配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "local.properties: 应用本地环境配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obfuscation-rules.txt: 应用模块的混淆规则配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "consumer-rules.txt: HAR/HSP模块默认导出的混淆规则文件，会打包到HAR包中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程下的build-profile.json5文件中模块配置示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"modules\": [\n    {\n      \"name\": \"module1\", // 模块的名称。该名称需与module.json5文件中的module.name保持一致。在FA模型中，对应的文件为config.json。\n      \"srcPath\": \"./module1\" // 模块的源码路径，为模块根目录相对工程根目录的相对路径\n    },\n    {\n      \"name\": \"module2\",\n      \"srcPath\": \"./module2\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态配置模块",
      children: "动态配置模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hvigor支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section810245135914",
        children: "hvigorconfig.ts脚本"
      }), "中动态添加或排除某个模块，具体API及示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section7253174081515",
        children: "HvigorConfig"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分模块编译",
      children: "分模块编译"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor支持分模块编译和打包。您可以通过以下两种方式进行分模块构建："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中，选中需构建的模块目录后，点击Build菜单栏下的\"Make module 'module1'\"，其中\"module1\"根据具体工程模块名称显示；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio的Terminal中，指定模块进行编译。比如模块名称为entry，目标产物target为default，构建HAP模块，可执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw --mode module -p product=default -p module=entry@default assembleHap\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多构建HAR/HSP包命令，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-commandline#section9580122622012",
        children: "命令行工具"
      }), "章节。"]
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