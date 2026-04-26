"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["178601"], {
582311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_external_crypto_type_h_capi_native_huks_external_crypto_type_h_md_4bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-universal-keystore-api-universal-keystore-c-universal-keystore-headerfile-capi-native-huks-external-crypto-type-h-capi-native-huks-external-crypto-type-h-md-4bb.json
var site_docs_ref_system_security_api_universal_keystore_api_universal_keystore_c_universal_keystore_headerfile_capi_native_huks_external_crypto_type_h_capi_native_huks_external_crypto_type_h_md_4bb_namespaceObject = JSON.parse('{"id":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h","title":"native_huks_external_crypto_type.h","description":"概述","source":"@site/docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h.md","sourceDirName":"system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h","slug":"/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"native_huks_external_crypto_type.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-native-huks-external-crypto-type-h"},"sidebar":"ref","previous":{"title":"native_huks_external_crypto_api.h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h"},"next":{"title":"native_huks_api.h","permalink":"/harmonyos-docs-site/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h.md


const frontMatter = {
	title: 'native_huks_external_crypto_type.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-native-huks-external-crypto-type-h'
};
const contentTitle = 'native_huks_external_crypto_type.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_Huks_ExternalCryptoTag",
  "id": "oh_huks_externalcryptotag",
  "level": 3
}, {
  "value": "OH_Huks_ExternalPinAuthState",
  "id": "oh_huks_externalpinauthstate",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "native_huks_external_crypto_typeh",
        children: "native_huks_external_crypto_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义面向外部密钥管理扩展的结构体与枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <huks/native_huks_external_crypto_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhuks_external_crypto.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.Huks.CryptoExtension"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-huksexternalcryptotypeapi/capi-huksexternalcryptotypeapi",
        children: "HuksExternalCryptoTypeApi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/sexternalcryptotypeapi-oh-huks-externalcryptoparam/sexternalcryptotypeapi-oh-huks-externalcryptoparam",
              children: "OH_Huks_ExternalCryptoParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Huks_ExternalCryptoParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义参数集合中单个参数的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset",
              children: "OH_Huks_ExternalCryptoParamSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Huks_ExternalCryptoParamSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义外部加密参数集合的结构。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_huks_externalcryptotag",
              children: "OH_Huks_ExternalCryptoTag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Huks_ExternalCryptoTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列举参数集合中使用的标签值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXTERNAL_CRYPTO_MAX_PROVIDER_NAME_LEN 100"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义provider名称的最大字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXTERNAL_CRYPTO_MAX_RESOURCE_ID_LEN 512"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义资源ID的最大字节长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_externalcryptotag",
      children: "OH_Huks_ExternalCryptoTag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_ExternalCryptoTag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列举参数集合中使用的标签值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_TAG_UKEY_PIN = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_TAG_ABILITY_NAME = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA = OH_HUKS_TAG_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200003"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_TAG_UID = OH_HUKS_TAG_TYPE_INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200004"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_TAG_PURPOSE = OH_HUKS_TAG_TYPE_INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200005"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_TAG_TIMEOUT = OH_HUKS_TAG_TYPE_UINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200006"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_huks_externalpinauthstate",
      children: "OH_Huks_ExternalPinAuthState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Huks_ExternalPinAuthState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列举Ukey PIN码认证状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_PIN_NO_AUTH = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIN码未认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIN码认证成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HUKS_EXT_CRYPTO_PIN_LOCKED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIN码被锁。"
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