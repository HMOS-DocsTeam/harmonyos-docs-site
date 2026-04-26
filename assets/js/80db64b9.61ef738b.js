"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["774713"], {
860714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_identity_authentication_huks_refined_user_identity_authentication_huks_refined_user_identity_authentication_md_80d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-identity-authentication-huks-refined-user-identity-authentication-huks-refined-user-identity-authentication-md-80d.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_identity_authentication_huks_refined_user_identity_authentication_huks_refined_user_identity_authentication_md_80d_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/huks-refined-user-identity-authentication","title":"细粒度用户身份认证访问控制开发指导","description":"细粒度用户身份认证访问控制是基于已有用户身份认证访问控制的扩展，提供了基于生物特征和锁屏密码二次身份认证的细粒度访问控制能力，允许设置密钥在加密、解密、签名、验签、密钥协商、密钥派生的单个或多个场景时是否需要进行身份验证。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/huks-refined-user-identity-authentication.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"细粒度用户身份认证访问控制开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-refined-user-identity-authentication","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户身份认证访问控制开发指导","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/"},"next":{"title":"HMAC介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/huks-refined-user-identity-authentication.md


const frontMatter = {
	title: '细粒度用户身份认证访问控制开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-refined-user-identity-authentication',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '细粒度用户身份认证访问控制开发指导';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "密钥生成和数据加密",
  "id": "密钥生成和数据加密",
  "level": 3
}, {
  "value": "用户认证",
  "id": "用户认证",
  "level": 3
}, {
  "value": "数据解密和验证",
  "id": "数据解密和验证",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "细粒度用户身份认证访问控制开发指导",
        children: "细粒度用户身份认证访问控制开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "细粒度用户身份认证访问控制是基于已有用户身份认证访问控制的扩展，提供了基于生物特征和锁屏密码二次身份认证的细粒度访问控制能力，允许设置密钥在加密、解密、签名、验签、密钥协商、密钥派生的单个或多个场景时是否需要进行身份验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如，业务需要使用HUKS密钥加密保存账号密码信息等数据，要求在加密的时候不进行指纹等身份认证，解密的时候需要进行指纹等身份认证，这时就需要依赖HUKS提供细粒度的二次身份认证访问控制机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该功能仅需在密钥生成阶段，通过额外指定用于细粒度用户身份认证访问控制的HuksTag：HUKS_TAG_KEY_AUTH_PURPOSE，来指定在某种算法用途的情况下需要使用用户身份认证访问控制能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(247286)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于对称加解密场景，仅AES/CBC、AES/GCM、SM4/CBC模式支持细粒度访问控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密钥生成和数据加密",
      children: "密钥生成和数据加密"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst KEY_ALIAS = 'test_sm4_key_alias';\nconst CIPHER_IN_DATA = 'Hks_SM4_Cipher_Test_101010101010101010110_string'; // 明文数据\nconst IV = '1234567890123456'; // 初始化向量\nconst AUTH_TYPE = userAuth.UserAuthType.PIN; // 认证类型：PIN码\nconst AUTH_TRUST_LEVEL = userAuth.AuthTrustLevel.ATL1; // 认证信任级别\n\nlet sessionHandle = 0; // 会话句柄\nlet challenge: Uint8Array; // 挑战值\nlet authToken: Uint8Array; // 认证令牌\nlet encryptedData: Uint8Array; // 加密后的密文\nlet decryptedData: Uint8Array; // 解密后的明文\n\nclass ThrowObject {\n  public isThrow: boolean = false;\n}\n\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\n/* 步骤1：密钥生成模块 */\nconst KEY_GENERATION_PROPERTIES: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM4,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM4_KEY_SIZE_128,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,\n    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,\n    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,\n    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }\n];\n\nfunction generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject): Promise<void> {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 生成SM4密钥 */\nasync function step1GenerateKey(): Promise<void> {\n  const generateOptions: huks.HuksOptions = {\n    properties: KEY_GENERATION_PROPERTIES,\n    inData: new Uint8Array([])\n  };\n\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await generateKeyItem(KEY_ALIAS, generateOptions, throwObject)\n      .then((data) => {\n        console.info(`密钥生成成功: ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error(`密钥生成失败: ${JSON.stringify(error)}`);\n        }\n      });\n  } catch (error) {\n    console.error(`密钥生成参数无效: ${JSON.stringify(error)}`);\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n\n/* 步骤2：加密模块 */\nconst ENCRYPTION_PROPERTIES: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM4,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM4_KEY_SIZE_128,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_IV,\n    value: stringToUint8Array(IV),\n  }\n];\n\nfunction initEncryptSession(keyAlias: string, huksOptions: huks.HuksOptions,\n  throwObject: ThrowObject): Promise<huks.HuksSessionHandle> {\n  return new Promise<huks.HuksSessionHandle>((resolve, reject) => {\n    try {\n      huks.initSession(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\nfunction finishEncryptSession(handle: number, huksOptions: huks.HuksOptions,\n  throwObject: ThrowObject): Promise<huks.HuksReturnResult> {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.finishSession(handle, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 加密数据 */\nasync function step2EncryptData(): Promise<void> {\n  const encryptOptions: huks.HuksOptions = {\n    properties: ENCRYPTION_PROPERTIES,\n    inData: new Uint8Array([])\n  };\n\n  /* 初始化加密会话 */\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await initEncryptSession(KEY_ALIAS, encryptOptions, throwObject)\n      .then((data) => {\n        console.info(`加密会话初始化成功: ${JSON.stringify(data)}`);\n        sessionHandle = data.handle as number;\n        challenge = data.challenge as Uint8Array;\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error(`加密会话初始化失败: ${JSON.stringify(error)}`);\n        }\n      });\n  } catch (error) {\n    console.error(`加密会话初始化参数无效: ${JSON.stringify(error)}`);\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n\n  /* 执行加密操作 */\n  encryptOptions.inData = stringToUint8Array(CIPHER_IN_DATA);\n  throwObject = { isThrow: true };\n  try {\n    await finishEncryptSession(sessionHandle, encryptOptions, throwObject)\n      .then((data) => {\n        encryptedData = data.outData as Uint8Array;\n        console.info(`数据加密成功: ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error(`数据加密失败: ${JSON.stringify(error)}`);\n        }\n      });\n  } catch (error) {\n    console.error(`数据加密参数无效: ${JSON.stringify(error)}`);\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户认证",
      children: "用户认证"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 步骤3：用户认证模块 */\nfunction performUserAuthentication(huksChallenge: Uint8Array): void {\n  /* 配置认证参数 */\n  const authTypeList: userAuth.UserAuthType[] = [AUTH_TYPE];\n  const authParam: userAuth.AuthParam = {\n    challenge: huksChallenge,\n    authType: authTypeList,\n    authTrustLevel: AUTH_TRUST_LEVEL\n  };\n\n  const widgetParam: userAuth.WidgetParam = {\n    title: 'PIN',\n  };\n\n  /* 获取认证实例 */\n  let auth: userAuth.UserAuthInstance;\n  try {\n    auth = userAuth.getUserAuthInstance(authParam, widgetParam);\n    console.info('认证实例获取成功');\n  } catch (error) {\n    console.error('认证实例获取失败: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n\n  /* 订阅认证结果 */\n  try {\n    auth.on('result', {\n      onResult(result) {\n        console.info('用户认证成功，获取到token: ' + JSON.stringify(result));\n        authToken = result.token;\n        step32CompleteDecryption();\n      }\n    });\n    console.info('认证结果订阅成功');\n  } catch (error) {\n    console.error('认证结果订阅失败: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n\n  try {\n    auth.start();\n    console.info('认证流程已启动，等待用户输入PIN码...');\n  } catch (error) {\n    console.error('认证启动失败: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据解密和验证",
      children: "数据解密和验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 步骤4：解密模块 */\nconst DECRYPTION_PROPERTIES: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM4,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM4_KEY_SIZE_128,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_IV,\n    value: stringToUint8Array(IV),\n  }\n];\n\nfunction initDecryptSession(keyAlias: string, huksOptions: huks.HuksOptions,\n  throwObject: ThrowObject): Promise<huks.HuksSessionHandle> {\n  return new Promise<huks.HuksSessionHandle>((resolve, reject) => {\n    try {\n      huks.initSession(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\nfunction finishDecryptSession(handle: number, huksOptions: huks.HuksOptions, token: Uint8Array,\n  throwObject: ThrowObject): Promise<huks.HuksReturnResult> {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.finishSession(handle, huksOptions, token, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 初始化解密会话并触发用户认证 */\nasync function step31DecryptionAndAuth(): Promise<void> {\n\n  const decryptOptions: huks.HuksOptions = {\n    properties: DECRYPTION_PROPERTIES,\n    inData: new Uint8Array([])\n  };\n\n  /* 初始化解密会话，获取挑战值 */\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await initDecryptSession(KEY_ALIAS, decryptOptions, throwObject)\n      .then((data) => {\n        console.info(`解密会话初始化成功: ${JSON.stringify(data)}`);\n        sessionHandle = data.handle as number;\n        challenge = data.challenge as Uint8Array;\n        console.info('获取到挑战值: ' + challenge.toString());\n\n        /* 触发用户认证流程 */\n        performUserAuthentication(challenge);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error(`解密会话初始化失败: ${JSON.stringify(error)}`);\n        }\n      });\n  } catch (error) {\n    console.error(`解密会话初始化参数无效: ${JSON.stringify(error)}`);\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n\n/* 完成解密操作 */\nasync function step32CompleteDecryption(): Promise<void> {\n  const decryptOptions: huks.HuksOptions = {\n    properties: DECRYPTION_PROPERTIES,\n    inData: encryptedData // 使用之前加密的密文\n  };\n\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await finishDecryptSession(sessionHandle, decryptOptions, authToken, throwObject)\n      .then((data) => {\n        decryptedData = data.outData as Uint8Array;\n        console.info(`数据解密成功: ${JSON.stringify(data)}`);\n\n        /* 验证解密结果 */\n        const originalData = stringToUint8Array(CIPHER_IN_DATA);\n        if (decryptedData.toString() === originalData.toString()) {\n          console.info('解密验证成功！解密后的数据与原始明文一致');\n        } else {\n          console.error('解密验证失败！解密后的数据与原始明文不一致');\n        }\n      })\n      .catch((error: BusinessError) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error(`数据解密失败: ${JSON.stringify(error)}`);\n        }\n      });\n  } catch (error) {\n    console.error(`数据解密参数无效: ${JSON.stringify(error)}`);\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n\n/* 主函数：执行完整的SM4加密解密流程 */\nasync function main(): Promise<void> {\n    /* 步骤1：生成密钥 */\n    await step1GenerateKey();\n    /* 步骤2：加密数据 */\n    await step2EncryptData();\n    /* 步骤3：初始化解密并进行用户认证 */\n    await step31DecryptionAndAuth();\n}\n"
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
247286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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