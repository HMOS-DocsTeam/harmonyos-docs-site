"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["790537"], {
512146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_extension_ability_support_huks_extension_ability_support_overview_huks_extension_ability_support_overview_md_412_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-extension-ability-support-huks-extension-ability-support-overview-huks-extension-ability-support-overview-md-412.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_extension_ability_support_huks_extension_ability_support_overview_huks_extension_ability_support_overview_md_412_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/huks-extension-ability-support-overview","title":"CryptoExtensionAbility扩展能力介绍","description":"CryptoExtensionAbility是Stage模型中扩展组件ExtensionAbility的派生类。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/huks-extension-ability-support-overview.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview","slug":"/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"CryptoExtensionAbility扩展能力介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-extension-ability-support-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通用查询(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/"},"next":{"title":"CryptoExtensionAbility适配开发指导","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/huks-extension-ability-support-overview.md


const frontMatter = {
	title: 'CryptoExtensionAbility扩展能力介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-extension-ability-support-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'CryptoExtensionAbility扩展能力介绍';

const assets = {

};



const toc = [{
  "value": "核心能力实现",
  "id": "核心能力实现",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cryptoextensionability扩展能力介绍",
        children: "CryptoExtensionAbility扩展能力介绍"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CryptoExtensionAbility是Stage模型中扩展组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
        children: "ExtensionAbility"
      }), "的派生类。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CryptoExtensionAbility给驱动厂商提供外部密钥管理扩展能力所需接口定义，包括打开/关闭资源、PIN码认证、签名验签、导出证书等接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CryptoExtensionAbility可以隔离底层硬件（Ukey驱动）厂商实现差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方驱动HAP应用如需定义自身外部密钥管理扩展能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先，需继承CryptoExtensionAbility并完成相关的接口实现。其次，通过Provider注册接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptoregisterprovider",
        children: "registerProvider"
      }), "完成能力注册。最后，由HUKS和证书管理将对应的密钥管理扩展能力开放给应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "核心能力实现",
      children: "核心能力实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CryptoExtensionAbility主要实现以下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设备管理，支持单个ExtensionAbility连接多个Ukey。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "单个ExtensionAbility最多支持连接10个Ukey设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "需实现设备热插拔检测和管理机制，确保在Ukey插入/拔出时，能及时通知ExtensionAbility。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "需实现设备级别的资源隔离，确保每个Ukey设备的资源对其他Ukey设备是不可见的。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["句柄管理，针对同一个Ukey资源（例如容器下的密钥），支持应用维度句柄资源管理，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityonopenresource",
          children: "onOpenResource"
        }), "打开资源，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityoncloseresource",
          children: "onCloseResource"
        }), "关闭资源。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "单个ExtensionAbility最多支持打开100个Ukey密钥资源句柄。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "打开资源时需打开底层Ukey句柄，并映射为新的句柄返回给HUKS。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "关闭资源时需关闭底层Ukey句柄，并释放缓存的句柄映射。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持多个HarmonyOS应用，打开/关闭同一个Ukey密钥资源。例如：HarmonyOS应用1，打开容器A后， HarmonyOS应用2，也可以再次打开容器A。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持多个HarmonyOS应用，操作同一个Ukey密钥资源。例如：HarmonyOS应用1操作容器A中的私钥签名后，HarmonyOS应用2也验证PIN码后，也可以操作容器A中的私钥进行签名，两者互不影响。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥会话管理，支持三段式密钥管理操作，单次签名验签需通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityoninitsession",
          children: "onInitSession"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityonupdatesession",
          children: "onUpdateSession"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityonfinishsession",
          children: "onFinishSession"
        }), "三个函数三步配合完成，需支持会话管理，缓存密钥会话状态。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "init操作，初始化密钥会话，并返回会话句柄信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "update操作，传入分组数据，对分组数据进行密码操作，更新密钥会话信息后，将中间数据（如果有）返回。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "finish操作，对传入最后一段分组数据，进行密钥返回操作，并结束密钥会话，将最终结果返回。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证状态管理，支持应用维度的认证状态管理（认证/查询/重置）。针对同一个Ukey中的应用A，HarmonyOS应用1验证Ukey应用A的PIN码后，HarmonyOS应用2如果要访问Ukey应用A，也需要进行PIN码认证操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书查询，支持根据证书类型，枚举所有证书或查询单个容器中的证书。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通用查询，支持通用查询操作，为上层业务应用提供Ukey设备信息、PIN码信息、公钥信息等查询能力。接口的属性ID采用定义在GMT 0016-2023 标准中的SKF函数名称，长度必须介于 1-100 字节。调用端和ExtensionAbility实现需约定使用的函数名集合及其参数/返回格式。"
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