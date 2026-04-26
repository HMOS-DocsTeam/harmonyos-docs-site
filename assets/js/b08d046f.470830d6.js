"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["246606"], {
829407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_expanding_ide_hvigor_apis_ide_hvigor_api_ide_hvigor_api_md_b08_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-expanding-ide-hvigor-apis-ide-hvigor-api-ide-hvigor-api-md-b08.json
var site_docs_ide_build_expanding_ide_hvigor_apis_ide_hvigor_api_ide_hvigor_api_md_b08_namespaceObject = JSON.parse('{"id":"ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/ide-hvigor-api","title":"基础构建能力","description":"Hvigor预置对象","source":"@site/docs/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/ide-hvigor-api.md","sourceDirName":"ide-build-expanding/ide-hvigor-apis/ide-hvigor-api","slug":"/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基础构建能力","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-api","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"开发Hvigor插件","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-plugin/"},"next":{"title":"插件上下文","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api/ide-hvigor-api.md


const frontMatter = {
	title: '基础构建能力',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-api',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '基础构建能力';

const assets = {

};



const toc = [{
  "value": "Hvigor预置对象",
  "id": "hvigor预置对象",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "getRootNode",
  "id": "getrootnode",
  "level": 3
}, {
  "value": "getAllNodes",
  "id": "getallnodes",
  "level": 3
}, {
  "value": "getNodeByName",
  "id": "getnodebyname",
  "level": 3
}, {
  "value": "getHvigorConfig",
  "id": "gethvigorconfig",
  "level": 3
}, {
  "value": "getParameter",
  "id": "getparameter",
  "level": 3
}, {
  "value": "getHvigorVersion",
  "id": "gethvigorversion",
  "level": 3
}, {
  "value": "configEvaluated",
  "id": "configevaluated",
  "level": 3
}, {
  "value": "beforeNodeEvaluate",
  "id": "beforenodeevaluate",
  "level": 3
}, {
  "value": "afterNodeEvaluate",
  "id": "afternodeevaluate",
  "level": 3
}, {
  "value": "nodesInitialized",
  "id": "nodesinitialized",
  "level": 3
}, {
  "value": "nodesEvaluated",
  "id": "nodesevaluated",
  "level": 3
}, {
  "value": "taskGraphResolved",
  "id": "taskgraphresolved",
  "level": 3
}, {
  "value": "buildFinished",
  "id": "buildfinished",
  "level": 3
}, {
  "value": "getCommandEntryTask",
  "id": "getcommandentrytask",
  "level": 3
}, {
  "value": "isCommandEntryTask",
  "id": "iscommandentrytask",
  "level": 3
}, {
  "value": "getNode",
  "id": "getnode",
  "level": 2
}, {
  "value": "BuildResult",
  "id": "buildresult",
  "level": 2
}, {
  "value": "getError",
  "id": "geterror",
  "level": 3
}, {
  "value": "getReportJson",
  "id": "getreportjson",
  "level": 3
}, {
  "value": "HvigorConfig",
  "id": "hvigorconfig",
  "level": 2
}, {
  "value": "getRootNodeDescriptor",
  "id": "getrootnodedescriptor",
  "level": 3
}, {
  "value": "getAllNodeDescriptor",
  "id": "getallnodedescriptor",
  "level": 3
}, {
  "value": "getNodeDescriptorByName",
  "id": "getnodedescriptorbyname",
  "level": 3
}, {
  "value": "includeNode",
  "id": "includenode",
  "level": 3
}, {
  "value": "excludeNodeByName",
  "id": "excludenodebyname",
  "level": 3
}, {
  "value": "HvigorNodeDescriptor",
  "id": "hvigornodedescriptor",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "getChildNode",
  "id": "getchildnode",
  "level": 3
}, {
  "value": "getRootNode",
  "id": "getrootnode-1",
  "level": 3
}, {
  "value": "Product",
  "id": "product",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-1",
  "level": 3
}, {
  "value": "getProductName",
  "id": "getproductname",
  "level": 3
}, {
  "value": "getBundleType",
  "id": "getbundletype",
  "level": 3
}, {
  "value": "getBundleName",
  "id": "getbundlename",
  "level": 3
}, {
  "value": "Target",
  "id": "target",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-2",
  "level": 3
}, {
  "value": "getCurrentProduct",
  "id": "getcurrentproduct",
  "level": 3
}, {
  "value": "getBuildTargetOutputPath",
  "id": "getbuildtargetoutputpath",
  "level": 3
}, {
  "value": "getTargetName",
  "id": "gettargetname",
  "level": 3
}, {
  "value": "Parameter",
  "id": "parameter",
  "level": 2
}, {
  "value": "getProperty",
  "id": "getproperty",
  "level": 3
}, {
  "value": "getProperties",
  "id": "getproperties",
  "level": 3
}, {
  "value": "setProperty",
  "id": "setproperty",
  "level": 3
}, {
  "value": "getExtParam",
  "id": "getextparam",
  "level": 3
}, {
  "value": "getExtParams",
  "id": "getextparams",
  "level": 3
}, {
  "value": "getStartParams",
  "id": "getstartparams",
  "level": 3
}, {
  "value": "getWorkspaceDir",
  "id": "getworkspacedir",
  "level": 3
}, {
  "value": "HvigorNode",
  "id": "hvigornode",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-3",
  "level": 3
}, {
  "value": "获取实例",
  "id": "获取实例",
  "level": 3
}, {
  "value": "registerTask",
  "id": "registertask",
  "level": 3
}, {
  "value": "getTaskByName",
  "id": "gettaskbyname",
  "level": 3
}, {
  "value": "getNodeName",
  "id": "getnodename",
  "level": 3
}, {
  "value": "getNodePath",
  "id": "getnodepath",
  "level": 3
}, {
  "value": "getParentNode",
  "id": "getparentnode",
  "level": 3
}, {
  "value": "subNodes",
  "id": "subnodes",
  "level": 3
}, {
  "value": "getSubNodeByName",
  "id": "getsubnodebyname",
  "level": 3
}, {
  "value": "getContext",
  "id": "getcontext",
  "level": 3
}, {
  "value": "getAllPluginIds",
  "id": "getallpluginids",
  "level": 3
}, {
  "value": "nodeDir",
  "id": "nodedir",
  "level": 3
}, {
  "value": "getNodeDir",
  "id": "getnodedir",
  "level": 3
}, {
  "value": "addExtraOption",
  "id": "addextraoption",
  "level": 3
}, {
  "value": "getExtraOption",
  "id": "getextraoption",
  "level": 3
}, {
  "value": "beforeNodeEvaluate",
  "id": "beforenodeevaluate-1",
  "level": 3
}, {
  "value": "afterNodeEvaluate",
  "id": "afternodeevaluate-1",
  "level": 3
}, {
  "value": "HvigorPlugin",
  "id": "hvigorplugin",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-4",
  "level": 3
}, {
  "value": "pluginId",
  "id": "pluginid",
  "level": 3
}, {
  "value": "context",
  "id": "context",
  "level": 3
}, {
  "value": "apply",
  "id": "apply",
  "level": 3
}, {
  "value": "HvigorTask",
  "id": "hvigortask",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-5",
  "level": 3
}, {
  "value": "name",
  "id": "name",
  "level": 3
}, {
  "value": "context",
  "id": "context-1",
  "level": 3
}, {
  "value": "input",
  "id": "input",
  "level": 3
}, {
  "value": "output",
  "id": "output",
  "level": 3
}, {
  "value": "run",
  "id": "run",
  "level": 3
}, {
  "value": "beforeRun",
  "id": "beforerun",
  "level": 3
}, {
  "value": "afterRun",
  "id": "afterrun",
  "level": 3
}, {
  "value": "dependencies",
  "id": "dependencies",
  "level": 3
}, {
  "value": "postDependencies",
  "id": "postdependencies",
  "level": 3
}, {
  "value": "HvigorTaskContext",
  "id": "hvigortaskcontext",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "TaskInput",
  "id": "taskinput",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-6",
  "level": 3
}, {
  "value": "property",
  "id": "property",
  "level": 3
}, {
  "value": "file",
  "id": "file",
  "level": 3
}, {
  "value": "files",
  "id": "files",
  "level": 3
}, {
  "value": "TaskOutput",
  "id": "taskoutput",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-7",
  "level": 3
}, {
  "value": "file",
  "id": "file-1",
  "level": 3
}, {
  "value": "files",
  "id": "files-1",
  "level": 3
}, {
  "value": "Task",
  "id": "task",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-8",
  "level": 3
}, {
  "value": "getName",
  "id": "getname",
  "level": 3
}, {
  "value": "getDependencies",
  "id": "getdependencies",
  "level": 3
}, {
  "value": "setEnable",
  "id": "setenable",
  "level": 3
}, {
  "value": "beforeRun",
  "id": "beforerun-1",
  "level": 3
}, {
  "value": "afterRun",
  "id": "afterrun-1",
  "level": 3
}, {
  "value": "SdkDetails",
  "id": "sdkdetails",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-9",
  "level": 3
}, {
  "value": "getSdkDir",
  "id": "getsdkdir",
  "level": 3
}, {
  "value": "isOhos",
  "id": "isohos",
  "level": 3
}, {
  "value": "getSdkVersion",
  "id": "getsdkversion",
  "level": 3
}, {
  "value": "getEtsComponentVersion",
  "id": "getetscomponentversion",
  "level": 3
}, {
  "value": "getEtsComponentReleaseType",
  "id": "getetscomponentreleasetype",
  "level": 3
}, {
  "value": "NormalizedFile",
  "id": "normalizedfile",
  "level": 2
}, {
  "value": "filePath",
  "id": "filepath",
  "level": 3
}, {
  "value": "getPath",
  "id": "getpath",
  "level": 3
}, {
  "value": "file",
  "id": "file-2",
  "level": 3
}, {
  "value": "asFileList",
  "id": "asfilelist",
  "level": 3
}, {
  "value": "FileUtil",
  "id": "fileutil",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块-10",
  "level": 3
}, {
  "value": "exist",
  "id": "exist",
  "level": 3
}, {
  "value": "isDictionary",
  "id": "isdictionary",
  "level": 3
}, {
  "value": "isFile",
  "id": "isfile",
  "level": 3
}, {
  "value": "ensureDirSync",
  "id": "ensuredirsync",
  "level": 3
}, {
  "value": "ensureFileSync",
  "id": "ensurefilesync",
  "level": 3
}, {
  "value": "readJson5",
  "id": "readjson5",
  "level": 3
}, {
  "value": "readFileSync",
  "id": "readfilesync",
  "level": 3
}, {
  "value": "readFile",
  "id": "readfile",
  "level": 3
}, {
  "value": "writeFileSync",
  "id": "writefilesync",
  "level": 3
}, {
  "value": "writeFile",
  "id": "writefile",
  "level": 3
}, {
  "value": "copyFileSync",
  "id": "copyfilesync",
  "level": 3
}, {
  "value": "copyFile",
  "id": "copyfile",
  "level": 3
}, {
  "value": "pathResolve",
  "id": "pathresolve",
  "level": 3
}, {
  "value": "submitWorker",
  "id": "submitworker",
  "level": 2
}, {
  "value": "WorkerOption",
  "id": "workeroption",
  "level": 2
}, {
  "value": "Priority",
  "id": "priority",
  "level": 2
}, {
  "value": "TCB",
  "id": "tcb",
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
        id: "基础构建能力",
        children: "基础构建能力"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigor预置对象",
      children: "Hvigor预置对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"hvigor\"对象是一个预定义的Hvigor对象，表示当前正在执行的Hvigor构建引擎的实例，通过\"hvigor\"对象可以获得有关构建的一些信息和操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getrootnode",
      children: "getRootNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRootNode(): HvigorNode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取根项目的节点对象。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section746253616316",
        children: "nodesInitialized和之后的阶段"
      }), "才能使用，否则会报错。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor根节点对象"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst rootNode = hvigor.getRootNode();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallnodes",
      children: "getAllNodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllNodes(): HvigorNode[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有节点对象的数组。在node初始化后才能使用，否则会报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor所有节点对象的数组"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst allNodes = hvigor.getAllNodes();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodebyname",
      children: "getNodeByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodeByName(nodeName: string, classKind?: string): HvigorNode | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据节点名称获取节点对象。在node初始化后才能使用，否则会报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "nodeName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的名称，即工程名或模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "classKind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的类型。  当工程名和模块名相同时，可通过此参数指定获取工程或模块的节点对象。支持以下三种取值：   - project：当工程名和模块名相同时，返回工程的节点对象。 - module：当工程名和模块名相同时，返回模块的节点对象。 - node（缺省值）：当工程名和模块名相同时，返回模块的节点对象。"
          })]
        })]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst entryNode = hvigor.getNodeByName('entry');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gethvigorconfig",
      children: "getHvigorConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getHvigorConfig(): HvigorConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取HvigorConfig对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
              href: "#section7253174081515",
              children: "HvigorConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HvigorConfig对象"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst hvigorConfig = hvigor.getHvigorConfig();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getparameter",
      children: "getParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getParameter(): Parameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Parameter对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
              href: "#section18886457152915",
              children: "Parameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter对象"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst parameter = hvigor.getParameter();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gethvigorversion",
      children: "getHvigorVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getHvigorVersion(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Hvigor的版本号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.22.3"
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
            children: "Hvigor的版本号"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst hvigorVersion = hvigor.getHvigorVersion();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configevaluated",
      children: "configEvaluated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "configEvaluated(fn: (HvigorConfig) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个config文件评估完成的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section7253174081515",
              children: "HvigorConfig"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为hvigorConfig的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(374885)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此API写在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section810245135914",
        children: "hvigorconfig.ts文件"
      }), "中才会生效，在构建生命周期的初始化阶段被执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****注册configEvaluated hook。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigorconfig.ts文件\nimport { hvigor } from '@ohos/hvigor'\nhvigor.configEvaluated(hvigorConfig => {\n    console.log('configEvaluated');\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beforenodeevaluate",
      children: "beforeNodeEvaluate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beforeNodeEvaluate(fn: (HvigorNode) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为所有的node添加一个node评估前的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为HvigorNode的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562764)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此API写在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section810245135914",
        children: "hvigorconfig.ts文件"
      }), "中才会生效，在构建生命周期的初始化阶段被执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****注册beforeNodeEvaluate hook。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigorconfig.ts文件\nimport { hvigor } from '@ohos/hvigor';\nhvigor.beforeNodeEvaluate(hvigorNode => {\n    console.log('beforeNodeEvaluate');\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "afternodeevaluate",
      children: "afterNodeEvaluate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "afterNodeEvaluate(fn: (HvigorNode) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为所有的node添加一个node评估后的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为HvigorNode的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****注册afterNodeEvaluate hook。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nhvigor.afterNodeEvaluate(hvigorNode => {\n    console.log('afterNodeEvaluate');\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodesinitialized",
      children: "nodesInitialized"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nodesInitialized(fn: (Hvigor) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个node初始化完成的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section64891890155",
              children: "Hvigor"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为Hvigor对象的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269268)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此API写在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section810245135914",
        children: "hvigorconfig.ts文件"
      }), "中才会生效，在构建生命周期的初始化阶段被执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****注册nodesInitialized hook。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigorconfig.ts文件\nimport { hvigor } from '@ohos/hvigor';\nhvigor.nodesInitialized(() => {\n    console.log('nodesInitialized');\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodesevaluated",
      children: "nodesEvaluated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nodesEvaluated(fn: (Hvigor) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加hvigor配置阶段完成之后执行的回调函数，此函数在配置阶段结束之前使用方可有效。在配置阶段中接口使用场景例如节点插件上下文信息延迟获取、任务延迟注册等。添加的回调函数是以队列的形式存储，遵循先进先出原则，先添加的回调会先被执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section64891890155",
              children: "Hvigor"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为Hvigor对象的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****工程节点获取子节点插件上下文信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Hvigor中，工程节点插件加载要优先于模块节点插件加载顺序，若想实现在工程节点查找子节点注册task的上下文信息，则需要使用此接口，等待全部节点加载完成之后去执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nimport { OhosHapContext, OhosPluginId } from \"@ohos/hvigor-ohos-plugin\";\nhvigor.nodesEvaluated(() => {\n  // 等待全部节点加载完成之后获取子节点信息\n  hvigor.getRootNode().subNodes(subNode => {\n    const hapContext = subNode.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "taskgraphresolved",
      children: "taskGraphResolved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "taskGraphResolved(fn: (Hvigor) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个任务图解析完毕的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section64891890155",
              children: "Hvigor"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为Hvigor对象的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****添加一个任务图解析完毕的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nhvigor.taskGraphResolved(() => {\n    console.log('taskGraphResolved');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buildfinished",
      children: "buildFinished"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buildFinished(fn: (BuildResult) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个构建结束的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1476618469121",
              children: "BuildResult"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为BuildResult对象的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****获取构建结束的信息，如果是异常结束则打印出信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nhvigor.buildFinished(buildResult => {\n  if (buildResult.getError()) {\n    console.log(buildResult.getError().stack);\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcommandentrytask",
      children: "getCommandEntryTask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCommandEntryTask(): string[] | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取构建的入口任务名字符串数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****获取入口任务并打印出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nconsole.log(hvigor.getCommandEntryTask());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iscommandentrytask",
      children: "isCommandEntryTask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isCommandEntryTask(taskName: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断是否是命令入口任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "taskName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务名"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否是入口任务"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****判断是否是assembleHap任务并打印出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nconsole.log(hvigor.isCommandEntryTask('assembleHap'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getnode",
      children: "getNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNode(scriptPath: string): HvigorNode | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入hvigorfile.ts脚本文件路径获取当前节点对象，如果入参scriptPath未指向本工程内的hvigorfile.ts则返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "scriptPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigorfile.ts脚本全路径"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****获取当前节点对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { getNode } from \"@ohos/hvigor\";\nconst node = getNode(__filename);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildresult",
      children: "BuildResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代表构建结果的对象，如果是异常结束则会包含异常的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geterror",
      children: "getError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getError(): Error | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取异常信息。没有异常则返回null。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****获取构建结束的信息，如果是异常结束则打印出信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nhvigor.buildFinished(buildResult => {\n  if (buildResult.getError()) {\n    console.log(buildResult.getError().stack);\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getreportjson",
      children: "getReportJson"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getReportJson(): any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本次构建的可视化记录report.json结果。"
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
            children: "本次构建的可视化记录report.json结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同类型的构建事件具有不同结构，以下为典型结构示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// report.json\n{\n  \"version\": \"2.0\", // 固定字段\n  \"ppid\": 524, // process.ppid\n  \"events\": [ // 构建事件\n    ...\n    {\n      \"head\": {\n        \"id\": \"61068546-11d9-49d0-baa7-733e167af7d6\", // 事件id\n        \"name\": \"Finished :entry:default@PreBuild\", // 事件name\n        \"description\": \"Pre-build in the stage model.\",// 描述\n        \"type\": \"log\" // 类型\n      },\n      \"body\": {\n        \"pid\": 3960, // process.pid\n        \"tid\": \"Main Thread\", // thread id\n        \"startTime\": 1280741873226000, // 开始时间\n        \"endTime\": 1280741896325200, // 结束时间\n        \"totalTime\": 22868300 // 总计时间\n      },\n      \"additional\": {\n        \"logType\": \"info\", // log类型\n        \"children\": [], // 子事件id列表\n      }\n    }\n  ],\n  \"workLog\": []\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil } from '@ohos/hvigor';\n\nhvigor.buildFinished(buildResult => {\n  // 将数据写入指定path的文件中\n  const json5FilePath = FileUtil.pathResolve('D:\\\\', 'testJson.json5');\n  FileUtil.ensureFileSync(json5FilePath);\n  FileUtil.writeFileSync(json5FilePath, JSON.stringify(buildResult.getReportJson(), null, 2));\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigorconfig",
      children: "HvigorConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HvigorConfig对象是在node对象被创建之前用来保存每个节点的描述信息的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getrootnodedescriptor",
      children: "getRootNodeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRootNodeDescriptor(): HvigorNodeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取RootNode的描述对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
              href: "#section1914012226435",
              children: "HvigorNodeDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根节点的节点描述对象"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****获取构建的所有节点描述对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nconst rootNodeDescriptor = hvigor.getHvigorConfig().getRootNodeDescriptor();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallnodedescriptor",
      children: "getAllNodeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllNodeDescriptor(): HvigorNodeDescriptor[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有的node描述对象的数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#section1914012226435",
              children: "HvigorNodeDescriptor"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有节点的节点描述对象"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst allNodeDescriptors = hvigor.getHvigorConfig().getAllNodeDescriptor();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodedescriptorbyname",
      children: "getNodeDescriptorByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodeDescriptorByName(name: string): HvigorNodeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据节点名称获取node描述对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据此name查找NodeDescriptor"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1914012226435",
              children: "HvigorNodeDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据名称获取的节点描述对象"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst entryNodeDescriptors = hvigor.getHvigorConfig().getNodeDescriptorByName('entry');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "includenode",
      children: "includeNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "includeNode(name: string, srcPath: string, extraOptions?: Record<string, any>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个node。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.4.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的node的name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的node的srcPath"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, any>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以通过此参数传入额外的配置信息，会被解析成为此node的targets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783894)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此API写在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section810245135914",
        children: "hvigorconfig.ts文件"
      }), "中才会生效，在构建生命周期的初始化阶段被执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例1：****添加一个名为exampleNodeName且无额外信息的node。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigorconfig.ts文件\nimport { hvigor } from '@ohos/hvigor';\n\nconst hvigorConfig = hvigor.getHvigorConfig();\nhvigorConfig.includeNode('exampleNodeName', './exampleNodeName');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例2：****添加一个名为exampleNodeName且附带targets信息的node。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigorconfig.ts文件\nimport { hvigor } from '@ohos/hvigor';\n\nconst hvigorConfig = hvigor.getHvigorConfig();\nhvigorConfig.includeNode('exampleNodeName', './exampleNodeName', {\n  \"targets\": [\n    {\n      \"name\": \"default\",\n      \"applyToProducts\": [\n        \"default\"\n      ]\n    },\n    {\n      \"name\": \"targetTest1\",\n      \"applyToProducts\": [\n        \"default\"\n      ]\n    }\n  ]\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "excludenodebyname",
      children: "excludeNodeByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "excludeNodeByName(name: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过name排除一个Node。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.0 Beta3版本开始，支持排除工程中不存在的模块，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-optimized/ide-hvigor-experimental-properties#section11663628141317",
        children: "通过Hvigor执行ohpm install"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.4.0"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要排除的node的name"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100498)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此API写在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section810245135914",
        children: "hvigorconfig.ts文件"
      }), "中才会生效，在构建生命周期的初始化阶段被执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****排除名为exampleNodeName的Node。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigorconfig.ts文件\nimport { hvigor } from '@ohos/hvigor';\n\nconst hvigorConfig = hvigor.getHvigorConfig();\nhvigorConfig.excludeNodeByName('exampleNodeName');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigornodedescriptor",
      children: "HvigorNodeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此对象为hvigor的节点描述对象，hvigor在构建时会通过此对象来构造出hvigorNode对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "成员"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开始支持的版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor 4.3.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的src路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor 4.3.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map<string, any>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义属性，用来保存传递数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor 4.3.0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getchildnode",
      children: "getChildNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getChildNode(): HvigorNodeDescriptor[] | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有的子节点描述对象，不存在子节点则返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#section1914012226435",
              children: "HvigorNodeDescriptor"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
        children: "// hvigorconfig.ts\nimport { hvigorConfig } from '@ohos/hvigor';\nconst rootNodeDescriptors = hvigorConfig.getRootNodeDescriptor();\nrootNodeDescriptors.getChildNode()?.forEach(child => {\n  console.log(`child: ${child.name}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getrootnode-1",
      children: "getRootNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRootNode(): HvigorNodeDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取根节点的节点描述对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
              href: "#section1914012226435",
              children: "HvigorNodeDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根节点的节点描述对象"
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
        children: "// hvigorconfig.ts\nimport { hvigorConfig } from '@ohos/hvigor';\nconst entryNodeDescriptor = hvigorConfig.getNodeDescriptorByName('entry');\nconsole.log(`rootNode name: ${entryNodeDescriptor.getRootNode().name}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "product",
      children: "Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS应用工程级配置中的Product信息接口。在调用Product的接口前，可以先通过OhosAppContext的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context#section962214395515",
        children: "getCurrentProduct"
      }), "方法来获取本对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-1",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Product } from '@ohos/hvigor-ohos-plugin';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getproductname",
      children: "getProductName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getProductName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取product名称。"
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
            children: "product名称"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks, OhosAppContext, OhosPluginId, Product } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                const context: OhosAppContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n                const currentProduct: Product = context.getCurrentProduct();\n                console.log(currentProduct.getProductName());\n            });\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbundletype",
      children: "getBundleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBundleType: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取product使用的bundleType信息。"
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
            children: "bundleType值"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks, OhosAppContext, OhosPluginId, Product } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                const context: OhosAppContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n                const currentProduct: Product = context.getCurrentProduct();\n                console.log(currentProduct.getBundleType());\n            });\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbundlename",
      children: "getBundleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBundleName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取product使用的bundleName信息。"
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
            children: "bundleName值"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks, OhosAppContext, OhosPluginId, Product } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                const context: OhosAppContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n                const currentProduct: Product = context.getCurrentProduct();\n                console.log(currentProduct.getBundleName());\n            });\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "target",
      children: "Target"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS应用模块级配置中的Target信息接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-2",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Target } from '@ohos/hvigor-ohos-plugin';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcurrentproduct",
      children: "getCurrentProduct"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentProduct: () => Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前Target配置的Product。"
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
              href: "#section1553414254713",
              children: "Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前构建target应用的Product对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        if (!hapContext) {\n            return\n        }\n        hapContext.targets((target: Target) => {\n            // 这里可以写入对每个 target 的处理逻辑\n            const currentProduct = target.getCurrentProduct();\n            console.log(`Product Name: ${currentProduct.getProductName()}`);\n        });\n    });\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getbuildtargetoutputpath",
      children: "getBuildTargetOutputPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBuildTargetOutputPath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前target构建产物输出路径。"
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
            children: "当前target构建产物输出路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        if (!hapContext) {\n            return\n        }\n        hapContext.targets((target: Target) => {\n            // 这里可以写入对每个 target 的处理逻辑\n            const buildTargetOutputPath = target.getBuildTargetOutputPath();\n            console.log(`Build Target Output Path: ${buildTargetOutputPath}`);\n        });\n    });\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gettargetname",
      children: "getTargetName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTargetName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取target名称。"
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
            children: "target名称"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        if (!hapContext) {\n            return\n        }\n        hapContext.targets((target: Target) => {\n            // 这里可以写入对每个 target 的处理逻辑\n            const targetName = target.getTargetName();\n            console.log(`Target Name: ${targetName}`);\n        });\n    });\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parameter",
      children: "Parameter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["“Parameter”是hvigor中的命令配置参数对象，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section1349018305379",
        children: "hvigor.getParameter()"
      }), "方法获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getproperty",
      children: "getProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getProperty(key: string): any | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取properties配置指定key值的value值，若不存在配置时返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.1.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例：获取properties配置中指定key值的value值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令行参数：--config properties.{key}={value}， 缩写-c properties.{key}={value}（相同key值时，命令行参数对应的value值优先）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hvigor-config.json5配置文件：在\"properties\"属性中定义的配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"properties\": {\n  \"key\": \"value\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "properties配置中的key"
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
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hvigorfile.ts中添加代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nconst key = hvigor.getParameter().getProperty('key');\nconsole.log(key);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令hvigorw --sync -c properties.key=hello，控制台打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getproperties",
      children: "getProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getProperties(): Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取properties所有配置的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.1.2"
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
            children: "Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Properties配置对象"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hvigorfile.ts中添加代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nconst properties = hvigor.getParameter().getProperties();\nconsole.log(properties['key']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令hvigorw --sync -c properties.key=hello，控制台打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setproperty",
      children: "setProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setProperty(key: string, value: any): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置properties对象指定key值的value值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 5.10.3"
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor-config.json5配置文件中properties字段的key值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor-config.json5配置文件中properties字段的key值对应的value值"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312829)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块级hvigorfile.ts中调用该API不生效，请在工程级hvigorfile.ts中调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中添加代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {hvigor, HvigorPlugin} from '@ohos/hvigor';\nimport {appTasks} from '@ohos/hvigor-ohos-plugin';\nexport function plugin(): HvigorPlugin{\n    console.log('before: ', hvigor.getParameter().getProperty('hvigor.analyzeHtml')); // undefined\n    hvigor.getParameter().setProperty('hvigor.analyzeHtml', true);\n    return {\n        pluginId:'example',\n        apply: (node) => {\n            console.log('after: ', hvigor.getParameter().getProperty('hvigor.analyzeHtml')); // true\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [plugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getextparam",
      children: "getExtParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getExtParam(key: string): string | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定key值的-p扩展参数value值，若不存在配置时返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.1.2"
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令行参数-p配置中的key"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst extParam = hvigor.getParameter().getExtParam('key');\nconsole.log(extParam);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令hvigorw --sync -p key=hello，控制台打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getextparams",
      children: "getExtParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getExtParams(): Record<string, string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取全部的-p扩展参数对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.1.2"
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
            children: "Record<string, string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令行中所有配置的-p参数集合对象"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst extParams = hvigor.getParameter().getExtParams();\nconsole.log(extParams['key']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行命令hvigorw --sync -p key=hello，控制台打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstartparams",
      children: "getStartParams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getStartParams(): StartParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取hvigor启动参数：例如daemon开关，并行功能开关，增量功能开关，日志级别等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.1.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "daemon: boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "守护进程启用状态，true开启（默认开启）、false关闭"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parallel: boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "并行编译能力启用状态，true开启（默认开启）、false关闭"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "incremental: boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增量编译能力启用状态，true开启（默认开启）、false关闭"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logLevel: string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前日志级别，info、debug、warn、error等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "typeCheck: boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigorfile.ts的类型检查，true开启、false关闭（默认关闭）"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst startParams = hvigor.getParameter().getStartParams();\nconsole.log(startParams['daemon']);\nconsole.log(startParams['logLevel']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getworkspacedir",
      children: "getWorkspaceDir"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWorkspaceDir(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Hvigor工作空间路径。工作空间是指当前工程对应的Hvigor插件安装在磁盘的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.1.2"
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
            children: "Hvigor工作空间路径"
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
        children: "import { hvigor } from '@ohos/hvigor';\nconst workspaceDir = hvigor.getParameter().getWorkspaceDir();\nconsole.log(workspaceDir);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigornode",
      children: "HvigorNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"HvigorNode\"是hvigor中的节点模型接口，Hvigor工程中都有一个根模块对应的节点对象和每个子模块对应的节点对象，节点对象均为HvigorNode接口的实现。节点对象包含了该模块的配置，属性和任务等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-3",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HvigorNode } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取实例",
      children: "获取实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取hvigorNode实例有多种方法，包括hvigor对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section10705432367",
        children: "getRootNode"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section16393827185",
        children: "getAllNodes"
      }), "方法、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section208181154171019",
        children: "getNode"
      }), "方法、HvigorPlugin的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section2027815313120",
        children: "apply"
      }), "方法都可以获取到hvigorNode实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以HvigorPlugin的apply方法为例，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            // 通过currentNode可以使用hvigorNode的方法\n        }\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registertask",
      children: "registerTask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerTask: (task: HvigorTask) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前节点注册任务，在Hvigor生命周期中的配置阶段中执行。注册任务需完成HvigorTask的实现作为入参对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2386634104512",
              children: "HvigorTask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HvigorTask的实现"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****自定义任务注册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// node的获取方式请参考获取实例\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('this is Task');\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gettaskbyname",
      children: "getTaskByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTaskByName: (taskName: string) => Task | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点中已注册的Task对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "taskName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务名称"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2055582515349",
              children: "Task"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
        children: "// node的获取方式请参考获取实例\nnode.getTaskByName('assembleApp')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodename",
      children: "getNodeName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodeName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "节点名称"
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
        children: "// node的获取方式请参考获取实例\nconst nodeName = node.getNodeName();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodepath",
      children: "getNodePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodePath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "节点路径"
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
        children: "// node的获取方式请参考获取实例\nconst nodePath = node.getNodePath();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getparentnode",
      children: "getParentNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getParentNode: () => HvigorNode | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取父级节点对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
        children: "// node的获取方式请参考获取实例\nconst parentNode = node.getParentNode();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subnodes",
      children: "subNodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "subNodes: (callbackfn: (node: HvigorNode) => void) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遍历当前节点下的子节点执行回调函数。可通过此接口在工程节点操作节点对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "补充：工程节点比模块节点优先加载，若需操作子节点，需使用hvigor.nodesEvaluated接口等待全部节点加载完成，才能操作子节点对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "callbackfn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(node: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参类型为HvigorNode，返回类型为void的函数"
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
        children: "// 工程级hvigorfile.ts\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor'\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\n\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',      \n        async apply(currentNode: HvigorNode): Promise<void> {\n            currentNode.subNodes((node: HvigorNode) => {\n              // 这里进行子节点相关处理\n              // 比如获取子节点的名字\n              const subNodeName = node.getNodeName();\n            })\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsubnodebyname",
      children: "getSubNodeByName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSubNodeByName: (nodeName: string) => HvigorNode | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据节点名称获取节点对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "nodeName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点名称"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
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
        children: "// 工程级hvigorfile.ts\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n// 在项目根目录下的hvigorfile.ts中，currentNode是指app，子节点中包含entry\n// 通过getSubNodeByName可以获取entry的对象\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const subNode = currentNode.getSubNodeByName('entry');\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcontext",
      children: "getContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getContext: (pluginId: string) => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据pluginId获取当前节点上指定插件的上下文接口信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "pluginId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插件ID"
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
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持自定义返回值类型"
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
        children: "// 工程级hvigorfile.ts\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, getNode, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n// 需要导入OhosPluginId，OhosAppContext来获得上下文信息\n// 在生命周期hook中获取\nhvigor.nodesEvaluated(() => {\n    const node: HvigorNode = getNode(__filename);\n    const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    // 这里就可以使用appContext获取以下上下文信息比如项目名\n    console.log('projectName:', appContext.getProjectName());\n});\n// 或者在apply中直接获取\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const appContext = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n            console.log('projectName:', appContext.getProjectName());\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallpluginids",
      children: "getAllPluginIds"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllPluginIds: () => string[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点已加载的pluginId集合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.0.2"
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
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前已加载的插件ID集合"
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
        children: "// 工程级hvigorfile.ts\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor'\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n            const allPluginIds = currentNode.getAllPluginIds();\n            allPluginIds.forEach((id) => {\n                console.log(id);\n            })\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodedir",
      children: "nodeDir"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nodeDir: NormalizedFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前节点的根目录的NormalizedFile对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodedir",
      children: "getNodeDir"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodeDir: () => NormalizedFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点的根目录的NormalizedFile对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点的根目录的NormalizedFile对象"
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
        children: "// 工程级hvigorfile.ts\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin'\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n           const dir = currentNode.getNodeDir();\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addextraoption",
      children: "addExtraOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addExtraOption: (key: string, value: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为当前的node添加一个自定义属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的自定义属性的key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要添加的自定义属性的value"
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
        children: "// 工程级hvigorfile.ts\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin'\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n           currentNode.addExtraOption('key', 'value');\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getextraoption",
      children: "getExtraOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getExtraOption: (key: string) => any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取通过addExtraOption()函数设置在当前node上的自定义属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义属性的key"
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
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义属性的value"
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
        children: "// 工程级hvigorfile.ts\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin'\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        async apply(currentNode: HvigorNode): Promise<void> {\n           currentNode.addExtraOption('key', 'value');\n           currentNode.getExtraOption('key');\n        }\n    };\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beforenodeevaluate-1",
      children: "beforeNodeEvaluate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beforeNodeEvaluate(fn: (HvigorNode) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为当前的node添加一个node评估前的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为HvigorNode的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****为名称为entry的node注册一个beforeNodeEvaluate hook并打印出node的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nhvigor.nodesInitialized(() => {\n  hvigor.getRootNode().subNodes(node => {\n    if (node.getNodeName() === 'entry') {\n      node.beforeNodeEvaluate(hvigorNode => {\n        console.log(hvigorNode.getNodeName());\n      })\n    }\n  })\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "afternodeevaluate-1",
      children: "afterNodeEvaluate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "afterNodeEvaluate(fn: (HvigorNode) => {}): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为当前的node添加一个node评估后的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "fn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            }), ") => {}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个入参为空或者为HvigorNode的方法"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****为名称为entry的node注册一个afterNodeEvaluate hook并打印出node的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hvigor } from '@ohos/hvigor';\nhvigor.nodesInitialized(() => {\n  hvigor.getRootNode().subNodes(node => {\n    if (node.getNodeName() === 'entry') {\n      node.afterNodeEvaluate(hvigorNode => {\n        console.log(hvigorNode.getNodeName());\n      })\n    }\n  })\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigorplugin",
      children: "HvigorPlugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口定义了Hvigor开发插件的基本范式。开发Hvigor插件需实现此接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-4",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HvigorPlugin } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pluginid",
      children: "pluginId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pluginId: string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件唯一标识属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins: [customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context",
      children: "context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "context?: (() => any) | any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件上下文实现接口，可选实现；实现此函数后，其他插件可通过node.getContext('插件ID'）获取插件中定义的上下文接口。"
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
            children: "(() => any)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
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
        children: "// 工程级hvigorfile.ts文件\nimport { HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apply",
      children: "apply"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "apply: (node: HvigorNode) => void | Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件主体函数，用于定义插件实现逻辑（例如任务注册等）; 在Hvigor的生命周期配置阶段调用。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hvigor节点对象"
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
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        context() {\n            return {\n                data: 'customPlugin xxx'\n            };\n        },\n        async apply(currentNode: HvigorNode): Promise<void> {\n            hvigor.nodesEvaluated(async () => {\n                // 注册模块级任务\n            });\n        }\n    };\n}\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigortask",
      children: "HvigorTask"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor任务实现的接口类型，定义了任务的实现范式，在创建任务时需实现此接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-5",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HvigorTask } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "name",
      children: "name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "name: string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义任务名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('this is Task');\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-1",
      children: "context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "context?: (() => any) | any"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务中的局部内数据共享的对象定义。实现此函数中定义的对象将在任务注册时被注入到this.context属性上，在input、output、run函数中可使用直接this.context调用context函数中定义的对象和属性。"
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
            children: "(() => any)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    context() {\n        return {\n            data: 'customRegisterTask xxx'\n        };\n    },\n    run() {\n        console.log(this.context);\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input",
      children: "input"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "input?: (input: TaskInput) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现任务增量输入条件定义。"
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
            children: "input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section425723621113",
              children: "TaskInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制任务增量的输入条件实现对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'test.txt');\n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n        },\n        async output(output: TaskOutput): Promise<void> {\n            try {\n                const parentDir = path.dirname(outputFilePath);\n                await fse.ensureDir(parentDir); // 确保父目录存在\n                await fse.ensureFile(outputFilePath);\n                output.file(outputFilePath);\n            } catch (error) {\n                console.error('File creation failed:', error);\n                throw error;\n            }\n        },\n        postDependencies: ['assembleApp']\n    })\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5中添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output",
      children: "output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "output?: (output: TaskOutput) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现任务增量输出条件定义。"
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
            children: "output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section135442202125",
              children: "TaskOutput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制任务增量的输出条件实现对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'test.txt');\n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n        },\n        async output(output: TaskOutput): Promise<void> {\n            try {\n                const parentDir = path.dirname(outputFilePath);\n                await fse.ensureDir(parentDir); // 确保父目录存在\n                await fse.ensureFile(outputFilePath);\n                output.file(outputFilePath);\n            } catch (error) {\n                console.error('File creation failed:', error);\n                throw error;\n            }\n        },\n        postDependencies: ['assembleApp']\n    })\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5里添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"    \n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "run",
      children: "run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "run: (taskContext: HvigorTaskContext) => void | Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务执行逻辑主体函数。您可以在此函数实现中定义您所需的任务处理逻辑。"
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
            children: "taskContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section17880854104213",
              children: "HvigorTaskContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口中默认注入的公共信息类型"
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
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('this is Task');\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beforerun",
      children: "beforeRun"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beforeRun?: (taskContext: HvigorTaskContext) => void | Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "run函数的前置处理函数。在任务执行阶段，任务中的run函数执行前此函数被调用执行。"
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
            children: "taskContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section17880854104213",
              children: "HvigorTaskContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口中默认注入的公共信息"
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
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('customTask');\n    },\n    beforeRun() {\n        console.log('beforeRun');\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "afterrun",
      children: "afterRun"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "afterRun?: (taskContext: HvigorTaskContext) => void | Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "run函数的后置处理函数。在任务执行阶段，任务中的run函数执行后此函数被调用执行。"
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
            children: "taskContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section17880854104213",
              children: "HvigorTaskContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口中默认注入的公共信息类型"
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
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('customTask');\n    },\n    afterRun() {\n        console.log('afterRun');\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependencies",
      children: "dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dependencies?: (() => string[]) | string[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置前置任务依赖。前置任务依赖是指当前任务依赖另一个任务，执行顺序是前置任务 -> 当前任务 -> 后置任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta2版本开始，支持依赖其他模块的任务，在任务前加上“模块名:”即可，例如har:assembleHar。"
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
            children: "(() => string[])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541273)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["依赖其他模块的任务时，建议将任务注册操作放在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section746253616316",
        children: "hook-nodesEvaluated"
      }), "中，否则注册时其他模块的任务可能还未被初始化，导致当前任务无法注册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例一：****依赖本模块的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('customTask');\n    },\n    dependencies: ['customTask1'],\n});\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask1',\n    run() {\n        console.log('customTask1');\n    },\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例二：****依赖其他模块的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\n// 获取当前entry节点对象\nconst entryNode = hvigor.getNodeByName('entry');\n\n// 逻辑放在hook-nodesEvaluated中\nhvigor.nodesEvaluated(async () => {\n  // 注册任务\n  entryNode.registerTask({\n    // 任务名称\n    name: `default@CustomTask`,\n    run() {\n      console.log('customTask1')\n    },\n    // 配置前置任务依赖\n    dependencies: ['har:assembleHar'], // 跨模块依赖har的assembleHar任务，确保har模块存在\n    // 配置任务的后置任务依赖\n    postDependencies: ['entry:default@PreBuild']  // 支持两种写法 entry:default@PreBuild  default@PreBuild\n  });\n});\n\nexport default {\n  system: appTasks, /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins: []       /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postdependencies",
      children: "postDependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postDependencies?: (() => string[]) | string[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置任务的后置任务依赖。后置任务依赖是指另一个任务依赖当前任务，执行顺序是前置任务 -> 当前任务 -> 后置任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta2版本开始，支持依赖其他模块的任务，在任务前加上“模块名:”即可，例如har:default@PreBuild。"
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
            children: "(() => string[])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88192)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["依赖其他模块的任务时，建议将任务注册操作放在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-life-cycle#section746253616316",
        children: "hook-nodesEvaluated"
      }), "中，否则注册时其他模块的任务可能还未被初始化，导致当前任务无法注册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例一：****依赖本模块的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, HvigorNode, HvigorTask } from '@ohos/hvigor';\n\n// 获取当前hvigorNode节点对象\nconst node: HvigorNode = getNode(__filename);\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask1',\n    run() {\n        console.log('customTask1');\n    },\n});\n\n// 注册Task\nnode.registerTask({\n    name: 'customTask',\n    run() {\n        console.log('customTask');\n    },\n    postDependencies: ['customTask1'],\n});\n\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例二：****依赖其他模块的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\n// 获取当前entry节点对象\nconst entryNode = hvigor.getNodeByName('entry');\n\n// 逻辑放在hook-nodesEvaluated中\nhvigor.nodesEvaluated(async () => {\n  // 注册任务\n  entryNode.registerTask({\n    // 任务名称\n    name: `default@CustomTask`,\n    run() {\n      console.log('customTask1')\n    },\n    // 配置前置任务依赖\n    dependencies: ['entry:default@PreBuild'], // 支持两种写法 entry:default@PreBuild  default@PreBuild\n    // 配置任务的后置任务依赖\n    postDependencies: ['har:default@PreBuild']  // 跨模块依赖har的PreBuild任务，确保har模块存在\n  });\n});\n\nexport default {\n  system: appTasks, /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins: []       /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigortaskcontext",
      children: "HvigorTaskContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor任务上下文对象类型，该类型的对象默认注册了当前任务的上下文信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "成员"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前任务绑定的模块名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "modulePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前任务绑定的模块路径"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskinput",
      children: "TaskInput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务增量执行判断的输入对象实现类型，提供添加任务输入条件的基本函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-6",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TaskInput } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "property",
      children: "property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "property(key: string, value: TaskInputValue): TaskInput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加键值对作为Task增量输入条件。"
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
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "条件名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TaskInputValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持基本数组类型number、string、boolean及对应的数组类型的参数"
          })]
        })]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section425723621113",
              children: "TaskInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前控制任务增量的输入条件对象，用于链式调用"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTask, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'test.txt');\n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n        },\n        async output(output: TaskOutput): Promise<void> {\n            try {\n                const parentDir = path.dirname(outputFilePath);\n                await fse.ensureDir(parentDir); // 确保父目录存在\n                await fse.ensureFile(outputFilePath);\n                output.file(outputFilePath);\n            } catch (error) {\n                console.error('File creation failed:', error);\n                throw error;\n            }\n        },\n        postDependencies: ['assembleApp']\n    })\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5中添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file",
      children: "file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "file(path: string): TaskInput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加单个目录或文件路径作为任务增量输入条件。"
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目录或文件路径"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section425723621113",
              children: "TaskInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前控制任务增量的输入条件对象，用于链式调用"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTask, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\nconst currentNode = getNode(__filename);\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'testOutput.txt');\n    // 添加单个文件路径作为任务增量输入条件\n    const inputFilePath = path.resolve(context.getProjectPath(), 'testInput.txt'); \n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            const parentDir = path.dirname(outputFilePath);\n            fse.ensureDirSync(parentDir); // 确保父目录存在\n            fse.ensureFileSync(outputFilePath);\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n            if (fse.existsSync(inputFilePath)) {\n                input.file(inputFilePath);\n            }\n        },\n        async output(output: TaskOutput): Promise<void> {\n            output.file(outputFilePath);\n        },\n        postDependencies: ['assembleApp']\n    })\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5中添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "files",
      children: "files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "files(paths: string[]): TaskInput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加多个目录或文件路径作为任务增量输入条件。"
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
            children: "paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目录或文件路径列表"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section425723621113",
              children: "TaskInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前控制任务增量的输入条件对象，用于链式调用"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTask, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\nconst currentNode = getNode(__filename);\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'test.txt');\n    // 添加单个文件路径作为任务增量输入条件。\n    const inputFilePath = path.resolve(context.getProjectPath(), 'test.txt'); \n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            const parentDir = path.dirname(outputFilePath);\n            fse.ensureDirSync(parentDir); // 确保父目录存在\n            fse.ensureFileSync(outputFilePath);\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n            if (fse.existsSync(inputFilePath)) {\n                input.files([inputFilePath, ]);\n            }\n        },\n        async output(output: TaskOutput): Promise<void> {\n            output.files([outputFilePath,]);\n        },\n        postDependencies: ['assembleApp']\n    })\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5中添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "taskoutput",
      children: "TaskOutput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务增量执行判断的输出对象实现类型，提供添加任务输出条件的基本函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-7",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TaskOutput } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-1",
      children: "file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "file(path: string): TaskOutput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加单个目录或文件路径作为任务的增量输出条件。"
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
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目录或文件路径"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section135442202125",
              children: "TaskOutput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前控制任务增量的输出条件对象，用于支持链式调用"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\nconst currentNode = getNode(__filename);\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'testOutput.txt');\n    // 添加单个文件路径作为任务增量输入条件\n    const inputFilePath = path.resolve(context.getProjectPath(), 'testInput.txt'); \n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            const parentDir = path.dirname(outputFilePath);\n            fse.ensureDirSync(parentDir); // 确保父目录存在\n            fse.ensureFileSync(outputFilePath);\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n            if (fse.existsSync(inputFilePath)) {\n                input.file(inputFilePath);\n            }\n        },\n        async output(output: TaskOutput): Promise<void> {\n            output.file(outputFilePath);\n        },\n        postDependencies: ['assembleApp']\n    })\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5中添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "files-1",
      children: "files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "files(paths: string[]): TaskOutput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加多个目录或文件路径作为任务的增量输出条件。"
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
            children: "paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目录或文件路径列表"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section135442202125",
              children: "TaskOutput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制任务增量的输出条件对象，用于支持链式调用"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId } from '@ohos/hvigor-ohos-plugin';\nimport { getNode, hvigor, HvigorTaskContext, TaskInput, TaskOutput } from \"@ohos/hvigor\";\nimport fse from \"fs-extra\";\nimport path from \"path\";\nconst currentNode = getNode(__filename);\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const outputFilePath = path.resolve(context.getBuildRootPath(), 'testOutput.txt');\n    // 添加单个文件路径作为任务增量输入条件。\n    const inputFilePath = path.resolve(context.getProjectPath(), 'testInput.txt'); \n    // 注册一个生成文件的任务并为此任务设置增量\n    currentNode.registerTask({\n        name: \"testTask\",\n        run(taskContext: HvigorTaskContext): void | Promise<void> {\n            const parentDir = path.dirname(outputFilePath);\n            fse.ensureDirSync(parentDir); // 确保父目录存在\n            fse.ensureFileSync(outputFilePath);\n            fse.writeFileSync(outputFilePath, context.getProjectName());\n            return undefined;\n        },\n        input(input: TaskInput): void {\n            input.property('projectName', context.getProjectName());\n            if (fse.existsSync(inputFilePath)) {\n                input.files([inputFilePath, ]);\n            }\n        },\n        async output(output: TaskOutput): Promise<void> {\n            output.files([outputFilePath,]);\n        },\n        postDependencies: ['assembleApp']\n    })\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在hvigor-config.json5中添加dependencies："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hvigor-config.json5\n\"dependencies\": {\n    \"fs-extra\": \"11.2.0\",\n    \"@types/fs-extra\": \"9.0.13\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task",
      children: "Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HvigorTask的外置对象。您可以使用此对象访问任务的属性、 操作任务提供的接口函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-8",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Task } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getname",
      children: "getName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getName: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取任务名称。"
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
            children: "任务名称"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, Task } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const assembleAppTask: Task | undefined = rootNode.getTaskByName('assembleApp');\n    if (assembleAppTask) {\n        const taskName = assembleAppTask.getName();\n        console.log(`taskName: ${taskName}`);\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdependencies",
      children: "getDependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDependencies: () => string[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前任务依赖的前置任务名称列表。"
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
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前任务依赖的前置任务名称列表"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, Task } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const assembleAppTask: Task | undefined = rootNode.getTaskByName('assembleApp');\n    if (assembleAppTask) {\n        const taskDependencies = assembleAppTask.getDependencies();\n        console.log(`Task Dependencies: ${taskDependencies}`);\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setenable",
      children: "setEnable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setEnable: (enable: boolean) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置任务的启用状态，当任务被禁用时，任务仍然在任务依赖图中存在，仅跳过了任务的执行，不会破坏原来设定的任务依赖关系。任务被注册时任务状态默认是启用的。"
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：启用任务， false: 禁用任务"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    rootNode.subNodes((node: HvigorNode) => {\n        // 获取hap模块上下文信息\n        const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n        const moduleName = hapContext?.getModuleName();\n        hapContext?.targets((target: Target) => {\n            // 禁用任务\n            node.getTaskByName(`${target.getTargetName()}@SignHap`)?.setEnable(false);\n        });\n    });\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beforerun-1",
      children: "beforeRun"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "beforeRun: (fn: Function) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加任务执行之前的钩子函数。钩子函数以栈结构存储，遵循先进后出原则，后添加的函数先被执行。"
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
            children: "fn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, Task } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const assembleAppTask: Task | undefined = rootNode.getTaskByName('assembleApp');\n    if (assembleAppTask) {\n        // 任务执行之前的钩子函数\n        assembleAppTask.beforeRun(() => {\n            console.log('Before Task: assembleApp');\n        });\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "afterrun-1",
      children: "afterRun"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "afterRun: (fn: Function) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加任务执行完成之后的钩子函数。钩子函数以堆结构存储，遵循先进先出原则，先添加的函数先被执行。"
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
            children: "fn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, Task } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const assembleAppTask: Task | undefined = rootNode.getTaskByName('assembleApp');\n    if (assembleAppTask) {\n        // 任务执行之后的钩子函数\n        assembleAppTask.afterRun(() => {\n            console.log('After Task: assembleApp');\n        });\n    }\n});\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sdkdetails",
      children: "SdkDetails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用工程使用的SDK相关的信息。在调用SdkDetails的接口前，可以先通过OhosAppContext的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context#section085712212299",
        children: "getSdkDetails"
      }), "方法来获取本对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-9",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SdkDetails } from '@ohos/hvigor-ohos-plugin';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsdkdir",
      children: "getSdkDir"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSdkDir: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SDK所在目录。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK所在目录"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosAppContext, OhosPluginId, SdkDetails } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.afterNodeEvaluate(node => {\n        const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n        if (appContext) {\n          let sdk:SdkDetails = appContext.getSdkDetails();\n          console.log(sdk?.getSdkDir())\n        }\n      });\n    }\n  };\n}\n\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isohos",
      children: "isOhos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isOhos: () => boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断是否为OpenHarmony SDK。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为OpenHarmony SDK"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosAppContext, OhosPluginId, SdkDetails } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.afterNodeEvaluate(node => {\n        const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n        if (appContext) {\n          let sdk:SdkDetails = appContext.getSdkDetails();\n          console.log(sdk?.isOhos())\n        }\n      });\n    }\n  };\n}\n\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsdkversion",
      children: "getSdkVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSdkVersion: () => number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SDK的版本号。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK版本号"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosAppContext, OhosHapContext, OhosPluginId, SdkDetails } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.afterNodeEvaluate(node => {\n        const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n        if (appContext) {\n          let sdk:SdkDetails = appContext.getSdkDetails();\n          console.log(sdk?.getSdkVersion())\n        }\n      });\n    }\n  };\n}\n\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getetscomponentversion",
      children: "getEtsComponentVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEtsComponentVersion: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SDK中ets组件（DevEco Studio安装目录/sdk/default/openharmony/ets目录下的组件）的版本号。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取SDK中ets组件的版本号"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosAppContext, OhosPluginId, SdkDetails } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.afterNodeEvaluate(node => {\n        const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n        if (appContext) {\n          let sdk:SdkDetails = appContext.getSdkDetails();\n          console.log(sdk?.getEtsComponentVersion())\n        }\n      });\n    }\n  };\n}\n\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getetscomponentreleasetype",
      children: "getEtsComponentReleaseType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEtsComponentReleaseType: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SDK中ets组件（DevEco Studio安装目录/sdk/default/openharmony/ets目录下的组件）的发布类型值。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取SDK中ets组件发布类型值"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级hvigorfile.ts中编写示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { OhosAppContext, OhosPluginId, SdkDetails } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\n\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.afterNodeEvaluate(node => {\n        const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n        if (appContext) {\n          let sdk:SdkDetails = appContext.getSdkDetails();\n          console.log(sdk?.getEtsComponentReleaseType())\n        }\n      });\n    }\n  };\n}\n\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "normalizedfile",
      children: "NormalizedFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigor API中的文件类。您可以通过此对象来进行一些基本的文件操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filepath",
      children: "filePath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "filePath: string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前对象的路径信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const moduleNormalizedFile = rootNode.nodeDir;\n    console.log(`Module Normalized File Path: ${moduleNormalizedFile.filePath}`);\n\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpath",
      children: "getPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPath: () => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前路径信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "当前对象的路径信息"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const moduleNormalizedFile = rootNode.nodeDir;\n    console.log(`Module Normalized File Path: ${moduleNormalizedFile.getPath()}`);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-2",
      children: "file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "file: (_path: string) => NormalizedFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在原有的目录路径链式拼接路径，获取它的NormalizedFile对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要拼接路径字符串"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在原有的NormalizedFile对象的路径链式拼接所得到NormalizedFile对象"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor } from '@ohos/hvigor';\n\nhvigor.nodesEvaluated(() => {\n    const rootNode = hvigor.getRootNode();\n    const moduleNormalizedFile = rootNode.nodeDir;\n    const buildProfileNormalizedFile = moduleNormalizedFile.file('build-profile.json5');\n    console.log(`buildProfile File Path: ${buildProfileNormalizedFile.getPath()}`);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asfilelist",
      children: "asFileList"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "asFileList: () => NormalizedFile[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取到NormalizedFile对象下深层递归的目录与文件NormalizedFile[]，包含它本身。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NormalizedFile对象下深层递归的目录与文件NormalizedFile[]，包含它本身"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前只能通过node节点的 node.nodeDir 或者 node.node.getNodeDir() 获取该node节点的根路径的NormalizedFile对象，再通过NormalizedFile.file(_path: string)方法拼接后续路径来获取到新的NormalizedFile对象，工程级hvigorfile.ts示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { appTasks } from '@ohos/hvigor-ohos-plugin';\n// 导入接口\nimport { HvigorPlugin, HvigorNode} from '@ohos/hvigor';\n// 实现自定义插件\nfunction customPlugin(): HvigorPlugin {\n    return {\n        pluginId: 'customPlugin',\n        apply(node: HvigorNode) {\n            appTask(node);\n        }\n    }\n}\nfunction appTask(currentNode: HvigorNode) {\n    // 工程级的node\n    currentNode.subNodes((node: HvigorNode) => {\n        // 模块级的node \n        // 通过node.nodeDir 或者 node.node.getNodeDir() 获取该node节点的根路径的NormalizedFile文件\n        const moduleNormalizedFile = node.nodeDir;\n        // 通过NormalizedFile.file() 拼接后续路径，生成新的 NormalizedFile 对象\n        // 生成模块下面 build-Profile.json5 的 NormalizedFile 对象\n        const buildProfileNormalizedFile = moduleNormalizedFile.file('build-profile.json5');\n    })\n}\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[\n        customPlugin()  // 应用自定义Plugin\n    ]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fileutil",
      children: "FileUtil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件操作工具类，支持一些基本的文件操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块-10",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FileUtil } from '@ohos/hvigor';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exist",
      children: "exist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "exist: (filePath: string) => boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断文件路径是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "filePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径字符串"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true: 文件路径存在，false: 文件路径不存在"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\nconst currentNode = getNode(__filename);\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const testFilePath = path.resolve(context.getProjectPath(), 'test.txt');\n    if (FileUtil.exist(testFilePath)) {\n        console.log(`File exists: ${testFilePath}`);\n    } else {\n        console.log(`File doesn't exist: ${testFilePath}`);\n    }\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdictionary",
      children: "isDictionary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDictionary: (file: string | NormalizedFile) => boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断文件路径或NormalizedFile对象是否是目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true: 是目录，false: 不是目录"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const testFilePath = path.resolve(context.getProjectPath(), 'test.txt');\n    FileUtil.ensureFileSync(testFilePath);\n    if (FileUtil.isDictionary(testFilePath)) {\n        console.log(`It is a directory: ${testFilePath}`);\n    } else {\n        console.log(`It is not a directory: ${testFilePath}`);\n    }\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isfile",
      children: "isFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isFile: (file: string | NormalizedFile) => boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断文件路径或NormalizedFile对象是否是文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true: 是文件，false: 不是文件"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const testFilePath = path.resolve(context.getProjectPath(), 'test.txt');\n    FileUtil.ensureFileSync(testFilePath);\n    if (FileUtil.isFile(testFilePath)) {\n        console.log(`It is a file: ${testFilePath}`);\n    } else {\n        console.log(`It is not a file: ${testFilePath}`);\n    }\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ensuredirsync",
      children: "ensureDirSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ensureDirSync: (dirPath: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保目录存在，不存在就创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "dirPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标目录地址"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\nconst currentNode = getNode(__filename);\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;   \n    FileUtil.ensureDirSync(path.dirname(context.getBuildRootPath()));\n})\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ensurefilesync",
      children: "ensureFileSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ensureFileSync: (filePath: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保文件存在，不存在就创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "filePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件地址"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const testFilePath = path.resolve(context.getProjectPath(), 'test.txt');\n    FileUtil.ensureFileSync(testFilePath);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readjson5",
      children: "readJson5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "readJson5: (file: string | NormalizedFile) => JSON"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步读取Json5文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取出的JSON格式数据"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = path.resolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFileSync(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n    const jsonContent = FileUtil.readJson5(json5FilePath);\n    console.log(`Read JSON5 content: ${JSON.stringify(jsonContent, null, 2)}`);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readfilesync",
      children: "readFileSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "readFileSync: (file: string | NormalizedFile) => Buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步读取文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "Buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取的Buffer数据"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = path.resolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFileSync(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n    const content = FileUtil.readFileSync(json5FilePath);\n    console.log(`Content of ${json5FilePath}: ${content}`);\n})\n\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readfile",
      children: "readFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "readFile: (file: string | NormalizedFile) => Promise<Buffer>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步读取文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "Promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<Buffer>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(async () => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = path.resolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFileSync(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n    const content = await FileUtil.readFile(json5FilePath);\n    console.log(content.toString());\n})\n\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "writefilesync",
      children: "writeFileSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "writeFileSync: (file: string | NormalizedFile, content: any) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步写入文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要写入文件的内容"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = path.resolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFileSync(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n    const jsonContent = FileUtil.readJson5(json5FilePath);\n    console.log(`Read JSON5 content: ${JSON.stringify(jsonContent, null, 2)}`);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "writefile",
      children: "writeFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "writeFile: (file: string | NormalizedFile, content: any) => Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步写入文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要写入文件的内容"
          })]
        })]
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
            children: "Promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\nimport path from \"path\";\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = path.resolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFile(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyfilesync",
      children: "copyFileSync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyFileSync: (file: string | NormalizedFile, dest: string) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步复制文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = FileUtil.pathResolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFileSync(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n    const copyFilePath = FileUtil.pathResolve(context.getProjectPath(), 'testJson_copy.json5');\n    FileUtil.copyFileSync(json5FilePath, copyFilePath);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyfile",
      children: "copyFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyFile: (file: string | NormalizedFile, dest: string) => Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步复制文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section281448112713",
              children: "NormalizedFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径"
          })]
        })]
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
            children: "Promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = FileUtil.pathResolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFileSync(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n    const copyFilePath = FileUtil.pathResolve(context.getProjectPath(), 'testJson_copy.json5');\n    FileUtil.copyFile(json5FilePath, copyFilePath);\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pathresolve",
      children: "pathResolve"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pathResolve: (...paths: string[]) => string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拼接路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 4.3.0"
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
            children: "...paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径信息数组"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拼接后得到的路径信息"
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
        children: "// 工程级hvigorfile.ts文件\nimport { appTasks, OhosPluginId, OhosAppContext } from '@ohos/hvigor-ohos-plugin';\nimport { hvigor, FileUtil, getNode } from '@ohos/hvigor';\n\nconst currentNode = getNode(__filename);\n\nhvigor.nodesEvaluated(() => {\n    const context = currentNode.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;\n    const json5FilePath = FileUtil.pathResolve(context.getProjectPath(), 'testJson.json5');\n    FileUtil.ensureFileSync(json5FilePath);\n    FileUtil.writeFile(json5FilePath, JSON.stringify(context.getAppJsonOpt()));\n})\n\nexport default {\n    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "submitworker",
      children: "submitWorker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "submitWorker(node: HvigorNode, taskName: string, workPath: string, workerOption: WorkerOption): TCB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向线程池提交一个worker并执行，worker必须归属于某个任务，表示这个任务并没有结束，但此时主线程可以执行其他任务，依赖该任务的其他任务仍然会排队等待。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.0.4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section14832104719474",
              children: "HvigorNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "worker归属的任务对应的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向线程池提交worker的任务名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要执行的worker的文件路径，可以拼接函数名称，例如D:/xx/a.js/run是指运行a.js的run方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workerOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section2701859185318",
              children: "WorkerOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "worker配置。"
          })]
        })]
      })]
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
              href: "#section282818554815",
              children: "TCB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交的worker的状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****示例：****在hap模块的自定义任务中，向线程池提交一个worker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hapTasks } from '@ohos/hvigor-ohos-plugin';\nimport { HvigorNode, HvigorPlugin, submitWorker } from \"@ohos/hvigor\";\nimport path from \"path\";\n\n// 实现自定义插件\nfunction customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    apply(node: HvigorNode) {\n      // 插件主体\n      node.registerTask({\n        name: 'customTask',\n        run() {\n          submitWorker(node, this.name, path.join(__dirname, 'wait-job.js', 'wait'), {callback: () => {\n            console.log('submit Worker callback');\n          }});\n        },\n        dependencies: ['default@PreBuild'],\n        postDependencies: ['assembleHap'],\n      });\n    }\n  }\n}\n\nexport default {\n  system: hapTasks /* Built-in plugin of Hvigor. It cannot be modified. */,\n  plugins: [customPlugin()] /* Custom plugin to extend the functionality of Hvigor. */,  \n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wait-job.js内容如下，和hvigorfile.ts在同一个目录下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function wait() {\n    console.log('开始等待10秒...');\n    await sleep(10000);\n    console.log('结束，退出程序。');\n}\n\nexports.wait = wait;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workeroption",
      children: "WorkerOption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置向线程池提交worker的配置，具体提交方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section94763341419",
        children: "submitWorker"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.0.4"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "成员"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "声明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "workInput?: unknown;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置要执行的线程的输入值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priority"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["priority?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section162915519616",
              children: "Priority"
            }), ";"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置线程执行的优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetWorkers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "targetWorkers?: number[];"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要在几号线程中执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callback?: Function;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行完毕的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callbackInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callbackInput?: unknown[];"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数的入参。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useReturnVal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useReturnVal?: boolean;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数入参是否使用线程执行结束的返回值，优先级高于callbackInput。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "priority",
      children: "Priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线程执行的优先级枚举。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.0.4"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "成员"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIRST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从上到下，优先级依次降低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEAVY"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAST"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tcb",
      children: "TCB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向线程池提交worker后返回的状态，具体提交方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section94763341419",
        children: "submitWorker"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****起始版本：****Hvigor 6.0.4"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "成员"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "声明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getId(): string;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取TCB自身的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getWorkerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getWorkerId(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getSubmitTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getSubmitTime(): number;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取提交时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getStartTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getStartTime(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getEndTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getEndTime(): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getState(): TaskState;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取worker状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getPriority"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["getPriority(): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section162915519616",
              children: "Priority"
            }), ";"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getCallback(): Function;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCallbackInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getCallbackInput(): unknown[];"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取回调函数的输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getTaskPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getTaskPath(): string;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getTaskName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getTaskName(): string;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getTaskCompletePath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getTaskCompletePath(): string;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取任务完整路径，包含任务路径和任务名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useReturnVal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "useReturnVal(): boolean;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数是否使用线程执行结束的返回值作为输入。"
          })]
        })]
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
374885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
562764(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
783894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
269268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
312829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
100498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
541273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
88192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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