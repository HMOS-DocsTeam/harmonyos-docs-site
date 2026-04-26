"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["515948"], {
912855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_xcomponent_key_event_h_capi_native_xcomponent_key_event_h_md_bff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-headerfile-capi-native-xcomponent-key-event-h-capi-native-xcomponent-key-event-h-md-bff.json
var site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_xcomponent_key_event_h_capi_native_xcomponent_key_event_h_md_bff_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h","title":"native_xcomponent_key_event.h","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h.md","sourceDirName":"arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h","slug":"/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"native_xcomponent_key_event.h","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-xcomponent-key-event-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-xcomponent-key-event-h"},"sidebar":"ref","previous":{"title":"native_type.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h"},"next":{"title":"styled_string.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h.md


const frontMatter = {
	title: 'native_xcomponent_key_event.h',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-xcomponent-key-event-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-xcomponent-key-event-h'
};
const contentTitle = 'native_xcomponent_key_event.h';

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
  "value": "OH_NativeXComponent_KeyCode",
  "id": "oh_nativexcomponent_keycode",
  "level": 3
}, {
  "value": "OH_NativeXComponent_KeyAction",
  "id": "oh_nativexcomponent_keyaction",
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
        id: "native_xcomponent_key_eventh",
        children: "native_xcomponent_key_event.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于访问Native XComponent键盘事件所使用到的枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ace/xcomponent/native_xcomponent_key_event.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libace_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeXComponentSample",
        children: "NativeXComponentSample"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_keycode",
              children: "OH_NativeXComponent_KeyCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_KeyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件的键码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_keyaction",
              children: "OH_NativeXComponent_KeyAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_KeyAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件动作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_keycode",
      children: "OH_NativeXComponent_KeyCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_KeyCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件的键码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "KEY_UNKNOWN = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能（Fn）键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HOME = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能（Home）键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BACK = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_PLAY_PAUSE = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，播放/暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_STOP = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，停止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_NEXT = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，下一首。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_PREVIOUS = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，上一首。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_REWIND = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，快退。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_FAST_FORWARD = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，快进。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VOLUME_UP = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量增加键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VOLUME_DOWN = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量减小键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_POWER = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CAMERA = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VOLUME_MUTE = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扬声器静音键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MUTE = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "话筒静音键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_UP = 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节按键，调亮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_DOWN = 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节按键，调暗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_0 = 2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'0'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_1 = 2001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'1'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_2 = 2002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'2'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_3 = 2003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'3'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_4 = 2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'4'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_5 = 2005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'5'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_6 = 2006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'6'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_7 = 2007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'7'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_8 = 2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'8'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_9 = 2009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'9'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_STAR = 2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'*'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_POUND = 2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'#'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DPAD_UP = 2012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DPAD_DOWN = 2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DPAD_LEFT = 2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向左。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DPAD_RIGHT = 2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向右。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DPAD_CENTER = 2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，确定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_A = 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'A'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_B = 2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'B'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_C = 2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'C'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_D = 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'D'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_E = 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'E'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F = 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_G = 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'G'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_H = 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'H'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_I = 2025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'I'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_J = 2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'J'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_K = 2027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'K'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_L = 2028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'L'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_M = 2029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'M'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_N = 2030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'N'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_O = 2031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'O'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_P = 2032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'P'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_Q = 2033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Q'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_R = 2034"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'R'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_S = 2035"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'S'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_T = 2036"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'T'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_U = 2037"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'U'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_V = 2038"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'V'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_W = 2039"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'W'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_X = 2040"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'X'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_Y = 2041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Y'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_Z = 2042"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Z'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_COMMA = 2043"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键','。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PERIOD = 2044"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'.'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ALT_LEFT = 2045"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Alt键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ALT_RIGHT = 2046"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Alt键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SHIFT_LEFT = 2047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Shift键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SHIFT_RIGHT = 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Shift键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_TAB = 2049"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tab键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SPACE = 2050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空格键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SYM = 2051"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号修改器按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_EXPLORER = 2052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浏览器功能键，此键用于启动浏览器应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ENVELOPE = 2053"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子邮件功能键，此键用于启动电子邮件应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ENTER = 2054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回车键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DEL = 2055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退格键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_GRAVE = 2056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'`'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MINUS = 2057"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'-'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_EQUALS = 2058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'='。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_LEFT_BRACKET = 2059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'['。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_RIGHT_BRACKET = 2060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键']'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BACKSLASH = 2061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键''。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SEMICOLON = 2062"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键';'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_APOSTROPHE = 2063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键''' (单引号)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SLASH = 2064"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'/'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_AT = 2065"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'@'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PLUS = 2066"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'+'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MENU = 2067"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PAGE_UP = 2068"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上翻页键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PAGE_DOWN = 2069"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下翻页键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ESCAPE = 2070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESC键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FORWARD_DEL = 2071"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CTRL_LEFT = 2072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Ctrl键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CTRL_RIGHT = 2073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Ctrl键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CAPS_LOCK = 2074"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大写锁定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SCROLL_LOCK = 2075"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动锁定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_META_LEFT = 2076"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左元修改器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_META_RIGHT = 2077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右元修改器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FUNCTION = 2078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SYSRQ = 2079"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统请求/打印屏幕键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BREAK = 2080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break/Pause键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MOVE_HOME = 2081"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标移动到开始键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MOVE_END = 2082"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标移动到末尾键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_INSERT = 2083"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FORWARD = 2084"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前进键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_PLAY = 2085"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_PAUSE = 2086"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_CLOSE = 2087"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_EJECT = 2088"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，弹出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_RECORD = 2089"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，录音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F1 = 2090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F1'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F2 = 2091"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F2'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F3 = 2092"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F3'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F4 = 2093"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F4'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F5 = 2094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F5'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F6 = 2095"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F6'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F7 = 2096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F7'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F8 = 2097"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F8'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F9 = 2098"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F9'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F10 = 2099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F10'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F11 = 2100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F11'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F12 = 2101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F12'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUM_LOCK = 2102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘锁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_0 = 2103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'0'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_1 = 2104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'1'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_2 = 2105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'2'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_3 = 2106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'3'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_4 = 2107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'4'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_5 = 2108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'5'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_6 = 2109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'6'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_7 = 2110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'7'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_8 = 2111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'8'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_9 = 2112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'9'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_DIVIDE = 2113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'/'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_MULTIPLY = 2114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'*'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_SUBTRACT = 2115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'-'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_ADD = 2116"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'+'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_DOT = 2117"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'.'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_COMMA = 2118"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键','。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_ENTER = 2119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键回车。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_EQUALS = 2120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'='。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_LEFT_PAREN = 2121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'('。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_RIGHT_PAREN = 2122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键')'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VIRTUAL_MULTITASK = 2210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "虚拟多任务键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SLEEP = 2600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "睡眠键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ZENKAKU_HANKAKU = 2601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文全宽/半宽键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_102ND = 2602"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "102nd按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_RO = 2603"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文Ro键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KATAKANA = 2604"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文片假名键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HIRAGANA = 2605"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文平假名键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HENKAN = 2606"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文转换键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KATAKANA_HIRAGANA = 2607"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日语片假名/平假名键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MUHENKAN = 2608"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文非转换键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_LINEFEED = 2609"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "换行键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MACRO = 2610"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宏键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NUMPAD_PLUSMINUS = 2611"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键盘上的加号/减号键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SCALE = 2612"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HANGUEL = 2613"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文韩语键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HANJA = 2614"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日文汉语键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_YEN = 2615"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日元键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_STOP = 2616"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_AGAIN = 2617"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PROPS = 2618"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "道具键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_UNDO = 2619"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤消键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_COPY = 2620"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_OPEN = 2621"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PASTE = 2622"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粘贴键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FIND = 2623"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查找键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CUT = 2624"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪切键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HELP = 2625"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CALC = 2626"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算器特殊功能键，用于启动计算器应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FILE = 2627"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BOOKMARKS = 2628"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "书签键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NEXT = 2629"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一个按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PLAYPAUSE = 2630"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放/暂停键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PREVIOUS = 2631"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一个按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_STOPCD = 2632"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CD停止键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CONFIG = 2634"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_REFRESH = 2635"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_EXIT = 2636"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_EDIT = 2637"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SCROLLUP = 2638"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上滚动键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SCROLLDOWN = 2639"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下滚动键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NEW = 2640"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新建键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_REDO = 2641"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "恢复键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CLOSE = 2642"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PLAY = 2643"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BASSBOOST = 2644"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低音增强键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PRINT = 2645"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CHAT = 2646"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "聊天键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FINANCE = 2647"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "金融键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CANCEL = 2648"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDILLUM_TOGGLE = 2649"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘灯光切换键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDILLUM_DOWN = 2650"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘灯光调亮键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDILLUM_UP = 2651"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘灯光调暗键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SEND = 2652"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_REPLY = 2653"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "答复键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FORWARDMAIL = 2654"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "邮件转发键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SAVE = 2655"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DOCUMENTS = 2656"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VIDEO_NEXT = 2657"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一个视频键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VIDEO_PREV = 2658"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一个视频键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_CYCLE = 2659"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "背光渐变键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_ZERO = 2660"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节为0键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DISPLAY_OFF = 2661"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示关闭键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_MISC = 2662"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄上的各种按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_GOTO = 2663"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_INFO = 2664"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信息查看键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PROGRAM = 2665"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PVR = 2666"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "个人录像机(PVR)键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SUBTITLE = 2667"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字幕键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FULL_SCREEN = 2668"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全屏键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KEYBOARD = 2669"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ASPECT_RATIO = 2670"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕纵横比调节键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PC = 2671"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口控制键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_TV = 2672"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TV键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_TV2 = 2673"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TV键2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VCR = 2674"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录像机开启键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VCR2 = 2675"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录像机开启键2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SAT = 2676"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIM卡应用工具包（SAT）键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CD = 2677"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CD键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_TAPE = 2678"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁带键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_TUNER = 2679"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调谐器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PLAYER = 2680"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DVD = 2681"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DVD键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_AUDIO = 2682"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VIDEO = 2683"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEMO = 2684"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "备忘录键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CALENDAR = 2685"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日历键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_RED = 2686"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "红色指示器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_GREEN = 2687"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绿色指示器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_YELLOW = 2688"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "黄色指示器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BLUE = 2689"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝色指示器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CHANNELUP = 2690"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "频道向上键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CHANNELDOWN = 2691"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "频道向下键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_LAST = 2692"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "末尾键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_RESTART = 2693"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SLOW = 2694"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "慢速键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SHUFFLE = 2695"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "随机播放键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VIDEOPHONE = 2696"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可视电话键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_GAMES = 2697"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ZOOMIN = 2698"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放大键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ZOOMOUT = 2699"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩小键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ZOOMRESET = 2700"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放重置键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_WORDPROCESSOR = 2701"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文字处理键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_EDITOR = 2702"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SPREADSHEET = 2703"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子表格键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_GRAPHICSEDITOR = 2704"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形编辑器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PRESENTATION = 2705"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "演示文稿键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DATABASE = 2706"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库键标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_NEWS = 2707"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新闻键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_VOICEMAIL = 2708"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音信箱。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ADDRESSBOOK = 2709"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通讯簿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MESSENGER = 2710"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通信键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_TOGGLE = 2711"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度切换键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SPELLCHECK = 2712"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AL拼写检查。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_COFFEE = 2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终端锁/屏幕保护程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MEDIA_REPEAT = 2714"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体循环键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_IMAGES = 2715"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BUTTONCONFIG = 2716"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键配置键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_TASKMANAGER = 2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_JOURNAL = 2718"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CONTROLPANEL = 2719"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制面板键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_APPSELECT = 2720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用程序选择键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SCREENSAVER = 2721"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕保护程序键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ASSISTANT = 2722"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBD_LAYOUT_NEXT = 2723"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一个键盘布局键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_MIN = 2724"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小亮度键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BRIGHTNESS_MAX = 2725"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大亮度键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDINPUTASSIST_PREV = 2726"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘输入Assist_Previous。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDINPUTASSIST_NEXT = 2727"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘输入Assist_Next。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDINPUTASSIST_PREVGROUP = 2728"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘输入Assist_Previous。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDINPUTASSIST_NEXTGROUP = 2729"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘输入Assist_Next。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDINPUTASSIST_ACCEPT = 2730"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘输入Assist_Accept。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_KBDINPUTASSIST_CANCEL = 2731"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘输入Assist_Cancel。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_FRONT = 2800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挡风玻璃除雾器开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SETUP = 2801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_WAKEUP = 2802"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "唤醒键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SENDFILE = 2803"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送文件按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DELETEFILE = 2804"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文件按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_XFER = 2805"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件传输(XFER)按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PROG1 = 2806"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序键1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PROG2 = 2807"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序键2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MSDOS = 2808"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MS-DOS键（微软磁盘操作系统）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SCREENLOCK = 2809"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕锁定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DIRECTION_ROTATE_DISPLAY = 2810"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方向旋转显示键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CYCLEWINDOWS = 2811"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows循环键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_COMPUTER = 2812"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_EJECTCLOSECD = 2813"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出CD键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ISO = 2814"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_MOVE = 2815"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F13 = 2816"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F13'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F14 = 2817"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F14'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F15 = 2818"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F15'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F16 = 2819"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F16'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F17 = 2820"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F17'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F18 = 2821"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F18'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F19 = 2822"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F19'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F20 = 2823"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F20'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F21 = 2824"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F21'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F22 = 2825"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F22'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F23 = 2826"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F23'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_F24 = 2827"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F24'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PROG3 = 2828"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序键3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PROG4 = 2829"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序键4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DASHBOARD = 2830"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仪表板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SUSPEND = 2831"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挂起键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_HP = 2832"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高阶路径键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SOUND = 2833"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_QUESTION = 2834"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "疑问按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CONNECT = 2836"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SPORT = 2837"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运动按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SHOP = 2838"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商城键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ALTERASE = 2839"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交替键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SWITCHVIDEOMODE = 2841"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在可用视频之间循环输出（监视器/LCD/TV输出/等）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BATTERY = 2842"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电池按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BLUETOOTH = 2843"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_WLAN = 2844"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线局域网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_UWB = 2845"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超宽带（UWB）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_WWAN_WIMAX = 2846"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WWAN WiMAX按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_RFKILL = 2847"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制所有收音机的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_CHANNEL = 3001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上频道键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_0 = 3100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_1 = 3101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_2 = 3102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_3 = 3103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_4 = 3104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_5 = 3105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_6 = 3106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键6。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_7 = 3107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键7。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_8 = 3108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键8。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_BTN_9 = 3109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键9。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_keyaction",
      children: "OH_NativeXComponent_KeyAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_KeyAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NATIVEXCOMPONENT_KEY_ACTION_UNKNOWN = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知的按键动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_KEY_ACTION_DOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键按下动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_KEY_ACTION_UP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键抬起动作。"
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