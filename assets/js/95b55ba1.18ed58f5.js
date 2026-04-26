"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["77798"], {
225888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certmanager_certmanagerdialog_guidelines_certmanagerdialog_guidelines_md_95b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certmanager-certmanagerdialog-guidelines-certmanagerdialog-guidelines-md-95b.json
var site_docs_system_security_device_certificate_kit_certmanager_certmanagerdialog_guidelines_certmanagerdialog_guidelines_md_95b_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/certmanagerdialog-guidelines","title":"证书管理对话框开发指导","description":"本开发指导需使用API version 13及以上版本SDK。","source":"@site/docs/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/certmanagerdialog-guidelines.md","sourceDirName":"system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines","slug":"/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"证书管理对话框开发指导","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanagerdialog-guidelines","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CA证书开发指导","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/"},"next":{"title":"Device Security Kit简介","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/certmanagerdialog-guidelines.md


const frontMatter = {
	title: '证书管理对话框开发指导',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanagerdialog-guidelines',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书管理对话框开发指导';

const assets = {

};



const toc = [{
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
        id: "证书管理对话框开发指导",
        children: "证书管理对话框开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(838129)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导需使用API version 13及以上版本SDK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书管理对话框，可用于拉起证书管理页面并管理证书，如安装、存储、使用、销毁证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog",
        children: "@ohos.security.certManagerDialog (证书管理对话框模块)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上场景涉及的常用接口如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "实例名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManagerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openCertificateManagerDialog(context: common.Context, pageType: CertificateDialogPageType): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起证书管理对话框，显示相应的页面，使用Promise方式异步返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManagerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openInstallCertificateDialog(context: common.Context, certType: CertificateType, certScope: CertificateScope, cert: Uint8Array): Promise<string>14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用安装证书对话框接口进行证书安装，使用Promise方式异步返回安装证书的唯一标识符。  仅2in1设备支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManagerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openUninstallCertificateDialog(context: common.Context, certType: CertificateType, certUri: string): Promise<void>18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用删除证书对话框接口删除指定的证书，使用Promise方式异步返回结果。  仅2in1设备支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManagerDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openCertificateDetailDialog(context: common.Context, cert: Uint8Array, property: CertificateDialogProperty): Promise<void>18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用查看证书详情的对话框接口，展示证书的详情。使用Promise方式异步返回结果。  仅2in1设备支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权限申请和声明。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要申请的权限：ohos.permission.ACCESS_CERT_MANAGER"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请流程请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode",
            children: "申请应用权限"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["声明权限请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { certificateManagerDialog } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { UIContext } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起证书管理界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { certificateManagerDialog } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\nasync function certificateManagerDialogSample() {\n  /* context为应用的上下文信息，由调用方自行获取，此处仅为示例 */\n  let context: common.Context = new UIContext().getHostContext() as common.Context;\n  /* pageType为页面类型，此处赋值PAGE_MAIN，即拉起证书管理主界面 */\n  let pageType: certificateManagerDialog.CertificateDialogPageType =\n    certificateManagerDialog.CertificateDialogPageType.PAGE_MAIN;\n  try {\n    certificateManagerDialog.openCertificateManagerDialog(context, pageType).then(() => {\n      console.info('Succeeded in opening certificate manager dialog.');\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to open certificate manager dialog. Code: ${err.code}, message: ${err.message}`);\n    })\n  } catch (error) {\n    console.error(`Failed to open certificate manager dialog. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用安装证书对话框接口进行证书安装、调用删除证书对话框接口进行证书删除、调用查看证书详情的对话框接口、展示证书的详情。以上场景仅2in1设备支持。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { certificateManagerDialog } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { UIContext } from '@kit.ArkUI';\nimport { util } from '@kit.ArkTS';\n\nlet certType = certificateManagerDialog.CertificateType.CA_CERT;\nlet certUri: string = '';\n/* 用户CA证书数据需要业务赋值。 */\nlet cert: Uint8Array = new util.TextEncoder().encodeInto(`-----BEGIN CERTIFICATE-----\nMIIDSTCCAjECFFRZKkiBuiZ+zqfjJOg05yeTePM9MA0GCSqGSIb3DQEBCwUAMGEx\nCzAJBgNVBAYTAmNuMQ0wCwYDVQQIDARvaG9zMQswCQYDVQQHDAJjbTEhMB8GA1UE\nCgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMRMwEQYDVQQDDApUZXN0Um9vdENB\nMB4XDTI1MTAxNTA3MzE0MloXDTI2MTAxNTA3MzE0MlowYTELMAkGA1UEBhMCY24x\nDTALBgNVBAgMBG9ob3MxCzAJBgNVBAcMAmNtMSEwHwYDVQQKDBhJbnRlcm5ldCBX\naWRnaXRzIFB0eSBMdGQxEzARBgNVBAMMClRlc3RSb290Q0EwggEiMA0GCSqGSIb3\nDQEBAQUAA4IBDwAwggEKAoIBAQC5p4eoQJyTBvn01M8SwEi8dguTIPGmD3a8SGIj\nKXaB6ltv742H5EBjgk+zC8+Gis0ehEqwk3pVnnmByeYvrERxsUqDt69/FndlfTxI\nC2/2MxWVk97g/6TpJ5Lt2mTrH+rSOgUDyU27aPn12ZnDF1mLsT+U+CBmfj4+J4tW\nyzdFNj7kcKMQQok+L1dtFlDNMNpMA1UqADzoC3XgFl49CpDtoFId9DVsgUPkPfX1\n89cCunomgJe1b17FzxfNu2yhbl5cnUEjeHGbmBgBIB7uG8tjGstnDPx7fl3Xrj+Q\nfRrwCpVKD9RxoyUBFbHttixxY5bHFUdvHRB251sxD+JfxxxLAgMBAAEwDQYJKoZI\nhvcNAQELBQADggEBAEGbNqcMU7C/lrIytI/OTtzYbkWDsfnRSPxlCUoZ2Xh3S83A\nSNQ9Ze5tDwWdW9Hlde9May6hzvuQSYeMLLnyM8WGResXCs7UbnSQe7fGfUu+xDGb\nh4tamnRFtZydxCCgDT9lIdHeutlPwOuxlR4HXpeowGeGJX0iFrdo6D0iXAY34hic\nyLQzuBqE/1s3PLA83Fi4EOOOV7P/ahmOLtBFlHbySHV68i9PNeNr9SDykH9/RgI9\n5G8ZTZj8oSmbTGGtfNuVXybMyJMRlz6BkxG++kYcg7STRBqHGX7RrWHiupguNreO\n4sJBdSpWBq172ZEyOvTqC4xX9lLYqwwBQ++TFoo=\n-----END CERTIFICATE-----`);\n\nasync function installUserCADialogSample() {\n  /* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\n  let context: common.Context = new UIContext().getHostContext() as common.Context;\n  let certScope = certificateManagerDialog.CertificateScope.CURRENT_USER; /* 安装在当前用户下。 */\n  try {\n    /* 安装证书。 */\n    certificateManagerDialog.openInstallCertificateDialog(context, certType, certScope, cert).then((result) => {\n      console.info('Succeeded in opening install ca dialog.');\n      certUri = result;\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to open install ca dialog. Code: ${err.code}, message: ${err.message}`);\n    })\n  } catch (error) {\n    console.error(`Failed to open install ca dialog. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n\nasync function uninstallUserCADialogSample() {\n  /* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\n  let context: common.Context = new UIContext().getHostContext() as common.Context;\n  try {\n    /* 删除证书。 */\n    certificateManagerDialog.openUninstallCertificateDialog(context, certType, certUri).then(() => {\n      console.info('Succeeded in opening uninstall ca dialog.');\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to open uninstall ca dialog. Code: ${err.code}, message: ${err.message}`);\n    })\n  } catch (error) {\n    console.error(`Failed to open uninstall ca dialog. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n\nasync function certDetailDialogSample() {\n  /* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\n  let context: common.Context = new UIContext().getHostContext() as common.Context;\n  try {\n    let property: certificateManagerDialog.CertificateDialogProperty = {\n      showInstallButton: false    /* 不显示安装按钮。 */\n    };\n    /* 显示证书详情。 */\n    certificateManagerDialog.openCertificateDetailDialog(context, cert, property).then(() => {\n      console.info('Succeeded in opening show ca detail dialog.');\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to open show ca detail dialog. Code: ${err.code}, message: ${err.message}`);\n    })\n  } catch (error) {\n    console.error(`Failed to open show ca detail dialog. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
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
838129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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