"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["62249"], {
1145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_v_1_v_2_migration_arkts_v_1_v_2_migration_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-v-1-v-2-migration-arkts-v-1-v-2-migration-md-378.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_v_1_v_2_migration_arkts_v_1_v_2_migration_md_378_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/arkts-v1-v2-migration","title":"V1-V2迁移概述","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/arkts-v1-v2-migration.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"V1-V2迁移概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"!!语法：双向绑定","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding/"},"next":{"title":"组件内状态变量迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration/arkts-v1-v2-migration.md


const frontMatter = {
	title: 'V1-V2迁移概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'V1-V2迁移概述';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "V1V2使用指引",
  "id": "v1v2使用指引",
  "level": 2
}, {
  "value": "V1与V2差异对比",
  "id": "v1与v2差异对比",
  "level": 2
}, {
  "value": "V1与V2能力对照迁移表",
  "id": "v1与v2能力对照迁移表",
  "level": 2
}, {
  "value": "状态管理V1向V2逐步迁移策略",
  "id": "状态管理v1向v2逐步迁移策略",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "v1-v2迁移概述",
        children: "V1-V2迁移概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理框架的迭代演进中，先后推出了", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-v1",
        children: "状态管理V1"
      }), "（简称V1）和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-v2",
        children: "状态管理V2"
      }), "（简称V2）。V1侧重于组件层级的状态管理，例如，需要开发者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "逐层拆解嵌套类以使深层次数据具备观测能力。V2则实现了能力升级，增强了对数据对象的深度观察与管理能力，例如，V2的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "不仅能够感知变化后的数据，还能获取变化前的数据。通过V2版本，开发者可以更灵活地操控数据与状态，实现更高效的UI刷新，提升开发体验与应用性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为帮助已基于V1开发的应用平滑迁移至V2，本文提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-v1-v2-migration-guide",
        children: "状态管理V1向V2的迁移指导"
      }), "，涵盖迁移过程中的常见场景，便于开发者结合自身业务灵活适配。同时，针对迁移过渡阶段可能出现的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/v1v2-mixing",
        children: "状态管理V1和V2混用场景"
      }), "，文章讲解了V1使用V2组件的规则和实操方法，并根据API version 19前后的差异，分别提供了针对性解决方案，帮助开发者实现逐步改造。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1v2使用指引",
      children: "V1V2使用指引"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对V1与V2的使用，建议依据应用需求选择。鉴于V2为V1的增强版本，且正持续迭代优化，功能上更推荐新开发时使用。主要参考策略如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于新开发的应用，建议直接采用V2版本进行开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于已使用V1的应用，如果V1的功能和性能满足需求，无需立即切换至V2。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于需要在现阶段混用V1和V2的场景，请参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/v1v2-mixing",
          children: "状态管理V1和V2混用场景"
        }), "文档。编译器、工具链、DevEco Studio会对某些误用和混用场景进行校验，建议开发者遵循该文档，避免因双重代理（数据被V1和V2同时代理监听）等问题给应用带来不确定性。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1与v2差异对比",
      children: "V1与V2差异对比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于V1与V2部分的差异，具体V1和V2的区别可以参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference",
        children: "状态管理V1和V2更新机制差异"
      }), "。这部分内容，可以帮助开发者理解V1与V2运行背后的差异点，在适配时，起到事半功倍的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1与v2能力对照迁移表",
      children: "V1与V2能力对照迁移表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器名称\\场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2装饰器名称\\API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
              children: "@Component"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
              children: "@ComponentV2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component为搭配V1状态变量使用的自定义组件装饰器。  @ComponentV2为搭配V2状态变量使用的自定义组件装饰器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无外部初始化：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
              children: "@Local"
            }), "  外部初始化一次：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once",
              children: "@Once"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@State和@Local类似都是数据源的概念，在不需要外部传入初始化时，可直接迁移。如果需要外部传入初始化，则可以迁移为@Param @Once。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#state---local",
              children: "@State->@Local"
            }), "。如果使用滚动组件关联的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#waterflowsections12",
              children: "WaterFlowSections"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scrollable-common/ts-container-scrollable-common#childrenmainsize12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ChildrenMainSize"
            }), "，需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
              children: "makeObserved"
            }), "，详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object#%E6%BB%9A%E5%8A%A8%E7%BB%84%E4%BB%B6",
              children: "滚动组件"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
              children: "@Prop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@Prop和@Param类似都是自定义组件参数的概念。当输入参数为复杂类型时，@Prop为深拷贝，@Param为引用。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#prop---param",
              children: "@Prop -> @Param"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
              children: "@Event"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@Link是框架自己封装实现的双向同步，对于V2开发者可以通过@Param@Event自己实现双向同步。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#link---paramevent",
              children: "@Link -> @Param/@Event"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@Observed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@ObservedV2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表明当前对象为可观察对象。但两者能力并不相同。  @Observed可观察第一层的属性，需要搭配", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@ObjectLink"
            }), "使用才能生效。  @ObservedV2本身无观察能力，仅代表当前class可被观察，如果要观察其属性，需要搭配@Trace使用。详情见迁移场景---", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class#objectlinkobservedtrack---observedv2trace",
              children: "@ObjectLink/@Observed/@Track -> @ObservedV2/@Trace"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@ObjectLink"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@ObservedV2"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["直接兼容，@ObjectLink需要被@Observed装饰的class的实例初始化，主要应用于观察嵌套类场景。在状态管理V2中可以使用@ObservedV2@Trace。详情见迁移场景---", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class#objectlinkobservedtrack---observedv2trace",
              children: "@ObjectLink/@Observed/@Track -> @ObservedV2/@Trace"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
              children: "@Track"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["V1装饰器@Track为精确观察，不使用则无法做到类属性的精准观察。  V2@Trace装饰的属性可以被精确跟踪观察。详情见迁移场景---", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class#objectlinkobservedtrack---observedv2trace",
              children: "@ObjectLink/@Observed/@Track -> @ObservedV2/@Trace"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Provide"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Consume"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Provider"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
              children: "@Consumer"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["兼容。详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#provideconsume---providerconsumer",
              children: "@Provide/@Consume迁移场景"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
              children: "@Watch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
              children: "@Monitor"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@Watch用于监听V1状态变量的变化，具有监听状态变量本身和其第一层属性变化的能力。状态变量可观察到的变化会触发其@Watch监听事件，详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#watch---monitor",
              children: "@Watch -> @Monitor"
            }), "。  @Monitor用于监听V2状态变量的变化，搭配@Observed和@Trace一起使用，可有深层监听的能力。状态变量在一次事件中多次变化时，仅会以最终的结果判断是否触发@Monitor监听事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无计算属性能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
              children: "@Computed"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态管理V1无计算属性相关能力，状态管理V2可使用@Computed避免重复计算。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component#%E9%87%8D%E5%A4%8D%E8%AE%A1%E7%AE%97---computed%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7",
              children: "重复计算->@Computed计算属性"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
              children: "LocalStorage"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@ObservedV2"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["兼容。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application#localstorage-observedv2trace",
              children: "LocalStorage->@ObservedV2/@Trace"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
              children: "AppStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
              children: "AppStorageV2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["兼容。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application#appstorage-appstoragev2",
              children: "AppStorage->AppStorageV2"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
              children: "Environment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用Ability接口获取系统环境变量"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Environment获取环境变量能力和AppStorage耦合。在V2中可直接调用Ability接口获取系统环境变量。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application#environment-%E8%B0%83%E7%94%A8ability%E6%8E%A5%E5%8F%A3%E7%9B%B4%E6%8E%A5%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",
              children: "Environment->调用Ability接口直接获取系统环境变量"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
              children: "PersistentStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
              children: "PersistenceV2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PersistentStorage持久化能力和AppStorage耦合，PersistenceV2持久化能力可独立使用。详情见迁移场景--", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application#persistentstorage-persistencev2",
              children: "PersistentStorage->PersistenceV2"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v1向v2逐步迁移策略",
      children: "状态管理V1向V2逐步迁移策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于已经使用V1开发的大型应用，通常难以一次性从V1迁移到V2，而是需要分批次、分组件地逐步迁移；首先考虑将V1组件迁移为V2组件，这部分可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-v1-v2-migration-guide",
        children: "状态管理V1向V2迁移场景"
      }), "进行适配。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["迁移过程中由于V1与V2存在共存的情况，这就必然会带来V1和V2的混用。针对混用的场景，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/v1v2-mixing",
        children: "状态管理V1和V2混用场景"
      }), "进行适配，并最终完成V1->V2的全量适配。"]
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