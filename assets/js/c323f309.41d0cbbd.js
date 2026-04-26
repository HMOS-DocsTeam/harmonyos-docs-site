"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["828425"], {
515748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_basic_services_api_basic_services_arkts_errcode_errorcode_account_errorcode_account_md_c32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-basic-services-api-basic-services-arkts-errcode-errorcode-account-errorcode-account-md-c32.json
var site_docs_ref_system_basicfun_api_basic_services_api_basic_services_arkts_errcode_errorcode_account_errorcode_account_md_c32_namespaceObject = JSON.parse('{"id":"system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account","title":"账号管理错误码","description":"以下仅介绍本模块特有错误码，通用错误码请参考通用错误码说明文档。","source":"@site/docs-ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account.md","sourceDirName":"system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account","slug":"/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"账号管理错误码","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-account","kit":"系统","last_updated":"2026-04-22","slug":"errorcode-account"},"sidebar":"ref","previous":{"title":"系统电源管理错误码","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-power/errorcode-power"},"next":{"title":"打印服务错误码","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-print/errorcode-print"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account.md


const frontMatter = {
	title: '账号管理错误码',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-account',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'errorcode-account'
};
const contentTitle = '账号管理错误码';

const assets = {

};



const toc = [{
  "value": "12300001 系统服务异常",
  "id": "12300001-系统服务异常",
  "level": 2
}, {
  "value": "12300002 无效参数",
  "id": "12300002-无效参数",
  "level": 2
}, {
  "value": "12300003 账号不存在",
  "id": "12300003-账号不存在",
  "level": 2
}, {
  "value": "12300004 账号已存在",
  "id": "12300004-账号已存在",
  "level": 2
}, {
  "value": "12300005 不支持多用户",
  "id": "12300005-不支持多用户",
  "level": 2
}, {
  "value": "12300006 不支持的账号类型",
  "id": "12300006-不支持的账号类型",
  "level": 2
}, {
  "value": "12300007 账号数量已达上限",
  "id": "12300007-账号数量已达上限",
  "level": 2
}, {
  "value": "12300008 受限的账号",
  "id": "12300008-受限的账号",
  "level": 2
}, {
  "value": "12300009 账号已激活",
  "id": "12300009-账号已激活",
  "level": 2
}, {
  "value": "12300010 账号服务忙碌",
  "id": "12300010-账号服务忙碌",
  "level": 2
}, {
  "value": "12300011 事件监听器已注册",
  "id": "12300011-事件监听器已注册",
  "level": 2
}, {
  "value": "12300012 事件监听器未注册",
  "id": "12300012-事件监听器未注册",
  "level": 2
}, {
  "value": "12300013 网络异常",
  "id": "12300013-网络异常",
  "level": 2
}, {
  "value": "12300014 域账号未认证",
  "id": "12300014-域账号未认证",
  "level": 2
}, {
  "value": "12300015 短名称已存在",
  "id": "12300015-短名称已存在",
  "level": 2
}, {
  "value": "12300016 账号登录数已达上限",
  "id": "12300016-账号登录数已达上限",
  "level": 2
}, {
  "value": "12300101 凭据不正确",
  "id": "12300101-凭据不正确",
  "level": 2
}, {
  "value": "12300102 凭据不存在",
  "id": "12300102-凭据不存在",
  "level": 2
}, {
  "value": "12300103 凭据输入器已注册",
  "id": "12300103-凭据输入器已注册",
  "level": 2
}, {
  "value": "12300104 凭据输入器不存在",
  "id": "12300104-凭据输入器不存在",
  "level": 2
}, {
  "value": "12300105 可信等级不支持",
  "id": "12300105-可信等级不支持",
  "level": 2
}, {
  "value": "12300106 认证类型不支持",
  "id": "12300106-认证类型不支持",
  "level": 2
}, {
  "value": "12300107 认证类型不存在",
  "id": "12300107-认证类型不存在",
  "level": 2
}, {
  "value": "12300108 认证会话不存在",
  "id": "12300108-认证会话不存在",
  "level": 2
}, {
  "value": "12300109 认证、凭据录入、更新等操作被取消",
  "id": "12300109-认证凭据录入更新等操作被取消",
  "level": 2
}, {
  "value": "12300110 认证被锁定",
  "id": "12300110-认证被锁定",
  "level": 2
}, {
  "value": "12300111 认证超时",
  "id": "12300111-认证超时",
  "level": 2
}, {
  "value": "12300112 认证服务忙",
  "id": "12300112-认证服务忙",
  "level": 2
}, {
  "value": "12300113 认证服务不存在",
  "id": "12300113-认证服务不存在",
  "level": 2
}, {
  "value": "12300114 认证服务异常",
  "id": "12300114-认证服务异常",
  "level": 2
}, {
  "value": "12300115 用户认证密码个数达到上限",
  "id": "12300115-用户认证密码个数达到上限",
  "level": 2
}, {
  "value": "12300116 凭证复杂度验证失败",
  "id": "12300116-凭证复杂度验证失败",
  "level": 2
}, {
  "value": "12300117 PIN码过期",
  "id": "12300117-pin码过期",
  "level": 2
}, {
  "value": "12400001 应用不存在",
  "id": "12400001-应用不存在",
  "level": 2
}, {
  "value": "12400002 自定义数据不存在",
  "id": "12400002-自定义数据不存在",
  "level": 2
}, {
  "value": "12400003 自定义数据的数量已达上限",
  "id": "12400003-自定义数据的数量已达上限",
  "level": 2
}, {
  "value": "12400004 令牌数量已达上限",
  "id": "12400004-令牌数量已达上限",
  "level": 2
}, {
  "value": "12400005 授权列表已达上限",
  "id": "12400005-授权列表已达上限",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "账号管理错误码",
        children: "账号管理错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(680645)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅介绍本模块特有错误码，通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下错误码包括系统账号、分布式账号和应用账号错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300001-系统服务异常",
      children: "12300001 系统服务异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system service works abnormally."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示系统服务异常，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "账号管理服务无法正常启动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "账号管理的IPC对象无法获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "账号管理依赖的其他服务无法正常启动或者IPC对象无法获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "服务未初始化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "读写文件异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建目录异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建删除文件异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "读写数据库异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请稍后重试，或重启设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300002-无效参数",
      children: "12300002 无效参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid parameter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示传入无效的参数，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户名为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统账号用户名长度大于1024。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式账号用户名长度大于256。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统账号id小于0、小于100或大于1099。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式账号id长度大于512。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式账号传入不支持的事件类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "域名为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "域名长度大于128。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "域账号为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "域账号长度大于512。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "约束为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "约束长度大于128。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入无效的认证和查询参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供的系统账号头像编码字符串长度超过4KB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供的分布式账号头像编码字符串长度超过2MB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供非jpg和png的图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用账号名长度超过512。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "鉴权类型长度超过1024。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "令牌长度超过1024。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键名长度超过1024。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义数据值长度超过1024。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无效的令牌。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无效的上下文标识。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无效的凭据标识。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请传入正确的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300003-账号不存在",
      children: "12300003 账号不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示操作的账号不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询/激活/删除未创建的账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询/激活/删除已删除的账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为已删除的账号设置约束/用户名/头像。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更新未创建的账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号设置/取消账号信息访问授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号设置/删除/查询密码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号设置/删除令牌。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号设置额外信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号设置/删除凭据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号设置自定义数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为不存在的账号使能分布式同步功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查账号是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300004-账号已存在",
      children: "12300004 账号已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account already exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示账号已存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建已存在的账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消创建，或使用其他账号名重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300005-不支持多用户",
      children: "12300005 不支持多用户"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-user is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示不支持多用户，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备不支持多用户，无法创建账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法创建其他账号，请取消创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300006-不支持的账号类型",
      children: "12300006 不支持的账号类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account type is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示提供了不支持的账号类型，可能原因如下：当前设备不支持创建指定类型的账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请创建其他类型的账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300007-账号数量已达上限",
      children: "12300007 账号数量已达上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of accounts has reached the upper limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示账号数量已达上限，可能原因如下：创建系统账号/应用账号时，已存在1000个账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请删除其他账号后再创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300008-受限的账号",
      children: "12300008 受限的账号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specified account is restricted."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示操作的是受限账号，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除系统保留用户。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询系统保留用户的约束源类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建id为0-100的账号。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定id为系统保留用户，无法操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300009-账号已激活",
      children: "12300009 账号已激活"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account has been activated."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示账号已激活，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激活已激活的账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前账号已激活，请勿重复操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300010-账号服务忙碌",
      children: "12300010 账号服务忙碌"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account service is busy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示账号服务忙，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "短时间内提交重复请求，如重复激活、重复设置等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用账号的认证会话数量超过256，无法处理新的认证请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请等待一段时间后重试，并降低调用频率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300011-事件监听器已注册",
      children: "12300011 事件监听器已注册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The event listener has been registered."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示监听器已注册，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前应用向系统注册一个已经注册过的监听器，无法重复注册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消注册，或使用未注册过的监听器重新注册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300012-事件监听器未注册",
      children: "12300012 事件监听器未注册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The event listener has not been registered."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示监听器未注册，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解注册一个未注册过的监听器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请使用已注册的监听器执行解注册操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300013-网络异常",
      children: "12300013 网络异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示网络异常，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未连接网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "联网异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用无联网权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未知的网络错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "连接网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保网络可以正常联网。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保应用具有联网权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重试相关操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300014-域账号未认证",
      children: "12300014 域账号未认证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The domain account is not authenticated."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "域账号未登录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先登录域账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300015-短名称已存在",
      children: "12300015 短名称已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The short name already exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建账号使用的短名称已经存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更换别的不存在的短名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300016-账号登录数已达上限",
      children: "12300016 账号登录数已达上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of logged in accounts reaches the upper limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登录的账号数已经达到上限，不能再登录新账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将已经登录的账号退出，再登录新的账号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300101-凭据不正确",
      children: "12300101 凭据不正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The credential is incorrect."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示凭据不正确，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密码输入错误；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生物特征不匹配；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "令牌失效；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请输入正确有效的凭据重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300102-凭据不存在",
      children: "12300102 凭据不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The credential does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示凭据不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证未录入的凭据类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询未录入的凭据类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除未录入的凭据类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确认凭据类型是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300103-凭据输入器已注册",
      children: "12300103 凭据输入器已注册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The credential inputer already exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示凭据输入器已注册，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PIN码输入器已注册，解注册之前无法重复注册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "凭据输入器已存在，请勿重复操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300104-凭据输入器不存在",
      children: "12300104 凭据输入器不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The credential inputer is not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示凭据输入器不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证、添加、修改凭据时，未注册凭据输入器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册凭据输入器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300105-可信等级不支持",
      children: "12300105 可信等级不支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The trust level is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示可信等级不支持，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入系统不支持的可信等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请输入正确的可信等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300106-认证类型不支持",
      children: "12300106 认证类型不支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication type is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证类型不支持，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入系统不支持的认证类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请提供系统支持的认证类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300107-认证类型不存在",
      children: "12300107 认证类型不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication type does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证类型不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询/删除令牌时，指定的鉴权类型不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请使用存在的认证类型查询/删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300108-认证会话不存在",
      children: "12300108 认证会话不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication session does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示会话不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询不存在的会话回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请使用已成功打开的会话标识查询会话回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300109-认证凭据录入更新等操作被取消",
      children: "12300109 认证、凭据录入、更新等操作被取消"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication, enrollment, or update operation is canceled."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证、凭据录入、更新等操作被取消，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证过程中，用户取消认证操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "录入凭据过程中，用户取消录入操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "录入凭据过程中，用户取消更新操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新或结束认证操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300110-认证被锁定",
      children: "12300110 认证被锁定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication is locked."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证被锁定，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证类型错误次数超过上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证错误次数超过上限，请在freezingTime之后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300111-认证超时",
      children: "12300111 认证超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication time out."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证超时，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于系统账号，认证、录入超过三分钟。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证服务因网络原因无法及时响应而超时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证录入超时，请重试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确认网络环境无问题后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300112-认证服务忙",
      children: "12300112 认证服务忙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authentication service is busy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证服务忙，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统账号认证时，认证总数超过5个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用账号认证时，三方应用的认证器服务忙碌（根据实际情况决定）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前认证服务忙，请稍后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300113-认证服务不存在",
      children: "12300113 认证服务不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account authentication service does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示认证服务不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于应用账号："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求鉴权时，账号所属应用不支持认证器服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "隐式添加账号时，账号所属应用不支持认证器服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证指定账号的凭据时，该账号所属应用不支持认证器服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置应用的认证器属性时，指定的应用不支持认证器服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查账号标签时，指定的应用不支持认证器服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消操作，或向支持认证服务的应用进行认证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300114-认证服务异常",
      children: "12300114 认证服务异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The account authentication service works abnormally."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示账号认证服务异常，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "身份认证服务出现未知错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用认证器不符合规范。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请重试或重启系统。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请按照规范开发应用认证器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300115-用户认证密码个数达到上限",
      children: "12300115 用户认证密码个数达到上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of credentials reaches the upper limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "身份认证服务出现未知错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户已有对应类型的密码，不能再添加密码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请重试或重启系统。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请修改密码或删除已有密码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300116-凭证复杂度验证失败",
      children: "12300116 凭证复杂度验证失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Credential complexity verification failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置的凭证太过简单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照要求录入包含特定字符的凭证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12300117-pin码过期",
      children: "12300117 PIN码过期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PIN is expired."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户认证的PIN码过期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新设置PIN码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12400001-应用不存在",
      children: "12400001 应用不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The application does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示应用不存在，可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置访问权限时，目标应用不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置开放授权时，目标应用不存在。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消设置，或使用已安装的应用包名重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12400002-自定义数据不存在",
      children: "12400002 自定义数据不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The custom data does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示自定义数据不存在，可能原因如下：查询账号的自定义数据时，输入的键名不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请使用存在的自定义数据的键名查询。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12400003-自定义数据的数量已达上限",
      children: "12400003 自定义数据的数量已达上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of custom data records reaches the upper limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示自定义数据的数量已达上限，可能原因如下：设置自定义数据时，目标账号的自定义数据数量已达512。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消设置操作，或者删除已存在的自定义数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12400004-令牌数量已达上限",
      children: "12400004 令牌数量已达上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of tokens reaches the upper limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示令牌数量已达上限，可能原因如下：添加令牌时，目标账号的令牌数量已达1024。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消添加操作，或者删除已存在的令牌后再添加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12400005-授权列表已达上限",
      children: "12400005 授权列表已达上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The size of the authorization list reaches the upper limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示授权列表已达上限，可能原因如下：设置访问/开放授权时，授权列表的大小超过1024。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请取消设置操作，或者撤销已存在的访问/开放授权后再设置。"
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
680645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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