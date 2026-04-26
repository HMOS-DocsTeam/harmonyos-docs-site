"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["594198"], {
682673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_update_ide_ohpm_update_md_cc2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-update-ide-ohpm-update-md-cc2.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_update_ide_ohpm_update_md_cc2_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/ide-ohpm-update","title":"ohpm update","description":"更新三方库。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/ide-ohpm-update.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"ohpm update","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-update","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm unpublish","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-unpublish/"},"next":{"title":"ohpm root","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-root/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-update/ide-ohpm-update.md


const frontMatter = {
	title: 'ohpm update',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-update',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm update';

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
  "value": "prefix",
  "id": "prefix",
  "level": 3
}, {
  "value": "fetch_timeout",
  "id": "fetch_timeout",
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
  "value": "strict_ssl",
  "id": "strict_ssl",
  "level": 3
}, {
  "value": "registry",
  "id": "registry",
  "level": 3
}, {
  "value": "all-modules",
  "id": "all-modules",
  "level": 3
}, {
  "value": "tag-filter",
  "id": "tag-filter",
  "level": 3
}, {
  "value": "experimental-concurrently-safe",
  "id": "experimental-concurrently-safe",
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
  "value": "^ 依赖项",
  "id": "-依赖项",
  "level": 3
}, {
  "value": "~ 依赖项",
  "id": "-依赖项-1",
  "level": 3
}, {
  "value": "tag 依赖项",
  "id": "tag-依赖项",
  "level": 3
}, {
  "value": "低于 1.0.0 版本的 ^ 依赖项",
  "id": "低于-100-版本的--依赖项",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm-update",
        children: "ohpm update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新三方库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm update [options] [[<@group>/]<pkg>] ...\nalias: up\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672964)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@group：三方库的命名空间，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pkg：三方库名称，可选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据三方库及其依赖版本号的 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://semver.org/",
        children: "semver"
      }), " 规范，将本地安装的三方库更新到最新版本。若未指定三方库名称，则全量更新当前工程的依赖，且会安装缺少的三方库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "install_all",
      children: "install_all"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：all"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以在 update 命令后面配置 --all或者--install_all 参数，表示更新当前模块指定依赖成功后同时安装当前工程下的所有模块的依赖。"
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
      children: "可以在 update 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。"
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
      children: "可以在 update 命令后面配置 --ft <number>或者 --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为 60000 ms。"
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
      children: "可以在 update 命令后面配置 --mc <number> 或者 --max_concurrent <number> 参数，设置最大活动并发请求数（即 ohpm 操作期间任何时间的最大网络请求数），如果没有指定，默认最大并发请求数为 50 次。"
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
      children: "可以在 update 命令后面配置 --rt <number> 或者 --retry_times <number> 参数，设置操作失败前的最大重试次数，如果没有指定，默认最大重试次数为 1 次。"
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
      children: "可以在 update 命令后面配置 --ri <number> 或者 --retry_interval <number> 参数，设置重试失败前的等待时间，如果没有指定，默认等待时间为 1000 ms。"
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
      children: "可以在 update 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。"
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
      children: "可以在 update 命令后面配置 --registry <registry> 参数，指定仓库地址；如果没有指定，默认从配置中获取仓库地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "all-modules",
      children: "all-modules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Boolean"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 update 命令后面配置 --all-modules 参数，表示同步更新所有模块的依赖关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tag-filter",
      children: "tag-filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：Regex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 update 命令后面配置 --tag-filter <regex> 参数，表示更新以tag为规范，只更新tag符合正则表达式的依赖。使用 --tag-filter 参数默认更新所有模块的依赖关系。"
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
      children: "可以在 update 命令后面配置 --experimental-concurrently-safe 参数，并发安全地安装依赖。这是一个实验性选项。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在 update 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --lockfile_stable_order 参数，当oh-package.json5文件未变更时，当前已生成的oh-package-lock.json5各字段内容不变。"
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
      children: ["从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --odm_r2_project_root 参数，当存在overrideDependencyMap配置且其配置项对应的配置文件内存在相对路径的依赖配置时，ohpm会基于工程根路径解析来查找这些相对路径，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc#section136621053184912",
        children: "odm_r2_project_root"
      }), "。"]
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
      children: ["从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --resolve_conflict_strict 参数，ohpm会按照严格模式处理依赖版本冲突，详情参见", (0,jsx_runtime.jsx)(_components.a, {
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
      children: ["从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --resolve_conflict 参数，ohpm会自动处理依赖版本冲突，详情参见", (0,jsx_runtime.jsx)(_components.a, {
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
        children: "类型：string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --cache <string> 参数，设置缓存路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若当前三方库是 APP，且它的依赖项为：dep1 ( dep2，...)，dep1 已发布的版本有："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"dist-tags\": { \"latest\": \"1.2.2\", \"release\": \"1.2.0\" },\n  \"versions\": [\n    \"1.2.2\",\n    \"1.2.1\",\n    \"1.2.0\",\n    \"1.1.2\",\n    \"1.1.1\",\n    \"1.0.0\",\n    \"0.4.1\",\n    \"0.4.0\",\n    \"0.2.0\"\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-依赖项",
      children: "^ 依赖项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用^符号会更新到版本 x.y.z 中 y 和 z 的最新版本。如果 APP 中 oh-package.json5 文件中 dep1 的版本号为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"dependencies\": {\n  \"dep1\": \"^1.1.1\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm update 则安装 dep1@1.2.2，因为最新版本指向 1.2.2，且1.2.2 满足 ^1.1.1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-依赖项-1",
      children: "~ 依赖项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用~符号会更新到版本 x.y.z 中 z 的最新版本。如果 APP 中 oh-package.json5 文件中 dep1 的版本号为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"dependencies\": {\n  \"dep1\": \"~1.1.1\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm update 则安装 dep1@1.1.2，尽管最新版本指向 1.2.2，但 1.2.2 不满足 ~1.1.1（版本号须 1.1.1 ≤ version < 1.2.0），所以 ~1.1.1 使用满足最高排序版本，即1.1.2 ，进行更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tag-依赖项",
      children: "tag 依赖项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 tag 会更新到 tag 对应的版本。如果 APP 中 oh-package.json5 文件中 dep1 的版本号为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"dependencies\": {\n  \"dep1\": \"tag:release\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果此时 release 标签对应版本被变更为 1.2.2，ohpm update --tag-filter ^r 则会将 dep1@1.2.0 更新为 dep1@1.2.2，因为 dep1 是通过 release 标签引入，release 符合 --tag-filter 指定的 ^r 正则表达式，所以会重新获取 release 标签对应的版本 1.2.2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "低于-100-版本的--依赖项",
      children: "低于 1.0.0 版本的 ^ 依赖项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果 APP 中 dep1 依赖版本号低于 1.0.0 且带有 ^，例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"dependencies\": {\n  \"dep1\": \"^0.2.0\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm update 则安装 dep1@0.2.0，因为没有其他版本满足 ^0.2.0。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "但是 dep1 依赖版本号是 ^0.4.0："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"dependencies\": {\n  \"dep1\": \"^0.4.0\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm update 则安装 dep1@0.4.1，因为它是满足 ^0.4.0（版本号须 0.4.0 ≤ version < 0.5.0）的最高排序版本。"
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
672964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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