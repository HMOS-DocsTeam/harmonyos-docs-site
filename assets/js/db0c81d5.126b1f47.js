"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["792367"], {
671913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_refresh_ts_container_refresh_md_db0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-scroll-and-swipe-ts-container-refresh-ts-container-refresh-md-db0.json
var site_docs_ref_arkui_api_arkui_declarative_comp_scroll_and_swipe_ts_container_refresh_ts_container_refresh_md_db0_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh","title":"Refresh","description":"可以进行页面下拉操作并显示刷新动效的容器组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh.md","sourceDirName":"arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh","slug":"/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Refresh","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-refresh"},"sidebar":"ref","previous":{"title":"ScrollBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar"},"next":{"title":"ArcScrollBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh.md


const frontMatter = {
	title: 'Refresh',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-refresh'
};
const contentTitle = 'Refresh';

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
  "value": "RefreshOptions对象说明",
  "id": "refreshoptions对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "refreshOffset12+",
  "id": "refreshoffset12",
  "level": 3
}, {
  "value": "pullToRefresh12+",
  "id": "pulltorefresh12",
  "level": 3
}, {
  "value": "pullUpToCancelRefresh23+",
  "id": "pulluptocancelrefresh23",
  "level": 3
}, {
  "value": "pullDownRatio12+",
  "id": "pulldownratio12",
  "level": 3
}, {
  "value": "maxPullDownDistance20+",
  "id": "maxpulldowndistance20",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onStateChange",
  "id": "onstatechange",
  "level": 3
}, {
  "value": "onRefreshing",
  "id": "onrefreshing",
  "level": 3
}, {
  "value": "onOffsetChange12+",
  "id": "onoffsetchange12",
  "level": 3
}, {
  "value": "RefreshStatus枚举说明",
  "id": "refreshstatus枚举说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（默认刷新样式）",
  "id": "示例1默认刷新样式",
  "level": 3
}, {
  "value": "示例2（设置刷新区域显示文本）",
  "id": "示例2设置刷新区域显示文本",
  "level": 3
}, {
  "value": "示例3（自定义刷新区域显示内容-builder）",
  "id": "示例3自定义刷新区域显示内容-builder",
  "level": 3
}, {
  "value": "示例4（自定义刷新区域显示内容-refreshingContent）",
  "id": "示例4自定义刷新区域显示内容-refreshingcontent",
  "level": 3
}, {
  "value": "示例5（实现最大下拉距离）",
  "id": "示例5实现最大下拉距离",
  "level": 3
}, {
  "value": "示例6（实现下拉刷新上拉加载更多）",
  "id": "示例6实现下拉刷新上拉加载更多",
  "level": 3
}, {
  "value": "示例7（设置最大下拉距离）",
  "id": "示例7设置最大下拉距离",
  "level": 3
}, {
  "value": "示例8（禁止下拉刷新）",
  "id": "示例8禁止下拉刷新",
  "level": 3
}, {
  "value": "示例9（不满一屏场景实现下拉刷新）",
  "id": "示例9不满一屏场景实现下拉刷新",
  "level": 3
}, {
  "value": "示例10（上划不取消刷新）",
  "id": "示例10上划不取消刷新",
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
    number: "number",
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
        id: "refresh",
        children: "Refresh"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以进行页面下拉操作并显示刷新动效的容器组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852069)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件从API version 12开始支持与垂直滚动的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
          children: "Swiper"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-web/js-components-basic-web",
          children: "Web"
        }), "的联动。当", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
          children: "Swiper"
        }), "设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#loop",
          children: "loop"
        }), "属性为true时，Refresh无法和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
          children: "Swiper"
        }), "产生联动。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refresh和内容大小小于组件自身的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "组件嵌套使用并且中间还有其他组件时，手势可能会被中间组件响应，导致Refresh未产生下拉刷新效果，可以将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#edgeeffectoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
          children: "alwaysEnabled"
        }), "参数设为true，此时", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
          children: "List"
        }), "会响应手势并通过嵌套滚动带动Refresh组件产生下拉刷新效果，具体可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A4%BA%E4%BE%8B9%E4%B8%8D%E6%BB%A1%E4%B8%80%E5%B1%8F%E5%9C%BA%E6%99%AF%E5%AE%9E%E7%8E%B0%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0",
          children: "示例9不满一屏实现下拉刷新"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement",
          children: "手势拦截增强"
        }), "进行处理。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件无法通过鼠标按下拖动操作进行下拉刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持单个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，Refresh子组件会跟随手势下拉而下移。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refresh(value: RefreshOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Refresh容器。"
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
              href: "#refreshoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RefreshOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新组件参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "refreshoptions对象说明",
      children: "RefreshOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置Refresh组件参数。"
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
            children: "refreshing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件当前是否处于刷新中状态。true表示处于刷新中状态，false表示未处于刷新中状态。  默认值：false  该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset(deprecated)"
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
            children: "friction(deprecated)"
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
            children: "builder10+"
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
            children: ["自定义刷新区域显示内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  API version 10及之前版本，自定义组件的高度限制在64vp之内。API version 11及以后版本没有此限制。  自定义组件设置了固定高度时，自定义组件会以固定高度显示在刷新区域下方；自定义组件未设置高度时，自定义组件高度会自适应刷新区域高度，会发生自定义组件高度跟随刷新区域变化至0的现象。建议对自定义组件设置最小高度约束来避免自定义组件高度小于预期的情况发生，具体可参照", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B3%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%B7%E6%96%B0%E5%8C%BA%E5%9F%9F%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9-builder",
              children: "示例3"
            }), "。  从API version 12开始，建议使用refreshingContent参数替代builder参数自定义刷新区域显示内容，以避免刷新过程中因自定义组件销毁重建造成的动画中断问题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "promptText12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置刷新区域底部显示的自定义文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  输入文本的限制参考Text组件，使用builder或refreshingContent参数自定义刷新区域显示内容时，promptText不显示。  promptText设置有效时，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#refreshoffset12",
              children: "refreshOffset"
            }), "属性默认值为96vp。  自定义文本最大的字体缩放倍数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#maxfontscale12",
              children: "maxFontScale"
            }), "为2。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "refreshingContent12+"
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
            children: ["自定义刷新区域显示内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  与builder参数同时设置时builder参数不生效。  自定义组件设置了固定高度时，自定义组件会以固定高度显示在刷新区域下方；自定义组件未设置高度时，自定义组件高度会自适应刷新区域高度，会发生自定义组件高度跟随刷新区域变化至0的现象。建议对自定义组件设置最小高度约束来避免自定义组件高度小于预期的情况发生，具体可参照", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A4%BA%E4%BE%8B4%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%B7%E6%96%B0%E5%8C%BA%E5%9F%9F%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9-refreshingcontent",
              children: "示例4"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122581)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当未设置builder或refreshingContent时，是通过更新子组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translate",
          children: "translate"
        }), "属性实现的下拉位移效果，下拉位移过程中不会触发子组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-area-change-event/ts-universal-component-area-change-event#onareachange",
          children: "onAreaChange"
        }), "事件，子组件设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translate",
          children: "translate"
        }), "属性时不会生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当设置了builder或refreshingContent时，是通过更新子组件相对于Refresh组件的位置实现的下拉位移效果，下拉位移过程中可以触发子组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-area-change-event/ts-universal-component-area-change-event#onareachange",
          children: "onAreaChange"
        }), "事件，子组件设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#position",
          children: "position"
        }), "属性时会固定子组件相对于Refresh组件的位置导致子组件不会跟手进行下拉位移。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过builder参数设置的自定义组件在未指定宽度和高度时，其尺寸将自适应子组件，在指定宽度而未指定高度时，其高度将自适应下拉距离。通过refreshingContent参数设置的自定义组件若未指定高度，其高度同样会自适应下拉距离。当自定义组件高度自适应下拉距离时，随着下拉距离的增加，该组件的高度亦随之增加；当自定义组件的高度设定为固定值或达到最大高度限制时，随着下拉距离的增加，自定义组件与Refresh组件上边界之间的间距亦会随之增加。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refreshoffset12",
      children: "refreshOffset12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "refreshOffset(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触发刷新的下拉偏移量，当下拉距离小于该属性设置值时离手不会触发刷新。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下拉偏移量，单位vp。  默认值：未设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#refreshoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "promptText"
            }), "参数时为64vp，设置了", (0,jsx_runtime.jsx)(_components.a, {
              href: "#refreshoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "promptText"
            }), "参数时为96vp。  如果取值为0或负数的时候此接口采用默认值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pulltorefresh12",
      children: "pullToRefresh12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pullToRefresh(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当下拉距离超过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#refreshoffset12",
        children: "refreshOffset"
      }), "时是否能触发刷新。"]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当下拉距离超过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#refreshoffset12",
              children: "refreshOffset"
            }), "时是否能触发刷新。true表示能触发刷新，false表示不能触发刷新。  默认值：true"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pulluptocancelrefresh23",
      children: "pullUpToCancelRefresh23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pullUpToCancelRefresh(enabled: boolean | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置上划是否取消刷新。"
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pulldownratio12",
      children: "pullDownRatio12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["pullDownRatio(ratio: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
        children: "Optional"
      }), "<number>)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置下拉跟手系数。"
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
            children: "ratio"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉跟手系数。数值越大，跟随手势下拉的反应越灵敏。0表示不跟随手势下拉，1表示等比例跟随手势下拉。  没有设置或设置为undefined时，默认使用动态下拉跟手系数，下拉距离越大，跟手系数越小。  有效值为0-1之间的值，小于0的值会被视为0，大于1的值会被视为1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxpulldowndistance20",
      children: "maxPullDownDistance20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxPullDownDistance(distance: Optional<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置最大下拉距离。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "distance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大下拉距离。最大下拉距离的最小值为0，小于0按0处理。当该值小于刷新的下拉偏移量refreshOffset时，Refresh下拉离手不会触发刷新。  undefined和null按没有设置此属性处理。  默认值：undefined  单位：vp"
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
      id: "onstatechange",
      children: "onStateChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStateChange(callback: (state: RefreshStatus) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前刷新状态变更时，触发回调。"
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
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#refreshstatus%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "RefreshStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onrefreshing",
      children: "onRefreshing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRefreshing(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入刷新状态时触发回调。"
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
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入刷新状态时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onoffsetchange12",
      children: "onOffsetChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onOffsetChange(callback: Callback<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下拉距离发生变化时触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678188)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于监听下拉距离的变化。当下拉距离发生变化时触发，回调参数为当前的下拉距离。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "refreshstatus枚举说明",
      children: "RefreshStatus枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RefreshStatus刷新状态枚举。"
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
            children: "Inactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认未下拉状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉中，下拉距离小于刷新距离。  若此时松手，组件进入Inactive状态；若此时继续下拉使下拉距离超过刷新距离，组件进入OverDrag状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OverDrag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉中，下拉距离超过刷新距离。  若此时松手，组件进入Refresh状态；若此时上滑使下拉距离小于刷新距离，组件进入Drag状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉结束，回弹至刷新距离，进入刷新中状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新结束，返回初始状态（顶部）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1默认刷新样式",
      children: "示例1（默认刷新样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "刷新区域使用默认刷新样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State arr: String[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n\n  build() {\n    Column() {\n      Row() {\n        Button('开始刷新').onClick(() => {\n          this.isRefreshing = true;\n        })\n        Button('停止刷新').onClick(() => {\n          this.isRefreshing = false;\n        })\n      }\n\n      Refresh({ refreshing: $$this.isRefreshing }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text('' + item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString());\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onOffsetChange((value: number) => {\n        console.info('Refresh onOffsetChange offset:' + value);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n        console.info('onRefreshing test');\n      })\n      .backgroundColor(0x89CFF0)\n      .refreshOffset(64)\n      .pullToRefresh(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894791)/* ["default"] */.A) + "",
        width: "350",
        height: "728"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置刷新区域显示文本",
      children: "示例2（设置刷新区域显示文本）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#refreshoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "promptText"
      }), "参数设置刷新区域显示文本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State promptText: string = \"Refreshing...\";\n  @State arr: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing, promptText: this.promptText }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text(item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString());\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .backgroundColor(0x89CFF0)\n      .pullToRefresh(true)\n      .refreshOffset(96)\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onOffsetChange((value: number) => {\n        console.info('Refresh onOffsetChange offset:' + value);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n        console.info('onRefreshing test');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572135)/* ["default"] */.A) + "",
        width: "414",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义刷新区域显示内容-builder",
      children: "示例3（自定义刷新区域显示内容-builder）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#refreshoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "builder"
      }), "参数自定义刷新区域显示内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State arr: String[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n\n  @Builder\n  customRefreshComponent() {\n    Stack() {\n      Row() {\n        LoadingProgress().height(32)\n        Text(\"Refreshing...\").fontSize(16).margin({ left: 20 })\n      }\n      .alignItems(VerticalAlign.Center)\n    }\n    .align(Alignment.Center)\n    .clip(true)\n    // 设置最小高度约束保证自定义组件高度随刷新区域高度变化时自定义组件高度不会低于minHeight。\n    .constraintSize({ minHeight: 32 })\n    .width('100%')\n  }\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing, builder: this.customRefreshComponent() }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text('' + item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString());\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .backgroundColor(0x89CFF0)\n      .pullToRefresh(true)\n      .refreshOffset(64)\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n        console.info('onRefreshing test');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(413971)/* ["default"] */.A) + "",
        width: "414",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4自定义刷新区域显示内容-refreshingcontent",
      children: "示例4（自定义刷新区域显示内容-refreshingContent）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#refreshoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "refreshingContent"
      }), "参数自定义刷新区域显示内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\n\nclass Params {\n  refreshStatus: RefreshStatus = RefreshStatus.Inactive;\n\n  constructor(refreshStatus: RefreshStatus) {\n    this.refreshStatus = refreshStatus;\n  }\n}\n\n@Builder\nfunction customRefreshingContent(params: Params) {\n  Stack() {\n    Row() {\n      LoadingProgress().height(32)\n      Text(\"refreshStatus: \" + params.refreshStatus).fontSize(16).margin({ left: 20 })\n    }\n    .alignItems(VerticalAlign.Center)\n  }\n  .align(Alignment.Center)\n  .clip(true)\n  // 设置最小高度约束保证自定义组件高度随刷新区域高度变化时自定义组件高度不会低于minHeight。\n  .constraintSize({ minHeight: 32 })\n  .width('100%')\n}\n\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State arr: String[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n  @State refreshStatus: RefreshStatus = RefreshStatus.Inactive;\n  private contentNode?: ComponentContent<Object> = undefined;\n  private params: Params = new Params(RefreshStatus.Inactive);\n\n  aboutToAppear(): void {\n    let uiContext = this.getUIContext();\n    this.contentNode = new ComponentContent(uiContext, wrapBuilder(customRefreshingContent), this.params);\n  }\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing, refreshingContent: this.contentNode }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text('' + item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString());\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .backgroundColor(0x89CFF0)\n      .pullToRefresh(true)\n      .refreshOffset(96)\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        this.refreshStatus = refreshStatus;\n        this.params.refreshStatus = refreshStatus;\n        // 更新自定义组件内容。\n        this.contentNode?.update(this.params);\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n        console.info('onRefreshing test');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240292)/* ["default"] */.A) + "",
        width: "414",
        height: "887"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5实现最大下拉距离",
      children: "示例5（实现最大下拉距离）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pulldownratio12",
        children: "pullDownRatio"
      }), "属性和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onoffsetchange12",
        children: "onOffsetChange"
      }), "事件实现最大下拉距离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\n\n@Builder\nfunction customRefreshingContent() {\n  Stack() {\n    Row() {\n      LoadingProgress().height(32)\n    }\n    .alignItems(VerticalAlign.Center)\n  }\n  .align(Alignment.Center)\n  .clip(true)\n  // 设置最小高度约束保证自定义组件高度随刷新区域高度变化时自定义组件高度不会低于minHeight。\n  .constraintSize({ minHeight: 32 })\n  .width('100%')\n}\n\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State arr: String[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n  @State maxRefreshingHeight: number = 100.0;\n  @State ratio: number = 1;\n  private contentNode?: ComponentContent<Object> = undefined;\n\n  aboutToAppear(): void {\n    let uiContext = this.getUIContext();\n    this.contentNode = new ComponentContent(uiContext, wrapBuilder(customRefreshingContent));\n  }\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing, refreshingContent: this.contentNode }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text('' + item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString());\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .backgroundColor(0x89CFF0)\n      .pullDownRatio(this.ratio)\n      .pullToRefresh(true)\n      .refreshOffset(64)\n      .onOffsetChange((offset: number) => {\n        // 越接近最大距离，下拉跟手系数越小。\n        this.ratio = 1 - Math.pow((offset / this.maxRefreshingHeight), 3);\n      })\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n        console.info('onRefreshing test');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37974)/* ["default"] */.A) + "",
        width: "413",
        height: "887"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6实现下拉刷新上拉加载更多",
      children: "示例6（实现下拉刷新上拉加载更多）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refresh组件与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "组件组合实现下拉刷新上拉加载更多效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ListRefreshLoad {\n  @State arr: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n  @State refreshing: boolean = false;\n  @State refreshOffset: number = 0;\n  @State refreshState: RefreshStatus = RefreshStatus.Inactive;\n  @State isLoading: boolean = false;\n\n  @Builder\n  refreshBuilder() {\n    Stack({ alignContent: Alignment.Bottom }) {\n      // 可以通过刷新状态控制是否存在Progress组件。\n      // 当刷新状态处于下拉中或刷新中状态时Progress组件才存在。\n      if (this.refreshState != RefreshStatus.Inactive && this.refreshState != RefreshStatus.Done) {\n        Progress({ value: this.refreshOffset, total: 64, type: ProgressType.Ring })\n          .width(32).height(32)\n          .style({ status: this.refreshing ? ProgressStatus.LOADING : ProgressStatus.PROGRESSING })\n          .margin(10)\n      }\n    }\n    .clip(true)\n    .height('100%')\n    .width('100%')\n  }\n\n  @Builder\n  footer() {\n    Row() {\n      LoadingProgress().height(32).width(48)\n      Text(\"加载中\")\n    }.width('100%')\n    .height(64)\n    .justifyContent(FlexAlign.Center)\n    // 当不处于加载中状态时隐藏组件。\n    .visibility(this.isLoading ? Visibility.Visible : Visibility.Hidden)\n  }\n\n  build() {\n    Refresh({ refreshing: $$this.refreshing, builder: this.refreshBuilder() }) {\n      List() {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%')\n              .height(80)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .backgroundColor(0xFFFFFF)\n          }.borderWidth(1)\n        }, (item: string) => item)\n\n        ListItem() {\n          this.footer();\n        }\n      }\n      .onScrollIndex((start: number, end: number) => {\n        // 当达到列表末尾时，触发新数据加载。\n        if (end >= this.arr.length - 1) {\n          this.isLoading = true;\n          // 模拟新数据加载。\n          setTimeout(() => {\n            for (let i = 0; i < 10; i++) {\n              this.arr.push(this.arr.length);\n            }\n            this.isLoading = false;\n          }, 700)\n        }\n      })\n      .scrollBar(BarState.Off)\n      // 开启边缘滑动效果。\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .onOffsetChange((offset: number) => {\n      this.refreshOffset = offset;\n    })\n    .onStateChange((state: RefreshStatus) => {\n      this.refreshState = state;\n    })\n    .onRefreshing(() => {\n      // 模拟数据刷新。\n      setTimeout(() => {\n        this.refreshing = false;\n      }, 2000)\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783594)/* ["default"] */.A) + "",
        width: "323",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置最大下拉距离",
      children: "示例7（设置最大下拉距离）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxpulldowndistance20",
        children: "maxPullDownDistance"
      }), "属性设置最大下拉距离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false\n  @State arr: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text('' + item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString())\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .maxPullDownDistance(150)\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus)\n      })\n      .onOffsetChange((value: number) => {\n        console.info('Refresh onOffsetChange offset:' + value)\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false\n        }, 2000)\n        console.info('onRefreshing test')\n      })\n      .backgroundColor(0x89CFF0)\n      .refreshOffset(64)\n      .pullToRefresh(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914227)/* ["default"] */.A) + "",
        width: "273",
        height: "476"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8禁止下拉刷新",
      children: "示例8（禁止下拉刷新）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pulldownratio12",
        children: "pullDownRatio"
      }), "属性禁止下拉刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State ratio: number | undefined = undefined;\n  @State arr: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n\n  build() {\n    Column() {\n      Row() {\n        Button('禁止下拉刷新').onClick(() => {\n          this.ratio = 0\n        })\n        Button('允许下拉刷新').onClick(() => {\n          this.ratio = undefined\n        })\n      }\n      Refresh({ refreshing: $$this.isRefreshing }) {\n          List() {\n            ForEach(this.arr, (item: string) => {\n              ListItem() {\n                Text('' + item)\n                  .width('70%')\n                  .height(80)\n                  .fontSize(16)\n                  .margin(10)\n                  .textAlign(TextAlign.Center)\n                  .borderRadius(10)\n                  .backgroundColor(0xFFFFFF)\n              }\n            }, (item: string) => item)\n          }\n          .onScrollIndex((first: number) => {\n            console.info(first.toString());\n          })\n          .width('100%')\n          .height('100%')\n          .alignListItem(ListItemAlign.Center)\n          .scrollBar(BarState.Off)\n      }\n      .backgroundColor(0x89CFF0)\n      .refreshOffset(64)\n      .pullToRefresh(true)\n      .pullDownRatio(this.ratio)\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onOffsetChange((value: number) => {\n        console.info('Refresh onOffsetChange offset:' + value);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n        console.info('onRefreshing test');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639086)/* ["default"] */.A) + "",
        width: "285",
        height: "601"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9不满一屏场景实现下拉刷新",
      children: "示例9（不满一屏场景实现下拉刷新）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#edgeeffect11",
        children: "edgeEffect"
      }), "时，将options参数的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#edgeeffectoptions11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "alwaysEnabled"
      }), "设置为true，可以在不满一屏的情况下实现Refresh组件的下拉刷新效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State alwaysEnabled: boolean = false;\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing }) {\n        Column() {\n          List() {\n            ListItem() {\n              Text('alwaysEnabled:' + this.alwaysEnabled)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n                .onClick(() => {\n                  this.alwaysEnabled = !this.alwaysEnabled;\n                })\n            }\n          }\n          .width('100%')\n          .height('100%')\n          .alignListItem(ListItemAlign.Center)\n          .scrollBar(BarState.Auto)\n          // List组件内容大小小于组件自身且alwaysEnabled为false时，List不会响应手势，此时手势会被Column组件响应，不会产生下拉刷新效果\n          // alwaysEnabled设为true，List会响应手势并通过嵌套滚动带动Refresh组件产生下拉刷新效果\n          .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: this.alwaysEnabled })\n        }\n        .gesture(\n          PanGesture({ direction: PanDirection.Vertical })\n        )\n      }\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onOffsetChange((value: number) => {\n        console.info('Refresh onOffsetChange offset:' + value);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          this.isRefreshing = false;\n        }, 2000)\n      })\n      .backgroundColor(0x89CFF0)\n      .refreshOffset(64)\n      .pullToRefresh(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(66129)/* ["default"] */.A) + "",
        width: "346",
        height: "710"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10上划不取消刷新",
      children: "示例10（上划不取消刷新）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pulluptocancelrefresh23",
        children: "pullUpToCancelRefresh"
      }), "接口设置上划不取消刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增pullUpToCancelRefresh接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\n\nclass Params {\n  refreshStatus: RefreshStatus = RefreshStatus.Inactive;\n\n  constructor(refreshStatus: RefreshStatus) {\n    this.refreshStatus = refreshStatus;\n  }\n}\n\n@Builder\nfunction customRefreshingContent(params: Params) {\n  Stack() {\n    Row() {\n      LoadingProgress().height(32)\n      Text('refreshStatus: ' + params.refreshStatus).fontSize(16).margin({ left: 20 })\n    }\n    .alignItems(VerticalAlign.Center)\n  }\n  .align(Alignment.Center)\n  .clip(true)\n  .constraintSize({ minHeight: 32 })\n  .width('100%')\n}\n\n@Entry\n@Component\nstruct RefreshExample {\n  @State isRefreshing: boolean = false;\n  @State arr: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; // 改为原始类型string[]\n  @State refreshStatus: RefreshStatus = RefreshStatus.Inactive;\n  private contentNode?: ComponentContent<Object> = undefined;\n  private params: Params = new Params(RefreshStatus.Inactive);\n\n  aboutToAppear(): void {\n    let uiContext = this.getUIContext();\n    this.contentNode = new ComponentContent(uiContext, wrapBuilder(customRefreshingContent), this.params);\n  }\n\n  build() {\n    Column() {\n      Refresh({ refreshing: $$this.isRefreshing, refreshingContent: this.contentNode }) {\n        List() {\n          ForEach(this.arr, (item: string) => {\n            ListItem() {\n              Text('' + item)\n                .width('70%')\n                .height(80)\n                .fontSize(16)\n                .margin(10)\n                .textAlign(TextAlign.Center)\n                .borderRadius(10)\n                .backgroundColor(0xFFFFFF)\n            }\n          }, (item: string) => item)\n        }\n        .onScrollIndex((first: number) => {\n          console.info(first.toString());\n        })\n        .width('100%')\n        .height('100%')\n        .alignListItem(ListItemAlign.Center)\n        .scrollBar(BarState.Off)\n      }\n      .backgroundColor(0x89CFF0)\n      .pullToRefresh(true)\n      .pullUpToCancelRefresh(false)\n      .refreshOffset(96)\n      .onStateChange((refreshStatus: RefreshStatus) => {\n        this.refreshStatus = refreshStatus;\n        this.params.refreshStatus = refreshStatus;\n        this.contentNode?.update(this.params);\n        console.info('Refresh onStateChange state is ' + refreshStatus);\n      })\n      .onRefreshing(() => {\n        setTimeout(() => {\n          const newArr: string[] = [];\n          const lastNum = parseInt(this.arr[this.arr.length - 1]);\n          for (let i = 0; i < 11; i++) {\n            newArr.push((lastNum + 1 + i).toString());\n          }\n          this.arr = newArr;\n\n          this.isRefreshing = false;\n        }, 6000)\n        console.info('onRefreshing test');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973792)/* ["default"] */.A) + "",
        width: "334",
        height: "462"
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
783594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959656-1b44a006693e0d6f969013dfb1aa3db6.gif");

},
894791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439699-878a152be6408ad5c86e7d632b2df71b.gif");

},
678188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
572135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959654-7bf72c8c79988b10a0ad3725eaa4d4ef.gif");

},
852069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
37974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439701-168d5a9e572310b1e73cbbb257a8bc05.gif");

},
639086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800008-54160f413f0f948decc0fcdf4d763d77.gif");

},
122581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
973792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959658-5774b32917fce337378b4999707cd2d6.gif");

},
66129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439703-311a6b3d94900b5a6994a2583f41399e.gif");

},
240292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800006-2d94fb405b696d562d6d35de708a5d66.gif");

},
413971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479655-e1bfa86402b081a471e169f1d66c668e.gif");

},
914227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479657-f940394237c37570534654ec7c6379d6.gif");

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