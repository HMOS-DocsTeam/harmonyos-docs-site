"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["67370"], {
548562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_asset_store_kit_asset_arkts_asset_js_group_access_control_asset_js_group_access_control_md_82e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-asset-store-kit-asset-arkts-asset-js-group-access-control-asset-js-group-access-control-md-82e.json
var site_docs_system_security_asset_store_kit_asset_arkts_asset_js_group_access_control_asset_js_group_access_control_md_82e_namespaceObject = JSON.parse('{"id":"system-security/asset-store-kit/asset-arkts/asset-js-group-access-control/asset-js-group-access-control","title":"管理群组关键资产(ArkTS)","description":"以下为管理群组关键资产使用示例，请先查看开发指导：","source":"@site/docs/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control/asset-js-group-access-control.md","sourceDirName":"system-security/asset-store-kit/asset-arkts/asset-js-group-access-control","slug":"/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control/","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"管理群组关键资产(ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-group-access-control","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询需要用户认证的关键资产(ArkTS)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-query-auth/"},"next":{"title":"同步（备份恢复）关键资产(ArkTS)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-sync/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control/asset-js-group-access-control.md


const frontMatter = {
	title: '管理群组关键资产(ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-group-access-control',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '管理群组关键资产(ArkTS)';

const assets = {

};



const toc = [{
  "value": "前置条件",
  "id": "前置条件",
  "level": 2
}, {
  "value": "新增群组关键资产",
  "id": "新增群组关键资产",
  "level": 2
}, {
  "value": "删除群组关键资产",
  "id": "删除群组关键资产",
  "level": 2
}, {
  "value": "更新群组关键资产",
  "id": "更新群组关键资产",
  "level": 2
}, {
  "value": "查询单条群组关键资产明文",
  "id": "查询单条群组关键资产明文",
  "level": 2
}, {
  "value": "查询单条群组关键资产属性",
  "id": "查询单条群组关键资产属性",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "管理群组关键资产arkts",
        children: "管理群组关键资产(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为管理群组关键资产使用示例，请先查看开发指导："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/asset-store-kit/asset-arkts/asset-js-add",
          children: "新增关键资产(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/asset-store-kit/asset-arkts/asset-js-remove",
          children: "删除关键资产(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/asset-store-kit/asset-arkts/asset-js-update",
          children: "更新关键资产(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/asset-store-kit/asset-arkts/asset-js-query",
          children: "查询关键资产(ArkTS)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前置条件",
      children: "前置条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用配置文件app.json5中，配置群组ID，如：demo_group_id。群组支持配置多个群组ID。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    // 其他配置项此处省略。\n    \"assetAccessGroups\": [\n      \"demo_group_id\",\n      // \"another_group_id\",\n      // ...\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件，定义工具函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { asset } from '@kit.AssetStoreKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToArray(str: string): Uint8Array {\n  let textEncoder = new util.TextEncoder();\n  return textEncoder.encodeInto(str);\n}\n\nfunction arrayToString(arr: Uint8Array): string {\n  let textDecoder = util.TextDecoder.create('utf-8', { ignoreBOM: true });\n  let str = textDecoder.decodeToString(arr, { stream: false });\n  return str;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新增群组关键资产",
      children: "新增群组关键资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在群组中新增密码为demo_pwd、别名为demo_alias、附属信息为demo_label的关键资产。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let attr: asset.AssetMap = new Map();\nattr.set(asset.Tag.SECRET, stringToArray('demo_pwd'));\nattr.set(asset.Tag.ALIAS, stringToArray('demo_alias'));\nattr.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label'));\nattr.set(asset.Tag.GROUP_ID, stringToArray('demo_group_id'));\ntry {\n  asset.add(attr).then(() => {\n    console.info(`Succeeded in adding Asset to the group.`);\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to add Asset to the group. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  })\n} catch (error) {\n  let err = error as BusinessError;\n  console.error(`Failed to add Asset to the group. Code is ${err?.code}, message is ${err?.message}`);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "删除群组关键资产",
      children: "删除群组关键资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在群组中删除别名为demo_alias的关键资产。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 此处指定别名删除单条群组关键资产，也可不指定别名删除多条群组关键资产。\nquery.set(asset.Tag.GROUP_ID, stringToArray('demo_group_id'));\ntry {\n  asset.remove(query).then(() => {\n    console.info(`Succeeded in removing Asset from the group.`);\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to remove Asset from the group. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (err) {\n  console.error(`Failed to remove Asset from the group. Code is ${err?.code}, message is ${err?.message}`);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新群组关键资产",
      children: "更新群组关键资产"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在群组中更新别名为demo_alias的关键资产，明文更新为demo_pwd_new，附属属性更新为demo_label_new。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.ALIAS, stringToArray('demo_alias'));\nquery.set(asset.Tag.GROUP_ID, stringToArray('demo_group_id'));\nlet attrsToUpdate: asset.AssetMap = new Map();\nattrsToUpdate.set(asset.Tag.SECRET, stringToArray('demo_pwd_new'));\nattrsToUpdate.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label_new'));\ntry {\n  asset.update(query, attrsToUpdate).then(() => {\n    console.info(`Succeeded in updating Asset in the group.`);\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to update Asset in the group. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (err) {\n  console.error(`Failed to update Asset in the group. Code is ${err?.code}, message is ${err?.message}`);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询单条群组关键资产明文",
      children: "查询单条群组关键资产明文"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在群组中查询别名为demo_alias的关键资产明文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 指定了群组关键资产别名，最多查询到一条满足条件的群组关键资产。\nquery.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ALL); // 此处表示需要返回群组关键资产的所有信息，即属性+明文。\nquery.set(asset.Tag.GROUP_ID, stringToArray('demo_group_id'));\ntry {\n  asset.query(query).then((res: Array<asset.AssetMap>) => {\n    for (let i = 0; i < res.length; i++) {\n      // 解析secret。\n      let secret: Uint8Array = res[i].get(asset.Tag.SECRET) as Uint8Array;\n      // 将Uint8Array转换为string类型。\n      let secretStr: string = arrayToString(secret);\n    }\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to query Asset plaintext from the group. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (err) {\n  console.error(`Failed to query Asset plaintext from the group. Code is ${err?.code}, message is ${err?.message}`);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询单条群组关键资产属性",
      children: "查询单条群组关键资产属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在群组中查询别名为demo_alias的关键资产属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 指定了群组关键资产别名，最多查询到一条满足条件的群组关键资产。\nquery.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ATTRIBUTES); // 此处表示仅返回群组关键资产属性，不包含群组关键资产明文。\nquery.set(asset.Tag.GROUP_ID, stringToArray('demo_group_id'));\ntry {\n  asset.query(query).then((res: Array<asset.AssetMap>) => {\n    for (let i = 0; i < res.length; i++) {\n      // 解析属性。\n      let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;\n      console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);\n    }\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to query Asset attribute from the group. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (err) {\n  console.error(`Failed to query Asset attribute from the group. Code is ${err?.code}, message is ${err?.message}`);\n  // ...\n}\n"
      })
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