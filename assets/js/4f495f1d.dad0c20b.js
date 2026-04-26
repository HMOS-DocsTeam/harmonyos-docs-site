"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["691503"], {
832952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_oh_package_json_5_ide_oh_package_json_5_md_4f4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-oh-package-json-5-ide-oh-package-json-5-md-4f4.json
var site_docs_ide_ohpm_cli_ide_oh_package_json_5_ide_oh_package_json_5_md_4f4_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-oh-package-json5/ide-oh-package-json5","title":"oh-package.json5","description":"从OHPM 5.0.0版本开始，支持区分工程级与模块级oh-package.json5配置。其中：","source":"@site/docs/ide-ohpm-cli/ide-oh-package-json5/ide-oh-package-json5.md","sourceDirName":"ide-ohpm-cli/ide-oh-package-json5","slug":"/ide-ohpm-cli/ide-oh-package-json5/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-oh-package-json5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"oh-package.json5","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpmrc","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpmrc/"},"next":{"title":"ohpm config","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-oh-package-json5/ide-oh-package-json5.md


const frontMatter = {
	title: 'oh-package.json5',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'oh-package.json5';

const assets = {

};



const toc = [{
  "value": "工程级oh-package.json5 字段说明",
  "id": "工程级oh-packagejson5-字段说明",
  "level": 2
}, {
  "value": "模块级oh-package.json5字段说明",
  "id": "模块级oh-packagejson5字段说明",
  "level": 2
}, {
  "value": "兼容性字段配置示例",
  "id": "兼容性字段配置示例",
  "level": 2
}, {
  "value": "创建一个新的oh-package.json5文件",
  "id": "创建一个新的oh-packagejson5文件",
  "level": 2
}, {
  "value": "依赖配置说明",
  "id": "依赖配置说明",
  "level": 2
}, {
  "value": "overrides",
  "id": "overrides",
  "level": 2
}, {
  "value": "exclusions",
  "id": "exclusions",
  "level": 2
}, {
  "value": "配置说明",
  "id": "配置说明",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 3
}, {
  "value": "parameterFile",
  "id": "parameterfile",
  "level": 2
}, {
  "value": "基础配置示例",
  "id": "基础配置示例",
  "level": 3
}, {
  "value": "一仓多包示例",
  "id": "一仓多包示例",
  "level": 3
}, {
  "value": "overrideDependencyMap",
  "id": "overridedependencymap",
  "level": 2
}, {
  "value": "oh-exports",
  "id": "oh-exports",
  "level": 2
}, {
  "value": ".ohpmrc中projectPackageJson配置",
  "id": "ohpmrc中projectpackagejson配置",
  "level": 2
}, {
  "value": "oh-package-lock.json5",
  "id": "oh-package-lockjson5",
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
        id: "oh-packagejson5",
        children: "oh-package.json5"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHPM 5.0.0版本开始，支持区分工程级与模块级oh-package.json5配置。其中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["工程级oh-package.json5文件：位于工程根目录下，主要用来描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等，详情请见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section02162312018",
          children: "工程级oh-package.json5 字段说明"
        }), "；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["模块级oh-package.json5文件：位于工程各个模块的根目录下，用来描述包名、版本、入口文件（类型声明文件）和依赖项等信息，详情请见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#zh-cn_topic_0000001792256137_oh-packagejson5-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "模块级oh-package.json5 字段说明"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可将标准的DevEco Studio工程下的各个模块打成HAR包后，发布到OpenHarmony三方库中心仓；所有发布到仓库的包必须包含模块级oh-package.json5文件，以描述当前包基本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工程级oh-packagejson5-字段说明",
      children: "工程级oh-package.json5 字段说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段要求"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发态版本"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "modelVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发态版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "必选"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发态版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述配置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简介"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述工程信息的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "依赖配置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于配置参与编译/运行阶段使用的依赖，声明需要在代码中import的三方库（不建议在工程级oh-package.json5中配置生产依赖）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置开发态依赖，配置只能参与项目的开发或测试阶段的依赖。如果被依赖的组件最终要与依赖的组件一起发布到目标机器（如手机）上使用，则不能在其中配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dynamicDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置项目动态依赖的HSP模块。在开发者需要动态加载HSP的时候配置使用（不建议在工程级oh-package.json5中配置动态依赖）。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "overrides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖覆盖配置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持将依赖树中的包替换为另一个指定版本，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#zh-cn_topic_0000001792256137_overrides",
              children: "overrides"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "overrideDependencyMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重写依赖关系"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持将依赖树中包的子依赖替换为配置文件中配置的依赖，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section106151513236",
              children: "overrideDependencyMap"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exclusions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方依赖的子依赖排除配置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持移除第三方依赖（远程依赖、本地文件依赖）中的一个或多个子依赖，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section18586313199",
              children: "exclusions"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "其他"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义脚本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维护一个脚本别名到脚本内容的映射表，开发者可以通过ohpm run <脚本别名>来触发对应脚本内容的执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钩子"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装或卸载的钩子设置，包含 \"preInstall\"，\"postInstall\"，\"preUninstall\"，\"postUninstall\"，\"preVersion\"，\"postVersion\"，\"prePublish\"，\"postPublish\" 字段。仅支持执行当前工程中的 hooks，不支持执行依赖中的 hooks。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameterFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数化配置文件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识是否开启参数化。未配置：关闭参数化；已配置：开启参数化。需同时指定参数化配置文件路径，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section122411462820",
              children: "parameterFile"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520557)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议在工程级依赖中配置非devDependencies的依赖，即一个Hsp/Har模块的非开发态依赖都要在相应模块的dependencies和dynamicDependencies中声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块级oh-packagejson5字段说明",
      children: "模块级oh-package.json5字段说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级oh-package.json5文件位于工程各个模块的根目录下，用来描述当前模块被其他模块依赖时的相关信息，包括：作为依赖时的依赖名（name）、作为依赖时的版本号（version）、入口文件（main/types）和子依赖项等信息。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段要求"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述配置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该模块作为依赖时的依赖名，用于唯一标识该依赖。  格式为：@group/packagename或packagename，长度：[1, 128]，全局唯一，即一个应用中，不同依赖的依赖名不能重复。建议name命名时包含组织名称group，便于管理和识别三方依赖。  name中只有在存在组织名称group时，才能有且仅能有一个'@'符号，有且仅有一个路径分隔符'/'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "组织名称group格式："
              })
            }), "  1、仅允许以小写字母开头，可由小写字母、数字、中划线（-）、下划线（_）组成。  2、禁止以中划线（-）、下划线（_）结尾。  3、不允许为ArkTS 的保留关键字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "packagename格式："
              })
            }), "  1、仅允许以小写字母开头，可由小写字母、数字、点（.）、中划线（-）、下划线（_）组成。  2、禁止以点（.）、中划线（-）、下划线（_）结尾。  3、不允许为ArkTS的保留关键字。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0.0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该模块构建产物（HAR/HSP）的版本号。  规范：采用X.Y.Z（主版本.次版本.修订号）三段式结构，遵循 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://semver.org/",
              children: "semver"
            }), " 语义化规范，从1.0.0开始。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简介"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述该模块构建产物（HAR/HSP）的信息，有助于被搜索发现。长度范围为0-512字符。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keywords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键字信息数组，便于搜索使用。例如：[\"tools\", \"project\"]。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "author"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作者"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象或字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["author包含 name 字段（必选）、 email 字段（可选）、url字段（可选），可通过格式对象或字符串格式配置。  name字段允许使用字母、数字，点（.），中划线（-），下划线（_），空格，中文。   - 对象格式：\"author\": {\"name\": \"xxx\" , \"email\": \"***@example.com\" , \"url\": \"", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxx.com\""
            }), " }。 - 字符串格式：\"author\": \"name<***@example.com>(", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxx.com"
            }), ")\"。   仅发布到", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://ohpm.openharmony.cn/",
              children: "OpenHarmony三方库中心仓"
            }), "时，必须填写，其他场景可选填。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "homepage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主页链接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通常是项目gitee链接。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仓库地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源代码仓库地址。在私仓管理界面的系统设置处可定义是否为必填。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "license"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开源协议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"ISC\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前项目的开源许可证。遵循 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://spdx.org/licenses/",
              children: "spdx license"
            }), " 规范。许可证若为 GPL，repository 建议不为空。  仅发布开源三方库到", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://ohpm.openharmony.cn/",
              children: "OpenHarmony三方库中心仓"
            }), "时，必须填写，其他场景可选填。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "依赖配置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于配置参与编译/运行阶段使用的依赖，声明需要在代码中import的三方库（参与编译/运行阶段使用的依赖）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于配置开发态依赖，只能参与项目的开发或测试阶段。如果被依赖的组件最终要与依赖的组件一起发布到目标机器（手机）上使用，则不能在其中配置。通过devDependencies引入的依赖，不校验循环依赖。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dynamicDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态依赖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于配置项目动态依赖的HSP模块。在开发者需要动态加载HSP的时候配置使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "文件配置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定加载的入口文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定类型定义的文件名。当用 typescript 定义新的类型，需要提供给其他开发者使用，则需要指定其声明文件，一般为 .d.ts，.d.ets 文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oh-exports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制导出模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过oh-exports字段控制导出模块中文件，实现包的可见性控制。支持导出目录文件（导出时不校验文件，全量导出目录内容）和特定后缀文件（ets/ts/js）。详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section203908482324",
              children: "oh-exports"
            }), "配置示例。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "兼容性检测相关配置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "compatibleSdkVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK版本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方库开发者使用的SDK版本，构建时由Hvigor自动填充，提供给SDK做兼容性检测。  在prepublish、publish时，ohpm会对该字段进行检测（非空和长度校验），并根据.ohpmrc中开关 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-ohpmrc#section96369529419",
              children: "compability_log_level"
            }), "配置的值进行提示或报错处理。  详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section194621247204911",
              children: "兼容性字段配置示例"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compatibleSdkType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方库开发者使用的SDK类型，构建时由Hvigor自动填充，提供给SDK做兼容性检测, 示例值：\"OpenHarmony\"、\"HarmonyOS\"。  在prepublish、publish时，ohpm会对该字段进行检测（非空和长度校验），并根据.ohpmrc中开关 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-ohpmrc#section96369529419",
              children: "compability_log_level"
            }), "配置的值进行提示或报错处理。  详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section194621247204911",
              children: "兼容性字段配置示例"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "obfuscated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混淆标识"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方库是否开启混淆标识，构建时由Hvigor自动填充，提供给SDK做兼容性检测。  在prepublish、publish时，ohpm会对该字段进行检测（非空校验），并根据.ohpmrc中开关 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-ohpmrc#section96369529419",
              children: "compability_log_level"
            }), "配置的值进行提示或报错处理。  详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section194621247204911",
              children: "兼容性字段配置示例"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nativeComponents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native so依赖配置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方库使用的so包配置，构建时由Hvigor自动填充，提供给SDK做兼容性检测。  对于用户自行引入的so依赖（存放于libs目录），需要用户手动维护该数组，数组单个元素类型为对象，对象内可配置的字段有：name、compatibleSdkVersion、compatibleSdkType。  在prepublish、publish时，如果包内存在so包，则ohpm会对该字段进行检测，并根据.ohpmrc中开关 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-ohpmrc#section96369529419",
              children: "compability_log_level"
            }), " 配置的值进行提示或报错处理；反之则不检测该字段。  详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section194621247204911",
              children: "兼容性字段配置示例"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "其他"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "artifactType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"original\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenHarmony包制品类型，有两个选项：original、obfuscation。original：源码，即发布源码（.ts/.ets）；obfuscation：混淆代码，即源码经过混淆之后发布上传。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义脚本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维护一个脚本别名到脚本内容的映射表，开发者可以通过ohpm run <脚本别名>来触发对应脚本内容的执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钩子"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装或卸载的钩子设置，包含 \"preInstall\", \"postInstall\", \"preUninstall\", \"postUninstall\",\"preVersion\", \"postVersion\", \"prePublish\", \"postPublish\" 字段。仅支持执行当前工程中的 hooks，不支持执行依赖中的 hooks。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查规则白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在私仓管理界面配置后自动生成，白名单为分号隔开的字符串列表，每个列表项必须是一个由大小写字母或下划线组成的字符串，包含在白名单中的配置项，不再做规则检查。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "packageType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InterfaceHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识模块是否为HSP包，在新建Shared Library时会自动生成该字段，并默认赋值为\"InterfaceHar\"；Static Library中没有该字段，表示为普通HAR包。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(633838)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "依赖名使用要求："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、在oh-package.json5文件中dependencies、devDependencies、dynamicDependencies节点声明本地依赖时，允许配置的依赖名和依赖包的包名（即包内oh-package.json5中配置的name）不一致，但不推荐该用法，在默认情况下ohpm会通过告警日志来提示此类问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若希望将告警升级为报错并中断命令执行，可以通过在.ohpmrc中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc#section920325116547",
        children: "enforce_dependency_key"
      }), "=true；或在项目级", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
        children: "build-profile.json5"
      }), "文件中将strictMode字段下配置useNormalizedOHMUrl=true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section122411462820",
        children: "参数化配置"
      }), "时，依赖名和依赖包的包名（即包内oh-package.json5中配置的name）必须保持一致，否则会报错并中断命令执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、在oh-package.json5、overrideDependencyMap、parameterFile文件中，不建议使用无效的转义字符（例如：\\a、\\e、\\o等）或Unicode编码（例如：\\uxxxx）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "兼容性字段配置示例",
      children: "兼容性字段配置示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "三方库开发者使用的SDK和当前集成该三方库工程编译时使用的SDK可能存在不一致的情况。因此，ohpm新增了兼容性检测相关配置以帮助SDK做兼容性分析。配置示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"library\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"liblibrary.so\": \"file:./src/main/cpp/types/liblibrary\"\n  },\n  \"compatibleSdkVersion\": \"12\",\n  \"compatibleSdkType\": \"HarmonyOS\",\n  \"obfuscated\": false,\n  \"nativeComponents\": [\n    {\n      \"name\": \"liblibrary.so\",\n      \"compatibleSdkVersion\": \"12\",\n      \"compatibleSdkType\": \"HarmonyOS\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建一个新的oh-packagejson5文件",
      children: "创建一个新的oh-package.json5文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过命令行创建 oh-package.json5文件，执行如下命令："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导航到包的目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cd /path/to/package\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行初始化命令，并按照问卷填写相关参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对无命名空间模块，执行以下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ohpm init\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对有命名空间模块，执行以下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ohpm init --group group_name\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若跳过问卷填写，创建默认文件，可在初始化命令行加上配置参数 --yes。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ohpm init --yes\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认创建的oh-package.json5 文件示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n \"name\": \"package_name\",\n \"version\": \"1.0.0\",\n \"description\": \"\",\n \"main\": \"index.ts\",\n \"author\": \"\",\n \"license\": \"ISC\",\n \"dependencies\": {}\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "依赖配置说明",
      children: "依赖配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm 存在 dependencies，devDependencies和dynamicDependencies 三种依赖类型。同时支持具体版本号，范围版本号，tag标签，本地har/tgz文件路径、本地源码目录和使用@module通过模块名指向模块目录（示例：\"module_key\": \"@module:module_name\"）多种方式引入依赖。当依赖的三方库版本号配置为 * 时，表示当前依赖的包版本为该三方库的最新包版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290933)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、从DevEco Studio 6.0.0 Beta1开始支持@module配置方式；从DevEco Studio 6.0.2 Beta1开始，通过devDependencies引入的依赖，不校验循环依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、@module配置中，module_name必须在project/build-profile.json5文件或者project/.hvigor/dependencyMap/dependencyMap.json5（hvigor生成）文件的modules节点下存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、@module配置中，module_key需和\"@module:module_name\"指向的模块目录下oh-package.json5文件中配置的name一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dependencies：生产依赖，即参与编译/运行阶段使用的依赖，用来定义生产态HAR/HSP包依赖，声明在代码中被 import的三方库。如果被依赖的组件最终要与依赖的组件一起发布到目标机器（手机）上使用，则必须配置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "devDependencies：开发态依赖，只能参与项目的开发或测试阶段的依赖。如果被依赖的组件最终要与依赖的组件一起发布到目标机器（如手机）上使用，则不能配置在该字段中。通过devDependencies引入的依赖，不校验循环依赖。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["dynamicDependencies：动态依赖，用来配合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import",
            children: "动态import"
          }), "，表达动态 import 使用的HSP 包依赖。动态依赖不会在加载时就被编译，而是根据条件导入模块或者按需导入模块，具有更高效的依赖加载速度。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "依赖配置示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    // 具体版本号引入，支持符合semver标准的版本号\n    \"specific_version\": \"1.0.0\",\n\n    // 范围版本号引入，^引入1.x.x的最新版本，~引入1.0.x的最新版本。范围版本优先选取正式版本，无匹配的正式版本才会选取先行版本\n    \"scope_version\": \"^1.0.1\",\n\n    // tag标签引入，示例引入标签为\"beta\"对应的版本号\n    \"tag_version\": \"tag:beta\",\n\n    // 本地文件引入，可引入本地har/tgz文件\n    \"local_file\": \"file:./xx.har\",\n\n    // 本地源码引入，可引入本地其他模块的源码，示例直接引入本地的\"module1\"模块\n    \"local_source_code\": \"file:../module1\"\n\n    // 项目存在Foo模块，即build-profile.json5文件或dependencyMap.json5文件中modules节点下存在名称为Foo的模块；该模块Foo的oh-package.json5中name为：foo_test\n    \"foo_test\": \"@module:Foo\"\n  },\n  \"devDependencies\": {\n    // 支持依赖引入类型同dependencies\n  },\n  \"dynamicDependencies\": {\n    // 支持依赖引入类型同 dependencies\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "devDependencies引入的依赖，不校验循环配置示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下oh-package.json5配置所示，模块ma通过配置dependencies依赖模块mb，同时模块mb通过配置devDependencies依赖模块ma，进而构造成循环依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模块ma的oh-package.json5\n{\n  \"name\": \"ma\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"author\": \"\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"mb\": \"../mb\"\n  }\n}\n\n// 模块mb的oh-package.json5\n{\n  \"name\": \"mb\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"author\": \"\",\n  \"license\": \"Apache-2.0\",\n  \"devDependencies\": {\n    \"ma\": \"../ma\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overrides",
      children: "overrides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm客户端在1.4.0版本开始支持Override机制，可以在项目级别的oh-package.json5（即项目根目录下的oh-package.json5）文件中添加overrides配置，方便将依赖树中的依赖替换为另一个版本。替换的版本可以是一个具体的版本号或模糊版本、本地存在的HAR包或源码目录、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section122411462820",
        children: "parameterFile"
      }), "配置（示例：\"foo\": \"@param:dependencies.foo\"），也可以使用@module通过模块名指向模块目录（示例：\"module_key\": \"@module:module_name\"）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，想要确保foo始终安装1.0.0版本，可以在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "项目级"
        })
      }), "的oh-package.json5中增加如下配置："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189400)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overrides必须配置在项目级别的oh-package.json5中，配置在模块级别的oh-package.json5中将不会生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 6.0.0 Beta1开始支持@module配置方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@module配置中module_name必须在project/build-profile.json5文件或者project/.hvigor/dependencyMap/dependencyMap.json5（hvigor生成）文件的modules节点下存在，否则报错处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@module配置中，module_key需和\"@module:module_name\"指向的模块目录下oh-package.json5文件中配置的name一致，否则报错处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"overrides\": {\n    \"foo\": \"1.0.0\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若本地存在foo的源码、HAR包或者@module配置，想确保foo始终使用您本地的版本，可以在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "项目级"
        })
      }), "的oh-package.json5中如下配置："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n   \"overrides\": {\n      // 项目存在Foo模块，即build-profile.json5文件或dependencyMap.json5文件中modules节点下存在名称为Foo的模块；该模块Foo的oh-package.json5中name为：foo_test\n      // \"foo_test\": \"@module:Foo\"\n      // 本地存在\"foo\"的源码目录，如项目根目录下的foo目录\n      // \"foo\": \"file:./foo\" \n      // 本地存在\"foo\"的HAR文件，如项目根目录下的libs目录中的foo.har\n      \"foo\": \"file:./libs/foo.har\"\n   }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exclusions",
      children: "exclusions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm客户端在5.3.0版本开始支持exclusions机制，可以在项目级oh-package.json5（即项目根目录下的oh-package.json5）文件中添加exclusions配置，即可实现移除第三方依赖（远程依赖、本地文件依赖）中的一个或多个子依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置说明",
      children: "配置说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置格式"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// key: value形式配置\n\"[@group/]libname[@spec]\" : ['exclude_sub_libname']\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "配置key部分：[@group/]libname[@spec]，代表需要做子依赖排除的依赖名称及其版本，'[]'代表该内容为可选配置。当依赖没有组织名称时，[@group/]部分可不配置；当不需要精确匹配具体版本号或具体某个本地文件依赖时，[@spec]部分可不配置；spec可以是一个具体的版本号、本地文件路径（支持相对路径和绝对路径，配置为相对路径时指相对于项目根路径）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "配置value部分，['exclude_sub_libname']是一个字符串数组，可配置多个，代表需要被排除的子依赖名称列表。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置示例"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"exclusions\": {\n    \"@ohos/lib1@1.0.0\": ['@ohos/sub_lib1']      // 排除远程依赖@ohos/lib1的子依赖：@ohos/sub_lib1\n    \"@ohos/lib2@./lib2.har\": ['@ohos/sub_lib2'] // 排除本地文件依赖@ohos/lib2的子依赖：@ohos/sub_lib2\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置约束\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "exclusions必须配置在项目级别的oh-package.json5中，配置在模块级别的oh-package.json5中将不会生效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "exclusions配置只能移除远程依赖、本地文件依赖的子依赖，对源码依赖不生效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "exclusions只能移除dependencies、dynamicDependencies下配置的依赖。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["exclusions中配置的key不能和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section106151513236",
              children: "overrideDependencyMap"
            }), "中配置的key一致，否则报配置冲突错误并中断程序。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自动解决依赖版本冲突功能开启（.ohpmrc中resolve_conflict=true）后，如果exclusions配置中配置项指定了spec，但spec对应的依赖在版本决策中被移除时，exclusions配置将不会生效；建议该场景下不要配置spec部分。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面演示如何移除远程依赖或本地文件依赖的oh-package.json5中dependencies、dynamicDependencies下配置的依赖。示例中以<project>代表项目根路径进行说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、模块级oh-package.json5内容如下，将安装依赖@ohos/lib1、@ohos/lib2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",  \n  \"dependencies\": {\n    \"@ohos/lib1\": \"1.0.0\" // 远程依赖\n    \"@ohos/lib2\": \"file:../lib2.har\" // 本地文件依赖\n  }\n}\n\n// @ohos/lib1的oh-package.json5配置\n{\n  \"name\": \"@ohos/lib1\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",  \n  \"dependencies\": {\n    \"@ohos/lib1_sub1\": \"1.0.0\" // 子依赖1\n    \"@ohos/lib1_sub2\": \"2.0.0\" // 子依赖2\n  }\n}\n\n// @ohos/lib2的oh-package.json5配置\n{\n  \"name\": \"@ohos/lib2\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",  \n  \"dependencies\": {\n    \"@ohos/lib2_sub1\": \"1.0.0\" // 子依赖1\n    \"@ohos/lib2_sub2\": \"2.0.0\" // 子依赖2\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、项目级oh-package.json5内容如下，添加exclusions配置，其中lib2.har放置在项目根目录下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"modelVersion\": \"6.1.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"exclusions\": {\n    \"@ohos/lib1@1.0.0\": ['@ohos/lib1_sub1'],  // 排除远程依赖@ohos/lib1的子依赖：@ohos/lib1_sub1\n    \"@ohos/lib2@./lib2.har\": ['@ohos/lib2_sub2'] // 排除本地文件依赖@ohos/lib2的子依赖：@ohos/lib2_sub2\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、执行ohpm安装命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm install --all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、ohpm安装完成后，在entry目录下执行：ohpm list -d 10，打印依赖结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "entry 1.0.0 <project>\\entry\n├─┬ @ohos/lib1 1.0.0\n│ └── @ohos/lib1_sub2 1.0.0 // 安装了子依赖@ohos/lib1_sub2,@ohos/lib1_sub1已被排除\n├─┬ @ohos/lib2 <project>\\lib2.har\n  └── @ohos/lib2_sub1 1.0.0 // 安装了子依赖@ohos/lib2_sub1,@ohos/lib2_sub2已被排除\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parameterfile",
      children: "parameterFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHPM新增了参数化配置功能。开发者可在项目根目录配置一个参数化文件（json5格式文件），在该文件中维护模块或依赖版本信息，不同模块将根据该文件中的版本进行配置，满足不同构建场景下，开发者快速切换依赖版本的需要。同时，支持通过命令行指定参数化文件，降低流水线场景下模块和依赖版本的变更难度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHPM客户端在1.6.0版本开始支持参数化配置。可以在项目级别的oh-package.json5文件（即项目根目录下的oh-package.json5）中添加parameterFile配置，并同时指定parameterFile文件路径。配置规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile文件路径支持配置相对路径，并以项目根目录为起点，如：\"parameterFile\": \"./parameterFile.json5\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置文件内容采用json5格式，支持多层json对象嵌套；"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参数化key支持的字符与包名一致，请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#zh-cn_topic_0000001792256137_oh-packagejson5-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "模块级oh-package.json5字段说明"
        }), "中name字段要求，大小写敏感；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参数化value类型为是\"string\"或\"object\"。 value类型为string时，可以是符合", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://semver.org/",
          children: "semver规范"
        }), "的版本号，也可以使用本地相对路径（相对于parameterFile文件所在目录）或本地绝对路径。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436236)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile字段必须配置在项目级别的oh-package.json5中，否则将不会生效或产生报错提示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile配置文件位置可以通过命令行选项'-pf <string>' 或 '--parameterFile <string>'指定，但必须先在项目级别oh-package.json5中配置parameterFile字段，否则会报错提示；支持该选项的命令有：install、list、version。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile字段配置后，不允许执行update命令、uninstall命令和指定包名安装（如：'ohpm i <pkg>'）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parameterFile文件路径大小写不敏感，不建议通过大小写来区分不同的配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "oh-package.json5中支持参数化的字段有：version、dependencies、devDependencies和dynamicDependencies、overrides，未列举的字段均不支持参数化配置。overrides从DevEco Studio 6.0.0 Beta1开始支持参数化配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础配置示例",
      children: "基础配置示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程级oh-package.json5示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"modelVersion\": \"6.1.0\",\n  \"description\": \"Please describe the project information.\",\n   ...\n  \"parameterFile\": './parameterFile/parameterFile.json5', // 开启参数化并指定参数化配置文件路径\n  \"overrides\": {\n    \"libtest1\": \"@param:dependencies.libtest1\", // 所有依赖名称为：libtest1的版本会被替换为：1.0.1\n    \"libnative\": \"@param:dependencies.libnative\" // 所有依赖名称为：libnative的版本会被替换为：libnative源码依赖路径  \n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级oh-package.json5示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"parameter-test\",\n  \"version\": \"@param:version\", //使用时必须以 '@param:' 开头\n  \"description\": \"test desc.\",\n  \"main\": \"index.ets\",\n  \"author\": \"test author\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"libtest1\": \"@param:dependencies.libtest1\"\n  },\n  \"devDependencies\": {\n    \"libtest2\": \"@param:devDependencies.libtest2\"\n  },\n  \"dynamicDependencies\": {\n    \"libtest3\": \"@param:dynamicDependencies.libtest3\"\n  }\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parameterFile所指向文件的配置示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"libtest1\": \"1.0.1\",\n    \"libnative\": \"../libnative\" // 相对于parameterFile配置文件所在目录\n  },\n  \"devDependencies\": {\n    \"libtest2\": \"*\"\n  },\n  \"dynamicDependencies\": {\n    \"libtest3\": \"latest\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一仓多包示例",
      children: "一仓多包示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个代码仓有多个har/hsp模块，发包时，一般需要开发者手动修改所有模块的版本号后再打包发布，若模块较多，操作繁琐且效率低下，建议使用参数化配置解决该问题，详细示例如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当所有模块版本不一致"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下工程结构所示，所有模块的oh-package.json5中version字段均配置参数化版本（'@param:'开头部分），不同模块的版本均不一致，但都由参数化配置文件'parameter.json'全局统一管理；发包前，只需修改'parameter.json'文件中相关模块的版本，再构建所有模块即可；打包构建时，所有模块的参数化版本均会被替换为'parameter.json'中配置的具体版本（如：@param:har1会被替换为：1.0.0）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AppTest\n└── har1(模块)\n    └── oh-package.json5\n        └── \"version\": \"@param:har1\"\n└── har2(模块)\n    └── oh-package.json5\n        └── \"version\": \"@param:har2\"\n... harn(模块)\n    └── oh-package.json5\n        └── \"version\": \"@param:harn\"\n└── oh-package.json5 \n    └── \"parameterFile\": \"./parameter.json\"    \n└── parameter.json(参数化配置文件)\n    └── \"har1\": \"1.0.0\"\n    └── \"har2\": \"2.0.0\"\n    ...\n    └── \"harn\": \"n.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当所有模块版本一致"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下工程结构所示，所有模块均使用同一个参数化版本（@param:module_version），发包前，只需修改'parameter.json'中module_version的值，再构建所有模块即可；打包构建时，所有模块的参数化版本均会被替换为'parameter.json'中module_version对应的版本（如：@param:module_version会被替换为：1.0.0）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AppTest\n└── har1(模块)\n    └── oh-package.json5\n        └── \"version\": \"@param:module_version\"\n└── har2(模块)\n    └── oh-package.json5\n        └── \"version\": \"@param:module_version\"\n... harn(模块)\n    └── oh-package.json5\n        └── \"version\": \"@param:module_version\"\n└── oh-package.json5 \n    └── \"parameterFile\": \"./parameter.json\" \n└── parameter.json(参数化配置文件)\n    └── \"module_version\": \"1.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overridedependencymap",
      children: "overrideDependencyMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHPM客户端在1.7.0版本开始支持使用overrideDependencyMap机制重写源码模块或三方库的依赖关系。开发者可在工程级oh-package.json5文件中新增overrideDependencyMap配置，在该配置对象中通过key-value形式配置依赖关系重写文件；其中，key为依赖标识符，value为依赖关系重写文件路径。在依赖安装时， ohpm会将依赖树中的某个依赖节点的所有直接子依赖替换为对应依赖关系重写文件中配置的依赖项，依赖关系重写文件中支持配置的依赖类型为dependencies、devDependencies、dynamicDependencies，通过使用overrideDependencyMap机制，可以满足开发者在不同场景下，动态变更依赖的需求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时，支持在.ohpmrc中使用projectPackageJson配置项来覆盖项目根目录下oh-package.json5中的配置，方便开发者快速切换配置，详情见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-ohpmrc",
        children: "ohpmrc"
      }), "中projectPackageJson配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置格式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"[@group/]libname[@version]\" : \"config_path\"，其中 [@group/]libname[@version] 为依赖标识符key, config_path为配置文件路径value。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"overrideDependencyMap\": {\n  \"@group/libname\": \"dep-test.json5\" \n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置约束"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "overrideDependencyMap必须配置在工程级oh-package.json5中，配置在模块级oh-package.json5中将不会生效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "key中@version部分可选，未指定@version时，替换所有名称为@group/libname的依赖的直接子依赖；指定@version时，替换所有名称为@group/libname且版本为version的依赖的直接子依赖，同时，version需符合semver规范，不支持tags标签、范围版本号。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "value是一个json5文件路径，文件内只支持配置：dependencies、devDependencies、dynamicDependencies。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "value对应的文件路径只支持绝对路径，配置为相对路径时，需要手动设置.ohpmrc文件中odm_r2_project_root=true, 此时，相对路径会从项目根目录为起点开始解析。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "overrideDependencyMap场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块entry下oh-package.json5配置了一个远程包依赖libbase，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"main\": \"Index.ets\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"libbase\": \"1.0.0\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块级oh-package.json5文件内容，依赖项libbase中存在一个子依赖lib1，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"libbase\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"Index.ets\",\n  \"author\": \"\",\n  \"license\": \"Apache-2.0\",\n  \"dependencies\": {\n    \"lib1\": \"1.0.0\" //子依赖\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "项目根目录oh-package.json5内容，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"overridedependencymaptest\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"overrideDependencyMap\": {      \n    \"libbase\": \"D:\\\\overrideDependencyMapTest\\\\dep-debug.json5\" //overrideDependencyMap依赖替换配置，可配置多条\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置文件dep-debug.json5中依赖配置如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": { // 详细依赖配置\n    \"lib1\": \"2.0.0\",\n    \"log4js\": \"2.0.0\"\n  },\n  \"devDependencies\": {\n  },\n  \"dynamicDependencies\": {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "entry模块下执行：ohpm i, 由于entry下依赖了libbase，而libbase在overrideDependencyMap有配置，此时会使用dep-debug.json5文件内的依赖覆盖libbase的dependencies、devDependencies、dynamicDependencies节点，最终，entry模块会安装libbase、lib1、log4js（无overrideDependencyMap配置覆盖时，只会安装：libbase、lib1）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "entry list结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry 1.0.0 D:\\overrideDependencyMapTest\\entry\n└── libbase 1.0.0\n    └── lib1 2.0.0\n    └── log4js 2.0.0\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh-exports",
      children: "oh-exports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ohpm 6.1.1.816版本开始，支持通过oh-exports字段控制导出模块中文件，实现包的可见性控制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"oh-exports\": [\n    'src',\n    './src',\n    'src/main',\n    'src/main/ets/components/MainPage1.ets',\n    'src/main/ets/components/MainPage2.ts'\n    'src/main/ets/components/MainPage2.js'\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置约束"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "oh-exports为选填字段，字段值为字符串数组。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "oh-exports配置的值为目录的相对路径或者特定文件的相对路径，不支持特殊字符和通配符。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持的命令行：publish、prepublish。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohpmrc中projectpackagejson配置",
      children: ".ohpmrc中projectPackageJson配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过在.ohpmrc文件中配置projectPackageJson，可同时实现对overrides、overrideDependencyMap字段配置的效果，替换项目级oh-package.json5文件中相应的配置，方便开发者在不同使用场景下快速切换使用。配置格式及使用约束如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置格式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "projectPackageJson:<project_root>=<config_path>, 其中 projectPackageJson:<project_root> 部分视做key, config_path 部分视做value。配置key指定项目根目录路径（绝对路径），配置value指定json5格式配置文件路径用以覆盖项目级oh-package.json5中的配置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "projectPackageJson:D:\\test\\TestProject=projectPackageJson.json5"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置约束"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "key必须以 'projectPackageJson:' 开头；project_root表示项目根路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "value对应json5文件内只支持配置：overrides、overrideDependencyMap，不支持 parameterFile（编辑器和编译器无法识别）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对同一个project_root，如存在多条projectPackageJson配置路径，仅最后一条会生效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "value对应的文件路径支持绝对路径和相对路径，配置为相对路径时，从项目根目录为起点开始解析。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面演示在.ohpmrc中配置同一工程的不同环境下的projectPackageJson配置，当配置生效时，会直接覆盖项目级oh-package.json5中对应配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目级或用户级.ohpmrc中增加2条配置，分别对应开发、Release环境，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "registry=http://localhost:8088/repos/ohpm\nlog_level=debug\nstrict_ssl=false\nprojectPackageJson:D:\\overrideDependencyMapTest=oh-pkg-debug.json5 //debug环境配置\nprojectPackageJson:D:\\overrideDependencyMapTest=oh-pkg-release.json5 //release环境配置，.ohpmrc中存在同一工程的多条配置时默认按配置先后顺序取最后一条，即当前配置生效\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件oh-pkg-release.json5配置，新增了一条依赖libbase的配置，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"overrideDependencyMap\": {\n    \"libbase\": \"D:\\\\overrideDependencyMapTest\\\\dep-release.json5\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Release环境下libbase的依赖替换文件dep-release.json5中依赖配置如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"lib1\": \"1.0.0\",\n    \"lib2\": \"2.0.0\",\n    \"lib3\": \"3.0.0\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section106151513236",
            children: "overrideDependencyMap场景示例"
          }), " 工程，在entry模块下执行：ohpm i，此时，在ohpm运行时中会将项目级oh-package.json5中的配置会变更为："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"overridedependencymaptest\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"overrideDependencyMap\": {\n    \"libbase\": \"D:\\\\overrideDependencyMapTest\\\\dep-release.json5\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最终安装结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry 1.0.0 D:\\overrideDependencyMapTest\\entry\n└── libbase 1.0.0\n    └── lib1 1.0.0\n    └── lib2 2.0.0\n    └── lib3 3.0.0\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh-package-lockjson5",
      children: "oh-package-lock.json5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "oh-package-lock.json5用于锁定所有依赖的版本，以及缓存依赖的元数据信息。不建议开发者手动修改该文件的内容，也不建议开发者使用其他分析工具直接读取该文件的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议将oh-package-lock.json5文件提交到代码仓库中进行版本管理。优点如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保构建可复现： oh-package-lock.json5文件记录了三方包安装时确切的依赖树，其中包括每个依赖的版本、子依赖及其版本等详细信息。将该文件提交到代码仓库，能够确保团队成员、持续集成（CI）服务器或其他任何克隆该项目的用户，在执行ohpm install时可以获得完全一致的依赖版本，从而保证项目的可复现构建。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提高安装速度： ohpm在安装依赖时，会优先使用oh-package-lock.json5锁定的版本信息，避免重新解析依赖版本，有效地加快安装过程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全性： 通过锁定依赖版本，oh-package-lock.json5可以帮助防止因上游依赖更新引入的安全漏洞。当发现依赖存在安全问题时，可以针对性地更新特定依赖版本，并将更新后的oh-package-lock.json5提交到仓库，确保所有使用者都获取到修复后的版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "便于协同工作： 当团队成员在项目中添加、更新或删除依赖时，他们应运行ohpm update以更新oh-package-lock.json5。提交这些变更到仓库，可以让其他成员了解到依赖的变化，并在拉取最新代码后自动获取正确的依赖版本。"
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
633838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
436236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
189400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
520557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
290933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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