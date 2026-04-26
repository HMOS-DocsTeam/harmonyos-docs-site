"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["56352"], {
183461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_c_ability_headerfile_capi_context_constant_h_capi_context_constant_h_md_be9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-c-ability-headerfile-capi-context-constant-h-capi-context-constant-h-md-be9.json
var site_docs_ref_ability_api_ability_c_ability_headerfile_capi_context_constant_h_capi_context_constant_h_md_be9_namespaceObject = JSON.parse('{"id":"ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h","title":"context_constant.h","description":"概述","source":"@site/docs-ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h.md","sourceDirName":"ability-api/ability-c/ability-headerfile/capi-context-constant-h","slug":"/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"context_constant.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-context-constant-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-context-constant-h"},"sidebar":"ref","previous":{"title":"application_context.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-application-context-h/capi-application-context-h"},"next":{"title":"native_child_process.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-c/ability-headerfile/capi-context-constant-h/capi-context-constant-h.md


const frontMatter = {
	title: 'context_constant.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-context-constant-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-context-constant-h'
};
const contentTitle = 'context_constant.h';

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
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "AbilityRuntime_AreaMode",
  "id": "abilityruntime_areamode",
  "level": 3
}, {
  "value": "AbilityRuntime_StartVisibility",
  "id": "abilityruntime_startvisibility",
  "level": 3
}, {
  "value": "AbilityRuntime_WindowMode",
  "id": "abilityruntime_windowmode",
  "level": 3
}, {
  "value": "AbilityRuntime_SupportedWindowMode",
  "id": "abilityruntime_supportedwindowmode",
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
        id: "context_constanth",
        children: "context_constant.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供AbilityRuntime模块上下文常量的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <AbilityKit/ability_runtime/context_constant.h>"]
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
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#abilityruntime_areamode",
              children: "AbilityRuntime_AreaMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityRuntime_AreaMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件数据加密等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#abilityruntime_startvisibility",
              children: "AbilityRuntime_StartVisibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityRuntime_StartVisibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动Ability时的窗口和dock栏图标的显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#abilityruntime_windowmode",
              children: "AbilityRuntime_WindowMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityRuntime_WindowMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#abilityruntime_supportedwindowmode",
              children: "AbilityRuntime_SupportedWindowMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityRuntime_SupportedWindowMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件所支持的窗口模式。在应用内启动UIAbility时，指定窗口是否显示最大化/窗口化/分屏按键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abilityruntime_areamode",
      children: "AbilityRuntime_AreaMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AbilityRuntime_AreaMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件数据加密等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_AREA_MODE_EL1 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备级加密区，设备开机后可访问的数据区。  对于私有文件，如闹铃、壁纸等，应用可以将这些文件放到设备级加密分区（EL1）中，以保证在用户输入密码前就可以被访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_AREA_MODE_EL2 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户级加密区，设备开机，首次输入密码后才能够访问的数据区。  对于私有文件，如闹铃、壁纸等，应用可以将这些文件放到设备级加密分区（EL1）中，以保证在用户输入密码前就可以被访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_AREA_MODE_EL3 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户级加密区，不同场景的文件权限如下：  已打开文件：锁屏时，可读写；解锁后，可读写。  未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。  创建新文件：锁屏时，可创建、可打开、可写不可读；解锁后，可创建、可打开、可读写。  对于应用中的记录步数、文件下载、音乐播放，需要在锁屏时读写和创建新文件，放在（EL3）的加密分区比较合适。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_AREA_MODE_EL4 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户级加密区，不同场景的文件权限如下：  已打开文件：锁屏时，FEB2.0可读写、FEB3.0不可读写；解锁后，可读写。  未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。  创建新文件：锁屏时，不可创建；解锁后，可创建、可打开、可读写。  对于用户安全信息相关的文件，锁屏时不需要读写文件、也不能创建文件，放在（EL4）的加密分区更合适。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_AREA_MODE_EL5 = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用级加密区，不同场景的文件权限如下：  已打开文件：锁屏时，可读写；解锁后，可读写。  未打开文件：锁屏时，获取DataAccessLock（JS API）下可打开、可读写，否则不可打开、不可读写；解锁后，可打开、可读写。  创建新文件：锁屏时，可创建、可打开、可读写；解锁后，可创建、可打开、可读写。  对于用户隐私敏感数据文件，锁屏后默认不可读写，如果锁屏后需要读写文件，则锁屏前可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-screenlockfilemanager/js-apis-screenlockfilemanager#screenlockfilemanageracquireaccess",
              children: "Access"
            }), "接口申请继续读写文件，或者锁屏后也需要创建新文件且可读写，放在（EL5）的应用级加密分区更合适。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abilityruntime_startvisibility",
      children: "AbilityRuntime_StartVisibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AbilityRuntime_StartVisibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动Ability时的窗口和dock栏图标的显示模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_HIDE_UPON_START = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐藏窗口及dock栏图标。仅在2in1设备上生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_SHOW_UPON_START = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示窗口及dock栏图标。仅在2in1设备上生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abilityruntime_windowmode",
      children: "AbilityRuntime_WindowMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AbilityRuntime_WindowMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_WINDOW_MODE_UNDEFINED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口模式未定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_WINDOW_MODE_FULL_SCREEN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全屏模式。仅在2in1设备上生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abilityruntime_supportedwindowmode",
      children: "AbilityRuntime_SupportedWindowMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AbilityRuntime_SupportedWindowMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用内启动UIAbility时，指定窗口是否显示最大化/窗口化/分屏按键。如果未配置该字段，则默认采用该UIAbility对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "的supportWindowMode字段取值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_FULL_SCREEN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持全屏显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_SPLIT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持分屏显示。通常需要配合ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_FULL_SCREEN或ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_FLOATING一起使用，不建议只配置ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_SPLIT。当仅配置ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_SPLIT时，2in1设备上的窗口默认为悬浮窗模式，支持进入分屏模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RUNTIME_SUPPORTED_WINDOW_MODE_FLOATING = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持窗口化显示。"
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