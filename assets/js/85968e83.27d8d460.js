"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["735662"], {
970801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_native_access_control_by_device_and_data_level_native_access_control_by_device_and_data_level_md_859_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-native-access-control-by-device-and-data-level-native-access-control-by-device-and-data-level-md-859.json
var site_docs_arkdata_data_reliability_security_native_access_control_by_device_and_data_level_native_access_control_by_device_and_data_level_md_859_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/native-access-control-by-device-and-data-level/native-access-control-by-device-and-data-level","title":"基于设备分类和数据分级的访问控制 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/data-reliability-security/native-access-control-by-device-and-data-level/native-access-control-by-device-and-data-level.md","sourceDirName":"arkdata/data-reliability-security/native-access-control-by-device-and-data-level","slug":"/arkdata/data-reliability-security/native-access-control-by-device-and-data-level/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-access-control-by-device-and-data-level/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"基于设备分类和数据分级的访问控制 (C/C++)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-access-control-by-device-and-data-level","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于设备分类和数据分级的访问控制 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/access-control-by-device-and-data-level/"},"next":{"title":"E类加密数据库的使用 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/encrypted-estore-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/native-access-control-by-device-and-data-level/native-access-control-by-device-and-data-level.md


const frontMatter = {
	title: '基于设备分类和数据分级的访问控制 (C/C++)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-access-control-by-device-and-data-level',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基于设备分类和数据分级的访问控制 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "数据安全标签",
  "id": "数据安全标签",
  "level": 3
}, {
  "value": "设备安全等级",
  "id": "设备安全等级",
  "level": 3
}, {
  "value": "跨设备同步访问控制机制",
  "id": "跨设备同步访问控制机制",
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
    h3: "h3",
    header: "header",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基于设备分类和数据分级的访问控制-cc",
        children: "基于设备分类和数据分级的访问控制 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据库的访问控制机制确保了数据存储和同步时的安全能力。在创建数据库时，应当基于数据分类分级规范合理地设置数据库的安全标签，确保数据库内容和数据标签的一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持使用关系型数据库（C/C++）进行分级访问控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据管理对数据实施分类分级保护，提供基于数据安全标签和设备安全等级的访问控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据安全标签和设备安全等级越高，加密措施和访问控制措施越严格，数据安全性越高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据安全标签",
      children: "数据安全标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按照数据分类分级规范要求，可将数据分为S1、S2、S3、S4四个安全等级，安全等级具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h#oh_rdb_securitylevel",
        children: "OH_Rdb_SecurityLevel"
      }), "枚举。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "风险等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "风险标准"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "严重"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业界法律法规定义的特殊数据类型，涉及个人的最私密领域的信息或一旦泄露、篡改、破坏、销毁可能会给个人或组织造成重大的不利影响的数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "政治观点、宗教和哲学信仰、工会成员资格、基因数据、生物信息、健康和性生活状况，性取向等或设备认证鉴权、个人信用卡等财务信息等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严峻的不利影响。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "个人实时精确定位信息、运动轨迹等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严重的不利影响。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "个人的详细通信地址、姓名昵称等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "低"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的泄露、篡改、破坏、销毁可能会给个人或组织导致有限的不利影响。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性别、国籍、用户申请记录等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备安全等级",
      children: "设备安全等级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据设备安全能力，比如是否有TEE、是否有安全存储芯片等，将设备安全等级分为SL1、SL2、SL3、SL4、SL5五个等级。例如，手表通常为低安全的SL1设备，手机、平板通常为高安全的SL4设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备组网时可以通过hidumper -s 3511查看设备安全等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨设备同步访问控制机制",
      children: "跨设备同步访问控制机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据跨设备同步时，基于数据安全标签和设备安全等级进行访问控制。数据库的数据安全标签不高于对端设备的设备安全等级时，数据才能同步。具体访问控制矩阵如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备安全级别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可同步的数据安全标签"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，手表通常为低安全的SL1设备。若创建数据安全标签为S1的数据库，则此数据库数据可以在这些设备间同步；若创建的数据库标签为S2-S4，则不能在这些设备间同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关系型数据库，通过OH_Rdb_SetSecurityLevel接口设置数据库的安全等级。此处以创建安全等级为S3的数据库为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt中添加以下lib。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libnative_rdb_ndk.z.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include \"database/rdb/relational_store.h\"\n#include \"hilog/log.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_SetSecurityLevel接口设置数据库的安全等级。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el2/database\");\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\n// 数据库文件安全等级\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, false);\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL2);\n    \nint errCode = 0;\nOH_Rdb_Store *store_ = OH_Rdb_CreateOrOpen(config, &errCode);\nOH_Rdb_CloseStore(store_);\nstore_ = nullptr;\nOH_Rdb_DestroyConfig(config);\nconfig = nullptr;\n"
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