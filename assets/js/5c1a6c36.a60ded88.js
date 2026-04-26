"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["946528"], {
490179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_input_api_input_c_input_headerfile_capi_oh_key_code_h_capi_oh_key_code_h_md_5c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-input-api-input-c-input-headerfile-capi-oh-key-code-h-capi-oh-key-code-h-md-5c1.json
var site_docs_ref_system_basicfun_api_input_api_input_c_input_headerfile_capi_oh_key_code_h_capi_oh_key_code_h_md_5c1_namespaceObject = JSON.parse('{"id":"system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h","title":"oh_key_code.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h.md","sourceDirName":"system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h","slug":"/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"oh_key_code.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-key-code-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-key-code-h"},"sidebar":"ref","previous":{"title":"oh_input_manager.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h"},"next":{"title":"oh_pointer_style.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h.md


const frontMatter = {
	title: 'oh_key_code.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-key-code-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-key-code-h'
};
const contentTitle = 'oh_key_code.h';

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
  "value": "Input_KeyCode",
  "id": "input_keycode",
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
        id: "oh_key_codeh",
        children: "oh_key_code.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键设备的键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimodalinput/oh_key_code.h>"]
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
      }), " 12"]
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
              href: "#input_keycode",
              children: "Input_KeyCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_keycode",
      children: "Input_KeyCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_KeyCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_UNKNOWN = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能（Fn）键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HOME = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["功能（Home）键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BACK = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SEARCH = 9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["搜索键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_PLAY_PAUSE = 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体键：播放/暂停。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  与KEYCODE_PLAYPAUSE的区别为：  KEYCODE_PLAYPAUSE是较早的定义，KEYCODE_MEDIA_PLAY_PAUSE为现代媒体键设备设计，常见于较新的媒体键设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_STOP = 11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["光盘停止键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_NEXT = 12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体键：下一首  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_PREVIOUS = 13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体键：上一首  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_REWIND = 14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体键：快退  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_FAST_FORWARD = 15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体键：快进  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VOLUME_UP = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量增加键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VOLUME_DOWN = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量减小键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_POWER = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CAMERA = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VOLUME_MUTE = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扬声器静音键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MUTE = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "话筒静音键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_UP = 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节按键：调亮"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_DOWN = 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节按键：调暗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_0 = 2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'0'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_1 = 2001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'1'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_2 = 2002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'2'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_3 = 2003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'3'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_4 = 2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'4'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_5 = 2005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'5'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_6 = 2006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'6'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_7 = 2007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'7'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_8 = 2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'8'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_9 = 2009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'9'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_STAR = 2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'*'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_POUND = 2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'#'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DPAD_UP = 2012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键：向上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DPAD_DOWN = 2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键：向下"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DPAD_LEFT = 2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键：向左"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DPAD_RIGHT = 2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键：向右"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DPAD_CENTER = 2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键：确定键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_A = 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'A'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_B = 2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'B'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_C = 2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'C'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_D = 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'D'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_E = 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'E'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F = 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_G = 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'G'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_H = 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'H'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_I = 2025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'I'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_J = 2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'J'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_K = 2027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'K'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_L = 2028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'L'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_M = 2029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'M'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_N = 2030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'N'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_O = 2031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'O'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_P = 2032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'P'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_Q = 2033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Q'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_R = 2034"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'R'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_S = 2035"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'S'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_T = 2036"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'T'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_U = 2037"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'U'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_V = 2038"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'V'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_W = 2039"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'W'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_X = 2040"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'X'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_Y = 2041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Y'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_Z = 2042"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Z'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_COMMA = 2043"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键','"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PERIOD = 2044"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'.'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ALT_LEFT = 2045"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Alt键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ALT_RIGHT = 2046"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Alt键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SHIFT_LEFT = 2047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Shift键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SHIFT_RIGHT = 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Shift键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_TAB = 2049"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tab键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SPACE = 2050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空格键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SYM = 2051"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号修改器按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_EXPLORER = 2052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浏览器功能键，此键用于启动浏览器应用程序"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ENVELOPE = 2053"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子邮件功能键，此键用于启动电子邮件应用程序"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ENTER = 2054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回车键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DEL = 2055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退格键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_GRAVE = 2056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'`'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MINUS = 2057"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'-'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_EQUALS = 2058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'='"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_LEFT_BRACKET = 2059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'['"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_RIGHT_BRACKET = 2060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键']'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BACKSLASH = 2061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键''"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SEMICOLON = 2062"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键';'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_APOSTROPHE = 2063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键''' (单引号)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SLASH = 2064"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'/'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_AT = 2065"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'@'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PLUS = 2066"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'+'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MENU = 2067"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PAGE_UP = 2068"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上翻页键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PAGE_DOWN = 2069"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下翻页键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ESCAPE = 2070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Esc键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FORWARD_DEL = 2071"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CTRL_LEFT = 2072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Ctrl键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CTRL_RIGHT = 2073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Ctrl键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CAPS_LOCK = 2074"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大写锁定键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SCROLL_LOCK = 2075"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动锁定键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_META_LEFT = 2076"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Meta键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_META_RIGHT = 2077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Meta键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FUNCTION = 2078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SYSRQ = 2079"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统请求/打印屏幕键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BREAK = 2080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break/Pause键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MOVE_HOME = 2081"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标移动到开始键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MOVE_END = 2082"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标移动到末尾键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_INSERT = 2083"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FORWARD = 2084"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前进键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_PLAY = 2085"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键：播放"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_PAUSE = 2086"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光盘暂停键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_CLOSE = 2087"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光盘关闭键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_EJECT = 2088"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光盘弹出键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_RECORD = 2089"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键：录音"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F1 = 2090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F1'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F2 = 2091"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F2'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F3 = 2092"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F3'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F4 = 2093"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F4'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F5 = 2094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F5'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F6 = 2095"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F6'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F7 = 2096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F7'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F8 = 2097"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F8'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F9 = 2098"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F9'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F10 = 2099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F10'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F11 = 2100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F11'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F12 = 2101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F12'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUM_LOCK = 2102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘锁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_0 = 2103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'0'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_1 = 2104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'1'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_2 = 2105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'2'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_3 = 2106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'3'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_4 = 2107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'4'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_5 = 2108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'5'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_6 = 2109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'6'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_7 = 2110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'7'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_8 = 2111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'8'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_9 = 2112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'9'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_DIVIDE = 2113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'/'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_MULTIPLY = 2114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'*'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_SUBTRACT = 2115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'-'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_ADD = 2116"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'+'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_DOT = 2117"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'.'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_COMMA = 2118"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键','"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_ENTER = 2119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键回车"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_EQUALS = 2120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'='"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_LEFT_PAREN = 2121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'('"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_RIGHT_PAREN = 2122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键')'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VIRTUAL_MULTITASK = 2210"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["虚拟多任务键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_A = 2301"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'A'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_B = 2302"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'B'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_X = 2304"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'X'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_Y = 2305"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Y'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_L1 = 2307"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'L1'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_R1 = 2308"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'R1'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_L2 = 2309"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'L2'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_R2 = 2310"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'R2'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_SELECT = 2311"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Select'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_START = 2312"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Start'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_MODE = 2313"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Mode'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_THUMBL = 2314"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'THUMBL'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTON_THUMBR = 2315"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'THUMBR'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SLEEP = 2600"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["睡眠键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ZENKAKU_HANKAKU = 2601"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文全宽/半宽键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_102ND = 2602"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["国际键盘扩展键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_RO = 2603"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文Ro键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KATAKANA = 2604"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文片假名键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HIRAGANA = 2605"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文平假名键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HENKAN = 2606"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文转换键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KATAKANA_HIRAGANA = 2607"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日语片假名/平假名键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MUHENKAN = 2608"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文非转换键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_LINEFEED = 2609"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["换行键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MACRO = 2610"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["宏键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NUMPAD_PLUSMINUS = 2611"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数字键盘上的加号/减号键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SCALE = 2612"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HANGUEL = 2613"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文韩语键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HANJA = 2614"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日文汉语键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_YEN = 2615"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日元键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_STOP = 2616"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_AGAIN = 2617"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PROPS = 2618"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["道具键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_UNDO = 2619"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["撤消键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_COPY = 2620"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["复制键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_OPEN = 2621"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["打开键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PASTE = 2622"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粘贴键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FIND = 2623"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查找键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CUT = 2624"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["剪切键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HELP = 2625"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["帮助键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CALC = 2626"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计算器特殊功能键，用于启动计算器应用程序  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FILE = 2627"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文件按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BOOKMARKS = 2628"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["书签键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NEXT = 2629"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Page Down键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PLAYPAUSE = 2630"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多媒体键：播放/暂停。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22  与KEYCODE_MEDIA_PLAY_PAUSE的区别为：  KEYCODE_PLAYPAUSE是较早的定义，KEYCODE_MEDIA_PLAY_PAUSE为现代媒体键设备设计，常见于较新的媒体键设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PREVIOUS = 2631"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Page Up键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_STOPCD = 2632"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CD停止键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CONFIG = 2634"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_REFRESH = 2635"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["刷新键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_EXIT = 2636"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["退出键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_EDIT = 2637"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编辑键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SCROLLUP = 2638"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向上滚动键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SCROLLDOWN = 2639"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向下滚动键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NEW = 2640"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["新建键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_REDO = 2641"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["恢复键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CLOSE = 2642"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关闭键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PLAY = 2643"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BASSBOOST = 2644"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["低音增强键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PRINT = 2645"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["打印键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CHAT = 2646"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["聊天键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FINANCE = 2647"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["金融键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CANCEL = 2648"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDILLUM_TOGGLE = 2649"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘灯光切换键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDILLUM_DOWN = 2650"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘灯光调暗键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDILLUM_UP = 2651"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘灯光调亮键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SEND = 2652"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发送键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_REPLY = 2653"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["答复键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FORWARDMAIL = 2654"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["邮件转发键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SAVE = 2655"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["保存键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DOCUMENTS = 2656"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文件键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VIDEO_NEXT = 2657"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下一个视频键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VIDEO_PREV = 2658"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上一个视频键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_CYCLE = 2659"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["背光渐变键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_ZERO = 2660"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["亮度调节为0键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DISPLAY_OFF = 2661"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["显示关闭键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_MISC = 2662"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄上的各种按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_GOTO = 2663"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进入键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_INFO = 2664"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["信息查看键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PROGRAM = 2665"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["程序键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PVR = 2666"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["个人录像机（PVR）键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SUBTITLE = 2667"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字幕键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FULL_SCREEN = 2668"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全屏键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KEYBOARD = 2669"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ASPECT_RATIO = 2670"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕纵横比调节键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PC = 2671"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["端口控制键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_TV = 2672"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TV键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_TV2 = 2673"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TV键2  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VCR = 2674"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录像机开启键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VCR2 = 2675"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录像机开启键2  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SAT = 2676"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SIM卡应用工具包（SAT）键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CD = 2677"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CD键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_TAPE = 2678"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["磁带键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_TUNER = 2679"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调谐器键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PLAYER = 2680"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放器键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DVD = 2681"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DVD键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_AUDIO = 2682"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VIDEO = 2683"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEMO = 2684"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["备忘录键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CALENDAR = 2685"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日历键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_RED = 2686"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["红色指示器  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_GREEN = 2687"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绿色指示器  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_YELLOW = 2688"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["黄色指示器  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BLUE = 2689"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["蓝色指示器  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CHANNELUP = 2690"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["频道向上键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CHANNELDOWN = 2691"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["频道向下键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_LAST = 2692"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["末尾键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_RESTART = 2693"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重启键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SLOW = 2694"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["慢速键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SHUFFLE = 2695"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["随机播放键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VIDEOPHONE = 2696"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可视电话键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_GAMES = 2697"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ZOOMIN = 2698"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["放大键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ZOOMOUT = 2699"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["缩小键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ZOOMRESET = 2700"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["缩放重置键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_WORDPROCESSOR = 2701"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文字处理键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_EDITOR = 2702"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编辑器键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SPREADSHEET = 2703"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["电子表格键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_GRAPHICSEDITOR = 2704"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图形编辑器键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PRESENTATION = 2705"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["演示文稿键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DATABASE = 2706"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据库键标  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_NEWS = 2707"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["新闻键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_VOICEMAIL = 2708"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["语音信箱  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ADDRESSBOOK = 2709"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通讯簿  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MESSENGER = 2710"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通信键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_TOGGLE = 2711"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["亮度切换键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SPELLCHECK = 2712"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拼写检查键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_COFFEE = 2713"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["终端锁/屏幕保护程序  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MEDIA_REPEAT = 2714"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体循环键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_IMAGES = 2715"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BUTTONCONFIG = 2716"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键配置键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_TASKMANAGER = 2717"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["任务管理器  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_JOURNAL = 2718"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["日志按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CONTROLPANEL = 2719"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制面板键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_APPSELECT = 2720"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用程序选择键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SCREENSAVER = 2721"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕保护程序键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ASSISTANT = 2722"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["智慧键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBD_LAYOUT_NEXT = 2723"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下一个键盘布局键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_MIN = 2724"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最小亮度键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BRIGHTNESS_MAX = 2725"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最大亮度键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDINPUTASSIST_PREV = 2726"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘输入Assist_Previous，查看输入法输入记录  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDINPUTASSIST_NEXT = 2727"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘输入Assist_Next，查看输入法输入拓展  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDINPUTASSIST_PREVGROUP = 2728"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘输入Assist_Previous，切换输入组中上一个输入法  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDINPUTASSIST_NEXTGROUP = 2729"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘输入Assist_Next，切换输入组中下一个输入法  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDINPUTASSIST_ACCEPT = 2730"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘输入Assist_Accept  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_KBDINPUTASSIST_CANCEL = 2731"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘输入Assist_Cancel  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_FRONT = 2800"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["挡风玻璃除雾器开关  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SETUP = 2801"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_WAKEUP = 2802"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["唤醒键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SENDFILE = 2803"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发送文件按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DELETEFILE = 2804"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["删除文件按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_XFER = 2805"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文件传输（XFER）按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PROG1 = 2806"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["程序键1  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PROG2 = 2807"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["程序键2  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MSDOS = 2808"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DOS面板键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SCREENLOCK = 2809"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕锁定键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DIRECTION_ROTATE_DISPLAY = 2810"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["方向旋转显示键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CYCLEWINDOWS = 2811"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["窗口切换键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_COMPUTER = 2812"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_EJECTCLOSECD = 2813"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹出CD键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ISO = 2814"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ISO键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_MOVE = 2815"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["移动键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F13 = 2816"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F13'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F14 = 2817"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F14'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F15 = 2818"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F15'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F16 = 2819"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F16'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F17 = 2820"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F17'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F18 = 2821"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F18'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F19 = 2822"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F19'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F20 = 2823"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F20'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F21 = 2824"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F21'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F22 = 2825"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F22'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F23 = 2826"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F23'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_F24 = 2827"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键'F24'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PROG3 = 2828"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["程序键3  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_PROG4 = 2829"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["程序键4  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DASHBOARD = 2830"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仪表板  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SUSPEND = 2831"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["挂起键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_HP = 2832"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["高阶路径键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SOUND = 2833"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音量键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_QUESTION = 2834"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["疑问按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CONNECT = 2836"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["连接键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SPORT = 2837"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["运动按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SHOP = 2838"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["商城键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_ALTERASE = 2839"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["交替键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_SWITCHVIDEOMODE = 2841"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在可用视频之间循环输出（监视器/LCD/TV输出/等）  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BATTERY = 2842"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["电池按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BLUETOOTH = 2843"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["蓝牙按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_WLAN = 2844"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无线局域网  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_UWB = 2845"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超宽带控制键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_WWAN_WIMAX = 2846"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["移动网络控制键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_RFKILL = 2847"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制所有收音机的键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_CHANNEL = 3001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向上频道键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_0 = 3100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_1 = 3101"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键1  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_2 = 3102"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键2  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_3 = 3103"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键3  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_4 = 3104"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键4  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_5 = 3105"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键5  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_6 = 3106"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键6  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_7 = 3107"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键7  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_8 = 3108"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键8  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_BTN_9 = 3109"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键9  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DAGGER_CLICK = 3211"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["智能手表智感窗按键单击  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DAGGER_DOUBLE_CLICK = 3212"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["智能手表智感窗按键双击  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DAGGER_LONG_PRESS = 3213"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["智能手表智感窗按键长按  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYCODE_DIV = 3220"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["智能手表左按键  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
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