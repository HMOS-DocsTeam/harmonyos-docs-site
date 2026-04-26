"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29135"], {
259524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_overview_crypto_key_derivation_overview_md_53b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-derivation-crypto-key-derivation-overview-crypto-key-derivation-overview-md-53b.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_overview_crypto_key_derivation_overview_md_53b_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview/crypto-key-derivation-overview","title":"密钥派生介绍及算法规格","description":"密钥派生函数（key derivation function）是指使用伪随机函数从秘密值中导出一个或多个密钥。密钥派生函数可用于将密钥扩展到更长的密钥或获得所需格式的密钥。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview/crypto-key-derivation-overview.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview","slug":"/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"密钥派生介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用硬件熵源生成安全随机数(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-hardware-ndk/"},"next":{"title":"使用PBKDF2进行密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview/crypto-key-derivation-overview.md


const frontMatter = {
	title: '密钥派生介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥派生介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "PBKDF2算法",
  "id": "pbkdf2算法",
  "level": 2
}, {
  "value": "HKDF算法",
  "id": "hkdf算法",
  "level": 2
}, {
  "value": "SCRYPT算法",
  "id": "scrypt算法",
  "level": 2
}, {
  "value": "X963KDF算法",
  "id": "x963kdf算法",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "密钥派生介绍及算法规格",
        children: "密钥派生介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥派生函数（key derivation function）是指使用伪随机函数从秘密值中导出一个或多个密钥。密钥派生函数可用于将密钥扩展到更长的密钥或获得所需格式的密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pbkdf2算法",
      children: "PBKDF2算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PBKDF（Password-Based Key Derivation Function）是具有可变计算成本的密钥派生函数，PBKDF2是PKCS系列的标准之一。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PBKDF2是将伪随机函数PRF（Pseudo-Random Function，例如基于散列的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac",
        children: "HMAC"
      }), "），输入密码明文和盐值，重复多次运算来进行密钥派生。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数进行密钥派生，具体的“字符串参数”由“密钥派生算法”和“HMAC函数摘要算法”使用符号“|”拼接而成，用于在创建密钥派生函数生成器时，指定算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "密钥派生算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HMAC函数摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hkdf算法",
      children: "HKDF算法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HKDF（HMAC-based Extract-and-Expand Key Derivation Function，是基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac",
        children: "HMAC"
      }), "）消息身份验证代码的简单密钥派生算法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入原始的密钥材料和盐值来提取、输入原始的密钥材料和拓展信息来扩展。它是一种密钥派生函数，用于从较短的输入密钥中派生出更长的输出密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HKDF包含三个模式，提取（EXTRACT_ONLY）、拓展（EXPAND_ONLY）、提取和拓展（EXTRACT_AND_EXPAND）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提取：使用原始的密钥材料，派生出一个符合密码学强度的伪随机密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拓展：将短密钥经过拓展变长，使用提取出的伪随机密钥，拓展出指定长度的密钥，同时保证随机性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提取和拓展：派生伪随机密钥，拓展出指定长度的密钥。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持以字符串参数进行密钥派生，具体的“字符串参数”由“密钥派生函数”、“HMAC函数摘要算法”和“模式”使用符号“|”拼接而成，用于在创建密钥派生函数生成器时，指定算法规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下表所示，各取值范围（即[]中的内容）中，最多选取一项完成字符串拼接，其中“模式”为可选项，未指定时默认为EXTRACT_AND_EXPAND。例如：当密钥派生算法为HKDF、HMAC，函数摘要算法为SHA1和模式为EXTRACT_AND_EXPAND时，其字符串参数为\"HKDF|SHA1\"或\"HKDF|SHA1|EXTRACT_AND_EXPAND\"。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "密钥派生算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HMAC函数摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[EXPAND_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXTRACT_ONLY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[EXPAND_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXTRACT_ONLY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[EXPAND_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXTRACT_ONLY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[EXPAND_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXTRACT_ONLY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[EXPAND_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXTRACT_ONLY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HKDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[EXPAND_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXTRACT_ONLY"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scrypt算法",
      children: "SCRYPT算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCRYPT算法是一种密钥派生函数（KDF），主要用于从输入的密码和盐值生成加密密钥。这个算法主要包含三个主要的参数：n、r和p。n是迭代次数，r是块大小，p是并行性。通过调整这些参数，可以根据不同的安全需求和硬件性能进行优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCRYPT算法是一个需要耗费大量内存和计算资源来派生密钥的派生算法，使用者需要根据设备硬件条件去传入合适的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存的计算方式为：p * 128 * r + 32 * r * (n + 2) * 4 字节。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "密钥派生算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCRYPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCRYPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "x963kdf算法",
      children: "X963KDF算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "X963KDF算法是一种基于HMAC的密钥派生函数（KDF），通常与椭圆曲线结合使用，用于生成密钥。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "密钥派生算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HMAC函数摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X963KDF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          })]
        })]
      })]
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