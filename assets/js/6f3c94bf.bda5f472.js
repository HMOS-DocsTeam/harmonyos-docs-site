"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["550839"], {
872565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_moduleinstall_store_moduleinstall_arkts_store_moduleinstall_arkts_md_6f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-moduleinstall-store-moduleinstall-arkts-store-moduleinstall-arkts-md-6f3.json
var site_docs_store_kit_guide_store_moduleinstall_store_moduleinstall_arkts_store_moduleinstall_arkts_md_6f3_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/store-moduleinstall_arkts","title":"产品特性按需分发(ArkTS)","description":"场景介绍","source":"@site/docs/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/store-moduleinstall_arkts.md","sourceDirName":"store-kit-guide/store-moduleinstall/store-moduleinstall_arkts","slug":"/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/","permalink":"/harmonyos-docs-site/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"产品特性按需分发(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-moduleinstall_arkts","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用市场推荐","permalink":"/harmonyos-docs-site/store-kit-guide/store-productview/"},"next":{"title":"产品特性按需分发(C/C++)","permalink":"/harmonyos-docs-site/store-kit-guide/store-moduleinstall/store-moduleinstall_c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-moduleinstall/store-moduleinstall_arkts/store-moduleinstall_arkts.md


const frontMatter = {
	title: '产品特性按需分发(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-moduleinstall_arkts',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '产品特性按需分发(ArkTS)';

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
  "value": "业务流程",
  "id": "业务流程",
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
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "获取模块安装信息",
  "id": "获取模块安装信息",
  "level": 3
}, {
  "value": "创建按需加载的请求实例",
  "id": "创建按需加载的请求实例",
  "level": 3
}, {
  "value": "请求按需加载模块",
  "id": "请求按需加载模块",
  "level": 3
}, {
  "value": "使用动态模块",
  "id": "使用动态模块",
  "level": 3
}, {
  "value": "接入调试功能",
  "id": "接入调试功能",
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
        id: "产品特性按需分发arkts",
        children: "产品特性按需分发(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着HarmonyOS应用的持续发展，应用的功能将越来越丰富，实际上80%的用户使用时长都会集中在20%的特性上，其余的功能可能也仅仅是面向部分用户。为了避免用户首次下载应用耗时过长，及过多占用用户空间，应用市场服务提供按需分发的能力，支持用户按需动态下载自己所需的增强特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按需分发：一个应用程序被打包成多个安装包，安装包包含了所有的应用程序代码和静态资源。用户从应用市场下载的应用只包含基本功能的安装包，当用户需要使用增强功能时，相应安装包将会从服务器下载到设备上（应用发布请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230",
        children: "发布HarmonyOS应用"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(215879)/* ["default"] */.A) + "",
        width: "779",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户下载A应用的基础包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户使用增强功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过API下载动态安装包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动态安装包下载完成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过on接口告知用户下载结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要上架应用市场。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "产品特性按需分发功能支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "产品特性按需分发接入调试功能支持ARM版本、X86版本的模拟器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["产品特性按需分发场景提供以下ArkTS接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagergetinstalledmodule",
              children: "getInstalledModule"
            }), "(moduleName: string): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#installedmodule",
              children: "InstalledModule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模块安装信息接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallprovidercreatemoduleinstallrequest",
              children: "createModuleInstallRequest"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
              children: "common.ExtensionContext"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallrequest",
              children: "ModuleInstallRequest"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallrequestaddmodule",
              children: "addModule"
            }), "(moduleName: string): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#returncode",
              children: "ReturnCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加要按需加载的模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagerfetchmodules",
              children: "fetchModules"
            }), "(moduleInstallRequest: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallrequest",
              children: "ModuleInstallRequest"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallsessionstate",
              children: "ModuleInstallSessionState"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按需加载请求接口，异步返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagercanceltask",
              children: "cancelTask"
            }), "(taskId: string): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#returncode",
              children: "ReturnCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消下载任务接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagershowcellulardataconfirmation",
              children: "showCellularDataConfirmation"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "common.UIAbilityContext"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
              children: "common.ExtensionContext"
            }), ", taskId: string): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#returncode",
              children: "ReturnCode"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanageronmoduleinstallstatus",
              children: "on"
            }), "(type: 'moduleInstallStatus', callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallsessionstate",
              children: "ModuleInstallSessionState"
            }), ">, timeout: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听当前应用下载任务的进度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanageroffmoduleinstallstatus",
              children: "off"
            }), "(type: 'moduleInstallStatus', callback?: Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallsessionstate",
              children: "ModuleInstallSessionState"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听当前应用下载任务的进度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取模块安装信息",
      children: "获取模块安装信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入moduleInstallManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LoadInstallService.ets\nimport { moduleInstallManager } from '@kit.AppGalleryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "入参为需要查询的模块名称。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const moduleName: string = 'AModule';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagergetinstalledmodule",
            children: "getInstalledModule"
          }), "方法，将步骤2中构造的参数传入模块中的getInstalledModule方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const moduleInfo: moduleInstallManager.InstalledModule = moduleInstallManager.getInstalledModule(moduleName);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建按需加载的请求实例",
      children: "创建按需加载的请求实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入moduleInstallManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LoadInstallService.ets\nimport { moduleInstallManager } from '@kit.AppGalleryKit';\nimport type { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["入参为当前应用的上下文context，只支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
            children: "UIAbilityContext"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
            children: "ExtensionContext"
          }), "类型的上下文，其中UIAbilityContext类型的上下文是要校验当前应用是否在前台，如果不在前台，则会被拒绝调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const context: common.UIAbilityContext | common.ExtensionContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallprovidercreatemoduleinstallrequest",
            children: "createModuleInstallRequest"
          }), "方法，将步骤2中构造的参数依次传入模块中的createModuleInstallRequest方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const myModuleInstallProvider: moduleInstallManager.ModuleInstallProvider = new moduleInstallManager.ModuleInstallProvider();\nconst myModuleInstallRequest: moduleInstallManager.ModuleInstallRequest = myModuleInstallProvider.createModuleInstallRequest(context);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求按需加载模块",
      children: "请求按需加载模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入moduleInstallManager模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LoadInstallService.ets\nimport type { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { moduleInstallManager } from '@kit.AppGalleryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "入参为当前要按需加载的模块名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const moduleNameA: string = 'AModule';\nconst moduleNameB: string = 'BModule';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallrequest",
            children: "ModuleInstallRequest"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallrequestaddmodule",
            children: "addModule"
          }), "方法，将步骤2中构造的参数依次传入模块中的addModule方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let myModuleInstallRequest: moduleInstallManager.ModuleInstallRequest;\ntry {\n  const myModuleInstallProvider: moduleInstallManager.ModuleInstallProvider = new moduleInstallManager.ModuleInstallProvider();\n  const context: common.UIAbilityContext | common.ExtensionContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  myModuleInstallRequest = myModuleInstallProvider.createModuleInstallRequest(context);\n  const aResult: moduleInstallManager.ReturnCode = myModuleInstallRequest.addModule(moduleNameA);\n  const bResult: moduleInstallManager.ReturnCode = myModuleInstallRequest.addModule(moduleNameB);\n  hilog.info(0, 'TAG', 'aResult:' + aResult + ' bResult:' + bResult);\n} catch (error) {\n  hilog.error(0, 'TAG', `addModule onError.code is ${error.code}, message is ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagerfetchmodules",
            children: "fetchModules"
          }), "方法，将步骤3中的myModuleInstallRequest传入模块中的fetchModules方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  moduleInstallManager.fetchModules(myModuleInstallRequest)\n    .then(() => {\n      hilog.info(0, 'TAG', 'Succeeded in fetching Modules data.');\n    })\n} catch (error) {\n  hilog.error(0, 'TAG', `fetching Modules onError.code is ${error.code}, message is ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用动态模块",
      children: "使用动态模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["假如应用A由entry.hap、AModulelib.hsp两个包组成，其中entry是基础包，AModulelib扩展是功能包（创建方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-dev",
        children: "应用程序包开发与使用"
      }), "）。通过应用市场下载安装只会下载安装entry包，在entry包里面可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-moduleinstallmanager/store-moduleinstallmanager#moduleinstallmanagerfetchmodules",
        children: "fetchModules"
      }), "接口动态下载AModulelib包，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import",
        children: "动态import"
      }), "技术调用AModulelib里的方法和组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AModulelib中主要实现如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在动态模块AModulelib的module.json5中设置deliveryWithInstall为false，来标识当前AModulelib在用户主动安装应用A的时候不会一起下载安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"AModulelib\",\n    \"deliveryWithInstall\": false\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在动态模块AModulelib中定义add方法和DateComponent组件。其中add方法用于计算加法，DateComponent用于显示文本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Calc.ets定义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export function add(a:number, b:number) {\n  return a + b;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DateComponent.ets定义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct DateComponent {\n  build() {\n    Column() {\n      Text('我是AModulelib中的组件')\n        .margin(10);\n    }\n    .width(300).backgroundColor(Color.Yellow);\n  }\n}\n\n@Builder\nexport function showDateComponent() {\n  DateComponent()\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AModulelib的AModulelib/Index.ets中导出add方法和showDateComponent方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export { add } from './src/main/ets/utils/Calc';\nexport { showDateComponent } from './src/main/ets/components/DateComponent';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "entry中主要实现如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry基础模块中，增加动态依赖配置。entry的oh-package.json5中使用dynamicDependencies来动态依赖AModulelib模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dynamicDependencies\": {\n    \"AModulelib\": \"file:../AModulelib\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在entry中使用动态模块AModulelib模块里面的方法和组件。在调用AModulelib中的功能前需要判断AModulelib是否已经加载，未加载时请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AF%B7%E6%B1%82%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97",
            children: "请求按需加载的接口"
          }), "完成加载。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { moduleInstallManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError, Callback } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  @BuilderParam AModulelibComponent: Function;\n  @State countTotal: number = 0;\n  @State isShow: boolean = false;\n\n  build() {\n    Row() {\n      Column() {\n        Button(`调用增量模块中的add功能:3+6`)\n          .onClick(() => {\n            this.initAModulelib(() => {\n              import('AModulelib').then((ns: ESObject) => {\n                this.countTotal = ns.add(3, 6);\n              }).catch((error: BusinessError) => {\n                hilog.error(0, 'TAG', `add onError.code is ${error.code}, message is ${error.message}`);\n              })\n            })\n          });\n        Text('计算结果：' + this.countTotal)\n          .margin(10);\n        Button(`调用增量模块中的showDateComponent功能`)\n          .onClick(() => {\n            this.initAModulelib(() => {\n              import('AModulelib').then((ns: ESObject) => {\n                this.AModulelibComponent = ns.showDateComponent;\n                this.isShow = true;\n              }).catch((error: BusinessError) => {\n                hilog.error(0, 'TAG', `showDateComponent onError.code is ${error.code}, message is ${error.message}`);\n              })\n            })\n          }).margin({\n          top: 10, bottom: 10\n        });\n        if (this.isShow) {\n          this.AModulelibComponent()\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n\n  private showToastInfo(msg: string) {\n    this.getUIContext().getPromptAction().showToast({\n      message: msg,\n      duration: 2000\n    });\n  }\n\n  /**\n   * 检查是否已加载AModulelib包\n   *\n   * @param successCallBack 回调\n   */\n  private initAModulelib(successCallBack: Callback<void>): void {\n    try {\n      const result: moduleInstallManager.InstalledModule = moduleInstallManager.getInstalledModule('AModulelib');\n      if (result?.installStatus === moduleInstallManager.InstallStatus.INSTALLED) {\n        hilog.info(0, 'TAG', 'AModulelib installed');\n        successCallBack && successCallBack();\n      } else {\n        // AModulelib模块未安装, 需要调用fetchModules下载AModulelib模块\n        hilog.info(0, 'TAG', 'AModulelib not installed');\n        this.fetchModule('AModulelib', successCallBack)\n      }\n    } catch (error) {\n      hilog.error(0, 'TAG', `getInstalledModule onError.code is ${error.code}, message is ${error.message}`);\n    }\n  }\n\n  /**\n   * 添加监听事件\n   *\n   * @param successCallBack 回调\n   */\n  private onListenEvents(successCallBack: Callback<void>): void {\n    const timeout = 3 * 60; // 单位秒， 默认最大监听时间为30min（即30*60秒）\n    moduleInstallManager.on('moduleInstallStatus', (data: moduleInstallManager.ModuleInstallSessionState) => {\n      // 返回成功\n      if (data.taskStatus === moduleInstallManager.TaskStatus.INSTALL_SUCCESSFUL) {\n        successCallBack && successCallBack();\n        this.showToastInfo('install success');\n      }\n    }, timeout)\n  }\n\n  /**\n   * 加载指定包\n   *\n   * @param moduleName 需要加载的安装包名称\n   * @param successCallBack 回调\n   */\n  private fetchModule(moduleName: string, successCallBack: Callback<void>) {\n    try {\n      hilog.info(0, 'TAG', 'handleFetchModules start');\n      const context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n      const moduleInstallProvider: moduleInstallManager.ModuleInstallProvider =\n        new moduleInstallManager.ModuleInstallProvider();\n      const moduleInstallRequest: moduleInstallManager.ModuleInstallRequest =\n        moduleInstallProvider.createModuleInstallRequest(context);\n      if (!moduleInstallRequest) {\n        hilog.warn(0, 'TAG', 'moduleInstallRequest is empty');\n        return;\n      }\n      moduleInstallRequest.addModule(moduleName);\n      moduleInstallManager.fetchModules(moduleInstallRequest)\n        .then((data: moduleInstallManager.ModuleInstallSessionState) => {\n          hilog.info(0, 'TAG', 'Succeeded in fetching Modules result.');\n          if (data.code === moduleInstallManager.RequestErrorCode.SUCCESS) {\n            this.onListenEvents(successCallBack)\n          } else {\n            hilog.info(0, 'TAG', 'fetchModules failure');\n          }\n        })\n        .catch((error: BusinessError) => {\n          hilog.error(0, 'TAG', `fetchModules onError.code is ${error.code}, message is ${error.message}`);\n        })\n    } catch (error) {\n      hilog.error(0, 'TAG', `handleFetchModules onError.code is ${error.code}, message is ${error.message}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行结果效果图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(114109)/* ["default"] */.A) + "",
        width: "219",
        height: "469"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接入调试功能",
      children: "接入调试功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["产品特性按需分发为开发者提供接入调试功能，支持开发者在接入过程中进行调试，应用无需上架应用市场。假如应用A由entry.hap、AModulelib.hsp两个包组成，其中entry是基础包，AModulelib是扩展功能包（创建方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "应用程序包开发与使用"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing",
            children: "调试证书签名"
          }), "应用/服务，本地编译构建出entry.hap、AModulelib.hsp，可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc#hdc%E5%91%BD%E4%BB%A4%E5%88%97%E8%A1%A8",
            children: "HDC命令安装"
          }), "或DevEco Studio直接安装基础包。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc install entry.hap\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-developer-mode#section530763213432",
            children: "开发者调试模式"
          }), "：进入设置 -> 机型 -> 关于手机，连续点击软件版本7次，弹出“开启“开发者模式””，点击“确认开启”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-device-file-explorer#section48216711204",
            children: "访问设备沙箱路径"
          }), "，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E8%B7%AF%E5%BE%84%E5%92%8C%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB",
            children: "应用el2级别加密数据目录"
          }), "下，创建cache/moduleinstall/<ModuleName>目录（这里<ModuleName>是AModulelib），将模块调试包AModulelib.hsp上传至对应模块目录下（请确保模块调试包文件应有读写权限）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(216938)/* ["default"] */.A) + "",
            width: "889",
            height: "411"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%AF%B7%E6%B1%82%E5%AE%9E%E4%BE%8B",
            children: "创建按需加载的请求实例"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AF%B7%E6%B1%82%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97",
            children: "请求按需加载的接口"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81%E6%A8%A1%E5%9D%97",
            children: "使用动态模块"
          }), "，无需改动参数即可安装好模块调试包。监听到安装成功后，对应模块目录下的文件会被自动删除。"]
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
216938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799130-ea44da1f2a369c22a7b2c621951c3123.png");

},
215879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958778-203ddbf9d0c6fd87b7f0c2e58b6118e7.png");

},
114109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478779-a22b7e746bbab4b5a10f50c8e2d312cc.gif");

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