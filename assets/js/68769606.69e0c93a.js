"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["988326"], {
831255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_storage_service_cloudfoundation_storage_config_cloudfoundation_storage_config_md_687_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-storage-service-cloudfoundation-storage-config-cloudfoundation-storage-config-md-687.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_storage_service_cloudfoundation_storage_config_cloudfoundation_storage_config_md_687_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-config/cloudfoundation-storage-config","title":"设置云存储配置项","description":"约束与限制","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-config/cloudfoundation-storage-config.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-config","slug":"/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-config/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"设置云存储配置项","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-storage-config","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"删除数据","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-delete/"},"next":{"title":"初始化全局应用上下文","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-initialize-context/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-config/cloudfoundation-storage-config.md


const frontMatter = {
	title: '设置云存储配置项',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-storage-config',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '设置云存储配置项';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
        id: "设置云存储配置项",
        children: "设置云存储配置项"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“entry/src/main/module.json5”文件中添加网络权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果存在需要登录应用才能使用云存储的场景（如上传下载文件），您需要执行如下操作："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudcommon/cloudfoundation-cloudcommon#authprovider",
              children: "通过AuthProvider获取用户凭据"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudcommon/cloudfoundation-cloudcommon#cloudcommoninit",
              children: "cloudCommon.init()"
            }), "方法进行初始化时，传入获取的凭据。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）自定义初始化参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如开发者需要自定义云存储接口使用的网络类型或任务模式等初始化参数，可参考如下配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudcommon/cloudfoundation-cloudcommon#storageoptions",
                children: "StorageOptions.network"
              }), "配置云存储接口使用的网络类型，不配置则使用默认值request.agent.Network.ANY。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { cloudCommon } from '@kit.CloudFoundationKit';\nimport { request } from '@kit.BasicServicesKit';\n\n// 设置云存储只使用wifi网络\ncloudCommon.init({\n  storageOptions: {\n    network: request.agent.Network.WIFI\n  }\n})\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudcommon/cloudfoundation-cloudcommon#storageoptions",
                children: "StorageOptions.mode"
              }), "配置云存储上传下载任务的工作模式，不配置则使用默认值request.agent.Mode.BACKGROUND。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { cloudCommon } from '@kit.CloudFoundationKit';\nimport { request } from '@kit.BasicServicesKit';\n\n// 设置云存储上传下载任务为前台模式\ncloudCommon.init({\n  storageOptions: {\n    mode: request.agent.Mode.FOREGROUND\n  }\n})\n"
              })
            }), "\n"]
          }), "\n"]
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