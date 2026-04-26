"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["481878"], {
917485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_mdm_api_mdm_arkts_js_apis_enterpriseadminextensionability_js_apis_enterpriseadminextensionability_md_322_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-mdm-api-mdm-arkts-js-apis-enterpriseadminextensionability-js-apis-enterpriseadminextensionability-md-322.json
var site_docs_ref_system_basicfun_api_mdm_api_mdm_arkts_js_apis_enterpriseadminextensionability_js_apis_enterpriseadminextensionability_md_322_namespaceObject = JSON.parse('{"id":"system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability","title":"@ohos.enterprise.EnterpriseAdminExtensionAbility（企业设备管理扩展能力）","description":"本模块提供企业设备管理扩展能力。","source":"@site/docs-ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability.md","sourceDirName":"system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability","slug":"/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"@ohos.enterprise.EnterpriseAdminExtensionAbility（企业设备管理扩展能力）","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-enterpriseadminextensionability"},"sidebar":"ref","previous":{"title":"@ohos.enterprise.wifiManager（Wi-Fi管理）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-wifimanager/js-apis-enterprise-wifimanager"},"next":{"title":"@ohos.enterprise.telephonyManager（通话管理）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-telephonymanager/js-apis-enterprise-telephonymanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability.md


const frontMatter = {
	title: '@ohos.enterprise.EnterpriseAdminExtensionAbility（企业设备管理扩展能力）',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-enterpriseadminextensionability'
};
const contentTitle = '@ohos.enterprise.EnterpriseAdminExtensionAbility（企业设备管理扩展能力）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "EnterpriseAdminExtensionAbility",
  "id": "enterpriseadminextensionability",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "onAdminEnabled",
  "id": "onadminenabled",
  "level": 3
}, {
  "value": "onAdminDisabled",
  "id": "onadmindisabled",
  "level": 3
}, {
  "value": "onBundleAdded",
  "id": "onbundleadded",
  "level": 3
}, {
  "value": "onBundleAdded14+",
  "id": "onbundleadded14",
  "level": 3
}, {
  "value": "onBundleRemoved",
  "id": "onbundleremoved",
  "level": 3
}, {
  "value": "onBundleRemoved14+",
  "id": "onbundleremoved14",
  "level": 3
}, {
  "value": "onAppStart",
  "id": "onappstart",
  "level": 3
}, {
  "value": "onAppStop",
  "id": "onappstop",
  "level": 3
}, {
  "value": "onSystemUpdate",
  "id": "onsystemupdate",
  "level": 3
}, {
  "value": "onStart",
  "id": "onstart",
  "level": 3
}, {
  "value": "onAccountAdded18+",
  "id": "onaccountadded18",
  "level": 3
}, {
  "value": "onAccountSwitched18+",
  "id": "onaccountswitched18",
  "level": 3
}, {
  "value": "onAccountRemoved18+",
  "id": "onaccountremoved18",
  "level": 3
}, {
  "value": "onKioskModeEntering20+",
  "id": "onkioskmodeentering20",
  "level": 3
}, {
  "value": "onKioskModeExiting20+",
  "id": "onkioskmodeexiting20",
  "level": 3
}, {
  "value": "onMarketAppInstallResult22+",
  "id": "onmarketappinstallresult22",
  "level": 3
}, {
  "value": "onDeviceAdminEnabled23+",
  "id": "ondeviceadminenabled23",
  "level": 3
}, {
  "value": "onDeviceAdminDisabled23+",
  "id": "ondeviceadmindisabled23",
  "level": 3
}, {
  "value": "onKeyEvent23+",
  "id": "onkeyevent23",
  "level": 3
}, {
  "value": "onLogCollected23+",
  "id": "onlogcollected23",
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
        id: "ohosenterpriseenterpriseadminextensionability企业设备管理扩展能力",
        children: "@ohos.enterprise.EnterpriseAdminExtensionAbility（企业设备管理扩展能力）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#%E4%BC%81%E4%B8%9A%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%E6%89%A9%E5%B1%95%E8%83%BD%E5%8A%9B",
        children: "企业设备管理扩展能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备管理应用需要存在一个EnterpriseAdminExtensionAbility并重写相关接口，以此具备模块提供的各项能力，比如接收由系统发送的该应用被激活或者解除激活的通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149762)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enterpriseadminextensionability",
      children: "EnterpriseAdminExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业设备管理扩展能力组件，是设备管理应用必备组件。当开发者为企业开发设备管理应用时，需继承EnterpriseAdminExtensionAbility，在EnterpriseAdminExtensionAbility实例中实现MDM业务逻辑，EnterpriseAdminExtensionAbility实现了系统管理状态变化通知功能，并定义了管理应用激活、去激活、应用安装、卸载事件等回调接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/mdm-arkts-application/s-apis-application-enterpriseadminextensioncontext/s-apis-application-enterpriseadminextensioncontext",
              children: "EnterpriseAdminExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["EnterpriseAdminExtensionAbility的上下文。继承自", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
              children: "ExtensionContext"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onadminenabled",
      children: "onAdminEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAdminEnabled(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备管理应用被激活后，触发该回调。企业管理员或者员工部署并激活设备管理应用，系统通知设备管理应用已激活admin权限。设备管理应用可在此回调函数中进行初始化策略设置。无需注册，激活后默认触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAdminEnabled() {\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onadmindisabled",
      children: "onAdminDisabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAdminDisabled(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备管理应用被解除激活后，触发该回调。企业管理员或者员工解除激活设备管理，系统通知设备管理应用已解除激活admin权限。设备管理应用可在此回调函数中通知企业管理员设备已脱管。无需注册，解除激活后默认触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAdminDisabled() {\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbundleadded",
      children: "onBundleAdded"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBundleAdded(bundleName: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用安装事件回调，回调中包含应用包名。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_BUNDLE_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用安装事件，端侧应用安装事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被安装应用的包名。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onBundleAdded(bundleName: string) {\n    console.info(`Succeeded in calling onBundleAdded callback, added bundle name : ${bundleName}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbundleadded14",
      children: "onBundleAdded14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBundleAdded(bundleName: string, accountId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用安装事件回调，回调中包含应用包名和账号ID。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_BUNDLE_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用安装事件，端侧应用安装事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被安装应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被安装应用所在的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  // 由于存在同名回调方法onBundleAdded(bundleName: string)，该回调方法无accountId参数，因此在实际调用时accountId必须为可选参数，写法请参考示例代码。如果删除accountId后的问号\"?\"，编译会报错。\n  onBundleAdded(bundleName: string, accountId?: number) {\n    console.info(`Succeeded in calling onBundleAdded callback, added bundle name : ${bundleName}, accountId: ${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbundleremoved",
      children: "onBundleRemoved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBundleRemoved(bundleName: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用卸载事件回调，回调中包含应用包名。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_BUNDLE_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用卸载事件，端侧应用卸载事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被卸载应用的包名。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onBundleRemoved(bundleName: string) {\n    console.info(`Succeeded in calling onBundleRemoved callback, removed bundle name : ${bundleName}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbundleremoved14",
      children: "onBundleRemoved14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBundleRemoved(bundleName: string, accountId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用卸载事件回调，回调中包含应用包名和账号ID。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_BUNDLE_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用卸载事件，端侧应用卸载事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被卸载应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被卸载应用所在的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  // 由于存在同名回调方法onBundleRemoved(bundleName: string)，该回调方法无accountId参数，因此在实际调用时accountId必须为可选参数，写法请参考示例代码。如果删除accountId后的问号\"?\"，编译会报错。\n  onBundleRemoved(bundleName: string, accountId?: number) {\n    console.info(`Succeeded in calling onBundleRemoved callback, removed bundle name : ${bundleName}, accountId: ${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onappstart",
      children: "onAppStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAppStart(bundleName: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用启动事件回调。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_APP_START事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用启动事件，端侧应用启动事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动应用的包名。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAppStart(bundleName: string) {\n    console.info(`Succeeded in calling onAppStart callback, started bundle name : ${bundleName}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onappstop",
      children: "onAppStop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAppStop(bundleName: string): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用停止事件回调。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_APP_STOP事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用停止事件，端侧应用停止事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止应用的包名。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAppStop(bundleName: string) {\n    console.info(`Succeeded in calling onAppStop callback, stopped bundle name : ${bundleName}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsystemupdate",
      children: "onSystemUpdate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSystemUpdate(systemUpdateInfo: systemManager.SystemUpdateInfo): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统更新事件回调。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_SYSTEM_UPDATE事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统更新事件，端侧系统更新事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "systemUpdateInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemupdateinfo",
              children: "systemManager.SystemUpdateInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统更新的版本信息。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\nimport { systemManager } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onSystemUpdate(systemUpdateInfo: systemManager.SystemUpdateInfo) {\n    console.info(`Succeeded in calling onSystemUpdate callback, version name  : ${systemUpdateInfo.versionName}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstart",
      children: "onStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStart(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EnterpriseAdminExtensionAbility启动事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onStart() {\n    console.info(`Succeeded in calling onStart callback.`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaccountadded18",
      children: "onAccountAdded18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAccountAdded(accountId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统账号新增事件回调。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_ACCOUNT_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号新增事件，系统账号新增事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAccountAdded(accountId: number) {\n    console.info(`Succeeded in calling onAccountAdded callback, added accountId: ${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaccountswitched18",
      children: "onAccountSwitched18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAccountSwitched(accountId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统账号切换事件回调。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_ACCOUNT_SWITCHED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号切换事件，系统账号切换事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换后的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAccountSwitched(accountId: number) {\n    console.info(`Succeeded in calling onAccountSwitched callback, switched accountId: ${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaccountremoved18",
      children: "onAccountRemoved18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAccountRemoved(accountId: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统账号删除事件回调。通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager#adminmanagersubscribemanagedeventsync",
        children: "adminManager.subscribeManagedEventSync"
      }), "注册MANAGED_EVENT_ACCOUNT_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号删除事件，系统账号删除事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被删除的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onAccountRemoved(accountId: number) {\n    console.info(`Succeeded in calling onAccountRemoved callback, removed accountId: ${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onkioskmodeentering20",
      children: "onKioskModeEntering20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onKioskModeEntering(bundleName: string, accountId: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用进入Kiosk模式回调，回调中包含应用包名和用户ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiosk模式为系统层面提供的一种应用运行模式，该模式下会将设备锁定在单个应用或者一组应用运行，同时对锁屏状态、状态栏、手势操作和关键功能进行控制，防止用户在设备上启动其它应用或执行其它操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入Kiosk模式应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入Kiosk模式应用所在的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onKioskModeEntering(bundleName: string, accountId: number): void {\n    console.info(`Succeeded in calling onKioskModeEntering callback, bundleName:${bundleName}, accountId:${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onkioskmodeexiting20",
      children: "onKioskModeExiting20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onKioskModeExiting(bundleName: string, accountId: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退出Kiosk模式回调，回调中包含应用包名和用户ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出Kiosk模式应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accountId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出Kiosk模式应用所在的用户ID。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onKioskModeExiting(bundleName: string, accountId: number): void {\n    console.info(`Succeeded in calling onKioskModeExiting callback, bundleName:${bundleName}, accountId:${accountId}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onmarketappinstallresult22",
      children: "onMarketAppInstallResult22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMarketAppInstallResult(bundleName: string, result: common.InstallationResult): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装应用市场应用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-bundlemanager/js-apis-enterprise-bundlemanager#bundlemanagerinstallmarketapps22",
        children: "bundleManager.installMarketApps"
      }), "安装结果回调，回调中包含应用包名和安装结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-common/js-apis-enterprise-common#installationresult",
              children: "common.InstallationResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装结果。"
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
        children: "import { EnterpriseAdminExtensionAbility, common } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onMarketAppInstallResult(bundleName: string, result: common.InstallationResult): void {\n    console.info(`Succeeded in calling onMarketAppInstallResult callback, bundleName:${bundleName}, result:${result}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondeviceadminenabled23",
      children: "onDeviceAdminEnabled23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDeviceAdminEnabled(bundleName: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅超级设备管理应用在普通设备管理应用被激活时会触发此回调。企业管理员或者员工部署并激活普通设备管理应用，系统通知超级设备管理应用已激活admin权限。超级设备管理应用可在此回调函数中进行初始化策略设置。不需要注册，激活后默认触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被激活应用的包名。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onDeviceAdminEnabled(bundleName: string) {\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondeviceadmindisabled23",
      children: "onDeviceAdminDisabled23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDeviceAdminDisabled(bundleName: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅超级设备管理应用在普通设备管理应用被解除激活时会触发此回调。企业管理员或者员工解除激活普通设备管理应用，系统通知超级设备管理应用已解除激活admin权限。超级设备管理应用可在此回调函数中通知企业管理员设备已脱管。不需要注册，解除激活后默认触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被解除激活应用的包名。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  onDeviceAdminDisabled(bundleName: string) {\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onkeyevent23",
      children: "onKeyEvent23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onKeyEvent(keyEvent: systemManager.KeyEvent): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "系统按键事件"
      }), "回调。MDM应用需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanageraddkeyeventpolicies23",
        children: "systemManager.addKeyEventPolicies"
      }), "接口下发按键事件处理策略，当系统按键事件触发时，如果事件与已下发的策略匹配，则触发该回调。回调信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "keyEvent"
      }), "中包含当前发生的按键事件信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单按键事件响应。设备单按键被触发时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onkeyevent23",
        children: "onKeyEvent"
      }), "会在按下和抬起时触发两次回调事件，可由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "keyEvent"
      }), "中keyAction属性进行判断。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "keyEvent"
      }), "中keyItems属性在单按键事件中可忽略。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组合按键事件响应。组合按键仅支持物理按键：电源键、音量加键、音量减键进行组合。用户按下组合键时，后按下按键的事件回调将通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "keyEvent"
      }), "中的keyItems属性携带当前所有已按下的按键信息。其他与单按键事件响应逻辑一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["长按事件响应。当单个按键或组合按键被长时间按下时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onkeyevent23",
        children: "onKeyEvent"
      }), "会以50ms的间隔（具体间隔时间可能因系统状态及性能而稍有延长）被连续触发，其中每次回调事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "keyEvent"
      }), "的actionTime属性均与按键首次按下事件回调的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
        children: "keyEvent"
      }), "的actionTime属性相同。其他情况下的响应逻辑与单个按键和组合按键一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "keyEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#keyevent23",
              children: "systemManager.KeyEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前发生的按键事件信息。"
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
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\nimport { systemManager } from '@kit.MDMKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n\n /* MDM应用下发按键事件监听后，用户按键行为匹配监听策略时，将触发该事件，事件回调携带当前匹配的按键信息。\n  *\n  * 例如：\n  * 1.用户短按电源键时触发回调（以电源键为例）\n  * 1.1 下发按键监听事件\n  * 请参考systemManager.addKeyEventPolicies。\n  * 下发keyCode为0，keyPolicy为1。\n  * 1.2 用户短按电源键\n  * 1.3 触发回调\n  * 结果：按下：onKeyEvent event:{\"actionTime\": 1895101259, \"keyCode\": 0, \"keyAction\": 0,\n  *          \"keyItems\": [{\"pressed\": true, \"keyCode\": 0, \"downTime\": 1895101259}]}\n  *       抬起：onKeyEvent event:{\"actionTime\": 1895478977, \"keyCode\": 0, \"keyAction\": 1,\n  *         \"keyItems\": [{\"pressed\": false, \"keyCode\": 0, \"downTime\": 1895101259}]}\n  *\n  * 2.用户长按电源键时触发回调（以电源键为例）\n  * 2.1 下发按键监听事件\n  * 请参考systemManager.addKeyEventPolicies。\n  * 下发keyCode为0，keyPolicy为1。\n  * 2.2 用户长按电源键\n  * 2.3 触发回调\n  * 结果：按下：onKeyEvent event:{\"actionTime\": 14468236859, \"keyCode\": 0, \"keyAction\": 0,\n  *         \"keyItems\": [{\"pressed\": true, \"keyCode\": 0, \"downTime\": 14468236859}]}\n  *      长按：onKeyEvent event:{\"actionTime\": 14468236859, \"keyCode\": 0, \"keyAction\": 0,\n  *         \"keyItems\": [{\"pressed\": true, \"keyCode\": 0, \"downTime\": 14468236859}]}\n  *          ......\n  *       抬起：onKeyEvent event:{\"actionTime\": 14471425448, \"keyCode\": 0, \"keyAction\": 1,\n  *         \"keyItems\": [{\"pressed\": false, \"keyCode\": 0, \"downTime\": 14468236859}]}\n  *\n  * 组合键根据下发策略不同，分为下面多种场景：\n  * 3.用户按组合键触发回调1（以电源键和音量+键为例）\n  * 3.1 下发按键监听事件\n  * 请参考systemManager.addKeyEventPolicies。\n  * 下发keyCode为0，keyPolicy为1；keyCode为1，keyPolicy为1；\n  * 3.2 用户同时按下电源键和音量+键\n  * 3.3 触发回调\n  * 结果：同时按下（电源键先，音量+键后）\n  *      onKeyEvent event:{\"actionTime\": 20991450446, \"keyCode\": 1, \"keyAction\": 0,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 0, \"downTime\": 20991432293}，\n  *   {\"pressed\": true, \"keyCode\": 1, \"downTime\": 20991450446}]}\n  *      同时抬起 （音量+键先，电源键后）\n  *      onKeyEvent event:{\"actionTime\": 20590590293, \"keyCode\": 1, \"keyAction\": 1,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 0, \"downTime\": 28588682984}，\n  *   {\"pressed\": false, \"keyCode\": 1, \"downTime\": 21588900860}]}\n  *\n  * 4.用户按组合键触发回调2（以电源键和音量+键为例）\n  * 4.1 下发按键监听事件\n  * 请参考systemManager.addKeyEventPolicies。\n  * 下发keyCode为0，keyPolicy为1；keyCode为1，keyPolicy为0；\n  * 4.2 用户同时按下电源键和音量+键\n  * 4.3 触发回调\n  * 结果：同时按下（音量+键先，电源键后）\n  *      onKeyEvent event:{\"actionTime\": 28991115400, \"keyCode\": 0, \"keyAction\": 0,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 1, \"downTime\": 28990731985}，\n  *   {\"pressed\": true, \"keyCode\": 0, \"downTime\": 20991115400}]}\n  *      同时抬起 （音量+键先，电源键后）\n  *      onKeyEvent event:{\"actionTime\": 28992721560, \"keyCode\": 0, \"keyAction\": 1,\n  *   \"keyItems\": [{\"pressed\": false, \"keyCode\": 0, \"downTime\": 28991115400}]}\n  *\n  * 5.用户按组合键触发回调3（以电源键和音量+键为例）\n  * 5.1 下发按键监听事件\n  * 请参考systemManager.addKeyEventPolicies。\n  * 下发keyCode为0，keyPolicy为1；\n  * 5.2 用户同时按下电源键和音量+键\n  * 5.3 触发回调\n  * 结果：同时按下（音量+键先，电源键后）\n  *      onKeyEvent event:{\"actionTime\": 29979014190, \"keyCode\": 0, \"keyAction\": 0,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 1, \"downTime\": 29978420634}，\n  *   {\"pressed\": true, \"keyCode\": 0, \"downTime\": 29979014190}]}\n  *      同时抬起 （电源键先，音量+键后）\n  *      onKeyEvent event:{\"actionTime\": 29982420773, \"keyCode\": 0, \"keyAction\": 1,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 1, \"downTime\": 29978420634}，\n  *   {\"pressed\": false, \"keyCode\": 0, \"downTime\": 29979014190}]}\n  *\n  * 6.用户按组合键触发回调4（以电源键和导航键-最近打开为例）\n  * 6.1 下发按键监听事件\n  * 请参考systemManager.addKeyEventPolicies。\n  * 下发keyCode为0，keyPolicy为1；keyCode为5，keyPolicy为1；\n  * 6.2 用户同时按下电源键和导航键-最近打开\n  * 6.3 触发回调\n  * 结果：同时按下（各自执行回调，互不影响）\n  *      onKeyEvent event:{\"actionTime\": 34073626894, \"keyCode\": 0, \"keyAction\": 0,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 0, \"downTime\": 34073626894}]}\n  *      onKeyEvent event:{\"actionTime\": 34075144844, \"keyCode\": 5, \"keyAction\": 0,\n  *   \"keyItems\": [{\"pressed\": true, \"keyCode\": 5, \"downTime\": 0}]}\n  */\n  onKeyEvent(keyEvent: systemManager.KeyEvent): void {\n    console.info(`Succeeded in calling onKeyEvent callback, key event:${JSON.stringify(keyEvent)}`);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onlogcollected23",
      children: "onLogCollected23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onLogCollected(result: common.Result): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagerstartcollectlog23",
        children: "systemManager.startCollectLog"
      }), "接口成功创建日志收集任务后，当日志收集完成时，将触发该回调。回调中包含日志收集结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451127)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日志收集成功时，必须在应用的EnterpriseAdminExtensionAbility中访问沙箱目录（/data/edm/log）获取日志，获取日志方式参考下列示例代码。应用取走日志后，建议调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-systemmanager/js-apis-enterprise-systemmanager#systemmanagerfinishlogcollected23",
        children: "systemManager.finishLogCollected"
      }), "删除已收集到的日志。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Customization.EnterpriseDeviceManager"]
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
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-common/js-apis-enterprise-common#result",
              children: "common.Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志收集结果。"
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
        children: "import { Want } from '@kit.AbilityKit';\nimport { EnterpriseAdminExtensionAbility, common, systemManager } from '@kit.MDMKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n  /**\n   * MDM应用调用systemManager.startCollectLog接口启动日志收集任务后，将触发该回调函数，回调携带日志收集结果。\n   * 若result为common.Result.SUCCESS，表示日志收集成功。请取走日志，并调用systemManager.finishLogCollected删除已收集到的日志。\n   * 若result为common.Result.FAIL，表示日志收集失败。\n   */\n  onLogCollected(result: common.Result): void {\n    console.info(`Succeeded in calling onLogCollected callback, result:${result}`);\n    if (result === common.Result.SUCCESS) {\n      let filesDir = '/data/edm/log';\n      // 应用沙箱路径，需根据实际情况进行替换\n      let targetPath = this.context.tempDir;\n      try {\n          let files: string[] = fs.listFileSync(filesDir);\n          // 从/data/edm/log沙箱目录取走日志\n          files.forEach(value => {\n             fs.copyFileSync(filesDir + '/' + value, targetPath + '/' + value);\n          });\n          let wantTemp: Want = {\n              // 需根据实际情况进行替换\n              bundleName: 'com.example.myapplication',\n              abilityName: 'EnterpriseAdminAbility'\n          };\n          systemManager.finishLogCollected(wantTemp);\n      } catch (error) {\n          console.info(\"onLogCollected\", \"error: \" + JSON.stringify(error))\n      }\n    }\n    if (result === common.Result.FAIL) {\n      console.error(\"onLogCollected\", \"Failed to collect log.\")\n    }\n  }\n};\n"
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
451127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
149762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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