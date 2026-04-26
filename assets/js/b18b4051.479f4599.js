"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["413193"], {
750268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_overview_huks_overview_md_b18_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-overview-huks-overview-md-b18.json
var site_docs_system_security_huks_kit_huks_overview_huks_overview_md_b18_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-overview/huks-overview","title":"Universal Keystore Kit简介","description":"Universal Keystore Kit（密钥管理服务，下述简称为HUKS）向业务/应用提供各类密钥的统一安全操作能力，包括密钥管理（密钥生成/销毁、密钥导入、密钥证明、密钥协商、密钥派生）及密钥使用（加密/解密、签名/验签、访问控制）等功能。","source":"@site/docs/system-security/huks-kit/huks-overview/huks-overview.md","sourceDirName":"system-security/huks-kit/huks-overview","slug":"/system-security/huks-kit/huks-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Universal Keystore Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"网站链接免责声明","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/"},"next":{"title":"本地密钥管理基础概念","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-concepts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-overview/huks-overview.md


const frontMatter = {
	title: 'Universal Keystore Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'Universal Keystore Kit简介';

const assets = {

};



const toc = [{
  "value": "整体架构",
  "id": "整体架构",
  "level": 2
}, {
  "value": "核心功能",
  "id": "核心功能",
  "level": 2
}, {
  "value": "密钥生成",
  "id": "密钥生成",
  "level": 3
}, {
  "value": "密钥使用",
  "id": "密钥使用",
  "level": 3
}, {
  "value": "密钥删除",
  "id": "密钥删除",
  "level": 3
}, {
  "value": "密钥证明",
  "id": "密钥证明",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "universal-keystore-kit简介",
        children: "Universal Keystore Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Universal Keystore Kit（密钥管理服务，下述简称为HUKS）向业务/应用提供各类密钥的统一安全操作能力，包括密钥管理（密钥生成/销毁、密钥导入、密钥证明、密钥协商、密钥派生）及密钥使用（加密/解密、签名/验签、访问控制）等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS管理的密钥可以由业务/应用导入或调用HUKS的接口生成。同时，HUKS提供了密钥访问控制能力，确保存储在HUKS中的密钥被合法正确的访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "整体架构",
      children: "整体架构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示，HUKS模块可以分为如下三大部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK：提供密钥管理的接口供开发者调用，开发者可以根据实际业务，选择ArkTS或C API。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HUKS服务层：实现密钥会话管理及存储管理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HUKS核心层：承载HUKS的核心功能，包括密钥的密码学运算、明文密钥的加解密、密钥访问控制等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(428763)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于具备安全环境（如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-concepts#%E5%8F%AF%E4%BF%A1%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83tee",
            children: "TEE"
          }), "）的系统、设备，HUKS核心层必须运行在安全环境内。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39686)/* ["default"] */.A) + "",
        width: "1278",
        height: "1440"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "核心功能",
      children: "核心功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS为开发者提供了密钥全生命周期的管理能力，其核心功能按照密钥生命周期划分如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密钥生成",
      children: "密钥生成"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
                  children: "密钥生成"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "随机生成密钥，且在密钥的全生命周期内，其明文仅在安全环境中进行访问操作，不会将明文传递出安全环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
                  children: "密钥导入"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务可以将外部生成的密钥导入到HUKS进行管理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密钥使用",
      children: "密钥使用"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview",
                  children: "加密/解密"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用密钥将数据加密为攻击者无法理解的密文，或使用密钥将数据解密为业务可用的明文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview",
                  children: "签名/验签"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于认证消息内容以及消息发送者身份的真实性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-overview",
                  children: "密钥协商"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "两个或多个实体通过协商，共同建立会话密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-overview",
                  children: "密钥派生"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从一个现有密钥派生出一个或多个新密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview",
                  children: "访问控制"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保存储在HUKS中的密钥，不会被越权访问。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密钥删除",
      children: "密钥删除"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts",
                  children: "密钥删除"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全地删除存储在HUKS中的密钥数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密钥证明",
      children: "密钥证明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview",
                  children: "密钥证明"
                })
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为存储在HUKS中的非对称密钥对中的公钥签发证书，从而证明密钥的合法性（如密钥在安全环境中生成）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器与真机算法规格存在差异，详细规格以对应特性指南描述的规格为准。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器的密钥证明基于硬编码证书（不可信），真机基于DCM依赖硬件内的真实证书实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview",
        children: "基于用户身份认证的密钥访问控制"
      }), "，依赖于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/user-authentication-kit/user-authentication-overview",
        children: "User Authentication Kit（用户身份认证）"
      }), "。"]
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
39686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438455-35d6c8bba2ecfa13f9993837eee2df25.png");

},
428763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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