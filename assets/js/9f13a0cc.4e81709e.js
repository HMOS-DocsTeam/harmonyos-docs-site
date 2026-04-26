"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["873024"], {
247739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_external_hardware_key_management_overview_huks_external_hardware_key_management_overview_md_9f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-external-hardware-key-management-overview-huks-external-hardware-key-management-overview-md-9f1.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_external_hardware_key_management_overview_huks_external_hardware_key_management_overview_md_9f1_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-external-hardware-key-management-overview/huks-external-hardware-key-management-overview","title":"外部密钥管理扩展简介","description":"HUKS提供统一的Ability扩展接口，驱动HAP可基于此实现外部密钥管理扩展，注册、注销自定义的硬件密钥管理模块，满足金融领域Ukey证书的浏览器双向SSL认证等场景的身份认证需求。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-external-hardware-key-management-overview/huks-external-hardware-key-management-overview.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-external-hardware-key-management-overview","slug":"/system-security/huks-kit/huks-external-key-management/huks-external-hardware-key-management-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-external-hardware-key-management-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"外部密钥管理扩展简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-external-hardware-key-management-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询密钥别名集(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-list-aliases/huks-list-aliases-ndk/"},"next":{"title":"Provider管理介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-provider-management/huks-provider-management-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-external-hardware-key-management-overview/huks-external-hardware-key-management-overview.md


const frontMatter = {
	title: '外部密钥管理扩展简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-external-hardware-key-management-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '外部密钥管理扩展简介';

const assets = {

};



const toc = [{
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "外部密钥管理扩展简介",
        children: "外部密钥管理扩展简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS提供统一的Ability扩展接口，驱动HAP可基于此实现外部密钥管理扩展，注册、注销自定义的硬件密钥管理模块，满足金融领域Ukey证书的浏览器双向SSL认证等场景的身份认证需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ukey：USB key，基于USB接口的硬件设备，可用于存储用户私钥、证书及身份认证等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南将介绍应用如何基于Ukey证书的浏览器双向SSL认证等场景，完成身份认证的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用调用接口进行身份认证的流程可参考下图，图中流程请参见图后的标注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(399473)/* ["default"] */.A) + "",
        width: "3929",
        height: "1950"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注1：Ukey设备插入。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注2：驱动HAP通过Provider管理接口，注册外部密钥管理扩展能力（Ukey Extension）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过Provider管理能力，驱动HAP可注册、注销外部密钥管理扩展能力。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-external-key-management/huks-provider-management/huks-provider-management-overview",
            children: "Provider管理"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注3：应用拉起证书授权选择弹框，弹框中展示证书列表，由用户进行选择。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3.1：通过IPC调用从Ukey硬件中读取证书信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注4：应用层向HUKS发起查询，获取证书详细信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "4.1：通过IPC调用从Ukey硬件中读取证书信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注5：用户选择具体证书后，应用将获取到证书索引标识KeyUri（即资源ID resourceId），用于打开资源、查询PIN码认证状态。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HUKS提供PIN码认证能力和认证状态查询能力。应用PIN码认证之前，可以先查询认证状态。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview",
            children: "Ukey PIN码认证"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5.1：如果资源未认证，即PIN码未认证，应用需要调用证书管理能力，拉起PIN码认证弹窗，由用户输入PIN码完成认证。完成认证后，进入5的流程，调用HUKS统一接口，执行对应操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注6：应用通过调用HUKS提供的统一接口，执行资源管理、签名验签等操作。如："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["打开与关闭资源：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-resource-management-overview",
              children: "资源管理"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["验证消息内容以及消息发送者身份的真实性：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-overview",
              children: "签名验签"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["除此以外，HUKS支持应用查询Ukey的密钥相关属性，具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-overview",
            children: "通用查询"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注7：在HUKS SA层执行证书查询、资源管理、PIN码认证及签名等核心操作。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用基于Ukey发起身份认证前，三方驱动HAP需完成："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据业务场景设计并开发应用自身的外部密钥管理扩展能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["驱动HAP需继承HUKS提供的CryptoExtensionAbility，并完成能力接口实现。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview",
            children: "CryptoExtensionAbility扩展能力"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CryptoExtensionAbility是Stage模型中扩展组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
            children: "ExtensionAbility"
          }), "的派生类。开发者可以通过继承CryptoExtensionAbility并实现自定义接口，实现定制化的外部硬件密钥管理功能，包括：调用外部硬件密钥管理的资源打开与关闭接口、外部硬件密钥管理的PIN认证实现、调用外部硬件密钥管理的通用接口等，可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-dev",
            children: "CryptoExtensionAbility适配开发指导"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将密钥管理扩展能力注册到系统HUKS服务中。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CryptoExtensionAbility可以隔离不同的Ukey驱动厂商实现的差异。驱动HAP实现的能力将通过HUKS和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-certificate-kit/certmanager/certmanager-overview",
            children: "证书管理"
          }), "的SDK开放给应用使用。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如此，浏览器等应用才能通过HUKS和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-certificate-kit/certmanager/certmanager-overview",
        children: "证书管理"
      }), "提供的API去使用驱动HAP提供的外部密钥管理能力，包括证书查询、PIN码认证、签名验签等操作。"]
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
399473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438461-4f86a12872004d2b41b069cd7eecdb7c.png");

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