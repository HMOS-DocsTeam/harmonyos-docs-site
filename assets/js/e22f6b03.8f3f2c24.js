"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["115674"], {
700148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_arkts_account_choose_address_account_choose_address_md_e22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-arkts-account-choose-address-account-choose-address-md-e22.json
var site_docs_ref_account_api_account_api_arkts_account_choose_address_account_choose_address_md_e22_namespaceObject = JSON.parse('{"id":"account-api/account-api-arkts/account-choose-address/account-choose-address","title":"shippingAddress (华为账号收货地址管理服务)","description":"本模块提供Account Kit的收货地址管理能力。应用可通过该能力获取到用户华为账号收货地址信息，包括详细地址、手机号等。","source":"@site/docs-ref/account-api/account-api-arkts/account-choose-address/account-choose-address.md","sourceDirName":"account-api/account-api-arkts/account-choose-address","slug":"/account-api/account-api-arkts/account-choose-address/account-choose-address","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-choose-address/account-choose-address","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"shippingAddress (华为账号收货地址管理服务)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-choose-address","kit":"应用服务","last_updated":"2026-04-22","slug":"account-choose-address"},"sidebar":"ref","previous":{"title":"extendService (华为账号增强服务)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-extendservice/account-api-extendservice"},"next":{"title":"minorsProtection (华为账号未成年人模式)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-arkts/account-choose-address/account-choose-address.md


const frontMatter = {
	title: 'shippingAddress (华为账号收货地址管理服务)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-choose-address',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-choose-address'
};
const contentTitle = 'shippingAddress (华为账号收货地址管理服务)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "ShippingAddressErrorCode",
  "id": "shippingaddresserrorcode",
  "level": 2
}, {
  "value": "AddressInfo",
  "id": "addressinfo",
  "level": 2
}, {
  "value": "chooseAddress",
  "id": "chooseaddress",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "shippingaddress-华为账号收货地址管理服务",
        children: "shippingAddress (华为账号收货地址管理服务)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供Account Kit的收货地址管理能力。应用可通过该能力获取到用户华为账号收货地址信息，包括详细地址、手机号等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { shippingAddress } from '@kit.AccountKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shippingaddresserrorcode",
      children: "ShippingAddressErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举定义了Account Kit收货地址管理服务错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.ShippingAddress"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNAL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100001-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008100001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100002-%E7%BD%91%E7%BB%9C%E4%B8%8D%E5%8F%AF%E7%94%A8",
              children: "1008100002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOUNT_NOT_LOGGED_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100003-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008100003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户未登录华为账号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKAGE_FINGERPRINT_CHECK_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100004-%E5%BA%94%E7%94%A8%E6%8C%87%E7%BA%B9%E8%AF%81%E4%B9%A6%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1008100004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用指纹证书校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERMISSION_CHECK_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100005-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7%E5%AF%B9%E5%BA%94permissions%E6%9D%83%E9%99%90",
              children: "1008100005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用未申请对应permissions权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_CANCELED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%AE%8C%E6%88%90%E6%93%8D%E4%BD%9C%E5%B0%B1%E9%80%80%E5%87%BA%E4%BA%86%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1",
              children: "1008100006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户未完成操作就退出了收货地址管理服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100007-%E5%B7%B2%E7%99%BB%E5%BD%95%E7%9A%84%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7%E4%B8%8D%E6%94%AF%E6%8C%81%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1",
              children: "1008100007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已登录的华为账号不支持收货地址管理服务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addressinfo",
      children: "AddressInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为收货地址管理服务响应的收货地址数据对象。应用可根据实际场景获取相关收货地址信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.ShippingAddress"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户名。长度限制2-20。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mobileNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手机号码。长度限制2-20。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当前仅支持输入中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）手机号。收货地址的明文手机号支持183******58、+86183******58、0086183******58共3种格式。接口返回的手机号格式和用户输入的手机号格式保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "telNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "座机号码。长度限制1-256。用户未设置默认不返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zipCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "邮政编码。长度限制1-256。用户未设置默认不返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countryCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "国家码。长度限制1-256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "provinceName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "省份名称。长度限制1-50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "城市名称。长度限制1-50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "districtName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["地区名称。长度限制1-50。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "streetName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "街道名称。长度限制1-50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "detailedAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "详细地址。长度限制1-50。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chooseaddress",
      children: "chooseAddress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chooseAddress(context: common.Context): Promise<AddressInfo>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法打开收货地址管理页面，使用Promise异步回调用户选择的收货地址。用于应用向Account Kit获取用户绑定的华为账号收货地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.ShippingAddress"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-common/js-apis-app-ability-common#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文。  应用可支持的Context有：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext",
              children: "UIExtensionContext"
            }), "。不支持应用在半模态、弹出框、子窗口等非全页面组件中使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext",
              children: "UIExtensionContext"
            }), "调用。  元服务可支持的Context有：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addressinfo",
              children: "AddressInfo"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addressinfo",
              children: "AddressInfo"
            }), "对象可以获取收货地址的详细信息。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-error-code/account-api-error-code",
        children: "ArkTS错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100001-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008100001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100002-%E7%BD%91%E7%BB%9C%E4%B8%8D%E5%8F%AF%E7%94%A8",
              children: "1008100002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100003-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008100003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user has not signed in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100004-%E5%BA%94%E7%94%A8%E6%8C%87%E7%BA%B9%E8%AF%81%E4%B9%A6%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1008100004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to check the fingerprint of the app bundle."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100005-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7%E5%AF%B9%E5%BA%94permissions%E6%9D%83%E9%99%90",
              children: "1008100005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The app does not have the required permissions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%AE%8C%E6%88%90%E6%93%8D%E4%BD%9C%E5%B0%B1%E9%80%80%E5%87%BA%E4%BA%86%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1",
              children: "1008100006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user quits the shipping address management service without finishing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1008100007-%E5%B7%B2%E7%99%BB%E5%BD%95%E7%9A%84%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7%E4%B8%8D%E6%94%AF%E6%8C%81%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1",
              children: "1008100007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The shipping address management service does not support the HUAWEI ID that is already signed in."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { shippingAddress } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 执行请求\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  shippingAddress.chooseAddress(this.getUIContext().getHostContext()).then((data: shippingAddress.AddressInfo) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in choosing address');\n    const userName: string = data.userName;\n    const mobileNumber: string = data.mobileNumber;\n    const countryCode: string = data.countryCode;\n    const provinceName: string = data.provinceName;\n    const cityName: string = data.cityName;\n    const districtName: string = data.districtName;\n    const streetName: string = data.streetName;\n    const detailedAddress: string = data.detailedAddress;\n    // 开发者处理获取的收货地址信息\n  }).catch((error: BusinessError) => {\n    dealAllError(error);\n  })\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag', `Failed to chooseAddress. Code: ${error.code}, message: ${error.message}`);\n}\n"
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