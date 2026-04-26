"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["202745"], {
93116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_mdm_api_mdm_arkts_js_apis_enterprise_devicesettings_js_apis_enterprise_devicesettings_md_25b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-mdm-api-mdm-arkts-js-apis-enterprise-devicesettings-js-apis-enterprise-devicesettings-md-25b.json
var site_docs_ref_system_basicfun_api_mdm_api_mdm_arkts_js_apis_enterprise_devicesettings_js_apis_enterprise_devicesettings_md_25b_namespaceObject = JSON.parse('{"id":"system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-devicesettings/js-apis-enterprise-devicesettings","title":"@ohos.enterprise.deviceSettings （设备设置管理）","description":"本模块提供企业设备设置能力，包括设置、获取设备息屏时间等。","source":"@site/docs-ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-devicesettings/js-apis-enterprise-devicesettings.md","sourceDirName":"system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-devicesettings","slug":"/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-devicesettings/js-apis-enterprise-devicesettings","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-devicesettings/js-apis-enterprise-devicesettings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"@ohos.enterprise.deviceSettings （设备设置管理）","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-devicesettings","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-enterprise-devicesettings"},"sidebar":"ref","previous":{"title":"@ohos.enterprise.deviceInfo（设备信息管理）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-deviceinfo/js-apis-enterprise-deviceinfo"},"next":{"title":"@ohos.enterprise.locationManager（位置服务管理）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-locationmanager/js-apis-enterprise-locationmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-devicesettings/js-apis-enterprise-devicesettings.md


const frontMatter = {
	title: '@ohos.enterprise.deviceSettings （设备设置管理）',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-devicesettings',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-enterprise-devicesettings'
};
const contentTitle = '@ohos.enterprise.deviceSettings （设备设置管理）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "deviceSettings.setValue",
  "id": "devicesettingssetvalue",
  "level": 2
}, {
  "value": "deviceSettings.getValue",
  "id": "devicesettingsgetvalue",
  "level": 2
}, {
  "value": "deviceSettings.setHomeWallpaper20+",
  "id": "devicesettingssethomewallpaper20",
  "level": 2
}, {
  "value": "deviceSettings.setUnlockWallpaper20+",
  "id": "devicesettingssetunlockwallpaper20",
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
        id: "ohosenterprisedevicesettings-设备设置管理",
        children: "@ohos.enterprise.deviceSettings （设备设置管理）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供企业设备设置能力，包括设置、获取设备息屏时间等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(911970)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-guide",
        children: "MDM Kit开发指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { deviceSettings } from '@kit.MDMKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicesettingssetvalue",
      children: "deviceSettings.setValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setValue(admin: Want, item: string, value: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置设备策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_SETTINGS"]
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
          children: "冲突规则："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-multi-mdm#%E8%A7%84%E5%88%993%E9%85%8D%E7%BD%AE",
        children: "配置"
      }), "。"]
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
            children: "item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备设置策略类型。  - screenOff：设备息屏策略，对于PC/2in1设备，支持设置电池和电源供电下的息屏策略。  - dateTime：设置系统时间。  - powerPolicy：设备电源策略，对于PC/2in1设备，仅支持设置电池供电下的电源策略。  - eyeComfort：从API version 23开始支持，设置护眼模式开关状态，仅支持全天开启和关闭护眼模式。  - defaultInputMethod：从API version 23开始支持，设置默认输入法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["策略类型值。  当item为screenOff时，value为设备息屏时间（单位：毫秒）。  当item为dateTime时，value为要设置的系统时间（单位：毫秒）。  当item为powerPolicy时，value为JSON字符串，格式：{\"powerScene\":xx,\"powerPolicy\":{\"powerPolicyAction\":xx,\"delayTime\":xx}}。powerScene为电源策略场景；delayTime为延迟时间（单位：毫秒），不支持设置为30000毫秒；powerPolicyAction为休眠策略。  电源策略场景：  - 0：超时场景。  休眠策略：  - 0：不执行动作。  - 1：自动进入睡眠。  - 2：强制进入睡眠。  - 3：进入休眠，该策略暂不生效。  - 4：关机。  当item为eyeComfort时，value为护眼模式开关状态的字符串。  - on：全天开启护眼模式。  - off：关闭护眼模式。  当item为defaultInputMethod时，value为输入法应用包名字符串。  - 可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodgetcurrentinputmethod9",
              children: "getCurrentInputMethod"
            }), "获取当前输入法应用包名。"]
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
        children: "import { deviceSettings } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\ntry {\n  // 需根据实际情况进行替换\n  deviceSettings.setValue(wantTemp, 'screenOff', '3000');\n  console.info(`Succeeded in setting screen off time.`);\n} catch (err) {\n  console.error(`Failed to set screen off time. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicesettingsgetvalue",
      children: "deviceSettings.getValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValue(admin: Want, item: string): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备设置策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_MANAGE_SETTINGS"]
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
            children: "item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备设置策略类型。  - screenOff：设备息屏策略，对于PC/2in1设备，支持查询电池和电源供电下的息屏策略。  - powerPolicy：设备电源策略，对于PC/2in1设备，仅支持查询电池供电下的电源策略。  - eyeComfort：从API version 23开始支持，护眼模式开关状态。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "策略类型值。  当item为screenOff时，返回设备息屏时间（单位：毫秒），对于PC/2in1设备，返回设备电池供电下的息屏时间（单位：毫秒）。  当item为powerPolicy时，返回电源策略，对于PC/2in1设备，返回设备电池供电下的电源策略，格式为JSON字符串:{\"powerScene\":xx,\"powerPolicy\":{\"powerPolicyAction\":xx,\"delayTime\":xx}}。powerScene为电源策略场景；delayTime为延迟时间（单位：毫秒）；powerPolicyAction为休眠策略。  电源策略场景：  - 0：超时场景。  休眠策略：  - 0：不执行动作。  - 1：自动进入睡眠。  - 2：强制进入睡眠。  - 3：进入休眠，该策略暂不生效。  - 4：关机。  当item为eyeComfort时，value为护眼模式开关状态的字符串。  - on：全天开启护眼模式。  - off：关闭护眼模式。  - unknown：其他模式。"
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
        children: "import { deviceSettings } from '@kit.MDMKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\ntry {\n  // 参数需根据实际情况进行替换\n  let result: string = deviceSettings.getValue(wantTemp, 'screenOff');\n  console.info(`Succeeded in getting screen off time, result : ${result}`);\n} catch (err) {\n  console.error(`Failed to get screen off time. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicesettingssethomewallpaper20",
      children: "deviceSettings.setHomeWallpaper20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setHomeWallpaper(admin: Want, fd: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置桌面壁纸，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_SET_WALLPAPER"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "冲突规则："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-multi-mdm#%E8%A7%84%E5%88%993%E9%85%8D%E7%BD%AE",
        children: "配置"
      }), "。"]
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
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置为桌面壁纸图片的文件描述符，可以通过file.fs的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
              children: "openSync"
            }), "接口获取应用沙箱目录下的图片文件描述符。壁纸图片大小不能超过100MB。"]
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
            children: "无返回结果的Promise对象。当设置桌面壁纸失败后会抛出错误对象。"
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
            children: "9200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
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
        children: "import { deviceSettings } from '@kit.MDMKit';\nimport { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs }  from '@kit.CoreFileKit';\n\nlet wantTemp: Want = {\n  // 请根据实际情况修改\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nconst context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n// 参数根据实际情况进行替换\nlet filename: string = \"homewallpaper.jpg\";\nlet filePath: string = context.filesDir + '/' + filename;\nlet fd: number = fs.openSync(filePath, fs.OpenMode.READ_WRITE).fd;\ndeviceSettings.setHomeWallpaper(wantTemp, fd).then(() => {\n  console.info('Succeeded in setting home wallpaper');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to set home wallpaper. Code: ${err.code}, message: ${err.message}`);\n}).finally(() => {\n  fs.closeSync(fd);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicesettingssetunlockwallpaper20",
      children: "deviceSettings.setUnlockWallpaper20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setUnlockWallpaper(admin: Want, fd: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置锁屏壁纸，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ENTERPRISE_SET_WALLPAPER"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Customization.EnterpriseDeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "冲突规则："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-multi-mdm#%E8%A7%84%E5%88%993%E9%85%8D%E7%BD%AE",
        children: "配置"
      }), "。"]
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
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置为锁屏壁纸图片的文件描述符，可以通过file.fs的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
              children: "openSync"
            }), "接口获取应用沙箱目录下的图片文件描述符。壁纸图片大小不能超过100MB。"]
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
            children: "无返回结果的Promise对象。当设置锁屏壁纸失败后会抛出错误对象。"
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
            children: "9200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed. The application does not have the permission required to call the API."
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
        children: "import { deviceSettings } from '@kit.MDMKit';\nimport { common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo as fs }  from '@kit.CoreFileKit';\n\nlet wantTemp: Want = {\n  // 需根据实际情况进行替换\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EnterpriseAdminAbility'\n};\n\n// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\nconst context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n// 参数根据实际情况进行替换\nlet filename: string = \"lockwallpaper.jpg\";\nlet filePath: string = context.filesDir + '/' + filename;\nlet fd: number = fs.openSync(filePath, fs.OpenMode.READ_WRITE).fd;\ndeviceSettings.setUnlockWallpaper(wantTemp, fd).then(() => {\n  console.info('Succeeded in setting lock wallpaper');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to set lock wallpaper. Code: ${err.code}, message: ${err.message}`);\n});\n"
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
911970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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