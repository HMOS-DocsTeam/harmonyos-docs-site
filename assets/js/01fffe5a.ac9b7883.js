"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["965564"], {
759526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_arkts_account_api_minorsprotection_account_api_minorsprotection_md_01f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-arkts-account-api-minorsprotection-account-api-minorsprotection-md-01f.json
var site_docs_ref_account_api_account_api_arkts_account_api_minorsprotection_account_api_minorsprotection_md_01f_namespaceObject = JSON.parse('{"id":"account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection","title":"minorsProtection (华为账号未成年人模式)","description":"当前模块提供Account Kit未成年人模式的相关能力，包括开启/关闭系统未成年人模式、获取系统未成年人模式的开启状态、年龄段信息等。开发者可调用本模块的能力，与系统未成年人模式联动，快速实现应用的未成年人模式的切换。","source":"@site/docs-ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection.md","sourceDirName":"account-api/account-api-arkts/account-api-minorsprotection","slug":"/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"minorsProtection (华为账号未成年人模式)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-minorsprotection"},"sidebar":"ref","previous":{"title":"shippingAddress (华为账号收货地址管理服务)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-choose-address/account-choose-address"},"next":{"title":"invoiceAssistant (华为账号发票助手服务)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-invoiceassistant/account-api-invoiceassistant"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-arkts/account-api-minorsprotection/account-api-minorsprotection.md


const frontMatter = {
	title: 'minorsProtection (华为账号未成年人模式)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-minorsprotection'
};
const contentTitle = 'minorsProtection (华为账号未成年人模式)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "MinorsProtectionInfo",
  "id": "minorsprotectioninfo",
  "level": 2
}, {
  "value": "AgeGroup",
  "id": "agegroup",
  "level": 2
}, {
  "value": "MinorsModeErrorCode",
  "id": "minorsmodeerrorcode",
  "level": 2
}, {
  "value": "supportMinorsMode",
  "id": "supportminorsmode",
  "level": 2
}, {
  "value": "getMinorsProtectionInfoSync",
  "id": "getminorsprotectioninfosync",
  "level": 2
}, {
  "value": "getMinorsProtectionInfo",
  "id": "getminorsprotectioninfo",
  "level": 2
}, {
  "value": "verifyMinorsProtectionCredential",
  "id": "verifyminorsprotectioncredential",
  "level": 2
}, {
  "value": "leadToTurnOnMinorsMode",
  "id": "leadtoturnonminorsmode",
  "level": 2
}, {
  "value": "leadToTurnOffMinorsMode",
  "id": "leadtoturnoffminorsmode",
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
        id: "minorsprotection-华为账号未成年人模式",
        children: "minorsProtection (华为账号未成年人模式)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前模块提供Account Kit未成年人模式的相关能力，包括开启/关闭系统未成年人模式、获取系统未成年人模式的开启状态、年龄段信息等。开发者可调用本模块的能力，与系统未成年人模式联动，快速实现应用的未成年人模式的切换。"
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
        children: "import { minorsProtection } from '@kit.AccountKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minorsprotectioninfo",
      children: "MinorsProtectionInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类提供未成年人模式的开启状态，以及年龄段信息。应用可跟随未成年人模式开启状态，进行开启/关闭应用的未成年人模式，使用年龄段信息，展示适龄内容。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "minorsProtectionMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启未成年人模式。  返回true表示未成年人模式为开启状态。  返回false表示未成年人模式为关闭状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ageGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#agegroup",
              children: "AgeGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["年龄段信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 仅当未成年人模式开启时才返回此字段。  2. 当登录中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）儿童账号（14周岁及以下）开启未成年人模式，则可能返回年龄段信息为[0,3)、[3,8)、[8,12)或[12,16)。  1. 如用户登录4周岁儿童账号，则返回年龄段信息为[3,8)。  2. 如用户登录9周岁儿童账号，则返回年龄段信息为[8,12)。  3. 当登录中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）非儿童账号开启未成年人模式，则可能返回年龄段信息为[0,3)、[3,8)、[8,12)、[12,16)或[16,18)。  1. 如用户创建13岁临时使用者，则返回年龄段信息为[12,16)。  2. 如用户创建17岁临时使用者，则返回年龄段信息为[16,18)。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agegroup",
      children: "AgeGroup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为年龄段信息对象。开发者可根据当前年龄段信息，展示适龄内容。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "lowerAge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["年龄段下限，包含下限值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 该字段取值范围：0、3、8、12或16。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "upperAge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["年龄段上限，不包含上限值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 该字段取值范围：3、8、12、16或18。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minorsmodeerrorcode",
      children: "MinorsModeErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举为未成年人模式模块的错误码。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MINORS_MODE_NOT_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900002-%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%A8%A1%E5%BC%8F%E6%9C%AA%E5%BC%80%E5%90%AF",
              children: "1009900002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未成年人模式未开启。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_CANCELED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900003-%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%93%8D%E4%BD%9C",
              children: "1009900003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户取消操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MINORS_MODE_ALREADY_ON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900005-%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%A8%A1%E5%BC%8F%E5%B7%B2%E7%BB%8F%E5%BC%80%E5%90%AF",
              children: "1009900005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未成年人模式已经开启。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MINORS_MODE_ALREADY_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900006-%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%A8%A1%E5%BC%8F%E5%B7%B2%E7%BB%8F%E5%85%B3%E9%97%AD",
              children: "1009900006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未成年人模式已经关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNSUPPORTED_ACCOUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900007-%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E8%B4%A6%E5%8F%B7",
              children: "1009900007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的账号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SERVICE_NOT_AVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900011-%E6%9C%8D%E5%8A%A1%E4%B8%8D%E5%8F%AF%E7%94%A8",
              children: "1009900011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务不可用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supportminorsmode",
      children: "supportMinorsMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportMinorsMode(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法为同步方法，调用该方法判断当前设备环境是否支持未成年人模式。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回boolean值。  返回true表示支持未成年人模式。  返回false表示不支持未成年人模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当登录海外华为账号、隐私空间均会返回false，其他场景均为true。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { minorsProtection } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nif (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {\n  try {\n    const supportMinorsMode: boolean = minorsProtection.supportMinorsMode();\n    hilog.info(0x0000, 'testTag', `Succeeded in getting supportMinorsMode is: ${supportMinorsMode.valueOf()}`);\n  } catch (error) {\n    hilog.error(0x0000, 'testTag',\n      `Failed to invoke supportMinorsMode. errCode: ${error.code}, errMessage: ${error.message}`);\n  }\n} else {\n  hilog.info(0x0000, 'testTag',\n    'The current device does not support the invoking of the supportMinorsMode interface.');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getminorsprotectioninfosync",
      children: "getMinorsProtectionInfoSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMinorsProtectionInfoSync(): MinorsProtectionInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法为同步方法，调用该方法获取未成年人模式的开启状态，以及年龄段信息。应用可跟随未成年人模式开启状态，进行开启/关闭应用的未成年人模式，使用年龄段信息，展示适龄内容。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#minorsprotectioninfo",
              children: "MinorsProtectionInfo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#minorsprotectioninfo",
              children: "MinorsProtectionInfo"
            }), "对象。用于获取未成年人模式开启状态、年龄段信息。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { minorsProtection } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nif (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {\n  try {\n    if (minorsProtection.supportMinorsMode()) {\n      const minorsProtectionInfo: minorsProtection.MinorsProtectionInfo =\n        minorsProtection.getMinorsProtectionInfoSync();\n      // 获取未成年人模式开启状态\n      const minorsProtectionMode: boolean = minorsProtectionInfo.minorsProtectionMode;\n      // 如开发者有频繁使用到未成年人模式开启状态，这里则需缓存未成年人模式开启状态\n      hilog.info(0x0000, 'testTag',\n        `Succeeded in getting minorsProtectionMode is: ${minorsProtectionMode.valueOf()}`);\n      // 未成年人模式已开启，获取年龄段信息\n      if (minorsProtectionMode) {\n        const ageGroup: minorsProtection.AgeGroup | undefined = minorsProtectionInfo.ageGroup;\n        if (ageGroup) {\n          hilog.info(0x0000, 'testTag', `Succeeded in getting lowerAge is: ${ageGroup.lowerAge}`);\n          hilog.info(0x0000, 'testTag', `Succeeded in getting upperAge is: ${ageGroup.upperAge}`);\n          // 根据年龄段刷新内容展示。如开发者有频繁使用到年龄段信息，这里则需缓存年龄段信息\n        }\n      } else {\n        // 未成年人模式未开启，应用需跟随系统未成年人模式，展示内容不做限制\n      }\n    } else {\n      hilog.info(0x0000, 'testTag',\n        'The current device environment does not support the youth mode, please check the current device environment.');\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag',\n      `Failed to invoke supportMinorsMode or getMinorsProtectionInfoSync. errCode: ${error.code},\n      errMessage: ${error.message}`);\n  }\n} else {\n  hilog.info(0x0000, 'testTag',\n    'The current device does not support the invoking of the getMinorsProtectionInfoSync interface.');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getminorsprotectioninfo",
      children: "getMinorsProtectionInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMinorsProtectionInfo(): Promise<MinorsProtectionInfo>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法获取未成年人模式的开启状态，以及年龄段信息。应用可跟随未成年人模式开启状态，进行开启/关闭应用的未成年人模式，使用年龄段信息，展示适龄内容。使用Promise异步回调。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
              href: "#minorsprotectioninfo",
              children: "MinorsProtectionInfo"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#minorsprotectioninfo",
              children: "MinorsProtectionInfo"
            }), "对象。用于获取未成年人模式开启状态、年龄段信息。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { minorsProtection } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nif (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {\n  try {\n    if (minorsProtection.supportMinorsMode()) {\n      minorsProtection.getMinorsProtectionInfo()\n        .then((minorsProtectionInfo: minorsProtection.MinorsProtectionInfo) => {\n          // 获取未成年人模式开启状态\n          const minorsProtectionMode: boolean = minorsProtectionInfo.minorsProtectionMode;\n          // 如开发者有频繁使用到未成年人模式开启状态，这里则需缓存未成年人模式开启状态\n          hilog.info(0x0000, 'testTag',\n            `Succeeded in getting minorsProtectionMode is: ${minorsProtectionMode.valueOf()}`);\n          // 未成年人模式已开启，获取年龄段信息\n          if (minorsProtectionMode) {\n            const ageGroup: minorsProtection.AgeGroup | undefined = minorsProtectionInfo.ageGroup;\n            if (ageGroup) {\n              hilog.info(0x0000, 'testTag', `Succeeded in getting lowerAge is: ${ageGroup.lowerAge}`);\n              hilog.info(0x0000, 'testTag', `Succeeded in getting upperAge is: ${ageGroup.upperAge}`);\n              // 根据年龄段刷新内容展示。如开发者有频繁使用到年龄段信息，这里则需缓存年龄段信息\n            }\n          } else {\n            // 未成年人模式未开启，应用需跟随系统未成年人模式，展示内容不做限制\n          }\n        })\n        .catch((error: BusinessError<Object>) => {\n          dealGetMinorsInfoAllError(error);\n        });\n    } else {\n      hilog.info(0x0000, 'testTag',\n        'The current device environment does not support the youth mode, please check the current device environment.');\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag',\n      `Failed to invoke supportMinorsMode. errCode: ${error.code}, errMessage: ${error.message}`);\n  }\n} else {\n  hilog.info(0x0000, 'testTag',\n    'The current device does not support the invoking of the getMinorsProtectionInfo interface.');\n}\n\nfunction dealGetMinorsInfoAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to getMinorsProtectionInfo. Code: ${error.code}, message: ${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verifyminorsprotectioncredential",
      children: "verifyMinorsProtectionCredential"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "verifyMinorsProtectionCredential(context: common.Context): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户需要调整应用的未成年人模式相关设置时，调用该方法拉起未成年人模式密码验证页面，验证身份。使用Promise异步回调。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
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
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回true表示密码验证通过；返回false表示密码验证未通过。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900002-%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%A8%A1%E5%BC%8F%E6%9C%AA%E5%BC%80%E5%90%AF",
              children: "1009900002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The minors mode is not enabled."
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
        children: "import { minorsProtection } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nif (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {\n  try {\n    if (minorsProtection.supportMinorsMode()) {\n      // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n      minorsProtection.verifyMinorsProtectionCredential(this.getUIContext().getHostContext())\n        .then((result: boolean) => {\n          hilog.info(0x0000, 'testTag', `Succeeded in getting verify result is: ${result.valueOf()}`);\n          // 使用结果判断验密是否通过，执行后续流程\n        })\n        .catch((error: BusinessError<Object>) => {\n          dealVerifyAllError(error);\n        });\n    } else {\n      hilog.info(0x0000, 'testTag',\n        'The current device environment does not support the youth mode, please check the current device environment.');\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag',\n      `Failed to invoke supportMinorsMode. errCode: ${error.code}, errMessage: ${error.message}`);\n  }\n} else {\n  hilog.info(0x0000, 'testTag',\n    'The current device does not support the invoking of the verifyMinorsProtectionCredential interface.');\n}\n\nfunction dealVerifyAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to verify. Code: ${error.code}, message: ${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "leadtoturnonminorsmode",
      children: "leadToTurnOnMinorsMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "leadToTurnOnMinorsMode(context: common.Context): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用提供开启未成年人模式入口，调用该方法拉起开启未成年人模式页面，引导用户开启未成年人模式。使用Promise异步回调。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
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
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果的Promise对象。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900003-%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%93%8D%E4%BD%9C",
              children: "1009900003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user canceled the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900005-%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%A8%A1%E5%BC%8F%E5%B7%B2%E7%BB%8F%E5%BC%80%E5%90%AF",
              children: "1009900005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The minors mode is already on."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900007-%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E8%B4%A6%E5%8F%B7",
              children: "1009900007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900011-%E6%9C%8D%E5%8A%A1%E4%B8%8D%E5%8F%AF%E7%94%A8",
              children: "1009900011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service not available."
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
        children: "import { minorsProtection } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nif (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {\n  try {\n    if (minorsProtection.supportMinorsMode()) {\n      // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n      minorsProtection.leadToTurnOnMinorsMode(this.getUIContext().getHostContext())\n        .then(() => {\n          // 接口调用完成，如需显示弹窗，请在此处处理\n        })\n        .catch((error: BusinessError<Object>) => {\n          dealTurnOnAllError(error);\n        });\n    } else {\n      hilog.info(0x0000, 'testTag',\n        'The current device environment does not support the youth mode, please check the current device environment.');\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag',\n      `Failed to invoke supportMinorsMode. errCode: ${error.code}, errMessage: ${error.message}`);\n  }\n} else {\n  hilog.info(0x0000, 'testTag',\n    'The current device does not support the invoking of the leadToTurnOnMinorsMode interface.');\n}\n\nfunction dealTurnOnAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to leadToTurnOnMinorsMode. Code: ${error.code}, message: ${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "leadtoturnoffminorsmode",
      children: "leadToTurnOffMinorsMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "leadToTurnOffMinorsMode(context: common.Context): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用提供关闭未成年人模式入口，调用该方法拉起关闭未成年人模式页面，引导用户关闭未成年人模式。使用Promise异步回调。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection"]
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
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果的Promise对象。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900003-%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%93%8D%E4%BD%9C",
              children: "1009900003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user canceled the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900006-%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%A8%A1%E5%BC%8F%E5%B7%B2%E7%BB%8F%E5%85%B3%E9%97%AD",
              children: "1009900006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The minors mode is already off."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1009900011-%E6%9C%8D%E5%8A%A1%E4%B8%8D%E5%8F%AF%E7%94%A8",
              children: "1009900011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service not available."
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
        children: "import { minorsProtection } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nif (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {\n  try {\n    if (minorsProtection.supportMinorsMode()) {\n      // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n      minorsProtection.leadToTurnOffMinorsMode(this.getUIContext().getHostContext())\n        .then(() => {\n          // 接口调用完成，如需显示弹窗，请在此处处理\n        })\n        .catch((error: BusinessError<Object>) => {\n          dealTurnOffAllError(error);\n        });\n    } else {\n      hilog.info(0x0000, 'testTag',\n        'The current device environment does not support the youth mode, please check the current device environment.');\n    }\n  } catch (error) {\n    hilog.error(0x0000, 'testTag',\n      `Failed to invoke supportMinorsMode. errCode: ${error.code}, errMessage: ${error.message}`);\n  }\n} else {\n  hilog.info(0x0000, 'testTag',\n    'The current device does not support the invoking of the leadToTurnOffMinorsMode interface.');\n}\n\nfunction dealTurnOffAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to leadToTurnOffMinorsMode. Code: ${error.code}, message: ${error.message}`);\n}\n"
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