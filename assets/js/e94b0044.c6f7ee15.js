"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["426052"], {
652504(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_layout_development_grid_layout_arkts_layout_development_grid_layout_md_e94_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-layout-development-arkts-build-layout-arkts-layout-development-grid-layout-arkts-layout-development-grid-layout-md-e94.json
var site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_layout_development_grid_layout_arkts_layout_development_grid_layout_md_e94_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/arkts-layout-development-grid-layout","title":"栅格布局 (GridRow/GridCol)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/arkts-layout-development-grid-layout.md","sourceDirName":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout","slug":"/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"栅格布局 (GridRow/GridCol)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-grid-layout","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"相对布局 (RelativeContainer)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout/"},"next":{"title":"选项卡 (Tabs)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/arkts-layout-development-grid-layout.md


const frontMatter = {
	title: '栅格布局 (GridRow/GridCol)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-grid-layout',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '栅格布局 (GridRow/GridCol)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "栅格容器GridRow",
  "id": "栅格容器gridrow",
  "level": 2
}, {
  "value": "栅格容器断点",
  "id": "栅格容器断点",
  "level": 3
}, {
  "value": "布局的总列数",
  "id": "布局的总列数",
  "level": 3
}, {
  "value": "排列方向",
  "id": "排列方向",
  "level": 3
}, {
  "value": "子组件间距",
  "id": "子组件间距",
  "level": 3
}, {
  "value": "子组件GridCol",
  "id": "子组件gridcol",
  "level": 2
}, {
  "value": "span",
  "id": "span",
  "level": 3
}, {
  "value": "offset",
  "id": "offset",
  "level": 3
}, {
  "value": "order",
  "id": "order",
  "level": 3
}, {
  "value": "栅格组件的嵌套使用",
  "id": "栅格组件的嵌套使用",
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
        id: "栅格布局-gridrowgridcol",
        children: "栅格布局 (GridRow/GridCol)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格布局是一种通用的辅助定位工具，对移动设备的界面设计有较好的借鉴作用。主要优势包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供可循的规律：栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题。通过将页面划分为等宽的列数和行数，可以方便地对页面元素进行定位和排版。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一的定位标注：栅格布局可以为系统提供一种统一的定位标注，保证不同设备上各个模块的布局一致性。这可以减少设计和开发的复杂度，提高工作效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "灵活的间距调整方法：栅格布局可以提供一种灵活的间距调整方法，满足特殊场景布局调整的需求。通过调整列与列之间和行与行之间的间距，可以控制整个页面的排版效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自动换行和自适应：栅格布局可以完成一对多布局的自动换行和自适应。当页面元素的数量超出了一行或一列的容量时，他们会自动换到下一行或下一列，并且在不同的设备上自适应排版，使得页面布局更加灵活和适应性强。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow",
        children: "GridRow"
      }), "为栅格容器组件，需与栅格子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol",
        children: "GridCol"
      }), "在栅格布局场景中联合使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "栅格容器gridrow",
      children: "栅格容器GridRow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "栅格容器断点",
      children: "栅格容器断点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["栅格容器以设备的水平宽度（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
        children: "像素单位"
      }), "，单位vp）作为断点依据，定义设备的宽度类型，形成了一套断点规则。开发者可根据需求在不同的断点区间实现不同的页面布局效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格容器默认断点将设备宽度分为xs、sm、md、lg四类，尺寸范围如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "断点名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围（vp）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设备描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 320）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[320, 600)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[600, 840)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中等宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[840, +∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大宽度类型设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在GridRow栅格组件中，允许开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#breakpoints",
        children: "BreakPoints"
      }), "自定义修改断点的取值范围，最多支持6个断点，除了默认的4个断点外，还可以启用xl和xxl断点，支持6种不同尺寸（xs，sm，md，lg，xl，xxl）设备的布局设置。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "断点名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设备描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中等宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特大宽度类型设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xxl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超大宽度类型设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可根据实际使用场景，通过一个单调递增数组设置断点位置。由于栅格容器默认支持4个断点，在不设置断点位置时，系统为默认断点配置的单调递增数组为[\"320vp\", \"600vp\", \"840vp\"]。开发者使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#breakpoints",
            children: "BreakPoints"
          }), "最多可支持6个断点，因此此单调递增数组最大长度为5。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "假设传入的数组是[n0, n1, n2, n3, n4]，则各个断点取值如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "断点"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "取值范围"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "xs"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[0, n0)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "sm"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[n0, n1)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "md"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[n1, n2)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "lg"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[n2, n3)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "xl"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[n3, n4)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "xxl"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "[n4, INF)"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "breakpoints: {value: ['100vp', '200vp']} // 表示xs、sm、md共3个断点被使用，小于100vp为xs，100vp-200vp为sm，大于200vp为md。\nbreakpoints: {value: ['320vp', '600vp']} // 表示xs、sm、md共3个断点被使用，小于320vp为xs，320vp-600vp为sm，大于600vp为md。\nbreakpoints: {value: ['320vp', '600vp', '840vp', '1440vp']} // 表示xs、sm、md、lg、xl共5个断点被使用，小于320vp为xs，320vp-600vp为sm，  600vp-840vp为md，840vp-1440vp为lg，大于1440vp为xl。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "栅格容器通过监听窗口或容器的尺寸变化进行断点，通过reference设置断点切换参考物。考虑到应用可能以非全屏窗口的形式显示，以应用窗口宽度为参照物更为通用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，通过断点设置将应用宽度分成6个区间，通过columns配置各断点下栅格容器的栅格列数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct WindowRefGridLayout {\n  @State currentBp: string = \"unknown\"\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    Column({ space: 6 }) {\n      Text(this.currentBp)\n\n      GridRow({\n        columns: {\n          xs: 2, // 窗口宽度落入xs断点上，栅格容器分为2列。\n          sm: 4, // 窗口宽度落入sm断点上，栅格容器分为4列。\n          md: 8, // 窗口宽度落入md断点上，栅格容器分为8列。\n          lg: 12, // 窗口宽度落入lg断点上，栅格容器分为12列。\n          xl: 12, // 窗口宽度落入xl断点上，栅格容器分为12列。\n          xxl: 12 // 窗口宽度落入xxl断点上，栅格容器分为12列。\n        },\n        breakpoints: {\n          value: ['320vp', '600vp', '840vp', '1440vp', '1600vp'], // 表示在保留默认断点['320vp', '600vp', '840vp']的同时自定义增加'1440vp', '1600vp'的断点，实际开发中需要根据实际使用场景，合理设置断点值实现一次开发多端适配。\n          reference: BreakpointsReference.WindowSize\n        }\n      }) {\n        ForEach(this.bgColors, (color: ResourceColor, index?: number | undefined) => {\n          GridCol({ span: 1 }) { // 所有子组件占一列。\n            Row() {\n              Text(`${index}`)\n            }.width('100%').height('50vp')\n          }.backgroundColor(color)\n        })\n      }\n      .height(200)\n      .border({ color: 'rgb(39,135,217)', width: 2 })\n      .onBreakpointChange((breakPoint) => {\n        this.currentBp = breakPoint\n      })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(233379)/* ["default"] */.A) + "",
            width: "1086",
            height: "532"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "布局的总列数",
      children: "布局的总列数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridRow中通过columns设置栅格布局的总列数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 20之前，columns默认值为12，即在未设置columns时，任何断点下，栅格布局均被分成12列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 20及以后，columns默认值为{ xs: 2, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12 }。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct GridColumnsWithDefaults {\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)', 'rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)'];\n\n  build() {\n    GridRow() {\n      ForEach(this.bgColors, (item: ResourceColor, index?: number | undefined) => {\n        GridCol({ span: 1 }) {\n          Row() {\n            Text(`${index}`)\n          }.width('100%').height('50')\n        }.backgroundColor(item)\n      })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 20之前布局显示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(661955)/* ["default"] */.A) + "",
            width: "562",
            height: "79"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 20及以后布局显示（以sm设备为例，默认栅格列数为4）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(387102)/* ["default"] */.A) + "",
            width: "360",
            height: "179"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["columns支持number和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#gridrowcolumnoption",
        children: "GridRowColumnOption"
      }), "两种类型, 可按两种方式设置栅格布局的总列数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当columns类型为number时，栅格布局在任何尺寸设备下都被分为同一列数。下面分别设置栅格布局列数为4和8，子元素占一列，效果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct FixedFourColumnGrid {\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    Column({ space: 6 }) {\n      Text('columns：4').alignSelf(ItemAlign.Start)\n\n      Row() {\n        GridRow({ columns: 4 }) {\n          ForEach(this.bgColors, (item: ResourceColor, index?: number | undefined) => {\n            GridCol({ span: 1 }) {\n              Row() {\n                Text(`${index}`)\n              }.width('100%').height('50')\n            }.backgroundColor(item)\n          })\n        }\n        .width('100%').height('100%')\n      }\n      .height(160)\n      .border({ color: 'rgb(39,135,217)', width: 2 })\n      .width('90%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct FixedEightColumnGrid {\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    Column({ space: 6 }) {\n      Text('columns：8').alignSelf(ItemAlign.Start)\n\n      Row() {\n        GridRow({ columns: 8 }) {\n          ForEach(this.bgColors, (item: ResourceColor, index?: number | undefined) => {\n            GridCol({ span: 1 }) {\n              Row() {\n                Text(`${index}`)\n              }.width('100%').height('50')\n            }.backgroundColor(item)\n          })\n        }\n        .width('100%').height('100%')\n      }\n      .height(160)\n      .border({ color: 'rgb(39,135,217)', width: 2 })\n      .width('90%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(774812)/* ["default"] */.A) + "",
            width: "322",
            height: "440"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当columns类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#gridrowcolumnoption",
            children: "GridRowColumnOption"
          }), "时，支持下面6种不同尺寸（xs，sm，md，lg，xl，xxl）设备的栅格列数设置，不同尺寸的设备支持配置不同的栅格列数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct GridRowColumnOptionLayout {\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    GridRow({\n      columns: { sm: 4, md: 8 },\n      breakpoints: {\n        value: ['320vp', '600vp', '840vp', '1440vp', '1600vp'] // 表示在保留默认断点['320vp', '600vp', '840vp']的同时自定义增加'1440vp', '1600vp'的断点，实际开发中需要根据实际使用场景，合理设置断点值实现一次开发多端适配。\n      }\n    }) {\n      ForEach(this.bgColors, (item: ResourceColor, index?: number | undefined) => {\n        GridCol({ span: 1 }) {\n          Row() {\n            Text(`${index}`)\n          }.width('100%').height('50')\n        }.backgroundColor(item)\n      })\n    }\n    .height(200)\n    .border({ color: 'rgb(39,135,217)', width: 2 })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 20之前布局显示（xs设备未配置栅格列数，取默认列数12）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(373089)/* ["default"] */.A) + "",
            width: "1086",
            height: "532"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API version 20及以后布局显示（xs设备继承sm设备栅格列数）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(750671)/* ["default"] */.A) + "",
            width: "1086",
            height: "532"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仅部分设置sm、md的栅格列数，未配置的xs、lg、xl、xxl设备根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#gridrowcolumnoption",
            children: "栅格列数补全"
          }), "取默认值。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "排列方向",
      children: "排列方向"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["栅格布局中，可以通过设置GridRow的direction属性来指定栅格子组件在栅格容器中的排列方向。该属性可以设置为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#gridrowdirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "GridRowDirection"
      }), ".Row（从左往右排列）或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#gridrowdirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "GridRowDirection"
      }), ".RowReverse（从右往左排列），以满足不同的布局需求。通过合理的direction属性设置，可以使得页面布局更加灵活和符合设计要求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子组件默认从左往右排列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridRow({ direction: GridRowDirection.Row }) { /* ... */ }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(376010)/* ["default"] */.A) + "",
            width: "481",
            height: "282"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子组件从右往左排列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridRow({ direction: GridRowDirection.RowReverse }) { /* ... */ }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(411199)/* ["default"] */.A) + "",
            width: "479",
            height: "268"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "子组件间距",
      children: "子组件间距"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridRow中通过gutter属性设置子元素在水平和垂直方向的间距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当gutter类型为number时，同时设置栅格子组件间水平和垂直方向边距且相等。下例中，设置子组件水平与垂直方向距离相邻元素的间距为10。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridRow({ gutter: 10 }) { /* ... */ }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(765306)/* ["default"] */.A) + "",
            width: "488",
            height: "259"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当gutter类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#gutteroption",
            children: "GutterOption"
          }), "时，单独设置栅格子组件水平垂直边距，x属性为水平方向间距，y为垂直方向间距。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridRow({ gutter: { x: 20, y: 50 } }) { /* ... */ }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(387144)/* ["default"] */.A) + "",
            width: "477",
            height: "258"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件gridcol",
      children: "子组件GridCol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridCol组件作为GridRow组件的子组件，通过给GridCol传参或者设置属性两种方式，设置span（占用列数），offset（偏移列数），order（元素序号）的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置span。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let gSpan:Record<string,number> = { 'xs': 1, 'sm': 2, 'md': 3, 'lg': 4 }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridCol({ span: 2 }){}\nGridCol({ span: { xs: 1, sm: 2, md: 3, lg: 4 } }){}\nGridCol(){}.span(2)\nGridCol(){}.span(gSpan)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置offset。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let gOffset:Record<string,number> = { 'xs': 1, 'sm': 2, 'md': 3, 'lg': 4 }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridCol({ offset: 2, span: 1 }){}\nGridCol({ offset: { xs: 2, sm: 2, md: 2, lg: 2 }, span: 1 }){}\nGridCol({ span: 1 }){}.offset(gOffset)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置order。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let gOrder:Record<string,number> = { 'xs': 1, 'sm': 2, 'md': 3, 'lg': 4 }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridCol({ order: 2, span: 1 }){}\nGridCol({ order: { xs: 1, sm: 2, md: 3, lg: 4 }, span: 1 }){}\nGridCol({ span: 1 }){}.order(2)\nGridCol({ span: 1 }){}.order(gOrder)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "span",
      children: "span"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件占栅格布局的列数，决定了子组件的宽度。默认值为1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["span支持number和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol#gridcolcolumnoption",
        children: "GridColColumnOption"
      }), "两种类型, 可按两种方式设置栅格子组件占栅格容器的列数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当span类型为number时，子组件在所有尺寸设备下占用的列数相同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct SpanNumberExample {\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    GridRow({ columns: 8 }) {\n      ForEach(this.bgColors, (color: ResourceColor, index?: number | undefined) => {\n        GridCol({ span: 2 }) {\n          Row() {\n            Text(`${index}`)\n          }.width('100%').height('50vp')\n        }\n        .backgroundColor(color)\n      })\n    }\n    .border({ color: 'rgb(39,135,217)', width: 2 })\n    .height('150vp')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(898080)/* ["default"] */.A) + "",
            width: "486",
            height: "266"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当span类型为GridColColumnOption时，支持6种不同尺寸（xs，sm，md，lg，xl，xxl）设备中子组件所占列数设置，不同尺寸的设备下子组件支持配置不同列数。若仅部分设置sm、md的列数，未配置的xs、lg、xl、xxl设备根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol#gridcolcolumnoption",
            children: "列数补全"
          }), "取默认值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct SpanColumnOptionExample {\n  @State currentBp: string = \"unknown\"\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    Column({ space: 6 }) {\n      GridRow({ columns: 8 }) {\n        ForEach(this.bgColors, (color: ResourceColor, index?: number | undefined) => {\n          GridCol({\n            span: {\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4\n            }\n          }) {\n            Row() {\n              Text(`${index}`)\n            }.width('100%').height('50vp')\n          }\n          .backgroundColor(color)\n        })\n      }\n      .border({ color: 'rgb(39,135,217)', width: 2 })\n      .height('150vp')\n      .onBreakpointChange((breakPoint) => {\n        this.currentBp = breakPoint\n      })\n\n      Text(this.currentBp)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(849258)/* ["default"] */.A) + "",
            width: "997",
            height: "529"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offset",
      children: "offset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格子组件相对于前一个子组件的偏移列数，默认为0。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当offset类型为number时，子组件偏移相同列数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct OffsetNumberExample {\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    Column() {\n      GridRow({ columns: 12 }) {\n        ForEach(this.bgColors, (color: ResourceColor, index?: number | undefined) => {\n          GridCol({ offset: 2, span: 1 }) {\n            Row() {\n              Text('' + index)\n            }.width('100%').height('50vp')\n          }\n          .backgroundColor(color)\n        })\n      }\n\n      Blank().width('100%').height(150)\n    }.border({ color: 'rgb(39,135,217)', width: 2 })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(281363)/* ["default"] */.A) + "",
            width: "323",
            height: "242"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在lg及以上尺寸的设备上，栅格分成12列，每一个子组件占1列，偏移2列，每个子组件及间距共占3列，1行放4个子组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当offset类型为GridColColumnOption时，支持6种不同尺寸（xs，sm，md，lg，xl，xxl）设备中子组件所占列数设置，各个尺寸下数值可不同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct OffsetColumnOptionExample {\n  @State currentBp: string = \"unknown\"\n  @State bgColors: ResourceColor[] =\n    ['rgb(213,213,213)', 'rgb(150,150,150)', 'rgb(0,74,175)', 'rgb(39,135,217)', 'rgb(61,157,180)', 'rgb(23,169,141)',\n      'rgb(255,192,0)', 'rgb(170,10,33)'];\n\n  build() {\n    Column({ space: 6 }) {\n      GridRow({ columns: 12 }) {\n        ForEach(this.bgColors, (color: ResourceColor, index?: number | undefined) => {\n          GridCol({\n            offset: {\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4\n            },\n            span: 1\n          }) {\n            Row() {\n              Text('' + index)\n            }.width('100%').height('50vp')\n          }\n          .backgroundColor(color)\n        })\n      }\n      .height(200)\n      .border({ color: 'rgb(39,135,217)', width: 2 })\n      .onBreakpointChange((breakPoint) => {\n        this.currentBp = breakPoint\n      })\n\n      Text(this.currentBp)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(944324)/* ["default"] */.A) + "",
            width: "997",
            height: "529"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "order",
      children: "order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格子组件的序号，决定子组件排列次序。当子组件不设置order或者设置相同的order, 子组件按照代码顺序展示。当子组件设置不同的order时，order较小的组件在前，较大的在后。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当子组件部分设置order，部分不设置order时，未设置order的子组件依次排序靠前，设置了order的子组件按照数值从小到大排列。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当order类型为number时，子组件在任何尺寸下排序次序一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GridRow({ columns: 12 }) {\n  GridCol({ order: 4, span: 1 }) {\n    Row() {\n      Text('1')\n    }.width('100%').height('50vp')\n  }.backgroundColor('rgb(213,213,213)')\n\n  GridCol({ order: 3, span: 1 }) {\n    Row() {\n      Text('2')\n    }.width('100%').height('50vp')\n  }.backgroundColor('rgb(150,150,150)')\n\n  GridCol({ order: 2, span: 1 }) {\n    Row() {\n      Text('3')\n    }.width('100%').height('50vp')\n  }.backgroundColor('rgb(0,74,175)')\n\n  GridCol({ order: 1, span: 1 }) {\n    Row() {\n      Text('4')\n    }.width('100%').height('50vp')\n  }.backgroundColor('rgb(39,135,217)')\n}.border({ width: 1, color: 'rgb(39,135,217)' }).height('200vp')\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(674332)/* ["default"] */.A) + "",
            width: "483",
            height: "268"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当order类型为GridColColumnOption时，支持6种不同尺寸（xs，sm，md，lg，xl，xxl）设备中子组件排序次序设置。在xs设备中，子组件排列顺序为1234；sm为2341，md为3412，lg为2431。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct OrderColumnOptionExample {\n  @State currentBp: string = 'unknown'\n\n  build() {\n    Column({ space: 5 }) {\n      GridRow({ columns: 12 }) {\n        GridCol({\n          order: { xs: 1, sm: 5, md: 3, lg: 7 }, span: 1 }) {\n          Row() {\n            Text('1')\n          }.width('100%').height('50vp')\n        }.backgroundColor('rgb(213,213,213)')\n\n        GridCol({\n          order: { xs: 2, sm: 2, md: 6, lg: 1 }, span: 1 }) {\n          Row() {\n            Text('2')\n          }.width('100%').height('50vp')\n        }.backgroundColor('rgb(150,150,150)')\n\n        GridCol({ order: { xs: 3, sm: 3, md: 1, lg: 6 }, span: 1 }) {\n          Row() {\n            Text('3')\n          }.width('100%').height('50vp')\n        }.backgroundColor('rgb(0,74,175)')\n\n        GridCol({ order: { xs: 4, sm: 4, md: 2, lg: 5 }, span: 1 }) {\n          Row() {\n            Text('4')\n          }.width('100%').height('50vp')\n        }.backgroundColor('rgb(39,135,217)')\n      }.border({ width: 1, color: 'rgb(39,135,217)' }).height('200vp').onBreakpointChange((breakpoint) => {\n        this.currentBp = breakpoint\n      })\n\n      Text(this.currentBp)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(406771)/* ["default"] */.A) + "",
            width: "1046",
            height: "480"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "栅格组件的嵌套使用",
      children: "栅格组件的嵌套使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格组件也可以嵌套使用，完成一些复杂的布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，栅格把整个空间分为12份。第一层GridRow嵌套GridCol，分为中间大区域以及“footer”区域。第二层GridRow嵌套GridCol，分为“left”和“right”区域。子组件空间按照上一层父组件的空间划分，粉色的区域是屏幕空间的12列，绿色和蓝色的区域是父组件GridCol的12列，依次进行空间的划分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct GridRowExample {\n  build() {\n    GridRow({ columns: 12 }) {\n      GridCol({ span: 12 }) {\n        GridRow({ columns: 12 }) {\n          GridCol({ span: 2 }) {\n            Row() {\n              Text('left').fontSize(24)\n            }\n            .justifyContent(FlexAlign.Center)\n            .height('90%')\n          }.backgroundColor('#ff41dbaa')\n\n          GridCol({ span: 10 }) {\n            Row() {\n              Text('right').fontSize(24)\n            }\n            .justifyContent(FlexAlign.Center)\n            .height('90%')\n          }.backgroundColor('#ff4168db')\n        }\n        .backgroundColor('#19000000')\n      }\n\n      GridCol({ span: 12 }) {\n        Row() {\n          Text('footer').width('100%').textAlign(TextAlign.Center)\n        }.width('100%').height('10%').backgroundColor(Color.Pink)\n      }\n    }.width('100%').height(300)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224141)/* ["default"] */.A) + "",
        width: "630",
        height: "242"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "综上所述，栅格组件提供了丰富的自定义能力，功能非常灵活和强大。只需要明确栅格在不同断点下的Columns、Margin、Gutter及span等参数，即可确定最终布局，无需关心具体的设备类型及设备状态（如横竖屏）等。"
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
373089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957740-cf05bb0c0f823b8f54326c05999a0210.gif");

},
765306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957742-c5cbab4a38c7c7aee2a1fa3aa48ad923.png");

},
750671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477741-d5bfd374b441aa9e1552056f37ca8e8b.gif");

},
387144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477743-f89291bf7e634261dc0ac73ac2998a28.png");

},
387102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798090-62dbd07e78e016424536a8ced8091fa3.png");

},
898080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798094-71824b4d18076dee4d1c1fa8f87a857c.png");

},
406771(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437791-a45ae7697330fd338cb433c9538327a0.gif");

},
224141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
661955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477739-0924140c33dbd7f03d3680ae8e3c61c9.png");

},
281363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957744-b1ffcc30d8aa1d146bd46129773989f9.png");

},
774812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437785-0e55a71cf7c3f5bf1ec7488aefcb4a17.png");

},
944324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477745-2069acf1802289d8c5e1ee12d700da61.gif");

},
376010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798092-034cab9dce8514d9c1f7f2482da83a62.png");

},
674332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798096-f72120992d24fb87ea84d4ed195d7132.png");

},
849258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437789-7948861b2e92d4166aa8e877702e3f41.gif");

},
233379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957738-e062cabc511e0714743acffc904c5b67.gif");

},
411199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437787-634739602677c0938cdfcd00b59db546.png");

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