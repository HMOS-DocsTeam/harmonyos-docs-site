"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["655093"], {
365866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_tabtitlebar_ohos_arkui_advanced_tabtitlebar_md_306_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-tabtitlebar-ohos-arkui-advanced-tabtitlebar-md-306.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_tabtitlebar_ohos_arkui_advanced_tabtitlebar_md_306_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar/ohos-arkui-advanced-tabtitlebar","title":"TabTitleBar","description":"页签型标题栏，用于页面之间的切换。仅一级页面适用。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar/ohos-arkui-advanced-tabtitlebar.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar/ohos-arkui-advanced-tabtitlebar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar/ohos-arkui-advanced-tabtitlebar","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"TabTitleBar","sidebar_position":26,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-tabtitlebar","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-tabtitlebar"},"sidebar":"ref","previous":{"title":"SwipeRefresher","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-swiperefresher/ohos-arkui-advanced-swiperefresher"},"next":{"title":"ToolBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-toolbar/ohos-arkui-advanced-toolbar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-tabtitlebar/ohos-arkui-advanced-tabtitlebar.md


const frontMatter = {
	title: 'TabTitleBar',
	sidebar_position: 26,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-tabtitlebar',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-tabtitlebar'
};
const contentTitle = 'TabTitleBar';

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
  "value": "TabTitleBar",
  "id": "tabtitlebar-1",
  "level": 2
}, {
  "value": "TabTitleBarMenuItem",
  "id": "tabtitlebarmenuitem",
  "level": 2
}, {
  "value": "TabTitleBarTabItem",
  "id": "tabtitlebartabitem",
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
  "value": "示例1（简单的页签型标题栏）",
  "id": "示例1简单的页签型标题栏",
  "level": 3
}, {
  "value": "示例2（右侧自定义按钮播报）",
  "id": "示例2右侧自定义按钮播报",
  "level": 3
}, {
  "value": "示例3（设置Symbol类型图标）",
  "id": "示例3设置symbol类型图标",
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
        id: "tabtitlebar",
        children: "TabTitleBar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页签型标题栏，用于页面之间的切换。仅一级页面适用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445876)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果TabTitleBar设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到TabTitleBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议TabTitleBar设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TabTitleBar } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabtitlebar-1",
      children: "TabTitleBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TabTitleBar({tabItems: Array<TabTitleBarTabItem>, menuItems?: Array<TabTitleBarMenuItem>, swiperContent: () => void})"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "tabItems"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabtitlebartabitem",
              children: "TabTitleBarTabItem"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左侧页签项目列表，定义标题栏左侧的页签项目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuItems"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabtitlebarmenuitem",
              children: "TabTitleBarMenuItem"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧菜单项目列表，定义标题栏右侧的菜单项目。若不传，则不显示右侧菜单项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swiperContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页签列表关联的页面内容构造器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18890)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入参对象不可为undefined，即TabTitleBar(undefined)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabtitlebarmenuitem",
      children: "TabTitleBarMenuItem"
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
            children: "value"
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
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolStyle18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Symbol图标资源，优先级大于value。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label13+"
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
            children: ["图标标签描述。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否启用。true：启用，false：禁用。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["触发时的动作闭包。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: ["标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。  支持的值为：  \"auto\"：当前组件会转换'yes'。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: ["标题栏右侧自定义按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。  默认值：有label默认值为当前项label属性内容，没有设置label时，默认值为“ ”。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["标题栏右侧自定义按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。  默认值为“单指双击即可执行”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabtitlebartabitem",
      children: "TabTitleBarTabItem"
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
            children: "title"
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
            children: ["文字页签。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片页签资源。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolStyle18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Symbol图片页签资源，优先级大于icon。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
      id: "示例1简单的页签型标题栏",
      children: "示例1（简单的页签型标题栏）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了带有左侧页签和右侧菜单列表的页签型标题栏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TabTitleBar, Prompt, TabTitleBarTabItem, TabTitleBarMenuItem } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Builder\n  // 定义页签列表关联的页面\n  componentBuilder() {\n    Text(\"#1ABC9C\\nTURQUOISE\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#1ABC9C\")\n    Text(\"#16A085\\nGREEN SEA\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#16A085\")\n    Text(\"#2ECC71\\nEMERALD\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#2ECC71\")\n    Text(\"#27AE60\\nNEPHRITIS\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#27AE60\")\n    Text(\"#3498DB\\nPETER RIVER\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#3498DB\")\n  }\n\n  // 定义几个左侧的页签项目\n  private readonly tabItems: Array<TabTitleBarTabItem> =\n    [\n      { title: '页签1' },\n      { title: '页签2' },\n      { title: '页签3' },\n      { title: 'icon', icon: $r('sys.media.ohos_app_icon') },\n      { title: '页签4' },\n    ]\n  // 定义几个右侧的菜单项目\n  private readonly menuItems: Array<TabTitleBarMenuItem> = [\n    {\n      value: $r('sys.media.ohos_save_button_filled'),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 0\" })\n    },\n    {\n      value: $r('sys.media.ohos_ic_public_copy'),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 1\" })\n    },\n    {\n      value: $r('sys.media.ohos_ic_public_edit'),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 2\" })\n    },\n  ]\n\n  // TabTitleBar效果展示\n  build() {\n    Row() {\n      Column() {\n        TabTitleBar({\n          swiperContent: this.componentBuilder,\n          tabItems: this.tabItems,\n          menuItems: this.menuItems,\n        })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302280)/* ["default"] */.A) + "",
        width: "399",
        height: "482"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2右侧自定义按钮播报",
      children: "示例2（右侧自定义按钮播报）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置标题栏右侧自定义按钮属性accessibilityText、accessibilityDescription、accessibilityLevel自定义屏幕朗读播报文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TabTitleBar, Prompt, TabTitleBarTabItem, TabTitleBarMenuItem } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Builder\n  // 定义页签列表关联的页面\n  componentBuilder() {\n    Text(\"#1ABC9C\\nTURQUOISE\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#1ABC9C\")\n    Text(\"#16A085\\nGREEN SEA\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#16A085\")\n    Text(\"#2ECC71\\nEMERALD\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#2ECC71\")\n    Text(\"#27AE60\\nNEPHRITIS\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#27AE60\")\n    Text(\"#3498DB\\nPETER RIVER\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#3498DB\")\n  }\n\n  // 定义几个左侧的页签项目\n  private readonly tabItems: Array<TabTitleBarTabItem> =\n    [\n      { title: '页签1' },\n      { title: '页签2' },\n      { title: '页签3' },\n      { title: 'icon', icon: $r('sys.media.ohos_app_icon') },\n      { title: '页签4' },\n    ]\n  // 定义几个右侧的菜单项目\n  private readonly menuItems: Array<TabTitleBarMenuItem> = [\n    {\n      value: $r('sys.media.ohos_save_button_filled'),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 0\" }),\n      accessibilityText: '保存',\n      // 此处为no，屏幕朗读不聚焦\n      accessibilityLevel: 'no',\n      accessibilityDescription: '点击操作保存图标'\n    },\n    {\n      value: $r('sys.media.ohos_ic_public_copy'),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 1\" }),\n      accessibilityText: '复制',\n      accessibilityLevel: 'yes',\n      accessibilityDescription: '点击操作复制图标'\n    },\n    {\n      value: $r('sys.media.ohos_ic_public_edit'),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 2\" }),\n      // 屏幕朗读播报文本，优先级比label高\n      accessibilityText: '编辑',\n      // 屏幕朗读是否可以聚焦到\n      accessibilityLevel: 'yes',\n      // 屏幕朗读最后播报的描述文本\n      accessibilityDescription: '点击操作编辑图标'\n    },\n  ]\n\n  // TabTitleBar效果展示\n  build() {\n    Row() {\n      Column() {\n        TabTitleBar({\n          swiperContent: this.componentBuilder,\n          tabItems: this.tabItems,\n          menuItems: this.menuItems,\n        })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973480)/* ["default"] */.A) + "",
        width: "399",
        height: "482"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置symbol类型图标",
      children: "示例3（设置Symbol类型图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置TabTitleBarTabItem、TabTitleBarMenuItem的属性symbolStyle，展示了自定义Symbol类型图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TabTitleBar, Prompt, TabTitleBarTabItem, TabTitleBarMenuItem, SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Builder\n  // 定义页签列表关联的页面\n  componentBuilder() {\n    Text(\"#1ABC9C\\nTURQUOISE\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#1ABC9C\")\n    Text(\"#16A085\\nGREEN SEA\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#16A085\")\n    Text(\"#2ECC71\\nEMERALD\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#2ECC71\")\n    Text(\"#27AE60\\nNEPHRITIS\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#27AE60\")\n    Text(\"#3498DB\\nPETER RIVER\")\n      .fontWeight(FontWeight.Bold)\n      .fontSize(14)\n      .width(\"100%\")\n      .textAlign(TextAlign.Center)\n      .fontColor(\"#CCFFFFFF\")\n      .backgroundColor(\"#3498DB\")\n  }\n\n  // 定义几个左侧的页签项目\n  private readonly tabItems: Array<TabTitleBarTabItem> =\n    [\n      { title: '页签1' },\n      { title: '页签2' },\n      { title: '页签3' },\n      {\n        title: 'icon',\n        icon: $r('sys.media.ohos_app_icon'),\n        symbolStyle: new SymbolGlyphModifier($r('sys.symbol.car'))\n      },\n      { title: '页签4' },\n    ]\n  // 定义几个右侧的菜单项目\n  private readonly menuItems: Array<TabTitleBarMenuItem> = [\n    {\n      value: $r('sys.media.ohos_save_button_filled'),\n      symbolStyle: new SymbolGlyphModifier($r('sys.symbol.save')),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 0\" }),\n      accessibilityText: '保存',\n      // 此处为no，屏幕朗读不聚焦\n      accessibilityLevel: 'no',\n      accessibilityDescription: '点击操作保存图标'\n    },\n    {\n      value: $r('sys.media.ohos_ic_public_copy'),\n      symbolStyle: new SymbolGlyphModifier($r('sys.symbol.car')),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 1\" }),\n      accessibilityText: '复制',\n      accessibilityLevel: 'yes',\n      accessibilityDescription: '点击操作复制图标'\n    },\n    {\n      value: $r('sys.media.ohos_ic_public_edit'),\n      symbolStyle: new SymbolGlyphModifier($r('sys.symbol.ai_edit')),\n      isEnabled: true,\n      action: () => Prompt.showToast({ message: \"on item click! index 2\" }),\n      // 屏幕朗读播报文本，优先级比label高\n      accessibilityText: '编辑',\n      // 屏幕朗读是否可以聚焦到\n      accessibilityLevel: 'yes',\n      // 屏幕朗读最后播报的描述文本\n      accessibilityDescription: '点击操作编辑图标'\n    },\n  ]\n\n  // TabTitleBar效果展示\n  build() {\n    Row() {\n      Column() {\n        TabTitleBar({\n          swiperContent: this.componentBuilder,\n          tabItems: this.tabItems,\n          menuItems: this.menuItems,\n        })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432907)/* ["default"] */.A) + "",
        width: "350",
        height: "228"
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
302280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960136-93ff0ddcd4f88865fc95e9d5cbb57363.png");

},
432907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800488-ba92a194aad502ff8ea34f105f832f20.png");

},
973480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480137-93ff0ddcd4f88865fc95e9d5cbb57363.png");

},
18890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
445876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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