"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["993910"], {
155925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_compute_rand_crypto_generate_random_number_hardware_crypto_generate_random_number_hardware_md_441_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-compute-rand-crypto-generate-random-number-hardware-crypto-generate-random-number-hardware-md-441.json
var site_docs_system_security_crypto_architecture_kit_crypto_compute_rand_crypto_generate_random_number_hardware_crypto_generate_random_number_hardware_md_441_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware/crypto-generate-random-number-hardware","title":"使用硬件熵源生成安全随机数(ArkTS)","description":"从API version 21开始，可以选择使用硬件熵源生成安全随机数。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware/crypto-generate-random-number-hardware.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware","slug":"/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用硬件熵源生成安全随机数(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-random-number-hardware","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"安全随机数生成(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-ndk/"},"next":{"title":"使用硬件熵源生成安全随机数(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware/crypto-generate-random-number-hardware.md


const frontMatter = {
	title: '使用硬件熵源生成安全随机数(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-random-number-hardware',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用硬件熵源生成安全随机数(ArkTS)';

const assets = {

};



const toc = [{
  "value": "支持的算法与规格",
  "id": "支持的算法与规格",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "使用硬件熵源生成安全随机数arkts",
        children: "使用硬件熵源生成安全随机数(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，可以选择使用硬件熵源生成安全随机数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随机数主要用于临时会话密钥生成和非对称加密算法密钥生成等场景。在加解密场景中，安全随机数生成器需要具备随机性、不可预测性和不可重现性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用更安全的熵源，对随机数而言，就意味着 “结果难以被猜测或复现”，是 “真随机性” 的量化体现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前硬件熵源通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-overview",
        children: "HUKS"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用接口，完成以下具体功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成指定长度的安全随机数，并将其用于生成对应的密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启硬件熵源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定随机种子，生成一系列的随机序列。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发前，开发者应该先对加解密基础知识有一定了解，并熟知以下随机数相关的基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "内部状态"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代表随机数生成器内存中的数值，当内部状态相同时，随机数生成器会生成固定的随机数序列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "随机种子"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一个用来对伪随机数的内部状态进行初始化的数据，随机数生成器通过种子来生成一系列的随机序列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前OpenSSL实现方式，随机数生成器内部状态是不断变化的，即使设置相同的种子，生成的随机数序列也不会相同。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的算法与规格",
      children: "支持的算法与规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全随机数生成，设置硬件熵源之后，使用OpenSSL的RAND_priv_bytes接口生成。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "长度（Byte）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CTR_DRBG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, INT_MAX]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreaterandom",
            children: "cryptoFramework.createRandom"
          }), "，生成随机数实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#enablehardwareentropy21",
            children: "cryptoFramework.enableHardwareEntropy"
          }), "，开启硬件熵源。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）设置DataBlob数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#setseed",
            children: "Random.setSeed"
          }), "，为随机数生成器设置种子。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置指定字节长度，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generaterandom",
            children: "Random.generateRandom"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generaterandomsync10",
            children: "Random.generateRandomSync"
          }), "，生成安全随机数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定字节长度范围为1~INT_MAX。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过await返回异步结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nasync function doRand() {\n    let rand = cryptoFramework.createRandom();\n    rand.enableHardwareEntropy();\n    let seed = new Uint8Array([1, 2, 3]);\n    rand.setSeed({ data: seed });\n    let len = 12;\n    let randOutput = await rand.generateRandom(len);\n    console.info('rand output: ' + randOutput.data);\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步返回结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction doRandBySync() {\n  let rand = cryptoFramework.createRandom();\n  rand.enableHardwareEntropy();\n  let len = 24; // Generate a 24-byte random number.\n  try {\n    let randData = rand.generateRandomSync(len);\n    if (randData.data.length !== 0) {\n      console.info('[Sync]: rand result: ' + randData.data);\n    } else {\n      console.error('[Sync]: get rand result: fail!');\n    }\n  } catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`do rand failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
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