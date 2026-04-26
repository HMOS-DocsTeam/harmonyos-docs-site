"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["685310"], {
491970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_app_startup_app_startup_md_5d7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-app-startup-app-startup-md-5d7.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_app_startup_app_startup_md_5d7_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/app-startup/app-startup","title":"应用启动框架AppStartup","description":"概述","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/app-startup/app-startup.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/app-startup","slug":"/ability-kit/stage-model-development/stage-model-application-components/app-startup/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/app-startup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"应用启动框架AppStartup","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-startup","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件启动规则（Stage模型）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/component-startup-rules/"},"next":{"title":"应用预加载","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/preload-application/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/app-startup/app-startup.md


const frontMatter = {
	title: '应用启动框架AppStartup',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-startup',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用启动框架AppStartup';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "运行机制",
  "id": "运行机制",
  "level": 2
}, {
  "value": "支持的范围",
  "id": "支持的范围",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "定义启动框架配置文件",
  "id": "定义启动框架配置文件",
  "level": 2
}, {
  "value": "创建启动框架配置文件",
  "id": "创建启动框架配置文件",
  "level": 3
}, {
  "value": "定义启动参数配置",
  "id": "定义启动参数配置",
  "level": 3
}, {
  "value": "定义启动任务配置",
  "id": "定义启动任务配置",
  "level": 3
}, {
  "value": "定义预加载so任务配置",
  "id": "定义预加载so任务配置",
  "level": 3
}, {
  "value": "设置启动参数",
  "id": "设置启动参数",
  "level": 2
}, {
  "value": "为每个待初始化功能组件添加启动任务",
  "id": "为每个待初始化功能组件添加启动任务",
  "level": 2
}, {
  "value": "可选操作",
  "id": "可选操作",
  "level": 2
}, {
  "value": "HSP与HAR中使用启动框架",
  "id": "hsp与har中使用启动框架",
  "level": 3
}, {
  "value": "修改启动模式",
  "id": "修改启动模式",
  "level": 3
}, {
  "value": "添加任务匹配规则",
  "id": "添加任务匹配规则",
  "level": 3
}, {
  "value": "设置启动任务调度阶段",
  "id": "设置启动任务调度阶段",
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
        id: "应用启动框架appstartup",
        children: "应用启动框架AppStartup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用启动时通常需要执行一系列初始化启动任务，如果将启动任务都放在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "HAP"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate"
      }), "生命周期中，那么只能在主线程中依次执行，不但影响应用的启动速度，而且当启动任务过多时，任务之间复杂的依赖关系还会使得代码难以维护。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStartup提供了一种简单高效的应用启动方式，可以支持任务的异步启动，加快应用启动速度。同时，通过在一个配置文件中统一设置多个启动任务的执行顺序以及依赖关系，让执行启动任务的代码变得更加简洁清晰、容易维护。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行机制",
      children: "运行机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动框架支持以自动模式或手动模式执行启动任务，默认采用自动模式。在构造", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#abilitystage",
        children: "AbilityStage"
      }), "过程中开始加载开发者配置的启动任务，以自动模式执行启动任务。开发者也可以在AbilityStage创建完后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupmanager/js-apis-app-appstartup-startupmanager#startupmanagerrun",
        children: "startupManager.run"
      }), "方法，执行手动模式的启动任务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 启动框架执行时机"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263382)/* ["default"] */.A) + "",
        width: "784",
        height: "739"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的范围",
      children: "支持的范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAP：entry类型的HAP支持以自动和手动模式启动。从API version 20开始，feature类型的HAP支持以自动和手动模式启动。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HSP/HAR: 从API version 18开始，支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
          children: "HSP"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
          children: "HAR"
        }), "中配置启动任务。HSP和HAR的启动任务、so预加载任务无法主动配置为自动模式，但可以被HAP中自动模式的启动任务、so预加载任务拉起。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["启动框架从API version 18开始支持配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#%E5%BA%94%E7%94%A8%E7%BA%A7so",
          children: "应用级so"
        }), "预加载任务，so文件开发可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
          children: "Node-API"
        }), "创建Native C++工程。不支持配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#%E7%B3%BB%E7%BB%9F%E7%BA%A7so",
          children: "系统级so"
        }), "预加载任务。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用启动框架必须在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
          children: "HAP"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5配置文件"
        }), "中开启启动框架。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExtensionAbility组件启动场景单一，使用启动框架会带来额外开销，因此不支持ExtensionAbility组件启动时拉起启动框架。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动任务之间或so预加载任务之间不允许存在循环依赖。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E6%A1%86%E6%9E%B6%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
            children: "定义启动框架配置文件"
          }), "：在资源文件目录下创建并定义启动框架配置文件。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E5%90%AF%E5%8A%A8%E6%A1%86%E6%9E%B6%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
              children: "创建启动框架配置文件"
            }), "：在资源文件目录下创建启动框架配置文件，并在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
              children: "module.json5"
            }), "配置文件中引用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
              children: "定义启动参数配置"
            }), "：在启动框架配置文件中添加启动参数的配置信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
              children: "定义启动任务配置"
            }), "：在启动框架配置文件中添加启动任务的配置信息"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9A%E4%B9%89%E9%A2%84%E5%8A%A0%E8%BD%BDso%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
              children: "定义预加载so任务配置"
            }), "：在启动框架配置文件中添加预加载so任务的配置信息。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0",
            children: "设置启动参数"
          }), "：在启动参数文件中，设置超时时间和启动任务的监听器等参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%BA%E6%AF%8F%E4%B8%AA%E5%BE%85%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6%E6%B7%BB%E5%8A%A0%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1",
            children: "为每个待初始化功能组件添加启动任务"
          }), "：通过实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startuptask/js-apis-app-appstartup-startuptask",
            children: "StartupTask"
          }), "接口，启动框架将会按顺序执行初始化流程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%8F%AF%E9%80%89%E6%93%8D%E4%BD%9C",
            children: "可选操作"
          }), "：开发者可以在复杂场景下更精细地控制启动框架的行为。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hsp%E4%B8%8Ehar%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%90%AF%E5%8A%A8%E6%A1%86%E6%9E%B6",
              children: "HSP与HAR中使用启动框架"
            }), "：在HSP与HAR中配置启动任务、so预加载任务。实现跨模块的启动任务依赖管理，提升大型应用的启动效率和代码可维护性。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BF%AE%E6%94%B9%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
              children: "修改启动模式"
            }), "：将启动任务、so预加载任务修改为手动模式，灵活控制任务执行时机，避免不必要的启动开销。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%B7%BB%E5%8A%A0%E4%BB%BB%E5%8A%A1%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
              children: "添加任务匹配规则"
            }), "：根据场景通过匹配规则过滤启动任务。精准控制任务执行范围，避免加载无关任务。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E9%98%B6%E6%AE%B5",
              children: "设置启动任务调度阶段"
            }), "：设置启动任务的调度阶段，提前执行任务，节省启动时间。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义启动框架配置文件",
      children: "定义启动框架配置文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建启动框架配置文件",
      children: "创建启动框架配置文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "的“resources/base/profile”路径下，新建启动框架配置文件。文件名可以自定义，本文以\"startup_config.json\"为例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "的appStartup标签中，添加启动框架配置文件的索引。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "module.json5示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"entry\",\n    \"type\": \"entry\",\n    // ···\n    \"appStartup\": \"$profile:startup_config\", // 启动框架的配置文件\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义启动参数配置",
      children: "定义启动参数配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动框架配置文件startup_config.json中，可以添加启动参数的配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程的“ets”目录下创建“startup”文件夹，并在“ets/startup”路径下创建启动参数配置文件。本例中，启动参数配置文件的文件名为StartupConfig.ets。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在启动框架配置文件startup_config.json中，添加启动参数配置文件的相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "startup_config.json文件示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"startupTasks\": [\n    // 启动任务\n  ],\n  \"appPreloadHintStartupTasks\": [\n    // 预加载so任务\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\" // 启动参数的配置\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " startup_config.json配置文件标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startupTasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动任务配置信息，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
              children: "定义启动任务配置"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appPreloadHintStartupTasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预加载so任务配置信息，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9A%E4%B9%89%E9%A2%84%E5%8A%A0%E8%BD%BDso%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
              children: "定义预加载so任务配置"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "configEntry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动参数配置文件所在路径。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0",
              children: "设置启动参数"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - HSP、HAR中不允许配置configEntry字段。  - 如果应用开启了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-filename-obfuscation",
              children: "文件名混淆"
            }), "，则需要将文件路径添加到保留白名单中。具体操作详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
              children: "ArkGuard混淆原理及功能"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-keep-file-name",
              children: "-keep-file-name"
            }), "部分。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义启动任务配置",
      children: "定义启动任务配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设当前应用启动框架共包含6个启动任务，任务之间的依赖关系如下图所示。为了便于并发执行启动任务，单个启动任务文件包含的启动任务应尽量单一，本例中每个启动任务对应一个启动任务文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 启动任务依赖关系图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263547)/* ["default"] */.A) + "",
        width: "600",
        height: "233"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“ets/startup”路径下，依次创建6个启动任务文件。文件名称必须确保唯一性。本例中的6个文件名分别为StartupTask_001.ets~StartupTask_006.ets。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在启动框架配置文件startup_config.json中，添加启动任务配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "startup_config.json文件示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"startupTasks\": [\n    {\n      \"name\": \"StartupTask_001\",\n      \"srcEntry\": \"./ets/startup/StartupTask_001.ets\",\n      \"dependencies\": [\n        \"StartupTask_002\",\n        \"StartupTask_003\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false\n    },\n    {\n      \"name\": \"StartupTask_002\",\n      \"srcEntry\": \"./ets/startup/StartupTask_002.ets\",\n      \"dependencies\": [\n        \"StartupTask_003\",\n        \"StartupTask_004\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false\n    },\n    {\n      \"name\": \"StartupTask_003\",\n      \"srcEntry\": \"./ets/startup/StartupTask_003.ets\",\n      \"dependencies\": [\n        \"StartupTask_004\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false\n    },\n    {\n      \"name\": \"StartupTask_004\",\n      \"srcEntry\": \"./ets/startup/StartupTask_004.ets\",\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false\n    },\n    {\n      \"name\": \"StartupTask_005\",\n      \"srcEntry\": \"./ets/startup/StartupTask_005.ets\",\n      \"dependencies\": [\n        \"StartupTask_006\"\n      ],\n      \"runOnThread\": \"mainThread\",\n      \"waitOnMainThread\": true,\n      \"excludeFromAutoStart\": true\n    },\n    {\n      \"name\": \"StartupTask_006\",\n      \"srcEntry\": \"./ets/startup/StartupTask_006.ets\",\n      \"runOnThread\": \"mainThread\",\n      \"waitOnMainThread\": false,\n      \"excludeFromAutoStart\": true\n    }\n  ],\n  \"appPreloadHintStartupTasks\": [\n    // 预加载so任务\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " startupTasks标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动任务名称，可自定义，推荐与类名保持一致。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动任务对应的文件路径。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果应用开启了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-filename-obfuscation",
              children: "文件名混淆"
            }), "，则需要将文件路径添加到保留白名单中。具体操作详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
              children: "ArkGuard混淆原理及功能"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-keep-file-name",
              children: "-keep-file-name"
            }), "部分。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动任务依赖的其他启动任务的类名数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeFromAutoStart"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否排除自动模式，详细介绍可以查看", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BF%AE%E6%94%B9%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
              children: "修改启动模式"
            }), "。  - true：手动模式。  - false：自动模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  HSP、HAR中startupTask里的excludeFromAutoStart标签必须配置为true。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "runOnThread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行初始化所在的线程。  - mainThread：在主线程中执行。  - taskPool：在异步线程中执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为mainThread。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "waitOnMainThread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程是否需要等待启动框架执行。当runOnThread取值为taskPool时，该字段生效。  - true：主线程等待启动框架执行完之后，才会加载应用首页。  - false：主线程不等待启动任务执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matchRules"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该字段用于筛选需要以自动模式启动的启动任务，加速应用启动过程。适用于快速拉起某个页面的场景，例如，通过桌面卡片、通知或意图调用等方式触发的页面跳转，实现功能服务的一步直达体验。操作指导详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%B7%BB%E5%8A%A0%E4%BB%BB%E5%8A%A1%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
              children: "添加任务匹配规则"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 从API version 20开始，支持该字段。当前仅支持在HAP中配置该字段。  - 该字段的优先级高于excludeFromAutoStart。如果所有启动任务均匹配失败，则按任务的excludeFromAutoStart配置处理。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "schedulerPhase"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动任务的调度阶段。操作指导详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E9%98%B6%E6%AE%B5",
              children: "设置启动任务调度阶段"
            }), "。  - preAbilityStageLoad：启动任务及其依赖任务在AbilityStage模块加载前调度执行。  - postAbilityStageLoad：启动任务及其依赖任务在AbilityStage模块加载后调度执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 从API version 21开始，支持该字段。当前仅支持在HAP中配置该字段。  - 这里的AbilityStage模块加载指的是AbilityStage.ets文件及其所依赖模块的加载。关于模块加载的详细介绍，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/module-principle#%E6%A8%A1%E5%9D%97%E5%8C%96%E8%BF%90%E8%A1%8C%E5%8A%A0%E8%BD%BD%E6%B5%81%E7%A8%8B",
              children: "模块化运行加载流程"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为postAbilityStageLoad。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义预加载so任务配置",
      children: "定义预加载so任务配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设当前应用启动框架共包含6个so预加载任务，任务之间的依赖关系如下图所示。不建议应用在so文件的加载回调中运行代码逻辑，so文件的加载不宜过长，否则会影响主线程的运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " so预加载任务依赖关系图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(785268)/* ["default"] */.A) + "",
        width: "600",
        height: "232"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
            children: "Node-API"
          }), "创建so文件。本例中的6个so文件名称分别为libentry_001.so~libentry_006.so。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在启动框架配置文件startup_config.json中，添加预加载so任务配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "startup_config.json文件示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"startupTasks\": [\n    // 启动任务\n  ],\n  \"appPreloadHintStartupTasks\": [\n    {\n      \"name\": \"libentry_001\",\n      \"srcEntry\": \"libentry_001.so\",\n      \"dependencies\": [\n        \"libentry_002\",\n        \"libentry_003\"\n      ],\n      \"runOnThread\": \"taskPool\"\n    },\n    {\n      \"name\": \"libentry_002\",\n      \"srcEntry\": \"libentry_002.so\",\n      \"dependencies\": [\n        \"libentry_003\",\n        \"libentry_004\"\n      ],\n      \"runOnThread\": \"taskPool\"\n    },\n    {\n      \"name\": \"libentry_003\",\n      \"srcEntry\": \"libentry_003.so\",\n      \"dependencies\": [\n        \"libentry_004\"\n      ],\n      \"runOnThread\": \"taskPool\"\n    },\n    {\n      \"name\": \"libentry_004\",\n      \"srcEntry\": \"libentry_004.so\",\n      \"runOnThread\": \"taskPool\"\n    },\n    {\n      \"name\": \"libentry_005\",\n      \"srcEntry\": \"libentry_005.so\",\n      \"dependencies\": [\n        \"libentry_006\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"excludeFromAutoStart\": true\n    },\n    {\n      \"name\": \"libentry_006\",\n      \"srcEntry\": \"libentry_006.so\",\n      \"runOnThread\": \"taskPool\",\n      \"excludeFromAutoStart\": true\n    }\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " appPreloadHintStartupTasks标签说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预加载so文件名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "带后缀预加载so文件名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预加载任务依赖的其他预加载任务的so名数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeFromAutoStart"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否排除自动模式，详细介绍可以查看", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BF%AE%E6%94%B9%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
              children: "修改启动模式"
            }), "。  - true：手动模式。  - false：自动模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  HSP、HAR中appPreloadHintStartupTask的excludeFromAutoStart标签必须配置为true。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省，缺省值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "runOnThread"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行预加载所在的线程。  - taskPool：在异步线程中执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  so预加载只允许在taskPool线程执行。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matchRules"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该字段用于筛选需要以自动模式启动的预加载so任务，加速应用启动过程。适用于快速拉起某个页面的场景，例如，通过桌面卡片、通知或意图调用等方式触发的页面跳转，实现功能服务的一步直达体验。操作指导详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%B7%BB%E5%8A%A0%E4%BB%BB%E5%8A%A1%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
              children: "添加任务匹配规则"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 从API version 20开始，支持该字段。当前仅支持在HAP中配置该字段。  - 该字段的优先级高于excludeFromAutoStart。如果所有预加载so任务均匹配失败，则按任务的excludeFromAutoStart配置处理。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该标签可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置启动参数",
      children: "设置启动参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在启动参数配置文件（本文为“ets/startup/StartupConfig.ets”文件）中，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry",
        children: "StartupConfigEntry"
      }), "接口实现启动框架公共参数的配置，包括超时时间和启动任务的监听器等参数，其中需要用到如下接口："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfig/js-apis-app-appstartup-startupconfig",
          children: "StartupConfig"
        }), "：用于设置任务超时时间和启动框架的监听器。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startuplistener/js-apis-app-appstartup-startuplistener",
          children: "StartupListener"
        }), "：用于监听启动任务是否执行成功。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StartupConfig, StartupConfigEntry, StartupListener } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class MyStartupConfigEntry extends StartupConfigEntry {\n  onConfig() {\n    hilog.info(0x0000, 'testTag', `onConfig`);\n    let onCompletedCallback = (error: BusinessError<void>) => {\n      hilog.info(0x0000, 'testTag', `onCompletedCallback`);\n      if (error) {\n        hilog.error(0x0000, 'testTag', 'onCompletedCallback: %{public}d, message: %{public}s', error.code,\n          error.message);\n      } else {\n        hilog.info(0x0000, 'testTag', `onCompletedCallback: success.`);\n      }\n    };\n    let startupListener: StartupListener = {\n      'onCompleted': onCompletedCallback\n    };\n    let config: StartupConfig = {\n      'timeoutMs': 10000,\n      'startupListener': startupListener\n    };\n    return config;\n  }\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为每个待初始化功能组件添加启动任务",
      children: "为每个待初始化功能组件添加启动任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述操作中已完成启动框架配置文件、启动参数的配置，还需要在每个功能组件对应的启动任务文件中，通过实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startuptask/js-apis-app-appstartup-startuptask",
        children: "StartupTask"
      }), "来添加启动任务。其中，需要用到下面的两个方法："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startuptask/js-apis-app-appstartup-startuptask#init",
          children: "init"
        }), "：启动任务初始化。当该任务依赖的启动任务全部执行完毕，即onDependencyCompleted完成调用后，才会执行init方法对该任务进行初始化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startuptask/js-apis-app-appstartup-startuptask#ondependencycompleted",
          children: "onDependencyCompleted"
        }), "：当前任务依赖的启动任务执行完成时，调用该方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
        children: "startup_config.json"
      }), "中的StartupTask_001.ets文件为例，示例代码如下。开发者需要分别为每个待初始化功能组件添加启动任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421411)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于StartupTask采用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E5%8D%8F%E8%AE%AE",
        children: "Sendable协议"
      }), "，在继承该接口时，必须添加Sendable注解。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StartupTask, common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Sendable\nexport default class StartupTask_001 extends StartupTask {\n  constructor() {\n    super();\n  }\n\n  async init(context: common.AbilityStageContext) {\n    hilog.info(0x0000, 'testTag', 'StartupTask_001 init.');\n    return 'StartupTask_001';\n  }\n\n  onDependencyCompleted(dependence: string, result: Object): void {\n    hilog.info(0x0000, 'testTag', 'StartupTask_001 onDependencyCompleted, dependence: %{public}s, result: %{public}s',\n      dependence, JSON.stringify(result));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可选操作",
      children: "可选操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hsp与har中使用启动框架",
      children: "HSP与HAR中使用启动框架"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常大型应用会有多个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "，本节将提供一个应用示例，以展示如何在HSP包和HAR包中使用启动框架。该示例应用包括两个HSP包（hsp1、hsp2）和一个HAR包（har1），并且包含启动任务和so预加载任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["除", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "外，在HSP包和HAR包的“resources/base/profile”目录下创建启动框架配置文件，不同模块可以使用相同文件名，本文以\"startup_config.json\"为例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分别在各个模块的启动框架配置文件startup_config.json中， 添加对应的配置信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "假设当前应用存在的启动任务与so预加载任务如下表所示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表4"
            })
          }), " 应用启动任务与so预加载任务说明"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "模块"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "启动任务"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "so预加载任务"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "entry"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HAP_Task_01"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "libentry_01"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "hsp1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HSP1_Task_01  HSP1_Task_02"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "libhsp1_01  libhsp1_02"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "hsp2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HSP2_Task_01"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "libhsp2_01"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "har"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HAR1_Task_01"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "libhar1_01"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图4"
            })
          }), " 启动任务与so预加载依赖关系图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(672521)/* ["default"] */.A) + "",
            width: "452",
            height: "490"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "的startup_config.json可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
            children: "定义启动任务配置"
          }), "，HSP与HAR的startup_config.json文件无法配置\"configEntry\"字段，以hsp1包配置文件为例，示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"startupTasks\": [\n    {\n      \"name\": \"HSP1_Task_01\",\n      \"srcEntry\": \"./ets/startup/HSP1_Task_01.ets\",\n      \"dependencies\": [\n        \"HSP1_Task_02\",\n        \"HAR1_Task_01\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false,\n      \"excludeFromAutoStart\": true\n    }\n  ],\n  \"appPreloadHintStartupTasks\": [\n    {\n      \"name\": \"libhsp1_01\",\n      \"srcEntry\": \"libhsp1_01.so\",\n      \"dependencies\": [\n        \"libhsp1_02\",\n        \"libhar1_01\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"excludeFromAutoStart\": true\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分别在各个模块的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "的appStartup标签中，添加启动框架配置文件的索引。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hsp1、hsp2以及har1的module.json5示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"hsp1\",\n    \"type\": \"shared\",\n    // ···\n    \"appStartup\": \"$profile:startup_config\", // 启动框架的配置文件\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"hsp2\",\n    \"type\": \"shared\",\n    // ···\n    \"appStartup\": \"$profile:startup_config\", // 启动框架的配置文件\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"har1\",\n    \"type\": \"har\",\n    // ···\n    \"appStartup\": \"$profile:startup_config\", // 启动框架的配置文件\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其余步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0",
        children: "设置启动参数"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%B8%BA%E6%AF%8F%E4%B8%AA%E5%BE%85%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6%E6%B7%BB%E5%8A%A0%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1",
        children: "为每个待初始化功能组件添加启动任务"
      }), "章节进行配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改启动模式",
      children: "修改启动模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStartup分别提供了自动和手动两种方式来执行启动任务，entry模块中默认采用自动模式，开发者可以根据需要修改为手动模式，HSP与HAR只能配置为手动模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自动模式：当AbilityStage完成创建后，自动执行启动任务。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["手动模式：在UIAbility完成创建后手动调用，来执行启动任务与so预加载任务。对于某些使用频率不高的模块，不需要应用最开始启动时就进行初始化。开发者可以选择将该部分启动任务修改为手动模式，在应用启动完成后调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupmanager/js-apis-app-appstartup-startupmanager#startupmanagerrun",
          children: "startupManager.run"
        }), "方法来执行启动任务与so预加载任务。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以UIAbility的onCreate生命周期中为例，介绍如何采用手动模式来启动任务，示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want, startupManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n    let startParams = ['StartupTask_005', 'StartupTask_006'];\n    try {\n      startupManager.run(startParams).then(() => {\n        console.info(`StartupTest startupManager run then, startParams = ${JSON.stringify(startParams)}.`);\n      }).catch((error: BusinessError) => {\n        console.error(`StartupTest promise catch error, error = ${JSON.stringify(error)}.`);\n        console.error(`StartupTest promise catch error, startParams = ${JSON.stringify(startParams)}.`);\n      })\n    } catch (error) {\n      let errMsg = (error as BusinessError).message;\n      let errCode = (error as BusinessError).code;\n      console.error(`Startup catch error, errCode= ${errCode}.`);\n      console.error(`Startup catch error, errMsg= ${errMsg}.`);\n    }\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者还可以在页面加载完成后，在页面中调用启动框架手动模式，示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { startupManager } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  // 请将$r('app.string.manual_mode')替换为实际资源文件，在本示例中该资源文件的value值为\"手动模式\"\n  @State message: ResourceStr = $r('app.string.manual_mode');\n  @State startParams1: Array<string> = ['StartupTask_006'];\n  @State startParams2: Array<string> = ['libentry_006'];\n\n  build() {\n    RelativeContainer() {\n      Button(this.message)\n        .id('AppStartup')\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          if (!startupManager.isStartupTaskInitialized('StartupTask_006')) { // 判断是否已经完成初始化\n            startupManager.run(this.startParams1);\n          }\n          if (!startupManager.isStartupTaskInitialized('libentry_006')) {\n            startupManager.run(this.startParams2);\n          }\n        })\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加任务匹配规则",
      children: "添加任务匹配规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在通过卡片、通知、意图调用等方式拉起某个页面时，为了实现功能服务一步直达，可以通过添加matchRules匹配规则，仅加载与当前场景相关的部分启动任务，无需加载全部默认的自动启动任务，以提高启动性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过以下两种方式添加匹配规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过matchRules中的uris、actions、insightIntents字段，根据UIAbility启动时的uri、action或意图名称，匹配不同场景启动任务及预加载so任务。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果上述方式不能满足需求，可以通过matchRules中的customization自定义匹配规则。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表5"
            })
          }), " matchRules标签说明"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "数据类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否可缺省"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "适用场景"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "uris"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示自动模式执行的任务的uri取值范围。当UIAbility启动时，会将", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
                  children: "Want"
                }), "中携带的uri属性，与此处配置的uris数组取值进行匹配。格式为scheme://host/path，uri中的其它内容会被忽略（如port、fragment等）。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通过特定uri拉起UIAbility的场景。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "actions"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示自动模式执行的任务的action取值范围。当UIAbility启动时，会将", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
                  children: "Want"
                }), "中携带的action属性，与此处配置的actions数组取值进行匹配。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通过特定action拉起UIAbility的场景。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "insightIntents"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示自动模式执行的任务的意图名称取值范围。当UIAbility启动时，会将意图名称与此处配置的insightIntents数组取值进行匹配。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通过特定意图名称拉起UIAbility的场景。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "customization"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示自动模式执行的任务的自定义规则取值范围。通过实现StartupConfigEntry的", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry#onrequestcustommatchrule20",
                  children: "onRequestCustomMatchRule"
                }), "接口返回自定义规则值。当UIAbility启动时，会将自定义规则值与此处配置的customization数组取值进行匹配。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), "  仅支持startupTasks中的任务配置。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果使用uris、actions、insightIntents字段无法满足要求，可以使用customization自定义规则。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(812692)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "uris、insightIntents、actions、customization任一属性匹配成功即为任务匹配成功。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "匹配成功的任务及其依赖任务都将在自动模式执行。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "所有任务均匹配失败，则按任务的excludeFromAutoStart配置处理。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以uri匹配（action和意图名称类似）和customization匹配来举例，介绍如何实现添加任务匹配规则来筛选启动任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景1：uri匹配"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假定需要用户点击通知消息跳转到通知详情页面时，仅自动执行StartupTask_004和libentry_006任务。若启动通知详情UIAbility时Want中的uri属性为test://com.example.startupdemo/notification，可以通过uri匹配。示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
            children: "定义启动任务配置"
          }), "步骤中的startup_config.json文件进行修改，增加StartupTask_004任务和libentry_006任务的matchRules配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"startupTasks\": [\n    {\n      \"name\": \"StartupTask_004\",\n      \"srcEntry\": \"./ets/startup/StartupTask_004.ets\",\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false,\n      \"matchRules\": {\n        \"uris\": [\n          \"test://com.example.startupdemo/notification\"\n        ]\n      }\n    },\n  ],\n  \"appPreloadHintStartupTasks\": [\n    {\n      \"name\": \"libentry_006\",\n      \"srcEntry\": \"libentry_006.so\",\n      \"runOnThread\": \"taskPool\",\n      \"excludeFromAutoStart\": true,\n      \"matchRules\": {\n        \"uris\": [\n          \"test://com.example.startupdemo/notification\"\n        ]\n      }\n    }\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景2：customization匹配"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假定需要用户点击天气卡片跳转到天气界面时，仅自动执行StartupTask_006启动任务和excludeFromAutoStart=false配置的预加载so任务。若启动天气UIAbility时Want中传入的自定义参数fromType为card，可以通过customization匹配。示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0",
            children: "设置启动参数"
          }), "步骤中的MyStartupConfigEntry.ets文件进行修改，新增", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry#onrequestcustommatchrule20",
            children: "onRequestCustomMatchRule"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { StartupConfigEntry, Want } from '@kit.AbilityKit';\n// ···\n\nexport default class MyStartupConfigEntry extends StartupConfigEntry {\n// ···\n  onRequestCustomMatchRule(want: Want): string {\n    if (want?.parameters?.fromType == 'card') {\n      return 'ruleCard';\n    }\n    return '';\n  }\n\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
            children: "定义启动任务配置"
          }), "步骤中的startup_config.json文件进行修改，增加StartupTask_006任务的matchRules配置。预加载so任务不支持customization字段，按任务原有的excludeFromAutoStart配置处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"startupTasks\": [\n    {\n      \"name\": \"StartupTask_006\",\n      \"srcEntry\": \"./ets/startup/StartupTask_006.ets\",\n      \"runOnThread\": \"mainThread\",\n      \"waitOnMainThread\": false,\n      \"excludeFromAutoStart\": true,\n      \"matchRules\": {\n        \"customization\": [\n          \"ruleCard\"\n        ]\n      }\n    }\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置启动任务调度阶段",
      children: "设置启动任务调度阶段"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，支持设置启动任务调度阶段。启动任务默认在AbilityStage模块加载后、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#oncreate",
        children: "AbilityStage.onCreate"
      }), "生命周期之前开始执行。对于大型应用，AbilityStage模块的加载可能耗时较长，开发者可以将启动任务的schedulerPhase字段配置为preAbilityStageLoad，使启动任务在AbilityStage模块加载前被调度，并在异步线程中与AbilityStage模块加载并发执行，从而缩短应用启动时间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900424)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于启动任务在AbilityStage模块加载前被调度执行，改变了原有的执行顺序。如果启动任务依赖于AbilityStage模块的加载，可能会导致运行结果不符合预期，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects",
        children: "模块加载副作用及优化"
      }), "对依赖部分进行适配。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，应用首页需要通过网络请求获取Feed流数据，且希望该任务能在异步线程中与AbilityStage模块加载并发执行。假设网络请求任务为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE",
        children: "定义启动任务配置"
      }), "步骤中的StartupTask_004，开发步骤如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置任务在AbilityStage模块加载前调度执行。在startup_config.json文件中，将StartupTask_004任务的schedulerPhase字段设为preAbilityStageLoad。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置任务在异步线程中与AbilityStage模块加载并发执行。将StartupTask_004任务的runOnThread设为taskPool，waitOnMainThread设为false。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"startupTasks\": [\n    {\n      \"name\": \"StartupTask_004\",\n      \"srcEntry\": \"./ets/startup/StartupTask_004.ets\",\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false,\n      \"schedulerPhase\": \"preAbilityStageLoad\"\n    }\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\"\n}\n"
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
900424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
785268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957500-00789c51dd681855aab0569e1b6d3819.png");

},
812692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
672521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477501-cbe1f615f6574a2b53e910940217472b.png");

},
421411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
263382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797850-d1023b4a461fe294ecd8a56b0ab26541.png");

},
263547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437545-4adfc8d10f5736758c35a3b4273e7495.png");

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