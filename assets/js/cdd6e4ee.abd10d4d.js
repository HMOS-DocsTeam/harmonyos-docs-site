"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["183190"], {
945439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_command_line_utilities_toybox_toybox_md_cdd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-command-line-utilities-toybox-toybox-md-cdd.json
var site_docs_system_debug_optimize_debugging_commands_command_line_utilities_toybox_toybox_md_cdd_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/command-line-utilities/toybox/toybox","title":"toybox","description":"toybox 是一个轻量级的Linux命令行工具集合，它将常用的Linux命令行工具合并到一个单独的可执行文件中。","source":"@site/docs/system-debug-optimize/debugging-commands/command-line-utilities/toybox/toybox.md","sourceDirName":"system-debug-optimize/debugging-commands/command-line-utilities/toybox","slug":"/system-debug-optimize/debugging-commands/command-line-utilities/toybox/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/toybox/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"toybox","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/toybox","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"uinput","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/uinput/"},"next":{"title":"媒体库资源访问工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/mediatool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/command-line-utilities/toybox/toybox.md


const frontMatter = {
	title: 'toybox',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/toybox',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'toybox';

const assets = {

};



const toc = [{
  "value": "前置条件",
  "id": "前置条件",
  "level": 2
}, {
  "value": "使用方法1",
  "id": "使用方法1",
  "level": 3
}, {
  "value": "使用方法2",
  "id": "使用方法2",
  "level": 3
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 2
}, {
  "value": "帮助命令",
  "id": "帮助命令",
  "level": 3
}, {
  "value": "数学与计算机基础函数",
  "id": "数学与计算机基础函数",
  "level": 3
}, {
  "value": "终端操作",
  "id": "终端操作",
  "level": 3
}, {
  "value": "sh逻辑命令",
  "id": "sh逻辑命令",
  "level": 3
}, {
  "value": "系统操作",
  "id": "系统操作",
  "level": 3
}, {
  "value": "时间日期",
  "id": "时间日期",
  "level": 3
}, {
  "value": "登录用户操作",
  "id": "登录用户操作",
  "level": 3
}, {
  "value": "进程操作",
  "id": "进程操作",
  "level": 3
}, {
  "value": "设备节点操作",
  "id": "设备节点操作",
  "level": 3
}, {
  "value": "网络操作",
  "id": "网络操作",
  "level": 3
}, {
  "value": "文件操作",
  "id": "文件操作",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "报错：&quot;Unknown COMMAND xxx&quot;",
  "id": "报错unknown-command-xxx",
  "level": 3
}, {
  "value": "报错：&quot;Operation not permitted&quot;/&quot;Permission denied&quot;",
  "id": "报错operation-not-permittedpermission-denied",
  "level": 3
}, {
  "value": "其他Linux标准报错",
  "id": "其他linux标准报错",
  "level": 3
}, {
  "value": "命令与toybox描述不符合",
  "id": "命令与toybox描述不符合",
  "level": 3
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
    ol: "ol",
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
        id: "toybox",
        children: "toybox"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toybox 是一个轻量级的Linux命令行工具集合，它将常用的Linux命令行工具合并到一个单独的可执行文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前置条件",
      children: "前置条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用方法1",
      children: "使用方法1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "正常连接设备"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用hdc shell进入命令行执行模式"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用方法2",
      children: "使用方法2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用沙箱内运行"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toybox的执行方式有两种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "toybox [COMMAND] [ARGUMENTS...]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "直接执行 [COMMAND] [ARGUMENTS...]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中 [COMMAND] 可被替换为toybox支持的任意命令（可通过输入不带参数的toybox命令查询）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ARGUMENTS...] 为[COMMAND]所需要的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(584532)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前版本中，不同设备对toybox的支持情况存在差异。开发者可直接执行toybox获取设备支持的全量命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "帮助命令",
      children: "帮助命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式：toybox [--long | --help | --version | [COMMAND] [ARGUMENTS...]]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示命令帮助。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示支持的所有命令的路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示所有[COMMAND]支持的命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[COMMAND]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ARGUMENTS]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行具体的命令。大部分命令也支持--help和--version参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式：help [-ahu] [COMMAND]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示COMMAND的帮助。[COMMAND] 可被替换为toybox支持的任意命令。"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示所有命令的帮助。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅显示help命令的帮助。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以HTML方式显示help命令的帮助。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数学与计算机基础函数",
      children: "数学与计算机基础函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示ascii编码表。  usage: ascii"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分解质因数。  usage: factor [-hx] NUMBER..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mcookie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成128位强随机数。  usage: mcookie [-vV]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mkpasswd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对密码进行加密。  usage: mkpasswd [-P FD] [-m TYPE] [-S SALT] [PASSWORD] [SALT]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uuidgen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并打印新的RFC4122随机UUID。  usage: uuidgen"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "终端操作",
      children: "终端操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chvt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换到虚拟终端N。  usage: chvt NUM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chroot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以指定的根目录运行命令。  usage: chroot NEWROOT [COMMAND [ARG...]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空终端。  usage: clear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nohup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行一个独立于终端的命令。  usage: nohup COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示连接到标准输入设备的终端的名称。  usage: tty [-s]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复位终端。  usage: reset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "microcom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单串口终端。  usage: microcom [-s SPEED] [-X] DEVICE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sh逻辑命令",
      children: "sh逻辑命令"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回非零值。  usage: false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shell命令解释器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过执行测试返回true或false。没有参数时返回false。  usage: test [-bcdefghkLprSsuwx PATH] [-nz STRING] [-t FD] [X ?? Y]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回零。  usage: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "反复输出行直到被杀死。如果没有参数，则输出“y”。  usage: yes [args...]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统操作",
      children: "系统操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "acpi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询电源、温度状态。  usage: acpi [-abctV]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印系统名称。  usage: arch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dmesg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示或控制内核环形缓冲区。  usage: dmesg [-Cc] [-r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dnsdomainname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示系统的名称（与 hostname -d 一致）。  usage: dnsdomainname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getconf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统配置值，部分值需要path参数。  usage: getconf -a [PATH]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置命令调用的环境，或列出环境变量。  usage: env [-0i] [-e FILE] [-u NAME] [NAME=VALUE...] [COMMAND...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hostname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前主机名。  usage: hostname [-bdsf] [-F FILENAME] [newname]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insmod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载内核模块。  usage: insmod MODULE [OPTION...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录系统日志。  usage: logger [-s] [-t TAG] [-p [FACILITY.]PRIORITY] [MESSAGE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lsmod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示当前已经加载的模块，它们的大小和依赖。  usage: lsmod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示OSS声道，或者设置音量。  usage: mix [-d DEV] [-c CHANNEL] [-l VOL] [-r RIGHT]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "modinfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示内核模块信息。  usage: modinfo [-0] [-b basedir] [-k kernel] [-F field] [module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nproc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印处理器数量。  usage: nproc [--all]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oneit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单的初始化程序。  usage: oneit [-prn3] [-c CONSOLE] [COMMAND...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "partprobe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知内核分区表已经变化。  usage: partprobe DEVICE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pivot_root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改根目录。  usage: pivot_root OLD NEW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "printenv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印环境变量。  usage: printenv [-0] [env_var...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reboot/halt/poweroff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启/停止/关机。  usage: reboot/halt/poweroff [-fn] [-d DELAY]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rfkill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启/关闭无线设备。  usage: rfkill COMMAND [DEVICE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rmmod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卸载内核模块。  usage: rmmod [-wf] MODULE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendevent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送Linux输入事件。  usage: sendevent DEVICE TYPE CODE VALUE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swapoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停用交换空间。  usage: swapoff FILE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swapon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定的设备或文件上，使能内存交换。  usage: swapon [-d] [-p priority] filename"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch_root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换根目录，并执行新的INIT程序。  usage: switch_root [-c /dev/console] NEW_ROOT NEW_INIT..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印系统信息。  usage: uname [-asnrvmo]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vmstat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印虚拟内存信息。  usage: vmstat [-n] [DELAY [COUNT]]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间日期",
      children: "时间日期"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印日历。  usage: cal [-h] [[[DAY] MONTH] YEAR]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置/获取当前日期/时间。  usage: date [-u] [-I RES] [-r FILE] [-d DATE] [+DISPLAY_FORMAT] [-D SET_FORMAT] [SET]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hwclock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取/设置硬件时钟。  usage: hwclock [-rswtlu] [-f FILE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sleep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待设置的时间后再退出。可以是小数。可选的后缀可以是“m”（分钟）、“h”（小时）、“d”（天）或“s”（秒，默认值）。  usage: sleep DURATION..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行命令行并报告真实时间、用户时间和系统时间（以秒为单位）。(真实时间=时钟时间，用户时间=命令代码使用cpu的时间，系统时间=操作系统使用cpu的时间。)  usage: time [-pv] COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uptime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示当前时间，系统运行了多长时间，用户数量，以及过去1、5和15分钟的系统负载平均值。  usage: uptime [-ps]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usleep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待设置的时间后再退出，单位微秒。  usage: usleep MICROSECONDS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "登录用户操作",
      children: "登录用户操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印用户所在的组。  usage: groups [user]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印用户和组ID。  usage: id [-Ggnru] [USER...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户登录。  usage: login [-p] [-h host] [-f USERNAME] [USERNAME]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logname/whoami"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印当前用户名。  usage: logname/whoami"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "passwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新用户的认证令牌。  usage: passwd [-a ALGO] [-dlu] [USER]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "who"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印有关已登录用户的信息。  usage: who"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示用户登录情况和登录时间。  usage: w"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进程操作",
      children: "进程操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chrt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取/设置一个进程的调度策略和优先级。  usage: chrt [-Rmofrbi] {-p PID [PRIORITY]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iorenice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示/修改一个进程的IO优先级。  usage: iorenice PID [CLASS] [PRIORITY]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iotop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据I/O对进程排序。  usage: iotop [-AaKObq] [-n NUMBER] [-d SECONDS] [-p PID,] [-u USER,]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ionice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示/修改一个进程的IO调度优先级。  usage: ionice [-t] [-c CLASS] [-n LEVEL] [COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向进程发送信号。  usage: kill [-l [SIGNAL]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "killall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向具有给定名称的所有进程发送信号（默认：SIGTERM）。  usage: killall [-l] [-iqv] [-SIGNAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "killall5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对当前会话以外的所有进程发送信号。  usage: killall5 [-l [SIGNAL]] [-SIGNAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pidof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印具有给定名称的所有进程的PID。  usage: pidof [-s] [-o omitpid[,omitpid...]] [NAME...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pkill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照进程名来杀死进程。  usage: pkill [-fnovx] [-SIGNAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看进程的内存映射情况。  usage: pmap [-xq] [pids...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示进程信息。  usage: ps [-AadefLlnwZ] [-gG GROUP,] [-k FIELD,] [-o FIELD,] [-p PID,] [-t TTY,] [-uU USER,]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pwdx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印进程的工作目录。  usage: pwdx PID..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调整进程/组/用户级别的进程优先级。  usage: renice [-gpu] -n INCREMENT ID..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setsid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在新的会话中运行命令。  usage: setsid [-t] command [args...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动一个仅在指定处理器上运行的任务，或者修改已经存在的进程的处理器偏好。  usage: taskset [-ap] [mask] [PID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建子进程执行命令，如果子进程超时未退出，则向子进程发送一个信号。DURATION可以是小数。可选的后缀可以是“m”（分钟）、“h”（小时）、“d”（天）或“s”（秒，默认值）。  usage: timeout [-k DURATION] [-s SIGNAL] DURATION COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时显示进程信息。  usage: top [-Hhbq] [-k FIELD,] [-o FIELD,] [-s SORT] [-n NUMBER] [-m LINES] [-d SECONDS] [-p PID,] [-u USER,]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以指定的优先级运行命令。  usage: nice [-n PRIORITY] COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nsenter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在特定的命名空间中运行指令。  usage: nsenter [-t pid] [-F] [-i] [-m] [-n] [-p] [-u] [-U] COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ulimit/prlimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示或者设置进程的资源限制。  usage: ulimit/prlimit [-P PID] [-SHRacdefilmnpqrstuv] [LIMIT]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unshare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给一个进程创建新的命名空间，部分属性不与父进程共享。  usage: unshare [-imnpuUr] COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "watch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每隔-n秒运行一次参数中的命令，显示执行结果。按q退出。  usage: watch [-tebx] [-n SEC] COMMAND..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xargs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行命令行一次或多次，附加标准输入设备中的参数。  usage: xargs [-0Pprt] [-snE STR] COMMAND..."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备节点操作",
      children: "设备节点操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blkid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印文件系统的类型，标签和UUID等信息。  usage: blkid [-o TYPE] [-s TAG] [-UL] DEV..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blockdev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对每个命令中的块设备调用ioctl。  usage: blockdev --OPTION... BLOCKDEV..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devmem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过 /dev/mem 读写物理地址。  usage: devmem [-f FILE] ADDR [WIDTH [DATA...]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "df"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示命令行中列出的每个文件系统的总共、已使用和空闲的磁盘空间。无参数时显示已装载的所有文件系统。  usage: df [-aHhikP] [-t TYPE] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "du"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示磁盘使用情况，文件和目录占用的空间。  usage: du [-d N] [-abcHKkLlmsx] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出设备，默认为 /dev/cdrom 。  usage: eject [-stT] [DEVICE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示物理内存和交换空间的总量、可用量和已用量。  usage: free [-bkmgt]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "freeramdisk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放特定ramdisk的所有内存。  usage: freeramdisk [RAM device]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fsfreeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结或解冻一个文件系统。  usage: fsfreeze {-f"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fstype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印文件系统的类型。  usage: fstype DEV..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fsync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将文件状态与存储设备同步。  usage: fsync [-d] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i2cdetect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测 i2c 设备。  usage: i2cdetect [-aqry] BUS [FIRST LAST]  usage: i2cdetect -F BUS  usage: i2cdetect -l"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i2cdump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印所有 i2c 寄存器。  usage: i2cdump [-fy] BUS CHIP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i2cget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取 i2c 寄存器。  usage: i2cget [-fy] BUS CHIP [ADDR]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i2cset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写 i2c 寄存器。  usage: i2cset [-fy] BUS CHIP ADDR VALUE... MODE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "losetup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置循环设备。  usage: losetup [-cdrs] [-o OFFSET] [-S SIZE] {-d DEVICE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lspci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示 PCI 设备信息。  usage: lspci [-ekmn] [-i FILE ]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lsusb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示 USB 设备信息。  usage: lsusb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "makedevs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一系列特殊的文件，包括块设备文件，字符设备文件等。  usage: makedevs [-d device_table] rootdir"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在目录上挂载新的文件系统。如果没有参数，则显示现有的挂载。  usage: mount [-afFrsvw] [-t TYPE] [-o OPTION,] [[DEVICE] DIR]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mountpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查目录或者设备是否是挂载点。  usage: mountpoint [-qd] DIR  mountpoint [-qx] DEVICE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将缓存的数据写到磁盘。  usage: sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sysctl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读写 /proc/sys 下的系统控制数据。  usage: sysctl [-aAeNnqw] [-p [FILE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tunctl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或删除tun/tap虚拟以太设备。  usage: tunctl [-dtT] [-u USER] NAME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vconfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或删除虚拟以太设备。  usage: vconfig COMMAND [OPTIONS]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "umount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消挂载文件系统。  usage: umount [-a [-t TYPE[,TYPE...]]] [-vrfD] [DIR...]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "网络操作",
      children: "网络操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftpget/ftpput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与FTP服务器沟通，支持读、写、列举文件等操作。ftpget自带-g选项。ftpput自带-s选项。  usage: ftpget/ftpput [-cvgslLmMdD] [-p PORT] [-P PASSWORD] [-u USER] HOST [LOCAL] REMOTE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ifconfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示或配置网络接口。  usage: ifconfig [-aS] [INTERFACE [ACTION...]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nbd-client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建nbd客户端。  usage: nbd-client [-ns] [-b BLKSZ] HOST PORT DEVICE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netstat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示网络信息。  usage: netstat [-pWrxwutneal]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ping/ping6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测网络连通性。ping6自带-6选项。  usage: ping/ping6 [OPTIONS] HOST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sntp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNTP客户端。  usage: sntp [-saSdDq] [-r SHIFT] [-mM[ADDRESS]] [-p PORT] [SERVER]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "telnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接telnet服务器。  usage: telnet HOST [PORT]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "traceroute/traceroute6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪报文到HOST的路径。traceroute6自带-6选项。  usage: traceroute [-46FUIldnvr] [-f 1ST_TTL] [-m MAXTTL] [-p PORT] [-q PROBES]  [-s SRC_IP] [-t TOS] [-w WAIT_SEC] [-g GATEWAY] [-i IFACE] [-z PAUSE_MSEC] HOST [BYTES]  usage: traceroute6 [-dnrv] [-m MAXTTL] [-p PORT] [-q PROBES][-s SRC_IP] [-t TOS] [-w WAIT_SEC]  [-i IFACE] HOST [BYTES]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从网络上下载资源。  usage: wget [OPTIONS]... [URL]  [OPTIONS] = --max-redirect x -d -O filename -p data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件操作",
      children: "文件操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "awk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk是一个处理文本的工具，可对文档内容进行筛选、分析。  usage: awk [-F sepstring] [-v assignment]... program [argument...]  or:  awk [-F sepstring] -f progfile [-f progfile]... [-v assignment]...  [argument...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "base64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过base64算法进行加密/解密。  usage: base64 [-di] [-w COLUMNS] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回删除后缀的路径名的非目录部分。  usage: basename [-a] [-s SUFFIX] NAME..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bunzip2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解压bz格式的文件。  usage: bunzip2 [-cftkv] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bzcat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解压列举的文件到标准输出。  usage: bzcat [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制（连接）文件到标准输出设备。如果未列出任何文件，则从标准输入设备复制。“-”代表标准输入设备。  usage: cat [-etuv] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chattr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改Linux ext2文件系统的文件属性。  usage: chattr [-R] [-+=AacDdijsStTu] [-v version] [File...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改文件的SELinux安全上下文。  usage: chcon [-hRv] CONTEXT FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chgrp/chown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改文件的组。  usage: chgrp/chown [-RHLP] [-fvh] GROUP FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chmod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更改列出的文件的模式（使用-R递归）。  usage: chmod [-R] MODE FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于每个文件，输出crc32的校验和、长度和文件名。如果未列出任何文件，则从标准输入设备复制。“-”代表标准输入设备。  usage: cksum [-HIPLN] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比较文件的内容（如果只给出一个，则与标准输入设备进行比较），可选在开始时跳过字节。  usage: cmp [-ls] [-n LEN] FILE1 [FILE2 [SKIP1 [SKIP2]]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "comm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取FILE1和FILE2（这两个文件应该是有序的），并生成三个文本列作为输出：仅在FILE1中的行、仅在FILE2中的行、在两个文件中都有的行。“-”代表标准输入设备。  usage: comm [-123] FILE1 FILE2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将标准输入设备复制到标准输出设备，将简单的进度指示器显示到标准错误输出stderr。  usage: count [-l]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将文件从SOURCE复制到DEST。如果有多个源，DEST必须是一个目录。  usage: cp [-aDdFfHiLlnPpRrsTuv] [--preserve=motcxa] [-t TARGET] SOURCE... [DEST]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从“newc”格式的cpio档案中读写文件。  usage: cpio -{o"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crc32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出每个文件的crc32校验和。  usage: crc32 [file...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将每个FILE中的行的选定部分打印到标准输出。每个选择列表以逗号分隔，可以是数字（从1开始计数）或破折号分隔的范围（其中X-表示X到行尾，-X表示从开始到X）。  usage: cut [-Ds] [-bcCfF LIST] [-dO DELIM] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于转换和复制文件的命令，可以用于创建磁盘镜像、备份数据、转换字符编码等任务。  usage: dd [if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比较文件/文件夹，输出差异。  usage: diff [-abBdiNqrTstw] [-L LABEL] [-S FILE] [-U LINES] [-F REGEX ] FILE1 FILE2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dirname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示路径的目录部分。  usage: dirname PATH..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dos2unix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将换行符格式从dos“\\r\\n”转换为unix“\\n”。如果没有列出文件，从标准输入设备获取输入。“-”代表标准输入设备。  usage: dos2unix [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "echo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将每个参数写入标准输出设备，每个参数之间有一个空格，后跟一个换行符。  usage: echo [-Een] [ARG...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "grep/egrep/fgrep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示匹配正则表达式的行。如果没有-e，则第一个参数为要匹配的正则表达式。没有文件（或“-”文件名）读取标准输入设备。如果匹配，则返回0；如果找不到匹配，则返回1；如果命令错误，则返回2。  egrep自带-E选项，fgrep自带-F选项。E和F选项不能同时选。  usage: grep/egrep/fgrep [-EFrivwcloqsHbhn] [-ABC NUM] [-m MAX] [-e REGEX]... [-MS PATTERN]... [-f REGFILE] [FILE]..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gzip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩文件。  usage: gzip [-19cdfkt] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入参数将制表符展开为空格。  usage: expand [-t TABLIST] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fallocate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "让文件系统给文件预留空间。  usage: fallocate [-o OFFSET] -l SIZE FILE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定的文件并描述其内容类型。  usage: file [-bhLs] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在目录中搜索匹配的文件。  usage: find [-HL] [DIR...] [[/topic/body/section/table/tgroup/tbody/row/entry/p/options {\"\"}) ] (options]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管理文件锁（advisory lock）。  usage: flock [-sxun] fd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将输入重新格式化为给定行长的换行，保留现有的缩进级别，写入标准输出设备。  usage: fmt [-w WIDTH] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gunzip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解压文件。如果没有文件，则从标准输入设备解压到标准输出设备。成功后，输入文件将被删除并替换为新的没有.gz后缀的文件。  usage: gunzip [-cfkt] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将文件中的第一行复制到标准输出设备中。如果未列出任何文件，从标准输入设备拷贝。“-”代表标准输入设备。  usage: head [-cn NUM] [-qv] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hexedit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "十六进制文件编辑器，所有修改立刻写入磁盘。  usage: hexedit [-r] FILE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换文件编码。  usage: iconv [-f FROM] [-t TO] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inotifyd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在文件系统事件出现的时候，运行特定的程序。  usage: inotifyd PROG FILE[:MASK] ..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制文件并设置文件属性。  usage: install [-dDpsv] [-o USER] [-g GROUP] [-m MODE] [-t TARGET] [SOURCE...] [DEST]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建文件的硬链接。  usage: link FILE NEWLINK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ln"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在 FROM 和 TO 之间创建软/硬链接。  usage: ln [-fnrsTv] [-t DIR] [FROM...] TO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看当前目录有哪些文件/文件夹。  usage: ls [-1ACFHLNRSUXZabcdfghilmnopqrstuwx] [--color[=auto]] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lsattr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出Linux文件系统中的文件属性。标志字母在chattr帮助中定义。  usage: lsattr [-Radlv] [Files...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lsof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出属于所有活跃进程的所有打开的文件，或使用列出的FILE的进程。  usage: lsof [-lt] [-p PID1,PID2,...] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md5sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算每个输入文件的哈希，如果没有，则从标准输入设备读取。每个输入文件输出一行哈希后跟文件名。  usage: ???sum [-bcs] [FILE]..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mkdir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个或多个目录。  usage: mkdir [-vp] [-m MODE] [DIR...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mkfifo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建FIFO文件（命名管道）。  usage: mkfifo [NAME...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mkswap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Linux的交换空间。  usage: mkswap [-L LABEL] DEVICE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mktemp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全地创建一个新文件“DIR/TEMPLATE”并打印其名称。  usage: mktemp [-dqu] [-p DIR] [TEMPLATE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mknod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个特殊的文件（b为块设备，c或u为字符设备，p为命名管道）。  usage: mknod [-m MODE] NAME TYPE [MAJOR MINOR]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "more"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看文件，一次一页。  usage: more [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动或重命名文件。  usage: mv [-FfinTvx] [-t TARGET] SOURCE... [DEST]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给输入的文件添加行号。  usage: nl [-E] [-l #] [-b MODE] [-n STYLE] [-s SEPARATOR] [-v #] [-w WIDTH] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "od"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以八进制/十六进制格式转储数据。  usage: od [-bcdosxv] [-j #] [-N #] [-w #] [-A doxn] [-t acdfoux[#]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从每个输入文件中合并相应的行。  usage: paste [-s] [-d DELIMITERS] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "patch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将统一的diff应用于一个或多个文件。  usage: patch [-d DIR] [-i file] [-p depth] [-Rlsu] [--dry-run]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pgrep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查找进程。PATTERN是扩展正则表达式，用于命令名称的检测。  usage: pgrep [-clfnovx] [-d DELIM] [-L SIGNAL] [PATTERN] [-G GID,] [-g PGRP,] [-P PPID,] [-s SID,] [-t TERM,] [-U UID,] [-u EUID,]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "printf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用C语言的printf语法，根据Format格式化并打印参数。  usage: printf FORMAT [ARGUMENT...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印工作（当前）目录。  usage: pwd [-L"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readahead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将文件预加载到磁盘缓存中。  usage: readahead FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果没有选项，则显示symlink指向什么，如果不是symlink则返回错误。  usage: readlink [-efmnqz] FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realpath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示规范绝对路径名。  usage: realpath [-LPemqsz] [--relative-base DIR] [-R DIR] FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逆向输出每一行。  usage: rev [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文件。  usage: rm [-fiRrv] FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rmdir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除一个或多个目录。  usage: rmdir [-p] [DIR...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流编辑器。将编辑脚本应用于输入行。  usage: sed [-inrszE] [-e SCRIPT]..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "seq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从头到尾按递增计数。省略参数默认值为1。使用两个参数作为第一个和最后一个。参数可以是负数或浮点数。  usage: seq [-w"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setfattr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入POSIX扩展属性。  usage: setfattr [-h] [-x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sha1sum/sha256sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算sha系列哈希值。  usage: ???sum [-bcs] [FILE]..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全的删除文件（用随机数据覆盖文件内容）。  usage: shred [-fuxz] [-n COUNT] [-o OFFSET] [-s SIZE] FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对从输入文件（或标准输入设备）到标准输出设备的所有文本行进行排序。  usage: sort [-Mbcdfginrsuz] [FILE...] [-k#[,#[x]] [-t X]] [-o FILE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将输入（或标准输入设备）数据复制到一系列输出（或“x”）文件，使用按字母顺序递增的后缀（aa,ab,ac...az,ba,bb...）。  usage: split [-a SUFFIX_LEN] [-b BYTES] [-l LINES] [-n PARTS] [INPUT [OUTPUT]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示文件或文件系统的状态。  usage: stat [-tfL] [-c FORMAT] FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在二进制文件中显示可打印字符串。  usage: strings [-fo] [-t oxd] [-n LEN] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以相反的顺序输出行。  usage: tac [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将文件中的最后几行复制到标准输出设备中。“-”代表标准输入设备。  usage: tail [-n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在.tar文件中创建、解压缩或列出文件。  usage: tar [-cxt] [-fvohmjkOS] [-XTCf NAME] [--selinux] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将标准输入设备复制到每个列出的文件，也复制到标准输出设备。“-”代表标准输出设备。  usage: tee [-ai] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "touch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新每个FILE的访问和修改时间为当前时间。  usage: touch [-amch] [-d DATE] [-t TIME] [-r FILE] FILE..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "truncate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件的长度，必要时稀疏扩展。  usage: truncate [-c] -s SIZE file..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uniq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "报告或过滤文件中的重复行。  usage: uniq [-cduiz] [-w MAXCHARS] [-f FIELDS] [-s CHAR] [INFILE [OUTFILE]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unix2dos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将换行符格式从unix“\\n”转换为dos“\\r\\n”。如果没有列出文件，从标准输入设备获取输入。“-”代表标准输入设备。  usage: unix2dos [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文件。  usage: unlink FILE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uudecode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从标准输入设备（或INFILE）解码文件。  usage: uudecode [-o OUTFILE] [INFILE]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uuencode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准输入设备（或文件）进行编码，输出到标准输出设备，在输出中包含encode-filename。  usage: uuencode [-m] [INFILE] ENCODE_FILENAME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计输入中的行数、单词和字符。  usage: wc [-Llwcm] [FILE...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "which"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在$PATH中搜索与文件名匹配的可执行文件。  usage: which [-a] filename ..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xxd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以16进制的形式显示文件内容。若没有列出任何文件，从标准输入设备复制。  usage: xxd [-eipr] [-cglos N] [file]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zcat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将文件解压缩到标准输出设备。比如“gzip -dc”。  usage: zcat [-f] [FILE...]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错unknown-command-xxx",
      children: "报错：\"Unknown COMMAND xxx\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在命令行中输入\"xxx\"或\"toybox xxx\"或\"help xxx\"时，如果遇到报错\"Unknown COMMAND xxx\"，表示toybox不支持xxx命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果该命令在本文的描述中，则证明产品未编译该命令。如需帮助请通过“华为开发者联盟官网”->“支持”，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/",
        children: "在线提单"
      }), "方式获取支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "报错operation-not-permittedpermission-denied",
      children: "报错：\"Operation not permitted\"/\"Permission denied\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toybox存在大量操作文件和进程的命令，如果调用者缺少对被操作对象的权限，就会报错。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "权限缺失。请检查被操作的文件，以及所属文件夹的读、写、执行权限，确认自己是否有权限执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SELinux拦截。可以在内核日志中搜索\"avc: denied\"关键字。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果出现类似avc: denied { xxx } for comm=\"ls\" xxxxxx的日志，表示命令ls触发了SELinux拦截。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如遇权限缺失问题，又需要执行该命令，可通过“华为开发者联盟官网”->“支持”，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/",
        children: "在线提单"
      }), "方式获取支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他linux标准报错",
      children: "其他Linux标准报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toybox大部分命令为对内核的调用，出错时会通过perror打印Linux内核错误码对应的文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的错误有：\"File exists\"/\"Not a directory\"/\"Read-only file system\"等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些为Linux标准错误，可以参考Linux相关资料查询报错原因。请根据具体报错，检查命令的参数或者命令的格式是否出现错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "试图在只读文件系统中进行创建文件的操作，会有报错\"Read-only file system\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cat可以打印文件内容，如果试图cat一个目录，会有报错 \"Is a directory\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "试图用ls命令查看一个不存在的文件或目录，会有报错\"No such file or directory\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令与toybox描述不符合",
      children: "命令与toybox描述不符合"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果发现在shell下输入\"命令 参数\"的表现与\"toybox 命令 参数\"不一致，可能有两种原因导致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实际调用的是shell的实现而非toybox。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于time/test/pwd/realpath/ulimit/kill等命令，shell会直接使用自己的实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时如果想要调用toybox命令，请使用\"toybox [COMMAND] [ARGUMENTS...]\"的格式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备未将该命令配置给toybox，而是有另外的实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时如果想要调用toybox命令，请使用\"toybox [COMMAND] [ARGUMENTS...]\"的格式。"
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
584532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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