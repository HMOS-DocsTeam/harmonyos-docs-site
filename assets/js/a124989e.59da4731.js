"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["991203"], {
849906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_atomic_services_ohos_atomicservice_atomicservicesearch_ohos_atomicservice_atomicservicesearch_md_a12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-atomic-services-ohos-atomicservice-atomicservicesearch-ohos-atomicservice-atomicservicesearch-md-a12.json
var site_docs_ref_arkui_api_arkui_declarative_comp_atomic_services_ohos_atomicservice_atomicservicesearch_ohos_atomicservice_atomicservicesearch_md_a12_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch/ohos-atomicservice-atomicservicesearch","title":"AtomicServiceSearch","description":"AtomicServiceSearch为开发者提供满足定制化需求的功能，内容包括默认显示的搜索区、可自定义的选择区和功能区（最多两个）。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch/ohos-atomicservice-atomicservicesearch.md","sourceDirName":"arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch","slug":"/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch/ohos-atomicservice-atomicservicesearch","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch/ohos-atomicservice-atomicservicesearch","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AtomicServiceSearch","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicesearch","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-atomicservice-atomicservicesearch"},"sidebar":"ref","previous":{"title":"AtomicServiceNavigation","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicenavigation/ohos-atomicservice-atomicservicenavigation"},"next":{"title":"AtomicServiceTabs","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicetabs/ohos-atomicservice-atomicservicetabs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicesearch/ohos-atomicservice-atomicservicesearch.md


const frontMatter = {
	title: 'AtomicServiceSearch',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicesearch',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-atomicservice-atomicservicesearch'
};
const contentTitle = 'AtomicServiceSearch';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AtomicServiceSearch",
  "id": "atomicservicesearch-1",
  "level": 2
}, {
  "value": "SelectParams",
  "id": "selectparams",
  "level": 2
}, {
  "value": "SearchParams",
  "id": "searchparams",
  "level": 2
}, {
  "value": "OperationParams",
  "id": "operationparams",
  "level": 2
}, {
  "value": "InputFilterParams",
  "id": "inputfilterparams",
  "level": 2
}, {
  "value": "SearchButtonParams",
  "id": "searchbuttonparams",
  "level": 2
}, {
  "value": "MenuAlignParams",
  "id": "menualignparams",
  "level": 2
}, {
  "value": "OnSelectCallback",
  "id": "onselectcallback",
  "level": 2
}, {
  "value": "OnPasteCallback",
  "id": "onpastecallback",
  "level": 2
}, {
  "value": "OnTextSelectionChangeCallback",
  "id": "ontextselectionchangecallback",
  "level": 2
}, {
  "value": "OnContentScrollCallback",
  "id": "oncontentscrollcallback",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（AtomicServiceSearch添加选择区）",
  "id": "示例1atomicservicesearch添加选择区",
  "level": 3
}, {
  "value": "示例2（AtomicServiceSearch添加功能位）",
  "id": "示例2atomicservicesearch添加功能位",
  "level": 3
}, {
  "value": "示例3（AtomicServiceSearch添加选择区及功能位）",
  "id": "示例3atomicservicesearch添加选择区及功能位",
  "level": 3
}, {
  "value": "示例4（search回调事件）",
  "id": "示例4search回调事件",
  "level": 3
}, {
  "value": "示例5（AtomicServiceSearch修改样式）",
  "id": "示例5atomicservicesearch修改样式",
  "level": 3
}, {
  "value": "示例6（通过controller实现光标位置的设置）",
  "id": "示例6通过controller实现光标位置的设置",
  "level": 3
}, {
  "value": "示例7（设置输入法回车键类型）",
  "id": "示例7设置输入法回车键类型",
  "level": 3
}, {
  "value": "示例8（设置文字特性效果）",
  "id": "示例8设置文字特性效果",
  "level": 3
}, {
  "value": "示例9（设置文本自适应）",
  "id": "示例9设置文本自适应",
  "level": 3
}, {
  "value": "示例10（文本扩展自定义菜单）",
  "id": "示例10文本扩展自定义菜单",
  "level": 3
}, {
  "value": "示例11（设置文本水平对齐/光标样式/选中背景色）",
  "id": "示例11设置文本水平对齐光标样式选中背景色",
  "level": 3
}, {
  "value": "示例12（对输入的文本进行过滤）",
  "id": "示例12对输入的文本进行过滤",
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
        id: "atomicservicesearch",
        children: "AtomicServiceSearch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AtomicServiceSearch为开发者提供满足定制化需求的功能，内容包括默认显示的搜索区、可自定义的选择区和功能区（最多两个）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(996161)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "atomicservicesearch-1",
      children: "AtomicServiceSearch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AtomicServiceSearch({\n  value?: ResourceStr,\n  placeholder?: ResourceStr,\n  controller?: SearchController,\n  select?: SelectParams,\n  search?: SearchParams,\n  operation?: OperationParams,\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前显示的搜索文本内容。默认值为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placeholder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索框内默认显示的提示文本。默认值为Search。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#searchcontroller",
              children: "SearchController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search组件控制器，用于设置输入光标的位置、退出编辑态等操作。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "select"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#selectparams",
              children: "SelectParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select选择区的内容、事件及样式。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#searchparams",
              children: "SearchParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search搜索区可支持的事件及样式。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#operationparams",
              children: "OperationParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择区（右侧）的功能设置项。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectparams",
      children: "SelectParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AtomicServiceSearch中“选择区”的可选属性。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉选项内容。默认值为undefined。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下拉菜单初始选项的索引。第一项的索引为0。当不设置selected属性时，默认选择值为-1，菜单项不选中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下拉按钮本身的文本内容。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSelect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onselectcallback",
              children: "OnSelectCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉菜单选中某一项的回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuItemContentModifier"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier#contentmodifiert",
              children: "ContentModifier"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#menuitemconfiguration12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "MenuItemConfiguration"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Select组件上，定制下拉菜单项内容区的方法。在应用了该属性后，下拉菜单的内容将完全由开发者自定义，此时为选择区设置的下拉菜单分割线、背景色及字体样式等属性将不再生效。  modifier: 内容修改器，开发者需要自定义class实现ContentModifier接口。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "divider"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker#divideroptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DividerOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉按钮本身的文本样式。默认值：{size: $r('sys.float.ohos_id_text_size_body1')}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
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
            children: "下拉菜单选中项的文本颜色。默认值：{fontColor: $r('sys.color.ohos_id_color_text_primary')}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedOptionBgColor"
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
            children: "下拉菜单选中项的背景色。默认值：$r('sys.color.ohos_id_color_component_activated')混合$r('sys.color.ohos_id_alpha_highlight_bg')的透明度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedOptionFont"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉菜单选中项的文本样式。默认值：{size: $r('sys.color.ohos_id_text_size_body1'), weight: FontWeight.Regular}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedOptionFontColor"
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
            children: "下拉菜单选中项的文本颜色。默认值：$r('sys.color.ohos_id_color_text_primary_activated')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optionBgColor"
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
            children: "下拉菜单项的背景色。默认值：Color.Transparent。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optionFont"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉菜单项的文本样式。默认值：{size: $r('sys.float.ohos_id_text_size_body1'), weight: FontWeight.Regular}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optionFontColor"
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
            children: "下拉菜单项的文本颜色。默认值：$r('sys.color.ohos_id_color_text_primary')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optionWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#optionwidthmode11",
              children: "OptionWidthMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optionHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下拉菜单显示的最大高度，不支持设置百分比。下拉菜单的默认最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过默认最大高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉菜单项的文本与箭头之间的间距。默认值：8。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arrowPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#arrowposition10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ArrowPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下拉菜单项的文本与箭头之间的对齐方式。默认值：ArrowPosition.END。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menualignparams",
              children: "MenuAlignParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下拉按钮与下拉菜单间的对齐方式。默认值：{alignType: MenuAlignType.START, offset: {dx: 0, dy: 0}}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuBackgroundColor"
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
            children: "下拉菜单的背景色。默认值：Color.Transparent。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuBackgroundBlurStyle"
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
            children: "下拉菜单的背景模糊材质。默认值：BlurStyle.COMPONENT_ULTRA_THICK。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchparams",
      children: "SearchParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AtomicServiceSearch中“搜索区”的可选属性。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "searchKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用作找到一个唯一的search组件。默认值：undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "componentBackgroundColor"
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
            children: "设置组件的背景色。默认值：$r('sys.color.ohos_id_color_text_field_sub_bg')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pressedBackgroundColor"
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
            children: "设置组件按压态的背景色。默认值：$r('sys.color.ohos_id_color_click_effect')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "searchButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#searchbuttonparams",
              children: "SearchButtonParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置搜索框末尾搜索按钮。点击搜索按钮，同时触发onSubmit与onClick回调。  -value：搜索框末尾搜索按钮文本内容。  -option: 配置搜索框文本样式。默认值：{fontSize: '16fp', fontColor: '#ff3f97e9'}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placeholderColor"
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
            children: "placeholder文本颜色。默认值：$r('sys.color.ohos_id_color_text_secondary')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placeholderFont"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置placeholder文本样式，包括字体大小，字体粗细，字体族，字体风格。默认值：{size: $r('sys_float.ohos_id_text_size_body1')}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textFont"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置搜索框内输入文本样式，包括字体大小，字体粗细，字体族，字体风格。目前仅支持默认字体族。默认值：{size: $r('sys_float.ohos_id_text_size_body1')}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textalign",
              children: "TextAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本在搜索框中的对齐方式。默认值：TextAlign.Start。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
              children: "CopyOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的文本是否可复制。默认值：CopyOptions.LocalDevice，支持设备内复制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "searchIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#iconoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#iconoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧清除按钮样式。默认值：{style: CancelButtonStyle.INPUT, icon: {size: '16vp', color: '#99ffffff', src: ' '}}。  当style为CancelButtonStyle.CONSTANT时，默认显示清除样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
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
            children: "输入文本的字体颜色。默认值：$r('sys.color.ohos_id_color_text_secondary')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caretStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#caretstyle10",
              children: "CaretStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标样式。默认值：{width: '1.5vp', color: '#007DFF'}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableKeyboardOnFocus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search获焦时，是否主动拉起软键盘。true表示Search获焦时主动拉起软键盘。默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hideSelectionMenu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否不弹出系统文本选择菜单。  设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，不弹出系统文本选择菜单。设置为false时，弹出系统文本选择菜单。默认值：false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#searchtype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SearchType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框类型。默认值：SearchType.Normal。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的最大输入字符数。默认不设置最大输入字符数限制。到达文本最大字符限制，将无法继续输入字符。默认值：-1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enterKeyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#enterkeytype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "EnterKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法回车键类型。默认值：EnterKeyType.Search。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decoration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#textdecorationoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextDecorationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本装饰线对象。默认值：{type: TextDecorationType.None, color: Color.Black, style: TextDecorationStyle.SOLID}。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "letterSpacing"
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
            children: "fontFeature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文字特性效果，比如数字等宽的特性。  格式为：normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedBackgroundColor"
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
            children: "文本选中底板颜色。默认为20%不透明度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputfilterparams",
              children: "InputFilterParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。仅支持单个字符匹配，不支持字符串匹配。默认值为undefined。  -value: 正则表达式。  -error: 正则匹配失败时，返回被过滤的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textIndent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首行文本缩进。默认值：0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minFontSize"
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
            children: "maxFontSize"
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
            children: "editMenuOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editmenuoptions",
              children: "EditMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enablePreviewText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启输入预上屏。true表示开启输入预上屏。默认值：true。  需要配合开启输入法的预上屏功能。预上屏内容定义为文字暂存态，目前不支持文字拦截功能，因此该值为true时不触发onWillInsert、onDidInsert回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableHapticFeedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启触控反馈。true表示开启。默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSubmit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#searchsubmitcallback14",
              children: "SearchSubmitCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editabletextonchangecallback12",
              children: "EditableTextOnChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入内容发生变化时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCopy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行复制操作时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行剪切操作时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onPaste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onpastecallback",
              children: "OnPasteCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行粘贴操作时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onTextSelectionChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ontextselectionchangecallback",
              children: "OnTextSelectionChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择的位置发生变化或编辑状态下光标位置发生变化时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onContentScroll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oncontentscrollcallback",
              children: "OnContentScrollCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容滚动时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onEditChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。isEditing为true表示正在输入。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillInsert"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#insertvalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "InsertValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在将要输入时，触发该回调。true表示将输入内容正常插入结果字符串，false表示不插入。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidInsert"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#insertvalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "InsertValue"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在输入完成时，触发该回调。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDelete"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#deletevalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DeleteValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在将要删除时，触发该回调。true表示正常删除，false表示不删除。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDelete"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#deletevalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DeleteValue"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在删除完成时，触发该回调。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operationparams",
      children: "OperationParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AtomicServiceSearch中“功能区”的初始化参数。"
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
            children: "auxiliaryItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader#operationoption",
              children: "OperationOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "附属于搜索区（右侧）的功能位。默认值为undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "independentItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-subheader/ohos-arkui-advanced-subheader#operationoption",
              children: "OperationOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "独立于搜索区（右侧）的功能位。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputfilterparams",
      children: "InputFilterParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搜索框过滤设置项。"
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
            children: "inputFilterValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正则表达式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正则匹配失败时，返回被过滤的内容。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchbuttonparams",
      children: "SearchButtonParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搜索框末尾搜索按钮设置项。"
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
            children: "searchButtonValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索框末尾搜索按钮文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#searchbuttonoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SearchButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置搜索框文本样式。默认值：{fontSize: '16fp',fontColor: '#ff3f97e9'}。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menualignparams",
      children: "MenuAlignParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下拉按钮与下拉菜单间的对齐方式设置项。"
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
            children: "alignType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#menualigntype10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "MenuAlignType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对齐方式类型。默认值：MenuAlignType.START。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#offset",
              children: "Offset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。默认值：{dx: 0, dy: 0}。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onselectcallback",
      children: "OnSelectCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnSelectCallback = (index: number, selectValue: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下拉菜单选中某一项的回调。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项的索引，索引从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onpastecallback",
      children: "OnPasteCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnPasteCallback = (pasteValue: string, event: PasteEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行粘贴操作时，触发该回调。"
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
            children: "pasteValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要粘贴的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#pasteevent11",
              children: "PasteEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义粘贴事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontextselectionchangecallback",
      children: "OnTextSelectionChangeCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本选择的位置发生变化或编辑状态下光标位置发生变化时，触发该回调。"
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
            children: "selectionStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择区域的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择区域的结束位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncontentscrollcallback",
      children: "OnContentScrollCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本内容滚动时，触发该回调。"
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
            children: "totalOffsetX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本左上角横坐标相较于整个内容输入区左上角横坐标的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "totalOffsetY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本左上角纵坐标相较于整个内容输入区左上角纵坐标的偏移量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1atomicservicesearch添加选择区",
      children: "示例1（AtomicServiceSearch添加选择区）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过select参数为AtomicServiceSearch组件添加左侧选择区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 6 }) {\n      Text('AtomicServiceSearch添加选择区').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        select: {\n          options: [\n            { value: 'Select1', icon: $r(\"app.media.sweep\") }, // 自定义资源\n            { value: 'Select2', icon: $r(\"app.media.sweep\") }, // 自定义资源\n            { value: 'Select3', icon: $r(\"app.media.sweep\") }, // 自定义资源\n            { value: 'Select4', icon: $r(\"app.media.sweep\") } // 自定义资源\n          ],\n          selected: -1,\n          selectValue: 'Select1',\n          onSelect: (index: number, selectValue: string) => { // 自定义事件\n            if (index === 0) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            } else if (index === 1) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            } else if (index === 2) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            } else if (index === 3) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            }\n          },\n        }\n      })\n    }.padding({ left: 16, right: 16 })\n  }\n\n  private alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(695269)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2atomicservicesearch添加功能位",
      children: "示例2（AtomicServiceSearch添加功能位）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过operation参数为AtomicServiceSearch组件添加右侧功能位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 6 }) {\n      Text('AtomicServiceSearch添加功能位').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n      \n      AtomicServiceSearch({\n        operation: {\n          // 附属于Search组件的功能位\n          auxiliaryItem: {\n            value: $r(\"app.media.sweep\"), // 自定义资源\n            action: () => {\n              this.alert('扫一扫'); // 自定义事件\n            }\n          },\n          // 独立于Search组件的功能位\n          independentItem: {\n            value: $r(\"app.media.dingding\"), // 自定义资源\n            action: () => {\n              this.alert('通知'); // 自定义事件\n            }\n          }\n        }\n      })\n    }.padding({ left: 16, right: 16 })\n  }\n\n  private alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(503304)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3atomicservicesearch添加选择区及功能位",
      children: "示例3（AtomicServiceSearch添加选择区及功能位）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例中为AtomicServiceSearch组件同时添加左侧选择区和右侧功能位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 6 }) {\n      Text('AtomicServiceSearch+选择区+功能位').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        select: {\n          options: [\n            { value: 'Select1', icon: $r(\"app.media.sweep\") }, // 自定义资源\n            { value: 'Select2', icon: $r(\"app.media.sweep\") }, // 自定义资源\n            { value: 'Select3', icon: $r(\"app.media.sweep\") }, // 自定义资源\n            { value: 'Select4', icon: $r(\"app.media.sweep\") } // 自定义资源\n          ],\n          selected: -1,\n          selectValue: 'Select1',\n          onSelect: (index: number, selectValue:string) => {\n            if (index === 0) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            } else if (index === 1) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            } else if (index === 2) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            } else if (index === 3) {\n              this.alert(`index: ${index}, selectValue: ${selectValue}`);\n            }\n          },\n        },\n        operation: {\n          auxiliaryItem: {\n            value: $r(\"app.media.sweep\"), // 自定义资源\n            action: () => {\n              this.alert('扫一扫'); // 自定义事件\n            }\n          },\n          independentItem: {\n            value: $r(\"app.media.dingding\"), // 自定义资源\n            action: () => {\n              this.alert('通知'); // 自定义事件\n            }\n          }\n        }\n      })\n    }.padding({ left: 16, right: 16 })\n  }\n\n  private alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(955128)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4search回调事件",
      children: "示例4（search回调事件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过onWillInsert、onDidInsert、onWillDelete、onDidDelete接口实现了插入和删除的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过onSubmit接口实现了搜索区内容提交的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过onChange接口实现了监听搜索区内容变化的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State insertValue: string = \"\";\n  @State deleteValue: string = \"\";\n  @State insertOffset: number = 0;\n  @State deleteOffset: number = 0;\n  @State deleteDirection: number = 0;\n  @State startIndex: number = 0;\n  @State endIndex: number = 0;\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State changeValue: string = '';\n  @State value: string = 'false';\n  @State submitValue: string = '';\n  @State text: string = 'Search editMenuOptions';\n\n  build() {\n    Column({ space: 6 }) {\n      Text('AtomicServiceSearch绑定事件').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      Column({ space: 6 }) {\n        Text('editing: ' + this.value).width('100%').height(25).borderRadius(15).padding({ left: 15 })\n          .backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1).textOverflow({ overflow: TextOverflow.MARQUEE });\n        Text('onSubmit:' + this.submitValue).width('100%').height(25).borderRadius(15).padding({ left: 15 })\n          .backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1).textOverflow({ overflow: TextOverflow.MARQUEE });\n        Text('onChange:' + this.changeValue).width('100%').height(25).borderRadius(15).padding({ left: 15 })\n          .backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1).textOverflow({ overflow: TextOverflow.MARQUEE });\n        Text('offset x:' + this.offsetX + ' y:' + this.offsetY).width('100%').height(25).borderRadius(15).padding({ left: 15 })\n          .backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1).textOverflow({ overflow: TextOverflow.MARQUEE });\n        Text(\"insertValue:\" + this.insertValue + \"  insertOffset:\" + this.insertOffset).width('100%').height(25)\n          .borderRadius(15).padding({ left: 15 }).backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1)\n          .textOverflow({ overflow: TextOverflow.MARQUEE });\n        Text(\"deleteValue:\" + this.deleteValue + \"  deleteOffset:\" + this.deleteOffset).width('100%').height(25)\n          .borderRadius(15).padding({ left: 15 }).backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1)\n          .textOverflow({ overflow: TextOverflow.MARQUEE });\n        Text(\"deleteDirection:\" + (this.deleteDirection == 0 ? \"BACKWARD\" : \"FORWARD\")).width('100%').height(25)\n          .borderRadius(15).padding({ left: 15 }).backgroundColor('rgba(0, 0, 0, 0.1)').maxLines(1)\n          .textOverflow({ overflow: TextOverflow.MARQUEE });\n        AtomicServiceSearch({\n          select: {\n            options: [\n              { value: 'Select1', icon: $r(\"app.media.sweep\") },\n              { value: 'Select2', icon: $r(\"app.media.sweep\") },\n              { value: 'Select3', icon: $r(\"app.media.sweep\") },\n              { value: 'Select4', icon: $r(\"app.media.sweep\") }\n            ],\n            selected: -1,\n            selectValue: 'Select1',\n            onSelect: (index: number) => {\n              if (index === 0) {\n                this.alert('Select1');\n              } else if (index === 1) {\n                this.alert('Select2');\n              } else if (index === 2) {\n                this.alert('Select3');\n              } else if (index === 3) {\n                this.alert('Select4');\n              }\n            },\n          },\n          search: {\n            onSubmit: (value: string) => {\n              this.submitValue = value\n            },\n            onChange: (value: string) => {\n              this.changeValue = value\n            },\n            onCopy: () => {\n              this.alert('onCopy');\n            },\n            onCut: () => {\n              this.alert('onCut');\n            },\n            onPaste: () => {\n              this.alert('onPaste');\n            },\n            onTextSelectionChange: (selectionStart: number, selectionEnd: number) => {\n              this.startIndex = selectionStart\n              this.endIndex = selectionEnd\n            },\n            onContentScroll: (totalOffsetX: number, totalOffsetY: number) => {\n              this.offsetX = totalOffsetX\n              this.offsetY = totalOffsetY\n            },\n            onEditChange: (data: boolean) => {\n              this.value = data ? 'true' : 'false'\n            },\n            onWillInsert: (info: InsertValue) => {\n              this.insertValue = info.insertValue\n              return true;\n            },\n            onDidInsert: (info: InsertValue) => {\n              this.insertOffset = info.insertOffset\n            },\n            onWillDelete: (info: DeleteValue) => {\n              this.deleteValue = info.deleteValue\n              info.direction\n              return true;\n            },\n            onDidDelete: (info: DeleteValue) => {\n              this.deleteOffset = info.deleteOffset\n              this.deleteDirection = info.direction\n            }\n          }\n        })\n      }\n    }.padding({ left: 16, right: 16 })\n  }\n\n  private alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721361)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5atomicservicesearch修改样式",
      children: "示例5（AtomicServiceSearch修改样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过search、select、value、placeholder参数实现了AtomicServiceSearch组件样式的自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch, SearchParams, SelectParams } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State private placeholder: string = 'Type to Search...';\n  @State private defaultValue: string = 'default';\n  @State private search?: SearchParams = {};\n  @State private select?: SelectParams = {\n    options: [\n      { value: 'Select1', icon: $r(\"app.media.sweep\") },\n      { value: 'Select2', icon: $r(\"app.media.sweep\") },\n      { value: 'Select3', icon: $r(\"app.media.sweep\") },\n      { value: 'Select4', icon: $r(\"app.media.sweep\") }\n    ],\n    selected: -1,\n    selectValue: 'Select1',\n    onSelect: (index: number) => {\n      if (index === 0) {\n        this.alert('Select1');\n      } else if (index === 1) {\n        this.alert('Select2');\n      } else if (index === 2) {\n        this.alert('Select3');\n      } else if (index === 3) {\n        this.alert('Select4');\n      }\n    }\n  };\n\n  build() {\n    Column({ space: 8 }) {\n      Text('AtomicServiceSearch修改样式').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        value: this.defaultValue,\n        placeholder: this.placeholder,\n        select: this.select,\n        search: this.search,\n        operation: {\n          independentItem: {\n            value: $r(`app.media.dingding`),\n            action: () => {\n              this.alert('通知');\n            }\n          }\n        }\n      })\n      Button(\"修改placeholder\")\n        .width('100%')\n        .type(ButtonType.Normal)\n        .borderRadius(20)\n        .onClick(() => {\n          if (this.placeholder === 'Search...') {\n            this.placeholder = 'Type to Search...';\n          } else {\n            this.placeholder = 'Search...';\n          }\n        });\n      Button(\"修改defaultValue\")\n        .width('100%')\n        .type(ButtonType.Normal)\n        .borderRadius(20)\n        .onClick(() => {\n          if (this.defaultValue === 'value') {\n            this.defaultValue = 'defaultValue';\n          } else {\n            this.defaultValue = 'value';\n          }\n        });\n      Button(\"修改Select样式\")\n        .width('100%')\n        .type(ButtonType.Normal)\n        .borderRadius(20)\n        .onClick(() => {\n          this.select = {\n            options: [\n              { value: '选项1', icon: $r(\"app.media.dingding\") },\n              { value: '选项2', icon: $r(\"app.media.dingding\") },\n            ],\n            selected: -1,\n            selectValue: '选项1',\n            onSelect: (index: number) => {\n              if (index === 0) {\n                this.alert('选项1');\n              } else if (index === 1) {\n                this.alert('选项2');\n              }\n            }\n          };\n        });\n\n      Button(\"修改Search样式\")\n        .width('100%')\n        .type(ButtonType.Normal)\n        .borderRadius(20)\n        .onClick(() => {\n          this.search = {\n            componentBackgroundColor: '#e0eee8'\n          }\n        });\n    }.padding({ left: 16, right: 16 })\n  }\n\n  private alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(850150)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6通过controller实现光标位置的设置",
      children: "示例6（通过controller实现光标位置的设置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过controller参数实现了光标位置的设置、选择指定区域中的内容及关闭编辑状态的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  controller: SearchController = new SearchController();\n\n  build() {\n    Column({ space : 10 }) {\n      Text('通过controller实现光标位置的设置').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch(\n        {\n          value: 'Default Value',\n          placeholder: 'Type to Search...',\n          controller: this.controller,\n          search: {\n            searchButton: {\n              searchButtonValue: 'SEARCH',\n              options: { fontSize: '12fp', fontColor: '#ff0e1216' }\n            }\n          }\n        },\n      );\n      Button('caretPosition to 1').onClick(() => {\n        this.controller.caretPosition(1);\n      }).width('100%')\n      Button('stopEditing').onClick(() => {\n        this.controller.stopEditing();\n      }).width('100%')\n      Button('Selection [0,3]').onClick(() => {\n        this.controller.setTextSelection(0, 3)\n      }).width('100%')\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(181047)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置输入法回车键类型",
      children: "示例7（设置输入法回车键类型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过enterKeyType属性实现了动态切换输入法回车键的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State enterTypes: Array<EnterKeyType> = [EnterKeyType.Go, EnterKeyType.Search, EnterKeyType.Send, EnterKeyType.Done, EnterKeyType.Next, EnterKeyType.PREVIOUS, EnterKeyType.NEW_LINE]\n  @State index: number = 0\n\n  build() {\n    Column({ space : 10 }) {\n      Text('输入法回车键类型为搜索').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        placeholder: '输入法回车键类型为搜索',\n        search: {\n          enterKeyType: this.enterTypes[this.index]\n        }\n      })\n\n      Button('改变EnterKeyType').onClick(() => {\n        this.index = (this.index + 1) % this.enterTypes.length;\n      }).width('100%')\n\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771495)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置文字特性效果",
      children: "示例8（设置文字特性效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过fontFeature属性实现了文本在不同文字特性下的展示效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "​​​​import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space : 10 }) {\n      Text('设置文字特性效果').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        value: 'This is ss01 on : 0123456789',\n        search: {\n          fontFeature: \"\\\"ss01\\\" on\"\n        }\n      });\n\n      AtomicServiceSearch({\n        value: 'This is ss01 off : 0123456789',\n        search: {\n          fontFeature: \"\\\"ss01\\\" off\"\n        }\n      });\n\n      AtomicServiceSearch({\n        value: 'fiabc1234567DEFGHIJKLMN',\n        search: {\n          fontFeature: \"\\\"frac\\\" on\"\n        }\n      });\n\n      AtomicServiceSearch({\n        value: 'fiabc1234567DEFGHIJKLMN',\n        search: {\n          fontFeature: \"\\\"frac\\\" off\"\n        }\n      });\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711830)/* ["default"] */.A) + "",
        width: "542",
        height: "323"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置文本自适应",
      children: "示例9（设置文本自适应）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过minFontSize、maxFontSize属性展示了文本自适应字号的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space : 10 }) {\n      Text('设置文本自适应').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        value: 'This is the text without the adaptive font',\n      }).width('80%').height(40).borderWidth(1).borderRadius(20)\n\n      AtomicServiceSearch({\n        value: 'This is the text without the adaptive font',\n        search: {\n          minFontSize: 4,\n          maxFontSize: 40\n        }\n      }).width('80%').height(40).borderWidth(1).borderRadius(20)\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252870)/* ["default"] */.A) + "",
        width: "555",
        height: "203"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10文本扩展自定义菜单",
      children: "示例10（文本扩展自定义菜单）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过editMenuOptions接口实现了文本设置自定义菜单扩展项的文本内容、图标以及回调的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch, TextMenuController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  aboutToAppear(): void {\n    TextMenuController.disableMenuItems([TextMenuItemId.AI_WRITER])\n  }\n\n  onCreateMenu = (menuItems: Array<TextMenuItem>) => {\n    let item1: TextMenuItem = {\n      content: 'custom1',\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('custom1'),\n    }\n    let item2: TextMenuItem = {\n      content: 'custom2',\n      id: TextMenuItemId.of('custom2'),\n      icon: $r('app.media.startIcon'),\n    }\n    menuItems.push(item1)\n    menuItems.unshift(item2)\n    return menuItems\n  }\n  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n    if (menuItem.id.equals(TextMenuItemId.of('custom2'))) {\n      console.info('拦截 id: custom2 start:' + textRange.start + '; end:' + textRange.end)\n      return true\n    }\n    if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      console.info('拦截 COPY start:' + textRange.start + '; end:' + textRange.end)\n      return true\n    }\n    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n      console.info('不拦截 SELECT_ALL start:' + textRange.start + '; end:' + textRange.end)\n      return false\n    }\n    return false\n  }\n  @State editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu, onMenuItemClick: this.onMenuItemClick\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text('文本扩展自定义菜单').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        value: 'Default input',\n        search: {\n          editMenuOptions: this.editMenuOptions\n        }\n      })\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(950200)/* ["default"] */.A) + "",
        width: "390",
        height: "135"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11设置文本水平对齐光标样式选中背景色",
      children: "示例11（设置文本水平对齐/光标样式/选中背景色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过textAlign、caretStyle、selectedBackgroundColor属性展示如何设置文本的水平对齐、光标样式和选中背景色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch, TextMenuController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  aboutToAppear(): void {\n    TextMenuController.disableMenuItems([TextMenuItemId.AI_WRITER])\n  }\n\n  build() {\n    Column() {\n      Text('设置文本水平对齐/光标样式/选中背景色').alignSelf(ItemAlign.Start).decoration({\n        type: TextDecorationType.Underline,\n        color: Color.Black,\n        style: TextDecorationStyle.SOLID\n      }).margin({ top: 20, bottom: 20 })\n\n      AtomicServiceSearch({\n        value: 'Search textAlign sample',\n        search: {\n          textAlign: TextAlign.Center,\n          caretStyle: { width: 3, color: Color.Green },\n          selectedBackgroundColor: Color.Gray\n        }\n      })\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762534)/* ["default"] */.A) + "",
        width: "720",
        height: "211"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12对输入的文本进行过滤",
      children: "示例12（对输入的文本进行过滤）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过inputFilter属性展示如何对输入的文本进行内容的过滤，以限制输入内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AtomicServiceSearch } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State filterValue: string = '';\n\n  build() {\n    Column() {\n      Column({ space: 10 }) {\n        Text('对输入的文本进行过滤').alignSelf(ItemAlign.Start).decoration({\n          type: TextDecorationType.Underline,\n          color: Color.Black,\n          style: TextDecorationStyle.SOLID\n        }).margin({ top: 20, bottom: 20 })\n        AtomicServiceSearch({\n          placeholder: 'please enter...',\n          search: {\n            inputFilter: {\n              inputFilterValue : '[a-z]',\n              error: (filterValue: string) => {this.filterValue = filterValue}\n            }\n          }\n        })\n        Text('Filter:' + this.filterValue).alignSelf(ItemAlign.Start)\n\n      }\n    }.padding({ left: 16, right: 16 })\n  }\n\n  public alert(message: string): void {\n    this.getUIContext().showAlertDialog({ message: message });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924576)/* ["default"] */.A) + "",
        width: "558",
        height: "1166"
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
850150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960082-23e6d046d7090e9b94dc53f34b65c091.gif");

},
924576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440131-d519b29b575e775187e4a0c1a89857c3.gif");

},
695269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960080-8c16408d7ae717b2ffd48524af7182f9.gif");

},
955128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800432-95350579edd2fb22cb9b418c77fc647e.gif");

},
181047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480083-a6c8426f4cf907e39f3ea5f841e58d72.gif");

},
771495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800434-d56cbabd6b65d4770ccceb332e2edf49.gif");

},
503304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480081-c0496646735cb4e75784ab19fc90492b.gif");

},
762534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800436-06dd29b743e1b94c22e077019dcd3a42.png");

},
711830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440129-c481ca6f961885afa5238fee7e364961.png");

},
996161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
950200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480085-09ddddc10f2fe852c4f826b5b61018d3.gif");

},
721361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440127-bba6f6d9a996fd8e1ce2cc1c3db826ef.gif");

},
252870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960084-34d1b5bc4f621884f11029823c706a0f.png");

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