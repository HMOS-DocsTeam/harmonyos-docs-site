"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["235626"], {
721716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_support_accessibility_friendliness_arkui_support_for_aging_adaptation_arkui_support_for_aging_adaptation_md_544_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-support-accessibility-friendliness-arkui-support-for-aging-adaptation-arkui-support-for-aging-adaptation-md-544.json
var site_docs_arkui_arkts_ui_development_arkts_support_accessibility_friendliness_arkui_support_for_aging_adaptation_arkui_support_for_aging_adaptation_md_544_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/arkui-support-for-aging-adaptation","title":"支持适老化","description":"系统字体被放大后，应用应确保整体布局不出现错乱，组件不出现重叠。可以根据业务需要限制跟随的字体最大档位、改变布局来更好的适配更大字体等。本文旨在指导应用如何跟随系统字体大小和跟随到的最大倍数。","source":"@site/docs/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/arkui-support-for-aging-adaptation.md","sourceDirName":"arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation","slug":"/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"支持适老化","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkui-support-for-aging-adaptation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"无障碍开发指导","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/"},"next":{"title":"应用深浅色适配","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/arkui-support-for-aging-adaptation.md


const frontMatter = {
	title: '支持适老化',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkui-support-for-aging-adaptation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持适老化';

const assets = {

};



const toc = [{
  "value": "应用适配规则",
  "id": "应用适配规则",
  "level": 2
}, {
  "value": "应用适配适老化大字体",
  "id": "应用适配适老化大字体",
  "level": 2
}, {
  "value": "适配适老化的系统组件及触发方式",
  "id": "适配适老化的系统组件及触发方式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "支持适老化",
        children: "支持适老化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统字体被放大后，应用应确保整体布局不出现错乱，组件不出现重叠。可以根据业务需要限制跟随的字体最大档位、改变布局来更好的适配更大字体等。本文旨在指导应用如何跟随系统字体大小和跟随到的最大倍数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用适配规则",
      children: "应用适配规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在系统使用1.75倍及以上的大字体时，页面布局不得错乱，组件不得叠加，文字不得截断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图标及图片不会随着字体的变大而变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面中不重要的内容字体，可采用不跟随系统字体变化或限制字体最大尺寸的方法进行布局。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若应用跟随系统字体增大后导致页面内容位置挤压或截断等问题，可采取将X轴扩展至Y轴的措施，例如将左右布局调整为上下布局。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%80%82%E9%85%8D%E9%80%82%E8%80%81%E5%8C%96%E7%9A%84%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%8A%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F",
          children: "系统组件"
        }), "已针对适老化大字体进行了单独适配，尽可能在开发过程中使用系统组件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用适配适老化大字体",
      children: "应用适配适老化大字体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启路径"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“设置-辅助功能-关怀模式-放大显示”中开启。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各档位对应参数："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "档位"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "字体大小"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "字体粗细"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "标准"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1倍"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "大1档"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.15倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1倍"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "大2档"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.3倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.1倍"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "大3档"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.45倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.1倍"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "大4档"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.75倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.25倍"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "大5档"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2.0倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.25倍"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "大6档"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3.2倍"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1.25倍"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适配方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前默认应用不跟随系统字体的变化。如需跟随系统字体变化，并设置最大跟随变化的倍数，请按以下步骤操作："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
                children: "app.json5配置文件"
              }), "适配。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过配置\"configuration\": \"$profile:configuration\"，指向base/profile/configuration.json文件；"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"app\": {\n    \"bundleName\": \"com.example.myapplication\",\n    \"vendor\": \"example\",\n    \"versionCode\": 1000000,\n    \"versionName\": \"1.0.0\",\n    \"icon\": \"$media:app_icon\",\n    \"label\": \"$string:app_name\",\n    \"configuration\": \"$profile:configuration\"\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在base文件目录下新增profile文件夹，并在此目录下新增 configuration.json 文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置\"fontSizeScale\": \"followSystem\"表示该应用的字体大小将根据系统设置进行缩放，\"fontSizeMaxScale\": \"1.3\"表示应用字体大小随系统变化的最大缩放比例为1.3倍。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"configuration\": {\n    \"fontSizeScale\": \"followSystem\",\n    \"fontSizeMaxScale\": \"1.3\"\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若应用需适应系统字体大小的变化，最大应调整至1.75倍，但部分组件可调整至2倍。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "首先需要按照上述步骤配置\"fontSizeMaxScale\"为1.75。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"configuration\": {\n    \"fontSizeScale\": \"followSystem\",\n    \"fontSizeMaxScale\": \"1.75\"\n  }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "然后，为Text添加maxFontScale属性，传递参数为2，表示该Text组件跟随系统字体大小变化的最大倍数为2倍。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Text('hello world!')\n  .fontSize($r('sys.float.Body_M'))\n  .maxFontScale(2)\n  .fontColor($r('sys.color.font_secondary'))\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当Text组件配置了maxFontScale属性时，将采用组件设置的最大放大倍数，而非系统默认的最大放大倍数。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若应用不需要跟随系统字体大小变化，无需配置。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取字体大小和粗细。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["生命周期回调方法", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-environmentcallback/js-apis-app-ability-environmentcallback#onconfigurationupdated",
                children: "onConfigurationUpdated"
              }), "的config参数可接收字体大小（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration#configuration",
                children: "fontSizeScale"
              }), "）与字体粗细（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration#configuration",
                children: "fontWeightScale"
              }), "）。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "注册系统环境变化的监听后，在系统环境变化时可触发回调。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用冷启动查询系统字体大小档位。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet fontSizeScale: number = context.config?.fontSizeScale ?? 1;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配适老化的系统组件及触发方式",
      children: "适配适老化的系统组件及触发方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适老化提供了一种通过鼠标或手指长按的方法来放大所选区域或组件，即如果系统字体大小大于1倍，当用户使用鼠标或手指长按装配了适老化方法的组件，需要从所选区域的组件中提取数据，并放入另一个弹窗组件中展示。该方法的目的在于使组件和组件内部数据（子组件）放大，同时将整体组件在屏幕中央显示，让用户能够更好的观察该组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适老化规则"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于在系统字体大于1倍时，组件并没有默认放大，需要通过配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#configuration%E6%A0%87%E7%AD%BE",
            children: "configuration标签"
          }), "，实现组件放大的适老化功能。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何开启适老化"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入手机设置，点击辅助功能，开启关怀模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适老化操作"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在已经支持适老化能力的组件上长按组件，能够触发弹窗，当用户释放时，适老化操作结束。当设置系统字体大于1倍时，组件自动放大，当系统字体恢复至1倍时组件恢复正常状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适老化对象"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发适老化操作并提供数据的组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适老化弹窗目标"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可接收并处理适老化数据的组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗限制"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当用户将系统字体设置为2倍以上时，弹窗内容包括icon和文字的放大倍数固定为2倍。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "联合其他能力"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适老化能力可以适配其他能力（如：滑动拖拽）。底部页签（tabBar）组件在触发适老化时，如果用户滑动手指或鼠标可以触发底部页签其他子组件的适老化功能。"
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "触发方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "组件名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "长按系统组件触发"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer",
              children: "SideBarContainer"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#tabbar9",
              children: "底部页签（tabBar）"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#navdestination10",
              children: "NavDestination"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
              children: "Tabs"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置系统字体默认放大"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-calendarpicker-dialog/ts-methods-calendarpicker-dialog",
              children: "PickerDialog"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
              children: "Menu"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper",
              children: "Stepper"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
              children: "BindSheet"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
              children: "TextInput"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
              children: "TextArea"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
              children: "Search"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu",
              children: "SelectionMenu"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip",
              children: "Chip"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog",
              children: "Dialog"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
              children: "Slider"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
              children: "Progress"
            }), "， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
              children: "Badge"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SideBarContainer组件通过长按控制按钮触发适老化弹窗。在系统字体为1倍的情况下，长按控制按钮不能弹窗。在系统字体大于1倍的情况下，长按控制按钮可以弹窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SideBarContainerExample {\n  @State currentFontSizeScale: number = 1\n  normalIcon: Resource = $r(\"app.media.icon\")\n  selectedIcon: Resource = $r(\"app.media.icon\")\n  @State arr: number[] = [1, 2, 3]\n  @State current: number = 1\n  @State title: string = 'Index01';\n\n  build() {\n    SideBarContainer(SideBarContainerType.Embed) {\n      Column() {\n        ForEach(this.arr, (item: number) => {\n          Column({ space: 5 }) {\n            Image(this.current === item ? this.selectedIcon : this.normalIcon).width(64).height(64)\n            Text(\"0\" + item)\n              .fontSize(25)\n              .fontColor(this.current === item ? '#0A59F7' : '#999')\n              .fontFamily('source-sans-pro,cursive,sans-serif')\n          }\n          .onClick(() => {\n            this.current = item;\n            this.title = \"Index0\" + item;\n          })\n        }, (item: string) => item)\n      }.width('100%')\n      .justifyContent(FlexAlign.SpaceEvenly)\n      .backgroundColor($r('sys.color.mask_fifth'))\n    }\n    .controlButton({\n      icons: {\n        hidden: $r('sys.media.ohos_ic_public_drawer_open_filled'),\n        shown: $r('sys.media.ohos_ic_public_drawer_close')\n      }\n    })\n    .sideBarWidth(150)\n    .minSideBarWidth(50)\n    .maxSideBarWidth(300)\n    .minContentWidth(0)\n    .onChange((value: boolean) => {\n      console.info('status:' + value)\n    })\n    .divider({ strokeWidth: '1vp', color: Color.Gray, startMargin: '4vp', endMargin: '4vp' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换系统字体前后长按已经支持适老化能力的组件，有如下效果："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "系统字体为一倍（适老化能力开启前）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "系统字体为1.75倍（适老化能力开启后）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-textpicker-dialog/ts-methods-textpicker-dialog",
        children: "TextPickerDialog"
      }), "组件通过设置系统字体大小触发适老化弹窗。在系统字体为1倍的情况下，适老化不触发；在系统字体大于1倍的情况下，适老化触发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextPickerExample {\n  private select: number | number[] = 0;\n  private cascade: TextCascadePickerRangeContent[] = [\n    {\n      text: '辽宁省',\n      children: [{ text: '沈阳市', children: [{ text: '沈河区' }, { text: '和平区' }, { text: '浑南区' }] },\n        { text: '大连市', children: [{ text: '中山区' }, { text: '金州区' }, { text: '长海县' }] }]\n    },\n    {\n      text: '吉林省',\n      children: [{ text: '长春市', children: [{ text: '南关区' }, { text: '宽城区' }, { text: '朝阳区' }] },\n        { text: '四平市', children: [{ text: '铁西区' }, { text: '铁东区' }, { text: '梨树县' }] }]\n    },\n    {\n      text: '黑龙江省',\n      children: [{ text: '哈尔滨市', children: [{ text: '道里区' }, { text: '道外区' }, { text: '南岗区' }] },\n        { text: '牡丹江市', children: [{ text: '东安区' }, { text: '西安区' }, { text: '爱民区' }] }]\n    }\n  ]\n  @State v: string = '';\n  @State showTriggered: string = '';\n  private triggered: string = '';\n  private maxLines: number = 3;\n\n  linesNum(max: number): void {\n    let items: string[] = this.triggered.split('').filter(item => item != '');\n    if (items.length > max) {\n      this.showTriggered = items.slice(-this.maxLines).join('');\n    } else {\n      this.showTriggered = this.triggered;\n    }\n  }\n\n  build() {\n    Column() {\n      Button(\"TextPickerDialog.show:\" + this.v)\n        .onClick(() => {\n          TextPickerDialog.show({\n            range: this.cascade,\n            selected: this.select,\n            onAccept: (value: TextPickerResult) => {\n              this.select = value.index\n              console.log(this.select + '')\n              this.v = value.value as string\n              console.info(\"TextPickerDialog:onAccept()\" + JSON.stringify(value))\n              if (this.triggered != '') {\n                this.triggered += `onAccept(${JSON.stringify(value)})`;\n              } else {\n                this.triggered = `onAccept(${JSON.stringify(value)})`;\n              }\n              this.linesNum(this.maxLines);\n            },\n            onCancel: () => {\n              console.info(\"TextPickerDialog:onCancel()\")\n              if (this.triggered != '') {\n                this.triggered += `onCancel()`;\n              } else {\n                this.triggered = `onCancel()`;\n              }\n              this.linesNum(this.maxLines);\n            },\n            onChange: (value: TextPickerResult) => {\n              console.info(\"TextPickerDialog:onChange()\" + JSON.stringify(value))\n              if (this.triggered != '') {\n                this.triggered += `onChange(${JSON.stringify(value)})`;\n              } else {\n                this.triggered = `onChange(${JSON.stringify(value)})`;\n              }\n              this.linesNum(this.maxLines);\n            },\n          })\n        })\n        .margin({ top: 60 })\n    }\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "系统字体为一倍（适老化能力开启前）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "系统字体为1.75倍（适老化能力开启后）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
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