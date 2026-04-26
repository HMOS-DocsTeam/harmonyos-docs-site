"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["339758"], {
668020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_compute_mac_crypto_compute_cmac_crypto_compute_cmac_md_d5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-compute-mac-crypto-compute-cmac-crypto-compute-cmac-md-d5d.json
var site_docs_system_security_crypto_architecture_kit_crypto_compute_mac_crypto_compute_cmac_crypto_compute_cmac_md_d5d_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac/crypto-compute-cmac","title":"消息认证码计算CMAC(ArkTS)","description":"CMAC通过使用分组密码（如AES）和一个密钥生成认证码，确保消息在传输过程中未被篡改。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac/crypto-compute-cmac.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac","slug":"/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"消息认证码计算CMAC(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-cmac","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"消息认证码计算HMAC(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk/"},"next":{"title":"消息认证码计算CMAC(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac/crypto-compute-cmac.md


const frontMatter = {
	title: '消息认证码计算CMAC(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-cmac',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '消息认证码计算CMAC(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "CMAC（一次性传入数据）",
  "id": "cmac一次性传入数据",
  "level": 3
}, {
  "value": "分段CMAC",
  "id": "分段cmac",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "消息认证码计算cmacarkts",
        children: "消息认证码计算CMAC(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMAC通过使用分组密码（如AES）和一个密钥生成认证码，确保消息在传输过程中未被篡改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用update接口传入数据时，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cmac%E4%B8%80%E6%AC%A1%E6%80%A7%E4%BC%A0%E5%85%A5%E6%95%B0%E6%8D%AE",
        children: "一次性传入所有数据"
      }), "，也可以把数据人工分段，然后", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%86%E6%AE%B5cmac",
        children: "分段update"
      }), "。对于同一段数据而言，是否分段，计算结果没有差异。对于数据量较大的数据，开发者可以根据实际需求选择是否分段传入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面分别提供两种方式的示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cmac一次性传入数据",
      children: "CMAC（一次性传入数据）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatemac18",
            children: "cryptoFramework.createMac"
          }), "，指定消息认证码算法为CMAC，指定对称算法为AES128，生成消息认证码实例（Mac）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator",
            children: "cryptoFramework.createSymKeyGenerator"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-1",
            children: "SymKeyGenerator.convertKey"
          }), "，生成密钥算法为AES256的对称密钥（SymKey）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成对称密钥的详细开发指导，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key",
            children: "指定二进制数据生成对称密钥"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-6",
            children: "Mac.init"
          }), "，指定共享对称密钥（SymKey），初始化Mac对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-8",
            children: "Mac.update"
          }), "，传入自定义消息，进行消息认证码计算。单次update的长度没有限制。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-2",
            children: "Mac.doFinal"
          }), "，获取Mac计算结果。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getmaclength",
            children: "Mac.getMacLength"
          }), "，获取Mac长度，单位为字节。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用await方式一次性传入数据，获取消息认证码计算结果为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nasync function genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = await aesGenerator.convertKey(symKeyBlob);\n  console.info('convertKey result: success.');\n  return symKey;\n}\nasync function doCmac() {\n  // 把字符串按utf-8解码为Uint8Array，使用固定的128位的密钥，即16字节。\n  let keyData = new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer);\n  let key = await genSymKeyByData(keyData);\n  let spec: cryptoFramework.CmacSpec = {\n    algName: 'CMAC',\n    cipherName: 'AES128',\n  };\n  let message = 'cmacTestMessage'; // 待进行CMAC的数据。\n  let mac = cryptoFramework.createMac(spec);\n  await mac.init(key);\n  // 数据量不多时，可以一次性更新，将所有数据传入，接口没有入参长度限制。\n  await mac.update({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });\n  let macResult = await mac.doFinal();\n  console.info('CMAC result: ' + macResult.data);\n  let macLen = mac.getMacLength();\n  console.info('CMAC len: ' + macLen);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用同步方式一次性传入数据，获取消息认证码计算结果为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey =  aesGenerator.convertKeySync(symKeyBlob);\n  console.info('[Sync]convertKey result: success.');\n  return symKey;\n}\nfunction doCmacBySync() {\n  // 把字符串按utf-8解码为Uint8Array，使用固定的128位的密钥，即16字节。\n  let keyData = new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer);\n  let key = genSymKeyByData(keyData);\n  let spec: cryptoFramework.CmacSpec = {\n    algName: 'CMAC',\n    cipherName: 'AES128',\n  };\n  let message = 'cmacTestMessage'; // 待进行CMAC的数据。\n  let mac = cryptoFramework.createMac(spec);\n  mac.initSync(key);\n  // 数据量不大时，可以一次性更新，将所有数据传入，接口没有入参长度限制。\n  mac.updateSync({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });\n  let macResult = mac.doFinalSync();\n  console.info('[Sync]CMAC result: ' + macResult.data);\n  let macLen = mac.getMacLength();\n  console.info('CMAC len: ' + macLen);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分段cmac",
      children: "分段CMAC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatemac18",
            children: "cryptoFramework.createMac"
          }), "，指定消息认证码算法CMAC，对称算法AES256，生成消息认证码实例（Mac）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator",
            children: "cryptoFramework.createSymKeyGenerator"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-1",
            children: "SymKeyGenerator.convertKey"
          }), "，生成密钥算法为AES256的对称密钥（SymKey）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成对称密钥的详细开发指导，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key",
            children: "指定二进制数据生成对称密钥"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-7",
            children: "Mac.init"
          }), "，指定共享对称密钥（SymKey），初始化Mac对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["传入自定义消息，设置每次传入数据量为20字节，多次调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-9",
            children: "Mac.update"
          }), "，计算消息认证码。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-3",
            children: "Mac.doFinal"
          }), "，获取Mac计算结果。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getmaclength",
            children: "Mac.getMacLength"
          }), "，获取Mac消息认证码的长度，单位为字节。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用await方式分段传入数据，获取消息认证码计算结果为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nasync function genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = await aesGenerator.convertKey(symKeyBlob);\n  console.info('convertKey result: success.');\n  return symKey;\n}\nasync function doLoopCmac() {\n  // 把字符串按utf-8解码为Uint8Array，使用固定的128位的密钥，即16字节。\n  let keyData = new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer);\n  let key = await genSymKeyByData(keyData);\n  let spec: cryptoFramework.CmacSpec = {\n    algName: 'CMAC',\n    cipherName: 'AES128',\n  };\n  let mac = cryptoFramework.createMac(spec);\n  // 假设消息共43字节，根据UTF-8解码后，仍是43字节。\n  let messageText = 'aaaaa......bbbbb......ccccc......ddddd......eee';\n  let messageData = new Uint8Array(buffer.from(messageText, 'utf-8').buffer);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无具体要求。\n  await mac.init(key);\n  for (let i = 0; i < messageData.length; i += updateLength) {\n    let updateMessage = messageData.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    await mac.update(updateMessageBlob);\n  }\n  let macOutput = await mac.doFinal();\n  console.info('CMAC result: ' + macOutput.data);\n  let macLen = mac.getMacLength();\n  console.info('CMAC len: ' + macLen);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用同步方式分段传入数据，获取消息认证码计算结果为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = aesGenerator.convertKeySync(symKeyBlob);\n  console.info('[Sync]convertKey result: success.');\n  return symKey;\n}\nfunction doLoopCmacBySync() {\n  // 把字符串按utf-8解码为Uint8Array，使用固定的128位的密钥，即16字节。\n  let keyData = new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer);\n  let key = genSymKeyByData(keyData);\n  let spec: cryptoFramework.CmacSpec = {\n    algName: 'CMAC',\n    cipherName: 'AES128',\n  };\n  let mac = cryptoFramework.createMac(spec);\n  // 假设信息共43字节，utf-8解码后仍为43字节。\n  let messageText = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee';\n  let messageData = new Uint8Array(buffer.from(messageText, 'utf-8').buffer);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际没有具体要求。\n  mac.initSync(key);\n  for (let i = 0; i < messageData.length; i += updateLength) {\n    let updateMessage = messageData.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    mac.updateSync(updateMessageBlob);\n  }\n  let macOutput = mac.doFinalSync();\n  console.info('[Sync]CMAC result: ' + macOutput.data);\n  let macLen = mac.getMacLength();\n  console.info('CMAC len: ' + macLen);\n}\n"
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