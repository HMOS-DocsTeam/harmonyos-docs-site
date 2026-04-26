"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["287614"], {
695209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_display_manager_displaymanager_faqs_displaymanager_faqs_md_7b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-display-manager-displaymanager-faqs-displaymanager-faqs-md-7b1.json
var site_docs_arkui_display_manager_displaymanager_faqs_displaymanager_faqs_md_7b1_namespaceObject = JSON.parse('{"id":"arkui/display-manager/displaymanager-faqs/displaymanager-faqs","title":"屏幕开发常见问题","description":"三折叠设备中，调用on(\'FoldDisplayModeChange\')监听接口获取到的FoldDisplayMode值为5代表什么含义","source":"@site/docs/arkui/display-manager/displaymanager-faqs/displaymanager-faqs.md","sourceDirName":"arkui/display-manager/displaymanager-faqs","slug":"/arkui/display-manager/displaymanager-faqs/","permalink":"/harmonyos-docs-site/arkui/display-manager/displaymanager-faqs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"屏幕开发常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaymanager-faqs","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"屏幕管理开发术语","permalink":"/harmonyos-docs-site/arkui/display-manager/display-terminology/"},"next":{"title":"ArkUI术语","permalink":"/harmonyos-docs-site/arkui/arkui-glossary/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/display-manager/displaymanager-faqs/displaymanager-faqs.md


const frontMatter = {
	title: '屏幕开发常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaymanager-faqs',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '屏幕开发常见问题';

const assets = {

};



const toc = [{
  "value": "三折叠设备中，调用on(&#39;FoldDisplayModeChange&#39;)监听接口获取到的FoldDisplayMode值为5代表什么含义",
  "id": "三折叠设备中调用onfolddisplaymodechange监听接口获取到的folddisplaymode值为5代表什么含义",
  "level": 2
}, {
  "value": "折叠PC中，如何获取悬停态时下半屏幕的Display对象",
  "id": "折叠pc中如何获取悬停态时下半屏幕的display对象",
  "level": 2
}, {
  "value": "虚拟屏中，Display对象的orientation属性值为4表示什么含义",
  "id": "虚拟屏中display对象的orientation属性值为4表示什么含义",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "屏幕开发常见问题",
        children: "屏幕开发常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三折叠设备中调用onfolddisplaymodechange监听接口获取到的folddisplaymode值为5代表什么含义",
      children: "三折叠设备中，调用on('FoldDisplayModeChange')监听接口获取到的FoldDisplayMode值为5代表什么含义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["三折叠设备中，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displayonfolddisplaymodechange10",
        children: "on('foldDisplayModeChange')"
      }), "接口监听显示模式变化获取到的值为5，而调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetfolddisplaymode10",
        children: "getFoldDisplayMode()"
      }), "接口时的返回值却不是5。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FoldDisplayMode=5的含义"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在三折叠设备中，当FoldDisplayMode的值为5时，表示设备当前处于全展开显示模式，即三块屏幕完全展开，设备以最大可用屏幕尺寸进行内容展示。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "on('foldDisplayModeChange')返回5的原因"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "on('foldDisplayModeChange')接口用于实时监听设备显示状态的变化，因此会返回包括5在内的所有实际显示模式值。当监听到值为5时，可以判断设备已进入全展开状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getFoldDisplayMode()接口不返回5的原因"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了降低多设备适配的开发成本，不与设备形态绑定，因此getFoldDisplayMode()接口不返回5，开发者需要通过统一的断点管理机制来适配不同显示状态，采用“", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview",
            children: "一次开发，多端部署"
          }), "”方案进行开发，简化布局适配的开发流程。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虽然通过监听事件可以获取到FoldDisplayMode为5并进行特定处理，但为了更好的开发效率和兼容性，建议使用“", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview",
        children: "一次开发，多端部署"
      }), "”方案进行UI布局适配，其中三折叠应用开发可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-matext-guide",
        children: "三折叠应用开发"
      }), "。这样不仅能减少重复开发工作，还能确保应用在多种设备上的一致性和稳定性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "折叠pc中如何获取悬停态时下半屏幕的display对象",
      children: "折叠PC中，如何获取悬停态时下半屏幕的Display对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "折叠PC中，在悬停态（foldStatus = FOLD_STATUS_HALF_FOLDED）的下半屏幕调用getDefaultDisplaySync()接口获取的是上半屏幕即displayId=0的Display对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetdisplaybyidsync12",
        children: "getDisplayByIdSync()"
      }), "接口获取指定displayId的Display对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "虚拟屏中display对象的orientation属性值为4表示什么含义",
      children: "虚拟屏中，Display对象的orientation属性值为4表示什么含义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取虚拟屏的Display对象后，orientation属性值为4，未在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "Orientation"
      }), "枚举范围中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "虚拟屏本身没有物理屏幕，因此无法感知屏幕方向。在未主动设置屏幕方向的情况下，不能返回Orientation枚举中的任一值，此时orientation属性值返回4用于表示屏幕方向未知。"
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