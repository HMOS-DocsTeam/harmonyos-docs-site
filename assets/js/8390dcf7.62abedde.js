"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["56790"], {
119135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_introduction_devicesecurity_introduction_md_839_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-introduction-devicesecurity-introduction-md-839.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_introduction_devicesecurity_introduction_md_839_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-introduction/devicesecurity-introduction","title":"Device Security Kit简介","description":"Device Security Kit（设备安全服务）提供应用设备状态检测（DeviceVerify）、安全检测（SafetyDetect）、可信应用服务（TrustedAppService）、数字盾服务（TrustedAuthentication）、业务风险检测（BusinessRiskIntelligentDetection）、安全审计（SecurityAudit）、反诈选择器（AntifraudPicker）、防窥保护（DlpAntiPeep）、病毒防护服务管理（VirusProtectionServiceManager）和超级隐私模式（SuperPrivacyMode），可以保护应用程序免受安全威胁和保证应用的数据安全。","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-introduction/devicesecurity-introduction.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-introduction","slug":"/system-security/device-security-kit-guide/devicesecurity-introduction/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Device Security Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-introduction","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书管理对话框开发指导","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanagerdialog-guidelines/"},"next":{"title":"服务配额","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-quota/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-introduction/devicesecurity-introduction.md


const frontMatter = {
	title: 'Device Security Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-introduction',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'Device Security Kit简介';

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
  "value": "与其他Kit的关系",
  "id": "与其他kit的关系",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
        id: "device-security-kit简介",
        children: "Device Security Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device Security Kit（设备安全服务）提供应用设备状态检测（DeviceVerify）、安全检测（SafetyDetect）、可信应用服务（TrustedAppService）、数字盾服务（TrustedAuthentication）、业务风险检测（BusinessRiskIntelligentDetection）、安全审计（SecurityAudit）、反诈选择器（AntifraudPicker）、防窥保护（DlpAntiPeep）、病毒防护服务管理（VirusProtectionServiceManager）和超级隐私模式（SuperPrivacyMode），可以保护应用程序免受安全威胁和保证应用的数据安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用设备状态检测（DeviceVerify）场景：对应用在某台设备上的使用状态进行管理和检测，包括判断应用是否在该设备上首次安装，或在该设备上用户是否已获取了优惠券等的状态检测，以支撑业务进行新用户营销活动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全检测（SafetyDetect）场景：判断设备环境是否安全，比如是否被越狱、非真实设备等，可基于结果评估如何响应；判断用户访问的URL是否为恶意网址，对于恶意网址，由您评估提示或拦截用户的访问风险。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可信应用服务（TrustedAppService）场景：提供数据的安全证明服务，旨在为安全摄像头和安全地理位置功能提供基础的安全证明能力，确保图像或位置数据未被篡改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字盾服务（TrustedAuthentication）场景：提供基于TUI PIN认证和TUI界面交易信息确认的安全能力，旨在为金融应用在数字盾交易场景下提供金融安全保护。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务风险检测（BusinessRiskIntelligentDetection）场景：提供基于场景（防作弊、反欺诈）的业务风险决策能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全审计（SecurityAudit）场景：为应用提供获取当前设备上的审计数据（窗口截屏、移动存储插拔、剪切板复制粘贴等）能力，支撑审计相关业务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "反诈选择器（AntifraudPicker）场景：为反诈应用提供获取诈骗消息、诈骗通话记录和诈骗应用的能力，支撑反诈相关业务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "防窥保护（DlpAntiPeep）场景：支持应用根据窥视状态保护用户隐私，如非机主状态下不进行个性化推荐，隐藏浏览记录、支付记录、收藏记录等敏感信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "病毒防护服务管理（VirusProtectionServiceManager）场景：支持应用向设备提交自身软件信息、查询设备中防病毒软件信息列表、启停设备自带的安全防护服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "超级隐私模式（SuperPrivacyMode）场景：支持应用查询和监听超级隐私模式状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DeviceToken：由Device Security Kit生成并用于标识设备和应用身份的Token。该Token用于应用服务器与Device Security服务器通信，从而获得当前设备的状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nonce：由开发者生成，并且在系统完整性检测结果中会包含这个nonce值，调用者通过校验这个nonce值来确定检测结果没有被重放攻击。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全证明：可信应用服务模块提供的一种服务，用于验证数据的真实性和完整性，确保数据在生成、传输和存储过程中没有被篡改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证明密钥：安全证明服务中生成的加密密钥，用于生成和验证数据的数字签名。安全摄像头和安全地理位置共用同一个证明密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证明会话：安全证明服务的上下文，在使用安全摄像头或安全地理位置功能前需要创建对应的证明会话，用于验证证明密钥的有效性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与其他kit的关系",
      children: "与其他Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-service",
        children: "数字盾服务"
      }), "联合", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-kit",
        children: "Universal Keystore Kit（密钥管理服务）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-authentication-kit",
        children: "User Authentication Kit（用户认证服务）"
      }), "共同为金融应用数字盾开发提供可信UI、可信认证、可信签名能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务关联如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752077)/* ["default"] */.A) + "",
        width: "735",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "国家/地区"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用设备状态检测"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/device-security-kit-guide/devicesecurity-appendix/devicesecurity-appendix-region",
              children: "支持的国家/地区"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全检测-系统完整性检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全检测-URL检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全检测-本地系统完整性检测"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/device-security-kit-guide/devicesecurity-appendix/devicesecurity-appendix-region",
              children: "支持的国家/地区"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全检测-系统完整性增强检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可信应用服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数字盾服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全审计"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "业务风险检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "反诈选择器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "防窥保护"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "病毒防护服务管理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超级隐私模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用设备状态检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全摄像头（可信应用服务）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、PC/2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全地理位置（可信应用服务）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全图像压缩、裁剪（可信应用服务）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、PC/2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数字盾服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全审计"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "业务风险检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "反诈选择器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "防窥保护"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "病毒防护服务管理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "超级隐私模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
752077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438425-3386e35de9472996bd5e7f9757399762.jpg");

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