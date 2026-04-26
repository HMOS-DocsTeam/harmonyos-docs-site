"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["131878"], {
53801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_navigation_and_switching_ts_container_tabcontent_ts_container_tabcontent_md_a44_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-navigation-and-switching-ts-container-tabcontent-ts-container-tabcontent-md-a44.json
var site_docs_ref_arkui_api_arkui_declarative_comp_navigation_and_switching_ts_container_tabcontent_ts_container_tabcontent_md_a44_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent","title":"TabContent","description":"仅在Tabs中使用，对应一个切换页签的内容视图。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent.md","sourceDirName":"arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent","slug":"/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"TabContent","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-tabcontent"},"sidebar":"ref","previous":{"title":"Tabs","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs"},"next":{"title":"ToolBarItem","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-toolbaritem/ts-basic-components-toolbaritem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent.md


const frontMatter = {
	title: 'TabContent',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-tabcontent'
};
const contentTitle = 'TabContent';

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
  "value": "tabBar",
  "id": "tabbar",
  "level": 3
}, {
  "value": "tabBar9+",
  "id": "tabbar9",
  "level": 3
}, {
  "value": "tabBar18+",
  "id": "tabbar18",
  "level": 3
}, {
  "value": "TabBarOptions18+对象说明",
  "id": "tabbaroptions18对象说明",
  "level": 2
}, {
  "value": "SubTabBarStyle9+",
  "id": "subtabbarstyle9",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 3
}, {
  "value": "of10+",
  "id": "of10",
  "level": 3
}, {
  "value": "of12+",
  "id": "of12",
  "level": 3
}, {
  "value": "indicator10+",
  "id": "indicator10",
  "level": 3
}, {
  "value": "indicator22+",
  "id": "indicator22",
  "level": 3
}, {
  "value": "selectedMode10+",
  "id": "selectedmode10",
  "level": 3
}, {
  "value": "board10+",
  "id": "board10",
  "level": 3
}, {
  "value": "labelStyle10+",
  "id": "labelstyle10",
  "level": 3
}, {
  "value": "padding10+",
  "id": "padding10",
  "level": 3
}, {
  "value": "padding12+",
  "id": "padding12",
  "level": 3
}, {
  "value": "id11+",
  "id": "id11",
  "level": 3
}, {
  "value": "IndicatorStyle10+对象说明",
  "id": "indicatorstyle10对象说明",
  "level": 2
}, {
  "value": "DrawableTabBarIndicator22+对象说明",
  "id": "drawabletabbarindicator22对象说明",
  "level": 2
}, {
  "value": "DrawableDescriptor22+",
  "id": "drawabledescriptor22",
  "level": 2
}, {
  "value": "SelectedMode10+枚举说明",
  "id": "selectedmode10枚举说明",
  "level": 2
}, {
  "value": "BoardStyle10+对象说明",
  "id": "boardstyle10对象说明",
  "level": 2
}, {
  "value": "LabelStyle10+对象说明",
  "id": "labelstyle10对象说明",
  "level": 2
}, {
  "value": "BottomTabBarStyle9+",
  "id": "bottomtabbarstyle9",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 3
}, {
  "value": "of10+",
  "id": "of10-1",
  "level": 3
}, {
  "value": "padding10+",
  "id": "padding10-1",
  "level": 3
}, {
  "value": "verticalAlign10+",
  "id": "verticalalign10",
  "level": 3
}, {
  "value": "layoutMode10+",
  "id": "layoutmode10",
  "level": 3
}, {
  "value": "symmetricExtensible10+",
  "id": "symmetricextensible10",
  "level": 3
}, {
  "value": "labelStyle10+",
  "id": "labelstyle10-1",
  "level": 3
}, {
  "value": "id11+",
  "id": "id11-1",
  "level": 3
}, {
  "value": "iconStyle12+",
  "id": "iconstyle12",
  "level": 3
}, {
  "value": "TabBarSymbol12+对象说明",
  "id": "tabbarsymbol12对象说明",
  "level": 2
}, {
  "value": "LayoutMode10+枚举说明",
  "id": "layoutmode10枚举说明",
  "level": 2
}, {
  "value": "TabBarIconStyle12+对象说明",
  "id": "tabbariconstyle12对象说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onWillShow12+",
  "id": "onwillshow12",
  "level": 3
}, {
  "value": "onWillHide12+",
  "id": "onwillhide12",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（自定义页签切换联动）",
  "id": "示例1自定义页签切换联动",
  "level": 3
}, {
  "value": "示例2（自定义侧边页签）",
  "id": "示例2自定义侧边页签",
  "level": 3
}, {
  "value": "示例3（子页签/底部页签/侧边页签样式对比）",
  "id": "示例3子页签底部页签侧边页签样式对比",
  "level": 3
}, {
  "value": "示例4（设置子页签下划线基本属性）",
  "id": "示例4设置子页签下划线基本属性",
  "level": 3
}, {
  "value": "示例5（设置子页签文本自适应高度属性）",
  "id": "示例5设置子页签文本自适应高度属性",
  "level": 3
}, {
  "value": "示例6（设置底部页签基本属性）",
  "id": "示例6设置底部页签基本属性",
  "level": 3
}, {
  "value": "示例7（设置子页签/底部页签文本颜色）",
  "id": "示例7设置子页签底部页签文本颜色",
  "level": 3
}, {
  "value": "示例8（设置自定义子页签）",
  "id": "示例8设置自定义子页签",
  "level": 3
}, {
  "value": "示例9（设置底部页签使用symbol图标）",
  "id": "示例9设置底部页签使用symbol图标",
  "level": 3
}, {
  "value": "示例10（通过ComponentContent设置TabBar）",
  "id": "示例10通过componentcontent设置tabbar",
  "level": 3
}, {
  "value": "示例11（通过ComponentContent预加载子节点）",
  "id": "示例11通过componentcontent预加载子节点",
  "level": 3
}, {
  "value": "示例12（设置子页签indicator为图片）",
  "id": "示例12设置子页签indicator为图片",
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
        id: "tabcontent",
        children: "TabContent"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅在Tabs中使用，对应一个切换页签的内容视图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(929528)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件默认设置了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
          children: "clip"
        }), "属性的值为true，若需要扩展内容区到组件外显示，需先关闭clip属性。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持单个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(208921)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可内置系统组件和自定义组件，支持渲染控制类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "if/else"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TabContent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建TabContent页签和内容。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabbar",
      children: "tabBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabBar(options: string | Resource | CustomBuilder | TabBarOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar上显示内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果icon采用svg格式图源，需删除svg图源内置的宽高属性值。否则，icon大小将使用svg图源内置的宽高属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置的内容超出tabBar页签时进行裁切。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            }), "8+"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabbar9",
      children: "tabBar9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabBar(value: SubTabBarStyle | BottomTabBarStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar上显示内容。底部样式没有下划线效果。icon异常时显示灰色图块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(286721)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["子页签（", (0,jsx_runtime.jsx)(_components.a, {
          href: "#subtabbarstyle9",
          children: "SubTabBarStyle"
        }), "）样式：通常为文字+下划线，文字+背板的页签风格，允许设置文本样式，建议放置在顶部或者底部使用。切换页签时默认支持动画跳转效果。适用于资讯类应用的顶部分类（如\"关注、视频、数码\"）、功能模块的二级导航场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["底部页签/侧边页签（", (0,jsx_runtime.jsx)(_components.a, {
          href: "#bottomtabbarstyle9",
          children: "BottomTabBarStyle"
        }), "）样式：无下划线和背板效果，页签样式通常为图标+文字的组合方式。切换页签时默认无动画跳转效果。底部页签通常用于应用主导航（如首页、发现、推荐）。侧边页签适用于宽屏场景，可设置vertical(true)启用纵向布局，让页签在侧边显示，默认左侧显示。"]
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabbar18",
      children: "tabBar18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TabBar上显示内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用BottomTabBarStyle或TabBarOptions类型作为入参并设置icon，icon异常时显示灰色图块。如果icon采用svg格式图源，需删除svg图源内置的宽高属性值。否则，icon大小将使用svg图源内置的宽高属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置的内容超出TabBar页签时进行裁切。"
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(340961)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabContent组件不支持设置通用宽度属性，其宽度默认撑满Tabs父组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabContent组件不支持设置通用高度属性，其高度由Tabs父组件高度与TabBar组件高度决定。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vertical属性为false时，上述2个限制交换。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabContent组件不支持内容过长时页面的滑动，如需页面滑动，可嵌套List使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议对Tabs组件的所有TabContent子组件的tabBar属性，采用统一的参数类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若TabContent内部有可获焦组件，Tabs组件内TabContent组件和TabBar组件之间的走焦，仅支持通过键盘的方向键控制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabBar的属性动态修改后，会重新进行渲染，更新相关属性并重置所有页签位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabbaroptions18对象说明",
      children: "TabBarOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置页签内的图片和文字内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(260677)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "icon7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "subtabbarstyle9",
      children: "SubTabBarStyle9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子页签样式。打开后在切换页签时会播放跳转动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(content: ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SubTabBarStyle的构造函数。"
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内的文字内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(content: ResourceStr | ComponentContent)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SubTabBarStyle的构造函数。支持ComponentContent设置自定义内容。"
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "of10",
      children: "of10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static of(content: ResourceStr): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SubTabBarStyle的静态构造函数。"
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内的文字内容。"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的SubTabBarStyle对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "of12",
      children: "of12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static of(content: ResourceStr | ComponentContent): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SubTabBarStyle的静态构造函数。支持ComponentContent设置自定义内容。"
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的SubTabBarStyle对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indicator10",
      children: "indicator10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "indicator(value: IndicatorStyle): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中子页签的下划线风格。子页签的下划线风格仅在水平模式下有效。"
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
              href: "#indicatorstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IndicatorStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中子页签的下划线风格对象。"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indicator22",
      children: "indicator22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "indicator(value: IndicatorStyle | DrawableTabBarIndicator): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置选中子页签的下划线风格。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#indicator10",
        children: "indicator"
      }), "相比，新增了图片格式的下划线风格，图片的显示效果参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
        children: "ImageFit.Cover"
      }), "。子页签的下划线风格仅在水平模式下有效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
              href: "#indicatorstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IndicatorStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabletabbarindicator22%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DrawableTabBarIndicator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455862)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一般形式的下划线样式（IndicatorStyle）：为一条实线，切换页签时默认支持动画跳转效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图片形式的下划线样式（DrawableTabBarIndicator）：为一张图片，切换页签时默认无动画跳转效果。当传入无效图源时将显示一般形式的下划线。"
      }), "\n"]
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedmode10",
      children: "selectedMode10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedMode(value: SelectedMode): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中子页签的显示方式。子页签的显示方式仅在水平模式下有效。"
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
              href: "#selectedmode10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SelectedMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中子页签的显示方式。  默认值：SelectedMode.INDICATOR"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "board10",
      children: "board10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "board(value: BoardStyle): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中子页签的背板风格。子页签的背板风格仅在水平模式下有效。"
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
              href: "#boardstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BoardStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中子页签的背板风格对象。"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "labelstyle10",
      children: "labelStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "labelStyle(value: LabelStyle): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子页签的label文本和字体的样式。"
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
              href: "#labelstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LabelStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子页签的label文本和字体的样式对象。"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "padding10",
      children: "padding10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "padding(value: Padding | Dimension): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子页签的内边距属性（不支持百分比设置）。使用Dimension时，四个方向内边距同时生效。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "padding12",
      children: "padding12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "padding(padding: LocalizedPadding): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置子页签的内边距属性，支持镜像能力（不支持百分比设置）。"
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
            children: "padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子页签的内边距属性。  取值范围：[0, +∞]  默认值：{start:LengthMetrics.vp(8),end:LengthMetrics.vp(8),  top:LengthMetrics.vp(17),bottom:LengthMetrics.vp(18)}"
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id11",
      children: "id11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id(value: string): SubTabBarStyle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置子页签的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
        children: "id"
      }), "。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子页签的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
              children: "id"
            }), "。"]
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
              href: "#subtabbarstyle9",
              children: "SubTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回SubTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "indicatorstyle10对象说明",
      children: "IndicatorStyle10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下划线风格对象。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下划线的颜色和背板颜色。  默认值：#FF007DFF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
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
            children: "下划线的高度（不支持百分比设置）。  默认值：2.0  单位：vp  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下划线的宽度（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  宽度设置为0时，按页签文本宽度显示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius"
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
            children: "下划线的圆角半径（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marginTop"
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
            children: "下划线与文字的间距（不支持百分比设置）。  默认值：8.0  单位：vp  取值范围：[0, +∞)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawabletabbarindicator22对象说明",
      children: "DrawableTabBarIndicator22+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用图片资源作为下划线的对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "drawable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor22",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下划线的图源。  支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#drawabledescriptor",
              children: "DrawableDescriptor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#pixelmapdrawabledescriptor12",
              children: "PixelMapDrawableDescriptor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#layereddrawabledescriptor",
              children: "LayeredDrawableDescriptor"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
              children: "AnimatedDrawableDescriptor"
            }), "类型。当传入无效图源时将显示默认的实线型下划线。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
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
            children: "下划线的高度（不支持百分比设置）。  默认值：2.0  单位：vp  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
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
            children: "下划线的宽度（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)  宽度设置为0时，按页签文本宽度显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius"
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
            children: "下划线的圆角半径（不支持百分比设置）。  默认值：0.0  单位：vp  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marginTop"
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
            children: "下划线与文字的间距（不支持百分比设置）。  默认值：8.0  单位：vp  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawabledescriptor22",
      children: "DrawableDescriptor22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DrawableDescriptor = DrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为DrawableTabBarIndicator对象中drawable属性的入参对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个DrawableDescriptor对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectedmode10枚举说明",
      children: "SelectedMode10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中子页签的显示模式枚举。"
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
            children: "INDICATOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用下划线模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用背板模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boardstyle10对象说明",
      children: "BoardStyle10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "背板风格对象。"
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
            children: "borderRadius"
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
            children: "背板的圆角半径（不支持百分比设置）。  默认值：8.0  单位：vp  取值范围：[0, +∞)。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "labelstyle10对象说明",
      children: "LabelStyle10+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "label文本和字体的样式对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textoverflow",
              children: "TextOverflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label文本超长时的显示方式。默认值是省略号截断。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label文本的最大行数。如果指定此参数，则文本最多不会超过指定的行。如果有多余的文本，可以通过textOverflow来指定截断方式。默认值是1。  取值范围：[1, +∞)。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "heightAdaptivePolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textheightadaptivepolicy10",
              children: "TextHeightAdaptivePolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label文本自适应高度的方式。默认值是最大行数优先。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label文本字体样式。  当页签为子页签时，默认值是字体大小16.0fp、字体类型'HarmonyOS Sans'，字体风格正常，选中时字重中等，未选中时字重正常。  当页签为底部页签时，默认值是字体大小10.0fp、字体类型'HarmonyOS Sans'，字体风格正常，字重中等。  从API version 12开始，底部页签内容左右排布时默认字体大小为12.0fp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unselectedColor12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label文本字体未选中时的颜色。  默认值：#99182431  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedColor12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label文本字体选中时的颜色。  默认值：#FF007DFF  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bottomtabbarstyle9",
      children: "BottomTabBarStyle9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "底部页签和侧边页签样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-1",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BottomTabBarStyle的构造函数。"
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
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbarsymbol12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabBarSymbol12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内的文字内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "of10-1",
      children: "of10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BottomTabBarStyle的静态构造函数。"
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
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbarsymbol12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabBarSymbol12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内的文字内容。"
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的BottomTabBarStyle对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "padding10-1",
      children: "padding10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的内边距属性（不支持百分比设置）。使用Dimension时，四个方向内边距同时生效。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding12+"
            })
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verticalalign10",
      children: "verticalAlign10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "verticalAlign(value: VerticalAlign): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的图片、文字在垂直方向上的对齐格式。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#verticalalign",
              children: "VerticalAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "底部页签的图片、文字在垂直方向上的对齐格式。  默认值：VerticalAlign.Center"
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layoutmode10",
      children: "layoutMode10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layoutMode(value: LayoutMode): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的图片、文字排布的方式。"
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
              href: "#layoutmode10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "LayoutMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "底部页签的图片、文字排布的方式，具体参照LayoutMode枚举。  默认值：LayoutMode.VERTICAL"
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "symmetricextensible10",
      children: "symmetricExtensible10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "symmetricExtensible(value: boolean): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的图片、文字是否可以对称借用左右底部页签的空余位置中的最小值，仅fixed水平模式下在底部页签之间有效。"
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
            children: "底部页签的图片、文字是否可以对称借用左右底部页签的空余位置中的最小值。  默认值：false，底部页签的图片、文字不可以对称借用左右底部页签的空余位置中的最小值。"
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "labelstyle10-1",
      children: "labelStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "labelStyle(value: LabelStyle): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的label文本和字体的样式。"
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
              href: "#labelstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LabelStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "底部页签的label文本和字体的样式。"
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id11-1",
      children: "id11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id(value: string): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的id。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置底部页签的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
              children: "id"
            }), "。"]
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iconstyle12",
      children: "iconStyle12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "iconStyle(style: TabBarIconStyle): BottomTabBarStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置底部页签的label图标的样式。"
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
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbariconstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabBarIconStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "底部页签的label图标的样式。"
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
              href: "#bottomtabbarstyle9",
              children: "BottomTabBarStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回BottomTabBarStyle对象本身。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabbarsymbol12对象说明",
      children: "TabBarSymbol12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页签内symbol图标样式对象。"
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
            children: "normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内symbol图标普通态样式。  默认值：  fontColor：#66182431  renderingStrategy：SymbolRenderingStrategy.MULTIPLE_OPACITY  fontSize：24vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内symbol图标选中态样式。  默认值：  fontColor：#ff007dff  renderingStrategy：SymbolRenderingStrategy.MULTIPLE_OPACITY  fontSize：24vp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutmode10枚举说明",
      children: "LayoutMode10+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页签内容排布方式枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若页签宽度大于104vp，页签内容为左右排布，否则页签内容为上下排布。仅TabBar为垂直模式或Fixed水平模式时有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内容上下排布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HORIZONTAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签内容左右排布。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabbariconstyle12对象说明",
      children: "TabBarIconStyle12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Label图标样式对象。"
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
            children: "unselectedColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label图标未选中时的颜色。  默认值：#33182431  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅对svg图源生效，设置后会替换svg图片的填充颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Label图标选中时的颜色。  默认值：#FF007DFF  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅对svg图源生效，设置后会替换svg图片的填充颜色。"]
          })]
        })]
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
      id: "onwillshow12",
      children: "onWillShow12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillShow(event: VoidCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逻辑回调，TabContent将要显示的时候触发该回调。场景包括TabContent首次显示，TabContent切换，页面切换，窗口前后台切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(497859)/* ["default"] */.A) + "",
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#voidcallback12",
              children: "VoidCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TabContent将要显示的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillhide12",
      children: "onWillHide12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillHide(event: VoidCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逻辑回调，TabContent将要隐藏的时候触发该回调。场景包括TabContent切换，页面切换，窗口前后台切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758342)/* ["default"] */.A) + "",
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#voidcallback12",
              children: "VoidCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TabContent将要隐藏的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1自定义页签切换联动",
      children: "示例1（自定义页签切换联动）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过onAnimationStart、onChange实现切换时自定义tabBar和TabContent的联动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabContentExample {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  private controller: TabsController = new TabsController();\n\n  @Builder tabBuilder(index: number) {\n    Column() {\n      Image(this.selectedIndex === index ? '/common/public_icon_on.svg' : '/common/public_icon_off.svg')\n        .width(24)\n        .height(24)\n        .margin({ bottom: 4 })\n        .objectFit(ImageFit.Contain)\n      Text(`Tab${index + 1}`)\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(10)\n        .fontWeight(500)\n        .lineHeight(14)\n    }.width('100%')\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column() {\n            Text('Tab1')\n              .fontSize(36)\n              .fontColor('#182431')\n              .fontWeight(500)\n              .opacity(0.4)\n              .margin({ top: 30, bottom: 56.5 })\n            Divider()\n              .strokeWidth(0.5)\n              .color('#182431')\n              .opacity(0.05)\n          }.width('100%')\n        }.tabBar(this.tabBuilder(0))\n\n        TabContent() {\n          Column() {\n            Text('Tab2')\n              .fontSize(36)\n              .fontColor('#182431')\n              .fontWeight(500)\n              .opacity(0.4)\n              .margin({ top: 30, bottom: 56.5 })\n            Divider()\n              .strokeWidth(0.5)\n              .color('#182431')\n              .opacity(0.05)\n          }.width('100%')\n        }.tabBar(this.tabBuilder(1))\n\n        TabContent() {\n          Column() {\n            Text('Tab3')\n              .fontSize(36)\n              .fontColor('#182431')\n              .fontWeight(500)\n              .opacity(0.4)\n              .margin({ top: 30, bottom: 56.5 })\n            Divider()\n              .strokeWidth(0.5)\n              .color('#182431')\n              .opacity(0.05)\n          }.width('100%')\n        }.tabBar(this.tabBuilder(2))\n\n        TabContent() {\n          Column() {\n            Text('Tab4')\n              .fontSize(36)\n              .fontColor('#182431')\n              .fontWeight(500)\n              .opacity(0.4)\n              .margin({ top: 30, bottom: 56.5 })\n            Divider()\n              .strokeWidth(0.5)\n              .color('#182431')\n              .opacity(0.05)\n          }.width('100%')\n        }.tabBar(this.tabBuilder(3))\n      }\n      .vertical(false)\n      .barHeight(56)\n      .onChange((index: number) => {\n        // currentIndex控制TabContent显示页签\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        if (index === targetIndex) {\n          return;\n        }\n        // selectedIndex控制自定义TabBar内Image和Text颜色切换\n        this.selectedIndex = targetIndex;\n      })\n      .width(360)\n      .height(190)\n      .backgroundColor('#F1F3F5')\n      .margin({ top: 38 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122980)/* ["default"] */.A) + "",
        width: "388",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义侧边页签",
      children: "示例2（自定义侧边页签）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过vertical、barPosition实现侧边页签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabContentExample {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  @State selectedIndex: number = 0;\n  private controller: TabsController = new TabsController();\n\n  @Builder tabBuilder(index: number) {\n    Column() {\n      Image(this.selectedIndex === index ? '/common/public_icon_on.svg' : '/common/public_icon_off.svg')\n        .width(24)\n        .height(24)\n        .margin({ bottom: 4 })\n        .objectFit(ImageFit.Contain)\n      Text('Tab')\n        .fontColor(this.selectedIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(10)\n        .fontWeight(500)\n        .lineHeight(14)\n    }.width('100%').height('100%').justifyContent(FlexAlign.Center)\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {\n        TabContent()\n          .tabBar(this.tabBuilder(0))\n        TabContent()\n          .tabBar(this.tabBuilder(1))\n        TabContent()\n          .tabBar(this.tabBuilder(2))\n        TabContent()\n          .tabBar(this.tabBuilder(3))\n      }\n      .vertical(true)\n      .barWidth(96)\n      .barHeight(414)\n      .onChange((index: number) => {\n        // currentIndex控制TabContent显示页签\n        this.currentIndex = index;\n        this.selectedIndex = index;\n      })\n      .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {\n        if (index === targetIndex) {\n          return;\n        }\n        // selectedIndex控制自定义TabBar内Image和Text颜色切换\n        this.selectedIndex = targetIndex;\n      })\n      .width(96)\n      .height(414)\n      .backgroundColor('#F1F3F5')\n      .margin({ top: 52 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(717573)/* ["default"] */.A) + "",
        width: "164",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3子页签底部页签侧边页签样式对比",
      children: "示例3（子页签/底部页签/侧边页签样式对比）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例使用了SubTabBarStyle、BottomTabBarStyle实现了子页签、底部页签和侧边页签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabBarStyleExample {\n  build() {\n    Column({ space: 5 }) {\n      Text('子页签样式')\n      Column() {\n        Tabs({ barPosition: BarPosition.Start }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }.tabBar(new SubTabBarStyle('Pink'))\n          .onWillShow(() => {\n            console.info('Pink will show');\n          })\n          .onWillHide(() => {\n            console.info('Pink will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n          }.tabBar(new SubTabBarStyle('Yellow'))\n          .onWillShow(() => {\n            console.info('Yellow will show');\n          })\n          .onWillHide(() => {\n            console.info('Yellow will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new SubTabBarStyle('Blue'))\n          .onWillShow(() => {\n            console.info('Blue will show');\n          })\n          .onWillHide(() => {\n            console.info('Blue will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new SubTabBarStyle('Green'))\n          .onWillShow(() => {\n            console.info('Green will show');\n          })\n          .onWillHide(() => {\n            console.info('Green will hide');\n          })\n        }\n        .vertical(false)\n        .scrollable(true)\n        .barMode(BarMode.Fixed)\n        .onChange((index: number) => {\n          console.info(index.toString());\n        })\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('100%').height(200)\n      Text('底部页签样式')\n      Column() {\n        Tabs({ barPosition: BarPosition.End }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Pink'))\n          .onWillShow(() => {\n            console.info('Pink will show');\n          })\n          .onWillHide(() => {\n            console.info('Pink will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Yellow'))\n          .onWillShow(() => {\n            console.info('Yellow will show');\n          })\n          .onWillHide(() => {\n            console.info('Yellow will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Blue'))\n          .onWillShow(() => {\n            console.info('Blue will show');\n          })\n          .onWillHide(() => {\n            console.info('Blue will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Green'))\n          .onWillShow(() => {\n            console.info('Green will show');\n          })\n          .onWillHide(() => {\n            console.info('Green will hide');\n          })\n        }\n        .vertical(false)\n        .scrollable(true)\n        .barMode(BarMode.Fixed)\n        .onChange((index: number) => {\n          console.info(index.toString());\n        })\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('100%').height(200)\n      Text('侧边页签样式')\n      Column() {\n        Tabs({ barPosition: BarPosition.Start }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Pink'))\n          .onWillShow(() => {\n            console.info('Pink will show');\n          })\n          .onWillHide(() => {\n            console.info('Pink will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Yellow'))\n          .onWillShow(() => {\n            console.info('Yellow will show');\n          })\n          .onWillHide(() => {\n            console.info('Yellow will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Blue'))\n          .onWillShow(() => {\n            console.info('Blue will show');\n          })\n          .onWillHide(() => {\n            console.info('Blue will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Green'))\n          .onWillShow(() => {\n            console.info('Green will show');\n          })\n          .onWillHide(() => {\n            console.info('Green will hide');\n          })\n        }\n        .vertical(true).scrollable(true).barMode(BarMode.Fixed)\n        .onChange((index: number) => {\n          console.info(index.toString());\n        })\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('100%').height(400)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(95711)/* ["default"] */.A) + "",
        width: "446",
        height: "793"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置子页签下划线基本属性",
      children: "示例4（设置子页签下划线基本属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过SubTabBarStyle中的indicator属性，实现了子页签下划线基本属性的展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsAttr {\n  private controller: TabsController = new TabsController();\n  @State indicatorColor: Color = Color.Blue;\n  @State indicatorWidth: number = 40;\n  @State indicatorHeight: number = 10;\n  @State indicatorBorderRadius: number = 5;\n  @State indicatorSpace: number = 10;\n  @State subTabBorderRadius: number = 20;\n  @State selectedMode: SelectedMode = SelectedMode.INDICATOR;\n  private colorFlag: boolean = true;\n  private widthFlag: boolean = true;\n  private heightFlag: boolean = true;\n  private borderFlag: boolean = true;\n  private spaceFlag: boolean = true;\n\n  build() {\n    Column() {\n      Button('下划线颜色变化').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          // 对Button组件的宽高属性进行动画配置\n          if (this.colorFlag) {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorColor = Color.Red;\n            });\n          } else {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorColor = Color.Yellow;\n            });\n          }\n          this.colorFlag = !this.colorFlag;\n        })\n      Button('下划线高度变化').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          // 对Button组件的宽高属性进行动画配置\n          if (this.heightFlag) {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorHeight = 20;\n            });\n          } else {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorHeight = 10;\n            });\n          }\n          this.heightFlag = !this.heightFlag;\n        })\n      Button('下划线宽度变化').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          // 对Button组件的宽高属性进行动画配置\n          if (this.widthFlag) {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorWidth = 30;\n            });\n          } else {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorWidth = 50;\n            });\n          }\n          this.widthFlag = !this.widthFlag;\n        })\n      Button('下划线圆角半径变化').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          // 对Button组件的宽高属性进行动画配置\n          if (this.borderFlag) {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorBorderRadius = 0;\n            });\n          } else {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorBorderRadius = 5;\n            });\n          }\n          this.borderFlag = !this.borderFlag;\n        })\n      Button('下划线间距变化').width('100%').margin({ bottom: '12vp' })\n        .onClick((event?: ClickEvent) => {\n          // 对Button组件的宽高属性进行动画配置\n          if (this.spaceFlag) {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorSpace = 20;\n            });\n          } else {\n            this.getUIContext()?.animateTo({\n              duration: 1000, // 动画时长\n              curve: Curve.Linear, // 动画曲线\n              delay: 200, // 动画延迟\n              iterations: 1, // 播放次数\n              playMode: PlayMode.Normal, // 动画模式\n              onFinish: () => {\n                console.info('play end');\n              }\n            }, () => {\n              this.indicatorSpace = 10;\n            });\n          }\n          this.spaceFlag = !this.spaceFlag;\n        })\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink).borderRadius('12vp')\n        }.tabBar(SubTabBarStyle.of('pink')\n          .indicator({\n            color: this.indicatorColor, // 下划线颜色\n            height: this.indicatorHeight, // 下划线高度\n            width: this.indicatorWidth, // 下划线宽度\n            borderRadius: this.indicatorBorderRadius, // 下划线圆角半径\n            marginTop: this.indicatorSpace // 下划线与文字间距\n          })\n          .selectedMode(this.selectedMode)\n          .board({ borderRadius: this.subTabBorderRadius })\n          .labelStyle({})\n        )\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Yellow).borderRadius('12vp')\n        }.tabBar('yellow')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue).borderRadius('12vp')\n        }.tabBar('blue')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green).borderRadius('12vp')\n        }.tabBar('green')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Gray).borderRadius('12vp')\n        }.tabBar('gray')\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Orange).borderRadius('12vp')\n        }.tabBar('orange')\n      }\n      .vertical(false)\n      .scrollable(true)\n      .barMode(BarMode.Scrollable)\n      .barHeight(140)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        console.info(index.toString());\n      })\n      .backgroundColor(0xF5F5F5)\n      .height(320)\n    }.width('100%').height(250).padding({ top: '24vp', left: '24vp', right: '24vp' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(373316)/* ["default"] */.A) + "",
        width: "332",
        height: "574"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置子页签文本自适应高度属性",
      children: "示例5（设置子页签文本自适应高度属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过heightAdaptivePolicy实现了子页签文本高度自适应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabsTextOverflow {\n  @State message: string = 'Hello World';\n  private controller: TabsController = new TabsController();\n  @State subTabOverflowOpaque: boolean = true;\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {\n        TabContent() {\n          Column() {\n            Text('单行省略号截断').fontSize(30).fontColor(0xFF000000)\n          }.width('100%').height('100%').backgroundColor(Color.Pink)\n        }\n        .tabBar(SubTabBarStyle.of('开始【单行省略号截断单行省略号截断单行省略号截断单行省略号截断单行省略号截断单行省略号截断单行省略号截断单行省略号截断单行省略号截断单行省略号截断】结束')\n          .labelStyle({\n            overflow: TextOverflow.Ellipsis,\n            maxLines: 1,\n            minFontSize: 10,\n            heightAdaptivePolicy: TextHeightAdaptivePolicy.MAX_LINES_FIRST,\n            font: { size: 20 }\n          }))\n\n        TabContent() {\n          Column() {\n            Text('先缩小再截断').fontSize(30).fontColor(0xFF000000)\n          }.width('100%').height('100%').backgroundColor(Color.Pink)\n        }\n        .tabBar(SubTabBarStyle.of('开始【先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断先缩小再截断】结束')\n          .labelStyle({\n            overflow: TextOverflow.Clip,\n            maxLines: 1,\n            minFontSize: 15,\n            maxFontSize: 15,\n            heightAdaptivePolicy: TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST,\n            font: { size: 20 }\n          }))\n\n        TabContent() {\n          Column() {\n            Text('先缩小再换行再截断').fontSize(30).fontColor(0xFF000000)\n          }.width('100%').height('100%').backgroundColor(Color.Pink)\n        }\n        .tabBar(SubTabBarStyle.of('开始【先缩小再换行再截断先缩小再换行再截断先缩小再换行再截断先缩小再换行再截断先缩小再换行再截断先缩小再换行再截断先缩小再换行再截断先缩小再换行再截断】结束')\n          .labelStyle({\n            overflow: TextOverflow.Clip,\n            maxLines: 2,\n            minFontSize: 15,\n            maxFontSize: 15,\n            heightAdaptivePolicy: TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST,\n            font: { size: 20 }\n          }))\n\n        TabContent() {\n          Column() {\n            Text('换行').fontSize(30).fontColor(0xFF000000)\n          }\n          .width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(SubTabBarStyle.of('开始【换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行】结束')\n          .labelStyle({\n            overflow: TextOverflow.Clip,\n            maxLines: 10,\n            minFontSize: 10,\n            heightAdaptivePolicy: TextHeightAdaptivePolicy.MAX_LINES_FIRST,\n            font: { size: 20 }\n          }))\n      }\n      .vertical(true).scrollable(true)\n      .barMode(BarMode.Fixed)\n      .barHeight(720)\n      .barWidth(200).animationDuration(400)\n      .onChange((index: number) => {\n        console.info(index.toString());\n      })\n      .height('100%').width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395206)/* ["default"] */.A) + "",
        width: "313",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置底部页签基本属性",
      children: "示例6（设置底部页签基本属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过padding、verticalAlign、layoutMode、symmetricExtensible实现了底部页签基本属性的展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabContentExample6 {\n  private controller: TabsController = new TabsController();\n  @State text: string = '2';\n  @State tabPadding: number = 0;\n  @State symmetricExtensible: boolean = false;\n  @State layoutMode: LayoutMode = LayoutMode.VERTICAL;\n  @State verticalAlign: VerticalAlign = VerticalAlign.Center;\n\n  build() {\n    Column() {\n      Row() {\n        Button('padding+10 ' + this.tabPadding)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabPadding += 10;\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('padding-10 ' + this.tabPadding)\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.tabPadding -= 10;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('文本增加 ')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.text += '文本增加';\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('文本重置')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.text = '2';\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('symmetricExtensible改变 ' + this.symmetricExtensible)\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.symmetricExtensible = !this.symmetricExtensible;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('layoutMode垂直 ')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.layoutMode = LayoutMode.VERTICAL;\n          })\n          .margin({ right: '6%', bottom: '12vp' })\n        Button('layoutMode水平 ')\n          .width('47%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.layoutMode = LayoutMode.HORIZONTAL;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('verticalAlign朝上')\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.verticalAlign = VerticalAlign.Top;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('verticalAlign居中')\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.verticalAlign = VerticalAlign.Center;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n      Row() {\n        Button('verticalAlign朝下')\n          .width('100%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.verticalAlign = VerticalAlign.Bottom;\n          })\n          .margin({ bottom: '12vp' })\n      }\n\n\n      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(BottomTabBarStyle.of($r('sys.media.ohos_app_icon'), '1'))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(BottomTabBarStyle.of($r('sys.media.ohos_app_icon'), this.text)\n          .padding(this.tabPadding)\n          .verticalAlign(this.verticalAlign)\n          .layoutMode(this.layoutMode)\n          .symmetricExtensible(this.symmetricExtensible))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }.tabBar(BottomTabBarStyle.of($r('sys.media.ohos_app_icon'), '3'))\n      }\n      .animationDuration(300)\n      .height('60%')\n      .backgroundColor(0xf1f3f5)\n      .barMode(BarMode.Fixed)\n    }\n    .width('100%')\n    .height(500)\n    .margin({ top: 5 })\n    .padding('24vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(880519)/* ["default"] */.A) + "",
        width: "366",
        height: "802"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置子页签底部页签文本颜色",
      children: "示例7（设置子页签/底部页签文本颜色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过labelStyle中的unselectedColor和selectedColor改变底部页签以及子页签的文本颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过iconStyle中的unselectedColor和selectedColor改变底部页签的图标颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TabBarStyleExample {\n  build() {\n    Column({ space: 5 }) {\n      Text('子页签样式')\n      Column() {\n        Tabs({ barPosition: BarPosition.Start }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }.tabBar(new SubTabBarStyle('Pink')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green }))\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n          }.tabBar(new SubTabBarStyle('Yellow')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green }))\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new SubTabBarStyle('Blue')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green }))\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new SubTabBarStyle('Green')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n          )\n        }\n        .vertical(false)\n        .scrollable(true)\n        .barMode(BarMode.Fixed)\n        .onChange((index: number) => {\n          console.info(index.toString());\n        })\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('100%').height(200)\n\n      Text('底部页签样式')\n      Column() {\n        Tabs({ barPosition: BarPosition.End }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }\n          .tabBar(new BottomTabBarStyle('/common/public_icon_off.svg', 'pink')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n            .iconStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n          )\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n          }.tabBar(new BottomTabBarStyle('/common/public_icon_off.svg', 'Yellow')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n            .iconStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n          )\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new BottomTabBarStyle('/common/public_icon_off.svg', 'Blue')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n            .iconStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n          )\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new BottomTabBarStyle('/common/public_icon_off.svg', 'Green')\n            .labelStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n            .iconStyle({ unselectedColor: Color.Red, selectedColor: Color.Green })\n          )\n        }\n        .vertical(false)\n        .scrollable(true)\n        .barMode(BarMode.Fixed)\n        .onChange((index: number) => {\n          console.info(index.toString());\n        })\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('100%').height(200)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425053)/* ["default"] */.A) + "",
        width: "318",
        height: "418"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置自定义子页签",
      children: "示例8（设置自定义子页签）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了通过ComponentContent设置SubTabBarStyle。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n      .margin(20)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message1: string = 'tabBar1';\n  @State message2: string = 'tabBar2';\n  context: UIContext = this.getUIContext();\n  private count1 = 0;\n  private count2 = 0;\n  private controller: TabsController = new TabsController();\n  tabBar1: ComponentContent<Params> = new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(buildText), new Params(this.message1));\n  tabBar2: ComponentContent<Params> = new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(buildText), new Params(this.message2));\n\n  build() {\n    Row() {\n      Column() {\n        Button('更新tabBar1').width('90%').margin(20)\n          .onClick((event?: ClickEvent) => {\n            this.count1 += 1;\n            const message1 = 'Update 1_' + this.count1.toString();\n            this.tabBar1.update(new Params(message1));\n          })\n        Button('更新tabBar2').width('90%').margin(20)\n          .onClick((event?: ClickEvent) => {\n            this.count2 += 1;\n            const message2 = 'Update 2_' + this.count2.toString();\n            this.tabBar2.update(new Params(message2));\n          })\n        Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink).borderRadius('12vp')\n          }.tabBar(new SubTabBarStyle(this.tabBar1))\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue).borderRadius('12vp')\n          }.tabBar(SubTabBarStyle.of(this.tabBar2))\n        }\n        .vertical(false)\n        .barWidth(414)\n        .barHeight(96)\n        .width(414)\n        .height(414)\n        .backgroundColor('#F1F3F5')\n        .margin({ top: 20 })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(817895)/* ["default"] */.A) + "",
        width: "380",
        height: "492"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置底部页签使用symbol图标",
      children: "示例9（设置底部页签使用symbol图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了BottomTabBarStyle图片传入Symbol。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State symbolModifier1: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.ohos_wifi'));\n  @State symbolModifier2: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.ellipsis_bubble'));\n  @State symbolModifier3: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.dot_video'));\n  @State symbolModifier4: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.exposure'));\n  build() {\n    Column({space: 5}) {\n      Text('底部页签样式')\n      Column(){\n        Tabs({barPosition: BarPosition.End}) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }.tabBar(new BottomTabBarStyle({\n            normal: this.symbolModifier1,\n          }, 'Pink'))\n          .onWillShow(() => {\n            console.info('Pink will show');\n          })\n          .onWillHide(() => {\n            console.info('Pink will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Orange)\n          }.tabBar(new BottomTabBarStyle({\n            normal: this.symbolModifier2,\n          }, 'Orange'))\n          .onWillShow(() => {\n            console.info('Orange will show');\n          })\n          .onWillHide(() => {\n            console.info('Orange will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new BottomTabBarStyle({\n            normal: this.symbolModifier3,\n          }, 'Blue'))\n          .onWillShow(() => {\n            console.info('Blue will show');\n          })\n          .onWillHide(() => {\n            console.info('Blue will hide');\n          })\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new BottomTabBarStyle({\n            normal: this.symbolModifier4,\n          }, 'Green'))\n          .onWillShow(() => {\n            console.info('Green will show');\n          })\n          .onWillHide(() => {\n            console.info('Green will hide');\n          })\n        }\n        .vertical(false)\n        .scrollable(true)\n        .barMode(BarMode.Fixed)\n        .onChange((index:number)=>{\n          console.info(index.toString());\n        })\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('100%').height(200)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764618)/* ["default"] */.A) + "",
        width: "445",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10通过componentcontent设置tabbar",
      children: "示例10（通过ComponentContent设置TabBar）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了通过ComponentContent封装组件内容，设置TabBar。通过ComponentContent的update函数更新TabBar。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  text: string = '';\n  fontColor: string = '';\n\n  constructor(text: string, fontColor: string) {\n    this.text = text;\n    this.fontColor = fontColor;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontColor(params.fontColor)\n      .fontSize(20)\n      .fontWeight(FontWeight.Bold)\n      .margin(20)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State currentIndex: number = 0;\n  @State message1: string = 'tabBar1';\n  @State message2: string = 'tabBar2';\n  unselectedFontColor: string = '#182431';\n  selectedFontColor: string = '#007DFF';\n  context: UIContext = this.getUIContext();\n  private count1 = 0;\n  private count2 = 0;\n  private controller: TabsController = new TabsController();\n\n  getTabBar1() {\n    this.tabBar1.update(new Params(this.message1,\n      this.currentIndex === 0 ? this.selectedFontColor : this.unselectedFontColor));\n    return this.tabBar1;\n  }\n\n  getTabBar2() {\n    this.tabBar2.update(new Params(this.message2,\n      this.currentIndex === 1 ? this.selectedFontColor : this.unselectedFontColor));\n    return this.tabBar2;\n  }\n\n  tabBar1: ComponentContent<Params> =\n    new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(buildText),\n      new Params(this.message1, this.selectedFontColor));\n  tabBar2: ComponentContent<Params> =\n    new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(buildText),\n      new Params(this.message2, this.unselectedFontColor));\n\n  build() {\n    Row() {\n      Column() {\n        Button('更新tabBar1').width('90%').margin(20)\n          .onClick((event?: ClickEvent) => {\n            this.count1 += 1;\n            this.message1 = 'Update 1_' + this.count1.toString();\n            this.tabBar1.update(new Params(this.message1, this.unselectedFontColor));\n          })\n        Button('更新tabBar2').width('90%').margin(20)\n          .onClick((event?: ClickEvent) => {\n            this.count2 += 1;\n            this.message2 = 'Update 2_' + this.count2.toString();\n            this.tabBar2.update(new Params(this.message2, this.unselectedFontColor));\n          })\n        Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink).borderRadius('12vp')\n          }.tabBar(this.getTabBar1())\n\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue).borderRadius('12vp')\n          }.tabBar(this.getTabBar2())\n        }\n        .vertical(false)\n        .barWidth(414)\n        .barHeight(96)\n        .width(414)\n        .height(414)\n        .backgroundColor('#F1F3F5')\n        .margin({ top: 20 })\n        .onChange((index: number) => {\n          this.currentIndex = index;\n        })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608466)/* ["default"] */.A) + "",
        width: "349",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11通过componentcontent预加载子节点",
      children: "示例11（通过ComponentContent预加载子节点）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了通过ComponentContent设置TabBar，使用TabsController的preloadItems预加载子节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { ComponentContent } from '@kit.ArkUI';\n\nclass Params {\n  text: string = '';\n  fontColor: string = '';\n\n  constructor(text: string, fontColor: string) {\n    this.text = text;\n    this.fontColor = fontColor;\n  }\n}\n\n@Component\nstruct imageCom {\n  build() {\n    Image($r('app.media.startIcon'))\n      .alt($r('app.media.background'))\n      .width(15)\n      .height(15)\n  }\n}\n\n@Builder\nfunction TabBuilder(params: Params) {\n  Column({ space: 4 }) {\n    imageCom()\n\n    Text(params.text)\n      .fontSize(10)\n      .fontColor(params.fontColor)\n  }\n}\n\n@Entry\n@Component\nstruct TabsPreloadItems {\n  @State currentIndex: number = 0;\n  private tabsController: TabsController = new TabsController();\n  context: UIContext = this.getUIContext();\n  unselectedFontColor: string = '#182431';\n  selectedFontColor: string = '#007DFF';\n\n  getTabBar1() {\n    this.tabBar1.update(new Params('green',\n      this.currentIndex === 0 ? this.selectedFontColor : this.unselectedFontColor));\n    return this.tabBar1;\n  }\n\n  getTabBar2() {\n    this.tabBar2.update(new Params('blue',\n      this.currentIndex === 1 ? this.selectedFontColor : this.unselectedFontColor));\n    return this.tabBar2;\n  }\n\n  getTabBar3() {\n    this.tabBar3.update(new Params('yellow',\n      this.currentIndex === 2 ? this.selectedFontColor : this.unselectedFontColor));\n    return this.tabBar3;\n  }\n\n  getTabBar4() {\n    this.tabBar4.update(new Params('pink',\n      this.currentIndex === 3 ? this.selectedFontColor : this.unselectedFontColor));\n    return this.tabBar4;\n  }\n\n  tabBar1: ComponentContent<Params> =\n    new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(TabBuilder),\n      new Params('green', this.selectedFontColor));\n  tabBar2: ComponentContent<Params> =\n    new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(TabBuilder),\n      new Params('blue', this.unselectedFontColor));\n  tabBar3: ComponentContent<Params> =\n    new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(TabBuilder),\n      new Params('yellow', this.unselectedFontColor));\n  tabBar4: ComponentContent<Params> =\n    new ComponentContent<Params>(this.context, wrapBuilder<[Params]>(TabBuilder),\n      new Params('pink', this.unselectedFontColor));\n\n  build() {\n    Column() {\n      Tabs({ index: this.currentIndex, controller: this.tabsController }) {\n        TabContent() {\n          MyComponent({ color: '#00CB87' })\n        }.tabBar(this.getTabBar1())\n\n        TabContent() {\n          MyComponent({ color: '#007DFF' })\n        }.tabBar(this.getTabBar2())\n\n        TabContent() {\n          MyComponent({ color: '#FFBF00' })\n        }.tabBar(this.getTabBar3())\n\n        TabContent() {\n          MyComponent({ color: '#E67C92' })\n        }.tabBar(this.getTabBar4())\n      }\n      .width(360)\n      .height(296)\n      .backgroundColor('#F1F3F5')\n      .onChange((index: number) => {\n        this.currentIndex = index;\n      })\n\n      Button('preload items: [1,2,3]')\n        .margin(5)\n        .onClick(() => {\n          // 预加载index为1~3的子节点\n          this.tabsController.preloadItems([1, 2, 3])\n            .then(() => {\n              console.info('preloadItems success.');\n            })\n            .catch((error: BusinessError) => {\n              console.error('preloadItems failed, error code: ' + error.code + ', error message: ' + error.message);\n            });\n        })\n\n      Button('preload items: [1]')\n        .margin(5)\n        .onClick(() => {\n          // 预加载index为1的子节点\n          this.tabsController.preloadItems([1])\n            .then(() => {\n              console.info('preloadItems success.');\n            })\n            .catch((error: BusinessError) => {\n              console.error('preloadItems failed, error code: ' + error.code + ', error message: ' + error.message);\n            });\n        })\n      Button('preload items: [3]')\n        .margin(5)\n        .onClick(() => {\n          // 预加载index为3的子节点\n          this.tabsController.preloadItems([3])\n            .then(() => {\n              console.info('preloadItems success.');\n            })\n            .catch((error: BusinessError) => {\n              console.error('preloadItems failed, error code: ' + error.code + ', error message: ' + error.message);\n            });\n        })\n    }\n  }\n}\n\n@Component\nstruct MyComponent {\n  private color: string = '';\n\n  aboutToAppear(): void {\n    console.info('aboutToAppear backgroundColor:' + this.color);\n  }\n\n  aboutToDisappear(): void {\n    console.info('aboutToDisappear backgroundColor:' + this.color);\n  }\n\n  build() {\n    Column()\n      .width('100%')\n      .height('100%')\n      .backgroundColor(this.color)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(961353)/* ["default"] */.A) + "",
        width: "534",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12设置子页签indicator为图片",
      children: "示例12（设置子页签indicator为图片）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，本示例通过SubTabBarStyle中的indicator属性，实现了图片格式的子页签下划线风格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { DrawableDescriptor } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TabsIndicatorExample {\n  @State isVertical: boolean = false;\n  @State text: string = '文本';\n  @State barMode: BarMode = BarMode.Fixed;\n  @State pixmapDesc: DrawableDescriptor | null = null;\n\n  async aboutToAppear() {\n    const resManager = this.getUIContext().getHostContext()?.resourceManager;\n    if (!resManager) {\n      return;\n    }\n    // $r('app.media.indicator')需要替换为开发者所需的图像资源文件。\n    let pixmapDescResult = resManager.getDrawableDescriptor($r('app.media.indicator').id);\n    if (pixmapDescResult) {\n      this.pixmapDesc = pixmapDescResult as DrawableDescriptor;\n    }\n  }\n\n  build() {\n    Column() {\n      Tabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }.tabBar(SubTabBarStyle.of('TabBar 1')\n          .indicator({\n            drawable: this.pixmapDesc,\n            height: 10,\n            width: 70,\n            borderRadius: 5,\n            marginTop: 5\n          }))\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Green)\n        }.tabBar(SubTabBarStyle.of('TabBar 2')\n          .indicator({\n            drawable: this.pixmapDesc,\n            height: 10,\n            width: 70,\n            borderRadius: 5,\n            marginTop: 5\n          }))\n      }\n      .height('60%')\n      .backgroundColor(0xf1f3f5)\n      .barMode(BarMode.Fixed)\n      .barHeight(120)\n      .vertical(false)\n    }\n    .width('100%')\n    .height(500)\n    .padding('24vp')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(896006)/* ["default"] */.A) + "",
        width: "342",
        height: "221"
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
817895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439735-4a037984ae21ef9ca6c6ad6524ee494f.gif");

},
122980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959686-4f4286c971a98f419ba8639806c08c3c.gif");

},
260677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
961353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800042-c3dc972a4d902eeed023bab8981489b6.gif");

},
880519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479689-b36630438a80349296c5ec38b966067a.gif");

},
497859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
455862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
425053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800040-533acf854fa73afbf3e96176f4c37ed9.gif");

},
764618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959690-a42c12d89ff0a94adec8866f4fbab465.gif");

},
608466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479691-321f4ffdb80c00702480f9fd9403562a.gif");

},
758342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
929528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
95711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800038-a070757c390599f61c804b72886db1c2.jpeg");

},
286721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
896006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
373316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439733-4831f7916d665c47941578548ff73a9b.gif");

},
717573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479687-dc0f972d9f8bdf03832bb4aa452c3e6f.gif");

},
395206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959688-d4b3b7323e67304b674411e10686862a.png");

},
208921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
340961(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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