"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["383576"], {
953685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_editabletitlebar_ohos_arkui_advanced_editabletitlebar_md_07d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-editabletitlebar-ohos-arkui-advanced-editabletitlebar-md-07d.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_editabletitlebar_ohos_arkui_advanced_editabletitlebar_md_07d_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar","title":"EditableTitleBar","description":"编辑型标题栏，适用于多选界面或者内容的编辑界面，一般采取左叉右勾的形式。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"EditableTitleBar","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-editabletitlebar","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-editabletitlebar"},"sidebar":"ref","previous":{"title":"DialogV2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2"},"next":{"title":"ExceptionPrompt","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar.md


const frontMatter = {
	title: 'EditableTitleBar',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-editabletitlebar',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-editabletitlebar'
};
const contentTitle = 'EditableTitleBar';

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
  "value": "EditableTitleBar",
  "id": "editabletitlebar-1",
  "level": 2
}, {
  "value": "EditableLeftIconType",
  "id": "editablelefticontype",
  "level": 2
}, {
  "value": "EditableTitleBarMenuItem",
  "id": "editabletitlebarmenuitem",
  "level": 2
}, {
  "value": "EditableTitleBarItem12+",
  "id": "editabletitlebaritem12",
  "level": 2
}, {
  "value": "EditableTitleBarOptions12+",
  "id": "editabletitlebaroptions12",
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
  "value": "示例1（右侧图标自定义标题栏）",
  "id": "示例1右侧图标自定义标题栏",
  "level": 3
}, {
  "value": "示例2（头像与背景模糊标题栏）",
  "id": "示例2头像与背景模糊标题栏",
  "level": 3
}, {
  "value": "示例3（右侧自定义按钮播报）",
  "id": "示例3右侧自定义按钮播报",
  "level": 3
}, {
  "value": "示例4（左侧图标设置为默认焦点）",
  "id": "示例4左侧图标设置为默认焦点",
  "level": 3
}, {
  "value": "示例5（右侧自定义图标设置为默认焦点）",
  "id": "示例5右侧自定义图标设置为默认焦点",
  "level": 3
}, {
  "value": "示例6（设置Symbol类型图标）",
  "id": "示例6设置symbol类型图标",
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
        id: "editabletitlebar",
        children: "EditableTitleBar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑型标题栏，适用于多选界面或者内容的编辑界面，一般采取左叉右勾的形式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445928)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果EditableTitleBar设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到EditableTitleBar本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议EditableTitleBar设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EditableTitleBar } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editabletitlebar-1",
      children: "EditableTitleBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EditableTitleBar({leftIconStyle: EditableLeftIconType, imageItem?: EditableTitleBarItem, title: ResourceStr, subtitle?: ResourceStr, menuItems?: Array<EditableTitleBarMenuItem>, isSaveIconRequired: boolean, onSave?: () => void, onCancel?: () =>void, options: EditableTitleBarOptions, contentMargin?: LocalizedMargin, leftIconDefaultFocus?: boolean, saveIconDefaultFocus?: boolean})"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "leftIconStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#editablelefticontype",
              children: "EditableLeftIconType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左侧按钮类型。  默认值：EditableLeftIconType.Back，表示返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageItem12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#editabletitlebaritem12",
              children: "EditableTitleBarItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于左侧头像的单个菜单项目。需要在标题栏左侧显示头像时传入此参数，不传入时取默认值，不显示头像。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 左侧头像不支持配置无障碍属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题。  默认值：''，表示标题内容为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subtitle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["副标题。需要在标题下方显示补充说明信息时传入此参数，不传入时取默认值，不显示副标题。  默认值：''，表示副标题内容为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuItems"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#editabletitlebarmenuitem",
              children: "EditableTitleBarMenuItem"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["右侧菜单项目列表。需要在标题栏右侧显示自定义操作按钮时传入此参数，不传入时取默认值，不显示右侧菜单项目列表。  默认值：undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSaveIconRequired12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否需要右侧的保存按钮。  默认值：true，表示需要右侧的保存按钮。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击保存时的事件。需要自定义保存操作逻辑时传入此参数，缺省时点击按钮无响应。  默认值：() => void。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCancel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当左侧按钮类型为 Cancel，触发取消时的事件。需要自定义返回/取消操作逻辑时传入此参数，缺省时点击左侧按钮无响应。  默认值：() => void。  从API version 12开始，当左侧按钮类型为 Back，触发返回时的事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#editabletitlebaroptions12",
              children: "EditableTitleBarOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题样式。  默认值：  {  safeAreaTypes: [SafeAreaType.SYSTEM],  safeAreaEdges: [SafeAreaEdge.TOP],  backgroundColor: '#00000000'  }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentMargin12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedmargin12",
              children: "LocalizedMargin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题栏外边距，不支持设置负数。  默认值：  {start: LengthMetrics.resource($r('sys.float.margin_left')), end: LengthMetrics.resource($r('sys.float.margin_right'))}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leftIconDefaultFocus18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左侧图标是否为默认焦点。  默认值：false，表示不是默认焦点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saveIconDefaultFocus18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["保存图标是否为默认焦点。  默认值：false，表示不是默认焦点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129907)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入参对象不可为undefined，即EditableTitleBar(undefined)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若同时有多个可操作区域设置值默认焦点，则设置过默认焦点的可操作区域中显示顺序的第一个为默认焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editablelefticontype",
      children: "EditableLeftIconType"
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
            children: "Back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cancel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消按钮。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editabletitlebarmenuitem",
      children: "EditableTitleBarMenuItem"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "label12+"
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
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: ["是否启用，默认启用。  isEnabled为true时，表示为启用。  isEnabled为false时，表示为禁用。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["标题栏右侧自定义按钮点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["标题栏右侧自定义按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。  支持的值为：  \"auto\"：当前组件会转换\"yes\"。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"  ", (0,jsx_runtime.jsx)(_components.strong, {
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultFocus18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否设置为默认获焦。  true: 获焦  false: 不获焦  默认值：false  使用defaultFocus属性时，需提前将isEnabled属性设置为true，否则defaultFocus值会被识别为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editabletitlebaritem12",
      children: "EditableTitleBarItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type EditableTitleBarItem = EditableTitleBarMenuItem"
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
              href: "#editabletitlebarmenuitem",
              children: "EditableTitleBarMenuItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左侧头像的单个菜单类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editabletitlebaroptions12",
      children: "EditableTitleBarOptions12+"
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
            children: "backgroundColor"
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
            children: "标题栏背景色。  默认值: '#00000000'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundBlurStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题栏背景模糊样式。  默认值: BlurStyle.NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "safeAreaTypes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#safeareatype",
              children: "SafeAreaType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，配置扩展安全区域的类型。  默认值: [SafeAreaType.SYSTEM]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "safeAreaEdges"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#safeareaedge",
              children: "SafeAreaEdge"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非必填，配置扩展安全区域的方向。  默认值: [SafeAreaEdge.TOP]"
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
      id: "示例1右侧图标自定义标题栏",
      children: "示例1（右侧图标自定义标题栏）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示EditableTitleBar设置左侧图标、主标题及自定义右侧图标区的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EditableLeftIconType, EditableTitleBar, Prompt } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Divider().height(2).color(0xCCCCCC)\n        // 左侧取消按钮，右侧保存按钮。\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Cancel,\n          title: '编辑页面',\n          menuItems: [],\n          onCancel: () => {\n            Prompt.showToast({ message: 'on cancel' });\n          },\n          onSave: () => {\n            Prompt.showToast({ message: 'on save' });\n          }\n        })\n        Divider().height(2).color(0xCCCCCC)\n        // 左侧返回按钮，右侧自定义取消按钮（disabled）、保存按钮。\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Back,\n          title: '编辑页面',\n          menuItems: [\n            {\n              value: $r('sys.media.ohos_ic_public_cancel'),\n              isEnabled: false,\n              action: () => {\n                Prompt.showToast({ message: 'show toast index 2' });\n              }\n            }\n          ],\n          onSave: () => {\n            Prompt.showToast({ message: 'on save' })\n          }\n        })\n        Divider().height(2).color(0xCCCCCC)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997970)/* ["default"] */.A) + "",
        width: "389",
        height: "133"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2头像与背景模糊标题栏",
      children: "示例2（头像与背景模糊标题栏）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示EditableTitleBar设置背景模糊、头像；取消右侧保存图标及自定义标题栏外边距的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EditableLeftIconType, EditableTitleBar, LengthMetrics, Prompt } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State titleBarMargin: LocalizedMargin = {\n    start: LengthMetrics.vp(35),\n    end: LengthMetrics.vp(35),\n  };\n\n  build() {\n    Row() {\n      Column() {\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Cancel,\n          title: '主标题',\n          subtitle: '副标题',\n          // 设置背景模糊效果\n          options: {\n            backgroundBlurStyle: BlurStyle.COMPONENT_THICK,\n          },\n          onSave: () => {\n            Prompt.showToast({ message: \"on save\" });\n          },\n        })\n        Divider().height(2).color(0xCCCCCC);\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Cancel,\n          title: '主标题',\n          subtitle: '副标题',\n          // 取消右侧保存按钮\n          isSaveIconRequired: false,\n        })\n        Divider().height(2).color(0xCCCCCC);\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Back,\n          title: '主标题',\n          subtitle: '副标题',\n          isSaveIconRequired: false,\n          onCancel: () => {\n            this.getUIContext()?.getRouter()?.back();\n          },\n        })\n        Divider().height(2).color(0xCCCCCC);\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Back,\n          title: '主标题',\n          subtitle: '副标题',\n          menuItems: [\n            {\n              value: $r('sys.media.ohos_ic_public_remove'),\n              isEnabled: true,\n              action: () => {\n                Prompt.showToast({ message: \"show toast index 1\" });\n              }\n            }\n          ],\n          isSaveIconRequired: false,\n          // 点击左侧Back图标，触发的动作。\n          onCancel: () => {\n            this.getUIContext()?.getRouter()?.back();\n          },\n        })\n        Divider().height(2).color(0xCCCCCC);\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Back,\n          title: '主标题',\n          subtitle: '副标题',\n          // 设置可点击头像\n          imageItem: {\n            value: $r('sys.media.ohos_ic_normal_white_grid_image'),\n            isEnabled: true,\n            action: () => {\n              Prompt.showToast({ message: \"show toast index 2\" });\n            }\n          },\n          // 设置标题栏外边距\n          contentMargin: this.titleBarMargin,\n          // 右侧图标配置\n          menuItems: [\n            {\n              value: $r('sys.media.ohos_ic_public_remove'),\n              isEnabled: true,\n              action: () => {\n                Prompt.showToast({ message: \"show toast index 3\" });\n              }\n            }\n          ],\n          onCancel: () => {\n            this.getUIContext()?.getRouter()?.back();\n          },\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953749)/* ["default"] */.A) + "",
        width: "391",
        height: "317"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3右侧自定义按钮播报",
      children: "示例3（右侧自定义按钮播报）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置标题栏的右侧自定义按钮属性accessibilityText、accessibilityDescription、accessibilityLevel自定义屏幕朗读播报文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, EditableLeftIconType, EditableTitleBar } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index1 {\n  build() {\n    Row() {\n      Column() {\n        Divider().height(2).color(0xCCCCCC)\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Cancel,\n          title: '编辑页面',\n          menuItems: [],\n          onCancel: () => {\n            Prompt.showToast({ message: 'on cancel' });\n          },\n          onSave: () => {\n            Prompt.showToast({ message: 'on save' });\n          }\n        })\n        Divider().height(2).color(0xCCCCCC)\n        EditableTitleBar({\n          // 头像、自定义按钮不可用\n          leftIconStyle: EditableLeftIconType.Back,\n          title: '主标题',\n          subtitle: '副标题',\n          imageItem: {\n            value: $r('sys.media.ohos_ic_normal_white_grid_image'),\n            isEnabled: true,\n            action: () => {\n              Prompt.showToast({ message: \"show toast index 1\" });\n            }\n          },\n          menuItems: [\n            {\n              value: $r('sys.media.ohos_ic_public_remove'),\n              label: '取消',\n              isEnabled: false,\n              accessibilityText: '删除',\n              accessibilityDescription: '点击即可删除',\n              action: () => {\n                Prompt.showToast({ message: \"show toast index 2\" });\n              }\n            }\n          ],\n          onCancel: () => {\n            this.getUIContext()?.getRouter()?.back();\n          },\n        })\n        Divider().height(2).color(0xCCCCCC)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694442)/* ["default"] */.A) + "",
        width: "364",
        height: "123"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4左侧图标设置为默认焦点",
      children: "示例4（左侧图标设置为默认焦点）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获焦状态下，该示例通过设置标题栏属性leftIconDefaultFocus使左侧图标默认获焦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editabletitlebar-1",
        children: "EditableTitleBar"
      }), "中新增leftIconDefaultFocus接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, EditableLeftIconType, EditableTitleBar } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      EditableTitleBar({\n        leftIconStyle: EditableLeftIconType.Back,\n        leftIconDefaultFocus: true, // 设置左侧图标默认获焦。\n        title: '编辑页面',\n        menuItems: [],\n        onSave: () => {\n          Prompt.showToast({ message: 'on save' });\n        }\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435268)/* ["default"] */.A) + "",
        width: "1024",
        height: "50"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5右侧自定义图标设置为默认焦点",
      children: "示例5（右侧自定义图标设置为默认焦点）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置标题栏右侧图标属性defaultFocus使右侧图标默认获焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, EditableLeftIconType, EditableTitleBar } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      EditableTitleBar({\n        leftIconStyle: EditableLeftIconType.Back,\n        title: '主标题',\n        subtitle: '副标题',\n        // 右侧图标配置\n        menuItems: [\n          {\n            value: $r('sys.media.ohos_ic_public_remove'),\n            isEnabled: true,\n            action: () => {\n              Prompt.showToast({ message: \"show toast index 1\" });\n            }\n          },\n          {\n            value: $r('sys.media.ohos_ic_public_remove'),\n            isEnabled: true,\n            defaultFocus: true,\n            action: () => {\n              Prompt.showToast({ message: \"show toast index 2\" });\n            }\n          }\n        ],\n        onCancel: () => {\n          this.getUIContext()?.getRouter()?.back();\n        },\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699345)/* ["default"] */.A) + "",
        width: "1024",
        height: "51"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置symbol类型图标",
      children: "示例6（设置Symbol类型图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置EditableTitleBarMenuItem的属性symbolStyle，展示了自定义Symbol类型图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EditableLeftIconType, EditableTitleBar, Prompt, SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Divider().height(2).color(0xCCCCCC)\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Cancel,\n          title: '主标题',\n          subtitle: '副标题',\n          menuItems: [\n            {\n              value: $r('sys.symbol.house'),\n              isEnabled: true,\n              action: () => {\n                Prompt.showToast({ message: 'show toast index 2' });\n              }\n            },\n            {\n              value: $r('sys.symbol.car'),\n              isEnabled: false,\n            }\n          ],\n        })\n        Divider().height(2).color(0xCCCCCC)\n        EditableTitleBar({\n          leftIconStyle: EditableLeftIconType.Back,\n          title: '主标题',\n          subtitle: '副标题',\n          imageItem: {\n            value: $r('sys.media.ohos_app_icon'),\n            isEnabled: true,\n            action: () => {\n              Prompt.showToast({ message: \"show toast index 1\" });\n            }\n          },\n          menuItems: [\n            {\n              value: $r('sys.symbol.house'),\n              symbolStyle: new SymbolGlyphModifier($r('sys.symbol.bell')).fontColor([Color.Red]),\n              isEnabled: true,\n              action: () => {\n                Prompt.showToast({ message: 'show toast index 2' });\n              }\n            },\n            {\n              value: $r('sys.symbol.car'),\n              symbolStyle: new SymbolGlyphModifier($r('sys.symbol.heart')).fontColor([Color.Blue]),\n              isEnabled: false,\n            }\n          ],\n        })\n        Divider().height(2).color(0xCCCCCC)\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(391925)/* ["default"] */.A) + "",
        width: "400",
        height: "122"
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
391925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480107-d61fac345bec29811dbf2eca86484733.png");

},
997970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960104-321c6712a6489b406351b2afac81079c.png");

},
699345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960106-64f92280ac2ef972f0e2c937808018fa.png");

},
129907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
435268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
694442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800456-cf5d19ef15a94c6a6f9202f09d298630.png");

},
953749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480105-693cdc0745098ec9ed87841ef7e96f93.png");

},
445928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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