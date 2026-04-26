"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["292250"], {
947484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_anm_tool_anm_tool_md_f05_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-anm-tool-anm-tool-md-f05.json
var site_docs_system_debug_optimize_debugging_commands_anm_tool_anm_tool_md_f05_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/anm-tool/anm-tool","title":"anm工具","description":"Advanced Notification Manager（通知管理工具，简称anm）是实现通知打印、设置通知参数等功能的工具，为开发者提供基本的通知调试和测试能力，例如打印已发布通知详细信息、设置通知缓存个数、使能通知等。","source":"@site/docs/system-debug-optimize/debugging-commands/anm-tool/anm-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/anm-tool","slug":"/system-debug-optimize/debugging-commands/anm-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/anm-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"anm工具","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/anm-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"cem工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/cem-tool/"},"next":{"title":"edm工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/edm-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/anm-tool/anm-tool.md


const frontMatter = {
	title: 'anm工具',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/anm-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'anm工具';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "anm工具命令列表",
  "id": "anm工具命令列表",
  "level": 2
}, {
  "value": "帮助命令（help）",
  "id": "帮助命令help",
  "level": 2
}, {
  "value": "打印命令（dump）",
  "id": "打印命令dump",
  "level": 2
}, {
  "value": "设置命令（setting）",
  "id": "设置命令setting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    bundlename: "bundlename",
    code: "code",
    devicetype: "devicetype",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    slottype: "slottype",
    status: "status",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    uid: "uid",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "anm工具",
        children: "anm工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced Notification Manager（通知管理工具，简称anm）是实现通知打印、设置通知参数等功能的工具，为开发者提供基本的通知调试和测试能力，例如打印已发布通知详细信息、设置通知缓存个数、使能通知等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用本工具前，开发者需要先获取hdc工具，执行hdc shell。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前工具仅支持在eng版本中使用，在user版本中使用会出现报错/bin/sh: anm: inaccessible or not found.。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "anm工具命令列表",
      children: "anm工具命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令，用于显示anm相关的帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印命令，用于打印通知相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置命令，用于设置通知参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令help",
      children: "帮助命令（help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示anm相关的帮助信息\nanm help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "打印命令dump",
      children: "打印命令（dump）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印通知相关信息\nanm dump [<options>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打印命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-A/--active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印所有活跃的通知信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-R/--recent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印最近的通知信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-D/--distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印来自其他设备的分布式通知信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b/--bundle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，设置指定的Bundle名称打印。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u/--user-id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，设置指定的用户ID打印。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印活跃的通知信息\nanm dump -A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置命令setting",
      children: "设置命令（setting）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 设置通知参数\nanm setting [<options>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c/--recent-count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置保存在内存中的最近通知的最大个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e/--enable-notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置通知使能开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k/--collaboration-switch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置通知是否支持跨设备协同至指定类型设备。  anm setting -k ", (0,jsx_runtime.jsxs)(_components.devicetype, {
              children: [":", (0,jsx_runtime.jsxs)(_components.status, {
                children: ["  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), " 从API version 18开始，新增支持该命令参数。  deviceType表示需要指定的设备类型。取值范围包括：wearable（智能穿戴设备）、litewearable（轻量级智能穿戴设备）、headset（可穿戴式音频设备）。  status表示需要指定的跨设备协同开关状态。取值为0表示开关为关闭状态，取值为1表示开关为打开状态。"]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b/--collaboration-switch-bundle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置指定应用的通知是否支持跨设备协同至指定类型设备。  anm setting -b ", (0,jsx_runtime.jsxs)(_components.devicetype, {
              children: [":", (0,jsx_runtime.jsxs)(_components.bundlename, {
                children: [":", (0,jsx_runtime.jsxs)(_components.uid, {
                  children: [":", (0,jsx_runtime.jsxs)(_components.status, {
                    children: ["  ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "说明："
                      })
                    }), " 从API version 18开始，新增支持该命令参数。  deviceType表示需要指定的设备类型。取值范围包括：wearable（智能穿戴设备）、litewearable（轻量级智能穿戴设备）、headset（可穿戴式音频设备）。  status表示需要指定的跨设备协同开关状态。取值为0表示开关为关闭状态，取值为1表示开关为打开状态。"]
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o/--collaboration-switch-slot"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置指定渠道的通知是否支持通知跨设备协同至指定类型设备。  anm setting -o ", (0,jsx_runtime.jsxs)(_components.devicetype, {
              children: [":", (0,jsx_runtime.jsxs)(_components.slottype, {
                children: [":", (0,jsx_runtime.jsxs)(_components.status, {
                  children: ["  ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "说明："
                    })
                  }), " 从API version 18开始，新增支持该命令参数。  deviceType表示需要指定的设备类型。取值范围包括：wearable（智能穿戴设备）、litewearable（轻量级智能穿戴设备）、headset（可穿戴式音频设备）。  slotType表示需要指定的通知渠道类型。 取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#slottype",
                    children: "SlotType"
                  }), "。  status表示需要指定的跨设备协同开关状态。取值为0表示开关为关闭状态，取值为1表示开关为打开状态。"]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 设置保存在内存中的最近通知的最大数量为100个\nanm setting -c 100\n\n# 设置通知跨设备协同至wearable类型设备的开关为打开状态\nanm setting -k wearable:1\n\n# 设置包名为example，uid为10100的应用通知跨设备协同至litewearable类型设备的开关为关闭状态\nanm setting -b litewearable:example:10100:0\n\n# 设置渠道类型为0的通知跨设备协同至headset类型设备的开关为打开状态\nanm setting -o headset:0:1\n"
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