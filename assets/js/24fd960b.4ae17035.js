"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["846125"], {
167725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_distributed_data_sync_sync_app_data_across_devices_overview_sync_app_data_across_devices_overview_md_24f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-distributed-data-sync-sync-app-data-across-devices-overview-sync-app-data-across-devices-overview-md-24f.json
var site_docs_arkdata_distributed_data_sync_sync_app_data_across_devices_overview_sync_app_data_across_devices_overview_md_24f_namespaceObject = JSON.parse('{"id":"arkdata/distributed-data-sync/sync-app-data-across-devices-overview/sync-app-data-across-devices-overview","title":"同应用跨设备数据同步概述","description":"场景介绍","source":"@site/docs/arkdata/distributed-data-sync/sync-app-data-across-devices-overview/sync-app-data-across-devices-overview.md","sourceDirName":"arkdata/distributed-data-sync/sync-app-data-across-devices-overview","slug":"/arkdata/distributed-data-sync/sync-app-data-across-devices-overview/","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/sync-app-data-across-devices-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"同应用跨设备数据同步概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sync-app-data-across-devices-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过向量数据库实现数据持久化 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/native-vector-store-guidelines/"},"next":{"title":"键值型数据库跨设备数据同步 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-kv-store/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/distributed-data-sync/sync-app-data-across-devices-overview/sync-app-data-across-devices-overview.md


const frontMatter = {
	title: '同应用跨设备数据同步概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sync-app-data-across-devices-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '同应用跨设备数据同步概述';

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
  "value": "跨设备同步访问控制机制",
  "id": "跨设备同步访问控制机制",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "同应用跨设备数据同步概述",
        children: "同应用跨设备数据同步概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备数据同步功能（即分布式功能）指将数据库中的数据同步到组网环境中的其他设备。该功能常用于在可信认证的不同设备间自由同步、修改和查询用户应用程序数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：当设备1上的应用A在分布式数据库中增、删、改数据后，设备2上的应用A也可以获取到该数据库变化。可在分布式图库、备忘录、联系人、文件管理器等场景中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同应用间订阅数据库变化通知，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/cross-app-data-share/data-share-overview",
        children: "跨应用数据共享"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据跨设备同步数据生命周期的不同，可以分为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "临时数据生命周期较短，通常保存到内存中。比如游戏应用产生的过程数据，建议使用分布式数据对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "持久数据生命周期较长，需要保存到存储的数据库中，根据数据关系和特点，可以选择关系型数据库或者键值型数据库。比如图库应用的各种相册、封面、图片等属性信息，建议使用关系型数据库；图库应用的具体图片缩略图，建议使用键值型数据库。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在分布式场景中，会涉及多个设备，组网内设备之间看到的数据是否一致称为分布式数据库的一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据库一致性可以分为强一致性、弱一致性和最终一致性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "强一致性：是指某一设备成功增、删、改数据后，组网内任意设备可立即读取数据获得更新后的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "弱一致性：是指某一设备成功增、删、改数据后，组网内设备可能读取到本次更新后的数据，也可能读取不到，不能保证在多长时间后每个设备的数据一定是一致的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最终一致性：是指某一设备成功增、删、改数据后，组网内设备可能读取不到本次更新后的数据，但在某个时间窗口之后组网内设备的数据能够达到一致状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强一致性对分布式数据的管理要求非常高，在服务器的分布式场景中可能会遇到。由于移动终端设备具有不常在线且无中心的特点，所以同应用跨设备数据同步仅支持最终一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨设备同步访问控制机制",
      children: "跨设备同步访问控制机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数据跨设备同步时，数据管理基于设备等级和数据安全标签进行访问控制，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/access-control-by-device-and-data-level#%E8%B7%A8%E8%AE%BE%E5%A4%87%E5%90%8C%E6%AD%A5%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6%E6%9C%BA%E5%88%B6",
        children: "跨设备同步访问控制机制"
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