"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928733"], {
472364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_asset_store_kit_asset_arkts_asset_js_sync_asset_js_sync_md_e0b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-asset-store-kit-asset-arkts-asset-js-sync-asset-js-sync-md-e0b.json
var site_docs_system_security_asset_store_kit_asset_arkts_asset_js_sync_asset_js_sync_md_e0b_namespaceObject = JSON.parse('{"id":"system-security/asset-store-kit/asset-arkts/asset-js-sync/asset-js-sync","title":"同步（备份恢复）关键资产(ArkTS)","description":"新增支持同步的关键资产","source":"@site/docs/system-security/asset-store-kit/asset-arkts/asset-js-sync/asset-js-sync.md","sourceDirName":"system-security/asset-store-kit/asset-arkts/asset-js-sync","slug":"/system-security/asset-store-kit/asset-arkts/asset-js-sync/","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-sync/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"同步（备份恢复）关键资产(ArkTS)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-sync","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理群组关键资产(ArkTS)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control/"},"next":{"title":"新增关键资产(C/C++)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-native/asset-native-add/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/asset-store-kit/asset-arkts/asset-js-sync/asset-js-sync.md


const frontMatter = {
	title: '同步（备份恢复）关键资产(ArkTS)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-sync',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '同步（备份恢复）关键资产(ArkTS)';

const assets = {

};



const toc = [{
  "value": "新增支持同步的关键资产",
  "id": "新增支持同步的关键资产",
  "level": 2
}, {
  "value": "接入备份恢复扩展能力",
  "id": "接入备份恢复扩展能力",
  "level": 2
}, {
  "value": "查询关键资产同步结果",
  "id": "查询关键资产同步结果",
  "level": 2
}, {
  "value": "接口介绍",
  "id": "接口介绍",
  "level": 3
}, {
  "value": "代码示例",
  "id": "代码示例",
  "level": 3
}, {
  "value": "约束和限制",
  "id": "约束和限制",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "同步备份恢复关键资产arkts",
        children: "同步（备份恢复）关键资产(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新增支持同步的关键资产",
      children: "新增支持同步的关键资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增密码demo_pwd（别名demo_alias），附属信息为demo_label，支持同步的关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件，定义工具函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { asset } from '@kit.AssetStoreKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToArray(str: string): Uint8Array {\n  let textEncoder = new util.TextEncoder();\n  return textEncoder.encodeInto(str);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考如下示例代码，进行业务功能开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let attr: asset.AssetMap = new Map();\nattr.set(asset.Tag.SECRET, stringToArray('demo_pwd'));\nattr.set(asset.Tag.ALIAS, stringToArray('demo_alias'));\nattr.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label'));\nattr.set(asset.Tag.SYNC_TYPE, asset.SyncType.TRUSTED_DEVICE); // 需指定在可信设备间同步（如新旧设备间克隆）。\ntry {\n  asset.add(attr).then(() => {\n    console.info(`Succeeded in adding Asset with sync.`);\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to add Asset with sync. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  })\n} catch (error) {\n  let err = error as BusinessError;\n  console.error(`Failed to add Asset with sync. Code is ${err?.code}, message is ${err?.message}`);\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入备份恢复扩展能力",
      children: "接入备份恢复扩展能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为触发应用数据备份恢复，需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension",
        children: "应用接入数据备份恢复"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询关键资产同步结果",
      children: "查询关键资产同步结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口介绍",
      children: "接口介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过API文档查看查询关键资产同步结果接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#assetquerysyncresult20",
        children: "asset.querySyncResult"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在查询关键资产同步结果时，关键资产属性的内容（AssetMap）参数如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称（Tag）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "属性内容（Value）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRE_ATTR_ENCRYPTED14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否查询业务自定义附属信息被加密的关键资产同步结果。true表示查询业务自定义附属信息加密存储的关键资产同步结果，false表示查询业务自定义附属信息不加密存储的关键资产同步结果。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP_ID18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为7-127字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待查询的关键资产所属群组，默认查询不属于任何群组的关键资产同步结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件，定义工具函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { asset } from '@kit.AssetStoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考如下示例代码，进行业务功能开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let query: asset.AssetMap = new Map();\nasset.querySyncResult(query).then((res: asset.SyncResult) => {\n  console.info(`Succeeded in querying sync result: ${JSON.stringify(res)}`);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Failed to query sync result of Asset. Code is ${err.code}, message is ${err.message}`);\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在可信设备间同步过程中，新旧设备的关键资产均需处于可访问的状态，否则可能出现关键资产无法同步的情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅设置密码时可访问的关键资产，如果新旧设备中任意一台设备未设置锁屏密码，则无法同步成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅屏幕处于解锁状态时可访问的关键资产，如果新旧设备中任意一台设备的屏幕未处于解锁状态，则无法同步成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅用户认证通过后可访问的关键资产，如果旧设备未设置锁屏密码，则无法同步成功。"
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