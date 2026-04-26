"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["172021"], {
543336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_overview_arkts_state_management_overview_md_75b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-overview-arkts-state-management-overview-md-75b.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_overview_arkts_state_management_overview_md_75b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/arkts-state-management-overview","title":"状态管理概述","description":"在前文的描述中，构建的页面主要为静态界面。如果要构建一个动态的、有交互的界面，就需要引入“状态”的概念。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/arkts-state-management-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"状态管理概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Require装饰器：校验构造传参","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require/"},"next":{"title":"状态管理术语","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/arkts-state-management-overview.md


const frontMatter = {
	title: '状态管理概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态管理概述';

const assets = {

};



const toc = [{
  "value": "状态管理版本介绍",
  "id": "状态管理版本介绍",
  "level": 2
}, {
  "value": "状态管理（V1）",
  "id": "状态管理v1",
  "level": 2
}, {
  "value": "装饰器总览",
  "id": "装饰器总览",
  "level": 3
}, {
  "value": "其他状态管理V1功能",
  "id": "其他状态管理v1功能",
  "level": 3
}, {
  "value": "状态管理（V2）",
  "id": "状态管理v2",
  "level": 2
}, {
  "value": "状态管理V1现状以及V2优点",
  "id": "状态管理v1现状以及v2优点",
  "level": 3
}, {
  "value": "装饰器总览",
  "id": "装饰器总览-1",
  "level": 3
}, {
  "value": "状态管理V1与V2能力对比",
  "id": "状态管理v1与v2能力对比",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "状态管理概述",
        children: "状态管理概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在前文的描述中，构建的页面主要为静态界面。如果要构建一个动态的、有交互的界面，就需要引入“状态”的概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149387)/* ["default"] */.A) + "",
        width: "204",
        height: "88"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的示例中，用户与应用程序的交互触发了文本状态变更，状态变更引起了UI渲染，UI从“Hello World”变更为“Hello ArkUI”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在声明式UI编程框架中，UI是程序状态的运行结果，用户构建了一个UI模型，其中应用的运行时状态作为参数。当参数改变时，UI作为返回结果，也将进行对应的改变。这些运行时的状态变化导致的UI重新渲染，在ArkUI中统称为状态管理机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件中的变量，必须使用装饰器装饰，才能成为状态变量，状态变量的改变会引起UI的渲染刷新。如果不使用状态变量，UI只能在初始化时渲染，后续将不会再刷新。下图展示了State和View（UI）之间的关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(173687)/* ["default"] */.A) + "",
        width: "973",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View(UI)：UI渲染，指将build方法内的UI描述和@Builder装饰的方法内的UI描述映射到界面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State：状态，指驱动UI更新的数据。通过触发组件的事件方法，改变状态数据。状态数据的改变，引起UI的重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读状态管理文档前，开发者需要了解UI范式基本语法。建议提前阅读", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
        children: "基本语法概述"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description",
        children: "声明式UI描述"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary",
        children: "状态管理术语"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
        children: "自定义组件-创建自定义组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(300809)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前状态管理的功能仅支持在UI主线程使用，不能在子线程、Worker、TaskPool中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理版本介绍",
      children: "状态管理版本介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前状态管理分为V1、V2两个版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V2是V1的增强版本，正在持续迭代优化来为开发者提供更多功能和灵活性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于新开发的应用，建议直接使用V2版本范式来进行开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于已经使用V1的应用，如果V1的功能和性能已能满足需求，则不必立即切换到V2。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v1",
      children: "状态管理（V1）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以选择使用状态管理V1版本进行应用开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器总览",
      children: "装饰器总览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI状态管理V1提供了多种装饰器，通过使用这些装饰器，状态变量不仅可以观察组件内的改变，还可以在不同组件层级间传递，比如父子组件、跨组件层级，也可以观察全局范围内的变化。根据状态变量的影响范围，将所有的装饰器可以大致分为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管理组件内状态的装饰器：组件级别的状态管理，可以观察同一个组件树上（即同一个页面内）组件内或不同组件层级的变量变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管理应用级状态的装饰器：应用级别的状态管理，可以观察不同页面，甚至不同UIAbility的状态变化，是应用内全局的状态管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "装饰器可按数据传递形式和同步类型分为：只读的单向传递和可变更的双向传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图示如下，具体装饰器的介绍，可详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-component-state-management",
        children: "管理组件拥有的状态"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-application-state-management",
        children: "管理应用拥有的状态"
      }), "。开发者可以利用这些能力来实现数据和UI的联动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179771)/* ["default"] */.A) + "",
        width: "1169",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上图中，Components部分的装饰器为组件级别的状态管理，Application部分为应用的状态管理。开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
        children: "@StorageLink"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink",
        children: "@LocalStorageLink"
      }), "实现应用和组件状态的双向同步，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop",
        children: "@StorageProp"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
        children: "@LocalStorageProp"
      }), "实现应用和组件状态的单向同步。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-component-state-management",
        children: "管理组件拥有的状态"
      }), "，即图中Components级别的状态管理："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "：@State装饰的变量拥有其所属组件的状态，可以作为其子组件单向和双向同步的数据源。当其数值改变时，会引起相关组件的渲染刷新。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop"
        }), "：@Prop装饰的变量可以和父组件建立单向同步关系，@Prop装饰的变量是可变的，但修改不会同步回父组件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "：@Link装饰的变量可以和父组件建立双向同步关系，子组件中@Link装饰变量的修改会同步给父组件中建立双向数据绑定的数据源，父组件的更新也会同步给@Link装饰的变量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Provide/@Consume"
        }), "：@Provide/@Consume装饰的变量用于跨组件层级（多层组件）同步状态变量，可以不需要通过参数命名机制传递，通过alias（别名）或者属性名绑定。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
          children: "@Observed"
        }), "：@Observed装饰class，需要观察多层嵌套场景的class需要被@Observed装饰。单独使用@Observed没有任何作用，需要和@ObjectLink、@Prop联用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
          children: "@ObjectLink"
        }), "：@ObjectLink装饰的变量接收@Observed装饰的class的实例，应用于观察多层嵌套场景，和父组件的数据源构建双向同步。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(940699)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed/@ObjectLink"
      }), "可以观察嵌套场景，其他的状态变量仅能观察第一层，详情见各个装饰器章节的“观察变化和行为表现”小节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-application-state-management",
        children: "管理应用拥有的状态"
      }), "，即图中Application级别的状态管理："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
          children: "AppStorage"
        }), "是应用程序中的一个特殊的单例", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
          children: "LocalStorage"
        }), "对象，是应用级的数据库，和进程绑定，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop",
          children: "@StorageProp"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
          children: "@StorageLink"
        }), "装饰器可以和组件联动。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AppStorage是应用状态的“中枢”，将需要与组件（UI）交互的数据存入AppStorage，比如持久化数据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
          children: "PersistentStorage"
        }), "和环境变量", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
          children: "Environment"
        }), "。UI再通过AppStorage提供的装饰器或API接口访问这些数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["框架还提供了LocalStorage，AppStorage是LocalStorage特殊的单例。LocalStorage是应用程序声明的应用状态的内存“数据库”，通常用于页面级的状态共享，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
          children: "@LocalStorageProp"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink",
          children: "@LocalStorageLink"
        }), "装饰器可以和UI联动。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他状态管理v1功能",
      children: "其他状态管理V1功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
        children: "@Watch"
      }), "用于监听状态变量的变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
        children: "$$运算符"
      }), "：给系统组件提供TS变量的引用，使得TS变量和系统组件的内部状态保持同步。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v2",
      children: "状态管理（V2）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强状态管理V1版本的部分能力，例如深度观察、属性级更新等，ArkUI推出状态管理V2供开发者使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理v1现状以及v2优点",
      children: "状态管理V1现状以及V2优点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V1使用代理观察数据，创建状态变量时，会同时创建一个数据代理观察者。该观察者可以感知代理变化，但无法感知实际数据变化，因此存在以下限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态变量不能独立于UI存在，同一个数据被多个视图代理时，其中一个视图的更改不会通知其他视图更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只能感知对象属性第一层的变化，无法做到深度观测和深度监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在更改对象中属性以及更改数组中元素的场景下存在冗余更新的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "装饰器间配合使用限制多，不易用。组件中没有明确状态变量的输入与输出，不利于组件化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(182251)/* ["default"] */.A) + "",
        width: "727",
        height: "305"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2增强了数据的观察能力，使数据本身可观察。更改数据时，会触发相应视图的更新。相较于状态管理V1，状态管理V2有如下优点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态变量独立于UI，更改数据会触发相应视图的更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持对象的深度观测和深度监听，且深度观测机制不影响观测性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持对象中属性级精准更新及数组中元素的最小化更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "装饰器易用性高、拓展性强，在组件中明确输入与输出，有利于组件化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672307)/* ["default"] */.A) + "",
        width: "792",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器总览-1",
      children: "装饰器总览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理（V2）提供了一套全新的装饰器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@ObservedV2"
        }), "：@ObservedV2装饰器装饰class，使得被装饰的class具有深度监听的能力。@ObservedV2和@Trace配合使用可以使class中的属性具有深度观测的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@Trace"
        }), "：@Trace装饰器装饰被@ObservedV2装饰的class中的属性，被装饰的属性具有深度观测的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
          children: "@ComponentV2"
        }), "：使用@ComponentV2装饰的struct中能使用新的装饰器。例如：@Local、@Param、@Event、@Once、@Monitor、@Provider、@Consumer。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
          children: "@Local"
        }), "：@Local装饰的变量为组件内部状态，无法从外部初始化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
          children: "@Param"
        }), "：@Param装饰的变量作为组件的输入，可以接受从外部传入初始化并同步。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once",
          children: "@Once"
        }), "：@Once装饰的变量仅初始化时同步一次，需要与@Param一起使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
          children: "@Event"
        }), "：@Event装饰方法类型，作为组件输出，可以通过该方法影响父组件中变量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
          children: "@Monitor"
        }), "：@Monitor装饰器用于@ComponentV2装饰的自定义组件或@ObservedV2装饰的类中，能够对状态变量进行深度监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
          children: "@Provider和@Consumer"
        }), "：用于跨组件层级双向同步。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
          children: "@Computed"
        }), "：计算属性，在被计算的值变化的时候，只会计算一次。主要应用于解决UI多次重用该属性从而重复计算导致的性能问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding",
          children: "!!语法"
        }), "：双向绑定语法糖。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理v1与v2能力对比",
      children: "状态管理V1与V2能力对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Observed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ObservedV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明当前对象为可观察对象。但两者能力并不相同。  @Observed可观察第一层的属性，需要搭配@ObjectLink使用才能生效。  @ObservedV2本身无观察能力，仅代表当前class可被观察，如果要观察其属性，需要搭配@Trace使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Track"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1装饰器@Track为精确观察，可以不依赖@Observed单独使用。不使用则无法做到类属性的精准观察。  V2@Trace装饰的属性可以被精确跟踪观察。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ComponentV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component为搭配V1状态变量使用的自定义组件装饰器。  @ComponentV2为搭配V2状态变量使用的自定义组件装饰器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无外部初始化：@Local  外部初始化一次：@Param@Once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@State和@Local类似都是数据源的概念，区别是@State可以外部传入初始化，而@Local无法外部传入初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop和@Param类似都是自定义组件参数的概念。当输入参数为复杂类型时，@Prop为深拷贝，@Param为引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Link是框架自己封装实现的双向同步，对于V2开发者可以通过@Param@Event自己实现双向同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ObjectLink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接兼容，@ObjectLink需要被@Observed装饰的class的实例初始化，@Param没有此限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Provide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Consume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Watch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Watch用于监听V1状态变量的变化，具有监听状态变量本身和其第一层属性变化的能力。状态变量可观察到的变化会触发其@Watch监听事件。  @Monitor用于监听V2状态变量的变化，搭配@Trace使用，可有深层监听的能力。状态变量在一次事件中多次变化时，仅会以最终的结果判断是否触发@Monitor监听事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LocalStorage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局@ObservedV2@Trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorageV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用Ability接口获取系统环境变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment获取环境变量能力和AppStorage耦合。在V2中可直接调用Ability接口获取系统环境变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PersistentStorage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PersistenceV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PersistentStorage持久化能力和AppStorage耦合，PersistenceV2持久化能力可独立使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件生命周期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件生命周期"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均支持。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
              children: "aboutToAppear"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#ondidbuild12",
              children: "onDidBuild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
              children: "aboutToDisappear"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面生命周期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面生命周期"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["均支持。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpageshow",
              children: "onPageShow"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpagehide",
              children: "onPageHide"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onbackpress",
              children: "onBackPress"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Reusable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ReusableV2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件复用。包括：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
              children: "aboutToReuse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttorecycle10",
              children: "aboutToRecycle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "!!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双向绑定。V2建议使用!!实现双向绑定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@CustomDialog"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialog12",
              children: "openCustomDialog"
            }), "接口"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义弹窗。V2建议使用openCustomDialog实现自定义弹窗功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WithTheme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WithTheme"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主题。用于设置应用局部页面自定义主题风格。包括：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onwillapplytheme12",
              children: "onWillApplyTheme"
            }), "。  从API version 18开始，该接口支持在状态管理V2组件中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "系统预置UI组件库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统预置UI组件库"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统预置UI组件库 。支持V1的系统预置UI组件，例如：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog",
              children: "Dialog"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton",
              children: "ProgressButton"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbutton/ohos-arkui-advanced-segmentbutton",
              children: "SegmentButton"
            }), "。  从API version 18开始，系统预置UI组件支持在状态管理V2组件中使用，例如：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2",
              children: "DialogV2"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2",
              children: "ProgressButtonV2"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2/ohos-arkui-advanced-segmentbuttonv2",
              children: "SegmentButtonV2"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animateTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分场景不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前某些场景下，在状态管理V2中使用animateTo动画，会产生异常效果，详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local#%E5%9C%A8%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v2%E4%B8%AD%E4%BD%BF%E7%94%A8animateto%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C%E5%BC%82%E5%B8%B8",
              children: "在状态管理V2中使用animateTo动画效果异常"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有关V1向V2的迁移可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration",
        children: "迁移指导"
      }), "，有关V1与V2的混用可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/v1v2-mixing",
        children: "状态管理V1和V2混用场景"
      }), "。"]
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
182251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477589-e4ab320e9594260578a2cfcd1d8da667.png");

},
179771(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957588-a4267653c1841aaae72a7aef1a6b5ca2.png");

},
149387(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437597-701df161eddde0365c8667efc40f538d.gif");

},
300809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
672307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797940-9930acc09ab979e4f44e3046fd3347d9.png");

},
173687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
940699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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