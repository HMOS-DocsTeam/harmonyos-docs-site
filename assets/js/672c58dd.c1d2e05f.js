"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["298301"], {
799274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_custom_comp_ts_custom_component_new_lifecycle_ts_custom_component_new_lifecycle_md_672_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-custom-comp-ts-custom-component-new-lifecycle-ts-custom-component-new-lifecycle-md-672.json
var site_docs_ref_arkui_api_arkui_declarative_comp_custom_comp_ts_custom_component_new_lifecycle_ts_custom_component_new_lifecycle_md_672_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle","title":"自定义组件的生命周期（推荐）","description":"自定义组件的生命周期回调函数用于通知用户该自定义组件的生命周期，这些回调函数是私有的，在运行时由开发框架在特定的时间进行调用，不能从应用程序中手动调用这些回调函数。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle.md","sourceDirName":"arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle","slug":"/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"自定义组件的生命周期（推荐）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-new-lifecycle","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-custom-component-new-lifecycle"},"sidebar":"ref","previous":{"title":"自定义组件的生命周期","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle"},"next":{"title":"自定义组件的自定义布局","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout/ts-custom-component-layout"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle.md


const frontMatter = {
	title: '自定义组件的生命周期（推荐）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-new-lifecycle',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-custom-component-new-lifecycle'
};
const contentTitle = '自定义组件的生命周期（推荐）';

const assets = {

};



const toc = [{
  "value": "@ComponentInit",
  "id": "componentinit",
  "level": 2
}, {
  "value": "@ComponentAppear",
  "id": "componentappear",
  "level": 2
}, {
  "value": "@ComponentBuilt",
  "id": "componentbuilt",
  "level": 2
}, {
  "value": "@ComponentDisappear",
  "id": "componentdisappear",
  "level": 2
}, {
  "value": "@ComponentReuse",
  "id": "componentreuse",
  "level": 2
}, {
  "value": "@ComponentRecycle",
  "id": "componentrecycle",
  "level": 2
}, {
  "value": "CustomComponentLifecycle",
  "id": "customcomponentlifecycle",
  "level": 2
}, {
  "value": "getCurrentState",
  "id": "getcurrentstate",
  "level": 3
}, {
  "value": "addObserver",
  "id": "addobserver",
  "level": 3
}, {
  "value": "removeObserver",
  "id": "removeobserver",
  "level": 3
}, {
  "value": "CustomComponentLifecycleObserver",
  "id": "customcomponentlifecycleobserver",
  "level": 2
}, {
  "value": "aboutToAppear",
  "id": "abouttoappear",
  "level": 3
}, {
  "value": "onDidBuild",
  "id": "ondidbuild",
  "level": 3
}, {
  "value": "aboutToDisappear",
  "id": "abouttodisappear",
  "level": 3
}, {
  "value": "aboutToReuse",
  "id": "abouttoreuse",
  "level": 3
}, {
  "value": "aboutToRecycle",
  "id": "abouttorecycle",
  "level": 3
}, {
  "value": "CustomComponentLifecycleState",
  "id": "customcomponentlifecyclestate",
  "level": 2
}, {
  "value": "生命周期使用示例",
  "id": "生命周期使用示例",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "自定义组件的生命周期推荐",
        children: "自定义组件的生命周期（推荐）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件的生命周期回调函数用于通知用户该自定义组件的生命周期，这些回调函数是私有的，在运行时由开发框架在特定的时间进行调用，不能从应用程序中手动调用这些回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(343490)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 23开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentinit",
      children: "@ComponentInit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentInit: MethodDecorator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ComponentInit装饰的函数在自定义组件初始化即将完成时执行。开发者可以在此时注册监听和修改变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "生命周期使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentappear",
      children: "@ComponentAppear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentAppear: MethodDecorator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与aboutToAppear相似，@ComponentAppear装饰的函数在创建自定义组件的新实例后，在其build()函数执行前调用，不同的是，@ComponentAppear装饰的函数仅在自定义组件处于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customcomponentlifecyclestate",
        children: "CustomComponentLifecycleState"
      }), ".INIT状态才会触发。允许在@ComponentAppear装饰的函数中改变状态变量，更改将在后续执行build()函数中生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "生命周期使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentbuilt",
      children: "@ComponentBuilt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentBuilt: MethodDecorator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ComponentBuilt装饰的函数在自定义组件的build()函数首次执行后调用，即从CustomComponentLifecycleState.APPEARED到CustomComponentLifecycleState.BUILT的阶段触发。开发者可以在这个阶段实现埋点数据上报等不影响实际UI的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "生命周期使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentdisappear",
      children: "@ComponentDisappear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentDisappear: MethodDecorator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ComponentDisappear装饰的函数在自定义组件析构销毁时执行。不建议在此函数中改变状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "生命周期使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentreuse",
      children: "@ComponentReuse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentReuse: MethodDecorator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当可复用的自定义组件从缓存中重新添加到节点树时调用@ComponentReuse装饰的函数，即从CustomComponentLifecycleState.RECYCLED到CustomComponentLifecycleState.BUILT阶段触发，以接收组件的构造参数。最后，复用会递归遍历所有子组件，对每个完成复用的子组件，会调用子组件中@ComponentReuse装饰的函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(485846)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在状态管理V1的组件里，@ComponentReuse装饰的函数允许有一个入参或者无参。入参params建议为Record<string, Object | undefined | null>类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在状态管理V2的组件里，@ComponentReuse装饰的函数没有入参。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null>"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "生命周期使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentrecycle",
      children: "@ComponentRecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentRecycle: MethodDecorator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件被回收后触发，先执行应用程序中定义的必要回收操作，完成回收后调用此装饰器装饰的函数，即从CustomComponentLifecycleState.BUILT到CustomComponentLifecycleState.RECYCLED阶段触发。最后，回收会递归遍历所有子组件，对每个完成回收的子组件调用子组件中@ComponentRecycle装饰的函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "生命周期使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customcomponentlifecycle",
      children: "CustomComponentLifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CustomComponentLifecycle用于监控自定义组件生命周期的变化，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#getlifecycle23",
        children: "UIUtils.getLifecycle"
      }), "获取CustomComponentLifecycle实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcurrentstate",
      children: "getCurrentState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentState(): CustomComponentLifecycleState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentState函数用于获得自定义组件当前的生命周期状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#customcomponentlifecyclestate",
              children: "CustomComponentLifecycleState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件当前的生命周期状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, ComponentBuilt } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n@Entry\n@Component\nstruct Index {\n  @ComponentBuilt\n  myBuilt() {\n    hilog.info(0x0000, 'testTag', 'Index Lifecycle is %{public}d', UIUtils.getLifecycle(this).getCurrentState());\n  }\n  build() {\n    Column() {\n      Text(`HelloWorld`)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addobserver",
      children: "addObserver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addObserver(observer: CustomComponentLifecycleObserver): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addObserver函数用于注册自定义组件生命周期监听器。当自定义组件的生命周期发生变化时，会触发监听器中相应的生命周期回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#customcomponentlifecycleobserver",
              children: "CustomComponentLifecycleObserver"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听自定义组件的监听器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removeobserver",
      children: "removeObserver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeObserver(observer: CustomComponentLifecycleObserver): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeObserver函数用于移除自定义组件生命周期监听器。解除注册后，即使自定义组件的生命周期状态发生变化，也不会触发监听器中相应的生命周期回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CustomComponentLifecycleObserver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听自定义组件的监听器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customcomponentlifecycleobserver",
      children: "CustomComponentLifecycleObserver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户注册自定义组件生命周期回调后，当该自定义组件的生命周期发生变化时，将触发监听器中相应的生命周期回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttoappear",
      children: "aboutToAppear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToAppear?(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aboutToAppear函数在创建自定义组件的新实例后，执行其build()函数之前执行。开发者可以在此阶段修改状态变量。其功能与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "类似，但是在自定义组件状态机的约束下触发的。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondidbuild",
      children: "onDidBuild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDidBuild?(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDidBuild函数在自定义组件的新实例构建完成后，执行其build()函数之后执行。开发者可以在此阶段实现一些不影响实际UI的功能，例如事件数据上报。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttodisappear",
      children: "aboutToDisappear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToDisappear?(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aboutToDisappear函数在自定义组件被销毁之前执行。不建议在aboutToDisappear函数中修改状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。其功能与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
        children: "aboutToDisappear"
      }), "类似，不同的是，CustomComponentLifecycleObserver中的aboutToDisappear函数受状态机约束，只有被监听的自定义组件状态向CustomComponentLifecycleState.DISAPPEARED转变前触发回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttoreuse",
      children: "aboutToReuse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToReuse?(params?: Record<string, Object | undefined | null>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当可复用的自定义组件从缓存中重新添加到节点树时调用aboutToReuse函数，以接收组件的构造参数。当params存在时，表示V1组件的复用回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null>"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttorecycle",
      children: "aboutToRecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aboutToRecycle?(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件被回收后触发，先执行应用程序中定义的必要回收操作，完成回收后调用aboutToRecycle函数。随后该组件被冻结，以避免该组件处于回收池时进行UI更新。最后，aboutToRecycle函数会递归遍历所有子组件，对每个完成回收的组件调用aboutToRecycle函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentInit, ComponentDisappear, UIUtils, CustomComponentLifecycleObserver, CustomComponentLifecycle } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport class Message {\n  value: string | undefined;\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State switch: boolean = true;\n\n  build() {\n    Column() {\n      Button('Hello')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.switch = !this.switch;\n        })\n      if (this.switch) {\n        // 如果只有一个复用的组件，可以不用设置reuseId。\n        Child({ message: new Message('Child') })\n          .reuseId('Child')\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Reusable\n@Component\nstruct Child {\n  @State message: Message = new Message('AboutToReuse');\n  @State label: string = 'HelloWorld';\n  @ComponentInit\n  myInit(): void {\n    registerObserver(UIUtils.getLifecycle(this));\n  }\n  @ComponentDisappear\n  myDisappear(): void {\n    unRegisterObserver(UIUtils.getLifecycle(this));\n  }\n  build() {\n    Column() {\n      Text(this.message.value)\n        .fontSize(30)\n    }\n  }\n}\n\nexport class MyObserver implements CustomComponentLifecycleObserver {\n  // 重写CustomComponentLifecycleObserver中的生命周期事件。\n  aboutToAppear() {\n    hilog.info(0x0000, 'testTag', 'MyObserver aboutToAppear');\n  }\n  onDidBuild() {\n    hilog.info(0x0000, 'testTag', 'MyObserver onDidBuild');\n  }\n  aboutToReuse(params?: Record<string, Object | undefined | null>) {\n    // params存在时，为V1的复用；\n    hilog.info(0x0000, 'testTag', 'MyObserver aboutToReuse');\n  }\n  aboutToRecycle() {\n    hilog.info(0x0000, 'testTag', 'MyObserver aboutToRecycle');\n  }\n  aboutToDisappear() {\n    hilog.info(0x0000, 'testTag', 'MyObserver aboutToDisappear');\n  }\n}\n\n// 创建Observer对象\nconst observer = new MyObserver();\n\nexport function registerObserver(lifeCycle: CustomComponentLifecycle) {\n  // 向lifeCycle注册监听\n  lifeCycle.addObserver(observer);\n}\n\nexport function unRegisterObserver(lifeCycle: CustomComponentLifecycle) {\n  // 向lifeCycle取消注册监听\n  lifeCycle.removeObserver(observer);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customcomponentlifecyclestate",
      children: "CustomComponentLifecycleState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件当前的生命周期状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APPEARED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备展开状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUILT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已展开状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RECYCLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回收状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISAPPEARED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustomComponentLifecycleState, ComponentBuilt } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @ComponentBuilt\n  myBuilt() {\n    hilog.info(0x0000, 'testTag', 'Index Lifecycle is %{public}d', CustomComponentLifecycleState.BUILT);\n  }\n  build() {\n    Column() {\n      Text(`HelloWorld`)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期使用示例",
      children: "生命周期使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示了生命周期回调函数的部分使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义组件Child的创建触发@ComponentInit、@ComponentAppear，Child执行build()后，触发@ComponentBuilt。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更改this.switch为false，回收Child子组件触发@ComponentRecycle；更改this.switch为true，复用Child子组件触发@ComponentReuse。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退出应用，在自定义组件Child销毁前，触发@ComponentDisappear。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentInit, ComponentAppear, ComponentBuilt, ComponentDisappear, ComponentReuse, ComponentRecycle } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport class Message {\n  value: string | undefined;\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n@Entry\n@Component\nstruct Index {\n  @State switch: boolean = true;\n  build() {\n    Column() {\n      Button('Hello')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.switch = !this.switch;\n        })\n      if (this.switch) {\n        // 如果只有一个复用的组件，可以不用设置reuseId。\n        Child({ message: new Message('Child') })\n          .reuseId('Child')\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Reusable\n@Component\nstruct Child {\n  @State message: Message = new Message('Child');\n  @State label: string = 'HelloWorld';\n  @State switch: boolean = true;\n  @ComponentInit\n  myInit() {\n    hilog.info(0x0000, 'testTag', 'Child myInit');\n  }\n  @ComponentAppear\n  myAppear() {\n    this.label = 'myAppear'\n    hilog.info(0x0000, 'testTag', 'Child myAppear');\n  }\n  @ComponentBuilt\n  myBuilt() {\n    this.label = 'myBuilt'\n    hilog.info(0x0000, 'testTag', 'Child myBuilt');\n  }\n  @ComponentRecycle\n  myRecycle() {\n    this.label = 'myRecycle'\n    hilog.info(0x0000, 'testTag', 'Child myRecycle');\n  }\n  @ComponentDisappear\n  myDisappear() {\n    this.label = 'myDisappear'\n    hilog.info(0x0000, 'testTag', 'Child myDisappear');\n  }\n  @ComponentReuse\n  myReuse() {\n    this.label = 'myReuse'\n    hilog.info(0x0000, 'testTag', 'Child myReuse');\n  }\n  build() {\n    Column() {\n      Text(this.message.value)\n        .fontSize(30)\n    }\n    .borderWidth(1)\n    .height(100)\n  }\n}\n"
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
343490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
485846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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