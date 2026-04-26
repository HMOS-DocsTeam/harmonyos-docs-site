"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["635800"], {
828985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_syntactic_sugar_arkts_two_way_sync_arkts_two_way_sync_md_60d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-syntactic-sugar-arkts-two-way-sync-arkts-two-way-sync-md-60d.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_syntactic_sugar_arkts_two_way_sync_arkts_two_way_sync_md_60d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/arkts-two-way-sync","title":"$$语法：系统组件双向同步","description":"$$运算符为系统组件提供TS变量的引用，使得TS变量和系统组件的内部状态保持同步。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/arkts-two-way-sync.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"$$语法：系统组件双向同步","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-two-way-sync","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"applySync/flushUpdates/flushUIUpdates接口：同步刷新","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/"},"next":{"title":"!!语法：双向绑定","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/arkts-two-way-sync.md


const frontMatter = {
	title: '$$语法：系统组件双向同步',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-two-way-sync',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '$$语法：系统组件双向同步';

const assets = {

};



const toc = [{
  "value": "使用规则",
  "id": "使用规则",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "语法系统组件双向同步",
        children: "$$语法：系统组件双向同步"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$运算符为系统组件提供TS变量的引用，使得TS变量和系统组件的内部状态保持同步。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["内部状态的具体含义取决于组件。例如，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "组件的text参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用规则",
      children: "使用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前$$支持基础类型变量，当该变量使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
            children: "@State"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
            children: "@Link"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
            children: "@Prop"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
            children: "@Provide"
          }), "等状态管理V1装饰器装饰，或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
            children: "@Local"
          }), "等状态管理V2装饰器装饰时，变量值的变化会触发UI刷新。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前$$支持的组件："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "组件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "支持的参数/属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "起始API版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
                  children: "Checkbox"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "select"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
                  children: "CheckboxGroup"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selectAll"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
                  children: "DatePicker"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
                  children: "TimePicker"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem",
                  children: "MenuItem"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-container-panel/ts-container-panel",
                  children: "Panel"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "mode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
                  children: "Radio"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "checked"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
                  children: "Rating"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "rating"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
                  children: "Search"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer",
                  children: "SideBarContainer"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "showSideBar"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
                  children: "Slider"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper",
                  children: "Stepper"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "index"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
                  children: "Swiper"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "index"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
                  children: "Tabs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "index"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
                  children: "TextArea"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
                  children: "TextInput"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker",
                  children: "TextPicker"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected、value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
                  children: "Toggle"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "isOn"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
                  children: "AlphabetIndexer"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
                  children: "Select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected、value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
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
                children: "10"
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
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh",
                  children: "Refresh"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "refreshing"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
                  children: "GridItem"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
                  children: "ListItem"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "selected"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "方法的text参数为例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextInputExample {\n  @State text: string = '';\n  controller: TextInputController = new TextInputController();\n\n  build() {\n    Column({ space: 20 }) {\n      Text(this.text)\n      TextInput({ text: $$this.text, placeholder: 'input your word...', controller: this.controller })\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .caretColor(Color.Blue)\n        .width(300)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600907)/* ["default"] */.A) + "",
        width: "318",
        height: "233"
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
600907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957622-ebd5e96b617384f2bd67165de2b70cf2.gif");

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