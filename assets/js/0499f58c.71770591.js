"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["533106"], {
161594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_network_management_net_eap_net_eap_md_049_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-network-management-net-eap-net-eap-md-049.json
var site_docs_system_network_network_kit_network_kit_network_management_net_eap_net_eap_md_049_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-network-management/net-eap/net-eap","title":"扩展认证","description":"简介","source":"@site/docs/system-network/network-kit/network-kit-network-management/net-eap/net-eap.md","sourceDirName":"system-network/network-kit/network-kit-network-management/net-eap","slug":"/system-network/network-kit/network-kit-network-management/net-eap/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-eap/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"扩展认证","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-eap","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用网络防火墙","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-netfirewall/"},"next":{"title":"Network Boost Kit简介","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-network-management/net-eap/net-eap.md


const frontMatter = {
	title: '扩展认证',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-eap',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '扩展认证';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "802.1X认证流程中加入自定义的安全校验",
  "id": "8021x认证流程中加入自定义的安全校验",
  "level": 2
}, {
  "value": "使用eth接口发起802.1X认证流程",
  "id": "使用eth接口发起8021x认证流程",
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
        id: "扩展认证",
        children: "扩展认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分企业用户的PC网络接入认证使用802.1X认证方式，认证客户端由第三方厂商提供。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349690)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展认证能力从API version 20开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证客户端有以下定制行为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在EAP协议报文内封装私有数据，该私有数据遵循客户端与认证服务器约定的数据结构。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在认证过程中，客户端在本地进行安检扫描等定制动作，定制动作结束后，客户端向接入设备回复认证消息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在这种机制下，需要操作系统提供三方客户端介入802.1X认证流程的机制，支撑客户端的定制认证。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为满足以上需求场景，定制化802.1X认证提供如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定制化监听与修改802.1X报文交互流程的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对eth网口发起802.1X认证和去认证的能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制化802.1X认证流程的典型场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "企业网管应用，需要在企业Wi-Fi的802.1X认证流程中加入自定义的安全校验，来接入企业内网。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持指定要进行定制化处理的报文类型和EAP类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持根据自定义的安全校验结果来指定标准认证流程的结果。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "企业网管应用，需要支持使用eth网口进行802.1X安全认证流程来接入企业内网。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持标准802.1X认证流程。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持定制化802.1X认证流程。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发方式介绍如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8021x认证流程中加入自定义的安全校验",
      children: "802.1X认证流程中加入自定义的安全校验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从@kit.NetworkKit中导入eap命名空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { eap } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eapregcustomeaphandler",
            children: "regCustomEapHandler"
          }), "方法，注册所需监听的EAP报文类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在802.1X认证过程中，系统会将符合条件的EAP报文传递至callback函数（如示例代码中的eapData函数）中，供企业应用获取。报文传递至callback函数后，802.1X认证流程会阻塞等待，用户能够获取到完整的报文内容。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（1）若注册的是由服务器发送给客户端的报文类型（即eapCode=1），则此时可以从报文中看到由服务器加入的自定义内容。应用根据自定义内容，判断认证是否应该继续往后续步骤进行，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eapreplycustomeapdata",
            children: "replyCustomEapData"
          }), "方法通知系统。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（2）若注册的报文类型是由客户端发给服务器的（即eapCode=2），则此时获取到的是原始的802.1X认证报文，应用需要在原始报文内容中加入自己的自定义内容，并将加入自定义内容后的报文内容调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eapreplycustomeapdata",
            children: "replyCustomEapData"
          }), "方法通知系统。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）若注册的报文类型是服务器返回的成功（即eapCode=3）或失败（即eapCode=4）的结果，客户端可在接收到此结果之后做定制处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下注册服务器发送给客户端的报文类型（即eapCode=1，eapType=25）为例，若需注册其他类型，修改eapCode值后再调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eapregcustomeaphandler",
            children: "regCustomEapHandler"
          }), "方法即可。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let netType = 1;\nlet eapCode= 1; // eap request\nlet eapType= 25; // EAP_PEAP\nlet result = 1;\n\nlet eapData = (eapData:eap.EapData):void => {\n  hilog.info(0x0000, 'testTag', 'rsp result',JSON.stringify(eapData));\n  const newBuffer = new Uint8Array(eapData.bufferLen);\n  newBuffer.set(eapData.eapBuffer, 0);\n  let eapData2: eap.EapData = {\n    msgId: eapData.msgId,\n    eapBuffer: newBuffer,\n    bufferLen: newBuffer.length\n  }\n  try{\n    eap.replyCustomEapData(result, eapData2);\n    hilog.info(0x0000, 'testTag', 'replyCustomEapData success');\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', 'errCode: ' + err.code + ' , errMessage: ' + err.message);\n  }\n}\nfunction serverReplyCustomEapData() {\n  try{\n    eap.regCustomEapHandler(netType, eapCode, eapType, eapData);\n    hilog.info(0x0000, 'testTag', 'regCustomEapHandler success');\n    // ...\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', 'errCode: ' + err.code + 'errMessage: ' + err.message);\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若需取消定制化，可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eapunregcustomeaphandler",
            children: "unregCustomEapHandler"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let netType = 1;\nlet eapCode= 1; // eap request\nlet eapType= 25; // EAP_PEAP\nlet result = 1;\n\nlet eapData = (eapData:eap.EapData):void => {\n  hilog.info(0x0000, 'testTag', 'rsp result',JSON.stringify(eapData));\n  const newBuffer = new Uint8Array(eapData.bufferLen);\n  newBuffer.set(eapData.eapBuffer, 0);\n  let eapData2: eap.EapData = {\n    msgId: eapData.msgId,\n    eapBuffer: newBuffer,\n    bufferLen: newBuffer.length\n  }\n  // ...\n}\n// ...\n  try {\n    eap.unregCustomEapHandler(netType, eapCode, eapType, eapData);\n    hilog.info(0x0000, 'testTag', 'unregCustomEapHandler success');\n    // ...\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', 'errCode: ' + err.code + ', errMessage: ' + err.message);\n    // ...\n  }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用eth接口发起8021x认证流程",
      children: "使用eth接口发起802.1X认证流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备通过硬件接口，插入网线。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从@kit.NetworkKit中导入eap命名空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { eap } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当企业管理软件需要进行认证，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eapstartetheap",
            children: "startEthEap"
          }), "方法时，会发起802.1X认证流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const netId: number = 100;\n// ...\n  let profile: eap.EthEapProfile = {\n    eapMethod: eap.EapMethod.EAP_TTLS,\n    phase2Method: eap.Phase2Method.PHASE2_AKA_PRIME,\n    identity: 'identity',\n    anonymousIdentity: 'anonymousIdentity',\n    password: 'password',\n    caCertAliases: 'caCertAliases',\n    caPath: 'caPath',\n    clientCertAliases: 'clientCertAliases',\n    certEntry: new Uint8Array([5,6,7,8,9,10]),\n    certPassword: 'certPassword',\n    altSubjectMatch: 'altSubjectMatch',\n    domainSuffixMatch: 'domainSuffixMatch',\n    realm: 'realm',\n    plmn: 'plmn',\n    eapSubId: 1\n  };\n\n  try {\n    eap.startEthEap(netId, profile);\n    hilog.info(0x0000, 'testTag', 'startEthEap success');\n    // ...\n  } catch (err) {\n    // ...\n    hilog.error(0x0000, 'testTag', 'errCode: ' + err.code + ', errMessage: ' + err.message);\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当企业管理软件需要退出认证状态，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-eap/js-apis-net-eap#eaplogoffetheap",
            children: "logOffEthEap"
          }), "方法，即会发起802.1X取消认证流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const netId: number = 100;\n// ...\n  try{\n    eap.logOffEthEap(netId);\n    hilog.error(0x0000, 'testTag', 'logOffEthEap success');\n    // ...\n  } catch (err) {\n    // ...\n    hilog.error(0x0000, 'testTag', 'errCode: ' + err.code + ', errMessage: ' + err.message);\n  }\n"
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
349690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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