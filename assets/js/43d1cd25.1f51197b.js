"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["253376"], {
429703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_basic_services_api_basic_services_arkts_device_management_arkts_js_apis_device_info_js_apis_device_info_md_43d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-basic-services-api-basic-services-arkts-device-management-arkts-js-apis-device-info-js-apis-device-info-md-43d.json
var site_docs_ref_system_basicfun_api_basic_services_api_basic_services_arkts_device_management_arkts_js_apis_device_info_js_apis_device_info_md_43d_namespaceObject = JSON.parse('{"id":"system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info","title":"@ohos.deviceInfo (设备信息)","description":"本模块提供终端设备信息查询，开发者不可配置。","source":"@site/docs-ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info.md","sourceDirName":"system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info","slug":"/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.deviceInfo (设备信息)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-device-info"},"sidebar":"ref","previous":{"title":"@ohos.batteryInfo (电量信息)","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-battery-info/js-apis-battery-info"},"next":{"title":"@ohos.power (系统电源管理)","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-power/js-apis-power"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-device-info/js-apis-device-info.md


const frontMatter = {
	title: '@ohos.deviceInfo (设备信息)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-device-info'
};
const contentTitle = '@ohos.deviceInfo (设备信息)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "常量",
  "id": "常量",
  "level": 2
}, {
  "value": "PerformanceClassLevel19+",
  "id": "performanceclasslevel19",
  "level": 2
}, {
  "value": "DeviceTypes20+",
  "id": "devicetypes20",
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
        id: "ohosdeviceinfo-设备信息",
        children: "@ohos.deviceInfo (设备信息)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供终端设备信息查询，开发者不可配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(236971)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分参数返回值为default的，会在正式发布的版本中配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口返回设备常量信息，建议应用只调用一次，不需要频繁调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { deviceInfo } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常量",
      children: "常量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872847)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未特殊说明的字段，数据长度最大值为96字节。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Startup.SystemInfo。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限"
        })
      }), "：以下各项所需要的权限有所不同，详见下表。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备类型。详细请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
              children: "deviceTypes标签"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。  示例：phone"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manufacture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备厂家名称。  示例：HUAWEI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "brand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备品牌名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。  示例：HUAWEI"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marketName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外部产品系列。  示例：HUAWEI Mate 60 Pro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productSeries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产品系列。  示例：ALN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["认证型号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。  示例：ALN-AL00"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productModelAlias14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["认证型号别名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 14开始，该接口支持在元服务中使用。  示例：TAS-AL00"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "softwareModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部软件子型号。  示例：ALN-AL00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hardwareModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件版本号。  示例：HL1CMSM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hardwareProfile(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬件Profile。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  从API version 6 开始支持，从API version 9 开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/syscap/syscap",
              children: "系统能力SystemCapability"
            }), "替代。  示例：default"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "serial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备序列号SN(Serial Number)。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：可作为设备唯一识别码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "需要权限"
              })
            }), "：ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业定制应用申请)  示例：序列号随设备差异"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bootloaderVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootloader版本号。  示例：bootloader"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abiList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用二进制接口（Abi）。  示例：arm64-v8a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "securityPatchTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全补丁级别。  示例：2024/1/1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产品版本。  示例：ALN-AL00 5.0.0.1(XXX)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "incrementalVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "差异版本号。  示例：default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "osReleaseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统的发布类型，取值为：  - Canary：面向特定开发者发布的早期预览版本，不承诺API稳定性。  - Beta：面向开发者公开发布的Beta版本，不承诺API稳定性。  - Release：面向开发者公开发布的正式版本，承诺API稳定性。  示例：Canary1/Beta2/Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "osFullName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统版本，版本格式OpenHarmony-x.x.x.x。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。  示例：OpenHarmony-5.0.0.1(Canary1)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "majorVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Major版本号，随主版本更新增加，值为osFullName中的第一位数值，建议直接使用deviceInfo.majorVersion获取，可提升效率，不建议开发者解析osFullName获取。  示例：5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "seniorVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Senior版本号，随局部架构、重大特性增加，值为osFullName中的第二位数值，建议直接使用deviceInfo.seniorVersion获取，可提升效率，不建议开发者自主解析osFullName获取。  示例：0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "featureVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature版本号，标识规划的新特性版本，值为osFullName中的第三位数值，建议直接使用deviceInfo.featureVersion获取，可提升效率，不建议开发者自主解析osFullName获取。  示例：0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build版本号，标识编译构建的版本号，值为osFullName中的第四位数值，建议直接使用deviceInfo.buildVersion获取，可提升效率，不建议开发者自主解析osFullName获取。  示例：1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sdkApiVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统软件API版本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 14开始，该接口支持在元服务中使用。  示例：12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "firstApiVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首个版本系统软件API版本。  示例：3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本ID。由deviceType、manufacture、brand、productSeries、osFullName、productModel、softwareModel、sdkApiVersion、incrementalVersion、buildType拼接组成。  示例：wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建类型。  示例：default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildUser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建用户。  示例：default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildHost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建主机。  示例：default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建时间。  示例：default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildRootHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建版本Hash。  示例：default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "udid7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备Udid。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：数据长度为65字节。可作为设备唯一识别码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "需要权限"
              })
            }), "：ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业类应用申请)  示例：9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributionOSName10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发行版系统名称。  示例：OpenHarmony"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributionOSVersion10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发行版系统版本号。格式为x.x.x，x是数字  示例：5.0.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributionOSApiVersion10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发行版系统api版本。  示例：50001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributionOSApiName13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发行版系统api版本名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributionOSReleaseType10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发行版系统类型。  示例：Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ODID12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者匿名设备标识符。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ODID值会在以下场景重新生成"
              })
            }), "：  手机恢复出厂设置。  同一设备上同一个开发者(developerId相同)的应用全部卸载后重新安装时。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ODID生成规则"
              })
            }), "：  根据签名信息里developerId解析出的groupId生成，developerId规则为groupId.developerId，若无groupId则取整个developerId作为groupId。  同一设备上运行的同一个开发者(developerId相同)的应用，ODID相同。  同一个设备上不同开发者(developerId不同)的应用，ODID不同。  不同设备上同一个开发者(developerId相同)的应用，ODID不同。  不同设备上不同开发者(developerId不同)的应用，ODID不同。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：数据长度为37字节(包含结束符)。  示例：1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "diskSN15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["硬盘序列号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), " ：该字段只能在2in1设备进行查询，其他设备查询结果为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "需要权限"
              })
            }), "：ohos.permission.ACCESS_DISK_PHY_INFO  示例：2502EM400567"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "performanceClass19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#performanceclasslevel19",
              children: "PerformanceClassLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述设备能力等级，基于CPU、内存、存储读写性能和屏幕分辨率等因素综合评估。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chipType21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备CPU芯片型号  示例：xxxxx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bootCount21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前设备重启次数，获取失败时返回-1  示例：100"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    import { deviceInfo } from '@kit.BasicServicesKit';\n\n    let deviceTypeInfo: string = deviceInfo.deviceType;\n    // 输出结果：the value of the deviceType is :wearable\n    console.info('the value of the deviceType is :' + deviceTypeInfo);\n\n    let manufactureInfo: string = deviceInfo.manufacture;\n    // 输出结果：the value of the manufacture is :HUAWEI\n    console.info('the value of the manufactureInfo is :' + manufactureInfo);\n\n    let brandInfo: string = deviceInfo.brand;\n    // 输出结果：the value of the brand is :HUAWEI\n    console.info('the value of the device brand is :' + brandInfo);\n\n    let marketNameInfo: string = deviceInfo.marketName;\n    // 输出结果：the value of the marketName is :Mate XX\n    console.info('the value of the deviceInfo marketName is :' + marketNameInfo);\n\n    let productSeriesInfo: string = deviceInfo.productSeries;\n    // 输出结果：the value of the productSeries is :TAS\n    console.info('the value of the deviceInfo productSeries is :' + productSeriesInfo);\n\n    let productModelInfo: string = deviceInfo.productModel;\n    // 输出结果：the value of the productModel is :TAS-AL00\n    console.info('the value of the deviceInfo productModel is :' + productModelInfo);\n\n    let productModelAliasInfo: string = deviceInfo.productModelAlias;\n    console.info('the value of the deviceInfo productModelAlias is :' + productModelAliasInfo);\n\n    let softwareModelInfo: string = deviceInfo.softwareModel;\n    // 输出结果：the value of the softwareModel is :TAS-AL00\n    console.info('the value of the deviceInfo softwareModel is :' + softwareModelInfo);\n\n    let hardwareModelInfo: string = deviceInfo.hardwareModel;\n    // 输出结果：the value of the hardwareModel is :TASA00CVN1\n    console.info('the value of the deviceInfo hardwareModel is :' + hardwareModelInfo);\n\n    let serialInfo: string = deviceInfo.serial;\n    // 输出结果：the value of the serial is :序列号随设备差异\n    console.info('the value of the deviceInfo serial is :' + serialInfo);\n\n    let bootloaderVersionInfo: string = deviceInfo.bootloaderVersion;\n    // 输出结果：the value of the bootloaderVersion is :bootloader\n    console.info('the value of the deviceInfo bootloaderVersion is :' + bootloaderVersionInfo);\n\n    let abiListInfo: string = deviceInfo.abiList;\n    // 输出结果：the value of the abiList is :arm64-v8a\n    console.info('the value of the deviceInfo abiList is :' + abiListInfo);\n\n    let securityPatchTagInfo: string = deviceInfo.securityPatchTag;\n    // 输出结果：the value of the securityPatchTag is :2021/01/01\n    console.info('the value of the deviceInfo securityPatchTag is :' + securityPatchTagInfo);\n\n    let displayVersionInfo: string = deviceInfo.displayVersion;\n    // 输出结果：the value of the displayVersion is :XXX X.X.X.X\n    console.info('the value of the deviceInfo displayVersion is :' + displayVersionInfo);\n\n    let incrementalVersionInfo: string = deviceInfo.incrementalVersion;\n    // 输出结果：the value of the incrementalVersion is :default\n    console.info('the value of the deviceInfo incrementalVersion is :' + incrementalVersionInfo);\n\n    let osReleaseTypeInfo: string = deviceInfo.osReleaseType;\n    // 输出结果：the value of the osReleaseType is :Release\n    console.info('the value of the deviceInfo osReleaseType is :' + osReleaseTypeInfo);\n\n    let osFullNameInfo: string = deviceInfo.osFullName;\n    // 输出结果：the value of the osFullName is :OpenHarmony-5.0.0.1\n    console.info('the value of the deviceInfo osFullName is :' + osFullNameInfo);\n\n    let majorVersionInfo: number = deviceInfo.majorVersion;\n    // 输出结果：the value of the majorVersion is :5\n    console.info('the value of the deviceInfo majorVersion is :' + majorVersionInfo);\n\n    let seniorVersionInfo: number = deviceInfo.seniorVersion;\n    // 输出结果：the value of the seniorVersion is :0\n    console.info('the value of the deviceInfo seniorVersion is :' + seniorVersionInfo);\n\n    let featureVersionInfo: number = deviceInfo.featureVersion;\n    // 输出结果：the value of the featureVersion is :0\n    console.info('the value of the deviceInfo featureVersion is :' + featureVersionInfo);\n\n    let buildVersionInfo: number = deviceInfo.buildVersion;\n    // 输出结果：the value of the buildVersion is :1\n    console.info('the value of the deviceInfo buildVersion is :' + buildVersionInfo);\n\n    let sdkApiVersionInfo: number = deviceInfo.sdkApiVersion;\n    // 输出结果：the value of the sdkApiVersion is :12\n    console.info('the value of the deviceInfo sdkApiVersion is :' + sdkApiVersionInfo);\n\n    let firstApiVersionInfo: number = deviceInfo.firstApiVersion;\n    // 输出结果：the value of the firstApiVersion is :3\n    console.info('the value of the deviceInfo firstApiVersion is :' + firstApiVersionInfo);\n\n    let versionIdInfo: string = deviceInfo.versionId;\n    // 输出结果：the value of the versionId is :wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog\n    console.info('the value of the deviceInfo versionId is :' + versionIdInfo);\n\n    let buildTypeInfo: string = deviceInfo.buildType;\n    // 输出结果：the value of the buildType is :default\n    console.info('the value of the deviceInfo buildType is :' + buildTypeInfo);\n\n    let buildUserInfo: string = deviceInfo.buildUser;\n    // 输出结果：the value of the buildUser is :default\n    console.info('the value of the deviceInfo buildUser is :' + buildUserInfo);\n\n    let buildHostInfo: string = deviceInfo.buildHost;\n    // 输出结果：the value of the buildHost is :default\n    console.info('the value of the deviceInfo buildHost is :' + buildHostInfo);\n\n    let buildTimeInfo: string = deviceInfo.buildTime;\n    // 输出结果：the value of the buildTime is :default\n    console.info('the value of the deviceInfo buildTime is :' + buildTimeInfo);\n\n    let buildRootHashInfo: string = deviceInfo.buildRootHash;\n    // 输出结果：the value of the buildRootHash is :default\n    console.info('the value of the deviceInfo buildRootHash is :' + buildRootHashInfo);\n\n    let udid: string = deviceInfo.udid;\n    // 输出结果：the value of the udid is :9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412\n    console.info('the value of the deviceInfo udid is :' + udid);\n\n    let distributionOSName: string = deviceInfo.distributionOSName\n    // 输出结果：the value of the distributionOSName is :OpenHarmony\n    console.info('the value of the deviceInfo distributionOSName is :' + distributionOSName);\n\n    let distributionOSVersion: string = deviceInfo.distributionOSVersion\n    // 输出结果：the value of the distributionOSVersion is :5.0.0\n    console.info('the value of the deviceInfo distributionOSVersion is :' + distributionOSVersion);\n\n    let distributionOSApiVersion: number = deviceInfo.distributionOSApiVersion\n    // 输出结果：the value of the distributionOSApiVersion is :500001\n    console.info('the value of the deviceInfo distributionOSApiVersion is :' + distributionOSApiVersion);\n\n    let distributionOSApiName: string = deviceInfo.distributionOSApiName\n    console.info('the value of the deviceInfo distributionOSApiName is :' + distributionOSApiName);\n\n    let distributionOSReleaseType: string = deviceInfo.distributionOSReleaseType\n    // 输出结果：the value of the distributionOSReleaseType is :Release\n    console.info('the value of the deviceInfo distributionOSReleaseType is :' + distributionOSReleaseType);\n\n    let odid: string = deviceInfo.ODID;\n    // 输出结果：the value of the ODID is :1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n    console.info('the value of the deviceInfo odid is :' + odid);\n\n    let diskSN: string = deviceInfo.diskSN;\n    // 输出结果：the value of the deviceInfo diskSN is :2502EM400567\n    console.info('the value of the deviceInfo diskSN is :' + diskSN);\n\n    let performanceClass = deviceInfo.performanceClass;\n    // 输出结果：the value of the deviceInfo performanceClass is :0\n    console.info('the value of the deviceInfo performanceClass is :' + performanceClass);\n\n    let chipType: string = deviceInfo.chipType;\n    // 输出结果：the value of the deviceInfo chipType is :xxxxx\n    console.info('the value of the deviceInfo chipType is :' + chipType);\n\n    let bootCount: number = deviceInfo.bootCount\n    // 输出结果：the value of the bootCount is :100\n    console.info('the value of the deviceInfo bootCount is :' + bootCount);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performanceclasslevel19",
      children: "PerformanceClassLevel19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示设备能力定级的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Startup.SystemInfo"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CLASS_LEVEL_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备能力定级为高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLASS_LEVEL_MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备能力定级为中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLASS_LEVEL_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备能力定级为低。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicetypes20",
      children: "DeviceTypes20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备类型枚举值，可用于校验deviceType的返回值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Startup.SystemInfo"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "TYPE_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'default'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_PHONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'phone'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_TABLET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'tablet'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_2IN1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'2in1'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_TV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'tv'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智慧屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_WEARABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'wearable'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智能手表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE_CAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'car'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "车机。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    let deviceTypesInfoDefault: string = deviceInfo.DeviceTypes.TYPE_DEFAULT;\n    // 输出结果：the value of the DeviceTypes is :default\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfoDefault);\n\n    let deviceTypesInfoPhone: string = deviceInfo.DeviceTypes.TYPE_PHONE;\n    // 输出结果：the value of the DeviceTypes is :phone\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfoPhone);\n\n    let deviceTypesInfoTablet: string = deviceInfo.DeviceTypes.TYPE_TABLET;\n    // 输出结果：the value of the DeviceTypes is :tablet\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfoTablet);\n\n    let deviceTypesInfo2IN1: string = deviceInfo.DeviceTypes.TYPE_2IN1;\n    // 输出结果：the value of the DeviceTypes is :2in1\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfo2IN1);\n\n    let deviceTypesInfoTV: string = deviceInfo.DeviceTypes.TYPE_TV;\n    // 输出结果：the value of the DeviceTypes is :tv\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfoTV);\n\n    let deviceTypesInfoWearable: string = deviceInfo.DeviceTypes.TYPE_WEARABLE;\n    // 输出结果：the value of the DeviceTypes is :wearable\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfoWearable);\n\n    let deviceTypesInfoCar: string = deviceInfo.DeviceTypes.TYPE_CAR;\n    // 输出结果：the value of the DeviceTypes is :car\n    console.info('the value of the DeviceTypes is :' + deviceTypesInfoCar);\n"
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
236971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
872847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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