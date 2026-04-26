"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["863921"], {
465604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_subheader_ohos_arkui_advanced_subheader_md_f4e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-subheader-ohos-arkui-advanced-subheader-md-f4e.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_subheader_ohos_arkui_advanced_subheader_md_f4e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader","title":"SubHeader","description":"子标题，用于列表项或内容项顶部，将该列表或内容划分为一个区块，子标题名称用来概括该区块内容。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"SubHeader","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-subheader","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-subheader"},"sidebar":"ref","previous":{"title":"SplitLayout","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-splitlayout/ohos-arkui-advanced-splitlayout"},"next":{"title":"SubHeaderV2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheaderv2/ohos-arkui-advanced-subheaderv2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader.md


const frontMatter = {
	title: 'SubHeader',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-subheader',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-subheader'
};
const contentTitle = 'SubHeader';

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
  "value": "SubHeader",
  "id": "subheader-1",
  "level": 2
}, {
  "value": "OperationType",
  "id": "operationtype",
  "level": 2
}, {
  "value": "SelectOptions",
  "id": "selectoptions",
  "level": 2
}, {
  "value": "OperationOption",
  "id": "operationoption",
  "level": 2
}, {
  "value": "SymbolOptions12+",
  "id": "symboloptions12",
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
  "value": "示例1（效率型子标题）",
  "id": "示例1效率型子标题",
  "level": 3
}, {
  "value": "示例2（双行文本内容型子标题）",
  "id": "示例2双行文本内容型子标题",
  "level": 3
}, {
  "value": "示例3（spinner型内容型子标题）",
  "id": "示例3spinner型内容型子标题",
  "level": 3
}, {
  "value": "示例4（设置左侧symbol图标）",
  "id": "示例4设置左侧symbol图标",
  "level": 3
}, {
  "value": "示例5（设置右侧symbol图标）",
  "id": "示例5设置右侧symbol图标",
  "level": 3
}, {
  "value": "示例6（自定义标题内容）",
  "id": "示例6自定义标题内容",
  "level": 3
}, {
  "value": "示例7（自定义标题样式）",
  "id": "示例7自定义标题样式",
  "level": 3
}, {
  "value": "示例8（右侧按钮自定义播报）",
  "id": "示例8右侧按钮自定义播报",
  "level": 3
}, {
  "value": "示例9（右侧按钮设置默认获焦）",
  "id": "示例9右侧按钮设置默认获焦",
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
        id: "subheader",
        children: "SubHeader"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子标题，用于列表项或内容项顶部，将该列表或内容划分为一个区块，子标题名称用来概括该区块内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401633)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果SubHeader设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SubHeader本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议SubHeader设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SubHeader } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(901750)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持设置文本相关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "subheader-1",
      children: "SubHeader"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SubHeader({icon?: ResourceStr, iconSymbolOptions?: SymbolOptions, primaryTitle?: ResourceStr, secondaryTitle?: ResourceStr, select?: SelectOptions, operationType?: OperationType, operationItem?: Array<OperationOption>, operationSymbolOptions?: Array<SymbolOptions>, primaryTitleModifier?: TextModifier, secondaryTitleModifier?: TextModifier, titleBuilder?: () => void, contentMargin?: LocalizedMargin, contentPadding?: LocalizedPadding})"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图标设置项。  默认值：undefined，表示不显示图标。  当使用secondaryTitle属性时，设置icon属性才会生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconSymbolOptions12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#symboloptions12",
              children: "SymbolOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["icon为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            }), "时的设置项。  默认值：undefined，表示不显示图标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标题内容。  默认值：undefined，表示不显示标题。  当同时使用primaryTitle、secondaryTitle、icon属性时，设置primaryTitle属性不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["副标题内容。  默认值：undefined，表示不显示副标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "select"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#selectoptions",
              children: "SelectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["select内容以及事件。  默认值：undefined，表示不显示下拉框。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#operationtype",
              children: "OperationType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["操作区（右侧）元素样式。  默认值：OperationType.BUTTON  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operationItem"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#operationoption",
              children: "OperationOption"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["操作区（右侧）的设置项。  默认值：undefined，表示不显示操作区。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operationSymbolOptions12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#symboloptions12",
              children: "SymbolOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["operationType为OperationType.ICON_GROUP，  operationItem设置多个图标，图标为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            }), "时的设置项。  默认值：undefined，表示不设置Symbol图标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryTitleModifier12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "TextModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题文本属性，如设置标题颜色、字体大小、字重等。  默认值：undefined，表示使用系统默认样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryTitleModifier12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "TextModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置副标题文本属性，如设置标题颜色、字体大小、字重等。  默认值：undefined，表示使用系统默认样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "titleBuilder12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义标题区内容  默认值：undefined，表示不采用自定义标题定义标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["子标题外边距，不支持设置负数。  默认值：  {start: LengthMetrics.resource(  $r('sys.float.margin_left')),  end: LengthMetrics.resource(  $r('sys.float.margin_right'))}  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentPadding12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子标题内边距。  默认值：  左侧为副标题或副标题加图标时：  {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "titleAccessibilityText23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置标题自定义朗读内容。  默认值：undefined  值为undefined时，默认朗读组件显示的标题内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operationtype",
      children: "OperationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义子标题操作区的元素样式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "TEXT_ARROW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本按钮（带右箭头）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUTTON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本按钮（不带右箭头）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICON_GROUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标按钮（最多支持配置三张图标）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOADING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectoptions",
      children: "SelectOptions"
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
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#selectoption%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SelectOption"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下拉选项内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置下拉菜单初始选项的索引。  取值范围：大于等于-1。  第一项的索引为0。  当不设置selected属性时，默认选择值为-1，菜单项不选中。  若设置数值小于-1，按不选中处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置下拉按钮本身的文本内容。  默认值：空字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：如果文本大于列宽时，文本被截断。从API version 20开始，支持Resource类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSelect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(index: number, value?: string) => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下拉菜单选中某一项的回调。  - index：选中项的索引。  - value：选中项的值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: ["下拉按钮是否为默认焦点。  true：下拉按钮是默认焦点。  false：下拉按钮不是默认焦点。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operationoption",
      children: "OperationOption"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["文本内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()=>void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子标题右侧按钮点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["子标题右侧按钮无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。  支持的值为：  \"auto\"：当前组件会转换\"yes\"。  \"yes\"：当前组件可被无障碍辅助服务所识别。  \"no\"：当前组件不可被无障碍辅助服务所识别。  \"no-hide-descendants\"：当前组件及其所有子组件不可被无障碍辅助服务所识别。  默认值：\"auto\"  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["子标题右侧按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。  默认值：类型为TEXT_ARROW和BUTTON时默认值为当前项value属性内容，其他类型默认值为“ ”。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["子标题右侧按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。  默认值：类型为LOADING时，默认值为“正在加载”，其他类型默认值为“单指双击即可执行”。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: ["子标题右侧按钮是否为默认焦点。  true：子标题右侧按钮是默认焦点。  false：子标题右侧按钮不是默认焦点。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "symboloptions12",
      children: "SymbolOptions12+"
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
            children: "fontColor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            }), "颜色。  默认值：不同渲染策略下默认值不同。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renderingStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symbolrenderingstrategy11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SymbolRenderingStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            }), "渲染策略。  默认值：SymbolRenderingStrategy.SINGLE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  $r('sys.symbol.ohos_*')中引用的资源仅ohos_trash_circle、ohos_folder_badge_plus、ohos_lungs支持分层与多色模式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effectStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symboleffectstrategy11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SymbolEffectStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            }), "动效策略。  默认值：SymbolEffectStrategy.NONE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  $r('sys.symbol.ohos_*')中引用的资源仅ohos_wifi支持层级动效模式。"]
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
      id: "示例1效率型子标题",
      children: "示例1（效率型子标题）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示子标题左侧为icon、secondaryTitle，右侧operationType为按钮类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      SubHeader({\n        icon: $r('sys.media.ohos_ic_public_email'),\n        secondaryTitle: '二级标题',\n        operationType: OperationType.BUTTON,\n        operationItem: [{\n          value: '操作',\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11131)/* ["default"] */.A) + "",
        width: "363",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2双行文本内容型子标题",
      children: "示例2（双行文本内容型子标题）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示子标题左侧为primaryTitle、secondaryTitle，右侧operationType类型为TEXT_ARROW。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      SubHeader({\n        primaryTitle: '一级标题',\n        secondaryTitle: '二级标题',\n        operationType: OperationType.TEXT_ARROW,\n        operationItem: [{\n          value: '更多',\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(509989)/* ["default"] */.A) + "",
        width: "400",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3spinner型内容型子标题",
      children: "示例3（spinner型内容型子标题）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示子标题左侧为select，右侧operationType类型为ICON_GROUP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      SubHeader({\n        // 左侧为select选择器\n        select: {\n          options: [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }],\n          value: 'selectDemo',\n          selected: 2,\n          onSelect: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        },\n        operationType: OperationType.ICON_GROUP,\n        // 右侧为三个icon图标\n        operationItem: [{\n          value: $r('sys.media.ohos_ic_public_email'),\n          action: () => {\n            Prompt.showToast({ message: 'demo' })\n          }\n        }, {\n          value: $r('sys.media.ohos_ic_public_email'),\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }, {\n          value: $r('sys.media.ohos_ic_public_email'),\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(657501)/* ["default"] */.A) + "",
        width: "372",
        height: "70"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置左侧symbol图标",
      children: "示例4（设置左侧symbol图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示子标题左侧icon设置symbol图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      SubHeader({\n        // 设置icon为symbol图标\n        icon: $r('sys.symbol.ohos_wifi'),\n        iconSymbolOptions: {\n          effectStrategy: SymbolEffectStrategy.HIERARCHICAL,\n        },\n        secondaryTitle: '标题',\n        operationType: OperationType.BUTTON,\n        operationItem: [{\n          value: '操作',\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491715)/* ["default"] */.A) + "",
        width: "387",
        height: "47"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置右侧symbol图标",
      children: "示例5（设置右侧symbol图标）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示子标题operationType设置为OperationType.ICON_GROUP，operationItem的value设置为symbol图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      SubHeader({\n        // 设置左侧select\n        select: {\n          options: [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }],\n          value: 'selectDemo',\n          selected: 2,\n          onSelect: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        },\n        operationType: OperationType.ICON_GROUP,\n        // 设置右侧icon\n        operationItem: [{\n          value: $r('sys.symbol.ohos_lungs'),\n          action: () => {\n            Prompt.showToast({ message: 'icon1' });\n          }\n        }, {\n          value: $r('sys.symbol.ohos_lungs'),\n          action: () => {\n            Prompt.showToast({ message: 'icon2' });\n          }\n        }, {\n          value: $r('sys.symbol.ohos_lungs'),\n          action: () => {\n            Prompt.showToast({ message: 'icon3' });\n          }\n        }],\n        // 设置右侧icon图标symbol样式\n        operationSymbolOptions: [{\n          fontWeight: FontWeight.Lighter,\n        }, {\n          renderingStrategy: SymbolRenderingStrategy.MULTIPLE_COLOR,\n          fontColor: [Color.Blue, Color.Grey, Color.Green],\n        }, {\n          renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY,\n          fontColor: [Color.Blue, Color.Grey, Color.Green],\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308775)/* ["default"] */.A) + "",
        width: "379",
        height: "66"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6自定义标题内容",
      children: "示例6（自定义标题内容）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示SubHeader设置titleBuilder自定义标题内容的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  // 自定义左侧标题\n  @Builder\n  TitleBuilder(): void {\n    Text('自定义标题')\n      .fontSize(24)\n      .fontColor(Color.Blue)\n      .fontWeight(FontWeight.Bold)\n  }\n\n  build() {\n    Column() {\n      SubHeader({\n        // 调用TitleBuilder\n        titleBuilder: () => {\n          this.TitleBuilder();\n        },\n        primaryTitle: '一级标题',\n        secondaryTitle: '二级标题',\n        icon: $r('sys.symbol.ohos_star'),\n        operationType: OperationType.TEXT_ARROW,\n        operationItem: [{\n          value: '更多信息',\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614081)/* ["default"] */.A) + "",
        width: "375",
        height: "64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7自定义标题样式",
      children: "示例7（自定义标题样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示SubHeader设置标题和副标题字体样式以及标题内外边距的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader, LengthMetrics, TextModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  // 设置主副标题文本颜色\n  @State primaryModifier: TextModifier = new TextModifier().fontColor(Color.Blue);\n  @State secondaryModifier: TextModifier = new TextModifier().fontColor(Color.Blue);\n\n  build() {\n    Column() {\n      SubHeader({\n        primaryTitle: 'primaryTitle',\n        secondaryTitle: 'secondaryTitle',\n        primaryTitleModifier: this.primaryModifier,\n        secondaryTitleModifier: this.secondaryModifier,\n        operationType: OperationType.TEXT_ARROW,\n        operationItem: [{\n          value: '更多信息',\n          action: () => {\n            Prompt.showToast({ message: 'demo' });\n          }\n        }],\n        // 标题内外间距\n        contentMargin: { start: LengthMetrics.vp(20), end: LengthMetrics.vp(20) },\n        contentPadding: { start: LengthMetrics.vp(20), end: LengthMetrics.vp(20) }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479461)/* ["default"] */.A) + "",
        width: "361",
        height: "73"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8右侧按钮自定义播报",
      children: "示例8（右侧按钮自定义播报）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例通过设置SubHeader的右侧按钮属性accessibilityText、accessibilityDescription、accessibilityLevel自定义屏幕朗读播报文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      Divider().color('grey').width('100%').height('2vp')\n      SubHeader({\n        // 图标+二级标题, 右侧button\n        icon: $r('sys.media.ohos_ic_public_email'),\n        secondaryTitle: '二级标题',\n        operationType: OperationType.BUTTON,\n        operationItem: [{\n          value: '操作',\n          action: () => {\n            Prompt.showToast({ message: 'demo' })\n          }\n        }]\n      })\n      Divider().color('grey').width('100%').height('2vp')\n      SubHeader({\n        // 右侧text_arrow\n        primaryTitle: '一级标题',\n        secondaryTitle: '二级标题',\n        operationType: OperationType.TEXT_ARROW,\n        operationItem: [{\n          value: '更多',\n          action: () => {\n            Prompt.showToast({ message: 'demo' })\n          }\n        }]\n      })\n      Divider().color('grey').width('100%').height('2vp')\n      SubHeader({\n        // 左侧select 右侧是icon_(依次获焦)\n        select: {\n          options: [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }],\n          value: 'selectDemo',\n          selected: 0,\n          onSelect: (index: number, value?: string) => {\n            console.info(`SubHeader onSelect index : ${index}, value: ${value}`);\n          }\n        },\n        operationType: OperationType.ICON_GROUP,\n        operationItem: [{\n          value: $r('sys.media.ohos_ic_public_email'),\n          accessibilityText: '图标1',\n          accessibilityLevel: 'yes',\n        }, {\n          value: $r('sys.media.ohos_ic_public_email'),\n          accessibilityText: '图标2',\n          accessibilityLevel: 'no',\n        }, {\n          value: $r('sys.media.ohos_ic_public_email'),\n          accessibilityText: '图标3',\n          accessibilityDescription: '点击操作图标3',\n        }]\n      })\n      Divider().color('grey').width('100%').height('2vp')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983492)/* ["default"] */.A) + "",
        width: "391",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9右侧按钮设置默认获焦",
      children: "示例9（右侧按钮设置默认获焦）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获焦状态下，该示例通过设置SubHeader的右侧按钮属性defaultFocus使其默认获焦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#operationoption",
        children: "OperationOption"
      }), "中新增defaultFocus接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Prompt, OperationType, SubHeader } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubHeaderExample {\n  build() {\n    Column() {\n      SubHeader({\n        // 图标+二级标题, 右侧button\n        icon: $r('sys.media.ohos_ic_public_email'),\n        secondaryTitle: '二级标题',\n        operationType: OperationType.BUTTON,\n        operationItem: [{\n          value: '操作',\n          defaultFocus: true,\n          action: () => {\n            Prompt.showToast({ message: 'demo' })\n          }\n        }]\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(966699)/* ["default"] */.A) + "",
        width: "1031",
        height: "40"
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
657501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
491715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960132-9558624b8970597dfab2b391a55fbe87.gif");

},
11131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAABKCAIAAADyo+IIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAA7fSURBVHic7dx7cFRVngfw33n07U6nQ0KTByEJQogSxQSYslQcQngVpbCColHegriIWFs6zC7WWIq1i66zizrKosOjsFggYUXYrVk0wdeqRCRCkEVqG7MBQhLTMZg0STrp5z3nt39c6XI1on19DNb8Pn+kOrk3555O5Xz7vO5liAiEEGIL/3NXgBDyC0YJQgixjxKEEGIfJQghxD5KEEKIfZQghBD7KEEIIfZRghBC7KMEIYTYRwlCCLGPEoQQYh8lCCHEPkoQQoh9lCCEEPsoQQgh9lGCEELsowQhhNhHCUIIsY8ShBBiHyUIIcQ+ShBCiH2UIIQQ+yhBCCH2UYIQQuyjBCGE2EcJQgixjxKEEGIfJQghxD5KEEKIffLPXQFCSHIQAAAZIAIH0AiMIQP25UEEZMgZIDAEZAAMGTJk1u8hQ0B28WwEBGCIDBgwBACAREHf0+WeIIjIGMOLOOeMfes7VEpZL6xzOB+gh2WVkzjH+sm3nUzIZQnjOiZVTDNDMB3l0oEsispAgwPGeVwqKZRGh+ZMguaKaaEFmjF0ALI4aidTiksnMpPHBTriiqFEAwE1UxKMpKryy2g2jLF4PK61tlr7JVgpA18JiAFL01onzk98JeQXgSE4FCrt7tcOjS6X0izOJCBj/aA1oKNH9IUMDkyg1aXQKg6q02n0MYcw3d1RHnQwZoY0i4PRH2dKAYAGprhAR/KV+d6Nx2p1iGiaZjAYHPAcqwGnpaVJKQGAMfbNlvzNXsC3FWX1PgDg3Llzu3fvXrNmTUNDg9/vtw5ZpxmGMWnSJOtbRKyurj558uTq1auFEPX19V8r0OVyjR07FhFra2s/++wzK0o457fccstHH32ktU6UAwDTp083DOPSlSTk56cBwiaeD+iK35/4r38aL5l+8TX/x/8rHQIRZVSE06KeUYV6zdx0JrRQTsUiZ7vU0mfO/a4ib1qJuO/5sHTpf30gK2xgSlwiB2TAMY5MKC5kkv/vyY1iENHn87388suc8wGjRwgRj8ellCtWrCgsLBRCDFgIY6yzs7OmpuYS17rzzjtdLhcARKPRqqqq4uJiADh16tThw4cjkcigQYOsQ4ZhlJeXJ1IpFouFw2GlFOd83759XytzyJAhpaWlAODz+YLB4MSJEwFgx44d5eXljY2NSqm2tjbTNAsLC5VSZWVlhpFcj46QnwlCPM5DkcFaIeOx443hzOyCyaURb4wrMLYf0e/8T2DNnEwlIoLHEZ21n4YaW3ILMz0tkWh9U/Dm6emne1hcaJeORkE6ubrCq4ApBBf8pPMgiFhfX+92u1etWuXxeAY8IRgMPvvssydPniwsLBywEOuTPxqNNjU1XeJaiTFLU1NTZ2fnpEmTKisrJ06cOGLEiK1btz755JMAsGvXrlgsZvUdurq6ampqzp49GwgEqqqqysvL165d+7UyrWkUq9jOzs4PP/wQEa2YmzVrVkdHx4EDB3JycsaNGzd48GC3253UH4eQn83e2s4Nb0U7A1l3rT/3+3vzuXIcOcJPt/aDdpoicr5NZualASCCASYPaf3HV/2TJ6QW5aeu3Rf94sKwXf/ev2N/N+c9jniGidEJI3qrnrrKg1EJCEl2upNLkOPHj48aNaq3t/eNN96oqKhwuVycc6sFKqUQsb+/f//+/WPGjPF4PKdOnbr22mu/WQhjTAiRn5//xBNPfOcV29vb9+zZM3HixE8++eTo0aOTJ0/WWmut4/F4NBr1+Xzz5s1TSjkcDq11LBaLx+Occ+uFw/HloC4x/mKMmaYppdRa5+TkTJkyJRqNNjc3A8CRI0d8Pt/QoUOVUu+8805mZqbV6yHk8oP5Q1KuKnScbw3+apRXaritfHDreRV1urwO6Al72Fg2LIPHdYxpQ6PaVdvv64G1v87+pKlv+/7YmoXiYGO/MyQeW15gAIDpSXVluAAAnIDJLsUkkyDWdGZra+v999//4osvbt++/YEHHkhME1hHX3rpJa/Xu2zZss2bN2dmZv7wSYTjx4+3t7dbcx/l5eUFBQVnzpwRQvj9fiFEV1fX1q1bnU7nc889l52dvWzZsg0bNmitFy1aVFdX9/zzz8P/n09BxLvvvnvatGlSypaWlp07d1rRAwCc8+uuu45zHolESktLfT7fD6w5IT8RBnryNZFRWZkzPhar73Y8v6V3+7t9AmNCuv/zqaw5TwQCrBWc0UCo9MHJ0OtkO1+LsdgVkXT+dJVI94bum5bddKZTCFk8VGjo04Knxp1SMS1QcyVhgJmHS0iuD8IYU0oZhrFy5crdu3dv2bJlyZIl1mxFOBzetm1bXl7eHXfcYc2SWO32B4ZIWVlZSUlJXV1dY2Pj3LlzASAYDCqlGhoaysrKVq5cefTo0Y6ODisgAoHA2bNnTdN86623JkyYMHjwYABoa2urrq6eP39+WloaAOTl5SHizJkzp0yZkqie1+s1TVNrHQ6He3p6hg4d+kPqTMhPTCju7XPooNnz4q6UFjM2Zeqg39zqWvqPPcEUjMsL7z9euvmtc5JDnMnf/CH4RYQDtqjoiPiF85v/Ls/jjvc6XbW+dN9jfoluj2pfuzz3V0UZDE0O4ifsg3xVSkrK/PnzN23atG/fvltvvRUR9+7dm5KSUlFRkfhUH3AhJlmpqakdHR0ffPDBwoULu7u7MzIyOjs7i4uLjx49Om3atPHjx9fU1MyZMwcAlFI7duwAAJfLVVtbm5GRMXLkyHA4PHr06AMHDgwfPrytrW3ChAlCiP7+/o0bNwIAIlqDnZycnNzcXM65NQWbWOsl5DKkAfYfCa7/t75onzh2io3IdX5wsv/hloDEFE+EZXsGLd9yoc8cVFrs6JemI9C9ev7gJ7ak5Qi25R8KshxOEdMpSmd5AlOvc0oTGKSlpAst+5hO4Vok2QX5ATvKnE7ngw8+WFlZuW7dOgC44YYb5syZ43A4fpTgSGhpadm4caNpmnv27NFar1q1qrGxcenSpXv37n3zzTet1VZrgfbs2bOnT58uKSnx+/0VFRUAsGfPnhEjRowdOxYAent79+3bd+WVV+bk5Ljd7sWLF2utI5HI22+/vWLFCilldXU1AHR1daWnp/9YlSfkp4AADc3h8eNZX53YvM4joyIcT48A8wfNmkNtWx7LS3cJjEG+waMstO7hHFeKa+2moARIT9GMhSJCK2Dj8o2/vS3bZcYQ0pBJUKg4Y0yLJPeIJZ0gVkBoraWUUsqlS5d+8cUXWuthw4Z93/d/0YBrvQnWjGlaWtq4ceNyc3Pz8/OHDRvW3d0djUaHDx8+derUqqoqAFiwYIG1p6O5ubmsrMzpdH7++eejR4/2+/3Nzc1z586NxWKMsYKCAqszcs899wghjh07FgqFpk+fHggE3n333eLi4rvuuquhoeHgwYNSyry8vHvvvVcpJYSg/SDkciMAf3vXkM865HvHG8yo96H1Z5q7U0xpmP3Opn7PvvdiDiMSccazQhcq/zA6PQM1ImodZ+CQkoEGMByaH/U7n9nTHQOXi4XLrla/vnaIAETEn2kUk8AYy87OTqrbb40dYrHYpTeSK6XcbndGRsa8efPC4bDf76+pqQmFQvn5+UKIwsJCa9ll+PDhVjVuvPFGp9P5+uuvM8Y458eOHUtPT7/iiitOnz5tFXjzzTevX79+1qxZXq83EAicP3++t7fXykHGWE1NTXV19cyZM4uKirZu3er3+xcuXEjxQS5HiIyZEYfk4awcF1//26KgCU+/2Vf3fo9QmV3hwMypnvtmZGbK3EEcHCEWcmtkHAE0CAFSaqXR1RoQ/1H7WYilu3koIz12Q2mq0JKhTHabehIJgohSSmv/BSJ+NTUScweJucloNOpyuQacSWWMnTt3bvv27d+5HXbdunWHDh06ePBgIBAQQhQVFfl8vkWLFvl8vldeeaW0tNQ0zQ0bNtx+++3XX3+92+1OrCtfuHChtrZ25cqVUsrEZrPc3NyMjIzDhw/PmDGjs7Nz5MiRlZWVWVlZs2fPNk2zvr7+oYceKioqklI+8sgjJ06c+OrbIeTywQAwDt0mGDwYwQxfU/y5yrijO/70qiFr/+XzTY/mPLWl/ekz+Pd/nZrlZGFPv6k8DEyOCMgUgzgHJ+v6qxLjpVXXCIYAIBGkiVoqhJgEZ1KVSa4PUlpaWl1dfeLEiaFDh37bflOtdVtbWyQSsXoHA/J6veXl5Ze+ltV6rf1dY8aMycrKeuGFF4qKihoaGurq6qZOnTp79mwAePXVV3fu3Gma5k033WT1PoQQHo9n+fLlhYWFVVVV7e3tjDEppcvlWrBgQUFBwaeffmoYxuLFi/fv3//xxx8/+uijmZmZKSkp7733nrXHDBFDoVBBQcHVV1+d1N+HkJ8BAn/tw75//lPUPcjV0qvW/rFj0gT11IK8U60xA3SR17np4YLVlYGlj5//0/rhmTpVSZQ6agByREAOIBVLiToAnAqZBqYRUQNHcNj4tEzivhilFGPM5/Nt27YtFAp922laa4/Hs3r16uzs7AHvK7FS5jsnXK15kMRtclrrUCjEGKuvr7/mmmu8Xm9iENTS0pKamjpkyBDG2Pvvv9/Y2LhkyRLDMEzTPHToUCAQKCkpsTbIWlfs6+vr7u7OyckRQnDOe3p6WltbA4FAf3+/FVuc84yMjDFjxqSlpdE9u+Tyg00XYq/9d/uMq3KvTDcuuLRbKTSMc519L+0KPL5smHdQGJWnJ6KNlFAapoUx9jeb+x65Lf2qXADOYtD3zJ5uJZy/uy3TAQAggCNwhQwQOE9yGJNEgnxZd0TTNEOh0IBzH1YTTU1NTewHJYT86BBQA+N48TsGAAzBevbHxUeCJF4w1MA4AEMEBvjlg0UuPhgEvloIJHtfjJ0EsVy6B0Ef3YT8JbCzFsMu+uYhetAGIX9Rku6DEEJIAo01CCH2UYIQQuyjBCGE2EcJQgixjxKEEGIfJQghxD5KEEKIfZQghBD7KEEIIfZRghBC7KMEIYTYRwlCCLGPEoQQYh8lCCHEPkoQQoh9lCCEEPsoQQgh9lGCEELsowQhhNhHCUIIsY8ShBBiHyUIIcQ+ShBCiH2UIIQQ+/4Pq/AW7NR/gpoAAAAASUVORK5CYII=");

},
308775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAABCCAIAAAA5XuGNAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AABvmSURBVHic7Z15fBVFtvhPVS93S3JvIAREIWAkiBiQJYDAREVCRGVVDCqyDJHFD4sL6gNEBQQEZBSj5IljnHFhwAUQGX4CjozzHIVAQEWS8EIIDIGEEJLc5K691Pn9UeS+DAjcRAiQqe/nA5+kU11VXV19+tQ5p04TRASBQCBoFOiV7oBAIPgPQkgcgUDQeAiJIxAIGg8hcQQCQeMhJI5AIGg8hMQRCASNh5A4AoGg8RASRyAQNB5C4ggEgsZDSByBQNB4CIkjEAgaDyFxBAJB4yEkjkAgaDyExBEIBI2HkDgCgaDxkH97FYhICOF5dkI/hCCE8DK/vaEmxq+OzFkjycsIBE2GswVEA+A18P9N02SMISJj7Ny/nnXKfxpniQ/+a+ggpZQQIkkS/+FXTxEIrnUaInFCp/D3MCLqum4YRki4nPt+/s8UMRfmrPGpO2iEEEVRFEW5wCkCwbVIQyQO118IIYwxTdNM07wMHRMAAMiyrKpqaKlFqbC7Ca5tGqjjIKJhGJqmCVvDZQURKaUhfUcMteBap36W45B4CgQCpmmKB6ARQMRgMMgYs1gsIaPyle6UQNBA6q3jMMYCgQA3D4up3zjwoZYkyWKxiIWV4JqmftOXMcbft8IS3MggommafBl7pfsiEDScsCROyAkVCAQMwwAAQohQcBoNPtrcJxgMBvlBIXoE1yLh6jiIKNxSVwN1AxEETRPk//gtRgQExDNH8P/+irWaAIQK/JZZgXXb5T8hAgKwM2833iaw2o41kLDsOHwZ5fP5hF5zNYCIdru9bqCgoOnAH2yCACaAjIAmEkqAgg+AIloRgEIQCTNBlpgC1ASgAAYgA7QQCtCgWXFGqKAJRAdQEGQGDECXoQbByUClCAAmED+ADGAhUNsK4Z0Ot9GwJE5oPSWm+NUAIlosFkVRxO1oiiCgAUABKXDBQwwKEmGIFEyiScAosyJSIAjEg6AAUREJoAnEpEQhDdosicAY6gAAaCGAQHwANmCUAAJFBERgABIgJcQkxCQoA3DpVr9JGJZ3nO9duKzz+9J6vpq2F5kQouu6JEmSJF3pvvwnEnpJ1520mqbJskwprRuRDw2bhMQAZgEgCBoQJp1ZLlFghIJKiOYJEItVk1ECM5IQH5F0BgYCUmYnlNZTAoSuihBTRmJSyQuMAKNADKB+nx6pgKGgApQBCQJBghSQIGEAjAAFkABJ+I1eXBxyg2UjGA5CW7EuCaEdGJej8isOY0xYc64Upmly1yH3Huq6Xl1dPXDgwOzsbH5fuLmTMdbQWacCECAMSY1hGLrfYpqSwZhuBAn6wbCMGLr7g49KgPhMyYuGTTdkAxVAOzANoKHzHIEwapiSblqZaWXMYgZlb2Vkvx7/8/++qkHmR53pusVA2TRU1FVDp8hoA2w6F9Jx+IRmjF1ug/Fbb71lmuaMGTMuVYUejyc3N5e/XmRZdjqdcXFxTSmShRDC5z00XVXuquXQoUOrV68+ePCg0+kcMWLE8OHD3W53YWFhUVFRz549jx079vbbb+fl5UVFRY0ePXrEiBH1b4EBSABgGhFH8nH5Gydy87VIhzx8lGXM2GjJ0AoK4/b9bDJU8nJx5coTB/abruZ05IPWh0dHRMjcqBISBBeYG4gh8wsCEMgrCKzMKPvpJ8nlCowYFT3mwehKt5mbF3+wwH5/Kik6wl5fWZKTjVFOz+i06DGPtEQKCAzqpeGEs6pqBO3gu+++0zStYRKHKzLl5eV2u53bUwEgPz9/1qxZoTKGYdxwww0zZ87s3bs3pbRpLEaamNZ2TWCa5smTJ0ePHu31etu1a3fw4MHnnnuuc+fOkZGRAICIHo9nyJAhjLE2bdrk5eVNnz7d5/OlpaXxAM5wm0FkBACg5CTeM7SiulptE0fc/5KmTa+KjLKmjXQyg1CQTUOZOvX0L/mWxDbk0H7vlK0YMLxPTKQUFaRBQg2CNiAXaJQhokmoxLym7ijzBkeMKK4od7WN1w8V4KzpWof22o03yUioBFjtpXcnH/f51I7xSlGuY+pU4q2umjLVgbJMoExiLSHsi7v4a//qn9l+vz8tLe2LL74IHeHpMh588MFVq1ZlZGQ8++yzhJDZs2cvW7bsCvbzknP135omBiJu2bKlvLw8Kytr69at27dvt9vtf/nLX7hBhxCSn5/vdrtXrFjx17/+9R//+Efv3r1XrVpVXV1dDz0UCTCFgIGMfJTlr6iAtRstf9vt2p7dok0bx/avqngpgtRdRXP2eBcvh6077Tt+dCR2q8pcwRAloAigElBrvUjngwBQAkhMO0hs80Z30RHHHz+yfLdL+duu9o4o79o1RczkBmw8lBcoOxn5Xwujt+2Svvsp9t6hsGhhyekKIAjUbF6vMbwsOg5fwbrdblmWIyMjQyY0ro9UVVVRSqOiouqa2ULwMqHTo6KioM7CgRuVKisrIyMjbTZb6IimaYZh8AoJIVzTiY2NTUxMJIR07dr17rvvXrRo0ebNm2+55Zbhw4eHUkMEg8Hq6uqIiIhQbaHmELGyslJRlIiICP5rRUWFzWZzOBxnXazf7/f7/S6XS5Kk880t3twvv/xSXFx8vr+2bdv2lltuCXOQuSmhaehr1xCbN29u167d7bffjohOpzMiIqK0tDQ08Xw+H6U0OjpakiSHwzFgwIA333yzqqrK5XKFWT+escf6GXHs3KPFtZGSEh12RqhFt0XKnmpL7QqGetzADEvndnYLs7ZyWue+YDzyQCA3L9jpVpBMGxIFwSCEnl/UUSDcB0WZpK/72N/2JjN14HWqLreIlJyRzopTnlorNPr9FIHFtjKs2EK1B4ePULZuij1YpMdeR4kpgawDnJ1Z5XxceomDiCUlJdOnTy8rK2OMDRo0aP78+XzbZ01NzVNPPZWXl0cI6dWr15IlS0K7EzmmaSqKUlBQ8NRTT1VUVABAamrqvHnzsJZt27atXLnS4/EQQiZMmDBu3LglS5Z89dVXkiStXr36nXfe6dSp03vvvXdmRCmFWn3H5XLNmjUrNzd3y5YtI0eO5DLxm2++ee2113w+n2makyZNmjBhAiIWFxdPmDBhxowZOTk527Zts9vt06ZNGzp06Ny5c7///ntJkmbPnp2SksJlFmMsMzNz3bp1fP69+uqriYmJvzosPLnH0qVLd+7cyft2lrQ1TbNLly4bNmwIf6iFjtPIVFdXZ2dnP/HEE3xPP9QJvie1QG1yNUppt27dampqjh49GhcXF24bBEwwCZomGAcLvN06OSMjCJFM2RIkKGPtA0uAIBAgVCE6sVglwoYMbm61V3y1pbLTrS5ABDAvFiSDSICghIhut/yPHdKkJxWJIJUDFBRCDEJ4wNeZaECGCjCFyEGZkFs7U9PU9h+A/n1NoBQpC9+Qc6FV1bkpRMOhqKjo0UcfdTqdM2bMSEtL++677+bMmYOIeXl5o0aN8vl8TzzxRHp6en5+/sSJEysrK+sadAkh27ZtS09Pb9Wq1bRp00aPHv33v//96aef1nWdEPLRRx8tWbIkLi5u8uTJffr0ef/997dt29arV68RI0YYhtGlS5eHH344JSXl3G1fkiQxxpo1axYdHV1UVMSF19q1a+fPn5+YmPjkk08OHDjw/fffX758OS+vado777xz4sSJ8ePHR0VFvfnmm1OmTKmurh47dqzT6fzDH/5QWloKAIZhzJo1a/369ffee+/EiRNjY2OnTZu2fv36C4znM88843A4uPTBfycmJibUgXBo2N0R/BZ27doly/KgQYN+VT0/l65duzocjg0bNtTLuo9MIiyirEQ9+i8l5f4AIDIgYNoBTSCBM2XORAqaJqE6EGaaMkrxHfW/bVMMUwZiABgXs5kggEkAiOLbt6dSkhypqS4gFImNARCmACASBsQE4NZhBjwoiJCEhEiX0/zb9lPIFCTEBDX8q7u4r6q+0/rYsWOmaQ4dOnTYsGGEkD59+nTq1ElRlDVr1tTU1GRkZCQkJDDGIiMj33jjjdzc3P79+4fOJYSsXbvW4XAsWbIkOjqaRx5u3rz51KlTpmmuXr26U6dOGRkZkiSNGTNm+/btd9xxh8Vi6du374YNG26//fbHHnvsfEEQhBDutDp8+LCmaR6P5913342Pj1+0aJHFYhk+fPjzzz+/ZcuWRx55hDEmSVJkZGRmZqYsy+3atVuwYIHH4/nggw8URYmNjV22bFl+fv511133/fffZ2dnP/bYY5MnTyaEjBw5Mj09fe3atUOHDpVl+dwII0LIbbfdtnDhwueff57LUKhdRSqKMmPGjPj4+HoNtdjB38js3bs3IiKidevWmqYpinJhs0AgEFBVdcCAAd98842u6xaLJaw2ECQTTcn36ZpqYHLKvS2q/X6bagPdBMIQCDAgwADQpMCopiMF1IMeRY3QOndSs7PRXylZonWDqLLJCJXOq+cgIUA1Yiog7d1tsUYGb4yTgwEDVMmUdQYSAxmQGEQ2JWSUADFVRtAEn1+yWIx7h/s2bYoKBnUrkcFWDy/wpXcY33DDDaZpZmZmvvLKK/n5+T179oyMjETEPXv2KIqycePG1157bcWKFTk5OYiYm5tb954Fg8GCggJFUf785z+//vrrK1euLCoqMgwjNzd3//79iDh27FhZlrnxYtCgQeHeRQAAYIz5fD5ZlmVZzsnJ0TQtKioqIyNj+fLlK1asqKioQMTTp0/zwklJSVxqtG/fnhCSnJysKApjLCEhgRdDxHXr1jHGHn30UX6K0+m88847S0pKDh06xBg7nzN+8ODBqampdY9QSseMGZOWltaU/PdNkgMHDsTExLhcrmHDhq1du9YwjHPtaFziHDlyZNCgQTt27BgyZEhlZWVeXl6YTRBAIhkI9qxVamJiUAKWcmfx6+8VB2QCDKyaAgAqUoshyQwshsKAFp6kdw488MNOvXtPuazErPaYhCoUKFByYcsxASQABuKPe90RDk/r5uqowQX//ZZhGKoNVRk0iaEF3LLJFA3spgWRHimFOwcc/vDjmkd/37bGjbt+qGSyn9RHJ7kE33I4i/bt2//pT3/avHnz7t27H3/88fj4+CeffLJbt25er9disXDrDH8t/+53v2vfvn3dc7lJhVJaXl7O75zT6UxOTm7dunVeXh5XPepmHecPNi/5q6/60HFuiq6srGzdujUhxOPxAICu6+Xl5bxAy5YtW7ZsyQ3VAOBwOHiYNZ9SERERWJuODwB4gFJFRYWqqlyecmJjYxljp0+fvoDeIUnS4sWLS0tL9+zZw6+iffv2U6ZMkWWZX3uY4xwyJQguN3wmIGJ+fn5ycrLVar3xxhvnzp3r9/u5QdDv9wOA1+vlE7KgoGDOnDk1NTWtWrVyOBxWq3Xv3r1dunSBsPLGEjCVoycCh//lfSJNsdqkhHjnov+iNaXuoGn1q+ZJDQJMdgeJl4IB2sljOOupsppKV/MYOeUOY44vuOM732PtnDIjSIJAbBc05jAZIADq3hzWv48tKgpa3WR75vnqaoPoxAhIWBmgjDkqPZJHAT/1HihSXl9ZcqJYibuRdu4sRTuVb75myXcpFEwI2z1+EYkTypMQZnUAgIitWrV6+umnASA7O3vu3Lkvv/zyp59+GhMTU1FRsWDBAlmWAcA0TVmWudQInetyuaxWa3R09Pz587mKwZuWJKmsrCwYDB4+fLhbt25cjnDNlt9jSqlhGIqi8GQa/zaojPEZs3Xr1rKysoceeogQEhsbK0lS7969x48fH7pAWZY1TeO+JP48h9aVZ6U95x3r0KFDcXFxYWFhfHw8X4vl5+cTQjp27Mj16vMJQVVV58+f/8ADDwSDwejo6M8++4wHdNRXgoicIY2GYRhFRUWlpaX33XcfIWTx4sWHDh2aN2+eLMs1NTUpKSmI+NJLL0VEROi6Pnv27Ojo6C+//LJt27ZutzsmJmbfvn1jx46FsG4xUknf/7PGsHmvHqrNrv3xg9gHHj712hKbpkLpcaldi/0QbP/n94JfbAoYkm361BqvBuu3RreLUySqt77BWPeJJ+0Rl4yIkgLnlzdIAJhEkR08CMeK8ZU/EJD0hSvb7jtwZOEL0QZTj1dZ+3YrAYxatqDCYY/UFNvSxdUO1fr5poh+va1+HeLaBXZmqyZTJGJA2D7Ti0/x+s7p7du3p6enHz9+HBF79OgRGxsLAKZppqamapq2ceNG/pzs2rVr4cKFNTU1deunlPbp0+fQoUP8/Q8An3/+eWZmpq7rPXr0cLlcWVlZBw8eJIScPn163rx5IWVVVdXCwkJN087qDBcNBQUFL774YmZmZkJCwtixYxExKSmpZcuWH3/8cUFBARd577777tq1a8O8Rt7nCRMmKIqSkZGhaRql9Mcff/znP//ZpUuX5s2bX3jQZFnu0KHDqlWrVFWdM2cO15LCbLouQsdpHLiqu2bNGofD0b9//y+//HLSpEmnTp2ilPKI/IkTJ65Zs2bBggUJCQn8pgQCgcmTJy9dujQqKur666/n/tkw7xdh0s/7JEa1jjfr33/tGTX4xL6fJEoBAhhl02bOaPXZF8ryt1lCxyCazkotgtrVl56rfPGZ0+V+ddD99m93SB4vADIE6cIPOAIFlNavK7XaLQNSY7ZsCkwecbzyhMtAlRFVlfyPT9M++6uyfKXrtu5eRbPoAavPrzwz8/Tcp06rCnbsJBcdJT7NR+qzVLp4Ue7oCb/G66+/3uPxpKend+rUqbi4uKysLD093WKxPPDAA7t3787IyNi0aVNEREReXl6HDh3OMqBSSidMmFBUVPTss88mJCQQQgoKCvr168cYi4qKWrRo0cKFC6dOndqhQ4cjR44g4ogRIwghiqJ06NDh22+/TU9PDwQCmZmZ3Bm/atWq1atXG4bBGLPb7XfdddfMmTOdTidjTFGU55577uWXX54yZUrHjh0rKirKysqGDh1aV2vgSkro81uhfkKtctG+ffuHHnrok08+GTlyZIsWLQoLC1u1ajVp0qQLi5tQ7Ea/fv127tzJg30aoKpwW3h9zxI0AETUdX3z5s3du3enlH799de6rt99993du3dfsWJFUlIS98b279+/devWjz/++LRp07xe7y+//PLtt9/OmjUrNTX11Vdf9Xq9Z0Vy/XpbAAbCDzuroyK9N7aL+/STk+XgGH6HfGsXXLrKk9RFWbwkRoYAw+jb+0q9bjs+b46j0s3yfpa3f1P+WKllwCDXB//t3r/XfdfvrIxJlNLzJ69AAzRdZ9s20m5dmcVibt1+2hvEu++29+wbWP4Kdk7yLV16o0xkBOvNHemw/wlOmaLZVMeeX8jfd/qI3izlLvPTz6Xjp6zONvWwB19oxcT/ZBhGKO9cOPD9Pu+//35OTk5MTMy4cePi4+NDoTE7duz48ssvDcMYPHjwPffcwx/dzz//XNO0hx9+mDdHCPniiy927NihKMqoUaP69u1LCDEMQ5Zln8/3wQcf7NmzJy4u7ve///11113HOxkMBrOysvbv39+1a9cJEyacOnVq27ZtXFBardZ27dolJSXxz7BwCcKXbMFg8MMPP9y7d6/T6Rw3bhx/Qbnd7vXr1ycmJiYlJTHGKisrN27c2KNHj65duyJiZWUl94vdfPPNAMAYO3HiRFZWVllZWe/evdPS0mw2WzgKS8gK81s83Ha7XSysGgHGGLcET5o06ZlnnoHau+b3+7t06TJ+/PgXXngBACilP/zww4MPPpiVlTVw4EC+0CaElJWV9ejRY/ny5WlpaReN2EQAjwFxLY8NG1Hx3tu3AlJmCRJNKvWQfrdXDOhrvPunaAklZqqnvXBDsyOZb6mjJzko2mUDCNF//l+8q7939ku2p2cqimHle0LPd1nIvIXFLLl3cPRo69LXVKqrJhBNIt5qlhhX/OC44JtvxEsyIGHZe9wD+7BFr1smTXVYTAaggOQuK4mIa3tk2eu26dOuo/KlyI8TsmL4fD6oT0KJs6wzodpCr/fQkZB95Hz/1y1Wt3789+Dg0MG6Jes+1eeWhDqaBe/wudXy45IkYe2m1lCgV90LxNog9wu4qH51bKFB2k3ItsXjpIXEudwwxvbt2zdy5Mjly5ffd9993HN64MCBnJyckpKSLVu2cAcIIaSmpub+++/3eDx9+vS56aabEhMTO3fu3KJFi549e6akpCxbtuyi0wMRDhaY3W8pefNj232Dm/3vAe+BfWz//uDuvTTvZ8+Gz5wp99kJk5kJfqKNHlack632v0vp1Jl27y7d2s0lE7y91/FhD0S/+bpFAQMk+3kXVggsgPsPBpLvKH/plWYTx6k/7ff+/LP544Gq3T9EHDuib94c0zuJERkA5KoKOnDAL2Wnm/VJtnfuyLreQrt0dzW7gSbdfLJ7N8+az25Swp6EYVmFeTouEfpxlcBvhKqqqlqPyCtBg2GMlZaWDhkyxO12B4NBXdcdDofT6XS5XDNnzuSL8VDh6urqKVOmFBYWut3umpoaRHS5XH6/PysrKzk5OQwdB6trtDu7Hy0qjQqA3wxaLQp1tqhs1TzqxXn2QSl2q0MmDJD4NIbFxcqkqWVH81VvpaXSraNc3sxh82nayrdbPjbGCpRSqpxvYzeCzgzfyRO21EHHjx+zIzvt0yNV1RrdIuCKgSeeco1Ps1pIEKkFqImGxR2AKY8X7c2JqKjEQBVBplucfhJ0ZPyRPjS6mUrC3eUQlsQxTZP7/wRXCYQQm80mLMeNAzcUnDhxYtOmTYFAoH///m3atLFaraqqnpv+lefN8Xq9gUCgqqpqz549R48eTU5O7tevHwCEI3E0hseOaJ9/Vu41g/26x3VMQNWBTotkswd1wlSZEGZl4Db1aFPyIlj9NZrfo5RVsOw9NQcLK+659/rkXsxCI4IUVErON0UQ0DSQona8nHy4rtTr1vv3i4u/iUXKUkQUs9lkgIBkWlEBkHxoSgCS4Vf8wYDHL52uwn9mBw4fPnln7xYDU/0qvUSrqv/rHGIwGOQemTDrFVw+GGN8ul/pjgguC2cSnNfNHkx4xhs8k4rmTAmKBAkAT4wMAIBnYvEIYYBntmFeMEEOEEDk/3hJwqvEM00iQcDa1iFUHfKjAITvA4PzRzafQ7gSJ2TNEVwNhDIBCQTXFuHOWkKIxWIR38a7goQim7mL6kp3RyBoCOGFJBHCoz+EJn/F4R8CFhJHcI1SP83cYrGIFFBXCi70+cYugeAapd62AP6ODe14EjQCfLQlSarXXnmB4Cqk3hJHkiSr1SretI2MqqpWq1VYiwXXOg3JIxcKwOW79c+K6xX8duom2ZBl2Wq1hratX+muCQS/iYZnruSqvq7roe/niefhUsHHk6fj4Tk9xNgKmgaXIFcuY0zX9bqfiDxrD9RvrL9p86tjRSnlRmIxeoImxiXLzh2KFmG11K1ZfHXgLM5SW3hSMZ5CJbRZ9Ap2TyC4TFxKiXOmxnP2ecO/v8kFnHNHpu7QCYkjaJJcMt+HeEIuFULBETRhxDePBAJB4yHiOwQCQeMhJI5AIGg8hMQRCASNh5A4AoGg8RASRyAQNB5C4ggEgsbj/wP9+zS8wy59LwAAAABJRU5ErkJggg==");

},
479461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
983492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960134-04b56feba631d74c18fdb6280c8eff8a.png");

},
966699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
509989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,UklGRnQFAABXRUJQVlA4IGgFAACQIACdASqQAUoAPpFInkwlpKKiIdkosLASCWlu/HyZGutPpF/Y+0vvf79vohQC+P/Zj8/5G94PwZ0FP5xup9cv7v6gXpx82/zPf6/xX5Ae4H1g803/TcYN9E9QD+U/2T/n+yd++/8f/JecT8u/wH/h/zPwC/zD+r/8XsI/tf7Lv7bhs1MWF6yggFVAEHrAhX20U+zdgiFSOzDkUyywPWBZQQCqgCDVI6s1sev2H/0qR3uyNdO/3AaHh1I3tu30jOmQIBVQBB6wLKBkex8/NI5fgLYz1RC6HCLacz1PEyOLMzkj6S/sKqAIPWBZGPP/cp8BOuMaQBRzSi/qM315ajlWSW/XKSJLfrlI/LqqAAD+/yfnD7CpSeW9nqQLpVikE/GYvWUETlUhUikxkHdsNMof+SDeSw2KrCvHvXx/lxSZ+qMTBXqKWKtWwgJBX0lUEf3fcGVzEqD9Tp0N1dgOHkOcVBcF0SWzGp3PmbnWUJBagYr8lYV/56r8EP4qXgWsbiJN07Vzqddppz82cAR2gZwBzoXKgropm7rp//av+DOv//AUIsVZd63H/YkgLl5lBtVxYmulUbhugv7Y5zamfj47YdEs8nD+nQ91VCY9rMARSVbADAQZedM5v/+Mzmn6C84FQfv6Jdavy+bSvqjo7zHwP82He2izRZ/+iYf88udf+mMtXNvPoB0tHNfJp4hgp06SUE/KXi/TLkvmphTPfIrhg5asQOH+HjV0oGag6HtkyAXKUD53V6tPGTZvBq2AMbj5qxUcWzhDq5bpMBgOhhPpyoqJdO+z3ht12iRqY/AT1afxkZqct5ptyaEgiWrr9DDCGfMRHuI557dGgdf3rUnrfdFSzLm54DV/Y5jOq3FUt+vmw2DpHpFmz42jRKdTKzg9LYZ3g789NXRZEblH+mLAHlEsRNr+ifXNj0ytpHvhj213HjlLF3nyhc308nqD+EuYrufCew07xcDCTqCiJ7nKAdP790qoO5SK+mO+HrPQ/PByT7n4zKJGpq0paqxYT1IujB4omFybJmbNENP/6Psnh5WzjRkKcLDX/OBb+OAuROmeeoye06pBNMGOL4DvemUwvvEgh/X53ROpSuHezGTo4XMDJu6AS4NR4K9j0E4150rANy+QwDj8hEuklok3qPsb7TPRwmF5GwIZ3ZBHTs66L5c64Ot5LqIq0BFiMl6VHwJdu8yxqtzAheb3brUagyLT7PIdxo1QK0awZOOwHnZY0wOZRyz64x2UzTe0TJv+0mm8IwQn6S4ElEsPLKG06OW4b72AoAuAJTo47oe9fsjDrtuKi1rPM49QfqmDjGR7LVqFUaLzCotwiO1oEgPMZHt5HHA0Fo57eMFU6ff+mscn768uyPPrk/j4ZmCUL3qrrZWcpOa3l7p74p8Xuk/5Q4/s+ym6hkK5DKhuqqqGwSTwSkEYhuZxTlrVY33Q8bfsnp4cOOkPVVKWWm+ZOkBDmuvHXRAkbBoon16VAVlyhET9ElPI8nmqpsDyq/vk/TPebCrp0SWmSVwC8kHFegg9jJizUzmQGgMqmSDyH3x/p6pARzExn3R5sGI4yF7quOTB8ES7j/Vw/JBg/6SUxdixshZ9hfWsjFmWiOO6eQgLORTquFPSo9ruwNOYGw1FVh59tI4e9788eNokBJ7ej5/IXh13ch9o4lx6JfT09lx2eDl8kgRXucfoiDCkdzPDOYuu224SOAu2EnUKLDD2Lck4iuivQ+3hNSSO21X4FDLh7GgcsyNAVybzPayZoLlYFJC3VBPDrp3R8UCS13Z13ol1vF75BuZq3KbFmA6v+4C/KE2d5OBimvPOH7SL2qYylNkJEwjujYE0gAAA");

},
614081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
901750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
401633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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