"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["632744"], {
871485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_checkboxgroup_ts_basic_components_checkboxgroup_md_88c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-buttons-and-selections-ts-basic-components-checkboxgroup-ts-basic-components-checkboxgroup-md-88c.json
var site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_checkboxgroup_ts_basic_components_checkboxgroup_md_88c_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup","title":"CheckboxGroup","description":"多选框群组，用于控制多选框全选或者不全选状态。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup.md","sourceDirName":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup","slug":"/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"CheckboxGroup","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkboxgroup","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-checkboxgroup"},"sidebar":"ref","previous":{"title":"Checkbox","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox"},"next":{"title":"UIPickerComponent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup.md


const frontMatter = {
	title: 'CheckboxGroup',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkboxgroup',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-checkboxgroup'
};
const contentTitle = 'CheckboxGroup';

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
  "value": "CheckboxGroupOptions对象说明",
  "id": "checkboxgroupoptions对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "selectAll",
  "id": "selectall",
  "level": 3
}, {
  "value": "selectAll18+",
  "id": "selectall18",
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
  "value": "checkboxShape12+",
  "id": "checkboxshape12",
  "level": 3
}, {
  "value": "checkboxShape18+",
  "id": "checkboxshape18",
  "level": 3
}, {
  "value": "contentModifier21+",
  "id": "contentmodifier21",
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
  "value": "OnCheckboxGroupChangeCallback18+",
  "id": "oncheckboxgroupchangecallback18",
  "level": 2
}, {
  "value": "CheckboxGroupResult对象说明",
  "id": "checkboxgroupresult对象说明",
  "level": 2
}, {
  "value": "SelectStatus枚举说明",
  "id": "selectstatus枚举说明",
  "level": 2
}, {
  "value": "CheckBoxGroupConfiguration21+对象说明",
  "id": "checkboxgroupconfiguration21对象说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置多选框群组）",
  "id": "示例1设置多选框群组",
  "level": 3
}, {
  "value": "示例2（自定义勾选样式）",
  "id": "示例2自定义勾选样式",
  "level": 3
}, {
  "value": "示例3（自定义多选框样式）",
  "id": "示例3自定义多选框样式",
  "level": 3
}, {
  "value": "示例4（设置全选）",
  "id": "示例4设置全选",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
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
        id: "checkboxgroup",
        children: "CheckboxGroup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框群组，用于控制多选框全选或者不全选状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348920)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
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
      children: "CheckboxGroup(options?: CheckboxGroupOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建多选框群组，用于控制群组内Checkbox的全选或取消全选状态，具有相同group值的Checkbox和CheckboxGroup属于同一群组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在结合带缓存功能的组件使用时（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "），未被创建的Checkbox选中状态需要应用手动控制。详细示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B4%E8%AE%BE%E7%BD%AE%E5%85%A8%E9%80%89",
        children: "示例4"
      }), "。"]
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
              href: "#checkboxgroupoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CheckboxGroupOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置多选框群组参数。  未设置时，按照CheckboxGroupOptions中各参数的默认值配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkboxgroupoptions对象说明",
      children: "CheckboxGroupOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框群组的信息。"
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
            children: "group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["群组名称。  默认值：undefined，默认状态下管理", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox#checkboxoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CheckboxOptions"
            }), "属性group信息为undefined的节点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  具有相同群组名称的多个CheckboxGroup，仅第一个CheckboxGroup生效。"]
          })]
        })
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
      id: "selectall",
      children: "selectAll"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectAll(value: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否全选。若同组的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
        children: "Checkbox"
      }), "显式设置了select属性，则Checkbox的优先级高。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在与带有缓存功能的组件（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "）配合使用时，未创建的Checkbox选中状态需由开发者控制。"]
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
            children: "是否全选。  默认值：false  值为true时，多选框群组将全部被选中；值为false时，多选框群组将全部取消选中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectall18",
      children: "selectAll18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectAll(isAllSelected: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否全选。若同组的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
        children: "Checkbox"
      }), "显式设置了select属性，则Checkbox的优先级高。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectall",
        children: "selectAll"
      }), "相比，isAllSelected参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在与带有缓存功能的组件（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "）配合使用时，未创建的Checkbox选中状态需由开发者控制。"]
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
            children: "isAllSelected"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否全选。  当isAllSelected的值为undefined时取默认值false。  值为true时，多选框群组将全部被选中；值为false时，多选框群组将全部取消选中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedcolor",
      children: "selectedColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置被选中或部分选中状态的颜色。"
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
            children: "被选中或部分选中状态的颜色。  默认值：$r('sys.color.ohos_id_color_text_primary_activated')  异常值按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedcolor18",
      children: "selectedColor18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedColor(resColor: Optional<ResourceColor>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置被选中或部分选中状态的颜色。与", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "被选中或部分选中状态的颜色。  当resColor的值为undefined时，默认值：$r('sys.color.ohos_id_color_text_primary_activated')  异常值按照默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unselectedcolor10",
      children: "unselectedColor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unselectedColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置非选中状态边框颜色。"
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
            children: "非选中状态边框颜色。  默认值：$r('sys.color.ohos_id_color_switch_outline_off')。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unselectedcolor18",
      children: "unselectedColor18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unselectedColor(resColor: Optional<ResourceColor>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置非选中状态边框颜色。与", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "非选中状态边框颜色。  当resColor的值为undefined时，默认值：$r('sys.color.ohos_id_color_switch_outline_off')。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mark10",
      children: "mark10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mark(value: MarkStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多选框内部图标样式。"
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
            children: "多选框内部图标样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mark18",
      children: "mark18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mark(style: Optional<MarkStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置多选框内部图标样式。与", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "多选框内部图标样式。  当style的值为undefined时，维持上次取值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkboxshape12",
      children: "checkboxShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "checkboxShape(value: CheckBoxShape)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置CheckboxGroup组件形状，包括圆形和圆角方形。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置CheckboxGroup组件形状，包括圆形和圆角方形。  默认值：CheckBoxShape.CIRCLE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  CheckboxGroup组件将按照设置的形状显示。  CheckboxGroup内所有未单独设置shape类型的Checkbox，其形状将与CheckboxGroup保持一致。  CheckboxGroup内已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkboxshape18",
      children: "checkboxShape18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "checkboxShape(shape: Optional<CheckBoxShape>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置CheckboxGroup组件形状，包括圆形和圆角方形。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#checkboxshape12",
        children: "checkboxShape"
      }), "12+相比，shape参数新增了对undefined类型的支持。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置CheckboxGroup组件形状，包括圆形和圆角方形。  当shape的值为undefined时，默认值为CheckBoxShape.CIRCLE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  CheckboxGroup组件将按照设置的形状显示。  CheckboxGroup内所有未单独设置shape类型的Checkbox，其形状将与CheckboxGroup保持一致。  CheckboxGroup内已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contentmodifier21",
      children: "contentModifier21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentModifier(modifier: Optional<ContentModifier<CheckBoxGroupConfiguration>>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制CheckboxGroup内容区的方法。设置该属性时，其他属性设置会失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591350)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
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
            }), "<ContentModifier<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkboxgroupconfiguration21%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CheckBoxGroupConfiguration"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在CheckboxGroup组件上，定制内容区的方法。  modifier：内容修改器，开发者需要自定义类以实现ContentModifier接口。  当modifier的值为undefined时，不使用内容修改器。"
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
      id: "onchange",
      children: "onChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: OnCheckboxGroupChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。"
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
              href: "#oncheckboxgroupchangecallback18",
              children: "OnCheckboxGroupChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框群组的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange18",
      children: "onChange18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: Optional<OnCheckboxGroupChangeCallback>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。与", (0,jsx_runtime.jsx)(_components.a, {
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
              href: "#oncheckboxgroupchangecallback18",
              children: "OnCheckboxGroupChangeCallback"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框群组的信息。  当callback的值为undefined时，不使用回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncheckboxgroupchangecallback18",
      children: "OnCheckboxGroupChangeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnCheckboxGroupChangeCallback = (value: CheckboxGroupResult) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框群组的信息。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkboxgroupresult%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CheckboxGroupResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多选框群组的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkboxgroupresult对象说明",
      children: "CheckboxGroupResult对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框群组的名称和状态。"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "群组内所有被选中的多选框名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#selectstatus%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SelectStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectstatus枚举说明",
      children: "SelectStatus枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选框群组的选中状态。"
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
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "群组多选择框全部选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Part"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "群组多选择框部分选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "群组多选择框全部没有选择。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkboxgroupconfiguration21对象说明",
      children: "CheckBoxGroupConfiguration21+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者必须自定义此类以实现ContentModifier接口，使用方法见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier21",
        children: "contentModifier"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
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
            children: "当前多选框群组名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#selectstatus%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SelectStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多选框群组的选中状态。"
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
            children: "触发多选框群组选中状态变化。true表示从部分选中或未选中变为全部选中，false表示从全部选中或部分选中变为全部未选中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置多选框群组",
      children: "示例1（设置多选框群组）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例用于控制多选框全选或者不全选状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct CheckboxExample {\n  build() {\n    Scroll() {\n      Column() {\n        // 全选按钮\n        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n          CheckboxGroup({ group: 'checkboxGroup' })\n            .checkboxShape(CheckBoxShape.ROUNDED_SQUARE)\n            .selectedColor('#007DFF')\n            .onChange((itemName: CheckboxGroupResult) => {\n              console.info(\"checkbox group content\" + JSON.stringify(itemName));\n            })\n          Text('Select All').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n        }\n\n        // 选项1\n        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox1', group: 'checkboxGroup' })\n            .selectedColor('#007DFF')\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox1 change is' + value);\n            })\n          Text('Checkbox1').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n        }.margin({ left: 36 })\n\n        // 选项2\n        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox2', group: 'checkboxGroup' })\n            .selectedColor('#007DFF')\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox2 change is' + value);\n            })\n          Text('Checkbox2').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n        }.margin({ left: 36 })\n\n        // 选项3\n        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox3', group: 'checkboxGroup' })\n            .selectedColor('#007DFF')\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox3 change is' + value);\n            })\n          Text('Checkbox3').fontSize(14).lineHeight(20).fontColor('#182431').fontWeight(500)\n        }.margin({ left: 36 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887398)/* ["default"] */.A) + "",
        width: "666",
        height: "274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义勾选样式",
      children: "示例2（自定义勾选样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置mark实现自定义多选框群组的勾选样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n\n  build() {\n    Row() {\n      Column() {\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          CheckboxGroup({ group: 'checkboxGroup' })\n            .checkboxShape(CheckBoxShape.ROUNDED_SQUARE)\n            .selectedColor(Color.Orange)\n            .onChange((itemName: CheckboxGroupResult) => {\n              console.info(\"checkbox group content\" + JSON.stringify(itemName));\n            })\n            .mark({\n              strokeColor:Color.Black,\n              size: 40,\n              strokeWidth: 5\n            })\n            .unselectedColor(Color.Red)\n            .width(30)\n            .height(30)\n          Text('Select All').fontSize(20)\n        }.margin({right:15})\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox1', group: 'checkboxGroup' })\n            .selectedColor(0x39a2db)\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox1 change is'+ value);\n            })\n            .mark({\n              strokeColor:Color.Black,\n              size: 50,\n              strokeWidth: 5\n            })\n            .unselectedColor(Color.Red)\n            .width(30)\n            .height(30)\n          Text('Checkbox1').fontSize(20)\n        }\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox2', group: 'checkboxGroup' })\n            .selectedColor(0x39a2db)\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox2 change is' + value);\n            })\n            .width(30)\n            .height(30)\n          Text('Checkbox2').fontSize(20)\n        }\n        Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n          Checkbox({ name: 'checkbox3', group: 'checkboxGroup' })\n            .selectedColor(0x39a2db)\n            .shape(CheckBoxShape.ROUNDED_SQUARE)\n            .onChange((value: boolean) => {\n              console.info('Checkbox3 change is' + value);\n            })\n            .width(30)\n            .height(30)\n          Text('Checkbox3').fontSize(20)\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(411306)/* ["default"] */.A) + "",
        width: "665",
        height: "371"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义多选框样式",
      children: "示例3（自定义多选框样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contentmodifier21",
        children: "contentModifier"
      }), "属性实现了自定义复选框群组样式的功能。自定义样式实现了一个五边形复选框群组，如果全部选中，内部会出现红色三角图案，标题会显示全选字样；如果部分选中，三角图案显示蓝色，标题会显示部分选中字样；如果未选中，三角图案消失，标题会显示未选中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyCheckboxGroupStyle implements ContentModifier<CheckBoxGroupConfiguration> {\n  selectedColor: Color = Color.Black;\n\n  constructor(selectedColor: Color) {\n    this.selectedColor = selectedColor;\n  }\n\n  applyContent(): WrappedBuilder<[CheckBoxGroupConfiguration]> {\n    return wrapBuilder(buildCheckboxgroup);\n  }\n}\nlet statusString: string[] = ['全选', '部分选中', '全不选'];\n@Builder\nfunction buildCheckboxgroup(config: CheckBoxGroupConfiguration) {\n  Column({ space: 10 }) {\n    Text(config.name + \" \" + statusString[config.status ]).margin({ right: 70, top: 50 })\n    Text(config.enabled ? \"enabled true\" : \"enabled false\").margin({ right: 110 })\n    Shape() {\n      Path()\n        .width(100)\n        .height(100)\n        .commands('M100 0 L0 100 L50 200 L150 200 L200 100 Z')\n        .fillOpacity(0)\n        .strokeWidth(3)\n        .onClick(() => {\n          console.info('checkboxgroup status ', statusString[config.status])\n          if (config.status === SelectStatus.All ||  config.status === SelectStatus.Part) {\n            config.triggerChange(false);\n            console.info('checkboxgroup not selected')\n          } else {\n            config.triggerChange(true);\n            console.info('checkboxgroup selected')\n          }\n        })\n        .opacity(config.enabled ? 1 : 0.1)\n      Path()\n        .width(10)\n        .height(10)\n        .commands('M50 0 L100 100 L0 100 Z')\n        .visibility(config.status === SelectStatus.All ? Visibility.Visible : Visibility.Hidden)\n        .fill(config.status === SelectStatus.All ? (config.contentModifier as MyCheckboxGroupStyle).selectedColor : Color.Black)\n        .stroke((config.contentModifier as MyCheckboxGroupStyle).selectedColor)\n        .margin({ left: 10, top: 10 })\n        .opacity(config.enabled ? 1 : 0.1)\n      Path()\n        .width(10)\n        .height(10)\n        .commands('M50 0 L100 100 L0 100 Z')\n        .visibility(config.status === SelectStatus.Part ? Visibility.Visible : Visibility.Hidden)\n        .fill(config.status === SelectStatus.Part ? Color.Blue : Color.Black)\n        .stroke((config.contentModifier as MyCheckboxGroupStyle).selectedColor)\n        .margin({ left: 10, top: 10 })\n        .opacity(config.enabled ? 1 : 0.1)\n    }\n    .width(300)\n    .height(200)\n    .viewPort({\n      x: 0,\n      y: 0,\n      width: 310,\n      height: 310\n    })\n    .strokeLineJoin(LineJoinStyle.Miter)\n    .strokeMiterLimit(5)\n    .margin({ left: 50 })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State checkboxEnabled: boolean = true;\n\n  build() {\n    Column({ space: 100 }) {\n      CheckboxGroup({  group: 'checkboxGroup' })\n         .contentModifier(new MyCheckboxGroupStyle(Color.Red))\n        .onChange((itemName: CheckboxGroupResult) => {\n          console.info(\" CheckboxGroup onChange: \" + JSON.stringify(itemName));\n        })\n        .enabled(this.checkboxEnabled)\n\n      Row() {\n        Toggle({ type: ToggleType.Switch, isOn: true }).onChange((value: boolean) => {\n          if (value) {\n            this.checkboxEnabled = true;\n          } else {\n            this.checkboxEnabled = false;\n          }\n        })\n      }.position({ x: 50, y: 130 })\n      Row() {\n        Checkbox({ name: '复选框1', group: 'checkboxGroup' })\n          .onChange((value: boolean) => {\n            console.info('复选框1 change to ' + value);\n          })\n        Text('复选框1').fontSize(20)\n      }\n        .position({ x: 50, y: 230 })\n      Row() {\n        Checkbox({ name: '复选框2', group: 'checkboxGroup' })\n          .onChange((value: boolean) => {\n            console.info('复选框2 change to ' + value);\n          })\n        Text('复选框2').fontSize(20)\n      }\n      .position({ x: 50, y: 260 })\n    }.margin({ top: 30 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(883097)/* ["default"] */.A) + "",
        width: "405",
        height: "370"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置全选",
      children: "示例4（设置全选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了在结合带缓存功能的组件使用时(如List)，未被创建的Checkbox全选的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: checkboxItemData[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): checkboxItemData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    });\n  }\n}\n\ninterface checkboxItemData {\n  isCheck: boolean;\n  itemName: string;\n}\n\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: checkboxItemData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): checkboxItemData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: checkboxItemData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  public operateData(isSelect: boolean): void {\n    this.dataArray.forEach((item) => {\n      item.isCheck = isSelect\n    })\n\n    this.notifyDataReload()\n  }\n\n  public operateItem(isSelect: boolean, index: number): void {\n    this.dataArray[index].isCheck = isSelect\n    this.notifyDataChange(index)\n  }\n\n  public getDataSource(): checkboxItemData[] {\n    return this.dataArray\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 100; i++) {\n      this.data.pushData({ isCheck: false, itemName: `checkbox ${i}` });\n    }\n  }\n\n  @State isSelectAll: boolean = false\n\n  build() {\n    Column() {\n      Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {\n        CheckboxGroup({ group: \"group\" })\n          .selectAll(this.isSelectAll)\n          .hitTestBehavior(HitTestMode.None)\n        Text(\"全选\").fontSize(25)\n      }.onClick(() => {\n        this.isSelectAll = !this.isSelectAll\n        this.data.operateData(this.isSelectAll)\n      }).padding({ left: 10 })\n\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: checkboxItemData, index: number) => {\n          ListItem() {\n            Row() {\n              Checkbox({ name: `checkbox-${item}` })\n                .select(item.isCheck)\n                .onChange((value: boolean) => {\n                  this.data.operateItem(value, index)\n                  let dataSource = this.data.getDataSource()\n                  this.isSelectAll = dataSource.every((item) => item.isCheck === true)\n                })\n              Text(item.itemName).fontSize(20)\n            }.margin({ left: 10, right: 10 })\n          }\n\n        }, (item: checkboxItemData) => item.itemName + item.isCheck)\n      }.cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(867573)/* ["default"] */.A) + "",
        width: "336",
        height: "738"
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
348920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
411306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800052-8fa4df094fe7d979d52fc62e79183e33.gif");

},
867573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959702-5e569a1e921dea4c23e56386fc1410cf.gif");

},
887398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479701-7352db2c3f2651ce1b09ab584303a226.gif");

},
591350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
883097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439747-1a7a296b4efe0f3661701130f7495c04.gif");

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