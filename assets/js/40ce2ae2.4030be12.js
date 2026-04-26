"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["519774"], {
432880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_checkbox_ts_basic_components_checkbox_md_40c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-buttons-and-selections-ts-basic-components-checkbox-ts-basic-components-checkbox-md-40c.json
var site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_checkbox_ts_basic_components_checkbox_md_40c_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox","title":"Checkbox","description":"提供多选框组件，通常用于某选项的打开或关闭。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox.md","sourceDirName":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox","slug":"/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Checkbox","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-checkbox"},"sidebar":"ref","previous":{"title":"Toggle","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle"},"next":{"title":"CheckboxGroup","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox.md


const frontMatter = {
	title: 'Checkbox',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-checkbox'
};
const contentTitle = 'Checkbox';

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
  "value": "CheckboxOptions对象说明",
  "id": "checkboxoptions对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "select",
  "id": "select",
  "level": 3
}, {
  "value": "select18+",
  "id": "select18",
  "level": 3
}, {
  "value": "selectedColor",
  "id": "selectedcolor",
  "level": 3
}, {
  "value": "selectedColor18+",
  "id": "selectedcolor18",
  "level": 3
}, {
  "value": "unselectedColor10+",
  "id": "unselectedcolor10",
  "level": 3
}, {
  "value": "unselectedColor18+",
  "id": "unselectedcolor18",
  "level": 3
}, {
  "value": "mark10+",
  "id": "mark10",
  "level": 3
}, {
  "value": "mark18+",
  "id": "mark18",
  "level": 3
}, {
  "value": "shape11+",
  "id": "shape11",
  "level": 3
}, {
  "value": "shape18+",
  "id": "shape18",
  "level": 3
}, {
  "value": "contentModifier12+",
  "id": "contentmodifier12",
  "level": 3
}, {
  "value": "contentModifier18+",
  "id": "contentmodifier18",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onChange",
  "id": "onchange",
  "level": 3
}, {
  "value": "onChange18+",
  "id": "onchange18",
  "level": 3
}, {
  "value": "OnCheckboxChangeCallback18+",
  "id": "oncheckboxchangecallback18",
  "level": 2
}, {
  "value": "CheckBoxConfiguration12+对象说明",
  "id": "checkboxconfiguration12对象说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置多选框形状）",
  "id": "示例1设置多选框形状",
  "level": 3
}, {
  "value": "示例2（设置多选框颜色）",
  "id": "示例2设置多选框颜色",
  "level": 3
}, {
  "value": "示例3（自定义多选框样式）",
  "id": "示例3自定义多选框样式",
  "level": 3
}, {
  "value": "示例4（设置文本多选框样式）",
  "id": "示例4设置文本多选框样式",
  "level": 3
}, {
  "value": "示例5（获取多选框选中信息）",
  "id": "示例5获取多选框选中信息",
  "level": 3
}, {
  "value": "示例6（设置滑动多选）",
  "id": "示例6设置滑动多选",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
    checkboxconfiguration: "checkboxconfiguration",
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
        id: "checkbox",
        children: "Checkbox"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供多选框组件，通常用于某选项的打开或关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699571)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 11开始，Checkbox默认样式由圆角方形变为圆形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checkbox(options?: CheckboxOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "#checkboxoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CheckboxOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置多选框的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkboxoptions对象说明",
      children: "CheckboxOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定多选框名称。  默认值：undefined，取值为undefined无效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于指定多选框所属群组的名称（即所属CheckboxGroup的名称）。  默认值：undefined，默认状态下配合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup#checkboxgroupoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CheckboxGroupOptions"
            }), "属性group信息为undefined的节点使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  未配合使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
              children: "CheckboxGroup"
            }), "组件时，此值无用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indicatorBuilder12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置多选框的选中样式为自定义组件。自定义组件与Checkbox组件为中心点对齐显示。indicatorBuilder设置为undefined/null时，默认为indicatorBuilder未设置状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "select",
      children: "select"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "select(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多选框选中状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 10开始，该属性支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
        children: "$$"
      }), "双向绑定变量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该属性支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
        children: "!!"
      }), "双向绑定变量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "多选框是否选中。  默认值：false  值为true时，多选框被选中。值为false时，多选框未选中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "select18",
      children: "select18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "select(isSelected: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置多选框选中状态。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#select",
        children: "select"
      }), "相比，isSelected参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该属性支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
        children: "$$"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
        children: "!!"
      }), "双向绑定变量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "isSelected"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框是否选中。  当isSelected的值为undefined时取默认值false。  值为true时，多选框被选中。值为false时，多选框未选中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedcolor",
      children: "selectedColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多选框选中状态颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框选中状态颜色。  默认值：$r('sys.color.ohos_id_color_text_primary_activated')  异常值按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedcolor18",
      children: "selectedColor18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedColor(resColor: Optional<ResourceColor>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置多选框选中状态颜色。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedcolor",
        children: "selectedColor"
      }), "相比，resColor参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "resColor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框选中状态颜色。  当resColor的值为undefined时取默认值$r('sys.color.ohos_id_color_text_primary_activated')。  异常值按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unselectedcolor10",
      children: "unselectedColor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unselectedColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多选框非选中状态的边框颜色。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框非选中状态边框颜色。  默认值：$r('sys.color.ohos_id_color_switch_outline_off')"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unselectedcolor18",
      children: "unselectedColor18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unselectedColor(resColor: Optional<ResourceColor>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置多选框非选中状态的边框颜色。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#unselectedcolor10",
        children: "unselectedColor"
      }), "10+相比，resColor参数新增了对undefined类型的支持。"]
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
            children: "resColor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框非选中状态边框颜色。  当resColor的值为undefined时取默认值$r('sys.color.ohos_id_color_switch_outline_off')"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mark10",
      children: "mark10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mark(value: MarkStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多选框内部图标的样式。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#markstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "MarkStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框内部图标样式。 从API version 12开始，设置了indicatorBuilder时，按照indicatorBuilder中的内容显示。  默认值：{  strokeColor : $r('sys.color.ohos_id_color_foreground_contrary'),  strokeWidth: $r('sys.float.ohos_id_checkbox_stroke_width'),  size: '20vp'  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mark18",
      children: "mark18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mark(style: Optional<MarkStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置多选框内部图标的样式。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#mark10",
        children: "mark"
      }), "10+相比，style参数新增了对undefined类型的支持。"]
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
            children: "style"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#markstyle10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "MarkStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框内部图标样式。 设置了indicatorBuilder时，按照indicatorBuilder中的内容显示。  当style的值为undefined时，默认值：{  strokeColor : $r('sys.color.ohos_id_color_foreground_contrary'),  strokeWidth: $r('sys.float.ohos_id_checkbox_stroke_width'),  size: '20vp'  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shape11",
      children: "shape11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shape(value: CheckBoxShape)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置Checkbox组件形状，包括圆形和圆角方形。如果想要调整当前Checkbox的样式，需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier12",
        children: "contentModifier"
      }), "属性自定义Checkbox样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#checkboxshape11",
              children: "CheckBoxShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkbox组件形状，包括圆形和圆角方形。  默认值：CheckBoxShape.CIRCLE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shape18",
      children: "shape18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shape(shape: Optional<CheckBoxShape>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置Checkbox组件形状，包括圆形和圆角方形。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#shape11",
        children: "shape"
      }), "11+相比，shape参数新增了对undefined类型的支持。如果想要调整当前Checkbox的样式，需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier12",
        children: "contentModifier"
      }), "属性自定义Checkbox样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "shape"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#checkboxshape11",
              children: "CheckBoxShape"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkbox组件形状，包括圆形和圆角方形。  当shape的值为undefined时，默认值为CheckBoxShape.CIRCLE。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentmodifier12",
      children: "contentModifier12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制Checkbox内容区的方法。设置该属性时，会导致其他属性设置失效。"
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
            children: "modifier"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier#contentmodifiert",
              children: "ContentModifier"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkboxconfiguration12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: (0,jsx_runtime.jsx)(_components.checkboxconfiguration, {})
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Checkbox组件上，定制内容区的方法。  modifier：内容修改器，开发者需要自定义class实现ContentModifier接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentmodifier18",
      children: "contentModifier18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentModifier(modifier: Optional<ContentModifier<CheckBoxConfiguration>>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定制Checkbox内容区的方法。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier12",
        children: "contentModifier"
      }), "12+相比，modifier参数新增了对undefined类型的支持。设置该属性时，会导致其他属性设置失效。"]
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
            children: "modifier"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier#contentmodifiert",
              children: "ContentModifier"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkboxconfiguration12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: (0,jsx_runtime.jsx)(_components.checkboxconfiguration, {})
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Checkbox组件上，定制内容区的方法。  modifier：内容修改器，开发者需要自定义class实现ContentModifier接口。  当modifier的值为undefined时，不使用内容修改器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange",
      children: "onChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: OnCheckboxChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当选中状态发生变化时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "#oncheckboxchangecallback18",
              children: "OnCheckboxChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回选中的状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange18",
      children: "onChange18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: Optional<OnCheckboxChangeCallback>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当选中状态发生变化时，触发该回调。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onchange",
        children: "onChange"
      }), "相比，callback参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oncheckboxchangecallback18",
              children: "OnCheckboxChangeCallback"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回选中的状态。  当callback的值为undefined时，不使用回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncheckboxchangecallback18",
      children: "OnCheckboxChangeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnCheckboxChangeCallback = (value: boolean) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "返回true表示已选中。返回false表示未选中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkboxconfiguration12对象说明",
      children: "CheckBoxConfiguration12+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要自定义class实现ContentModifier接口。继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-content-modifier/ts-universal-attributes-content-modifier#commonconfigurationt",
        children: "CommonConfiguration"
      }), "。"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前多选框名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示多选框是否被选中，值为true时，多选框被选中。值为false时，多选框未选中。  如果select属性没有设置默认值是false。  如果设置select属性，此值与设置select属性的值相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "triggerChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发多选框选中状态变化。true表示从未选中变为选中，false表示从选中变为未选中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置多选框形状",
      children: "示例1（设置多选框形状）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置CheckBoxShape实现圆形和圆角方形多选框样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CheckboxExample {\n  build() {\n    Flex({ justifyContent: FlexAlign.SpaceEvenly }) {\n      Checkbox({ name: 'checkbox1', group: 'checkboxGroup' })\n        .select(true)\n        .selectedColor(0xed6f21)\n        .shape(CheckBoxShape.CIRCLE)\n        .onChange((value: boolean) => {\n          console.info('Checkbox1 change is' + value);\n        })\n      Checkbox({ name: 'checkbox2', group: 'checkboxGroup' })\n        .select(false)\n        .selectedColor(0x39a2db)\n        .shape(CheckBoxShape.ROUNDED_SQUARE)\n        .onChange((value: boolean) => {\n          console.info('Checkbox2 change is' + value);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(613508)/* ["default"] */.A) + "",
        width: "333",
        height: "131"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置多选框颜色",
      children: "示例2（设置多选框颜色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置mark实现自定义多选框的颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n\n  build() {\n    Row() {\n      Column() {\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox1', group: 'checkboxGroup' })\n            .selectedColor(0x39a2db)\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox1 change is'+ value);\n            })\n            .mark({\n              strokeColor:Color.Black,\n              size: 50,\n              strokeWidth: 5\n            })\n            .unselectedColor(Color.Red)\n            .width(30)\n            .height(30)\n          Text('Checkbox1').fontSize(20)\n        }\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox2', group: 'checkboxGroup' })\n            .selectedColor(0x39a2db)\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox2 change is' + value);\n            })\n            .width(30)\n            .height(30)\n          Text('Checkbox2').fontSize(20)\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(592435)/* ["default"] */.A) + "",
        width: "661",
        height: "272"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义多选框样式",
      children: "示例3（自定义多选框样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier12",
        children: "contentModifier"
      }), "属性实现了自定义多选框样式的功能，自定义样式实现了一个五边形多选框，如果选中，内部会出现红色三角图案，标题会显示选中字样，如果取消选中，红色三角图案消失，标题会显示非选中字样。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyCheckboxStyle implements ContentModifier<CheckBoxConfiguration> {\n  selectedColor: Color = Color.White;\n\n  constructor(selectedColor: Color) {\n    this.selectedColor = selectedColor;\n  }\n\n  applyContent(): WrappedBuilder<[CheckBoxConfiguration]> {\n    return wrapBuilder(buildCheckbox);\n  }\n}\n\n@Builder\nfunction buildCheckbox(config: CheckBoxConfiguration) {\n  Column({ space: 10 }) {\n    Text(config.name + (config.selected ? \"（ 选中 ）\" : \"（ 非选中 ）\")).margin({ right: 70, top: 50 })\n    Text(config.enabled ? \"enabled true\" : \"enabled false\").margin({ right: 110 })\n    Shape() {\n      Path()\n        .width(100)\n        .height(100)\n        .commands('M100 0 L0 100 L50 200 L150 200 L200 100 Z')\n        .fillOpacity(0)\n        .strokeWidth(3)\n        .onClick(() => {\n          if (config.selected) {\n            config.triggerChange(false);\n          } else {\n            config.triggerChange(true);\n          }\n        })\n        .opacity(config.enabled ? 1 : 0.1)\n      Path()\n        .width(10)\n        .height(10)\n        .commands('M50 0 L100 100 L0 100 Z')\n        .visibility(config.selected ? Visibility.Visible : Visibility.Hidden)\n        .fill(config.selected ? (config.contentModifier as MyCheckboxStyle).selectedColor : Color.Black)\n        .stroke((config.contentModifier as MyCheckboxStyle).selectedColor)\n        .margin({ left: 10, top: 10 })\n        .opacity(config.enabled ? 1 : 0.1)\n    }\n    .width(300)\n    .height(200)\n    .viewPort({\n      x: 0,\n      y: 0,\n      width: 310,\n      height: 310\n    })\n    .strokeLineJoin(LineJoinStyle.Miter)\n    .strokeMiterLimit(5)\n    .margin({ left: 50 })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State checkboxEnabled: boolean = true;\n\n  build() {\n    Column({ space: 100 }) {\n      Checkbox({ name: '多选框状态', group: 'checkboxGroup' })\n        .contentModifier(new MyCheckboxStyle(Color.Red))\n        .onChange((value: boolean) => {\n          console.info('Checkbox change is' + value);\n        }).enabled(this.checkboxEnabled)\n\n      Row() {\n        Toggle({ type: ToggleType.Switch, isOn: true }).onChange((value: boolean) => {\n          if (value) {\n            this.checkboxEnabled = true;\n          } else {\n            this.checkboxEnabled = false;\n          }\n        })\n      }.position({ x: 50, y: 130 })\n    }.margin({ top: 30 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(766255)/* ["default"] */.A) + "",
        width: "359",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置文本多选框样式",
      children: "示例4（设置文本多选框样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置indicatorBuilder实现选中样式为Text。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CheckboxExample {\n  @Builder\n  indicatorBuilder(value: number) {\n    Column(){\n      Text(value > 99 ? '99+': value.toString())\n        .textAlign(TextAlign.Center)\n        .fontSize(value > 99 ?  '16vp': '20vp')\n        .fontWeight(FontWeight.Medium)\n        .fontColor('#ffffffff')\n    }\n  }\n  build() {\n    Row() {\n      Column() {\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center}) {\n          Checkbox({ name: 'checkbox1', group: 'checkboxGroup', indicatorBuilder:()=>{this.indicatorBuilder(9)}})\n            .shape(CheckBoxShape.CIRCLE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox1 change is'+ value);\n            })\n            .mark({\n              strokeColor:Color.Black,\n              size: 50,\n              strokeWidth: 5\n            })\n            .width(30)\n            .height(30)\n          Text('Checkbox1').fontSize(20)\n        }.padding(15)\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox2', group: 'checkboxGroup', indicatorBuilder:()=>{this.indicatorBuilder(100)}})\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox2 change is' + value);\n            })\n            .width(30)\n            .height(30)\n          Text('Checkbox2').fontSize(20)\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(472025)/* ["default"] */.A) + "",
        width: "409",
        height: "212"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5获取多选框选中信息",
      children: "示例5（获取多选框选中信息）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过选中Checkbox以及CheckboxGroup多选框来获取选中的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CheckboxExample {\n  @State arrOne: Array<string> = ['1', '2', '3'];\n  @State arrTwo: Array<string> = ['1', '2', '3', '4'];\n  @State arrThree: Array<string> = ['1', '2', '3', '4', '5', '6'];\n  @State selected: boolean = false;\n  @State infoOne: string = '';\n  @State infoTwo: string = '';\n  @State infoThree: string = '';\n\n  build() {\n    Column() {\n      // 单元项全选按钮\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        CheckboxGroup({ group: 'checkboxGroupOne' })\n          .selectAll(this.selected)\n          .checkboxShape(CheckBoxShape.ROUNDED_SQUARE)\n          .selectedColor('#007DFF')\n          .onChange((itemName: CheckboxGroupResult) => {\n            this.infoOne = \"checkboxGroupOne\" + JSON.stringify(itemName);\n            console.info(\"checkboxGroupOne\" + JSON.stringify(itemName));\n          })\n        Text('checkboxGroupOne Select All').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n      }\n\n      // 选项1\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        Column() {\n          ForEach(this.arrOne, (item: string) => {\n            Row() {\n              Checkbox({ name: 'checkbox' + item, group: 'checkboxGroupOne' })\n                .selectedColor('#007DFF')\n                .shape(CheckBoxShape.ROUNDED_SQUARE)\n                .onChange((value: boolean) => {\n                  console.info('Checkbox' + item + 'change is' + value);\n                })\n                .margin({ left: 20 })\n              Text('Checkbox' + item)\n                .fontSize(14)\n                .lineHeight(20)\n                .fontColor('#182431')\n                .fontWeight(500)\n                .margin({ left: 10 })\n            }\n          }, (item: string) => item)\n        }\n      }.margin({ bottom: 15 })\n\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        CheckboxGroup({ group: 'checkboxGroupTwo' })\n          .selectAll(this.selected)\n          .checkboxShape(CheckBoxShape.ROUNDED_SQUARE)\n          .selectedColor('#007DFF')\n          .onChange((itemName: CheckboxGroupResult) => {\n            this.infoTwo = \"checkboxGroupTwo\" + JSON.stringify(itemName);\n            console.info(\"checkboxGroupTwo\" + JSON.stringify(itemName));\n          })\n        Text('checkboxGroupTwo Select All').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n      }\n\n      // 选项2\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        Column() {\n          ForEach(this.arrTwo, (item: string) => {\n            Row() {\n              Checkbox({ name: 'checkbox' + item, group: 'checkboxGroupTwo' })\n                .selectedColor('#007DFF')\n                .shape(CheckBoxShape.ROUNDED_SQUARE)\n                .onChange((value: boolean) => {\n                  console.info('Checkbox' + item + 'change is' + value);\n                })\n                .margin({ left: 20 })\n              Text('Checkbox' + item)\n                .fontSize(14)\n                .lineHeight(20)\n                .fontColor('#182431')\n                .fontWeight(500)\n                .margin({ left: 10 })\n            }\n          }, (item: string) => item)\n        }\n      }.margin({ bottom: 15 })\n\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        CheckboxGroup({ group: 'checkboxGroupThree' })\n          .selectAll(this.selected)\n          .checkboxShape(CheckBoxShape.ROUNDED_SQUARE)\n          .selectedColor('#007DFF')\n          .onChange((itemName: CheckboxGroupResult) => {\n            this.infoThree = \"checkboxGroupThree\" + JSON.stringify(itemName);\n            console.info(\"checkboxGroupThree\" + JSON.stringify(itemName));\n          })\n        Text('checkboxGroupThree Select All').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n      }\n\n      // 选项3\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        Column() {\n          ForEach(this.arrThree, (item: string) => {\n            Row() {\n              Checkbox({ name: 'checkbox' + item, group: 'checkboxGroupThree' })\n                .selectedColor('#007DFF')\n                .shape(CheckBoxShape.ROUNDED_SQUARE)\n                .onChange((value: boolean) => {\n                  console.info('Checkbox' + item + 'change is' + value);\n                })\n                .margin({ left: 20 })\n              Text('Checkbox' + item)\n                .fontSize(14)\n                .lineHeight(20)\n                .fontColor('#182431')\n                .fontWeight(500)\n                .margin({ left: 10 })\n            }\n          }, (item: string) => item)\n        }\n      }.margin({ bottom: 15 })\n\n      // 全选按钮\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        Row() {\n          CheckboxGroup({ group: 'checkboxGroup' })\n            .checkboxShape(CheckBoxShape.CIRCLE)\n            .selectedColor('#007DFF')\n            .width(30)\n            .margin({ left: 10 })\n            .onChange(() => {\n              this.selected = !this.selected\n            })\n          Text('Select All')\n            .fontSize(14)\n            .lineHeight(20)\n            .fontColor('#182431')\n            .fontWeight(500)\n            .margin({ left: 10 })\n        }\n      }.margin({ bottom: 15 })\n\n      // 获取选中信息\n      Button('get selected info')\n        .margin({ top: 10 })\n        .onClick(() => {\n          this.getUIContext().getPromptAction().showToast({\n            message: 'selected info: ' + this.infoOne + '\\n' + this.infoTwo + '\\n' + this.infoThree\n          })\n        })\n    }.padding(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(399558)/* ["default"] */.A) + "",
        width: "503",
        height: "952"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置滑动多选",
      children: "示例6（设置滑动多选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置手势事件实现Checkbox滑动多选。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { componentUtils, ComponentUtils, UIContext } from '@kit.ArkUI';\nimport { LinkedList } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  @State isChoosing: boolean = false;\n  @State selectedStart: number = -1;\n  @State @Watch('onSelectedEndChange') selectedEnd: number = -1;\n  selectedPhotos: LinkedList<number> = new LinkedList();\n  @State selectedList: number[] = [];\n  @State image: Resource[] =\n    // $r('app.media.xxx')需要替换为开发者所需的图像资源文件。\n    [$r(\"app.media.imageOne\"), $r('app.media.imageTwo'), $r('app.media.imageThree'), $r('app.media.imageFour')];\n  private selectedState: SelectedState = SelectedState.None;\n  private componentUtils: ComponentUtils = this.getUIContext().getComponentUtils();\n  private listScroller: ListScroller = new ListScroller();\n  private currentOffsetY: number = 0;\n\n  onChange() {\n    console.info('change successful');\n  }\n\n  getSpeed(fingerY: number, edge: number) {\n    return 150 * 150 * (fingerY - edge) / 2000 / Math.abs(fingerY - edge);\n  }\n\n  getIndex(fingerX: number, fingerY: number) {\n    let rect: componentUtils.ComponentInfo | null = null;\n    for (let i = 0; i < 100; i++) {\n      let uiContext: UIContext = this.getUIContext();\n      rect = this.componentUtils.getRectangleById(`stack${i}`);\n      if (rect) {\n        const x1 = uiContext.px2vp(rect.windowOffset.x);\n        const x2 = uiContext.px2vp(rect.windowOffset.x + rect.size.width);\n        const y1 = uiContext.px2vp(rect.windowOffset.y);\n        const y2 = uiContext.px2vp(rect.windowOffset.y + rect.size.height);\n        if (x1 <= fingerX && fingerX < x2 && y1 <= fingerY && fingerY < y2) {\n          return i;\n        }\n      }\n    }\n    return this.selectedEnd;\n  }\n  \n  onSelectedEndChange() {\n    let start: number = -1;\n    let end: number = -1;\n    if (this.selectedEnd > this.selectedStart) {\n      start = this.selectedStart;\n      end = this.selectedEnd;\n    } else {\n      end = this.selectedStart;\n      start = this.selectedEnd;\n    }\n    if (this.selectedState == SelectedState.Selected) {\n      for (let i = start; i <= end; i++) {\n        if (!this.selectedPhotos.has(i)) {\n          this.selectedPhotos.add(i);\n        }\n      }\n    } else if (this.selectedState == SelectedState.Remove) {\n      for (let i = start; i <= end; i++) {\n        if (this.selectedPhotos.has(i)) {\n          this.selectedPhotos.remove(i);\n        }\n      }\n    }\n    this.selectedList = this.selectedPhotos.convertToArray();\n  }\n\n  scroll(fingerY: number) {\n    if (fingerY > 700 && !this.listScroller.isAtEnd()) {\n      this.listScroller.scrollBy(0, this.getSpeed(fingerY, 700));\n      return;\n    }\n    if (fingerY < 200 && this.currentOffsetY > 0) {\n      this.listScroller.scrollBy(0, this.getSpeed(fingerY, 200));\n      return;\n    }\n  }\n\n  onPanGestureUpdate(event: GestureEvent) {\n    const fingerInfo = event.fingerList[event.fingerList.length - 1];\n    const fingerX = fingerInfo.globalX;\n    const fingerY = fingerInfo.globalY;\n    this.selectedEnd = this.getIndex(fingerX, fingerY);\n    this.scroll(fingerY);\n  }\n\n  build() {\n    Column() {\n      if (this.isChoosing) {\n        Row() {\n          Text('取消')\n            .onClick(() => {\n              this.isChoosing = false;\n              this.selectedStart = -1;\n              this.selectedEnd = -1;\n              this.selectedPhotos.clear();\n              this.selectedList = [];\n            })\n        }\n        .width('100%')\n        .justifyContent(FlexAlign.SpaceEvenly)\n      }\n      List({ space: 10, scroller: this.listScroller }) {\n        ForEach(Array.from({ length: 100 }), (item: string, index: number) => {\n          ListItem() {\n            Stack({ alignContent: Alignment.TopEnd }) {\n              Image(this.image[(index % 4)])\n                .width('100%')\n                .draggable(false)\n              Checkbox({ name: index.toString() })\n                .shape(CheckBoxShape.CIRCLE)\n                .visibility(this.isChoosing ? Visibility.Visible : Visibility.None)\n                .select(this.selectedList.includes(index))\n            }\n            .id(`stack${index}`)\n            .width('100%')\n          }\n          .draggable(false)\n        }, (item: string, index: number) => 'listItem' + index)\n      }\n      .id('list')\n      .height('100%')\n      .width('100%')\n      .lanes(4)\n      .alignListItem(ListItemAlign.Center)\n      .onDidScroll(() => {\n        this.currentOffsetY = this.listScroller.currentOffset().yOffset;\n      })\n      .gesture(\n        GestureGroup(GestureMode.Exclusive,\n          GestureGroup(GestureMode.Sequence,\n            LongPressGesture()\n              .onAction(() => {\n                this.isChoosing = true;\n              }),\n            PanGesture()\n              .onActionStart(event => {\n                if (!this.isChoosing) {\n                  return;\n                }\n                const fingerInfo = event.fingerList[event.fingerList.length - 1];\n                const fingerX = fingerInfo.globalX;\n                const fingerY = fingerInfo.globalY;\n                this.selectedStart = this.getIndex(fingerX, fingerY);\n                if (this.selectedPhotos.has(this.selectedStart)) {\n                  this.selectedState = SelectedState.Remove;\n                } else {\n                  this.selectedState = SelectedState.Selected;\n                }\n              })\n              .onActionUpdate(event => {\n                if (!this.isChoosing) {\n                  return;\n                }\n                this.onPanGestureUpdate(event);\n              })\n              .onActionEnd(() => {\n                if (!this.isChoosing) {\n                  return;\n                }\n                this.selectedState = SelectedState.None;\n              })\n          ),\n          PanGesture()\n            .onActionStart(event => {\n              if (!this.isChoosing) {\n                return;\n              }\n              const fingerInfo = event.fingerList[event.fingerList.length - 1];\n              const fingerX = fingerInfo.globalX;\n              const fingerY = fingerInfo.globalY;\n              this.selectedStart = this.getIndex(fingerX, fingerY);\n              if (this.selectedPhotos.has(this.selectedStart)) {\n                this.selectedState = SelectedState.Remove;\n              } else {\n                this.selectedState = SelectedState.Selected;\n              }\n            })\n            .onActionUpdate(event => {\n              if (!this.isChoosing) {\n                return;\n              }\n              this.onPanGestureUpdate(event);\n            })\n            .onActionEnd(() => {\n              if (!this.isChoosing) {\n                return;\n              }\n              this.selectedState = SelectedState.None;\n            })\n        )\n      )\n    }\n  }\n}\n\nenum SelectedState {\n  None,\n  Selected,\n  Remove\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(913534)/* ["default"] */.A) + "",
        width: "562",
        height: "1143"
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
913534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959700-6ccf036afbba47d0f2c3daf1daebd657.gif");

},
472025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800050-4600dca80b828403ce38a7e4bf956cb1.gif");

},
766255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479699-efe99aac88a4ca7ee36e3b0642aa35bc.gif");

},
613508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439743-0dcec3974b2f5c096cae454d995b2756.gif");

},
592435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959698-b0092e66185cf8d084b593a1be27494b.gif");

},
399558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439745-6db59222a98a059acca6c1554ac7118e.gif");

},
699571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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