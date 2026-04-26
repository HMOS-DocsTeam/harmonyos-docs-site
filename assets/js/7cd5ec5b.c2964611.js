"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["51870"], {
839542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_generate_message_crypto_generate_message_digest_dev_crypto_generate_message_digest_md_5_crypto_generate_message_digest_md_5_md_7cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-generate-message-crypto-generate-message-digest-dev-crypto-generate-message-digest-md-5-crypto-generate-message-digest-md-5-md-7cd.json
var site_docs_system_security_crypto_architecture_kit_crypto_generate_message_crypto_generate_message_digest_dev_crypto_generate_message_digest_md_5_crypto_generate_message_digest_md_5_md_7cd_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5/crypto-generate-message-digest-md5","title":"消息摘要计算MD5(ArkTS)","description":"对应的算法规格请查看消息摘要计算算法规格。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5/crypto-generate-message-digest-md5.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5","slug":"/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"消息摘要计算MD5(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-message-digest-md5","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"消息摘要计算SHA256(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-ndk/"},"next":{"title":"消息摘要计算MD5(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-md5/crypto-generate-message-digest-md5.md


const frontMatter = {
	title: '消息摘要计算MD5(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-message-digest-md5',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '消息摘要计算MD5(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "摘要算法（一次性传入）",
  "id": "摘要算法一次性传入",
  "level": 3
}, {
  "value": "分段摘要算法",
  "id": "分段摘要算法",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "消息摘要计算md5arkts",
        children: "消息摘要计算MD5(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95%E4%B8%8E%E8%A7%84%E6%A0%BC",
        children: "消息摘要计算算法规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(557113)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，轻量级智能穿戴设备支持消息摘要的计算与操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用update接口传入数据时，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%91%98%E8%A6%81%E7%AE%97%E6%B3%95%E4%B8%80%E6%AC%A1%E6%80%A7%E4%BC%A0%E5%85%A5",
        children: "一次性传入所有数据"
      }), "，也可以把数据人工分段，然后", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%86%E6%AE%B5%E6%91%98%E8%A6%81%E7%AE%97%E6%B3%95",
        children: "分段update"
      }), "。对于同一段数据而言，计算结果没有差异。对于数据量较大的数据，开发者可以根据实际需求选择是否分段传入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面分别提供两种方式的示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "摘要算法一次性传入",
      children: "摘要算法（一次性传入）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatemd",
          children: "cryptoFramework.createMd"
        }), "，指定摘要算法MD5，生成摘要实例（Md）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-6",
          children: "Md.update"
        }), "，传入自定义消息，进行摘要更新计算。单次update长度没有限制。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#digest",
          children: "Md.digest"
        }), "，获取摘要计算结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getmdlength",
          children: "Md.getMdLength"
        }), "，获取摘要计算长度，单位为字节。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用await方式单次传入数据，获取摘要计算结果为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nasync function doMd() {\n  let mdAlgName = 'MD5'; // 摘要算法名。\n  let message = 'mdTestMessage'; // 待摘要的数据。\n  let md = cryptoFramework.createMd(mdAlgName);\n  // 数据量较少时，可以只做一次update，将数据全部传入，接口未对入参长度做限制。\n  await md.update({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });\n  let mdResult = await md.digest();\n  console.info('Md result: ' + mdResult.data);\n  let mdLen = md.getMdLength();\n  console.info('md len: ' + mdLen);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用同步方式单次传入数据，获取摘要计算结果为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction doMdBySync() {\n  let mdAlgName = 'MD5'; // 摘要算法名。\n  let message = 'mdTestMessage'; // 待摘要的数据。\n  let md = cryptoFramework.createMd(mdAlgName);\n  // 数据量较少时，可以只做一次update，将数据全部传入，接口未对入参长度做限制。\n  md.updateSync({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });\n  let mdResult = md.digestSync();\n  console.info('[Sync]:Md result: ' + mdResult.data);\n  let mdLen = md.getMdLength();\n  console.info('md len: ' + mdLen);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分段摘要算法",
      children: "分段摘要算法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatemd",
          children: "cryptoFramework.createMd"
        }), "，指定摘要算法MD5，生成摘要实例（Md）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["传入自定义消息，将一次传入数据量设置为20字节，多次调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-7",
          children: "Md.update"
        }), "，进行摘要更新计算。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#digest-1",
          children: "Md.digest"
        }), "，获取摘要计算结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getmdlength",
          children: "Md.getMdLength"
        }), "，获取摘要计算长度，单位为字节。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用await方式分段传入数据，获取摘要计算结果为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nasync function doLoopMd() {\n  let mdAlgName = 'MD5'; // 摘要算法名。\n  let md = cryptoFramework.createMd(mdAlgName);\n  // 假设信息总共43字节，根据utf-8解码后，也是43字节。\n  let messageText = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee';\n  let messageData = new Uint8Array(buffer.from(messageText, 'utf-8').buffer);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求。\n  for (let i = 0; i < messageData.length; i += updateLength) {\n    let updateMessage = messageData.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    await md.update(updateMessageBlob);\n  }\n  let mdOutput = await md.digest();\n  console.info('md result: ' + mdOutput.data);\n  let mdLen = md.getMdLength();\n  console.info('md len: ' + mdLen);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用同步方式分段传入数据，获取摘要计算结果为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction doLoopMdBySync() {\n  let mdAlgName = 'MD5'; // 摘要算法名。\n  let md = cryptoFramework.createMd(mdAlgName);\n  // 假设信息总共43字节，根据utf-8解码后，也是43字节。\n  let messageText = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee';\n  let messageData = new Uint8Array(buffer.from(messageText, 'utf-8').buffer);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求。\n  for (let i = 0; i < messageData.length; i += updateLength) {\n    let updateMessage = messageData.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    md.updateSync(updateMessageBlob);\n  }\n  let mdOutput = md.digestSync();\n  console.info('[Sync]:md result: ' + mdOutput.data);\n  let mdLen = md.getMdLength();\n  console.info('md len: ' + mdLen);\n}\n"
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
557113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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