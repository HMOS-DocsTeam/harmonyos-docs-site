"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["427407"], {
33224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_custom_comp_ts_custom_component_layout_ts_custom_component_layout_md_f71_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-custom-comp-ts-custom-component-layout-ts-custom-component-layout-md-f71.json
var site_docs_ref_arkui_api_arkui_declarative_comp_custom_comp_ts_custom_component_layout_ts_custom_component_layout_md_f71_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout/ts-custom-component-layout","title":"自定义组件的自定义布局","description":"自定义组件的自定义布局通过数据计算的方式布局自定义组件内的子组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout/ts-custom-component-layout.md","sourceDirName":"arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout","slug":"/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout/ts-custom-component-layout","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout/ts-custom-component-layout","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义组件的自定义布局","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-layout","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-custom-component-layout"},"sidebar":"ref","previous":{"title":"自定义组件的生命周期（推荐）","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle"},"next":{"title":"自定义组件内置方法","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-layout/ts-custom-component-layout.md


const frontMatter = {
	title: '自定义组件的自定义布局',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-layout',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-custom-component-layout'
};
const contentTitle = '自定义组件的自定义布局';

const assets = {

};



const toc = [{
  "value": "onMeasureSize10+",
  "id": "onmeasuresize10",
  "level": 2
}, {
  "value": "onPlaceChildren10+",
  "id": "onplacechildren10",
  "level": 2
}, {
  "value": "GeometryInfo10+",
  "id": "geometryinfo10",
  "level": 2
}, {
  "value": "Layoutable10+",
  "id": "layoutable10",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "layout10+",
  "id": "layout10",
  "level": 3
}, {
  "value": "getMargin12+",
  "id": "getmargin12",
  "level": 3
}, {
  "value": "getPadding12+",
  "id": "getpadding12",
  "level": 3
}, {
  "value": "getBorderWidth12+",
  "id": "getborderwidth12",
  "level": 3
}, {
  "value": "Measurable10+",
  "id": "measurable10",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "measure",
  "id": "measure",
  "level": 3
}, {
  "value": "getMargin12+",
  "id": "getmargin12-1",
  "level": 3
}, {
  "value": "getPadding12+",
  "id": "getpadding12-1",
  "level": 3
}, {
  "value": "getBorderWidth12+",
  "id": "getborderwidth12-1",
  "level": 3
}, {
  "value": "MeasureResult10+",
  "id": "measureresult10",
  "level": 2
}, {
  "value": "SizeResult10+",
  "id": "sizeresult10",
  "level": 2
}, {
  "value": "onLayout(deprecated)",
  "id": "onlayoutdeprecated",
  "level": 2
}, {
  "value": "onMeasure(deprecated)",
  "id": "onmeasuredeprecated",
  "level": 2
}, {
  "value": "LayoutChild(deprecated)",
  "id": "layoutchilddeprecated",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-2",
  "level": 3
}, {
  "value": "measure(deprecated)",
  "id": "measuredeprecated",
  "level": 3
}, {
  "value": "layout(deprecated)",
  "id": "layoutdeprecated",
  "level": 3
}, {
  "value": "LayoutBorderInfo(deprecated)",
  "id": "layoutborderinfodeprecated",
  "level": 2
}, {
  "value": "LayoutInfo(deprecated)",
  "id": "layoutinfodeprecated",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（自定义布局代码示例）",
  "id": "示例1自定义布局代码示例",
  "level": 3
}, {
  "value": "示例2（判断是否参与布局计算）",
  "id": "示例2判断是否参与布局计算",
  "level": 3
}, {
  "value": "示例3（获取子组件FrameNode并设置相关属性）",
  "id": "示例3获取子组件framenode并设置相关属性",
  "level": 3
}, {
  "value": "示例4（子组件超过父组件大小约束）",
  "id": "示例4子组件超过父组件大小约束",
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
        id: "自定义组件的自定义布局",
        children: "自定义组件的自定义布局"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件的自定义布局通过数据计算的方式布局自定义组件内的子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479844)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在自定义组件内实现onMeasureSize, onPlaceChildren任一方法即视为实现自定义布局，推荐同时实现两种方法，具体参数说明可见对应接口参数说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，在自定义布局的自定义组件中，子组件若设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
        children: "LayoutPolicy"
      }), "对象的fixAtIdealSize属性，表示尺寸将不受父组件约束，完全按照开发者自定义的尺寸范围布局。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义布局内不支持使用懒加载(包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), ")。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onmeasuresize10",
      children: "onMeasureSize10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架会在自定义组件确定尺寸时，将该自定义组件的节点信息和尺寸范围通过onMeasureSize传递给该开发者。不允许在onMeasureSize函数中改变状态变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "selfLayoutInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#geometryinfo10",
              children: "GeometryInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计算自定义组件大小后的自身布局信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  第一次布局时以自身设置的属性为准。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "children"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#measurable10",
              children: "Measurable"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计算子组件大小后的子组件布局信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果没有设置子组件的布局信息，子组件会维持上一次的布局信息，当子组件从来没有设置过尺寸时，尺寸默认为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件的布局约束信息。"
          })]
        })]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sizeresult10",
              children: "SizeResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件尺寸信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onplacechildren10",
      children: "onPlaceChildren10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架会在自定义组件确定位置时，将该自定义组件的子节点自身的尺寸范围通过onPlaceChildren传递给该自定义组件。不允许在onPlaceChildren函数中改变状态变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "selfLayoutInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#geometryinfo10",
              children: "GeometryInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算自定义组件大小后的自身布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "children"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutable10",
              children: "Layoutable"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算子组件大小后的子组件布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件的布局约束信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B",
        children: "自定义布局代码示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "geometryinfo10",
      children: "GeometryInfo10+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["父组件（自定义组件）布局信息，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sizeresult10",
        children: "SizeResult"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父组件（自定义组件）边框宽度。  单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
              children: "Margin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父组件（自定义组件）margin信息。  单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父组件（自定义组件）padding信息。  单位：vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutable10",
      children: "Layoutable10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件布局信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "measureResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#measureresult10",
              children: "MeasureResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子组件测量后的尺寸信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。  单位：vp"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uniqueId18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统为子组件分配的唯一标识UniqueID。  取值范围[0,+∞)。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layout10",
      children: "layout10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layout(position: Position): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法对子组件的位置信息进行限制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绝对位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmargin12",
      children: "getMargin12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMargin(): DirectionalEdgesT<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法获取子组件的margin信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#directionaledgestt12",
              children: "DirectionalEdgesT<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的margin信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpadding12",
      children: "getPadding12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPadding(): DirectionalEdgesT<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法获取子组件的padding信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#directionaledgestt12",
              children: "DirectionalEdgesT<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的padding信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getborderwidth12",
      children: "getBorderWidth12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBorderWidth(): DirectionalEdgesT<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法获取子组件的borderWidth信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#directionaledgestt12",
              children: "DirectionalEdgesT<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的borderWidth信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "measurable10",
      children: "Measurable10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件位置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uniqueId18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统为子组件分配的唯一标识UniqueID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "measure",
      children: "measure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "measure(constraint: ConstraintSizeOptions) : MeasureResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法限制子组件的尺寸范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "约束尺寸。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#measureresult10",
              children: "MeasureResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量后的组件布局信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmargin12-1",
      children: "getMargin12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMargin(): DirectionalEdgesT<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取子组件的margin信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#directionaledgestt12",
              children: "DirectionalEdgesT<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的margin信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpadding12-1",
      children: "getPadding12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPadding(): DirectionalEdgesT<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取子组件的padding信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#directionaledgestt12",
              children: "DirectionalEdgesT<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的padding信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getborderwidth12-1",
      children: "getBorderWidth12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBorderWidth(): DirectionalEdgesT<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取子组件的borderWidth信息。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#directionaledgestt12",
              children: "DirectionalEdgesT<number>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的borderWidth信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "measureresult10",
      children: "MeasureResult10+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测量后的组件布局信息。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sizeresult10",
        children: "SizeResult"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sizeresult10",
      children: "SizeResult10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件尺寸信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252168)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义布局暂不支持LazyForEach写法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用builder形式的自定义布局创建，自定义组件的build()方法内只允许存在this.builder()，即示例的推荐用法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父容器（自定义组件）上设置的尺寸信息，除aspectRatio之外，优先级小于onMeasureSize设置的尺寸信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子组件设置的位置信息，offset、position、markAnchor优先级大于onPlaceChildren设置的位置信息，其他位置设置属性不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用自定义布局方法时，需要同时调用onMeasureSize和onPlaceChildren方法，否则可能出现布局异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量后的宽。  单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量后的高。  单位：vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onlayoutdeprecated",
      children: "onLayout(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架会在自定义组件布局时，将该自定义组件的子节点信息和自身的尺寸范围通过onLayout传递给该自定义组件。不允许在onLayout函数中改变状态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(14512)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始支持，从API version 10开始废弃，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onplacechildren10",
        children: "onPlaceChildren"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "children"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutchilddeprecated",
              children: "LayoutChild"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父组件constraint信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onmeasuredeprecated",
      children: "onMeasure(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMeasure?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架会在自定义组件确定尺寸时，将该自定义组件的子节点信息和自身的尺寸范围通过onMeasure传递给该自定义组件。不允许在onMeasure函数中改变状态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(875436)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始支持，从API version 10开始废弃，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmeasuresize10",
        children: "onMeasureSize"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "children"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutchilddeprecated",
              children: "LayoutChild"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件布局信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父组件constraint信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutchilddeprecated",
      children: "LayoutChild(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件布局信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(123208)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始支持，从API version 10开始废弃。建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#measurable10",
        children: "Measurable"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutable10",
        children: "Layoutable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-2",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件约束尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutborderinfodeprecated",
              children: "LayoutBorderInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件border信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件位置坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "measuredeprecated",
      children: "measure(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "measure(childConstraint: ConstraintSizeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法对子组件的尺寸范围进行限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701370)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#measurable10",
        children: "Measurable"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutable10",
        children: "Layoutable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "childConstraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的尺寸范围的约束信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layoutdeprecated",
      children: "layout(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layout(childLayoutInfo: LayoutInfo)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此方法对子组件的位置信息进行限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417467)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#measurable10",
        children: "Measurable"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutable10",
        children: "Layoutable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "childLayoutInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutinfodeprecated",
              children: "LayoutInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件layout信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutborderinfodeprecated",
      children: "LayoutBorderInfo(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件border信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(857454)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始支持，从API version 10开始废弃。建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getborderwidth12",
        children: "getBorderWidth"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getmargin12",
        children: "getMargin"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getpadding12",
        children: "getPadding"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidths"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边框宽度类型，用于描述组件边框不同方向的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
              children: "Margin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外边距类型，用于描述组件不同方向的外边距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内边距类型，用于描述组件不同方向的内边距。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutinfodeprecated",
      children: "LayoutInfo(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件layout信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18352)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持，从API version 10开始废弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件位置坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件约束尺寸。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1自定义布局代码示例",
      children: "示例1（自定义布局代码示例）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义布局代码示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      CustomLayout({ builder: ColumnChildren })\n    }\n  }\n}\n\n@Builder\nfunction ColumnChildren() {\n  ForEach([1, 2, 3], (index: number) => { // 目前不支持使用lazyForEach语法。\n    Text('S' + index)\n      .fontSize(30)\n      .width(100)\n      .height(100)\n      .borderWidth(2)\n      .offset({ x: 10, y: 20 })\n  })\n}\n\n@Component\nstruct CustomLayout {\n  @Builder\n  doNothingBuilder() {\n  };\n\n  @BuilderParam builder: () => void = this.doNothingBuilder;\n  @State startSize: number = 100;\n  result: SizeResult = {\n    width: 0,\n    height: 0\n  };\n\n  onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions) {\n    let startPos = 300;\n    children.forEach((child) => {\n      let pos = startPos - child.measureResult.height;\n      child.layout({ x: pos, y: pos })\n    })\n  }\n\n  onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions) {\n    let size = 100;\n    children.forEach((child) => {\n      let result: MeasureResult = child.measure({\n        minHeight: size,\n        minWidth: size,\n        maxWidth: size,\n        maxHeight: size\n      })\n      size += result.width / 2;\n    })\n    this.result.width = 100;\n    this.result.height = 400;\n    return this.result;\n  }\n\n  build() {\n    this.builder()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(19492)/* ["default"] */.A) + "",
        width: "587",
        height: "496"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2判断是否参与布局计算",
      children: "示例2（判断是否参与布局计算）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过组件的位置灵活判断是否参与布局计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      CustomLayout({ builder: ColumnChildren })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Builder\nfunction ColumnChildren() {\n  ForEach([1, 2, 3], (item: number, index: number) => { // 目前不支持使用lazyForEach语法。\n    Text('S' + item)\n      .fontSize(20)\n      .width(60 + 10 * index)\n      .height(100)\n      .borderWidth(2)\n      .margin({ left:10 })\n      .padding(10)\n  })\n}\n\n@Component\nstruct CustomLayout {\n  // 只布局一行，如果布局空间不够的子组件不显示的demo。\n  @Builder\n  doNothingBuilder() {\n  };\n\n  @BuilderParam builder: () => void = this.doNothingBuilder;\n  result: SizeResult = {\n    width: 0,\n    height: 0\n  };\n  overFlowIndex: number = -1;\n\n  onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions) {\n    let currentX = 0;\n    let infinity = 100000;\n    if (this.overFlowIndex == -1) {\n      this.overFlowIndex = children.length;\n    }\n    for (let index = 0; index < children.length; ++index) {\n      let child = children[index];\n      if (index >= this.overFlowIndex) {\n        // 如果子组件超出父组件范围，将它布局到较偏的位置，达到不显示的目的。\n        child.layout({x: infinity, y: 0});\n        continue;\n      }\n      child.layout({ x: currentX, y: 0 })\n      let margin = child.getMargin();\n      currentX += child.measureResult.width + margin.start + margin.end;\n    }\n  }\n\n  onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions) {\n    let width = 0;\n    let height = 0;\n    this.overFlowIndex = -1;\n    // 假定该组件的宽度不能超过200vp，也不能超过最大约束。\n    let maxWidth = Math.min(200, constraint.maxWidth as number);\n    for (let index = 0; index < children.length; ++index) {\n      let child = children[index];\n      let childResult: MeasureResult = child.measure({\n          minHeight: constraint.minHeight,\n          minWidth: constraint.minWidth,\n          maxWidth: constraint.maxWidth,\n          maxHeight: constraint.maxHeight\n      })\n      let margin = child.getMargin();\n      let newWidth = width + childResult.width + margin.start + margin.end;\n      if (newWidth > maxWidth) {\n        // 记录不该布局的组件的下标。\n        this.overFlowIndex = index;\n        break;\n      }\n      // 累积父组件的宽度和高度。\n      width = newWidth;\n      height = Math.max(height, childResult.height + margin.top + margin.bottom);\n    }\n    this.result.width = width;\n    this.result.height = height;\n    return this.result;\n  }\n\n  build() {\n    this.builder()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(737103)/* ["default"] */.A) + "",
        width: "292",
        height: "206"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3获取子组件framenode并设置相关属性",
      children: "示例3（获取子组件FrameNode并设置相关属性）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过uniqueId获取子组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "，并调用FrameNode的API接口修改尺寸、背景颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController } from '@kit.ArkUI';\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      CustomLayout()\n    }\n  }\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext)\n    return this.rootNode\n  }\n}\n\n@Component\nstruct CustomLayout {\n  @Builder\n  childrenBuilder() {\n    ForEach([1, 2, 3], (index: number) => { // 目前不支持使用lazyForEach语法。\n      NodeContainer(new MyNodeController())\n    })\n  };\n\n  @BuilderParam builder: () => void = this.childrenBuilder;\n  result: SizeResult = {\n    width: 0,\n    height: 0\n  };\n\n  onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions) {\n    let prev = 0;\n    children.forEach((child) => {\n      let pos = prev + 10;\n      prev = pos + child.measureResult.width\n      child.layout({ x: pos, y: 0 })\n    })\n  }\n\n  onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions) {\n    let size = 100;\n    children.forEach((child) => {\n      console.info('child uniqueId: ', child.uniqueId)\n      const uiContext = this.getUIContext()\n      if (uiContext) {\n        let node: FrameNode | null = uiContext.getFrameNodeByUniqueId(child.uniqueId) // 获取NodeContainer组件的FrameNode。\n        if (node) {\n          node.getChild(0)!.commonAttribute.width(100)\n          node.getChild(0)!.commonAttribute.height(100)\n          node.getChild(0)!.commonAttribute.backgroundColor(Color.Pink) // 修改FrameNode的尺寸与背景颜色。\n        }\n      }\n      child.measure({ minHeight: size, minWidth: size, maxWidth: size, maxHeight: size })\n    })\n    this.result.width = 320;\n    this.result.height = 100;\n    return this.result;\n  }\n\n  build() {\n    this.builder()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(133462)/* ["default"] */.A) + "",
        width: "400",
        height: "134"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4子组件超过父组件大小约束",
      children: "示例4（子组件超过父组件大小约束）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在自定义布局的自定义组件中，为子组件设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
        children: "LayoutPolicy"
      }), "对象的fixAtIdealSize属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @Builder\n  ColumnChildrenText() {\n    Text('=====Text=====Text=====Text=====Text=====Text=====Text=====Text=====Text' )\n      .fontSize(16).fontColor(Color.Black)\n      .borderWidth(2).backgroundColor('#fff8dc')\n      .width(LayoutPolicy.fixAtIdealSize) // 设置子组件宽度不受到父组件限制。\n      .height(LayoutPolicy.fixAtIdealSize)  // 设置子组件高度不受到父组件限制。\n  }\n\n  build() {\n    Column() {\n      Column() {\n        CustomLayoutText({ builder: this.ColumnChildrenText })\n          .backgroundColor('#f0ffff').borderRadius(20).margin(10)\n      }\n      .width(300)\n      .height(150)\n      .margin(10)\n      .backgroundColor(Color.Pink)\n    }\n    .width(350)\n    .height(680)\n    .margin(20)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n\n@Component\nstruct CustomLayoutText {\n  @Builder\n  doSomethingBuilder() {\n  };\n\n  @BuilderParam\n  builder: () => void = this.doSomethingBuilder;\n  result: SizeResult = {\n    width: 0,\n    height: 0\n  };\n  // 自定义组件进行自定义布局。\n  onPlaceChildren(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions) {\n    let posY = 20;\n    children.forEach((child) => {\n      let posX = (selfLayoutInfo.width - child.measureResult.width) / 2;\n      child.layout({ x: posX, y: posY })\n      posY += child.measureResult.height + 30;\n    })\n  }\n\n  onMeasureSize(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions) {\n    children.forEach((child) => {\n      let result: MeasureResult = child.measure({ maxWidth: 335, maxHeight: 50 }) // 设置自定义组件子组件大小的限制。\n    })\n    this.result.width = 200;\n    this.result.height = 130;\n    return this.result;\n  }\n\n  build() {\n    this.builder()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(75268)/* ["default"] */.A) + "",
        width: "617",
        height: "316"
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
857454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
737103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
18352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
479844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
123208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
75268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480093-dfea5b5dfd31f3ead74e3f3e69e0976d.jpg");

},
252168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
875436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
417467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
701370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
14512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
19492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800442-d20b1e4eb3e5f2bf41d7f762638b6b0f.png");

},
133462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

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