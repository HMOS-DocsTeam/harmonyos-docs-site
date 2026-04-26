"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["183792"], {
921297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_rows_columns_and_stacking_ts_container_relativecontainer_ts_container_relativecontainer_md_261_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-rows-columns-and-stacking-ts-container-relativecontainer-ts-container-relativecontainer-md-261.json
var site_docs_ref_arkui_api_arkui_declarative_comp_rows_columns_and_stacking_ts_container_relativecontainer_ts_container_relativecontainer_md_261_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer","title":"RelativeContainer","description":"相对布局组件，用于复杂场景中元素对齐的布局。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer.md","sourceDirName":"arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer","slug":"/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"RelativeContainer","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-relativecontainer","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-relativecontainer"},"sidebar":"ref","previous":{"title":"Stack","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack"},"next":{"title":"GridRow","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer.md


const frontMatter = {
	title: 'RelativeContainer',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-relativecontainer',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-relativecontainer'
};
const contentTitle = 'RelativeContainer';

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
  "value": "guideLine12+",
  "id": "guideline12",
  "level": 3
}, {
  "value": "barrier12+",
  "id": "barrier12",
  "level": 3
}, {
  "value": "barrier12+",
  "id": "barrier12-1",
  "level": 3
}, {
  "value": "GuideLineStyle12+对象说明",
  "id": "guidelinestyle12对象说明",
  "level": 2
}, {
  "value": "GuideLinePosition12+对象说明",
  "id": "guidelineposition12对象说明",
  "level": 2
}, {
  "value": "BarrierStyle12+对象说明",
  "id": "barrierstyle12对象说明",
  "level": 2
}, {
  "value": "BarrierDirection12+枚举说明",
  "id": "barrierdirection12枚举说明",
  "level": 2
}, {
  "value": "LocalizedBarrierStyle12+对象说明",
  "id": "localizedbarrierstyle12对象说明",
  "level": 2
}, {
  "value": "LocalizedBarrierDirection12+枚举说明",
  "id": "localizedbarrierdirection12枚举说明",
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
  "value": "示例1（以容器和容器内组件作为锚点进行布局）",
  "id": "示例1以容器和容器内组件作为锚点进行布局",
  "level": 3
}, {
  "value": "示例2（子组件设置外边距）",
  "id": "示例2子组件设置外边距",
  "level": 3
}, {
  "value": "示例3（设置容器大小自适应内容）",
  "id": "示例3设置容器大小自适应内容",
  "level": 3
}, {
  "value": "示例4（设置偏移）",
  "id": "示例4设置偏移",
  "level": 3
}, {
  "value": "示例5（设置辅助线）",
  "id": "示例5设置辅助线",
  "level": 3
}, {
  "value": "示例6（设置屏障）",
  "id": "示例6设置屏障",
  "level": 3
}, {
  "value": "示例7（设置链）",
  "id": "示例7设置链",
  "level": 3
}, {
  "value": "示例8（链中设置偏移）",
  "id": "示例8链中设置偏移",
  "level": 3
}, {
  "value": "示例9（设置镜像模式）",
  "id": "示例9设置镜像模式",
  "level": 3
}, {
  "value": "示例10（设置链中节点权重）",
  "id": "示例10设置链中节点权重",
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
        id: "relativecontainer",
        children: "RelativeContainer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相对布局组件，用于复杂场景中元素对齐的布局。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["子组件可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#alignrules9",
        children: "alignRules"
      }), "来设置自身在相对容器中的对齐规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537923)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在RelativeContainer组件中，不设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
          children: "width"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "时，对应属性布局表现与设置为100%相同。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 11开始，在RelativeContainer组件中，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
          children: "width"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "设置\"auto\"表示自适应子组件。当width设置\"auto\"时，如果水平方向上子组件以容器作为锚点，则\"auto\"不生效（即视为不设置width），垂直方向上同理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，在RelativeContainer组件中，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width15",
          children: "width"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height15",
          children: "height"
        }), "设置LayoutPolicy.wrapContent表示自适应子组件且被祖先节点尺寸约束，设置LayoutPolicy.fixAtIdealSize表示自适应子组件且不被祖先节点尺寸约束。当width设置wrapContent或fixAtIdealSize时，如果水平方向上子组件直接或间接以容器作为锚点，则容器在该方向上的尺寸不自适应该组件，垂直方向上同理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["相对布局容器内的子组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
          children: "margin"
        }), "含义不同于通用属性的margin，其含义为到该方向上的锚点的距离。若该方向上没有锚点，则该方向的margin不生效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持多个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RelativeContainer()"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持如下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guideline12",
      children: "guideLine12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guideLine(value: Array<GuideLineStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置RelativeContainer容器内的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout#%E4%BD%BF%E7%94%A8%E8%BE%85%E5%8A%A9%E7%BA%BF%E8%BE%85%E5%8A%A9%E5%AE%9A%E4%BD%8D%E5%AD%90%E7%BB%84%E4%BB%B6",
        children: "辅助线"
      }), "，Array中每个项目即为一条guideLine。"]
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
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#guidelinestyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GuideLineStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RelativeContainer容器内的辅助线。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barrier12",
      children: "barrier12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barrier(value: Array<BarrierStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置RelativeContainer容器内的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout#%E5%A4%9A%E4%B8%AA%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B1%8F%E9%9A%9C",
        children: "屏障"
      }), "，Array中每个项目即为一条barrier。"]
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
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#barrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BarrierStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RelativeContainer容器内的屏障。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barrier12-1",
      children: "barrier12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barrier(barrierStyle: Array<LocalizedBarrierStyle>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置RelativeContainer容器内的屏障，Array中每个项目即为一条barrier，支持定义镜像模式的屏障线。"
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
            children: "barrierStyle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedbarrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedBarrierStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RelativeContainer容器内的屏障。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guidelinestyle12对象说明",
      children: "GuideLineStyle12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guideLine参数，用于定义一条guideLine的id、方向和位置。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "guideLine的id，必须是唯一的并且不可与容器内组件重名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#axis",
              children: "Axis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定guideLine的方向。  垂直方向的guideLine仅能作为组件水平方向的锚点，作为垂直方向的锚点时值为0；水平方向的guideLine仅能作为组件垂直方向的锚点，作为水平方向的锚点时值为0。  默认值：Axis.Vertical  非法值：按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#guidelineposition12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GuideLinePosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定guideLine的位置。  当未声明或声明异常值（如undefined）时，guideLine的位置默认为start: 0。start和end两种声明方式选择一种即可。若同时声明，仅start生效。若容器在某个方向的size被声明为\"auto\"，则该方向上guideLine的位置只能使用start方式声明（不允许使用百分比）。  默认值：  {  start: 0  }  非法值：按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guidelineposition12对象说明",
      children: "GuideLinePosition12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guideLine位置参数，用于定义guideLine的位置。"
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "guideLine距离容器左侧或者顶部的距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "guideLine距离容器右侧或者底部的距离。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "barrierstyle12对象说明",
      children: "BarrierStyle12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "barrier的id，必须是唯一的并且不可与容器内组件重名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#barrierdirection12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "BarrierDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定barrier的方向。  垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，用作垂直方向锚点时值为0；水平方向（LEFT，RIGHT）的barrier仅能作为组件的垂直方向锚点，用作水平方向锚点时值为0。  默认值：BarrierDirection.LEFT  非法值：按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "referencedId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定生成barrier所依赖的组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "barrierdirection12枚举说明",
      children: "BarrierDirection12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义屏障线的方向。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#barrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最左侧。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#barrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最右侧。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#barrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最上方。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#barrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最下方。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localizedbarrierstyle12对象说明",
      children: "LocalizedBarrierStyle12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "barrier的id，必须是唯一的并且不可与容器内组件重名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localizedDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedbarrierdirection12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "LocalizedBarrierDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定barrier的方向。  垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，作为垂直方向锚点时值为0。水平方向（START，END）的barrier仅能作为组件的垂直方向锚点，作为水平方向锚点时值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "referencedId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定生成barrier所依赖的组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localizedbarrierdirection12枚举说明",
      children: "LocalizedBarrierDirection12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义支持镜像模式的屏障线的方向。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedbarrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最左/右侧，LTR模式时为最左侧，RTL模式时为最右侧。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedbarrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最左/右侧, LTR模式时为最右侧，RTL模式时为最左侧。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedbarrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最上方。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏障在其所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedbarrierstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "referencedId"
            }), "的最下方。"]
          })]
        })]
      })]
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
      id: "示例1以容器和容器内组件作为锚点进行布局",
      children: "示例1（以容器和容器内组件作为锚点进行布局）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过alignRules接口实现了以容器和容器内组件作为锚点进行布局的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          top: { anchor: \"__container__\", align: VerticalAlign.Top },\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start }\n        })\n        .id(\"row1\")\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          top: { anchor: \"__container__\", align: VerticalAlign.Top },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          top: { anchor: \"row1\", align: VerticalAlign.Bottom },\n          left: { anchor: \"row1\", align: HorizontalAlign.End },\n          right: { anchor: \"row2\", align: HorizontalAlign.Start }\n        })\n        .id(\"row3\")\n\n        Row() {\n          Text('row4')\n        }.justifyContent(FlexAlign.Center)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          top: { anchor: \"row3\", align: VerticalAlign.Bottom },\n          bottom: { anchor: \"__container__\", align: VerticalAlign.Bottom },\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n          right: { anchor: \"row1\", align: HorizontalAlign.End }\n        })\n        .id(\"row4\")\n\n        Row() {\n          Text('row5')\n        }.justifyContent(FlexAlign.Center)\n        .backgroundColor('#30c9f7')\n        .alignRules({\n          top: { anchor: \"row3\", align: VerticalAlign.Bottom },\n          bottom: { anchor: \"__container__\", align: VerticalAlign.Bottom },\n          left: { anchor: \"row2\", align: HorizontalAlign.Start },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End }\n        })\n        .id(\"row5\")\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334288)/* ["default"] */.A) + "",
        width: "320",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2子组件设置外边距",
      children: "示例2（子组件设置外边距）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示容器内子组件设置外边距的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          top: { anchor: \"__container__\", align: VerticalAlign.Top },\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start }\n        })\n        .id(\"row1\")\n        .margin(10)\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.Start },\n          top: { anchor: \"row1\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row3\")\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          left: { anchor: \"row3\", align: HorizontalAlign.End },\n          top: { anchor: \"row2\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row4\")\n        .margin(10)\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(204764)/* ["default"] */.A) + "",
        width: "314",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置容器大小自适应内容",
      children: "示例3（设置容器大小自适应内容）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示了容器大小适应内容（声明width或height为\"auto\"）的用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .id(\"row1\")\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.Start },\n          top: { anchor: \"row1\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row3\")\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          left: { anchor: \"row3\", align: HorizontalAlign.End },\n          top: { anchor: \"row2\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row4\")\n      }\n      .width(\"auto\").height(\"auto\")\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(661992)/* ["default"] */.A) + "",
        width: "253",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置偏移",
      children: "示例4（设置偏移）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#bias%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "bias"
      }), "实现了子组件的位置在垂直方向的两个锚点间偏移的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row()\n          .width(100)\n          .height(100)\n          .backgroundColor('#a3cf62')\n          .alignRules({\n            top: { anchor: \"__container__\", align: VerticalAlign.Top },\n            bottom: { anchor: \"__container__\", align: VerticalAlign.Bottom },\n            left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n            right: { anchor: \"__container__\", align: HorizontalAlign.End },\n            bias: { vertical: 0.3 }\n          })\n          .id(\"row1\")\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(416646)/* ["default"] */.A) + "",
        width: "320",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置辅助线",
      children: "示例5（设置辅助线）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示了相对布局组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#guideline12",
        children: "guideLine"
      }), "接口设置辅助线，子组件以辅助线为锚点的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row()\n          .width(100)\n          .height(100)\n          .backgroundColor('#a3cf62')\n          .alignRules({\n            left: { anchor: \"guideline1\", align: HorizontalAlign.End },\n            top: { anchor: \"guideline2\", align: VerticalAlign.Top }\n          })\n          .id(\"row1\")\n      }\n      .width(300)\n      .height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n      .guideLine([{ id: \"guideline1\", direction: Axis.Vertical, position: { start: 50 } },\n        { id: \"guideline2\", direction: Axis.Horizontal, position: { start: 50 } }])\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(165220)/* ["default"] */.A) + "",
        width: "315",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置屏障",
      children: "示例6（设置屏障）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示了相对布局组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#barrier12",
        children: "barrier"
      }), "接口设置屏障，子组件以屏障为锚点的用法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .id(\"row1\")\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          middle: { anchor: \"row1\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"barrier1\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row3\")\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(50)\n        .height(50)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.Start },\n          top: { anchor: \"barrier2\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row4\")\n      }\n      .width(300)\n      .height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n      .barrier([{ id: \"barrier1\", direction: BarrierDirection.RIGHT, referencedId: [\"row1\", \"row2\"] },\n        { id: \"barrier2\", direction: BarrierDirection.BOTTOM, referencedId: [\"row1\", \"row2\"] }])\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(814888)/* ["default"] */.A) + "",
        width: "320",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置链",
      children: "示例7（设置链）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainmode12",
        children: "chainMode"
      }), "接口从上至下分别实现了水平方向的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainstyle12",
        children: "SPREAD链，SPREAD_INSIDE链和PACKED链"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n          right: { anchor: \"row2\", align: HorizontalAlign.Start },\n          top: { anchor: \"__container__\", align: VerticalAlign.Top }\n        })\n        .id(\"row1\")\n        .chainMode(Axis.Horizontal, ChainStyle.SPREAD)\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.End },\n          right: { anchor: \"row3\", align: HorizontalAlign.Start },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row2\", align: HorizontalAlign.End },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row3\")\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n          right: { anchor: \"row5\", align: HorizontalAlign.Start },\n          center: { anchor: \"__container__\", align: VerticalAlign.Center }\n        })\n        .id(\"row4\")\n        .chainMode(Axis.Horizontal, ChainStyle.SPREAD_INSIDE)\n\n        Row() {\n          Text('row5')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row4\", align: HorizontalAlign.End },\n          right: { anchor: \"row6\", align: HorizontalAlign.Start },\n          top: { anchor: \"row4\", align: VerticalAlign.Top }\n        })\n        .id(\"row5\")\n\n        Row() {\n          Text('row6')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row5\", align: HorizontalAlign.End },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End },\n          top: { anchor: \"row4\", align: VerticalAlign.Top }\n        })\n        .id(\"row6\")\n\n        Row() {\n          Text('row7')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n          right: { anchor: \"row8\", align: HorizontalAlign.Start },\n          bottom: { anchor: \"__container__\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row7\")\n        .chainMode(Axis.Horizontal, ChainStyle.PACKED)\n\n        Row() {\n          Text('row8')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row7\", align: HorizontalAlign.End },\n          right: { anchor: \"row9\", align: HorizontalAlign.Start },\n          top: { anchor: \"row7\", align: VerticalAlign.Top }\n        })\n        .id(\"row8\")\n\n        Row() {\n          Text('row9')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row8\", align: HorizontalAlign.End },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End },\n          top: { anchor: \"row7\", align: VerticalAlign.Top }\n        })\n        .id(\"row9\")\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(131150)/* ["default"] */.A) + "",
        width: "315",
        height: "321"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8链中设置偏移",
      children: "示例8（链中设置偏移）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainmode12",
        children: "chainMode"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#bias%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "bias"
      }), "接口实现了水平方向的带偏移的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainstyle12",
        children: "PACKED链"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n          right: { anchor: \"row2\", align: HorizontalAlign.Start },\n          center: { anchor: \"__container__\", align: VerticalAlign.Center },\n          bias: { horizontal: 0 }\n        })\n        .id(\"row1\")\n        .chainMode(Axis.Horizontal, ChainStyle.PACKED)\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.End },\n          right: { anchor: \"row3\", align: HorizontalAlign.Start },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row2\", align: HorizontalAlign.End },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row3\")\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28295)/* ["default"] */.A) + "",
        width: "321",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置镜像模式",
      children: "示例9（设置镜像模式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示了在镜像模式（direction声明Direction.Rtl）下以屏障为锚点时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#localizedalignruleoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "LocalizedAlignRuleOptions"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#localizedbarrierdirection12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "LocalizedBarrierDirection"
      }), "设置对齐方式的用法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#a3cf62')\n        .id(\"row1\")\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          middle: { anchor: \"row1\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row2\")\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(100)\n        .height(100)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          start: { anchor: \"barrier1\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row3\")\n\n        Row() {\n          Text('row4')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(50)\n        .height(50)\n        .backgroundColor('#2ca9e0')\n        .alignRules({\n          start: { anchor: \"row1\", align: HorizontalAlign.Start },\n          top: { anchor: \"barrier2\", align: VerticalAlign.Bottom }\n        })\n        .id(\"row4\")\n      }\n      .direction(Direction.Rtl)\n      .width(300)\n      .height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n      .barrier([{ id: \"barrier1\", localizedDirection: LocalizedBarrierDirection.END, referencedId: [\"row1\", \"row2\"] },\n        { id: \"barrier2\", localizedDirection: LocalizedBarrierDirection.BOTTOM, referencedId: [\"row1\", \"row2\"] }])\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348938)/* ["default"] */.A) + "",
        width: "320",
        height: "316"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10设置链中节点权重",
      children: "示例10（设置链中节点权重）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示了链中节点使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#chainweight14",
        children: "chainWeight"
      }), "设置尺寸权重的用法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      RelativeContainer() {\n        Row() {\n          Text('row1')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#a3cf62')\n        .alignRules({\n          left: { anchor: \"__container__\", align: HorizontalAlign.Start },\n          right: { anchor: \"row2\", align: HorizontalAlign.Start },\n          center: { anchor: \"__container__\", align: VerticalAlign.Center },\n        })\n        .id(\"row1\")\n        .chainMode(Axis.Horizontal, ChainStyle.PACKED)\n\n        Row() {\n          Text('row2')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#00ae9d')\n        .alignRules({\n          left: { anchor: \"row1\", align: HorizontalAlign.End },\n          right: { anchor: \"row3\", align: HorizontalAlign.Start },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row2\")\n        .chainWeight({ horizontal: 1 })\n\n        Row() {\n          Text('row3')\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(80)\n        .height(80)\n        .backgroundColor('#0a59f7')\n        .alignRules({\n          left: { anchor: \"row2\", align: HorizontalAlign.End },\n          right: { anchor: \"__container__\", align: HorizontalAlign.End },\n          top: { anchor: \"row1\", align: VerticalAlign.Top }\n        })\n        .id(\"row3\")\n        .chainWeight({ horizontal: 2 })\n      }\n      .width(300).height(300)\n      .margin({ left: 50 })\n      .border({ width: 2, color: \"#6699FF\" })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729571)/* ["default"] */.A) + "",
        width: "472",
        height: "473"
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
416646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
537923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
28295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439645-2d90a3c4f65cc28386d10f0e7d8ffccc.png");

},
348938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959600-f37f8a1cd5613baf57549ef050cfbd07.png");

},
165220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
131150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799950-531a346873229f0e56b986aebb19ec21.png");

},
661992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799948-32cc50ecf8add23f75470d962b8f0b87.png");

},
729571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479601-62ae5e64bdba5c9d6912430f15c0d607.png");

},
204764(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479597-5c3b9809cc02bb2d6469c2afd4d136ce.png");

},
814888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479599-a99cd317ff55532115becde56b136b38.png");

},
334288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959596-4c6f113eb4486e3dfd9d08d960868983.png");

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