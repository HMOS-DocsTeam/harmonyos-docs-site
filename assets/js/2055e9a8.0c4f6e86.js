"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["541535"], {
398792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_taas_dev_devicesecurity_taas_securelocation_devicesecurity_taas_securelocation_md_205_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-taas-dev-devicesecurity-taas-securelocation-devicesecurity-taas-securelocation-md-205.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_taas_dev_devicesecurity_taas_securelocation_devicesecurity_taas_securelocation_md_205_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation/devicesecurity-taas-securelocation","title":"安全地理位置场景","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation/devicesecurity-taas-securelocation.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation","slug":"/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"安全地理位置场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-taas-securelocation","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"安全摄像头场景","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera/"},"next":{"title":"安全图像压缩、裁剪场景","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-secimage-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securelocation/devicesecurity-taas-securelocation.md


const frontMatter = {
	title: '安全地理位置场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-taas-securelocation',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '安全地理位置场景';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "安全地理位置场景",
        children: "安全地理位置场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在安全地理位置场景中，通过创建证明密钥、打开证明会话的方式，对从GPS硬件或网络位置获取到的地理位置信息进行签名，确保地理位置信息的真实性和完整性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该特性需要设备支持安全地理位置功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#initializeattestcontext",
        children: "initializeAttestContext"
      }), "接口成功初始化安全地理位置的证明会话后，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#getcurrentsecurelocation",
        children: "getCurrentSecureLocation"
      }), "接口尝试获取安全地理位置，当接口异常并返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-taas/devicesecurity-arktsapi-errcode-taas#section1011500014-%E4%BD%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E4%B8%8D%E5%8F%AF%E7%94%A8",
        children: "ATTEST_ERROR_LOCATION_SERVICE_UNAVAILABLE"
      }), "时，当前设备不支持安全地理位置。具体判断方法参考如下示例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { trustedAppService } from '@kit.DeviceSecurityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 初始化安全地理位置证明会话后，获取安全地理位置信息，以精度优先为例\nconst timeout = 5000; // 获取安全地理位置的超时时间，单位为毫秒\nconst priority = trustedAppService.LocatingPriority.PRIORITY_ACCURACY; // 采用精度优先策略\nlet secureLocation: trustedAppService.SecureLocation;\n// 获取当前安全地理位置信息\ntry {\n  secureLocation = await trustedAppService.getCurrentSecureLocation(timeout, priority);\n} catch (err) {\n  const error = err as BusinessError;\n  if (error.code == trustedAppService.AttestExceptionErrCode.ATTEST_ERROR_LOCATION_SERVICE_UNAVAILABLE) {\n      console.error(`current device not support secure location`);\n  } else {\n      console.error(`Failed to get current secure location, message:${error.message}, code:${error.code}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80698)/* ["default"] */.A) + "",
        width: "1003",
        height: "780"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用获取安全地理位置的优先级策略有两种，分别是精度优先和速度优先。如果选择精度优先策略，可信应用服务会优先返回GPS的结果，GPS获取超时后返回网络地理位置；而如果选择速度优先策略，可信应用服务会返回从二者中最先获取到的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#createattestkey",
              children: "createAttestKey"
            }), "(options: AttestOptions): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建证明密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#initializeattestcontext",
              children: "initializeAttestContext"
            }), "(userData: string, options: AttestOptions): Promise<AttestReturnResult>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化证明会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#finalizeattestcontext",
              children: "finalizeAttestContext"
            }), "(options: AttestOptions): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束证明会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#destroyattestkey",
              children: "destroyAttestKey"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁证明密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#getcurrentsecurelocation",
              children: "getCurrentSecureLocation"
            }), "(timeout: number, priority: LocatingPriority): Promise<SecureLocation>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取安全地理位置信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请位置权限，权限名称为“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionapproximately_location",
            children: "ohos.permission.APPROXIMATELY_LOCATION"
          }), "”和“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionlocation",
            children: "ohos.permission.LOCATION"
          }), "”，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入可信应用服务模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { trustedAppService } from '@kit.DeviceSecurityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建证明密钥并初始化证明会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建证明密钥的参数\nconst createProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_ALGORITHM,\n    value: trustedAppService.AttestKeyAlg.ATTEST_ALG_ECC\n  },\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_KEY_SIZE,\n    value: trustedAppService.AttestKeySize.ATTEST_ECC_KEY_SIZE_256\n  }\n];\nconst createOptions: trustedAppService.AttestOptions = {\n  properties: createProperties\n};\n// 初始化证明会话的参数\nconst userData = \"trusted_app_service_demo\" // 示例值，实际值请自行生成，长度在16到127 Bytes之间\nconst initProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_TYPE,\n    value: trustedAppService.AttestType.ATTEST_TYPE_LOCATION\n  },\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_ID,\n    value: BigInt(0) // 此参数在安全地理位置场景下不生效\n  }\n];\nconst initOptions: trustedAppService.AttestOptions = {\n  properties: initProperties\n};\n// 创建证明密钥并打开证明会话\nlet certChainList: Array<string>;\ntry {\n  await trustedAppService.createAttestKey(createOptions);\n  const result = await trustedAppService.initializeAttestContext(userData, initOptions);\n  certChainList = result.certChains;\n} catch (err) {\n  const error = err as BusinessError;\n  console.error(`Failed to initialize attest context, message:${error.message}, code:${error.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取安全地理位置信息，以精度优先为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const timeout = 5000; // 获取安全地理位置的超时时间，单位为毫秒\nconst priority = trustedAppService.LocatingPriority.PRIORITY_ACCURACY; // 采用精度优先策略\nlet secureLocation: trustedAppService.SecureLocation;\n// 获取当前安全地理位置信息\ntry {\n  secureLocation = await trustedAppService.getCurrentSecureLocation(timeout, priority);\n} catch (err) {\n  const error = err as BusinessError;\n  console.error(`Failed to get current secure location, message:${error.message}, code:${error.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束证明会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 结束证明会话的参数\nconst finalProperties: Array<trustedAppService.AttestParam> = [\n  {\n    tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_TYPE,\n    value: trustedAppService.AttestType.ATTEST_TYPE_LOCATION\n  }\n];\nconst finalOptions: trustedAppService.AttestOptions = {\n  properties: finalProperties,\n};\n// 结束证明会话\ntry {\n  await trustedAppService.finalizeAttestContext(finalOptions);\n} catch (err) {\n  const error = err as BusinessError;\n  console.error(`Failed to finalize attest context, message:${error.message}, code:${error.code}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要销毁证明密钥，请在结束证明会话后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-taas-api/devicesecurity-taas-api#destroyattestkey",
            children: "destroyAttestKey"
          }), "接口。"]
        }), "\n"]
      }), "\n"]
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
80698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438433-22e8933579eb19831623718aac258ef8.jpg");

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