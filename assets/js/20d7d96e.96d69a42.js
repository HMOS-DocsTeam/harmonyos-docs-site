"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["149833"], {
293230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_store_api_store_c_store_c_h_store_c_module_install_store_c_module_install_md_20d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-store-api-store-c-store-c-h-store-c-module-install-store-c-module-install-md-20d.json
var site_docs_ref_store_api_store_c_store_c_h_store_c_module_install_store_c_module_install_md_20d_namespaceObject = JSON.parse('{"id":"store-api/store-c/store-c-h/store-c-module_install/store-c-module_install","title":"module_install.h","description":"概述","source":"@site/docs-ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install.md","sourceDirName":"store-api/store-c/store-c-h/store-c-module_install","slug":"/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install","permalink":"/harmonyos-docs-site/ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"module_install.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-module_install","kit":"应用服务","last_updated":"2026-04-22","slug":"store-c-module_install"},"sidebar":"ref","previous":{"title":"ModuleInstall","permalink":"/harmonyos-docs-site/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall"},"next":{"title":"归因结果回传","permalink":"/harmonyos-docs-site/ref/store-api/store-rest/store-rest-receive/store-rest-receive"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/store-api/store-c/store-c-h/store-c-module_install/store-c-module_install.md


const frontMatter = {
	title: 'module_install.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-module_install',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'store-c-module_install'
};
const contentTitle = 'module_install.h';

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
  "value": "类型",
  "id": "类型",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "module_installh",
        children: "module_install.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明按需分发能力的API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <AppGalleryKit/module_install.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhmsmoduleinstall.so"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall",
        children: "ModuleInstall"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型",
      children: "类型"
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
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_installedmodule",
              children: "ModuleInstall_InstalledModule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装模块信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_fetchmodulesresult",
              children: "ModuleInstall_FetchModulesResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装模块结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_statuscallback",
              children: "ModuleInstall_StatusCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_statuscallback",
              children: "ModuleInstall_StatusCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块安装状态回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_onstatuscallback",
              children: "ModuleInstall_OnStatusCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听回调函数"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_errcode",
              children: "ModuleInstall_ErrCode"
            }), " {  E_NO_ERROR = 0,  E_PARAMS = 401,  E_QUERY_MODULE = 1006500001,  E_REPEATED_CALL = 1006500002,  E_CONNECT_SA = 1006500004,  E_OFF_WITHOUT_ON = 1006500006,  E_CONNECT_SERVICE_EXTENSION = 1006500007,  E_WRITE_PARAM = 1006500008,  E_REQUEST_SERVER = 1006500009,  E_RESPONSE_INVALID = 1006500010,  E_INNER_ERROR = 1006500011  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_installstatus",
              children: "ModuleInstall_InstallStatus"
            }), " {  INSTALLED = 0,  NOT_INSTALLED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举安装状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_requestcode",
              children: "ModuleInstall_RequestCode"
            }), " {  MODULE_ALREADY_EXISTS = -8,  MODULE_UNAVAILABLE = -7,  INVALID_REQUEST = -6,  NETWORK_ERROR = -5,  INVOKER_VERIFICATION_FAILED = -4,  FOREGROUND_REQUIRED = -3,  ACTIVE_SESSION_LIMIT_EXCEEDED = -2,  FAILURE = -1,  SUCCESS = 0,  DOWNLOAD_WAIT_WIFI = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举请求码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-c/store-c-module/store-c-moduleinstall/store-c-moduleinstall#moduleinstall_taskstatus",
              children: "ModuleInstall_TaskStatus"
            }), " {  CREATE_TASK_FAILED = -4,  HIGHER_VERSION_INSTALLED = -3,  TASK_ALREADY_EXISTS = -2,  TASK_UNFOUND = -1,  TASK_CREATED = 0,  DOWNLOADING = 1,  DOWNLOAD_PAUSED = 2,  DOWNLOAD_WAITING = 3,  DOWNLOAD_SUCCESSFUL = 4,  DOWNLOAD_FAILED = 5,  DOWNLOAD_WAIT_FOR_WIFI = 6,  INSTALL_WAITING = 20,  INSTALLING = 21,  INSTALL_SUCCESSFUL = 22,  INSTALL_FAILED = 23  }"]
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