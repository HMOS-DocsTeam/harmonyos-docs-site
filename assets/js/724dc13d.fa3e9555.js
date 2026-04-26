"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["293994"], {
849744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_aa_tool_aa_tool_md_724_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-aa-tool-aa-tool-md-724.json
var site_docs_system_debug_optimize_debugging_commands_aa_tool_aa_tool_md_724_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/aa-tool/aa-tool","title":"aa工具","description":"Ability assistant（Ability助手，简称为aa），是用于启动应用和启动测试用例的工具，为开发者提供基本的应用调试和测试能力，例如启动应用组件、强制停止进程、打印应用组件相关信息等。","source":"@site/docs/system-debug-optimize/debugging-commands/aa-tool/aa-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/aa-tool","slug":"/system-debug-optimize/debugging-commands/aa-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/aa-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"aa工具","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/aa-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hdc","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hdc/"},"next":{"title":"bm工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/bm-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/aa-tool/aa-tool.md


const frontMatter = {
	title: 'aa工具',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/aa-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'aa工具';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "aa工具命令列表",
  "id": "aa工具命令列表",
  "level": 2
}, {
  "value": "帮助命令（help）",
  "id": "帮助命令help",
  "level": 2
}, {
  "value": "启动命令（start）",
  "id": "启动命令start",
  "level": 2
}, {
  "value": "停止命令（stop-service）",
  "id": "停止命令stop-service",
  "level": 2
}, {
  "value": "打印命令（dump(deprecated)）",
  "id": "打印命令dumpdeprecated",
  "level": 2
}, {
  "value": "强制停止进程命令（force-stop）",
  "id": "强制停止进程命令force-stop",
  "level": 2
}, {
  "value": "启动测试框架命令（test）",
  "id": "启动测试框架命令test",
  "level": 2
}, {
  "value": "进入调试模式命令（attach）",
  "id": "进入调试模式命令attach",
  "level": 2
}, {
  "value": "退出调试模式命令（detach）",
  "id": "退出调试模式命令detach",
  "level": 2
}, {
  "value": "等待调试命令（appdebug）",
  "id": "等待调试命令appdebug",
  "level": 2
}, {
  "value": "应用调试/调优命令（process）",
  "id": "应用调试调优命令process",
  "level": 2
}, {
  "value": "onMemoryLevel回调命令（send-memory-level）",
  "id": "onmemorylevel回调命令send-memory-level",
  "level": 2
}, {
  "value": "aa工具错误码",
  "id": "aa工具错误码",
  "level": 2
}, {
  "value": "10103001 目标Ability可见性校验失败",
  "id": "10103001-目标ability可见性校验失败",
  "level": 3
}, {
  "value": "10104001 指定的Ability不存在",
  "id": "10104001-指定的ability不存在",
  "level": 3
}, {
  "value": "10104003 指定的pid不存在",
  "id": "10104003-指定的pid不存在",
  "level": 3
}, {
  "value": "10104004 指定的内存使用级别不存在",
  "id": "10104004-指定的内存使用级别不存在",
  "level": 3
}, {
  "value": "10105001 Ability服务连接失败",
  "id": "10105001-ability服务连接失败",
  "level": 3
}, {
  "value": "10105002 获取Ability信息失败",
  "id": "10105002-获取ability信息失败",
  "level": 3
}, {
  "value": "10105003 App服务连接失败",
  "id": "10105003-app服务连接失败",
  "level": 3
}, {
  "value": "10106001 当前设备不是开发者模式",
  "id": "10106001-当前设备不是开发者模式",
  "level": 3
}, {
  "value": "10106002 不支持release签名的应用程序",
  "id": "10106002-不支持release签名的应用程序",
  "level": 3
}, {
  "value": "10100101 获取应用信息失败",
  "id": "10100101-获取应用信息失败",
  "level": 3
}, {
  "value": "10100102 aa start命令无法拉起UIExtensionAbility",
  "id": "10100102-aa-start命令无法拉起uiextensionability",
  "level": 3
}, {
  "value": "10103101 隐式启动未查找到匹配应用",
  "id": "10103101-隐式启动未查找到匹配应用",
  "level": 3
}, {
  "value": "10103102 传入的AppCloneIndex是一个无效值",
  "id": "10103102-传入的appcloneindex是一个无效值",
  "level": 3
}, {
  "value": "10106101 上一个Ability未启动完成，先缓存在队列中等待后续启动",
  "id": "10106101-上一个ability未启动完成先缓存在队列中等待后续启动",
  "level": 3
}, {
  "value": "10106102 启动应用时，设备处于锁屏状态",
  "id": "10106102-启动应用时设备处于锁屏状态",
  "level": 3
}, {
  "value": "10106103 目标应用为到期众测应用",
  "id": "10106103-目标应用为到期众测应用",
  "level": 3
}, {
  "value": "10106105 目标应用被管控",
  "id": "10106105-目标应用被管控",
  "level": 3
}, {
  "value": "10106106 目标应用被EDM管控",
  "id": "10106106-目标应用被edm管控",
  "level": 3
}, {
  "value": "10106107 当前设备不支持使用窗口选项",
  "id": "10106107-当前设备不支持使用窗口选项",
  "level": 3
}, {
  "value": "10107102 指定的进程权限校验失败",
  "id": "10107102-指定的进程权限校验失败",
  "level": 3
}, {
  "value": "10108101 拉起Ability时内部错误",
  "id": "10108101-拉起ability时内部错误",
  "level": 3
}, {
  "value": "10103201 目标Ability不是ServiceAbility类型",
  "id": "10103201-目标ability不是serviceability类型",
  "level": 3
}, {
  "value": "10104002 获取指定包信息失败",
  "id": "10104002-获取指定包信息失败",
  "level": 3
}, {
  "value": "10106401 杀死进程失败",
  "id": "10106401-杀死进程失败",
  "level": 3
}, {
  "value": "10106402 常驻进程无法被杀死",
  "id": "10106402-常驻进程无法被杀死",
  "level": 3
}, {
  "value": "10108501 aa test命令内部错误",
  "id": "10108501-aa-test命令内部错误",
  "level": 3
}, {
  "value": "10108601 进入/退出调试模式时内部错误",
  "id": "10108601-进入退出调试模式时内部错误",
  "level": 3
}, {
  "value": "10103601 指定的包名不存在",
  "id": "10103601-指定的包名不存在",
  "level": 3
}, {
  "value": "10106701 目标应用不是Debug应用",
  "id": "10106701-目标应用不是debug应用",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "any-key": "any-key",
    bundlename: "bundlename",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
  }, _component0 = _components["any-key"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "aa工具",
        children: "aa工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ability assistant（Ability助手，简称为aa），是用于启动应用和启动测试用例的工具，为开发者提供基本的应用调试和测试能力，例如启动应用组件、强制停止进程、打印应用组件相关信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用本工具前，开发者需要先获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "hdc工具"
      }), "，执行hdc shell。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文中命令介绍均基于交互式命令环境。如果直接执行hdc shell [aa命令]，则需要采用\"\"来包裹aa命令，确保命令中的传参能被正确识别。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 启动命令\nhdc shell \"aa start -A ohos.want.action.viewData -U 'https://www.example.com'\"\n\n# 应用调试/调优命令\nhdc shell \"aa process -b com.example.myapplication -a EntryAbility -p perf-cmd\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aa工具命令列表",
      children: "aa工具命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。用于查询aa支持的命令信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动命令。用于启动一个应用组件，目标组件可以是FA模型的PageAbility和ServiceAbility组件，也可以是Stage模型的UIAbility和ServiceExtensionAbility组件，且目标组件相应配置文件中的exported标签不能配置为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stop-service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止命令。用于停止一个应用组件，目标组件可以是FA模型的ServiceAbility组件，也可以是Stage模型的ExtensionAbility组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印命令。用于打印应用组件的相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "force-stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制停止进程命令。通过bundleName强制停止一个进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动测试框架命令。根据所携带的参数启动测试框架。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入调试模式命令。通过bundleName使指定应用进入调试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "detach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出调试模式命令。通过bundleName使指定应用退出调试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appdebug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待调试命令。用于设置、取消设置应用等待调试状态，以及获取处于等待调试状态的应用包名和持久化信息。等待调试状态只对debug类型应用生效。appdebug的设置命令只对单个应用生效，当重复设置时，应用包名与持久化状态会替换成最新设置内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用调试/调优命令。对应用进行调试或调优，IDE用该命令集成调试和调优工具。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "send-memory-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "onMemoryLevel回调命令。指定进程的pid和内存使用级别来触发该进程的onMemoryLevel生命周期回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令help",
      children: "帮助命令（help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\naa help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动命令start",
      children: "启动命令（start）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动一个应用组件，目标组件可以是FA模型的PageAbility和ServiceAbility组件，也可以是Stage模型的UIAbility和ServiceExtensionAbility组件，且目标组件相应配置文件中的exported标签不能配置为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示启动Ability。\n# 如果需要启动分身应用，可以使用[--pi ohos.extra.param.key.appCloneIndex <unsigned integer-value>]来指定分身应用的索引。\naa start [-d <deviceId>] [-a <abilityName> -b <bundleName>] [-m <moduleName>] [-c] [-E] [-D] [-R] [-S] [-W] [--pi <key> <unsigned integer-value>] [--pb <key> <bool-value: true/false/t/f大小写不敏感] [--ps <key> <value>] [--psn <key>] [--wl <windowLeft>] [--wt <windowTop>] [--wh <windowHeight>] [--ww <windowWidth>] [-p <perf-cmd>]\n\n# 隐式启动Ability。如果命令中的参数都不填，会导致启动失败。\naa start [-d <deviceId>] [-U <URI>] [-t <type>] [-A <action>] [-e <entity>] [-c] [-D] [-E] [-R] [--pi <key> <unsigned integer-value>] [--pb <key> <bool-value: true/false/t/f大小写不敏感] [--ps <key> <value>] [--psn <key>] [--wl <windowLeft>] [--wt <windowTop>] [--wh <windowHeight>] [--ww <windowWidth>] [-p <perf-cmd>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "启动命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，deviceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，abilityName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，moduleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-U"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，URI。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 仅支持传递字符串。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，action。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，entity。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，type。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pi"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，整型类型键值对。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 仅支持无符号整型值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，布尔类型键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，字符串类型键值对。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 字符串值不能以中划线“-”开头。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--psn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，空字符串关键字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--wl"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，windowLeft，窗口左边距，单位px。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  仅当2in1设备处于开发者模式下，且被启动应用采用调试签名时，该字段生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--wt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，windowTop，窗口上边距，单位px。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  仅当2in1设备处于开发者模式下，且被启动应用采用调试签名时，该字段生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--wh"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，windowHeight，窗口高度，单位px。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  仅当2in1设备处于开发者模式下，且被启动应用采用调试签名时，该字段生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ww"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，windowWidth，窗口宽度，单位px。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  仅当2in1设备处于开发者模式下，且被启动应用采用调试签名时，该字段生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调试时是否通过跨端迁移启动Ability。携带该参数代表跨端迁移场景，不携带代表非跨端迁移场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-E"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，调试时是否显示详细的异常信息。携带该参数代表显示，不携带代表不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 14开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-R"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，调试时是否开启多线程错误检测。携带该参数代表开启，不携带代表关闭。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 14开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调试时是否进入应用沙箱。携带该参数代表进入，不携带代表不进入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，使能启动阶段调试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，使能ASan调试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调优命令。命令由调用方自定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-W"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，调优命令。用于测量UIAbility从启动到切换至前台状态耗时。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 从API version 20开始支持，支持该参数。  - 仅当显式启动UIAbility（必须携带-b和-a参数）时，该参数生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "正常情况的返回信息如下："
              })
            }), "  - StartMode：UIAbility启动模式，值：Cold（冷启动）/Hot（热启动）。  - BundleName：目标应用bundleName。  - AbilityName：目标应用abilityName。  - ModuleName：目标应用moduleName，命令中带有\"-m\"参数时会打印moduleName，否则不打印。  - TotalTime：  冷启动场景下，系统侧接收到aa启动UIAbility请求到该UIAbility完成首帧绘制的耗时，单位毫秒（ms）。  热启动场景下，系统侧接收到aa启动UIAbility请求到该UIAbility状态切换至前台的耗时，单位毫秒（ms）。  - WaitTime：命令启动到命令执行结束的耗时，单位毫秒（ms）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "异常情况的返回信息如下："
              })
            }), "  - \"The wait option does not support starting implicit\" ：不支持隐式启动。  - \"The wait option does not support starting non-uiability\" ：不支持启动非UIAbility组件。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当启动成功时，返回\"start ability successfully.\"；当启动失败时，返回\"error: failed to start ability.\"，同时会包含相应的失败信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to verify the visibility of the target ability."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10104001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified ability does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to obtain ability information."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The aa start command's window option or the aa test command does not support app with release signature."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10100101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to obtain application information."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10100102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The aa start command cannot be used to launch a UIExtensionAbility."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to find a matching application for implicit launch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The passed appCloneIndex is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current ability will be placed in the queue to wait for the previous ability to finish launching."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device screen is locked during the application launch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target application is an expired crowdtesting application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target application is under control."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target application is managed by EDM."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current device does not support using window options."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10107102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed for the specified process."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10108101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An internal error occurs while attempting to launch the ability."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以隐式启动Ability为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145096)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本例中仅介绍了部分字段的使用。关于Ability匹配的详细规则参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings",
        children: "显式Want与隐式Want匹配规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "目标应用"
            })
          }), "：修改module.json5配置，为目标Ability配置uris。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"TargetAbility\",\n  // ......\n  \"exported\": true,\n  \"skills\": [\n    {\n      \"actions\":[\n        \"ohos.want.action.viewData\"\n      ],\n      \"uris\":[\n        {\n          \"scheme\": \"myscheme\",\n          \"host\": \"www.test.com\",\n          \"port\": \"8080\",\n          \"path\": \"path\"\n        }\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "拉起方应用"
            })
          }), "：隐式启动Ability。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果需要拉起应用的页面，可以使用-U命令，示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "aa start -U myscheme://www.test.com:8080/path\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在上述基础上，如果需要携带参数，可以使用如下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "aa start -U myscheme://www.test.com:8080/path --pi paramNumber 1 --pb paramBoolean true --ps paramString teststring  --psn paramNullString\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "UIAbility获取传入参数示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { UIAbility, Want, AbilityConstant } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class TargetAbility extends UIAbility {\n  onCreate(want:Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n    let paramNumber = want.parameters?.paramNumber;\n    let paramBoolean = want.parameters?.paramBoolean;\n    let paramString = want.parameters?.paramString;\n    let paramNullString = want.parameters?.paramNullString;\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果需要拉起浏览器并跳转指定页面，可以使用-A -U命令，示例如下："
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["本例中以", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://www.example.com为例，请根据实际情况替换为真实的网址"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "aa start -A ohos.want.action.viewData -U https://www.example.com\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "停止命令stop-service",
      children: "停止命令（stop-service）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止命令。用于停止一个应用组件，目标组件可以是FA模型的ServiceAbility组件，也可以是Stage模型的ExtensionAbility组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa stop-service [-d <deviceId>] -a <abilityName> -b <bundleName> [-m <moduleName>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "停止命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，deviceId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，abilityName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，moduleName。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当成功停止ServiceAbility或ExtensionAbility时，返回\"stop service ability successfully.\"；当停止失败时，返回\"error: failed to stop service ability.\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to verify the visibility of the target ability."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target ability is not of the ServiceAbility type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10104001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified ability does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to obtain ability information."
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
        children: "# 停止一个ServiceAbility\naa stop-service -a EntryAbility -b com.example.myapplication -m entry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "打印命令dumpdeprecated",
      children: "打印命令（dump(deprecated)）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于打印应用组件的相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa dump -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(163449)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aa dump命令从API version 7开始支持，从API version 9废弃，替换命令为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
        children: "hidumper"
      }), " -s AbilityManagerService。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打印命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "二级参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a/--all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印所有mission内的应用组件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l/--mission-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "type（缺省打印全部）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务侧为了方便管理任务链，内部维护了4种类型的任务链。  可取值：  - NORMAL：正常启动的任务链(比如A拉起B拉起C, 则对应的任务链是A->B->C)  - DEFAULT_STANDARD：已经被破坏的任务链中的任务, 启动模式为multiton的任务被放到该任务链中, 这里面的任务之间没有关联关系  - DEFAULT_SINGLE：已经被破坏的任务链中的任务, 启动模式为singleton的任务被放到该任务链中, 这里面的任务之间没有关联关系  - LAUNCHER：launcher的任务链"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e/--extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "elementName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印扩展组件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u/--userId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UserId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印指定UserId的栈信息，需要和其他参数组合使用，例如aa dump -a -u 100、aa dump -d -u 100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d/--data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印DataAbility相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i/--ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityRecord ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印指定应用组件详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c/--client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印应用组件详细信息，需要和其他参数组合使用，例如aa dump -a -c、aa dump -i 21 -c。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p/--pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印pendingWant信息，需要和其他参数组合使用，例如aa dump -a -p。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r/--process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印应用进程信息，需要和其他参数组合使用，例如aa dump -a -r。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印所有mission内的应用组件信息\naa dump -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440316)/* ["default"] */.A) + "",
        width: "913",
        height: "535"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印所有任务链\naa dump -l\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180517)/* ["default"] */.A) + "",
        width: "920",
        height: "529"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打印指定应用组件详细信息\naa dump -i 105\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83425)/* ["default"] */.A) + "",
        width: "918",
        height: "303"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "强制停止进程命令force-stop",
      children: "强制停止进程命令（force-stop）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过bundleName强制停止一个进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa force-stop <bundle-name> [-p pid] [-r kill-reason]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "强制停止进程命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定pid，需要与-r配合使用，两者共同设置指定pid的进程退出原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定进程退出原因，需要与-p配合使用，两者共同设置指定pid的进程退出原因。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当成功强制停止该进程时，返回\"force stop process successfully.\"；当强制停止失败时，返回\"error: failed to force stop process.\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10104002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to retrieve specified package information."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to terminate the process."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106402"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent processes cannot be terminated."
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
        children: "# 通过bundleName强制停止一个进程\naa force-stop com.example.myapplication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动测试框架命令test",
      children: "启动测试框架命令（test）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据所携带的参数启动测试框架。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa test -b <bundleName> [-m <module-name>] [-p <package-name>] [-s class <test-class>] [-s level <test-level>] [-s size <test-size>] [-s testType <test-testType>] [-s timeout <test-timeout>] [-s <any-key> <any-value>] [-w <wait-time>] -s unittest <testRunner>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941424)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于class、level、size、testType等参数的详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/arkxtest-guidelines/unittest-guidelines#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%89%A7%E8%A1%8C%E6%B5%8B%E8%AF%95%E8%84%9A%E6%9C%AC",
        children: "命令行执行测试脚本"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "启动测试框架命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s unittest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，testRunner。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，testRunner的packageName。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：该可选参数仅可在FA模型下使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，testRunner的moduleName。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：该可选参数仅可在Stage模型下使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定要执行的测试套或测试用例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定要执行用例的用例级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定要执行用例的用例规模。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s testType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定要执行用例的用例类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，测试用例执行的超时时间（单位ms），默认为5000。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["-s ", (0,jsx_runtime.jsx)(_component0, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，任意键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定测试运行时间（单位ms）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调试模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当成功启动测试框架时，返回\"user test started.\"；当启动失败时，返回\"error: failed to start user test.\"和对应的错误信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10104002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to retrieve specified package information."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The aa start command's window option or the aa test command does not support app with release signature."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10108501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An internal error occurs during the execution of the aa test command."
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
        children: "# 启动测试框架\naa test -b com.example.myapplication -s unittest ActsAbilityTest\n# 启动测试框架并设置moduleName\naa test -b com.example.myapplication -m entry_test -s unittest ActsAbilityTest\n# 启动测试框架并指定超时时间\naa test -b com.example.myapplication -m entry_test -s timeout 10000 -s unittest ActsAbilityTest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "进入调试模式命令attach",
      children: "进入调试模式命令（attach）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过bundleName使指定应用进入调试模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa attach -b <bundleName>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "进入调试模式命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用成功进入调试模式时，返回\"attach app debug successfully.\"；当给定参数不合法时，返回\"fail: unknown option.\"并打印帮助信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current device is not in developer mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The aa start command's window option or the aa test command does not support app with release signature."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified bundleName does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10108601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An internal error occurs while attempting to enter/exit debug mode."
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
        children: "# 通过bundleName使指定应用进入调试模式\naa attach -b com.example.myapplication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "退出调试模式命令detach",
      children: "退出调试模式命令（detach）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过bundleName使指定应用退出调试模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa detach -b <bundleName>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "退出调试模式命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用成功退出调试模式时，返回\"detach app debug successfully.\"；当给定参数不合法时，返回\"fail: unknown option.\"并打印帮助信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the ability service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current device is not in developer mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The aa start command's window option or the aa test command does not support app with release signature."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10103601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified bundleName does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10108601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An internal error occurs while attempting to enter/exit debug mode."
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
        children: "# 通过bundleName使指定应用退出调试模式\naa detach -b com.example.myapplication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "等待调试命令appdebug",
      children: "等待调试命令（appdebug）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置、取消设置应用等待调试状态，以及获取处于等待调试状态的应用包名和持久化信息。等待调试状态只对debug类型应用生效。appdebug的设置命令只对单个应用生效，当重复设置时，应用包名与持久化状态会替换成最新设置内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aa appdebug -b <bundleName> [-p]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "等待调试命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "二级参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b/--bundlename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为指定应用设置等待调试状态。设置时，不会进行包名合法化的校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p/--persist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数；持久化标志位，加入该参数，代表持续设置应用为等待调试状态，无论重启设备、重装应用都可以持续生效；不加入该参数，代表等待调试状态仅可以在重启设备前生效一次。需要和-b参数组合使用，例如：aa appdebug -b ", (0,jsx_runtime.jsx)(_components.bundlename, {
              children: " -p。"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c/--cancel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消等待调试状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g/--get"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取等待调试状态的应用包名和持久化信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当执行成功时，返回\"app debug successfully.\"；当执行失败时，返回\"error: failed to app debug.\"；当失败原因为非开发者模式时，返回\"error: not developer mode.\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the app service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current device is not in developer mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106701"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot debug applications using a release certificate."
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
        children: "# 显示帮助信息\naa appdebug -h\n\n# 为指定应用设置等待调试状态\naa appdebug -b com.example.myapplication [-p]\n\n# 取消等待调试状态\naa appdebug -c\n\n# 获取等待调试状态的应用包名和持久化信息\n# 获取信息例： bundle name : com.example.publishsystem, persist : false\naa appdebug -g\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用调试调优命令process",
      children: "应用调试/调优命令（process）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对应用进行调试或调优，IDE用该命令集成调试和调优工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 调试应用\naa process -b <bundleName> -a <abilityName> [-m <moduleName>] [-D <debug-cmd>] [-S]\n\n# 调优应用\naa process -b <bundleName> -a <abilityName> [-m <moduleName>] [-p <perf-cmd>] [-S]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用调试/调优命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，bundleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，abilityName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，moduleName。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调优命令，与-D必须二选一。命令由调用方自定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，调试命令，与-p必须二选一。命令由调用方自定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，进入应用沙箱。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当执行成功时，返回\"start native process successfully.\"；当执行失败时，返回\"error: failed to start native process.\"；当给定参数不合法时，返回\"error: option requires a value.\"并打印帮助信息。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to obtain ability information."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10105003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the app service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10106002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The aa start command's window option or the aa test command does not support app with release signature."
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
        children: "# 调试应用\naa process -b com.example.myapplication -a EntryAbility -D debug_cmd [-S]\n\n# 调优应用\naa process -b com.example.myapplication -a EntryAbility -p perf-cmd [-S]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onmemorylevel回调命令send-memory-level",
      children: "onMemoryLevel回调命令（send-memory-level）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 13开始，开发者可以通过该命令来调试应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onmemorylevel",
        children: "onMemoryLevel"
      }), "生命周期。通过在参数中指定进程的pid和内存使用级别来触发该进程的onMemoryLevel生命周期回调。该命令只提供基本的应用调试能力，不能完全模拟真实的内存加压测试场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 触发onMemoryLevel回调\naa send-memory-level -p <processId> -l <memoryLevel>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，进程pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["必选参数，内存使用级别，具体值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#memorylevel",
              children: "AbilityConstant.MemoryLevel"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当执行成功时，返回\"send memory level successfully.\"；当执行失败时，返回\"error: failed to send memory level.\"；当给定参数值缺失时，返回\"fail: unknown option.\"并打印帮助信息。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10104003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified pid does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10104004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified level does not exist."
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
        children: "# 触发进程号为6066应用的onMemoryLevel回调，此时回调的level为0\naa send-memory-level -p 6066 -l 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aa工具错误码",
      children: "aa工具错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10103001-目标ability可见性校验失败",
      children: "10103001 目标Ability可见性校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to verify the visibility of the target ability."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标Ability可见性校验失败时，aa工具将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当目标应用在module.json5配置文件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
        children: "extensionAbilities标签"
      }), "中的exported字段配置为false时，表示对应UIAbility组件/ExtensionAbility组件不可以被其他应用调用，也无法被aa工具命令拉起。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要检查目标应用module.json5中对应Ability字段的exported配置是否为true，如果不为true，改为true重试即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10104001-指定的ability不存在",
      children: "10104001 指定的Ability不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specified ability does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当指定的Ability名称不存在时，aa工具将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的Ability未安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查aa命令的-a的参数abilityName和-b的参数bundleName是否正确。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查指定的bundleName对应的应用是否安装。可使用如下命令查询已安装的应用列表，若该bundleName不在查询结果中，说明应用未安装成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm dump -a\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多HAP应用需确认Ability所属的HAP是否已被安装。可使用如下命令查询应用的包信息，若安装的应用中没有对应的HAP和Ability，说明Ability所属的HAP未被安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm dump -n 包名\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10104003-指定的pid不存在",
      children: "10104003 指定的pid不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specified pid does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当指定的pid不存在时，aa工具将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的pid不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-p参数指定的进程号在设备上是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10104004-指定的内存使用级别不存在",
      children: "10104004 指定的内存使用级别不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specified level does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当指定的内存使用级别不存在时，aa工具将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的内存使用级别不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查-l参数指定的内存使用级别是否为[0, 2]区间内的整数值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10105001-ability服务连接失败",
      children: "10105001 Ability服务连接失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to connect to the ability service."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接Ability服务失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口时Ability服务断开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试重启设备重新执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10105002-获取ability信息失败",
      children: "10105002 获取Ability信息失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to obtain ability information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Ability信息失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成Ability请求时通过BMS获取AbilityInfo为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查指定的bundleName对应的应用是否安装。可使用如下命令查询已安装的应用列表，若该bundleName不在查询结果中，说明应用未安装成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell bm dump -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10105003-app服务连接失败",
      children: "10105003 App服务连接失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to connect to the app service."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App服务连接失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口时App服务断开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试重启设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106001-当前设备不是开发者模式",
      children: "10106001 当前设备不是开发者模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The current device is not in developer mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备不是开发者模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备不是开发者模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设置中打开开发者模式。操作如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看设备的“设置 > 系统”中是否有“开发者选项”。如果不存在，可在“设置 > 关于本机”连续七次单击“版本号”，直到提示“开启开发者模式”，点击“确认开启”后输入PIN码（如果已设置），设备将自动重启。请等待设备完成重启后，可以在“设置 > 系统”中查看。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106002-不支持release签名的应用程序",
      children: "10106002 不支持release签名的应用程序"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The aa start command's window option or the aa test command does not support app with release signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa start命令的参数wl、wt、wh、ww或aa test命令不支持release签名的应用程序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标应用为release签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Debug签名证书重新签名，安装新签名出的HAP后，再尝试执行该命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10100101-获取应用信息失败",
      children: "10100101 获取应用信息失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to obtain application information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从BMS查询到的App信息异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从BMS查询到的App信息中应用名或包名异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查aa命令的-a的参数abilityName和-b的参数bundleName是否正确。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查指定的bundleName对应的应用是否安装。可使用如下命令查询已安装的应用列表，若该bundleName不在查询结果中，说明应用未安装成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm dump -a\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多HAP应用需确认Ability所属的HAP是否已被安装。可使用如下命令查询应用的包信息，若安装的应用中没有对应的HAP和Ability，说明Ability所属的HAP未被安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm dump -n 包名\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10100102-aa-start命令无法拉起uiextensionability",
      children: "10100102 aa start命令无法拉起UIExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The aa start command cannot be used to launch a UIExtensionAbility."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa工具无法拉起UIExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa start命令不支持启动UIExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认目标Ability是否为UIExtensionAbility，aa start命令无法拉起UIExtensionAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10103101-隐式启动未查找到匹配应用",
      children: "10103101 隐式启动未查找到匹配应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to find a matching application for implicit launch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "隐式启动无法查找到匹配的Ability。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果为隐式启动，可能是启动参数配置有误或指定的HAP包未安装。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果为显式启动，可能是命令中指定了bundleName、却未指定abilityName。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果为隐式启动，需要确保启动参数配置正确，且指定的HAP包已安装。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果为显式启动，需要确保abilityName传参正确。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10103102-传入的appcloneindex是一个无效值",
      children: "10103102 传入的AppCloneIndex是一个无效值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The passed appCloneIndex is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入一个无效的AppCloneIndex，返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa start命令的参数中携带的AppCloneIndex是一个无效值，则返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认AppCloneIndex是否合法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106101-上一个ability未启动完成先缓存在队列中等待后续启动",
      children: "10106101 上一个Ability未启动完成，先缓存在队列中等待后续启动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The current ability will be placed in the queue to wait for the previous ability to finish launching."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要启动的Ability过多，由于系统处理能力有限，会先将请求缓存在队列中，按照顺序依次处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统并发大。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无需处理，等待启动即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106102-启动应用时设备处于锁屏状态",
      children: "10106102 启动应用时，设备处于锁屏状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The device screen is locked during the application launch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动应用时，设备处于锁屏状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动应用时无法解锁屏幕。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解锁屏幕后重新尝试即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106103-目标应用为到期众测应用",
      children: "10106103 目标应用为到期众测应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target application is an expired crowdtesting application."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当目标应用为众测应用并且到达测试期限时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "众测应用到期，无法打开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查应用是否众测到期，已过有效期的众测应用无法启动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106105-目标应用被管控",
      children: "10106105 目标应用被管控"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target application is under control."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当目标应用受到应用市场管控时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标应用疑似存在恶意行为，受到应用市场管控不允许启动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标应用是系统预装应用，并且使用本地编译的版本进行覆盖安装。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标应用开发证书过期，拉起时被系统管控拦截，此时会有系统弹框提示“应用已过期”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标应用刚完成应用克隆，处于数据恢复中，此时会有系统弹框提示“数据恢复中，请稍后再试”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对可能原因1，建议卸载该应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对可能原因2，需要先卸载该应用，再使用本地编译的版本进行安装。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["针对可能原因3，需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-faq-0000002329508280#section11365113515519",
          children: "更换证书"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对可能原因4，需要等待数据恢复完成后再尝试启动。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106106-目标应用被edm管控",
      children: "10106106 目标应用被EDM管控"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target application is managed by EDM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当目标应用受到企业设备管理管控时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标应用被企业管理服务设置为禁止启动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该设备是一个企业设备，目标应用被设置为禁止启动，开发者无法处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106107-当前设备不支持使用窗口选项",
      children: "10106107 当前设备不支持使用窗口选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The current device does not support using window options."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试使用窗口选项但设备不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户使用aa start命令指定了WindowOptions，但设备不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除aa start命令中代表WindowOptions的参数wl、wt、wh、ww后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10107102-指定的进程权限校验失败",
      children: "10107102 指定的进程权限校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Permission verification failed for the specified process."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当指定的进程权限校验失败时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的进程权限校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认指定进程的权限是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10108101-拉起ability时内部错误",
      children: "10108101 拉起Ability时内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An internal error occurs while attempting to launch the ability."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当内存申请、多线程处理异常等内部处理错误时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存申请、多线程处理等内核通用错误。具体原因可能包括：内部对象为空、处理超时、包管理获取应用信息失败、系统服务获取失败、启动的Ability实例已达到上限等原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误是系统运行过程中出现的内部错误，开发者无法处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10103201-目标ability不是serviceability类型",
      children: "10103201 目标Ability不是ServiceAbility类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target ability is not of the ServiceAbility type."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作的目标Ability不是ServiceAbility类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa stop命令停止ServiceAbility时，-a的参数abilityName对应的Ability不是Service类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查aa -a的参数abilityName对应的Ability是否为ServiceAbility类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10104002-获取指定包信息失败",
      children: "10104002 获取指定包信息失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to retrieve specified package information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定包信息失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的包名对应的应用没有安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查指定的包名是否正确。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查指定的bundleName对应的应用是否安装。可使用如下命令查询已安装的应用列表，若该bundleName不在查询结果中，说明应用未安装成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm dump -a\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106401-杀死进程失败",
      children: "10106401 杀死进程失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to terminate the process."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "杀死进程失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aa force-stop命令指定的应用不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未成功连接到AppManagerService。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查指定的bundleName对应的应用是否安装。可使用如下命令查询已安装的应用列表，若该bundleName不在查询结果中，说明应用未安装成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm dump -a\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "尝试重启设备。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106402-常驻进程无法被杀死",
      children: "10106402 常驻进程无法被杀死"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Persistent processes cannot be terminated."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常驻进程无法被杀死。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa force-stop命令指定的bundleName是常驻进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查目标应用是否为常驻进程，常驻进程无法通过命令杀死。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭目标应用的多实例之后重新尝试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10108501-aa-test命令内部错误",
      children: "10108501 aa test命令内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An internal error occurs during the execution of the aa test command."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当内存申请、多线程处理异常等内部处理错误时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存申请、多线程处理等内核通用错误。具体原因可能包括：内部对象为空、处理超时、系统服务获取失败等原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误是系统运行过程中出现的内部错误，开发者无法处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10108601-进入退出调试模式时内部错误",
      children: "10108601 进入/退出调试模式时内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An internal error occurs while attempting to enter/exit debug mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当内存申请、多线程处理异常等内部处理错误时，方法将返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存申请、多线程处理等内核通用错误。具体原因可能包括：内部对象为空、处理超时、系统服务获取失败等原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误是系统运行过程中出现的内部错误，开发者无法处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10103601-指定的包名不存在",
      children: "10103601 指定的包名不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specified bundleName does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户指定的包名未找到时返回该错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "aa attach/detach命令指定的包名不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查指定的bundleName对应的应用是否安装。可使用如下命令查询已安装的应用列表，若该bundleName不在查询结果中，说明应用未安装成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell bm dump -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10106701-目标应用不是debug应用",
      children: "10106701 目标应用不是Debug应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cannot debug applications using a release certificate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标应用不是Debug应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前使用签名工具中“type”参数不为“debug”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Debug签名证书重新签名，安装新签名出的HAP后，再尝试执行该命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["签名工具及签名证书的生成方式可以参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing",
        children: "签名工具指导"
      }), "。"]
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
941424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
180517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798864-5ccd439347c0895a4ba0ff7442427b6d.png");

},
440316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478513-78250751c530f2cb51661c394ad913cc.png");

},
83425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438559-58a061493f48283951cb3e4570076ba9.png");

},
163449(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
145096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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