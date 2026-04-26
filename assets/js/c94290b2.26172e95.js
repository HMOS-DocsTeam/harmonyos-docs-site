"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["497115"], {
347372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_atomic_services_ohos_atomicservice_atomicservicetabs_ohos_atomicservice_atomicservicetabs_md_c94_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-atomic-services-ohos-atomicservice-atomicservicetabs-ohos-atomicservice-atomicservicetabs-md-c94.json
var site_docs_ref_arkui_api_arkui_declarative_comp_atomic_services_ohos_atomicservice_atomicservicetabs_ohos_atomicservice_atomicservicetabs_md_c94_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs/ohos-atomicservice-atomicservicetabs","title":"AtomicServiceTabs","description":"AtomicServiceTabs高级组件，对Tabs组件一些不需提供给用户自定义设计的属性进行简化，限制最多显示5个页签，固定页签样式，位置和大小。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs/ohos-atomicservice-atomicservicetabs.md","sourceDirName":"arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs","slug":"/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs/ohos-atomicservice-atomicservicetabs","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs/ohos-atomicservice-atomicservicetabs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"AtomicServiceTabs","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicetabs","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-atomicservice-atomicservicetabs"},"sidebar":"ref","previous":{"title":"AtomicServiceSearch","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch/ohos-atomicservice-atomicservicesearch"},"next":{"title":"AtomicServiceWeb","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicserviceweb/ohos-atomicservice-atomicserviceweb"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs/ohos-atomicservice-atomicservicetabs.md


const frontMatter = {
	title: 'AtomicServiceTabs',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicetabs',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-atomicservice-atomicservicetabs'
};
const contentTitle = 'AtomicServiceTabs';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "AtomicServiceTabs",
  "id": "atomicservicetabs-1",
  "level": 2
}, {
  "value": "TabContentBuilder",
  "id": "tabcontentbuilder",
  "level": 2
}, {
  "value": "TabBarOptions",
  "id": "tabbaroptions",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "TabBarPosition",
  "id": "tabbarposition",
  "level": 2
}, {
  "value": "OnContentWillChangeCallback",
  "id": "oncontentwillchangecallback",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1(纯文本样式)",
  "id": "示例1纯文本样式",
  "level": 3
}, {
  "value": "示例2(纯图标样式)",
  "id": "示例2纯图标样式",
  "level": 3
}, {
  "value": "示例3(图标加文本，自定义图文排布)",
  "id": "示例3图标加文本自定义图文排布",
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
        id: "atomicservicetabs",
        children: "AtomicServiceTabs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AtomicServiceTabs高级组件，对Tabs组件一些不需提供给用户自定义设计的属性进行简化，限制最多显示5个页签，固定页签样式，位置和大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(366376)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API Version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceTabs, TabBarOptions, TabBarPosition, OnContentWillChangeCallback } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "atomicservicetabs-1",
      children: "AtomicServiceTabs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AtomicServiceTabs({\n   tabContents?: [ TabContentBuilder?,\n                    TabContentBuilder?,\n                  TabContentBuilder?,\n                  TabContentBuilder?,\n                  TabContentBuilder?\n                ],\n   tabBarOptionsArray: [ TabBarOptions,\n                        TabBarOptions,\n                        TabBarOptions?,\n                        TabBarOptions?,\n                        TabBarOptions?\n                      ],\n   tabBarPosition?: TabBarPosition,\n   layoutMode?: LayoutMode,\n   barBackgroundColor?: ResourceColor,\n   index?: number,\n   barOverlap?: boolean,\n   controller?: TabsController,\n   onChange?: Callback<number>,\n   onTabBarClick?: Callback<number>,\n   onContentWillChange?: OnContentWillChangeCallback,\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tabContents"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontentbuilder",
              children: "TabContentBuilder?"
            }), ",", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontentbuilder",
              children: "TabContentBuilder?"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontentbuilder",
              children: "TabContentBuilder?"
            }), ",", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontentbuilder",
              children: "TabContentBuilder?"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabcontentbuilder",
              children: "TabContentBuilder?"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容视图容器数组，默认值为空，无内容展示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tabBarOptionsArray"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbaroptions",
              children: "TabBarOptions"
            }), ",", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbaroptions",
              children: "TabBarOptions"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbaroptions",
              children: "TabBarOptions?"
            }), ",", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbaroptions",
              children: "TabBarOptions?"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbaroptions",
              children: "TabBarOptions?"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["页签容器数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tabBarPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabbarposition",
              children: "TabBarPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置页签栏位置，默认值为TabBarPosition.Bottom。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutMode18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#layoutmode10",
              children: "LayoutMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置底部页签的图片、文字排布的方式，默认值为LayoutMode.VERTICAL。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "barBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置TabBar的背景颜色，默认值为透明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前显示页签的索引，索引值从0开始。默认值为0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "barOverlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置TabBar是否背景变模糊并叠加在TabContent之上。true表示TabBar背景变模糊并叠加在TabContent之上。默认值：true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#tabscontroller",
              children: "TabsController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tabs组件的控制器，用于控制Tabs组件进行页签切换。默认值为new TabsController()。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tabs页签切换后触发的事件。默认值为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onTabBarClick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tabs页签点击后触发的事件。默认值为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onContentWillChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oncontentwillchangecallback",
              children: "OnContentWillChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tabs页面切换拦截事件能力，新页面即将显示时触发该回调。默认值为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabcontentbuilder",
      children: "TabContentBuilder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TabContentBuilder = () => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容视图容器。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabbaroptions",
      children: "TabBarOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr, unselectedColor?: ResourceColor, selectedColor?: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TabBarOptions的构造函数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#tabbarsymbol12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TabBarSymbol"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
            children: "未选择时的页签颜色，默认值：#99182431。"
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
            children: "被选择时的页签颜色，默认值：#FF007DFF。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabbarposition",
      children: "TabBarPosition"
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
            children: "LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置TabBar位于屏幕左侧"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置TabBar位于屏幕底部"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncontentwillchangecallback",
      children: "OnContentWillChangeCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面内容发生变化时触发的回调函数。"
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
            children: "currentIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前页签索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "comingIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将切换的页签索引。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数正常执行则返回true，反之返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1纯文本样式",
      children: "示例1(纯文本样式)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { AtomicServiceTabs, TabBarOptions, TabBarPosition, OnContentWillChangeCallback } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '首页';\n  @State onClickNumber: number = 0;\n  @State currentIndex: number = 0;\n  @State comingIndex: number = 0;\n  onContentWillChangeCallBack:  OnContentWillChangeCallback = (currentIndex: number, comingIndex: number): boolean => {\n    this.currentIndex = currentIndex;\n    this.comingIndex = comingIndex;\n    console.info('OnContentWillChangeCallback')\n     return true;\n  }\n  onTabClick: Callback<number> = (index:number)=>{\n    this.onClickNumber ++;\n    console.info('onTabClick');\n  }\n  @Builder\n  tabContent1() {\n    Column().width('100%').height('100%').alignItems(HorizontalAlign.Center).backgroundColor('#00CB87')\n  }\n\n  @Builder\n  tabContent2() {\n    Column().width('100%').height('100%').backgroundColor('#007DFF')\n  }\n\n  @Builder\n  tabContent3() {\n    Column().width('100%').height('100%').backgroundColor('#FFBF00')\n  }\n\n  build() {\n    Stack() {\n    AtomicServiceTabs({\n      tabContents: [\n        () => {\n          this.tabContent1()\n        },\n        () => {\n          this.tabContent2()\n        },\n        () => {\n          this.tabContent3()\n        }\n      ],\n      tabBarOptionsArray: [\n        new TabBarOptions('', '绿色', Color.Black, Color.Green),\n        new TabBarOptions('', '蓝色', Color.Black, Color.Blue),\n        new TabBarOptions('', '黄色', Color.Black, Color.Yellow),\n      ],\n      tabBarPosition: TabBarPosition.BOTTOM,\n      barBackgroundColor: $r('sys.color.ohos_id_color_bottom_tab_bg'),\n      onTabBarClick:this.onTabClick,\n      onContentWillChange: this.onContentWillChangeCallBack,\n    })\n    Column() {\n      Text(\"onchange回调次数:\" + this.onClickNumber)\n      Text(\"comingIndex = \" + this.comingIndex + \", currentIndex = \" + this.currentIndex)\n    }.margin({top:500})\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(616208)/* ["default"] */.A) + "",
        width: "549",
        height: "778"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2纯图标样式",
      children: "示例2(纯图标样式)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { AtomicServiceTabs, TabBarOptions, TabBarPosition, OnContentWillChangeCallback } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '首页';\n  @State onClickNumber: number = 0;\n  @State currentIndex: number = 0;\n  @State comingIndex: number = 0;\n  onContentWillChangeCallBack: OnContentWillChangeCallback = (currentIndex: number, comingIndex: number): boolean => {\n    this.currentIndex = currentIndex;\n    this.comingIndex = comingIndex;\n    console.info('OnContentWillChangeCallback');\n    return true;\n  }\n  onTabClick: Callback<number> = (index:number)=>{\n    this.onClickNumber ++;\n    console.info('onTabClick');\n  }\n  @Builder\n  tabContent1() {\n    Column().width('100%').height('100%').alignItems(HorizontalAlign.Center).backgroundColor('#00CB87')\n  }\n\n  @Builder\n  tabContent2() {\n    Column().width('100%').height('100%').backgroundColor('#007DFF')\n  }\n\n  @Builder\n  tabContent3() {\n    Column().width('100%').height('100%').backgroundColor('#FFBF00')\n  }\n\n  build() {\n    Stack() {\n    AtomicServiceTabs({\n      tabContents: [\n        () => {\n          this.tabContent1()\n        },\n        () => {\n          this.tabContent2()\n        },\n        () => {\n          this.tabContent3()\n        }\n      ],\n      tabBarOptionsArray: [\n        new TabBarOptions($r('sys.media.ohos_ic_public_phone'), '', Color.Black, Color.Blue),\n        new TabBarOptions($r('sys.media.ohos_ic_public_location'), '', Color.Black, Color.Blue),\n        new TabBarOptions($r('sys.media.ohos_ic_public_more'), '', Color.Black, Color.Blue),\n      ],\n      tabBarPosition: TabBarPosition.BOTTOM,\n      barBackgroundColor: $r('sys.color.ohos_id_color_bottom_tab_bg'),\n      onTabBarClick:this.onTabClick,\n      onContentWillChange: this.onContentWillChangeCallBack,\n    })\n    Column() {\n      Text(\"onchange回调次数:\" + this.onClickNumber)\n      Text(\"comingIndex = \" + this.comingIndex + \", currentIndex = \" + this.currentIndex)\n    }.margin({top:500})\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180309)/* ["default"] */.A) + "",
        width: "549",
        height: "778"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3图标加文本自定义图文排布",
      children: "示例3(图标加文本，自定义图文排布)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { AtomicServiceTabs, TabBarOptions, TabBarPosition, OnContentWillChangeCallback } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct AtomicserviceTabs  {\n  @State flag: boolean = false;\n  @State message: string = '首页';\n  @State onClickNumber: number = 0;\n  @State currentIndex: number = 0;\n  @State comingIndex: number = 0;\n  @State layoutMode: LayoutMode = LayoutMode.VERTICAL;\n  onContentWillChangeCallBack: OnContentWillChangeCallback = (currentIndex: number, comingIndex: number): boolean => {\n    this.currentIndex = currentIndex;\n    this.comingIndex = comingIndex;\n    console.info('OnContentWillChangeCallback');\n    return true;\n  }\n  onTabClick: Callback<number> = (index: number) => {\n    this.onClickNumber++;\n    console.info('onTabClick');\n  }\n  onChange: Callback<number, void> = (Index: number) => {\n    console.info('onChange');\n    console.info('onChange2');\n  }\n\n  @Builder\n  tabContent1() {\n    Column().width('100%').height('100%').alignItems(HorizontalAlign.Center).backgroundColor('#00CB87')\n  }\n\n  @Builder\n  tabContent2() {\n    Column().width('100%').height('100%').backgroundColor(Color.Blue)\n  }\n\n  @Builder\n  tabContent3() {\n    Column().width('100%').height('100%').backgroundColor('#FFBF00')\n  }\n\n  build() {\n    Stack() {\n      AtomicServiceTabs({\n        tabContents: [\n          () => {\n            this.tabContent1()\n          },\n          () => {\n            this.tabContent2()\n          },\n          () => {\n            this.tabContent3()\n          },\n        ],\n        tabBarOptionsArray: [\n        new TabBarOptions($r('sys.media.ohos_ic_public_phone'), '绿色', Color.Black, Color.Blue),\n        new TabBarOptions($r('sys.media.ohos_ic_public_location'), '蓝色', Color.Black, Color.Blue),\n        new TabBarOptions($r('sys.media.ohos_ic_public_more'), '黄色', Color.Black, Color.Blue),\n        ],\n        tabBarPosition: TabBarPosition.BOTTOM,\n        barBackgroundColor: $r('sys.color.ohos_id_color_bottom_tab_bg'),\n        onTabBarClick: this.onTabClick,\n        onContentWillChange: this.onContentWillChangeCallBack,\n        onChange: this.onChange,\n        layoutMode: this.layoutMode,\n      })\n\n      Column() {\n        Button(\"layoutMode垂直 \")\n          .width('30%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.layoutMode = LayoutMode.VERTICAL;\n          })\n        Button(\"layoutMode水平 \")\n          .width('30%')\n          .height(50)\n          .margin({ top: 5 })\n          .onClick((event?: ClickEvent) => {\n            this.layoutMode = LayoutMode.HORIZONTAL;\n          })\n      }.margin({ top: 10 })\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220812)/* ["default"] */.A) + "",
        width: "496",
        height: "476"
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
366376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
616208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960086-4390e627d07c50c3e02db14f3885894e.png");

},
180309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480087-795bbdfc91566bf155bc4816724fee08.png");

},
220812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800438-7ef3b0589ace93857735972da40f8b94.gif");

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