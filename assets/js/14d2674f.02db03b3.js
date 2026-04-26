"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["591354"], {
222337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_command_line_building_app_ide_command_line_building_app_md_14d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-command-line-building-app-ide-command-line-building-app-md-14d.json
var site_docs_ide_command_line_building_app_ide_command_line_building_app_md_14d_namespaceObject = JSON.parse('{"id":"ide-command-line-building-app/ide-command-line-building-app","title":"搭建流水线","description":"除了使用DevEco Studio一键式构建应用/元服务外，还可以使用命令行工具来调用Hvigor任务进行构建。通过命令行的方式构建应用或元服务，可用于构建CI（Continuous Integration）流水线，按照计划时间自动化地构建HAP/APP、签名、安装运行等操作。","source":"@site/docs/ide-command-line-building-app/ide-command-line-building-app.md","sourceDirName":"ide-command-line-building-app","slug":"/ide-command-line-building-app/","permalink":"/harmonyos-docs-site/ide-command-line-building-app/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"搭建流水线","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-command-line-building-app","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm命令公共错误码","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-errorcode-universal/"},"next":{"title":"HarmonyOS 开发者测试服务概述","permalink":"/harmonyos-docs-site/app-testing-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-command-line-building-app/ide-command-line-building-app.md


const frontMatter = {
	title: '搭建流水线',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-command-line-building-app',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = '搭建流水线';

const assets = {

};



const toc = [{
  "value": "系统平台要求",
  "id": "系统平台要求",
  "level": 2
}, {
  "value": "预置条件",
  "id": "预置条件",
  "level": 2
}, {
  "value": "配置JDK",
  "id": "配置jdk",
  "level": 3
}, {
  "value": "获取命令行工具",
  "id": "获取命令行工具",
  "level": 3
}, {
  "value": "配置Node.js环境变量",
  "id": "配置nodejs环境变量",
  "level": 3
}, {
  "value": "配置hdc环境变量",
  "id": "配置hdc环境变量",
  "level": 3
}, {
  "value": "配置hvigor环境变量",
  "id": "配置hvigor环境变量",
  "level": 3
}, {
  "value": "配置npm镜像仓库",
  "id": "配置npm镜像仓库",
  "level": 3
}, {
  "value": "安装ohpm",
  "id": "安装ohpm",
  "level": 3
}, {
  "value": "安装libGL1库",
  "id": "安装libgl1库",
  "level": 3
}, {
  "value": "构建应用",
  "id": "构建应用",
  "level": 2
}, {
  "value": "安装工程及模块依赖",
  "id": "安装工程及模块依赖",
  "level": 3
}, {
  "value": "执行Hvigor命令进行构建",
  "id": "执行hvigor命令进行构建",
  "level": 3
}, {
  "value": "运行应用",
  "id": "运行应用",
  "level": 2
}, {
  "value": "准备申请签名所需文件",
  "id": "准备申请签名所需文件",
  "level": 3
}, {
  "value": "对未签名的HAP/APP进行签名",
  "id": "对未签名的hapapp进行签名",
  "level": 3
}, {
  "value": "运行应用",
  "id": "运行应用-1",
  "level": 3
}, {
  "value": "示例脚本",
  "id": "示例脚本",
  "level": 2
}, {
  "value": "无网络流水线搭建",
  "id": "无网络流水线搭建",
  "level": 2
}, {
  "value": "安装pnpm插件",
  "id": "安装pnpm插件",
  "level": 3
}, {
  "value": "安装npm依赖插件",
  "id": "安装npm依赖插件",
  "level": 3
}, {
  "value": "安装ohpm依赖插件",
  "id": "安装ohpm依赖插件",
  "level": 3
}, {
  "value": "安装libGL1库",
  "id": "安装libgl1库-1",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "搭建流水线",
        children: "搭建流水线"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了使用DevEco Studio一键式构建应用/元服务外，还可以使用命令行工具来调用Hvigor任务进行构建。通过命令行的方式构建应用或元服务，可用于构建CI（Continuous Integration）流水线，按照计划时间自动化地构建HAP/APP、签名、安装运行等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行方式构建应用或元服务，可在Windows、Linux和macOS下调用相应命令来执行，本文将以Linux系统为例进行讲解，包括准备构建环境、构建HAP、签名运行等操作。在调用命令行任务上，Windows/macOS系统与Linux系统没有区别，仅在搭建构建环境上存在差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402502)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果开发者所使用的电脑处于完全无网络的环境中，搭建构建环境请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section15767113454814",
          children: "无网络流水线搭建"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS SDK已嵌入命令行工具中，无需额外下载配置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请在执行命令行之前，保证当前工程是可信任的，确保安全编译。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统平台要求",
      children: "系统平台要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux：64位操作系统"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GLIBC：2.28或更高版本"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内存：推荐使用16GB及以上，最小8GB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "硬盘：100GB及以上"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预置条件",
      children: "预置条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置jdk",
      children: "配置JDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下载JDK，支持JDK 17版本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Terminal里，进入JDK软件包目录，执行如下命令，解压已经下载好的安装包，其中jdk-17.0.6_linux-x64_bin.tar.gz为软件包名称，请根据实际配置进行修改。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tar -xvf jdk-17.0.6_linux-x64_bin.tar.gz\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置JDK环境变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#jdk\nexport JAVA_HOME=/opt/jdk-17.0.6_linux-x64_bin\nexport PATH=$PATH:$JAVA_HOME/bin\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，检查JDK安装结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -version\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(811495)/* ["default"] */.A) + "",
            width: "714",
            height: "73"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取命令行工具",
      children: "获取命令行工具"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-commandline-get#section21298572437",
            children: "命令行工具获取"
          }), "。其他系统(Windows/macOS)请根据实际情况下载对应版本。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，解压命令行工具commandline-tools-linux-xxx.zip，工具名称请根据实际情况进行修改。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "unzip commandline-tools-linux-x64-5.0.3.XXX.zip\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(874563)/* ["default"] */.A) + "",
            width: "548",
            height: "40"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将解压后所在的路径定义为COMMANDLINE_TOOL_DIR，在后续配置Node、hdc、hvigor、ohpm工具环境变量时使用。例如解压在/opt路径下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export COMMANDLINE_TOOL_DIR=/opt\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置nodejs环境变量",
      children: "配置Node.js环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令行工具包含了配套的Node.js，按照以下步骤配置环境变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置Node.js环境变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 此处以Linux系统举例，不同系统Node.js路径不同，具体以实际路径为准\nexport NODE_HOME=${COMMANDLINE_TOOL_DIR}/command-line-tools/tool/node\nexport PATH=$PATH:$NODE_HOME/bin\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(935383)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同系统的Node.js所在路径不同，Windows存放在tool/node目录下，Linux和macOS存放在tool/node/bin目录下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，查询Node.js版本信息，确认配置成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "node -v\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(840993)/* ["default"] */.A) + "",
            width: "424",
            height: "48"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777353)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议使用命令行工具中自带的Node.js工具，若另外单独下载配置其他版本的Node.js，推荐使用v18版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置hdc环境变量",
      children: "配置hdc环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc命令行工具是调试HarmonyOS应用/元服务的工具，该工具存放在命令行工具自带的sdk下的toolchains目录中。为方便使用hdc命令行工具，请将其添加到环境变量中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请先完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section88316312414",
            children: "获取命令行工具"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加hdc路径到环境变量，指令如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hdc工具存放路径示例：${COMMANDLINE_TOOL_DIR}/command-line-tools/sdk/default/openharmony/toolchains。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export HDC_HOME=${COMMANDLINE_TOOL_DIR}/command-line-tools/sdk/default/openharmony/toolchains\nexport PATH=$PATH:$HDC_HOME\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置hvigor环境变量",
      children: "配置hvigor环境变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请先完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section88316312414",
            children: "获取命令行工具"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加hvigorw路径到PATH环境变量，指令如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export PATH=${COMMANDLINE_TOOL_DIR}/command-line-tools/bin:$PATH\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换到工程根目录，执行如下命令，查询Hvigor版本信息，确认安装成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw -v\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置npm镜像仓库",
      children: "配置npm镜像仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若您的工程在hvigor/hvigor-config.json5文件中依赖npm三方组件，流水线中则需要配置npm镜像地址，编译时才能正确地下载它。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm config set registry https://repo.huaweicloud.com/repository/npm/\nnpm config set \"@ohos:registry\" https://repo.harmonyos.com/npm/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装ohpm",
      children: "安装ohpm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请先完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section88316312414",
            children: "获取命令行工具"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加ohpm路径到环境变量，指令如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export PATH=${COMMANDLINE_TOOL_DIR}/command-line-tools/bin:$PATH\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，查询ohpm版本信息，确认安装成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm -v\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置仓库地址（可指定多个地址，','号分割），指令如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm config set registry https://ohpm.openharmony.cn/ohpm/\nohpm config set strict_ssl false\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装libgl1库",
      children: "安装libGL1库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在linux系统的构建场景下，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section2095319147103",
        children: "纹理压缩"
      }), "功能需要安装libGL1库。例如Ubuntu/Debian上安装libgl1-mesa-dev，CentOS/RHEL上安装mesa-libGL-devel。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以libgl1-mesa-dev为例，执行以下命令安装，其他系统请替换成实际的包名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apt install -y libgl1-mesa-dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建应用",
      children: "构建应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装工程及模块依赖",
      children: "安装工程及模块依赖"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用命令行进行构建前，需要分别进入工程及各个模块下执行ohpm install命令，安装", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "工程及各个模块"
        })
      }), "依赖的三方库。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义ohpm安装函数，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 切换到指定目录$1并执行ohpm install指令\nfunction ohpm_install() {     \n    cd $1              # $1：函数第一个参数, 必须是路径     \n    ohpm install --all # 安装所有依赖\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义变量 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PROJECT_PATH"
            })
          }), "，表示工程目录路径，示例如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PROJECT_PATH=xxx/xxx/project_name  # 工程路径\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(596832)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程目录不要存放在隐藏目录下，即工程路径的每一级目录中不要以.开头，例如xxx/.xxx/project，否则构建时可能会将模块中的代码和配置文件等作为资源打包进产物中，不会进行混淆或加密。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装工程及各个模块的三方库依赖，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 根据业务情况安装ohpm三方库依赖\nohpm_install \"${PROJECT_PATH}\"\n...\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行hvigor命令进行构建",
      children: "执行Hvigor命令进行构建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hvigorw命令行工具执行构建命令，构建完成后，工程或模块下build目录中会生成相应的hap/hsp/har/app产物。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 根据业务情况，执行相应的构建命令, 示例如下\n\n# clean工程\nhvigorw clean --no-daemon\n\n# 构建Hap, 生成产物：${PROJECT_PATH}/{moduleName}/build/{productName}/outputs/{targetName}/xxx.hap\nhvigorw assembleHap --mode module -p product=default -p buildMode=debug --no-daemon\n\n# 构建Hsp, 生成产物：${PROJECT_PATH}/{moduleName}/build/{productName}/outputs/{targetName}/(xxx.har | xxx.hsp)\nhvigorw assembleHsp --mode module -p module=library@default -p product=default --no-daemon\n\n# 构建Har, 生成产物：${PROJECT_PATH}/{moduleName}/build/{productName}/outputs/{targetName}/outputs/xxx.har\nhvigorw assembleHar --mode module -p module=library1@default -p product=default --no-daemon\n\n# 构建App, 生成产物: ${PROJECT_PATH}/build/outputs/{productName}/xxx.app\nhvigorw assembleApp --mode project -p product=default -p buildMode=debug --no-daemon\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本文使用Linux作为流水线构建环境，Linux环境会对大小写敏感，如果您的代码引用中有大小写错误（例如代码中import funcA from './aaa'，而实际文件为AAA.ets），而且开发环境是Windows或者Mac，那么有可能出现Windows或者Mac环境下编译通过，而Linux环境下编译不通过的现象。通过在项目级的build-profile.json5文件中配置caseSensitiveCheck为true来打开大小写敏感，保持Windows或者Mac环境编译与Linux环境编译结果一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// build-profile.json5文件\n{\n    \"name\": \"default\",\n    \"compatibleSdkVersion\": \"6.1.0(23)\",\n    \"runtimeOS\": \"HarmonyOS\",\n    \"buildOption\": {\n      \"strictMode\": {\n        \"caseSensitiveCheck\" : true\n      }\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果在非daemon模式下，需要修改node内存配置，可在command-line-tools的hvigor/bin/hvigorw文件中取消第15行的注释，并配置对应的数值。如将node内存配置为10240，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "NODE_OPTS=\"--max-old-space-size=10240\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果是在daemon模式下，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-optimized/ide-hvigor-daemon#section327617383145",
            children: "设置守护进程内存"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编译构建常见的任务和扩展参数如下，更多关于Hvigor命令行参数详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-commandline#section16300629103",
        children: "常用命令"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " HarmonyOS应用构建常用扩展参数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-p buildMode={debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p product={ProductName}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定product进行编译, 编译product下配置的module target。  缺省时：默认为default。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p module={ModuleName}@{TargetName}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定模块及target进行编译，可指定多个相同类型的模块进行编译，以逗号隔开；TargetName不指定时默认为default。  限制：此参数需要与--mode module参数搭配使用。  缺省时：执行AssembleHap任务会编译工程下所有模块，默认指定target为default。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p ohos-test-coverage={true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " HarmonyOS应用编译构建相关任务"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理构建产物"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleHap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建Hap应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建App应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleHsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建Hsp包"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建Har包"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行应用",
      children: "运行应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果构建时已配置签名文件，会分别生成已签名包（如xxx-signed.hap）和未签名包（如xxx-unsigned.hap），已签名包可直接在真机设备上运行，无需重新签名。如果需要对包进行重签名，可使用签名工具对未签名包进行签名，步骤如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "准备申请签名所需文件",
      children: "准备申请签名所需文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备好申请签名所需3个文件：密钥（.p12文件）、数字证书（.cer文件）、Profile（.p7b文件）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "生成密钥和证书请求文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JDK携带的Keytool工具生成密钥和证书请求文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section195447475220",
            children: "配置JDK"
          }), "步骤配置环境变量后，打开命令行终端，执行如下命令，生成密钥库文件。例如，生成的密钥库名称为demo.p12，存储到path目录下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "keytool -genkeypair -alias \"demo_key\" -keyalg EC -groupname secp256r1 -sigalg SHA256withECDSA -dname \"C=CN,O=HUAWEI,OU=HUAWEI IDE,CN=demo_key\"  -keystore /path/demo.p12 -storetype pkcs12 -validity 9125 -storepass 123456Abc -keypass 123456Abc\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关于该命令中需要修改的参数说明如下，其余参数不需要修改："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "alias"
              })
            }), "：密钥的别名信息，用于标识密钥名称。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dname"
              })
            }), "：证书基本信息。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C：国家/地区代码，如CN。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "O：组织名称，如HUAWEI。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "OU：组织单位名称，如HUAWEI IDE。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "CN：名字与姓氏，建议与别名一致。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystore"
              })
            }), "：密钥库文件，请将\"/path/demo.p12\"修改为实际路径。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "validity"
              })
            }), "：证书有效期，例如设置为9125（25年）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "storepass"
              })
            }), "：设置密钥库密码，必须由大写字母、小写字母、数字和特殊符号中的两种以上字符的组合，长度至少为8位。请记住该密码，后续签名配置需要使用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keypass"
              })
            }), "：设置密钥的密码，请与", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "storepass"
              })
            }), "保持一致。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["执行如下命令，执行后需要输入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "storepass"
            })
          }), "密码，生成证书请求文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "keytool -certreq -alias \"demo_key\" -sigalg SHA256withECDSA -keystore /path/demo.p12 -storetype pkcs12 -file /path/demo.csr\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成证书请求文件的参数说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "alias"
              })
            }), "：与上一步骤中输入的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "alias"
              })
            }), "保持一致。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystore"
              })
            }), "：与上一步骤中输入的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystore"
              })
            }), "保持一致。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "file"
              })
            }), "：生成的证书请求文件名称，后缀为.csr，请将\"/path/demo.csr\"修改为实际路径。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["申请调试", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "数字证书和Profil"
                })
              })
            })
          }), "e********文件"]
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生成证书请求文件后，在AppGallery Connect中申请、下载调试数字证书和Profile文件，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section081822416419",
        children: "申请调试证书"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section89479413571",
        children: "申请Profile文件和添加权限信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对未签名的hapapp进行签名",
      children: "对未签名的HAP/APP进行签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备好签名工具hap-sign-tool.jar，在${COMMANDLINE_TOOL_DIR}/command-line-tools/sdk/default/openharmony/toolchains/lib下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在签名工具目录下，使用如下命令进行签名。详细的签名工具指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/developtools_hapsigner",
            children: "Hap包签名工具"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar hap-sign-tool.jar sign-app -keyAlias \"demo_key\" -signAlg \"SHA256withECDSA\" -mode \"localSign\" -appCertFile \"/path/demo.cer\" -profileFile \"/path/demo.p7b\" -inFile \"/path/hap-unsigned.hap\" -keystoreFile \"/path/demo.p12\" -outFile \"/path/hap-signed.hap\" -keyPwd \"123456Abc\" -keystorePwd \"123456Abc\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关于该命令中需要修改的参数说明如下，其余参数不需要修改："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keyAlias"
              })
            }), "：密钥别名。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "appCertFile"
              })
            }), "：申请的调试证书文件，格式为.cer。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "profileFile"
              })
            }), "：申请的调试Profile文件，格式为.p7b。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "inFile"
              })
            }), "：通过Hvigor打包生成的未携带签名信息的HAP。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystoreFile"
              })
            }), "：密钥库文件，格式为.p12。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "outFile"
              })
            }), "：经过签名后生成的携带签名信息的HAP。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keyPwd"
              })
            }), "：密钥密码。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "keystorePwd"
              })
            }), "：密钥库密码。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(422524)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果要对APP进行签名，只需将", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "inFile"
            })
          }), "和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "outFile"
            })
          }), "参数修改为APP包即可。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行应用-1",
      children: "运行应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc",
        children: "hdc工具"
      }), "将HAP推送到真机设备上进行安装，需要注意的是，推送的HAP必须是携带签名信息的，否则会导致HAP安装失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送HAP的命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 将打包好的hap包推送至设备中\nhdc file send \"{PROJECT_PATH}/entry/build/default/outputs/default/entry-default-signed.hap\" \"data/local/tmp/entry-default-signed.hap\"\n# 安装hap包\nhdc shell bm install -p \"data/local/tmp/entry-default-signed.hap\"\n# 删除hap包\nhdc shell rm -rf \"data/local/tmp/entry-default-signed.hap\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备上运行HAP的命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell aa start -a EntryAbility -b com.example.myapplication -m entry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例脚本",
      children: "示例脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953646)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此脚本无法直接运行，仅供参考，业务要根据自己的情况来进行适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#!/bin/bash\nset -ex\n\nJAVA_HOME=xxx #指定JDK的安装目录\nCOMMANDLINE_TOOL_DIR=xxx #命令行工具的安装目录\n\n#配置hvigor、ohpm环境变量\nexport PATH=${COMMANDLINE_TOOL_DIR}/command-line-tools/bin:$PATH\n\n#下载并配置JDK\nfunction init_JDK() {\n  if [ ! -d \"${JAVA_HOME}\" ]; then \n     mkdir \"${JAVA_HOME}\"\n  fi\n  cd ${JAVA_HOME}\n  wget --no-check-certificate -q \"${jdk下载路径}\" -O jdk-linux.tar.xz #下载jdk，需要替换jdk下载路径\n  tar -vxf jdk-linux.tar.xz\n  JDK_DIR=xxx #jdk压缩包文件里面的目录\n  cd ${JDK_DIR}\n  mv -f ./* .[^.]* ../\n  cd ..\n  rm -rf JDK_DIR jdk-linux.tar.xz\n  export JAVA_HOME=${JAVA_HOME}\n  export PATH=$JAVA_HOME/bin:$PATH\n  java -version\n}\n\n#配置hdc环境变量\nfunction init_hdc() {\n  export HDC_HOME=${COMMANDLINE_TOOL_DIR}/command-line-tools/sdk/default/openharmony/toolchains #设置hdc工具的环境变量，hdc工具在toolchains所在路径下\n  export PATH=$HDC_HOME:$PATH\n}\n\n# 安装ohpm, 若镜像中已存在ohpm，则无需重新安装\nfunction init_ohpm() {\n    ohpm -v\n    # 配置ohpm仓库地址\n    ohpm config set registry https://ohpm.openharmony.cn/ohpm/\n}\n\n# 初始化相关路径\nPROJECT_PATH=xxx  # 工程目录\n# 进入package目录安装依赖\nfunction ohpm_install {\n    cd $1\n    ohpm install\n}\n# 环境适配\nfunction buildHAP() {\n    # 根据业务情况安装ohpm三方库依赖\n    ohpm_install \"${PROJECT_PATH}\"\n    ohpm_install \"${PROJECT_PATH}/entry\"\n    ohpm_install \"${PROJECT_PATH}/xxx\"\n    # 根据业务情况，采用对应的构建命令，可以参考DevEco Studio构建日志中的命令\n    cd ${PROJECT_PATH}\n    hvigorw clean --no-daemon\n    hvigorw assembleHap --mode module -p product=default -p debuggable=false --no-daemon # 流水线构建命令建议末尾加上--no-daemon\n}\nfunction install_hap() {\n    hdc file send \"${PROJECT_PATH}/entry/build/default/outputs/default/entry-default-signed.hap\" \"data/local/tmp/entry-default-signed.hap\"\n    hdc shell bm install -p \"data/local/tmp/entry-default-signed.hap\" \n    hdc shell rm -rf \"data/local/tmp/entry-default-signed.hap\"\n    hdc shell aa start -a MainAbility -b com.example.myapplication -m entry\n}\n\n# 使用ohpm发布har\nfunction upload_har {\n  ohpm publish pkg.har\n}\n\nfunction main {\n  local startTime=$(date '+%s')\n  init_JDK\n  init_hdc\n  init_ohpm\n  buildHAP\n  install_hap\n  upload_har\n  local endTime=$(date '+%s')\n  local elapsedTime=$(expr $endTime - $startTime)\n  echo \"build success in ${elapsedTime}s...\"\n}\nmain\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无网络流水线搭建",
      children: "无网络流水线搭建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者使用的电脑处于完全无网络的环境中，可参考以下步骤搭建流水线环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装pnpm插件",
      children: "安装pnpm插件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请在可访问网络的电脑上创建一个空文件夹，在文件夹中创建一个package.json文件，在文件中填写如下内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"pnpm\": \"8.13.1\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["先配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-appendix/ide-environment-config#zh-cn_topic_0000001056725590_li358362302311",
            children: "环境变量"
          }), "，再打开", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-commandline-get",
            children: "命令行工具"
          }), "，在文件夹下执行 npm install 命令，会生成node_modules文件夹。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(703095)/* ["default"] */.A) + "",
            width: "294",
            height: "243"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将node_modules文件夹和package.json文件拷贝到无网络电脑的C:\\Users**用户名目录**.hvigor\\wrapper\\tools下（若当前无该目录，请手动创建）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在无网络电脑上执行如下命令，设置npm离线模式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm config set offline true\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装npm依赖插件",
      children: "安装npm依赖插件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请在可访问网络的电脑上创建一个空文件夹，在文件夹中创建一个package.json文件，配置npm依赖，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"ajv\": \"latest\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-commandline-get",
            children: "命令行工具"
          }), "，在文件夹下执行 npm install 命令，会生成node_modules文件夹。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(310600)/* ["default"] */.A) + "",
            width: "399",
            height: "156"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将node_modules文件夹拷贝到无网络电脑的工程根目录下。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装ohpm依赖插件",
      children: "安装ohpm依赖插件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-no-network#section208435578175",
        children: "安装三方库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装libgl1库-1",
      children: "安装libGL1库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在linux系统的构建场景下，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section2095319147103",
        children: "纹理压缩"
      }), "功能需要安装libGL1库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在可访问网络的电脑上下载libGL1库，例如Ubuntu/Debian下载libgl1-mesa-dev，CentOS/RHEL下载mesa-libGL-devel，并将安装包拷贝到无网络电脑中进行安装。"
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
953646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
310600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752850-db05d23291edb6e828b6d5a624f37a47.png");

},
703095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
935383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
840993(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832775-de43344fbeccba951969538a5a9eb2c5.png");

},
596832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
811495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752785-7724005fdaea3270b1f2f351a7cdc376.png");

},
402502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
777353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
422524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
874563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752854-4bbcc9807571797fb6679ecd1891cafa.png");

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