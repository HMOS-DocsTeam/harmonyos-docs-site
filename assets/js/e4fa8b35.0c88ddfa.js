"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["405754"], {
250556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_data_reliability_security_overview_data_reliability_security_overview_md_e4f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-data-reliability-security-overview-data-reliability-security-overview-md-e4f.json
var site_docs_arkdata_data_reliability_security_data_reliability_security_overview_data_reliability_security_overview_md_e4f_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/data-reliability-security-overview/data-reliability-security-overview","title":"数据可靠性与安全性概述","description":"功能场景","source":"@site/docs/arkdata/data-reliability-security/data-reliability-security-overview/data-reliability-security-overview.md","sourceDirName":"arkdata/data-reliability-security/data-reliability-security-overview","slug":"/arkdata/data-reliability-security/data-reliability-security-overview/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-reliability-security-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"数据可靠性与安全性概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-reliability-security-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分布式数据对象跨设备数据同步 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-distributed-data-object/"},"next":{"title":"数据库备份与恢复 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-backup-and-restore/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/data-reliability-security-overview/data-reliability-security-overview.md


const frontMatter = {
	title: '数据可靠性与安全性概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-reliability-security-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据可靠性与安全性概述';

const assets = {

};



const toc = [{
  "value": "功能场景",
  "id": "功能场景",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "数据库备份与恢复",
  "id": "数据库备份与恢复",
  "level": 3
}, {
  "value": "数据库加密",
  "id": "数据库加密",
  "level": 3
}, {
  "value": "数据库分类分级",
  "id": "数据库分类分级",
  "level": 3
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "数据库备份与恢复机制",
  "id": "数据库备份与恢复机制",
  "level": 3
}, {
  "value": "数据库加密机制",
  "id": "数据库加密机制",
  "level": 3
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据可靠性与安全性概述",
        children: "数据可靠性与安全性概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能场景",
      children: "功能场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在系统运行中，存储损坏、存储空间不足、文件系统权限、系统掉电等都可能导致数据库发生故障。比如联系人应用的数据库损坏，导致用户的联系人丢失；日历应用的数据库损坏，导致丢失日历提醒等。为此数据管理提供了数据可靠性与安全性相关的解决方案和能力保障。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "备份、恢复功能：重要业务应用（如银行）数据丢失，出现严重异常场景，可以通过备份恢复数据库，保证关键数据不丢失。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库加密功能：当数据库中存储如认证凭据、财务数据等高敏感信息时，可对数据库进行加密，提高数据库安全性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库分类分级：数据跨设备同步时，数据管理基于数据安全标签和设备安全等级进行访问控制，保证数据安全。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E类加密数据库：应用存储用户敏感信息时应使用E类数据库，在锁屏的情况下，满足一定条件时，会触发密钥的销毁。此时E类数据库不可操作。当锁屏解锁后，密钥会恢复，E类数据库恢复正常读写操作。保证敏感信息的安全性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，备份数据库存储在应用的沙箱内，当存储空间不足时，可以选择删除本地的数据库备份，释放空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行数据可靠性与安全性相关功能的开发前，请先了解以下相关概念。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据库备份与恢复",
      children: "数据库备份与恢复"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据库备份"
            })
          }), "：指对当前数据库的数据库文件进行完整备份。HarmonyOS数据库备份针对数据库全量文件进行完整的备份。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在进行数据库备份的时候，无需关闭数据库，直接调用对应的数据库备份接口就能完成对数据库文件的备份。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据库恢复"
            })
          }), "：从指定的备份文件恢复到当前数据库文件。恢复完成时，当前数据库数据恢复到和指定备份文件一致。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据库加密",
      children: "数据库加密"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库加密是对整个数据库文件的加密，可以增强数据库的安全性，有效保护数据库内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据库分类分级",
      children: "数据库分类分级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据管理对数据实施分类分级保护，提供基于数据安全标签以及设备安全等级的访问控制机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据安全标签和设备安全等级越高，加密措施和访问控制措施越严格，数据安全性越高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据库备份与恢复机制",
      children: "数据库备份与恢复机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库在备份时，会将当前的数据库备份在指定的文件中，后续对数据库的操作不会影响备份的数据库文件。只有当恢复指定数据库文件时，才会将备份的数据库文件覆盖当前数据库，实现数据的回滚。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值型数据库备份路径：/data/service/el1(el2)/public/database/...{appId}/kvdb/backup/...{storeId}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关系型数据库备份路径：/data/app/el1(el2)/100/database/...{bundlename}/rdb"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据库加密机制",
      children: "数据库加密机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS数据库加密时，应用开发者无需传入密钥，只需要设置数据库加密的状态即可。系统会自动帮助开发者将数据库加密，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks",
        children: "huks通用密钥库系统"
      }), "，完成数据库密钥的生成及加密保护。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库加密的密钥一年自动更换一次。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值型数据库最多可以备份5份。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值型数据库的自动备份需要在熄屏且充电的状态下进行。"
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