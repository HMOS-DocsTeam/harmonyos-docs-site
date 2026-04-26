"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["147349"], {
41842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_optimized_ide_hvigor_daemon_ide_hvigor_daemon_md_2fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-optimized-ide-hvigor-daemon-ide-hvigor-daemon-md-2fb.json
var site_docs_ide_build_optimized_ide_hvigor_daemon_ide_hvigor_daemon_md_2fb_namespaceObject = JSON.parse('{"id":"ide-build-optimized/ide-hvigor-daemon/ide-hvigor-daemon","title":"守护进程","description":"守护进程是作为后台进程运行而不是在交互式用户的直接控制下运行的计算机程序。Hvigor守护进程是一个持续存在的后台进程，可以减少运行构建所需的时间。","source":"@site/docs/ide-build-optimized/ide-hvigor-daemon/ide-hvigor-daemon.md","sourceDirName":"ide-build-optimized/ide-hvigor-daemon","slug":"/ide-build-optimized/ide-hvigor-daemon/","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-daemon/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"守护进程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-daemon","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"分析构建过程","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-build-analyzer/"},"next":{"title":"并行构建","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-improve-performance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-optimized/ide-hvigor-daemon/ide-hvigor-daemon.md


const frontMatter = {
	title: '守护进程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-daemon',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '守护进程';

const assets = {

};



const toc = [{
  "value": "了解守护进程",
  "id": "了解守护进程",
  "level": 2
}, {
  "value": "启用禁用守护进程",
  "id": "启用禁用守护进程",
  "level": 2
}, {
  "value": "设置守护进程内存",
  "id": "设置守护进程内存",
  "level": 2
}, {
  "value": "检查守护进程状态",
  "id": "检查守护进程状态",
  "level": 2
}, {
  "value": "停止守护进程",
  "id": "停止守护进程",
  "level": 2
}, {
  "value": "性能影响",
  "id": "性能影响",
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
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "守护进程",
        children: "守护进程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "守护进程是作为后台进程运行而不是在交互式用户的直接控制下运行的计算机程序。Hvigor守护进程是一个持续存在的后台进程，可以减少运行构建所需的时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "了解守护进程",
      children: "了解守护进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor客户端发送Daemon构建信息，如命令行参数、工程目录和环境变量等，以便于运行构建。客户端和守护进程之间的通信通过本地套接字进行连接，正在运行的守护进程最多开启8个，状态为非停止或中断的守护进程最多开启6个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用禁用守护进程",
      children: "启用禁用守护进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor默认启用守护进程，您也可以通过以下几种方式来控制是否启用守护进程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过DevEco Studio菜单栏构建：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "File >"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings"
              })
            }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DevEco Studio > Preferences/Settings"
              })
            }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "> Build, Execution, Deployment > Build Tools > Hvigor"
              })
            }), "，勾选或取消勾选字段", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable the Daemon for tasks"
              })
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过命令行构建：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "执行命令，其中<task>替换为具体任务名："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 启用守护进程\nhvigorw <task> --daemon\n// 关闭守护进程\nhvigorw <task> --no-daemon\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
                children: "hvigor-config.json5"
              }), "中配置execution.daemon选项。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置守护进程内存",
      children: "设置守护进程内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "守护进程最大的老生代内存默认是8192MB，对绝大多数构建来说已经足够了。如果您想自定义守护进程最大的老生代内存，可以通过以下两种方式修改，建议您参考本地剩余内存进行调整设置。其中命令行方式优先级高于hvigor-config.json5配置文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
            children: "hvigor-config.json5文件"
          }), "中的nodeOptions.maxOldSpaceSize配置。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行命令修改守护进程内存，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw assembleHap --max-old-space-size=12345\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "守护进程新生代内存最大的半空间大小默认是16MB，通过设置最大的半空间大小，可以改变Node.js的垃圾收集频率，进而影响性能，同时也会改变消耗的内存大小。可以通过以下两种方式修改，其中命令行方式优先级高于hvigor-config.json5配置文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能从DevEco Studio 5.1.0 Release版本开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
            children: "hvigor-config.json5文件"
          }), "中的nodeOptions.maxSemiSpaceSize配置。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行命令修改守护进程内存，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw assembleHap --max-semi-space-size=32\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检查守护进程状态",
      children: "检查守护进程状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果您想获取正在运行的守护进程及其状态的列表，可以使用以下命令查看："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --status-daemon\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hvigor PID    STATUS  PORT    ROOT_PATH\n> hvigor 11072  idle    45001   D:\\Demo1\n> hvigor 18836  stopped 45000   D:\\Demo2\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "守护进程状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闲置"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half_busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "半忙碌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "busy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "忙碌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "canceled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopReq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止请求"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "broken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中断"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "停止守护进程",
      children: "停止守护进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在更改关于守护进程内存设置或调试故障时，重启守护进程是必要的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可用以下命令停止运行守护进程，这将停止该工程下的守护进程："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --stop-daemon\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果您想停止所有守护进程，可以使用以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --stop-daemon-all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "性能影响",
      children: "性能影响"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当您重复构建同一项目时，守护进程能够缩短构建时间。多次构建时，守护进程只会一次性将hvigor加载到内存中，而不会在每次构建时都进行加载。"
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