"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["334405"], {
790532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_moduleinstall_store_moduleinstall_c_store_moduleinstall_c_md_e02_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-moduleinstall-store-moduleinstall-c-store-moduleinstall-c-md-e02.json
var site_docs_store_kit_guide_store_moduleinstall_store_moduleinstall_c_store_moduleinstall_c_md_e02_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-moduleinstall/store-moduleinstall_c/store-moduleinstall_c","title":"产品特性按需分发(C/C++)","description":"场景介绍","source":"@site/docs/store-kit-guide/store-moduleinstall/store-moduleinstall_c/store-moduleinstall_c.md","sourceDirName":"store-kit-guide/store-moduleinstall/store-moduleinstall_c","slug":"/store-kit-guide/store-moduleinstall/store-moduleinstall_c/","permalink":"/harmonyos-docs-site/store-kit-guide/store-moduleinstall/store-moduleinstall_c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"产品特性按需分发(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-moduleinstall_c","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"产品特性按需分发(ArkTS)","permalink":"/harmonyos-docs-site/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/"},"next":{"title":"生态查询服务","permalink":"/harmonyos-docs-site/store-kit-guide/store-erms/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-moduleinstall/store-moduleinstall_c/store-moduleinstall_c.md


const frontMatter = {
	title: '产品特性按需分发(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-moduleinstall_c',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '产品特性按需分发(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用指导",
  "id": "使用指导",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 3
}, {
  "value": "获取模块安装信息",
  "id": "获取模块安装信息",
  "level": 2
}, {
  "value": "按需加载模块",
  "id": "按需加载模块",
  "level": 2
}, {
  "value": "取消下载任务",
  "id": "取消下载任务",
  "level": 2
}, {
  "value": "展示流量弹窗",
  "id": "展示流量弹窗",
  "level": 2
}, {
  "value": "监听下载任务",
  "id": "监听下载任务",
  "level": 2
}, {
  "value": "定义监听下载回调函数",
  "id": "定义监听下载回调函数",
  "level": 3
}, {
  "value": "初始化下载进度回调",
  "id": "初始化下载进度回调",
  "level": 3
}, {
  "value": "监听下载进度",
  "id": "监听下载进度",
  "level": 3
}, {
  "value": "取消监听下载任务",
  "id": "取消监听下载任务",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "产品特性按需分发cc",
        children: "产品特性按需分发(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着HarmonyOS应用的持续发展，应用的功能将越来越丰富，实际上80%的用户使用时长都会集中在20%的特性上，其余的功能可能也仅仅是面向部分用户。为了避免用户首次下载应用耗时过长，及过多占用用户空间，应用市场服务提供按需分发的能力，支持用户按需动态下载自己所需的增强特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按需分发：一个应用程序被打包成多个安装包，安装包包含了所有的应用程序代码和静态资源。用户从应用市场下载的应用只包含基本功能的安装包，当用户需要使用增强功能时，相应安装包将会从服务器下载到设备上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要上架应用市场。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "产品特性按需分发功能支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["产品特性按需分发场景提供以下C接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall",
        children: "ModuleInstall"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getinstalledmodule",
              children: "HMS_ModuleInstall_GetInstalledModule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模块是否安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getinstalledmodulename",
              children: "HMS_ModuleInstall_GetInstalledModuleName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getinstalledmoduletype",
              children: "HMS_ModuleInstall_GetInstalledModuleType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getmoduleinstallstatus",
              children: "HMS_ModuleInstall_GetModuleInstallStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块安装状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_fetchmodules",
              children: "HMS_ModuleInstall_FetchModules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求下载模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode",
              children: "HMS_ModuleInstall_GetFetchModulesRequestCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载请求码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskstatus",
              children: "HMS_ModuleInstall_GetFetchModulesTaskStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载任务状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid",
              children: "HMS_ModuleInstall_GetFetchModulesTaskId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载任务id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdesc",
              children: "HMS_ModuleInstall_GetFetchModulesDesc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodules",
              children: "HMS_ModuleInstall_GetFetchModules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestotalsize",
              children: "HMS_ModuleInstall_GetFetchModulesTotalSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载总大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdownloadedsize",
              children: "HMS_ModuleInstall_GetFetchModulesDownloadedSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载已下载大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_canceltask",
              children: "HMS_ModuleInstall_CancelTask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消下载任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_showcellulardataconfirmation",
              children: "HMS_ModuleInstall_ShowCellularDataConfirmation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示流量弹窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_createstatuscallback",
              children: "HMS_ModuleInstall_CreateStatusCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建下载进度监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_on",
              children: "HMS_ModuleInstall_On"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载进度监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_releasestatuscallback",
              children: "HMS_ModuleInstall_ReleaseStatusCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放下载进度监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_off",
              children: "HMS_ModuleInstall_Off"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消下载进度监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用指导",
      children: "使用指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用要使用ModuleInstall提供的按需分发能力，需要添加对应的头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libhmsmoduleinstall.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要开发者引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install",
        children: "module_install.h"
      }), "头文件后，才可以使用按需分发相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"AppGalleryKit/module_install.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取模块安装信息",
      children: "获取模块安装信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用按需分发能力之前，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getinstalledmodule",
        children: "HMS_ModuleInstall_GetInstalledModule"
      }), "接口查询按需分发的模块是否安装，接口调用成功后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getinstalledmodulename",
        children: "HMS_ModuleInstall_GetInstalledModuleName"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getinstalledmoduletype",
        children: "HMS_ModuleInstall_GetInstalledModuleType"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getmoduleinstallstatus",
        children: "HMS_ModuleInstall_GetModuleInstallStatus"
      }), "接口分别获取模块名称、模块类型、模块安装状态信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *moduleName;\nModuleInstall_InstalledModule *installedModule;\nModuleInstall_ErrCode ret = HMS_ModuleInstall_GetInstalledModule(moduleName, strlen(moduleName), &installedModule);\nif (ret == E_NO_ERROR) {\n    char *installedModuleName = HMS_ModuleInstall_GetInstalledModuleName(installedModule);\n    int moduleType = HMS_ModuleInstall_GetInstalledModuleType(installedModule);\n    int installStatus = HMS_ModuleInstall_GetModuleInstallStatus(installedModule);\n}\nif (installedModule != nullptr) {\n    delete installedModule;\n    installedModule = nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "按需加载模块",
      children: "按需加载模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_fetchmodules",
        children: "HMS_ModuleInstall_FetchModules"
      }), "按需加载模块，接口调用成功之后可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode",
        children: "HMS_ModuleInstall_GetFetchModulesRequestCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskstatus",
        children: "HMS_ModuleInstall_GetFetchModulesTaskStatus"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid",
        children: "HMS_ModuleInstall_GetFetchModulesTaskId"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdesc",
        children: "HMS_ModuleInstall_GetFetchModulesDesc"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodules",
        children: "HMS_ModuleInstall_GetFetchModules"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestotalsize",
        children: "HMS_ModuleInstall_GetFetchModulesTotalSize"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesdownloadedsize",
        children: "HMS_ModuleInstall_GetFetchModulesDownloadedSize"
      }), "接口获取模块下载相关信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *bundleName;\nint arraySize = 1;\nchar** moduleNames = new char*[arraySize];\nfor (int i = 0; i < arraySize; i++) {\n     moduleNames[i] = new char[256];\n}\nModuleInstall_FetchModulesResult *fetchModulesResult;\nModuleInstall_ErrCode ret = HMS_ModuleInstall_FetchModules(bundleName, strlen(bundleName), moduleNames, arraySize, &fetchModulesResult);\nif (ret == E_NO_ERROR) {\n    ModuleInstall_RequestCode code = HMS_ModuleInstall_GetFetchModulesRequestCode(fetchModulesResult);\n    ModuleInstall_TaskStatus taskStatus = HMS_ModuleInstall_GetFetchModulesTaskStatus(fetchModulesResult);\n    char *taskId = HMS_ModuleInstall_GetFetchModulesTaskId(fetchModulesResult);\n    char *desc = HMS_ModuleInstall_GetFetchModulesDesc(fetchModulesResult);\n    char *modules = HMS_ModuleInstall_GetFetchModules(fetchModulesResult);\n    int totalSize = HMS_ModuleInstall_GetFetchModulesTotalSize(fetchModulesResult);\n    int downloadedSize = HMS_ModuleInstall_GetFetchModulesDownloadedSize(fetchModulesResult);\n}\nif (moduleNames != nullptr) {\n    delete[] moduleNames;\n    moduleNames = nullptr;\n}\nif (fetchModulesResult != nullptr) {\n    delete fetchModulesResult;\n    fetchModulesResult = nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "取消下载任务",
      children: "取消下载任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要取消下载，应用可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_canceltask",
        children: "HMS_ModuleInstall_CancelTask"
      }), "接口取消下载任务，其中taskId是调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulestaskid",
        children: "HMS_ModuleInstall_GetFetchModulesTaskId"
      }), "接口返回的taskId。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *taskId; // 下载任务id\nint cancelResult; // 取消下载结果\nModuleInstall_ErrCode ret = HMS_ModuleInstall_CancelTask(taskId, strlen(taskId), cancelResult);\nif (ret == E_NO_ERROR && cancelResult == 0) {\n    // 取消下载成功\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "展示流量弹窗",
      children: "展示流量弹窗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_getfetchmodulesrequestcode",
        children: "HMS_ModuleInstall_GetFetchModulesRequestCode"
      }), "接口返回DOWNLOAD_WAIT_WIFI时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_showcellulardataconfirmation",
        children: "HMS_ModuleInstall_ShowCellularDataConfirmation"
      }), "接口展示流量弹窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *taskId; // 下载任务id\nint showResult; // 展示流量弹窗结果\nModuleInstall_ErrCode ret = HMS_ModuleInstall_ShowCellularDataConfirmation(taskId, strlen(taskId), showResult);\nif (ret == E_NO_ERROR && showResult == 0) {\n    // 展示流量弹窗成功\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听下载任务",
      children: "监听下载任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义监听下载回调函数",
      children: "定义监听下载回调函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void onEvent(char *bundleName, char *eventInfo) {\n    // 回调处理\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化下载进度回调",
      children: "初始化下载进度回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_createstatuscallback",
        children: "HMS_ModuleInstall_CreateStatusCallback"
      }), "初始化下载进度回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_StatusCallback *statusCallback;\nModuleInstall_OnStatusCallback onStatusCallback = onEvent;\nstatusCallback = HMS_ModuleInstall_CreateStatusCallback(&onStatusCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听下载进度",
      children: "监听下载进度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_on",
        children: "HMS_ModuleInstall_On"
      }), "接口监听下载进度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *bundleName; // 应用包名\nint appIndex; // 应用分身索引\nint period; // 监听周期\nModuleInstall_ErrCode ret = HMS_ModuleInstall_On(bundleName, strlen(bundleName), appIndex, period, &statusCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "取消监听下载任务",
      children: "取消监听下载任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#hms_moduleinstall_off",
        children: "HMS_ModuleInstall_Off"
      }), "接口取消下载进度监听。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *bundleName; // 应用包名\nint appIndex; // 应用分身索引\nModuleInstall_ErrCode ret = HMS_ModuleInstall_Off(bundleName, strlen(bundleName), appIndex);\nif (ret == E_NO_ERROR) {\n    // 取消监听成功\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完成应用按需分发过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstring>\n#include \"AppGalleryKit/module_install.h\"\n\nvoid GetInstalledModule() {\n    char *moduleName;\n    ModuleInstall_InstalledModule *installedModule;\n    ModuleInstall_ErrCode ret = HMS_ModuleInstall_GetInstalledModule(moduleName, strlen(moduleName), &installedModule);\n    if (ret == E_NO_ERROR) {\n        char *installedModuleName = HMS_ModuleInstall_GetInstalledModuleName(installedModule);\n        int moduleType = HMS_ModuleInstall_GetInstalledModuleType(installedModule);\n        int installStatus = HMS_ModuleInstall_GetModuleInstallStatus(installedModule);\n    }\n    if (installedModule != nullptr) {\n        delete installedModule;\n        installedModule = nullptr;\n    }\n}\n\nvoid ShowCellularDataConfirmation(char *taskId) {\n    int showResult;\n    ModuleInstall_ErrCode ret = HMS_ModuleInstall_ShowCellularDataConfirmation(taskId, strlen(taskId), showResult);\n}\n\nvoid FetchModules() {\n    char *bundleName;\n    int arraySize = 1;\n    char **moduleNames = new char *[arraySize];\n    for (int i = 0; i < arraySize; i++) {\n        moduleNames[i] = new char[256];\n    }\n    ModuleInstall_FetchModulesResult *fetchModulesResult;\n    ModuleInstall_ErrCode ret = HMS_ModuleInstall_FetchModules(bundleName, strlen(bundleName), moduleNames, arraySize, &fetchModulesResult);\n    if (ret == E_NO_ERROR) {\n        ModuleInstall_TaskStatus taskStatus = HMS_ModuleInstall_GetFetchModulesTaskStatus(fetchModulesResult);\n        char *taskId = HMS_ModuleInstall_GetFetchModulesTaskId(fetchModulesResult);\n        ModuleInstall_RequestCode code = HMS_ModuleInstall_GetFetchModulesRequestCode(fetchModulesResult);\n        if (code == DOWNLOAD_WAIT_WIFI) {\n            ShowCellularDataConfirmation(taskId);\n        }\n        char *desc = HMS_ModuleInstall_GetFetchModulesDesc(fetchModulesResult);\n        char *modules = HMS_ModuleInstall_GetFetchModules(fetchModulesResult);\n        int totalSize = HMS_ModuleInstall_GetFetchModulesTotalSize(fetchModulesResult);\n        int downloadedSize = HMS_ModuleInstall_GetFetchModulesDownloadedSize(fetchModulesResult);\n    }\n\n    if (moduleNames != nullptr) {\n        delete[] moduleNames;\n        moduleNames = nullptr;\n    }\n\n    if (fetchModulesResult != nullptr) {\n        delete fetchModulesResult;\n        fetchModulesResult = nullptr;\n    }\n}\n\nvoid CancelTask() {\n    char *taskId;\n    int cancelResult;\n    ModuleInstall_ErrCode ret = HMS_ModuleInstall_CancelTask(taskId, strlen(taskId), cancelResult);\n}\n\nvoid onEvent(char *bundleName, char *eventInfo) {}\n\nvoid On() {\n    char *bundleName;\n    int appIndex;\n    int period;\n    ModuleInstall_StatusCallback *statusCallback;\n    ModuleInstall_OnStatusCallback onStatusCallback = onEvent;\n    statusCallback = HMS_ModuleInstall_CreateStatusCallback(&onStatusCallback);\n    ModuleInstall_ErrCode ret = HMS_ModuleInstall_On(bundleName, strlen(bundleName), appIndex, period, &statusCallback);\n}\n\nvoid Off() {\n    char *bundleName;\n    int appIndex;\n    ModuleInstall_ErrCode ret = HMS_ModuleInstall_Off(bundleName, strlen(bundleName), appIndex);\n}\n"
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