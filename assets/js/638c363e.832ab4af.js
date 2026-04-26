"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["289323"], {
576639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_listitemgroup_ts_container_listitemgroup_md_638_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-scroll-and-swipe-ts-container-listitemgroup-ts-container-listitemgroup-md-638.json
var site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_listitemgroup_ts_container_listitemgroup_md_638_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup","title":"ListItemGroup","description":"该组件用来展示列表item分组，宽度默认充满List组件，必须配合List组件来使用。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup.md","sourceDirName":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup","slug":"/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ListItemGroup","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitemgroup","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-listitemgroup"},"sidebar":"ref","previous":{"title":"ListItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem"},"next":{"title":"ArcList","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup.md


const frontMatter = {
	title: 'ListItemGroup',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitemgroup',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-listitemgroup'
};
const contentTitle = 'ListItemGroup';

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
  "value": "ListItemGroupOptions对象说明",
  "id": "listitemgroupoptions对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "divider",
  "id": "divider",
  "level": 3
}, {
  "value": "childrenMainSize12+",
  "id": "childrenmainsize12",
  "level": 3
}, {
  "value": "ListItemGroupStyle10+枚举说明",
  "id": "listitemgroupstyle10枚举说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置吸顶/吸底）",
  "id": "示例1设置吸顶吸底",
  "level": 3
}, {
  "value": "示例2（设置卡片样式）",
  "id": "示例2设置卡片样式",
  "level": 3
}, {
  "value": "示例3（设置Header/Footer）",
  "id": "示例3设置headerfooter",
  "level": 3
}, {
  "value": "示例4（设置多列布局）",
  "id": "示例4设置多列布局",
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
        id: "listitemgroup",
        children: "ListItemGroup"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件用来展示列表item分组，宽度默认充满", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "组件，必须配合List组件来使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListItemGroup的懒加载是指组件按需加载可见区域可见的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。ListItemGroup和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "结合，懒加载能力存在差异："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当ListItemGroup和ForEach结合，会一次性创建所有的子节点，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，划出屏幕范围的节点不会下树销毁，划入屏幕范围的节点会布局和渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当ListItemGroup和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，划出屏幕范围的节点会下树销毁，划入屏幕范围的节点会创建、布局、渲染。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当ListItemGroup和带", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
          children: "virtualScroll"
        }), "的Repeat结合，它的懒加载行为和LazyForEach一致。当ListItemGroup和不带virtualScroll的Repeat结合，它的懒加载行为和ForEach一致。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListItemGroup的预加载是指除了加载显示区域内可见的子组件外，还支持空闲时隙提前加载部分显示区域外不可见的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。ListItemGroup和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "结合，预加载能力存在差异："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当ListItemGroup和ForEach结合，如果设置了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#cachedcount",
          children: "cachedCount"
        }), "，除了会布局显示区域内子组件外，还会在空闲时隙根据List组件的cachedCount属性预布局显示区域外cachedCount范围内的子节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当ListItemGroup和LazyForEach结合，如果设置了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#cachedcount",
          children: "cachedCount"
        }), "，除了会创建和布局显示区域内子组件外，还会在空闲时隙根据List组件的cachedCount属性预创建和预布局显示区域外cachedCount范围内的子节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当ListItemGroup和带", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
          children: "virtualScroll"
        }), "的Repeat结合，它的预加载行为和LazyForEach一致。当ListItemGroup和不带virtualScroll的Repeat结合，它的预加载行为和ForEach一致。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930222)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件的父组件只能是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ListItemGroup组件不支持设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-layout-constraints/ts-universal-attributes-layout-constraints#aspectratio",
          children: "通用属性aspectRatio"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当ListItemGroup的父组件List的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#listdirection",
          children: "listDirection"
        }), "属性为Axis.Vertical时，设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "通用属性height"
        }), "属性不生效。ListItemGroup的高度为header高度、footer高度和所有ListItem布局后总高度之和。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当父组件List的listDirection属性为Axis.Horizontal时，设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
          children: "通用属性width"
        }), "属性不生效。ListItemGroup的宽度为header宽度、footer宽度和所有ListItem布局后总宽度之和。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前ListItemGroup内部的ListItem组件不支持编辑、拖拽功能，即ListItem组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#editabledeprecated",
          children: "editable"
        }), "属性不生效。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ListItemGroup使用direction属性设置布局方向不生效，ListItemGroup组件布局方向跟随父容器List组件的布局方向。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "子组件。支持通过渲染控制类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "if/else"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ListItemGroup(options?: ListItemGroupOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建ListItemGroup组件。"
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#listitemgroupoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ListItemGroupOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表item分组组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listitemgroupoptions对象说明",
      children: "ListItemGroupOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ListItemGroup组件参数。"
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
            children: "header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置ListItemGroup头部组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  可以放单个子组件或不放子组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headerComponent13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用ComponentContent类型参数设置ListItemGroup头部组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  可以放单个子组件或不放子组件。 该参数的优先级高于参数header。即同时设置header和headerComponent时，以headerComponent设置的值为准。  同一个headerComponent不推荐同时给不同的ListItemGroup使用，否则会导致显示问题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "footer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置ListItemGroup尾部组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  可以放单个子组件或不放子组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "footerComponent13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用ComponentContent类型参数设置ListItemGroup尾部组件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  可以放单个子组件或不放子组件。该参数的优先级高于参数footer。 即同时设置footer和footerComponent时，以footerComponent设置的值为准。  同一个footerComponent不推荐同时给不同的ListItemGroup使用，否则会导致显示问题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#listitemgroupstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ListItemGroupStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置List组件卡片样式。  默认值：ListItemGroupStyle.NONE  设置为ListItemGroupStyle.NONE时无样式。  设置为ListItemGroupStyle.CARD时，建议配合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            }), "的ListItemStyle.CARD同时使用，显示默认卡片样式。  卡片样式下，ListItemGroup默认规格：左右外边距12vp，上下左右内边距4vp。  卡片样式下，为卡片内的列表选项提供了默认的focused、hover、pressed、selected和disabled样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当设置为ListItemStyle.CARD时，List的listDirection属性值须为Axis.Vertical，如果设置为Axis.Horizontal，会导致显示混乱；List属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#alignlistitem9",
              children: "alignListItem"
            }), "默认为ListItemAlign.Center，居中对齐显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divider",
      children: "divider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["divider(value: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#listdivideroptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ListDividerOptions"
      }), " | null)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置ListItem分割线样式，默认无分割线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeWidth，startMargin和endMargin不支持设置百分比。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListItem设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-polymorphic-style/ts-universal-attributes-polymorphic-style",
        children: "多态样式"
      }), "时，被按压的子组件上下的分割线不绘制。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#listdivideroptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ListDividerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "childrenmainsize12",
      children: "childrenMainSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "childrenMainSize(value: ChildrenMainSize)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置ListItemGroup组件的子组件在主轴方向的大小信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(368249)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须同时给所在的List组件设置childrenMainSize属性才可以正常生效。"
      }), "\n"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#childrenmainsize12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ChildrenMainSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该对象用来维护子组件在主轴方向的大小信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listitemgroupstyle10枚举说明",
      children: "ListItemGroupStyle10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ListItemGroup组件卡片样式枚举。"
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
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示默认卡片样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置吸顶吸底",
      children: "示例1（设置吸顶/吸底）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#sticky9",
        children: "sticky"
      }), "实现了Header吸顶和Footer吸底的效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource实现了LazyForEach数据源接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
        children: "IDataSource"
      }), "，用于通过LazyForEach给List和ListItemGroup提供子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ListDataSource.ets\nexport class TimeTableDataSource implements IDataSource {\n  private list: TimeTable[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: TimeTable[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): TimeTable {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知控制器数据变化\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 修改第一个元素\n  public change1stItem(temp: TimeTable): void {\n    this.list[0] = temp;\n    this.notifyDataChange(0);\n  }\n}\n\nexport class ProjectsDataSource implements IDataSource {\n  private list: string[] = [];\n\n  constructor(list: string[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): string {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\nexport interface TimeTable {\n  title: string;\n  projects: string[];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { TimeTable, ProjectsDataSource, TimeTableDataSource } from './ListDataSource';\n@Entry\n@Component\nstruct ListItemGroupExample {\n  itemGroupArray: TimeTableDataSource = new TimeTableDataSource([]);\n\n  aboutToAppear(): void {\n    let timeTable: TimeTable[] = [\n      {\n        title: '星期一',\n        projects: ['语文', '数学', '英语']\n      },\n      {\n        title: '星期二',\n        projects: ['物理', '化学', '生物']\n      },\n      {\n        title: '星期三',\n        projects: ['历史', '地理', '政治']\n      },\n      {\n        title: '星期四',\n        projects: ['美术', '音乐', '体育']\n      }\n    ];\n    this.itemGroupArray = new TimeTableDataSource(timeTable);\n  }\n\n  @Builder\n  itemHead(text: string) {\n    Text(text)\n      .fontSize(20)\n      .backgroundColor(0xAABBCC)\n      .width('100%')\n      .padding(10)\n  }\n\n  @Builder\n  itemFoot(num: number) {\n    Text('共' + num + '节课')\n      .fontSize(16)\n      .backgroundColor(0xAABBCC)\n      .width('100%')\n      .padding(5)\n  }\n\n  build() {\n    Column() {\n      List({ space: 20 }) {\n        LazyForEach(this.itemGroupArray, (item: TimeTable) => {\n          ListItemGroup({ header: this.itemHead(item.title), footer: this.itemFoot(item.projects.length) }) {\n            LazyForEach(new ProjectsDataSource(item.projects), (project: string) => {\n              ListItem() {\n                Text(project)\n                  .width('100%')\n                  .height(100)\n                  .fontSize(20)\n                  .textAlign(TextAlign.Center)\n                  .backgroundColor(0xFFFFFF)\n              }\n            }, (item: string) => item)\n          }\n          .divider({ strokeWidth: 1, color: Color.Blue }) // 每行之间的分界线\n        })\n      }\n      .width('90%')\n      .sticky(StickyStyle.Header | StickyStyle.Footer)\n      .scrollBar(BarState.Off)\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC).padding({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(108271)/* ["default"] */.A) + "",
        width: "358",
        height: "749"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置卡片样式",
      children: "示例2（设置卡片样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了ListItemGroup的卡片样式效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ListItemGroupExample2 {\n  private arr: ArrObject[] = [\n    {\n      style: ListItemGroupStyle.CARD,\n      itemStyles: [ListItemStyle.CARD, ListItemStyle.CARD, ListItemStyle.CARD]\n    },\n    {\n      style: ListItemGroupStyle.CARD,\n      itemStyles: [ListItemStyle.CARD, ListItemStyle.CARD, ListItemStyle.NONE]\n    },\n    {\n      style: ListItemGroupStyle.CARD,\n      itemStyles: [ListItemStyle.CARD, ListItemStyle.NONE, ListItemStyle.CARD]\n    },\n    {\n      style: ListItemGroupStyle.NONE,\n      itemStyles: [ListItemStyle.CARD, ListItemStyle.CARD, ListItemStyle.NONE]\n    }\n  ];\n\n  build() {\n    Column() {\n      List({ space: '4vp', initialIndex: 0 }) {\n        ForEach(this.arr, (item: ArrObject, index?: number) => {\n          ListItemGroup({ style: item.style }) {\n            ForEach(item.itemStyles, (itemStyle: number, itemIndex?: number) => {\n              ListItem({ style: itemStyle }) {\n                if (index != undefined && itemIndex != undefined) {\n                  Text('第' + (index + 1) + '个Group中第' + (itemIndex + 1) + '个item')\n                    .width('100%')\n                    .textAlign(TextAlign.Center)\n                }\n              }\n            }, (item: string) => item)\n          }\n        })\n      }\n      .width('100%')\n      .multiSelectable(true)\n      .backgroundColor(0xDCDCDC)\n    }\n    .width('100%')\n    .padding({ top: 5 })\n  }\n}\n\ninterface ArrObject {\n  style: number;\n  itemStyles: number[];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(588832)/* ["default"] */.A) + "",
        width: "715",
        height: "794"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置headerfooter",
      children: "示例3（设置Header/Footer）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#componentcontent-1",
        children: "ComponentContent"
      }), "设置Header/Footer。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E8%AE%BE%E7%BD%AE%E5%90%B8%E9%A1%B6%E5%90%B8%E5%BA%95",
        children: "示例1设置吸顶/吸底"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\nimport { TimeTable, ProjectsDataSource, TimeTableDataSource } from './ListDataSource';\n\nclass HeadBuilderParams {\n  text: string | Resource;\n  constructor(text: string | Resource) {\n    this.text = text;\n  }\n}\n\nclass FootBuilderParams {\n  num: number | Resource;\n  constructor(num: number | Resource) {\n    this.num = num;\n  }\n}\n\n@Builder\nfunction itemHead(params: HeadBuilderParams) {\n  Text(params.text)\n    .fontSize(20)\n    .height('48vp')\n    .width('100%')\n    .padding(10)\n    .backgroundColor($r('sys.color.background_tertiary'))\n}\n\n@Builder\nfunction itemFoot(params: FootBuilderParams) {\n  Text('共' + params.num.toString() + '节课')\n    .fontSize(20)\n    .height('48vp')\n    .width('100%')\n    .padding(10)\n    .backgroundColor($r('sys.color.background_tertiary'))\n}\n\n@Component\nstruct MyItemGroup {\n  item: TimeTable = { title: '', projects: [] };\n  header?: ComponentContent<HeadBuilderParams> = undefined;\n  footer?: ComponentContent<FootBuilderParams> = undefined;\n  headerParam = new HeadBuilderParams(this.item.title);\n  footerParam = new FootBuilderParams(this.item.projects.length);\n  itemArr: ProjectsDataSource = new ProjectsDataSource([]);\n\n  aboutToAppear(): void {\n    this.header = new ComponentContent(this.getUIContext(), wrapBuilder(itemHead), this.headerParam);\n    this.footer = new ComponentContent(this.getUIContext(), wrapBuilder(itemFoot), this.footerParam);\n    this.itemArr = new ProjectsDataSource(this.item.projects);\n  }\n  GetHeader() {\n    this.header?.update(new HeadBuilderParams(this.item.title));\n    return this.header;\n  }\n\n  GetFooter() {\n    this.footer?.update(new FootBuilderParams(this.item.projects.length));\n    return this.footer;\n  }\n\n  build() {\n    ListItemGroup({\n      headerComponent: this.GetHeader(),\n      footerComponent: this.GetFooter()\n    }) {\n      LazyForEach(this.itemArr, (project: string) => {\n        ListItem() {\n          Text(project)\n            .width('100%')\n            .height(100)\n            .fontSize(20)\n            .textAlign(TextAlign.Center)\n        }\n      }, (item: string) => item)\n    }\n    .divider({ strokeWidth: 1, color: Color.Blue }) // 每行之间的分界线\n  }\n}\n\n@Entry\n@Component\nstruct ListItemGroupExample {\n  itemGroupArray: TimeTableDataSource = new TimeTableDataSource([]);\n  aboutToAppear(): void {\n    let timeTable: TimeTable[] = [\n      {\n        title: '星期一',\n        projects: ['语文', '数学', '英语']\n      },\n      {\n        title: '星期二',\n        projects: ['物理', '化学', '生物']\n      },\n      {\n        title: '星期三',\n        projects: ['历史', '地理', '政治', '体育']\n      },\n      {\n        title: '星期四',\n        projects: ['美术', '音乐']\n      }\n    ];\n    this.itemGroupArray = new TimeTableDataSource(timeTable);\n  }\n\n  build() {\n    Column() {\n      Button('update').width(100).height(50).onClick(() => {\n        this.itemGroupArray.change1stItem({\n          title: '更新后的星期一',\n          projects: ['语文', '物理', '历史', '美术']\n        });\n      })\n      List({ space: 20 }) {\n        LazyForEach(this.itemGroupArray, (item: TimeTable) => {\n          MyItemGroup({ item: item })\n        }, (item: TimeTable) => item.title) // LazyForEach依赖键值判断是否刷新子组件\n      }\n      .layoutWeight(1)\n      .sticky(StickyStyle.Header | StickyStyle.Footer)\n      .scrollBar(BarState.Off)\n    }\n    .backgroundColor($r('sys.color.background_primary'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233004)/* ["default"] */.A) + "",
        width: "353",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置多列布局",
      children: "示例4（设置多列布局）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例展示了ListItemGroup在多列布局中的使用，通过设置List组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#lanes9",
        children: "lanes"
      }), "属性实现多列布局。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListDataSource说明及完整代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B1%E8%AE%BE%E7%BD%AE%E5%90%B8%E9%A1%B6%E5%90%B8%E5%BA%95",
        children: "示例1设置吸顶/吸底"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\nimport { TimeTable, ProjectsDataSource, TimeTableDataSource } from './ListDataSource';\n\nclass HeadBuilderParams {\n  text: string | Resource;\n\n  constructor(text: string | Resource) {\n    this.text = text;\n  }\n}\n\nclass FootBuilderParams {\n  num: number | Resource;\n\n  constructor(num: number | Resource) {\n    this.num = num;\n  }\n}\n\n@Builder\nfunction itemHead(params: HeadBuilderParams) {\n  Text(params.text)\n    .fontSize(20)\n    .height('48vp')\n    .width('100%')\n    .padding(10)\n    .backgroundColor($r('sys.color.background_tertiary'))\n}\n\n@Builder\nfunction itemFoot(params: FootBuilderParams) {\n  Text('共' + params.num.toString() + '节课')\n    .fontSize(20)\n    .height('48vp')\n    .width('100%')\n    .padding(10)\n    .backgroundColor($r('sys.color.background_tertiary'))\n}\n\n@Component\nstruct MyItemGroup {\n  item: TimeTable = { title: '', projects: [] };\n  header?: ComponentContent<HeadBuilderParams> = undefined;\n  footer?: ComponentContent<FootBuilderParams> = undefined;\n  headerParam = new HeadBuilderParams(this.item.title);\n  footerParam = new FootBuilderParams(this.item.projects.length);\n  itemArr: ProjectsDataSource = new ProjectsDataSource([]);\n\n  aboutToAppear(): void {\n    this.header = new ComponentContent(this.getUIContext(), wrapBuilder(itemHead), this.headerParam);\n    this.footer = new ComponentContent(this.getUIContext(), wrapBuilder(itemFoot), this.footerParam);\n    this.itemArr = new ProjectsDataSource(this.item.projects);\n  }\n\n  GetHeader() {\n    this.header?.update(new HeadBuilderParams(this.item.title));\n    return this.header;\n  }\n\n  GetFooter() {\n    this.footer?.update(new FootBuilderParams(this.item.projects.length));\n    return this.footer;\n  }\n\n  build() {\n    ListItemGroup({\n      headerComponent: this.GetHeader(),\n      footerComponent: this.GetFooter()\n    }) {\n      LazyForEach(this.itemArr, (project: string) => {\n        ListItem() {\n          // 修改ListItem样式以适应多列布局\n          Column() {\n            Text(project)\n              .fontSize(20)\n              .textAlign(TextAlign.Center)\n          }\n          .width('100%')\n          .height(80)\n          .padding(8)\n          .justifyContent(FlexAlign.Center)\n          .backgroundColor($r('sys.color.background_secondary'))\n          .borderRadius(12)\n          .shadow({\n            radius: 4,\n            color: '#20000000',\n            offsetX: 0,\n            offsetY: 2\n          })\n        }\n      }, (item: string) => item)\n    }\n    .divider({\n      strokeWidth: 2,\n      color: $r('sys.color.background_tertiary'),\n      startMargin: 20,\n      endMargin: 20\n    })\n  }\n}\n\n@Entry\n@Component\nstruct ListItemGroupExample {\n  itemGroupArray: TimeTableDataSource = new TimeTableDataSource([]);\n\n  aboutToAppear(): void {\n    let timeTable: TimeTable[] = [\n      {\n        title: '星期一',\n        projects: ['语文', '数学', '英语', '物理', '化学', '生物']\n      },\n      {\n        title: '星期二',\n        projects: ['历史', '地理', '政治', '体育', '美术', '音乐']\n      },\n      {\n        title: '星期三',\n        projects: ['计算机', '编程', '算法', '数据结构', '网络']\n      },\n      {\n        title: '星期四',\n        projects: ['文学', '写作', '阅读', '书法']\n      },\n      {\n        title: '星期五',\n        projects: ['实验', '生活', '奥数', '高数', '中医']\n      }\n    ];\n    this.itemGroupArray = new TimeTableDataSource(timeTable);\n  }\n\n  build() {\n    Column() {\n      List({ space: 15 }) {\n        LazyForEach(this.itemGroupArray, (item: TimeTable) => {\n          MyItemGroup({ item: item })\n        }, (item: TimeTable) => item.title)\n      }\n      .lanes(3) // 设置3列布局\n      .alignListItem(ListItemAlign.Center) // 交叉轴居中对齐\n      .layoutWeight(1)\n      .scrollBar(BarState.Auto)\n      .width('100%')\n      .margin(10)\n    }\n    .backgroundColor($r('sys.color.background_primary'))\n    .width('100%')\n    .height('100%')\n    .padding(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76869)/* ["default"] */.A) + "",
        width: "263",
        height: "577"
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
930222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
368249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
76869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959618-213a7cf928506454c15d1c9dbc56d0bc.gif");

},
588832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799968-031ec7937d47df92ba4c756debd21444.jpeg");

},
108271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479617-d2035f2c882d6f7af22a5c0c62c47321.gif");

},
233004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439663-1a1f13ad0027ea4f081095c8d3708b17.gif");

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