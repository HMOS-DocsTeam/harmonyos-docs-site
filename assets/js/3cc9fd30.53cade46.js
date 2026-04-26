"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["287283"], {
33917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_popup_property_ts_universal_attributes_menu_ts_universal_attributes_menu_md_3cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-popup-property-ts-universal-attributes-menu-ts-universal-attributes-menu-md-3cc.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_popup_property_ts_universal_attributes_menu_ts_universal_attributes_menu_md_3cc_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu","title":"菜单控制","description":"为组件绑定弹出式菜单，支持长按、点击或鼠标右键来触发菜单的弹出，菜单项以垂直列表形式显示。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"菜单控制","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-menu"},"sidebar":"ref","previous":{"title":"Tips控制","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-tips/ts-universal-attributes-tips"},"next":{"title":"无障碍属性","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu.md


const frontMatter = {
	title: '菜单控制',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-menu'
};
const contentTitle = '菜单控制';

const assets = {

};



const toc = [{
  "value": "bindMenu",
  "id": "bindmenu",
  "level": 2
}, {
  "value": "bindMenu11+",
  "id": "bindmenu11",
  "level": 2
}, {
  "value": "bindContextMenu8+",
  "id": "bindcontextmenu8",
  "level": 2
}, {
  "value": "bindContextMenu12+",
  "id": "bindcontextmenu12",
  "level": 2
}, {
  "value": "bindContextMenuWithResponse23+",
  "id": "bindcontextmenuwithresponse23",
  "level": 2
}, {
  "value": "MenuElement",
  "id": "menuelement",
  "level": 2
}, {
  "value": "MenuOptions10+",
  "id": "menuoptions10",
  "level": 2
}, {
  "value": "ContextMenuOptions10+",
  "id": "contextmenuoptions10",
  "level": 2
}, {
  "value": "MenuPreviewMode11+",
  "id": "menupreviewmode11",
  "level": 2
}, {
  "value": "ContextMenuAnimationOptions11+",
  "id": "contextmenuanimationoptions11",
  "level": 2
}, {
  "value": "AnimationRange11+",
  "id": "animationrange11",
  "level": 2
}, {
  "value": "HapticFeedbackMode18+",
  "id": "hapticfeedbackmode18",
  "level": 2
}, {
  "value": "BorderRadiusType19+",
  "id": "borderradiustype19",
  "level": 2
}, {
  "value": "MenuMaskType20+类型说明",
  "id": "menumasktype20类型说明",
  "level": 2
}, {
  "value": "ModalMode20+枚举说明",
  "id": "modalmode20枚举说明",
  "level": 2
}, {
  "value": "PreviewScaleMode20+枚举说明",
  "id": "previewscalemode20枚举说明",
  "level": 2
}, {
  "value": "AvailableLayoutArea20+枚举说明",
  "id": "availablelayoutarea20枚举说明",
  "level": 2
}, {
  "value": "MenuKeyboardAvoidMode23+枚举说明",
  "id": "menukeyboardavoidmode23枚举说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（弹出普通菜单）",
  "id": "示例1弹出普通菜单",
  "level": 3
}, {
  "value": "示例2（弹出自定义菜单）",
  "id": "示例2弹出自定义菜单",
  "level": 3
}, {
  "value": "示例3（长按弹出菜单）",
  "id": "示例3长按弹出菜单",
  "level": 3
}, {
  "value": "示例4（右键弹出指向型菜单）",
  "id": "示例4右键弹出指向型菜单",
  "level": 3
}, {
  "value": "示例5（长按弹出菜单的截图预览样式）",
  "id": "示例5长按弹出菜单的截图预览样式",
  "level": 3
}, {
  "value": "示例6（长按弹出菜单的自定义预览样式）",
  "id": "示例6长按弹出菜单的自定义预览样式",
  "level": 3
}, {
  "value": "示例7（设置状态变量弹出菜单）",
  "id": "示例7设置状态变量弹出菜单",
  "level": 3
}, {
  "value": "示例8（设置菜单和预览的动效）",
  "id": "示例8设置菜单和预览的动效",
  "level": 3
}, {
  "value": "示例9（设置symbol类型图标）",
  "id": "示例9设置symbol类型图标",
  "level": 3
}, {
  "value": "示例10（设置一镜到底动效）",
  "id": "示例10设置一镜到底动效",
  "level": 3
}, {
  "value": "示例11（自定义背景模糊效果参数）",
  "id": "示例11自定义背景模糊效果参数",
  "level": 3
}, {
  "value": "示例12（自定义背景效果参数）",
  "id": "示例12自定义背景效果参数",
  "level": 3
}, {
  "value": "示例13（设置一镜到底动效支持抬手打断）",
  "id": "示例13设置一镜到底动效支持抬手打断",
  "level": 3
}, {
  "value": "示例14（设置预览图边框圆角半径）",
  "id": "示例14设置预览图边框圆角半径",
  "level": 3
}, {
  "value": "示例15（bindMenu配置生命周期回调）",
  "id": "示例15bindmenu配置生命周期回调",
  "level": 3
}, {
  "value": "示例16（设置菜单蒙层）",
  "id": "示例16设置菜单蒙层",
  "level": 3
}, {
  "value": "示例17（bindMenu设置下拉菜单外描边样式）",
  "id": "示例17bindmenu设置下拉菜单外描边样式",
  "level": 3
}, {
  "value": "示例18（bindMenu传入带参数的CustomBuilder）",
  "id": "示例18bindmenu传入带参数的custombuilder",
  "level": 3
}, {
  "value": "示例19（根据触发方式弹出不同内容的菜单）",
  "id": "示例19根据触发方式弹出不同内容的菜单",
  "level": 3
}, {
  "value": "示例20（设置菜单避让软键盘）",
  "id": "示例20设置菜单避让软键盘",
  "level": 3
}, {
  "value": "示例21（设置菜单相对于绑定组件左上角的弹出位置）",
  "id": "示例21设置菜单相对于绑定组件左上角的弹出位置",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    responsetype: "responsetype",
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
        id: "菜单控制",
        children: "菜单控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件绑定弹出式菜单，支持长按、点击或鼠标右键来触发菜单的弹出，菜单项以垂直列表形式显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782831)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不支持在CustomBuilder中使用bindMenu和bindContextMenu弹出多级菜单。对此，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
            children: "Menu组件"
          }), "来实现多级菜单。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹出菜单的文本内容不支持长按选中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当窗口大小发生变化以及点击菜单内容区时，菜单自动隐藏。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果绑定菜单的组件是可拖动节点且未指定bindContextMenu的preview，菜单弹出时会显示拖拽预览图，且菜单选项和预览图不会相互避让。开发者可根据使用场景设置preview或将目标节点设置为不可拖动。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 12开始，菜单支持长按500ms弹出子菜单，支持按压态跟随手指移动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["仅支持使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
              children: "Menu组件"
            }), "且子组件包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem",
              children: "MenuItem"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitemgroup/ts-basic-components-menuitemgroup",
              children: "MenuItemGroup"
            }), "的场景。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#menupreviewmode11",
              children: "MenuPreviewMode"
            }), "设置为NONE的菜单。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "菜单最大宽度受设备所占栅格限制，即使设置宽度100%，也不会占满屏幕。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "菜单绑定的组件对象销毁时，菜单消失。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#bindcontextmenu8",
            children: "bindContextMenu"
          }), "仅支持在子窗中显示，", (0,jsx_runtime.jsx)(_components.a, {
            href: "#bindmenu",
            children: "bindMenu"
          }), "可以通过配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "#menuoptions10",
            children: "MenuOptions"
          }), "中的showInSubWindow属性设置是否在子窗中显示。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bindmenu",
      children: "bindMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定菜单，点击后弹出菜单。弹出的菜单项支持图标+文本排列以及自定义组件两种功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(268063)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口仅当content的入参类型为Array<MenuElement>时支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuelement",
              children: "MenuElement"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuoptions10",
              children: "MenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置弹出菜单的参数。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bindmenu11",
      children: "bindMenu11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定菜单，菜单的显隐通过控制绑定的isShow触发。弹出的菜单项支持图标+文本排列以及自定义组件两种功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250425)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口仅当content的入参类型为Array<MenuElement>时支持在", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isShow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持开发者通过状态变量控制显隐。菜单必须等待页面全部构建才能展示，因此不能在页面构建中设置为true，否则会导致显示位置及形状错误，该参数从API version 18开始支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "!!语法"
            }), "双向绑定变量。  true：弹出菜单；false：关闭菜单。  默认值：false"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuelement",
              children: "MenuElement"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuoptions10",
              children: "MenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置弹出菜单的参数。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bindcontextmenu8",
      children: "bindContextMenu8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["给组件绑定菜单，控制菜单显隐的触发方式为长按或右键点击，弹出的菜单项需自定义。若需通过代码逻辑控制菜单显隐，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindcontextmenu12",
        children: "bindContextMenu12+"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952347)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持在输入法类型窗口中使用bindContextMenu(默认子窗实现)，详情见输入法框架的约束与限制说明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#createpanel10-1",
          children: "createPanel"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "attributeModifier"
        }), "中调用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义菜单内容构造器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
              children: "ResponseType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单弹出条件，长按或者右键点击。不支持鼠标长按。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#contextmenuoptions10",
              children: "ContextMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置弹出菜单的参数。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bindcontextmenu12",
      children: "bindContextMenu12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定菜单，菜单的显隐通过控制绑定的isShown触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当isShown为true时，弹出菜单；为false时，隐藏菜单。菜单项支持自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单弹出位置仅由placement设置决定，与点击位置无关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(338991)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持在输入法类型窗口中使用bindContextMenu(默认子窗实现)，详情见输入法框架的约束与限制说明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#createpanel10-1",
          children: "createPanel"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "attributeModifier"
        }), "中调用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isShown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持开发者通过状态变量控制显隐。菜单必须等待页面全部构建完成后才能展示，如果在页面构建前或构建中设置为true，可能导致显示位置及形状错误、无法正常弹出显示等问题。不支持长按触发拖拽。该参数从API version 18开始支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "!!语法"
            }), "双向绑定变量。  true：弹出菜单；false：关闭菜单。  默认值：false"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义菜单内容构造器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#contextmenuoptions10",
              children: "ContextMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置弹出菜单的参数。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bindcontextmenuwithresponse23",
      children: "bindContextMenuWithResponse23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定菜单，控制菜单显隐的触发方式为长按或右键点击，弹出的菜单需自定义样式和内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(679853)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持在输入法类型窗口中使用bindContextMenuWithResponse（默认子窗实现），详情见输入法框架的约束与限制说明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#createpanel10-1",
          children: "createPanel"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "attributeModifier"
        }), "中调用。"]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuildertt23",
              children: "CustomBuilderT"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
              children: (0,jsx_runtime.jsx)(_components.responsetype, {})
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#contextmenuoptions10",
              children: "ContextMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置弹出菜单的参数。"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menuelement",
      children: "MenuElement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单项的图标、文本和交互信息。"
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
            children: ["菜单项文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon10+"
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
            children: ["菜单项图标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单条目是否可进行交互。  true：菜单条目可以进行交互；false：菜单条目不可以进行交互。  默认值：true  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击菜单项的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolIcon12+"
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
            children: ["设置菜单项图标。通过Modifier配置菜单项图标，若同时配置symbolIcon和icon的情况下，icon图标不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menuoptions10",
      children: "MenuOptions10+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["菜单项的信息，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "。"]
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
            children: "title"
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
            children: ["菜单标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在content设置为Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuelement",
              children: "MenuElement"
            }), "> 时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showInSubWindow11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否在子窗口显示菜单。  true：在子窗口显示菜单；false：不在子窗显示菜单。  默认值：2in1设备上为true，其他设备为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅对2in1设备生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contextmenuoptions10",
      children: "ContextMenuOptions10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单项的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单弹出位置的偏移量，不会导致菜单显示超出屏幕范围。  默认值：{ x: 0, y: 0 }，不支持设置百分比。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  菜单类型为相对父组件区域弹出时，自动根据菜单位置属性 (placement)将区域的宽或高计入偏移量中。  offset最终取值与placement设置值的关系参见表1：同时设置offset与placement时菜单的偏移位置。  未设置、异常值或者undefined时按默认{ x: 0, y: 0 }处理。若传入偏移量超出屏幕范围外，则会就近约束到屏幕范围内。  如果菜单调整了显示位置（与placement初始值主方向不一致），则偏移值 (offset) 失效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#placement8",
              children: "Placement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单组件优先显示的位置，当前位置显示不下时，会自动调整位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindmenu11",
              children: "bindMenu"
            }), "入参时，默认值为Placement.BottomLeft。  2. 作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenu8",
              children: "bindContextMenu8+"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenuwithresponse23",
              children: "bindContextMenuWithResponse23+"
            }), "入参时，默认效果为菜单跟随点击位置弹出。  3. 作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenu12",
              children: "bindContextMenu12+"
            }), "入参时，默认值为Placement.BottomLeft。  4. placement值设置为undefined、null或缺省时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableArrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示箭头。如果菜单的大小和位置不足以放置箭头时，不会显示箭头。  默认值：false，不显示箭头。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  enableArrow为true时，placement未设置或者值为非法值，默认在目标物上方显示（此时菜单默认位置与接口的关系参见表3：enableArrow为true且placement未设置或者值为非法值的菜单默认位置），否则按照placement的位置优先显示。当前位置显示不下时，会自动调整位置，enableArrow为undefined时，不显示箭头。bindContextMenu从API version 10开始支持该属性；bindMenu从API version 12开始支持该属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableHoverMode18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。  默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 如果菜单的弹出位置在悬停态折痕区域，菜单组件不会响应悬停态。  2. 2in1设备从API version 20开始生效。  3. 2in1设备仅在窗口瀑布模式下生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arrowOffset"
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
            children: ["箭头在菜单处的偏移。偏移量必须合法且转换为具体数值时大于0才会生效，另外该值生效时不会导致箭头超出菜单四周的安全距离。  默认值：0  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  箭头距菜单四周的安全距离为菜单圆角大小与箭头宽度的一半之和。  根据配置的placement来计算是在水平还是垂直方向上偏移。  箭头在菜单水平方向时，偏移量为箭头至最左侧箭头安全距离处的距离。箭头在菜单垂直方向时，偏移量为箭头至最上侧箭头安全距离处的距离。  根据配置的placement的不同，箭头展示的默认位置不同：  在菜单不发生避让的情况下，箭头最终位置与placement设置值的关系参见表2：同时设置arrowOffset与placement时菜单箭头的默认位置。  bindContextMenu从API version 10开始支持该属性；bindMenu从API version 12开始支持该属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preview11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menupreviewmode11",
              children: "MenuPreviewMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewAnimationOptions11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#contextmenuanimationoptions11",
              children: "ContextMenuAnimationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制长按预览的显示效果。  默认值：{ scale: [0.95, 1.1], transition: undefined, hoverScale: undefined }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  倍率设置参数小于等于0时，不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewBorderRadius19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#borderradiustype19",
              children: "BorderRadiusType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置预览图边框圆角半径。  默认值：16vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当水平方向上两个圆角半径之和的最大值超过预览图的宽度，或者垂直方向上两个圆角半径之和的最大值超过预览图的高度时，应采用预览图所能允许的最大圆角半径值。  圆角设置越大，圆角动画变化越快。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutRegionMargin13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
              children: "Margin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置预览图与菜单布局时距上下左右边界的最小边距。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅支持vp、px、fp、lpx、百分比。  当margin设置异常值或负值时，按默认值处理。  若preview为CustomBuilder，设置margin.left或margin.right时，预览图取消最大栅格的宽度限制。  注意应避免设置过大的margin导致布局区域变小，使得预览图和菜单无法正常布局。  当水平方向上margin之和超过布局最大宽度时，margin.left和margin.right均不生效，按默认值处理。  当垂直方向上margin之和超过布局最大高度时，margin.top和margin.bottom均不生效，按默认值处理。  边距默认值为左右边距16vp，上边距16vp, 下边距为4vp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewScaleMode20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#previewscalemode20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PreviewScaleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预览图缩放方式。  默认值：PreviewScaleMode.AUTO  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  布局空间不足时，控制预览图的缩放方式。未设置或设置undefined按照PreviewScaleMode.AUTO处理。当设置成PreviewScaleMode.CONSTANT时，如果预览图过大，剩余的空间不足以放置菜单时，菜单将重叠显示在预览图之下。  预览图的最大宽高不会超过预览图最大可布局区域（窗口大小减去上下左右的安全边距）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "availableLayoutArea20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#availablelayoutarea20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "AvailableLayoutArea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置预览图宽高的可布局区域，预览图的百分比依据此设置计算，最终可能因安全区限制而被压缩或裁剪。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  未设置或设置为undefined时，百分比依据窗口大小计算。若设置为AvailableLayoutArea.SAFE_AREA，预览图的可布局区域为窗口大小减去上下左右的安全边距。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单弹出后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单消失后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aboutToAppear11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单显示动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aboutToDisappear11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单退出动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor11+"
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
            children: ["菜单背板颜色。  默认值：Color.Transparent。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundBlurStyle11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单背板模糊材质。  默认值：BlurStyle.COMPONENT_ULTRA_THICK。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transition12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TransitionEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置菜单显示和退出的过渡效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  菜单退出动效过程中，进行横竖屏切换，菜单会避让。二级菜单不继承自定义动效。弹出过程可以点击二级菜单，退出动效执行过程不允许点击二级菜单。  详细描述见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TransitionEffect"
            }), "对象说明。  动效曲线使用弹簧曲线，在动效退出时，由于弹簧曲线的回弹震荡，菜单消失后有较长的拖尾，使得其他事件无法响应。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedborderradiuses12",
              children: "LocalizedBorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundBlurStyleOptions18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyleoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BackgroundBlurStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["背景模糊效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundEffect18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffectoptions11",
              children: "BackgroundEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["背景效果参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hapticFeedbackMode18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hapticfeedbackmode18",
              children: "HapticFeedbackMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单弹出时振动效果。  默认值：HapticFeedbackMode.DISABLED，菜单弹出时不振动。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  只有一级菜单可配置弹出时振动效果。  仅当用户启用系统触感反馈且在工程的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
              children: "module.json5"
            }), "中配置requestPermissions字段开启ohos.permission.VIBRATE振动权限时，方可生效。配置如下：    ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outlineWidth20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgeoutlinewidths11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "EdgeOutlineWidths"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outlineColor20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgecolors9",
              children: "EdgeColors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mask20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menumasktype20%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "MenuMaskType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "modalMode20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#modalmode20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ModalMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置菜单的模态模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  默认值：ModalMode.AUTO  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anchorPosition20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过设定水平与垂直偏移量，控制菜单相对于绑定组件左上角的弹出位置，与单独使用offset接口不同的是可以覆盖显示在绑定组件上。  默认值：{ x: undefined, y: undefined }，不支持设置百分比。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 当菜单处于预览状态时，设定的偏移量将无法生效。  2. 预设的placement对齐参数将不再生效。  3. 叠加offset参数的偏移量，最终确定菜单的精确弹出位置。  4. 当水平与垂直偏移量均设为负值时，菜单重置到Placement.BottomLeft进行显示。  5. 当水平或垂直偏移量存在undefined或null时，效果等同于不设置anchorPosition，此时预设的placement对齐参数可以生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单显示动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。  2. aboutToAppear是初始化时触发调用，onWillAppear是在动画执行前触发调用，onWillAppear在aboutToAppear之后执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidAppear20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单弹出后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。  2. 快速点击弹出，消失菜单时，存在onWillDisappear在onDidAppear前生效。  3. 当菜单入场动效未完成时关闭菜单，该回调不会触发。  4.onAppear和onDidAppear触发时机相同，onDidAppear在onAppear后生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单退出动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。  2. 快速点击弹出，消失菜单时，存在onWillDisappear在onDidAppear前生效。  3. aboutToDisappear和onWillDisappear触发时机相同，onWillDisappear在aboutToDisappear后生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDisappear20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单消失后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。  2. onDisappear和onDidDisappear触发时机相同，onDidDisappear在onDisappear后生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardAvoidMode23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menukeyboardavoidmode23%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "MenuKeyboardAvoidMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置菜单是否避让软键盘。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  未设置或设置为undefined时，按照MenuKeyboardAvoidMode.NONE处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minKeyboardAvoidDistance23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置菜单避让软键盘的最小距离。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  未设置、设置为负数或undefined时，按照8vp处理。仅在keyboardAvoidMode设置为避让软键盘时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1：同时设置offset与placement时菜单的偏移位置"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "placement设置的值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "菜单的偏移量说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.TopLeft、Placement.Top、Placement.TopRight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset的x为正数，菜单相对组件向右进行偏移，offset的y为正数，菜单相对组件向上进行偏移。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.BottomLeft、Placement.Bottom、Placement.BottomRight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset的x为正数，菜单相对组件向左进行偏移，offset的y为正数，菜单相对组件向下进行偏移。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.RightTop、Placement.Right、Placement.RightBottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset的x为正数，菜单相对组件向右进行偏移，offset的y为正数，菜单相对组件向下进行偏移。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2：同时设置arrowOffset与placement时菜单箭头的默认位置"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "placement设置的值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "菜单箭头的位置说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.Top、Placement.Bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "箭头显示在水平方向且默认居中，且距离菜单左侧边缘距离为箭头安全距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.Left、Placement.Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "箭头显示在垂直方向且默认居中，且距离菜单上侧距离为箭头安全距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.TopLeft、Placement.BottomLeft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "箭头默认显示在水平方向，且距离菜单左侧边缘距离为箭头安全距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.TopRight、Placement.BottomRight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "箭头默认显示在水平方向，且距离菜单右侧距离为箭头安全距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.LeftTop、Placement.RightTop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "箭头默认显示在垂直方向，且距离菜单上侧距离为箭头安全距离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.LeftBottom、Placement.RightBottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "箭头默认显示在垂直方向，且距离菜单下侧距离为箭头安全距离。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3：enableArrow为true且placement未设置或者值为非法值的菜单默认位置"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "菜单默认位置"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindmenu",
              children: "bindMenu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.BottomLeft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindmenu11",
              children: "bindMenu11+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.BottomLeft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenu8",
              children: "bindContextMenu8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.Top"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenu12",
              children: "bindContextMenu12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.BottomLeft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenuwithresponse23",
              children: "bindContextMenuWithResponse23+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placement.Top"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menupreviewmode11",
      children: "MenuPreviewMode11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单的预览样式。"
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
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不显示预览内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预览内容为触发长按悬浮菜单组件的截图。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contextmenuanimationoptions11",
      children: "ContextMenuAnimationOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长按预览时显示的样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "scale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#animationrange11",
              children: "AnimationRange"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["动画开始和结束时相对预览原图缩放比例。  默认值：[0.95, 1.1]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  缩放比例需要根据实际开发场景设置，建议设置值为小于预览图宽度或布局的最大限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transition12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TransitionEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置菜单显示和退出的过渡效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  在菜单退出动效过程中，横竖屏切换时，菜单会避让。二级菜单不继承自定义动效。弹出过程中可以点击二级菜单，但在退出动效执行过程中不允许点击二级菜单。  详细描述见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TransitionEffect"
            }), "对象说明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hoverScale12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#animationrange11",
              children: "AnimationRange"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在自定义预览图（preview为CustomBuilder类型）以及长按弹出（responseType指定为LongPress）菜单的场景下，hoverScale用于为绑定组件的截图浮起动画设置两个参数：相对于预览原图的起始与结束缩放比例。hoverScale设置后，浮起动画和预览图之间会有切换过渡动效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  倍率设置参数小于等于0时，不生效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bindcontextmenu12",
              children: "bindContextMenu12+"
            }), "场景下，不生效。  设置transition接口时，不生效。  使用此接口且同时使用scale接口时，scale接口起始值不生效。  为保障最佳体验，最终预览图尺寸不建议小于原组件截图尺寸。当前预览动效宽高会受组件截图和自定义预览大小影响，请根据实际使用情况自行保障展示效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hoverScaleInterruption20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在自定义预览图（preview为CustomBuilder类型）以及长按弹出（responseType指定为LongPress）菜单的场景下，且hoverScaleInterruption为true时，在触发拖拽效果前抬起手是否允许取消预览菜单弹出。true表示允许取消预览菜单弹出，false表示不允许取消预览菜单弹出。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  未设置hoverScale接口或设置了transition接口时，该参数不生效。长按时长不足以触发拖拽效果时抬起手，预览菜单hoverScale效果回退，预览菜单不弹出，并可触发原组件上绑定的click等手势事件。长按时长足以触发拖拽效果后抬起手，预览菜单正常弹出，并不再触发原组件上绑定的click等手势事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animationrange11",
      children: "AnimationRange11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AnimationRange<T>=[from: T, to: T]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画开始和结束时相对预览原图缩放比例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "[from: T, to: T]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "from表示动画开始时相对预览原图缩放比例，to表示动画结束时相对预览原图缩放比例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hapticfeedbackmode18",
      children: "HapticFeedbackMode18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单弹出时振动效果。"
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
            children: "DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单弹出时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单弹出时振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单振动效果跟随系统，当前为菜单有蒙层时振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borderradiustype19",
      children: "BorderRadiusType19+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["type BorderRadiusType = ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
        children: "Length"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
        children: "BorderRadiuses"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedborderradiuses12",
        children: "LocalizedBorderRadiuses"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "圆角类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长度类型，用于描述尺寸单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆角类型，用于描述组件边框圆角半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedborderradiuses12",
              children: "LocalizedBorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆角类型，用于描述组件边框圆角半径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menumasktype20类型说明",
      children: "MenuMaskType20+类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置蒙层样式。"
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
            children: "设置蒙层颜色。  默认值：$r('sys.color.ohos_id_color_mask_thin')"
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
            children: "设置蒙层模糊材质。  默认值：BlurStyle.BACKGROUND_THIN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modalmode20枚举说明",
      children: "ModalMode20+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子窗菜单的模态模式。"
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
            children: "自动模式，菜单组件在当前设备的默认行为。当前版本在所有设备上的效果等同于ModalMode.NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "除菜单自身区域外，其他区域均可传递事件，下层控件可响应事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TARGET_WINDOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单所在应用的窗口与菜单区域不可传递事件，其他区域可传递事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewscalemode20枚举说明",
      children: "PreviewScaleMode20+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览图的缩放方式。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预览图根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#placement8",
              children: "Placement"
            }), "自动调整预览图宽高及缩放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONSTANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预览图不缩放，大小保持不变。最终仍会受到安全区的限制而出现压缩、裁剪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAINTAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预览图缩放时保持宽高比。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "availablelayoutarea20枚举说明",
      children: "AvailableLayoutArea20+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览图宽高设置为百分比时的参考可布局区域大小。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAFE_AREA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参考可布局区域大小为窗口大小减去上下左右安全边距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menukeyboardavoidmode23枚举说明",
      children: "MenuKeyboardAvoidMode23+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单避让软键盘的模式。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "菜单不避让软键盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSLATE_AND_RESIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单避让软键盘。如果空间不足，会平移或重新调整菜单大小避让软键盘。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1弹出普通菜单",
      children: "示例1（弹出普通菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#menuelement",
        children: "MenuElement"
      }), "弹出普通菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MenuExample {\n  build() {\n    Column() {\n      Text('click for Menu')\n        .bindMenu([\n          {\n            value: 'Menu1',\n            action: () => {\n              console.info('handle Menu1 select');\n            }\n          },\n          {\n            value: 'Menu2',\n            action: () => {\n              console.info('handle Menu2 select');\n            }\n          },\n        ])\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(322173)/* ["default"] */.A) + "",
        width: "397",
        height: "231"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2弹出自定义菜单",
      children: "示例2（弹出自定义菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindMenu通过配置CustomBuilder弹出自定义菜单。同时，从API version 18开始支持通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的hapticFeedbackMode属性实现菜单弹出时的振动效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MenuExample {\n  @State listData: number[] = [0, 0, 0];\n\n  @Builder MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      ForEach(this.listData, (item:number, index) => {\n        Column() {\n          Row() {\n            // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n            Image($r(\"app.media.icon\")).width(20).height(20).margin({ right: 5 })\n            Text(`Menu${index as number + 1}`).fontSize(20)\n          }\n          .width('100%')\n          .height(30)\n          .justifyContent(FlexAlign.Center)\n          .align(Alignment.Center)\n          .onClick(() => {\n            console.info(`Menu${index as number + 1} Clicked!`);\n          })\n\n          if (index != this.listData.length - 1) {\n            Divider().height(10).width('80%').color('#ccc')\n          }\n        }.padding(5).height(40)\n      })\n    }.width(100)\n  }\n\n  build() {\n    Column() {\n      Text('click for menu')\n        .fontSize(20)\n        .margin({ top: 20 })\n        .bindMenu(this.MenuBuilder, { hapticFeedbackMode: HapticFeedbackMode.ENABLED })\n    }\n    .height('100%')\n    .width('100%')\n    .backgroundColor('#f0f0f0')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859312)/* ["default"] */.A) + "",
        width: "397",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3长按弹出菜单",
      children: "示例3（长按弹出菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindContextMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
        children: "responseType"
      }), ".LongPress弹出菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ContextMenuExample {\n  @Builder MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text('Test menu item 1')\n        .fontSize(20)\n        .width(100)\n        .height(50)\n        .textAlign(TextAlign.Center)\n      Divider().height(10)\n      Text('Test menu item 2')\n        .fontSize(20)\n        .width(100)\n        .height(50)\n        .textAlign(TextAlign.Center)\n    }.width(100)\n  }\n\n  build() {\n    Column() {\n      Text('LongPress for menu')\n    }\n    .width('100%')\n    .margin({ top: 5 })\n    .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(380447)/* ["default"] */.A) + "",
        width: "388",
        height: "285"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4右键弹出指向型菜单",
      children: "示例4（右键弹出指向型菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindContextMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
        children: "responseType"
      }), ".RightClick和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的enableArrow属性弹出指向型菜单。同时，从API version 18开始支持通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的hapticFeedbackMode属性实现菜单弹出时的振动效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct DirectiveMenuExample {\n  @Builder MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Text('Options')\n      Divider().strokeWidth(2).margin(5).color('#F0F0F0')\n      Text('Hide')\n      Divider().strokeWidth(2).margin(5).color('#F0F0F0')\n      Text('Exit')\n    }\n    .width(200)\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Column() {\n        Text(\"DirectiveMenuExample\")\n          .fontSize(20)\n          .width('100%')\n          .height(\"25%\")\n          .backgroundColor('#F0F0F0')\n          .textAlign(TextAlign.Center)\n          .bindContextMenu(this.MenuBuilder, ResponseType.RightClick, {\n            enableArrow: true,\n            placement: Placement.Bottom,\n            hapticFeedbackMode: HapticFeedbackMode.ENABLED\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(257145)/* ["default"] */.A) + "",
        width: "719",
        height: "710"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5长按弹出菜单的截图预览样式",
      children: "示例5（长按弹出菜单的截图预览样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindContextMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
        children: "responseType"
      }), ".LongPress和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中preview属性的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#menupreviewmode11",
        children: "MenuPreviewMode"
      }), "类型弹出菜单预览样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.icon\");\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Text('preview-image')\n            .width(200)\n            .height(100)\n            .textAlign(TextAlign.Center)\n            .margin(100)\n            .fontSize(30)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress,\n              { preview: MenuPreviewMode.IMAGE,\n                previewAnimationOptions: {scale: [0.8, 1.0]},\n              })\n            .backgroundColor(\"#ff3df2f5\")\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(110973)/* ["default"] */.A) + "",
        width: "555",
        height: "489"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6长按弹出菜单的自定义预览样式",
      children: "示例6（长按弹出菜单的自定义预览样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindContextMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
        children: "responseType"
      }), ".LongPress和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中preview属性的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
        children: "CustomBuilder"
      }), "类型弹出菜单自定义预览样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.icon\");\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  @Builder\n  MyPreview() {\n    Column() {\n      Image($r('app.media.icon'))\n        .width(200)\n        .height(200)\n    }\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Text('preview-builder')\n            .width(200)\n            .height(100)\n            .textAlign(TextAlign.Center)\n            .margin(100)\n            .fontSize(30)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress,\n              {\n                preview: this.MyPreview\n              })\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(44172)/* ["default"] */.A) + "",
        width: "326",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置状态变量弹出菜单",
      children: "示例7（设置状态变量弹出菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindcontextmenu12",
        children: "bindContextMenu"
      }), "通过配置isShown弹出菜单预览样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.icon\");\n  @State isShown: boolean = false;\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  @Builder\n  MyPreview() {\n    Column() {\n      Image($r('app.media.icon'))\n        .width(200)\n        .height(200)\n    }\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Text('preview-builder')\n            .width(200)\n            .height(100)\n            .textAlign(TextAlign.Center)\n            .margin(100)\n            .fontSize(30)\n            .bindContextMenu(this.isShown, this.MyMenu,\n              {\n                preview: this.MyPreview,\n                aboutToDisappear: ()=>{\n                  this.isShown = false;\n                }\n              })\n          Button('click')\n            .onClick(()=>{\n              this.isShown = true;\n            })\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24232)/* ["default"] */.A) + "",
        width: "326",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置菜单和预览的动效",
      children: "示例8（设置菜单和预览的动效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindContextMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的transition属性，实现自定义菜单以及菜单预览时的显示和退出动效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MenuExample {\n  @Builder\n  MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text('Menu item 1')\n        .fontSize(12)\n        .width(200)\n        .height(30)\n        .textAlign(TextAlign.Center)\n      Divider().height(10)\n      Text('Menu item 2')\n        .fontSize(12)\n        .width(100)\n        .height(30)\n        .textAlign(TextAlign.Center)\n    }.width(100)\n  }\n\n  @Builder\n  MyPreview() {\n    Column() {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.startIcon'))\n        .width(50)\n        .height(50)\n    }\n  }\n\n  build() {\n    Column() {\n      Button('LongPress bindContextMenu')\n        .margin({ top: 15 })\n        .bindContextMenu(\n          this.MenuBuilder,\n          ResponseType.LongPress, {\n          transition: TransitionEffect.OPACITY.animation({ duration: 4000, curve: Curve.Ease }).combine(\n            TransitionEffect.rotate({ z: 1, angle: 180 })),\n          preview: this.MyPreview,\n          previewAnimationOptions: {\n            scale: [0.8, 1.0],\n            transition: TransitionEffect.OPACITY.animation({ duration: 4000, curve: Curve.Ease }).combine(\n              TransitionEffect.rotate({ z: 1, angle: 180 }))\n          }\n        })\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390324)/* ["default"] */.A) + "",
        width: "457",
        height: "554"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置symbol类型图标",
      children: "示例9（设置symbol类型图标）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#menuelement",
        children: "MenuElement"
      }), "的symbolIcon弹出菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SymbolGlyphModifier } from '@kit.ArkUI';\n@Entry\n@Component\nstruct MenuExample {\n  @State symbolIconModifier1: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.ohos_photo')).fontSize('24vp');\n  @State symbolIconModifier2: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.ohos_photo')).fontSize('24vp');\n  build() {\n    Column() {\n      Text('click for Menu')\n    }\n    .width('100%')\n    .margin({ top: 5 })\n    .bindMenu([\n      {\n        value: 'Menu1',\n        symbolIcon:this.symbolIconModifier1,\n        action: () => {\n          console.info('handle Menu1 select');\n        }\n      },\n      {\n        value: 'Menu2',\n        symbolIcon:this.symbolIconModifier2,\n        action: () => {\n          console.info('handle Menu2 select');\n        }\n      },\n    ])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517529)/* ["default"] */.A) + "",
        width: "496",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10设置一镜到底动效",
      children: "示例10（设置一镜到底动效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindContextMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中previewAnimationOptions属性的hoverScale，实现组件截图到自定义预览图的一镜到底过渡动效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.xxx')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.app_icon\");\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  @Builder\n  MyPreview() {\n    Column() {\n      Image($r('app.media.example'))\n        .width(200)\n        .height(200)\n    }\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Image($r('app.media.example'))\n            .width(100)\n            .height(100)\n            .margin(100)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress,\n              {\n                preview: this.MyPreview,\n                previewAnimationOptions: {\n                  hoverScale: [1.0, 0.95]\n                }\n              })\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(70687)/* ["default"] */.A) + "",
        width: "383",
        height: "713"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11自定义背景模糊效果参数",
      children: "示例11（自定义背景模糊效果参数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的backgroundBlurStyleOptions属性，实现了自定义菜单背景模糊效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，在ContextMenuOptions中新增了backgroundBlurStyleOptions属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MenuExample {\n  build() {\n    Stack() {\n      // $r('app.media.bg')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.bg'))\n      Column() {\n        Text('click for Menu')\n          .bindMenu([\n            {\n              value: 'Menu1',\n              action: () => {\n                console.info('handle Menu1 select')\n              }\n            },\n            {\n              value: 'Menu2',\n              action: () => {\n                console.info('handle Menu2 select')\n              }\n            },\n          ],\n            {\n              backgroundBlurStyle: BlurStyle.BACKGROUND_THIN,\n              backgroundBlurStyleOptions: {\n                colorMode: ThemeColorMode.LIGHT,\n                blurOptions: { grayscale: [20, 20] },\n                policy: BlurStyleActivePolicy.ALWAYS_ACTIVE,\n                adaptiveColor: AdaptiveColor.AVERAGE,\n                scale: 1\n              },\n            }\n          )\n      }\n      .width('100%')\n      .margin({ top: 5 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(976487)/* ["default"] */.A) + "",
        width: "360",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12自定义背景效果参数",
      children: "示例12（自定义背景效果参数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为bindMenu通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的backgroundEffect属性，实现了自定义菜单背景效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，在ContextMenuOptions中新增了backgroundEffect属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MenuExample {\n  build() {\n    Stack() {\n      // $r('app.media.bg')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.bg'))\n      Column() {\n        Text('click for Menu')\n          .bindMenu([\n            {\n              value: 'Menu1',\n              action: () => {\n                console.info('handle Menu1 select');\n              }\n            },\n            {\n              value: 'Menu2',\n              action: () => {\n                console.info('handle Menu2 select');\n              }\n            },\n          ],\n            {\n              backgroundBlurStyle: BlurStyle.BACKGROUND_THIN,\n              backgroundEffect: {\n                radius: 60,\n                saturation: 10,\n                brightness: 1,\n                color: '#661A1A1A',\n                adaptiveColor: AdaptiveColor.AVERAGE,\n                blurOptions:{grayscale:[20,20]}\n              }\n            }\n          )\n      }\n      .width('100%')\n      .margin({ top: 5 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(20510)/* ["default"] */.A) + "",
        width: "360",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13设置一镜到底动效支持抬手打断",
      children: "示例13（设置一镜到底动效支持抬手打断）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过为bindContextMenu配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的previewAnimationOptions属性实现了一镜到底过渡动效的同时，再配置hoverScaleInterruption控制是否允许长按抬手取消菜单弹出。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，在previewAnimationOptions的类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuanimationoptions11",
        children: "ContextMenuAnimationOptions"
      }), "中新增了hoverScaleInterruption属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.xxx')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.app_icon\");\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  @Builder\n  MyPreview() {\n    Column() {\n      Image($r('app.media.example'))\n        .width(300)\n        .height(200)\n    }\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Image($r('app.media.example'))\n            .width(100)\n            .height(100)\n            .margin(100)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress,\n              {\n                preview: this.MyPreview,\n                previewAnimationOptions: {\n                  hoverScale: [1.0, 0.8],\n                  hoverScaleInterruption: true\n                }\n              })\n            .onClick(() => {\n              console.info('trigger onClick')\n            })\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(353624)/* ["default"] */.A) + "",
        width: "387",
        height: "499"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14设置预览图边框圆角半径",
      children: "示例14（设置预览图边框圆角半径）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过bindContextMenu配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
        children: "responseType"
      }), ".LongPress来实现功能。同时，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中配置preview属性的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#menupreviewmode11",
        children: "MenuPreviewMode"
      }), "类型来设置菜单预览样式。最后，通过设置previewBorderRadius来实现预览图边框的圆角半径。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中新增了previewBorderRadius属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.startIcon\");\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Text('preview-image')\n            .width(200)\n            .height(100)\n            .textAlign(TextAlign.Center)\n            .margin(100)\n            .fontSize(30)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress,\n              {\n                preview: MenuPreviewMode.IMAGE,\n                previewBorderRadius: 50\n              })\n            .backgroundColor(\"#ff7fcdff\")\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507637)/* ["default"] */.A) + "",
        width: "423",
        height: "392"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15bindmenu配置生命周期回调",
      children: "示例15（bindMenu配置生命周期回调）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例为bindMenu配置生命周期回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中新增了onWillAppear、onDidAppear、onWillDisappear和onDidDisappear属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r(\"app.media.startIcon\");\n  @State isShown: boolean = false;\n  @State textColor: Color = Color.Black;\n  @State blueColor: Color = Color.Blue;\n  @State onWillAppear: boolean = false;\n  @State onDidAppear: boolean = false;\n  @State onWillDisappear: boolean = false;\n  @State onDidDisappear: boolean = false;\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  build() {\n    Column() {\n      Column({ space: 30 }) {\n        Text('onWillAppear').fontColor(this.onWillAppear ? this.blueColor : this.textColor)\n        Text('onDidAppear').fontColor(this.onDidAppear ? this.blueColor : this.textColor)\n        Text('onWillDisappear').fontColor(this.onWillDisappear ? this.blueColor : this.textColor)\n        Text('onDidDisappear').fontColor(this.onDidDisappear ? this.blueColor : this.textColor)\n        Button('click')\n          .onClick(() => {\n            this.isShown = true;\n          })\n          .width(100)\n          .height(50)\n        Text('callback')\n          .width(200)\n          .height(100)\n          .textAlign(TextAlign.Center)\n          .fontSize(20)\n          .fontColor(this.textColor)\n          .bindMenu(this.isShown, this.MyMenu,\n            {\n              onWillAppear: () => {\n                console.info(\"menu cycle life onWillAppear\");\n                this.onWillAppear = true;\n              },\n              onDidAppear: () => {\n                console.info(\"menu cycle life onDidAppear\");\n                this.onDidAppear = true;\n              },\n              onWillDisappear: () => {\n                this.isShown = false;\n                console.info(\"menu cycle life onWillDisappear\");\n                this.onWillDisappear = true;\n              },\n              onDidDisappear: () => {\n                console.info(\"menu cycle life onDidDisappear\");\n                this.onDidDisappear = true;\n              }\n            })\n      }\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(265952)/* ["default"] */.A) + "",
        width: "511",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16设置菜单蒙层",
      children: "示例16（设置菜单蒙层）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例为bindMenu通过配置mask属性设置菜单蒙层。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中新增了mask属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State startIconModifier: SymbolGlyphModifier = new SymbolGlyphModifier($r('sys.symbol.ohos_star'))\n  @State isShow: boolean = false;\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({\n        symbolStartIcon: this.startIconModifier,\n        content: \"新建文件夹\",\n      })\n      MenuItem({\n        symbolStartIcon: this.startIconModifier,\n        content: \"排序方式\",\n      })\n      MenuItem({\n        symbolStartIcon: this.startIconModifier,\n        content: \"查看方式\",\n      })\n    }\n  }\n\n  build() {\n    Button('bindMenu')\n      .position({ top: 80, left: 80 })\n      .onClick(() => {\n        this.isShow = !this.isShow;\n      })\n      .bindMenu(this.isShow, this.MyMenu, {\n        mask: { color: 'rgba(23,169,141,0.5)', backgroundBlurStyle: BlurStyle.Thin }\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(34039)/* ["default"] */.A) + "",
        width: "527",
        height: "746"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17bindmenu设置下拉菜单外描边样式",
      children: "示例17（bindMenu设置下拉菜单外描边样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例为bindMenu通过配置outlineWidth和outlineColor属性设置下拉菜单外描边样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中新增了outlineWidth和outlineColor属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ content: \"菜单选项\" })\n      MenuItem({ content: \"菜单选项\" })\n      MenuItem({ content: \"菜单选项\" })\n    }.width(200)\n  }\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Text('click for Menu')\n            .width(200)\n            .height(100)\n            .textAlign(TextAlign.Center)\n            .margin(100)\n            .fontSize(30)\n            .bindMenu(this.MyMenu,\n              {\n                outlineWidth: '5vp',\n                outlineColor: Color.Blue\n              })\n        }\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#F0F2F5')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(622479)/* ["default"] */.A) + "",
        width: "270",
        height: "250"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18bindmenu传入带参数的custombuilder",
      children: "示例18（bindMenu传入带参数的CustomBuilder）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过在bindMenu中传入带参数的CustomBuilder来配置菜单的具体属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State menuItemList: string[] = ['新建', '历史', '书签', '设置']\n\n  @Builder\n  MenuBuilder(itemList: string[]) {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      ForEach(itemList, (item: string, index) => {\n        Row() {\n          Text(item)\n            .width('100%')\n            .height(32)\n            .fontWeight(400)\n            .fontSize(14)\n            .fontColor(Color.Black)\n            .textAlign(TextAlign.Center)\n        }\n        .onClick(() => {\n          console.info('handle' + item + 'Clicked!')\n        })\n        if (index != itemList.length - 1) {\n          Divider().height(10).width('80%').color('#ccc')\n        }\n      })\n    }\n    .width(100)\n  }\n\n  build() {\n    Column() {\n      Text('click for Menu')\n        .bindMenu(this.MenuBuilder(this.menuItemList))\n    }\n    .height('100%')\n    .width('100%')\n    .backgroundColor('#f0f0f0')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667871)/* ["default"] */.A) + "",
        width: "244",
        height: "245"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19根据触发方式弹出不同内容的菜单",
      children: "示例19（根据触发方式弹出不同内容的菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindcontextmenuwithresponse23",
        children: "bindContextMenuWithResponse"
      }), "中传入CustomBuilderT<ResponseType>给目标组件绑定菜单，组件会在UI函数中返回弹出菜单的触发方式，开发者可根据返回的触发方式实现差异化显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增了bindContextMenuWithResponse的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State longPress: string = 'LONG_PRESS';\n  @State rightClick: string = 'RIGHT_CLICK';\n\n  @Builder\n  MenuBuilderWithParam(type: ResponseType) {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text('Current ResponseType = ' + (type === 0 ? 'RIGHT_CLICK' : 'LONG_PRESS'))\n      Divider().height(10)\n      if (type === ResponseType.LongPress) {\n        Text('Item: ' + this.longPress)\n          .fontSize(20)\n          .width(200)\n          .height(20)\n          .textAlign(TextAlign.Center)\n      }\n      if (type === ResponseType.RightClick) {\n        Text('Item: ' + this.rightClick)\n          .fontSize(20)\n          .width(200)\n          .height(20)\n          .textAlign(TextAlign.Center)\n      }\n    }\n  }\n\n  build() {\n    Stack() {\n      Button('BindContextMenu长按和右键点击触发菜单')\n        .bindContextMenuWithResponse(this.MenuBuilderWithParam, {\n          enableArrow: true,\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .backgroundColor('#f0f0f0')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(634448)/* ["default"] */.A) + "",
        width: "365",
        height: "130"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20设置菜单避让软键盘",
      children: "示例20（设置菜单避让软键盘）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过在bindMenu中配置keyboardAvoidMode设置菜单避让软键盘，通过minKeyboardAvoidDistance设置菜单避让软键盘的最小距离。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中新增keyboardAvoidMode、minKeyboardAvoidDistance属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { inputMethod } from '@kit.IMEKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  private inputController: inputMethod.InputMethodController = inputMethod.getController();\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ content: 'MenuItemContent' })\n      MenuItem({ content: 'MenuItemContent' })\n      MenuItem({ content: 'MenuItemContent' })\n      MenuItem({ content: 'MenuItemContent' })\n      MenuItem({ content: 'MenuItemContent' })\n    }\n  }\n\n  build() {\n    RelativeContainer() {\n      Button('Click Show Menu')\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center },\n        })\n        .bindMenu(this.MyMenu, {\n          keyboardAvoidMode: MenuKeyboardAvoidMode.TRANSLATE_AND_RESIZE,\n          minKeyboardAvoidDistance: LengthMetrics.vp(20)\n        })\n        .onClick(() => {\n          setTimeout(() => {\n            this.attachAndListener()\n          }, 2000)\n        })\n    }\n    .height('100%')\n    .width('100%')\n\n  }\n\n  async attachAndListener() {\n    focusControl.requestFocus('Index')\n    try {\n      await this.inputController.attach(true, {\n        inputAttribute: {\n          textInputType: inputMethod.TextInputType.TEXT,\n          enterKeyType: inputMethod.EnterKeyType.SEARCH\n        }\n      })\n    } catch (err) {\n      console.error('Fail to attach')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193259)/* ["default"] */.A) + "",
        width: "259",
        height: "520"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例21设置菜单相对于绑定组件左上角的弹出位置",
      children: "示例21（设置菜单相对于绑定组件左上角的弹出位置）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contextmenuoptions10",
        children: "ContextMenuOptions"
      }), "中的anchorPosition属性，实现了菜单相对于绑定组件左上角弹出的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，在ContextMenuOptions中新增了anchorPosition属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  private iconStr: ResourceStr = $r('app.media.startIcon');\n  @State isShown: boolean = false;\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: '菜单选项' })\n      MenuItem({ startIcon: this.iconStr, content: '菜单选项' })\n      MenuItem({ startIcon: this.iconStr, content: '菜单选项' })\n    }\n  }\n\n  @State menuAnchorPositionIndex: number = 0;\n  private menuAnchorPositionArray: Array<Position> = new Array<Position>(\n    { x: 0, y: 0 },\n    { x: 150, y: 0 },\n    { x: 0, y: 150 },\n    { x: 150, y: 150 },\n  );\n\n  build() {\n    Column({ space: 50 }) {\n      Column() {\n        Column() {\n          Text('Test Menu AnchorPosition')\n            .width(500)\n            .height(100)\n            .textAlign(TextAlign.Center)\n            .margin(100)\n            .fontSize(30)\n            .bindContextMenu(this.isShown, this.MyMenu,\n              {\n                anchorPosition: this.menuAnchorPositionArray[this.menuAnchorPositionIndex],\n                aboutToDisappear: () => {\n                  this.isShown = false;\n                }\n              })\n          Button('click')\n            .margin(5)\n            .onClick(() => {\n              this.isShown = true;\n            })\n\n          Button('AnchorPosition change')\n            .margin(5)\n            .onClick(() => {\n              this.menuAnchorPositionIndex++;\n              if (this.menuAnchorPositionIndex >= this.menuAnchorPositionArray.length) {\n                this.menuAnchorPositionIndex = 0;\n              }\n            })\n          Text('Current x: ' + this.menuAnchorPositionArray[this.menuAnchorPositionIndex]?.x +\n            ' , y: ' + this.menuAnchorPositionArray[this.menuAnchorPositionIndex]?.y)\n        }\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530106)/* ["default"] */.A) + "",
        width: "376",
        height: "360"
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
322173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479553-5e824f2807a862f9d63a49c166d67c60.gif");

},
265952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799910-df23e9323a1acfd579da5a6064c7dbe9.gif");

},
24232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799906-9ee9689de9b150a812650bcfe048b8fd.png");

},
667871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479561-e1a28c53c7c2c503a692bcef55771e9a.gif");

},
679853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
250425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
976487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799908-6e5db0b7ba4496f933b8253cc5c2aa58.png");

},
622479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959560-e183b708081d393453864aa7329da686.png");

},
952347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
34039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439605-46d74439e297c1101c06c0a6ad43e54d.jpg");

},
634448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799912-c6f28bdd219fb006cdd7a17fa0dc4b37.gif");

},
353624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959558-84c32a7062e945014f1407883c04072e.gif");

},
193259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439607-617b01901799c9d076c8144237436d67.gif");

},
44172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799906-9ee9689de9b150a812650bcfe048b8fd.png");

},
390324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439601-43820358edb7e80ff25d8143b6623213.gif");

},
859312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799904-986fce73734535c4797bb2349a07e0a4.gif");

},
380447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439599-b55757cf917622439cab51be47b476fd.gif");

},
268063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
70687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479557-199c27634dd3cc7dc9473b8ed64eb9fc.gif");

},
530106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959562-50224a7d2878c2e5511901aa54e77054.gif");

},
782831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
20510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439603-20603884873a9fde7798d4c01872482d.png");

},
257145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959554-08d528dba53a7584e47d71916a9ec778.png");

},
507637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
517529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959556-376d209c63421f08998d6203b232380c.png");

},
338991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
110973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479555-b621745ae3518fb6aafb47848543dc49.png");

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