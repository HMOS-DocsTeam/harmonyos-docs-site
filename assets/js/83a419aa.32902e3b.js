"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["557476"], {
132995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certmanager_certmanager_private_credential_guidelines_certmanager_private_credential_guidelines_md_83a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certmanager-certmanager-private-credential-guidelines-certmanager-private-credential-guidelines-md-83a.json
var site_docs_system_security_device_certificate_kit_certmanager_certmanager_private_credential_guidelines_certmanager_private_credential_guidelines_md_83a_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/certmanager-private-credential-guidelines","title":"应用证书凭据开发指导","description":"本开发指导需使用API version 11及以上版本SDK。","source":"@site/docs/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/certmanager-private-credential-guidelines.md","sourceDirName":"system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines","slug":"/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用证书凭据开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-private-credential-guidelines","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书管理概述","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-overview/"},"next":{"title":"CA证书开发指导","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-ca-certs-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certmanager/certmanager-private-credential-guidelines/certmanager-private-credential-guidelines.md


const frontMatter = {
	title: '应用证书凭据开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-private-credential-guidelines',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '应用证书凭据开发指导';

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
        id: "应用证书凭据开发指导",
        children: "应用证书凭据开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914410)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导需使用API version 11及以上版本SDK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景说明",
      children: "场景说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "典型场景。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "安装应用证书凭据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "获取应用证书凭据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用应用证书凭据对数据进行签名、验签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "卸载指定的应用证书凭据。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装应用证书凭据支持的算法类型和签名验签支持的参数组合。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["证书管理安装凭据及使用凭据中的密钥进行签名、验签，依赖", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-overview",
              children: "密钥管理服务"
            }), "（HUKS）能力。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "证书管理支持的算法为HUKS支持的子集，当前仅支持RSA、ECC及SM2算法类型的私有凭据安装及使用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["签名、验签支持的参数组合，详见HUKS声明的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview",
              children: "签名/验签介绍及算法规格"
            }), "中RSA、ECC及SM2的描述。"]
          }), "\n"]
        }), "\n"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, callback: AsyncCallback<CMResult>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式安装应用证书凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string) : Promise<CMResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式安装应用证书凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, level: AuthStorageLevel) : Promise<CMResult>18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式安装应用证书凭据，并指定凭据的存储级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getPrivateCertificate(keyUri: string, callback: AsyncCallback<CMResult>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式获取应用证书凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getPrivateCertificate(keyUri: string) : Promise<CMResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式获取应用证书凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uninstallPrivateCertificate(keyUri: string, callback: AsyncCallback<void>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式卸载应用证书凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uninstallPrivateCertificate(keyUri: string) : Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式卸载应用证书凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init(authUri: string, spec: CMSignatureSpec, callback: AsyncCallback<CMHandle>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式进行签名验签的初始化操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init(authUri: string, spec: CMSignatureSpec) : Promise<CMHandle>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式进行签名验签的初始化操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "update(handle: Uint8Array, data: Uint8Array, callback: AsyncCallback<void>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式对待签名、验签的数据进行更新操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "update(handle: Uint8Array, data: Uint8Array) : Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式对待签名、验签的数据进行更新操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "finish(handle: Uint8Array, callback: AsyncCallback<CMResult>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式完成数据的签名操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "finish(handle: Uint8Array, signature: Uint8Array, callback: AsyncCallback<CMResult>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式完成数据的签名操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "finish(handle: Uint8Array, signature?: Uint8Array) : Promise<CMResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式完成数据的签名、验签操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abort(handle: Uint8Array, callback: AsyncCallback<void>) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用callback方式中止签名、验签操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificateManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "abort(handle: Uint8Array) : Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式中止签名、验签操作。"
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
            children: "import { certificateManager } from '@kit.DeviceCertificateKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装应用证书凭据，获取应用证书凭据，并使用应用证书凭据进行签名、验签，最后删除应用证书凭据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { certificateManager } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\nasync function privateCredSample() {\n  /* 安装的凭据数据需要业务赋值，本例数据非凭据数据。 */\n  let keystoreBase64Str = 'MIIMJgIBAzCCC+AGCSqGSIb3DQEHAaCCC9EEggvNMIILyTCCBW4GCSqGSIb3DQEH' +\n    // ...\n    'G615kxCjeS6uixCHuij3pgQUhHiChcSeohRPrVkVPSPmYr9tjAYCAgQA';\n  /* 凭据数据转换为Uint8Array，凭据数据为der格式 */\n  let keystore: Uint8Array = new util.Base64Helper().decodeSync(keystoreBase64Str);\n\n  /* 安装凭据对应的密码，业务赋值。 */\n  let keystorePwd: string = 'huawei';\n  let appKeyUri: string = '';\n  try {\n    /* 安装应用证书凭据。 */\n    const res: certificateManager.CMResult = await certificateManager.installPrivateCertificate(keystore, keystorePwd, 'testPriCredential');\n    appKeyUri = (res.uri != undefined) ? res.uri : '';\n    console.info(`InstallPrivateCertificate success appKeyUri: ${appKeyUri}`);\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`Failed to install private certificate. Code: ${e.code}, message: ${e.message}`);\n  }\n\n  try {\n    /* 获取应用证书凭据。 */\n    let res: certificateManager.CMResult = await certificateManager.getPrivateCertificate(appKeyUri);\n    if (res === undefined || res.credential == undefined) {\n      console.error('The result of getting private certificate is undefined.');\n    } else {\n      let credential = res.credential;\n      console.info('Succeeded in getting private certificate.');\n    }\n  } catch (err) {\n    console.error(`Failed to get private certificate. Code: ${err.code}, message: ${err.message}`);\n  }\n\n  try {\n    /* srcData为待签名、验签的数据，业务自行赋值。 */\n    let srcData: Uint8Array = new Uint8Array([\n      0x86, 0xf7, 0x0d, 0x01, 0x07, 0x01,\n    ]);\n\n    /* 构造签名的属性参数。 */\n    const signSpec: certificateManager.CMSignatureSpec = {\n      purpose: certificateManager.CmKeyPurpose.CM_KEY_PURPOSE_SIGN,\n      padding: certificateManager.CmKeyPadding.CM_PADDING_PSS,\n      digest: certificateManager.CmKeyDigest.CM_DIGEST_SHA256\n    };\n\n    /* 签名。 */\n    const signHandle: certificateManager.CMHandle = await certificateManager.init(appKeyUri, signSpec);\n    await certificateManager.update(signHandle.handle, srcData);\n    const signResult: certificateManager.CMResult = await certificateManager.finish(signHandle.handle);\n\n    /* 构造验签的属性参数。 */\n    const verifySpec: certificateManager.CMSignatureSpec = {\n      purpose: certificateManager.CmKeyPurpose.CM_KEY_PURPOSE_VERIFY,\n      padding: certificateManager.CmKeyPadding.CM_PADDING_PSS,\n      digest: certificateManager.CmKeyDigest.CM_DIGEST_SHA256\n    };\n\n    /* 验签。 */\n    const verifyHandle: certificateManager.CMHandle = await certificateManager.init(appKeyUri, verifySpec);\n    await certificateManager.update(verifyHandle.handle, srcData);\n    const verifyResult = await certificateManager.finish(verifyHandle.handle, signResult.outData);\n    console.info('Succeeded in signing and verifying.');\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`Failed to sign or verify. Code: ${e.code}, message: ${e.message}`);\n  }\n\n  try {\n    /* 删除应用证书凭据。 */\n    await certificateManager.uninstallPrivateCertificate(appKeyUri);\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`Failed to uninstall private certificate. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n"
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
914410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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