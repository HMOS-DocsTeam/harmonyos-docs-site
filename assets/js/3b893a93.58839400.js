"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["364726"], {
491013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_exceptionprompt_ohos_arkui_advanced_exceptionprompt_md_3b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-exceptionprompt-ohos-arkui-advanced-exceptionprompt-md-3b8.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_exceptionprompt_ohos_arkui_advanced_exceptionprompt_md_3b8_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt","title":"ExceptionPrompt","description":"异常提示，适用于有异常需要提示异常内容的情况。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"ExceptionPrompt","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-exceptionprompt","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-exceptionprompt"},"sidebar":"ref","previous":{"title":"EditableTitleBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar"},"next":{"title":"Filter","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-filter/ohos-arkui-advanced-filter"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt.md


const frontMatter = {
	title: 'ExceptionPrompt',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-exceptionprompt',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-exceptionprompt'
};
const contentTitle = 'ExceptionPrompt';

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
  "value": "ExceptionPrompt",
  "id": "exceptionprompt-1",
  "level": 2
}, {
  "value": "PromptOptions",
  "id": "promptoptions",
  "level": 2
}, {
  "value": "MarginType",
  "id": "margintype",
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
  "value": "示例1（设置异常提示）",
  "id": "示例1设置异常提示",
  "level": 3
}, {
  "value": "示例2（设置弹窗类型的异常提示）",
  "id": "示例2设置弹窗类型的异常提示",
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
        id: "exceptionprompt",
        children: "ExceptionPrompt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异常提示，适用于有异常需要提示异常内容的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(915612)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果ExceptionPrompt设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ExceptionPrompt本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ExceptionPrompt设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ExceptionPrompt, PromptOptions, MarginType } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exceptionprompt-1",
      children: "ExceptionPrompt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExceptionPrompt({ options: PromptOptions, onTipClick?: ()=>void, onActionTextClick?: ()=>void })"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#promptoptions",
              children: "PromptOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定当前异常提示的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onTipClick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()=>void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击左侧提示文本的回调函数，缺省时不执行任何操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onActionTextClick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()=>void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击右侧图标按钮的回调函数。缺省时不执行任何操作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptoptions",
      children: "PromptOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PromptOptions定义options的类型。"
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
            children: ["指定当前异常提示的异常图标样式。  默认不设置或设置为undefined，异常图标不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定当前异常提示的异常Symbol图标样式，优先级大于icon。  默认不设置或设置为undefined，Symbol图标不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tip"
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
            children: ["指定当前异常提示的文字提示内容。  支持默认内置四种状态文字资源如下：  1.无网络状态：显示网络未连接：引用ohos_network_not_connected。  2.网络差状态：显示网络连接不稳定，请点击重试：引用ohos_network_connected_unstable。  3.连不上服务器状态：显示无法连接到服务器，请点击重试：引用ohos_unstable_connect_server。  4.有网但是获取不到内容状态：显示无法获取位置，请点击重试：引用ohos_custom_network_tips_left。  默认不设置或设置为undefined，文字提示内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marginType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#margintype",
              children: "MarginType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定当前异常提示的边距样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "actionText"
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
            children: ["指定当前异常提示的右侧图标按钮的文字内容。  默认不设置或设置为undefined，文字内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marginTop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定当前异常提示的距离顶部的位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isShown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定当前异常提示的显隐状态。  true：显示状态。  false：隐藏状态。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "margintype",
      children: "MarginType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MarginType定义marginType的类型。"
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
            children: "DEFAULT_MARGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认边距：  边距1：引用ohos_id_card_margin_start。  边距2：引用ohos_id_card_margin_end。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIT_MARGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可适配边距：  边距1：引用ohos_id_max_padding_start。  边距2：引用ohos_id_max_padding_end。"
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
      id: "示例1设置异常提示",
      children: "示例1（设置异常提示）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何设置异常提示的异常图标、异常提示的文字、边距样式和右侧图标按钮的文字内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ExceptionPrompt, PromptOptions, MarginType } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State options: PromptOptions = {\n    icon: $r('sys.media.ohos_ic_public_fail'),\n    tip: '异常提示',\n    marginType: MarginType.DEFAULT_MARGIN,\n    actionText: '设置网络',\n    marginTop: 80,\n    isShown: true,\n  }\n\n  build() {\n    Column() {\n      ExceptionPrompt({\n        options: this.options,\n        onTipClick: () => {\n          // 单击左侧的文本切换到连接状态\n        },\n        onActionTextClick: () => {\n          // 点击“设置网络”按钮，打开设置网络弹窗界面\n        },\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(246583)/* ["default"] */.A) + "",
        width: "382",
        height: "83"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置弹窗类型的异常提示",
      children: "示例2（设置弹窗类型的异常提示）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例使用自定义弹窗设置弹窗类型的异常提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ExceptionPrompt, PromptOptions, MarginType } from '@kit.ArkUI';\n\n@CustomDialog\nstruct CustomDialogExample {\n  @Link textValue: string;\n  @Link inputValue: string;\n  @State options: PromptOptions = {\n    icon: $r('sys.media.ohos_ic_public_fail'),\n    tip: '异常提示！',\n    marginType: MarginType.DEFAULT_MARGIN,\n    actionText: '设置',\n    marginTop: 5,\n    isShown: true,\n  };\n  cancel: () => void = () => {\n  };\n  confirm: () => void = () => {\n  };\n  controller?: CustomDialogController;\n\n  // 若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，\n  // 那么此处需要将指向自己的controller放在最后\n  build() {\n    Column() {\n      ExceptionPrompt({\n        options: this.options,\n      })\n      TextInput({ placeholder: '', text: this.textValue }).margin({ top: 70 }).height(60).width('90%')\n        .onChange((value: string) => {\n          this.textValue = value;\n        })\n      Text('Whether to change a text?').fontSize(16).margin({ bottom: 10 })\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            this.controller?.close();\n            this.cancel();\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            this.inputValue = this.textValue;\n            this.controller?.close();\n            this.confirm();\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index1 {\n  @State ButtonText: string = '';\n  @State MAP_HEIGHT: string = '30%';\n  @State duration: number = 2500;\n  @State tips: string = '';\n  @State actionText: string = '';\n  controller: TextInputController = new TextInputController();\n  cancel: () => void = () => {\n  };\n  confirm: () => void = () => {\n  };\n  @State options: PromptOptions = {\n    icon: $r('sys.media.ohos_ic_public_fail'),\n    tip: '',\n    marginType: MarginType.DEFAULT_MARGIN,\n    actionText: '',\n    marginTop: 80,\n    isShown: true,\n  }\n  @State textValue: string = '';\n  @State inputValue: string = 'click me';\n  dialogController: CustomDialogController | undefined = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: this.onCancel,\n      confirm: this.onAccept,\n      textValue: $textValue,\n      inputValue: $inputValue,\n    }),\n    cancel: this.existApp,\n    autoCancel: true,\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false,\n  })\n\n  aboutToDisappear() {\n    this.dialogController = undefined; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  existApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button('Click Me')\n        .width('30%')\n        .margin({ top: 420 })\n        .zIndex(999)\n        .onClick(() => {\n          if (this.dialogController != undefined) {\n            this.dialogController.open();\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10248)/* ["default"] */.A) + "",
        width: "373",
        height: "398"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置symbol类型图标",
      children: "示例3（设置Symbol类型图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置PromptOptions的属性symbolStyle，展示了自定义Symbol类型图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ExceptionPrompt, MarginType, SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      ExceptionPrompt({\n        options: {\n          icon: $r('sys.symbol.house'),\n          tip: '异常提示',\n          marginType: MarginType.DEFAULT_MARGIN,\n          actionText: '设置网络',\n          marginTop: 80,\n          isShown: true,\n        },\n      })\n      ExceptionPrompt({\n        options: {\n          icon: $r('sys.symbol.house'),\n          symbolStyle: new SymbolGlyphModifier($r('sys.symbol.bell')).fontColor([Color.Red]),\n          tip: '异常提示',\n          marginType: MarginType.DEFAULT_MARGIN,\n          actionText: '设置网络',\n          marginTop: 200,\n          isShown: true,\n        },\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186388)/* ["default"] */.A) + "",
        width: "310",
        height: "185"
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
186388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960108-d30fd446252b7a79e6e98b82b223159a.png");

},
10248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440153-b0c6f2d3c32d31e82b045d158905337e.gif");

},
246583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
915612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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