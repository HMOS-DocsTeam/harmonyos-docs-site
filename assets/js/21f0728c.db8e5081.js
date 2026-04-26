"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["914203"], {
403462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_expanding_ide_hvigor_plugin_ide_hvigor_plugin_md_21f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-expanding-ide-hvigor-plugin-ide-hvigor-plugin-md-21f.json
var site_docs_ide_build_expanding_ide_hvigor_plugin_ide_hvigor_plugin_md_21f_namespaceObject = JSON.parse('{"id":"ide-build-expanding/ide-hvigor-plugin/ide-hvigor-plugin","title":"开发Hvigor插件","description":"Hvigor允许开发者实现自己的插件，开发者可以定义自己的构建逻辑，并与他人共享。","source":"@site/docs/ide-build-expanding/ide-hvigor-plugin/ide-hvigor-plugin.md","sourceDirName":"ide-build-expanding/ide-hvigor-plugin","slug":"/ide-build-expanding/ide-hvigor-plugin/","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-plugin/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发Hvigor插件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-plugin","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"开发Hvigor任务","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-task/"},"next":{"title":"基础构建能力","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-expanding/ide-hvigor-plugin/ide-hvigor-plugin.md


const frontMatter = {
	title: '开发Hvigor插件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-plugin',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '开发Hvigor插件';

const assets = {

};



const toc = [{
  "value": "基于hvigorfile脚本开发",
  "id": "基于hvigorfile脚本开发",
  "level": 2
}, {
  "value": "基于typescript项目开发",
  "id": "基于typescript项目开发",
  "level": 2
}, {
  "value": "初始化typescript项目",
  "id": "初始化typescript项目",
  "level": 3
}, {
  "value": "开发插件",
  "id": "开发插件",
  "level": 3
}, {
  "value": "发布插件",
  "id": "发布插件",
  "level": 3
}, {
  "value": "使用插件",
  "id": "使用插件",
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
        id: "开发hvigor插件",
        children: "开发Hvigor插件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor允许开发者实现自己的插件，开发者可以定义自己的构建逻辑，并与他人共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor主要提供了两种方式来实现插件：基于hvigorfile脚本开发插件、基于typescript项目开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于插件开发的具体实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-custom-hvigor-plugin",
        children: "定制hvigor插件开发实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于hvigorfile脚本开发",
      children: "基于hvigorfile脚本开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于hvigorfile.ts脚本开发的方式，其优点是可实现快速开发，直接编辑工程或模块下hvigorfile.ts即可编写插件代码，不足之处是在多个项目中，无法方便地进行插件代码的复用和共享分发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.2 Beta1版本开始，在构建脚本中编写代码时，支持代码补全、代码生成、代码重构等代码编辑能力，具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-editer-overview",
        children: "代码阅读"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-completion",
        children: "代码生成/补全"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-refactoring",
        children: "代码重构"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者需要创建新的构建脚本，推荐将这些脚本统一放在工程或模块的scripts目录下，以便与应用代码进行隔离，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720907)/* ["default"] */.A) + "",
        width: "342",
        height: "410"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以工程级hvigorfile.ts脚本为例，开发步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入模块依赖，更多接口请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-apis",
            children: "扩展构建API"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 工程级hvigorfile.ts\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { HvigorPlugin, HvigorNode } from '@ohos/hvigor';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写插件代码，实现HvigorPlugin接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 工程级hvigorfile.ts\nfunction customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    apply(node: HvigorNode) {\n      // 插件主体\n      console.log('hello customPlugin!');\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在导出声明中使用插件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 工程级hvigorfile.ts\nexport default {\n  system: appTasks,\n  plugins:[\n    customPlugin()  // 应用自定义Plugin\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行Hvigor命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行Hvigor命令时，在Hvigor生命周期配置阶段执行插件中的apply方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(728531)/* ["default"] */.A) + "",
            width: "513",
            height: "133"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于typescript项目开发",
      children: "基于typescript项目开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于typescript项目开发较好地弥补了上一小节中使用hvigorfile脚本方式编写插件代码不易复用和共享分发的问题。因此通常情况下推荐此方式开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化typescript项目",
      children: "初始化typescript项目"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个空目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在命令行工具中使用cd命令进入空目录下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装typescript模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 全局安装TypeScript\nnpm install typescript -g\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化npm项目。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，根据命令行指示配置项目。初始化完成后会生成package.json文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化一个npm项目\nnpm init\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成typescript配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令生成tsconfig.json文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化typeScript配置文件\ntsc --init\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(283399)/* ["default"] */.A) + "",
            width: "205",
            height: "81"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除verbatimModuleSyntax字段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查tsconfig.json文件是否存在verbatimModuleSyntax字段，如果存在且配置为true，会导致无法使用ESM语法，编译时会报错，因此需要删除该字段。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发插件",
      children: "开发插件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置npm镜像仓库地址，用于安装@ohos/hvigor插件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程目录下创建.npmrc文件，配置如下信息："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "registry=https://repo.huaweicloud.com/repository/npm/\n@ohos:registry=https://repo.harmonyos.com/npm/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加依赖声明。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开package.json添加devDependencies配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"devDependencies\": {\n    \"@ohos/hvigor\": \"5.2.2\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令安装依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm install\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写插件代码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在src/plugin目录下创建custom-plugin.ts文件，编写插件代码，更多接口请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-apis",
            children: "扩展构建API"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import type { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    apply(node: HvigorNode) {\n      console.log('hello customPlugin!');\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导出插件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建index.ts文件，并在该文件中声明插件方法的导出。由于.ts最终会编译成.js文件，因此需要导出.js文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export { customPlugin } from './src/plugin/custom-plugin.js';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发布插件",
      children: "发布插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "typescript项目本质上是一种npm项目，插件发布流程遵循npm发布规范。详情请查询npm官方资料。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发布npm包流程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置registry。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开工程目录下的.npmrc文件，配置您需要发布的镜像仓库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "registry=[npm镜像仓库地址]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成AccessToken。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，注册并登录npm仓库，在工程目录下.npmrc文件中自动生成token信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm login\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译npm包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tsc\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果编译时报以下错误，请检查初始化项目时是否", (0,jsx_runtime.jsx)(_components.a, {
            href: "#li88369101451",
            children: "删除了verbatimModuleSyntax"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(680765)/* ["default"] */.A) + "",
            width: "1832",
            height: "207"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布npm包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行如下命令，将npm项目打包并发布至镜像仓库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm publish\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用插件",
      children: "使用插件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程下hvigor/hvigor-config.json5中添加自定义插件依赖，依赖项支持离线插件配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"dependencies\": {\n  \"custom-plugin\": \"1.0.0\"   // 添加自定义插件依赖\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装依赖。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方式1：执行编辑区右上角", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Sync"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Now"
                })
              }), "或执行菜单", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "File -> Sync and Refresh Project"
                })
              }), "进行工程Sync后，DevEco Studio将会根据hvigor-config.json5中的依赖配置自动安装。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式2：使用hvigorw命令行工具执行任一命令，命令行工具会自动执行安装构建依赖。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hvigorw --sync\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入插件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据插件编写时基于的node节点，确定导入的节点所在的hvigorfile.ts文件，在hvigorfile.ts中导入插件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { customPlugin } from 'custom-plugin';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用插件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将自定义插件添加到export default的plugins中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default {\n  system: appTasks,  // 以工程级hvigorfile.ts为例\n  plugins:[\n    customPlugin()  // 应用自定义插件\n  ]\n}\n"
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
283399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
680765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752942-a2c68b87b8df1369f4991acd536d3373.png");

},
728531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912940-618674b5183b7adbe2e55fd8ed362aa6.png");

},
720907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832859-d18bb5d25e9b6ba2b7453b571239e56a.png");

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