"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["474335"], {
486506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_list_ide_ohpm_list_md_8ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-common-commands-ide-ohpm-list-ide-ohpm-list-md-8ca.json
var site_docs_ide_ohpm_cli_ide_ohpm_common_commands_ide_ohpm_list_ide_ohpm_list_md_8ca_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list/ide-ohpm-list","title":"ohpm list","description":"列出已安装的三方库。","source":"@site/docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list/ide-ohpm-list.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list","slug":"/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"ohpm list","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-list","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm install","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install/"},"next":{"title":"ohpm publish","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-publish/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-list/ide-ohpm-list.md


const frontMatter = {
	title: 'ohpm list',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-list',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm list';

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
  "value": "depth",
  "id": "depth",
  "level": 3
}, {
  "value": "json",
  "id": "json",
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
  "value": "recursive",
  "id": "recursive",
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
  "value": "示例",
  "id": "示例",
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
        id: "ohpm-list",
        children: "ohpm list"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列出已安装的三方库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm list [options] [[<@group>/]<pkg>[@<version>]]\nalias: ls\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(607348)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@group：三方库的命名空间，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pkg：三方库名称，可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version：三方库的版本号，可选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以树形结构列出当前项目安装的所有三方库信息，以及它们的依赖关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当指定三方库名称时，会列出指定三方库名称的所有父依赖；当未指定三方库名称时，默认只列出所有的直接依赖，可通过添加选项 depth 来指定要打印的依赖层级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depth",
      children: "depth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：d"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 list 命令后面配置 -d <number> 或者 --depth <number> 参数，设置输出树形结构的最大深度，超过该深度则不进行输出，不配置则取默认值 0，只展示直接依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于DevEco Studio控制台默认最多输出5000行，对于大工程建议通过 ohpm list -d <number> > fileName.txt 命令，将内容输出到指定文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638816)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若输出出现乱码问题，请执行 powershell -Command \"(Get-Content 'fileName.txt') -replace ([char]27 + '[[0-9;]*m'), ''\" > result.txt，将内容输出到result.txt文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "json",
      children: "json"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：j"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在 list 命令后面配置 -j 或者 --json 参数，以 json 格式输出当前项目安装的所有三方库信息，以及它们的依赖关系。"
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
      children: "可以在 list 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。"
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
      children: "可以在 list 命令后面配置 --pf <string> 或者 --parameterFile <string> 参数，用来指定参数化配置文件地址。使用该命令前需保证项目级别的oh-package.json5中已配置parameterFile参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recursive",
      children: "recursive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "别名：r"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHPM客户端从5.2.0版本开始，可以在 list 命令后面配置 -r 或者 --recursive 参数，以打印工程所有module安装的三方库信息，以及它们的依赖关系。"
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
      children: ["可以在 list 命令后面配置 --target_path <string> 参数，用来指定在特定目标产物target语境下各模块的依赖配置文件（oh-package.json5）的路径。在执行ohpm list时，ohpm会优先安装<target_path>/<moduleName>/oh-package.json5文件中依赖。详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install#section79331822125611",
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
      children: "从ohpm 6.0.2.636版本开始，可以在 list 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
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
      children: "从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该命令仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查看当前项目安装的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "所有"
            })
          }), "三方库及依赖关系。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm list\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结果示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(694351)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "417",
            height: "84"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查看当前项目安装的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "某个"
            })
          }), "三方库的依赖关系"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm list universalify\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结果示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(535288)/* ["default"] */.A) + "",
            width: "464",
            height: "102"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查看当前项目所有module安装的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "所有"
            })
          }), "三方库及依赖关系。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm list -r\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结果示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ". D:\\xxx\\ProjectName\n└── @ohos/hypium 1.0.6\n\nmodule1 D:\\xxx\\ProjectName\\module1\n├─┬ lib1 1.0.0\n│ ├── lib1_sub1 1.0.0\n│ └── lib1_sub2 1.0.0\n└─┬ lib2 1.0.0\n  ├── lib2_sub1 1.0.0\n  └── lib2_sub2 1.0.0\n\nmodule2 D:\\xxx\\ProjectName\\module2\n└── @ohos/lib3 1.0.0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定target_path选项时，查看当前项目所有module安装的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "所有"
            })
          }), "三方库及依赖关系。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果target_path目录下新增了module：dynamic，且module1新增了依赖：lib3，执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm list -r --target_path xxx/.hvigor/dependencyMap\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结果示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ". D:\\xxx\\ProjectName\n└── @ohos/hypium 1.0.6\n\ndynamic D:\\xxx\\ProjectName1\\dynamic // target_path引入模块\n└── @ohos/lib4 1.0.0\n\nmodule1 D:\\xxx\\ProjectName\\module1\n├─┬ lib1 1.0.0\n│ ├── lib1_sub1 1.0.0\n│ └── lib1_sub2 1.0.0\n└─┬ lib2 1.0.0\n  ├── lib2_sub1 1.0.0\n  └── lib2_sub2 1.0.0\n└── lib3 1.0.0 // target_path新增依赖\n\nmodule2 D:\\xxx\\ProjectName\\module2\n└── @ohos/lib3 1.0.0\n"
          })
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
638816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
535288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
694351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
607348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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