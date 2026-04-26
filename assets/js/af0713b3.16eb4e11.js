"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["515273"], {
952968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_dist_tags_ide_ohpm_dist_tags_md_af0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-dist-tags-ide-ohpm-dist-tags-md-af0.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_dist_tags_ide_ohpm_dist_tags_md_af0_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/ide-ohpm-dist-tags","title":"ohpm dist-tags","description":"tag可标记一个三方库的某个版本，在install时可用tag代替版本号安装包。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/ide-ohpm-dist-tags.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"ohpm dist-tags","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-dist-tags","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm clean","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean/"},"next":{"title":"ohpm convert","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-convert/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-dist-tags/ide-ohpm-dist-tags.md


const frontMatter = {
	title: 'ohpm dist-tags',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-dist-tags',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm dist-tags';

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
  "value": "子命令",
  "id": "子命令",
  "level": 2
}, {
  "value": "list",
  "id": "list",
  "level": 3
}, {
  "value": "add",
  "id": "add",
  "level": 3
}, {
  "value": "update",
  "id": "update",
  "level": 3
}, {
  "value": "remove",
  "id": "remove",
  "level": 3
}, {
  "value": "Options",
  "id": "options",
  "level": 2
}, {
  "value": "publish_id",
  "id": "publish_id",
  "level": 3
}, {
  "value": "key_path",
  "id": "key_path",
  "level": 3
}, {
  "value": "registry",
  "id": "registry",
  "level": 3
}, {
  "value": "publish_registry",
  "id": "publish_registry",
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
  "value": "log_level",
  "id": "log_level",
  "level": 3
}, {
  "value": "debug",
  "id": "debug",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm-dist-tags",
        children: "ohpm dist-tags"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tag可标记一个三方库的某个版本，在install时可用tag代替版本号安装包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm dist-tags [subcommand] [<@group>/]<pkg>[@<version>] <tag>\nalias: dist-tags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(937212)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "subcommand: 包含list、add、update、remove四个子命令。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@group: 三方库的命名空间，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pkg: 三方库名称，必选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version: 三方库的版本号，在add、update子命令时必选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tag: 标签，在add、update、remove子命令时必选。tag必须以大小写字母或数字开头，只允许包含大小写字母、数字、点号(.)、下划线(_)和中划线(-)，最大长度为60个字符。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作tag。分为查看三方库的所有tag，给三方库的某个版本添加tag，修改tag到三方库的另一个版本，删除三方库的某个tag。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333085)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"latest\"是一个预设的标签，不允许直接通过dist-tags命令来进行修改。该标签自动指向最高的正式版本；若无正式版本，则默认指向最高的先行版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以第三方库a为例，假定其版本序列包括\"1.0.1-beta\"、\"1.0.1\"和\"2.0.1-beta\"，在这种情况下，\"latest\"会自动映射到\"1.0.1\"，因为它是当前最高的正式版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子命令",
      children: "子命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "list",
      children: "list"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm dist-tags list [<@group>/]<pkg>\nalias: ls\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["列出指定三方库的所有标签。输出结果中，", (0,jsx_runtime.jsx)(_components.code, {
        children: "latest"
      }), "标签始终位于首位，其他标签按照字典序排列显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "add",
      children: "add"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm dist-tags add [<@group>/]<pkg>[@<version>] <tag>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给某个版本的三方库增加一个标签。若该三方库已存在相同标签，则添加操作将会失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update",
      children: "update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm dist-tags update [<@group>/]<pkg>[@<version>] <tag>\nalias: up\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新指定包的某个标签所对应的版本。如果指定的标签不存在，则更新操作将失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remove",
      children: "remove"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm dist-tags remove [<@group>/]<pkg> <tag>\nalias: rm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定包的一个标签。如果该标签并未存在于包中，则删除操作将会失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publish_id",
      children: "publish_id"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 dist-tags 命令后面配置 --publish_id <id> 参数，指定发布码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key_path",
      children: "key_path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 dist-tags 命令后面配置 --key_path "
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: " 参数，指定ssh私钥路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry",
      children: "registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 dist-tags 命令后面配置 --registry <registry> 参数，指定仓库地址；如果没有指定，默认从配置中获取仓库地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publish_registry",
      children: "publish_registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：\"\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 dist-tags 命令后面配置 --publish_registry <r> 参数，指定发布仓库地址。如果未指定，默认从配置中获取发布仓库地址。"
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
      children: "可以在 dist-tags 命令后面配置 --ft <number>或者 --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为60000ms。"
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
      children: "可以在 dist-tags 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在 dist-tags 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想要通过使用tag，在oh-package.json5文件中引入包@ohos/axios的1.0.0版本，步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过ohpm dist-tags的子命令add，对包@ohos/axios的1.0.0版本添加标签名beta。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm dist-tags add @ohos/axios@1.0.0 beta\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在oh-package.json5文件中，使用标签beta引入包@ohos/axios的1.0.0版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"dependencies\": {\n    // tag标签引入，引入标签为\"beta\"对应的版本号1.0.0\n    \"@ohos/axios\": \"tag:beta\"\n  }\n  ...\n  ...\n}\n"
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
333085(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
937212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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