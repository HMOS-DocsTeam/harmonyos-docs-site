"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["638088"], {
560454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_mdm_api_mdm_arkts_js_apis_enterprise_adminmanager_js_apis_enterprise_adminmanager_md_1c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-mdm-api-mdm-arkts-js-apis-enterprise-adminmanager-js-apis-enterprise-adminmanager-md-1c8.json
var site_docs_ref_system_basicfun_api_mdm_api_mdm_arkts_js_apis_enterprise_adminmanager_js_apis_enterprise_adminmanager_md_1c8_namespaceObject = JSON.parse('{"id":"system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager","title":"@ohos.enterprise.adminManager（admin权限管理）","description":"本模块为企业MDM应用提供admin权限管理能力，包括激活/解除激活admin权限、事件订阅、委托授权等。","source":"@site/docs-ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager.md","sourceDirName":"system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager","slug":"/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.enterprise.adminManager（admin权限管理）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-adminmanager","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-enterprise-adminmanager"},"sidebar":"ref","previous":{"title":"@ohos.enterprise.accountManager（账户管理）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-accountmanager/js-apis-enterprise-accountmanager"},"next":{"title":"@ohos.enterprise.applicationManager（应用管理）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager.md


const frontMatter = {
	title: '@ohos.enterprise.adminManager（admin权限管理）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-adminmanager',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-enterprise-adminmanager'
};
const contentTitle = '@ohos.enterprise.adminManager（admin权限管理）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "adminManager.disableAdmin",
  "id": "adminmanagerdisableadmin",
  "level": 2
}, {
  "value": "adminManager.isByodAdmin20+",
  "id": "adminmanagerisbyodadmin20",
  "level": 2
}, {
  "value": "adminManager.subscribeManagedEventSync",
  "id": "adminmanagersubscribemanagedeventsync",
  "level": 2
}, {
  "value": "adminManager.unsubscribeManagedEventSync",
  "id": "adminmanagerunsubscribemanagedeventsync",
  "level": 2
}, {
  "value": "adminManager.setDelegatedPolicies14+",
  "id": "adminmanagersetdelegatedpolicies14",
  "level": 2
}, {
  "value": "adminManager.getDelegatedPolicies14+",
  "id": "adminmanagergetdelegatedpolicies14",
  "level": 2
}, {
  "value": "adminManager.getDelegatedBundleNames14+",
  "id": "adminmanagergetdelegatedbundlenames14",
  "level": 2
}, {
  "value": "adminManager.startAdminProvision15+",
  "id": "adminmanagerstartadminprovision15",
  "level": 2
}, {
  "value": "adminManager.enableDeviceAdmin23+",
  "id": "adminmanagerenabledeviceadmin23",
  "level": 2
}, {
  "value": "adminManager.disableDeviceAdmin23+",
  "id": "adminmanagerdisabledeviceadmin23",
  "level": 2
}, {
  "value": "ManagedEvent",
  "id": "managedevent",
  "level": 2
}, {
  "value": "AdminType15+",
  "id": "admintype15",
  "level": 2
}, {
  "value": "Policy20+",
  "id": "policy20",
  "level": 2
}, {
  "value": "附录",
  "id": "附录",
  "level": 2
}, {
  "value": "可委托策略列表",
  "id": "可委托策略列表",
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
        id: "ohosenterpriseadminmanageradmin权限管理",
        children: "@ohos.enterprise.adminManager（admin权限管理）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块为企业MDM应用提供admin权限管理能力，包括激活/解除激活admin权限、事件订阅、委托授权等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48347)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块接口仅对设备管理应用开放，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-guide",
        children: "MDM Kit开发指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { adminManager } from '@kit.MDMKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagerdisableadmin",
      children: "adminManager.disableAdmin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disableAdmin(admin: Want, userId?: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除激活指定用户的设备管理应用。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN（仅系统应用支持申请）或ohos.permission.START_PROVISIONING_MESSAGE或ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，支持申请ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN权限。仅当SDA或DA设备管理应用解除激活自身时，可以申请该权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 20开始，支持申请ohos.permission.START_PROVISIONING_MESSAGE权限。仅当BYOD设备管理应用解除激活自身时，可以申请该权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 19及之前的版本，需要申请ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN（仅系统应用支持申请）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。解除激活BYOD设备管理应用时，仅支持传入当前应用的企业设备管理扩展组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID，取值范围：大于等于0。  - 调用接口时，若传入userId，表示指定用户。  - 调用接口时，若未传入userId，表示当前用户。"
          })]
        })]
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
            children: "无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to deactivate the administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { adminManager } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\nadminManager.disableAdmin(wantTemp, 100).catch((err: BusinessError) => {\n  console.error(`Failed to disable admin. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagerisbyodadmin20",
      children: "adminManager.isByodAdmin20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isByodAdmin(admin: Want): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据企业设备管理扩展组件查询当前应用是否被激活为BYOD设备管理应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.START_PROVISIONING_MESSAGE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。仅支持传入当前应用的企业设备管理扩展组件。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示被激活为BYOD设备管理应用，返回false表示没有被激活为BYOD设备管理应用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Want } from '@kit.AbilityKit';\nimport { adminManager } from '@kit.MDMKit';\n\nlet wantTemp: Want = {\n  // 请根据实际情况替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\ntry {\n  let result: boolean = adminManager.isByodAdmin(wantTemp);\n  console.info(`Succeeded in querying admin is byod admin or not : ${result}`);\n} catch (error) {\n  console.error(`Failed to query admin is byod admin or not. Code is ${error.code}, message is ${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagersubscribemanagedeventsync",
      children: "adminManager.subscribeManagedEventSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅系统管理事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "managedEvents"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#managedevent",
              children: "ManagedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅事件数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified system event is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { adminManager } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\nlet events: Array<adminManager.ManagedEvent> = [adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_ADDED, adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_REMOVED];\n\ntry {\n  adminManager.subscribeManagedEventSync(wantTemp, events);\n  console.info('Succeeded in subscribing managed event.');\n} catch (err) {\n  console.error(`Failed to subscribe managed event. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagerunsubscribemanagedeventsync",
      children: "adminManager.unsubscribeManagedEventSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unsubscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅系统管理事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "managedEvents"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#managedevent",
              children: "ManagedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅事件数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified system event is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { adminManager } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\nlet events: Array<adminManager.ManagedEvent> = [adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_ADDED, adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_REMOVED];\n\ntry {\n  adminManager.unsubscribeManagedEventSync(wantTemp, events);\n  console.info('Succeeded in unsubscribing managed event.');\n} catch (err) {\n  console.error(`Failed to unsubscribe managed event. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagersetdelegatedpolicies14",
      children: "adminManager.setDelegatedPolicies14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
              children: "getBundleInfoForSelf"
            }), "接口查询应用自身的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo",
              children: "BundleInfo"
            }), "，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8F%AF%E5%A7%94%E6%89%98%E7%AD%96%E7%95%A5%E5%88%97%E8%A1%A8",
              children: "委托策略列表"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The administrator application does not have permission to manage the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to grant the permission to the application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { adminManager } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet admin: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n// 需根据实际情况进行替换\nlet policies: Array<string> = [\"disabled_hdc\"];\n\ntry {\n  // 参数需根据实际情况进行替换\n  adminManager.setDelegatedPolicies(admin, \"com.example.enterprise.xxx\", policies);\n  console.info('Succeeded in setting delegated policies.');\n} catch (err) {\n  console.error(`Failed to set delegated policies. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagergetdelegatedpolicies14",
      children: "adminManager.getDelegatedPolicies14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDelegatedPolicies(admin: Want, bundleName: string): Array<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询被委托应用可访问的策略列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
              children: "getBundleInfoForSelf"
            }), "接口查询应用自身的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo",
              children: "BundleInfo"
            }), "，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。"]
          })]
        })]
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
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "委托策略列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The administrator application does not have permission to manage the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { adminManager } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet admin: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\ntry {\n  // 参数需根据实际情况进行替换\n  let policies: Array<string> = adminManager.getDelegatedPolicies(admin, \"com.example.enterprise.xxx\");\n  console.info(`Succeeded in getting delegated policies.${JSON.stringify(policies)}`);\n} catch (err) {\n  console.error(`Failed to get delegated policies. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagergetdelegatedbundlenames14",
      children: "adminManager.getDelegatedBundleNames14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDelegatedBundleNames(admin: Want, policy: string): Array<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询可以访问某个委托策略的被委托应用，输出被委托应用列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "委托策略。"
          })]
        })]
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
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被委托应用列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The administrator application does not have permission to manage the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { adminManager } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet admin: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\ntry {\n  // 参数需根据实际情况进行替换\n  let bundleNames: Array<string> = adminManager.getDelegatedBundleNames(admin, \"disabled_hdc\");\n  console.info(`Succeeded in getting delegated bundles.${JSON.stringify(bundleNames)}`);\n} catch (err) {\n  console.error(`Failed to get delegated bundles. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagerstartadminprovision15",
      children: "adminManager.startAdminProvision15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startAdminProvision(admin: Want, type: AdminType, context: common.Context, parameters: Record<string, string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备管理应用拉起BYOD管理员激活页面进行激活。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.START_PROVISIONING_MESSAGE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone和Tablet中可正常调用，在其他设备中调用无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#admintype15",
              children: "AdminType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活的设备管理应用类型，仅支持ADMIN_TYPE_BYOD类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-common/js-apis-app-ability-common#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管理应用的上下文信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义参数信息，其中Key值必须包含：\"activateId\"，可以包含\"customizedInfo\"、\"localDeactivationPolicy\"。  - activateId：项目激活ID。  - customizedInfo：企业自定义信息。  - localDeactivationPolicy：从API version 22开始支持，本地延迟取消激活时间（单位：小时）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下的错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
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
        children: "import { adminManager } from '@kit.MDMKit';\nimport { common, Want } from '@kit.AbilityKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\nlet recordParameters: Record<string, string> = {\n  // 需根据实际情况进行替换\n  \"activateId\": \"activateId testValue\",\n  \"customizedInfo\": \"customizedInfo testValue\"\n};\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nconst context = this.getUIContext().getHostContext() as common.UIAbilityContext;\ntry {\n  console.info('context:' + JSON.stringify(context));\n  adminManager.startAdminProvision(wantTemp, adminManager.AdminType.ADMIN_TYPE_BYOD, context, recordParameters);\n  console.info('startAdminProvision::success');\n} catch (error) {\n  console.error('startAdminProvision::errorCode: ' + error.code + ' errorMessage: ' + error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagerenabledeviceadmin23",
      children: "adminManager.enableDeviceAdmin23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableDeviceAdmin(admin: Want): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#sda",
        children: "超级设备管理应用"
      }), "通过该接口可以激活其他", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#da",
        children: "普通设备管理应用"
      }), "，使用Promise异步回调。该接口仅支持超级设备管理应用调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1设备中可正常调用，在其他设备中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
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
            children: "无返回结果的Promise对象。当激活设备管理应用失败时，会抛出错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The administrator application does not have permission to manage the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The administrator ability component is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to activate the administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported. Failed to call the API due to limited device capabilities."
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
        children: "import { Want } from '@kit.AbilityKit';\nimport { adminManager } from '@kit.MDMKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\nadminManager.enableDeviceAdmin(wantTemp).catch((err: BusinessError) => {\n  console.error(`Failed to enable device admin. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adminmanagerdisabledeviceadmin23",
      children: "adminManager.disableDeviceAdmin23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disableDeviceAdmin(admin: Want): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#sda",
        children: "超级设备管理应用"
      }), "通过该接口可以解除激活其他", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#da",
        children: "普通设备管理应用"
      }), "，使用Promise异步回调。该接口仅支持超级设备管理应用调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在PC/2in1设备中可正常调用，在其他设备中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。"
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
            children: "无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts-errcode/errorcode-enterprisedevicemanager/errorcode-enterprisedevicemanager",
        children: "企业设备管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "9200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not an administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The administrator application does not have permission to manage the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to deactivate the administrator application of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported. Failed to call the API due to limited device capabilities."
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
        children: "import { Want } from '@kit.AbilityKit';\nimport { adminManager } from '@kit.MDMKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\nadminManager.disableDeviceAdmin(wantTemp).catch((err: BusinessError) => {\n  console.error(`Failed to disable device admin. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managedevent",
      children: "ManagedEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可订阅的系统管理事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MANAGED_EVENT_BUNDLE_ADDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用安装事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_BUNDLE_REMOVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用卸载事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_APP_START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用启动事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_APP_STOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用停止事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_SYSTEM_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统更新事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_ACCOUNT_ADDED18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账号新增事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_ACCOUNT_SWITCHED18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账号切换事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGED_EVENT_ACCOUNT_REMOVED18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "账号删除事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admintype15",
      children: "AdminType15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备管理应用的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADMIN_TYPE_BYOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BYOD设备管理应用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "policy20",
      children: "Policy20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许或禁用名单的策略类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
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
            children: "BLOCK_LIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁用名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRUST_LIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许名单。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附录",
      children: "附录"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可委托策略列表",
      children: "可委托策略列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "策略名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallow_add_local_account"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-accountmanager/js-apis-enterprise-accountmanager#accountmanagerdisallowosaccountaddition",
              children: "accountManager.disallowOsAccountAddition"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-accountmanager/js-apis-enterprise-accountmanager#accountmanagerisosaccountadditiondisallowed",
              children: "accountManager.isOsAccountAdditionDisallowed"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不传accountId参数，禁止设备创建本地用户。  不传accountId参数，查询是否禁止设备创建本地用户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallow_add_os_account_by_user"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-accountmanager/js-apis-enterprise-accountmanager#accountmanagerdisallowosaccountaddition",
              children: "accountManager.disallowOsAccountAddition"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-accountmanager/js-apis-enterprise-accountmanager#accountmanagerisosaccountadditiondisallowed",
              children: "accountManager.isOsAccountAdditionDisallowed"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需传入accountId参数，禁止指定用户添加账号。  需传入accountId参数，查询是否禁止指定用户添加账号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallow_running_bundles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanageradddisallowedrunningbundlessync",
              children: "applicationManager.addDisallowedRunningBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagerremovedisallowedrunningbundlessync",
              children: "applicationManager.removeDisallowedRunningBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagergetdisallowedrunningbundlessync",
              children: "applicationManager.getDisallowedRunningBundlesSync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。  从应用运行禁止名单中移除应用。  获取当前/指定用户下的应用运行禁止名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manage_auto_start_apps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanageraddautostartapps",
              children: "applicationManager.addAutoStartApps"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagerremoveautostartapps",
              children: "applicationManager.removeAutoStartApps"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagergetautostartapps",
              children: "applicationManager.getAutoStartApps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加开机自启动应用名单。  从开机自启动应用名单中移除应用。  查询开机自启动应用名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowed_bluetooth_devices"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bluetoothmanager/js-apis-enterprise-bluetoothmanager#bluetoothmanageraddallowedbluetoothdevices",
              children: "bluetoothManager.addAllowedBluetoothDevices"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bluetoothmanager/js-apis-enterprise-bluetoothmanager#bluetoothmanagerremoveallowedbluetoothdevices",
              children: "bluetoothManager.removeAllowedBluetoothDevices"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bluetoothmanager/js-apis-enterprise-bluetoothmanager#bluetoothmanagergetallowedbluetoothdevices",
              children: "bluetoothManager.getAllowedBluetoothDevices"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加蓝牙设备可用名单。  从蓝牙设备可用名单中移除。  查询蓝牙设备可用名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set_browser_policies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-browser/js-apis-enterprise-browser#browsersetpolicysync",
              children: "browser.setPolicySync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-browser/js-apis-enterprise-browser#browsergetpoliciessync",
              children: "browser.getPoliciesSync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为指定的浏览器设置浏览器子策略。  获取指定浏览器的策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowed_install_bundles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanageraddallowedinstallbundlessync",
              children: "bundleManager.addAllowedInstallBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagerremoveallowedinstallbundlessync",
              children: "bundleManager.removeAllowedInstallBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagergetallowedinstallbundlessync",
              children: "bundleManager.getAllowedInstallBundlesSync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，否则不允许安装。  从应用程序包安装允许名单中移除应用。  获取当前/指定用户下的应用程序包安装允许名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallowed_install_bundles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanageradddisallowedinstallbundlessync",
              children: "bundleManager.addDisallowedInstallBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagerremovedisallowedinstallbundlessync",
              children: "bundleManager.removeDisallowedInstallBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagergetdisallowedinstallbundlessync",
              children: "bundleManager.getDisallowedInstallBundlesSync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。  从应用程序包安装禁止名单中移除应用。  获取当前/指定用户下的应用程序包安装禁止名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallowed_uninstall_bundles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanageradddisalloweduninstallbundlessync",
              children: "bundleManager.addDisallowedUninstallBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagerremovedisalloweduninstallbundlessync",
              children: "bundleManager.removeDisallowedUninstallBundlesSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagergetdisalloweduninstallbundlessync",
              children: "bundleManager.getDisallowedUninstallBundlesSync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。  从应用程序包卸载禁止名单中移除应用。  获取当前/指定用户下的应用包程序卸载禁止名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get_device_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-deviceinfo/js-apis-enterprise-deviceinfo#deviceinfogetdeviceinfo",
              children: "deviceInfo.getDeviceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "location_policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-locationmanager/js-apis-enterprise-locationmanager#locationmanagersetlocationpolicy",
              children: "locationManager.setLocationPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-locationmanager/js-apis-enterprise-locationmanager#locationmanagergetlocationpolicy",
              children: "locationManager.getLocationPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置位置服务管理策略。  查询位置服务策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disabled_network_interface"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-networkmanager/js-apis-enterprise-networkmanager#networkmanagersetnetworkinterfacedisabledsync",
              children: "networkManager.setNetworkInterfaceDisabledSync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-networkmanager/js-apis-enterprise-networkmanager#networkmanagerisnetworkinterfacedisabledsync",
              children: "networkManager.isNetworkInterfaceDisabledSync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止设备使用指定网络。  查询指定网络接口是否被禁用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "global_proxy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-networkmanager/js-apis-enterprise-networkmanager#networkmanagersetglobalproxysync",
              children: "networkManager.setGlobalProxySync"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-networkmanager/js-apis-enterprise-networkmanager#networkmanagergetglobalproxysync",
              children: "networkManager.getGlobalProxySync"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置网络全局代理。  获取网络全局代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disabled_bluetooth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入bluetooth，禁用/启用蓝牙能力。  feature传入bluetooth，查询是否禁用蓝牙能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallow_modify_datetime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入modifyDateTime，禁用/启用设置系统时间能力。  feature传入modifyDateTime，查询是否禁用修改系统时间能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disabled_printer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入printer，禁用/启用打印能力。  feature传入printer，查询是否禁用打印能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disabled_hdc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入hdc，禁用/启用被其他设备通过hdc连接、调试的能力。  feature传入hdc，查询是否禁用被其他设备通过hdc连接、调试的能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disable_microphone"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入microphone，禁用/启用麦克风能力。  feature传入microphone，查询是否禁用麦克风能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fingerprint_auth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicyforaccount14",
              children: "restrictions.setDisallowedPolicyForAccount"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicyforaccount14",
              children: "restrictions.getDisallowedPolicyForAccount"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入fingerprint，禁用/启用指纹认证能力。  feature传入fingerprint，查询是否禁用指纹认证能力。  feature传入fingerprint，禁用/启用指定用户的指纹认证能力。  feature传入fingerprint，查询是否禁用指定用户的指纹认证能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disable_usb"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入usb，禁用/启用USB能力。  feature传入usb，查询是否禁用USB能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disable_wifi"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入wifi，禁用/启用Wi-Fi能力。  feature传入wifi，查询是否禁用Wi-Fi能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallowed_tethering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入tethering，禁用/启用网络共享能力。  feature传入tethering，查询是否禁用网络共享能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inactive_user_freeze"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入inactiveUserFreeze，禁用/启用非活跃用户运行能力。  feature传入inactiveUserFreeze，查询是否禁用非活跃用户运行能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "snapshot_skip"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsadddisallowedlistforaccount14",
              children: "restrictions.addDisallowedListForAccount"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsremovedisallowedlistforaccount14",
              children: "restrictions.removeDisallowedListForAccount"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedlistforaccount14",
              children: "restrictions.getDisallowedListForAccount"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入snapshotSkip，禁用屏幕快照能力的应用名单。  feature传入snapshotSkip，从禁用屏幕快照能力的应用名单中移除。  feature传入snapshotSkip，查询禁用屏幕快照能力的应用名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "password_policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-securitymanager/js-apis-enterprise-securitymanager#securitymanagersetpasswordpolicy",
              children: "securityManager.setPasswordPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-securitymanager/js-apis-enterprise-securitymanager#securitymanagergetpasswordpolicy",
              children: "securityManager.getPasswordPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置设备锁屏口令策略。  获取设备锁屏口令策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clipboard_policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-securitymanager/js-apis-enterprise-securitymanager#securitymanagersetappclipboardpolicy",
              children: "securityManager.setAppClipboardPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-securitymanager/js-apis-enterprise-securitymanager#securitymanagergetappclipboardpolicy",
              children: "securityManager.getAppClipboardPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置设备剪贴板策略。  获取设备剪贴板策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "watermark_image_policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-securitymanager/js-apis-enterprise-securitymanager#securitymanagersetwatermarkimage14",
              children: "securityManager.setWatermarkImage"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-securitymanager/js-apis-enterprise-securitymanager#securitymanagercancelwatermarkimage14",
              children: "securityManager.cancelWatermarkImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置水印策略，当前仅支持PC/2in1使用。  取消水印策略，当前仅支持PC/2in1使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ntp_server"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagersetntpserver",
              children: "systemManager.setNTPServer"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagergetntpserver",
              children: "systemManager.getNTPServer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NTP服务器的策略。  获取NTP服务器信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set_update_policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagersetotaupdatepolicy",
              children: "systemManager.setOtaUpdatePolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagergetotaupdatepolicy",
              children: "systemManager.getOtaUpdatePolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置升级策略。  查询升级策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notify_upgrade_packages"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagernotifyupdatepackages",
              children: "systemManager.notifyUpdatePackages"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagergetupdateresult",
              children: "systemManager.getUpdateResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知系统更新包信息。  获取系统更新结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowed_usb_devices"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanageraddallowedusbdevices",
              children: "usbManager.addAllowedUsbDevices"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanagerremoveallowedusbdevices",
              children: "usbManager.removeAllowedUsbDevices"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanagergetallowedusbdevices",
              children: "usbManager.getAllowedUsbDevices"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加USB设备可用名单。  移除USB设备可用名单。  获取USB设备可用名单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usb_read_only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanagersetusbstoragedeviceaccesspolicy",
              children: "usbManager.setUsbStorageDeviceAccessPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanagergetusbstoragedeviceaccesspolicy",
              children: "usbManager.getUsbStorageDeviceAccessPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置USB存储设备访问策略。  获取USB存储设备访问策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallowed_usb_devices"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanageradddisallowedusbdevices14",
              children: "usbManager.addDisallowedUsbDevices"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanagerremovedisallowedusbdevices14",
              children: "usbManager.removeDisallowedUsbDevices"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-usbmanager/js-apis-enterprise-usbmanager#usbmanagergetdisallowedusbdevices14",
              children: "usbManager.getDisallowedUsbDevices"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加禁止使用的USB设备类型。  移除禁止使用的USB设备类型。  获取禁止使用的USB设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallowed_sms"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入sms，禁用/启用设备接收、发送短信的能力，当前仅支持手机、平板设备使用。  feature传入sms，查询是否禁用设备接收、发送短信的能力，当前仅支持手机、平板设备使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallowed_mms"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入mms，禁用/启用设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。  feature传入mms，查询是否禁用设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disable_backup_and_restore"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入backupAndRestore，禁用/启用备份和恢复能力，当前仅支持手机、平板使用。  feature传入backupAndRestore，查询是否禁用备份和恢复能力，当前仅支持手机、平板使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "installed_bundle_info_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagergetinstalledbundlelist20",
              children: "bundleManager.getInstalledBundleList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备指定用户下已安装应用列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clear_up_application_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-applicationmanager/js-apis-enterprise-applicationmanager#applicationmanagerclearupapplicationdata20",
              children: "applicationManager.clearUpApplicationData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除应用产生的所有数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disallow_unmute_device"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入unmuteDevice，禁用/启用设备媒体播放声音能力。  feature传入unmuteDevice，查询是否禁用设备媒体播放声音能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disabled_hdc_remote"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionssetdisallowedpolicy",
              children: "restrictions.setDisallowedPolicy"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-restrictions/js-apis-enterprise-restrictions#restrictionsgetdisallowedpolicy",
              children: "restrictions.getDisallowedPolicy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "feature传入hdcRemote，禁用/启用设备通过hdc调试其他设备的能力。  feature传入hdcRemote，查询是否禁用设备通过hdc调试其他设备的能力。"
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
48347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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