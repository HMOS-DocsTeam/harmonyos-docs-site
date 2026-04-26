"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["983060"], {
916938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_timepicker_ts_basic_components_timepicker_md_475_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-buttons-and-selections-ts-basic-components-timepicker-ts-basic-components-timepicker-md-475.json
var site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_basic_components_timepicker_ts_basic_components_timepicker_md_475_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker","title":"TimePicker","description":"滑动选择时间的组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker.md","sourceDirName":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker","slug":"/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"TimePicker","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-timepicker"},"sidebar":"ref","previous":{"title":"TextPicker","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker"},"next":{"title":"Radio","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker.md


const frontMatter = {
	title: 'TimePicker',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-timepicker'
};
const contentTitle = 'TimePicker';

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
  "value": "TimePickerOptions对象说明",
  "id": "timepickeroptions对象说明",
  "level": 2
}, {
  "value": "TimePickerFormat11+枚举说明",
  "id": "timepickerformat11枚举说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "useMilitaryTime",
  "id": "usemilitarytime",
  "level": 3
}, {
  "value": "useMilitaryTime18+",
  "id": "usemilitarytime18",
  "level": 3
}, {
  "value": "disappearTextStyle10+",
  "id": "disappeartextstyle10",
  "level": 3
}, {
  "value": "disappearTextStyle18+",
  "id": "disappeartextstyle18",
  "level": 3
}, {
  "value": "textStyle10+",
  "id": "textstyle10",
  "level": 3
}, {
  "value": "textStyle18+",
  "id": "textstyle18",
  "level": 3
}, {
  "value": "selectedTextStyle10+",
  "id": "selectedtextstyle10",
  "level": 3
}, {
  "value": "selectedTextStyle18+",
  "id": "selectedtextstyle18",
  "level": 3
}, {
  "value": "loop11+",
  "id": "loop11",
  "level": 3
}, {
  "value": "loop18+",
  "id": "loop18",
  "level": 3
}, {
  "value": "dateTimeOptions12+",
  "id": "datetimeoptions12",
  "level": 3
}, {
  "value": "dateTimeOptions18+",
  "id": "datetimeoptions18",
  "level": 3
}, {
  "value": "enableHapticFeedback12+",
  "id": "enablehapticfeedback12",
  "level": 3
}, {
  "value": "enableHapticFeedback18+",
  "id": "enablehapticfeedback18",
  "level": 3
}, {
  "value": "enableCascade18+",
  "id": "enablecascade18",
  "level": 3
}, {
  "value": "digitalCrownSensitivity18+",
  "id": "digitalcrownsensitivity18",
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
  "value": "onEnterSelectedArea18+",
  "id": "onenterselectedarea18",
  "level": 3
}, {
  "value": "DateTimeOptions12+类型说明",
  "id": "datetimeoptions12类型说明",
  "level": 2
}, {
  "value": "OnTimePickerChangeCallback18+",
  "id": "ontimepickerchangecallback18",
  "level": 2
}, {
  "value": "TimePickerResult对象说明",
  "id": "timepickerresult对象说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置文本样式）",
  "id": "示例1设置文本样式",
  "level": 3
}, {
  "value": "示例2（切换小时制）",
  "id": "示例2切换小时制",
  "level": 3
}, {
  "value": "示例3（设置时间格式）",
  "id": "示例3设置时间格式",
  "level": 3
}, {
  "value": "示例4（设置循环滚动）",
  "id": "示例4设置循环滚动",
  "level": 3
}, {
  "value": "示例5（设置时间选择组件的起始时间）",
  "id": "示例5设置时间选择组件的起始时间",
  "level": 3
}, {
  "value": "示例6（设置时间选择组件的结束时间）",
  "id": "示例6设置时间选择组件的结束时间",
  "level": 3
}, {
  "value": "示例7（设置上午下午跟随时间联动）",
  "id": "示例7设置上午下午跟随时间联动",
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
        id: "timepicker",
        children: "TimePicker"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动选择时间的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(730813)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件不建议开发者在动效过程中修改属性数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值$r('sys.float.ohos_id_picker_show_count_landscape')。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TimePicker(options?: TimePickerOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建滑动选择器，默认使用24小时的时间区间。"
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
              href: "#timepickeroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TimePickerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置时间选择组件的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "timepickeroptions对象说明",
      children: "TimePickerOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间选择器组件的参数说明。"
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
            children: "selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置选中项的时间。  默认值：当前系统时间  从API version 10开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "format11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#timepickerformat11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "TimePickerFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定需要显示的TimePicker的格式。  默认值：TimePickerFormat.HOUR_MINUTE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定时间选择组件的起始时间。  默认值：Date(0, 0, 0, 0, 0, 0)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 仅设置的小时和分钟生效。  2. 设置了start且为非默认值的场景下，loop不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定时间选择组件的结束时间。  默认值：Date(0, 0, 0, 23, 59, 59)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 仅设置的小时和分钟生效。  2. 设置了end且为非默认值的场景下，loop不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TimePicker组件滑动过程中修改TimePickerOptions中的属性，会导致这些属性无法生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Date对象用于处理日期和时间，使用方式如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式1："
        })
      }), " new Date()"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取系统当前日期和时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式2："
        })
      }), " new Date(value: number | string)"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式3："
        })
      }), " new Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置年份，例如2025。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "monthIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置月份索引，例如2，代表3月份。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日期，例如10（如果设置hours，则date不能省略）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置小时，例如15（如果设置minutes，则hours不能省略）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置分钟，例如20（如果设置seconds，则minutes不能省略）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置秒，例如20（如果设置ms，则seconds不能省略）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置毫秒，例如10。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始时间和结束时间的异常情形说明："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "异常情形"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "起始时间晚于结束时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始时间、结束时间都为默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间早于起始时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间为起始时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间晚于结束时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间为结束时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "起始时间晚于当前系统时间，选中时间未设置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间为起始时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结束时间早于当前系统时间，选中时间未设置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间为结束时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "时间格式不符合规范，如'01:61:61'。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "timepickerformat11枚举说明",
      children: "TimePickerFormat11+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间选择器的数据格式。"
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
            children: "HOUR_MINUTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照小时和分钟进行显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOUR_MINUTE_SECOND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照小时、分钟和秒进行显示。"
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
      id: "usemilitarytime",
      children: "useMilitaryTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "useMilitaryTime(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置时间是否以24小时制展示，未通过该接口设置时，默认跟随系统设置展示。"
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
            children: "时间是否以24小时制展示。  - true：时间以24小时制展示。  - false：时间以12小时制展示。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usemilitarytime18",
      children: "useMilitaryTime18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "useMilitaryTime(isMilitaryTime: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置展示时间是否为24小时制，未通过该接口设置时，默认跟随系统设置展示。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usemilitarytime",
        children: "useMilitaryTime"
      }), "相比，isMilitaryTime参数新增了对undefined类型的支持。"]
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
            children: "isMilitaryTime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示时间是否为24小时制。  - true：展示时间为24小时制。  - false：展示时间为12小时制。  当isMilitaryTime的值为undefined时，跟随系统设置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disappeartextstyle10",
      children: "disappearTextStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disappearTextStyle(value: PickerTextStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common#pickertextstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边缘项的文本颜色、字号和字体粗细。  默认值：  {  color: '#ff182431',  font: {  size: '14fp',  weight: FontWeight.Regular  }  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94141)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若选中项向上或向下的可视项数低于两项则无对应边缘项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disappeartextstyle18",
      children: "disappearTextStyle18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disappearTextStyle(style: Optional<PickerTextStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#disappeartextstyle10",
        children: "disappearTextStyle10+"
      }), "相比，style参数新增了对undefined类型的支持。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common#pickertextstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerTextStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "边缘项的文本颜色、字号、字体粗细。  默认值：  {  color: '#ff182431',  font: {  size: '14fp',  weight: FontWeight.Regular  }  }  当style的值为undefined时，使用默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107172)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若选中项向上或向下的可视项数低于两项则无对应边缘项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textstyle10",
      children: "textStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textStyle(value: PickerTextStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common#pickertextstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待选项的文本颜色、字号、字体粗细。  默认值：  {  color: '#ff182431',  font: {  size: '16fp',  weight: FontWeight.Regular  }  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711320)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若选中项向上或向下可视项数低于一项则无对应待选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textstyle18",
      children: "textStyle18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textStyle(style: Optional<PickerTextStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textstyle10",
        children: "textStyle10+"
      }), "相比，style参数新增了对undefined类型的支持。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common#pickertextstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerTextStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待选项的文本颜色、字号、字体粗细。  默认值：  {  color: '#ff182431',  font: {  size: '16fp',  weight: FontWeight.Regular  }  }  当style的值为undefined时，使用默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(845455)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若选中项向上或向下可视项数低于一项则无对应待选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedtextstyle10",
      children: "selectedTextStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedTextStyle(value: PickerTextStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中项的文本颜色、字号和字体粗细。"
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
      }), " 该属性在Wearable设备上使用无效果，在其他设备中可正常生效。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common#pickertextstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项的文本颜色、字号、字体粗细。  默认值：  {  color: '#ff007dff',  font: {  size: '20fp',  weight: FontWeight.Medium  }  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedtextstyle18",
      children: "selectedTextStyle18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedTextStyle(style: Optional<PickerTextStyle>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置选中项的文本颜色、字号及字体粗细。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedtextstyle10",
        children: "selectedTextStyle10+"
      }), "相比，style参数新增了对undefined类型的支持"]
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
      }), " 该属性在Wearable设备上使用无效果，在其他设备中可正常生效。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common#pickertextstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerTextStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项的文本颜色、字号、字体粗细。  默认值：  {  color: '#ff007dff',  font: {  size: '20fp',  weight: FontWeight.Medium  }  }  当style的值为undefined时，使用默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop11",
      children: "loop11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "loop(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否启用循环模式。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用循环模式。  - true：启用循环模式。  - false：不启用循环模式。  默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop18",
      children: "loop18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "loop(isLoop: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否启用循环模式。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#loop11",
        children: "loop11+"
      }), "相比，isLoop参数新增了对undefined类型的支持。"]
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
            children: "isLoop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用循环模式。  - true：启用循环模式。  - false：不启用循环模式。  默认值：true  当isLoop的值为undefined时，使用默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datetimeoptions12",
      children: "dateTimeOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dateTimeOptions(value: DateTimeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置时分秒是否显示前导0。"
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
              href: "#datetimeoptions12%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "DateTimeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时分秒是否显示前导0。  默认值：  hour: 24小时制默认为\"2-digit\"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为\"0X\"；12小时制默认为\"numeric\"，即没有前导0。  minute: 默认为\"2-digit\"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为\"0X\"。  second: 默认为\"2-digit\"，设置second是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为\"0X\"。  当hour、minute、second的值设置为undefined时，显示效果与其默认值规则一致。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datetimeoptions18",
      children: "dateTimeOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dateTimeOptions(timeFormat: Optional<DateTimeOptions>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置时分秒是否显示前导0。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#datetimeoptions12",
        children: "dateTimeOptions12+"
      }), "相比，timeFormat参数新增了对undefined类型的支持。"]
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
            children: "timeFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#datetimeoptions12%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "DateTimeOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时分秒是否显示前导0，目前只支持设置hour、minute和second参数。  默认值：  hour: 24小时制默认为\"2-digit\"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为\"0X\"；12小时制默认为\"numeric\"，即没有前导0。  minute: 默认为\"2-digit\"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为\"0X\"。  second: 默认为\"2-digit\"，设置second是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为\"0X\"。  当hour、minute、second的值设置为undefined时，显示效果与其默认值规则一致。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablehapticfeedback12",
      children: "enableHapticFeedback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableHapticFeedback(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否支持触控反馈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启触控反馈时，需要在工程的src/main/module.json5文件的\"module\"内配置requestPermissions字段开启振动权限，配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n   {\n      \"name\": \"ohos.permission.VIBRATE\",\n   }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889111)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启触控反馈。  - true：开启触控反馈。  - false：不开启触控反馈。  默认值：true  设置为true后，其生效情况取决于系统的硬件是否支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablehapticfeedback18",
      children: "enableHapticFeedback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableHapticFeedback(enable: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否支持触控反馈。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enablehapticfeedback12",
        children: "enableHapticFeedback12+"
      }), "相比，enable参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启触控反馈时，需要在工程的src/main/module.json5文件的\"module\"内配置requestPermissions字段开启振动权限，配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.VIBRATE\",\n  }\n]\n"
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
            children: "enable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启触控反馈。  - true：开启触控反馈。  - false：不开启触控反馈。  默认值：true  当enable的值为undefined时，使用默认值。  设置为true后，其生效情况取决于系统的硬件是否支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablecascade18",
      children: "enableCascade18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableCascade(enabled: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置上午和下午的标识是否根据小时数自动切换，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usemilitarytime",
        children: "useMilitaryTime"
      }), "设置为false时生效。"]
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
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上午和下午的标识是否根据小时数自动切换，仅在useMilitaryTime设置为false时生效。  - true：自动切换。  - false：不自动切换。  默认值：false  当enabled设置为true时，仅在loop参数同时为true时生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "digitalcrownsensitivity18",
      children: "digitalCrownSensitivity18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置表冠灵敏度。"
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
            children: "sensitivity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#crownsensitivity18",
              children: "CrownSensitivity"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表冠响应灵敏度。  默认值：CrownSensitivity.MEDIUM，表示响应速度适中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(496545)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于圆形屏幕的穿戴设备。组件响应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-crown/ts-universal-events-crown",
        children: "表冠事件"
      }), "，需要先获取焦点。"]
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
      children: "onChange(callback: (value: TimePickerResult ) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动TimePicker后，时间选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onenterselectedarea18",
        children: "onEnterSelectedArea"
      }), "接口。"]
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
              href: "#timepickerresult%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TimePickerResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24小时制时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange18",
      children: "onChange18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: Optional<OnTimePickerChangeCallback>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["滑动TimePicker后，时间选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onchange",
        children: "onChange"
      }), "相比，callback参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onenterselectedarea18",
        children: "onEnterSelectedArea"
      }), "接口。"]
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
              href: "#ontimepickerchangecallback18",
              children: "OnTimePickerChangeCallback"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择时间时触发该回调。  当callback的值为undefined时，不使用回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onenterselectedarea18",
      children: "onEnterSelectedArea18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onEnterSelectedArea(callback: Callback<TimePickerResult>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动TimePicker过程中，选项进入分割线区域内，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onchange",
        children: "onChange"
      }), "事件的差别在于，该事件的触发时机早于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onchange",
        children: "onChange"
      }), "事件，当当前滑动列滑动距离超过选中项高度的一半时，选项此时已经进入分割线区域内，会触发该事件。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enablecascade18",
        children: "enableCascade"
      }), "设置为true时，由于上午/下午列与小时列存在联动关系，不建议使用该回调。该回调标识的是滑动过程中选项进入分割线区域内的节点，而联动变化的选项并不涉及滑动，因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239785)/* ["default"] */.A) + "",
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
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#timepickerresult%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TimePickerResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动TimePicker过程中，选项进入分割线区域时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "datetimeoptions12类型说明",
      children: "DateTimeOptions12+类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DateTimeOptions = DateTimeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间、日期格式化时可设置的配置项。"
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
              href: "/ref/localization-api/localization-arkts/js-apis-intl/js-apis-intl#datetimeoptionsdeprecated",
              children: "DateTimeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建时间、日期格式化对象时可设置的配置项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontimepickerchangecallback18",
      children: "OnTimePickerChangeCallback18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnTimePickerChangeCallback = (result: TimePickerResult) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择时间时触发该事件。"
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
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#timepickerresult%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TimePickerResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24小时制时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "timepickerresult对象说明",
      children: "TimePickerResult对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回24小时制时间。"
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
            children: "hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间的时。  取值范围：[0-23]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间的分。  取值范围：[0-59]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "second11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中时间的秒。  取值范围：[0-59]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置文本样式",
      children: "示例1（设置文本样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#disappeartextstyle10",
        children: "disappearTextStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textstyle10",
        children: "textStyle"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedtextstyle10",
        children: "selectedTextStyle"
      }), "实现文本选择器中的文本样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  private selectedTime: Date = new Date('2022-07-22T08:00:00');\n\n  build() {\n    TimePicker({\n      selected: this.selectedTime\n    })\n      .disappearTextStyle({ color: '#004aaf', font: { size: 24, weight: FontWeight.Lighter } })\n      .textStyle({ color: Color.Black, font: { size: 26, weight: FontWeight.Normal } })\n      .selectedTextStyle({ color: Color.Blue, font: { size: 30, weight: FontWeight.Bolder } })\n      .onChange((value: TimePickerResult) => {\n        if (value.hour >= 0) {\n          this.selectedTime.setHours(value.hour, value.minute);\n          console.info('select current date is: ' + JSON.stringify(value));\n        }\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334109)/* ["default"] */.A) + "",
        width: "348",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2切换小时制",
      children: "示例2（切换小时制）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置useMilitaryTime实现12小时制、24小时制的切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  @State isMilitaryTime: boolean = false;\n  private selectedTime: Date = new Date('2022-07-22T08:00:00');\n\n  build() {\n    Column() {\n      Button('切换12小时制/24小时制')\n        .margin(30)\n        .onClick(() => {\n          this.isMilitaryTime = !this.isMilitaryTime;\n        })\n\n      TimePicker({\n        selected: this.selectedTime\n      })\n        .useMilitaryTime(this.isMilitaryTime)\n        .onChange((value: TimePickerResult) => {\n          if (value.hour >= 0) {\n            this.selectedTime.setHours(value.hour, value.minute);\n            console.info('select current time is: ' + JSON.stringify(value));\n          }\n        })\n        .onEnterSelectedArea((value: TimePickerResult) => {\n            console.info('item enter selected area, time is: ' + JSON.stringify(value));\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269527)/* ["default"] */.A) + "",
        width: "332",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置时间格式",
      children: "示例3（设置时间格式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例使用format和dateTimeOptions设置TimePicker时间格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  private selectedTime: Date = new Date('2022-07-22T08:00:00');\n\n  build() {\n    Column() {\n      TimePicker({\n        selected: this.selectedTime,\n        format: TimePickerFormat.HOUR_MINUTE_SECOND\n      })\n        .dateTimeOptions({ hour: \"numeric\", minute: \"2-digit\", second: \"2-digit\" })\n        .onChange((value: TimePickerResult) => {\n          if (value.hour >= 0) {\n            this.selectedTime.setHours(value.hour, value.minute);\n            console.info('select current date is: ' + JSON.stringify(value));\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149797)/* ["default"] */.A) + "",
        width: "332",
        height: "272"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置循环滚动",
      children: "示例4（设置循环滚动）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#loop11",
        children: "loop"
      }), "设置TimePicker是否循环滚动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  @State isLoop: boolean = true;\n  @State selectedTime: Date = new Date('2022-07-22T12:00:00');\n\n  build() {\n    Column() {\n      TimePicker({\n        selected: this.selectedTime\n      })\n        .loop(this.isLoop)\n        .onChange((value: TimePickerResult) => {\n          if (value.hour >= 0) {\n            this.selectedTime.setHours(value.hour, value.minute);\n            console.info('select current date is: ' + JSON.stringify(value));\n          }\n        })\n\n      Row() {\n        Text('循环滚动').fontSize(20)\n\n        Toggle({ type: ToggleType.Switch, isOn: true })\n          .onChange((isOn: boolean) => {\n            this.isLoop = isOn;\n          })\n      }.position({ x: '60%', y: '40%' })\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753430)/* ["default"] */.A) + "",
        width: "336",
        height: "342"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置时间选择组件的起始时间",
      children: "示例5（设置时间选择组件的起始时间）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例设置TimePicker的起始时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  private selectedTime: Date = new Date('2022-07-22T08:50:00');\n\n  build() {\n    Column() {\n      TimePicker({\n        selected: this.selectedTime,\n        format: TimePickerFormat.HOUR_MINUTE_SECOND,\n        start: new Date('2022-07-22T08:30:00')\n      })\n        .dateTimeOptions({ hour: \"numeric\", minute: \"2-digit\", second: \"2-digit\" })\n        .onChange((value: TimePickerResult) => {\n          if (value.hour >= 0) {\n            this.selectedTime.setHours(value.hour, value.minute);\n            console.info('select current date is: ' + JSON.stringify(value));\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(679887)/* ["default"] */.A) + "",
        width: "261",
        height: "142"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置时间选择组件的结束时间",
      children: "示例6（设置时间选择组件的结束时间）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例设置TimePicker的结束时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  private selectedTime: Date = new Date('2022-07-22T08:50:00');\n\n  build() {\n    Column() {\n      TimePicker({\n        selected: this.selectedTime,\n        format: TimePickerFormat.HOUR_MINUTE_SECOND,\n        end: new Date('2022-07-22T15:20:00'),\n      })\n        .dateTimeOptions({ hour: \"numeric\", minute: \"2-digit\", second: \"2-digit\" })\n        .onChange((value: TimePickerResult) => {\n          if (value.hour >= 0) {\n            this.selectedTime.setHours(value.hour, value.minute);\n            console.info('select current date is: ' + JSON.stringify(value));\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(955317)/* ["default"] */.A) + "",
        width: "259",
        height: "188"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置上午下午跟随时间联动",
      children: "示例7（设置上午下午跟随时间联动）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enablecascade18",
        children: "enableCascade"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#loop11",
        children: "loop"
      }), "实现12小时制时上午下午跟随时间联动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，新增enableCascade接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TimePickerExample {\n  private selectedTime: Date = new Date('2022-07-22T08:00:00');\n\n  build() {\n    Column() {\n      TimePicker({\n        selected: this.selectedTime,\n      })\n        .enableCascade(true)\n        .loop(true)\n        .onChange((value: TimePickerResult) => {\n          if (value.hour >= 0) {\n            this.selectedTime.setHours(value.hour, value.minute);\n            console.info('select current date is: ' + JSON.stringify(value));\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(79767)/* ["default"] */.A) + "",
        width: "550",
        height: "300"
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
79767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479719-98358a2b4c7c932d8a3ce86dbfe9d66a.gif");

},
711320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
149797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479717-e3aa5405b70d4fc022c82bf1cae1752d.gif");

},
239785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
730813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
955317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
94141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
845455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
753430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800068-77c0223b709bc3d0acde78090087244b.gif");

},
334109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439761-07b21845f00d3f3b6ca670726482d3f8.png");

},
107172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
496545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
679887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
269527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959716-fcb835f5794acc14cb0e35d02b875773.gif");

},
889111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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