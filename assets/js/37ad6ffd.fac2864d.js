"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["771205"], {
834918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_c_ability_headerfile_capi_application_context_h_capi_application_context_h_md_37a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-c-ability-headerfile-capi-application-context-h-capi-application-context-h-md-37a.json
var site_docs_ref_ability_api_ability_c_ability_headerfile_capi_application_context_h_capi_application_context_h_md_37a_namespaceObject = JSON.parse('{"id":"ability-api/ability-c/ability-headerfile/capi-application-context-h/capi-application-context-h","title":"application_context.h","description":"概述","source":"@site/docs-ref/ability-api/ability-c/ability-headerfile/capi-application-context-h/capi-application-context-h.md","sourceDirName":"ability-api/ability-c/ability-headerfile/capi-application-context-h","slug":"/ability-api/ability-c/ability-headerfile/capi-application-context-h/capi-application-context-h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-application-context-h/capi-application-context-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"application_context.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-application-context-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-application-context-h"},"sidebar":"ref","previous":{"title":"ability_runtime_common.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h"},"next":{"title":"context_constant.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-c/ability-headerfile/capi-application-context-h/capi-application-context-h.md


const frontMatter = {
	title: 'application_context.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-application-context-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-application-context-h'
};
const contentTitle = 'application_context.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetCacheDir()",
  "id": "oh_abilityruntime_applicationcontextgetcachedir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetAreaMode()",
  "id": "oh_abilityruntime_applicationcontextgetareamode",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetBundleName()",
  "id": "oh_abilityruntime_applicationcontextgetbundlename",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetTempDir()",
  "id": "oh_abilityruntime_applicationcontextgettempdir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetFilesDir()",
  "id": "oh_abilityruntime_applicationcontextgetfilesdir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetDatabaseDir()",
  "id": "oh_abilityruntime_applicationcontextgetdatabasedir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetPreferencesDir()",
  "id": "oh_abilityruntime_applicationcontextgetpreferencesdir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetBundleCodeDir()",
  "id": "oh_abilityruntime_applicationcontextgetbundlecodedir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetDistributedFilesDir()",
  "id": "oh_abilityruntime_applicationcontextgetdistributedfilesdir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetCloudFileDir()",
  "id": "oh_abilityruntime_applicationcontextgetcloudfiledir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetLogFileDir()",
  "id": "oh_abilityruntime_applicationcontextgetlogfiledir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetResourceDir()",
  "id": "oh_abilityruntime_applicationcontextgetresourcedir",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_StartSelfUIAbility()",
  "id": "oh_abilityruntime_startselfuiability",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_StartSelfUIAbilityWithStartOptions()",
  "id": "oh_abilityruntime_startselfuiabilitywithstartoptions",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetVersionCode()",
  "id": "oh_abilityruntime_applicationcontextgetversioncode",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_StartSelfUIAbilityWithPidResult()",
  "id": "oh_abilityruntime_startselfuiabilitywithpidresult",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetLaunchParameter",
  "id": "oh_abilityruntime_applicationcontextgetlaunchparameter",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextGetLatestParameter",
  "id": "oh_abilityruntime_applicationcontextgetlatestparameter",
  "level": 3
}, {
  "value": "OH_AbilityRuntime_ApplicationContextNotifyPageChanged",
  "id": "oh_abilityruntime_applicationcontextnotifypagechanged",
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
        id: "application_contexth",
        children: "application_context.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供应用级别上下文相关的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <AbilityKit/ability_runtime/application_context.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libability_runtime.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-module/capi-abilityruntime/capi-abilityruntime",
        children: "AbilityRuntime"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
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
              href: "#oh_abilityruntime_applicationcontextgetcachedir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetCacheDir(char* buffer, int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的缓存目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetareamode",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetAreaMode(AbilityRuntime_AreaMode* areaMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的文件数据加密等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetbundlename",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetBundleName(char* buffer, int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgettempdir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetTempDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的临时文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetfilesdir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetFilesDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的通用文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetdatabasedir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetDatabaseDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的数据库文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetpreferencesdir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetPreferencesDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的首选项文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetbundlecodedir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetBundleCodeDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的安装文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetdistributedfilesdir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetDistributedFilesDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的分布式文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetcloudfiledir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetCloudFileDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的云文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetlogfiledir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetLogFileDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用的应用级的日志文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetresourcedir",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetResourceDir(const char* moduleName, char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用级别的资源目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_startselfuiability",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_StartSelfUIAbility(AbilityBase_Want *want)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动当前应用的UIAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_startselfuiabilitywithstartoptions",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_StartSelfUIAbilityWithStartOptions(AbilityBase_Want *want,AbilityRuntime_StartOptions *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过StartOptions启动当前应用的UIAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetversioncode",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetVersionCode(int64_t* versionCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_startselfuiabilitywithpidresult",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_StartSelfUIAbilityWithPidResult(AbilityBase_Want *want, AbilityRuntime_StartOptions *options, int32_t *targetPid)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过StartOptions启动当前应用的UIAbility，并获取目标UIAbility的进程号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetlaunchparameter",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetLaunchParameter(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用首次启动UIAbility的WantParams参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityruntime_applicationcontextgetlatestparameter",
              children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetLatestParameter(char* buffer, const int32_t bufferSize, int32_t* writeLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本应用最近一次启动UIAbility的WantParams参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetcachedir",
      children: "OH_AbilityRuntime_ApplicationContextGetCacheDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetCacheDir(char* buffer, int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的缓存目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收本应用的应用级的缓存目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetareamode",
      children: "OH_AbilityRuntime_ApplicationContextGetAreaMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetAreaMode(AbilityRuntime_AreaMode* areaMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的文件数据加密等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h#abilityruntime_areamode",
              children: "AbilityRuntime_AreaMode"
            }), "* areaMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向接收数据加密等级的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - areaMode为null。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetbundlename",
      children: "OH_AbilityRuntime_ApplicationContextGetBundleName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetBundleName(char* buffer, int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取应用包名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgettempdir",
      children: "OH_AbilityRuntime_ApplicationContextGetTempDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetTempDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的临时文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收临时文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetfilesdir",
      children: "OH_AbilityRuntime_ApplicationContextGetFilesDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetFilesDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的通用文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收通用文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetdatabasedir",
      children: "OH_AbilityRuntime_ApplicationContextGetDatabaseDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetDatabaseDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的数据库文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收数据库文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetpreferencesdir",
      children: "OH_AbilityRuntime_ApplicationContextGetPreferencesDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetPreferencesDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的首选项文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收首选项文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetbundlecodedir",
      children: "OH_AbilityRuntime_ApplicationContextGetBundleCodeDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetBundleCodeDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的安装文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收安装文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetdistributedfilesdir",
      children: "OH_AbilityRuntime_ApplicationContextGetDistributedFilesDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetDistributedFilesDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的分布式文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收分布式文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetcloudfiledir",
      children: "OH_AbilityRuntime_ApplicationContextGetCloudFileDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetCloudFileDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的云文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 16"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收云文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetlogfiledir",
      children: "OH_AbilityRuntime_ApplicationContextGetLogFileDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetLogFileDir(char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的日志文件目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收日志文件目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetresourcedir",
      children: "OH_AbilityRuntime_ApplicationContextGetResourceDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetResourceDir(const char* moduleName, char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本应用的应用级的资源目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收资源目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入到缓冲区的字符串长度，单位为字节。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_startselfuiability",
      children: "OH_AbilityRuntime_StartSelfUIAbility()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_StartSelfUIAbility(AbilityBase_Want *want)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动当前应用的UIAbility。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.NDK_START_SELF_UI_ABILITY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口仅在2in1和Tablet设备中可正常调用，在其他设备中返回ABILITY_RUNTIME_ERROR_CODE_NOT_SUPPORTED错误码。"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-abilitybase-want/capi-abilitybase-want",
              children: "AbilityBase_Want"
            }), " *want"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动当前应用UIAbility时需要的Want信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 接口调用成功。  ABILITY_RUNTIME_ERROR_CODE_PERMISSION_DENIED - 调用方权限校验失败。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 调用方入参校验失败。  ABILITY_RUNTIME_ERROR_CODE_NOT_SUPPORTED - 设备类型不支持。  ABILITY_RUNTIME_ERROR_CODE_NO_SUCH_ABILITY - 指定的Ability名称不存在。  ABILITY_RUNTIME_ERROR_CODE_INCORRECT_ABILITY_TYPE - 接口调用Ability类型错误。  ABILITY_RUNTIME_ERROR_CODE_CROWDTEST_EXPIRED - 众测应用到期。  ABILITY_RUNTIME_ERROR_CODE_WUKONG_MODE - Wukong模式，不允许启动/停止Ability。  ABILITY_RUNTIME_ERROR_CODE_CONTROLLED - 应用被管控。  ABILITY_RUNTIME_ERROR_CODE_EDM_CONTROLLED - 应用被EDM管控。  ABILITY_RUNTIME_ERROR_CODE_CROSS_APP - 限制API 11以上版本三方应用跳转。  ABILITY_RUNTIME_ERROR_CODE_INTERNAL - 内部错误。  ABILITY_RUNTIME_ERROR_CODE_NOT_TOP_ABILITY - 非顶层应用。  ABILITY_RUNTIME_ERROR_CODE_UPPER_LIMIT_REACHED - 应用多实例已达到上限（从API17开始）。  ABILITY_RUNTIME_ERROR_CODE_APP_INSTANCE_KEY_NOT_SUPPORTED - 不允许设置APP_INSTANCE_KEY（从API17开始）。  详细内容参考AbilityRuntime_ErrorCode。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/ability_base/want.h>\n#include <AbilityKit/ability_runtime/application_context.h>\n\nvoid startSelfUIAbilityTest()\n{\n    AbilityBase_Element element;\n    element.abilityName = const_cast<char*>(\"EntryAbility\");\n    element.bundleName = const_cast<char*>(\"com.example.myapplication\");\n    element.moduleName = const_cast<char*>(\"entry\");\n    AbilityBase_Want* want = OH_AbilityBase_CreateWant(element);\n\n    AbilityRuntime_ErrorCode err = OH_AbilityRuntime_StartSelfUIAbility(want);\n    if (err != ABILITY_RUNTIME_ERROR_CODE_NO_ERROR) {\n        // 记录错误日志以及其他业务处理\n        return;\n    }\n    // 销毁want，防止内存泄漏\n    OH_AbilityBase_DestroyWant(want);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_startselfuiabilitywithstartoptions",
      children: "OH_AbilityRuntime_StartSelfUIAbilityWithStartOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_StartSelfUIAbilityWithStartOptions(AbilityBase_Want *want,AbilityRuntime_StartOptions *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过StartOptions启动当前应用的UIAbility。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.NDK_START_SELF_UI_ABILITY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口仅在2in1和Tablet设备中可正常调用，在其他设备中返回ABILITY_RUNTIME_ERROR_CODE_NOT_SUPPORTED错误码。"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-abilitybase-want/capi-abilitybase-want",
              children: "AbilityBase_Want"
            }), " *want"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动当前应用UIAbility时需要的Want信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-abilityruntime-startoptions/capi-abilityruntime-startoptions",
              children: "AbilityRuntime_StartOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动当前应用UIAbility时需要的StartOptions信息。如果该参数中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h#abilityruntime_startvisibility",
              children: "startVisibility"
            }), "属性的值不为空，必须确保当前应用已添加到状态栏，否则会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_VISIBILITY_SETTING_DISABLED"
            }), "错误码。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 接口调用成功。  ABILITY_RUNTIME_ERROR_CODE_PERMISSION_DENIED - 调用方权限校验失败。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 调用方入参校验失败。  ABILITY_RUNTIME_ERROR_CODE_NOT_SUPPORTED - 设备类型不支持。  ABILITY_RUNTIME_ERROR_CODE_NO_SUCH_ABILITY - 指定的Ability名称不存在。  ABILITY_RUNTIME_ERROR_CODE_INCORRECT_ABILITY_TYPE - 接口调用Ability类型错误。  ABILITY_RUNTIME_ERROR_CODE_CROWDTEST_EXPIRED - 众测应用到期。  ABILITY_RUNTIME_ERROR_CODE_WUKONG_MODE - Wukong模式，不允许启动/停止Ability。  ABILITY_RUNTIME_ERROR_CODE_CONTROLLED - 应用被管控。  ABILITY_RUNTIME_ERROR_CODE_EDM_CONTROLLED - 应用被EDM管控。  ABILITY_RUNTIME_ERROR_CODE_CROSS_APP - 限制API 11以上版本三方应用跳转。  ABILITY_RUNTIME_ERROR_CODE_INTERNAL - 内部错误。  ABILITY_RUNTIME_ERROR_CODE_NOT_TOP_ABILITY - 非顶层应用。  ABILITY_RUNTIME_ERROR_VISIBILITY_SETTING_DISABLED - 不允许设置窗口启动可见性。  ABILITY_RUNTIME_ERROR_CODE_MULTI_APP_NOT_SUPPORTED - 不支持应用分身和多实例。  ABILITY_RUNTIME_ERROR_CODE_INVALID_APP_INSTANCE_KEY - 无效多实例。  ABILITY_RUNTIME_ERROR_CODE_UPPER_LIMIT_REACHED - 应用多实例已达到上限。  ABILITY_RUNTIME_ERROR_MULTI_INSTANCE_NOT_SUPPORTED - 不支持应用多实例。  ABILITY_RUNTIME_ERROR_CODE_APP_INSTANCE_KEY_NOT_SUPPORTED - 不允许设置APP_INSTANCE_KEY。  详细内容参考AbilityRuntime_ErrorCode。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/ability_base/want.h>\n#include <AbilityKit/ability_runtime/application_context.h>\n\nvoid demo()\n{\n    AbilityBase_Element element;\n    element.abilityName = const_cast<char*>(\"EntryAbility\");\n    element.bundleName = const_cast<char*>(\"com.example.myapplication\");\n    element.moduleName = const_cast<char*>(\"entry\");\n    AbilityBase_Want* want = OH_AbilityBase_CreateWant(element);\n    if (want == nullptr) {\n        // 记录错误日志以及其他业务处理\n        return;\n    }\n\n    AbilityRuntime_StartOptions* options = OH_AbilityRuntime_CreateStartOptions();\n    if (options == nullptr) {\n        // 记录错误日志以及其他业务处理\n\n        // 销毁want，防止内存泄漏\n        OH_AbilityBase_DestroyWant(want);\n        return;\n    }\n    AbilityRuntime_ErrorCode err = OH_AbilityRuntime_StartSelfUIAbilityWithStartOptions(want, options);\n    if (err != ABILITY_RUNTIME_ERROR_CODE_NO_ERROR) {\n        // 记录错误日志以及其他业务处理\n    }\n    // 销毁want，防止内存泄漏\n    OH_AbilityBase_DestroyWant(want);\n\n    // 销毁options，防止内存泄漏\n    OH_AbilityRuntime_DestroyStartOptions(&options);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetversioncode",
      children: "OH_AbilityRuntime_ApplicationContextGetVersionCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetVersionCode(int64_t* versionCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取应用版本号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int64_t* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#bundleinfo-1",
              children: "versionCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用包版本号的指针，对应bundleInfo中的versionCode字段。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参versionCode为空。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。  ABILITY_RUNTIME_ERROR_CODE_GET_APPLICATION_INFO_FAILED - 获取应用信息失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_startselfuiabilitywithpidresult",
      children: "OH_AbilityRuntime_StartSelfUIAbilityWithPidResult()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_StartSelfUIAbilityWithPidResult(AbilityBase_Want *want, AbilityRuntime_StartOptions *options, int32_t *targetPid)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过StartOptions启动当前应用的UIAbility，并获取目标UIAbility的进程号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口不能在应用主线程调用，但可以在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
        children: "子进程"
      }), "的主线程中调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在应用的主线程中调用，会返回ABILITY_RUNTIME_ERROR_CODE_MAIN_THREAD_NOT_SUPPORTED错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.NDK_START_SELF_UI_ABILITY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口仅在2in1和Tablet设备中可正常调用，在其他设备中返回ABILITY_RUNTIME_ERROR_CODE_NOT_SUPPORTED错误码。"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-abilitybase-want/capi-abilitybase-want",
              children: "AbilityBase_Want"
            }), " *want"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动当前应用UIAbility时需要的Want信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-abilityruntime-startoptions/capi-abilityruntime-startoptions",
              children: "AbilityRuntime_StartOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动当前应用UIAbility时需要的StartOptions信息。如果该参数中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h#abilityruntime_startvisibility",
              children: "startVisibility"
            }), "属性的值不为空，必须确保当前应用已添加到状态栏，否则会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_VISIBILITY_SETTING_DISABLED"
            }), "错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *targetPid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标UIAbility所在的进程号，作为出参使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 接口调用成功。  ABILITY_RUNTIME_ERROR_CODE_PERMISSION_DENIED - 调用方权限校验失败。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 调用方入参校验失败。  ABILITY_RUNTIME_ERROR_CODE_NOT_SUPPORTED - 设备类型不支持。  ABILITY_RUNTIME_ERROR_CODE_NO_SUCH_ABILITY - 指定的Ability名称不存在。  ABILITY_RUNTIME_ERROR_CODE_INCORRECT_ABILITY_TYPE - 接口调用Ability类型错误。  ABILITY_RUNTIME_ERROR_CODE_CROWDTEST_EXPIRED - 众测应用到期。  ABILITY_RUNTIME_ERROR_CODE_WUKONG_MODE - Wukong模式，不允许启动/停止Ability。  ABILITY_RUNTIME_ERROR_CODE_CONTROLLED - 应用被管控。  ABILITY_RUNTIME_ERROR_CODE_EDM_CONTROLLED - 应用被EDM管控。  ABILITY_RUNTIME_ERROR_CODE_CROSS_APP - 限制API 11以上版本三方应用跳转。  ABILITY_RUNTIME_ERROR_CODE_INTERNAL - 内部错误。  ABILITY_RUNTIME_ERROR_CODE_NOT_TOP_ABILITY - 非顶层应用。  ABILITY_RUNTIME_ERROR_VISIBILITY_SETTING_DISABLED - 不允许设置窗口启动可见性。  ABILITY_RUNTIME_ERROR_CODE_MULTI_APP_NOT_SUPPORTED - 不支持应用分身和多实例。  ABILITY_RUNTIME_ERROR_CODE_INVALID_APP_INSTANCE_KEY - 无效多实例。  ABILITY_RUNTIME_ERROR_CODE_UPPER_LIMIT_REACHED - 应用多实例已达到上限。  ABILITY_RUNTIME_ERROR_MULTI_INSTANCE_NOT_SUPPORTED - 不支持应用多实例。  ABILITY_RUNTIME_ERROR_CODE_APP_INSTANCE_KEY_NOT_SUPPORTED - 不允许设置APP_INSTANCE_KEY。  ABILITY_RUNTIME_ERROR_CODE_START_TIMEOUT - 启动UIAbility超时。  ABILITY_RUNTIME_ERROR_CODE_MAIN_THREAD_NOT_SUPPORTED - 接口不允许在应用主线程被调用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/ability_base/want.h>\n#include <AbilityKit/ability_runtime/application_context.h>\n\nvoid demo()\n{\n    AbilityBase_Element element;\n    element.abilityName = const_cast<char*>(\"EntryAbility\");\n    element.bundleName = const_cast<char*>(\"com.example.myapplication\");\n    element.moduleName = const_cast<char*>(\"entry\");\n    AbilityBase_Want* want = OH_AbilityBase_CreateWant(element);\n    if (want == nullptr) {\n        // 记录错误日志以及其他业务处理\n        return;\n    }\n\n    AbilityRuntime_StartOptions* options = OH_AbilityRuntime_CreateStartOptions();\n    if (options == nullptr) {\n        // 记录错误日志以及其他业务处理\n\n        // 销毁want，防止内存泄漏\n        OH_AbilityBase_DestroyWant(want);\n        return;\n    }\n    int32_t pid = -1;\n    AbilityRuntime_ErrorCode err = OH_AbilityRuntime_StartSelfUIAbilityWithPidResult(want, options, &pid);\n    if (err != ABILITY_RUNTIME_ERROR_CODE_NO_ERROR) {\n        // 记录错误日志以及其他业务处理\n    }\n    // 销毁want，防止内存泄漏\n    OH_AbilityBase_DestroyWant(want);\n\n    // 销毁options，防止内存泄漏\n    OH_AbilityRuntime_DestroyStartOptions(&options);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetlaunchparameter",
      children: "OH_AbilityRuntime_ApplicationContextGetLaunchParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetLaunchParameter(\n    char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取本应用首次启动UIAbility时的WantParams参数，WantParams可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-arkts-dep/ability-deprecated/js-apis-inner-ability-want/js-apis-inner-ability-want",
        children: "Want中的parameters参数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收WantParams参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入缓冲区的字符串长度（单位：字节）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
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
        children: "#include \"napi/native_api.h\"\n#include \"AbilityKit/ability_runtime/application_context.h\"\n\nstatic napi_value GetLaunchParameter(napi_env env, napi_callback_info info)\n{\n    const int32_t bufferSize = 2048; // 根据实际需要调整缓冲区大小\n    char buffer[bufferSize] = {0};\n    int32_t writeLength = 0;\n    int32_t ret = OH_AbilityRuntime_ApplicationContextGetLaunchParameter(buffer, bufferSize, &writeLength);\n\n    if (ret != ABILITY_RUNTIME_ERROR_CODE_NO_ERROR) {\n        // 失败处理\n    }\n    // 创建 JS 字符串返回WantParams\n    napi_value result;\n    napi_create_string_utf8(env, buffer, writeLength, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextgetlatestparameter",
      children: "OH_AbilityRuntime_ApplicationContextGetLatestParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextGetLatestParameter(\n    char* buffer, const int32_t bufferSize, int32_t* writeLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取本应用最近一次启动UIAbility时的WantParams参数，WantParams可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-arkts-dep/ability-deprecated/js-apis-inner-ability-want/js-apis-inner-ability-want",
        children: "Want中的parameters参数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向缓冲区的指针，用于接收WantParams参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* writeLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "ABILITY_RUNTIME_ERROR_CODE_NO_ERROR"
            }), "时，表示实际写入缓冲区的字符串长度（单位：字节）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 查询成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参buffer或者writeLength为空，或者缓冲区大小小于需要写入的大小。  ABILITY_RUNTIME_ERROR_CODE_CONTEXT_NOT_EXIST - 应用上下文不存在，如在应用创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess",
              children: "子进程"
            }), "中应用级别上下文不存在。"]
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
        children: "#include \"napi/native_api.h\"\n#include \"AbilityKit/ability_runtime/application_context.h\"\n\nstatic napi_value GetLatestParameter(napi_env env, napi_callback_info info)\n{\n    const int32_t bufferSize = 2048; // 根据实际需要调整缓冲区大小\n    char buffer[bufferSize] = {0};\n    int32_t writeLength = 0;\n    int32_t ret = OH_AbilityRuntime_ApplicationContextGetLatestParameter(buffer, bufferSize, &writeLength);\n\n    if (ret != ABILITY_RUNTIME_ERROR_CODE_NO_ERROR) {\n        // 失败处理\n    }\n    // 创建 JS 字符串返回WantParams\n    napi_value result;\n    napi_create_string_utf8(env, buffer, writeLength, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityruntime_applicationcontextnotifypagechanged",
      children: "OH_AbilityRuntime_ApplicationContextNotifyPageChanged"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AbilityRuntime_ErrorCode OH_AbilityRuntime_ApplicationContextNotifyPageChanged(\n    const char* targetPageName, int32_t targetPageNameLength, int32_t windowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口仅支持三方框架调用。三方框架每次切换页面时，将目标页面信息（包含目标页面路径、目标页面路径长度、目标页面对应的窗口ID）通知给系统。系统可按产品策略调整/恢复页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* targetPageName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标页面路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t targetPageNameLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标页面路径长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标页面对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#windowinfo18",
              children: "窗口ID"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-runtime-common-h/capi-ability-runtime-common-h#abilityruntime_errorcode",
              children: "AbilityRuntime_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  ABILITY_RUNTIME_ERROR_CODE_NO_ERROR - 操作成功。  ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID - 入参targetPageName为空或者windowId无效。  ABILITY_RUNTIME_ERROR_CODE_INTERNAL - 内部错误。"
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
        children: "#include \"napi/native_api.h\"\n#include \"AbilityKit/ability_runtime/application_context.h\"\n\nstatic bool NotifyPageChanged(napi_env env, napi_callback_info info)\n{\n    const char* testPageName = \"https://home.taobao.com/homepage\";\n    int32_t testPageNameLen = 32;\n    int32_t testWindowId = 12; // 示例数值仅供参考，实际开发需使用有效的窗口ID。\n    int32_t ret = OH_AbilityRuntime_ApplicationContextNotifyPageChanged(testPageName, testPageNameLen, testWindowId);\n\n    if (ret != ABILITY_RUNTIME_ERROR_CODE_NO_ERROR) {\n        // 失败处理\n        return false;\n    }\n    return true;\n}\n"
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