"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["997526"], {
655689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_toolbar_ohos_arkui_advanced_toolbar_md_0ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-toolbar-ohos-arkui-advanced-toolbar-md-0ca.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_toolbar_ohos_arkui_advanced_toolbar_md_0ca_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar","title":"ToolBar","description":"工具栏组件，用于展示针对当前界面内容的操作选项，在界面底部显示。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"title":"ToolBar","sidebar_position":27,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-toolbar","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-toolbar"},"sidebar":"ref","previous":{"title":"TabTitleBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar/ohos-arkui-advanced-tabtitlebar"},"next":{"title":"ToolBarV2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbarv2/ohos-arkui-advanced-toolbarv2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar.md


const frontMatter = {
	title: 'ToolBar',
	sidebar_position: 27,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-toolbar',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-toolbar'
};
const contentTitle = 'ToolBar';

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
  "value": "ToolBar",
  "id": "toolbar-1",
  "level": 2
}, {
  "value": "ToolBarOptions",
  "id": "toolbaroptions",
  "level": 2
}, {
  "value": "ToolBarOption",
  "id": "toolbaroption",
  "level": 2
}, {
  "value": "ToolBarModifier13+",
  "id": "toolbarmodifier13",
  "level": 2
}, {
  "value": "backgroundColor13+",
  "id": "backgroundcolor13",
  "level": 3
}, {
  "value": "padding13+",
  "id": "padding13",
  "level": 3
}, {
  "value": "height13+",
  "id": "height13",
  "level": 3
}, {
  "value": "stateEffect13+",
  "id": "stateeffect13",
  "level": 3
}, {
  "value": "ItemState",
  "id": "itemstate",
  "level": 2
}, {
  "value": "ToolBarSymbolGlyphOptions13+",
  "id": "toolbarsymbolglyphoptions13",
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
  "value": "示例1（工具栏不同状态的默认效果）",
  "id": "示例1工具栏不同状态的默认效果",
  "level": 3
}, {
  "value": "示例2（设置工具栏自定义样式）",
  "id": "示例2设置工具栏自定义样式",
  "level": 3
}, {
  "value": "示例3（设置工具栏自定义播报）",
  "id": "示例3设置工具栏自定义播报",
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
        id: "toolbar",
        children: "ToolBar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具栏组件，用于展示针对当前界面内容的操作选项，在界面底部显示。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685269)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果ToolBar设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ToolBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ToolBar设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SymbolGlyphModifier, DividerModifier, ToolBar, ToolBarOptions, ToolBarModifier, ItemState, LengthMetrics } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toolbar-1",
      children: "ToolBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ToolBar({toolBarList: ToolBarOptions, activateIndex?: number, controller: TabsController, dividerModifier?: DividerModifier, toolBarModifier?: ToolBarModifier})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具栏组件，用于展示针对当前界面内容的操作选项，在界面底部显示。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "toolBarList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#toolbaroptions",
              children: "ToolBarOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ObjectLink"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏列表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activateIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["激活态的子项。  取值范围：大于等于-1。  默认值：-1，没有激活态的子项。若设置数值小于-1，按没有激活项处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏控制器，不支持控制工具栏子项。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dividerModifier13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "DividerModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏头部分割线属性，可设置分割线高度、颜色等。  默认值：系统默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toolBarModifier13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#toolbarmodifier13",
              children: "ToolBarModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏属性，可设置工具栏高度、背景色、内边距（仅在工具栏子项数量小于5时生效）、是否显示按压态。  默认值：  工具栏高度：56vp  背景色：ohos_id_toolbar_bg  内边距：24vp  显示按压态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toolbaroptions",
      children: "ToolBarOptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承于 Array<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#toolbaroption",
        children: "ToolBarOption"
      }), ">。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Observed"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toolbaroption",
      children: "ToolBarOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义工具栏的列表内容和属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Observed"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏子项的文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏子项点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏子项的图标。  默认不设置或者设置为undefined，图标不显示。  toolBarSymbolOptions有传入参数时，icon不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#itemstate",
              children: "ItemState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏子项的状态。  默认为ItemState.ENABLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconColor13+"
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
            children: ["工具栏子项的图标填充颜色。  默认值为$r('sys.color.icon_primary')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activatedIconColor13+"
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
            children: ["工具栏子项激活态的图标填充颜色。  默认值为$r('sys.color.icon_emphasize')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textColor13+"
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
            children: ["工具栏子项的文本颜色。  默认值为$r('sys.color.font_primary')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activatedTextColor13+"
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
            children: ["工具栏子项激活态的文本颜色。  默认值为$r('sys.color.font_emphasize')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toolBarSymbolOptions13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#toolbarsymbolglyphoptions13",
              children: "ToolBarSymbolGlyphOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏子项的图标属性，symbol类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityText18+"
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
            children: ["工具栏子项的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。  默认值为当前项content属性内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription18+"
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
            children: ["工具栏子项的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。  默认值为“单指双击即可执行”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工具栏子项无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。  支持的值为：  \"auto\"：当前组件会转换\"yes\"。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toolbarmodifier13",
      children: "ToolBarModifier13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ToolBarModifier提供设置工具栏高度(height)、背景色(backgroundColor)、左右内边距（padding，仅在item小于5个时生效）、是否显示按压态（stateEffect）的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backgroundcolor13",
      children: "backgroundColor13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "backgroundColor(backgroundColor: ResourceColor): ToolBarModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制工具栏背景色的接口，若重载该方法则可进行工具栏背景色的自定义绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏背景色。  默认背景色为$r('sys.color.ohos_id_color_toolbar_bg')。"
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
              href: "#toolbarmodifier13",
              children: "ToolBarModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置backgroundColor后的ToolBarModifier对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "padding13",
      children: "padding13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "padding(padding: LengthMetrics): ToolBarModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制工具栏左右内边距的接口，若重载该方法则可进行工具栏左右内边距的自定义绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏左右内边距，仅在item小于5个时生效。  工具栏默认在item小于5个时padding为24vp，大于等于5个时为0。"
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
              href: "#toolbarmodifier13",
              children: "ToolBarModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置padding后的ToolBarModifier对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "height13",
      children: "height13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "height(height: LengthMetrics): ToolBarModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制工具栏高度的接口，若重载该方法则可进行工具栏高度的自定义绘制，此高度不包含分割线高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏高度。  工具栏高度默认为56vp（不包含分割线）。"
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
              href: "#toolbarmodifier13",
              children: "ToolBarModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置height后的ToolBarModifier对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stateeffect13",
      children: "stateEffect13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stateEffect(stateEffect: boolean): ToolBarModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否显示按压态效果的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "stateEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏是否显示按压态效果。  true为显示按压态效果，false为移除按压态效果，默认为true。"
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
              href: "#toolbarmodifier13",
              children: "ToolBarModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置stateEffect后的ToolBarModifier对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "itemstate",
      children: "ItemState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义工具栏子项的当前状态。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "ENABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏子项为正常可点击状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏子项为不可点击状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏子项为激活状态，可点击。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toolbarsymbolglyphoptions13",
      children: "ToolBarSymbolGlyphOptions13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ToolBarSymbolGlyphOptions定义图标的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工具栏symbol图标普通态样式。  默认值：fontColor：$r('sys.color.icon_primary')，fontSize：24vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activated"
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
            children: "工具栏symbol图标激活态样式。  默认值：fontColor：$r('sys.color.icon_emphasize')，fontSize：24vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1工具栏不同状态的默认效果",
      children: "示例1（工具栏不同状态的默认效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了工具栏子项state属性分别设置ENABLE、DISABLE、ACTIVATE状态的不同显示效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ToolBar, ToolBarOptions, ItemState } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State toolbarList: ToolBarOptions = new ToolBarOptions();\n\n  aboutToAppear() {\n    this.toolbarList.push({\n      content: '剪贴我是超超超超超超超超超长样式',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n    this.toolbarList.push({\n      content: '拷贝',\n      icon: $r('sys.media.ohos_ic_public_copy'),\n      action: () => {\n      },\n      state: ItemState.DISABLE\n    })\n    this.toolbarList.push({\n      content: '粘贴',\n      icon: $r('sys.media.ohos_ic_public_paste'),\n      action: () => {\n      },\n      state: ItemState.ACTIVATE\n    })\n    this.toolbarList.push({\n      content: '全选',\n      icon: $r('sys.media.ohos_ic_public_select_all'),\n      action: () => {\n      },\n    })\n    this.toolbarList.push({\n      content: '分享',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n    this.toolbarList.push({\n      content: '分享',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          ToolBar({\n            activateIndex: 2,\n            toolBarList: this.toolbarList,\n          })\n        }\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220815)/* ["default"] */.A) + "",
        width: "348",
        height: "69"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置工具栏自定义样式",
      children: "示例2（设置工具栏自定义样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 13开始，该示例通过设置属性ToolBarModifier自定义工具栏高度、背景色、按压效果等样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  SymbolGlyphModifier,\n  DividerModifier,\n  ToolBar,\n  ToolBarOptions,\n  ToolBarModifier,\n  ItemState,\n  LengthMetrics,\n} from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State toolbarList: ToolBarOptions = new ToolBarOptions();\n  // 自定义工具栏样式\n  private toolBarModifier: ToolBarModifier =\n    new ToolBarModifier().height(LengthMetrics.vp(52)).backgroundColor(Color.Transparent).stateEffect(false);\n  @State dividerModifier: DividerModifier = new DividerModifier().height(0);\n\n  aboutToAppear() {\n    // 添加工具栏子项\n    this.toolbarList.push({\n      content: 'Long long long long long long long long text',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n      state: ItemState.ACTIVATE,\n      toolBarSymbolOptions: {\n        normal: new SymbolGlyphModifier($r('sys.symbol.ohos_star')).fontColor([Color.Green]), // 普通态symbol图标\n        activated: new SymbolGlyphModifier($r('sys.symbol.ohos_star')).fontColor([Color.Red]), // 激活态symbol图标\n      },\n      activatedTextColor: $r('sys.color.font_primary'),\n    })\n    this.toolbarList.push({\n      content: 'Copy',\n      icon: $r('sys.media.ohos_ic_public_copy'),\n      action: () => {\n      },\n      state: ItemState.DISABLE,\n      iconColor: '#ff18cb53',\n      activatedIconColor: '#ffec5d5d', // 激活态icon颜色\n      activatedTextColor: '#ffec5d5d', // 激活态文本颜色\n    })\n    this.toolbarList.push({\n      content: 'Paste',\n      icon: $r('sys.media.ohos_ic_public_paste'),\n      action: () => {\n      },\n      state: ItemState.ACTIVATE,\n      textColor: '#ff18cb53',\n    })\n    this.toolbarList.push({\n      content: 'All',\n      icon: $r('sys.media.ohos_ic_public_select_all'),\n      action: () => {\n      },\n      state: ItemState.ACTIVATE,\n    })\n    this.toolbarList.push({\n      content: '分享',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n    this.toolbarList.push({\n      content: '分享',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          ToolBar({\n            toolBarModifier: this.toolBarModifier,\n            dividerModifier: this.dividerModifier,\n            activateIndex: 0,\n            toolBarList: this.toolbarList,\n          })\n            .height(52)\n        }\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(169719)/* ["default"] */.A) + "",
        width: "349",
        height: "68"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置工具栏自定义播报",
      children: "示例3（设置工具栏自定义播报）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置工具栏子项属性accessibilityText、accessibilityDescription、accessibilityLevel自定义屏幕朗读播报文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ToolBar, ToolBarOptions, ItemState } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State toolbarList: ToolBarOptions = new ToolBarOptions();\n\n  aboutToAppear() {\n    // 添加工具栏子项\n    this.toolbarList.push({\n      content: '剪贴我是超超超超超超超超超长样式',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n      accessibilityText: '剪贴', // 该项屏幕朗读播报文本为‘剪贴’\n      accessibilityDescription: '单指双击即可剪贴', // 该项屏幕朗读播报描述为'单指双击即可剪贴'\n      accessibilityLevel: 'yes' // 该项可被无障碍屏幕朗读聚焦\n    })\n    this.toolbarList.push({\n      content: '拷贝',\n      icon: $r('sys.media.ohos_ic_public_copy'),\n      action: () => {\n      },\n      state: ItemState.DISABLE,\n      accessibilityLevel: 'no' // 该项将无法被屏幕朗读服务所识别，屏幕朗读不可聚焦\n    })\n    this.toolbarList.push({\n      content: '粘贴',\n      icon: $r('sys.media.ohos_ic_public_paste'),\n      action: () => {\n      },\n      state: ItemState.ACTIVATE\n    })\n    this.toolbarList.push({\n      content: '全选',\n      icon: $r('sys.media.ohos_ic_public_select_all'),\n      action: () => {\n      },\n    })\n    this.toolbarList.push({\n      content: '分享',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n    this.toolbarList.push({\n      content: '分享',\n      icon: $r('sys.media.ohos_ic_public_share'),\n      action: () => {\n      },\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          ToolBar({\n            activateIndex: 2,\n            toolBarList: this.toolbarList,\n          })\n        }\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859859)/* ["default"] */.A) + "",
        width: "348",
        height: "69"
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
685269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
220815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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j3+QlpbGnXfeCcAll1wSmh1PnDiRZcuW8dhjj9GyZUsqKiqYPn06WVlZDB48OGIWbo0WD36ZCQkJDBw4kKeeeoq8vDz27NmDZVk8+uijPP7447zxxhuhkK0JEyZwww03hD5D13VWr15NbGwsBQUFLFmyhMLCQrxeL7m5uXg8Hu6//37cbjeWZVFSUkJ6ejoAN954IwkJCZimiaIoLF++HKh+EAwcOJBu3boxcOBAtm7dypEjRygpKeHTTz9l586djBo1KiINFCliY2NJSEjA6/Xi8/lISUkJuRScTic//vgjnTt3rhGRsH//fkpLS+nevXu9e8CcD3kqREFKEKagZXocvfq4eGdlOcmpcbRs4iAQMGmtJPPPGRk4LQXdWUGMIfl243Fu7p2BKrxgaihKOU+Mb8hN7R2kJQTjcEXUZGg8fPgwY8eOJT8/n/feey+0I7FTp05kZWXRp08fZs2aRXJyMrt37yYnJ4c//vGPDB48mOuvv56dO3fWyskGdcWmTZt4/fXXue222ygqKsLv97Nz504+/vhjRo4cydChQykpKaFz587079+fTZs2kZeXx5o1a3jllVfo27dvyNCJRPhcDcENDm5FUfD7/ZSVlYWSYfv9/pB/KHgkzulbCb/++msCgQAnT57E7XaTkZHBCy+8wIoVK9i/fz+PPvooTz/9NP369ePSSy+loqKC+Ph4TNPk3nvv5bPPPqvREfr160eDBg2wLIuFCxfyySefUFxczPjx45k8eTKrV69GURT69esXenrVF5eC0+mkYcOGHDx4kPj4eNxuNz/99BNNmjShadOmIf93uOCGh4VFk49XSAVhWZiKiu70sG2vzufvp2IlBNi6tpBdvRrhT1DxOosJWE1oZikY+Ak4TKpiignEZ1ClCrYfK6O8OBZvmYNir0XrBtXnmCGrB040SExiYiJjxozh008/Zdq0aeTn5+N2u0lPT6dv3760adMGt9tNz549MQyDBx98kHnz5vHGG2+g63ooh8IHH3zA5ZdfXse1+eWRUpKbm8uxY8coLS1FVVUOHDhAWVlZSFu2bt3KV199xfz584mJiSE/P59x48YxYMCAkCETqVjls84pgm6DBg0asGXLFtxuNw888ADLli2jsLDwrCkBpZSMGDGCXr16MWXKFK655hqefPJJysrKyMnJYc+ePTz44IMMHTqUkydP8u677zJu3Dg0TWPYsGEcO3asRv7c4G6YTz/9lNmzZ9OzZ09ycnJIT09n+PDhHDhwgJkzZ9KoUSO+++475s6dS69evSLSSJHgyJEj7N69G03TOHz4MEePHkXTNE6ePElRUREtWrQgIyPjjG2a0Rm0Xp20BgSOgJtr2ilMfEQw+TUn06e1Z8HHXnYdraBDUiJ/ePkYlyfDov/XCNUwcBg6mgGarvLgyxWkpCis21PCm6sVds12IRBIET37zRITE+nfvz89evRASsm0adNo27YtI0aMQFGU0A7EL7/8km7dunHfffdx5ZVX8tBDD/HYY49RWFjIrbfeGjWZ904nmHslOzubtWvXEh8fT48ePVi3bl1ovSk+Pp4hQ4Zw3XXX8frrr5OYmMiqVav46KOPKCws5IsvviAjIyMi5Tur4JaVldGnTx/y8vKoqKiga9eu7Nq1i+PHj3Prrbfi9XqJiYkhJSWFffv20aRJE4QQpKens2DBAhYuXEhubi4lJSW8+OKLSFl9JPi0adMoLy9n6NChTJgwgZYtW2IYBosXL+a5554jKyuLLl260LlzZ5599tnQYlpmZiYbNmwgJycHqJ429OjRg9tuu41Ro0Yxfvz4UNmD0Q/hYSDBAxuDDf5rEK20tDTatm2Lz+fD5XKRnJxMVVVVyJ/dpk2bUJhb06ZNEUJw5MgRpJT4fD5atmxZ11X4xaj2r1ooloKlmBwsUXhhThGWpvHoc1Vc0sbNs6NSuLmtyke7Fd77zAdYtGpm8N1hQaa/ijZpDrbtdfDavSmkpirc9EjRqYWy6IpVEEKQl5fHQw89BFSf8LB7927Wrl2LEIKlS5fWyM1RWVnJzJkzmTRpEjExMRw4cIC//e1vPPDAA3Tr1q2uqhExunbtSnl5OYmJiVRVVdGxY0eaN2/OPffcQ/fu3UOaMmHCBAoKCqisrGTOnDm0atWK8ePH07VrV9LT0yM2gzzr/NvlctGzZ08CgQCbN28mLS2NuLg4+vTpw8qVK/F4PLRq1YqbbroJh8PBli1bcLlcBAIBvv32W44ePYoQgoYNG7JkyRIGDBhAs2bN+Oyzz7j77rtxOBwMGTKExx9/nMOHD5Ofn8+8efN47bXXKC0tRcrqc71KS0vxeDxIKcnPz+fQoUP4fD6efPJJ0tLS2LFjBxMmTMDhcIR8v0OGDGHv3r2hf+fm5mKaJhMnTmTt2rURacT/BpfLFVpV7tSpEz179uTqq6+mQ4cOFBYW1ri2U6dObNq0CcuyyMjIYNWqVaSmptZRyX95BJwSW4lX8/DVd5U8OlwjRSnjnRkpNHLFsvdEOV/mVbD3WAANBQXBc6MasW57HBMfKePa69JAeNh9tJwdP1WiKUrUnml22WWXsWbNGtasWcP111/P6NGjWb16NWvWrCE+Ph4pJStXrqSsrIy5c+eSmZnJHXfcQdeuXdm3b18ok1800qxZM0aMGMHbb79NQUEBQ4cOZfjw4YwYMYLWrVsjhCApKYm77rqLTz75hAcffJAlS5YwcOBAMjMzmTVrVkR93DUs3KCql5WVsXHjRrZv386kSZMYNWoUr7zyCn6/H7fbHUp6/PLLL4d8SXv27KG8vJzJkydz/Phxbr75ZgBmz57NO++8w7333suuXbvYsmUL7777LnfeeSeNGzemVatWDBkyhDFjxuByuUIrikFXxrZt24iJiWHjxo28+uqrvP7663Tp0oVmzZqRmJiIpmmhDtaxY0f69OlDw4YNURSFq666igYNGiCECN3za8Hj8ZCTk0Pz5s0RQuB2u/n+++/xer3ExsaGVlM///xzSkpKaNWqFddccw2apnHJJZewZcsWCgsLycrKioqkPqYIAAbxehLDe+sU+wWvvalzeYZKnDRYvFKwzmFyVC/n0gwnhyth+LO5zBzbnAxXPO9/cBJdaLy22ItTmpgk1nWVIoKUkqysrFDoU2VlJevXr2fevHlAdW7cVatW8eqrrzJnzhxmz57NwYMH2bx5My6XC0VR8Pl8FBUV0bhx47qsyi+Orus8+uijrF+/nvbt29OtWzeeeOIJSkpKyMjIoHHjxsybN4+3336btWvXMn36dJKSkujZsyfvvfdeKNcERG5T0VnjcIuLi9m/fz9XXXVVaFqbm5tLRUUFl156KUlJSVRUVKDrOunp6RiGgaIofPnll1x99dUUFBTg9Xpp06YNJSUllJeX07Jly5BD2jAMcnJyaN26NcnJyZw4cSJ02F0w7Km8vByPx4PL5SIhIQGPx0NiYmJoEenEiROUlpZimmbImk5OTj5rgwU/U0oZWvCra0zT5OjRo6Snp4fS5ZWUlOD3+0lLSws9SE6ePElqamoNUQ3Wp7Kykvj4+PovuBKk1LGQqKaKpVVRZbnY8m0x3Tsk8933FbRoopIel8DRMi95J/x0vyyZDQfLual1PFh+/CKGjd+XclWrJFyqwrrcMvp1TqX+n/FQE13Xa6TmPH1nVfhZgsH+bhgGR48exefzYRgGTqeTFi1a1EgoFQ2YpsmyZcvIzs4mPj4ey7LQNA3DMCgoKODYsWNcddVVFBcXU1JSErJ4hRA1NKFeZguzsflZSM0y2dYAAAClSURBVIkU1TlxrVAYlwUoCCmQQiKkCIWPKcJCylOnQgoLYSnV15zykkkR/JToElyb+o0tuDY2Nja1RN3PrW1sbGx+I9iCa2NjY1NL2IJrY2NjU0vYgmtjY2NTS9iCa2NjY1NL2IJrY2NjU0vYgmtjY2NTS9iCa2NjY1NL2IJrY2NjU0vYgmtjY2NTS9iCa2NjY1NL2IJrY2NjU0vYgmtjY2NTS/x/3ejtuN8h07QAAAAASUVORK5CYII=");

},
169719(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
859859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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j3+QlpbGnXfeCcAll1wSmh1PnDiRZcuW8dhjj9GyZUsqKiqYPn06WVlZDB48OGIWbo0WD36ZCQkJDBw4kKeeeoq8vDz27NmDZVk8+uijPP7447zxxhuhkK0JEyZwww03hD5D13VWr15NbGwsBQUFLFmyhMLCQrxeL7m5uXg8Hu6//37cbjeWZVFSUkJ6ejoAN954IwkJCZimiaIoLF++HKh+EAwcOJBu3boxcOBAtm7dypEjRygpKeHTTz9l586djBo1KiINFCliY2NJSEjA6/Xi8/lISUkJuRScTic//vgjnTt3rhGRsH//fkpLS+nevXu9e8CcD3kqREFKEKagZXocvfq4eGdlOcmpcbRs4iAQMGmtJPPPGRk4LQXdWUGMIfl243Fu7p2BKrxgaihKOU+Mb8hN7R2kJQTjcEXUZGg8fPgwY8eOJT8/n/feey+0I7FTp05kZWXRp08fZs2aRXJyMrt37yYnJ4c//vGPDB48mOuvv56dO3fWyskGdcWmTZt4/fXXue222ygqKsLv97Nz504+/vhjRo4cydChQykpKaFz587079+fTZs2kZeXx5o1a3jllVfo27dvyNCJRPhcDcENDm5FUfD7/ZSVlYWSYfv9/pB/KHgkzulbCb/++msCgQAnT57E7XaTkZHBCy+8wIoVK9i/fz+PPvooTz/9NP369ePSSy+loqKC+Ph4TNPk3nvv5bPPPqvREfr160eDBg2wLIuFCxfyySefUFxczPjx45k8eTKrV69GURT69esXenrVF5eC0+mkYcOGHDx4kPj4eNxuNz/99BNNmjShadOmIf93uOCGh4VFk49XSAVhWZiKiu70sG2vzufvp2IlBNi6tpBdvRrhT1DxOosJWE1oZikY+Ak4TKpiignEZ1ClCrYfK6O8OBZvmYNir0XrBtXnmCGrB040SExiYiJjxozh008/Zdq0aeTn5+N2u0lPT6dv3760adMGt9tNz549MQyDBx98kHnz5vHGG2+g63ooh8IHH3zA5ZdfXse1+eWRUpKbm8uxY8coLS1FVVUOHDhAWVlZSFu2bt3KV199xfz584mJiSE/P59x48YxYMCAkCETqVjls84pgm6DBg0asGXLFtxuNw888ADLli2jsLDwrCkBpZSMGDGCXr16MWXKFK655hqefPJJysrKyMnJYc+ePTz44IMMHTqUkydP8u67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");

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