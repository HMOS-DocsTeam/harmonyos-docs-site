"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["40617"], {
215466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_error_code_remote_communication_error_code_md_8b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-error-code-remote-communication-error-code-md-8b1.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_error_code_remote_communication_error_code_md_8b1_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code","title":"API错误码","description":"- 以下仅介绍本模块特有错误码，通用错误码请参考通用错误码。","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-error-code","slug":"/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"API错误码","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code","kit":"系统","last_updated":"2026-04-22","slug":"remote-communication-error-code"},"sidebar":"ref","previous":{"title":"Rcp_OnStatusCodeReceiveCallback","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_status_code_callback/x_rcp___on_status_code_callback"},"next":{"title":"CollaborationCamera (跨设备互通组件)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationcamera/servicecollaboration-collaborationcamera"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code.md


const frontMatter = {
	title: 'API错误码',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-error-code',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'remote-communication-error-code'
};
const contentTitle = 'API错误码';

const assets = {

};



const toc = [{
  "value": "1007900001 不支持的协议",
  "id": "1007900001-不支持的协议",
  "level": 2
}, {
  "value": "1007900002 初始化失败",
  "id": "1007900002-初始化失败",
  "level": 2
}, {
  "value": "1007900003 URL格式错误",
  "id": "1007900003-url格式错误",
  "level": 2
}, {
  "value": "1007900005 代理服务器域名解析失败",
  "id": "1007900005-代理服务器域名解析失败",
  "level": 2
}, {
  "value": "1007900006 域名解析失败",
  "id": "1007900006-域名解析失败",
  "level": 2
}, {
  "value": "1007900007 无法连接到服务器",
  "id": "1007900007-无法连接到服务器",
  "level": 2
}, {
  "value": "1007900008 服务器返回非法数据",
  "id": "1007900008-服务器返回非法数据",
  "level": 2
}, {
  "value": "1007900009 拒绝对远程资源的访问",
  "id": "1007900009-拒绝对远程资源的访问",
  "level": 2
}, {
  "value": "1007900016 HTTP2帧层错误",
  "id": "1007900016-http2帧层错误",
  "level": 2
}, {
  "value": "1007900018 服务器返回数据不完整",
  "id": "1007900018-服务器返回数据不完整",
  "level": 2
}, {
  "value": "1007900023 写入接收到的数据到磁盘/应用程序失败",
  "id": "1007900023-写入接收到的数据到磁盘应用程序失败",
  "level": 2
}, {
  "value": "1007900025 上传失败",
  "id": "1007900025-上传失败",
  "level": 2
}, {
  "value": "1007900026 从文件/应用程序中打开/读取本地数据失败",
  "id": "1007900026-从文件应用程序中打开读取本地数据失败",
  "level": 2
}, {
  "value": "1007900027 内存不足",
  "id": "1007900027-内存不足",
  "level": 2
}, {
  "value": "1007900028 操作超时",
  "id": "1007900028-操作超时",
  "level": 2
}, {
  "value": "1007900035 SSL连接错误",
  "id": "1007900035-ssl连接错误",
  "level": 2
}, {
  "value": "1007900037 无法读取文件",
  "id": "1007900037-无法读取文件",
  "level": 2
}, {
  "value": "1007900042 操作被应用程序回调中止",
  "id": "1007900042-操作被应用程序回调中止",
  "level": 2
}, {
  "value": "1007900045 本地连接端绑定失败",
  "id": "1007900045-本地连接端绑定失败",
  "level": 2
}, {
  "value": "1007900047 重定向次数达到最大值",
  "id": "1007900047-重定向次数达到最大值",
  "level": 2
}, {
  "value": "1007900049 提供了格式不正确的选项",
  "id": "1007900049-提供了格式不正确的选项",
  "level": 2
}, {
  "value": "1007900052 服务器没有返回内容",
  "id": "1007900052-服务器没有返回内容",
  "level": 2
}, {
  "value": "1007900055 发送网络数据失败",
  "id": "1007900055-发送网络数据失败",
  "level": 2
}, {
  "value": "1007900056 接收网络数据失败",
  "id": "1007900056-接收网络数据失败",
  "level": 2
}, {
  "value": "1007900058 本地SSL证书错误",
  "id": "1007900058-本地ssl证书错误",
  "level": 2
}, {
  "value": "1007900059 无法使用指定的密码",
  "id": "1007900059-无法使用指定的密码",
  "level": 2
}, {
  "value": "1007900060 远程服务器SSL证书或SSH秘钥不正确",
  "id": "1007900060-远程服务器ssl证书或ssh秘钥不正确",
  "level": 2
}, {
  "value": "1007900061 无法识别或错误的HTTP编码格式",
  "id": "1007900061-无法识别或错误的http编码格式",
  "level": 2
}, {
  "value": "1007900063 超出最大文件大小",
  "id": "1007900063-超出最大文件大小",
  "level": 2
}, {
  "value": "1007900065 发送失败，因为数据流回退操作失败",
  "id": "1007900065-发送失败因为数据流回退操作失败",
  "level": 2
}, {
  "value": "1007900070 服务器磁盘空间不足",
  "id": "1007900070-服务器磁盘空间不足",
  "level": 2
}, {
  "value": "1007900073 服务器返回文件已存在",
  "id": "1007900073-服务器返回文件已存在",
  "level": 2
}, {
  "value": "1007900077 SSL CA证书不存在或没有访问权限",
  "id": "1007900077-ssl-ca证书不存在或没有访问权限",
  "level": 2
}, {
  "value": "1007900078 URL请求的文件不存在",
  "id": "1007900078-url请求的文件不存在",
  "level": 2
}, {
  "value": "1007900089 已达到最大连接数限制",
  "id": "1007900089-已达到最大连接数限制",
  "level": 2
}, {
  "value": "1007900090 SSL公钥与固定的公钥不匹配",
  "id": "1007900090-ssl公钥与固定的公钥不匹配",
  "level": 2
}, {
  "value": "1007900092 HTTP/2 框架层中的流错误",
  "id": "1007900092-http2-框架层中的流错误",
  "level": 2
}, {
  "value": "1007900094 身份校验失败",
  "id": "1007900094-身份校验失败",
  "level": 2
}, {
  "value": "1007900095 HTTP/3错误",
  "id": "1007900095-http3错误",
  "level": 2
}, {
  "value": "1007900097 代理握手错误",
  "id": "1007900097-代理握手错误",
  "level": 2
}, {
  "value": "1007900100 数据长度超过允许的范围",
  "id": "1007900100-数据长度超过允许的范围",
  "level": 2
}, {
  "value": "1007900999 内部错误",
  "id": "1007900999-内部错误",
  "level": 2
}, {
  "value": "1007900998 所请求的方法不被支持",
  "id": "1007900998-所请求的方法不被支持",
  "level": 2
}, {
  "value": "1007900997 无效的内容类型",
  "id": "1007900997-无效的内容类型",
  "level": 2
}, {
  "value": "1007900996 代理类型不支持",
  "id": "1007900996-代理类型不支持",
  "level": 2
}, {
  "value": "1007900995 获取系统代理失败",
  "id": "1007900995-获取系统代理失败",
  "level": 2
}, {
  "value": "1007900994 会话数达到限制",
  "id": "1007900994-会话数达到限制",
  "level": 2
}, {
  "value": "1007900993 会话已关闭",
  "id": "1007900993-会话已关闭",
  "level": 2
}, {
  "value": "1007900992 请求已被取消",
  "id": "1007900992-请求已被取消",
  "level": 2
}, {
  "value": "1007900991 服务器返回的响应内容不符合预期的格式或规范",
  "id": "1007900991-服务器返回的响应内容不符合预期的格式或规范",
  "level": 2
}, {
  "value": "1007900990 内存不足",
  "id": "1007900990-内存不足",
  "level": 2
}, {
  "value": "1007900988 文件打开错误",
  "id": "1007900988-文件打开错误",
  "level": 2
}, {
  "value": "1007900987 创建目录时发生错误",
  "id": "1007900987-创建目录时发生错误",
  "level": 2
}, {
  "value": "1007900986 建立蜂窝链接超时",
  "id": "1007900986-建立蜂窝链接超时",
  "level": 2
}, {
  "value": "1007900985 文件系统IO错误。",
  "id": "1007900985-文件系统io错误",
  "level": 2
}, {
  "value": "1007900401 接口参数错误",
  "id": "1007900401-接口参数错误",
  "level": 2
}, {
  "value": "1007900201 禁止明文传输",
  "id": "1007900201-禁止明文传输",
  "level": 2
}, {
  "value": "201 权限被拒绝",
  "id": "201-权限被拒绝",
  "level": 2
}, {
  "value": "401 参数错误",
  "id": "401-参数错误",
  "level": 2
}, {
  "value": "1007910001 请求数据传输错误",
  "id": "1007910001-请求数据传输错误",
  "level": 2
}, {
  "value": "1007910002 请求超时",
  "id": "1007910002-请求超时",
  "level": 2
}, {
  "value": "1007910003 请求被取消",
  "id": "1007910003-请求被取消",
  "level": 2
}, {
  "value": "1007910004 连接断开",
  "id": "1007910004-连接断开",
  "level": 2
}, {
  "value": "1007910005 请求数量达到上限",
  "id": "1007910005-请求数量达到上限",
  "level": 2
}, {
  "value": "1007910006 请求大小达到上限",
  "id": "1007910006-请求大小达到上限",
  "level": 2
}, {
  "value": "1007910008 恢复发送失败",
  "id": "1007910008-恢复发送失败",
  "level": 2
}, {
  "value": "1007910099 取消时Stub查询失败",
  "id": "1007910099-取消时stub查询失败",
  "level": 2
}, {
  "value": "10079100997 数据反序列化失败",
  "id": "10079100997-数据反序列化失败",
  "level": 2
}, {
  "value": "10079100998 远程调用方法错误",
  "id": "10079100998-远程调用方法错误",
  "level": 2
}, {
  "value": "10079100999 URPC Stub查询失败",
  "id": "10079100999-urpc-stub查询失败",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "api错误码",
        children: "API错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(276157)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下仅介绍本模块特有错误码，通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/errorcode-universal/errorcode-universal",
          children: "通用错误码"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remote Communication Kit错误码映射关系：1007900000 + curl错误码。Remote Communication Kit常见错误码如下， 更多错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://curl.se/libcurl/c/libcurl-errors.html",
          children: "curl错误码"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900001-不支持的协议",
      children: "1007900001 不支持的协议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsupported protocol."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "协议版本服务器不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的协议版本，服务器不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查传入的协议版本是否合理，排查服务器实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900002-初始化失败",
      children: "1007900002 初始化失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能是因为内存分配失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放清理内存，确保有充足的可用内存空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900003-url格式错误",
      children: "1007900003 URL格式错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL using bad/illegal format or missing URL."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL格式错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能传入的url格式不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查传入的url格式是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900005-代理服务器域名解析失败",
      children: "1007900005 代理服务器域名解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Couldn't resolve proxy name."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理服务器的域名无法解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器的URL不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查代理服务器的URL是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900006-域名解析失败",
      children: "1007900006 域名解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Couldn't resolve host name."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器的域名无法解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的服务器的URL不正确。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络不通畅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请检查输入的服务器的URL是否合理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请检查网络连接情况。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900007-无法连接到服务器",
      children: "1007900007 无法连接到服务器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Couldn't connect to server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器无法连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络断开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查网络连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900008-服务器返回非法数据",
      children: "1007900008 服务器返回非法数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Weird server reply."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器返回非法数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器出错，返回了非HTTP格式的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900009-拒绝对远程资源的访问",
      children: "1007900009 拒绝对远程资源的访问"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access denied to remote resource."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拒绝对远程资源的访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的内容被服务器拒绝访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查请求内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900016-http2帧层错误",
      children: "1007900016 HTTP2帧层错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error in the HTTP2 framing layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP2层级的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器不支持HTTP2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抓包分析、排查服务器是否支持HTTP2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900018-服务器返回数据不完整",
      children: "1007900018 服务器返回数据不完整"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transferred a partial file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器返回的数据不完整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能与服务器实现有关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900023-写入接收到的数据到磁盘应用程序失败",
      children: "1007900023 写入接收到的数据到磁盘/应用程序失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed writing received data to disk/application."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写入接收到的数据到磁盘/应用程序失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载数据量超过最大值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当请求数据量超大时推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#ondatareceive",
        children: "OnDataReceive"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900025-上传失败",
      children: "1007900025 上传失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upload failed (at start/before it took off)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上传失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件过大或者网络问题。对于FTP，服务器通常会拒绝STOR命令。错误缓冲区通常包含服务器的解释。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查文件大小及网络状况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900026-从文件应用程序中打开读取本地数据失败",
      children: "1007900026 从文件/应用程序中打开/读取本地数据失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to open/read local data from file/application."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从文件/应用程序中打开/读取本地数据失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用没有读文件权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查应用权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900027-内存不足",
      children: "1007900027 内存不足"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Out of memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查系统内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900028-操作超时",
      children: "1007900028 操作超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Timeout was reached."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP连接超时或读写超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查网络问题。如果连续多次遇到1007900028错误码，建议把Session关闭后，重新创建Session。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900035-ssl连接错误",
      children: "1007900035 SSL连接错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL connect error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL连接错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TLS版本或TLS加密套件配置不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查TLS版本或TLS加密套件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900037-无法读取文件",
      children: "1007900037 无法读取文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Couldn't read a file:// file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法读取文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、文件路径错误或文件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、文件权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、路径格式不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、检查对应路径文件是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、应用程序是否有对此路径文件的操作权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、使用的文件路径格式是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900042-操作被应用程序回调中止",
      children: "1007900042 操作被应用程序回调中止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operation was aborted by an application callback."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作被应用程序回调中止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数中存在异常逻辑处理，如：死循环、异常中断、耗时较长的同步操作等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查所有回调函数，确保没有冗余的处理逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900045-本地连接端绑定失败",
      children: "1007900045 本地连接端绑定失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed binding local connection end."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地连接端绑定失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的网络接口、IP不存在或不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查网络接口、IP是否存在或是否被占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900047-重定向次数达到最大值",
      children: "1007900047 重定向次数达到最大值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Number of redirects hit maximum amount."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重定向次数达到最大值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重定向次数过多。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900049-提供了格式不正确的选项",
      children: "1007900049 提供了格式不正确的选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Malformed option provided in a setopt."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了格式不正确的选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可能是因为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#staticdnsrule",
        children: "StaticDnsRule"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#dynamicdnsrule",
        children: "DynamicDnsRule"
      }), "传入的IP地址格式不正确。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["确认", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#staticdnsrule",
        children: "StaticDnsRule"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#dynamicdnsrule",
        children: "DynamicDnsRule"
      }), "传入参数格式是否正确可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900052-服务器没有返回内容",
      children: "1007900052 服务器没有返回内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Server returned nothing (no headers, no data)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器没有返回内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与服务器实现有关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900055-发送网络数据失败",
      children: "1007900055 发送网络数据失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed sending data to the peer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法向对端发送数据，发送网络数据失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查网络。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900056-接收网络数据失败",
      children: "1007900056 接收网络数据失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failure when receiving data from the peer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法从对端收到数据，接收网络数据失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查网络问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900058-本地ssl证书错误",
      children: "1007900058 本地SSL证书错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problem with the local SSL certificate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地SSL证书错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL证书格式有错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查SSL证书格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900059-无法使用指定的密码",
      children: "1007900059 无法使用指定的密码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Couldn't use specified SSL cipher."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法使用指定的密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "client和sever协商的加密算法系统不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抓包分析协商的算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900060-远程服务器ssl证书或ssh秘钥不正确",
      children: "1007900060 远程服务器SSL证书或SSH秘钥不正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL peer certificate or SSH remote key was not OK."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远程服务器SSL证书或SSH秘钥错误或者无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法校验服务器身份，有可能是证书过期了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查证书有效性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900061-无法识别或错误的http编码格式",
      children: "1007900061 无法识别或错误的HTTP编码格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unrecognized or bad HTTP Content or Transfer-Encoding."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法识别或错误的HTTP编码格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP编码格式不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器实现，目前仅支持gzip编码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900063-超出最大文件大小",
      children: "1007900063 超出最大文件大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maximum file size exceeded."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超出最大文件大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "content-length的值与文件的实际大小不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900065-发送失败因为数据流回退操作失败",
      children: "1007900065 发送失败，因为数据流回退操作失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Send failed since rewinding of the data stream failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送失败，因为数据流回退操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络异常导致的数据重传。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查网络状态是否正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900070-服务器磁盘空间不足",
      children: "1007900070 服务器磁盘空间不足"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disk full or allocation exceeded."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器磁盘空间不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器磁盘已满。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查服务器磁盘空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900073-服务器返回文件已存在",
      children: "1007900073 服务器返回文件已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remote file already exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器返回文件已存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上传文件的时候，服务器返回文件已经存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查服务器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900077-ssl-ca证书不存在或没有访问权限",
      children: "1007900077 SSL CA证书不存在或没有访问权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problem with the SSL CA cert (path? access rights?)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL CA证书不存在或没有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书不存在或者没有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查证书是否存在或者有没有访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900078-url请求的文件不存在",
      children: "1007900078 URL请求的文件不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remote file not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL请求的文件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL请求的文件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查URL请求的文件是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900089-已达到最大连接数限制",
      children: "1007900089 已达到最大连接数限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The max connection limit is reached."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已达到最大连接数限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "session连接数量已达到最大值，当前没有可用的连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制同时发起的请求并发数量，请求完成后及时关闭使用的连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900090-ssl公钥与固定的公钥不匹配",
      children: "1007900090 SSL公钥与固定的公钥不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL public key does not match pinned public key."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL公钥与固定的公钥不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、服务器证书被更换后与客户端证书不再匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、客户端公钥格式错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、确保公钥格式正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、确保客户端与服务端使用的公钥一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900092-http2-框架层中的流错误",
      children: "1007900092 HTTP/2 框架层中的流错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stream error in the HTTP/2 framing layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP/2 框架层中的流错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、HTTP/2 流被服务器主动关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、代理服务器或防火墙错误的拦截或修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、检查服务器关闭HTTP/2流的原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、检查代理或防火墙的拦截规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900094-身份校验失败",
      children: "1007900094 身份校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An authentication function returned an error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "身份校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的校验身份的字段与服务器不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查传入的校验身份的字段是否与服务器匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900095-http3错误",
      children: "1007900095 HTTP/3错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP/3 error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP/3错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器或网络不支持HTTP/3协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、使用更低版本的HTTP协议发起请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、要求服务端升级HTTP协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900097-代理握手错误",
      children: "1007900097 代理握手错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "proxy handshake error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理握手错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、代理服务器地址或端口配置错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、代理认证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、代理服务器拒绝连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、检查代理服务器配置是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、确保代理可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、检查代理服务器日志，确认错误原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900100-数据长度超过允许的范围",
      children: "1007900100 数据长度超过允许的范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A value or data field grew larger than allowed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据长度超过允许的范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的数据或上传的内容过大，超出了客户端或服务器的限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、使用流式数据传输接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、检查上传或下载的数据是否在服务端允许的范围内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900999-内部错误",
      children: "1007900999 内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Internal Error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常意味着在系统中发生了一些未知的错误，导致无法完成请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果遇到此错误，请尝试重新启动应用程序或联系技术支持以获取帮助。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900998-所请求的方法不被支持",
      children: "1007900998 所请求的方法不被支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Method not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法不被支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用一个不被支持的API 方法或协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查代码或应用程序，确保使用的方法和协议是正确的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900997-无效的内容类型",
      children: "1007900997 无效的内容类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid content type."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容类型无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用不受支持的数据格式或内容类型进行请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保请求的是正确的内容类型，并使用支持的数据格式进行请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900996-代理类型不支持",
      children: "1007900996 代理类型不支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proxy type not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理类型不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用不受支持的代理类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "换一种代理类型或者禁用代理，然后重新连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900995-获取系统代理失败",
      children: "1007900995 获取系统代理失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get system proxy failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取到的系统代理失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "没有正确配置代理设置或代理设置不正确导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查网络设置，确保代理设置正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900994-会话数达到限制",
      children: "1007900994 会话数达到限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sessions number reached limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话数达到限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "session创建数量过多导致，自5.1.0(18)版本开始最多可创建1024个session实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减少创建的session数量，不超过1024个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900993-会话已关闭",
      children: "1007900993 会话已关闭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Session is closed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话已关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在尝试使用已经关闭的会话或会话已过期的情况下执行某些操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用程序中重新打开会话或创建新的会话，以便继续执行所需的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900992-请求已被取消",
      children: "1007900992 请求已被取消"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Request is canceled."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该请求已被取消。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于请求超时，网络连接中断等原因导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试重新发起请求，并确保网络连接稳定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900991-服务器返回的响应内容不符合预期的格式或规范",
      children: "1007900991 服务器返回的响应内容不符合预期的格式或规范"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The response is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器返回的响应内容不符合预期的格式或规范，导致客户端无法正确解析或处理该响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端请求的参数或格式不符合服务器的预期，导致服务器返回错误的响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证客户端发送的请求是否正确，确保所有必要的参数都已正确设置，并且请求的格式符合服务器的要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900990-内存不足",
      children: "1007900990 内存不足"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Out of memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统无法分配出内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统内存不足、应用占用过多内存、应用存在内存泄漏等原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查应用或系统的内存占用情况，也可尝试重启应用或系统。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900988-文件打开错误",
      children: "1007900988 文件打开错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cannot open file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件打开错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前应用没有对此路径文件进行读写的权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查应用是否有对此路径文件进行读写的权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900987-创建目录时发生错误",
      children: "1007900987 创建目录时发生错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cannot create directory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建目录时发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前应用没有对此路径进行创建目录的权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查应用是否有对此路径进行创建目录的权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900986-建立蜂窝链接超时",
      children: "1007900986 建立蜂窝链接超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cannot establish cellular link."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#pathpreference",
        children: "PathPreference"
      }), "的'cellular'模式拉起蜂窝数据连接时，因为条件不满足而导致激活蜂窝超时。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户开启飞行模式或SIM卡去激活等无法激活蜂窝数据场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查网络情况，确保满足蜂窝激活条件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900985-文件系统io错误",
      children: "1007900985 文件系统IO错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File system IO error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件创建、访问或者删除失败场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否具备文件路径访问权限、文件路径是否合法等原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900401-接口参数错误",
      children: "1007900401 接口参数错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameter error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数非法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入参数据不符合接口规范要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查入参数据，确保符合业务逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007900201-禁止明文传输",
      children: "1007900201 禁止明文传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plaintext transmission is forbidden."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止明文传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止了 Remote Communication Kit 的 HTTP 明文传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查 network_config.json 中关于HTTP明文传输的相关配置是否符合业务需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "201-权限被拒绝",
      children: "201 权限被拒绝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Permission denied."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用权限不足或格式错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的权限配置不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查用户的权限配置是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "401-参数错误",
      children: "401 参数错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameter error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数入参非法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的参数非法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查传入的参数是否合理，排查服务实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910001-请求数据传输错误",
      children: "1007910001 请求数据传输错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Urpc some error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URPC数据传输过程发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参见URPC的日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查URPC日志确认具体错误原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910002-请求超时",
      children: "1007910002 请求超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Timeout was reached."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["URPC请求超出开发者配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-urpcapi/remote-communication-urpcapi#urpcconnectconfiguration",
        children: "UrpcConnectConfiguration"
      }), "时长。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求侧请求发送失败，底层发送队列阻塞。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "服务侧发生异常，未正常回复response。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原因1重试请求发送。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原因2重启服务端。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910003-请求被取消",
      children: "1007910003 请求被取消"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Request is cancel."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URPC请求被取消。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某次发送的URPC请求因调用的资源被清理而被取消。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查业务流程是否存在请求未发送完毕就清理资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910004-连接断开",
      children: "1007910004 连接断开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Urpc disconnect."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URPC连接断开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络原因导致网络断开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查网络情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910005-请求数量达到上限",
      children: "1007910005 请求数量达到上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limit of request number."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URPC请求数目达到服务端请求处理上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者发送大量请求且未对其相应进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查请求侧实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910006-请求大小达到上限",
      children: "1007910006 请求大小达到上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limit of request size."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URPC请求大小达到系统内存上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者发送的请求大小超出上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查请求侧实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910008-恢复发送失败",
      children: "1007910008 恢复发送失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resume transmit error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断点续传的请求，恢复发送失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发断点续传时，发送链路异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查请求侧日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1007910099-取消时stub查询失败",
      children: "1007910099 取消时Stub查询失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Urpc stub not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调用cancel方法时，未查询到Stub。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stub提前触发销毁了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["排查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-urpcapi/remote-communication-urpcapi#urpcstub",
        children: "UrpcStub"
      }), "类的声明和使用是否正确。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10079100997-数据反序列化失败",
      children: "10079100997 数据反序列化失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deserialize failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据反序列化失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据内容错误，与预期的序列化后的数据不符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志，排查服务侧数据发送状况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10079100998-远程调用方法错误",
      children: "10079100998 远程调用方法错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Function name error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求侧的方法名指定错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求侧的方法名指定错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "排查请求侧方法名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10079100999-urpc-stub查询失败",
      children: "10079100999 URPC Stub查询失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Urpc stub not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未正确使用Urpcstub。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stub使用错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["排查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-urpcapi/remote-communication-urpcapi#urpcstub",
        children: "UrpcStub"
      }), "类的声明和使用是否正确。"]
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
276157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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