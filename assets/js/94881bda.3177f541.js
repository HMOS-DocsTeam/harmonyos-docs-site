"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["18037"], {
141777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_env_property_arkts_env_system_property_arkts_env_system_property_md_948_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-env-property-arkts-env-system-property-arkts-env-system-property-md-948.json
var site_docs_arkui_arkts_ui_development_arkts_env_property_arkts_env_system_property_arkts_env_system_property_md_948_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/arkts-env-system-property","title":"@Env：环境变量","description":"在多设备开发的场景中，开发者可以使用@Env装饰器监听系统环境变量的改变，并根据系统环境变量来进行相应的场景判断，以减少不同设备间的适配逻辑和重复开发。","source":"@site/docs/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/arkts-env-system-property.md","sourceDirName":"arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property","slug":"/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@Env：环境变量","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ContentSlot：混合开发","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/"},"next":{"title":"组件导航和页面路由概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/arkts-env-system-property.md


const frontMatter = {
	title: '@Env：环境变量',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Env：环境变量';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "@Env支持参数",
  "id": "env支持参数",
  "level": 2
}, {
  "value": "@Env和Environment能力对比",
  "id": "env和environment能力对比",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "@Env初始化流程",
  "id": "env初始化流程",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "在@ComponentV2中使用@Env",
  "id": "在componentv2中使用env",
  "level": 3
}, {
  "value": "在@Component中使用@Env",
  "id": "在component中使用env",
  "level": 3
}, {
  "value": "通过BuilderNode切换窗口",
  "id": "通过buildernode切换窗口",
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
        id: "env环境变量",
        children: "@Env：环境变量"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在多设备开发的场景中，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property",
        children: "@Env"
      }), "装饰器监听系统环境变量的改变，并根据系统环境变量来进行相应的场景判断，以减少不同设备间的适配逻辑和重复开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(593621)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，@Env支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Env是响应式系统环境变量装饰器，其功能包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据入参读取相应的环境变量信息，详情见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#env%E6%94%AF%E6%8C%81%E5%8F%82%E6%95%B0",
          children: "@Env支持参数"
        }), "。目前支持以下几种环境变量：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
              children: "SystemProperties.BREAK_POINT"
            }), "，用于获取窗口不同宽高阈值下对应的断点值信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
              children: "SystemProperties.WINDOW_SIZE23+"
            }), "，用于获取窗口的大小信息，单位为vp。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
              children: "SystemProperties.WINDOW_SIZE_PX23+"
            }), "，用于获取窗口的大小信息，单位为px。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
              children: "SystemProperties.WINDOW_AVOID_AREA23+"
            }), "，用于获取窗口的避让区域信息，单位为vp。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
              children: "SystemProperties.WINDOW_AVOID_AREA_PX23+"
            }), "，用于获取窗口的避让区域信息，单位为px。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统环境变量改变时，通知@Env装饰的变量更新，并触发@Env关联组件刷新，以实现界面内容的同步更新。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Env装饰的变量不允许开发者初始化。@Env会返回给开发者可观察的环境变量类（由", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@ObservedV2"
        }), "装饰，且其由属性", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@Trace"
        }), "装饰）的实例。开发者如果想监听环境变量的变化，可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
          children: "addMonitor"
        }), "，具体示例见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8componentv2%E4%B8%AD%E4%BD%BF%E7%94%A8env",
          children: "在@ComponentV2中使用@Env"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "env支持参数",
      children: "@Env支持参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Env支持的参数请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
        children: "SystemProperties枚举类型说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "env和environment能力对比",
      children: "@Env和Environment能力对比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Env和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
        children: "Environment"
      }), "都是系统环境变量相关，但两者能力有较大的不同，具体能力对比见下表。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Env"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Environment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "起始API version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 22开始支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 7开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
              children: "SystemProperties的枚举值"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持languageCode等参数，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment#environment%E5%86%85%E7%BD%AE%E5%8F%82%E6%95%B0",
              children: "Environment内置参数"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用形式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Env为装饰器，可声明在@Component或@ComponentV2中，获取对应参数的环境变量信息。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#envprop10",
              children: "envProp"
            }), "等接口获取当前应用的环境变量，并存入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
              children: "AppStorage"
            }), "中，开发者可通过AppStorage的接口访问系统环境变量的值，具体例子见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment#%E4%BB%8Eui%E4%B8%AD%E8%AE%BF%E9%97%AEenvironment%E5%8F%82%E6%95%B0",
              children: "从ui中访问environment参数"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否有响应式能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有，当系统环境变量变化时，会通知@Env装饰的环境变量的改变，并通知@Env关联组件刷新。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无，系统环境变量变化时，不会通知Environment改变。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Env仅支持在@Component和@ComponentV2中使用，否则会有编译时报错。如果开发者绕过编译时检查，则会有运行时报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { uiObserver } from '@kit.ArkUI';\n\nclass Info {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误用法，编译时报错\n}\n\n@Entry\n@Component\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确用法\n\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Env装饰的变量为只读属性，不允许开发者进行初始化或赋值操作，否则会有编译时报错。如果开发者绕过编译时检查，则会有运行时报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { uiObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo =\n    new uiObserver.WindowSizeLayoutBreakpointInfo(); // 错误用法，编译时报错\n\n  build() {\n    Column() {\n      Text(`breakpoint height ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`breakpoint width ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Button('change breakpoint').onClick(() => {\n        this.breakpoint = new uiObserver.WindowSizeLayoutBreakpointInfo(); // 错误用法，编译时报错\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Env当前支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/responsive-env-system-property/ts-env-system-property/ts-env-system-property#systemproperties",
            children: "SystemProperties的枚举值"
          }), "。若使用不支持的参数，将触发编译时报错。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { uiObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint1: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确写法\n  @Env('unsupported_key') breakpoint2: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误写法，@Env非法入参，编译时报错。\n\n  build() {\n    Text(`breakpoint2 width: ${this.breakpoint2.widthBreakpoint} height: ${this.breakpoint2.heightBreakpoint}`)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Env使用不同的key值时，装饰的变量类型必须一一对应，否则会有编译时报错。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env使用SystemProperties.BREAK_POINT时，装饰的变量类型必须为uiObserver.WindowSizeLayoutBreakpointInfo类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env使用SystemProperties.WINDOW_SIZE时，装饰的变量类型必须为window.SizeInVP类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env使用SystemProperties.WINDOW_SIZE_PX时，装饰的变量类型必须为window.Size类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env使用SystemProperties.WINDOW_AVOID_AREA时，装饰的变量类型必须为window.UIEnvWindowAvoidAreaInfoVP类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env使用SystemProperties.WINDOW_AVOID_AREA_PX时，装饰的变量类型必须为window.UIEnvWindowAvoidAreaInfoPX类型。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { uiObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint1: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确写法\n  @Env(SystemProperties.BREAK_POINT) breakpoint2: string; // 错误写法，@Env使用SystemProperties.BREAK_POINT时仅支持装饰WindowSizeLayoutBreakpointInfo类型\n\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Env只能单独使用，不能和其他V1V2状态变量装饰器或@Require联用，否则会有编译时报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Env(SystemProperties.BREAK_POINT) breakpoint1: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确写法\n@State @Env(SystemProperties.BREAK_POINT) breakpoint2: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误写法，编译时报错\n@Require @Env(SystemProperties.BREAK_POINT) breakpoint3: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误写法，编译时报错\n@Local @Env(SystemProperties.BREAK_POINT) breakpoint4: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误写法，编译时报错\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Env装饰的变量在@Component和@ComponentV2传递遵循以下规则："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env装饰的变量仅能用于初始化@ComponentV2中@Param装饰的变量，否则会有编译时报错。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["@Env装饰的变量仅能用于初始化@Component中常规变量，否则会有编译时报错。需要注意，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
              children: "BuilderNode"
            }), "切换窗口，会导致@Env依据新的窗口更新环境变量实例。在切换窗口的场景中，不建议开发者使用@Env变量来初始化子组件的常规变量，否则会造成该常规变量无法被@Env通知触发其关联UI组件刷新。具体示例可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%80%9A%E8%BF%87buildernode%E5%88%87%E6%8D%A2%E7%AA%97%E5%8F%A3",
              children: "通过BuilderNode切换窗口"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { uiObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确写法\n\n  build() {\n    Column() {\n      CompV2({ breakpoint: this.breakpoint }) // 正确写法\n      Comp({ breakpoint: this.breakpoint }) // 正确写法\n\n      CompV2Invalid({ breakpoint: this.breakpoint }) // 错误写法，@Env装饰的变量仅能初始化V2的@Param变量\n      CompInvalid({ breakpoint: this.breakpoint }) // 错误写法，@Env装饰的变量仅能初始化V1的常规变量\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Require @Param breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确写法\n\n  build() {\n  }\n}\n\n@ComponentV2\nstruct CompV2Invalid {\n  @Require breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误写法\n\n  build() {\n  }\n}\n\n@Component\nstruct Comp {\n  @Require breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 正确写法\n\n  build() {\n  }\n}\n\n@Component\nstruct CompInvalid {\n  @ObjectLink breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo; // 错误写法\n\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "env初始化流程",
      children: "@Env初始化流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Env变量不允许开发者初始化，其值由框架根据当前窗口的环境变量自动提供，@Env变量在被第一次读值的时候，会触发初始化。@Env变量初始化遵循以下流程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从父组件中查找已有实例：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "向上递归查找父组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果某个父组件在同一窗口中已经初始化过相同key的@Env变量，则直接复用该实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若未找到，则继续向上查找，直到父组件为空。需要注意，向上查找父组件的流程会被BuilderNode打断。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["查找当前窗口的@Env实例。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果在父组件中未找到对应的实例，则检查当前窗口是否已有相同key的@Env变量实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如存在，则复用该窗口内的@Env实例。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["首次请求：创建新环境变量实例。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若以上两步都无法得到实例，则说明当前窗口第一次读取该环境变量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "框架会创建一个新的可观察环境变量实例并与当前窗口绑定，然后完成初始化。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程图如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(814955)/* ["default"] */.A) + "",
        width: "1385",
        height: "1076"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上面流程，下面的示例中以@Env使用SystemProperties.BREAK_POINT为例，各个组件中的初始化如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(684570)/* ["default"] */.A) + "",
        width: "978",
        height: "509"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Child1初始化@Env(SystemProperties.BREAK_POINT)：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "递归查找直到父组件为空：向上查找父组件Index，没有@Env对应的SystemProperties.BREAK_POINT实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "查找当前窗口：没有@Env对应的SystemProperties.BREAK_POINT实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建SystemProperties.BREAK_POINT对应的可观察的环境变量实例，并和当前窗口绑定。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GrandChild1初始化@Env(SystemProperties.BREAK_POINT)：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "递归查找父组件，直到父组件为空：向上查找父组件Child1，查找到Child1有@Env对应的SystemProperties.BREAK_POINT实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "复用Child1中@Env对应的SystemProperties.BREAK_POINT实例。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GrandChild2初始化@Env(SystemProperties.BREAK_POINT)：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "递归查找直到父组件为空：向上查找父组件Child2和祖先节点Index，均没有@Env对应的SystemProperties.BREAK_POINT实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "查找当前窗口：有@Env对应的SystemProperties.BREAK_POINT实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "复用窗口中SystemProperties.BREAK_POINT对应的环境变量实例。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Text(`Index`)\n      Child1()\n      Child2()\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct Child1 {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`Child1 breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`Child1 breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      GrandChild1()\n    }\n  }\n}\n\n@Component\nstruct Child2 {\n  build() {\n    Column() {\n      GrandChild2()\n    }\n  }\n}\n\n@Component\nstruct GrandChild1 {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`GrandChild1 breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`GrandChild1 breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n    }\n  }\n}\n\n\n@Component\nstruct GrandChild2 {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`GrandChild2 breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`GrandChild2 breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在componentv2中使用env",
      children: "在@ComponentV2中使用@Env"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在@ComponentV2中声明@Env，获取当前@ComponentV2组件创建时所在窗口尺寸的布局断点信息，并用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
          children: "addMonitor"
        }), "监听this.breakpoint的属性的变化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在@ComponentV2中声明@Env，获取当前@ComponentV2组件创建时所在窗口的大小信息，单位为vp，并用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
          children: "addMonitor"
        }), "监听this.sizeInVP的属性的变化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在@ComponentV2中声明@Env，获取当前@ComponentV2组件创建时所在窗口的大小信息，单位为px，并用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
          children: "addMonitor"
        }), "监听this.sizeInPX的属性的变化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将@Env装饰的变量传递给CompV2中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
          children: "@Param"
        }), "装饰的变量和Comp中的常规变量。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('Landscape')和Button('Portrait')切换横竖屏，Index、CompV2和Comp关联组件进行对应的刷新，orientationChange被触发监听回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver, UIUtils, window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n  @Env(SystemProperties.WINDOW_SIZE) sizeInVP: window.SizeInVP;\n  @Env(SystemProperties.WINDOW_SIZE_PX) sizeInPX: window.Size;\n\n  private changeOrientation(isLandscape: boolean) {\n    const context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n    window.getLastWindow(context).then((lastWindow) => {\n      lastWindow.setPreferredOrientation(isLandscape ? window.Orientation.LANDSCAPE : window.Orientation.PORTRAIT);\n    });\n  }\n\n  orientationChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`${path} changes from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    })\n  }\n\n  aboutToAppear(): void {\n    // @Env返回的对象实际上是@ObservedV2装饰的对象（其属性是@Trace装饰的），所以其属性的改变可以通过addMonitor监听\n    UIUtils.addMonitor(this.breakpoint, ['widthBreakpoint', 'heightBreakpoint'], this.orientationChange);\n    UIUtils.addMonitor(this.sizeInVP, ['width', 'height'], this.orientationChange);\n    UIUtils.addMonitor(this.sizeInPX, ['width', 'height'], this.orientationChange);\n  }\n\n  build() {\n    Column() {\n      Text(`Index breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`Index breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`Index sizeInVP width: ${this.sizeInVP.width}`).fontSize(20)\n      Text(`Index sizeInVP height: ${this.sizeInVP.height}`).fontSize(20)\n      Text(`Index sizeInPX width: ${this.sizeInPX.width}`).fontSize(20)\n      Text(`Index sizeInPX height: ${this.sizeInPX.height}`).fontSize(20)\n\n      Button('Landscape').onClick(() => {\n        this.changeOrientation(true);\n      })\n\n      Button('Portrait').onClick(() => {\n        this.changeOrientation(false);\n      })\n\n      CompV2({ breakpoint: this.breakpoint, sizeInVP: this.sizeInVP, sizeInPX: this.sizeInPX })\n      Comp({ breakpoint: this.breakpoint, sizeInVP: this.sizeInVP, sizeInPX: this.sizeInPX })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Require @Param breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n  @Require @Param sizeInVP: window.SizeInVP;\n  @Require @Param sizeInPX: window.Size;\n\n  build() {\n    Column() {\n      Text(`CompV2 breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`CompV2 breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`CompV2 sizeInVP width: ${this.sizeInVP.width}`).fontSize(20)\n      Text(`CompV2 sizeInVP height: ${this.sizeInVP.height}`).fontSize(20)\n      Text(`CompV2 sizeInPX width: ${this.sizeInPX.width}`).fontSize(20)\n      Text(`CompV2 sizeInPX height: ${this.sizeInPX.height}`).fontSize(20)\n    }\n  }\n}\n\n@Component\nstruct Comp {\n  @Require breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n  @Require sizeInVP: window.SizeInVP;\n  @Require sizeInPX: window.Size;\n\n  build() {\n    Column() {\n      Text(`Comp breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`Comp breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`Comp sizeInVP width: ${this.sizeInVP.width}`).fontSize(20)\n      Text(`Comp sizeInVP height: ${this.sizeInVP.height}`).fontSize(20)\n      Text(`Comp sizeInPX width: ${this.sizeInPX.width}`).fontSize(20)\n      Text(`Comp sizeInPX height: ${this.sizeInPX.height}`).fontSize(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在component中使用env",
      children: "在@Component中使用@Env"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Env在@Component中使用和其在@ComponentV2中使用类似，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uiObserver, UIUtils, window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n  @Env(SystemProperties.WINDOW_SIZE) sizeInVP: window.SizeInVP;\n  @Env(SystemProperties.WINDOW_SIZE_PX) sizeInPX: window.Size;\n\n  private changeOrientation(isLandscape: boolean) {\n    const context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n    window.getLastWindow(context).then((lastWindow) => {\n      lastWindow.setPreferredOrientation(isLandscape ? window.Orientation.LANDSCAPE : window.Orientation.PORTRAIT);\n    });\n  }\n\n  orientationChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`${path} changes from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    })\n  }\n\n  aboutToAppear(): void {\n    // @Env返回的对象实际上是@ObservedV2装饰的对象（其属性是@Trace装饰的），所以其属性的改变可以通过addMonitor监听\n    UIUtils.addMonitor(this.breakpoint, ['widthBreakpoint', 'heightBreakpoint'], this.orientationChange);\n    UIUtils.addMonitor(this.sizeInVP, ['width', 'height'], this.orientationChange);\n    UIUtils.addMonitor(this.sizeInPX, ['width', 'height'], this.orientationChange);\n  }\n\n  build() {\n    Column() {\n      Text(`Index breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`Index breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`Index sizeInVP width: ${this.sizeInVP.width}`).fontSize(20)\n      Text(`Index sizeInVP height: ${this.sizeInVP.height}`).fontSize(20)\n      Text(`Index sizeInPX width: ${this.sizeInPX.width}`).fontSize(20)\n      Text(`Index sizeInPX height: ${this.sizeInPX.height}`).fontSize(20)\n\n      Button('Landscape').onClick(() => {\n        this.changeOrientation(true);\n      })\n\n      Button('Portrait').onClick(() => {\n        this.changeOrientation(false);\n      })\n\n      CompV2({ breakpoint: this.breakpoint, sizeInVP: this.sizeInVP, sizeInPX: this.sizeInPX })\n      Comp({ breakpoint: this.breakpoint, sizeInVP: this.sizeInVP, sizeInPX: this.sizeInPX })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Require @Param breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n  @Require @Param sizeInVP: window.SizeInVP;\n  @Require @Param sizeInPX: window.Size;\n\n  build() {\n    Column() {\n      Text(`CompV2 breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`CompV2 breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`CompV2 sizeInVP width: ${this.sizeInVP.width}`).fontSize(20)\n      Text(`CompV2 sizeInVP height: ${this.sizeInVP.height}`).fontSize(20)\n      Text(`CompV2 sizeInPX width: ${this.sizeInPX.width}`).fontSize(20)\n      Text(`CompV2 sizeInPX height: ${this.sizeInPX.height}`).fontSize(20)\n    }\n  }\n}\n\n@Component\nstruct Comp {\n  @Require breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n  @Require sizeInVP: window.SizeInVP;\n  @Require sizeInPX: window.Size;\n\n  build() {\n    Column() {\n      Text(`Comp breakpoint width: ${this.breakpoint.widthBreakpoint}`).fontSize(20)\n      Text(`Comp breakpoint height: ${this.breakpoint.heightBreakpoint}`).fontSize(20)\n      Text(`Comp sizeInVP width: ${this.sizeInVP.width}`).fontSize(20)\n      Text(`Comp sizeInVP height: ${this.sizeInVP.height}`).fontSize(20)\n      Text(`Comp sizeInPX width: ${this.sizeInPX.width}`).fontSize(20)\n      Text(`Comp sizeInPX height: ${this.sizeInPX.height}`).fontSize(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过buildernode切换窗口",
      children: "通过BuilderNode切换窗口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Env用于展示@Component/@ComponentV2所在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window",
        children: "窗口"
      }), "的环境变量信息。开发者通过BuilderNode切换@Component@ComponentV2所在的窗口实例时，@Env会根据新的窗口获取对应的环境变量信息，并触发关联的UI组件刷新。以SystemProperties.BREAK_POINT为例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('add node to tree')，创建BuilderNode节点挂载到NodeContainer下。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('remove node from tree')，将BuilderNode节点从NodeContainer上移除。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击Button(", (0,jsx_runtime.jsx)(_components.code, {
          children: "create sub window"
        }), ")，创建子窗并显示SubWindow窗口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击SubWindow窗口内的Button('add node to tree')，将BuilderNode节点重新挂载到SubWindow内的NodeContainer下。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ComponentUnderBuilderNode在被挂载到新的窗口下时，会触发@Env重新获取新的环境变量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Env重新获取新的环境变量后，触发其关联组件的刷新。其中ComponentUnderBuilderNode中@Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo会通知CompV2内的@Param breakpoint刷新，但是并不会通知Comp内的常规变量breakpoint触发UI刷新。所以在切换窗口，@Env重新获取环境变量的场景下，建议开发者不要将@Env传递给常规变量，以避免常规变量不能被通知UI刷新的问题。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的示例包含了创建子窗的流程，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/application-window-stage",
        children: "管理应用窗口（Stage模型）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n    })\n\n    // 给Index页面传递windowStage\n    AppStorage.setOrCreate('windowStage', windowStage);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { BuilderNode, FrameNode, NodeController, uiObserver, window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nlet windowStage_: window.WindowStage | undefined = undefined;\nlet sub_windowClass: window.Window | undefined = undefined;\nlet globalBuilderNode: BuilderNode<[]> | undefined = undefined;\n\nexport class MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.uiContext = uiContext;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (!globalBuilderNode && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildComponent), undefined);\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n      globalBuilderNode = undefined;\n    }\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  Column() {\n    ComponentUnderBuilderNode()\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  private createSubWindow() {\n    windowStage_ = AppStorage.get('windowStage');\n    if (windowStage_ == null) {\n      hilog.error(DOMAIN, 'testTag', 'Failed to create the subwindow. Cause: windowStage_ is null');\n    } else {\n      // 创建应用子窗口。\n      windowStage_.createSubWindow('mySubWindow', (err: BusinessError, data) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, 'testTag', 'Failed to create the subwindow. Cause: ' + JSON.stringify(err));\n          return;\n        }\n        sub_windowClass = data;\n        if (!sub_windowClass) {\n          hilog.error(DOMAIN, 'testTag', 'sub_windowClass is null');\n          return;\n        }\n        hilog.info(DOMAIN, 'testTag', 'Succeeded in creating the subwindow. Data: ' + JSON.stringify(data));\n        // 子窗口创建成功后，设置子窗口的位置、大小及相关属性等。\n        sub_windowClass.moveWindowTo(200, 1300, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, 'testTag', 'Failed to move the window. Cause:' + JSON.stringify(err));\n            return;\n          }\n          hilog.info(DOMAIN, 'testTag', 'Succeeded in moving the window.');\n        });\n        sub_windowClass.resize(900, 1800, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, 'testTag', 'Failed to change the window size. Cause:' + JSON.stringify(err));\n            return;\n          }\n          hilog.info(DOMAIN, 'testTag', 'Succeeded in changing the window size.');\n        });\n         // 为子窗口加载对应的目标页面。\n        sub_windowClass.setUIContent('pages/SubWindow', (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause:' + JSON.stringify(err));\n            return;\n          }\n          hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n          if (!sub_windowClass) {\n            hilog.error(DOMAIN, 'testTag', 'sub_windowClass is null');\n            return;\n          }\n          sub_windowClass.showWindow((err: BusinessError) => {\n            let errCode: number = err.code;\n            if (errCode) {\n              hilog.error(DOMAIN, 'testTag', 'Failed to show the window. Cause: ' + JSON.stringify(err));\n              return;\n            }\n            hilog.info(DOMAIN, 'testTag', 'Succeeded in showing the window.');\n          });\n        });\n      })\n    }\n  }\n\n  private destroySubWindow() {\n    if (!sub_windowClass) {\n      console.error('sub_windowClass is null');\n      return;\n    }\n    // 销毁子窗口。当不再需要子窗口时，可根据具体实现逻辑，使用destroy对其进行销毁。\n    sub_windowClass.destroyWindow((err: BusinessError) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        console.error('Failed to destroy the window. Cause: ' + JSON.stringify(err));\n        return;\n      }\n      console.info('Succeeded in destroying the window.');\n    });\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`Index`)\n      // 第一步：创建globalBuilderNode，并将globalBuilderNode下的节点挂在NodeContainer的占位节点下\n      Button('add node to tree').width(200).onClick(() => {\n        this.nodeController.addBuilderNode();\n      })\n      // 第二步：从NodeContainer的占位节点下移除globalBuilderNode下的节点\n      Button('remove node from tree').width(200).onClick(() => {\n        this.nodeController.removeBuilderNode();\n      })\n      // 销毁globalBuilderNode下的节点\n      Button('dispose node').width(200).onClick(() => {\n        this.nodeController.disposeNode();\n      })\n      // 第三步：创建子窗\n      Button(`create sub window`).width(200).onClick(() => {\n        this.createSubWindow();\n      })\n      // 销毁子窗\n      Button(`destroy sub window`).width(200).onClick(() => {\n        this.destroySubWindow();\n      })\n      NodeContainer(this.nodeController).backgroundColor('#FFEEF0')\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Component\nstruct ComponentUnderBuilderNode {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`ComponentUnderBuilderNode breakpoint width: ${this.breakpoint.widthBreakpoint}`)\n      Text(`ComponentUnderBuilderNode breakpoint height: ${this.breakpoint.heightBreakpoint}`)\n\n      CompV2({ breakpoint: this.breakpoint })\n      Comp({ breakpoint: this.breakpoint })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Require @Param breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`CompV2 breakpoint width: ${this.breakpoint.widthBreakpoint}`)\n      Text(`CompV2 breakpoint height: ${this.breakpoint.heightBreakpoint}`)\n    }\n  }\n}\n\n@Component\nstruct Comp {\n  @Require breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`Comp breakpoint width: ${this.breakpoint.widthBreakpoint}`)\n      Text(`Comp breakpoint height: ${this.breakpoint.heightBreakpoint}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SubWindow.ets\nimport { MyNodeController } from './Index';\n\n@Entry\n@Component\nstruct SubWindow {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`SubWindow`)\n      // 第四步：在第一步中已在创建globalBuilderNode。将globalBuilderNode下的节点挂子窗的NodeContainer的占位节点下\n      Button('add node to tree').width(200).onClick(() => {\n        this.nodeController.addBuilderNode();\n      })\n      Button('remove node from tree').width(200).onClick(() => {\n        this.nodeController.removeBuilderNode();\n      })\n      Button('dispose node').width(200).onClick(() => {\n        this.nodeController.disposeNode();\n      })\n      NodeContainer(this.nodeController).backgroundColor('#FFEEF0')\n    }\n    .height('100%')\n    .width('100%')\n    .backgroundColor('#0D9FFB')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果图如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(757763)/* ["default"] */.A) + "",
        width: "395",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用lambda闭包函数将ComponentUnderBuilderNode中的@Env向下传递。通过这种方式ComponentUnderBuilderNode中的@Env可以收集到子组件Comp内组件的依赖，在切换窗口实例的时候触发Comp内组件的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, uiObserver, window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nlet windowStage_: window.WindowStage | undefined = undefined;\nlet sub_windowClass: window.Window | undefined = undefined;\nlet globalBuilderNode: BuilderNode<[]> | undefined = undefined;\n\nexport class MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.uiContext = uiContext;\n    return this.rootNode;\n  }\n\n  addBuilderNode(): void {\n    if (!globalBuilderNode && this.uiContext) {\n      globalBuilderNode = new BuilderNode(this.uiContext);\n      globalBuilderNode.build(wrapBuilder<[]>(buildComponent), undefined);\n    }\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.appendChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  removeBuilderNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      this.rootNode.removeChild(globalBuilderNode.getFrameNode());\n    }\n  }\n\n  disposeNode(): void {\n    if (this.rootNode && globalBuilderNode) {\n      globalBuilderNode.dispose();\n      globalBuilderNode = undefined;\n    }\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  Column() {\n    ComponentUnderBuilderNode()\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  private createSubWindow() {\n    windowStage_ = AppStorage.get('windowStage');\n    if (windowStage_ == null) {\n      hilog.error(DOMAIN, 'testTag', 'Failed to create the subwindow. Cause: windowStage_ is null');\n    } else {\n      // 创建应用子窗口。\n      windowStage_.createSubWindow('mySubWindow', (err: BusinessError, data) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, 'testTag', 'Failed to create the subwindow. Cause: ' + JSON.stringify(err));\n          return;\n        }\n        sub_windowClass = data;\n        if (!sub_windowClass) {\n          hilog.error(DOMAIN, 'testTag', 'sub_windowClass is null');\n          return;\n        }\n        hilog.info(DOMAIN, 'testTag', 'Succeeded in creating the subwindow. Data: ' + JSON.stringify(data));\n        // 子窗口创建成功后，设置子窗口的位置、大小及相关属性等。\n        sub_windowClass.moveWindowTo(200, 1300, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, 'testTag', 'Failed to move the window. Cause:' + JSON.stringify(err));\n            return;\n          }\n          hilog.info(DOMAIN, 'testTag', 'Succeeded in moving the window.');\n        });\n        sub_windowClass.resize(900, 1800, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, 'testTag', 'Failed to change the window size. Cause:' + JSON.stringify(err));\n            return;\n          }\n          hilog.info(DOMAIN, 'testTag', 'Succeeded in changing the window size.');\n        });\n         // 为子窗口加载对应的目标页面。\n        sub_windowClass.setUIContent('pages/SubWindow', (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause:' + JSON.stringify(err));\n            return;\n          }\n          hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n          if (!sub_windowClass) {\n            hilog.error(DOMAIN, 'testTag', 'sub_windowClass is null');\n            return;\n          }\n          sub_windowClass.showWindow((err: BusinessError) => {\n            let errCode: number = err.code;\n            if (errCode) {\n              hilog.error(DOMAIN, 'testTag', 'Failed to show the window. Cause: ' + JSON.stringify(err));\n              return;\n            }\n            hilog.info(DOMAIN, 'testTag', 'Succeeded in showing the window.');\n          });\n        });\n      })\n    }\n  }\n\n  private destroySubWindow() {\n    if (!sub_windowClass) {\n      console.error('sub_windowClass is null');\n      return;\n    }\n    // 销毁子窗口。当不再需要子窗口时，可根据具体实现逻辑，使用destroy对其进行销毁。\n    sub_windowClass.destroyWindow((err: BusinessError) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        console.error('Failed to destroy the window. Cause: ' + JSON.stringify(err));\n        return;\n      }\n      console.info('Succeeded in destroying the window.');\n    });\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`Index`)\n      // 第一步：创建globalBuilderNode，并将globalBuilderNode下的节点挂在NodeContainer的占位节点下\n      Button('add node to tree').width(200).onClick(() => {\n        this.nodeController.addBuilderNode();\n      })\n      // 第二步：从NodeContainer的占位节点下移除globalBuilderNode下的节点\n      Button('remove node from tree').width(200).onClick(() => {\n        this.nodeController.removeBuilderNode();\n      })\n      // 销毁globalBuilderNode下的节点\n      Button('dispose node').width(200).onClick(() => {\n        this.nodeController.disposeNode();\n      })\n      // 第三步：创建子窗\n      Button(`create sub window`).width(200).onClick(() => {\n        this.createSubWindow();\n      })\n      // 销毁子窗\n      Button(`destroy sub window`).width(200).onClick(() => {\n        this.destroySubWindow();\n      })\n      NodeContainer(this.nodeController).backgroundColor('#FFEEF0')\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Component\nstruct ComponentUnderBuilderNode {\n  @Env(SystemProperties.BREAK_POINT) breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`ComponentUnderBuilderNode breakpoint width: ${this.breakpoint.widthBreakpoint}`)\n      Text(`ComponentUnderBuilderNode breakpoint height: ${this.breakpoint.heightBreakpoint}`)\n\n      CompV2({ breakpoint: this.breakpoint })\n      // 通过lambda闭包函数，使得@Env可以关联到Comp内的组件\n      Comp({ getEnv: () => this.breakpoint })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Require @Param breakpoint: uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`CompV2 breakpoint width: ${this.breakpoint.widthBreakpoint}`)\n      Text(`CompV2 breakpoint height: ${this.breakpoint.heightBreakpoint}`)\n    }\n  }\n}\n\n@Component\nstruct Comp {\n  // 通过lambda闭包函数获取父组件的@Env的实例\n  @Require getEnv: () => uiObserver.WindowSizeLayoutBreakpointInfo;\n\n  build() {\n    Column() {\n      Text(`Comp breakpoint width: ${this.getEnv().widthBreakpoint}`)\n      Text(`Comp breakpoint height: ${this.getEnv().heightBreakpoint}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果图如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805276)/* ["default"] */.A) + "",
        width: "393",
        height: "819"
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
814955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477675-009087b364015eb0eb4e6b37192f2bb6.png");

},
684570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798026-7aff6d086d649df1ab9e96c938d03957.png");

},
805276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957676-e75d2545b9c6e75ff6b29c6d0dcc530c.gif");

},
593621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
757763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437721-94267e3b56f3469d82f53f2cedf73510.gif");

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