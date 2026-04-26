"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["219498"], {
474480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_command_line_ide_emulator_command_line_md_faa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-command-line-ide-emulator-command-line-md-faa.json
var site_docs_ide_run_emulator_ide_emulator_command_line_ide_emulator_command_line_md_faa_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-command-line/ide-emulator-command-line","title":"通过命令行使用模拟器","description":"除了在DevEco Studio的设备管理中使用模拟器外，开发者还可以通过Emulator命令行使用模拟器，支持Windows和macOS平台。","source":"@site/docs/ide-run-emulator/ide-emulator-command-line/ide-emulator-command-line.md","sourceDirName":"ide-run-emulator/ide-emulator-command-line","slug":"/ide-run-emulator/ide-emulator-command-line/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-command-line/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"通过命令行使用模拟器","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-command-line","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"自定义屏幕配置","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-modify/ide-emulator-customize-screen-configuration/"},"next":{"title":"离线部署模拟器","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-no-network/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-command-line/ide-emulator-command-line.md


const frontMatter = {
	title: '通过命令行使用模拟器',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-command-line',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '通过命令行使用模拟器';

const assets = {

};



const toc = [{
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "前置条件",
  "id": "前置条件",
  "level": 2
}, {
  "value": "模拟器命令",
  "id": "模拟器命令",
  "level": 2
}, {
  "value": "获取帮助",
  "id": "获取帮助",
  "level": 3
}, {
  "value": "查询镜像",
  "id": "查询镜像",
  "level": 3
}, {
  "value": "下载镜像",
  "id": "下载镜像",
  "level": 3
}, {
  "value": "删除镜像",
  "id": "删除镜像",
  "level": 3
}, {
  "value": "创建模拟器",
  "id": "创建模拟器",
  "level": 3
}, {
  "value": "删除模拟器",
  "id": "删除模拟器",
  "level": 3
}, {
  "value": "查看模拟器实例",
  "id": "查看模拟器实例",
  "level": 3
}, {
  "value": "启动模拟器",
  "id": "启动模拟器",
  "level": 3
}, {
  "value": "关闭模拟器",
  "id": "关闭模拟器",
  "level": 3
}, {
  "value": "模拟器配置",
  "id": "模拟器配置",
  "level": 3
}, {
  "value": "清除模拟器配置",
  "id": "清除模拟器配置",
  "level": 3
}, {
  "value": "查看/更新产品列表",
  "id": "查看更新产品列表",
  "level": 3
}, {
  "value": "收集模拟器日志",
  "id": "收集模拟器日志",
  "level": 3
}, {
  "value": "查看模拟器版本",
  "id": "查看模拟器版本",
  "level": 3
}, {
  "value": "查看协议",
  "id": "查看协议",
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
        id: "通过命令行使用模拟器",
        children: "通过命令行使用模拟器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了在DevEco Studio的设备管理中使用模拟器外，开发者还可以通过Emulator命令行使用模拟器，支持Windows和macOS平台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Emulator命令行在DevEco Studio安装目录的tools/emulator目录下，有两种执行命令的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一：在命令行终端中进入emulator目录下，执行命令。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式二：配置环境变量后，在任意目录下执行命令。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Windows环境变量设置方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在系统或者用户的PATH变量中，添加Emulator的路径{DevEco Studio安装目录}/tools/emulator，配置完成后重新打开命令行窗口使环境变量生效。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "macOS环境变量设置方法："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "打开命令行终端，执行以下命令。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "export PATH={DevEco Studio安装目录}/tools/emulator:$PATH\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前置条件",
      children: "前置条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio 6.1.0 Beta1之前的版本，在使用命令行之前，需要先通过DevEco Studio创建模拟器，记录模拟器实例路径和模拟器镜像路径，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-management/ide-emulator-create",
        children: "创建模拟器"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器命令",
      children: "模拟器命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(670367)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果模拟器名称或路径中包含特殊字符、空格等，需要对名称或路径添加引号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "下列命令以Windows环境为例，如果在macOS上运行，并且未配置环境变量，需要在Emulator前添加./，例如./Emulator -help。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 6.1.0 Beta1版本开始，命令行参数不再检测大小写，例如-list参数，可写成-list或-LIST。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取帮助",
      children: "获取帮助"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 查看所有可执行的命令\nEmulator -help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询镜像",
      children: "查询镜像"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持查询模拟器镜像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -imageList -deviceType {模拟器类型} -downloaded {true/false} -http_proxy {网络代理配置}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-imageList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，查询所有release版本的镜像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询指定产品类型的镜像，支持phone, foldable, wideFold, tripleFold, tablet, 2in1, 2in1 foldable, tv, wearable，不区分大小写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-downloaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询已下载/未下载的镜像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-http_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，如果网络受限，查询镜像时可以尝试配置代理。  代理格式：{代理协议}://{用户名}:{密码}@{代理主机名}:{端口号}，代理协议支持http或https。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回信息："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SoftWareVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "镜像详细版本号，可用于下载镜像时指定-osVersion参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器产品类型，可用于下载镜像时指定-deviceType参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "downloaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地是否已下载过镜像，true/false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "osVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "镜像版本号，可用于下载镜像时指定-osVersion参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "releaseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "镜像发布类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "upgradable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对比本地镜像，是否有可更新的镜像版本，true/false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ Emulator -imageList -deviceType phone -downloaded false -http_proxy \"http://user:password@proxy.proxyserver.com:port\"\n[\n    {\n        \"SoftWareVersion\": \"6.0.0.112\",\n        \"deviceType\": \"phone\",\n        \"downloaded\": \"false\",\n        \"osVersion\": \"HarmonyOS 6.0.1(21)\",\n        \"releaseType\": \"Release\",\n        \"upgradable\": \"false\"\n    },\n    ...\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "下载镜像",
      children: "下载镜像"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持下载模拟器镜像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -install -deviceType {模拟器类型} -osVersion {模拟器镜像版本} -imageRoot {镜像路径} -http_proxy {网络代理配置} -force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，镜像下载命令入口，首次使用时需要同意HarmonyOS SDK许可协议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-deviceType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["必选参数，指定下载的产品类型，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section28311555513",
              children: "查询镜像"
            }), "获取deviceType，不区分大小写。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-osVersion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["必选参数，指定下载的版本，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section28311555513",
              children: "查询镜像"
            }), "返回的SoftWareVersion或osVersion获取版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-imageRoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定模拟器镜像下载路径。如果不指定，默认使用DevEco Studio中的模拟器镜像路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-http_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，如果网络受限，下载镜像时可以尝试配置代理。  代理格式：{代理协议}://{用户名}:{密码}@{代理主机名}:{端口号}，代理协议支持http或https。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，当目标镜像已存在时，需要手动输入y/n，确认是否继续，输入此参数可无需交互，强制下载更新指定版本镜像。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -install -deviceType phone -osVersion \"HarmonyOS 6.0.1(21)\" -imageRoot D:\\Sdk -http_proxy \"http://user:password@proxy.proxyserver.com:port\" -force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除镜像",
      children: "删除镜像"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持删除模拟器镜像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -uninstall -deviceType {模拟器类型} -osVersion {模拟器镜像版本} -imageRoot {镜像路径} -force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-uninstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，镜像删除命令入口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定删除的产品类型，和下载镜像的-deviceType参数一致，不区分大小写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-osVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定删除的版本，和下载镜像的-osVersion参数一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-imageRoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定待删除的镜像路径。如果不指定，默认使用DevEco Studio中的模拟器镜像路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，删除指定镜像需要手动输入y/n，确认是否继续，输入此参数可无需交互，强制删除指定版本镜像。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -uninstall -deviceType phone -osVersion \"HarmonyOS 6.0.1(21)\" -imageRoot D:\\Sdk -force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建模拟器",
      children: "创建模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持创建模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -create {模拟器名称} -deviceType {模拟器类型} -osVersion {模拟器镜像版本} -instancePath {模拟器实例路径} -imageRoot {模拟器镜像路径} -screenProfile {模拟器标准类型模板} -screen {模拟器屏幕参数} -storage {模拟器存储空间} -memory {模拟器运行内存}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器产品类型，支持phone, foldable, wideFold, tripleFold, tablet, 2in1, 2in1 foldable, tv, wearable，不区分大小写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-osVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器镜像版本。  如果是release版本，和下载镜像的-osVersion参数一致，例如\"HarmonyOS 6.0.1(21)\"。如果不是release版本，需要在DevEco Studio中创建模拟器时查看，例如\"HarmonyOS 6.0.2(22) Beta1\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-instancePath/-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定模拟器实例路径。如果不指定，默认使用DevEco Studio中的模拟器实例路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-imageRoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定模拟器镜像路径。如果不指定，默认使用DevEco Studio中的模拟器镜像路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-screenProfile"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，指定模拟器的设备型号，如\"Mate 70 Pro\"，支持的设备型号可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section5418426125015",
              children: "screenProfileList命令"
            }), "查询。如果不指定，默认使用当前产品类型最新的设备型号。  如同时设置了-screen参数，以-screen参数为准。  仅在支持自定义屏幕的模拟器类型中可用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-run-emulator/ide-emulator-modify/ide-emulator-customize-screen-configuration",
              children: "自定义模拟器屏幕配置"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-screen"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，用于自定义模拟器屏幕配置，包括屏幕尺寸、分辨率、DPI，格式为\"宽度(px) 高度(px) DPI 屏幕对角线长度(inch)\"，如-screen \"1316 2832 560 6.9\"。  如果是双折叠模拟器，需要输入2组屏幕参数，分别对应展开态和折叠态屏幕，例如-screen \"2200 2480 480 7.8\" \"1080 2480 480 6.4\"。  仅在支持自定义屏幕的模拟器类型中可用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-run-emulator/ide-emulator-modify/ide-emulator-customize-screen-configuration",
              children: "自定义模拟器屏幕配置"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，模拟器存储空间，可选范围2-1023（单位G），默认6G。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，模拟器运行内存，可选范围2-32（单位G），默认4G。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -create Mate70Pro -deviceType phone -osVersion \"HarmonyOS 6.0.1(21)\" -instancePath D:\\Emulator -imageRoot D:\\Sdk -screenProfile \"Mate 70 Pro\" -storage 8 -memory 16\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除模拟器",
      children: "删除模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持删除模拟器实例，镜像不会被删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -delete {模拟器名称} -instancePath {模拟器实例路径} -force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-instancePath/-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定模拟器实例路径。如果不指定，默认使用DevEco Studio中的模拟器实例路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，删除指定模拟器实例需要手动输入y/n，确认是否继续，输入此参数可无需交互，强制删除指定模拟器实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -delete Mate70Pro -instancePath D:\\Emulator -force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看模拟器实例",
      children: "查看模拟器实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta3版本开始，支持查看模拟器实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -list -details\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
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
            children: "-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，查询本地模拟器实例列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询本地模拟器实例的详细信息，包括模拟器版本、镜像路径、实例路径等，常用信息如下表。从DevEco Studio 6.0.2 Beta1版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常用信息如下："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器产品类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器产品型号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器产品具体型号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vendorCountry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "国家码"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uuid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器uuid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHotBoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否热启动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isCustomize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前模拟器是否自定义屏幕配置"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isRunning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前模拟器是否正在运行"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "configPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevEco Studio缓存目录"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevEco Studio日志目录"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sdkPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DevEco Studio安装sdk目录"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageRoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器镜像下载路径"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageSubPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器镜像子文件夹路径，imageRoot+imageSubPath可以得到镜像的绝对路径"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "instancePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器实例路径"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "os.osVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器镜像版本号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "os.apiVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器镜像API版本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "os.softwareVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器镜像具体版本号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "os.isPublic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前模拟器是否是公开版本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.cpu.arch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器CPU架构类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.cpu.ncore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器CPU内核数量"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器DPI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.phy.height/width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器对应机型物理尺寸"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器对应机型屏幕状态数量，如折叠屏有折叠态和展开态"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.single.diagonalSize/height/width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器单屏尺寸与分辨率"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.double.diagonalSize/height/width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器双屏尺寸与分辨率，折叠屏设备使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.triple.diagonalSize/height/width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器三屏尺寸与分辨率，三折叠设备使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.ramSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器运行内存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.dataPartitionSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器存储空间大小"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.lcd.single/double.CutoutPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模拟器挖孔参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw.hdc.port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hdc端口号"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启动模拟器",
      children: "启动模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -hvd {模拟器名称} -path {模拟器实例路径} -imageRoot {模拟器镜像路径} -hdcport {hdc端口号}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-hvd/-start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器名称。  从DevEco Studio 6.1.0 Beta1版本开始，新增-start，推荐使用-start。首次使用时，需要同意HarmonyOS软件许可与服务协议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-path/-instancePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器实例路径。  从DevEco Studio 6.1.0 Beta1版本开始，该参数可选，并且新增-instancePath，推荐使用-instancePath。如果不指定，默认使用DevEco Studio中的模拟器实例路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-imageRoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定模拟器镜像路径。  从DevEco Studio 6.1.0 Beta1版本开始，该参数可选，如果不指定，默认使用DevEco Studio中的模拟器镜像路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-hdcport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定hdc端口号，支持范围10000-16555。从DevEco Studio 6.0.1 Beta1版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# DevEco Studio 6.1.0 Beta1之前的版本\nEmulator -hvd \"my Emulator\" -path D:\\Emulator -imageRoot D:\\Sdk\n# DevEco Studio 6.1.0 Beta1及以上版本\nEmulator -start \"my Emulator\" -instancePath D:\\Emulator -imageRoot D:\\Sdk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618360)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在DevEco Studio中使用模拟器时需要登录开发者账号，那么该版本的模拟器无法通过命令行启动，请在DevEco Studio界面上启动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关闭模拟器",
      children: "关闭模拟器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -stop {模拟器名称}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -stop \"my Emulator\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟器配置",
      children: "模拟器配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持配置模拟器实例路径、镜像路径以及网络代理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -config -instancePath {模拟器实例路径} -imageRoot {模拟器镜像路径} -http_proxy {网络代理配置}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，模拟器配置命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-instancePath/-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，修改DevEco Studio中的模拟器实例路径。  指定路径必须存在，且仅包含字母、数字、空格与特殊字符.-_。如果当前有模拟器实例正在运行，则不允许修改该配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-imageRoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，修改DevEco Studio中的模拟器镜像路径。  指定路径必须存在，且仅包含字母、数字、空格与特殊字符.-_。如果当前有模拟器实例正在运行，则不允许修改该配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-http_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，配置网络代理。  代理格式：{代理协议}://{用户名}:{密码}@{代理主机名}:{端口号}，代理协议支持http或https。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -config -instancePath D:/Emulator -imageRoot D:/Sdk -http_proxy \"http://user:password@proxy.proxyserver.com:port\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "清除模拟器配置",
      children: "清除模拟器配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持清除模拟器配置，包括模拟器实例路径、镜像路径以及网络代理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -unset instancePath/path/imageRoot/http_proxy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-unset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，模拟器清除配置命令，每次只能清除一个配置，支持以下配置：   - instancePath/path：将DevEco Studio中的模拟器实例路径恢复为默认路径。 - imageRoot：将DevEco Studio中的模拟器镜像路径恢复为默认路径。 - http_proxy：清除网络代理配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -unset instancePath\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看更新产品列表",
      children: "查看/更新产品列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持查看模拟器的产品列表，包括设备型号和对应的屏幕参数（DPI、屏幕的宽和高、屏幕对角线长度）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅在支持自定义屏幕的模拟器类型中可用，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-modify/ide-emulator-customize-screen-configuration",
        children: "自定义模拟器屏幕配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -screenProfileList -deviceType {模拟器类型} -details -update -http_proxy {网络代理配置}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-screenProfileList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，查看模拟器产品列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定模拟器的产品类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，列出屏幕的详细参数信息，包括DPI、屏幕的宽和高、屏幕的对角线长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，从云端获取并展示最新的模拟器产品列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-http_proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，如果网络受限，更新产品列表时可以尝试配置代理。  代理格式：{代理协议}://{用户名}:{密码}@{代理主机名}:{端口号}，代理协议支持http或https。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$Emulator -screenProfileList -deviceType phone -details -update -http_proxy \"http://user:password@proxy.proxyserver.com:port\"\nPhone   # 产品类型\n  - \"nova 15 Pro、nova 15 Ultra\"    # 设备型号\n       density: 560                 # 屏幕DPI\n       screen: 1320 x 2856          # 屏幕的宽和高，单位px\n       diagonal: 6.84 inch          # 屏幕对角线长度\n  - \"nova 15\"\n       density: 480\n       screen: 1084 x 2412\n       diagonal: 6.7 inch\n  - \"Mate 80 Pro Max、Mate 80 RS\"\n       density: 540\n       screen: 1320 x 2848\n       diagonal: 6.9 inch\n  - \"Mate 80、Mate 80 Pro\"\n       density: 560\n       screen: 1280 x 2832\n       diagonal: 6.75 inch\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "收集模拟器日志",
      children: "收集模拟器日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器在启动状态下，可以收集日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# {日志zip文件存放路径}需要指定.zip后缀\nEmulator -logZip {模拟器名称} -logPath {日志zip文件存放路径}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -logZip \"my Emulator\" -logPath D:\\EmulatorLog\\20250730.zip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看模拟器版本",
      children: "查看模拟器版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看协议",
      children: "查看协议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用模拟器需要同意HarmonyOS软件许可与服务协议，下载镜像需要同意HarmonyOS SDK许可协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持查看模拟器所有协议内容，并选择是否同意。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Emulator -license accept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "-license"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，打印出模拟器所有协议内容，并通过命令行交互的方式（y/n）选择是否同意。  如果带上accept参数，表示同意模拟器所有协议，不再进行命令行交互流程。"
          })]
        })
      })]
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
670367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
618360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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