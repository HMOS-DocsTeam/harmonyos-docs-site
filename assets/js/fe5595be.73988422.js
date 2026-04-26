"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["151324"], {
788822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_selectionmenu_ohos_arkui_advanced_selectionmenu_md_fe5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-selectionmenu-ohos-arkui-advanced-selectionmenu-md-fe5.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_selectionmenu_ohos_arkui_advanced_selectionmenu_md_fe5_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu","title":"SelectionMenu","description":"文本选择菜单，适用于RichEditor组件通过bindSelectionMenu或Text组件通过bindSelectionMenu绑定自定义文本选择菜单，建议绑定鼠标右键或者鼠标选中方式弹出，不支持作为普通组件单独使用。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"SelectionMenu","sidebar_position":21,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-selectionmenu","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-selectionmenu"},"sidebar":"ref","previous":{"title":"SelectTitleBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selecttitlebar/ohos-arkui-advanced-selecttitlebar"},"next":{"title":"SplitLayout","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-splitlayout/ohos-arkui-advanced-splitlayout"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu.md


const frontMatter = {
	title: 'SelectionMenu',
	sidebar_position: 21,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-selectionmenu',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-selectionmenu'
};
const contentTitle = 'SelectionMenu';

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
  "value": "SelectionMenu",
  "id": "selectionmenu-1",
  "level": 2
}, {
  "value": "SelectionMenuOptions",
  "id": "selectionmenuoptions",
  "level": 2
}, {
  "value": "EditorMenuOptions",
  "id": "editormenuoptions",
  "level": 2
}, {
  "value": "ExpandedMenuOptions",
  "id": "expandedmenuoptions",
  "level": 2
}, {
  "value": "EditorEventInfo",
  "id": "editoreventinfo",
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
  "value": "示例1（绑定不同触发方式的自定义文本选择菜单）",
  "id": "示例1绑定不同触发方式的自定义文本选择菜单",
  "level": 3
}, {
  "value": "示例2（设置Symbol类型图标）",
  "id": "示例2设置symbol类型图标",
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
        id: "selectionmenu",
        children: "SelectionMenu"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本选择菜单，适用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#bindselectionmenu",
        children: "bindSelectionMenu"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#bindselectionmenu11",
        children: "bindSelectionMenu"
      }), "绑定自定义文本选择菜单，建议绑定鼠标右键或者鼠标选中方式弹出，不支持作为普通组件单独使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(412815)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SelectionMenu, EditorMenuOptions, ExpandedMenuOptions, EditorEventInfo, SelectionMenuOptions } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectionmenu-1",
      children: "SelectionMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SelectionMenu(options: SelectionMenuOptions): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["入参为空时，文本选择菜单组件SelectionMenu内容区大小及组件大小为零。表现例如，富文本组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#bindselectionmenu",
        children: "bindSelectionMenu"
      }), "接口绑定一个SelectionMenu的右键菜单，则右键富文本组件区域时无任何菜单弹出。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Builder"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常， 异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
              href: "#selectionmenuoptions",
              children: "SelectionMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择菜单可选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectionmenuoptions",
      children: "SelectionMenuOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SelectionMenuOptions定义SelectionMenu的可选菜单类型项及其具体配置参数。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "editorMenuOptions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#editormenuoptions",
              children: "EditorMenuOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑菜单。  editorMenuOptions未配置时，不显示编辑菜单。  同时配置EditorMenuOptions中action和builder时，点击图标会同时响应。  点击编辑菜单图标默认不关闭整个菜单，应用可以通过action接口配置RichEditorController的closeSelectionMenu主动关闭菜单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expandedMenuOptions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#expandedmenuoptions",
              children: "ExpandedMenuOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展下拉菜单。  expandedMenuOptions参数为空时无更多按钮，不显示扩展下拉菜单。  expandedMenuOptions参数不为空时显示更多按钮，配置菜单项收起在更多按钮中，点击更多按钮展示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorcontroller",
              children: "RichEditorController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本控制器不为空时显示默认系统菜单（包含剪切复制粘贴等部分）且默认菜单功能内置。  controller为空时不显示更多按钮，expandedMenuOptions参数不为空则显示下拉菜单中。  系统默认只支持复制粘贴富文本文本内容，图文混排需要应用自定义onCopy、onPaste接口。应用自行配置onCopy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCopy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#editoreventinfo",
              children: "EditorEventInfo"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["替代内置系统菜单复制项的事件回调。  生效前提是一定要有controller参数，有系统默认菜单才能替换内置复制功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为返回信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onPaste"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#editoreventinfo",
              children: "EditorEventInfo"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["替代内置系统菜单粘贴项的事件回调。  生效前提是一定要有controller参数，有系统默认菜单才能替换内置粘贴功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为返回信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCut"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#editoreventinfo",
              children: "EditorEventInfo"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["替代内置系统菜单剪切项的事件回调。  生效前提是一定要有controller参数，有系统默认菜单才能替换内置剪切功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为返回信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSelectAll"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#editoreventinfo",
              children: "EditorEventInfo"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["替代内置系统菜单全选项的事件回调。  生效前提是一定要有controller参数，有系统默认菜单才能替换内置全选功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  event为返回信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editormenuoptions",
      children: "EditorMenuOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑菜单选项。"
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
            children: "icon"
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
            children: ["图标资源。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击时显示用户自定义组件，自定义组件在构造时结合@Builder使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: ["点击菜单项的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolStyle18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#symbolglyphmodifier12",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Symbol图标资源，优先级大于icon。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandedmenuoptions",
      children: "ExpandedMenuOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展下拉菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem#menuitemoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "MenuItemOptions"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击菜单项的事件回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editoreventinfo",
      children: "EditorEventInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中内容信息。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorselection",
              children: "RichEditorSelection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "，宽度默认224vp， 高度自适应内容。"]
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
      id: "示例1绑定不同触发方式的自定义文本选择菜单",
      children: "示例1（绑定不同触发方式的自定义文本选择菜单）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了文本绑定不同触发方式的自定义文本选择菜单的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  SelectionMenu,\n  EditorMenuOptions,\n  ExpandedMenuOptions,\n  EditorEventInfo,\n  SelectionMenuOptions\n} from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State select: boolean = true;\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State message: string = 'Hello world';\n  @State textSize: number = 30;\n  @State fontWeight: FontWeight = FontWeight.Normal;\n  @State start: number = -1;\n  @State end: number = -1;\n  @State visibleValue: Visibility = Visibility.Visible;\n  @State colorTransparent: Color = Color.Transparent;\n  @State textStyle: RichEditorTextStyle = {};\n  private editorMenuOptions: Array<EditorMenuOptions> =\n    [\n      {\n        // $r('app.media.ic_notepad_textbold')需要替换为开发者所需的图像资源文件。\n        icon: $r(\"app.media.ic_notepad_textbold\"), action: () => {\n        if (this.controller) {\n          let selection = this.controller.getSelection();\n          let spans = selection.spans;\n          spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n            if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n              let span = item as RichEditorTextSpanResult;\n              this.textStyle = span.textStyle;\n              let start = span.offsetInSpan[0];\n              let end = span.offsetInSpan[1];\n              let offset = span.spanPosition.spanRange[0];\n              if (this.textStyle.fontWeight != 11) {\n                this.textStyle.fontWeight = FontWeight.Bolder;\n              } else {\n                this.textStyle.fontWeight = FontWeight.Normal;\n              }\n              this.controller.updateSpanStyle({\n                start: offset + start,\n                end: offset + end,\n                textStyle: this.textStyle\n              })\n            }\n          })\n        }\n      }\n      },\n      {\n        // $r('app.media.ic_notepad_texttilt')需要替换为开发者所需的图像资源文件。\n        icon: $r(\"app.media.ic_notepad_texttilt\"), action: () => {\n        if (this.controller) {\n          let selection = this.controller.getSelection();\n          let spans = selection.spans;\n          spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n            if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n              let span = item as RichEditorTextSpanResult;\n              this.textStyle = span.textStyle;\n              let start = span.offsetInSpan[0];\n              let end = span.offsetInSpan[1];\n              let offset = span.spanPosition.spanRange[0];\n              if (this.textStyle.fontStyle == FontStyle.Italic) {\n                this.textStyle.fontStyle = FontStyle.Normal;\n              } else {\n                this.textStyle.fontStyle = FontStyle.Italic;\n              }\n              this.controller.updateSpanStyle({\n                start: offset + start,\n                end: offset + end,\n                textStyle: this.textStyle\n              })\n            }\n          })\n        }\n      }\n      },\n      {\n        // $r('app.media.ic_notepad_underline')需要替换为开发者所需的图像资源文件。\n        icon: $r(\"app.media.ic_notepad_underline\"),\n        action: () => {\n          if (this.controller) {\n            let selection = this.controller.getSelection();\n            let spans = selection.spans;\n            spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n              if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                let span = item as RichEditorTextSpanResult;\n                this.textStyle = span.textStyle;\n                let start = span.offsetInSpan[0];\n                let end = span.offsetInSpan[1];\n                let offset = span.spanPosition.spanRange[0];\n                if (this.textStyle.decoration) {\n                  if (this.textStyle.decoration.type == TextDecorationType.Underline) {\n                    this.textStyle.decoration.type = TextDecorationType.None;\n                  } else {\n                    this.textStyle.decoration.type = TextDecorationType.Underline;\n                  }\n                } else {\n                  this.textStyle.decoration = { type: TextDecorationType.Underline, color: Color.Black }\n                }\n                this.controller.updateSpanStyle({\n                  start: offset + start,\n                  end: offset + end,\n                  textStyle: this.textStyle\n                })\n              }\n            })\n          }\n        }\n      },\n      {\n        // $r('app.media.ic_notepad_fontsize')需要替换为开发者所需的图像资源文件。\n        icon: $r(\"app.media.ic_notepad_fontsize\"), action: () => {\n      }, builder: (): void => this.sliderPanel()\n      },\n      {\n        // $r('app.media.ic_notepad_textcolor')需要替换为开发者所需的图像资源文件。\n        icon: $r(\"app.media.ic_notepad_textcolor\"), action: () => {\n        if (this.controller) {\n          let selection = this.controller.getSelection();\n          let spans = selection.spans;\n          spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n            if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n              let span = item as RichEditorTextSpanResult;\n              this.textStyle = span.textStyle;\n              let start = span.offsetInSpan[0];\n              let end = span.offsetInSpan[1];\n              let offset = span.spanPosition.spanRange[0];\n              if (this.textStyle.fontColor == Color.Orange || this.textStyle.fontColor == '#FFFFA500') {\n                this.textStyle.fontColor = Color.Black;\n              } else {\n                this.textStyle.fontColor = Color.Orange;\n              }\n              this.controller.updateSpanStyle({\n                start: offset + start,\n                end: offset + end,\n                textStyle: this.textStyle\n              })\n            }\n          })\n        }\n      }\n      }]\n  private expandedMenuOptions: Array<ExpandedMenuOptions> =\n    [{\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      startIcon: $r(\"app.media.startIcon\"), content: '词典', action: () => {\n      }\n    }, {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      startIcon: $r(\"app.media.startIcon\"), content: '翻译', action: () => {\n      }\n    }, {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      startIcon: $r(\"app.media.startIcon\"), content: '搜索', action: () => {\n      }\n    }]\n  private expandedMenuOptions1: Array<ExpandedMenuOptions> = [];\n  private selectionMenuOptions: SelectionMenuOptions = {\n    editorMenuOptions: this.editorMenuOptions,\n    expandedMenuOptions: this.expandedMenuOptions,\n    controller: this.controller,\n    onCut: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test cut' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    },\n    onPaste: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test onPaste' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    },\n    onCopy: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test cut' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    },\n    onSelectAll: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test onPaste' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    }\n  };\n\n  @Builder\n  sliderPanel() {\n    Column() {\n      Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n        Text('A').fontSize(15)\n        Slider({ value: this.textSize, step: 10, style: SliderStyle.InSet })\n          .width(210)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            if (this.controller) {\n              let selection = this.controller.getSelection();\n              if (mode == SliderChangeMode.End) {\n                if (this.textSize == undefined) {\n                  this.textSize = 0;\n                }\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    this.textSize = Math.max(this.textSize, (item as RichEditorTextSpanResult).textStyle.fontSize);\n                  }\n                })\n              }\n              if (mode == SliderChangeMode.Moving || mode == SliderChangeMode.Click) {\n                this.start = selection.selection[0];\n                this.end = selection.selection[1];\n                this.textSize = value;\n                this.controller.updateSpanStyle({\n                  start: this.start,\n                  end: this.end,\n                  textStyle: { fontSize: this.textSize }\n                })\n              }\n            }\n          })\n        Text('A').fontSize(20).fontWeight(FontWeight.Medium)\n      }.borderRadius($r('sys.float.ohos_id_corner_radius_card'))\n    }\n    .shadow(ShadowStyle.OUTER_DEFAULT_MD)\n    .backgroundColor(Color.White)\n    .borderRadius($r('sys.float.ohos_id_corner_radius_card'))\n    .padding(15)\n    .height(48)\n  }\n\n  @Builder\n  MyMenu() {\n    Column() {\n      SelectionMenu(this.selectionMenuOptions)\n    }\n    .width(256)\n    .backgroundColor(Color.Transparent)\n  }\n\n  @Builder\n  MyMenu2() {\n    Column() {\n      SelectionMenu({\n        editorMenuOptions: this.editorMenuOptions,\n        expandedMenuOptions: this.expandedMenuOptions1,\n        controller: this.controller,\n      })\n    }\n    .width(256)\n    .backgroundColor(Color.Transparent)\n  }\n\n  @Builder\n  MyMenu3() {\n    Column() {\n      SelectionMenu({\n        editorMenuOptions: this.editorMenuOptions,\n        expandedMenuOptions: this.expandedMenuOptions,\n        controller: this.controller,\n      })\n    }\n    .width(256)\n    .backgroundColor(Color.Transparent)\n  }\n\n  build() {\n    Column() {\n      Button(\"SetSelection\")\n        .onClick((event: ClickEvent) => {\n          if (this.controller) {\n            this.controller.setSelection(0, 2);\n          }\n        })\n\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan(this.message, { style: { fontColor: Color.Orange, fontSize: 30 } });\n          this.controller.addTextSpan(this.message, { style: { fontColor: Color.Black, fontSize: 25 } });\n        })\n        .onSelect((value: RichEditorSelection) => {\n          if (value.selection[0] == -1 && value.selection[1] == -1) {\n            return;\n          }\n          this.start = value.selection[0];\n          this.end = value.selection[1];\n        })\n        .bindSelectionMenu(RichEditorSpanType.TEXT, this.MyMenu3(), RichEditorResponseType.RIGHT_CLICK)\n        .bindSelectionMenu(RichEditorSpanType.TEXT, this.MyMenu2(), RichEditorResponseType.SELECT)\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(200)\n        .height(200)\n        .margin(10)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458418)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统暂未预置加粗、斜体等图标，示例代码使用本地资源图标，开发者使用时需自行替换editorMenuOptions中icon项的资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(442787)/* ["default"] */.A) + "",
        width: "409",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置symbol类型图标",
      children: "示例2（设置Symbol类型图标）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editormenuoptions",
        children: "EditorMenuOptions"
      }), "的属性symbolStyle，展示了自定义Symbol类型图标。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  SelectionMenu,\n  EditorMenuOptions,\n  ExpandedMenuOptions,\n  EditorEventInfo,\n  SelectionMenuOptions,\n  SymbolGlyphModifier\n} from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct Index {\n  @State select: boolean = true;\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State message: string = 'Hello world';\n  @State textSize: number = 30;\n  @State fontWeight: FontWeight = FontWeight.Normal;\n  @State start: number = -1;\n  @State end: number = -1;\n  @State visibleValue: Visibility = Visibility.Visible;\n  @State colorTransparent: Color = Color.Transparent;\n  @State textStyle: RichEditorTextStyle = {};\n  private editorMenuOptions: Array<EditorMenuOptions> =\n    [\n      {\n        icon: $r(\"sys.media.wifi_router_fill\"),\n        symbolStyle: new SymbolGlyphModifier($r('sys.symbol.save')),\n        action: () => {\n          if (this.controller) {\n            let selection = this.controller.getSelection();\n            let spans = selection.spans;\n            spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n              if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                let span = item as RichEditorTextSpanResult;\n                this.textStyle = span.textStyle;\n                let start = span.offsetInSpan[0];\n                let end = span.offsetInSpan[1];\n                let offset = span.spanPosition.spanRange[0];\n                if (this.textStyle.fontWeight != 11) {\n                  this.textStyle.fontWeight = FontWeight.Bolder;\n                } else {\n                  this.textStyle.fontWeight = FontWeight.Normal;\n                }\n                this.controller.updateSpanStyle({\n                  start: offset + start,\n                  end: offset + end,\n                  textStyle: this.textStyle\n                })\n              }\n            })\n          }\n        }\n      },\n      {\n        icon: $r(\"sys.media.save_button_picture\"),\n        symbolStyle: new SymbolGlyphModifier($r('sys.symbol.camera')),\n        action: () => {\n          if (this.controller) {\n            let selection = this.controller.getSelection();\n            let spans = selection.spans;\n            spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n              if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                let span = item as RichEditorTextSpanResult;\n                this.textStyle = span.textStyle;\n                let start = span.offsetInSpan[0];\n                let end = span.offsetInSpan[1];\n                let offset = span.spanPosition.spanRange[0];\n                if (this.textStyle.fontStyle == FontStyle.Italic) {\n                  this.textStyle.fontStyle = FontStyle.Normal;\n                } else {\n                  this.textStyle.fontStyle = FontStyle.Italic;\n                }\n                this.controller.updateSpanStyle({\n                  start: offset + start,\n                  end: offset + end,\n                  textStyle: this.textStyle\n                })\n              }\n            })\n          }\n        }\n      },\n      {\n        icon: $r(\"sys.media.waveform_folder_fill\"),\n        symbolStyle: new SymbolGlyphModifier($r('sys.symbol.car')),\n        action: () => {\n          if (this.controller) {\n            let selection = this.controller.getSelection();\n            let spans = selection.spans;\n            spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n              if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                let span = item as RichEditorTextSpanResult;\n                this.textStyle = span.textStyle;\n                let start = span.offsetInSpan[0];\n                let end = span.offsetInSpan[1];\n                let offset = span.spanPosition.spanRange[0];\n                if (this.textStyle.decoration) {\n                  if (this.textStyle.decoration.type == TextDecorationType.Underline) {\n                    this.textStyle.decoration.type = TextDecorationType.None;\n                  } else {\n                    this.textStyle.decoration.type = TextDecorationType.Underline;\n                  }\n                } else {\n                  this.textStyle.decoration = { type: TextDecorationType.Underline, color: Color.Black }\n                }\n                this.controller.updateSpanStyle({\n                  start: offset + start,\n                  end: offset + end,\n                  textStyle: this.textStyle\n                })\n              }\n            })\n          }\n        }\n      },\n      {\n        // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件。\n        icon: $r(\"app.media.app_icon\"), action: () => {\n      }, builder: (): void => this.sliderPanel()\n      },\n      {\n        icon: $r(\"sys.media.thermometer_fill\"), action: () => {\n        if (this.controller) {\n          let selection = this.controller.getSelection();\n          let spans = selection.spans;\n          spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n            if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n              let span = item as RichEditorTextSpanResult;\n              this.textStyle = span.textStyle;\n              let start = span.offsetInSpan[0];\n              let end = span.offsetInSpan[1];\n              let offset = span.spanPosition.spanRange[0];\n              if (this.textStyle.fontColor == Color.Orange || this.textStyle.fontColor == '#FFFFA500') {\n                this.textStyle.fontColor = Color.Black;\n              } else {\n                this.textStyle.fontColor = Color.Orange;\n              }\n              this.controller.updateSpanStyle({\n                start: offset + start,\n                end: offset + end,\n                textStyle: this.textStyle\n              })\n            }\n          })\n        }\n      }\n      }]\n  private expandedMenuOptions: Array<ExpandedMenuOptions> =\n    [{\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      startIcon: $r(\"app.media.startIcon\"), content: '词典', action: () => {\n      }\n    }, {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      startIcon: $r(\"app.media.startIcon\"), content: '翻译', action: () => {\n      }\n    }, {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      startIcon: $r(\"app.media.startIcon\"), content: '搜索', action: () => {\n      }\n    }]\n  private expandedMenuOptions1: Array<ExpandedMenuOptions> = []\n  private editorMenuOptions1: Array<EditorMenuOptions> = []\n  private selectionMenuOptions: SelectionMenuOptions = {\n    editorMenuOptions: this.editorMenuOptions,\n    expandedMenuOptions: this.expandedMenuOptions,\n    controller: this.controller,\n    onCut: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test cut' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    },\n    onPaste: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test onPaste' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    },\n    onCopy: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test cut' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    },\n    onSelectAll: (event?: EditorEventInfo) => {\n      if (event && event.content) {\n        event.content.spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n          if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n            let span = item as RichEditorTextSpanResult;\n            console.info('test onPaste' + span.value);\n            console.info('test start ' + span.offsetInSpan[0] + ' end: ' + span.offsetInSpan[1]);\n          }\n        })\n      }\n    }\n  }\n\n  @Builder\n  sliderPanel() {\n    Column() {\n      Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n        Text('A').fontSize(15)\n        Slider({ value: this.textSize, step: 10, style: SliderStyle.InSet })\n          .width(210)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            if (this.controller) {\n              let selection = this.controller.getSelection();\n              if (mode == SliderChangeMode.End) {\n                if (this.textSize == undefined) {\n                  this.textSize = 0;\n                }\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    this.textSize = Math.max(this.textSize, (item as RichEditorTextSpanResult).textStyle.fontSize);\n                  }\n                })\n              }\n              if (mode == SliderChangeMode.Moving || mode == SliderChangeMode.Click) {\n                this.start = selection.selection[0];\n                this.end = selection.selection[1];\n                this.textSize = value;\n                this.controller.updateSpanStyle({\n                  start: this.start,\n                  end: this.end,\n                  textStyle: { fontSize: this.textSize }\n                })\n              }\n            }\n          })\n        Text('A').fontSize(20).fontWeight(FontWeight.Medium)\n      }.borderRadius($r('sys.float.ohos_id_corner_radius_card'))\n    }\n    .shadow(ShadowStyle.OUTER_DEFAULT_MD)\n    .backgroundColor(Color.White)\n    .borderRadius($r('sys.float.ohos_id_corner_radius_card'))\n    .padding(15)\n    .height(48)\n  }\n\n  @Builder\n  MyMenu() {\n    Column() {\n      SelectionMenu(this.selectionMenuOptions)\n    }\n    .width(256)\n    .backgroundColor(Color.Transparent)\n  }\n\n  @Builder\n  MyMenu2() {\n    Column() {\n      SelectionMenu({\n        editorMenuOptions: this.editorMenuOptions,\n        expandedMenuOptions: this.expandedMenuOptions1,\n        controller: this.controller,\n      })\n    }\n    .width(256)\n    .backgroundColor(Color.Transparent)\n  }\n\n  @Builder\n  MyMenu3() {\n    Column() {\n      SelectionMenu({\n        editorMenuOptions: this.editorMenuOptions1,\n        expandedMenuOptions: this.expandedMenuOptions,\n        controller: this.controller,\n      })\n    }\n    .width(256)\n    .backgroundColor(Color.Transparent)\n  }\n\n  build() {\n    Column() {\n      Button(\"SetSelection\")\n        .onClick((event: ClickEvent) => {\n          if (this.controller) {\n            this.controller.setSelection(0, 2);\n          }\n        })\n\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan(this.message, { style: { fontColor: Color.Orange, fontSize: 30 } });\n          this.controller.addTextSpan(this.message, { style: { fontColor: Color.Black, fontSize: 25 } });\n        })\n        .onSelect((value: RichEditorSelection) => {\n          if (value.selection[0] == -1 && value.selection[1] == -1) {\n            return;\n          }\n          this.start = value.selection[0];\n          this.end = value.selection[1];\n        })\n        .bindSelectionMenu(RichEditorSpanType.TEXT, this.MyMenu3(), RichEditorResponseType.RIGHT_CLICK)\n        .bindSelectionMenu(RichEditorSpanType.TEXT, this.MyMenu2(), RichEditorResponseType.SELECT)\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(200)\n        .height(200)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(683404)/* ["default"] */.A) + "",
        width: "346",
        height: "328"
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
683404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480129-750deee6e40155c1d0fafa8f68ec444d.jpg");

},
458418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
412815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
442787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960128-709632151774d2a12660dce51783e3cb.gif");

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