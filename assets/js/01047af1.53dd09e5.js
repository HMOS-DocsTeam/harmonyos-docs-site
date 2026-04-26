"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["538698"], {
503583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_extension_ability_support_huks_extension_ability_support_dev_huks_extension_ability_support_dev_md_010_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-extension-ability-support-huks-extension-ability-support-dev-huks-extension-ability-support-dev-md-010.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_extension_ability_support_huks_extension_ability_support_dev_huks_extension_ability_support_dev_md_010_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/huks-extension-ability-support-dev","title":"CryptoExtensionAbility适配开发指导","description":"适配指导","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/huks-extension-ability-support-dev.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev","slug":"/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CryptoExtensionAbility适配开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-extension-ability-support-dev","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CryptoExtensionAbility扩展能力介绍","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/"},"next":{"title":"User Authentication Kit简介","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/huks-extension-ability-support-dev.md


const frontMatter = {
	title: 'CryptoExtensionAbility适配开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-extension-ability-support-dev',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'CryptoExtensionAbility适配开发指导';

const assets = {

};



const toc = [{
  "value": "适配指导",
  "id": "适配指导",
  "level": 2
}, {
  "value": "驱动应用注册、解注册CryptoExtensionAbility适配",
  "id": "驱动应用注册解注册cryptoextensionability适配",
  "level": 2
}, {
  "value": "注册CryptoExtensionAbility",
  "id": "注册cryptoextensionability",
  "level": 3
}, {
  "value": "解注册CryptoExtensionAbility",
  "id": "解注册cryptoextensionability",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cryptoextensionability适配开发指导",
        children: "CryptoExtensionAbility适配开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配指导",
      children: "适配指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档旨在指导驱动厂商如何继承实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability",
        children: "CryptoExtensionAbility"
      }), "需要的接口能力，此处给出实现参考，其他实现依照业务需要依次调用driver封装的底层驱动函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio工程中手动新建一个CryptoExtensionAbility组件，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录，名称可以自己定义，例如cryptoability。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在cryptoability目录，右键选择“New > ArkTS File”，新建一个文件，名称可以自己定义，例如CryptoAbility.ets。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其目录结构如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "├── ets\n│   └── cryptoability\n│       └── CryptoAbility.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发CryptoExtensionAbility需要配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissioncrypto_extension_register",
            children: "ohos.permission.CRYPTO_EXTENSION_REGISTER"
          }), "权限，该权限属于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
            children: "受限开放权限"
          }), "，请按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
            children: "申请受限权限"
          }), "指引为应用进行申请。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/module.json5\n{\n  \"module\": {\n    // ...\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.CRYPTO_EXTENSION_REGISTER\"\n      }\n    ],\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的module.json5配置文件中注册AppServiceExtensionAbility组件，name标签表示ability名称，长度最大为127字节，srcEntry标签表示当前CryptoExtensionAbility组件所对应的代码路径，type标签需要设置为“crypto”，exported标签设置为false表示不允许三方应用调用，配置多个ability时要求每个name标签必须是唯一的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/module.json5\n{\n  \"module\": {\n    // ...\n    \"extensionAbilities\": [\n        {\n          \"name\": \"CryptoExtension\",\n          \"srcEntry\": \"./ets/cryptoability/CryptoAbility.ets\",\n          \"type\": \"crypto\",\n          \"exported\": false\n        }\n    ],\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在CryptoAbility.ets文件中，增加导入CryptoExtensionAbility的依赖包，自定义类继承CryptoExtensionAbility组件并实现其中的接口函数。导入CryptoExtensionAbility需要实现在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability",
            children: "CryptoExtensionAbility"
          }), "中给出的所有函数，此处给出实现参考，与底层驱动的调用对应关系见下文。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(563785)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["句柄资源和PIN认证状态需要做基于UID的隔离，在onOpenResource、onCloseResource、onAuthUkeyPin、onGetUkeyPinAuthState和onClearUkeyPinAuthState接口的入参params中会包含业务的UID信息（通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
              children: "HUKS_EXT_CRYPTO_TAG_UID"
            }), "可获取业务身份），可基于此做句柄资源和PIN认证状态的隔离。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "接口函数的错误不支持自定义返回，不按接口定义方式返回会导致异常。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { huks, huksExternalCrypto, CryptoExtensionAbility, HuksCryptoExtensionCertInfo, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';\nimport { util } from '@kit.ArkTS'\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit'\n\nclass CryptoExtension extends CryptoExtensionAbility {\n  // 本步骤内的接口函数实现均需在class内，为方便开发者理解及使用，每个接口函数在下文详细解释。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口介绍："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（1）onOpenResource在Ukey签名验签操作中用于打开指定资源（如建立会话或连接）。resourceId表示要打开的资源标识，应用身份可以在params中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0，handle成员非空；调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onOpenResource(resourceId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // 构造结果对象，默认返回操作失败，返回值为HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  };\n\n  // 获取 appId\n  let appId: string | undefined = params.find((param =>\n    param.tag === huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_UID))?.value.toString();\n  if (appId === undefined) {\n    return Promise.resolve(result);\n  }\n\n  // 解析 resource index\n  let index: string = JSON.parse(resourceId)['index'];\n\n  // ...\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onOpenResource(index, ...);\n    // 场景：打开资源成功\n    result.resultCode = res.resultCode\n    result.handle = res.handle\n  } catch (error) {\n    // 场景：打开资源失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onOpenResource failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（2）onCloseResource在Ukey签名验签操作中用于关闭指定资源（如释放会话或连接）。handle为待关闭资源的句柄，应用身份可以在params中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0；调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onCloseResource(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  };\n  \n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_closeOpenResource(handle, ...);\n    // 场景：关闭资源成功\n    result.resultCode = res.resultCode\n  } catch (error) {\n    // 场景：关闭资源失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onCloseResource failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（3）onGetProperty在Ukey签名验签操作中用于获取指定资源的属性信息。handle为资源句柄，propertyId为待获取的属性标识，应用身份可以在params中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0，返回值中的property成员包含属性信息。调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onGetProperty中须实现导出公钥功能，以便上游业务使用PIN加密传输并完成PIN码认证。加密算法支持RSA、SM2等。当入参propertyId为SKF_ExportPublicKey时，返回的公钥信息采用JSON格式，包含以下4个必选字段，分别是publicKey（公钥数据）、algo（算法类型及密钥长度）、transformation（密码学操作参数，如填充模式）、size（公钥数据长度）。具体实现可参考下方示例代码中onGetProperty接口的相关部分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onGetProperty(handle: string, propertyId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let emptyArray: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    property: emptyArray\n  };\n\n  // 导出公钥\n  if (propertyId == 'SKF_ExportPublicKey') {\n    result.resultCode = 0\n    let encryptionAlgo: string = 'RSA1024'\n    let padding: string = 'PRIMES_2';\n    // 1. 创建一个AsyKeyGenerator实例。\n    let rsaGenerator = cryptoFramework.createAsyKeyGenerator(`${encryptionAlgo}|${padding}`);\n    // 2. 使用密钥生成器随机生成非对称密钥对。\n    let keyPair = rsaGenerator.generateKeyPairSync();\n    // 3. 将公钥导出，并转换为Json字符串\n    const pkData = Array.from(keyPair.pubKey.getEncoded().data);\n    let transformation: string = 'RSA1024|PKCS1'\n    const encoder = new util.TextEncoder();\n    let info = encoder.encodeInto(JSON.stringify({\n      publicKey: pkData,\n      algo: encryptionAlgo,\n      transformation: transformation,\n      size: pkData.length\n    }));\n    // 4. 保存私钥，后续用于解密加密的数据\n    let privKey = keyPair.priKey\n    // 返回用来加密传pin的公钥和加密算法信息，详见导出公钥文档\n    result.property = [\n      { tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_EXTRA_DATA, value: info }\n    ]\n    return Promise.resolve(result);\n  }\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：获取属性成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onGetProperty(...);\n    result.resultCode = res.resultCode\n    result.property = res.property\n  } catch (error) {\n    // 场景：获取属性失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onGetProperty failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（4）onAuthUkeyPin用于在Ukey签名之前验证PIN码。加密后的PIN码通过param中传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UKEY_PIN"
          }), "参数携带，需使用onGetProperty中保存的私钥进行解密。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当PIN码校验成功时，返回值中的resultCode成员设置为0，返回值中的authState设置为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalpinauthstate",
            children: "HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED"
          }), "。当PIN码不正确时，resultCode携带错误码信息，返回值中的retryCount设置为剩余重试次数，每次认证失败重试次数减1，当重试次数为0时，resultCode设置为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#hukscryptoextensionresultcode",
            children: "HUKS_CRYPTO_EXTENSION_ERR_PIN_LOCKED"
          }), "，authState设置为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalpinauthstate",
            children: "HUKS_EXT_CRYPTO_PIN_LOCKED"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onAuthUkeyPin(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  let pin: string | undefined = undefined;\n  for (let param of params) {\n    if (param.tag == huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_UKEY_PIN) {\n      let originPinData = param.value as Uint8Array;\n      // 根据导出公钥所传出的加密算法和填充方式进行解密originPinData获取pin\n      // ...\n    }\n  }\n  // ...\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    authState: huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_NO_AUTH,\n    retryCount: 0\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：PIN码认证成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onAuthUkeyPin(pin, ...);\n    result.resultCode = res.resultCode\n    result.authState = res.authState\n  } catch (error) {\n    // 场景：PIN码认证失败\n    result.resultCode = res.resultCode\n    result.retryCount = res.retryCount\n    console.error(`promise: onAuthUkeyPin failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（5）onGetUkeyPinAuthState用于应用查询PIN码的认证状态。当调用成功时，返回值中的resultCode成员设置为0，返回值中的authState设置为对应的认证状态。调用失败时，resultCode携带错误码信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onGetUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    authState: 0\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：获取PIN码认证状态成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onAuthUkeyPin(...);\n    result.resultCode = res.resultCode\n    result.authState = res.authState\n    if (result.authState != 0) {\n      // 场景： PIN码已认证\n      // ...\n    } else {\n      // 场景： PIN码未认证\n      // ...\n    }\n  } catch (error) {\n    // 场景：获取PIN码认证状态失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onGetUkeyPinAuthState failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（6）onClearUkeyPinAuthState用于重置PIN码的认证状态。当调用成功时，返回值中的resultCode成员设置为0。调用失败时，resultCode携带错误码信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onClearUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：清除PIN码认证状态成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onClearUkeyPinAuthState(...);\n    result.resultCode = res.resultCode\n  } catch (error) {\n    // 场景：清除PIN码认证状态失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onClearUkeyPinAuthState failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（7）onInitSession在Ukey签名验签操作中用于初始化密钥会话。应用身份可以在param中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0，handle成员非空。调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onInitSession(handle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    handle: \"\"\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：三段式init阶段成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onInitSession(...);\n    result.resultCode = res.resultCode\n    result.handle = res.handle\n  } catch (error) {\n    // 场景：三段式init阶段失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onInitSession failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（8）onUpdateSession在Ukey签名验签操作中用于分段传输大批量数据。应用身份可以在param中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0。调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onUpdateSession(handle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let certs: Uint8Array = new Uint8Array();\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    outData: certs\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：三段式update阶段成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onUpdateSession(...);\n    result.resultCode = res.resultCode\n    result.outData = res.outData\n  } catch (error) {\n    // 场景：三段式update阶段失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onUpdateSession failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（9）onFinishSession在Ukey签名操作中用于传输最后一段明文，在验签操作中用于传输签名。应用身份可以在param中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0。调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onFinishSession(handle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let certs: Uint8Array = new Uint8Array();\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    outData: certs\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  };\n  try {\n    // 场景：三段式finish阶段成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onFinishSession(...);\n    result.resultCode = res.resultCode\n    result.outData = res.outData\n  } catch (error) {\n    // 场景：三段式finish阶段失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onFinishSession failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（10）onExportCertificate用于查询某个resourceId下的证书。可以通过解析参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_PURPOSE"
          }), "获取业务希望的证书类型。如未指定，默认获取的证书类型是签名证书。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其值含义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "0：默认用途。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1：用于查询所有凭据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2：用于凭据签名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3：用于凭据加密。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onExportCertificate(resourceId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let certInfoSetArray: Array<HuksCryptoExtensionCertInfo> = []\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    certs: certInfoSetArray\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：导出证书成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onExportCertificate(...);\n    result.resultCode = res.resultCode\n    result.certs = res.certs\n  } catch (error) {\n    // 场景：导出证书失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onExportCertificate failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（11）onEnumCertificates在Ukey签名验签操作中用于枚举证书列表。应用身份可以在params中由", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
            children: "HUKS_EXT_CRYPTO_TAG_UID"
          }), "参数携带。当调用成功时，返回值中的resultCode成员设置为0，返回值中的certs成员包含证书列表（类型为Array<", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#hukscryptoextensioncertinfo",
            children: "HuksCryptoExtensionCertInfo"
          }), ">）。调用失败时，resultCode携带错误码信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onEnumCertificates(params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult> {\n  // ...\n  let certInfoSetArray: Array<HuksCryptoExtensionCertInfo> = []\n  let result: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n    certs: certInfoSetArray\n  };\n\n  let res: HuksCryptoExtensionResult = {\n    resultCode: HuksCryptoExtensionResultCode.HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL,\n  }\n  try {\n    // 场景：导出所有证书成功\n    let driver: YourUKeyDriver = YourDriverInstance;\n    res = driver.YourDriver_onEnumCertificates(...);\n    result.resultCode = res.resultCode\n    result.certs = res.certs\n  } catch (error) {\n    // 场景：导出所有证书失败\n    result.resultCode = res.resultCode\n    console.error(`promise: onEnumCertificates failed`);\n  }\n  return Promise.resolve(result);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "驱动应用注册解注册cryptoextensionability适配",
      children: "驱动应用注册、解注册CryptoExtensionAbility适配"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册cryptoextensionability",
      children: "注册CryptoExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "驱动HAP检测到Ukey存在时，向系统注册CryptoExtensionAbility。例如：Ukey插入等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ./ets/cryptoability/CryptoAbility.ts\n\nimport { huksExternalCrypto } from '@kit.UniversalKeystoreKit';\n\nlet ExtPropertiesTemp: Array<huksExternalCrypto.HuksExternalCryptoParam> = [\n  {\n      tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_ABILITY_NAME,\n      value: stringToUint8Array(\"YourCryptoExtensionName\")\n  }\n]\n\n// provider名称，为保证全局唯一，建议包含厂商信息。\nlet provider = \"testProvider\"\nhuksExternalCrypto.registerProvider(provider, ExtPropertiesTemp);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解注册cryptoextensionability",
      children: "解注册CryptoExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "驱动HAP检测到Ukey不存在时，向系统解注册CryptoExtensionAbility。例如：Ukey拔出等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "huksExternalCrypto.unregisterProvider(provider, ExtPropertiesTemp);\n"
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
563785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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