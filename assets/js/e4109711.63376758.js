"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["250138"], {
47042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_basic_comp_js_components_basic_picker_view_js_components_basic_picker_view_md_e41_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-basic-comp-js-components-basic-picker-view-js-components-basic-picker-view-md-e41.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_basic_comp_js_components_basic_picker_view_js_components_basic_picker_view_md_e41_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker-view/js-components-basic-picker-view","title":"picker-view","description":"从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker-view/js-components-basic-picker-view.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker-view","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker-view/js-components-basic-picker-view","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker-view/js-components-basic-picker-view","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"picker-view","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-picker-view","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-basic-picker-view"},"sidebar":"ref","previous":{"title":"picker","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker/js-components-basic-picker"},"next":{"title":"piece","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-piece/js-components-basic-piece"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-picker-view/js-components-basic-picker-view.md


const frontMatter = {
	title: 'picker-view',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-picker-view',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-basic-picker-view'
};
const contentTitle = 'picker-view';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "文本选择器",
  "id": "文本选择器",
  "level": 3
}, {
  "value": "时间选择器",
  "id": "时间选择器",
  "level": 3
}, {
  "value": "日期选择器",
  "id": "日期选择器",
  "level": 3
}, {
  "value": "日期时间选择器",
  "id": "日期时间选择器",
  "level": 3
}, {
  "value": "多列文本选择器",
  "id": "多列文本选择器",
  "level": 3
}, {
  "value": "样式",
  "id": "样式",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "文本选择器",
  "id": "文本选择器-1",
  "level": 3
}, {
  "value": "时间选择器",
  "id": "时间选择器-1",
  "level": 3
}, {
  "value": "日期选择器",
  "id": "日期选择器-1",
  "level": 3
}, {
  "value": "日期时间选择器",
  "id": "日期时间选择器-1",
  "level": 3
}, {
  "value": "多列文本选择器",
  "id": "多列文本选择器-1",
  "level": 3
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "文本选择器",
  "id": "文本选择器-2",
  "level": 3
}, {
  "value": "时间选择器",
  "id": "时间选择器-2",
  "level": 3
}, {
  "value": "日期选择器",
  "id": "日期选择器-2",
  "level": 3
}, {
  "value": "日期时间选择器",
  "id": "日期时间选择器-2",
  "level": 3
}, {
  "value": "多列文本选择器",
  "id": "多列文本选择器-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    color: "color",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    length: "length",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    time: "time",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "picker-view",
        children: "picker-view"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941410)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "嵌入页面的滑动选择器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-attributes/js-components-common-attributes",
        children: "通用属性"
      }), "外，还支持如下属性："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动选择器的类型，该属性不支持动态修改，可选项有：  - text：文本选择器。  - time：时间选择器。  - date：日期选择器。  - datetime：日期时间选择器。  - multi-text：多列文本选择器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本选择器",
      children: "文本选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本选择器的取值范围。  使用时需要使用数据绑定的方式range ={{data}}，js中声明相应变量data：[\"15\",\"20\",\"25\"]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本选择器的默认选择值，该值需要为range的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indicatorprefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择器选定值增加的前缀字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indicatorsuffix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择器选定值增加的后缀字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间选择器",
      children: "时间选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "containsecond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间选择器是否包含秒。  默认值：false，表示时间选择器不包含秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时间选择器的默认取值，格式为 HH:mm；  当包含秒时，格式为HH:mm:ss。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "241-4  -5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时间选择器采用的时间格式，可选值：  - 12：按照12小时制显示，用上午和下午进行区分；  - 24：按照24小时制显示。  从API version 5开始，默认值会依据系统当前所选地区和语言选择当地习惯的小时制(12小时制或24小时制)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期选择器",
      children: "日期选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.time, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1970-1-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期选择器的起始时间，格式为 YYYY-MM-DD。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.time, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2100-12-31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期选择器的结束时间，格式为 YYYY-MM-DD。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前日期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期选择器的默认选择值，格式为 YYYY-MM-DD。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lunar5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期选择器弹窗界面是否为农历展示。  默认值：false，表示设置日期选择器弹窗界面为公历展示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lunarswitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期选择器是否显示农历开关，显示农历开关时，可以在弹窗界面通过农历开关进行公历和农历切换。在设置显示农历时，开关状态为开，当设置不显示农历时，开关状态为关。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期时间选择器",
      children: "日期时间选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前日期时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期时间选择器的默认取值，格式有两种，为月日时分MM-DD-HH-mm或者年月日时分YYYY-MM-DD-HH-mm，不设置年时，默认使用当前年，该取值表示选择器弹窗时弹窗界面的默认选择值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "241-4  -5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期时间选择器采用的时间格式，可选值：  - 12：按照12小时制显示，用上午和下午进行区分；  - 24：按照24小时制显示。  从API version 5开始，默认值会依据系统当前所选地区和语言选择当地习惯的小时制(12小时制或24小时制)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lunar5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期时间选择器弹窗界面是否为农历展示。  默认值：false，表示设置日期选择器弹窗界面为公历展示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lunarswitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期时间选择器是否显示农历开关，显示农历开关时，可以在弹窗界面展现农历开关以便公历和农历切换。在设置显示农历时，开关状态为开，当设置不显示农历时，开关状态为关。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多列文本选择器",
      children: "多列文本选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多列文本选择器的列数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二维Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多列文本选择器的选择值，该值为二维数组。长度表示多少列，数组的每项表示每列的数据，如 [[\"a\",\"b\"], [\"c\",\"d\"]]。  使用时需要使用数据绑定的方式range ={{data}}，js中声明相应变量data：[\"15\",\"20\",\"25\"]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,0,…]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多列文本选择器的默认值，每一列被选中项对应的索引构成的数组，该取值表示选择器弹窗时弹窗界面的默认选择值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式",
      children: "样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-styles/js-components-common-styles",
        children: "通用样式"
      }), "外，还支持如下样式："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "候选项字体颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "候选项字体尺寸，类型length，单位px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected-color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a69f7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项字体颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selected-font-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项字体尺寸，类型length，单位px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disappear-color5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渐变消失项的字体颜色。消失项是在一列中有五个选项场景下最上和最下的两个选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disappear-font-size5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渐变消失项的字体尺寸。消失项是在一列中有五个选项场景下最上和最下的两个选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font-family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sans-serif"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选项字体类型。字体列表，用逗号分隔，每个字体用字体名或者字体族名设置。列表中第一个系统中存在的或者通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-customizing-font/js-components-common-customizing-font",
              children: "自定义字体"
            }), "指定的字体，会被选中作为文本的字体。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅支持如下事件："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本选择器-1",
      children: "文本选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ newValue: newValue, newSelected: newSelected }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择器选定值后触发该事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间选择器-1",
      children: "时间选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ hour: hour, minute: minute, [second:second]}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间选择器选定值后触发该事件。  包含秒时，返回时分秒。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期选择器-1",
      children: "日期选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ year:year, month:month, day:day }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日期选择器选择值后触发该事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期时间选择器-1",
      children: "日期时间选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ year:year, month:month, day:day, hour:hour, minute:minute }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日期时间选择器选择值后触发该事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多列文本选择器-1",
      children: "多列文本选择器"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columnchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ column:column, newValue:newValue, newSelected:newSelected }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多列文本选择器某一列的值改变时触发该事件，column：第几列修改，newValue：选中的值，newSelected：选中值对应的索引。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本选择器-2",
      children: "文本选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\">\n        选中值：{{value}}  选中下标： {{index}}\n    </text>\n    <picker-view class=\"text-picker\" type=\"text\" range=\"{{options}}\" selected=\"0\" indicatorprefix=\"prefix\" indicatorsuffix=\"suffix\" @change=\"handleChange\"></picker-view>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50%;\n}\n.title {\n    font-size: 30px;\n    text-align: center;\n    margin-top: 50%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.js */\nexport default {\n    data: {\n        options: ['选项1', '选项2', '选项3'],\n        value: \"选项1\",\n        index: 0\n    },\n    handleChange(data) {\n        this.value = data.newValue;\n        this.index = data.newSelected;\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427039)/* ["default"] */.A) + "",
        width: "310",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间选择器-2",
      children: "时间选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <text class=\"title\">\n    Selected：{{time}}\n  </text>\n  <picker-view class=\"time-picker\" type=\"time\" selected=\"{{defaultTime}}\" @change=\"handleChange\"></picker-view>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50%;\n}\n.title {\n    font-size: 31px;\n    text-align: center;\n    margin-top: 50%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.js */\nexport default {\n  data: {\n    defaultTime: \"\",\n    time: \"\",\n  },\n  onInit() {\n    this.defaultTime = this.now();\n  },\n  handleChange(data) {\n    this.time = this.concat(data.hour, data.minute);\n  },\n  now() {\n    const date = new Date();\n    const hours = date.getHours();\n    const minutes = date.getMinutes();\n    return this.concat(hours, minutes);\n  },\n  fill(value) {\n    return (value > 9 ? \"\" : \"0\") + value;\n  },\n  concat(hours, minutes) {\n    return `${this.fill(hours)}:${this.fill(minutes)}`;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(174129)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "390",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期选择器-2",
      children: "日期选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\">\n        Selected：{{date}}\n    </text>\n    <picker-view class=\"time-picker\" type=\"date\" selected=\"{{defaultTime}}\" @change=\"handleChange\" lunarswitch=\"true\"></picker-view>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50%;\n}\n.title {\n    font-size: 31px;\n    text-align: center;\n    margin-top: 50%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.js */\nexport default {\n    data: {\n        date: \"\",\n    },\n    handleChange(data) {\n        this.date = data.year + \"年\" + data.month + \"月\" + data.day + \"日\";\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(286266)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "398",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日期时间选择器-2",
      children: "日期时间选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\">\n        Selected：{{datetime}}\n    </text>\n    <picker-view class=\"date-picker\" type=\"datetime\"  hours=\"24\" lunarswitch=\"true\" @change=\"handleChange\"></picker-view>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50%;\n}\n.title {\n    font-size: 31px;\n    text-align: center;\n    margin-top: 50%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.js */\nexport default {\n    data: {\n        datetime: \"\",\n    },\n    handleChange(data) {\n        this.datetime = data.year + \"年\" + data.month + \"月\" + data.day + \"日\" + data.hour + \"时\" + data.minute + \"分\";\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(262230)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "398",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多列文本选择器-2",
      children: "多列文本选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\">\n        Selected：{{ value }}\n    </text>\n    <picker-view class=\"multitype-picker\" type=\"multi-text\" columns=\"3\" range=\"{{ multitext }}\" @columnchange=\"handleChange\"></picker-view>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50%;\n}\n.title {\n    font-size: 31px;\n    text-align: center;\n    margin-top: 50%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.js */\nexport default {\n    data: {\n        multitext: [\n            [1, 2, 3],\n            [4, 5, 6],\n            [7, 8, 9],\n        ],\n        value: \"\"\n    },\n    handleChange(data) {\n        this.value = data.column + \"列，\" + \"值为\" + data.newValue + \"，下标为\" + data.newSelected;\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(747068)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "398",
        height: "449"
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
286266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440241-399c39d2b5ccd93975394a3ffba47bc4.png");

},
262230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
174129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
427039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480195-caabbc305ef8f19132ba69dcb96b7bbc.gif");

},
941410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
747068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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