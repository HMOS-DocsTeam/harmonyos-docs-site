"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["525633"], {
545394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_attestation_huks_key_attestation_overview_huks_key_attestation_overview_md_7e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-attestation-huks-key-attestation-overview-huks-key-attestation-overview-md-7e2.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_attestation_huks_key_attestation_overview_huks_key_attestation_overview_md_7e2_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview/huks-key-attestation-overview","title":"密钥证明介绍及算法规格","description":"HUKS为密钥提供合法性证明能力，主要应用于非对称密钥的公钥的证明。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview/huks-key-attestation-overview.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"密钥证明介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-attestation-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥删除(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-ndk/"},"next":{"title":"匿名密钥证明(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview/huks-key-attestation-overview.md


const frontMatter = {
	title: '密钥证明介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-attestation-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥证明介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "支持的算法",
  "id": "支持的算法",
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
        id: "密钥证明介绍及算法规格",
        children: "密钥证明介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS为密钥提供合法性证明能力，主要应用于非对称密钥的公钥的证明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于PKI证书链技术，HUKS可以为存储在HUKS中的非对称密钥对的公钥签发证书，证明其公钥的合法性。业务可以通过系统提供的根CA证书，逐级验证HUKS签发的密钥证明证书，来确保证书中的公钥以及对应的私钥，确实来自合法的硬件设备，且存储管理在HUKS中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528140)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当调用方为系统服务且APL等级为normal时，暂不支持密钥证明，此种情况下，processName与APL字段将置空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "密钥证明功能在模拟器场景不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "轻量级智能穿戴不支持密钥证明功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持生成密钥和导入密钥进行密钥证明，业务方在服务器侧需要通过业务证书中的密钥来源字段校验密钥来源是否符合预期。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥证明扩展域段为Asn.1 DER标准编码格式，数据结构定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "KeyAttestation ::= SEQUENCE {\n  version            AttestationVersion DEFAULT v1,\n  claim1             AttestationClaim,\n  claim2             AttestationClaim,\n  claim3             AttestationClaim,\n  ... ...\n}\nAttestationVersion ::= INTEGER { v1(0) }\nAttestationClaim ::= SEQUENCE {\n  securityLevel      SecurityLevel,\n  type               AttestationType,\n  value              AttestationValue\n}\nSecurityLevel ::= INTEGER\nAttestationType ::= OBJECT IDENTIFIER\nAttestationValue ::= ANY -- DEFINED BY AttestationType\nApplicationIDType ::= SEQUENCE {\n  type               OBJECT IDENTIFIER,\n  value              OCT_STR\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用AttestationClaim类型取值说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "type（OID）取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value的数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "securityLevel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claim说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCT_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用输入的挑战值Challenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ApplicationIDType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OCT_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥来源，生成或者导入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.2.4.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTF8_STR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段，暂不使用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产品型号Model。从API 20开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ApplicationIDType类型取值说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "type（OID）取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "value取值说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "样例：{appId:\"xxx\", bundleName:\"xxx\", appIdentifier:\"xxx\", appMode:\"xxx\"}  其中appIdentifier、appMode从API 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3.6.1.4.1.2011.2.376.2.1.3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "样例：{processName:\"xxx\", APL:\"system_basic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥证明过程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务将指定密钥别名和需要证明的密钥属性的标签传入HUKS。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用HUKS为应用生成一个依次由根CA证书、设备CA证书、设备证书、密钥证书组成的X.509证书链。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将证书链传输至受信任的服务器，并在服务器上解析和验证证书链的有效性和单个证书是否吊销。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前提供了匿名密钥证明的方式，不会泄露设备信息，没有权限管理。面向所有应用开放。为了保护用户设备信息，三方应用开发者只能使用匿名密钥证明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前模拟器支持匿名证书，调试环境中使用的证书非真实设备证书，云侧需要区分该场景，避免误用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的算法",
      children: "支持的算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为密钥证明支持的规格说明。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Padding为PSS与PKCS1_V1_5的密钥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ED25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
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
528140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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