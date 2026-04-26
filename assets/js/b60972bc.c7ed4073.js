"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["960729"], {
919638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_multimodal_awareness_kit_userstatus_guidelines_userstatus_guidelines_md_b60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-multimodal-awareness-kit-userstatus-guidelines-userstatus-guidelines-md-b60.json
var site_docs_system_hardware_multimodal_awareness_kit_userstatus_guidelines_userstatus_guidelines_md_b60_namespaceObject = JSON.parse('{"id":"system-hardware/multimodal-awareness-kit/userstatus-guidelines/userstatus-guidelines","title":"用户状态感知开发指导","description":"UserStatus（用户状态感知）模块提供用户感知能力，可以感知到操作者特定状态，例如：检测用户年龄组。","source":"@site/docs/system-hardware/multimodal-awareness-kit/userstatus-guidelines/userstatus-guidelines.md","sourceDirName":"system-hardware/multimodal-awareness-kit/userstatus-guidelines","slug":"/system-hardware/multimodal-awareness-kit/userstatus-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/userstatus-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"用户状态感知开发指导","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/userstatus-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设备状态感知开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/devicestatus-guidelines/"},"next":{"title":"记忆链接开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/metadatabinding-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/multimodal-awareness-kit/userstatus-guidelines/userstatus-guidelines.md


const frontMatter = {
	title: '用户状态感知开发指导',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/userstatus-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '用户状态感知开发指导';

const assets = {

};



const toc = [{
  "value": "感知用户年龄组开发指导",
  "id": "感知用户年龄组开发指导",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
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
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "用户状态感知开发指导",
        children: "用户状态感知开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UserStatus（用户状态感知）模块提供用户感知能力，可以感知到操作者特定状态，例如：检测用户年龄组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-userstatus/js-apis-awareness-userstatus",
        children: "@ohos.multimodalAwareness.userStatus (用户状态感知)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "感知用户年龄组开发指导",
      children: "感知用户年龄组开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要获取用户年龄分类时，可以调用userStatus模块，例如判断设备具体操作者是儿童还是成年人。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持获取用户年龄组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type:'userAgeGroupDetected',callback:Callback<UserClassification>):void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅年龄群组检测功能，检测结果通过callback返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消年龄群组检测功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此功能如果设备不支持，将返回801错误码。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此功能涉及安全隐私，如需使用，请 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/support/feedback",
          children: "联系技术人员"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { userStatus } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义回调函数，监听年龄群组检测结果变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback : Callback<userStatus.UserClassification> = (data : userStatus.UserClassification) => {\n  console.info('callback succeeded, ageGroup:' + data.ageGroup + \", confidence:\" + data.confidence);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅年龄群组检测功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   userStatus.on('userAgeGroupDetected', callback);\n   console.info(\"on succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed on and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅年龄群组检测功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   userStatus.off('userAgeGroupDetected');\n   console.info(\"off succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed off and err code is \" + error.code);\n}\n"
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