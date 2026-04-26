"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["449531"], {
205309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_features_pen_stylus_interaction_pen_stylus_interaction_md_efd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-features-pen-stylus-interaction-pen-stylus-interaction-md-efd.json
var site_docs_system_hardware_pen_kit_guide_pen_features_pen_stylus_interaction_pen_stylus_interaction_md_efd_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/pen-stylus-interaction","title":"接入手写交互","description":"接入手写交互功能，对于需要接入支持双击/轻捏功能的手写笔的第三方应用，可以通过调用下面相应接口来监听手写笔双击/轻捏事件，从而触发自身应用内部回调，来执行指定操作。","source":"@site/docs/system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/pen-stylus-interaction.md","sourceDirName":"system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction","slug":"/system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"接入手写交互","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-stylus-interaction","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入全局取色","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/"},"next":{"title":"接入全局取色","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-features/pen-stylus-interaction/pen-stylus-interaction.md


const frontMatter = {
	title: '接入手写交互',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-stylus-interaction',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入手写交互';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "手写笔轻捏事件",
  "id": "手写笔轻捏事件",
  "level": 2
}, {
  "value": "手写笔双击事件",
  "id": "手写笔双击事件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接入手写交互",
        children: "接入手写交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入手写交互功能，对于需要接入支持双击/轻捏功能的手写笔的第三方应用，可以通过调用下面相应接口来监听手写笔双击/轻捏事件，从而触发自身应用内部回调，来执行指定操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stylusInteraction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractiononsqueeze",
              children: "on"
            }), "(type: 'squeeze', receiver: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#squeezeevent",
              children: "SqueezeEvent"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听手写笔轻捏事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stylusInteraction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractionoffsqueeze",
              children: "off"
            }), "(type: 'squeeze', receiver?: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#squeezeevent",
              children: "SqueezeEvent"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听手写笔轻捏事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stylusInteraction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractionondoubletap",
              children: "on"
            }), "(type: 'doubleTap', receiver: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#doubletapevent",
              children: "DoubleTapEvent"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听手写笔双击事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stylusInteraction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractionoffdoubletap",
              children: "off"
            }), "(type: 'doubleTap', receiver?: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#doubletapevent",
              children: "DoubleTapEvent"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听手写笔双击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手写笔轻捏事件",
      children: "手写笔轻捏事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { stylusInteraction } from '@kit.Penkit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听手写笔轻捏事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  stylusInteraction.on('squeeze', (event: stylusInteraction.SqueezeEvent) => {\n    console.info(`got squeeze event, time: ${event.timestamp}`);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消监听手写笔轻捏事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  stylusInteraction.off('squeeze', (event: stylusInteraction.SqueezeEvent) => {\n    console.info(`off squeeze event, time: ${event.timestamp}`);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手写笔双击事件",
      children: "手写笔双击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入相关模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { stylusInteraction } from '@kit.Penkit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.监听手写笔双击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  stylusInteraction.on('doubleTap', (event: stylusInteraction.DoubleTapEvent) => {\n    console.info(`got doubleTap event, time: ${event.timestamp}`);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.取消监听手写笔双击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  stylusInteraction.off('doubleTap', (event: stylusInteraction.DoubleTapEvent) => {\n    console.info(`off doubleTap event, time: ${event.timestamp}`);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
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