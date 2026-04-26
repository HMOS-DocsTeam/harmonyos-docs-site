"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["199008"], {
465935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_debugging_web_debugging_with_devtools_web_debugging_with_devtools_md_a12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-debugging-web-debugging-with-devtools-web-debugging-with-devtools-md-a12.json
var site_docs_arkweb_web_debugging_web_debugging_with_devtools_web_debugging_with_devtools_md_a12_namespaceObject = JSON.parse('{"id":"arkweb/web-debugging/web-debugging-with-devtools/web-debugging-with-devtools","title":"使用DevTools工具调试前端页面","description":"Web组件支持使用DevTools工具调试前端页面。DevTools是Web前端开发调试工具，支持在电脑上调试移动设备前端页面。开发者通过setWebDebuggingAccess()接口开启Web组件前端页面调试能力，使用DevTools在电脑上调试移动前端网页，设备需为4.1.0及以上版本。","source":"@site/docs/arkweb/web-debugging/web-debugging-with-devtools/web-debugging-with-devtools.md","sourceDirName":"arkweb/web-debugging/web-debugging-with-devtools","slug":"/arkweb/web-debugging/web-debugging-with-devtools/","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-debugging-with-devtools/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用DevTools工具调试前端页面","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-debugging-with-devtools","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景","permalink":"/harmonyos-docs-site/arkweb/web-native-messaging/"},"next":{"title":"使用Crashpad收集Web组件崩溃信息","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-crashpad/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-debugging/web-debugging-with-devtools/web-debugging-with-devtools.md


const frontMatter = {
	title: '使用DevTools工具调试前端页面',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-debugging-with-devtools',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用DevTools工具调试前端页面';

const assets = {

};



const toc = [{
  "value": "无线调试",
  "id": "无线调试",
  "level": 2
}, {
  "value": "应用代码开启Web调试开关",
  "id": "应用代码开启web调试开关",
  "level": 3
}, {
  "value": "在Chrome浏览器上打开调试工具页面",
  "id": "在chrome浏览器上打开调试工具页面",
  "level": 3
}, {
  "value": "等待发现被调试页面",
  "id": "等待发现被调试页面",
  "level": 3
}, {
  "value": "开始网页调试",
  "id": "开始网页调试",
  "level": 3
}, {
  "value": "USB连接调试",
  "id": "usb连接调试",
  "level": 2
}, {
  "value": "应用代码开启Web调试开关",
  "id": "应用代码开启web调试开关-1",
  "level": 3
}, {
  "value": "将设备连接至电脑",
  "id": "将设备连接至电脑",
  "level": 3
}, {
  "value": "端口转发",
  "id": "端口转发",
  "level": 3
}, {
  "value": "便捷脚本",
  "id": "便捷脚本",
  "level": 3
}, {
  "value": "在Chrome浏览器上打开调试工具页面",
  "id": "在chrome浏览器上打开调试工具页面-1",
  "level": 3
}, {
  "value": "等待发现被调试页面",
  "id": "等待发现被调试页面-1",
  "level": 3
}, {
  "value": "开始网页调试",
  "id": "开始网页调试-1",
  "level": 3
}, {
  "value": "常见问题与解决方法",
  "id": "常见问题与解决方法",
  "level": 2
}, {
  "value": "可以调试系统浏览器打开的网页吗？",
  "id": "可以调试系统浏览器打开的网页吗",
  "level": 3
}, {
  "value": "hdc无法发现设备",
  "id": "hdc无法发现设备",
  "level": 3
}, {
  "value": "hdc的命令显示设备&quot;未授权&quot;或&quot;unauthorized&quot;",
  "id": "hdc的命令显示设备未授权或unauthorized",
  "level": 3
}, {
  "value": "找不到DevTools的domain socket",
  "id": "找不到devtools的domain-socket",
  "level": 3
}, {
  "value": "删除端口转发任务失败",
  "id": "删除端口转发任务失败",
  "level": 3
}, {
  "value": "端口转发不成功",
  "id": "端口转发不成功",
  "level": 3
}, {
  "value": "端口转发成功后，电脑端Chrome无法发现被调试网页",
  "id": "端口转发成功后电脑端chrome无法发现被调试网页",
  "level": 3
}, {
  "value": "开启了无线调试模式后，电脑端Chrome无法发现被调试网页",
  "id": "开启了无线调试模式后电脑端chrome无法发现被调试网页",
  "level": 3
}, {
  "value": "Web组件无法使用DevTools工具进行调试",
  "id": "web组件无法使用devtools工具进行调试",
  "level": 3
}, {
  "value": "使用DevTools工具进行调试出现404报错",
  "id": "使用devtools工具进行调试出现404报错",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用devtools工具调试前端页面",
        children: "使用DevTools工具调试前端页面"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件支持使用DevTools工具调试前端页面。DevTools是Web前端开发调试工具，支持在电脑上调试移动设备前端页面。开发者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setwebdebuggingaccess",
        children: "setWebDebuggingAccess()"
      }), "接口开启Web组件前端页面调试能力，使用DevTools在电脑上调试移动前端网页，设备需为4.1.0及以上版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无线调试",
      children: "无线调试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，可使用无线调试接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setwebdebuggingaccess20",
        children: "setWebDebuggingAccess20+"
      }), "，来简化调试流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用代码开启web调试开关",
      children: "应用代码开启Web调试开关"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试网页前，需要应用侧代码调用setWebDebuggingAccess()接口开启Web调试开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果没有开启Web调试开关，则DevTools无法发现被调试的网页。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用代码中开启Web调试开关，应用需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setwebdebuggingaccess20",
            children: "setWebDebuggingAccess20+"
          }), "接口，设置TCP Socket端口号并启用Web调试功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nconst DEBUGGING_PORT: number = 8888;\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear(): void {\n    try {\n      // 配置Web开启无线调试模式，指定TCP Socket的端口。\n      webview.WebviewController.setWebDebuggingAccess(true, DEBUGGING_PORT);\n    } catch (error) {\n      console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(119162)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码中使用的8888端口仅作为示例展示，开发者使用过程中，应保证端口号可以被应用使用。如果因为端口被占用或者应用无权限使用等因素导致端口无法被应用使用，会导致接口抛出异常或者ArkWeb无法开启调试模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启调试功能需要在DevEco Studio应用工程hap模块的module.json5文件中增加如下权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
            children: "在配置文件中声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " \"requestPermissions\":[\n   {\n     \"name\" : \"ohos.permission.INTERNET\"\n   }\n ]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在chrome浏览器上打开调试工具页面",
      children: "在Chrome浏览器上打开调试工具页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在电脑端Chrome浏览器地址栏中输入调试工具地址 chrome://inspect/#devices 并打开该页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改Chrome调试工具的配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确保已勾选 \"Discover network targets\"，以便从指定的IP地址和端口号发现被调试网页。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 点击 \"Configure\" 按钮。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(2) 在 \"Target discovery settings\" 中添加被调试设备的IP地址和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setwebdebuggingaccess20",
            children: "setWebDebuggingAccess20+"
          }), "接口中指定的port端口，比如：192.168.0.3:8888。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507871)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试工具和被调试设备要在同一局域网下，并且能够相互访问。如果被调试设备有多个IP地址，要使用与调试工具同一个网段的IP地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "等待发现被调试页面",
      children: "等待发现被调试页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果前面的步骤执行成功，Chrome的调试页面将显示待调试的网页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272966)/* ["default"] */.A) + "",
        width: "848",
        height: "523"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开始网页调试",
      children: "开始网页调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710931)/* ["default"] */.A) + "",
        width: "788",
        height: "494"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usb连接调试",
      children: "USB连接调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用代码开启web调试开关-1",
      children: "应用代码开启Web调试开关"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调试网页前，需要应用侧代码调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setwebdebuggingaccess",
        children: "setWebDebuggingAccess()"
      }), "接口开启Web调试开关。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果没有开启Web调试开关，则DevTools无法发现被调试的网页。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用代码中开启Web调试开关，具体如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear() {\n    // 配置Web开启调试模式\n    webview.WebviewController.setWebDebuggingAccess(true);\n  }\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启调试功能需要在DevEco Studio应用工程hap模块的module.json5文件中增加如下权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
            children: "在配置文件中声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\":[\n  {\n    \"name\" : \"ohos.permission.INTERNET\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将设备连接至电脑",
      children: "将设备连接至电脑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请将设备连接至电脑，随后开启开发者模式，为后续的端口转发操作做好准备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请开启设备上的开发者模式，并启用USB调试功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 终端系统查看“设置 > 系统”中是否有“开发者选项”，如果不存在，可在“设置 > 关于本机”连续七次单击“版本号”，直到提示“开启开发者模式”，点击“确认开启”后输入PIN码（如果已设置），设备将自动重启。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) USB数据线连接终端和电脑，在“设置 > 系统 > 开发者选项”中，打开“USB调试”开关，弹出的“允许USB调试”的弹框，点击“允许”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用hdc命令连接上设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开命令行执行如下命令，查看hdc能否发现设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc list targets\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果命令返回设备的ID，表示hdc已连接上设备。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(587447)/* ["default"] */.A) + "",
                width: "223",
                height: "91"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果命令返回 [Empty]，则说明hdc还没有发现设备。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(295431)/* ["default"] */.A) + "",
                width: "166",
                height: "79"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入hdc shell。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接设备后，执行以下命令进入hdc shell。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "端口转发",
      children: "端口转发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用代码调用setWebDebuggingAccess接口开启Web调试开关后，ArkWeb内核将启动一个domain socket的监听，以此实现DevTools对网页的调试功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chrome浏览器无法直接访问到设备上的domain socket， 因此需要将设备上的domain socket转发到电脑上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["推荐使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-run-debug-configurations#section48387420516",
            children: "自动映射WebView调试链接"
          })]
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若当前DevEco版本低，可参考以下方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "先在hdc shell里执行如下命令，查询ArkWeb在设备里创建的domain socket。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cat /proc/net/unix | grep devtools\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果前几步操作无误，该命令的执行结果将显示用于查询的domain socket端口。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(609803)/* ["default"] */.A) + "",
                width: "506",
                height: "89"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果没有查询到结果， 请再次确认。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "(1) 应用开启了Web调试开关。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "(2) 应用使用Web组件加载了网页。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将查询到的domain socket转发至电脑的TCP 9222端口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行exit退出hdc shell。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "exit\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在命令行里执行如下命令转发端口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc fport tcp:9222 localabstract:webview_devtools_remote_38532\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(292042)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"webview_devtools_remote_\" 后面的数字，代表ArkWeb所在应用的进程号， 该数字不是固定的。请将”webview_devtools_remote_“后面的数字改为自己查询到的值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果应用的进程号发生变化，例如，应用重新启动，则需要重新配置端口转发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令执行成功示意图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(821211)/* ["default"] */.A) + "",
            width: "545",
            height: "159"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在命令行里执行如下命令，检查端口是否转发成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc fport ls\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果有返回端口转发的任务，则说明端口转发成功。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(635335)/* ["default"] */.A) + "",
                width: "695",
                height: "82"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果返回 [Empty]， 则说明端口转发失败。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(204229)/* ["default"] */.A) + "",
                width: "185",
                height: "87"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "便捷脚本",
      children: "便捷脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows平台"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请复制以下信息创建bat文件，开启调试应用后执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@echo off\nsetlocal enabledelayedexpansion\n\n:: Initialize port number and PID list\nset PORT=9222\nset PID_LIST=\n\n:: Get the list of all forwarded ports and PIDs\nfor /f \"tokens=2,5 delims=:_\" %%a in ('hdc fport ls') do (\n    if %%a gtr !PORT! (\n        set PORT=%%a\n    )\n    for /f \"tokens=1 delims= \" %%c in (\"%%b\") do (\n        set PID_LIST=!PID_LIST! %%c\n    )\n)\n\n:: Increment port number for next application\nset temp_PORT=!PORT!\nset /a temp_PORT+=1\nset PORT=!temp_PORT!\n\n:: Get the domain socket name of devtools\nfor /f \"tokens=*\" %%a in ('hdc shell \"cat /proc/net/unix | grep devtools\"') do (\n    set SOCKET_NAME=%%a\n\n    :: Extract process ID\n    for /f \"delims=_ tokens=4\" %%b in (\"!SOCKET_NAME!\") do set PID=%%b\n\n    :: Check if PID already has a mapping\n    echo !PID_LIST! | findstr /C:\" !PID! \" >nul\n    if errorlevel 1 (\n        :: Add mapping\n        hdc fport tcp:!PORT! localabstract:webview_devtools_remote_!PID!\n        if errorlevel 1 (\n            echo Error: Failed to add mapping.\n            pause\n            exit /b\n        )\n\n        :: Add PID to list and increment port number for next application\n        set PID_LIST=!PID_LIST! !PID!\n        set temp_PORT=!PORT!\n        set /a temp_PORT+=1\n        set PORT=!temp_PORT!\n    )\n)\n\n:: If no process ID was found, prompt the user to open debugging in their application code and provide the documentation link\nif \"!SOCKET_NAME!\"==\"\" (\n    echo No process ID was found. Please open debugging in your application code using the corresponding interface. You can find the relevant documentation at this link: [https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/web/web-debugging-with-devtools.md]\n    pause\n    exit /b\n)\n\n:: Check mapping\nhdc fport ls\n\necho.\necho Script executed successfully. Press any key to exit...\npause >nul\n\n:: Try to open the page in Edge\nstart msedge chrome://inspect/#devices\n\n:: If Edge is not available, then open the page in Chrome\nif errorlevel 1 (\n    start chrome chrome://inspect/#devices\n)\n\nendlocal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux或Mac平台"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请复制以下信息创建sh文件，注意chmod以及格式转换，开启调试应用后执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本脚本会先删除所有的端口转发，如果有其他的工具（如：DevEco Studio）也在使用端口转发功能，会受到影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#!/bin/bash\n\n# Get current fport rule list\nCURRENT_FPORT_LIST=$(hdc fport ls)\n\n# Delete the existing fport rule one by one\nwhile IFS= read -r line; do\n    # Extract the taskline\n    IFS=' ' read -ra parts <<< \"$line\"\n    taskline=\"${parts[1]} ${parts[2]}\"\n\n    # Delete the corresponding fport rule\n    echo \"Removing forward rule for $taskline\"\n    hdc fport rm $taskline\n    result=$?\n\n    if [ $result -eq 0 ]; then\n        echo \"Remove forward rule success, taskline:$taskline\"\n    else\n        echo \"Failed to remove forward rule, taskline:$taskline\"\n    fi\n\ndone <<< \"$CURRENT_FPORT_LIST\"\n\n# Initial port number\nINITIAL_PORT=9222\n\n# Get the current port number, use initial port number if not set previously\nCURRENT_PORT=${PORT:-$INITIAL_PORT}\n\n# Get the list of all PIDs that match the condition\nPID_LIST=$(hdc shell cat /proc/net/unix | grep webview_devtools_remote_ | awk -F '_' '{print $NF}')\n\nif [ -z \"$PID_LIST\" ]; then\n    echo \"Failed to retrieve PID from the device\"\n    exit 1\nfi\n\n# Increment the port number\nPORT=$CURRENT_PORT\n\n# Forward ports for each application one by one\nfor PID in $PID_LIST; do\n    # Increment the port number\n    PORT=$((PORT + 1))\n\n    # Execute the hdc fport command\n    hdc fport tcp:$PORT localabstract:webview_devtools_remote_$PID\n\n    # Check if the command executed successfully\n    if [ $? -ne 0 ]; then\n        echo \"Failed to execute hdc fport command\"\n        exit 1\n    fi\ndone\n\n# List all forwarded ports\nhdc fport ls\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在chrome浏览器上打开调试工具页面-1",
      children: "在Chrome浏览器上打开调试工具页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在电脑端Chrome浏览器地址栏中输入调试工具地址 chrome://inspect/#devices 并打开该页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改Chrome调试工具的配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要从本地的TCP 9222端口发现被调试网页，所以请确保已勾选 \"Discover network targets\"。然后再进行网络配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 点击 \"Configure\" 按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 在 \"Target discovery settings\" 中添加要监听的本地端口localhost:9222。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(639978)/* ["default"] */.A) + "",
            width: "845",
            height: "883"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了同时调试多个应用，请在Chrome浏览器的调试工具网页内，于“Devices”选项中的“configure”部分添加多个端口号。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(644296)/* ["default"] */.A) + "",
            width: "568",
            height: "636"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "等待发现被调试页面-1",
      children: "等待发现被调试页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果前面的步骤执行成功，Chrome的调试页面将显示待调试的网页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(742902)/* ["default"] */.A) + "",
        width: "848",
        height: "523"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开始网页调试-1",
      children: "开始网页调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614261)/* ["default"] */.A) + "",
        width: "788",
        height: "494"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题与解决方法",
      children: "常见问题与解决方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可以调试系统浏览器打开的网页吗",
      children: "可以调试系统浏览器打开的网页吗？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "能否调试系统浏览器打开的网页，取决于系统浏览器是否开启Web调试开关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前系统浏览器已启用Web调试开关，可继续执行", (0,jsx_runtime.jsx)(_components.a, {
          href: "#usb%E8%BF%9E%E6%8E%A5%E8%B0%83%E8%AF%95",
          children: "USB连接调试"
        }), "中的后续步骤。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdc无法发现设备",
      children: "hdc无法发现设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在命令行里执行如下命令后，没有列出设备ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc list targets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保设备上的USB调试开关已开启。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保设备与电脑相连。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdc的命令显示设备未授权或unauthorized",
      children: "hdc的命令显示设备\"未授权\"或\"unauthorized\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hdc命令时，提示设备\"未授权\"或\"unauthorized\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备没有授权该台电脑进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启USB调试开关的设备连接没有授权的电脑后，会弹框提示\"是否允许USB调试？\"，请选择允许。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "找不到devtools的domain-socket",
      children: "找不到DevTools的domain socket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在hdc shell里执行如下命令后，没有结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cat /proc/net/unix | grep devtools\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行脚本出现'Failed to retrieve PID from the device'报错。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请确保应用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E4%BB%A3%E7%A0%81%E5%BC%80%E5%90%AFweb%E8%B0%83%E8%AF%95%E5%BC%80%E5%85%B3",
          children: "开启了Web调试开关"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保应用使用Web组件加载了网页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除端口转发任务失败",
      children: "删除端口转发任务失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行脚本出现'Failed to remove forward rule, taskline:'报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hdc kill终止hdc服务，再执行hdc start重启服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hdc list targets确认设备在线状态，若返回空则重新连接设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "端口转发不成功",
      children: "端口转发不成功"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在命令行里执行如下命令后，没有列出之前设置过转发任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc fport ls\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行脚本出现'Failed to execute hdc fport command'报错。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请确保设备里的domain socket存在。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请确保电脑端的tcp:9222没有被占用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果tcp:9222被占用，可以将domain socket转发到其他未被占用的TCP端口， 比如9223等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果转发到了新的TCP端口， 需要同步修改电脑端Chrome浏览器\"Target discovery settings\"中的端口号。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "端口转发成功后电脑端chrome无法发现被调试网页",
      children: "端口转发成功后，电脑端Chrome无法发现被调试网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电脑端Chrome浏览器无法发现被调试网页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端口转发失效可能是以下原因："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备与电脑断连，会导致hdc里的所有转发任务被清空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hdc服务重启，也会导致hdc里的所有转发任务被清空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备里应用的进程号发生了变更（应用重新启动等），会导致hdc里旧的转发任务失效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多个转发任务转发到了同一个端口等异常配置，会导致转发异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请确保电脑端的本地tcp:9222（其他TCP端口同理）没有被占用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请确保设备端的domain socket还存在。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请确保domain socket名称里的进程号与被调试的应用的进程号相同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请删除hdc里其他不必要的转发任务。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["转发成功后，请用电脑端的Chrome浏览器打开网址 <", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://localhost:9222/json&gt;"
          }), " ，URL里的9222需要改为自己实际配置的TCP端口。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果网页有内容， 说明端口转发成功，请在Chrome的调试页面", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E7%AD%89%E5%BE%85%E5%8F%91%E7%8E%B0%E8%A2%AB%E8%B0%83%E8%AF%95%E9%A1%B5%E9%9D%A2",
                children: "等待被调试页面的出现"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(390947)/* ["default"] */.A) + "",
                width: "850",
                height: "345"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果展示的是错误网页， 说明端口转发失败， 请参阅", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%B8%8D%E6%88%90%E5%8A%9F",
                children: "端口转发不成功"
              }), "中的解决方法。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(133698)/* ["default"] */.A) + "",
                width: "472",
                height: "658"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["电脑端Chrome浏览器打开 <", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://localhost:9222/json&gt;"
          }), " 页面有内容，但是Chrome的调试工具界面还是无法发现调试目标。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "请确保Chrome调试工具界面的 \"Configure\" 中配置的端口号，与端口转发指定的TCP端口号一致。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在本文档中，默认使用的TCP端口号为9222。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果开发者使用了其他的TCP端口号（比如9223），请同时修改", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91",
                children: "端口转发"
              }), "中的TCP端口号和", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E5%9C%A8chrome%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8A%E6%89%93%E5%BC%80%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7%E9%A1%B5%E9%9D%A2",
                children: "Chrome调试工具界面\"Configure\"配置"
              }), "中的端口号。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启了无线调试模式后电脑端chrome无法发现被调试网页",
      children: "开启了无线调试模式后，电脑端Chrome无法发现被调试网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb开启了无线调试模式后，电脑端Chrome浏览器无法发现被调试网页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无线调试模式没有成功开启。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调试工具和被调试设备之间网络不通。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保使用的端口可以被应用使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保调试工具和被调试设备在同一个局域网内，且它们之间网络通畅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web组件无法使用devtools工具进行调试",
      children: "Web组件无法使用DevTools工具进行调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电脑端Chrome浏览器无法发现被调试网页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当同时使用HDC和ADB时，ADB会干扰DevTools与设备之间的WebSocket连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果同时使用HDC和ADB，先关闭ADB进程，确保DevTools与设备建立WebSocket连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用devtools工具进行调试出现404报错",
      children: "使用DevTools工具进行调试出现404报错"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在电脑端Chrome浏览器中调试网页时，出现报错：“HTTP/1.1 404 Not Found”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chrome浏览器版本较低，导致无法使用DevTools调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方案一，将电脑端Chrome升级到最新版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方案二，如果不希望升级浏览器，可以手动拼接调试URL。完整的URL链接为：“devtools://devtools/bundled/inspector.html?ws=localhost:9222/devtools/page/xxx”。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该链接由两部分组成：“devtools://devtools/bundled/inspector.html”前半段固定不变。“?ws=localhost:9222/devtools/page/xxx”后半段需要根据实际配置修改。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["端口转发成功后，使用Chrome浏览器打开 <", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://localhost:9222/json&gt;"
            }), " 页面。请注意，URL中的9222应替换为实际配置的TCP端口。然后取“devtoolsFrontendUrl”后的value值“?ws”及其后部分。"]
          }), "\n"]
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
644296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798604-16343c4ab09ddcace142ad67f88f2ec3.png");

},
710931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798600-7987d62befe9ed6460293bdcec75829f.png");

},
295431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
742902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478249-b3f912c329a854471034b153e5683760.jpg");

},
821211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798602-59d9ec56392e0149f80a170f0392d504.jpg");

},
614261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798600-7987d62befe9ed6460293bdcec75829f.png");

},
639978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478253-9494b7de506c6be8f74ab7d9cb75a3a7.jpg");

},
507871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
272966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478249-b3f912c329a854471034b153e5683760.jpg");

},
609803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478251-9cc7376543f8295dd524e71be0cbedbc.jpg");

},
292042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
635335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438297-7a6168558179dc5a29c2653563681a78.png");

},
390947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438299-08a0f6f7a0e712f1cec548bfab98bda7.jpg");

},
133698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958254-4629707ea4000bace12ecc166e5013f4.jpg");

},
587447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
204229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABXALkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8L6K+zPi1qVn8ZvjHceAdT8M+A9N0WT4T2vjKCfQfCOl6JfWmqQ+CY9caZZ7O3id0muUlSSGUvD5dy+xEkSCSH5j/AOEM8J/8KC/4SL/hNP8Aiuv+Eg/s7/hEv7Im/wCQb9m8z+0ftufK/wBd+58jG/8AjzigDj6K9g+MX/FzP2aPhv40X99qPh37T4F1xh+/mb7O32vTbq5l+8nm2tzJZQRyA/utBYI7Khjhp6Z4e0/4/fDPULmzsbPQ/F3gHRxd30sMK2uma7pkJjhEspAEVtfxl4owzbUvt6LkXxA1AA8ror6c/aS/ZC0vU/F51DwZf+A/DtxqXgfSPGVt4EtNQ1C6vhbt4etdT1GaOSUTxQohF9MIbu8S4McIKI4kt/NP2e/2S/D9g2vR+Otc8B3uuXvw31nxHY+FJn1oa1YONBn1bTr2KW3gWwLmJLeYxy3Lp5Mzo8YmARAD5jor0j/hm25svAH9q6r4q8H6Brs+n/2xY+F9TuZ7fVtQsTH5yXCt5JtYvMhDSRRXFxFPOgjaKKQXFt53m9ABRX0gfgh8Ofh5+wvZ+Nr/AF7wf4u8SeMNQ1DT4baG41u01LSJba102WOG0Js1s2mil1AteC58yKWBI0tJklLyDm/i1+w5rPwtiuEtvGHgPxdqUej2viaLS9BvLma+udFnso7waisUtvEVRIpQ0lvJsu440e4a3FqpuKAPE6K9g/4Y41L/AIRrd/wlvg//AITD/hH/APhKf+EOzf8A9rf2b9g/tPz/ADvsv2D/AJB3+l7Pte/Z8m3z/wBzWx4r/YYj8J+E9P1yT4wfB+fTvEHh+98Q6Ay32pQya/HZveRzwRRTWUckM3mWbxx/algjuJJESB5WEixgHg9Fe2eN/wBmPwr4Y/Y28LfEa1+JHhvUPEGt6xqFjNosUOph3EFvpMn2aPfYpELmA30rTs8/kshiELysHFeJ0AFFe2fF2XQ9c/Yj+FOrad4P8N+G9UXxR4i0e/vNNW4a41oW1h4fdJriSeaVt+64lbZGY4UMjlIkLvup/wDDI8eneGvO1r4mfDfw34kbw/8A8JJH4Z1OXUo9QmtnsP7QtkWdLNrHzrm1aJ4ozdBi08cTbJSYwAeP0UUUAFFFFABRRRQAUUUUAfWnivx7qHxf8K658SPhT8C/ipayaZ4Xj8Gal4puNRbxFo+jaZa6JDpt0f3Gm28cVy+nIFlkmkdES5mdYo3MMsPz3/wmfhP/AIUF/wAI7/whf/Fdf8JB/aP/AAlv9rzf8g37N5f9nfYseV/rv33n53/wYxXYeNf+TBPhn/2UDxb/AOm7wzX0h+2Hc6bpf7MmoeII7f4P30t5p/gayuNA0nwFYaVd6PLq/ha4v7i7mu4NPt5Vma8t0uYRa3jxBfMjnjMbeQQD5X+A/j7SdK8J/ELwp4iuvsej+L/D8jWtxJE9zHYarZOt5ZTLCoOZpvKm09ZcqYY9VncsU8xHx/F/xX/tXwBpfhPRdP8A7C8O2flXl9AJ/Om1rUhGVe8uZNq79u+VIIgoS3idgoaWW5nuPbLr/gmFqskSx6X8VPhXrmqXVxodjYabaDW47jUrvW7J73SLaNptNjhV7qGNiGlkSOI4EzxGuP8Ai1+w5rPwtiuEtvGHgPxdqUej2viaLS9BvLma+udFnso7waisUtvEVRIpQ0lvJsu440e4a3FqpuKAOk/4bJ8A/wDDRv8Awmn/AArvxh/Y/wDwr/8A4QX+yv8AhM7b7T/yBP7C+1faf7M2/wDHjz5fk/6/95v2fuKPAP7avgnRPEVp4i8Q/DPWNe8UzeD38C6ldW/iwWNoNP8A7DbREmsoPsbtBeC1WLdJPJdQsxuCIEMkRg5vxv8Asx+FfDH7G3hb4jWvxI8N6h4g1vWNQsZtFih1MO4gt9Jk+zR77FIhcwG+ladnn8lkMQheVg4q5/wwnN/wn/8AZP8Aws74b/2J/wAIf/wm3/CVeXrP9hfYvM8ry/O/s/zPO8z9zt8vb9o/0Xd9r/0egC58S7HWYfgfo/jL4kfBPx4NUvtHs9A0Dxhevc6X4d1G1SxEOnyPB9mH2i5is4l8l4LuKKRbWB5IZyLg3Pz3XsHgr/kwT4mf9lA8Jf8Apu8TV4/QB7B4w+OXgHXv2VfD/gCx8FeMLPXfD+oXWsxazP4stri0lvbyHTobstaLpyP5JTTk8qMXG6NpGLSSgAV6R+1L+0R4F8LeItPn+HraP4k8Vt8P9J8HXPi3TrnUY7FYE0OHSdQU2F9awv8AbJEjnhWdWMAtJ4yLdLsG4T5XooA94/4a78P/AGT+3/8AhDdY/wCFl/8ACH/8IT/af/CQR/2F9i/sb+wvM/s/7J5/nf2f/F9t2/aP3u3y/wDR6x/2ifjl4B+Kvw58D6L4X8FeMPDd54F09tGtrrVfFltq0dxZPe3184eKPTrY+d598wEgcKI4wpjLEvXj9FAHpHh3446TB8Aj4J1zwr/bkuk6hqOq+H7sak9rDY3OoW1pbXMlzEql7nYljbSQBJYVSVWMouY28keb0UUAeweMPjl4B179lXw/4AsfBXjCz13w/qF1rMWsz+LLa4tJb28h06G7LWi6cj+SU05PKjFxujaRi0koAFdh/wAN0aTo3wC/4QnRdD+JEFm/h/8AseTQ9T+IL6l4MNzJbeVc366O9opWZp2lvogLnbBdmORdyxiM/N9FABRRRQAUUUUAFFFFABRRRQB7BpXj3wD4l/ZD03wfr+reMNJ8U+F/EGua7pyafoFtf6fqX26y0uGKKad72GS32yac25lhmwsoIBK7T0nxa/an+GPjjVbjXNJ+FviS38TL4XtfCtm2veLbTWNKt4YNIj0iO5a1XTIHa5S3jEsbrOgjuVSUKVTyj890UAfWll/wUZ8IeHvHOm6xpPw18SQx6NrHgLW7OC78YwzkTeFreWyjWRl05NyXNnIFIVVMcymQF0PkA/bG/aP+G3h/4grefCeGz1fVpvA+m+EE8Sw6nfTQ2tiuixaVeRS215Y2pkv2ijmgF0ipbG1mRltYrvM0fyXRQB6R4d+OOkwfAI+Cdc8K/wBuS6TqGo6r4fuxqT2sNjc6hbWltcyXMSqXudiWNtJAElhVJVYyi5jbyR2Hjz492Xhr9inwx8L9J1bR/EGsahqE2raxrNpa3SXOm6W628tv4d8+dImMMd8Ly8mt0SS1M7W80crv5hHg9FAHsGq+PfAPhr9kPUvB+gat4w1bxT4o8QaHruopqGgW1hp+m/YbLVIZYoZ0vZpLjdJqK7WaGHKxEkAttHj9FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFfZnxa1Kz+M3xjuPAOp+GfAem6LJ8J7XxlBPoPhHS9EvrTVIfBMeuNMs9nbxO6TXKSpJDKXh8u5fYiSJBJD8x/wDCGeE/+FBf8JF/wmn/ABXX/CQf2d/wiX9kTf8AIN+zeZ/aP23Plf679z5GN/8AHnFAHH0V7B8Yv+Lmfs0fDfxov77UfDv2nwLrjD9/M32dvtem3VzL95PNtbmSygjkB/daCwR2VDHDT0zw9p/x++GeoXNnY2eh+LvAOji7vpYYVtdM13TITHCJZSAIra/jLxRhm2pfb0XIviBqAB5XRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB9CfFr9sLwhr2q3Gu+CPAniTwz4sufC9r4M/tDWPFUOsW9tpkWkR6RKYoI7C2xczWcRiaSR5EUXE7JEkhhkg8r/4TPwn/wAKC/4R3/hC/wDiuv8AhIP7R/4S3+15v+Qb9m8v+zvsWPK/1377z87/AODGK4+igD0j4D+PtJ0rwn8QvCniK6+x6P4v8PyNa3EkT3Mdhqtk63llMsKg5mm8qbT1lyphj1WdyxTzEfH8X/Ff+1fAGl+E9F0/+wvDtn5V5fQCfzpta1IRlXvLmTau/bvlSCIKEt4nYKGlluZ7jj6KAP3O/wCNKn+f+E7r8MaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==");

},
119162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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