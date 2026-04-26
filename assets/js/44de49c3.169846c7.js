"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["538958"], {
662006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_codelinter_compatibility_ide_api_compatibility_check_ide_api_compatibility_check_md_44d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-codelinter-compatibility-ide-api-compatibility-check-ide-api-compatibility-check-md-44d.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_codelinter_compatibility_ide_api_compatibility_check_ide_api_compatibility_check_md_44d_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check/ide-api-compatibility-check","title":"@compatibility/api-compatibility-check","description":"从DevEco Studio 6.0.1 Beta1开始，Code Linter新增版本兼容性规则扫描。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check/ide-api-compatibility-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@compatibility/api-compatibility-check","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-api-compatibility-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@correctness/redundant-dependency-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-redundant-dependency-check/"},"next":{"title":"代码重构","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-refactoring/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check/ide-api-compatibility-check.md


const frontMatter = {
	title: '@compatibility/api-compatibility-check',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-api-compatibility-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@compatibility/api-compatibility-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "compatibilityapi-compatibility-check",
        children: "@compatibility/api-compatibility-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，Code Linter新增版本兼容性规则扫描。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程代码中调用的API版本比工程配置中的compatibleSdkVersion版本高，可能会导致兼容性问题。建议添加代码报错措施，消除兼容性问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@compatibility/api-compatibility-check\": \"warn\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例一"
        })
      }), "：API调用前，增加SDK版本判断。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataUriUtils } from '@kit.AbilityKit';\nimport { deviceInfo } from '@kit.BasicServicesKit';\n\n@Component\nstruct Test {\n  build() {\n    Text('hello').onClick(() => {\n      // 使用接口前增加SDK版本的判断，SDK版本计算方式具体请参考应用升级targetSDKVersion兼容低版本指导\n      if (deviceInfo.distributionOSApiVersion >= 60000) {\n        dataUriUtils.getId('');\n      }\n\n      // 使用接口前增加SDK版本的判断\n      if (deviceInfo.sdkApiVersion >= 20) {\n        dataUriUtils.getId('');\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例二"
        })
      }), "：API调用前，增加判空。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataUriUtils } from '@kit.AbilityKit';\n\n@Component\nstruct Test {\n  build() {\n    Text(\"hello\").onClick(() => {\n      // 判空\n      if (dataUriUtils.getId !== undefined) {\n        dataUriUtils.getId('');\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例三"
        })
      }), "：API调用前，使用try-catch异常处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataUriUtils } from '@kit.AbilityKit'\n\n@Component\nstruct Test {\n  build() {\n    Text('hello').onClick(() => {\n      // 使用try-catch语法\n      try {\n        dataUriUtils.getId('');\n      } catch (error) {\n        // 异常处理\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程中compatibleSdkVersion配置为5.0.5(17)\nimport { ScrollEffectType } from '@kit.UIDesignKit';\n\n@Component\nstruct Test {\n  build() {\n    Text('hello').onClick(() => {\n      // ScrollEffectType.COMMON_BLUR从5.1.0(18)开始支持，不可直接调用\n      const value = ScrollEffectType.COMMON_BLUR\n      console.info(value.toString())\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@compatibility/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
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