"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["400191"], {
429763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_input_api_input_c_input_headerfile_capi_oh_pointer_style_h_capi_oh_pointer_style_h_md_56a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-input-api-input-c-input-headerfile-capi-oh-pointer-style-h-capi-oh-pointer-style-h-md-56a.json
var site_docs_ref_system_basicfun_api_input_api_input_c_input_headerfile_capi_oh_pointer_style_h_capi_oh_pointer_style_h_md_56a_namespaceObject = JSON.parse('{"id":"system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h","title":"oh_pointer_style.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h.md","sourceDirName":"system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h","slug":"/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"oh_pointer_style.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pointer-style-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-pointer-style-h"},"sidebar":"ref","previous":{"title":"oh_key_code.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h"},"next":{"title":"Input_InterceptorEventCallback","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoreventcallback/capi-input-input-interceptoreventcallback"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h.md


const frontMatter = {
	title: 'oh_pointer_style.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pointer-style-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-pointer-style-h'
};
const contentTitle = 'oh_pointer_style.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Input_PointerStyle",
  "id": "input_pointerstyle",
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
        id: "oh_pointer_styleh",
        children: "oh_pointer_style.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标光标的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimodalinput/oh_pointer_style.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohinput.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input",
        children: "input"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_pointerstyle",
              children: "Input_PointerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_PointerStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标光标样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_pointerstyle",
      children: "Input_PointerStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_PointerStyle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图示"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EAST = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEST = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向南箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向北箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEST_EAST = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西东箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_SOUTH = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向北南箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_EAST = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东北箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_WEST = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西北箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH_EAST = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东南箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOUTH_WEST = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西南箭头"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_EAST_SOUTH_WEST = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "东北西南调整"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORTH_WEST_SOUTH_EAST = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "西北东南调整"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CROSS = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准确选择"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURSOR_COPY = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拷贝"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURSOR_FORBID = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可用"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_SUCKER = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取色器"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAND_GRABBING = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "并拢的手"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAND_OPEN = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张开的手"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAND_POINTING = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手形指针"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HELP = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助选择"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOVE = 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESIZE_LEFT_RIGHT = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部左右调整"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESIZE_UP_DOWN = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部上下调整"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCREENSHOT_CHOOSE = 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截图十字准星"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCREENSHOT_CURSOR = 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截图"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT_CURSOR = 26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZOOM_IN = 27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放大"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZOOM_OUT = 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩小"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_EAST = 29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_WEST = 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_SOUTH = 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向南滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_NORTH = 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向北滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_NORTH_SOUTH = 33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向南北滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_NORTH_EAST = 34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东北滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_NORTH_WEST = 35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西北滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_SOUTH_EAST = 36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东南滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_SOUTH_WEST = 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向西南滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_NORTH_SOUTH_WEST_EAST = 38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四向锥形移动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HORIZONTAL_TEXT_CURSOR = 39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直文本选择"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURSOR_CROSS = 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "十字光标"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURSOR_CIRCLE = 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形光标"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOADING = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在载入动画光标"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING = 43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台运行中动画光标"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIDDLE_BTN_EAST_WEST = 44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向东西滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING_LEFT = 45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台运行中动画光标(拓展1)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING_RIGHT = 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台运行中动画光标(拓展2)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AECH_DEVELOPER_DEFINED_ICON = 47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形自定义光标"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCREENRECORDER_CURSOR = 48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏光标"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LASER_CURSOR = 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "悬浮光标。手写笔进入空鼠模式时使用该光标，无法直接使用 。  空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LASER_CURSOR_DOT = 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击光标。手写笔进入空鼠模式时使用该光标，无法直接使用 。  空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LASER_CURSOR_DOT_RED = 51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激光笔光标。手写笔进入空鼠模式时使用该光标，无法直接使用 。  空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVELOPER_DEFINED_ICON = -100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义光标，开发者可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_setcustomcursor",
              children: "OH_Input_SetCustomCursor"
            }), "设置自定义光标，不支持使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_setpointerstyle",
              children: "OH_Input_SetPointerStyle"
            }), "直接设置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义光标样式，通过接口设置。"
          })]
        })]
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