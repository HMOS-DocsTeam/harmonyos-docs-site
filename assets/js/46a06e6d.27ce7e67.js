"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["47412"], {
877419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_power_experience_standards_standard_foreground_power_standard_foreground_render_standard_foreground_render_md_46a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-power-experience-standards-standard-foreground-power-standard-foreground-render-standard-foreground-render-md-46a.json
var site_docs_app_power_experience_standards_standard_foreground_power_standard_foreground_render_standard_foreground_render_md_46a_namespaceObject = JSON.parse('{"id":"app-power-experience-standards/standard-foreground-power/standard-foreground-render/standard-foreground-render","title":"前台绘制渲染","description":"内容布局使用建议","source":"@site/docs/app-power-experience-standards/standard-foreground-power/standard-foreground-render/standard-foreground-render.md","sourceDirName":"app-power-experience-standards/standard-foreground-power/standard-foreground-render","slug":"/app-power-experience-standards/standard-foreground-power/standard-foreground-render/","permalink":"/harmonyos-docs-site/app-power-experience-standards/standard-foreground-power/standard-foreground-render/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"前台绘制渲染","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/standard-foreground-render","kit":"experience","last_updated":"2026-04-16"},"sidebar":"docs","previous":{"title":"前台帧率","permalink":"/harmonyos-docs-site/app-power-experience-standards/standard-foreground-power/standard-foreground-frame-rate/"},"next":{"title":"前台资源使用","permalink":"/harmonyos-docs-site/app-power-experience-standards/standard-foreground-power/standard-foreground-resource/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-power-experience-standards/standard-foreground-power/standard-foreground-render/standard-foreground-render.md


const frontMatter = {
	title: '前台绘制渲染',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/standard-foreground-render',
	kit: 'experience',
	last_updated: '2026-04-16'
};
const contentTitle = '前台绘制渲染';

const assets = {

};



const toc = [{
  "value": "内容布局使用建议",
  "id": "内容布局使用建议",
  "level": 2
}, {
  "value": "UI资源使用建议",
  "id": "ui资源使用建议",
  "level": 2
}, {
  "value": "动效使用建议",
  "id": "动效使用建议",
  "level": 2
}, {
  "value": "缓存使用建议",
  "id": "缓存使用建议",
  "level": 2
}, {
  "value": "视效使用建议",
  "id": "视效使用建议",
  "level": 2
}, {
  "value": "脏区使用建议",
  "id": "脏区使用建议",
  "level": 2
}, {
  "value": "合成使用建议",
  "id": "合成使用建议",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "前台绘制渲染",
        children: "前台绘制渲染"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内容布局使用建议",
      children: "内容布局使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 使用扁平化的布局嵌套层级，避免冗余嵌套，删除无效容器节点。 2. 合理使用容器节点，频繁创建和销毁的组件会影响容器布局，导致容器所有组件刷新，可以尝试在内部再添加容器隔离组件，减少更新范围。 3. 容器内的节点按需加载，例如List列表中的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ui资源使用建议",
      children: "UI资源使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 使用组件复用机制降低系统负载。 2. 精准控制组件更新范围。 3. 建议使用高能效高性能的组件。 4. 按需分配资源分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动效使用建议",
      children: "动效使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 合理使用animateTo、animator、animation动画，对于不可见动画应及时停止以释放资源。 2. 应用、元服务切入后台，或者灭屏场景，用户不可见的绘制或动效应当立刻停止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "规则"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-low-power-design-in-dark-mode",
              children: "动效使用建议"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "缓存使用建议",
      children: "缓存使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将重复利用的组件渲染内容进行缓存，便于复用，减少渲染个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-low-power-design-in-dark-mode",
              children: "缓存使用建议"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "视效使用建议",
      children: "视效使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若界面内多个组件的视效参数一致，合并视效以减少计算次数，减少场景视觉效果渲染复杂度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-utilize-hwc-efficiently",
              children: "视效使用建议"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "脏区使用建议",
      children: "脏区使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尽量让脏区只包含变化的组件，减少渲染大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-utilize-hwc-efficiently",
              children: "脏区使用建议"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "合成使用建议",
      children: "合成使用建议"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按需创建图层及使用旋转图层，过多的图层会导致硬件叠加功能失效，造成系统额外功耗开销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、折叠屏、平板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用形态适用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鸿蒙应用，鸿蒙元服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-utilize-hwc-efficiently",
              children: "合成使用建议"
            })
          })]
        })]
      })]
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