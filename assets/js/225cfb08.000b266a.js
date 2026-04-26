"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["145420"], {
386779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ts_container_folderstack_ts_container_folderstack_md_225_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ts-container-folderstack-ts-container-folderstack-md-225.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ts_container_folderstack_ts_container_folderstack_md_225_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack","title":"FolderStack","description":"FolderStack继承于Stack(层叠布局)控件，新增了折叠屏悬停能力，通过在FolderStack的配置项FolderStackOptions的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"FolderStack","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-folderstack"},"sidebar":"ref","previous":{"title":"Filter","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-filter/ohos-arkui-advanced-filter"},"next":{"title":"FoldSplitContainer","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-foldsplitcontainer/ohos-arkui-advanced-foldsplitcontainer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack.md


const frontMatter = {
	title: 'FolderStack',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-folderstack'
};
const contentTitle = 'FolderStack';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "FolderStackOptions18+对象说明",
  "id": "folderstackoptions18对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "alignContent",
  "id": "aligncontent",
  "level": 3
}, {
  "value": "enableAnimation",
  "id": "enableanimation",
  "level": 3
}, {
  "value": "autoHalfFold",
  "id": "autohalffold",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onFolderStateChange",
  "id": "onfolderstatechange",
  "level": 3
}, {
  "value": "onHoverStatusChange12+",
  "id": "onhoverstatuschange12",
  "level": 3
}, {
  "value": "OnHoverStatusChangeCallback18+",
  "id": "onhoverstatuschangecallback18",
  "level": 2
}, {
  "value": "OnFoldStatusChangeCallback18+",
  "id": "onfoldstatuschangecallback18",
  "level": 2
}, {
  "value": "OnFoldStatusChangeInfo18+",
  "id": "onfoldstatuschangeinfo18",
  "level": 2
}, {
  "value": "HoverEventParam12+对象说明",
  "id": "hovereventparam12对象说明",
  "level": 2
}, {
  "value": "WindowStatusType12+",
  "id": "windowstatustype12",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（FolderStack折叠屏悬停能力）",
  "id": "示例1folderstack折叠屏悬停能力",
  "level": 3
}, {
  "value": "示例2（使用attributeModifier动态设置FolderStack组件的属性及方法）",
  "id": "示例2使用attributemodifier动态设置folderstack组件的属性及方法",
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
        id: "folderstack",
        children: "FolderStack"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FolderStack继承于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "(层叠布局)控件，新增了", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-folded-hover",
        children: "折叠屏悬停"
      }), "能力，通过在FolderStack的配置项", (0,jsx_runtime.jsx)(_components.a, {
        href: "#folderstackoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "FolderStackOptions"
      }), "的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313518)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件的悬停态能力针对", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/foldable-0000002352875141",
        children: "双折叠"
      }), "设计，只在双折叠设备生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当该组件的父组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
        children: "if/else：条件渲染"
      }), "节点时，折叠屏悬停能力将会失效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以包含多个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FolderStack(options?: FolderStackOptions)"
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
              href: "#folderstackoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "FolderStackOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FolderStack的配置项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "folderstackoptions18对象说明",
      children: "FolderStackOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(649560)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "upperItems11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义悬停态会被移到上半屏的子组件的id数组。  当悬停触发时，upperItems数组中的子组件自动避让折叠屏折痕区后移到上半屏，其它组件堆叠在下半屏区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561142)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置offset和margin属性，可能会导致上下半屏遮挡折痕区，不建议开发者使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aligncontent",
      children: "alignContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alignContent(value: Alignment)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置子组件在容器内的对齐方式。该属性与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#align",
        children: "align"
      }), "同时设置时，后设置的属性生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395240)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#alignment",
              children: "Alignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件在容器内的对齐方式。  默认值：Alignment.Center  非法值：按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableanimation",
      children: "enableAnimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAnimation(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否使用默认动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(978605)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使用默认动效。  默认值：true，设置true表示使用默认动效，设置false表示不使用默认动效。  非法值：按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autohalffold",
      children: "autoHalfFold"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autoHalfFold(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启自动旋转，仅在系统自动旋转关闭时该属性生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(715107)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否开启自动旋转。  默认值：true，设置true表示FolderStack在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#foldstatus11",
              children: "半折叠状态"
            }), "进行布局时开启自动旋转，设置false表示关闭自动旋转。该属性不区分设备类型。  非法值：按默认值处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onfolderstatechange",
      children: "onFolderStateChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFolderStateChange(callback: OnFoldStatusChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备的折叠状态改变时触发回调，仅在横屏状态下生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93169)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onfoldstatuschangecallback18",
              children: "OnFoldStatusChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备的折叠状态改变时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onhoverstatuschange12",
      children: "onHoverStatusChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onHoverStatusChange(handler: OnHoverStatusChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备的悬停状态改变时触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(811765)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onhoverstatuschangecallback18",
              children: "OnHoverStatusChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备的悬停状态改变时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onhoverstatuschangecallback18",
      children: "OnHoverStatusChangeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnHoverStatusChangeCallback = (param: HoverEventParam) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备的悬停状态改变时触发的回调。"
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
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hovereventparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "HoverEventParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备与悬停状态相关的参数，包括设备的折叠状态、悬停状态、应用方向以及窗口模式枚举。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfoldstatuschangecallback18",
      children: "OnFoldStatusChangeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnFoldStatusChangeCallback = (event: OnFoldStatusChangeInfo) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备的折叠状态。"
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onfoldstatuschangeinfo18",
              children: "OnFoldStatusChangeInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备的折叠状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfoldstatuschangeinfo18",
      children: "OnFoldStatusChangeInfo18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当折叠状态改变的时候回调，仅在横屏状态下生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502677)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "foldStatus11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#foldstatus11",
              children: "FoldStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前设备的折叠状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hovereventparam12对象说明",
      children: "HoverEventParam12+对象说明"
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
            children: "foldStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#foldstatus11",
              children: "FoldStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备的折叠状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHoverMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前是否为悬停态。设置为true时表示当前为悬停态，设置为false时表示当前为非悬停态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appRotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#approtation12",
              children: "AppRotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前应用方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStatusType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#windowstatustype12",
              children: "WindowStatusType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口模式枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "windowstatustype12",
      children: "WindowStatusType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type WindowStatusType = WindowStatusType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口模式枚举。"
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
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowstatustype11",
              children: "WindowStatusType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口模式枚举。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1folderstack折叠屏悬停能力",
      children: "示例1（FolderStack折叠屏悬停能力）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了折叠屏悬停能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // upperItems将所需要的悬停到上半屏的id放入upperItems传入，其余组件会堆叠在下半屏区域\n      FolderStack({ upperItems: [\"upperitemsId\"] }) {\n        // 此Column会自动上移到上半屏\n        Column() {\n          Text(\"video zone\").height(\"100%\").width(\"100%\").textAlign(TextAlign.Center).fontSize(25)\n        }.backgroundColor('rgb(0, 74, 175)').width(\"100%\").height(\"100%\").id(\"upperitemsId\")\n\n        // 下列两个Column堆叠在下半屏区域\n        Column() {\n          Text(\"video title\")\n            .width(\"100%\")\n            .height(50)\n            .textAlign(TextAlign.Center)\n            .backgroundColor('rgb(213, 213, 213)')\n            .fontSize(25)\n        }.width(\"100%\").height(\"100%\").justifyContent(FlexAlign.Start)\n\n        Column() {\n          Text(\"video bar \")\n            .width(\"100%\")\n            .height(50)\n            .textAlign(TextAlign.Center)\n            .backgroundColor('rgb(213, 213, 213)')\n            .fontSize(25)\n        }.width(\"100%\").height(\"100%\").justifyContent(FlexAlign.End)\n      }\n      .backgroundColor('rgb(39, 135, 217)')\n      // 是否启动动效\n      .enableAnimation(true)\n      // 是否自动旋转\n      .autoHalfFold(true)\n      // folderStack回调 当折叠状态改变时回调\n      .onFolderStateChange((msg) => {\n        if (msg.foldStatus === FoldStatus.FOLD_STATUS_EXPANDED) {\n          console.info(\"The device is currently in the expanded state\")\n        } else if (msg.foldStatus === FoldStatus.FOLD_STATUS_HALF_FOLDED) {\n          console.info(\"The device is currently in the half folded state\")\n        } else {\n          // .............\n        }\n      })\n      // hoverStatusChange回调 当悬停状态改变时回调\n      .onHoverStatusChange((msg) => {\n        console.info('this foldStatus:' + msg.foldStatus);\n        console.info('this isHoverMode:' + msg.isHoverMode);\n        console.info('this appRotation:' + msg.appRotation);\n        console.info('this windowStatusType:' + msg.windowStatusType);\n      })\n      // folderStack如果不撑满页面全屏，作为普通Stack使用\n      .alignContent(Alignment.Bottom)\n      .height(\"100%\")\n      .width(\"100%\")\n      .backgroundColor('rgb(39, 135, 217)')\n\n    }\n    .height(\"100%\")\n    .width(\"100%\")\n    .borderWidth(1)\n    .borderColor('rgb(213, 213, 213)')\n    .backgroundColor('rgb(0, 74, 175)')\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 横屏展开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296162)/* ["default"] */.A) + "",
        width: "431",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 横屏半折叠"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863345)/* ["default"] */.A) + "",
        width: "431",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2使用attributemodifier动态设置folderstack组件的属性及方法",
      children: "示例2（使用attributeModifier动态设置FolderStack组件的属性及方法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了如何使用attributeModifier动态设置FolderStack组件的onFolderStateChange和onHoverStatusChange方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyFolderStackModifier implements AttributeModifier<FolderStackAttribute> {\n  applyNormalAttribute(instance: FolderStackAttribute): void {\n    // folderStack回调 当折叠状态改变时回调\n    instance.onFolderStateChange((msg) => {\n      if (msg.foldStatus === FoldStatus.FOLD_STATUS_EXPANDED) {\n        console.info(\"The device is currently in the expanded state\")\n      } else if (msg.foldStatus === FoldStatus.FOLD_STATUS_HALF_FOLDED) {\n        console.info(\"The device is currently in the half folded state\")\n      } else if (msg.foldStatus === FoldStatus.FOLD_STATUS_FOLDED) {\n        console.info(\"The device is currently in the folded state\")\n      } else {\n        // .............\n      }\n    })\n    // hoverStatusChange回调 当悬停状态改变时回调\n    instance.onHoverStatusChange((msg) => {\n      console.info('this foldStatus:' + msg.foldStatus);\n      console.info('this isHoverMode:' + msg.isHoverMode);\n      console.info('this appRotation:' + msg.appRotation);\n      console.info('this windowStatusType:' + msg.windowStatusType);\n    })\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyFolderStackModifier = new MyFolderStackModifier()\n\n  build() {\n    Column() {\n      // upperItems将所需要的悬停到上半屏的id放入upperItems传入，其余组件会堆叠在下半屏区域\n      FolderStack({ upperItems: [\"upperitemsId\"] }) {\n        // 此Column会自动上移到上半屏\n        Column() {\n          Text(\"video zone\").height(\"100%\").width(\"100%\").textAlign(TextAlign.Center).fontSize(25)\n        }.backgroundColor('rgb(0, 74, 175)').width(\"100%\").height(\"100%\").id(\"upperitemsId\")\n\n        // 下列两个Column堆叠在下半屏区域\n        Column() {\n          Text(\"video title\")\n            .width(\"100%\")\n            .height(50)\n            .textAlign(TextAlign.Center)\n            .backgroundColor('rgb(213, 213, 213)')\n            .fontSize(25)\n        }.width(\"100%\").height(\"100%\").justifyContent(FlexAlign.Start)\n\n        Column() {\n          Text(\"video bar \")\n            .width(\"100%\")\n            .height(50)\n            .textAlign(TextAlign.Center)\n            .backgroundColor('rgb(213, 213, 213)')\n            .fontSize(25)\n        }.width(\"100%\").height(\"100%\").justifyContent(FlexAlign.End)\n      }\n      .backgroundColor('rgb(39, 135, 217)')\n      // 是否启动动效\n      .enableAnimation(true)\n      // 是否自动旋转\n      .autoHalfFold(true)\n      .attributeModifier(this.modifier)\n      // folderStack如果不撑满页面全屏，作为普通Stack使用\n      .alignContent(Alignment.Bottom)\n      .height(\"100%\")\n      .width(\"100%\")\n      .backgroundColor('rgb(39, 135, 217)')\n    }\n    .height(\"100%\")\n    .width(\"100%\")\n    .borderWidth(1)\n    .borderColor('rgb(213, 213, 213)')\n    .backgroundColor('rgb(0, 74, 175)')\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 横屏展开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The device is currently in the expanded state"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this foldStatus:1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this isHoverMode:0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this appRotation:3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this windowStatusType:1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(579782)/* ["default"] */.A) + "",
        width: "431",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 横屏半折叠"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The device is currently in the half folded state"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this foldStatus:3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this isHoverMode:1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this appRotation:3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this windowStatusType:1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689393)/* ["default"] */.A) + "",
        width: "431",
        height: "384"
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
579782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
561142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
689393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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F7n77ruZNWvWaHz+4i/+gttuu43+/n5WrVrFH/zBHxBjZNu2bXz1q19l+/bttLe3s3Tp0tF9YowcPnyYRx55hJ/97GfEGLn00ku58847aW1tBWDNmjU8+uij7N27l0mTJnHrrbdy9dVXv+8Y9+3bx3333ceWLVsYP348t956K4sXLwbg0KFDfP3rX2f9+vVUVcWiRYu48847aWhoYOPGjTz99NO0t7fzox/9iJ6eHm677bbT/IlKZw+nDTWmtbW1MWnSJJ5++mlCCIQQ2LBhA7t27WLmzJn09/fz9ttvnxC6uXPn8vnPf5477riD73znO1RVNbrvl770JbZv384999zDPffcw65du/ja174GwIYNG7j//vvp6enhC1/4AsuWLePLX/4ya9asec+xhRD4zne+w1VXXcWf//mfs2zZMh588EE2bNgAwHe/+10APve5z/Gnf/qnvPrqqzz55JOEEBgYGGDVqlX09fVx7733smzZso/mA5XOEsZLY1YIgSzL6Onp4ac//SkHDx4E4LnnnmPJkiUnTMMBrF27lhgjv/Vbv8WMGTNYuHAhd9xxx+iS9p07d7J27VpuvfVWJk6cSFtbGzfddBNr167l0KFDPPnkk1xzzTX09PQwbdo0fvVXf5VPfepTPPXUU+85vhgjS5Ysoaenh87OTnp6erjyyiv5wQ9+QIyRX//1X+euu+6iubmZiRMncvXVV/Pqq69SVfU74rS0tHD77bfT2dnJ+PHjT/8HKp1FnDbUmBZjZOHChTQ3N7N69WquuOIKXnnlFe69994TFkuEENi+fTtdXV0URTH63MyZM0fPl+3atYvBwUG+8pWvkGX1f/dVVcXEiROp1Wps3bqVW2655YT3v+iii3jppZeoqmp0n+PNnj179P1jjMyePZsXXniBGCOvv/46//AP/8DRo0cJIXDw4EG6u7tH950wYQLjx4//0FdBSikwXhrzGhsbufHGG3n22WfJsoyZM2fS0dFx0natra2jR2cjDh06RFmWhBCYMGECLS0t/PEf/zHt7e2j24QQaGpqYuLEiezfv/+E/Q8cOHDKwBz/fiEE+vr6aG1t5dixYzzwwAN85jOfYenSpWRZxhNPPMG6detO2N5w6VzltKHGtJFv7tdddx1vvfUWjz/+ODfeeON7bnvppZfy9ttv8/Of/5wQAkNDQyxfvnz0+a6uLiZMmMDKlStpamqipaWFrVu38sorr4xOAX7/+99n3759oyF65plnuO666953bD/84Q/Zv38/IQT27NnD888/z6JFiyjLkv7+frq7u2lubibLMjZt2mSspGEeeemc0N7ezic+8Qk2bNjAwoULT3guyzJijMyaNYvf+I3f4L777mPGjBn09/czb9680fNJeZ7z+7//+zzwwAO8+OKLjBs3ju3bt/Obv/mbAPT09LBt2zb+6I/+iM7OTnbv3s2CBQu46aab3nNMWZYxf/58/uzP/oxJkyaxY8cO5s+fzw033EBRFHzmM5/hr//6r7n44ovZvXs3RVHQ0tIyur8h07ks9Pb2epWkzgl9fX309/fT1dV1wmP79+9n1qxZo49t27aNt956i46ODrq7u3nzzTeZOXMmRVH/t97BgwfZtGkTQ0NDzJo1i+nTp59w/dWWLVvYsWMH06ZN48ILLxw9Z/Zu27ZtY8qUKRw8eJAtW7bQ3t7O3LlzR8+5xRjZvHkzO3bsoLOzk87OTvr6+ujq6uLIkSPs3LmT7u7u9zyXJo11xkvnlOMvGH73go13b/Pubd99pPN++/9XxvNBrzPynr/MPtJY5LShzinHf6N/v2/6I49/0LYfRjR+kfGc6j0Nl85VzjdIkpJjvCRJyTFekqTkGC9JUnKMlyQpOf8f4n3Xwr4qhVUAAAAASUVORK5CYII=");

},
296162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
863345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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F7n77ruZNWvWaHz+4i/+gttuu43+/n5WrVrFH/zBHxBjZNu2bXz1q19l+/bttLe3s3Tp0tF9YowcPnyYRx55hJ/97GfEGLn00ku58847aW1tBWDNmjU8+uij7N27l0mTJnHrrbdy9dVXv+8Y9+3bx3333ceWLVsYP348t956K4sXLwbg0KFDfP3rX2f9+vVUVcWiRYu48847aWhoYOPGjTz99NO0t7fzox/9iJ6eHm677bbT/IlKZw+nDTWmtbW1MWnSJJ5++mlCCIQQ2LBhA7t27WLmzJn09/fz9ttvnxC6uXPn8vnPf5477riD73znO1RVNbrvl770JbZv384999zDPffcw65du/ja174GwIYNG7j//vvp6enhC1/4AsuWLePLX/4ya9asec+xhRD4zne+w1VXXcWf//mfs2zZMh588EE2bNgAwHe/+10APve5z/Gnf/qnvPrqqzz55JOEEBgYGGDVqlX09fVx7733smzZso/mA5XOEsZLY1YIgSzL6Onp4ac//SkHDx4E4LnnnmPJkiUnTMMBrF27lhgjv/Vbv8WMGTNYuHAhd9xxx+iS9p07d7J27VpuvfVWJk6cSFtbGzfddBNr167l0KFDPPnkk1xzzTX09PQwbdo0fvVXf5VPfepTPPXUU+85vhgjS5Ysoaenh87OTnp6erjyyiv5wQ9+QIyRX//1X+euu+6iubmZiRMncvXVV/Pqq69SVfU74rS0tHD77bfT2dnJ+PHjT/8HKp1FnDbUmBZjZOHChTQ3N7N69WquuOIKXnnlFe69994TFkuEENi+fTtdXV0URTH63MyZM0fPl+3atYvBwUG+8pWvkGX1f/dVVcXEiROp1Wps3bqVW2655YT3v+iii3jppZeoqmp0n+PNnj179P1jjMyePZsXXniBGCOvv/46//AP/8DRo0cJIXDw4EG6u7tH950wYQLjx4//0FdBSikwXhrzGhsbufHGG3n22WfJsoyZM2fS0dFx0natra2jR2cjDh06RFmWhBCYMGECLS0t/PEf/zHt7e2j24QQaGpqYuLEiezfv/+E/Q8cOHDKwBz/fiEE+vr6aG1t5dixYzzwwAN85jOfYenSpWRZxhNPPMG6detO2N5w6VzltKHGtJFv7tdddx1vvfUWjz/+ODfeeON7bnvppZfy9ttv8/Of/5wQAkNDQyxfvnz0+a6uLiZMmMDKlStpamqipaWFrVu38sorr4xOAX7/+99n3759oyF65plnuO666953bD/84Q/Zv38/IQT27NnD888/z6JFiyjLkv7+frq7u2lubibLMjZt2mSspGEeeemc0N7ezic+8Qk2bNjAwoULT3guyzJijMyaNYvf+I3f4L777mPGjBn09/czb9680fNJeZ7z+7//+zzwwAO8+OKLjBs3ju3bt/Obv/mbAPT09LBt2zb+6I/+iM7OTnbv3s2CBQu46aab3nNMWZYxf/58/uzP/oxJkyaxY8cO5s+fzw033EBRFHzmM5/hr//6r7n44ovZvXs3RVHQ0tIyur8h07ks9Pb2epWkzgl9fX309/fT1dV1wmP79+9n1qxZo49t27aNt956i46ODrq7u3nzzTeZOXMmRVH/t97BgwfZtGkTQ0NDzJo1i+nTp59w/dWWLVvYsWMH06ZN48ILLxw9Z/Zu27ZtY8qUKRw8eJAtW7bQ3t7O3LlzR8+5xRjZvHkzO3bsoLOzk87OTvr6+ujq6uLIkSPs3LmT7u7u9zyXJo11xkvnlOMvGH73go13b/Pubd99pPN++/9XxvNBrzPynr/MPtJY5LShzinHf6N/v2/6I49/0LYfRjR+kfGc6j0Nl85VzjdIkpJjvCRJyTFekqTkGC9JUnKMlyQpOf8f4n3Xwr4qhVUAAAAASUVORK5CYII=");

},
502677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
978605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
715107(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
93169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
811765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
313518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
395240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
649560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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