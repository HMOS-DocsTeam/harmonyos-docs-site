"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["861557"], {
66330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avsession_errors_h_capi_native_avsession_errors_h_md_7f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avsession-api-avsession-c-avsession-headerfile-capi-native-avsession-errors-h-capi-native-avsession-errors-h-md-7f1.json
var site_docs_ref_avsession_api_avsession_c_avsession_headerfile_capi_native_avsession_errors_h_capi_native_avsession_errors_h_md_7f1_namespaceObject = JSON.parse('{"id":"avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h","title":"native_avsession_errors.h","description":"概述","source":"@site/docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h.md","sourceDirName":"avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h","slug":"/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"native_avsession_errors.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avsession-errors-h"},"sidebar":"ref","previous":{"title":"native_avsession.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h"},"next":{"title":"native_avcastcontroller.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avcastcontroller-h/capi-native-avcastcontroller-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h.md


const frontMatter = {
	title: 'native_avsession_errors.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avsession-errors-h'
};
const contentTitle = 'native_avsession_errors.h';

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
  "value": "AVSession_ErrCode",
  "id": "avsession_errcode",
  "level": 3
}, {
  "value": "AVSessionCallback_Result",
  "id": "avsessioncallback_result",
  "level": 3
}, {
  "value": "AVMetadata_Result",
  "id": "avmetadata_result",
  "level": 3
}, {
  "value": "AVQueueItem_Result",
  "id": "avqueueitem_result",
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
        id: "native_avsession_errorsh",
        children: "native_avsession_errors.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供播控错误码的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/av_session/native_avsession_errors.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohavsession.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession",
        children: "OHAVSession"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#avsession_errcode",
              children: "AVSession_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVSession_ErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avsessioncallback_result",
              children: "AVSessionCallback_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVSessionCallback_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音视频会话回调结果枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avmetadata_result",
              children: "AVMetadata_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVMetadata_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控元数据错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avqueueitem_result",
              children: "AVQueueItem_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVQueueItem_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放列表中单项的错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avsession_errcode",
      children: "AVSession_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVSession_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AV_SESSION_ERR_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数检查失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_SERVICE_EXCEPTION = 6600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话服务端异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_SESSION_NOT_EXIST = 6600102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_COMMAND_INVALID = 6600105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效会话命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_SESSION_INACTIVE = 6600106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话未激活。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_MESSAGE_OVERLOAD = 6600107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令&消息过载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_REMOTE_CONNECTION_NOT_EXIST = 6600109"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["远端会话不存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_UNSPECIFIED = 6611000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["投播控制器出现未知错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_REMOTE_ERROR = 6611001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["远端设备出现未知错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_BEHIND_LIVE_WINDOW = 6611002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载位置超过投播视频的总进度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_TIMEOUT = 6611003"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["投播控制器加载超时。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_RUNTIME_CHECK_FAILED = 6611004"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["运行时检查失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PLAYER_NOT_WORKING = 6611100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["跨设备数据传输被锁定。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_SEEK_MODE_UNSUPPORTED = 6611101"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持当前进度条模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_ILLEGAL_SEEK_TARGET = 6611102"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持跳转位置越界或异常跳转模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PLAY_MODE_UNSUPPORTED = 6611103"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持当前播放模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PLAY_SPEED_UNSUPPORTED = 6611104"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持当前播放速度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DEVICE_MISSING = 6611105"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体接收设备已离线，操作执行失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_INVALID_PARAM = 6611106"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参数无效，如播放地址非法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_NO_MEMORY = 6611107"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内存分配失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_OPERATION_NOT_ALLOWED = 6611108"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不允许进行当前操作。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_UNSPECIFIED = 6612000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未知的输入/输出错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_NETWORK_CONNECTION_FAILED = 6612001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络连接失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_NETWORK_CONNECTION_TIMEOUT = 6612002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络超时。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_INVALID_HTTP_CONTENT_TYPE = 6612003"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求头中的Content-Type字段不合法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_BAD_HTTP_STATUS = 6612004"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP服务器返回异常的HTTP响应状态码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_FILE_NOT_FOUND = 6612005"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文件不存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_NO_PERMISSION = 6612006"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["缺少执行IO（输入/输出）操作的权限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_CLEARTEXT_NOT_PERMITTED = 6612007"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络安全配置不允许此操作。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_READ_POSITION_OUT_OF_RANGE = 6612008"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["读取数据超出数据范围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_NO_CONTENTS = 6612100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["缺少可播放的媒体资源。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_READ_ERROR = 6612101"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体无法被读取，如存储介质沾灰、出现划痕。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_CONTENT_BUSY = 6612102"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["资源正在使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_CONTENT_EXPIRED = 6612103"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容使用有效期已过。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_USE_FORBIDDEN = 6612104"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不允许使用请求的内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_NOT_VERIFIED = 6612105"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无法验证授权内容的使用权限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_EXHAUSTED_ALLOWED_USES = 6612106"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该媒体内容的按需请求使用次数，已触达系统最大允许使用次数上限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_IO_NETWORK_PACKET_SENDING_FAILED = 6612107"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["本端向远端发送资源包失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PARSING_UNSPECIFIED = 6613000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体内容解析过程中出现未明确具体类型的错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PARSING_CONTAINER_MALFORMED = 6613001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体容器格式码流解析错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PARSING_MANIFEST_MALFORMED = 6613002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体清单解析错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PARSING_CONTAINER_UNSUPPORTED = 6613003"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提取文件失败，不支持该媒体容器格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_PARSING_MANIFEST_UNSUPPORTED = 6613004"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体无法读取，如介质有灰尘、划痕。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DECODING_UNSPECIFIED = 6614000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未知的解码错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DECODING_INIT_FAILED = 6614001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["解码器初始化失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DECODING_QUERY_FAILED = 6614002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["解码器查询失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DECODING_FAILED = 6614003"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["解码媒体样本时失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DECODING_FORMAT_EXCEEDS_CAPABILITIES = 6614004"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容请求使用次数达最大限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_DECODING_FORMAT_UNSUPPORTED = 6614005"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["解码不支持的内容格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_UNSPECIFIED = 6615000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频渲染器出现未明确具体类型的异常错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_INIT_FAILED = 6615001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频渲染器初始化异常。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SESSION_ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_WRITE_FAILED = 6615002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频渲染器写数据异常。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avsessioncallback_result",
      children: "AVSessionCallback_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVSessionCallback_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义音视频会话回调结果枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AVSESSION_CALLBACK_RESULT_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话的回调结果为执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVSESSION_CALLBACK_RESULT_FAILURE = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话的回调结果为执行失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avmetadata_result",
      children: "AVMetadata_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVMetadata_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控元数据错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "AVMETADATA_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_ERROR_INVALID_PARAM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该函数是使用无效的输入参数执行的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVMETADATA_ERROR_NO_MEMORY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存分配失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avqueueitem_result",
      children: "AVQueueItem_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVQueueItem_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放列表中单项的错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "AVQUEUEITEM_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVQUEUEITEM_ERROR_INVALID_PARAM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该函数是使用无效的输入参数执行的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVQUEUEITEM_ERROR_NO_MEMORY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存分配失败。"
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