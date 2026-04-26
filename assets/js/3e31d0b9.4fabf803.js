"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["915933"], {
173347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_arkts_arkts_apis_neterrorlist_arkts_apis_neterrorlist_md_3e3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-arkts-arkts-apis-neterrorlist-arkts-apis-neterrorlist-md-3e3.json
var site_docs_ref_arkweb_api_arkweb_arkts_arkts_apis_neterrorlist_arkts_apis_neterrorlist_md_3e3_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist","title":"@ohos.web.netErrorList (ArkWeb网络协议栈错误列表)","description":"ArkWeb的网络协议栈错误列表。","source":"@site/docs-ref/arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist.md","sourceDirName":"arkweb-api/arkweb-arkts/arkts-apis-neterrorlist","slug":"/arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.web.netErrorList (ArkWeb网络协议栈错误列表)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-neterrorlist"},"sidebar":"ref","previous":{"title":"Types","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-t/arkts-apis-webview-t"},"next":{"title":"@ohos.web.WebNativeMessagingExtensionAbility (Web Native Messaging Extension Ability)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist.md


const frontMatter = {
	title: '@ohos.web.netErrorList (ArkWeb网络协议栈错误列表)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-neterrorlist'
};
const contentTitle = '@ohos.web.netErrorList (ArkWeb网络协议栈错误列表)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "WebNetErrorList",
  "id": "webneterrorlist",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "ohoswebneterrorlist-arkweb网络协议栈错误列表",
        children: "@ohos.web.netErrorList (ArkWeb网络协议栈错误列表)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb的网络协议栈错误列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb网络协议栈错误码直接映射Chromium错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/net/base/net_error_list.h",
        children: "net_error_list.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(163241)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { WebNetErrorList } from '@kit.ArkWeb';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "webneterrorlist",
      children: "WebNetErrorList"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb的网络协议栈错误列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Web.Webview.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NET_OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "访问正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_IO_PENDING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步IO操作尚未完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一般性的错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ABORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作已被中止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_ARGUMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_HANDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件描述符的句柄是无效的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FILE_NOT_FOUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件未找到。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TIMED_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FILE_TOO_LARGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件过大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNEXPECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遇到了一个未被预期或未被特定处理的问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ACCESS_DENIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "访问除了网络以外的资源被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NOT_IMPLEMENTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能未实现，导致操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INSUFFICIENT_RESOURCES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统或程序执行所需的资源不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_OUT_OF_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存溢出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UPLOAD_FILE_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上传文件失败因为文件的修改时间不符合预期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKET_NOT_CONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长连接断开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FILE_EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件已存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FILE_PATH_TOO_LONG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径或者文件名过长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FILE_NO_SPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘没有足够空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FILE_VIRUS_INFECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件包含病毒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BLOCKED_BY_CLIENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端已阻止该请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NETWORK_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络发生变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BLOCKED_BY_ADMINISTRATOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被管理员阻止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKET_CONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "socket已经处于连接状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UPLOAD_STREAM_REWIND_NOT_SUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上传重传不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONTEXT_SHUT_DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "因为上下文已关闭导致请求失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BLOCKED_BY_RESPONSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求失败，因为响应不满足要求（例如“X-Frame-Options”和“Content Security Policy”检查以及“Cross Origin Resource Policy”）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CLEARTEXT_NOT_PERMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该请求被系统策略阻止，不允许部分或全部明文请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BLOCKED_BY_CSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求被内容安全策略阻止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_H2_OR_QUIC_REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于没有H/2或QUIC会话，请求被阻止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BLOCKED_BY_ORB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求被 CORB 或 ORB 阻止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONNECTION_CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接已关闭（对应于TCP FIN）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONNECTION_RESET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接被重置（对应于TCP RST）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONNECTION_REFUSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONNECTION_ABORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于未接收到发送数据的ACK，连接超时。这可能包括一个未得到ACK的FIN数据包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONNECTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NAME_NOT_RESOLVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "域名无法解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INTERNET_DISCONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络断开连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_PROTOCOL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL 协议错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ADDRESS_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP地址或端口号无效（例如，无法连接到IP地址0或端口0）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ADDRESS_UNREACHABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法访问IP地址。这通常意味着没有到指定主机或网络的路由。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_CLIENT_AUTH_CERT_NEEDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器指定需要客户端提供SSL证书来校验身份。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TUNNEL_CONNECTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法建立通过代理的隧道连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NO_SSL_VERSIONS_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持SSL协议的任何版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_VERSION_OR_CIPHER_MISMATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端和服务器不支持通用的SSL协议版本或密码套件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_RENEGOTIATION_REQUESTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器请求重新协商（rehandshake）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PROXY_AUTH_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理请求身份验证（隧道连接使用不支持的方法）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BAD_SSL_CLIENT_AUTH_CERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-117"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL 客户端证书错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONNECTION_TIMED_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-118"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HOST_RESOLVER_QUEUE_TOO_LARGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挂起的DNS解析太多，因此队列中的请求被中止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKS_CONNECTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法为目标主机建立与 SOCKS 代理服务器的连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKS_CONNECTION_HOST_UNREACHABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "域名不可达。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ALPN_NEGOTIATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协商备用协议的请求失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_NO_RENEGOTIATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-123"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对方发送了SSL no_renegotiation警报消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_WINSOCK_UNEXPECTED_WRITTEN_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Winsock有时会报告写入的数据多于传递的数据。这可能是由于LSP损坏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_DECOMPRESSION_FAILURE_ALERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-125"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL对等端向本端发送了致命的解压失败警报。当对等方错误地认为它支持DEFLATE压缩时，通常会发生这种情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_BAD_RECORD_MAC_ALERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-126"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL对等端向本端发送了致命的bad_record_mac警报。一个对DELEGATE支持有问题的服务器可能发生这个情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PROXY_AUTH_REQUESTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-127"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理请求身份验证（用于隧道建立）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PROXY_CONNECTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-130"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法创建到代理服务器的连接。域名解析或连接套接字时出错。请注意，这不包括HTTP代理的实际“CONNECT”方法期间的故障。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_MANDATORY_PROXY_CONFIGURATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-131"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法使用强制代理配置。目前，这意味着无法获取、解析或执行强制的PAC脚本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PRECONNECT_MAX_SOCKET_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-133"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在预连接时，已经达到了套接字池的最大套接字限制。因此不需要尝试预连接更多的套接字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_CLIENT_AUTH_PRIVATE_KEY_ACCESS_DENIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-134"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SSL客户端证书私钥的权限被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_CLIENT_AUTH_CERT_NO_PRIVATE_KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-135"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL客户端证书没有私钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PROXY_CERTIFICATE_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-136"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS 代理提供的证书无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NAME_RESOLUTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-137"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "域名解析时出错（DNS）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NETWORK_ACCESS_DENIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-138"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络被禁用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TEMPORARILY_THROTTLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-139"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "因节流而取消了此请求以避免DDOS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTPS_PROXY_TUNNEL_RESPONSE_REDIRECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-140"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过HTTPS代理创建SSL隧道连接的请求收到302（响应正文可能包括请求失败原因的描述）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_CLIENT_AUTH_SIGNATURE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-141"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法使用客户端证书的私钥对SSL客户端身份验证握手的CertificateVerify数据进行签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_MSG_TOO_BIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-142"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息太大，无法传输。（例如，超过大小阈值的UDP消息）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_WS_PROTOCOL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-145"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Websocket协议错误。表示由于帧格式错误或其他协议冲突，正在终止连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ADDRESS_IN_USE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-147"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试绑定已在使用的地址时返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_HANDSHAKE_NOT_COMPLETED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-148"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于SSL握手尚未完成，操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_BAD_PEER_PUBLIC_KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-149"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL 公钥错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到的证书与内置域名指定的公钥不匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CLIENT_AUTH_CERT_TYPE_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器对客户端证书的请求不包含本机支持的任何类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_DECRYPT_ERROR_ALERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-153"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL对等端向本端发送了致命的decrypt_error警报。当对等方无法正确验证签名（在CertificateVerify或ServerKeyExchange中）或验证Finished消息时，通常会发生这种情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_WS_THROTTLE_QUEUE_TOO_LARGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-154"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "挂起的WebSocketJob实例太多，因此没有将新Job推送到队列中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_SERVER_CERT_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-156"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL服务器证书在重新协商中更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_UNRECOGNIZED_NAME_ALERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-159"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL服务器向本端发送了致命的未识别名称警报。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKET_SET_RECEIVE_BUFFER_SIZE_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未能按请求设置套接字的接收缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKET_SET_SEND_BUFFER_SIZE_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-161"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未能按请求设置套接字的发送缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKET_RECEIVE_BUFFER_SIZE_UNCHANGEABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-162"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尽管setsockopt返回了成功的代码，但未能按请求设置套接字的接收缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SOCKET_SEND_BUFFER_SIZE_UNCHANGEABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-163"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尽管setsockopt返回了成功的代码，但未能按请求设置套接字的发送缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_CLIENT_AUTH_CERT_BAD_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-164"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法将客户端证书从平台存储导入SSL库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ICANN_NAME_COLLISION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-166"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将主机名解析为包含IPv4地址“127.0.53.53”的IP地址列表。这是ICANN建议的一个特殊IP地址，用于表示存在名称冲突，并提醒管理员注意潜在问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_SERVER_CERT_BAD_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-167"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL服务器提供了一个无法解码的证书。这不是证书错误代码，因为没有X509Certificate对象可用。此错误是致命的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CT_STH_PARSING_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-168"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Transparency：解析signed tree head失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CT_STH_INCOMPLETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-169"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Transparency: 解析signed tree head成功，但是缺少了一些信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNABLE_TO_REUSE_CONNECTION_FOR_PROXY_AUTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-170"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在使用AuthController生成凭据之前，尝试重新使用连接发送代理身份验证凭据失败。调用方应使用新连接重新使用控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CT_CONSISTENCY_PROOF_PARSING_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-171"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Transparency: 一致性验证解析失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_OBSOLETE_CIPHER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-172"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL服务器需要一个不受支持的密码套件，该套件已被删除。此错误将在密码套件删除后立即在一个或两个版本的回退中临时发出信号，之后回退将被删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_WS_UPGRADE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-173"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当WebSocket握手成功完成并且连接已升级时，URLRequest将被取消，并返回此错误代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_READ_IF_READY_NOT_IMPLEMENTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-174"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "套接字ReadIfReady支持未实现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NO_BUFFER_SPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-176"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有可用的套接字缓冲区空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_CLIENT_AUTH_NO_COMMON_ALGORITHMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-177"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在本端的客户端证书私钥和服务器的首选项之间没有共同的签名算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_EARLY_DATA_REJECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-178"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 early data 被服务器拒绝。这将在从套接字返回任何数据之前接收。应在禁用early data的情况下重试请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_WRONG_VERSION_ON_EARLY_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-179"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3 early data 版本错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TLS13_DOWNGRADE_DETECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-180"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS 1.3已启用，但已协商更低的版本，服务器返回一个值，表示它支持TLS 1.3。这是TLS 1.3中安全检查的一部分，但也可能表明用户使用了一个有问题的TLS-terminating代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_KEY_USAGE_INCOMPATIBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-181"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器的证书具有与协商的TLS密钥交换方法不兼容的keyUsage扩展。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_ECH_CONFIG_LIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-182"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法解析通过DNS获取的ECHConfigList。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ECH_NOT_NEGOTIATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECH已启用，但服务器无法解密加密的ClientHello。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ECH_FALLBACK_CERTIFICATE_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-184"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECH已启用，服务器无法解密加密的ClientHello，并且没有提供对公用名称有效的证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_COMMON_NAME_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器响应时使用的证书的公用名称与主机名不匹配。这可能意味着：1.攻击者已将本端的流量重定向到他们的服务器，并提供了他们知道私钥的证书。2.服务器配置错误，使用错误的证书进行响应。3.用户在无线网络上，并被重定向到网络的登录页面。4.操作系统使用了DNS搜索后缀，服务器在地址栏中没有缩写名称的证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_DATE_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书已过期。这可能意味着：1.攻击者正在出示一个旧证书，他们已设法获得该证书的私钥。2.服务器配置错误，没有提供有效的证书。3.设备的时钟错了。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_AUTHORITY_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未信任的证书签发机构。这可能意味着：1.攻击者用真实证书代替了包含其公钥并由其表亲签名的证书。2.服务器操作员拥有来自本端不知道但应该信任的CA的合法证书。3.服务器提供了一个自签名证书，无法抵御主动攻击者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_CONTAINS_ERRORS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书中包含错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_NO_REVOCATION_MECHANISM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书无撤销机制，实际上，此证书不能被吊销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_UNABLE_TO_CHECK_REVOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-205"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此网站的安全证书的吊销信息不可用。这可能意味着：1.一个攻击者破坏了证书中的私钥，并阻止了本端发现证书已被吊销的尝试。2.证书未被吊销，但吊销服务器正忙或不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_REVOKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-206"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书已撤销。本端有能力忽略这个错误，但这可能不是本端应该做的事情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-207"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_WEAK_SIGNATURE_ALGORITHM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-208"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器以使用弱签名算法签名的证书作为响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_NON_UNIQUE_NAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书中指定的域名不是唯一的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_WEAK_KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-211"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器以包含弱密钥（例如，RSA密钥太小）的证书作为响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_NAME_CONSTRAINT_VIOLATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-212"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "违反证书名称约束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_VALIDITY_TOO_LONG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-213"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书有效期过长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERTIFICATE_TRANSPARENCY_REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-214"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此连接需要Certificate Transparency，但服务器未提供符合策略的CT信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_SYMANTEC_LEGACY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-215"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该证书链接到不再受信任的旧赛门铁克根目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_KNOWN_INTERCEPTION_BLOCKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-217"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已知该证书被设备所有者以外的实体用于拦截。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SSL_OBSOLETE_VERSION_OR_CIPHER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-218"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接使用过时版本的 SSL/TLS 或密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-219"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "紧跟在上一个证书错误代码之后的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DISALLOWED_URL_SCHEME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许使用的URL scheme。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNKNOWN_URL_SCHEME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知 scheme。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_REDIRECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-303"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "试图加载URL导致重定向到无效的URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TOO_MANY_REDIRECTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-310"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重定向过多。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNSAFE_REDIRECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-311"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不安全的重定向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNSAFE_PORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-312"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不安全的端口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_RESPONSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-320"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_CHUNKED_ENCODING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-321"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分块传输编码错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_METHOD_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-322"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNEXPECTED_PROXY_AUTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-323"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意外的代理身份验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_EMPTY_RESPONSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-324"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空返回错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_RESPONSE_HEADERS_TOO_BIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-325"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回体中 headers 太大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PAC_SCRIPT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-327"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pac 脚本错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_REQUEST_RANGE_NOT_SATISFIABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-328"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求范围不可满足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_MALFORMED_IDENTITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-329"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于身份验证的标识无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONTENT_DECODING_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-330"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应正文的内容解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NETWORK_IO_SUSPENDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-331"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作无法完成，因为所有网络IO都已挂起。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SYN_REPLY_NOT_RECEIVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-332"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在流上未接收到SYN_REPLY的情况下接收到的FLIP数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ENCODING_CONVERSION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-333"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将响应转换为目标编码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNRECOGNIZED_FTP_DIRECTORY_LISTING_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-334"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法识别的 ftp 目录列表格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NO_SUPPORTED_PROXIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-336"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有支持的代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_PROTOCOL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-337"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2协议错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_AUTH_CREDENTIALS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-338"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的身份验证凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNSUPPORTED_AUTH_SCHEME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-339"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的身份验证方案。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ENCODING_DETECTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-340"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码检测失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_MISSING_AUTH_CREDENTIALS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-341"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺少身份验证凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNEXPECTED_SECURITY_LIBRARY_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-342"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意外的安全库状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_MISCONFIGURED_AUTH_ENVIRONMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-343"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置错误的身份验证环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_UNDOCUMENTED_SECURITY_LIBRARY_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-344"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消文档安全库状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_RESPONSE_BODY_TOO_BIG_TO_DRAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-345"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体太大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_RESPONSE_HEADERS_MULTIPLE_CONTENT_LENGTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-346"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应 headers 多个内容长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INCOMPLETE_HTTP2_HEADERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-347"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不完整的 HTTP/2 headers。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PAC_NOT_IN_DHCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-348"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pac 不在 dhcp 中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_RESPONSE_HEADERS_MULTIPLE_CONTENT_DISPOSITION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-349"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应标头多重内容处置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_RESPONSE_HEADERS_MULTIPLE_LOCATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多个位置的响应标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_SERVER_REFUSED_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-351"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 服务器拒绝流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_PING_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-352"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2 ping 失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONTENT_LENGTH_MISMATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-354"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当连接关闭时，HTTP 响应主体传输的字节数少于 Content-Length 头中公布的字节数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INCOMPLETE_CHUNKED_ENCODING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-355"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP 响应体使用分块编码传输，但在连接关闭时从未发送终止零长度块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_QUIC_PROTOCOL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-356"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存在QUIC协议错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_RESPONSE_HEADERS_TRUNCATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-357"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP 头部信息被文件结束符（EOF）截断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_QUIC_HANDSHAKE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-358"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QUIC 加密握手失败。这意味着服务器无法读取发送的任何请求，因此它们可能会被重新发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_INADEQUATE_TRANSPORT_SECURITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-360"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输安全性不适合HTTP/2版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_FLOW_CONTROL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-361"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对等方违反了HTTP/2流控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_FRAME_SIZE_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-362"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对等方发送了大小不正确的HTTP/2帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_COMPRESSION_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-363"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩HTTP/2 头部信息的解码或编码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PROXY_AUTH_REQUESTED_WITH_NO_CONNECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-364"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的代理身份验证没有有效的客户端套接字句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP_1_1_REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-365"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在 HTTP/2 会话中收到 HTTP_1_1_REQUIRED 错误代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PROXY_HTTP_1_1_REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-366"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在通过 HTTP/2 会话代理时收到 HTTP_1_1_REQUIRED 错误代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PAC_SCRIPT_TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-367"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAC 脚本已终止并必须重新加载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_HTTP_RESPONSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-370"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器应返回 HTTP/1.x 响应，但未返回。而不是将其视为 HTTP/0.9，返回此错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CONTENT_DECODING_INIT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-371"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容解码初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_RST_STREAM_NO_ERROR_RECEIVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-372"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到带有 NO_ERROR 错误代码的 HTTP/2 RST_STREAM 帧。此错误应由 HTTP/2 代码内部处理，而不应超过 SpdyStream 层。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_PUSHED_STREAM_NOT_AVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-373"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求声明的推送流不再可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_CLAIMED_PUSHED_STREAM_RESET_BY_SERVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-374"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已声明推送的流，随后服务器将其重置。发生这种情况时，应该重试请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TOO_MANY_RETRIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-375"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于身份验证或证书无效，HTTP事务重试次数过多。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_STREAM_CLOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-376"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在已关闭的流上收到一个 HTTP/2 帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_CLIENT_REFUSED_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-377"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端拒绝了一个 HTTP/2 流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP2_PUSHED_RESPONSE_DOES_NOT_MATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-378"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于匹配的 URL 和请求头，一个 HTTP/2 推送的流被请求所接收，但是推送的响应头并不匹配请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_HTTP_RESPONSE_CODE_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-379"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器返回了non-2xx的HTTP响应代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_QUIC_UNKNOWN_CERT_ROOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-380"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在 QUIC 连接上展示的证书未链接到已知根证书，并且连接到的原始服务器不在允许未知根证书的域名列表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_QUIC_GOAWAY_REQUEST_CAN_BE_RETRIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-381"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已接收到一个 GOAWAY 帧，表明请求未得到处理，因此可以安全地在不同的连接上重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TOO_MANY_ACCEPT_CH_RESTARTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-382"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCEPT_CH 重启已被触发太多次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INCONSISTENT_IP_ADDRESS_SPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-383"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在相同的请求期间，远程端点的 IP 地址空间与先前观察到的值不同。任何受影响的请求的缓存条目都应被标记为无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHED_IP_ADDRESS_SPACE_BLOCKED_BY_LOCAL_NETWORK_ACCESS_POLICY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存的远程端点的 IP 地址空间被本地网络访问检查所阻止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_MISS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存中没有请求的条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_READ_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法从磁盘缓存中读取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_WRITE_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-402"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法写入磁盘缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_OPERATION_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此条目不支持此操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_OPEN_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘缓存无法打开此条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_CREATE_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘缓存无法创建此条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_RACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-406"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多个事务正在竞相创建磁盘缓存条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_CHECKSUM_READ_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-407"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存无法读取条目上的校验和记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_CHECKSUM_MISMATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-408"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存发现一个具有无效校验和的条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_LOCK_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-409"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP缓存的内部错误代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_AUTH_FAILURE_AFTER_READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-410"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在事务读取某些数据后收到质询，但凭据不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_ENTRY_NOT_SUITABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-411"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP缓存的内部不完全错误代码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_DOOM_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-412"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘缓存无法删除此条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CACHE_OPEN_OR_CREATE_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-413"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘缓存无法打开或创建此条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INSECURE_RESPONSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器的响应不安全（例如，存在证书错误）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_NO_PRIVATE_KEY_FOR_CERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试导入客户端证书失败，因为用户的密钥数据库缺少相应的私钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_ADD_USER_CERT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向操作系统证书数据库添加证书时发生错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_SIGNED_EXCHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理已签名的交换时发生错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_WEB_BUNDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-505"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理Web Bundle源时发生错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TRUST_TOKEN_OPERATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-506"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行Trust Tokens协议操作的请求失败（原因包括：预置条件失败、内部错误、不良响应）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_TRUST_TOKEN_OPERATION_SUCCESS_WITHOUT_SENDING_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-507"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在处理一个与Trust Tokens协议相关的操作执行请求时，系统能够执行该请求中的Trust Tokens操作，但并没有将请求发送到其指定的目的地。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FTP控制连接命令失败的通用错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_SERVICE_UNAVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-602"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器目前无法满足请求。这是一个临时错误。FTP响应代码421。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_TRANSFER_ABORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-603"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器已中止传输。FTP响应代码426。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_FILE_BUSY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-604"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件正在使用中，或在打开文件时发生了一些其他临时错误条件。FTP响应代码450。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_SYNTAX_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-605"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于语法错误，服务器拒绝了本端的命令。FTP响应代码500、501。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_COMMAND_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-606"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器不支持本端发出的命令。FTP响应代码502、504。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_FTP_BAD_COMMAND_SEQUENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-607"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器拒绝了本端的命令，因为本端没有按照正确的顺序发出命令。FTP响应代码503。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PKCS12_IMPORT_BAD_PASSWORD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-701"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于密码不正确，PKCS #12 导入失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PKCS12_IMPORT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-702"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于其他错误，PKCS #12 导入失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_IMPORT_CA_CERT_NOT_CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-703"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA导入失败-不是CA证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_IMPORT_CERT_ALREADY_EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-704"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入失败-数据库中已存在证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_IMPORT_CA_CERT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-705"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于其他错误，CA导入失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_IMPORT_SERVER_CERT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-706"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于某些内部错误，服务器证书导入失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PKCS12_IMPORT_INVALID_MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-707"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS #12 导入失败，因为 MAC（消息认证码）无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PKCS12_IMPORT_INVALID_FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-708"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKCS #12 导入失败，因为文件无效或已损坏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PKCS12_IMPORT_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-709"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于不支持的特性，PKCS #12 导入失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_KEY_GENERATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-710"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥生成失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PRIVATE_KEY_EXPORT_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-712"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法导出私钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_SELF_SIGNED_CERT_GENERATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自签名证书生成失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_DATABASE_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-714"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书数据库已发生某种更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_CERT_VERIFIER_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-716"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证配置已发生某种更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_MALFORMED_RESPONSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS解析程序收到格式错误的响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_SERVER_REQUIRES_TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS服务器需要TCP。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_SERVER_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-802"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS服务器失败。对于以下所有错误情况，都会返回此错误。1-格式错误-名称服务器无法解释查询。2-服务器故障-名称服务器由于自身问题无法处理这个查询。3-未实现-名称服务器不支持请求的查询类型。4-拒绝-名称服务器出于策略原因拒绝执行指定的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_TIMED_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-803"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS事务超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_CACHE_MISS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-804"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于只查询本地源的查找，在缓存或其他本地源中未找到该条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_SEARCH_EMPTY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-805"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后缀搜索列表规则阻止了给定主机名的解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_SORT_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-806"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未能根据RFC3484对地址进行排序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_SECURE_RESOLVER_HOSTNAME_RESOLUTION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-808"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未能解析DNS-over-HTTPS服务器的主机名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_NAME_HTTPS_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-809"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS已识别请求因不安全的连接（http/ws）而被禁止。应用程序应该像处理HTTP重定向一样处理这个错误，将连接重定向到安全的https或wss。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_REQUEST_CANCELED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-810"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与此任务相关的所有 DNS 请求已被取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DNS_NO_MATCHING_SUPPORTED_ALPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-811"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS记录的主机名解析预期未能使用受支持协议的ALPN值进行解析。"
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
163241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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