"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["40006"], {
226797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_grid_and_column_layout_ts_container_gridrow_ts_container_gridrow_md_0e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-grid-and-column-layout-ts-container-gridrow-ts-container-gridrow-md-0e8.json
var site_docs_ref_arkui_api_arkui_declarative_comp_grid_and_column_layout_ts_container_gridrow_ts_container_gridrow_md_0e8_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow","title":"GridRow","description":"栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow.md","sourceDirName":"arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow","slug":"/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"GridRow","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridrow","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-gridrow"},"sidebar":"ref","previous":{"title":"RelativeContainer","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer"},"next":{"title":"GridCol","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow.md


const frontMatter = {
	title: 'GridRow',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridrow',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-gridrow'
};
const contentTitle = 'GridRow';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "GridRowOptions对象说明",
  "id": "gridrowoptions对象说明",
  "level": 2
}, {
  "value": "GutterOption",
  "id": "gutteroption",
  "level": 2
}, {
  "value": "GridRowColumnOption",
  "id": "gridrowcolumnoption",
  "level": 2
}, {
  "value": "GridRowSizeOption",
  "id": "gridrowsizeoption",
  "level": 2
}, {
  "value": "BreakPoints",
  "id": "breakpoints",
  "level": 2
}, {
  "value": "BreakpointsReference枚举说明",
  "id": "breakpointsreference枚举说明",
  "level": 2
}, {
  "value": "GridRowDirection枚举说明",
  "id": "gridrowdirection枚举说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "alignItems10+",
  "id": "alignitems10",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onBreakpointChange",
  "id": "onbreakpointchange",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（栅格布局的基本用法）",
  "id": "示例1栅格布局的基本用法",
  "level": 3
}, {
  "value": "示例2（AlignItems的基本用法）",
  "id": "示例2alignitems的基本用法",
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
        id: "gridrow",
        children: "GridRow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["栅格容器组件，仅可以和栅格子组件(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol",
        children: "GridCol"
      }), ")在栅格布局场景中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88328)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以包含GridCol子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridRow(option?: GridRowOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格行布局容器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridrowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GridRowOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栅格布局子组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gridrowoptions对象说明",
      children: "GridRowOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置栅格行布局容器的布局选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridrowcolumnoption",
              children: "GridRowColumnOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gutter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gutteroption",
              children: "GutterOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "breakpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#breakpoints",
              children: "BreakPoints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置断点值的断点数组以及基于应用窗口或容器尺寸的相应参照。  默认值：  {  value: [\"320vp\", \"600vp\", \"840vp\"],  reference: BreakpointsReference.WindowSize  }  非法值：按默认值处理。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridrowdirection%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "GridRowDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栅格布局排列方向。  默认值：GridRowDirection.Row  非法值：按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gutteroption",
      children: "GutterOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格布局间距类型，用于描述栅格子组件不同方向的间距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridrowsizeoption",
              children: "GridRowSizeOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridrowsizeoption",
              children: "GridRowSizeOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gridrowcolumnoption",
      children: "GridRowColumnOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格在不同宽度设备类型下，栅格列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 20之前，仅配置部分断点下GridRow组件的栅格列数，取已配置的更小断点的栅格列数补全未配置的栅格列数。若未配置更小断点的栅格列数，以默认栅格列数12补全未配置的栅格列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "columns: {xs:2, md:4, lg:8} // 等于配置 columns: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}\ncolumns: {md:4, lg:8} // 等于配置 columns: {xs:12, sm:12, md:4, lg:8, xl:8, xxl:8}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 20及以后，仅配置部分断点下GridRow组件的栅格列数，取已配置的更小断点的栅格列数补全未配置的栅格列数。若未配置更小断点的栅格列数，取已配置的更大断点的栅格列数补全未配置的栅格列数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "columns: {xs:2, md:4, lg:8} // 等于配置 columns: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}\ncolumns: {md:4, lg:8} // 等于配置 columns: {xs:4, sm:4, md:4, lg:8, xl:8, xxl:8}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议手动配置不同断点下GridRow组件的栅格列数，避免默认补全的栅格列数的布局效果不符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每列栅格的宽度为GridRow的内容区大小减去栅格子组件的间距gutter，再除以总的栅格列数。比如，宽800px的GridRow设置columns为12，gutter设置为10px，padding设置为20px，那么每列栅格的宽度为(800 - 20 * 2 - 10 * 11) / 12。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "xs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栅格大小为xs的设备上，栅格容器组件的栅格列数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栅格大小为sm的设备上，栅格容器组件的栅格列数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栅格大小为md的设备上，栅格容器组件的栅格列数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栅格大小为lg的设备上，栅格容器组件的栅格列数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栅格大小为xl的设备上，栅格容器组件的栅格列数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xxl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栅格大小为xxl的设备上，栅格容器组件的栅格列数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gridrowsizeoption",
      children: "GridRowSizeOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格在不同宽度设备类型下，gutter的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "xs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在最小宽度类型设备上，栅格子组件的间距。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在小宽度类型设备上，栅格子组件的间距。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在中等宽度类型设备上，栅格子组件的间距。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在大宽度类型设备上，栅格子组件的间距。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在特大宽度类型设备上，栅格子组件的间距。  默认值：0vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xxl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在超大宽度类型设备上，栅格子组件的间距。  默认值：0vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "breakpoints",
      children: "BreakPoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置栅格容器组件的断点。更多断点的说明参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout#%E6%A0%85%E6%A0%BC%E5%AE%B9%E5%99%A8%E6%96%AD%E7%82%B9",
        children: "栅格容器断点"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置断点位置的单调递增数组。  默认值：[\"320vp\", \"600vp\", \"840vp\"]  非法值：按默认值处理。  单位：vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#breakpointsreference%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BreakpointsReference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断点切换参照物。  默认值：BreakpointsReference.WindowSize  非法值：按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // 启用xs、sm、md共3个断点\n  breakpoints: {value: ['100vp', '200vp']}\n  // 启用xs、sm、md、lg共4个断点，断点范围值必须单调递增\n  breakpoints: {value: ['320vp', '600vp', '840vp']}\n  // 启用xs、sm、md、lg、xl共5个断点，断点范围数量不可超过断点可取值数量-1\n  breakpoints: {value: ['320vp', '600vp', '840vp', '1080vp']}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "breakpointsreference枚举说明",
      children: "BreakpointsReference枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置栅格容器组件的断点参照物。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WindowSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以窗口为参照。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ComponentSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以容器为参照。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gridrowdirection枚举说明",
      children: "GridRowDirection枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格元素排列方向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(338380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "栅格元素仅支持Row/RowReverse排列，不支持column/ColumnReverse方向排列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "栅格子组件仅能通过span、offset计算子组件位置与大小。多个子组件span超过规定列数时自动换行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单个元素span大小超过最大列数时后台默认span为最大column数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新一行的Offset加上子组件的span超过总列数时，将下一个子组件在新的一行放置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例：Item1: GridCol({ span: 6 })， Item2: GridCol({ span: 8, offset:11 })。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(645585)/* ["default"] */.A) + "",
            width: "339",
            height: "174"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栅格元素按照行方向排列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RowReverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栅格元素按照逆序行方向排列。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alignitems10",
      children: "alignItems10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alignItems(value: ItemAlign)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置GridRow中的GridCol垂直主轴方向对齐方式。GridCol本身也可通过alignSelf(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#itemalign",
        children: "ItemAlign"
      }), ")设置自身对齐方式。当上述两种对齐方式都设置时，以GridCol自身设置为准。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#itemalign",
              children: "ItemAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GridRow中的GridCol垂直主轴方向对齐方式。  默认值：ItemAlign.Start  非法值：按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  ItemAlign支持的枚举：ItemAlign.Start、ItemAlign.Center、ItemAlign.End、ItemAlign.Stretch。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbreakpointchange",
      children: "onBreakpointChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBreakpointChange(callback: (breakpoints: string) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断点发生变化时触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461533)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "#breakpointsreference%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
          children: "断点参照物"
        }), "设置为BreakpointsReference.ComponentSize时，不建议在onBreakpointChange回调中动态修改GridRow组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#padding",
          children: "padding"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
          children: "margin"
        }), "属性值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(breakpoints: string) => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "breakpoints取值为\"xs\"、\"sm\"、\"md\"、\"lg\"、\"xl\"、\"xxl\"。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1栅格布局的基本用法",
      children: "示例1（栅格布局的基本用法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示GridRow组件的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GridRowExample {\n  @State bgColors: Color[] = [Color.Red, Color.Orange, Color.Yellow, Color.Green, Color.Pink, Color.Grey, Color.Blue, Color.Brown]\n  @State currentBp: string = 'unknown'\n\n  build() {\n    Column() {\n      GridRow({\n        columns: 5,\n        gutter: { x: 5, y: 10 },\n        breakpoints: { value: ['400vp', '600vp', '800vp'],\n          reference: BreakpointsReference.WindowSize },\n        direction: GridRowDirection.Row\n      }) {\n        ForEach(this.bgColors, (color: Color) => {\n          GridCol({ span: { xs: 1, sm: 2, md: 3, lg: 4 }, offset: 0, order: 0 }) {\n            Row().width('100%').height('20vp')\n          }.borderColor(color).borderWidth(2)\n        })\n      }.width('100%').height('100%')\n      .onBreakpointChange((breakpoint) => {\n        this.currentBp = breakpoint\n      })\n    }.width('80%').margin({ left: 10, top: 5, bottom: 5 }).height(200)\n    .border({ color: '#880606', width: 2 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(858158)/* ["default"] */.A) + "",
        width: "597",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2alignitems的基本用法",
      children: "示例2（AlignItems的基本用法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示GridCol组件在不同alignItems对齐方式下的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct AlignItemsDemo {\n  bgColors: Color[] = [Color.Red, Color.Orange, Color.Yellow, Color.Green, Color.Pink];\n  @Param alignment: ItemAlign = ItemAlign.Start; // 接收父组件传入的alignItems属性值\n\n  ToString(alignment: ItemAlign): string {\n    switch (alignment) {\n      case ItemAlign.Start:\n        return \"ItemAlign.Start\";\n      case ItemAlign.Center:\n        return \"ItemAlign.Center\";\n      case ItemAlign.End:\n        return \"ItemAlign.End\";\n      case ItemAlign.Stretch:\n        return \"ItemAlign.Stretch\";\n      default:\n        return \"ItemAlign.Auto\";\n    }\n  }\n\n  build() {\n    Column() {\n      Text(this.ToString(this.alignment))\n        .fontSize(9)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n        .alignSelf(ItemAlign.Start)\n      GridRow({\n        columns: 5,\n        gutter: { x: 5, y: 10 },\n      }) {\n        ForEach(this.bgColors, (color: Color, index: number) => {\n          GridCol({ span: 1 }) {\n            Row() {\n            }.width('100%').height(`${(index + 1) * 20}%`) // GridCol设置不同的高度，方便观察alignItems属性的效果\n          }.borderColor(color).borderWidth(2)\n        })\n      }\n      .border({ color: '#880606', width: 2 })\n      .alignItems(this.alignment)\n      .width('100%')\n    }\n    .height(\"20%\")\n  }\n}\n\n@Entry\n@ComponentV2\nstruct GridRowExample {\n  alignmentArray: ItemAlign[] = [ItemAlign.Start, ItemAlign.Center, ItemAlign.End, ItemAlign.Stretch];\n\n  build() {\n    Column({ space: 15 }) {\n      ForEach(this.alignmentArray, (ele: ItemAlign) => {\n        AlignItemsDemo({ alignment: ele })\n      })\n    }.width('80%').margin({ left: 10, top: 5, bottom: 5 }).height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321279)/* ["default"] */.A) + "",
        width: "397",
        height: "837"
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
858158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439647-ba6ea243e84be191fffbab4d05414bd6.png");

},
338380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
461533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
88328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
321279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959602-664525b2aad62e7257a5e6381a3121ca.png");

},
645585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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