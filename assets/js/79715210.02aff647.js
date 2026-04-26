"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["113766"], {
654119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hdc_hdc_md_797_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hdc-hdc-md-797.json
var site_docs_system_debug_optimize_debugging_commands_hdc_hdc_md_797_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hdc/hdc","title":"hdc","description":"hdc（HarmonyOS Device Connector）是提供给开发人员的命令行调试工具，用于与设备进行交互调试、数据传输、日志查看以及应用安装等操作。该工具支持在Windows/Linux/MacOS系统上运行，为开发者提供高效，便捷的设备调试能力。","source":"@site/docs/system-debug-optimize/debugging-commands/hdc/hdc.md","sourceDirName":"system-debug-optimize/debugging-commands/hdc","slug":"/system-debug-optimize/debugging-commands/hdc/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hdc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"hdc","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SDK命令行工具简介","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-tools-overview/"},"next":{"title":"aa工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/aa-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hdc/hdc.md


const frontMatter = {
	title: 'hdc',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hdc';

const assets = {

};



const toc = [{
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "（可选）命令行直接执行hdc程序",
  "id": "可选命令行直接执行hdc程序",
  "level": 3
}, {
  "value": "（可选）服务器配置",
  "id": "可选服务器配置",
  "level": 3
}, {
  "value": "hdc命令列表",
  "id": "hdc命令列表",
  "level": 2
}, {
  "value": "全局参数",
  "id": "全局参数",
  "level": 3
}, {
  "value": "命令列表",
  "id": "命令列表",
  "level": 3
}, {
  "value": "基本使用方法",
  "id": "基本使用方法",
  "level": 2
}, {
  "value": "查询连接的设备",
  "id": "查询连接的设备",
  "level": 3
}, {
  "value": "执行shell命令",
  "id": "执行shell命令",
  "level": 3
}, {
  "value": "常用调试工具",
  "id": "常用调试工具",
  "level": 3
}, {
  "value": "获取帮助",
  "id": "获取帮助",
  "level": 3
}, {
  "value": "设备连接管理",
  "id": "设备连接管理",
  "level": 2
}, {
  "value": "查询设备列表",
  "id": "查询设备列表",
  "level": 3
}, {
  "value": "连接指定的目标设备",
  "id": "连接指定的目标设备",
  "level": 3
}, {
  "value": "等待设备正常连接",
  "id": "等待设备正常连接",
  "level": 3
}, {
  "value": "USB连接场景",
  "id": "usb连接场景",
  "level": 3
}, {
  "value": "TCP连接场景",
  "id": "tcp连接场景",
  "level": 3
}, {
  "value": "远程连接场景",
  "id": "远程连接场景",
  "level": 3
}, {
  "value": "USB调试和无线调试切换",
  "id": "usb调试和无线调试切换",
  "level": 3
}, {
  "value": "打开设备网络连接通道",
  "id": "打开设备网络连接通道",
  "level": 3
}, {
  "value": "关闭网络连接通道",
  "id": "关闭网络连接通道",
  "level": 3
}, {
  "value": "TCP连接设备",
  "id": "tcp连接设备",
  "level": 3
}, {
  "value": "执行交互命令",
  "id": "执行交互命令",
  "level": 2
}, {
  "value": "应用管理",
  "id": "应用管理",
  "level": 2
}, {
  "value": "安装应用文件",
  "id": "安装应用文件",
  "level": 3
}, {
  "value": "卸载应用",
  "id": "卸载应用",
  "level": 3
}, {
  "value": "文件传输",
  "id": "文件传输",
  "level": 2
}, {
  "value": "本地发送文件至远端设备",
  "id": "本地发送文件至远端设备",
  "level": 3
}, {
  "value": "接收远端设备文件至本地",
  "id": "接收远端设备文件至本地",
  "level": 3
}, {
  "value": "端口转发",
  "id": "端口转发",
  "level": 2
}, {
  "value": "查询端口转发任务列表",
  "id": "查询端口转发任务列表",
  "level": 3
}, {
  "value": "创建正向端口转发任务",
  "id": "创建正向端口转发任务",
  "level": 3
}, {
  "value": "创建反向端口转发任务",
  "id": "创建反向端口转发任务",
  "level": 3
}, {
  "value": "删除端口转发任务",
  "id": "删除端口转发任务",
  "level": 3
}, {
  "value": "服务进程管理",
  "id": "服务进程管理",
  "level": 2
}, {
  "value": "启动服务",
  "id": "启动服务",
  "level": 3
}, {
  "value": "终止服务",
  "id": "终止服务",
  "level": 3
}, {
  "value": "快速执行命令",
  "id": "快速执行命令",
  "level": 3
}, {
  "value": "前台启动服务",
  "id": "前台启动服务",
  "level": 3
}, {
  "value": "设备操作",
  "id": "设备操作",
  "level": 2
}, {
  "value": "打印设备端日志",
  "id": "打印设备端日志",
  "level": 3
}, {
  "value": "显示设备已打开应用的进程pid",
  "id": "显示设备已打开应用的进程pid",
  "level": 3
}, {
  "value": "实时显示设备已打开应用的进程pid和应用名",
  "id": "实时显示设备已打开应用的进程pid和应用名",
  "level": 3
}, {
  "value": "重启目标设备",
  "id": "重启目标设备",
  "level": 3
}, {
  "value": "安全相关命令",
  "id": "安全相关命令",
  "level": 2
}, {
  "value": "查询hdc版本号",
  "id": "查询hdc版本号",
  "level": 2
}, {
  "value": "查询hdc客户端进程版本",
  "id": "查询hdc客户端进程版本",
  "level": 3
}, {
  "value": "查询hdc服务进程版本",
  "id": "查询hdc服务进程版本",
  "level": 3
}, {
  "value": "查询客户端和服务器进程版本",
  "id": "查询客户端和服务器进程版本",
  "level": 3
}, {
  "value": "导出系统信息",
  "id": "导出系统信息",
  "level": 2
}, {
  "value": "hdc调试日志",
  "id": "hdc调试日志",
  "level": 2
}, {
  "value": "服务器进程日志",
  "id": "服务器进程日志",
  "level": 3
}, {
  "value": "设备端日志",
  "id": "设备端日志",
  "level": 3
}, {
  "value": "可选配置项",
  "id": "可选配置项",
  "level": 2
}, {
  "value": "OHOS_HDC_SERVER_PORT",
  "id": "ohos_hdc_server_port",
  "level": 3
}, {
  "value": "OHOS_HDC_LOG_LEVEL",
  "id": "ohos_hdc_log_level",
  "level": 3
}, {
  "value": "OHOS_HDC_HEARTBEAT",
  "id": "ohos_hdc_heartbeat",
  "level": 3
}, {
  "value": "OHOS_HDC_CMD_RECORD",
  "id": "ohos_hdc_cmd_record",
  "level": 3
}, {
  "value": "OHOS_HDC_ENCRYPT_CHANNEL",
  "id": "ohos_hdc_encrypt_channel",
  "level": 3
}, {
  "value": "环境变量配置方法",
  "id": "环境变量配置方法",
  "level": 3
}, {
  "value": "hdc版本配套表",
  "id": "hdc版本配套表",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "设备无法识别",
  "id": "设备无法识别",
  "level": 3
}, {
  "value": "Linux和MacOS系统非管理员权限运行hdc提示无法找到设备",
  "id": "linux和macos系统非管理员权限运行hdc提示无法找到设备",
  "level": 3
}, {
  "value": "hdc无法运行",
  "id": "hdc无法运行",
  "level": 3
}, {
  "value": "使用hdc file send/recv传输中文文件出现乱码",
  "id": "使用hdc-file-sendrecv传输中文文件出现乱码",
  "level": 3
}, {
  "value": "执行hdc list targets显示&quot;Unauthorized&quot;",
  "id": "执行hdc-list-targets显示unauthorized",
  "level": 3
}, {
  "value": "执行任意hdc命令报错：CryptAcquireContext second failed",
  "id": "执行任意hdc命令报错cryptacquirecontext-second-failed",
  "level": 3
}, {
  "value": "Windows设备管理器出现 未知USB设备（设备描述符请求失败）",
  "id": "windows设备管理器出现-未知usb设备设备描述符请求失败",
  "level": 3
}, {
  "value": "hdc命令执行异常",
  "id": "hdc命令执行异常",
  "level": 3
}, {
  "value": "其他问题排查常用步骤",
  "id": "其他问题排查常用步骤",
  "level": 3
}, {
  "value": "hdc错误码",
  "id": "hdc错误码",
  "level": 2
}, {
  "value": "E000001 hdc版本太低",
  "id": "e000001-hdc版本太低",
  "level": 3
}, {
  "value": "E000002 设备未授权",
  "id": "e000002-设备未授权",
  "level": 3
}, {
  "value": "E000003 设备端用户未授权",
  "id": "e000003-设备端用户未授权",
  "level": 3
}, {
  "value": "E000004 通信连接不稳定",
  "id": "e000004-通信连接不稳定",
  "level": 3
}, {
  "value": "E001000 tmode不支持设置USB调试",
  "id": "e001000-tmode不支持设置usb调试",
  "level": 3
}, {
  "value": "E001001 命令未知",
  "id": "e001001-命令未知",
  "level": 3
}, {
  "value": "E001003 USB连接异常",
  "id": "e001003-usb连接异常",
  "level": 3
}, {
  "value": "E001104 tconn命令IP地址非法",
  "id": "e001104-tconn命令ip地址非法",
  "level": 3
}, {
  "value": "E001005 设备未知或断连",
  "id": "e001005-设备未知或断连",
  "level": 3
}, {
  "value": "E001300 模拟器不支持tmode命令",
  "id": "e001300-模拟器不支持tmode命令",
  "level": 3
}, {
  "value": "E002101 服务器进程无法结束",
  "id": "e002101-服务器进程无法结束",
  "level": 3
}, {
  "value": "E002105 命令不支持",
  "id": "e002105-命令不支持",
  "level": 3
}, {
  "value": "E002106 设备通信异常",
  "id": "e002106-设备通信异常",
  "level": 3
}, {
  "value": "E003001 （命令行）指定的包名非法",
  "id": "e003001-命令行指定的包名非法",
  "level": 3
}, {
  "value": "E003002 命令行指定的参数不支持交互模式",
  "id": "e003002-命令行指定的参数不支持交互模式",
  "level": 3
}, {
  "value": "E003003 交互命令参数不支持",
  "id": "e003003-交互命令参数不支持",
  "level": 3
}, {
  "value": "E003004 设备端不支持当前使用的参数",
  "id": "e003004-设备端不支持当前使用的参数",
  "level": 3
}, {
  "value": "E003005 命令行参数有误",
  "id": "e003005-命令行参数有误",
  "level": 3
}, {
  "value": "E005003 （文件传输）缺少参数",
  "id": "e005003-文件传输缺少参数",
  "level": 3
}, {
  "value": "E005004 SDK或设备系统不支持-b参数",
  "id": "e005004-sdk或设备系统不支持-b参数",
  "level": 3
}, {
  "value": "E005005 创建目录失败",
  "id": "e005005-创建目录失败",
  "level": 3
}, {
  "value": "E005101 （文件传输）指定的包名非法",
  "id": "e005101-文件传输指定的包名非法",
  "level": 3
}, {
  "value": "E005102 非法的远端路径",
  "id": "e005102-非法的远端路径",
  "level": 3
}, {
  "value": "E006001 安装包路径非法",
  "id": "e006001-安装包路径非法",
  "level": 3
}, {
  "value": "E007100 不支持的命令",
  "id": "e007100-不支持的命令",
  "level": 3
}, {
  "value": "E005008 不支持的文件传输操作",
  "id": "e005008-不支持的文件传输操作",
  "level": 3
}, {
  "value": "E001106 -e指定的IP不正确",
  "id": "e001106--e指定的ip不正确",
  "level": 3
}, {
  "value": "E00C001 hdc client/server调试拦截",
  "id": "e00c001-hdc-clientserver调试拦截",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    uid: "uid",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hdc",
        children: "hdc"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc（HarmonyOS Device Connector）是提供给开发人员的命令行调试工具，用于与设备进行交互调试、数据传输、日志查看以及应用安装等操作。该工具支持在Windows/Linux/MacOS系统上运行，为开发者提供高效，便捷的设备调试能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc包含三部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "客户端（client）"
        })
      }), "：运行在电脑端的进程，开发者在执行hdc命令时启动该进程，命令结束后进程自动退出。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "服务器（server）"
        })
      }), "：运行在电脑端的后台服务进程，用来管理客户端进程和设备端守护进程之间的数据交互，设备发现等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "守护程序（daemon）"
        })
      }), "：运行在调试设备端的进程，用来响应服务器发来的请求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(563847)/* ["default"] */.A) + "",
        width: "560",
        height: "159"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973829)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端进程在启动时，默认会判断服务器进程是否正在运行。如果没有运行则会启动一个新的hdc进程作为服务器进程，运行在后台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器运行时，默认会监听电脑端的8710端口。开发者可通过设置系统环境变量OHOS_HDC_SERVER_PORT自定义监听的端口号，范围为1~65535。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc可以选择以下任意一种方式获取："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.通过HarmonyOS SDK获取hdc工具。HarmonyOS SDK已嵌入", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/deveco-studio/",
        children: "DevEco Studio"
      }), "中，无需额外下载配置。hdc默认安装在DevEco Studio/sdk/default/openharmony/toolchains路径下，MacOS系统的sdk位于DevEco Studio/Contents目录下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "Command Line Tools"
      }), "工具中的sdk目录获取相关工具。hdc程序默认安装在Command Line Tools/sdk/default/openharmony/toolchains路径下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hdc支持USB和无线两种连接调试方式。在设备的设置>系统>开发者选项中开启或关闭调试开关 ，无需重启设备即可生效。如果设备未启用“开发者选项”，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-debug-app/ide-developer-mode#section530763213432",
        children: "开发者选项"
      }), "进行启用。具体调试连接方式及操作步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usb%E8%BF%9E%E6%8E%A5%E5%9C%BA%E6%99%AF",
        children: "USB连接场景"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tcp%E8%BF%9E%E6%8E%A5%E5%9C%BA%E6%99%AF",
        children: "TCP连接场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选命令行直接执行hdc程序",
      children: "（可选）命令行直接执行hdc程序"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "安装目录下的调试"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以在HarmonyOS SDK的toolchains子目录下执行hdc命令进行设备调试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hdc支持独立运行。将toolchains子目录下的hdc可执行文件和libusb_shared依赖文件集中存放至自定义目录中，在自定义目录下直接执行hdc命令，实现独立调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加hdc到系统环境变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows环境变量设置方法："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "按下Windows键，搜索栏输入“设置”，点击进入设置窗口；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在搜索栏中搜索“查看高级系统设置”。在环境变量>系统变量>Path>编辑中，将hdc.exe所在目录添加到Path。环境变量配置完成后，请重启电脑，即可在命令行窗口执行hdc命令。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linux/MacOS系统："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "打开终端工具，执行以下命令，根据输出结果分别执行不同的命令。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "echo $SHELL\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果输出结果为bin/bash，执行以下命令打开.bashrc文件。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "vi ~/.bashrc\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果输出结果为/bin/zsh，执行以下命令打开.zshrc文件。"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "vi ~/.zshrc\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "切换至英文输入法，按下键盘字母“i”，进入Insert模式。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在文件末尾添加PATH信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "export PATH={DevEco Studio}/sdk/default/openharmony/toolchains:$PATH\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "其中{DevEco Studio}需替换为DevEco Studio实际安装目录的绝对路径，例如/home/DevEco-Studio。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑完成后，单击Esc键退出编辑模式，输入“:wq”并且单击Enter键保存。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "请执行以下命令，使配置的环境变量生效。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果步骤1打开的是.bashrc文件，请执行如下命令："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "source ~/.bashrc\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果步骤1打开的是.zshrc文件，请执行如下命令："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "source ~/.zshrc\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "环境变量配置完成后，重启系统。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选服务器配置",
      children: "（可选）服务器配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置系统环境变量可修改服务器进程的监听端口、日志打印级别或特性开关等。详细介绍请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8F%AF%E9%80%89%E9%85%8D%E7%BD%AE%E9%A1%B9",
        children: "可选配置项"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1894)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环境变量配置完成后，重启命令行窗口或其他使用到HarmonyOS SDK的软件，以生效新配置的环境变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdc命令列表",
      children: "hdc命令列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全局参数",
      children: "全局参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局参数是指运行hdc命令时，可以添加在hdc和具体执行命令之间的参数。例如，使用-t参数可以选择指定的设备执行命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -t connect-key shell echo \"Hello world\"\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%BF%9E%E6%8E%A5%E6%8C%87%E5%AE%9A%E7%9A%84%E7%9B%AE%E6%A0%87%E8%AE%BE%E5%A4%87",
              children: "-t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设备标识符连接指定的目标设备。单台设备连接时为可选参数，连接多台设备时为必选参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8B%E6%97%A5%E5%BF%97",
              children: "-l"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定运行时日志等级，范围为数字0-6，默认为3（LOG_INFO）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E5%9C%BA%E6%99%AF",
              children: "-s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定客户端连接服务器时，服务进程的网络监听参数，格式为IP:port。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BF%AB%E9%80%9F%E6%89%A7%E8%A1%8C%E5%91%BD%E4%BB%A4",
              children: "-p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，绕过对服务进程的查询步骤，用于快速执行客户端命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%89%8D%E5%8F%B0%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1",
              children: "-m"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，使用前台启动模式启动服务进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E6%AD%A3%E5%90%91%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1",
              children: "-e"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，指定在TCP端口转发时，本地监听的IP地址，默认是127.0.0.1。该参数必须和-m一起使用。  使用-e参数指定监听地址时，如果监听地址不是本地回环地址（如127.0.0.1），需注意访问安全问题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令列表",
      children: "命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%AE%BE%E5%A4%87%E5%88%97%E8%A1%A8",
              children: "list targets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询已连接的所有目标设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%AD%89%E5%BE%85%E8%AE%BE%E5%A4%87%E6%AD%A3%E5%B8%B8%E8%BF%9E%E6%8E%A5",
              children: "wait"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待设备正常连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#usb%E8%B0%83%E8%AF%95%E5%92%8C%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95%E5%88%87%E6%8D%A2",
              children: "tmode usb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1.0e版本起已废弃，不会操作设备连接通道，需在设备设置界面通过USB调试开关设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%93%E5%BC%80%E8%AE%BE%E5%A4%87%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5%E9%80%9A%E9%81%93",
              children: "tmode port"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开设备网络连接通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%85%B3%E9%97%AD%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5%E9%80%9A%E9%81%93",
              children: "tmode port close"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭设备网络连接通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#tcp%E8%BF%9E%E6%8E%A5%E8%AE%BE%E5%A4%87",
              children: "tconn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定连接设备：通过“IP:port”来指定连接的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%A7%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%91%BD%E4%BB%A4",
              children: "shell"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在设备端执行单次命令，例如hdc shell ls。无命令参数可进入设备端终端执行命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%89%E8%A3%85%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6",
              children: "install"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装指定的应用文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8D%B8%E8%BD%BD%E5%BA%94%E7%94%A8",
              children: "uninstall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卸载指定的应用包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9C%AC%E5%9C%B0%E5%8F%91%E9%80%81%E6%96%87%E4%BB%B6%E8%87%B3%E8%BF%9C%E7%AB%AF%E8%AE%BE%E5%A4%87",
              children: "file send"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从本地发送文件至远端设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%8E%A5%E6%94%B6%E8%BF%9C%E7%AB%AF%E8%AE%BE%E5%A4%87%E6%96%87%E4%BB%B6%E8%87%B3%E6%9C%AC%E5%9C%B0",
              children: "file recv"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收远端设备文件至本地。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8",
              children: "fport ls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出全部转发端口任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E6%AD%A3%E5%90%91%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1",
              children: "fport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置正向端口转发任务：监听“主机端口”，接收请求并转发到“设备端口”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E5%8F%8D%E5%90%91%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1",
              children: "rport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置反向端口转发任务：监听“设备端口”，接收请求并转发到“主机端口”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%A0%E9%99%A4%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1",
              children: "fport rm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的端口转发任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1",
              children: "start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动hdc服务进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BB%88%E6%AD%A2%E6%9C%8D%E5%8A%A1",
              children: "kill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终止hdc服务进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%93%E5%8D%B0%E8%AE%BE%E5%A4%87%E7%AB%AF%E6%97%A5%E5%BF%97",
              children: "hilog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印设备端的日志信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%98%BE%E7%A4%BA%E8%AE%BE%E5%A4%87%E5%B7%B2%E6%89%93%E5%BC%80%E5%BA%94%E7%94%A8%E7%9A%84%E8%BF%9B%E7%A8%8Bpid",
              children: "jpid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示设备上已打开应用的进程pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9E%E6%97%B6%E6%98%BE%E7%A4%BA%E8%AE%BE%E5%A4%87%E5%B7%B2%E6%89%93%E5%BC%80%E5%BA%94%E7%94%A8%E7%9A%84%E8%BF%9B%E7%A8%8Bpid%E5%92%8C%E5%BA%94%E7%94%A8%E5%90%8D",
              children: "track-jpid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时显示设备上已打开应用的进程pid和应用名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%87%8D%E5%90%AF%E7%9B%AE%E6%A0%87%E8%AE%BE%E5%A4%87",
              children: "target boot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启目标设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%89%E5%85%A8%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4",
              children: "keygen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成一个新的密钥对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2hdc%E7%89%88%E6%9C%AC%E5%8F%B7",
              children: "version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印hdc版本信息，也可使用hdc -v打印版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%92%8C%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8B%E7%89%88%E6%9C%AC",
              children: "checkserver"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取客户进程与服务进程版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AF%BC%E5%87%BA%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF",
              children: "bugreport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出系统信息"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本使用方法",
      children: "基本使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以USB调试方式为例，执行命令前请在设备上开启USB调试功能，用USB线连接设备和电脑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询连接的设备",
      children: "查询连接的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc list targets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行shell命令",
      children: "执行shell命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell echo \"Hello world\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常用调试工具",
      children: "常用调试工具"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc支持和其他调试工具配套使用，工具列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/aa-tool",
              children: "aa"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用调试工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/bm-tool",
              children: "bm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/cem-tool",
              children: "cem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公共事件管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/anm-tool",
              children: "anm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/edm-tool",
              children: "edm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "企业设备管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/param-tool",
              children: "param"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作系统参数管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/power-shell",
              children: "power-shell"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备电源状态转换工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/atm-tool",
              children: "atm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序访问控制管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hilog",
              children: "hilog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志管理工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
              children: "hidumper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统信息导出工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hitrace",
              children: "hitrace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统打点及采集工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hiperf",
              children: "hiperf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能分析工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/uinput",
              children: "uinput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟操作工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/command-line-utilities/mediatool",
              children: "mediatool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体资源库工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/command-line-utilities/devicedebug-tool",
              children: "devicedebug"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试应用发送信号工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator",
              children: "rawheap-translator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rawheap文件解析工具"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ut/arkxtest-guidelines/uitest-guidelines",
              children: "UItest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI测试框架"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/test-service/indev_cmd/smartperf-guidelines#section17658386337",
              children: "HiSmartPerf Device daemon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiSmartPerf Device-daemon端工具命令"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/test-service/indev_cmd/wukong-guidelines",
              children: "wukong"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wukong稳定性工具"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取帮助",
      children: "获取帮助"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示hdc相关帮助信息，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -h [verbose]\nhdc help\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示hdc命令帮助信息。可选参数：verbose，显示详细的帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示hdc命令帮助信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenHarmony device connector(hdc) ...  ---------------------------------global commands:----------------------------------  -h/help [verbose] - Print hdc help, 'verbose' for more other cmds  ...（此处省略详细帮助信息）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc命令使用帮助信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654609)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hdc时如出现异常，可尝试通过hdc kill -r命令终止异常进程并重启hdc服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如出现hdc list targets无法获取设备信息的情况，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E5%A4%87%E6%97%A0%E6%B3%95%E8%AF%86%E5%88%AB",
        children: "设备无法识别"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备连接管理",
      children: "设备连接管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询设备列表",
      children: "查询设备列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc list targets [-v]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示设备更多详情。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备标识符列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已连接的设备标识符列表。  命令添加-v参数显示更多详情：设备标识符、连接方式（TCP/USB）、连接状态（Unknown/Ready/Connected/Offline/Unauthorized）、设备名称和hdc标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备标识符 Unauthorized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备处于未授权状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Empty]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有查询到设备信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc list targets\nconnect-key1\n...\n\n$ hdc list targets -v\nconnect-key1            USB     Connected       localhost       hdc\n127.0.0.1:5555          TCP     Offline         localhost       hdc\nconnect-key2            USB     Offline         localhost       hdc\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "连接指定的目标设备",
      children: "连接指定的目标设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -t [connect-key] [command]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设备标识符连接指定目标设备。  连接单台设备时为可选参数，连接多台设备时为必填参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc支持的命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830240)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "connect-key为每个设备唯一的标识符。通过USB连接，标识符为设备序列号；通过网络无线连接设备，标识符格式为IP:port。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["正常执行返回信息，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%91%BD%E4%BB%A4%E5%88%97%E8%A1%A8",
              children: "命令列表"
            }), "具体说明。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Not match target founded, check connect-key please."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用-t参数匹配不存在的connect-key，请检查connect-key是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Device not founded or connected."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备未找到或未连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]ExecuteCommand need connect-key? please confirm a device by help info."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请确保已连接设备并打开调试开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown operation command..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639341)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令返回的错误信息仅供开发者参考，后续可能会优化调整。请勿将此类信息用于自动化脚本或程序的逻辑判断，实际程序交互建议使用系统异常提供的标准错误码，具体详情可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdc%E9%94%99%E8%AF%AF%E7%A0%81",
        children: "hdc错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此调试方法需要与具体的操作命令搭配使用，下面以shell命令为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc list targets\nconnect-key1\n...\n\n$ hdc -t connect-key1 shell echo \"hello world!\"\nhello world!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "等待设备正常连接",
      children: "等待设备正常连接"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc wait # 等待设备正常连接。\nhdc -t [connect-key] wait # 等待指定的设备正常连接，connect-key需要替换为指定的设备标识符。\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t connect-key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1.0a版本新增参数：  连接单台设备时，为可选参数。  连接多台设备时，为必填参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc wait命令执行后，识别到正常连接的设备后结束。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 如果设备正常连接，则命令执行结束无任何打印信息。\n$ hdc wait # 单台设备。\n$ hdc -t connect-key1 wait # 多设备需使用-t指定连接设备。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usb连接场景",
      children: "USB连接场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "环境确认"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "确认项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "正常"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "异常处理"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB调试选项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果设备的USB调试模式未能自动开启，请尝试重启设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB数据连接线"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用USB数据连接线连接到调试电脑的USB接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果使用低带宽、无数据通信功能的USB连接线可能导致无法识别hdc设备，建议更换为设备原装充电线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB接口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主板直出USB接口（台式机为后面板的USB接口，笔记本为机身的USB接口）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果使用转接头/拓展坞/台式机前面板USB接口，可能存在带宽低和USB同步异常等问题，会导致频繁断连，推荐使用直连方式连接电脑和设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdc环境变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终端命令行输入hdc -h有回显帮助信息内容。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
              children: "环境准备"
            }), "章节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "驱动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接hdc设备后，设备管理器通用串行总线设备存在设备“HDC Device”或“HDC Interface”。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E5%A4%87%E6%97%A0%E6%B3%95%E8%AF%86%E5%88%AB",
              children: "设备无法识别"
            }), "章节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "连接步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过USB连接设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令查看已连接设备："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc list targets\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回信息中包含设备标识符，表示USB连接成功。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询到设备后，运行相关命令与设备交互。如果希望不带设备标识符执行hdc命令，需要确认设备不在TCP连接模式（hdc list targets查询的设备不包含IP:port形式的连接信息），直接连接即可，例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp连接场景",
      children: "TCP连接场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(604196)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCP调试功能尚未稳定，建议仅在测试环境中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "环境确认"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "确认项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "正常"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "异常处理"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电脑、设备处于同一网络。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接同一WiFi。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "telnet IP:port正常，网速稳定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请选择稳定网络。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdc环境变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终端命令行输入hdc -h有回显帮助信息内容。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
              children: "环境准备"
            }), "章节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "连接步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备端设置>系统>开发者选项>无线调试>打开无线调试。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "记录设备界面显示的IP地址和端口，格式为IP:port。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过tcp连接设备，执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc tconn IP:port\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令执行返回“Connect OK”表示连接成功。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看已连接设备，执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc list targets\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回信息为IP:port格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(630931)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要关闭TCP连接模式，可在设备中关闭无线调试开关或断开网络连接。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "远程连接场景",
      children: "远程连接场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远程连接场景指客户端（通常是开发者使用的本地电脑）通过网络与服务器（通常是连接了调试设备的服务器或开发机）建立连接，实现客户端对目标设备的远程调试，控制和管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(877254)/* ["default"] */.A) + "",
        width: "608",
        height: "161"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远程连接使用-s参数来指定服务器的网络参数，包括地址和端口号，该设置只在当前命令执行期间有效，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -s [IP:]port [command]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定当前服务进程的网络监听参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定监听的IP地址，支持IPv4和IPv6。不指定IP默认监听本机127.0.0.1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定监听的端口，范围为1~65535。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "command"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["hdc支持的命令，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdc%E5%91%BD%E4%BB%A4%E5%88%97%E8%A1%A8",
              children: "hdc命令列表"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connect server failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与服务进程建立连接失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s content port incorrect."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口号超出可设置范围（1~65535）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 在已有服务进程，且服务进程的网络监听参数为127.0.0.1:8710的环境中，执行查询设备命令。\n$ hdc -s 127.0.0.1:8710 list targets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "连接步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务器配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务器通过USB连接对应hdc设备后，执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hdc kill          # 关闭本地hdc服务。\n$ hdc -s IP:8710 -m # 启动网络转发的hdc服务，\n                    # 其中IP为服务器自身的IP，windows可通过ipconfig查询，unix系统可通过ifconfig查询，\n                    # 8710是默认端口号，也可设置其他端口号如：18710，\n                    # 启动后服务器将打印日志。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "客户端连接"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "客户端可以连通服务器IP地址，满足条件后执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hdc -s IP:8710 [command] # 其中IP为服务器IP，8710为第一步服务器进程启动时设置的端口号，\n                           # 如果端口号有变化，这里也需要变更，\n                           # command可以为任意hdc可用命令，例如list targets。\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(904534)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当命令行中明确使用 -s 参数指定服务器进程端口时，系统将忽略OHOS_HDC_SERVER_PORT环境变量中定义的端口设置。使用 -s 参数指定服务器地址时，如果监听地址不是本地回环地址（如127.0.0.1），需注意访问安全问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usb调试和无线调试切换",
      children: "USB调试和无线调试切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于连接模式切换的命令如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "tmode usb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该命令已废弃，不会操作设备连接通道，请在设备设置界面通过USB调试开关进行设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tmode port [port-number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开设备网络连接通道：设备端守护程序会重启，已建立的连接需要重新连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tmode port close"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭设备网络连接通道：设备端守护程序会重启，已建立的连接需要重新连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tconn IP:port [-remove]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接指定设备，使用“IP:port”指定，使用-remove参数断开。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(976112)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐通过设备端的USB调试开关和无线调试开关来控制连接通道。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打开设备网络连接通道",
      children: "打开设备网络连接通道"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc tmode port [port-number]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port-number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听连接的网络端口号，范围：1~65535。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set device run mode successful."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]ExecuteCommand need connect-key."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开失败，设备列表为空，无法建立设备的无线调试通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Incorrect port range."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口号超出可设置范围1~65535。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc tmode port 65512\nSet device run mode successful.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407521)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换前，请确保条件满足：远端设备与近端电脑处于同一网络，可通过ping命令检查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "近端电脑在命令行中执行命令ping 远端设备的IP地址；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果能接收到远端设备的回应数据包，表明二者处于同一网络。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如不满足以上条件，切勿使用该命令进行切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行完毕后，远端守护程序将退出并重启，需要重新连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关闭网络连接通道",
      children: "关闭网络连接通道"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc tmode port close\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]ExecuteCommand need connect-key."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备列表为空，无法执行命令。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc tmode port close\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421187)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行完毕后，远端设备上的守护程序将退出并重启，需要重新连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcp连接设备",
      children: "TCP连接设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过TCP连接指定设备，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc tconn IP:port [-remove]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "IP:port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的IP地址和端口号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-remove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，断开指定设备的连接。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connect OK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Info]Target is connected, repeat operation."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备当前已连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Connect failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc tconn 192.168.0.1:8888\nConnect OK\n\n# 断开指定网络设备连接。\n$ hdc tconn 192.168.0.1:8888 -remove\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行交互命令",
      children: "执行交互命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell [-b bundlename] [command]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b bundlename"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3.1.0e版本新增参数。指定可调试应用包名，在可调试应用数据目录内，以非交互式模式执行命令。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-debug-app/ide-device-file-explorer#section48216711204",
              children: "命令行方式访问应用沙箱"
            }), "。  此参数当前仅支持以非交互式模式执行命令，不支持缺省command参数执行命令进入交互式shell会话。  未配置此参数时，默认执行路径为系统根目录。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "command"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要在设备上执行的单次命令，不同类型或版本的系统支持的command命令有所差异，可以通过hdc shell ls /system/bin查阅支持的命令列表。当前大多数命令都是由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/command-line-utilities/toybox",
              children: "toybox"
            }), "提供，可通过 hdc shell toybox --help 获取命令帮助。  缺省该参数，hdc将会启动一个交互式的shell会话，开发者可以在命令提示符下输入命令，比如 ls、cd、pwd 等。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88355)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用参数[-b bundlename]指定包名，该包名对应的已安装应用必须满足以下条件：使用调试证书签名，并且已在设备上启动。有关如何申请调试证书及签名可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
        children: "申请调试证书"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "交互命令返回内容。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回内容详情请参见其他交互命令返回内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/bin/sh: XXX : inaccessible or not found."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的交互命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]具体失败信息。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行失败，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hdc%E9%94%99%E8%AF%AF%E7%A0%81",
              children: "hdc错误码"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 进入交互式模式执行命令。\n$ hdc shell\n$\n\n# 以非交互式模式执行命令。\n$ hdc shell \"ps -ef | grep hdcd\"\nshell         39491      1 1 14:40:58 ?     00:00:00 hdcd\n\n# 查询全部可用命令。\n$ hdc shell help -a\n---toybox---------------------------------------------------------------------\n\nusage: toybox [--long | --help | --version | [command] [arguments...]]\n\nWith no arguments, shows available commands. First argument is\nname of a command to run, followed by any arguments to that command.\n\n--long  Show path to each command\n...\n\n# 在指定包名的应用数据目录内以非交互式模式执行命令，支持touch、rm、ls、stat、cat、mkdir等命令。\n$ hdc shell -b com.example.myapplication ls data/storage/el2/base/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用管理",
      children: "应用管理"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "install src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装指定的应用文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uninstall bundlename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卸载指定的应用package包名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装应用文件",
      children: "安装应用文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用安装功能在设备端集成bm模块", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/bm-tool#%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4install",
        children: "安装命令（install）"
      }), "，简化了安装流程，开发者可以在电脑端直接执行命令完成应用安装。命令格式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc install [-cwd path|-r|-s|-w waitingTime|-u userId|-p|-h] src\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用安装包的文件路径。支持安装", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
              children: "HAP"
            }), "、应用内", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
              children: "HSP"
            }), "。从API version 22开始，支持安装", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-glossary#app",
              children: "APP包"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-cwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改工作目录。  用于在应用安装时，切换src到指定path。例如，初始安装应用为test.hap，所在目录为C:\\，实际安装应用文件路径为C:\\test.hap；如果使用-cwd \"D:\"，实际安装应用文件路径为D:\\test.hap。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，覆盖安装一个HAP/HSP。默认缺省，缺省时表示覆盖安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装应用HSP时为必选参数，其他场景为可选参数。用于指定待安装应用间HSP的路径。指定目录的时候，每个路径目录下只能存在一个HSP。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，安装HAP时指定bm工具等待时间，最短的等待时长为180s，最长的等待时长为600s，默认缺省为180s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/bm-tool#userid",
              children: "用户"
            }), "，默认在当前活跃用户下安装应用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定待安装的HAP/HSP路径，多HAP/HSP应用可指定多HAP/HSP所在文件夹路径。从API version 22开始，支持指定待安装的APP路径，也可指定只存在一个APP的文件夹路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，显示bm模块", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/bm-tool#%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4install",
              children: "安装命令（install）"
            }), "帮助信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Info]App install path:XXX msg:install bundle successfully.  AppMod finish."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功情况下返回安装信息及AppMod finish完成的通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "具体安装失败原因。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败情况下返回安装失败信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401965)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行install命令使用bm模块命令参数，对-w和-u参数需参数值组合使用的情况，需将参数变量和参数值放在引号内使用，如\"-w 180\"，\"-u 100\"，防止参数解析异常导致命令执行失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 安装example.hap包示例。\n$ hdc install D:\\example.hap\n[Info]App install path:D:\\example.hap msg:install bundle successfully.\nAppMod finish\n\n# 安装example.app包示例。\n$ hdc install D:\\example.app\n[Info]App install path:D:\\example.app msg:install bundle successfully.\nAppMod finish\n\n# 安装example.hap包示例（-r为bm模块install命令支持参数，覆盖安装）。\n$ hdc install -r D:\\example.hap\n[Info]App install path:D:\\example.hap msg:install bundle successfully.\nAppMod finish\n\n# 安装example.hsp包示例（-s为bm模块install命令支持参数，安装hsp必选参数）。\n$ hdc install -s D:\\example.hsp\n[Info]App install path:D:\\example.hsp msg:install bundle successfully.\nAppMod finish\n\n# 安装example.hap包示例（-w为bm模块install命令支持参数，指定bm工具等待时间）。\n$ hdc install \"-w 180\" D:\\example.hap\n[Info]App install path:D:\\example.hap msg:install bundle successfully.\nAppMod finish\n\n# 安装example.hap包示例（-u为bm模块install命令支持参数，指定用户id）。\n$ hdc install \"-u 100\" D:\\example.hap\n[Info]App install path:D:\\example.hap msg:install bundle successfully.\nAppMod finish\n\n# 安装D:\\hap_dir下应用示例（-p为bm模块install命令支持参数，指定安装路径）。\n$ hdc install -p D:\\hap_dir\n[Info]App install path:D:\\hap_dir msg:install bundle successfully.\nAppMod finish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "卸载应用",
      children: "卸载应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用卸载功能在设备端集成bm模块", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/bm-tool#%E5%8D%B8%E8%BD%BD%E5%91%BD%E4%BB%A4uninstall",
        children: "卸载命令（uninstall）"
      }), "，简化了卸载流程，开发者可以在电脑端直接执行命令完成应用卸载。命令格式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc uninstall [-n|-k|-s|-h] bundlename\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundlename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用安装包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定Bundle名称卸载应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，卸载应用时保存应用数据。默认卸载应用时不保存应用数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据场景判断，卸载应用间HSP时必选参数，其他场景为可选参数。卸载指定的共享库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，bm模块", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/bm-tool#%E5%8D%B8%E8%BD%BD%E5%91%BD%E4%BB%A4uninstall",
              children: "卸载命令（uninstall）"
            }), "帮助信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Info]App uninstall path: msg:uninstall bundle successfully.  AppMod finish."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功情况下返回卸载信息和AppMod finish完成的通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "具体卸载失败的原因。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败时返回卸载失败的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 卸载com.ohos.example包示例。\n$ hdc uninstall com.ohos.example\n[Info]App uninstall path: msg:uninstall bundle successfully.\nAppMod finish\n\n# 卸载com.ohos.example包示例（-n为bm模块uninstall命令支持参数，指定bundle名称）。\n$ hdc uninstall -n com.ohos.example\n[Info]App uninstall path: msg:uninstall bundle successfully.\nAppMod finish\n\n# 卸载com.ohos.example包示例（-k为bm模块uninstall命令支持参数，卸载应用时保存应用数据）。\n$ hdc uninstall -k com.ohos.example\n[Info]App uninstall path: msg:uninstall bundle successfully.\nAppMod finish\n\n# 卸载com.ohos.example包示例（-s为bm模块uninstall命令支持参数，卸载hsp时为必选参数）。\n$ hdc uninstall -s com.ohos.example\n[Info]App uninstall path: msg:uninstall bundle successfully.\nAppMod finish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件传输",
      children: "文件传输"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "file send SOURCE DEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从本地发送文件至远端设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file recv DEST SOURCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从远端设备接收文件至本地。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "本地发送文件至远端设备",
      children: "本地发送文件至远端设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc file send [-a|-sync|-z|-m|-cwd path|-b bundlename] SOURCE DEST\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地待传输的文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEST"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["远程目标文件路径。  从API version 21开始，媒体库文件支持通过hdc进行部分操作（低版本使用会提示[Fail]Error opening file: ...）。  媒体库文件路径：/mnt/data/", (0,jsx_runtime.jsxs)(_components.uid, {
              children: ["/media_fuse/Photo/目录及其子目录，", (0,jsx_runtime.jsxs)(_components.uid, {
                children: ["为当前用户的id。  通过hdc对媒体库操作指导参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-debug-optimize/debugging-commands/command-line-utilities/mediatool#hdc%E5%91%BD%E4%BB%A4",
                  children: "mediatool"
                }), "。"]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留文件修改时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只传输文件mtime有更新的文件。  mtime（modified timestamp）：修改后的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过LZ4格式压缩传输，此功能未开放，请勿使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件传输时同步文件DAC权限，uid，gid，MAC权限。  DAC（Discretionary Access Control）：自主访问控制，  uid（User identifier）：用户标识符（或用户ID），  gid（Group identifier）：组标识符（或组ID），  MAC（Mandatory Access Control）：强制访问控制（或非自主访问控制）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-cwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改工作目录。  用于在文件传输时，切换SOURCE到指定path。例如，初始发送文件为test，所在目录为/data，实际发送文件路径为/data/test；如果使用-cwd \"/user/\"，实际发送文件路径为/user/test。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3.1.0e版本新增参数（低版本使用会提示[Fail]Unknown file option: -b），用于指定可调试应用包名。  使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-debug-app/ide-device-file-explorer#section48216711204",
              children: "通过命令往应用沙箱目录中发送文件"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundlename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定可调试应用包名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileTransfer finish, Size:1, File count = 1, time:10ms rate:0.00kB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件发送成功时，返回传输成功的确认信息finish完成的通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "具体文件发送失败的原因。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件发送失败时，返回传输失败的具体错误信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc file send test /test/\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file send -b com.example.myapplication test /test/ # 导入test文件到com.example.myapplication应用沙箱。\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file send D:\\dest\\相机 /mnt/data/100/media_fuse/Photo/ # 媒体库操作，导入“D:\\dest\\相机”的所有文件到/mnt/data/100/media_fuse/Photo/相机/。\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file send D:\\dest\\新建目录 /mnt/data/100/media_fuse/Photo/相机/ # 媒体库操作，不支持创建目录。\n[Fail][E005005] Error create directory: ..., path:/mnt/data/100/media_fuse/Photo/相机//新建目录\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接收远端设备文件至本地",
      children: "接收远端设备文件至本地"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc file recv [-a|-sync|-z|-m|-cwd path|-b bundlename] DEST SOURCE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地待接收的文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEST"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["远程待传输的文件路径。  从API version 21开始，媒体库文件支持通过hdc进行部分操作（低版本使用会提示[Fail]Error opening file: ...）。  媒体库文件路径：/mnt/data/", (0,jsx_runtime.jsxs)(_components.uid, {
              children: ["/media_fuse/Photo/目录及其子目录，", (0,jsx_runtime.jsxs)(_components.uid, {
                children: ["为当前用户的id。  媒体库操作更多信息参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-debug-optimize/debugging-commands/command-line-utilities/mediatool#hdc%E5%91%BD%E4%BB%A4",
                  children: "mediatool"
                }), "。"]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留文件修改时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只传输文件mtime有更新的文件。  mtime（modified timestamp）：修改后的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过LZ4格式压缩传输，此功能未开放，请勿使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件传输时同步文件DAC权限，uid，gid，MAC权限。  DAC（Discretionary Access Control）：自主访问控制，  uid（User identifier）：用户标识符（或用户ID），  gid（Group identifier）：组标识符（或组ID），  MAC（Mandatory Access Control）：强制访问控制（或非自主访问控制）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-cwd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改工作目录。  用于在文件传输时，切换SOURCE到指定path。例如，初始接收文件目录为/data/，如果使用-cwd \"/user/\"，实际接收文件目录为/user/。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3.1.0e版本新增参数，用于传输指定的可调试应用进程应用数据目录下的文件。  使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-debug-app/ide-device-file-explorer#section48216711204",
              children: "从沙箱目录中下载文件到本地计算机"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundlename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可调试应用进程的包名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileTransfer finish, Size:1, File count = 1, time:10ms rate:0.00kB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件接收成功时，返回传输成功的确认信息finish完成的通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "具体文件接收失败的原因。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件接收失败时，返回传输失败的具体错误信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc file recv /test/test ./\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file recv -b com.example.myapplication /test/test # 导出com.example.myapplication应用沙箱文件/test/test。\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file recv /mnt/data/100/media_fuse/Photo/相机/文件A # 导出文件A。\nFileTransfer finish, Size:xxx, File...\n\n$ hdc file recv /mnt/data/100/media_fuse/Photo/相机 # 导出相机目录及里面的文件。\nFileTransfer finish, Size:xxx, File...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675717)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用参数[-b bundlename]指定包名，应满足条件：指定包名的已安装应用为“使用调试证书签名的应用”且在设备上已启动，如何申请调试证书及签名可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
        children: "申请调试证书"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "版本更新说明"
        })
      }), "：从3.1.0a版本开始，支持使用中文字符作为文件传输命令参数，便于多语言环境下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端口转发",
      children: "端口转发"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "fport ls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出所有端口转发任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fport localnode remotenode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置正向端口转发任务：监听“电脑端端口”(localnode)请求并转发到“设备端端口”(remotenode)。任务格式为<转发类型>:<转发端口>，如\"tcp:1234\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rport remotenode localnode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置反向端口转发任务：监听“设备端端口”(remotenode)请求并转发到“电脑端端口”(localnode)。任务格式为<转发类型>:<转发端口>，如\"tcp:1234\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fport rm taskstr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的端口转发任务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658434)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电脑端支持的端口转发类型：tcp。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备端支持的端口转发类型：tcp，dev，localabstract，localreserved，localfilesystem，jdwp，ark。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询端口转发任务列表",
      children: "查询端口转发任务列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询所有的正向端口转发任务和反向端口转发任务，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc fport ls\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tcp:1234 tcp:1080 [Forward]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正向端口转发任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tcp:2080 tcp:2345 [Reverse]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "反向端口转发任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Empty]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无端口转发任务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc fport ls\nconnect-key tcp:2080 tcp:2345 [Reverse]\nconnect-key tcp:1234 tcp:1080 [Forward]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建正向端口转发任务",
      children: "创建正向端口转发任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置正向端口转发任务，将指定的“电脑端端口”转发到“设备端端口”，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc fport localnode remotenode\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwardport result:OK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务设置正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Incorrect forward command."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务设置失败，端口转发参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]TCP Port listen failed at XXXX."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务设置失败，本地转发端口被占用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Forward parament failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务格式有误、转发端口协议或端口范围有误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Not support forward-type."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前平台不支持参数中使用的转发端口协议。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc fport tcp:1234 tcp:1080\nForwardport result:OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(7596)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建正向端口转发任务时，电脑端使用TCP协议类型且指定端口为port，默认监听127.0.0.1:port。如果在启动服务进程时使用-e参数指定了监听主机IP地址，则电脑端会监听-e指定的IP:port。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建反向端口转发任务",
      children: "创建反向端口转发任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置反向端口转发任务，系统将指定的“设备端口”转发到“主机端口”，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc rport remotenode localnode\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forwardport result:OK."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务设置正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Incorrect forward command."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务设置失败，端口转发参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]TCP Port listen failed at XXXX."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务设置失败，本地转发端口被占用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Forward parament failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务格式有误、转发端口协议或端口范围有误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc rport tcp:1234 tcp:1080\nForwardport result:OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除端口转发任务",
      children: "删除端口转发任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定的正向端口转发任务或反向端口转发任务，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc fport rm taskstr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(536339)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "taskstr参数为具体的正向端口转发任务或反向端口转发任务，建议优先通过hdc fport ls命令查询后删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "taskstr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务，形如 tcp:XXXX tcp:XXXX。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove forward ruler success, ruler:tcp:XXXX tcp:XXXX."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务删除正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]Remove forward ruler failed, ruler is not exist tcp:XXXX tcp:XXXX."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口转发任务删除失败，指定的转发任务不存在。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc fport rm tcp:1234 tcp:1080\nRemove forward ruler success, ruler:tcp:1234 tcp:1080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务进程管理",
      children: "服务进程管理"
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
            children: "start [-r]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动hdc服务进程，使用-r参数触发服务进程重新启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kill [-r]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终止hdc服务进程，使用-r参数触发服务进程重新启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绕过对服务进程的查询步骤，用于快速执行客户端命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用前台启动模式启动服务进程。  前台启动模式（添加-m参数）：实时打印服务日志到客户端窗口。  后台启动模式（不添加-m参数）：客户端不打印服务日志，日志内容写入本地磁盘文件，具体文件存放路径可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8B%E6%97%A5%E5%BF%97",
              children: "服务器进程日志"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定在TCP端口转发时，本地监听的IP地址，默认是127.0.0.1。该参数必须和-m一起使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启动服务",
      children: "启动服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动hdc服务进程，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc start [-r]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无返回信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务进程启动成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc start -r # 服务进程启动状态下，触发服务进程重新启动。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(27835)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当启动hdc服务进程且系统未检测到运行的服务进程时，日志等级的设置优先级如下：若在同一命令中指定了-l参数和配置了OHOS_HDC_LOG_LEVEL环境变量，环境变量优先级高于-l参数；如果仅指定了-l参数，则采用该参数配置的日志等级；若两者均未指定，则服务进程将以默认日志等级LOG_INFO启动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "终止服务",
      children: "终止服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc kill [-r]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kill server finish."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务进程终止成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Fail]具体失败信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务进程终止失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc kill -r # 终止并重启服务进程，实际使用可执行hdc -l 5 kill -r命令查看详细重启的log。\nKill server finish\n\n$ hdc kill # 终止服务进程。\nKill server finish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "快速执行命令",
      children: "快速执行命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绕过对服务进程的查询步骤，用于快速执行客户端命令。服务未启动时执行命令不会重新启动服务，使用参数前确保服务已正常启动。命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -p [command]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc支持的命令。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connect server failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与服务器进程建立连接失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc start # 启动后台服务进程。\n\n$ hdc -p list targets # 跳过检查，直接执行命令。\nconnect-key1\nconnect-key2\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(757745)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在未指定-p参数的情况下直接执行command命令时，客户端将首先检查本地是否已有运行的服务进程。如果系统未检测到运行的服务进程，客户端将自动启动服务进程，并建立连接以传递命令；如果系统检测到运行的服务进程，客户端将直接与该后台服务建立连接并下发相应的命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前台启动服务",
      children: "前台启动服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用前台启动模式启动服务进程，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -m\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务进程初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[I][1970-01-01 00:00:00.000] Program running. Ver: X.X.Xx Pid:XXX.  ..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常打印对应等级的日志，显示服务器进程活动状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc -s 127.0.0.1:8710 -m # 指定当前服务进程的网络监听参数并启动服务进程。\n[I][1970-01-01 00:00:00.000][4f28][xxxx.xxx:123] Program running. Ver: 3.1.0e Pid:12345\n...\n$ hdc -e 0.0.0.0 -m # 指定端口转发本地监听IP地址为0.0.0.0并启动服务进程。\n[I][1970-01-01 00:00:00.000][4f28][xxxx.xxx:123] Program running. Ver: 3.2.0b Pid:12345\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310794)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在前台启动模式下，可通过附加 -s 参数来指定服务进程的网络监听参数。如果既没有使用 -s 指定网络监听参数，也没有配置环境变量OHOS_HDC_SERVER_PORT配置监听端口，系统将采用默认网络监听参数：127.0.0.1:8710。也可以通过-e参数来指定端口转发时本地主机监听的IP地址，如果没有使用-e参数，则默认监听127.0.0.1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在服务进程前台启动模式下，系统默认的日志输出等级为 LOG_DEBUG。如果需要变更日志等级，可通过使用 -l 参数来进行相应的设置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在运行环境中，仅允许存在一个服务进程实例。如果运行环境中已存在一个活跃的后台服务进程，尝试在前台启动新的服务进程实例将无法成功。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备操作",
      children: "设备操作"
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
            children: "hilog [-h]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印设备端的日志信息，可通过hdc hilog -h查阅支持的参数列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jpid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示设备上已打开应用的进程pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "track-jpid [-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-p]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "target boot [-bootloader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-recovery]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "target boot [MODE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启目标设备，加参数重启后进入相应的模式，其中MODE为/bin/begetctl命令中reboot支持的参数，可通过hdc shell \"/bin/begetctl -h"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "打印设备端日志",
      children: "打印设备端日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc hilog [-h]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hilog支持的参数，可通过hdc hilog -h查阅支持的参数列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "返回具体信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抓取的日志信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc hilog -h\nUsage:\n-h --help\n  Show all help information.\n  Show single help information with option:\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示设备已打开应用的进程pid",
      children: "显示设备已打开应用的进程pid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc jpid\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进程号列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备上已打开应用的pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Empty]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备上无打开的进程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc jpid\n1234\n1080\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实时显示设备已打开应用的进程pid和应用名",
      children: "实时显示设备已打开应用的进程pid和应用名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时显示设备上已打开应用的进程pid和应用名称，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc track-jpid [-a|-p]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不加参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只显示已打开debug版本应用的进程pid和应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示debug和release应用的进程pid和包名/进程名，同时显示debug和release的标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示debug和release应用的进程pid和包名/进程名，但不显示debug和release的标签。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "进程号和包名/进程名列表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不加参数时仅显示已打开应用的进程pid，使用-p参数额外显示应用包名，使用-a参数同时显示debug和release标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Empty]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无开启JDWP调试协议的应用进程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc track-jpid -a\n1234 com.example.hello release\n...\n\n$ hdc track-jpid -p\n1234 com.example.hello\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重启目标设备",
      children: "重启目标设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc target boot [-bootloader|-recovery]\nhdc target boot [MODE]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不加参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-bootloader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启后进入fastboot模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启后进入recovery模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启后进入MODE模式，MODE为/bin/begetctl命令中reboot支持的参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc target boot -bootloader  # 重启后进入fastboot模式。\nhdc target boot -recovery    # 重启后进入recovery模式。\nhdc target boot shutdown     # 关机。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安全相关命令",
      children: "安全相关命令"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keygen FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成一个新的密钥对，并将私钥和公钥分别保存到FILE和FILE.pub，其中FILE为自定义的文件名。可指定目录，默认为当前工作目录。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc keygen FILE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FILE为自定义的文件名。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 在当前目录下生成key和key.pub文件。\n$ hdc keygen key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询hdc版本号",
      children: "查询hdc版本号"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印客户端进程版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印服务进程版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checkserver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取客户端与服务进程版本。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询hdc客户端进程版本",
      children: "查询hdc客户端进程版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询hdc客户端进程的版本信息，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -v\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ver: X.X.Xx."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc（SDK）客户端进程版本信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc -v\nVer: 3.1.0e\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询hdc服务进程版本",
      children: "查询hdc服务进程版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询hdc服务进程的版本信息，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc version\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ver: X.X.Xx."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc（SDK）服务进程版本信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc version\nVer: 3.1.0e\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询客户端和服务器进程版本",
      children: "查询客户端和服务器进程版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc checkserver\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client version: Ver: X.X.Xx, Server version: Ver: X.X.Xx."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "client（客户端），server（服务器）版本号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc checkserver\nClient version: Ver: 3.1.0e, Server version: Ver: 3.1.0e\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出系统信息",
      children: "导出系统信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc bugreport [FILE]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "FILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定系统信息存储文件名。可指定存储目录，默认存储到当前工作目录。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-------------------------------[base]-------------------------------  BuildId: xxx  RleaseType: xxx  OsVersion: default/default/default/default/xxx  DeviceType: default  Manufacture: default  -----"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备基本信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hdc bugreport\n-------------------------------[base]-------------------------------\n\nBuildId: xxx\nRleaseType: xxx\nOsVersion: default/default/default/default/xxx\nDeviceType: default\nManufacture: default\n-----\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdc调试日志",
      children: "hdc调试日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务器进程日志",
      children: "服务器进程日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指定运行时日志等级"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc运行时日志等级，默认为LOG_INFO，命令格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc -l [level] [command]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[level]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定运行时日志等级，等级随数字递增。设置日志级别时会启用当前及以下所有等级类型。例如，设置日志等级为3，可打印1~3类型的所有日志。  0：LOG_OFF  1：LOG_FATAL  2：LOG_WARN  3：LOG_INFO  4：LOG_DEBUG  5：LOG_ALL  6：LOG_LIBUSB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc支持的命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(151945)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当配置运行时日志级别为6（LOG_LIBUSB）时，将激活libusb相关的增量日志输出，增量日志级别的详细程度高、数据量大，有助于准确诊断服务进程中与USB相关的异常情况，建议开发者按需使用。USB相关操作主要由服务进程执行，因此，只有服务进程具备打印增量日志的功能。相应地，客户端侧的日志几乎不包含增量日志信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定运行日志等级仅适用于当前进程（包括客户端与服务进程），无法更改已存在的进程日志等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "返回信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日志信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定等级的日志打印信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 客户端打印LOG_DEBUG及以下级别日志，以执行shell ls为例。\n$ hdc -l 5 shell ls\n[D][1970-01-01 00:00:00.000][12dc][xxxx.xxx:123] Mallocchannel:1234567\n...\n\n# 服务进程前台模式启动指定LOG_LIBUSB级别日志。\n$ hdc kill && hdc -l 6 -m\nKill server finish\n[I][1970-01-01 00:00:00.000][4f28][xxxx.xxx:123] Program running. Ver: 3.1.0e Pid:12345\n...\n\n# 服务进程后台启动模式指定LOG_LIBUSB级别日志。\n$ hdc kill && hdc -l 6 start\nKill server finish\n[D][1970-01-01 00:00:00.000][12dc][xxxx.xxx:123] Mallocchannel:1234567\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88267)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用-m参数可以以前台启动服务进程，从而直接观察前台日志输出。如果需要退出进程，可按下Ctrl+C。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以后台启动时，可以在hdc.log中观察日志输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "日志获取"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请执行以下命令开启日志获取："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc kill\nhdc -l 5 start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收集到的完整日志存放路径如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "平台"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "路径"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%temp%\\"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际路径参考：C:\\Users\\用户名\\AppData\\Local\\Temp  （实际使用请替换用户名变量）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/tmp/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MacOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$TMPDIR/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际路径可通过echo $TMPDIR查看，执行cd $TMPDIR命令可直接跳转至相应目录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志文件类型包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "日志类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "日志名称格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "日志用途"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实时日志"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc.log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时记录服务器进程日志。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每次重启hdc服务进程，将会重命名原有日志并记录新的hdc.log。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "历史日志临时文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc-%Y%m%d-%H%M%S.log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转储历史日志归档生成的中间文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以时间2024年9月19日16:18:57.921为例，对应时间格式为：20240919-161857921，生成的日志临时文件名为：hdc-20240919-161857921.log。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "历史日志归档文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc-%Y%m%d-%H%M%S.log.tgz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩存储历史日志。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "归档文件为.tgz类型压缩文件，可使用解压工具进行解压查看。以历史日志临时文件名hdc-20240919-161857921.log为例，对应的历史日志归档文件名为：hdc-20240919-161857921.log.tgz，历史日志归档文件生成后，对应的历史日志临时文件将自动删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实时日志缓存临时文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".hdc.cache.log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时日志产生的临时缓存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备端日志",
      children: "设备端日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hilog日志工具获取对应日志，命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell hilog -w start                              # 开启hilog日志落盘(已开启hilog日志工具再次执行会报错)。\nhdc shell hilog -w stop                               # 关闭hilog日志落盘(已关闭hilog日志工具再次执行会报错)。\nhdc shell ls /data/log/hilog                          # 查看已落盘hilog日志。\nhdc file recv /data/log/hilog {local_path}            # 获取hilog已落盘日志（包含内核日志，local_path为本地路径，不同系统有所区别，这里未列举实际示例）。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可选配置项",
      children: "可选配置项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohos_hdc_server_port",
      children: "OHOS_HDC_SERVER_PORT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认值：8710。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置服务器进程运行时监听的端口号，该端口用于客户端与服务器之间的数据通讯。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器进程启动时，默认会监听电脑的8710端口，客户端使用TCP协议通过此端口连接服务器。如果电脑的8710端口已经被使用或希望使用其他端口，可以通过添加环境变量OHOS_HDC_SERVER_PORT到系统环境变量中来修改服务器进程启动时监听的端口号。可以设置的端口范围为1~65535。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，添加变量名为：OHOS_HDC_SERVER_PORT，变量值可设置为任意未被占用的端口，如18710。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohos_hdc_log_level",
      children: "OHOS_HDC_LOG_LEVEL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认值：3。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置服务进程日志记录级别，日志级别详情参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8B%E6%97%A5%E5%BF%97",
        children: "服务器进程日志"
      }), "指定运行时日志等级章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohos_hdc_heartbeat",
      children: "OHOS_HDC_HEARTBEAT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认：心跳功能开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置服务器和守护程序的心跳功能开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器和守护程序启动后，默认会互相发送心跳数据包，收到心跳数据包后会记录在hdc的日志中，方便后期查看设备的连接情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器进程运行的电脑中配置环境变量OHOS_HDC_HEARTBEAT为“1”后，服务器会关闭心跳特性；当有设备连接这台电脑后，服务器会给守护程序发送心跳特性关闭的信息，双方不再互相发送心跳数据包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置为\"1\"表示关闭心跳功能，设置为其它数字表示开启心跳功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohos_hdc_cmd_record",
      children: "OHOS_HDC_CMD_RECORD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认：hdc命令录制关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置hdc命令录制功能的开关。此功能仅记录执行的hdc命令，不记录命令的执行结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置为\"1\"表示开启命令录制功能；不设置或者设置为其它数字表示关闭命令录制功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制日志的存放路径如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "平台"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "路径"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%temp%\\hdc_cmd\\"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际路径参考：C:\\Users\\用户名\\AppData\\Local\\Temp\\hdc_cmd<br/>（实际使用请替换用户名变量）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/tmp/hdc_cmd/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MacOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$TMPDIR/hdc_cmd/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohos_hdc_encrypt_channel",
      children: "OHOS_HDC_ENCRYPT_CHANNEL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认：通道加密功能关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置服务器和守护程序之间的TCP连接通道加密功能开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置为\"1\"表示开启TCP连接的通道加密功能；不设置或者设置为其它数字表示关闭通道加密功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持该参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(750339)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器进程运行时默认监听电脑端的8710端口，可通过设置系统环境变量OHOS_HDC_SERVER_PORT自定义监听的端口号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境变量配置方法",
      children: "环境变量配置方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以配置OHOS_HDC_LOG_LEVEL值为5举例，介绍环境变量配置方法，更详细的步骤可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "环境准备"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作系统"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在电脑设置中搜索“查看高级系统设置”，在环境变量>系统变量>Path>编辑中，添加环境变量名称为OHOS_HDC_LOG_LEVEL，变量值为5。配置完毕后点击确认。环境变量配置完成后，关闭并重启命令行或其他使用到HarmonyOS SDK的软件，以生效新配置的环境变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在~/.bash_profile文件末尾追加内容export OHOS_HDC_LOG_LEVEL=5并保存后，执行source ~/.bash_profile生效当前环境变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MacOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在~/.zshrc文件末尾追加内容export OHOS_HDC_LOG_LEVEL=5并保存后，执行source ~/.zshrc生效当前环境变量。环境变量配置完成后，关闭并重启命令行或其他使用到HarmonyOS SDK的软件，以生效新配置的环境变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdc版本配套表",
      children: "hdc版本配套表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "hdc版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "新增特性"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1.0a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["wait命令支持-t参数：详细说明参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%AD%89%E5%BE%85%E8%AE%BE%E5%A4%87%E6%AD%A3%E5%B8%B8%E8%BF%9E%E6%8E%A5",
              children: "等待设备正常连接"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1.0e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15及以上版本"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- file send命令支持-b参数：详细说明参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93",
              children: "文件传输"
            }), "。  - file recv命令支持-b参数：详细说明参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93",
              children: "文件传输"
            }), "。  - shell命令支持-b参数：详细说明参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%A7%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%91%BD%E4%BB%A4",
              children: "执行交互命令"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2.0b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 端口转发任务支持监听远端主机IP：详细说明参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E6%AD%A3%E5%90%91%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1",
              children: "创建正向端口转发任务"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96629)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者当前运行的hdc版本较低，某些功能存在兼容性问题，需要根据功能特性提升版本时，可参考对应API版本说明下载最新版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备无法识别",
      children: "设备无法识别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令行执行hdc list targets命令后，返回结果为[Empty]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况一"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看设备管理器是否显示hdc设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows环境："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备管理器>通用串行总线设备中是否显示HDC Device（单一端口设备）或HDC Interface（复合端口设备）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux环境："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在命令行执行lsusb，在返回的内容中检查是否有HDC Device（单一端口设备）或HDC Interface（复合端口设备）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MacOS环境："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看USB设备的系统信息或系统概述，步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按住键盘上的Option键，点按菜单（通常位于屏幕左上角）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选取系统信息或系统概述选项；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在随后出现的窗口中，选择左边的USB选项；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在随后显示的设备树中，查看是否有HDC Device（单一端口设备）或HDC Interface（复合端口设备）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果上述环境中未显示hdc设备，说明设备未能被正确识别，开发者可以尝试以下方法解决："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请尝试使用其他USB物理接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更换USB数据线。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用其他计算机进行调试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启用设备的USB调试模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当设备出现授权信任弹窗，请点击“信任”或“永久信任”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备执行恢复出厂设置操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况二"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存在USB设备，但是驱动损坏，显示\"HDC Device\"⚠警告图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现象描述：该问题常见于Windows环境，表现在设备管理器>通用串行总线设备中，HDC Device显示为黄标警告，且描述信息为该设备无法正常工作。可尝试重新安装驱动解决，如重新安装驱动无法解决，可以尝试更换USB连接数据线/拓展坞/USB接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "重新安装驱动的方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开设备管理器，右键点击存在警告图标的HDC Device；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出现的菜单中点击更新驱动程序；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出现的提示窗口（第1/3个）中，点击浏览我的电脑以查找驱动程序；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出现的提示窗口（第2/3个）中，点击让我从计算机上的可用驱动程序列表中选取；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出现的提示窗口（第3/3个）中，点击取消勾选显示兼容硬件，选择厂商：WinUSB设备，选择型号：WinUSB设备，选择完成后点击下一步按钮。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况三"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接设备时出现[Fail]Failed to communicate with daemon。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现象描述：命令行执行hdc相关命令，返回[Fail]Failed to communicate with daemon。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能存在以下原因，可参考排查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hdc或SDK版本与设备不匹配：如果设备更新到最新版本，可更新hdc或SDK工具至最新版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "端口被占用："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当hdc和hdc_std使用同一端口同时运行时，OHOS_HDC_SERVER_PORT设置的端口互相冲突（未设置则使用默认端口8710，仍然会冲突）。只运行其中一个实例，其他软件占用hdc默认端口也会导致该问题发生。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况四"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接设备时出现Connect server failed。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出现该现象，可能存在以下原因："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "端口抢占"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查具有自带hdc功能的软件进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果存在自带hdc的软件（DevEco Studio、DevEco Testing），请关闭这些软件后再执行hdc相关命令。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询hdc端口情况。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以设置OHOS_HDC_SERVER_PORT为8710端口为例，不同平台的查询命令如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Unix："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "netstat -an |grep 8710\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "netstat -an |findstr 8710\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如存在抢占的软件，请关闭该软件进程或更换OHOS_HDC_SERVER_PORT环境变量为其他端口号。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查未关闭的其他版本服务器进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用任务管理器>详细信息查询hdc.exe进程，右键打开文件所在位置，核对位置是否为配置的环境变量中的hdc文件位置，如果不一致，可尝试结束hdc.exe进程（执行hdc kill命令或者在任务管理器直接结束进程）并重新执行hdc命令。（关闭服务器进程后执行hdc命令会重启服务器）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Unix："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用ps -ef |grep hdc查询hdc后台服务器进程，核对进程启动位置是否为配置的环境变量中的hdc文件位置，如果不一致，可尝试结束hdc进程（hdc kill或者kill -9 hdc进程的pid）并重新执行hdc命令。（关闭服务器进程后执行hdc命令会重启服务器）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注册表异常"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决方法：清理注册表，步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时按下Win+R键，启动运行工具，输入栏输入regedit打开注册表；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在注册表地址栏中输入以下内容并按回车键，即可进入USB类设备驱动程序的注册表；"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Class\\{88bae032-5a81-49f0-bc3d-a4ff138216d6}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["找到UpperFilters，右键点击”修改”，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "备份"
            })
          }), "并清空其中的数值数据内容（如果清空后无法解决问题，可以依照备份恢复）；"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "刷新设备管理器，插拔USB接口，或重启计算机。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux和macos系统非管理员权限运行hdc提示无法找到设备",
      children: "Linux和MacOS系统非管理员权限运行hdc提示无法找到设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux和MacOS系统非管理员角色运行hdc后，使用USB方式连接设备后执行hdc list targets命令无法找到设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非管理员角色默认无USB设备操作权限，如果需要开启该权限，可按以下方法操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MacOS系统：停止hdc服务，使用sudo命令重新启动hdc服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo hdc kill\nsudo hdc start\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linux系统："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "（临时权限）设置USB设备操作权限最大化："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "sudo chmod -R 777 /dev/bus/usb/\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "（永久权限）永久修改USB设备权限："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "使用lsusb命令查找USB设备的vendorID和productID；"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "创建一个新的udev规则；"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "编辑udev加载规则，用设备的“idVendor”和“idProduct”来替换默认值。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "MODE=\"0666\"来表示USB设备的权限GROUP；GROUP代表用户组，要确保此时登录的系统用户在该用户组中："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "$ sudo vim /etc/udev/rules.d/90-myusb.rules\nSUBSYSTEMS==\"usb\", ATTRS{idVendor}==\"067b\", ATTRS{idProduct}==\"2303\", GROUP=\"users\", MODE=\"0666\"\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "重启电脑或重新加载udev规则："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "sudo udevadm control --reload\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(369242)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启非管理员角色的USB设备操作权限可以解决在Linux环境在非管理员权限下使用hdc因权限不足无法找到设备的情况。但权限最大化可能存在潜在安全问题，请开发者根据使用场景自行评估是否开启此权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdc无法运行",
      children: "hdc无法运行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用命令行执行hdc命令无法运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行环境异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linux运行环境：建议使用Ubuntu18.04及以上64位版本。如出现libc++.so引用错误，请使用ldd或readelf命令检查库引用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MacOS运行环境：建议使用MacOS 11及以上版本。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows运行环境：建议使用Windows10或Windows11 64位版本，如低版本缺失WinUSB库或驱动，请使用Zadig工具进行更新。对于需要安装驱动的设备，请使用Zadig工具安装libusb-win32驱动。详情请见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/pbatard/libwdi/releases",
            children: "Zadig链接"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行方式不当：请使用命令行依照正确命令运行hdc工具，而非鼠标双击文件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用hdc-file-sendrecv传输中文文件出现乱码",
      children: "使用hdc file send/recv传输中文文件出现乱码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc文件传输命令执行出现乱码，如使用file recv从设备端发送带有中文名称的文件到本地，报错提示[Fail]Error opening file: no such file or directory, path:XXXXX，其中path显示中文乱码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777078)/* ["default"] */.A) + "",
        width: "680",
        height: "45"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.1.0a版本开始，文件传输命令支持参数路径中包含中文，版本过低需要更新至最新版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hdc checkserver命令检查当前版本。如果低于3.1.0a版本，需将SDK升级到API12或更高版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行hdc-list-targets显示unauthorized",
      children: "执行hdc list targets显示\"Unauthorized\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hdc list targets命令查询已连接设备，连接设备标识后显示Unauthorized。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195229)/* ["default"] */.A) + "",
        width: "293",
        height: "31"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首次连接未授权：连接设备后解锁设备，屏幕显示“是否信任此设备？”窗口，点击“始终信任”或“信任”完成授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "授权窗口关闭或拒绝授权：设备端授权窗口会在超时后关闭，或开发者在授权窗口点击“不信任”拒绝授权。需要再次授权可在设备端 设置>系统>开发者选项>USB调试/无线调试 中，关闭已开启的调试开关后再开启，或执行hdc kill -r重启服务进程。屏幕会再次显示“是否信任此设备？”窗口，点击“始终信任”或“信任”完成授权。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行任意hdc命令报错cryptacquirecontext-second-failed",
      children: "执行任意hdc命令报错：CryptAcquireContext second failed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hdc相关命令报错：CryptAcquireContext second failed XXX。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改电脑环境注册表信息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时按下Win+R键，启动运行工具，在输入栏中输入regedit以打开注册表；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册表地址栏输入以下内容并按下回车"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography\\Protect\\Providers\\df9d8cd0-1501-11d1-8c7a-00c04fc297eb；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右键新建DWORD(32位)值(D)，新增值名称为ProtectionPolicy 值为 1（16进制），然后点击确定；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启电脑后问题解决。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows设备管理器出现-未知usb设备设备描述符请求失败",
      children: "Windows设备管理器出现 未知USB设备（设备描述符请求失败）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用USB方式连接调试设备，电脑端设备管理器通用串行总线控制器出现未知USB设备（设备描述符请求失败）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进入Windows服务管理（services.msc），禁止后重启Plug and Play服务；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卸载设备管理器中出现故障的USB设备，并拔出USB线；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重启计算机。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试后，如果仍然无法识别，或者将设备连接到其他计算机上也无法识别，可能是USB设备的驱动出现故障，可以尝试更换USB连接线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdc命令执行异常",
      children: "hdc命令执行异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc命令执行后未输出预期内容，可能涉及以下场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：执行hdc命令提示：Connect server failed。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：执行hdc命令提示：connect failed status:-4078。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景三：执行hdc命令无任何输出。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端口异常问题的解决方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查自带hdc的软件进程。包括自带hdc的软件（如DevEco Studio、DevEco Testing），如果存在这些软件，请关闭后再执行hdc相关命令。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询hdc端口情况。以设置的OHOS_HDC_SERVER_PORT为8710端口为例，在不同平台查询命令如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Unix："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "netstat -an |grep 8710\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "netstat -an |findstr 8710\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如存在抢占的软件，可以终止该软件进程，或者修改OHOS_HDC_SERVER_PORT环境变量为其他端口号。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查未关闭的其他版本服务器进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows：使用任务管理器>详细信息查询hdc.exe进程，右键打开文件所在位置，核对位置是否为配置的环境变量中的hdc文件位置，如果不一致，可尝试结束hdc.exe进程（命令行工具中执行hdc kill或者任务管理器直接结束进程）并重新执行hdc命令。（关闭服务器进程后执行hdc命令会重新启动服务器）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Unix：使用ps -ef | grep hdc查询hdc后台服务器进程，核对进程启动位置是否为配置的环境变量中的hdc文件位置，如果不一致，可尝试结束hdc进程（hdc kill或者kill -9 hdc进程的pid）并重新执行hdc命令。（关闭服务器进程后执行hdc命令会重新启动服务器）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他问题排查常用步骤",
      children: "其他问题排查常用步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令行执行hdc list targets查看返回信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查设备管理是否有HDC Device。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["执行hdc kill关闭服务器进程后，执行hdc -l5 start收集日志（hdc.log位于执行端TEMP目录下，不同平台目录位置存在差异，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8B%E6%97%A5%E5%BF%97",
          children: "服务器进程日志"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过hdc.log日志定位相关问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(27204)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多常见问题处理可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit",
        children: "FAQ"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdc错误码",
      children: "hdc错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e000001-hdc版本太低",
      children: "E000001 hdc版本太低"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sdk hdc.exe version is too low, please upgrade to the latest version."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc版本太低，需更新至最新版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端版本低于3.0.0b时，不支持授权，无法接入系统。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdc%E7%89%88%E6%9C%AC%E9%85%8D%E5%A5%97%E8%A1%A8",
        children: "hdc版本配套表"
      }), "升级到最新版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e000002-设备未授权",
      children: "E000002 设备未授权"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The device unauthorized."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This server's public key is not set."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please check for a confirmation dialog on your device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Otherwise try 'hdc kill' if that seems wrong."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备未授权。请检查是否在设备授权弹窗“信任”授权，如果已经授权，请尝试执行\"hdc kill\"命令后重新执行调试命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：首次连接设备未在设备端授权调试计算机。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：授权窗口弹出，如果开发者点击了“信任”而非“始终信任”，在断开设备后重新连接时需要再次授权。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：设备端弹出授权窗口，点击授权。具体操作为：连接设备后，系统会自动弹出授权弹窗。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：进入设备端 设置>系统>开发者选项，关闭调试开关后重新打开，重新连接设备进行授权；或者执行命令hdc kill -r后重新启动hdc，再次触发授权弹窗，点击“始终信任”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e000003-设备端用户未授权",
      children: "E000003 设备端用户未授权"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The device unauthorized."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user denied the access for the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please execute 'hdc kill' and redo your command,"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "then check for a confirmation dialog on your device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备未授权。设备端拒绝授权调试，请执行\"hdc kill\"命令后重新执行调试命令，并且检查设备端授权窗口提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备端授权窗口超时自动关闭，未确认授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者点击“不信任”，拒绝授权。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入设备端 设置 > 系统 > 开发者选项，关闭调试开关后重新打开，重新连接设备进行授权；或执行命令hdc kill -r后重新启动hdc，再次触发授权弹窗，点击“始终信任”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e000004-通信连接不稳定",
      children: "E000004 通信连接不稳定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The communication channel is being established."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please wait for several seconds and try again."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通信通道未建立，请等待几秒后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络或USB连接未建立或连接不稳定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接设备后等待大约10秒，待连接建立后进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001000-tmode不支持设置usb调试",
      children: "E001000 tmode不支持设置USB调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For USB debugging, please set it on the device's Settings UI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hdc tmode命令不支持设置USB调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hdc tmode usb命令已废弃，参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usb%E8%B0%83%E8%AF%95%E5%92%8C%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95%E5%88%87%E6%8D%A2",
        children: "USB调试和无线调试切换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usb%E8%B0%83%E8%AF%95%E5%92%8C%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95%E5%88%87%E6%8D%A2",
        children: "USB调试和无线调试切换"
      }), "tmode usb命令说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001001-命令未知",
      children: "E001001 命令未知"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unknown command."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc tmode命令有误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc tmode命令缺少参数或参数有误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#usb%E8%B0%83%E8%AF%95%E5%92%8C%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95%E5%88%87%E6%8D%A2",
        children: "USB调试和无线调试切换"
      }), "，完善执行命令。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001003-usb连接异常",
      children: "E001003 USB连接异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB communication abnormal, please check the USB communication link."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB通信异常，请检查USB通信链路。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB连接线松动或断开。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hdc shell reboot后，设备重启，连接正常断开，无需处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hdc tmode port XXX，设备由USB调试方式转换为无线调试方式，连接正常断开，无需处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认设备与电脑的USB线连接牢固。正常连接仍有异常，可尝试更换USB线或其他USB端口。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hdc%E7%89%88%E6%9C%AC%E9%85%8D%E5%A5%97%E8%A1%A8",
          children: "hdc版本配套表"
        }), "章节，将版本升级到最新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001104-tconn命令ip地址非法",
      children: "E001104 tconn命令IP地址非法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IP address incorrect."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IP地址格式不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用tconn命令无线调试连接时，输入IP地址不符合IPv4格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查输入IP地址是否合法，正确IP格式参照127.0.0.1:8888保证无异常非法字符，修正后重新连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001005-设备未知或断连",
      children: "E001005 设备未知或断连"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device not found or connected."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "找不到连接设备或为非连接状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备断连。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E5%A4%87%E6%97%A0%E6%B3%95%E8%AF%86%E5%88%AB",
        children: "设备无法识别"
      }), "中描述的实际场景对应的解决方式进行操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001300-模拟器不支持tmode命令",
      children: "E001300 模拟器不支持tmode命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not support tmode for Emulator."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器场景不支持hdc tmode命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio中模拟器调试不支持hdc tmode命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需调试tmode相关命令，请连接实体设备后进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e002101-服务器进程无法结束",
      children: "E002101 服务器进程无法结束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Terminal hdc process failed, please terminal the hdc process in the task manager first."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器进程无法结束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当删除.hdcserver.pid文件后执行hdc kill时，由于无法获取服务器的进程pid，导致无法结束进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在任务管理器中手动结束hdc进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e002105-命令不支持",
      children: "E002105 命令不支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsupport command."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备端版本过低，不支持执行调试命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["尝试升级设备版本，或参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdc%E5%91%BD%E4%BB%A4%E5%88%97%E8%A1%A8",
        children: "hdc命令列表"
      }), "检查命令是否准确。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e002106-设备通信异常",
      children: "E002106 设备通信异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to communicate with daemon."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器与设备端守护程序通信异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB调试连接断开。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCP无线调试方式网络不稳定。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查并确保设备已正常连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查网络状态，网络稳定后重新尝试连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e003001-命令行指定的包名非法",
      children: "E003001 （命令行）指定的包名非法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid bundle name: bundlename."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令hdc shell [-b bundlename] [command]中指定的bundlename不是已安装的可调试应用包名且已在设备启动，或应用目录不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：设备上未安装指定的应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：指定包名的应用不是可调试应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景三：指定包名的应用未启动。"
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
          children: "场景一：确认命令指定包名的应用已安装到设备上。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行hdc shell \"bm dump -a | grep bundlename\"查询对应包名的应用是否已安装到设备上，预期返回信息为 bundlename；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以应用名com.example.myapplication为例，查询命令如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell \"bm dump -a | grep com.example.myapplication\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如应用已安装到设备上，预期返回信息："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "com.example.myapplication\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景二：确认命令指定的应用是否为可调试应用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "执行hdc shell \"bm dump -n bundlename | grep appProvisionType\"命令进行查询，预期返回信息为\"appProvisionType\": \"debug\"。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "以包名com.example.myapplication为例，可执行如下命令查询："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell \"bm dump -n com.example.myapplication | grep appProvisionType\"\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如包名对应的应用是可调试应用，预期返回的信息如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"appProvisionType\": \"debug\",\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["要构建可调试应用，需要使用调试证书进行签名。可参考：", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
                children: "申请调试证书"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景三：确定命令指定的应用已启动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "启动应用后，系统会挂载相应的资源目录。可执行hdc shell \"mount |grep bundlename\"查询应用启动后的资源目录挂载情况。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "以应用名com.example.myapplication为例，可执行如下命令查询是否已挂载资源目录："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell \"mount |grep com.example.myapplication\"\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果已挂载相应的资源目录，预期将返回挂载信息（返回内容以实际挂载情况为准，此处不作展示）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果未挂载相应的资源目录，预期不会返回任何信息。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果未挂载相应的资源目录，可以通过手动点击应用或使用aa相关命令启动应用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "以应用名com.example.myapplication模块名EntryAbility为例，启动命令为："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell aa start -b com.example.myapplication -a EntryAbility\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["更多详细用法请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/system-debug-optimize/debugging-commands/aa-tool",
                children: "aa命令介绍"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e003002-命令行指定的参数不支持交互模式",
      children: "E003002 命令行指定的参数不支持交互模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsupport interactive shell command option."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令hdc shell [-b bundlename] [command]不支持“交互模式”命令行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令hdc shell [-b bundlename] [command]指定的command参数不可为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["确认command参数不为空值，详细使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%89%A7%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%91%BD%E4%BB%A4",
        children: "执行交互命令"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e003003-交互命令参数不支持",
      children: "E003003 交互命令参数不支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unsupport shell option: XXX."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令hdc shell [-b bundlename] [command]指定了不支持的命令行参数。如-f，-B等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数未区分大小写，或使用了不支持的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%89%A7%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%91%BD%E4%BB%A4",
        children: "执行交互命令"
      }), "使用当前版本支持的命令行参数，如-b参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e003004-设备端不支持当前使用的参数",
      children: "E003004 设备端不支持当前使用的参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device does not support this shell option."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备不支持执行hdc shell [-b bundlename] [command]命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备系统版本较低，不支持新增的命令行参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["升级设备操作系统版本到最新，具体版本可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdc%E7%89%88%E6%9C%AC%E9%85%8D%E5%A5%97%E8%A1%A8",
        children: "hdc版本配套表"
      }), "中版本配套说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e003005-命令行参数有误",
      children: "E003005 命令行参数有误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parameter is missing, correct your input by referring below: Usage..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc shell xxx，设备端命令不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备系统版本较低，不支持对应新增的命令行参数功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["升级设备操作系统版本到最新，具体版本可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdc%E7%89%88%E6%9C%AC%E9%85%8D%E5%A5%97%E8%A1%A8",
        children: "hdc版本配套表"
      }), "中版本配套说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e005003-文件传输缺少参数",
      children: "E005003 （文件传输）缺少参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parameter is missing, correct your input by referring below: Usage..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令hdc file send [-b bundlename][SOURCE][DEST]缺少必要的参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令hdc file recv [-b bundlename][DEST][SOURCE]缺少必要的参数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令指定-b参数时，缺少bundlename，SOURCE，DEST参数，命令详情参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93",
        children: "文件传输"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认命令参数bundlename，SOURCE，DEST参数均不为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e005004-sdk或设备系统不支持-b参数",
      children: "E005004 SDK或设备系统不支持-b参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SDK/Device ROM doesn't support -b option."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc file send/recv 命令带-b选项时，SDK中的hdc或设备系统版本不支持该选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：执行命令hdc file send [-b bundlename] [SOURCE] [DEST]时，设备系统版本不支持-b选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：执行命令hdc file recv [-b bundlename] [DEST] [SOURCE]时，SDK中的hdc不支持-b选项。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景一：升级到最新系统版本，具体版本可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hdc%E7%89%88%E6%9C%AC%E9%85%8D%E5%A5%97%E8%A1%A8",
          children: "hdc版本配套表"
        }), "中版本配套说明。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景二：升级到最新SDK版本，具体版本可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hdc%E7%89%88%E6%9C%AC%E9%85%8D%E5%A5%97%E8%A1%A8",
          children: "hdc版本配套表"
        }), "中版本配套说明。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e005005-创建目录失败",
      children: "E005005 创建目录失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error create directory: xxx, path: xxx."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建目录失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hdc file send命令发送文件，设备端对应目录为无权限目录或只读系统目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改发送文件目标目录，确保目标目录有写权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e005101-文件传输指定的包名非法",
      children: "E005101 （文件传输）指定的包名非法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#e003001-%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%8C%87%E5%AE%9A%E7%9A%84%E5%8C%85%E5%90%8D%E9%9D%9E%E6%B3%95",
        children: "E003001 （命令行）指定的包名非法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e005102-非法的远端路径",
      children: "E005102 非法的远端路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remote path: xxx is invalid, no such file/directory or it's out of the application directory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令hdc file send [-b bundlename][SOURCE][DEST]指定的DEST表示的路径不存在或已超出应用数据目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令hdc file recv [-b bundlename][SOURCE][DEST]指定的DEST表示的路径不存在或已超出应用数据目录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：远端路径不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：参数DEST包含 .. 路径跳转符号，处理跳转后，实际目录超出了应用数据根目录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参数DEST指定的应用数据目录相对路径是否真实存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e006001-安装包路径非法",
      children: "E006001 安装包路径非法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not any installation package was found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "没有找到任何安装包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令hdc install后缺少安装包参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86",
        children: "应用管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e007100-不支持的命令",
      children: "E007100 不支持的命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operate need running under debug mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令仅在调试模式下支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持的命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无需进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e005008-不支持的文件传输操作",
      children: "E005008 不支持的文件传输操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operation not allowed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令操作不被允许。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及敏感文件（如系统配置，日志文件等）不允许操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无需进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e001106--e指定的ip不正确",
      children: "E001106 -e指定的IP不正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-e content IP incorrect."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-e指定的IP不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不是合法的IP地址格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查输入是否为合法的IP格式，并确认该IP地址属于本机。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e00c001-hdc-clientserver调试拦截",
      children: "E00C001 hdc client/server调试拦截"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operation restricted by the organization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作被组织拦截。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PC/2in1形态设备的hdc client/server调试功能被组织禁用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请联系组织设备管理员查询PC/2in1设备hdc调试策略配置。"
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
658434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
7596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
27835(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
1894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
830240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
877254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
604196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
536339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
973829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
407521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
96629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
777078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAAtCAIAAADtOA5JAAAlz0lEQVR4Ae3AA6AkWZbG8f937o3IzKdyS2Oubdu2bdu2bdu2bWmMnpZKr54yMyLu+Xa3anqmhztr1a8+5SlP+Yd/+Id3e7d346qrrrrqqquu+j+OylVXXXXVVVdd9f8Flauuuuqqq6666v8LKlddddVVV1111f8XVK666qqrrrrqqv8vqFx11VVX/Xfb39/nMknczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SVy2tbXFv8Zv//Zvv/ZrvzYvmt/+7d9+7dd+ba7634HKv8nBwQH3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s81l29vbXPVfRRKX2eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5rLt7W3+07z2a7/2b//2b7/2a782V/0vQHDVVVddddX/S7/927/N/10HBwcHBwcHBwcHBwf7+/v7+/v7+/v7+/sHBwcHBwcHBwcHBwf7+/v7+/v7+/tc9tu//ds8P7/927/N/x1UAPjt3/5tHuC1X/u1ueqqq+C3f/u3X/u1X5v/SX77t38beO3Xfm2ex2//9m+/9mu/Nldd9SL47d/+7dd+7dfmX++3f/u3eX5++7d/m+fx2q/92vzv8dqv/dq//du//dqv/do8p9d+7df+7d/+7dd+7dfm/wIqALz2a7/2b//2b7/2a782APz2b//2a7/2a3PVVf/vvfZrv/Zv//Zvv/ZrvzYP8Nu//dvAa7/2a/NC/fZv/zbw2q/92vw7/PZv/zbw2q/92rxQv/3bv81VV/07/PZv/zbP6bd/+7d5gNd+7dcGgNd+7dfmst/+7d9+7dd+bZ7Hb//2b7/2a782V/0PRbXN83jt137t3/7t337t135tXgDb3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8Sl21tbXHZa7/2a//2b//2a7/2a3O/137t1/7t3/5t/iWv/dqv/du//dv8O/z2b//2a7/2awO//du//dqv/dpc9tqv/do8j9d+7dcGfvu3f5v/nWxzmSTuZ5v7SeJ+trmfJO5nm/tJ4n62uZ8k7meb+0nifra5nyTuZ5v7SeJ+trmfJO5nm/tJ4n62uZ8k7meb+0nifra5nyTuZ5v7SeJ+trmfJC7b2triX/Lar/3a3O+3f/u3X/u1X5v7/fZv/zb/aX77t3/7tV/7tXmR/fZv//Zrv/Zr8y+xzf0kcT/b3E8Sl21tbfH/BcGL5rd/+7d/+7d/m6uu+n/ptV/7tX/7t3+b/z6v/dqvzVVX/cf57d/+7dd+7dfm3+e1X/u1f/u3f5vn9Nu//duv/dqvzf9ar/3ar/3bv/3bPI/Xfu3X/u3f/m3+L6By1VVXvQhe+7Vf+7d/+7df+7Vfmwf47d/+bS577dd+be7327/927wAv/3bv81lr/3ar80L9du//dtc9tu//dvAa7/2a3PZb//2b3PZa7/2a/Oi+e3f/m3u99qv/dq8YL/927/NZa/92q/927/921z22q/92lz227/929zvtV/7tXmA3/7t3+ay137t1wZ++7d/m8te+7Vf+7d/+7e57LVf+7W56qrn9Nu//dtc9tu//dvAa7/2a3PZb//2b3PZa7/2a//2b/828Nqv/drAb//2b3PZb//2bwOv/dqvzVX/alReNK/92q/NVVf9//bar/3av/3bv/3ar/3aXPbbv/3br/3ar81lv/3bv/3ar/3awG//9m+/9mu/Nvf77d/+be7327/926/92q/NZb/927/92q/92rxgr/3arw389m//9mu/9mvzAK/92q8N/PZv/zYvmt/+7d9+7dd+be7327/926/92q/NC/Dar/3awG//9m//9m//9mu/9msDv/3bv81lv/3bv/3ar/3a3O+3f/u3X/u1X5vLfvu3f/u1X/u1uey3f/u3X/u1X/u1X/u1f/u3f/u1X/u1gdd+7df+7d/+7dd+7dfmqv8xfvu3f/u1X/u1+Y/w2q/92r/927/92q/92lz227/926/92q/Ni+y1X/u1gd/+7d9+7dd+bR7gtV/7tX/7t3/7tV/7tbnstV/7tbnstV/7tYHf/u3ffu3Xfm2u+jei8m8iifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5rLt7W2e02//9m+/9mu/Nvd77dd+bV5kv/3bv/3ar/3a3O+1X/u1+R/stV/7tbnstV/7tXmhfvu3f/u1X/u1ud9rv/Zr828iictscz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/Wxz2fb2Nv85Xvu1X/u3f/u3X/u1X/u3f/u3X/u1X5v/IK/92q/927/928Brv/Zr828iifvZ5n6SuJ9tLtve3uZ+r/3ar/3bv/3br/3ar81zeu3Xfu3f/u3ffu3Xfm3+d6Ny1VVXvQh++7d/+7Vf+7X5X+i3f/u3+Y/w27/927zIXvu1X/u3f/u3X/u1X/u3f/u3X/u1X5ur/jf47d/+bR7gt3/7t3nRvPZrv/Zv//Zvv/ZrvzZX/S9A5aqrrvqX/PZv//Zrv/Zr87/Ta7/2a/Mf4bVf+7W56n+/3/7t337t135tnp/Xfu3X5n6//du//dqv/drc77d/+7d5wX77t3/7tV/7tX/7t3/7tV/7tfk/4bVf+7V/+7d/+7Vf+7V5Tq/92q/927/926/92q/N/2IEz89v//Zvv/ZrvzYP8Nu//du//du/zVVX/f/z27/926/92q/Nv95v//Zvc7/Xfu3X/u3f/m3u99u//dv8d/jt3/5t/iP89m//Npe99mu/9m//9m9zv9/+7d/mfq/92q/927/9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/u3f5rLXfu3X5rLf/u3f5rLXfu3X5n6//du/Dbz2a7/2b//2b3PZa7/2a3O/3/7t3+YBXvu1X5sX7Ld/+7e57Ld/+7eB137t1+ay3/7t3+ay137t1+ZF89u//dvc77Vf+7X51/vt3/5t4LVf+7V/+7d/m8te+7Vfm/v99m//Nvd77dd+bf4lv/3bv80DvPZrv/Zv//ZvA6/92q8NAL/9278NvPZrvzb3++3f/m0ue+3Xfm0e4Ld/+7e57LVf+7V5oX77t3+by377t38beO3Xfm0u++3f/m0ue+3Xfm1eNL/927/N/V77tV+bf8lv//Zvc7/Xfu3XBn77t3+by177tV/7t3/7t7nstV/7tXmhfvu3f5vn8du//dtc9tqv/drc77d/+7e57LVf+7V/+7d/m8te+7Vfm8t++7d/m/u99mu/Ng/w27/921z22q/92lz227/921z227/928Brv/Zrc7/f/u3f5n6v/dqvDfz2b/82l732a7/2b//2b3PZa7/2a//2b/82l732a7828Nu//dsA8Nqv/dr8a/z2b/828Nqv/dq//du/Dbz2a782D/Dbv/3bAPDar/3a3O+3f/u3uey3f/u3gdd+7dfmAX77t3+by177tV+bq/4He+3Xfm2e02u/9mvznH77t3+bZ7v9qb/4i0/kTV/91QGecfvvP/UXf/EJNpc9Gngiz9dv//Zvv/ZrvzYAvPZrv/Zv//Zvv/ZrvzYvst/+7d/mst/+7d8GXvu1X5vLfvu3f5vLXvu1X/u3f/u3gdd+7dcGfvu3f5vLfvu3fxt47dd+bZ4PKi+C137t1wZ++7d/mwf47d/+7dd+7dcGgN/+7d9+7dd+bS577dd+beC3f/u3+Xd77dd+beC3f/u3ud9rv/ZrA7/927/927/926/92q8N/PZv/zbw2q/92sBv//Zv//Zv//Zrv/ZrA7/927/NZb/927/92q/92tzvt3/7t1/7tV/7tV/7tYHf/u3f/u3f/u3Xfu3XBn77t3+bF+q3f/u3X/u1X5v7/fZv//Zrv/Zrv/Zrv/Zv//Zv//Zv//Zrv/ZrA7/927/92q/92lz227/926/92q/N/X77t3/7tV/7tV/7tV/7t3/7t3/7t3/7tV/7tbnst3/7t1/7tV8beO3Xfm3gt3/7t3mA137t1/7t3/7t3/7t337t135tLvvt3/7t137t1wZ++7d/+7Vf+7UB4Ld/+7df+7VfmxfqtV/7tYHf/u3ffu3Xfm0e4LVf+7WB3/7t3+ZF89u//duv/dqvzf1++7d/+7Vf+7W532u/9mvzInjt137t3/7t3/7t3/7t137t1+ay3/7t337t135t4Ld/+7df+7Vfm/v99m//9mu/9mvzgv32b//2a7/2a3O/3/7t3wZe+7Vf+7d/+7e532u/9mv/9m//Nvf77d/+7dd+7dfmst/+7d9+7dd+bS777d/+7dd+7dfmst/+7d9+7dd+bV6w137t1wZ++7d/+7Vf+7V5gNd+7dcGfvu3f5sXzW//9m+/9mu/Nvf77d/+7dd+7dfmBfvt3/7t137t1+Z+v/3bv/3ar/3ar/3arw389m//9m//9m+/9mu/NvDbv/3bvFC//du//dqv/drc77d/+7e57LVf+7WB3/7t3+YBXvu1Xxv47d/+7d/+7d9+7dd+beC3f/u3uey3f/u3X/u1X5v7/fZv//Zrv/Zrc9lv//Zvv/ZrvzaX/fZv//Zrv/ZrA6/92q8N/PZv//Zrv/Zr8wC//du//dqv/drc77d/+7df+7Vf+7Vf+7WB3/7t3/7t3/7t137t1wZ++7d/G3jt137t3/7t337t135tAHjt137t3/7t337t135t/pVe+7Vf+7d/+7d/+7d/+7Vf+7WB3/7t337t135tLvvt3/7t137t1waA3/7t337t135tLnvt135t4Ld/+7df+7Vfm+f027/926/92q/NZb/927/92q/92tzvtV/7tbnqv89v//Zvv/ZrvzbP47d/+7df+7Vfm3+dBz3qTZ/61N98Ko961KO531N50Ie8Kd/4C9zvt3/7t1/7tV/7t3/7t1/7tV/7t3/7t1/7tV+bf5PXfu3XBn77t3/7tV/7tXmA137t1/7t3/7t137t1+ay137t1+ay137t1wZ++7d/+7Vf+7V5gQj+rV77tV+by377t3+b/3Kv/dqvzWWv/dqvzQO89mu/Npe99mu/Ni+C137t1+ay137t1+bf6rVf+7UB4LVf+7V/+7d/m3/Ja7/2a/Ov8dqv/dr8X/Tar/3a/Ed77dd+bV6o3/7t337t135t7vfar/3a3O+1X/u1+V/utV/7tbnstV/7tflP8Nqv/dpc9tqv/dq8UL/927/92q/92tzvtV/7tfl3eO3Xfm0ue+3Xfm0ue+3Xfu3f/u3fBoDf/u3ffu3Xfm3+rV77tV8bAF77tV/7t3/7t7nstV/7tbnst3/7t3nRvPZrvzb/GpIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bZt27YkSZIk2bb927/92/wr/fZv//Zv//Zv//Zv//Zv//Zv//Zv//Zv//Zv83zdcvN7vetnvC5P5HXf63V54hN53fd6XZ74RG5+tQc9WuJf8tqv/drAb//2b/Pv9tqv/dq//du//du//duv/dqvzb8O9U3f9E3f//3fnxfBa7/2a/Ocfvu3fxt47dd+7d/+7d/mP81rv/Zr87/Tb//2b/Of5rVf+7V/+7d/GwBe+7Vfm/9Cv/3bv83/GK/92q/927/929zvtV/7tfnf5rd/+7f53+y3f/u3+b/ot3/7t4HXfu3X/u3f/m2u+j/kt3/7t7nstV/7tbnfa7/2a/Ocfvu3f5sHeNijHgVwI/wRz8dtz3iCDQC//du//dqv/drc77Vf+7V5gN/+7d9+7dd+bf47Ube3t//iL/6Cf73f/u3ffu3Xfm3+q/z2b//2a7/2a/O/ymu/9mvzn+a3f/u3X/u1X5v/Dq/92q/N/ySv/dqvzf1++7d/+7Vf+7X5X+W1X/u1+d/stV/7tfnv8Nqv/dq//du/Dbz2a782/9F++7d/+7Vf+7W56n+/3/7t337t135tHuC1X/u1gd/+7d/mRfXU2/+AX3jCE+AJn/Lav/BmX/QDD+KFee3Xfm1egN/+7d9+7dd+bf6bETfddNPbvd3b8e/w27/92/z/9tu//dsA8Nu//duv/dqvzfPz27/92/yHeu3Xfu3f/u3f/u3f/u3f/u3f/u3f/m3+m/z2b/82D/Dbv/3bv/3bv81/od/+7d/mX/Lbv/3b3O+1X/u1f/u3f5v7/fZv/zb/k/z2b/82/+V++7d/m/8gv/3bv81lr/3ar/3bv/3b3O+3f/u3eX5++7d/m/9Qv/3bv/3bv/3b/Gv89m//NgD89m//9mu/9mvznH77t3+bF+y3f/u3eRH89m//9m//9m9z1X+V137t1+Zf6bd/+7d/+7d/+7d/+7d/+7d/+7d/+7d/+7d/m/vZT/jGb/wF/n1++7d/+7d/+7df+7Vfm+fnt3/7t3/7t3+bf8lv//Zvc7/f/u3ffu3Xfu3Xfu3X/u3f/m1egN/+7d/m+UBv8RZv8X7v937v/u7vzmW//du//dqv/drc77d/+7e57LVf+7V5Hr/9278NvPZrv/Zv//ZvA6/92q8N/PZv/zYP8Nqv/dpc9tu//ds8wGu/9mvznH77t3/7tV/7tQHgt3/7t3lOr/3arw389m//Ng/w2q/92gDw27/92zzAa7/2a/MAv/3bv839Xvu1Xxv47d/+bR7gtV/7tXkR/PZv/zb3e+3Xfm0u++3f/u3Xfu3X/u3f/m3gtV/7tXmA3/7t3+Z+r/3arw389m//Npe99mu/NvDbv/3bAPDar/3av/3bv80DvPZrvzbw27/921z22q/92sBv//ZvA8Brv/Zr//Zv//Zrv/Zrc7/f/u3ffu3Xfm1esN/+7d/mAV77tV+by377t3+bB3jt135tLvvt3/5tHuC1X/u1ud9v//Zvc7/Xfu3X5gF++7d/G3jt135tXqjf/u3f5rLXfu3XBn77t38bAF77tV8b+O3f/m3u99qv/dq8UL/927/NA7z2a7829/vt3/5tAHjt137t3/7t3wZe+7Vfm8t++7d/m8te+7VfG/jt3/5tLnvt135t4Ld/+7cB4LVf+7V5AX77t3+bB3jt135tLvvt3/5tHuC1X/u1uey3f/u3eYDXfu3X5n6//du/zf1e+7Vfm3/Jb//2b3O/137t1wZ++7d/mwd47dd+bV4Ev/3bvw0Ar/3ar/3bv/3bwGu/9mv/9m//Ng/w2q/92sBv//Zv8wCv/dqvzQP89m//Nvd77dd+bR7gt3/7t7nstV/7tXlOv/3bvw289mu/Nvf77d/+be732q/92sBv//Zv8wCv/dqvzXP67d/+7dd+7dfmOf32b//2a7/2a/Oi+e3f/u3Xfu3X/u3f/m3gtV/7tXmA3/7t3wZe+7Vf+7d/+7eB137t1+YBfvu3fxt47dd+beC3f/u3uey1X/u1gd/+7d8GgNd+7dfmst/+7d8GXvu1X5v7/fZv//bLvdzLAZK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+koCtrS0u++3f/u3Xfu3X5vn57d/+7dd+7dfmst/+7d9+7dd+bZ7Tb//2b7/2a782z+nRj370w97rMx70+5/3jAe914Oe8T2/yeu+14Oe8T2/yXu914N+/3ae+k3f9ASb+/32b//2a7/2a/MC/PZv//Zrv/Zrc9lv//ZvA6/92q/NC/Dbv/3bwGu/9mtz2W//9m8Dr/3ar/3bv/3bXPbar/3aPMBv//ZvA6/92q/N84He4i3e4v3e7/3e/d3fnct++7d/m/u99mu/Nv/5fvu3f5v7vfZrvzb/2/z2b//2a7/2a/Nf7rd/+7df+7Vfm/v99m//9mu/9mtz1VX/n/z2b//2a7/2a/Ocfvu3f/u1X/u1edH89m//9mu/9mvzX+63f/u3X+7lXg6QxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295MEbG1tcdlv//Zvv/ZrvzbPz2//9m+/9mu/Npf99m//9mu/9mtzv9/+7d9+7dd+7d/+7d9+7dd+bZ6THv1oP+EJvGh++7d/+7Vf+7V5Tr/927/92q/92r/927/92q/92vz3QG/xFm/xfu/3fu/+7u/OVf96v/3bv81lr/3ar81/ud/+7d/mfq/92q/NVVf9v/Hbv/3bwGu/9mvznH77t3/7tV/7tXnR/PZv/zaXvfZrvzZX/a/127/921z22q/92vyb/PZv//Zrv/Zr8wC//du//dqv/dr8+/z2b//2a7/2a/M8fvu3f/u1X/u1+W+D3uIt3uL93u/93v3d352rrrrqqquuuur/OCpXXXXVVVddddX/F1Suuuqqq6666qr/L6hcddVVV1111VX/X1C56qqrrrrqqqv+v6By1VVXXXXVVVf9f0F8+Zd/OVddddVVV1111f8LVK666qqrrrrqqv8v+EfLKCS/S2ndLwAAAABJRU5ErkJggg==");

},
675717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
195229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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tV+b+/32b/82L5QAwDb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M8295PE/WxzP0nczzb3k8T9bHM/SdzPNveTxP1scz9J3M/29vY2/zv99m//9mu/9mtzv9/+7d9+7dd+beC3f/u3gdd+7dfmst/+7d9+7dd+beC3f/u3X/u1X5vLfvu3f/u1X/u1uey3f/u3X/u1X5v7/fZv//Zrv/Zrc7/f/u3ffu3Xfm0e4Ld/+7eB137t1+ay3/7t337t135t4Ld/+7df+7Vfm/v99m//9mu/9msDwG//9m8Dr/3arw389m//9mu/9mtzv9/+7d9+7dd+bR7gt3/7t1/7tV+by377t3/7tV/7tbnst3/7t1/7tV+b+/32b//2a7/2awO//du//dqv/drc77d/+7df+7Vfm+dUueqq/zSv/dqvzfN47dd+bS777d/+bf59Xvu1X5t/pdd+7dfmstd+7dfmhXrt135tLvvt3/7t137t1+Y/QuWqq/7L/fZv/zbw2q/92r/927/N/2y//du//dqv/do8p9/+7d/m36TaBiRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kcT/b3E8S97PN/SRxP9vcTxL3s839JHE/29xPEvezzf0kbW1t8f/Db//2b7/2a782/5u99mu/Nv8mwVVX/cf57d/+bV5kv/3bv80L8Nu//du8AL/927/Nf5Xf/u3ffu3Xfm0u++3f/m2en9/+7d/mefz2b/82z49sA5K4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6SuJ9t7ieJ+9nmfpK4n23uJ4n72eZ+krifbe4nifvZ5n6Stra2+F/rt3/7t7nstV/7tX/7t3+bB3jt135t4Ld/+7e57LVf+7WB3/7t3wZe+7Vf+7d/+7eB137t1waA3/7t3+ay137t1/7t3/5t4LVf+7W532//9m8Dr/3arw389m//Npe99mu/NvDbv/3bXPbar/3awG//9m9zv9d+7dcGfvu3f5sHeO3Xfm3u99u//ds8wGu/9mtz2W//9m/znF77tV8bAH77t3+b+732a7829/vt3/5tLnvt137t3/7t3wZe+7VfmwfQ1tYWV1111X+JfwRLNcA5/bjQYgAAAABJRU5ErkJggg==");

},
401965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
630931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
369242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
151945(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
654609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
310794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
421187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
27204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
88267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
757745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
976112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
904534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
88355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
639341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
750339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
563847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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