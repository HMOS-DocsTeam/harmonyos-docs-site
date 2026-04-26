"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["822895"], {
75987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_mdm_kit_mdm_kit_admin_mdm_kit_admin_md_644_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-mdm-kit-mdm-kit-admin-mdm-kit-admin-md-644.json
var site_docs_system_basicfun_mdm_kit_mdm_kit_admin_mdm_kit_admin_md_644_namespaceObject = JSON.parse('{"id":"system-basicfun/mdm-kit/mdm-kit-admin/mdm-kit-admin","title":"EnterpriseAdminExtensionAbility开发指南","description":"概述","source":"@site/docs/system-basicfun/mdm-kit/mdm-kit-admin/mdm-kit-admin.md","sourceDirName":"system-basicfun/mdm-kit/mdm-kit-admin","slug":"/system-basicfun/mdm-kit/mdm-kit-admin/","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-admin/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"EnterpriseAdminExtensionAbility开发指南","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-admin","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MDM Kit开发指南","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-guide/"},"next":{"title":"MDM Kit术语","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-term/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/mdm-kit/mdm-kit-admin/mdm-kit-admin.md


const frontMatter = {
	title: 'EnterpriseAdminExtensionAbility开发指南',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-admin',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'EnterpriseAdminExtensionAbility开发指南';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
    header: "header",
    img: "img",
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
        id: "enterpriseadminextensionability开发指南",
        children: "EnterpriseAdminExtensionAbility开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业设备管理扩展能力组件，是设备管理应用必备组件。当开发者为企业开发设备管理应用时，需继承EnterpriseAdminExtensionAbility，在EnterpriseAdminExtensionAbility实例中实现MDM业务逻辑，EnterpriseAdminExtensionAbility实现了系统管理状态变化通知功能，并定义了管理应用激活、去激活、应用安装、卸载事件等回调接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下为本次开发示例所使用的接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability",
        children: "企业设备管理扩展能力接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#onadminenabled",
              children: "onAdminEnabled(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备管理应用被激活回调方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#onadmindisabled",
              children: "onAdminDisabled(): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备管理应用被解除激活回调方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#onbundleadded",
              children: "onBundleAdded(bundleName: string): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用安装回调方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#onbundleremoved",
              children: "onBundleRemoved(bundleName: string): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用卸载回调方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#ondeviceadminenabled23",
              children: "onDeviceAdminEnabled(bundleName: string): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通设备管理应用被激活回调方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterpriseadminextensionability/js-apis-enterpriseadminextensionability#ondeviceadmindisabled23",
              children: "onDeviceAdminDisabled(bundleName: string): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通设备管理应用被解除激活回调方法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新建一个工程后，结构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924877)/* ["default"] */.A) + "",
        width: "386",
        height: "369"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先，创建一个EnterpriseAdmin类型的ExtensionAbility（也就是EnterpriseAdminExtensionAbility）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390472)/* ["default"] */.A) + "",
        width: "423",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次，打开新建的EnterpriseAdminAbility文件，导入EnterpriseAdminExtensionAbility模块，使其继承EnterpriseAdminExtensionAbility并加上需要的应用通知回调方法，如onAdminEnabled()、onAdminDisabled()等回调方法。当设备管理应用激活或者解除激活时，可以在对应回调方法中接收系统发送通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';\n// ···\n\nexport default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {\n// ···\n\n  // 设备管理器应用激活回调方法，应用可在此回调函数中进行初始化策略设置。\n  onAdminEnabled() {\n    console.info('onAdminEnabled');\n    // ···\n  }\n\n  // 设备管理器应用去激活回调方法，应用可在此回调函数中通知企业管理员设备已脱管。\n  onAdminDisabled() {\n    console.info('onAdminDisabled');\n    // ···\n  }\n\n  // 应用安装回调方法，应用可在此回调函数中进行事件上报，通知企业管理员。\n  onBundleAdded(bundleName: string) {\n    console.info('EnterpriseAdminAbility onBundleAdded bundleName:' + bundleName);\n  }\n\n  // 应用卸载回调方法，应用可在此回调函数中进行事件上报，通知企业管理员。\n  onBundleRemoved(bundleName: string) {\n    console.info('EnterpriseAdminAbility onBundleRemoved bundleName' + bundleName);\n  }\n\n  // 普通设备管理应用激活回调方法，应用可在此回调函数中进行初始化策略设置\n  onDeviceAdminEnabled(bundleName: string) {\n    console.info(\"EnterpriseAdminAbility onDeviceAdminEnabled bundleName:\" + bundleName);\n  }\n\n  // 普通设备管理应用解除激活回调方法，应用可在此回调函数中通知企业管理员设备已脱管\n  onDeviceAdminDisabled(bundleName: string) {\n    console.info(\"EnterpriseAdminAbility onDeviceAdminDisabled bundleName\" + bundleName);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["最后，在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "配置文件中将EnterpriseAdminAbility注册为ExtensionAbility，type标签需要设置为“enterpriseAdmin”，srcEntry标签表示当前ExtensionAbility组件所对应的代码路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"extensionAbilities\": [\n  {\n    \"name\": \"EnterpriseAdminAbility\",\n    \"type\": \"enterpriseAdmin\",\n    \"exported\": true,\n    \"srcEntry\": \"./ets/enterpriseadminability/EnterpriseAdminAbility.ets\"\n  }\n],\n"
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
390472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958464-753ab7f6a81c797b4b9371ebbf383f63.png");

},
924877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438509-c9ebd8dce755986592a134b2ac457e6e.png");

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