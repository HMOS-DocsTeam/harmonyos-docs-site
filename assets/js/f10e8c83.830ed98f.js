"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["886318"], {
749751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_store_api_store_c_store_c_module_store_c_moduleinstall_store_c_moduleinstall_md_f10_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-store-api-store-c-store-c-module-store-c-moduleinstall-store-c-moduleinstall-md-f10.json
var site_docs_ref_store_api_store_c_store_c_module_store_c_moduleinstall_store_c_moduleinstall_md_f10_namespaceObject = JSON.parse('{"id":"store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall","title":"ModuleInstall","description":"概述","source":"@site/docs-ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall.md","sourceDirName":"store-api/store-c/store-c-module/store-c-moduleinstall","slug":"/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall","permalink":"/harmonyos-docs-site/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ModuleInstall","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall","kit":"应用服务","last_updated":"2026-04-22","slug":"store-c-moduleinstall"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/store-api/store-arkts/store-error-code/store-error-code"},"next":{"title":"module_install.h","permalink":"/harmonyos-docs-site/ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall.md


const frontMatter = {
	title: 'ModuleInstall',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'store-c-moduleinstall'
};
const contentTitle = 'ModuleInstall';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "文件",
  "id": "文件",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "ModuleInstall_InstalledModule",
  "id": "moduleinstall_installedmodule",
  "level": 3
}, {
  "value": "ModuleInstall_FetchModulesResult",
  "id": "moduleinstall_fetchmodulesresult",
  "level": 3
}, {
  "value": "ModuleInstall_StatusCallback",
  "id": "moduleinstall_statuscallback",
  "level": 3
}, {
  "value": "ModuleInstall_OnStatusCallback",
  "id": "moduleinstall_onstatuscallback",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ModuleInstall_ErrCode",
  "id": "moduleinstall_errcode",
  "level": 3
}, {
  "value": "ModuleInstall_InstallStatus",
  "id": "moduleinstall_installstatus",
  "level": 3
}, {
  "value": "ModuleInstall_RequestCode",
  "id": "moduleinstall_requestcode",
  "level": 3
}, {
  "value": "ModuleInstall_TaskStatus",
  "id": "moduleinstall_taskstatus",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_ModuleInstall_GetInstalledModule",
  "id": "hms_moduleinstall_getinstalledmodule",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetInstalledModuleName",
  "id": "hms_moduleinstall_getinstalledmodulename",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetInstalledModuleType",
  "id": "hms_moduleinstall_getinstalledmoduletype",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetModuleInstallStatus",
  "id": "hms_moduleinstall_getmoduleinstallstatus",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_FetchModules",
  "id": "hms_moduleinstall_fetchmodules",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModulesRequestCode",
  "id": "hms_moduleinstall_getfetchmodulesrequestcode",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModulesTaskStatus",
  "id": "hms_moduleinstall_getfetchmodulestaskstatus",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModulesTaskId",
  "id": "hms_moduleinstall_getfetchmodulestaskid",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModulesDesc",
  "id": "hms_moduleinstall_getfetchmodulesdesc",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModules",
  "id": "hms_moduleinstall_getfetchmodules",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModulesTotalSize",
  "id": "hms_moduleinstall_getfetchmodulestotalsize",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_GetFetchModulesDownloadedSize",
  "id": "hms_moduleinstall_getfetchmodulesdownloadedsize",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_CancelTask",
  "id": "hms_moduleinstall_canceltask",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_ShowCellularDataConfirmation",
  "id": "hms_moduleinstall_showcellulardataconfirmation",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_CreateStatusCallback",
  "id": "hms_moduleinstall_createstatuscallback",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_On",
  "id": "hms_moduleinstall_on",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_ReleaseStatusCallback",
  "id": "hms_moduleinstall_releasestatuscallback",
  "level": 3
}, {
  "value": "HMS_ModuleInstall_Off",
  "id": "hms_moduleinstall_off",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "moduleinstall",
        children: "ModuleInstall"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述AppGallery kit提供按需分发能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install",
              children: "module_install.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明按需分发能力提供的API。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装模块信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装模块结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_statuscallback",
              children: "ModuleInstall_StatusCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_statuscallback",
              children: "ModuleInstall_StatusCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装状态回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (*", (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_onstatuscallback",
              children: "ModuleInstall_OnStatusCallback"
            }), ")(char *bundleName, char *eventInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_errcode",
              children: "ModuleInstall_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installstatus",
              children: "ModuleInstall_InstallStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举安装状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_requestcode",
              children: "ModuleInstall_RequestCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举请求码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_taskstatus",
              children: "ModuleInstall_TaskStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举任务状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getinstalledmodule",
              children: "HMS_ModuleInstall_GetInstalledModule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模块是否安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getinstalledmodulename",
              children: "HMS_ModuleInstall_GetInstalledModuleName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getinstalledmoduletype",
              children: "HMS_ModuleInstall_GetInstalledModuleType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getmoduleinstallstatus",
              children: "HMS_ModuleInstall_GetModuleInstallStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块安装状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_fetchmodules",
              children: "HMS_ModuleInstall_FetchModules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求下载模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodulesrequestcode",
              children: "HMS_ModuleInstall_GetFetchModulesRequestCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载请求码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodulestaskstatus",
              children: "HMS_ModuleInstall_GetFetchModulesTaskStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载任务状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodulestaskid",
              children: "HMS_ModuleInstall_GetFetchModulesTaskId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载任务id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodulesdesc",
              children: "HMS_ModuleInstall_GetFetchModulesDesc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodules",
              children: "HMS_ModuleInstall_GetFetchModules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodulestotalsize",
              children: "HMS_ModuleInstall_GetFetchModulesTotalSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载总大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_getfetchmodulesdownloadedsize",
              children: "HMS_ModuleInstall_GetFetchModulesDownloadedSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模块下载已下载大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_canceltask",
              children: "HMS_ModuleInstall_CancelTask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消下载任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_showcellulardataconfirmation",
              children: "HMS_ModuleInstall_ShowCellularDataConfirmation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示流量弹窗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_createstatuscallback",
              children: "HMS_ModuleInstall_CreateStatusCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建下载进度监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_on",
              children: "HMS_ModuleInstall_On"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载进度监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_releasestatuscallback",
              children: "HMS_ModuleInstall_ReleaseStatusCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放下载进度监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_off",
              children: "HMS_ModuleInstall_Off"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消下载进度监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_installedmodule",
      children: "ModuleInstall_InstalledModule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ModuleInstall_InstalledModule ModuleInstall_InstalledModule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装模块信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_fetchmodulesresult",
      children: "ModuleInstall_FetchModulesResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ModuleInstall_FetchModulesResult ModuleInstall_FetchModulesResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装模块结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_statuscallback",
      children: "ModuleInstall_StatusCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ModuleInstall_StatusCallback ModuleInstall_StatusCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块安装状态回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_onstatuscallback",
      children: "ModuleInstall_OnStatusCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ModuleInstall_OnStatusCallback)(char *bundleName, char *eventInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_errcode",
      children: "ModuleInstall_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ModuleInstall_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_NO_ERROR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_PARAMS = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_QUERY_MODULE = 1006500001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用包管理模块接口异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_REPEATED_CALL = 1006500002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复调用接口，输入相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_CONNECT_SA = 1006500004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_OFF_WITHOUT_ON = 1006500006"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_on",
              children: "HMS_ModuleInstall_On"
            }), "接口共同使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_CONNECT_SERVICE_EXTENSION = 1006500007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务连接失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_WRITE_PARAM = 1006500008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数写入异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_REQUEST_SERVER = 1006500009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_RESPONSE_INVALID = 1006500010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应参数无法解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_INNER_ERROR = 1006500011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_installstatus",
      children: "ModuleInstall_InstallStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ModuleInstall_InstallStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举安装状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALLED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_INSTALLED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未安装。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_requestcode",
      children: "ModuleInstall_RequestCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ModuleInstall_RequestCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举按需下载模块请求码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODULE_ALREADY_EXISTS = -8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块已存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MODULE_UNAVAILABLE = -7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要下载的模块不存在或者模块不适配该设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_REQUEST = -6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该请求无效，请求中包含的信息不准确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_ERROR = -5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络异常，请求失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVOKER_VERIFICATION_FAILED = -4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用者信息异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOREGROUND_REQUIRED = -3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅允许应用在前台时请求按需加载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE_SESSION_LIMIT_EXCEEDED = -2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求被拒绝，因为当前至少有一个请求正在下载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAILURE = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_WAIT_WIFI = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前使用的是流量，开发者需要调用  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_moduleinstall_showcellulardataconfirmation",
              children: "HMS_ModuleInstall_ShowCellularDataConfirmation"
            }), "接口，提醒用户确认是否使用流量下载。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moduleinstall_taskstatus",
      children: "ModuleInstall_TaskStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ModuleInstall_TaskStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举任务状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE_TASK_FAILED = -4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建下载任务失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIGHER_VERSION_INSTALLED = -3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地存在相同或者更高版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_ALREADY_EXISTS = -2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载任务已存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_UNFOUND = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载任务不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TASK_CREATED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建下载任务成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOADING = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_PAUSED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_WAITING = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待下载中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_SUCCESSFUL = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_FAILED = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNLOAD_WAIT_FOR_WIFI = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi预约。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALL_WAITING = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALLING = 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALL_SUCCESSFUL = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALL_FAILED = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getinstalledmodule",
      children: "HMS_ModuleInstall_GetInstalledModule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_ErrCode HMS_ModuleInstall_GetInstalledModule(const char *moduleName, unsigned int length,\n    ModuleInstall_InstalledModule **installedModule)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询模块是否安装。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            }), " **installedModule"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_QUERY_MODULE表示调用包管理模块接口异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getinstalledmodulename",
      children: "HMS_ModuleInstall_GetInstalledModuleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *HMS_ModuleInstall_GetInstalledModuleName(const ModuleInstall_InstalledModule *installedModule)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            }), " *installedModule"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回模块名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getinstalledmoduletype",
      children: "HMS_ModuleInstall_GetInstalledModuleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int HMS_ModuleInstall_GetInstalledModuleType(const ModuleInstall_InstalledModule *installedModule)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            }), " *installedModule"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["返回模块类型, 取值参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#moduletype",
        children: "bundleManager.ModuleType"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#moduleinstall_installstatus",
        children: "ModuleInstall_InstallStatus"
      }), "=1时，默认返回0。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getmoduleinstallstatus",
      children: "HMS_ModuleInstall_GetModuleInstallStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_InstallStatus HMS_ModuleInstall_GetModuleInstallStatus(const ModuleInstall_InstalledModule *installedModule)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块安装状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            }), " *installedModule"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模块安装状态，取值参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#moduleinstall_installstatus",
        children: "ModuleInstall_InstallStatus"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_fetchmodules",
      children: "HMS_ModuleInstall_FetchModules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_ErrCode HMS_ModuleInstall_FetchModules(const char *bundleName, unsigned int length, char **moduleNames, unsigned int moduleNamesLength, ModuleInstall_FetchModulesResult **fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求下载模块。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **moduleNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int moduleNamesLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名数组长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " **fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_CONNECT_SA表示服务异常；返回E_CONNECT_SERVICE_EXTENSION表示服务连接失败；返回E_WRITE_PARAM表示参数写入异常；返回E_REQUEST_SERVER表示请求服务异常；返回E_RESPONSE_INVALID表示响应参数无法解析；返回E_INNER_ERROR表示内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodulesrequestcode",
      children: "HMS_ModuleInstall_GetFetchModulesRequestCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_RequestCode HMS_ModuleInstall_GetFetchModulesRequestCode(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载请求码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按需下载模块请求码，取值参考: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#moduleinstall_requestcode",
        children: "ModuleInstall_RequestCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodulestaskstatus",
      children: "HMS_ModuleInstall_GetFetchModulesTaskStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_TaskStatus HMS_ModuleInstall_GetFetchModulesTaskStatus(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载任务状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模块下载任务状态，取值参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#moduleinstall_taskstatus",
        children: "ModuleInstall_TaskStatus"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodulestaskid",
      children: "HMS_ModuleInstall_GetFetchModulesTaskId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *HMS_ModuleInstall_GetFetchModulesTaskId(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载任务id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodulesdesc",
      children: "HMS_ModuleInstall_GetFetchModulesDesc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char *HMS_ModuleInstall_GetFetchModulesDesc(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodules",
      children: "HMS_ModuleInstall_GetFetchModules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* HMS_ModuleInstall_GetFetchModules(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载模块名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载模块名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodulestotalsize",
      children: "HMS_ModuleInstall_GetFetchModulesTotalSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int HMS_ModuleInstall_GetFetchModulesTotalSize(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载总大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载模块总大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_getfetchmodulesdownloadedsize",
      children: "HMS_ModuleInstall_GetFetchModulesDownloadedSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int HMS_ModuleInstall_GetFetchModulesDownloadedSize(const ModuleInstall_FetchModulesResult *fetchModulesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模块下载已下载大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " *fetchModulesResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已下载模块大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_canceltask",
      children: "HMS_ModuleInstall_CancelTask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_ErrCode HMS_ModuleInstall_CancelTask(const char *taskId, unsigned int length, unsigned int cancelResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消下载任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int cancelResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消下载结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_CONNECT_SERVICE_EXTENSION表示服务连接失败；返回E_WRITE_PARAM表示参数写入异常；返回E_REQUEST_SERVER表示请求服务异常；返回E_RESPONSE_INVALID表示响应参数无法解析；"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_showcellulardataconfirmation",
      children: "HMS_ModuleInstall_ShowCellularDataConfirmation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_ErrCode HMS_ModuleInstall_ShowCellularDataConfirmation(const char *taskId, unsigned int length, unsigned int showResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示流量弹窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务id长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int showResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示流量弹窗结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_CONNECT_SERVICE_EXTENSION表示服务连接失败；返回E_WRITE_PARAM表示参数写入异常；返回E_REQUEST_SERVER表示请求服务异常；返回E_RESPONSE_INVALID表示响应参数无法解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_createstatuscallback",
      children: "HMS_ModuleInstall_CreateStatusCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_StatusCallback *HMS_ModuleInstall_CreateStatusCallback(ModuleInstall_OnStatusCallback *onStatusCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建下载进度监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_onstatuscallback",
              children: "ModuleInstall_OnStatusCallback"
            }), " *onStatusCallback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载进度监听回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载进度监听回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_on",
      children: "HMS_ModuleInstall_On"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_ErrCode HMS_ModuleInstall_On(const char *bundleName, unsigned int length, unsigned int appIndex, unsigned int period, ModuleInstall_StatusCallback **callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载进度监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int appIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用分身索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_statuscallback",
              children: "ModuleInstall_StatusCallback"
            }), " **callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载进度监听回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_REPEATED_CALL表示重复调用接口；返回E_CONNECT_SA表示服务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_releasestatuscallback",
      children: "HMS_ModuleInstall_ReleaseStatusCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_ModuleInstall_ReleaseStatusCallback(ModuleInstall_StatusCallback *statusCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放下载进度监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#moduleinstall_statuscallback",
              children: "ModuleInstall_StatusCallback"
            }), " *statusCallback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载进度监听回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_moduleinstall_off",
      children: "HMS_ModuleInstall_Off"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ModuleInstall_ErrCode HMS_ModuleInstall_Off(const char *bundleName, unsigned int length, unsigned int appIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消下载进度监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AppGalleryService.Distribution.OnDemandInstall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名长度，最大长度512。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int appIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用分身索引。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_OFF_WITHOUT_ON表示未与监听接口共同使用；返回E_CONNECT_SA表示服务异常。"
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