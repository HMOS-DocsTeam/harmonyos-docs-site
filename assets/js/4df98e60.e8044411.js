"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["310904"], {
730545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certmanager_certmanager_ca_certs_guidelines_certmanager_ca_certs_guidelines_md_4df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certmanager-certmanager-ca-certs-guidelines-certmanager-ca-certs-guidelines-md-4df.json
var site_docs_system_security_device_certificate_kit_certmanager_certmanager_ca_certs_guidelines_certmanager_ca_certs_guidelines_md_4df_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/certmanager-ca-certs-guidelines","title":"CA证书开发指导","description":"本开发指导需使用API version 12及以上版本SDK。","source":"@site/docs/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/certmanager-ca-certs-guidelines.md","sourceDirName":"system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines","slug":"/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CA证书开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-ca-certs-guidelines","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用证书凭据开发指导","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/"},"next":{"title":"证书管理对话框开发指导","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/certmanager-ca-certs-guidelines.md


const frontMatter = {
	title: 'CA证书开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-ca-certs-guidelines',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'CA证书开发指导';

const assets = {

};



const toc = [{
  "value": "场景说明",
  "id": "场景说明",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ca证书开发指导",
        children: "CA证书开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(25586)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导需使用API version 12及以上版本SDK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景说明",
      children: "场景说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["安装用户CA证书。调用者可以将用户CA证书安装在当前用户或者设备公共位置下。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "安装在当前用户时，仅当前用户的业务可以访问该证书。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "安装在设备公共位置下，所有用户下的业务都可以访问。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取用户CA证书列表。可以选择获取当前用户或者设备公共位置下的用户CA证书列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取用户CA证书详情。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除指定的用户CA证书。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取CA证书的存储路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanager/js-apis-certmanager",
        children: "@ohos.security.certManager (证书管理模块)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上场景涉及的常用接口如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "installUserTrustedCertificateSync(cert: Uint8Array, certScope: CertScope) : CMResult18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装用户CA证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uninstallUserTrustedCertificateSync(certUri: string) : void18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除用户CA证书。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getAllUserTrustedCertificates(): Promise<CMResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前用户和设备公共位置的所有用户根CA证书列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getAllUserTrustedCertificates(scope: CertScope): Promise<CMResult>18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据证书的位置获取用户根CA证书列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getUserTrustedCertificate(certUri: string): Promise<CMResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用户根CA证书的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getCertificateStorePath(property: CertStoreProperty): string18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取证书的存储路径。"
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
          children: "使用安装和删除接口需要申请权限：ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT或ohos.permission.ACCESS_USER_TRUSTED_CERT"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用获取列表和获取详情接口需要申请权限：ohos.permission.ACCESS_CERT_MANAGER"
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
            children: "import { certificateManager } from '@kit.DeviceCertificateKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装用户CA证书、获取用户CA证书列表、获取用户证书详情、删除用户CA证书。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { certificateManager } from '@kit.DeviceCertificateKit';\nimport { util } from '@kit.ArkTS';\n\nasync function userCASample() {\n  /* 安装的用户CA证书数据需要业务赋值。 */\n  let userCAData: Uint8Array = new util.TextEncoder().encodeInto('-----BEGIN CERTIFICATE-----\\n' +\n    'MIIDSTCCAjECFFRZKkiBuiZ+zqfjJOg05yeTePM9MA0GCSqGSIb3DQEBCwUAMGEx\\n' +\n    'CzAJBgNVBAYTAmNuMQ0wCwYDVQQIDARvaG9zMQswCQYDVQQHDAJjbTEhMB8GA1UE\\n' +\n    'CgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMRMwEQYDVQQDDApUZXN0Um9vdENB\\n' +\n    'MB4XDTI1MTAxNTA3MzE0MloXDTI2MTAxNTA3MzE0MlowYTELMAkGA1UEBhMCY24x\\n' +\n    'DTALBgNVBAgMBG9ob3MxCzAJBgNVBAcMAmNtMSEwHwYDVQQKDBhJbnRlcm5ldCBX\\n' +\n    'aWRnaXRzIFB0eSBMdGQxEzARBgNVBAMMClRlc3RSb290Q0EwggEiMA0GCSqGSIb3\\n' +\n    'DQEBAQUAA4IBDwAwggEKAoIBAQC5p4eoQJyTBvn01M8SwEi8dguTIPGmD3a8SGIj\\n' +\n    'KXaB6ltv742H5EBjgk+zC8+Gis0ehEqwk3pVnnmByeYvrERxsUqDt69/FndlfTxI\\n' +\n    'C2/2MxWVk97g/6TpJ5Lt2mTrH+rSOgUDyU27aPn12ZnDF1mLsT+U+CBmfj4+J4tW\\n' +\n    'yzdFNj7kcKMQQok+L1dtFlDNMNpMA1UqADzoC3XgFl49CpDtoFId9DVsgUPkPfX1\\n' +\n    '89cCunomgJe1b17FzxfNu2yhbl5cnUEjeHGbmBgBIB7uG8tjGstnDPx7fl3Xrj+Q\\n' +\n    'fRrwCpVKD9RxoyUBFbHttixxY5bHFUdvHRB251sxD+JfxxxLAgMBAAEwDQYJKoZI\\n' +\n    'hvcNAQELBQADggEBAEGbNqcMU7C/lrIytI/OTtzYbkWDsfnRSPxlCUoZ2Xh3S83A\\n' +\n    'SNQ9Ze5tDwWdW9Hlde9May6hzvuQSYeMLLnyM8WGResXCs7UbnSQe7fGfUu+xDGb\\n' +\n    'h4tamnRFtZydxCCgDT9lIdHeutlPwOuxlR4HXpeowGeGJX0iFrdo6D0iXAY34hic\\n' +\n    'yLQzuBqE/1s3PLA83Fi4EOOOV7P/ahmOLtBFlHbySHV68i9PNeNr9SDykH9/RgI9\\n' +\n    '5G8ZTZj8oSmbTGGtfNuVXybMyJMRlz6BkxG++kYcg7STRBqHGX7RrWHiupguNreO\\n' +\n    '4sJBdSpWBq172ZEyOvTqC4xX9lLYqwwBQ++TFoo=\\n' +\n    '-----END CERTIFICATE-----');\n\n  let certUri: string = '';\n  let certScope = certificateManager.CertScope.CURRENT_USER;\n  try {\n    /* 在当前用户下，安装用户CA证书。 */\n    let result = certificateManager.installUserTrustedCertificateSync(userCAData, certScope);\n    certUri = (result.uri != undefined) ? result.uri : '';\n    console.info(`Succeeded in install user ca cert, certUri is ${certUri}`);\n  } catch (err) {\n    console.error(`Failed to install user ca cert. Code: ${err.code}, message: ${err.message}`);\n  }\n\n  try {\n    /* 获取用户CA证书详情。 */\n    let result = await certificateManager.getUserTrustedCertificate(certUri);\n    if (result === undefined || result.certInfo == undefined) {\n      console.error('The result of getting user ca cert is undefined.');\n    } else {\n      let certInfo = result.certInfo;\n      console.info('Succeeded in getting user ca cert.');\n    }\n  } catch (err) {\n    console.error(`Failed to get user ca certificate. Code: ${err.code}, message: ${err.message}`);\n  }\n\n  try {\n    /* 获取当前用户下的用户CA证书列表。 */\n    let result = await certificateManager.getAllUserTrustedCertificates(certScope);\n    if (result == undefined) { /* 用户根CA证书个数为0时，返回result为undefined。 */\n      console.info('the count of the user trusted certificates is 0');\n    } else if (result.certList == undefined) {\n      console.error('The result of getting current user trusted certificates is undefined.');\n    } else {\n      let list = result.certList;\n      console.info('Succeeded in getting user ca cert list.');\n    }\n  } catch (err) {\n    console.error(`Failed to get user ca certificate. Code: ${err.code}, message: ${err.message}`);\n  }\n\n  try {\n    /* 删除安装的用户CA证书。 */\n    certificateManager.uninstallUserTrustedCertificateSync(certUri);\n  } catch (err) {\n    console.error(`Failed to uninstall user ca certificate. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取系统CA证书路径、用户CA证书路径。应用可以直接通过该路径访问CA证书。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { certificateManager } from '@kit.DeviceCertificateKit';\n\nfunction getUserCaPathSample() {\n  try {\n    /* 获取系统CA的存储位置。 */\n    let property1: certificateManager.CertStoreProperty = {\n      certType: certificateManager.CertType.CA_CERT_SYSTEM,\n    }\n    let systemCAPath = certificateManager.getCertificateStorePath(property1);\n    console.info(`Success to get system ca path: ${systemCAPath}`);\n\n    /* 获取当前用户的用户CA存储位置。 */\n    let property2: certificateManager.CertStoreProperty = {\n      certType: certificateManager.CertType.CA_CERT_USER,\n      certScope: certificateManager.CertScope.CURRENT_USER,\n    }\n    let userCACurrentPath = certificateManager.getCertificateStorePath(property2);\n    console.info(`Success to get current user's user ca path: ${userCACurrentPath}`);\n\n    /* 获取设备公共的用户CA存储位置。 */\n    let property3: certificateManager.CertStoreProperty = {\n      certType: certificateManager.CertType.CA_CERT_USER,\n      certScope: certificateManager.CertScope.GLOBAL_USER,\n    }\n    let globalCACurrentPath = certificateManager.getCertificateStorePath(property3);\n    console.info(`Success to get global user's user ca path: ${globalCACurrentPath}`);\n  } catch (error) {\n    console.error(`Failed to get store path. Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
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
25586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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