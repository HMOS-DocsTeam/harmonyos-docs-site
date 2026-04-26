"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["102668"], {
618268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_expanding_ide_hvigor_apis_ide_build_expanding_context_ide_build_expanding_context_md_01b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-expanding-ide-hvigor-apis-ide-build-expanding-context-ide-build-expanding-context-md-01b.json
var site_docs_ide_build_expanding_ide_hvigor_apis_ide_build_expanding_context_ide_build_expanding_context_md_01b_namespaceObject = JSON.parse('{"id":"ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/ide-build-expanding-context","title":"插件上下文","description":"OhosPluginId","source":"@site/docs/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/ide-build-expanding-context.md","sourceDirName":"ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context","slug":"/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"插件上下文","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-expanding-context","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"基础构建能力","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/"},"next":{"title":"API使用示例","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/ide-build-expanding-context.md


const frontMatter = {
	title: '插件上下文',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-expanding-context',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '插件上下文';

const assets = {

};



const toc = [{
  "value": "OhosPluginId",
  "id": "ohospluginid",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "OhosAppContext",
  "id": "ohosappcontext",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-1",
  "level": 3
}, {
  "value": "getProjectName",
  "id": "getprojectname",
  "level": 3
}, {
  "value": "getProjectPath",
  "id": "getprojectpath",
  "level": 3
}, {
  "value": "getBuildRootPath",
  "id": "getbuildrootpath",
  "level": 3
}, {
  "value": "getBuildProductOutputPath",
  "id": "getbuildproductoutputpath",
  "level": 3
}, {
  "value": "getCurrentProduct",
  "id": "getcurrentproduct",
  "level": 3
}, {
  "value": "getBuildMode",
  "id": "getbuildmode",
  "level": 3
}, {
  "value": "getAppJsonOpt",
  "id": "getappjsonopt",
  "level": 3
}, {
  "value": "setAppJsonOpt",
  "id": "setappjsonopt",
  "level": 3
}, {
  "value": "getBuildProfileOpt",
  "id": "getbuildprofileopt",
  "level": 3
}, {
  "value": "setBuildProfileOpt",
  "id": "setbuildprofileopt",
  "level": 3
}, {
  "value": "getOhpmDependencyInfo",
  "id": "getohpmdependencyinfo",
  "level": 3
}, {
  "value": "getOhpmRemoteHspDependencyInfo",
  "id": "getohpmremotehspdependencyinfo",
  "level": 3
}, {
  "value": "getDependenciesOpt",
  "id": "getdependenciesopt",
  "level": 3
}, {
  "value": "setDependenciesOpt",
  "id": "setdependenciesopt",
  "level": 3
}, {
  "value": "getDevDependenciesOpt",
  "id": "getdevdependenciesopt",
  "level": 3
}, {
  "value": "setDevDependenciesOpt",
  "id": "setdevdependenciesopt",
  "level": 3
}, {
  "value": "getDynamicDependenciesOpt",
  "id": "getdynamicdependenciesopt",
  "level": 3
}, {
  "value": "setDynamicDependenciesOpt",
  "id": "setdynamicdependenciesopt",
  "level": 3
}, {
  "value": "getOverrides",
  "id": "getoverrides",
  "level": 3
}, {
  "value": "setOverrides",
  "id": "setoverrides",
  "level": 3
}, {
  "value": "getSdkDetails",
  "id": "getsdkdetails",
  "level": 3
}, {
  "value": "OhosHapContext",
  "id": "ohoshapcontext",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-2",
  "level": 3
}, {
  "value": "getModuleName",
  "id": "getmodulename",
  "level": 3
}, {
  "value": "getModulePath",
  "id": "getmodulepath",
  "level": 3
}, {
  "value": "getModuleType",
  "id": "getmoduletype",
  "level": 3
}, {
  "value": "getBuildProductRootPath",
  "id": "getbuildproductrootpath",
  "level": 3
}, {
  "value": "targets",
  "id": "targets",
  "level": 3
}, {
  "value": "getBuildMode",
  "id": "getbuildmode-1",
  "level": 3
}, {
  "value": "getModuleJsonOpt",
  "id": "getmodulejsonopt",
  "level": 3
}, {
  "value": "setModuleJsonOpt",
  "id": "setmodulejsonopt",
  "level": 3
}, {
  "value": "getBuildProfileOpt",
  "id": "getbuildprofileopt-1",
  "level": 3
}, {
  "value": "setBuildProfileOpt",
  "id": "setbuildprofileopt-1",
  "level": 3
}, {
  "value": "getVersion",
  "id": "getversion",
  "level": 3
}, {
  "value": "setVersion",
  "id": "setversion",
  "level": 3
}, {
  "value": "getOhpmDependencyInfo",
  "id": "getohpmdependencyinfo-1",
  "level": 3
}, {
  "value": "getOhpmRemoteHspDependencyInfo",
  "id": "getohpmremotehspdependencyinfo-1",
  "level": 3
}, {
  "value": "getDependenciesOpt",
  "id": "getdependenciesopt-1",
  "level": 3
}, {
  "value": "setDependenciesOpt",
  "id": "setdependenciesopt-1",
  "level": 3
}, {
  "value": "getDevDependenciesOpt",
  "id": "getdevdependenciesopt-1",
  "level": 3
}, {
  "value": "setDevDependenciesOpt",
  "id": "setdevdependenciesopt-1",
  "level": 3
}, {
  "value": "getDynamicDependenciesOpt",
  "id": "getdynamicdependenciesopt-1",
  "level": 3
}, {
  "value": "setDynamicDependenciesOpt",
  "id": "setdynamicdependenciesopt-1",
  "level": 3
}, {
  "value": "transformAbc",
  "id": "transformabc",
  "level": 3
}, {
  "value": "OhosHspContext",
  "id": "ohoshspcontext",
  "level": 2
}, {
  "value": "OhosHarContext",
  "id": "ohosharcontext",
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
        id: "插件上下文",
        children: "插件上下文"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospluginid",
      children: "OhosPluginId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本组件是hvigor-ohos-plugin插件id常量类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "常量名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_APP_PLUGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppPlugin插件ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_HAP_PLUGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HapPlugin插件ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_HSP_PLUGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HspPlugin插件ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_HAR_PLUGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarPlugin插件ID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohosappcontext",
      children: "OhosAppContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本组件是appTasks插件对外提供的上下文扩展接口，包括工程信息、product信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-1",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { OhosAppContext } from '@ohos/hvigor-ohos-plugin';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getprojectname",
      children: "getProjectName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getProjectName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工程名称"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const projectName = appContext.getProjectName();\n    console.log(`Project Name: ${projectName}`);\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getprojectpath",
      children: "getProjectPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getProjectPath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工程路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const projectPath = appContext.getProjectPath();\n    console.log(`Project Path: ${projectPath}`);\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildrootpath",
      children: "getBuildRootPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildRootPath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取构建目录根路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建根路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const buildRootPath = appContext.getBuildRootPath();\n    console.log(`Build Root Path: ${buildRootPath}`);\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildproductoutputpath",
      children: "getBuildProductOutputPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildProductOutputPath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前product构建的打包输出路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前product构建的打包输出路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const buildProductOutputPath =  appContext.getBuildProductOutputPath();\n    console.log(`Build Product Output Path: ${buildProductOutputPath}`);\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcurrentproduct",
      children: "getCurrentProduct"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentProduct: () => Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前构建指定的product对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section1553414254713",
              children: "Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前构建指定的product对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const currentProduct = appContext.getCurrentProduct();\n });\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildmode",
      children: "getBuildMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildMode: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前构建指定的BuildMode。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前构建指定的BuildMode"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const buildMode = appContext.getBuildMode();\n    console.log(`Build Mode: ${buildMode}`);\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getappjsonopt",
      children: "getAppJsonOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAppJsonOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前构建的app.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前构建的app.json5文件中内容的obj对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const appJsonOpt =  appContext.getAppJsonOpt();\n    console.log(`bundleName: ${appJsonOpt.app.bundleName}`);\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setappjsonopt",
      children: "setAppJsonOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setAppJsonOpt: (appJsonOpt: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改当前构建的app.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appJsonOpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前构建的app.json5文件解析出来的obj对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext, AppJson } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, getNode, HvigorNode  } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const node: HvigorNode = getNode(__filename);\n    const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    console.log('projectName:', appContext.getProjectName());\n    const appJson5: AppJson.AppOptObj = appContext.getAppJsonOpt();\n    if (appContext.getBuildMode() === 'debug') {\n        appJson5.app.versionName = '1.0.0-debug';\n    } else {\n        appJson5.app.versionName = '1.0.0-release';\n    }\n    appContext.setAppJsonOpt(appJson5);\n});\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224544)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setAppJsonOpt会进行schema校验，如果传入的对象不符合校验规则则会抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildprofileopt",
      children: "getBuildProfileOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildProfileOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前构建的根目录下build-profile.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前构建的根目录下build-profile.json5文件中内容的obj对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const buildProfileOpt = appContext.getBuildProfileOpt();\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setbuildprofileopt",
      children: "setBuildProfileOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setBuildProfileOpt: (buildProfileOpt: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前构建的build-profile.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildProfileOpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前构建的根目录下build-profile.json5文件中内容的obj对象"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(813798)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "setBuildProfileOpt会进行schema校验，如果传入的对象不符合校验规则则会抛出异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持通过setBuildProfileOpt方法设置maxFlowDepth字段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const appContext = hvigor.getRootNode().getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const buildProfileOpt = appContext.getBuildProfileOpt();\n    // 添加一个工程外的模块\n    const newModule = {\n        \"name\": \"har\",\n        \"srcPath\": \"./../MyApplication40/har\",// 确保该源码模块存在\n    }\n    buildProfileOpt.modules.push(newModule);\n    appContext.setBuildProfileOpt(buildProfileOpt);\n    console.log(buildProfileOpt.modules.map(module => {\n        return module.name;\n    }));\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getohpmdependencyinfo",
      children: "getOhpmDependencyInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOhpmDependencyInfo: () => Record<string, OhpmDependencyInfo> | object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程下oh-package.json5中配置的依赖信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, OhpmDependencyInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const ohpmInfo = rootNodeContext.getOhpmDependencyInfo();\n            console.log(ohpmInfo)\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getohpmremotehspdependencyinfo",
      children: "getOhpmRemoteHspDependencyInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOhpmRemoteHspDependencyInfo: (isSigned: boolean) => Record<string, OhpmDependencyInfo> | object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程下oh-package.json5中配置的hsp包依赖信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.6.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取签名的hsp包路径，默认为false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, OhpmDependencyInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
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
        children: "// 工程级hvigorfile.ts文件\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks, OhosHapContext, OhosAppContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                // 注册模块级任务\n                hapTask(currentNode);\n            });\n        }\n    };\n}\nfunction hapTask(currentNode: HvigorNode) {\n    // 等待全部节点加载完成之后获取子节点信息\n    currentNode.subNodes((node: HvigorNode) => {\n        // 获取hap模块上下文信息\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const moduleName = hapContext?.getModuleName();\n        hapContext?.targets((target: Target) => {\n            const targetName = target.getTargetName();\n            node.registerTask({\n                // 任务名称\n                name: `${targetName}@getRemoteHspInfo`,\n                // 任务执行逻辑主体函数\n                run() {\n                    const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n                    if (!rootNodeContext) {\n                        return;\n                    }\n                    // 获取未签名的远程hsp相关信息\n                    const remoteHspInfo = rootNodeContext.getOhpmRemoteHspDependencyInfo(false);\n                    console.log(remoteHspInfo)\n                    // 获取已签名的远程hsp相关信息\n                    const signedRemoteHspInfo = rootNodeContext.getOhpmRemoteHspDependencyInfo(true);\n                    console.log(signedRemoteHspInfo)\n                },\n                // 配置前置任务依赖\n                dependencies: [`${targetName}@PackageHap`],\n                // 配置任务的后置任务依赖\n                postDependencies: ['assembleHap']\n            });\n        });\n    });\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdependenciesopt",
      children: "getDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDependenciesOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程下oh-package.json5中配置的dependencies依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "工程级别下oh-package.json5中的dependencies信息"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const DependenciesInfo = rootNodeContext.getDependenciesOpt();\n            console.log(DependenciesInfo)\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdependenciesopt",
      children: "setDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDependenciesOpt: (dependencies: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置工程下oh-package.json5中的dependencies依赖。需要确保oh-package.json5中dependencies字段存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前工程下oh-package.json5中dependencies依赖"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const dependenciesInfo = rootNodeContext.getDependenciesOpt()\n            dependenciesInfo[\"har\"] = \"./har\";  // 确保依赖存在\n            rootNodeContext.setDependenciesOpt(dependenciesInfo);   \n      }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdevdependenciesopt",
      children: "getDevDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDevDependenciesOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程下oh-package.json5中配置的devDependencies依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取工程级别下oh-package.json5中devDependencies信息"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const devDependenciesInfo = rootNodeContext.getDevDependenciesOpt();\n            console.log(devDependenciesInfo)\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdevdependenciesopt",
      children: "setDevDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDevDependenciesOpt: (devDependencies: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置工程下oh-package.json5中的devDependencies依赖。需要确保oh-package.json5中devDependencies字段存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前工程下oh-package.json5中devdependencies依赖"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const devDependenciesInfo = rootNodeContext.getDevDependenciesOpt()\n            devDependenciesInfo[\"har\"] = \"./har\";  // 确保依赖存在\n            rootNodeContext.setDevDependenciesOpt(devDependenciesInfo);   \n      }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdynamicdependenciesopt",
      children: "getDynamicDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDynamicDependenciesOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程下oh-package.json5中配置的dynamicDependencies依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取工程级别下oh-package.json5中DynamicDependencies信息"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const dynamicDependenciesInfo = rootNodeContext.getDynamicDependenciesOpt();\n            console.log(dynamicDependenciesInfo)\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdynamicdependenciesopt",
      children: "setDynamicDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setDynamicDependenciesOpt: (dynamicDependencies: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置工程下oh-package.json5中的dynamicDependencies依赖。需要确保oh-package.json5中dynamicDependencies字段存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.10"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dynamicDependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前工程下oh-package.json5中dynamicDependencies依赖"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 自定义插件代码\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const rootNodeContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN);\n            if (!rootNodeContext) {\n                return;\n            }\n            const dynamicDependenciesInfo = rootNodeContext.getDynamicDependenciesOpt()\n            dynamicDependenciesInfo[\"har\"] = \"./har\";  // 确保依赖存在\n            rootNodeContext.setDynamicDependenciesOpt(dynamicDependenciesInfo);   \n      }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getoverrides",
      children: "getOverrides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOverrides: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取工程下oh-package.json5中配置的overrides字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.10.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取工程下oh-package.json5中配置的overrides字段"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport {OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\nhvigor.afterNodeEvaluate(node => {\n  const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n  if (appContext) {\n    let dependency = appContext.getOverrides() ?? {};\n    console.log(dependency)\n  }\n});\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setoverrides",
      children: "setOverrides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setOverrides: (overrides: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置工程下oh-package.json5中的overrides字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.10.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "overrides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置工程下oh-package.json5中的overrides字段"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport {OhosAppContext, OhosHapContext, OhosPluginId} from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\nhvigor.afterNodeEvaluate(node => {\n  const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n  if (appContext) {\n    let dependency = appContext.getOverrides() ?? {};\n    dependency['library'] = 'file:./library.har'; //在工程级oh-package.json5中动态添加工程内HAR包依赖\n    appContext.setOverrides(dependency);\n    return;\n  }\n  const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n  if (hapContext) {\n    const dependency = hapContext.getDependenciesOpt();\n    dependency['library'] = 'file:./../library';    //在entry上动态添加工程内模块依赖\n    hapContext.setDependenciesOpt(dependency);\n  }\n});\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsdkdetails",
      children: "getSdkDetails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSdkDetails: () => SdkDetails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SDK相关的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.0.4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section1463642114714",
              children: "SdkDetails"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK相关的信息"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.afterNodeEvaluate(node => {\n        const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n        if (appContext) {\n          let sdk = appContext.getSdkDetails();\n          console.log(sdk?.getSdkDir())\n          console.log(sdk?.isOhos())\n          console.log(sdk?.getSdkVersion())\n          console.log(sdk?.getEtsComponentVersion())\n          console.log(sdk?.getEtsComponentReleaseType())\n        }\n      });\n    }\n  };\n}\n\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohoshapcontext",
      children: "OhosHapContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hap模块Plugin提供的上下文接口，在hap模块的hvigor节点中可通过getContext方法传入OhosPluginId.OHOS_HAP_PLUGIN_ID获取该接口，接口中主要包含了hap模块中module、target信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-2",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { OhosHapContext } from '@ohos/hvigor-ohos-plugin';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmodulename",
      children: "getModuleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getModuleName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名称"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const moduleName = hapContext?.getModuleName();\n        console.log(`Module Name: ${moduleName}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmodulepath",
      children: "getModulePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getModulePath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const modulePath = hapContext?.getModulePath();\n        console.log(`Module Path: ${modulePath}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmoduletype",
      children: "getModuleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getModuleType: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块类型，取值来自模块配置文件module.json5的type字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块类型"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const moduleType = hapContext?.getModuleType();\n        console.log(`Module Type: ${moduleType}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildproductrootpath",
      children: "getBuildProductRootPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildProductRootPath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块基于product构建根路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块基于product构建根路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const buildProductRootPath = hapContext?.getBuildProductRootPath();\n        console.log(`Build Product Root Path: ${buildProductRootPath}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "targets",
      children: "targets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "targets: (callbackfn: (target: Target) => void) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前需构建的target对象回调方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(target: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section12392182963714",
              children: "Target"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参类型为Target，返回类型为void的函数"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        hapContext?.targets((target: Target) => {\n            // 这里可以写入对每个 target 的处理逻辑\n            const targetName = target.getTargetName();\n            console.log(`Target Name: ${targetName}`);\n        });\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildmode-1",
      children: "getBuildMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildMode: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前构建指定的BuildMode。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.18.4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前构建指定的BuildMode"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const buildMode = hapContext?.getBuildMode();\n        console.log(`Build Mode: ${buildMode}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmodulejsonopt",
      children: "getModuleJsonOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getModuleJsonOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前模块的module.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前模块的module.json5文件中内容的obj对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const moduleJsonOpt = hapContext?.getModuleJsonOpt();\n        console.log(`Module Json Opt: ${JSON.stringify(moduleJsonOpt)}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setmodulejsonopt",
      children: "setModuleJsonOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setModuleJsonOpt: (moduleJsonOpt: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改当前构建的module.json5文件中的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleJsonOpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前模块的module.json5文件解析出来的obj对象"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(130914)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setModuleJsonOpt会进行schema校验，如果传入的对象不符合校验规则会抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext; // 仅对hap模块生效，hsp和har需要使用模块对应接口\n        const moduleJsonOpt = hapContext?.getModuleJsonOpt();\n        moduleJsonOpt.module.deviceTypes = [\"phone\", \"tablet\"]; // 修改 module.json 中的 deviceTypes 字段\n        hapContext?.setModuleJsonOpt(moduleJsonOpt); // 更新 module.json\n        console.log(`Module Json Opt: ${JSON.stringify(moduleJsonOpt)}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildprofileopt-1",
      children: "getBuildProfileOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildProfileOpt: () => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前模块的build-profile.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前模块的build-profile.json5文件中内容的obj对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const buildProfileOpt = hapContext?.getBuildProfileOpt();\n        console.log(`Build Profile Opt: ${JSON.stringify(buildProfileOpt)}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setbuildprofileopt-1",
      children: "setBuildProfileOpt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setBuildProfileOpt: (buildProfileOpt: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前模块的build-profile.json5文件中内容的obj对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildProfileOpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前模块的build-profile.json5文件中内容的obj对象"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(937893)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setBuildProfileOpt会进行schema校验，如果传入的对象不符合校验规则会抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获得所有子节点\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const buildProfileOpt = hapContext?.getBuildProfileOpt();\n        // 可以对buildProfileOpt进行修改\n        buildProfileOpt?.targets?.push({\n            \"name\": \"default1\",\n        })\n        hapContext?.setBuildProfileOpt(buildProfileOpt); // 更新 build profile\n        console.log(`Build Profile Opt: ${JSON.stringify(buildProfileOpt)}`);\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getversion",
      children: "getVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getVersion: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块oh-package.json5中配置的版本号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块oh-package.json5中配置的版本号"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                currentNode.subNodes((node: HvigorNode) => {\n                    // 获取hap模块上下文信息\n                    // 如果是HAR或HSP，使用OHOS_HAR_PLUGIN/OHOS_HSP_PLUGIN\n                    const hapNodeContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n                    if (!hapNodeContext) {\n                        return;\n                    }\n                    const moduleVersion = hapNodeContext.getVersion();\n                    console.log(moduleVersion);\n                });\n            });\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setversion",
      children: "setVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setVersion: (version: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改模块oh-package.json5中的版本号。"
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
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改模块oh-package.json5中的版本号"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                currentNode.subNodes((node: HvigorNode) => {\n                    // 获取hap模块上下文信息\n                    // 如果是HAR或HSP，使用OHOS_HAR_PLUGIN/OHOS_HSP_PLUGIN\n                    const hapNodeContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n                    if (!hapNodeContext) {\n                        return;\n                    }\n                    hapNodeContext.setVersion('2.0.0');\n                    const moduleVersion = hapNodeContext.getVersion();\n                    console.log(moduleVersion);\n                });\n            });\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getohpmdependencyinfo-1",
      children: "getOhpmDependencyInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOhpmDependencyInfo: () => Record<string, OhpmDependencyInfo> | object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下oh-package.json5中配置的依赖信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.0.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, OhpmDependencyInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                currentNode.subNodes((node: HvigorNode) => {\n                    // 获取hap模块上下文信息\n                    const hapNodeContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n                    if (!hapNodeContext) {\n                        return;\n                    }\n                    const ohpmInfo = hapNodeContext.getOhpmDependencyInfo();\n                    console.log(ohpmInfo)\n\n                });\n            });\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getohpmremotehspdependencyinfo-1",
      children: "getOhpmRemoteHspDependencyInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOhpmRemoteHspDependencyInfo: (isSigned: boolean) => Record<string, OhpmDependencyInfo> | object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下oh-package.json5中配置的hsp包依赖信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.6.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取签名的hsp包路径，默认为false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, OhpmDependencyInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, Target } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { OhosPluginId } from '@ohos/hvigor-ohos-plugin';\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                currentNode.subNodes((node: HvigorNode) => {\n                    // 获取hap模块上下文信息\n                    const hapNodeContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n                    hapNodeContext?.targets((target: Target) => {\n                        const targetName = target.getTargetName();\n                        node.registerTask({\n                            // 任务名称\n                            name: `${targetName}@getRemoteHspInfo`,\n                            // 任务执行逻辑主体函数\n                            run() {\n                                // 获取未签名的远程hsp相关信息\n                                const remoteHspInfo = hapNodeContext.getOhpmRemoteHspDependencyInfo(false);\n                                console.log(remoteHspInfo);\n                                // 获取已签名的远程hsp相关信息\n                                const signedRemoteHspInfo = hapNodeContext.getOhpmRemoteHspDependencyInfo(true);\n                                console.log(signedRemoteHspInfo);\n                            },\n                            // 配置前置任务依赖\n                            dependencies: [`${targetName}@PackageHap`],\n                            // 配置任务的后置任务依赖\n                            postDependencies: ['assembleHap']\n                        });\n                    });\n                });\n            });\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdependenciesopt-1",
      children: "getDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与OhosAppContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section1085223315215",
        children: "getDependenciesOpt"
      }), "方法一致，请参考上文中getDependenciesOpt接口描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdependenciesopt-1",
      children: "setDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与OhosAppContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section18789410129",
        children: "setDependenciesOpt"
      }), "方法一致，请参考上文中getDependenciesOpt接口描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdevdependenciesopt-1",
      children: "getDevDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与OhosAppContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section192992531393",
        children: "getDevDependenciesOpt"
      }), "方法一致，请参考上文中getDependenciesOpt接口描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdevdependenciesopt-1",
      children: "setDevDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与OhosAppContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section8534132541914",
        children: "setDevDependenciesOpt"
      }), "方法一致，请参考上文中getDependenciesOpt接口描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdynamicdependenciesopt-1",
      children: "getDynamicDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与OhosAppContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section3891011201117",
        children: "getDynamicDependenciesOpt"
      }), "方法一致，请参考上文中getDependenciesOpt接口描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setdynamicdependenciesopt-1",
      children: "setDynamicDependenciesOpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与OhosAppContext中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section2756613192210",
        children: "setDynamicDependenciesOpt"
      }), "方法一致，请参考上文中getDependenciesOpt接口描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transformabc",
      children: "transformAbc"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transformAbc: (fn: (abcPath: string, config: { isArkGuardEnabled: boolean }) => void | Promise<void>, targetName?: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册在abc文件生成之后执行的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.23.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(abcPath: string, config: { isArkGuardEnabled: boolean }) => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定回调函数生效的target，未填写时对所有target生效。"
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
        children: "// 模块级hvigorfile.ts文件\nimport { hapTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { OhosPluginId, OhosHapContext, Target } from \"@ohos/hvigor-ohos-plugin\";\n\n// 自定义hvigor插件\nfunction customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    apply(node: HvigorNode) {\n      hvigor.nodesEvaluated(() => {\n        // 获取模块上下文\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        if (!hapContext) {\n          return;\n        }\n\n        // 定义TransformAbc的回调函数\n        const callback = async (abcPath, config) => {\n          console.log(\"abcPath\", abcPath, \"config\", config);\n        };\n\n        // 场景一：不指定targetName，对所有target都注册回调函数\n        hapContext.transformAbc(callback);\n\n        // 场景二：遍历该模块支持的所有target，对指定target进行注册\n        hapContext.targets((target: Target) => {\n          if (target.getTargetName() === 'default') {\n            hapContext.transformAbc(callback, target.getTargetName());\n          }\n        });\n      });\n    }\n  }\n}\n\nexport default {\n  system: hapTasks, /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins: [customPlugin()]       /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohoshspcontext",
      children: "OhosHspContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hsp模块上下文接口信息与OhosHapContext一致，请参考上文中OhosHapContext接口描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohosharcontext",
      children: "OhosHarContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Har模块上下文接口信息与OhosHapContext一致，请参考上文中OhosHapContext接口描述。"
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
130914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
937893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
224544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
813798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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