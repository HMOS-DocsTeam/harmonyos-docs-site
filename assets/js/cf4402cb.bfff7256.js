"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247258"], {
416655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_pasteboard_get_pastedata_permission_guidelines_get_pastedata_permission_guidelines_md_cf4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-pasteboard-get-pastedata-permission-guidelines-get-pastedata-permission-guidelines-md-cf4.json
var site_docs_system_basicfun_basic_services_kit_pasteboard_get_pastedata_permission_guidelines_get_pastedata_permission_guidelines_md_cf4_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/get-pastedata-permission-guidelines","title":"申请访问剪贴板权限","description":"概述","source":"@site/docs/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/get-pastedata-permission-guidelines.md","sourceDirName":"system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines","slug":"/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"申请访问剪贴板权限","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/get-pastedata-permission-guidelines","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"示例服务器开发指导","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/update/sample-server-guidelines/"},"next":{"title":"使用剪贴板进行复制粘贴","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines/get-pastedata-permission-guidelines.md


const frontMatter = {
	title: '申请访问剪贴板权限',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/get-pastedata-permission-guidelines',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '申请访问剪贴板权限';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "访问剪贴板内容",
  "id": "访问剪贴板内容",
  "level": 2
}, {
  "value": "剪贴板弹窗适配优化",
  "id": "剪贴板弹窗适配优化",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "申请访问剪贴板权限",
        children: "申请访问剪贴板权限"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 12及之后，系统为提升用户隐私安全保护能力，剪贴板读取接口增加权限管控。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及接口如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdata9",
              children: "getData(callback: AsyncCallback<PasteData>): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取系统剪贴板内容，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdata9-1",
              children: "getData(): Promise<PasteData>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取系统剪贴板内容，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdatasync11",
              children: "getDataSync(): PasteData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取系统剪贴板内容, 此接口为同步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getunifieddata12",
              children: "getUnifiedData(): Promise<unifiedDataChannel.UnifiedData>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从系统剪贴板中读取统一数据对象的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getunifieddatasync12",
              children: "getUnifiedDataSync(): unifiedDataChannel.UnifiedData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从系统剪贴板中读取统一数据对象的数据，此接口为同步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_getdata",
              children: "OH_UdmfData* OH_Pasteboard_GetData (OH_Pasteboard *pasteboard, int *status)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getdatawithprogress15",
              children: "getDataWithProgress(params: GetDataParams): Promise<PasteData>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板的内容和进度，使用Promise异步回调，不支持对文件夹的拷贝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_getdatawithprogress",
              children: "OH_UdmfData* OH_Pasteboard_GetDataWithProgress(OH_Pasteboard* pasteboard, Pasteboard_GetDataParams* params, int* status)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板的数据以及粘贴进度，不支持对文件夹的拷贝。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(674219)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请访问剪贴板权限前，需提前判断剪贴板上的内容是否包含应用所需数据，包括不限于hasData检查是否有数据、hasDataType/getMimeTypes检查是否有应用所需类型、getChangeCount检查数据是否改变，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%89%AA%E8%B4%B4%E6%9D%BF%E5%BC%B9%E7%AA%97%E9%80%82%E9%85%8D%E4%BC%98%E5%8C%96",
        children: "剪贴板弹窗适配优化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "访问剪贴板内容",
      children: "访问剪贴板内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "剪贴板为应用提供如下两种访问内容的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用安全控件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/security-components/pastebutton",
            children: "使用粘贴控件"
          }), "访问剪贴板内容的应用，可以无需申请权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "已经使用了安全控件的应用无需做任何适配就可以访问剪贴板内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请ohos.permission.READ_PASTEBOARD权限"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohos.permission.READ_PASTEBOARD是受限的user_grant（用户授权）权限，使用自定义控件的应用申请此权限后，在用户授权场景下可访问剪贴板内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权限申请步骤："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["查看", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_pasteboard",
          children: "READ_PASTEBOARD"
        }), "介绍，审视应用是否符合申请该权限的使用场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releaseprofile-0000001914714796",
          children: "在AGC侧申请Profile文件"
        }), "，将用于后续的应用签名信息配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在module.json5配置文件中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过弹窗向", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "用户申请权限"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "剪贴板弹窗适配优化",
      children: "剪贴板弹窗适配优化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用申请剪贴板权限需要提前判断剪贴板上的内容是否包含所需数据，避免出现无效弹框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#hasdata9",
          children: "hasData"
        }), "判断剪贴板是否有数据，无数据则不访问剪贴板。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#hasdatatype11",
          children: "hasDataType"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getmimetypes14",
          children: "getMimeTypes"
        }), "判断是否包含应用当前场景支持处理的数据类型，如果没有对应的数据类型，则不访问剪贴板。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getchangecount18",
          children: "getChangeCount"
        }), "获取剪贴板的内容变化次数，与上次读取剪贴板时查询的变化次数比较是否一致，一致则剪贴板内容无变化，不访问剪贴板。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#detectpatterns13",
          children: "detectPatterns"
        }), "判断是否包含应用自身口令的格式，如果格式不匹配，则不访问剪贴板。应用读取口令后如果确认是自身的口令，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#cleardata9",
          children: "clearData"
        }), "清除剪贴板口令内容。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError, pasteboard } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, common, Permissions } from '@kit.AbilityKit';\nimport { preferences } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst permissions: Permissions[] = ['ohos.permission.READ_PASTEBOARD'];\nconst systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();\nconst patterns: pasteboard.Pattern[] = [pasteboard.Pattern.URL, pasteboard.Pattern.EMAIL_ADDRESS];\nlet dataPreferences: preferences.Preferences | null = null;\n// ...\nasync function isNeedGetPermissionFromUser(): Promise<boolean> {\n  try {\n    let hasData: boolean = await systemPasteboard.hasData();\n    if (!hasData) {\n      // 剪贴板不存在数据，无需申请权限\n      return false;\n    }\n    // 获取剪贴板的内容变化次数\n    let result: number = systemPasteboard.getChangeCount();\n    hilog.info(0xFF00, '[Sample_pasteboard]', 'Succeeded in getting the ChangeCount. Result: ${result}');\n    // 从 Preferences 中读取上次保存的 changeCount\n    let storedChangeCount: number = dataPreferences ? Number(dataPreferences.getSync('pasteboardChangeCount', 0)) : 0;\n    if (result === storedChangeCount) {\n      // 剪贴板无数据变化，无需申请权限\n      return false;\n    }\n  } catch (err) {\n    hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to get the ChangeCount. Cause: ${err.message}');\n    return false;\n  };\n\n  // 查询剪贴板是否存在应用所需数据类型\n  try {\n    // (可选)判断是否有应用需要的数据类型\n    let result: boolean = systemPasteboard.hasDataType(pasteboard.MIMETYPE_TEXT_PLAIN);\n    hilog.info(0xFF00, '[Sample_pasteboard]', 'Succeeded in checking the DataType. Result: ${result}');\n    if (!result) {\n      // 剪贴板不存在应用所需数据类型，无需申请权限\n      return false;\n    }\n    // (可选)涉及口令等应用自身特殊复制内容的，使用detectPatterns过滤口令格式\n    let data: pasteboard.Pattern[] = await systemPasteboard.detectPatterns(patterns);\n    if (patterns.sort().join('') != data.sort().join('')) {\n      hilog.info(0xFF00, '[Sample_pasteboard]', 'Not all needed patterns detected, no need to get data.');\n      return false;\n    }\n  } catch (err) {\n    hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to check the DataType. Cause:' + err.message);\n    return false;\n  };\n  return true;\n}\n\n@Entry\n@Component\nstruct Index {\n  // ...\n\n  build() {\n    Row() {\n      Column() {\n        // ...\n        Button('粘贴')\n          // ...\n          .onClick(() => {\n            const context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            if (!isNeedGetPermissionFromUser()) {\n              hilog.info(0xFF00, '[Sample_pasteboard]', 'No need to bring up the permission pop-up window');\n              return;\n            }\n            let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n            // requestPermissionsFromUser会判断权限的授权状态来决定是否唤起弹窗。\n            atManager.requestPermissionsFromUser(context, permissions).then((data) => {\n              let grantStatus: number[] = data.authResults;\n              for (const status of grantStatus) {\n                if (status === 0) {\n                  // 用户授权，使用get操作读取剪贴板内容。\n                  // ...\n                  // 执行判断口令逻辑，如果是本应用口令，建议获取完数据后使用cleardata清除剪贴板口令内容\n                  systemPasteboard.clearData().then((data: void) => {\n                    hilog.info(0xFF00, '[Sample_pasteboard]', 'Succeeded in clearing the pasteboard.');\n                  }).catch((err: BusinessError) => {\n                    hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to clear the pasteboard. Cause: ${err.message}');\n                  });\n                  // 获取当前 ChangeCount\n                  let currentChangeCount: number = systemPasteboard.getChangeCount();\n                  hilog.info(0xFF00, '[Sample_pasteboard]', 'Current ChangeCount: ' + currentChangeCount);\n                  // 更新 Preferences 中的 ChangeCount\n                  if (dataPreferences) {\n                    dataPreferences.putSync('pasteboardChangeCount', currentChangeCount);\n                    dataPreferences.flushSync(); // 确保数据写入持久化存储\n                    hilog.info(0xFF00, '[Sample_pasteboard]', 'ChangeCount has been updated to: ' + currentChangeCount);\n                  }\n                } else {\n                  // 用户拒绝授权，提示用户必须授权才能访问当前页面的功能，并引导用户到系统设置中打开相应的权限。\n                  return;\n                }\n              }\n              // 授权成功。\n            }).catch((err: BusinessError) => {\n              hilog.error(0xFF00, '[Sample_pasteboard]', 'Failed to request permissions from user. ');\n            })\n          })\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
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
674219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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