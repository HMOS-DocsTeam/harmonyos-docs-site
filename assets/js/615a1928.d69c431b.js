"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["516163"], {
803609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_network_management_net_netfirewall_net_netfirewall_md_615_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-network-management-net-netfirewall-net-netfirewall-md-615.json
var site_docs_system_network_network_kit_network_kit_network_management_net_netfirewall_net_netfirewall_md_615_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-network-management/net-netfirewall/net-netfirewall","title":"使用网络防火墙","description":"简介","source":"@site/docs/system-network/network-kit/network-kit-network-management/net-netfirewall/net-netfirewall.md","sourceDirName":"system-network/network-kit/network-kit-network-management/net-netfirewall","slug":"/system-network/network-kit/network-kit-network-management/net-netfirewall/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-netfirewall/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用网络防火墙","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-netfirewall","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"统计网络流量消耗","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-statistics/"},"next":{"title":"扩展认证","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-eap/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-network-management/net-netfirewall/net-netfirewall.md


const frontMatter = {
	title: '使用网络防火墙',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-netfirewall',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用网络防火墙';

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
  "value": "针对特定IP联网访问控制",
  "id": "针对特定ip联网访问控制",
  "level": 2
}, {
  "value": "针对域名联网访问控制支持拦截",
  "id": "针对域名联网访问控制支持拦截",
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
        id: "使用网络防火墙",
        children: "使用网络防火墙"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络防火墙提供如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "防火墙的基础能力，包括防火墙的使能、规则的启用与禁用、审计能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "防火墙规则的配置能力，包括规则的名称、描述、操作、生效应用、协议类型、地址、端口、出站/入站方向等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS策略的配置能力，包括配置禁止/允许解析的域名、解析使用的DNS服务器（主选/备选）（应用级）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869906)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，所有API调用都是异步的，对于异步调用的API均提供了Promise的方式，以下示例均采用Promise方式，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-netfirewall/js-apis-net-netfirewall",
        children: "@ohos.net.netFirewall (网络防火墙)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "防火墙的典型场景有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对特定IP联网访问控制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持限制特定应用访问网络。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持限制对特定IP、特定协议、特定端口的网络通信。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持限制特定应用对特定IP、特定协议、特定端口的网络通信。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持拦截规则下发后立即生效（此点针对TCP协议：需断开已有被拦截的TCP连接）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对域名联网访问控制支持拦截"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持限制应用对特定域名的DNS解析能力（仅限制非加密标准DNS协议，不限制加密、私有DNS协议）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持限制特定应用对特定域名的DNS解析能力（仅限制非加密标准DNS协议，不限制加密、私有DNS协议）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持拦截规则下发后立即生效（此点针对TCP协议：需断开已有被拦截的TCP连接）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下分别介绍具体开发方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "针对特定ip联网访问控制",
      children: "针对特定IP联网访问控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备通过硬件接口，插入网线。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从@kit.NetworkKit中导入netfirewall命名空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入netFirewall命名空间。\nimport { netFirewall } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户调用setNetFirewallPolicy方法，打开防火墙。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// IP类型\ninterface IpType{\n  family:number;\n  type:number;\n  address?:string;\n  mask?:number;\n  startIp?:string;\n  endIp?:string;\n}\n// IP端口\ninterface IpPort{\n  startPort:number;\n  endPort:number;\n}\n// ...\n    // 定义防火墙策略：打开，入站阻止，出站允许。\n    let policy: netFirewall.NetFirewallPolicy = {\n      isOpen: true,\n      inAction: netFirewall.FirewallRuleAction.RULE_DENY,\n      outAction: netFirewall.FirewallRuleAction.RULE_ALLOW\n    };\n\n    // 给用户100设置防火墙策略。\n    netFirewall.setNetFirewallPolicy(100, policy).then(() => {\n      hilog.info(0x0000, 'testTag', `set firewall policy success.`);\n    }).catch((error : BusinessError) => {\n      hilog.error(0x0000, 'testTag', `error: set firewall policy failed: ${JSON.stringify(error)}`);\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户通过addNetFirewallRule方法，添加防火墙规则。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化具体的防火墙ip类型规则。\nlet ipRule: netFirewall.NetFirewallRule = {\n  name: 'rule1',\n  description: 'rule1 description',\n  direction: netFirewall.NetFirewallRuleDirection.RULE_IN,\n  action: netFirewall.FirewallRuleAction.RULE_DENY,\n  type: netFirewall.NetFirewallRuleType.RULE_IP,\n  isEnabled: true,\n  appUid: 20001,\n  localIps: [\n    {\n      family: 1,\n      type: 1,\n      address: '10.10.1.1',\n      mask: 32\n    },{\n    family: 1,\n    type: 2,\n    startIp: '10.20.1.1',\n    endIp: '10.20.1.10'\n  }] as IpType[],\n  remoteIps:[\n    {\n      family: 1,\n      type: 1,\n      address: '20.10.1.1',\n      mask: 32\n    },{\n    family: 1,\n    type: 2,\n    startIp: '20.20.1.1',\n    endIp: '20.20.1.10'\n  }] as IpType[],\n  protocol: 6,\n  localPorts: [\n    {\n      startPort: 1000,\n      endPort: 1000\n    },{\n    startPort: 2000,\n    endPort: 2001\n  }] as IpPort[],\n  remotePorts: [\n    {\n      startPort: 443,\n      endPort: 443\n    }] as IpPort[],\n  userId: 100\n};\n// 添加防火墙规则。\nnetFirewall.addNetFirewallRule(ipRule).then((result: number) => {\n  // ...\n  hilog.info(0x0000, 'testTag', `rule Id: ${result}`);\n}, (reason: BusinessError) => {\n  // ...\n  hilog.error(0x0000, 'testTag', `error: add firewall rule failed:  ${JSON.stringify(reason)}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "针对域名联网访问控制支持拦截",
      children: "针对域名联网访问控制支持拦截"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备通过硬件接口，插入网线。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从@kit.NetworkKit中导入netFirewall命名空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从@kit.NetworkKit中导入netFirewall命名空间。\nimport { netFirewall } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用setNetFirewallPolicy方法，打开防火墙。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "interface domain{\n  isWildcard: boolean;\n  domain: string;\n}\n// ...\n    // 定义防火墙策略：打开，入站阻止，出站允许。\n    let policy: netFirewall.NetFirewallPolicy = {\n      isOpen: true,\n      inAction: netFirewall.FirewallRuleAction.RULE_DENY,\n      outAction: netFirewall.FirewallRuleAction.RULE_ALLOW\n    };\n\n    // 给用户100设置防火墙策略\n    netFirewall.setNetFirewallPolicy(100, policy).then(() => {\n      hilog.info(0x0000, 'testTag', `set firewall policy success.`);\n    }).catch((error : BusinessError) => {\n      hilog.error(0x0000, 'testTag', `error: set firewall policy failed: ${JSON.stringify(error)}`);\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过addNetFirewallRule方法，添加防火墙规则。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化具体的防火墙域名类型规则。\nlet domainRule: netFirewall.NetFirewallRule = {\n  name: 'rule2',\n  description: 'rule2 description',\n  direction: netFirewall.NetFirewallRuleDirection.RULE_IN,\n  action: netFirewall.FirewallRuleAction.RULE_DENY,\n  type: netFirewall.NetFirewallRuleType.RULE_DOMAIN,\n  isEnabled: true,\n  appUid: 20002,\n  domains: [\n    {\n      isWildcard: false,\n      domain: 'www.HarmonyOS.cn'\n    },{\n    isWildcard: true,\n    domain: '*.HarmonyOS.cn'\n  }] as domain[],\n  userId: 100\n};\n\n// 添加防火墙规则。\nnetFirewall.addNetFirewallRule(domainRule).then((result: number) => {\n  // ...\n  hilog.info(0x0000, 'testTag', `rule Id: ${result}`);\n}, (reason: BusinessError) => {\n  // ...\n  hilog.error(0x0000, 'testTag', `error: add firewall rule failed:  ${JSON.stringify(reason)}`);\n});\n"
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
869906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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