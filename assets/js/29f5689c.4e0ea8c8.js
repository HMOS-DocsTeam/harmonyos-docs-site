"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["869922"], {
308284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_grid_and_column_layout_ts_container_columnsplit_ts_container_columnsplit_md_29f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-grid-and-column-layout-ts-container-columnsplit-ts-container-columnsplit-md-29f.json
var site_docs_ref_arkui_api_arkui_declarative_comp_grid_and_column_layout_ts_container_columnsplit_ts_container_columnsplit_md_29f_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit","title":"ColumnSplit","description":"将子组件纵向布局，并在每个子组件之间插入横向分割线。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit.md","sourceDirName":"arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit","slug":"/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ColumnSplit","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-columnsplit","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-columnsplit"},"sidebar":"ref","previous":{"title":"GridCol","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol"},"next":{"title":"RowSplit","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit.md


const frontMatter = {
	title: 'ColumnSplit',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-columnsplit',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-columnsplit'
};
const contentTitle = 'ColumnSplit';

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
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "resizeable",
  "id": "resizeable",
  "level": 3
}, {
  "value": "divider10+",
  "id": "divider10",
  "level": 3
}, {
  "value": "ColumnSplitDividerStyle10+对象说明",
  "id": "columnsplitdividerstyle10对象说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置可拖动的ColumnSplit组件）",
  "id": "示例1设置可拖动的columnsplit组件",
  "level": 3
}, {
  "value": "示例2（设置带有间隔的ColumnSplit组件）",
  "id": "示例2设置带有间隔的columnsplit组件",
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
        id: "columnsplit",
        children: "ColumnSplit"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将子组件纵向布局，并在每个子组件之间插入横向分割线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134688)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以包含子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ColumnSplit通过分割线限制子组件的高度。初始化时，分割线位置根据子组件的高度来计算。初始化后，动态修改子组件的高度不生效，分割线位置保持不变，可通过拖动相邻分割线改变子组件高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化后，动态修改", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
        children: "margin"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#border",
        children: "border"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#padding",
        children: "padding"
      }), "通用属性导致子组件尺寸大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的高度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ColumnSplit()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带分割线的子组件纵向布局。"
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
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789755)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ColumnSplit组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping",
        children: "形状裁剪"
      }), "的默认值为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resizeable",
      children: "resizeable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resizeable(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置分割线是否可拖拽。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分割线是否可拖拽。设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。  默认值：false  非法值：按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divider10",
      children: "divider10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "divider(value: ColumnSplitDividerStyle | null)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置分割线的margin。"
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
              href: "#columnsplitdividerstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ColumnSplitDividerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "columnsplitdividerstyle10对象说明",
      children: "ColumnSplitDividerStyle10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子组件与上下分割线的距离。"
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
            children: "startMargin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子组件与其上方分割线的距离。  默认值：0vp  非法值：按默认值处理，此时", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#getinspectorbykey9",
              children: "getInspectorByKey()"
            }), "接口获取到的属性值为undefined。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endMargin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子组件与其下方分割线的距离。  默认值：0vp  非法值：按默认值处理，此时", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#getinspectorbykey9",
              children: "getInspectorByKey()"
            }), "接口获取到的属性值为undefined。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731156)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit",
        children: "RowSplit"
      }), "相同，ColumnSplit的分割线可调整上下两侧子组件的高度，子组件的高度调整范围受其最大最小高度限制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
        children: "margin"
      }), "等通用属性，未设置clip属性时，其默认值为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置可拖动的columnsplit组件",
      children: "示例1（设置可拖动的ColumnSplit组件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示如何设置可拖动的ColumnSplit组件及其效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ColumnSplitExample {\n  build() {\n    Column() {\n      Text('The dividing line can be dragged').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      ColumnSplit() {\n        Text('1').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n        Text('2').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)\n        Text('3').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n        Text('4').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)\n        Text('5').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n      }\n      .borderWidth(1)\n      .resizeable(true) // 可拖动\n      .width('90%').height('60%')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407566)/* ["default"] */.A) + "",
        width: "526",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置带有间隔的columnsplit组件",
      children: "示例2（设置带有间隔的ColumnSplit组件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示如何设置带有间隔的ColumnSplit组件及其效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ColumnSplitDividerExample {\n  build() {\n    Column() {\n      Text('The dividing line can be dragged').fontSize(9).fontColor(0xCCCCCC).width('90%')\n      ColumnSplit() {\n        Text('1').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n        Text('2').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)\n        Text('3').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n        Text('4').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)\n        Text('5').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n      }\n      .borderWidth(1)\n      .divider({ startMargin: 5, endMargin: 5 }) // 设置间隔\n      .width('90%')\n      .height('60%')\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537016)/* ["default"] */.A) + "",
        width: "526",
        height: "563"
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
731156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
407566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479603-2997038a1d06b6507dc9e63bd763f777.gif");

},
537016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
134688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
789755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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