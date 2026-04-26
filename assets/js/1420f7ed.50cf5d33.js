"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["520969"], {
177165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_install_ide_ohpm_install_md_142_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-install-ide-ohpm-install-md-142.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_install_ide_ohpm_install_md_142_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install/ide-ohpm-install","title":"ohpm install","description":"安装三方库。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install/ide-ohpm-install.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ohpm install","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-install","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm init","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-init/"},"next":{"title":"ohpm list","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install/ide-ohpm-install.md


const frontMatter = {
	title: 'ohpm install',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-install',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm install';

const assets = {

};



const toc = [{
  "value": "命令格式",
  "id": "命令格式",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "Options",
  "id": "options",
  "level": 2
}, {
  "value": "install_all",
  "id": "install_all",
  "level": 3
}, {
  "value": "save-dynamic",
  "id": "save-dynamic",
  "level": 3
}, {
  "value": "save-dev",
  "id": "save-dev",
  "level": 3
}, {
  "value": "save-prod",
  "id": "save-prod",
  "level": 3
}, {
  "value": "no-save",
  "id": "no-save",
  "level": 3
}, {
  "value": "prefix",
  "id": "prefix",
  "level": 3
}, {
  "value": "parameterFile",
  "id": "parameterfile",
  "level": 3
}, {
  "value": "registry",
  "id": "registry",
  "level": 3
}, {
  "value": "fetch_timeout",
  "id": "fetch_timeout",
  "level": 3
}, {
  "value": "strict_ssl",
  "id": "strict_ssl",
  "level": 3
}, {
  "value": "max_concurrent",
  "id": "max_concurrent",
  "level": 3
}, {
  "value": "retry_times",
  "id": "retry_times",
  "level": 3
}, {
  "value": "retry_interval",
  "id": "retry_interval",
  "level": 3
}, {
  "value": "experimental-concurrently-safe",
  "id": "experimental-concurrently-safe",
  "level": 3
}, {
  "value": "target_path",
  "id": "target_path",
  "level": 3
}, {
  "value": "log_level",
  "id": "log_level",
  "level": 3
}, {
  "value": "debug",
  "id": "debug",
  "level": 3
}, {
  "value": "lockfile_stable_order",
  "id": "lockfile_stable_order",
  "level": 3
}, {
  "value": "odm_r2_project_root",
  "id": "odm_r2_project_root",
  "level": 3
}, {
  "value": "enable_cross_process_lock",
  "id": "enable_cross_process_lock",
  "level": 3
}, {
  "value": "resolve_conflict_strict",
  "id": "resolve_conflict_strict",
  "level": 3
}, {
  "value": "resolve_conflict",
  "id": "resolve_conflict",
  "level": 3
}, {
  "value": "cache",
  "id": "cache",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "oh_modules",
  "id": "oh_modules",
  "level": 2
}, {
  "value": "ohpm 1.0.0~1.3.0",
  "id": "ohpm-100130",
  "level": 3
}, {
  "value": "ohpm 1.4.x",
  "id": "ohpm-14x",
  "level": 3
}, {
  "value": "target_path",
  "id": "target_path-1",
  "level": 2
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
        id: "ohpm-install",
        children: "ohpm install"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装三方库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm install [options] [[<@group>/]<pkg>[@<version> | @tag:<tag>]] ...\nohpm install [options] <folder> \nohpm install [options] <har file>\nalias: i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139534)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@group：三方库的命名空间，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pkg：三方库名称，可选；当 install 后面没有指定三方库名称时，会根据当前目录下 oh-package.json5 定义的依赖关系进行全量安装。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version：三方库的版本号，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tag：三方库的标签，标签会标记三方库的某个版本号，可选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于安装指定组件或 oh-package.json5 文件中所有的依赖。如果存在 oh-package-lock.json5 文件，安装将取决于 oh-package-lock.json5 文件中锁定的版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm install"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将依赖项安装到本地 oh_modules 文件夹中，并将所有依赖项作为 dependencies，写入 oh-package.json5 文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm install <folder>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装本地文件夹，则默认会创建一个软链接指向该文件夹。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm install ../folder\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm install <har file>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装压缩包，请注意压缩包的要求："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "文件名必须使用 .tar, .tar.gz, .tgz, .har 作为扩展名；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "压缩包里面包含子文件 package；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "子文件夹 package 下面必须包含 oh-package.json5 文件，且配置文件中必须有 name 和 version 字段。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm install ./package.har\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "install_all",
      children: "install_all"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：all"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --all或者--install_all 参数，安装您项目下所有模块在其 oh-package.json5 中配置的全部依赖项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save-dynamic",
      children: "save-dynamic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --save-dynamic 参数，安装的三方库信息将会写入 oh-package.json5 文件的 dynamicDependencies 中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save-dev",
      children: "save-dev"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --save-dev 参数，安装的三方库信息将会写入 oh-package.json5 文件的 devDependencies 中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save-prod",
      children: "save-prod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --save-prod 参数，安装的三方库信息将会写入 oh-package.json5 文件的 dependencies 中，这是 ohpm 的默认行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "no-save",
      children: "no-save"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --no-save 参数，安装的三方库信息将不会写入 oh-package.json5 文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prefix",
      children: "prefix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parameterfile",
      children: "parameterFile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： string"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：pf"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --pf <string> 或者 --parameterFile <string> 参数，用来指定参数化配置文件地址。使用该命令前需保证项目级别的oh-package.json5中已配置parameterFile参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry",
      children: "registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --registry <registry> 参数，指定仓库地址；如果没有指定，默认从配置中获取仓库地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fetch_timeout",
      children: "fetch_timeout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：60000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：ft"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --ft <number> 或者 --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为60000ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strict_ssl",
      children: "strict_ssl"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "max_concurrent",
      children: "max_concurrent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：50"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：mc"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --mc <number> 或者 --max_concurrent <number> 参数，设置最大活动并发请求数（即ohpm操作期间任何时间的最大网络请求数），如果没有指定，默认最大并发请求数为50次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retry_times",
      children: "retry_times"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：rt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --rt <number> 或者 --retry_times <number> 参数，设置操作失败前的最大重试次数，如果没有指定，默认最大重试次数为1次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retry_interval",
      children: "retry_interval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：1000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：ri"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --ri <number> 或者 --retry_interval <number> 参数，设置重试失败前的等待时间，如果没有指定，默认等待时间为1000ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "experimental-concurrently-safe",
      children: "experimental-concurrently-safe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 install 命令后面配置 --experimental-concurrently-safe 参数，并发安全地安装依赖。这是一个实验性选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "target_path",
      children: "target_path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以在 install 命令后面配置 --target_path <string> 参数，用来指定在特定目标产物target语境下各模块的依赖配置文件（oh-package.json5）的路径。在执行ohpm install时，ohpm会优先安装<target_path>/<moduleName>/oh-package.json5文件中依赖。详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section79331822125611",
        children: "target_path"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log_level",
      children: "log_level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 install 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debug",
      children: "debug"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockfile_stable_order",
      children: "lockfile_stable_order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --lockfile_stable_order 参数，当oh-package.json5文件未变更时，当前已生成的oh-package-lock.json5各字段内容不变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odm_r2_project_root",
      children: "odm_r2_project_root"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --odm_r2_project_root 参数。当存在overrideDependencyMap配置，且其配置项对应的配置文件内存在相对路径的依赖配置时，ohpm会基于工程根路径解析和查询相对路径，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc#section136621053184912",
        children: "odm_r2_project_root"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enable_cross_process_lock",
      children: "enable_cross_process_lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --enable_cross_process_lock 参数，由于oh_modules目录结构限制，ohpm不支持在同一个工程下并行运行多个ohpm install、ohpm update或ohpm uninstall命令。若需要在同一个工程下执行多个ohpm install、ohpm update或ohpm uninstall命令，可将该配置设置为true，使多个命令以串行的方式运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolve_conflict_strict",
      children: "resolve_conflict_strict"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --resolve_conflict_strict 参数，ohpm会按照严格模式处理依赖版本冲突，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc#section1942983310492",
        children: "resolve_conflict_strict"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolve_conflict",
      children: "resolve_conflict"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --resolve_conflict 参数，ohpm会自动处理依赖版本冲突，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc#section368717475562",
        children: "resolve_conflict"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cache",
      children: "cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --cache <string> 参数，设置缓存路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装 lottie 三方库，执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm install @ohos/lottie\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220268)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "876",
        height: "49"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh_modules",
      children: "oh_modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohpm-100130",
      children: "ohpm 1.0.0~1.3.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 ohpm 安装时，项目中各 Module 的依赖项被统一安装在 Module 根目录下的 oh_modules 目录中，Module 中所有直接依赖和间接依赖都以平铺的方式存储在 oh_modules 目录下的 .ohpm 目录中，Module 的直接依赖则以软链接的方式添加进 oh_modules 文件夹的根目录中。因此，相同依赖项只会安装一次，从而减少磁盘使用空间，加快安装速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohpm-14x",
      children: "ohpm 1.4.x"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm 客户端从 1.4.0 版本开始，同一项目下所有 Module 的依赖都会被统一安装在项目根目录下的 oh_modules 目录中，同时会在项目各 Module 根目录下的 oh_modules 中生成该 Module 的直接依赖的软链接，这些软链接会指向", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "项目根目录"
        })
      }), "下 oh_modules 中的 .ohpm 目录下依赖实际存储目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "target_path-1",
      children: "target_path"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支持在构建过程中针对不同的产物定制不同的依赖，Hvigor会在构建时根据目标产物target为各模块自动生成定制的依赖配置文件（oh-package.json5），开发者可以在ohpm install时使用target_path选项来指定在特定目标产物target语境下各模块的依赖配置文件（oh-package.json5）的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm会优先安装<target_path>/moduleName/oh-package.json5文件中配置的依赖，并在<project_root>/moduleName下生成对应的oh-package-<targetName>-lock.json5文件。当指定target_path时，默认会开启依赖版本冲突自动处理功能，在依赖安装完成后，ohpm还会根据实际安装的依赖版本在<target_path>/resolve-conflict/moduleName目录下生成新的oh-package.json5文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "target_path目录结构示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---default                   // <targetName>默认为default\n|   |   dependencyMap.json5   // 记录在特定target语境下的各模块依赖配置文件路径\n|   +---module1               // 在特定target语境下某模块的依赖配置文件的存储目录，与原模块根目录同名\n|   |       oh-package.json5  // 在特定target语境下某模块依赖配置文件\n|   +---module2\n|   |       oh-package.json5\n|   |   oh-package.json5      // 在特定target语境下生成的工程级依赖配置文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dependencyMap.json5内容示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  targetName: \"default\",\n  rootDependency: \"./oh-package.json5\",\n  dependencyMap: {\n       \"module1\": \"./module1/oh-package.json5\",\n       \"module2\": \"./module2/oh-package.json5\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ohpm install指定target_path时依赖配置优先级说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、<target_path>/dependencyMap.json5中rootDependency配置的oh-package.json5的优先级高于<project_root>/oh-package.json5。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、.ohpmrc中projectPackageJson指定的项目级配置文件中overrides、overrideDependencyMap配置优先级同时高于<target_path>/dependencyMap.json5中rootDependency配置的oh-package.json5中对应配置 和 <project_root>/oh-package.json5中对应配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、<target_path>/moduleName/oh-package.json5的优先级高于overrideDependencyMap中的依赖配置文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、overrides中的依赖版本优先级高于<target_path>/moduleName/oh-package.json5中对应的依赖版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(423491)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当<target_path>/dependencyMap.json5中targetName的值不为空且不等于'default'时，<project_root>/moduleName目录下生成的lock文件名才会变更为：oh-package-targetName-lock.json5。"
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
423491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
139534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
220268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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