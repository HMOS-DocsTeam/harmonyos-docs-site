"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["513562"], {
918505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_prefetcher_js_apis_arkui_prefetcher_md_447_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-prefetcher-js-apis-arkui-prefetcher-md-447.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_prefetcher_js_apis_arkui_prefetcher_md_447_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-prefetcher/js-apis-arkui-prefetcher","title":"@ohos.arkui.Prefetcher (Prefetching)","description":"配合LazyForEach，为List、Grid、WaterFlow和Swiper等容器组件滑动浏览时提供内容预加载能力，提升用户浏览体验。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-prefetcher/js-apis-arkui-prefetcher.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-prefetcher","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-prefetcher/js-apis-arkui-prefetcher","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-prefetcher/js-apis-arkui-prefetcher","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"@ohos.arkui.Prefetcher (Prefetching)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-prefetcher","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-prefetcher"},"sidebar":"ref","previous":{"title":"@ohos.arkui.observer (无感监听)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-observer/js-apis-arkui-observer"},"next":{"title":"@ohos.arkui.shape (形状)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-shape/js-apis-arkui-shape"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-prefetcher/js-apis-arkui-prefetcher.md


const frontMatter = {
	title: '@ohos.arkui.Prefetcher (Prefetching)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-prefetcher',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-prefetcher'
};
const contentTitle = '@ohos.arkui.Prefetcher (Prefetching)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "IPrefetcher",
  "id": "iprefetcher",
  "level": 2
}, {
  "value": "setDataSource",
  "id": "setdatasource",
  "level": 3
}, {
  "value": "visibleAreaChanged",
  "id": "visibleareachanged",
  "level": 3
}, {
  "value": "BasicPrefetcher",
  "id": "basicprefetcher",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "setDataSource",
  "id": "setdatasource-1",
  "level": 3
}, {
  "value": "visibleAreaChanged",
  "id": "visibleareachanged-1",
  "level": 3
}, {
  "value": "IDataSourcePrefetching",
  "id": "idatasourceprefetching",
  "level": 2
}, {
  "value": "prefetch",
  "id": "prefetch",
  "level": 3
}, {
  "value": "cancel",
  "id": "cancel",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "补充说明",
  "id": "补充说明",
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
        id: "ohosarkuiprefetcher-prefetching",
        children: "@ohos.arkui.Prefetcher (Prefetching)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配合LazyForEach，为List、Grid、WaterFlow和Swiper等容器组件滑动浏览时提供内容预加载能力，提升用户浏览体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830128)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块内的接口不支持在预览器中使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BasicPrefetcher, IDataSourcePrefetching, IPrefetcher } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iprefetcher",
      children: "IPrefetcher"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现此接口以提供预取能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdatasource",
      children: "setDataSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDataSource(dataSource: IDataSourcePrefetching): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置支持预取的数据源以绑定到Prefetcher。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "dataSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idatasourceprefetching",
              children: "IDataSourcePrefetching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持预取能力的数据源。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyPrefetcher implements IPrefetcher {\n  private dataSource?: IDataSourcePrefetching;\n\n  setDataSource(dataSource: IDataSourcePrefetching): void {\n    this.dataSource = dataSource;\n  }\n\n  visibleAreaChanged(minVisible: number, maxVisible: number): void {\n    this.dataSource?.prefetch(minVisible);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visibleareachanged",
      children: "visibleAreaChanged"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "visibleAreaChanged(minVisible: number, maxVisible: number): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当可见区域边界发生改变时调用此方法。支持与List、Grid、WaterFlow和Swiper组件配合使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minVisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表可见区域的上界。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxVisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表可见区域的下界。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyPrefetcher implements IPrefetcher {\n  private dataSource?: IDataSourcePrefetching;\n\n  setDataSource(dataSource: IDataSourcePrefetching): void {\n    this.dataSource = dataSource;\n  }\n\n  visibleAreaChanged(minVisible: number, maxVisible: number): void {\n    this.dataSource?.prefetch(minVisible);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basicprefetcher",
      children: "BasicPrefetcher"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BasicPrefetcher是IPrefetcher的基础实现。它提供了一种智能数据预取算法，以根据屏幕上可见区域的实时变化和预取持续时间的变化来决定应预取哪些数据项。它还可以根据用户的滚动操作来确定哪些预取请求应该被取消。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BasicPrefetcher对象不支持使用JSON序列化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(dataSource?: IDataSourcePrefetching);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入支持预取的DataSource以绑定到Prefetcher。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "dataSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idatasourceprefetching",
              children: "IDataSourcePrefetching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持预取能力的数据源。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdatasource-1",
      children: "setDataSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDataSource(dataSource: IDataSourcePrefetching): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置支持预取的DataSource以绑定到Prefetcher。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "dataSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idatasourceprefetching",
              children: "IDataSourcePrefetching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持预取能力的数据源。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visibleareachanged-1",
      children: "visibleAreaChanged"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "visibleAreaChanged(minVisible: number, maxVisible: number): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当可见区域边界发生改变时调用此方法。支持与List、Grid、WaterFlow和Swiper组件配合使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minVisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表可见区域的上界。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxVisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表可见区域的下界。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "idatasourceprefetching",
      children: "IDataSourcePrefetching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
        children: "IDataSource"
      }), "。实现该接口，提供具备预取能力的DataSource。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefetch",
      children: "prefetch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "prefetch(index: number): Promise<void> | void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从数据集中预取指定的元素。该方法可以为同步，也可为异步。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预取数据项索引值。"
          })]
        })
      })]
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
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cancel",
      children: "cancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancel?(index: number): Promise<void> | void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消从数据集中预取指定的元素。该方法可以为同步，也可为异步。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消预取数据项索引值。"
          })]
        })
      })]
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
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列表内容移出屏幕时（比如列表快速滑动场景下），预取算法判断屏幕以外的Item可以被取消预取时，该方法即会被调用。例如，如果HTTP框架支持请求取消，则可以在此处取消在prefetch中发起的网络请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面示例展示了Prefetcher的预加载能力。该示例采用分页的方式，配合LazyForEach实现懒加载效果，并通过添加延时来模拟加载过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BasicPrefetcher, IDataSourcePrefetching } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\n\nconst ITEMS_ON_SCREEN = 8;\n\n@Entry\n@Component\nstruct PrefetcherDemoComponent {\n  private page: number = 1;\n  private pageSize: number = 50;\n  private breakPoint: number = 25;\n  private readonly fetchDelayMs: number = 500;\n  private readonly dataSource = new MyDataSource(this.page, this.pageSize, this.fetchDelayMs);\n  private readonly prefetcher = new BasicPrefetcher(this.dataSource);\n\n  build() {\n    Column() {\n      List() {\n        LazyForEach(this.dataSource, (item: PictureItem, index: number) => {\n          ListItem() {\n            PictureItemComponent({ info: item })\n              .height(`${100 / ITEMS_ON_SCREEN}%`)\n          }\n          .onAppear(() => {\n            if (index >= this.breakPoint) {\n              this.dataSource.getHttpData(++this.page, this.pageSize);\n              this.breakPoint = this.dataSource.totalCount() - this.pageSize / 2;\n            }\n          })\n        }, (item: PictureItem) => item.title)\n      }\n      .onScrollIndex((start: number, end: number) => {\n        this.prefetcher.visibleAreaChanged(start, end);\n      })\n    }\n  }\n}\n\n@Component\nstruct PictureItemComponent {\n  @ObjectLink info: PictureItem;\n\n  build() {\n    Row() {\n      Image(this.info.imagePixelMap)\n        .objectFit(ImageFit.Contain)\n        .width('40%')\n      Text(this.info.title)\n        .width('60%')\n    }\n  }\n}\n\n@Observed\nclass PictureItem {\n  readonly color: number;\n  title: string;\n  imagePixelMap: image.PixelMap | undefined;\n  key: string;\n\n  constructor(color: number, title: string) {\n    this.color = color;\n    this.title = title;\n    this.key = title;\n  }\n}\n\ntype ItemIndex = number;\ntype TimerId = number;\n\nclass MyDataSource implements IDataSourcePrefetching {\n  private readonly items: PictureItem[];\n  private readonly fetchDelayMs: number;\n  private readonly fetches: Map<ItemIndex, TimerId> = new Map();\n  private readonly listeners: DataChangeListener[] = [];\n\n  constructor(pageNum: number, pageSize: number, fetchDelayMs: number) {\n    this.items = [];\n    this.fetchDelayMs = fetchDelayMs;\n    this.getHttpData(pageNum, pageSize);\n  }\n\n  async prefetch(index: number): Promise<void> {\n    const item = this.items[index];\n    if (item.imagePixelMap) {\n      return;\n    }\n\n    // 模拟高耗时操作\n    return new Promise<void>(resolve => {\n      const timeoutId = setTimeout(async () => {\n        this.fetches.delete(index);\n        const bitmap = create10x10Bitmap(item.color);\n        const imageSource: image.ImageSource = image.createImageSource(bitmap);\n        item.imagePixelMap = await imageSource.createPixelMap();\n        resolve();\n      }, this.fetchDelayMs);\n\n      this.fetches.set(index, timeoutId)\n    });\n  }\n\n  cancel(index: number): void {\n    const timerId = this.fetches.get(index);\n    if (timerId) {\n      this.fetches.delete(index);\n      clearTimeout(timerId);\n    }\n  }\n\n  // 模拟分页方式加载数据\n  getHttpData(pageNum: number, pageSize:number): void {\n    const newItems: PictureItem[] = [];\n    for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {\n      const item = new PictureItem(getRandomColor(), `Item ${i}`);\n      newItems.push(item);\n    }\n    const startIndex = this.items.length;\n    this.items.splice(startIndex, 0, ...newItems);\n    this.notifyBatchUpdate([\n      {\n        type: DataOperationType.ADD,\n        index: startIndex,\n        count: newItems.length,\n        key: newItems.map((item) => item.title)\n      }\n    ]);\n  }\n\n  private notifyBatchUpdate(operations: DataOperation[]) {\n    this.listeners.forEach((listener: DataChangeListener) => {\n      listener.onDatasetChange(operations);\n    });\n  }\n\n  totalCount(): number {\n    return this.items.length;\n  }\n\n  getData(index: number): PictureItem {\n    return this.items[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n}\n\nfunction getRandomColor(): number {\n  const maxColorCode = 256;\n  const r = Math.floor(Math.random() * maxColorCode);\n  const g = Math.floor(Math.random() * maxColorCode);\n  const b = Math.floor(Math.random() * maxColorCode);\n\n  return (r * 256 + g) * 256 + b;\n}\n\nfunction create10x10Bitmap(color: number): ArrayBuffer {\n  const height = 10;\n  const width = 10;\n\n  const fileHeaderLength = 14;\n  const bitmapInfoLength = 40;\n  const headerLength = fileHeaderLength + bitmapInfoLength;\n  const pixelSize = (width * 3 + 2) * height;\n\n  let length = pixelSize + headerLength;\n\n  const buffer = new ArrayBuffer(length);\n  const view16 = new Uint16Array(buffer);\n\n  view16[0] = 0x4D42;\n  view16[1] = length & 0xffff;\n  view16[2] = length >> 16;\n  view16[5] = headerLength;\n\n  let offset = 7;\n  view16[offset++] = bitmapInfoLength & 0xffff;\n  view16[offset++] = bitmapInfoLength >> 16;\n  view16[offset++] = width & 0xffff;\n  view16[offset++] = width >> 16;\n  view16[offset++] = height & 0xffff;\n  view16[offset++] = height >> 16;\n  view16[offset++] = 1;\n  view16[offset++] = 24;\n\n  const b = color & 0xff;\n  const g = (color >> 8) & 0xff;\n  const r = color >> 16;\n  offset = headerLength;\n  const view8 = new Uint8Array(buffer);\n  for (let y = 0; y < height; y++) {\n    for (let x = 0; x < width; x++) {\n      view8[offset++] = b;\n      view8[offset++] = g;\n      view8[offset++] = r;\n    }\n    offset += 2;\n  }\n\n  return buffer;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "演示效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(944287)/* ["default"] */.A) + "",
        width: "360",
        height: "722"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "补充说明",
      children: "补充说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者也可使用HarmonyOS三方库", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ohpm.openharmony.cn/#/cn/detail/@netteam%2Fprefetcher",
        children: "@netteam/prefetcher"
      }), "开发预加载功能。该三方库提供了更多的接口，可以更加便捷有效地实现数据预加载。"]
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
830128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
944287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439449-48ccb405c31d1a331d0913a9eb13ed13.gif");

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