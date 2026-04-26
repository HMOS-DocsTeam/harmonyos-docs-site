"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["593168"], {
932998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_create_pageability_create_pageability_md_06b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-create-pageability-create-pageability-md-06b.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_create_pageability_create_pageability_md_06b_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability/create-pageability","title":"创建PageAbility","description":"通过DevEco Studio开发平台创建PageAbility时，DevEco Studio会在app.js/app.ets中默认生成onCreate()和onDestroy()方法，其他方法需要开发者自行实现。接口说明参见PageAbility的生命周期，创建PageAbility示例如下：","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability/create-pageability.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"创建PageAbility","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-pageability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PageAbility的启动模式","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/"},"next":{"title":"启动本地PageAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/start-local-pageability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability/create-pageability.md


const frontMatter = {
	title: '创建PageAbility',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-pageability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建PageAbility';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
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
        id: "创建pageability",
        children: "创建PageAbility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过DevEco Studio开发平台创建PageAbility时，DevEco Studio会在app.js/app.ets中默认生成onCreate()和onDestroy()方法，其他方法需要开发者自行实现。接口说明参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle",
        children: "PageAbility的生命周期"
      }), "，创建PageAbility示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'MainAbility';\nconst domain: number = 0xFF00;\n\nclass MainAbility {\n  onCreate() {\n    // 获取context并调用相关方法\n    let context = featureAbility.getContext();\n    context.getBundleName((data, bundleName) => {\n      hilog.info(domain, TAG, 'ability bundleName:' ,bundleName);\n    });\n    hilog.info(domain, TAG, 'Application onCreate');\n  }\n\n  onDestroy() {\n    hilog.info(domain, TAG, 'Application onDestroy');\n  }\n\n  onShow(): void {\n    hilog.info(domain, TAG, 'Application onShow');\n  }\n\n  onHide(): void {\n    hilog.info(domain, TAG, 'Application onHide');\n  }\n\n  onActive(): void {\n    hilog.info(domain, TAG, 'Application onActive');\n  }\n\n  onInactive(): void {\n    hilog.info(domain, TAG, 'Application onInactive');\n  }\n\n  onNewWant() {\n    hilog.info(domain, TAG, 'Application onNewWant');\n  }\n}\n\nexport default new MainAbility();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility创建成功后，其abilities相关的配置项在config.json中体现，一个名字为EntryAbility的config.json配置文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [\n      {\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"action.system.home\"\n            ]\n          }\n        ],\n        \"orientation\": \"unspecified\",\n        \"formsEnabled\": false,\n        \"name\": \".MainAbility\",\n        \"srcLanguage\": \"ets\",\n        \"srcPath\": \"MainAbility\",\n        \"icon\": \"$media:icon\",\n        \"description\": \"$string:MainAbility_desc\",\n        \"label\": \"$string:MainAbility_label\",\n        \"type\": \"page\",\n        \"visible\": true,\n        \"launchType\": \"singleton\"\n      },\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#fa%E6%A8%A1%E5%9E%8B",
        children: "FA模型"
      }), "中，可以通过featureAbility的getContext接口获取应用上下文，进而使用上下文提供的能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " featureAbility接口说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getContext()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过getContext获取应用上下文并获取分布式目录的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport fileIo from '@ohos.file.fs';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PagePageAbilityFirst';\nconst domain: number = 0xFF00;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(async (): Promise<void> => {\n  let dir: string;\n  try {\n    hilog.info(domain, TAG, 'Begin to getOrCreateDistributedDir');\n    dir = await featureAbility.getContext().getOrCreateDistributedDir();\n    promptAction.showToast({\n      message: dir\n    });\n    hilog.info(domain, TAG, 'distribute dir is ' + dir);\n    let fd: number;\n    let path = dir + '/a.txt';\n    fd = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE).fd;\n    fileIo.close(fd);\n  } catch (error) {\n    hilog.error(domain, TAG, 'getOrCreateDistributedDir failed with : ' + error);\n  }\n})()\n"
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