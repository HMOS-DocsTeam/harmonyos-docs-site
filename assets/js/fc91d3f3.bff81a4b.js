"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["5483"], {
536418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_privacy_store_privacy_md_fc9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-privacy-store-privacy-md-fc9.json
var site_docs_store_kit_guide_store_privacy_store_privacy_md_fc9_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-privacy/store-privacy","title":"隐私管理服务","description":"隐私管理服务为使用标准化隐私声明托管服务的应用/元服务提供查询隐私链接、查询隐私签署状态、撤销同意记录和拉起标准化隐私弹框请求用户同意功能。","source":"@site/docs/store-kit-guide/store-privacy/store-privacy.md","sourceDirName":"store-kit-guide/store-privacy","slug":"/store-kit-guide/store-privacy/","permalink":"/harmonyos-docs-site/store-kit-guide/store-privacy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"隐私管理服务","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-privacy","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入调试功能","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-test/"},"next":{"title":"通过AppGallery Connect动态管理应用图标","permalink":"/harmonyos-docs-site/store-kit-guide/appgallery-appinfo/appgallery-appinfo-manage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-privacy/store-privacy.md


const frontMatter = {
	title: '隐私管理服务',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-privacy',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '隐私管理服务';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "查询隐私链接信息",
  "id": "查询隐私链接信息",
  "level": 3
}, {
  "value": "查询隐私签署状态",
  "id": "查询隐私签署状态",
  "level": 3
}, {
  "value": "撤销同意记录",
  "id": "撤销同意记录",
  "level": 3
}, {
  "value": "请求用户同意",
  "id": "请求用户同意",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "查询隐私链接信息",
  "id": "查询隐私链接信息-1",
  "level": 3
}, {
  "value": "查询隐私签署状态",
  "id": "查询隐私签署状态-1",
  "level": 3
}, {
  "value": "撤销同意记录",
  "id": "撤销同意记录-1",
  "level": 3
}, {
  "value": "请求用户同意",
  "id": "请求用户同意-1",
  "level": 3
}, {
  "value": "隐私弹框签署结果公共事件",
  "id": "隐私弹框签署结果公共事件",
  "level": 2
}, {
  "value": "事件说明",
  "id": "事件说明",
  "level": 3
}, {
  "value": "未上架应用接入隐私管理服务",
  "id": "未上架应用接入隐私管理服务",
  "level": 2
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
    ol: "ol",
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
        id: "隐私管理服务",
        children: "隐私管理服务"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["隐私管理服务为使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-policy-0000002316794885",
        children: "标准化隐私声明托管服务"
      }), "的应用/元服务提供查询隐私链接、查询隐私签署状态、撤销同意记录和拉起标准化隐私弹框请求用户同意功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315012)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在应用/元服务中使用了标准化隐私声明托管服务，则首次打开应用/元服务，会默认显示标准化隐私弹窗，请勿在应用/元服务中自行实现弹窗展示隐私声明，否则发布审核将被驳回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询隐私链接"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在接入标准化隐私声明托管服务的场景下，应用/元服务内查询或展示隐私协议所需。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询隐私签署状态"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持查询协议签署状态，以便于应用/元服务内规划相关权限及合理合规获取数据。用户未签署隐私协议时，将无法申请系统权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "撤销同意记录"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用于撤销用户已签署同意的隐私协议记录，撤销同意记录后再次打开应用/元服务会重新弹出标准化隐私弹框。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求用户同意"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在接入标准化隐私声明托管服务的前提下，用于开发者需要主动拉起标准化隐私弹框请求用户同意的场景。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(55089)/* ["default"] */.A) + "",
        width: "525",
        height: "415"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询隐私链接信息",
      children: "查询隐私链接信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户需要查询隐私链接信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务调用getAppPrivacyMgmtInfo接口查询隐私链接信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回隐私链接信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务将查询结果返回给用户。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询隐私签署状态",
      children: "查询隐私签署状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户需要查询隐私签署状态信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务调用getAppPrivacyResult接口查询隐私签署状态信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回隐私签署状态信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务将结果返回给用户。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "撤销同意记录",
      children: "撤销同意记录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户需要撤销隐私签署同意记录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务调用disableService接口撤销隐私签署同意记录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求用户同意",
      children: "请求用户同意"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户需要展示标准化隐私弹框。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务调用requestAppPrivacyConsent接口拉起标准化隐私弹框。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回弹窗结果信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "向用户展示标准化隐私弹框请求用户同意。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同一个Ability内不允许重复调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession#loadcontent",
          children: "loadContent()"
        }), "方法加载页面。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用/元服务需要接入隐私声明托管服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "隐私管理服务支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "隐私管理服务暂不支持模拟器，请使用真机调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["隐私管理服务提供以下接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagergetappprivacymgmtinfo",
              children: "getAppPrivacyMgmtInfo"
            }), "(): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#appprivacymgmtinfo",
              children: "AppPrivacyMgmtInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询隐私链接信息接口，用于查询隐私链接信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagergetappprivacyresult",
              children: "getAppPrivacyResult"
            }), "(): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#appprivacyresult",
              children: "AppPrivacyResult"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询隐私签署状态接口，用于查询隐私签署状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagerdisableservice",
              children: "disableService"
            }), "():void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤销同意记录接口，用于撤销隐私签署同意记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagerrequestappprivacyconsent",
              children: "requestAppPrivacyConsent"
            }), "(context:common.UIAbilityContext):Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#consentresult",
              children: "ConsentResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求用户同意接口，用于开发者需要主动拉起标准化隐私弹框。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询隐私链接信息-1",
      children: "查询隐私链接信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入privacyManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { privacyManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagergetappprivacymgmtinfo",
            children: "getAppPrivacyMgmtInfo"
          }), "方法查询隐私链接信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let appPrivacyManageInfo: privacyManager.AppPrivacyMgmtInfo = privacyManager.getAppPrivacyMgmtInfo();\n  hilog.info(0, 'TAG', \"Succeeded in getting AppPrivacyManageInfo type: \" + appPrivacyManageInfo[\"type\"]);\n  let privacyLinkInfoArray : privacyManager.AppPrivacyLink[] = appPrivacyManageInfo.privacyInfo;\n  hilog.info(0, 'TAG', \"Succeeded in getting AppPrivacyManageInfo size = \" + privacyLinkInfoArray.length);\n  for (let i = 0; i < privacyLinkInfoArray.length; i++) {\n    hilog.info(0, 'TAG', \"Succeeded in getting AppPrivacyManageInfo type = \" + privacyLinkInfoArray[i][\"type\"] + \", version = \" + privacyLinkInfoArray[i][\"versionCode\"] + \", url = \" + privacyLinkInfoArray[i][\"url\"]);\n  }\n} catch (error) {\n  hilog.error(0, 'TAG', \"GetAppPrivacyManageInfoPublic exception code: \" + error.code + \", exception message: \" + error.message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询隐私签署状态-1",
      children: "查询隐私签署状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入privacyManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { privacyManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagergetappprivacyresult",
            children: "getAppPrivacyResult"
          }), "方法查询隐私签署状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let appPrivacyResults: privacyManager.AppPrivacyResult[] = privacyManager.getAppPrivacyResult();\n  hilog.info(0, 'TAG', \"Succeeded in getting AppPrivacyResult size = \" + appPrivacyResults.length);\n  for (let i = 0; i < appPrivacyResults.length; i++) {\n    hilog.info(0, 'TAG', \"Succeeded in getting AppPrivacyResult type = \" + appPrivacyResults[i][\"type\"] + \", version = \" + appPrivacyResults[i][\"versionCode\"] + \", result = \"+appPrivacyResults[i][\"result\"]);\n  }\n} catch (error) {\n  hilog.error(0, 'TAG', \"GetAppPrivacyResultPublic exception code: \" + error.code + \", exception message: \" + error.message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "撤销同意记录-1",
      children: "撤销同意记录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入privacyManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { privacyManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagerdisableservice",
            children: "disableService"
          }), "方法撤销同意记录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  privacyManager.disableService();\n  hilog.info(0, 'TAG', \"Succeeded in disabling Service success.\");\n} catch (error) {\n  hilog.error(0, 'TAG', \"DisableService exception code: \" + error.code + \", exception message: \" + error.message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求用户同意-1",
      children: "请求用户同意"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入privacyManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { privacyManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport type { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-privacymanager/store-privacymanager#privacymanagerrequestappprivacyconsent",
            children: "requestAppPrivacyConsent"
          }), "方法拉起标准化隐私弹框请求用户同意。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  privacyManager.requestAppPrivacyConsent(uiContext).then((consentResult : privacyManager.ConsentResult) => {\n    let appPrivacyResults: privacyManager.AppPrivacyResult[] = consentResult[\"results\"];\n    for (let i = 0; i < appPrivacyResults.length; i++) {\n      hilog.info(0, 'TAG', \"GetAppPrivacyResult type = \" + appPrivacyResults[i][\"type\"] + \", version = \" + appPrivacyResults[i][\"versionCode\"] + \", result = \" + appPrivacyResults[i][\"result\"] + \", signingTimestamp = \" + appPrivacyResults[i][\"signingTimestamp\"]);\n    }\n  }).catch((error: BusinessError<Object>) => {\n    hilog.error(0, 'TAG', `requestAppPrivacyConsent failed, Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  hilog.error(0, 'TAG', \"requestAppPrivacyConsent exception code: \" + error.code + \", exception message: \" + error.message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "隐私弹框签署结果公共事件",
      children: "隐私弹框签署结果公共事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-privacy-policy-0000002316794885",
        children: "标准化隐私声明托管服务"
      }), "之后，用户未签署隐私声明前，打开应用/元服务会弹出标准化隐私弹框，弹框样式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(643557)/* ["default"] */.A) + "",
        width: "696",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户点击同意隐私弹框，应用市场会发送隐私弹框签署结果公共事件。应用可通过监听该事件，感知用户隐私签署结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事件说明",
      children: "事件说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "事件名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_privacy_state_changed11",
              children: "COMMON_EVENT_PRIVACY_STATE_CHANGED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "usual.event.PRIVACY_STATE_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐私弹框签署结果公共事件，事件携带数据如下：  {  'resultType': privacyResultType,  'appIndex': appIndex  }  其中：  - privacyResultType：  1：同意完整模式  0：未同意  - appIndex：分身索引"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公共事件接收示例（无应用分身场景）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { commonEventManager } from '@kit.BasicServicesKit';\nconst TAG = 'PrivacySubscribe';\n\nclass PrivacySubscribeSample {\n  private readonly eventId = 'usual.event.PRIVACY_STATE_CHANGED';\n  // 订阅者信息, 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作\n  private subscriber: commonEventManager.CommonEventSubscriber | undefined = undefined;\n  // 事件列表\n  private subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n    events: [this.eventId]\n  };\n\n  public subscribe(): void {\n    hilog.info(0, TAG, \"subscribe\");\n    // 创建订阅者\n    commonEventManager.createSubscriber(this.subscribeInfo).then((commonEventSubscriber) => {\n      hilog.info(0, TAG, \"createSubscriber\");\n      this.subscriber = commonEventSubscriber;\n\n      // 订阅公共事件\n      try {\n        commonEventManager.subscribe(this.subscriber, (err, data) => {\n          if (err) {\n            hilog.error(0, TAG, `subscribe failed, code is ${err?.code}, message is ${err?.message}`);\n            return;\n          }\n\n          let result = JSON.parse(data?.data ?? '{}')?.resultType as number;\n          if (result === 1) {\n            // 隐私同意处理\n          }\n        });\n      } catch (error) {\n        hilog.error(0, TAG, \"init createSubscriber failed, exception code: \" + error.code + \", exception message: \" + error.message);\n      }\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公共事件接收示例（应用分身场景）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { commonEventManager } from '@kit.BasicServicesKit';\nimport { UIAbility } from '@kit.AbilityKit';\n\nconst TAG = 'PrivacyEventSubscriber';\n\nexport default class MyAbility extends UIAbility {\n  onBackground() {\n    let appCloneIndex = 0;\n    let applicationContext = this.context.getApplicationContext();\n    try {\n      appCloneIndex = applicationContext.getCurrentAppCloneIndex();\n    } catch (error) {\n      hilog.error(0, TAG, `getCurrentAppCloneIndex fail, exception code:` + error.code + `, exception message: ` + error.message);\n    }\n    new PrivacyEventSubscriber(appCloneIndex).subscribe();\n  }\n}\n\nclass PrivacyEventSubscriber {\n  private appCloneIndex: number = 0;\n  private readonly eventId = 'usual.event.PRIVACY_STATE_CHANGED';\n  // 订阅者信息, 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作\n  private subscriber: commonEventManager.CommonEventSubscriber | undefined = undefined;\n  // 事件列表\n  private subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n    events: [this.eventId]\n  };\n\n  constructor(appCloneIndex: number) {\n    this.appCloneIndex = appCloneIndex;\n  }\n\n  public subscribe(): void {\n    hilog.info(0, TAG, \"subscribe\");\n    // 创建订阅者\n    commonEventManager.createSubscriber(this.subscribeInfo).then((commonEventSubscriber) => {\n      hilog.info(0, TAG, \"createSubscriber\");\n      this.subscriber = commonEventSubscriber;\n\n      // 订阅公共事件\n      try {\n        commonEventManager.subscribe(this.subscriber, (err, data) => {\n          if (err) {\n            hilog.error(0, TAG, `subscribe failed, code is ${err?.code}, message is ${err?.message}`);\n            return;\n          }\n\n          let result = JSON.parse(data?.data ?? '{}')?.resultType as number;\n          let appIndex = JSON.parse(data?.data ?? '{}')?.appIndex as number ?? 0;\n          // 公共事件传递的分身索引等于当前应用的分身索引\n          if (appIndex === this.appCloneIndex) {\n            if (result === 1) {\n              // 隐私同意处理\n            }\n          }\n        });\n      } catch (error) {\n        hilog.error(0, TAG, \"init createSubscriber failed, exception code: \" + error.code + \", exception message: \" + error.message);\n      }\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "未上架应用接入隐私管理服务",
      children: "未上架应用接入隐私管理服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对未上架应用市场的应用/元服务，可以通过手动预置隐私链接信息模拟接入隐私托管和隐私管理服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预置隐私链接信息完成后，打开应用会弹出统一隐私弹框，应用可以使用隐私管理服务提供的查询隐私链接、查询隐私签署状态和撤销同意记录等相关功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将应用工程构建模式修改为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample#section390311716277",
            children: "debug模式"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开代码工程中type为entry类型的模块，修改其中的src/main/module.json5文件，添加module.metadata信息，其中包含四个字段，值均为字符串类型："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "字段解释"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必填"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "appgallery_privacy_hosted"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是否启用隐私弹框，1表示启用，其他值均表示不启用。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "appgallery_privacy_link_privacy_statement"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "隐私协议url（https），在隐私弹框中作为隐私协议的内容。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "appgallery_privacy_link_user_agreement"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户协议url（https），在隐私弹框中作为用户协议的内容。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "appgallery_privacy_link_user_agreements"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["多个用户协议url（https），在隐私弹框中作为多个用户协议的内容。  该值直接引用一个json文件，json文件存放在module的type为entry模块的resources/rawfile文件夹下。  有多个用户协议链接时，优先取appgallery_privacy_link_user_agreements字段，appgallery_privacy_link_user_agreement配置的单个用户协议链接无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "起始版本"
                  })
                }), "：5.0.2(14)"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在华为应用市场可以正常使用、并且网络连通的情况下，使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "hdc"
        })
      }), "命令从本地文件安装应用，即可使用预置的隐私链接信息测试隐私弹框、调试隐私管理服务接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module.json5\n{\n  \"module\": {\n    \"name\": \"entry\",\n    \"type\": \"entry\",\n    \"description\": \"$string:module_desc\",\n    \"metadata\": [\n      {\n        \"name\": \"appgallery_privacy_hosted\",\n        \"value\": \"1\"\n      },\n      {\n        \"name\": \"appgallery_privacy_link_privacy_statement\",\n        \"value\": \"https://www.example.com/\" // 必须是https网址\n      },\n      {\n        \"name\": \"appgallery_privacy_link_user_agreement\",\n        \"value\": \"https://www.example.com/\" // 必须是https网址\n      },\n      {\n        \"name\": \"appgallery_privacy_link_user_agreements\",\n        \"value\": \"link_user_agreements.json\" // 配置json文件名称，示例配置见下文\n      }\n    ],\n    // 其他内容\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "link_user_agreements.json示例配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"user_agreement_Infos\": [\n        {\n            \"name\": \"用户协议1\",       // 需要展示的用户协议名字1\n            \"url\": \"https://xxxx\"     // 用户协议链接地址\n        },\n        {\n            \"name\": \"用户协议2\",       // 需要展示的用户协议名字2\n            \"url\": \"https://xxxx\"     // 用户协议链接地址\n        }\n    ]\n}\n"
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
315012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
643557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799142-fbe1e4d1e66935473f401a7b50f9791f.png");

},
55089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478791-fa2a744239ad42d64b1535b02a93f351.png");

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