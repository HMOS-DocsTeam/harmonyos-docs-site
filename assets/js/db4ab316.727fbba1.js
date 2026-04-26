"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["795505"], {
580485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_command_line_utilities_network_netcopilot_network_netcopilot_md_db4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-command-line-utilities-network-netcopilot-network-netcopilot-md-db4.json
var site_docs_system_debug_optimize_debugging_commands_command_line_utilities_network_netcopilot_network_netcopilot_md_db4_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/network-netcopilot","title":"netcopilot工具","description":"netcopilot是一款帮助开发者进行网络模拟的工具，通过hdc命令行直接调用网络领航员接口，执行网络领航员请求，目前已支持预置场景场景调用和自定义场景调用。","source":"@site/docs/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/network-netcopilot.md","sourceDirName":"system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot","slug":"/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"netcopilot工具","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/network-netcopilot","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"rawheap-translator工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator/"},"next":{"title":"二进制签名工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/binary-sign-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/network-netcopilot.md


const frontMatter = {
	title: 'netcopilot工具',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/network-netcopilot',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'netcopilot工具';

const assets = {

};



const toc = [{
  "value": "使用方法",
  "id": "使用方法",
  "level": 2
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 3
}, {
  "value": "参数列表",
  "id": "参数列表",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "使用帮助",
  "id": "使用帮助",
  "level": 3
}, {
  "value": "开启/关闭领航员",
  "id": "开启关闭领航员",
  "level": 3
}, {
  "value": "查看网络场景列表",
  "id": "查看网络场景列表",
  "level": 3
}, {
  "value": "启动场景模拟",
  "id": "启动场景模拟",
  "level": 3
}, {
  "value": "停止场景模拟",
  "id": "停止场景模拟",
  "level": 3
}, {
  "value": "新增自定义场景",
  "id": "新增自定义场景",
  "level": 3
}, {
  "value": "查看自定义场景详情",
  "id": "查看自定义场景详情",
  "level": 3
}, {
  "value": "删除自定义场景",
  "id": "删除自定义场景",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "netcopilot工具",
        children: "netcopilot工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "netcopilot是一款帮助开发者进行网络模拟的工具，通过hdc命令行直接调用网络领航员接口，执行网络领航员请求，目前已支持预置场景场景调用和自定义场景调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(635169)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "netcopilot工具从API version 20开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用本工具前，开发者需要先获取hdc工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方法",
      children: "使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell netcopilot <命令行参数> <子参数>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令行参数和子参数可参考下述参数列表，用户也可先输入hdc shell命令，再执行网络领航员请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数列表",
      children: "参数列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令行参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出帮助信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0关闭，1开启"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启/关闭领航员"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭时其他接口不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印网络场景列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认会打印预置场景列表：  进出电梯  离家断开WLAN  到家连接WLAN  人员拥挤的饭堂  弱信号的地库  乘坐地铁  乘坐高铁（多SIM切换）  高速公路自驾"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动场景模拟"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许在不同场景间直接切换；  场景模拟需要满足对应网卡要求，进出电梯、离家断开WLAN、到家连接WLAN场景需要同时连接WLAN和蜂窝网络；其他场景需要连接WLAN或蜂窝网络。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消场景模拟"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印自定义场景详情"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持自定义场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义场景详情"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增自定义场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过json字符串增加自定义场景，格式示例：  {  \"scenarioName\": \"自定义场景\",  \"uplinkBandwidth\": 1000000,  \"downlinkBandwidth\": 5000000,  \"uplinkLatency\": 200,  \"downlinkLatency\": 200,  \"uplinkDropRate\": 0.05,  \"downlinkDropRate\": 0.01  }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义场景id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除自定义场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义场景id由网络领航员后端生成，通过-p查询列表获取id后，可以通过-d删除。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用帮助",
      children: "使用帮助"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -h\nnetcopilot usage:\n  -h : show help message\n  -e <enable>: 0 for disable, 1 for enable\n  -p : print all scenario info\n  -s <scenario id>: simulate specified network scenario\n  -c : cancel simulating scenario\n  -P <scenario id>: print specified scenario details\n  -a <custom scenario details>: add custom network scenario\n  -d <scenario id>: delete custom network scenario\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启关闭领航员",
      children: "开启/关闭领航员"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -e 0\nDisable netcopilot success\n\n> hdc shell netcopilot -e 1\nEnable netcopilot success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看网络场景列表",
      children: "查看网络场景列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -p\n  +------------+------------------------------+\n  | ScenarioID | ScenarioName                 |\n  +------------+------------------------------+\n  1            | 进出电梯\n  2            | 离家断开WLAN\n  3            | 到家连上WLAN\n  4            | 人员拥挤的饭堂\n  5            | 信号弱的地库\n  6            | 乘坐地铁\n  7            | 乘坐高铁（多SIM切换）\n  8            | 高速公路自驾\n  +------------+------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启动场景模拟",
      children: "启动场景模拟"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -s 4\nSuccess to simulate scenario 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "停止场景模拟",
      children: "停止场景模拟"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -c 4\nClear active net scenario success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新增自定义场景",
      children: "新增自定义场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -a \"{\\\"scenarioName\\\":\\\"自定义场景1\\\",\\\"uplinkBandwidth\\\":100000,\\\"downlinkBandwidth\\\":500000,\\\"uplinkLatency\\\":200,\\\"downlinkLatency\\\":200,\\\"uplinkDropRate\\\":0.05,\\\"downlinkDropRate\\\":0.01}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28631)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义场景子参数需要转成json字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看自定义场景详情",
      children: "查看自定义场景详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -P 1000\nScenario Name: 自定义场景1\nUplink Bandwidth: 100000Kbps\nDownlink Bandwidth: 500000Kbps\nUplink Latency: 200ms\nDownlink Latency: 200ms\nUplink Drop Rate: 0.05%\nDownlink Drop Rate: 0.01%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除自定义场景",
      children: "删除自定义场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hdc shell netcopilot -d 1000\nDelete custom scenario success\n"
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
635169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
28631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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