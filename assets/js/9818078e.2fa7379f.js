"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["134574"], {
507077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_rows_columns_and_stacking_ts_container_flex_ts_container_flex_md_981_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-rows-columns-and-stacking-ts-container-flex-ts-container-flex-md-981.json
var site_docs_ref_arkui_api_arkui_declarative_comp_rows_columns_and_stacking_ts_container_flex_ts_container_flex_md_981_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex","title":"Flex","description":"Flex是以弹性方式布局子组件的容器组件，能够高效地排列、对齐子元素并分配剩余空间。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex.md","sourceDirName":"arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex","slug":"/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Flex","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-flex"},"sidebar":"ref","previous":{"title":"手势公共接口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common"},"next":{"title":"Column","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex.md


const frontMatter = {
	title: 'Flex',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-flex'
};
const contentTitle = 'Flex';

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
  "value": "FlexOptions对象说明",
  "id": "flexoptions对象说明",
  "level": 2
}, {
  "value": "FlexSpaceOptions12+",
  "id": "flexspaceoptions12",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
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
  "value": "示例1（子组件排列方向）",
  "id": "示例1子组件排列方向",
  "level": 3
}, {
  "value": "示例2（子组件单/多行排列）",
  "id": "示例2子组件单多行排列",
  "level": 3
}, {
  "value": "示例3（子组件在主轴上的对齐格式）",
  "id": "示例3子组件在主轴上的对齐格式",
  "level": 3
}, {
  "value": "示例4（子组件在交叉轴上的对齐方式）",
  "id": "示例4子组件在交叉轴上的对齐方式",
  "level": 3
}, {
  "value": "示例5（多行内容的对齐方式）",
  "id": "示例5多行内容的对齐方式",
  "level": 3
}, {
  "value": "示例6（子组件单/多行排列时的主/交叉轴间距）",
  "id": "示例6子组件单多行排列时的主交叉轴间距",
  "level": 3
}, {
  "value": "示例7（宽度自适应的Flex容器）",
  "id": "示例7宽度自适应的flex容器",
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
        id: "flex",
        children: "Flex"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flex是以弹性方式布局子组件的容器组件，能够高效地排列、对齐子元素并分配剩余空间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体指南请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-flex-layout",
        children: "弹性布局"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515292)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 7开始支持。后续版本如有新增内容将采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Flex组件在渲染时存在二次布局过程，因此在对性能有严格要求的场景下建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
          children: "Column"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
          children: "Row"
        }), "代替。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance#section12745188175420",
          children: "布局优化指导-合理使用布局组件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Flex组件主轴不设置长度时默认撑满父容器，如果包含设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#position",
          children: "position"
        }), "的子组件，此时Flex组件不会撑满父容器。", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
          children: "Column"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
          children: "Row"
        }), "组件主轴不设置长度时默认跟随子节点大小。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flex、Column、Row组件在没有子节点且不设置宽高时，默认宽高为-1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主轴长度可设置为auto使Flex自适应子组件布局，自适应时，Flex长度受constraintSize属性以及父容器传递的最大最小长度限制，且constraintSize属性优先级更高。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以包含子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flex(value?: FlexOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flex布局容器。"
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
          children: "参数:"
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
              href: "#flexoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "FlexOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹性布局子组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flexoptions对象说明",
      children: "FlexOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Flex子组件的排列对齐方式。"
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
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#flexdirection",
              children: "FlexDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子组件在Flex容器上排列的方向，即主轴的方向。  默认值：FlexDirection.Row  异常值按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#flexwrap",
              children: "FlexWrap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Flex容器是单行/列还是多行/列排列。  默认值：FlexWrap.NoWrap  异常值按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  在多行布局时，通过交叉轴方向，确认新行堆叠方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "justifyContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#flexalign",
              children: "FlexAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有子组件在Flex容器主轴上的对齐格式。  默认值：FlexAlign.Start  异常值按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alignItems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#itemalign",
              children: "ItemAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有子组件在Flex容器交叉轴上的对齐格式。  默认值：ItemAlign.Start  异常值按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alignContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#flexalign",
              children: "FlexAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当交叉轴存在额外空间时，多行内容之间的对齐方式。仅在wrap为Wrap或WrapReverse下生效。  默认值：FlexAlign.Start  异常值按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "space12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex#flexspaceoptions12",
              children: "FlexSpaceOptions12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所有子组件在Flex容器主轴或交叉轴的间距。  默认值：{main: LengthMetrics.px(0), cross: LengthMetrics.px(0)}  非法值：按默认值处理。  space为负数、百分比或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flexspaceoptions12",
      children: "FlexSpaceOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Flex容器的子组件在主轴或交叉轴的间距。"
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
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flex容器主轴上的space。  默认值：LengthMetrics.px(0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cross"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flex容器交叉轴上的space。  默认值：LengthMetrics.px(0)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
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
      id: "示例1子组件排列方向",
      children: "示例1（子组件排列方向）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置direction实现不同的子组件排列方向效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct FlexExample1 {\n  build() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('direction:Row').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.Row }) { // 子组件在容器主轴上行布局\n          Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('20%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('4').width('20%').height(50).backgroundColor(0xD2B48C)\n        }\n        .height(70)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('direction:RowReverse').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.RowReverse }) { // 子组件在容器主轴上反向行布局\n          Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('20%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('4').width('20%').height(50).backgroundColor(0xD2B48C)\n        }\n        .height(70)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('direction:Column').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.Column }) { // 子组件在容器主轴上列布局\n          Text('1').width('100%').height(40).backgroundColor(0xF5DEB3)\n          Text('2').width('100%').height(40).backgroundColor(0xD2B48C)\n          Text('3').width('100%').height(40).backgroundColor(0xF5DEB3)\n          Text('4').width('100%').height(40).backgroundColor(0xD2B48C)\n        }\n        .height(160)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('direction:ColumnReverse').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.ColumnReverse }) { // 子组件在容器主轴上反向列布局\n          Text('1').width('100%').height(40).backgroundColor(0xF5DEB3)\n          Text('2').width('100%').height(40).backgroundColor(0xD2B48C)\n          Text('3').width('100%').height(40).backgroundColor(0xF5DEB3)\n          Text('4').width('100%').height(40).backgroundColor(0xD2B48C)\n        }\n        .height(160)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762477)/* ["default"] */.A) + "",
        width: "439",
        height: "714"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2子组件单多行排列",
      children: "示例2（子组件单/多行排列）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置wrap实现子组件单行或多行的排列效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct FlexExample2 {\n  build() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('Wrap').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ wrap: FlexWrap.Wrap }) { // 子组件多行布局\n          Text('1').width('50%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('50%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('50%').height(50).backgroundColor(0xD2B48C)\n        }\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('NoWrap').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ wrap: FlexWrap.NoWrap }) { // 子组件单行布局\n          Text('1').width('50%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('50%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('50%').height(50).backgroundColor(0xF5DEB3)\n        }\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('WrapReverse').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ wrap: FlexWrap.WrapReverse , direction:FlexDirection.Row }) { // 子组件反向多行布局\n          Text('1').width('50%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('50%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('50%').height(50).backgroundColor(0xD2B48C)\n        }\n        .width('90%')\n        .height(120)\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(454187)/* ["default"] */.A) + "",
        width: "438",
        height: "498"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3子组件在主轴上的对齐格式",
      children: "示例3（子组件在主轴上的对齐格式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置justifyContent实现子组件在主轴上不同的对齐效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Component\nstruct JustifyContentFlex {\n  justifyContent : number = 0;\n\n  build() {\n    Flex({ justifyContent: this.justifyContent }) {\n      Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n      Text('2').width('20%').height(50).backgroundColor(0xD2B48C)\n      Text('3').width('20%').height(50).backgroundColor(0xF5DEB3)\n    }\n    .width('90%')\n    .padding(10)\n    .backgroundColor(0xAFEEEE)\n  }\n}\n\n@Entry\n@Component\nstruct FlexExample3 {\n  build() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('justifyContent:Start').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        JustifyContentFlex({ justifyContent: FlexAlign.Start }) // 子组件在容器主轴上首端对齐\n\n        Text('justifyContent:Center').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        JustifyContentFlex({ justifyContent: FlexAlign.Center }) // 子组件在容器主轴上居中对齐\n\n        Text('justifyContent:End').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        JustifyContentFlex({ justifyContent: FlexAlign.End }) // 子组件在容器主轴上尾端对齐\n\n        Text('justifyContent:SpaceBetween').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        JustifyContentFlex({ justifyContent: FlexAlign.SpaceBetween }) // 子组件在容器主轴上均分容器布局，第一个子组件与行首对齐，最后一个子组件与行尾对齐。\n\n        Text('justifyContent:SpaceAround').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        JustifyContentFlex({ justifyContent: FlexAlign.SpaceAround }) // 子组件在容器主轴上均分容器布局，第一个子组件到行首的距离和最后一个子组件到行尾的距离是相邻子组件之间距离的一半。\n\n        Text('justifyContent:SpaceEvenly').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        JustifyContentFlex({ justifyContent: FlexAlign.SpaceEvenly }) // 子组件在容器主轴上均分容器布局，子组件之间的距离与第一子组件到行首、最后一个子组件到行尾的距离相等\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167792)/* ["default"] */.A) + "",
        width: "435",
        height: "710"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4子组件在交叉轴上的对齐方式",
      children: "示例4（子组件在交叉轴上的对齐方式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置alignItems实现子组件在交叉轴上的不同的对齐效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Component\nstruct AlignItemsFlex {\n  alignItems : number = 0;\n\n  build() {\n    Flex({ alignItems: this.alignItems }) {\n      Text('1').width('33%').height(30).backgroundColor(0xF5DEB3)\n      Text('2').width('33%').height(40).backgroundColor(0xD2B48C)\n      Text('3').width('33%').height(50).backgroundColor(0xF5DEB3)\n    }\n    .size({width: '90%', height: 80})\n    .padding(10)\n    .backgroundColor(0xAFEEEE)\n  }\n}\n\n@Entry\n@Component\nstruct FlexExample4 {\n  build() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('alignItems:Auto').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignItemsFlex({ alignItems: ItemAlign.Auto }) // 子组件在容器交叉轴上首部对齐\n\n        Text('alignItems:Start').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignItemsFlex({ alignItems: ItemAlign.Start }) // 子组件在容器交叉轴上首部对齐\n\n        Text('alignItems:Center').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignItemsFlex({ alignItems: ItemAlign.Center }) // 子组件在容器交叉轴上居中对齐\n\n        Text('alignItems:End').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignItemsFlex({ alignItems: ItemAlign.End }) // 子组件在容器交叉轴上尾部对齐\n\n        Text('alignItems:Stretch').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignItemsFlex({ alignItems: ItemAlign.Stretch }) // 子组件在容器交叉轴上拉伸填充\n\n        Text('alignItems:Baseline').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignItemsFlex({ alignItems: ItemAlign.Baseline }) // 子组件在容器交叉轴上与文本基线对齐\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92363)/* ["default"] */.A) + "",
        width: "410",
        height: "727"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5多行内容的对齐方式",
      children: "示例5（多行内容的对齐方式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置alignContent实现多行内容的不同对齐效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Component\nstruct AlignContentFlex {\n  alignContent: number = 0;\n\n  build() {\n    Flex({ wrap: FlexWrap.Wrap, alignContent: this.alignContent }) {\n      Text('1').width('50%').height(20).backgroundColor(0xF5DEB3)\n      Text('2').width('50%').height(20).backgroundColor(0xD2B48C)\n      Text('3').width('50%').height(20).backgroundColor(0xD2B48C)\n    }\n    .size({ width: '90%', height: 90 })\n    .padding(10)\n    .backgroundColor(0xAFEEEE)\n  }\n}\n\n@Entry\n@Component\nstruct FlexExample5 {\n  build() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('alignContent:Start').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignContentFlex({ alignContent: FlexAlign.Start }) // 多行布局下子组件首部对齐\n\n        Text('alignContent:Center').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignContentFlex({ alignContent: FlexAlign.Center }) // 多行布局下子组件居中对齐\n\n        Text('alignContent:End').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignContentFlex({ alignContent: FlexAlign.End }) // 多行布局下子组件尾部对齐\n\n        Text('alignContent:SpaceBetween').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignContentFlex({ alignContent: FlexAlign.SpaceBetween }) // 多行布局下第一行子组件与列首对齐，最后一行子组件与列尾对齐\n\n        Text('alignContent:SpaceAround').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        AlignContentFlex({ alignContent: FlexAlign.SpaceAround }) // 多行布局下第一行子组件到列首的距离和最后一行子组件到列尾的距离是相邻行之间距离的一半\n\n        Text('alignContent:SpaceEvenly').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({\n          wrap: FlexWrap.Wrap,\n          alignContent: FlexAlign.SpaceEvenly\n        }) { // 多行布局下相邻行之间的距离与第一行子组件到列首的距离、最后一行子组件到列尾的距离完全一样\n          Text('1').width('50%').height(20).backgroundColor(0xF5DEB3)\n          Text('2').width('50%').height(20).backgroundColor(0xD2B48C)\n          Text('3').width('50%').height(20).backgroundColor(0xF5DEB3)\n          Text('4').width('50%').height(20).backgroundColor(0xD2B48C)\n          Text('5').width('50%').height(20).backgroundColor(0xF5DEB3)\n        }\n        .size({ width: '90%', height: 100 })\n        .padding({ left: 10, right: 10 })\n        .backgroundColor(0xAFEEEE)\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(815763)/* ["default"] */.A) + "",
        width: "382",
        height: "761"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6子组件单多行排列时的主交叉轴间距",
      children: "示例6（子组件单/多行排列时的主/交叉轴间距）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置space为单/多行排列的子组件确定在主/交叉轴上的间距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {LengthMetrics} from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct FlexExample2 {\n  build() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('Wrap').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ wrap: FlexWrap.Wrap, space: {main: LengthMetrics.px(50), cross: LengthMetrics.px(50)} }) { // 子组件多行布局\n          Text('1').width('40%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('40%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('40%').height(50).backgroundColor(0xD2B48C)\n        }\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('NoWrap').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ wrap: FlexWrap.NoWrap, space: {main: LengthMetrics.px(50), cross: LengthMetrics.px(50)} }) { // 子组件单行布局\n          Text('1').width('50%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('50%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('50%').height(50).backgroundColor(0xF5DEB3)\n        }\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('WrapReverse').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ wrap: FlexWrap.WrapReverse, direction:FlexDirection.Row, space: {main: LengthMetrics.px(50), cross: LengthMetrics.px(50)} }) { // 子组件反向多行布局\n          Text('1').width('40%').height(50).backgroundColor(0xF5DEB3)\n          Text('2').width('40%').height(50).backgroundColor(0xD2B48C)\n          Text('3').width('40%').height(50).backgroundColor(0xD2B48C)\n        }\n        .width('90%')\n        .height(120)\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(976316)/* ["default"] */.A) + "",
        width: "559",
        height: "683"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7宽度自适应的flex容器",
      children: "示例7（宽度自适应的Flex容器）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了Flex在宽度设置auto后可以自适应子组件布局的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Demo {\n  @Require @Prop text: string\n\n  build() {\n    Button() {\n      Flex() {\n        Image($r('sys.media.ohos_ic_public_voice'))\n          .width(16)\n          .height(16)\n\n        Row() {\n          Text(this.text)\n            .margin({\n              left: 6,\n              right: 6\n            })\n            .fontSize(14)\n            .maxLines(1)\n            .textOverflow({ overflow: TextOverflow.Ellipsis })\n        }\n\n        Image($r('sys.media.ohos_ic_public_sound'))\n          .width(16)\n          .height(16)\n      }.width('auto')\n    }\n    .backgroundColor(0xAFEEEE)\n    .height(36)\n    .padding({ left: 16, right: 16 })\n    .constraintSize({ maxWidth: 156 })\n    .width('auto')\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 12 }) {\n      Text('Width does not reach max length').fontSize(11).fontColor(0XCCCCCC).width('50%')\n      Demo({ text: '123' })\n      Text('Width reaches max length').fontSize(11).fontColor(0XCCCCCC).width('50%')\n      Demo({ text: '1234567890-1234567890-1234567890-1234567890' })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(218995)/* ["default"] */.A) + "",
        width: "241",
        height: "155"
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
454187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479591-51b134b5e713451933b2d176b2673971.png");

},
92363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439637-2206002a3b7bde81d1f9ba72224df8fe.png");

},
762477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959590-823004001a63ae45034994b2d5b64bd3.png");

},
976316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479593-0d023eafb4ce39fc9460329aabf94076.png");

},
815763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959592-db40eb3ce3477ebf7a185eca3dfd57e2.png");

},
515292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
167792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799942-fa927eb5f3d44b55366af1bc61ba9b5b.png");

},
218995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799944-43b20be0bc4899b38aea312b0216f404.png");

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