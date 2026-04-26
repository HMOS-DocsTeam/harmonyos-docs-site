"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["725601"], {
533622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_identity_authentication_huks_user_identity_authentication_huks_user_identity_authentication_md_b75_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-identity-authentication-huks-user-identity-authentication-huks-user-identity-authentication-md-b75.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_identity_authentication_huks_user_identity_authentication_huks_user_identity_authentication_md_b75_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/huks-user-identity-authentication","title":"用户身份认证访问控制开发指导","description":"场景介绍及相关概念说明请参考用户身份认证访问控制简介。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/huks-user-identity-authentication.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"用户身份认证访问控制开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-user-identity-authentication","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户身份认证访问控制简介","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/"},"next":{"title":"细粒度用户身份认证访问控制开发指导","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-user-identity-authentication/huks-user-identity-authentication.md


const frontMatter = {
	title: '用户身份认证访问控制开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-user-identity-authentication',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '用户身份认证访问控制开发指导';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "生成密钥",
  "id": "生成密钥",
  "level": 3
}, {
  "value": "开发案例",
  "id": "开发案例",
  "level": 2
}, {
  "value": "通过PIN码认证获取授权令牌",
  "id": "通过pin码认证获取授权令牌",
  "level": 3
}, {
  "value": "使用认证令牌进行加密操作",
  "id": "使用认证令牌进行加密操作",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "用户身份认证访问控制开发指导",
        children: "用户身份认证访问控制开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["场景介绍及相关概念说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview",
        children: "用户身份认证访问控制简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成密钥",
      children: "生成密钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定指纹访问控制类型及相关属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生成或导入密钥时，在密钥属性集中需指定三个参数：用户认证类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksuserauthtype9",
        children: "HuksUserAuthType"
      }), "、授权访问类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksauthaccesstype9",
        children: "HuksAuthAccessType"
      }), "、挑战值类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukschallengetype9",
        children: "HuksChallengeType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\n\nconst KEY_ALIAS = 'test_sm4_key_alias';\nconst IV = '1234567890123456';\nconst CIPHER_IN_DATA = 'Hks_SM4_Cipher_Test_101010101010101010110_string';\nconst AUTH_TYPE = userAuth.UserAuthType.PIN;\nconst AUTH_TRUST_LEVEL = userAuth.AuthTrustLevel.ATL1;\n\nlet sessionHandle: number;\nlet challenge: Uint8Array;\nlet authToken: Uint8Array;\nlet encryptedData: Uint8Array;\n\nclass ThrowObject {\n  public isThrow: boolean = false;\n}\n\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\n/* 步骤1：密钥生成模块 */\nconst KEY_GENERATION_PROPERTIES: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM4\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM4_KEY_SIZE_128,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,\n    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,\n    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,\n    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL\n  }\n];\n\n/* 生成密钥 */\nfunction generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject): Promise<void> {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 生成SM4密钥 */\nasync function step1GenerateKey(): Promise<void> {\n  const generateOptions: huks.HuksOptions = {\n    properties: KEY_GENERATION_PROPERTIES,\n    inData: new Uint8Array([])\n  };\n\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await generateKeyItem(KEY_ALIAS, generateOptions, throwObject)\n      .then((data) => {\n        console.info('密钥生成成功');\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error('密钥生成失败: ' + JSON.stringify(error));\n        }\n      });\n  } catch (error) {\n    console.error('密钥生成参数错误: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n\n/* 步骤2：初始化会话模块 - 初始化加密会话并获取挑战值 */\nconst INIT_SESSION_PROPERTIES: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM4,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM4_KEY_SIZE_128,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_IV,\n    value: stringToUint8Array(IV),\n  }\n];\n\n/* 初始化会话 */\nfunction initSession(keyAlias: string, huksOptions: huks.HuksOptions,\n  throwObject: ThrowObject): Promise<huks.HuksSessionHandle> {\n  return new Promise<huks.HuksSessionHandle>((resolve, reject) => {\n    try {\n      huks.initSession(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 初始化会话并获取挑战值 */\nasync function step2InitSession(): Promise<void> {\n  const initOptions: huks.HuksOptions = {\n    properties: INIT_SESSION_PROPERTIES,\n    inData: new Uint8Array([])\n  };\n\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await initSession(KEY_ALIAS, initOptions, throwObject)\n      .then((data) => {\n        sessionHandle = data.handle;\n        challenge = data.challenge as Uint8Array;\n        console.info('会话初始化成功，挑战值: ' + challenge.toString());\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error('会话初始化失败: ' + JSON.stringify(error));\n        }\n      });\n  } catch (error) {\n    console.error('会话初始化参数错误: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过pin码认证获取授权令牌",
      children: "通过PIN码认证获取授权令牌"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 步骤3：用户认证模块 - 通过PIN码认证获取授权令牌 */\n/* 执行用户认证 */\nfunction performUserAuthentication(huksChallenge: Uint8Array): void {\n  const authTypeList: userAuth.UserAuthType[] = [AUTH_TYPE];\n  const authParam: userAuth.AuthParam = {\n    challenge: huksChallenge,\n    authType: authTypeList,\n    authTrustLevel: AUTH_TRUST_LEVEL\n  };\n\n  const widgetParam: userAuth.WidgetParam = {\n    title: 'PIN',\n  };\n\n  /* 获取认证实例 */\n  let auth: userAuth.UserAuthInstance;\n  try {\n    auth = userAuth.getUserAuthInstance(authParam, widgetParam);\n    console.info('认证实例创建成功');\n  } catch (error) {\n    console.error('认证实例创建失败: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n\n  /* 订阅认证结果 */\n  try {\n    auth.on('result', {\n      onResult(result) {\n        console.info('用户认证成功，获取到令牌');\n        authToken = result.token;\n        step4EncryptWithToken();\n      }\n    });\n    console.info('认证结果订阅成功');\n  } catch (error) {\n    console.error('认证结果订阅失败: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n\n  /* 开始认证 */\n  try {\n    auth.start();\n    console.info('等待用户输入PIN码');\n  } catch (error) {\n    console.error('认证启动失败: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用认证令牌进行加密操作",
      children: "使用认证令牌进行加密操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 步骤4：加密操作模块 - 使用认证令牌进行加密操作 */\n/* 加密参数配置 */\nconst ENCRYPT_PROPERTIES: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM4,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM4_KEY_SIZE_128,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC,\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_IV,\n    value: stringToUint8Array(IV),\n  }\n];\n\n/* 更新会话 */\nfunction updateSession(handle: number, huksOptions: huks.HuksOptions, token: Uint8Array,\n  throwObject: ThrowObject): Promise<huks.HuksReturnResult> {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.updateSession(handle, huksOptions, token, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 完成会话 */\nfunction finishSession(handle: number, huksOptions: huks.HuksOptions, token: Uint8Array,\n  throwObject: ThrowObject): Promise<huks.HuksReturnResult> {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.finishSession(handle, huksOptions, token, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      const err = error instanceof Error ? error : new Error(String(error));\n      throw err;\n    }\n  });\n}\n\n/* 使用认证令牌进行加密 */\nasync function step4EncryptWithToken(): Promise<void> {\n  const encryptOptions: huks.HuksOptions = {\n    properties: ENCRYPT_PROPERTIES,\n    inData: stringToUint8Array(CIPHER_IN_DATA)\n  };\n\n  /* 更新会话，传入认证令牌 */\n  let throwObject: ThrowObject = { isThrow: true };\n  try {\n    await updateSession(sessionHandle, encryptOptions, authToken, throwObject)\n      .then((data) => {\n        console.info('会话更新成功');\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error('会话更新失败: ' + JSON.stringify(error));\n        }\n      });\n  } catch (error) {\n    console.error('会话更新参数错误: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n\n  /* 完成会话，传入认证令牌 */\n  throwObject = { isThrow: false };\n  try {\n    await finishSession(sessionHandle, encryptOptions, authToken, throwObject)\n      .then((data) => {\n        encryptedData = data.outData as Uint8Array;\n        console.info('加密完成');\n\n        /* 验证加密结果 */\n        const originalData = stringToUint8Array(CIPHER_IN_DATA);\n        if (encryptedData.toString() === originalData.toString()) {\n          console.error('加密验证失败：加密数据与原始数据相同');\n        } else {\n          console.info('加密验证成功：数据已正确加密');\n        }\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          const err = error instanceof Error ? error : new Error(String(error));\n          throw err;\n        } else {\n          console.error('会话完成失败: ' + JSON.stringify(error));\n        }\n      });\n  } catch (error) {\n    console.error('会话完成参数错误: ' + JSON.stringify(error));\n    const err = error instanceof Error ? error : new Error(String(error));\n    throw err;\n  }\n}\n\n/* 主流程入口 - 执行完整的密钥生成、认证和加密流程 */\nasync function main(): Promise<void> {\n  await step1GenerateKey();\n  await step2InitSession();\n  performUserAuthentication(challenge);\n}\n"
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