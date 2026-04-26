"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["730853"], {
225494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_syntactic_sugar_arkts_new_binding_arkts_new_binding_md_98c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-syntactic-sugar-arkts-new-binding-arkts-new-binding-md-98c.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_syntactic_sugar_arkts_new_binding_arkts_new_binding_md_98c_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/arkts-new-binding","title":"!!语法：双向绑定","description":"在状态管理V1中，推荐使用$$实现系统组件的双向绑定。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/arkts-new-binding.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"!!语法：双向绑定","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-binding","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"$$语法：系统组件双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/"},"next":{"title":"V1-V2迁移概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/arkts-new-binding.md


const frontMatter = {
	title: '!!语法：双向绑定',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-binding',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '!!语法：双向绑定';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "自定义组件间双向绑定",
  "id": "自定义组件间双向绑定",
  "level": 3
}, {
  "value": "系统组件参数双向绑定",
  "id": "系统组件参数双向绑定",
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
    ol: "ol",
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
        id: "语法双向绑定",
        children: "!!语法：双向绑定"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
        children: "$$"
      }), "实现系统组件的双向绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态管理V2中，推荐使用!!语法糖统一处理双向绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(120630)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "!!语法从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["!!双向绑定语法，是一个语法糖方便开发者实现数据双向绑定，用于初始化子组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
        children: "@Event"
      }), "。其中@Event方法名需要声明为“$”+ @Param属性名，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果使用了!!双向绑定语法，表明父组件的变化会同步给子组件，子组件的变化也会同步给父组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父组件未使用!!时，变化是单向的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件间双向绑定",
      children: "自定义组件间双向绑定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Index中构造Star子组件，双向绑定父子组件中的value属性，并初始化子组件的@Param value和@Event $value。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Param与@Event装饰器配合使用的双向绑定语法糖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Child({ value: this.value, $value: (val: number) => { this.value = val; } })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述语法可以简化为!!双向绑定语法糖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Star({ value: this.value!! })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用@Param value与@Event $value语法实现自定义组件双向绑定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Local value: number = 0;\n\n  build() {\n    Column() {\n      Text(`${this.value}`)\n      // 点击Index中的Button改变value值，父组件Parent和子组件Child中的Text将同步更新。\n      Button(`change value in parent component`).onClick(() => {\n        this.value++;\n      })\n      // 使用@Param与@Event语法实现自定义组件双向绑定。\n      Child({ value: this.value, $value: (val: number) => { this.value = val; } })\n      // ...\n    // ···\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param value: number = 0;\n  @Event $value: (val: number) => void = (val: number) => {};\n\n  build() {\n    Column() {\n      Text(`${this.value}`)\n      // 点击子组件Child中的Button，调用`this.$value(10)`方法，父组件Parent和子组件Child中的Text将同步更新。\n      Button(`change value in child component`).onClick(() => {\n        this.$value(10);\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用!!语法糖实现自定义组件双向绑定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local value: number = 0;\n\n  build() {\n    Column() {\n      Text(`${this.value}`)\n      // 点击Index中的Button改变value值，父组件Index和子组件Star中的Text将同步更新。\n      Button(`change value in parent component`).onClick(() => {\n        this.value++;\n      })\n      // 使用!!语法糖实现自定义组件双向绑定。\n      Star({ value: this.value!! })\n      // ...\n    }\n  }\n}\n\n@ComponentV2\nstruct Star {\n  @Param value: number = 0;\n  @Event $value: (val: number) => void = (val: number) => {};\n\n  build() {\n    Column() {\n      Text(`${this.value}`)\n      // 点击子组件Star中的Button，调用`this.$value(10)`方法，父组件Index和子组件Star中的Text将同步更新。\n      Button(`change value in child component`).onClick(() => {\n        this.$value(10);\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "!!双向绑定语法不支持多层父子组件传递。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持与@Event混用。从API version 18开始，当使用!!双向绑定语法给子组件传递参数时，给对应的@Event方法传参会编译报错。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用3个或更多感叹号（!!!、!!!!、!!!!!等）时，不支持双向绑定功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统组件参数双向绑定",
      children: "系统组件参数双向绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "!!运算符为系统组件提供TS变量的引用，使得TS变量和系统组件的内部状态保持同步。添加方式是在变量名后添加，例如isShow!!。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["内部状态的含义由组件决定。例如：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11",
        children: "bindMenu"
      }), "组件的isShow参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'click show Menu';\nconst DOMAIN = 0xFF00;\n\n@Entry\n@ComponentV2\nstruct BindMenuInterface {\n  @Local isShow: boolean = false;\n\n  build() {\n    Column() {\n      Row() {\n        Text('click show Menu')\n          .bindMenu(this.isShow!!, // 双向绑定。\n            [\n              {\n                value: 'Menu1',\n                action: () => {\n                  hilog.info(DOMAIN, TAG, 'handle Menu1 click');\n                }\n              },\n              {\n                value: 'Menu2',\n                action: () => {\n                  hilog.info(DOMAIN, TAG, 'handle Menu2 click');\n                }\n              },\n            ])\n      }.height('50%')\n      \n      Text('isShow: ' + this.isShow).fontSize(18).fontColor(Color.Red)\n      Row() {\n        Button('Click')\n          .onClick(() => {\n            this.isShow = true;\n          })\n          .width(100)\n          .fontSize(20)\n          .margin(10)\n      }\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(275931)/* ["default"] */.A) + "",
        width: "382",
        height: "462"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前!!双向绑定支持基础类型变量，当该变量使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
            children: "@State"
          }), "等状态管理V1装饰器装饰，或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
            children: "@Local"
          }), "等状态管理V2装饰器装饰时，变量值的变化会触发UI刷新。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "支持的参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "起始API版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11",
                  children: "bindMenu"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "isShow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
                  children: "bindContextMenu"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "isShown"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#bindpopup",
                  children: "bindPopup"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "show"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "TextInput"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#textareaoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "TextArea"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#searchoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "Search"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
                  children: "BindSheet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "isShow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
                  children: "BindContentCover"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "isShow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer#sidebarwidth",
                  children: "SideBarContainer"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "sideBarWidth"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navbarwidth9",
                  children: "Navigation"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "navBarWidth"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#toggleoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "Toggle"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "isOn"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox#select",
                  children: "Checkbox"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "select"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup#selectall",
                  children: "CheckboxGroup"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selectAll"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio#checked",
                  children: "Radio"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "checked"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating#ratingoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "Rating"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "rating"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider#slideroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "Slider"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#selected",
                  children: "Select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#value",
                  children: "Select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem#selected",
                  children: "MenuItem"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "18"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
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
120630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
275931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477623-debbfeb3dab1e801089c6b6ba4ae2979.gif");

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