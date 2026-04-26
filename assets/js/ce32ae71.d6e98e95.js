"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["615283"], {
590333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_mvvm_arkts_mvvm_md_ce3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-mvvm-arkts-mvvm-md-ce3.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_mvvm_arkts_mvvm_md_ce3_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/arkts-mvvm","title":"MVVM模式（V1）","description":"当开发者掌握了状态管理的基本概念后，通常会尝试开发自己的应用，在应用开发初期，如果未能精心规划项目结构，随着项目扩展和复杂化，状态变量的增多将导致组件间关系变得错综复杂。此时，开发新功能可能引起连锁反应，维护成本也会增加。为此，本文旨在介绍MVVM模式以及ArkUI的UI开发模式与MVVM的关系，指导开发者如何设计项目结构，以便在产品迭代和升级时能更轻松地开发和维护。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/arkts-mvvm.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-mvvm","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"MVVM模式（V1）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mvvm","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态管理V1和V2更新机制差异","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/"},"next":{"title":"MVVM模式（V2）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/arkts-mvvm.md


const frontMatter = {
	title: 'MVVM模式（V1）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mvvm',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'MVVM模式（V1）';

const assets = {

};



const toc = [{
  "value": "MVVM模式介绍",
  "id": "mvvm模式介绍",
  "level": 2
}, {
  "value": "概念",
  "id": "概念",
  "level": 3
}, {
  "value": "ArkUI开发模式图",
  "id": "arkui开发模式图",
  "level": 3
}, {
  "value": "分层说明",
  "id": "分层说明",
  "level": 3
}, {
  "value": "架构核心原则",
  "id": "架构核心原则",
  "level": 3
}, {
  "value": "备忘录开发实战",
  "id": "备忘录开发实战",
  "level": 2
}, {
  "value": "@State状态变量",
  "id": "state状态变量",
  "level": 3
}, {
  "value": "@Prop、@Link的作用",
  "id": "proplink的作用",
  "level": 3
}, {
  "value": "循环渲染组件",
  "id": "循环渲染组件",
  "level": 3
}, {
  "value": "@Builder方法",
  "id": "builder方法",
  "level": 3
}, {
  "value": "总结",
  "id": "总结",
  "level": 3
}, {
  "value": "通过MVVM开发备忘录实战",
  "id": "通过mvvm开发备忘录实战",
  "level": 2
}, {
  "value": "MVVM文件结构说明",
  "id": "mvvm文件结构说明",
  "level": 3
}, {
  "value": "分层设计技巧",
  "id": "分层设计技巧",
  "level": 3
}, {
  "value": "代码示例",
  "id": "代码示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mvvm模式v1",
        children: "MVVM模式（V1）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者掌握了状态管理的基本概念后，通常会尝试开发自己的应用，在应用开发初期，如果未能精心规划项目结构，随着项目扩展和复杂化，状态变量的增多将导致组件间关系变得错综复杂。此时，开发新功能可能引起连锁反应，维护成本也会增加。为此，本文旨在介绍MVVM模式以及ArkUI的UI开发模式与MVVM的关系，指导开发者如何设计项目结构，以便在产品迭代和升级时能更轻松地开发和维护。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档涵盖了大多数状态管理V1装饰器，所以在阅读本文档前，建议开发者对状态管理V1有一定的了解。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "和状态管理V1装饰器相关文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mvvm模式介绍",
      children: "MVVM模式介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "概念",
      children: "概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，UI更新需要实时同步数据状态变化，这直接影响应用程序的性能和用户体验。为了解决数据与UI同步的复杂性，ArkUI采用了 Model-View-ViewModel（MVVM）架构模式。MVVM 将应用分为Model、View和ViewModel三个核心部分，实现数据、视图与逻辑的分离。通过这种模式，UI可以自动更新状态变化，从而更高效地管理数据和视图的绑定与更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View：用户界面层。负责用户界面展示并与用户交互，不包含任何业务逻辑。它通过绑定ViewModel层提供的数据实现动态更新。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Model：数据访问层。以数据为中心，不直接与用户界面交互。负责数据结构定义，数据管理（获取、存储、更新等），以及业务逻辑处理。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ViewModel：表示逻辑层。作为连接Model和View的桥梁，通常一个View对应一个ViewModel。View和ViewModel有两种通信方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方法调用：View通过事件监听用户行为，在回调里面触发ViewModel层的方法。例如当View监听到用户Button点击行为，调用ViewModel对应的方法，处理用户操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "双向绑定：View绑定ViewModel的数据，实现双向同步。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI的UI开发模式就属于MVVM模式，通过对MVVM概念的基本介绍，开发者大致能猜到状态管理能在MVVM中起什么样的作用，状态管理旨在数据驱动更新，让开发者只用关注页面设计，而不去关注整个UI的刷新逻辑，数据的维护也无需开发者进行感知，由状态变量自动更新完成，而这就是属于ViewModel层所需要支持的内容，因此开发者使用MVVM模式开发自己的应用是最省心省力的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui开发模式图",
      children: "ArkUI开发模式图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI的UI开发模式即是MVVM模式，而状态变量在MVVM模式中扮演着ViewModel的角色，向上刷新UI，向下更新数据，整体框架如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(964218)/* ["default"] */.A) + "",
        width: "955",
        height: "519"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分层说明",
      children: "分层说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "View层"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View层通常可以分为下列组件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面组件：所有应用基本都是按照页面进行分类的，比如登录页，列表页，编辑页，帮助页，版权页等。每个页面对应需要的数据可能是完全不一样的，也可能多个页面需要的数据是同一套。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务组件：本身具备本APP部分业务能力的功能组件，典型的就是这个业务组件可能关联了本项目的ViewModel中的数据，不可以被共享给其他项目使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通用组件：像系统组件一样，这类组件不会关联本APP中ViewModel的数据，这些组件可实现跨越多个项目进行共享，来完成比较通用的功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Model层"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model层是应用的原始数据提供者，代表应用的核心业务逻辑和数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ViewModel层"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为View层的组件提供对应数据，按照页面组织，当用户浏览页面时，某些页面可能不会被显示，因此，页面数据最好设计成懒加载（按需加载）的模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViewModel层数据和Model层数据的区别："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model层数据是按照整个工程、项目来组织数据，构成一套完整的APP业务数据体系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViewModel层数据，是提供某个页面上使用的数据，它可能是整个APP的业务数据的一部分。另外ViewModel层还可以附加对应Page的辅助页面显示数据，这部分数据可能与本APP的业务完全无关，仅仅是为页面展示提供便利的辅助数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "架构核心原则",
      children: "架构核心原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不可跨层访问"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View层不可以直接调用Model层的数据，只能通过ViewModel提供的方法进行调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model层不能直接操作UI，只能通知ViewModel层数据有更新，由ViewModel层更新对应的数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "下层不可访问上层数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下层数据通过通知模式更新上层数据。在业务逻辑中，下层不可直接获取上层数据。例如，ViewModel层的逻辑处理不应该依赖View层界面上的某个值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "非父子组件间不可直接访问"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是针对View层设计的核心原则，一个组件应该具备以下逻辑："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止直接访问父组件（必须使用事件或是订阅能力）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止直接访问兄弟组件。这是因为组件应该仅能访问自己的子节点（通过传参）和父节点（通过事件或通知），以此完成组件之间的解耦。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于一个组件，这样设计的原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件自己使用了哪些子组件是明确的，因此可以访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件被放置于哪个父节点下是未知的，因此组件想访问父节点，就只能通过通知或者事件能力完成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件不可能知道自己的兄弟节点是谁，因此组件不可以操作兄弟节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "备忘录开发实战",
      children: "备忘录开发实战"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节通过备忘录应用的开发，使开发者了解如何使用ArkUI框架设计自己的应用。本节直接进行功能开发，未设计代码架构，即根据需求即时开发，不考虑后续维护，同时，本节还将介绍功能开发所需的装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state状态变量",
      children: "@State状态变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "装饰器是最常用的装饰器之一，用于定义状态变量。通常，这些状态变量作为父组件的数据源，开发者点击时，触发状态变量的更新，刷新UI。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct StateIndex {\n  @State isFinished: boolean = false;\n\n  build() {\n    Column() {\n      Row() {\n        // 请将$r('app.string.all_tasks')替换为实际资源文件，在本示例中该资源文件的value值为\"全部待办\"\n        Text($r('app.string.all_tasks'))\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n      .margin({ top: 10, bottom: 10 })\n\n      // 待办事项\n      Row({ space: 15 }) {\n        if (this.isFinished) {\n          // 请将$r('app.media.finished')替换为实际资源文件\n          Image($r('app.media.finished'))\n            .width(28)\n            .height(28)\n        } else {\n          // 请将$r('app.media.unfinished')替换为实际资源文件\n          Image($r('app.media.unfinished'))\n            .width(28)\n            .height(28)\n        }\n        // 请将$r('app.string.all_learn_advanced_math')替换为实际资源文件，在本示例中该资源文件的value值为\"学习高数\"\n        Text($r('app.string.learn_advanced_math'))\n          .fontSize(24)\n          .decoration({ type: this.isFinished ? TextDecorationType.LineThrough : TextDecorationType.None })\n      }\n      .height('40%')\n      .width('100%')\n      .border({ width: 5 })\n      .padding({ left: 15 })\n      .onClick(() => {\n        this.isFinished = !this.isFinished;\n      })\n    }\n    .height('100%')\n    .width('100%')\n    .margin({ top: 5, bottom: 5 })\n    .backgroundColor('#90f1f3f5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(120285)/* ["default"] */.A) + "",
        width: "300",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "proplink的作用",
      children: "@Prop、@Link的作用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例中，所有代码都写在了@Entry组件中。随着需要渲染的组件越来越多，@Entry组件必然需要进行拆分，为此，拆分出的子组件就需要使用@Prop和@Link装饰器："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop"
        }), "是父子间单向传递，子组件会深拷贝父组件数据，可从父组件更新，也可自己更新数据，但不会同步回父组件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "是父子间双向传递，父组件改变，会通知所有的@Link，同时@Link的更新也会通知父组件的数据源进行刷新。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct PropLinkTodoComponent {\n  build() {\n    Row() {\n      // 请将$r('app.string.all_tasks')替换为实际资源文件，在本示例中该资源文件的value值为\"全部待办\"\n      Text($r('app.string.all_tasks'))\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n\n@Component\nstruct PropLinkAllChooseComponent {\n  @Link isFinished: boolean;\n\n  build() {\n    Row() {\n      // 请将$r('app.string.check_all')替换为实际资源文件，在本示例中该资源文件的value值为\"全选\"\n      Button($r('app.string.check_all'), { type: ButtonType.Normal })\n        .onClick(() => {\n          this.isFinished = !this.isFinished;\n        })\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .backgroundColor('#f7f6cc74')\n    }\n    .padding({ left: 15 })\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n\n@Component\nstruct ThingComponent1 {\n  @Prop isFinished: boolean;\n\n  build() {\n    // 待办事项1\n    Row({ space: 15 }) {\n      if (this.isFinished) {\n        // 请将$r('app.media.finished')替换为实际资源文件\n        Image($r('app.media.finished'))\n          .width(28)\n          .height(28)\n      } else {\n        // 请将$r('app.media.unfinished')替换为实际资源文件\n        Image($r('app.media.unfinished'))\n          .width(28)\n          .height(28)\n      }\n      // 请将$r('app.string.learn_chinese')替换为实际资源文件，在本示例中该资源文件的value值为\"学习语文\"\n      Text($r('app.string.learn_chinese'))\n        .fontSize(24)\n        .decoration({ type: this.isFinished ? TextDecorationType.LineThrough : TextDecorationType.None })\n    }\n    .height('40%')\n    .width('100%')\n    .border({ width: 5 })\n    .padding({ left: 15 })\n    .onClick(() => {\n      this.isFinished = !this.isFinished;\n    })\n  }\n}\n\n@Component\nstruct ThingComponent2 {\n  @Prop isFinished: boolean;\n\n  build() {\n    // 待办事项1\n    Row({ space: 15 }) {\n      if (this.isFinished) {\n        // 请将$r('app.media.finished')替换为实际资源文件\n        Image($r('app.media.finished'))\n          .width(28)\n          .height(28)\n      } else {\n        // 请将$r('app.media.unfinished')替换为实际资源文件\n        Image($r('app.media.unfinished'))\n          .width(28)\n          .height(28)\n      }\n      // 请将$r('app.string.learn_advanced_math')替换为实际资源文件，在本示例中该资源文件的value值为\"学习高数\"\n      Text($r('app.string.learn_advanced_math'))\n        .fontSize(24)\n        .decoration({ type: this.isFinished ? TextDecorationType.LineThrough : TextDecorationType.None })\n    }\n    .height('40%')\n    .width('100%')\n    .border({ width: 5 })\n    .padding({ left: 15 })\n    .onClick(() => {\n      this.isFinished = !this.isFinished;\n    })\n  }\n}\n\n@Entry\n@Component\nstruct PropLinkIndex {\n  @State isFinished: boolean = false;\n\n  build() {\n    Column() {\n      // 全部待办\n      PropLinkTodoComponent()\n\n      // 全选\n      PropLinkAllChooseComponent({ isFinished: this.isFinished })\n\n      // 待办事项1\n      ThingComponent1({ isFinished: this.isFinished })\n\n      // 待办事项2\n      ThingComponent2({ isFinished: this.isFinished })\n    }\n    .height('100%')\n    .width('100%')\n    .margin({ top: 5, bottom: 5 })\n    .backgroundColor('#90f1f3f5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(150953)/* ["default"] */.A) + "",
        width: "300",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "循环渲染组件",
      children: "循环渲染组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["上个示例虽然拆分出了子组件，但发现组件1和组件2的代码非常相似，当渲染的组件除了数据外，其他设置都相同时，此时就需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
          children: "ForEach循环渲染"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ForEach使用之后，冗余代码变得更少，并且代码结构更加清晰。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ForEachTodoComponent {\n  build() {\n    Row() {\n      // 请将$r('app.string.all_tasks')替换为实际资源文件，在本示例中该资源文件的value值为\"全部待办\"\n      Text($r('app.string.all_tasks'))\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n\n@Component\nstruct ForEachAllChooseComponent {\n  @Link isFinished: boolean;\n\n  build() {\n    Row() {\n      // 请将$r('app.string.check_all')替换为实际资源文件，在本示例中该资源文件的value值为\"全选\"\n      Button($r('app.string.check_all'), { type: ButtonType.Normal })\n        .onClick(() => {\n          this.isFinished = !this.isFinished;\n        })\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .backgroundColor('#f7f6cc74')\n    }\n    .padding({ left: 15 })\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n\n@Component\nstruct ForEachThingComponent {\n  @Prop isFinished: boolean;\n  @Prop thing: string;\n\n  build() {\n    // 待办事项1\n    Row({ space: 15 }) {\n      if (this.isFinished) {\n        // 请将$r('app.media.finished')替换为实际资源文件\n        Image($r('app.media.finished'))\n          .width(28)\n          .height(28)\n      } else {\n        // 请将$r('app.media.unfinished')替换为实际资源文件\n        Image($r('app.media.unfinished'))\n          .width(28)\n          .height(28)\n          // ...\n      }\n      Text(`${this.thing}`)\n        .fontSize(24)\n        .decoration({ type: this.isFinished ? TextDecorationType.LineThrough : TextDecorationType.None })\n    }\n    .height('8%')\n    .width('90%')\n    .padding({ left: 15 })\n    .opacity(this.isFinished ? 0.3 : 1)\n    .border({ width: 1 })\n    .borderColor(Color.White)\n    .borderRadius(25)\n    .backgroundColor(Color.White)\n    .onClick(() => {\n      this.isFinished = !this.isFinished;\n    })\n  }\n}\n\n@Entry\n@Component\nstruct ForEachIndex {\n  @State isFinished: boolean = false;\n  @State planList: ResourceStr[] = [\n    // 请将$r('app.string.get_up')替换为实际资源文件，在本示例中该资源文件的value值为\"7.30 起床\"\n    $r('app.string.get_up'),\n    // 请将$r('app.string.breakfast')替换为实际资源文件，在本示例中该资源文件的value值为\"8.30 早餐\"\n    $r('app.string.breakfast'),\n    // 请将$r('app.string.lunch')替换为实际资源文件，在本示例中该资源文件的value值为\"11.30 中餐\"\n    $r('app.string.lunch'),\n    // 请将$r('app.string.dinner')替换为实际资源文件，在本示例中该资源文件的value值为\"17.30 晚餐\"\n    $r('app.string.dinner'),\n    // 请将$r('app.string.midnight_snack')替换为实际资源文件，在本示例中该资源文件的value值为\"21.30 夜宵\"\n    $r('app.string.midnight_snack'),\n    // 请将$r('app.string.bathe')替换为实际资源文件，在本示例中该资源文件的value值为\"22.30 洗澡\"\n    $r('app.string.bathe'),\n    // 请将$r('app.string.sleep')替换为实际资源文件，在本示例中该资源文件的value值为\"1.30 睡觉\"\n    $r('app.string.sleep')\n  ];\n  context1 = this.getUIContext().getHostContext();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < this.planList.length; i++) {\n      this.planList[i] = resource.resourceToString(this.planList[i] as Resource);\n    };\n  }\n\n  build() {\n    Column() {\n      // 全部待办\n      ForEachTodoComponent()\n\n      // 全选\n      ForEachAllChooseComponent({ isFinished: this.isFinished })\n\n      List() {\n        ForEach(this.planList, (item: string) => {\n          // 待办事项1\n          ForEachThingComponent({ isFinished: this.isFinished, thing: item })\n            .margin(5)\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n    .margin({ top: 5, bottom: 5 })\n    .backgroundColor('#90f1f3f5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(194389)/* ["default"] */.A) + "",
        width: "260",
        height: "548"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "builder方法",
      children: "@Builder方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Builder方法用于组件内定义方法，可以使得相同代码可以在组件内进行复用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本示例不仅使用了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
          children: "@Builder"
        }), "方法进行去重，还对数据进行了移除，可以看到此时代码更加清晰易读，相对于最开始的代码，@Entry组件基本只用于处理页面构建逻辑，而不处理大量与页面设计无关的内容。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass TodoListData {\n  public planList: ResourceStr[] = [\n    // 请将$r('app.string.get_up')替换为实际资源文件，在本示例中该资源文件的value值为\"7.30 起床\"\n    $r('app.string.get_up'),\n    // 请将$r('app.string.breakfast')替换为实际资源文件，在本示例中该资源文件的value值为\"8.30 早餐\"\n    $r('app.string.breakfast'),\n    // 请将$r('app.string.lunch')替换为实际资源文件，在本示例中该资源文件的value值为\"11.30 中餐\"\n    $r('app.string.lunch'),\n    // 请将$r('app.string.dinner')替换为实际资源文件，在本示例中该资源文件的value值为\"17.30 晚餐\"\n    $r('app.string.dinner'),\n    // 请将$r('app.string.midnight_snack')替换为实际资源文件，在本示例中该资源文件的value值为\"21.30 夜宵\"\n    $r('app.string.midnight_snack'),\n    // 请将$r('app.string.bathe')替换为实际资源文件，在本示例中该资源文件的value值为\"22.30 洗澡\"\n    $r('app.string.bathe'),\n    // 请将$r('app.string.sleep')替换为实际资源文件，在本示例中该资源文件的value值为\"1.30 睡觉\"\n    $r('app.string.sleep')\n  ];\n}\n\n@Component\nstruct StateTodoComponent {\n  build() {\n    Row() {\n      // 请将$r('app.string.all_tasks')替换为实际资源文件，在本示例中该资源文件的value值为\"全部待办\"\n      Text($r('app.string.all_tasks'))\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n\n@Component\nstruct BuilderAllChooseComponent {\n  @Link isFinished: boolean;\n\n  build() {\n    Row() {\n      // 请将$r('app.string.check_all')替换为实际资源文件，在本示例中该资源文件的value值为\"全选\"\n      Button($r('app.string.check_all'), { type: ButtonType.Capsule })\n        .onClick(() => {\n          this.isFinished = !this.isFinished;\n        })\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .backgroundColor('#f7f6cc74')\n    }\n    .padding({ left: 15 })\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n\n@Component\nstruct BuilderThingComponent {\n  @Prop isFinished: boolean;\n  @Prop thing: string;\n\n  @Builder\n  displayIcon(icon: Resource) {\n    Image(icon)\n      .width(28)\n      .height(28)\n      .onClick(() => {\n        this.isFinished = !this.isFinished;\n      })\n      // ...\n  }\n\n  build() {\n    // 待办事项1\n    Row({ space: 15 }) {\n      if (this.isFinished) {\n        // 请将$r('app.media.finished')替换为实际资源文件\n        this.displayIcon($r('app.media.finished'));\n      } else {\n        // 请将$r('app.media.unfinished')替换为实际资源文件\n        this.displayIcon($r('app.media.unfinished'));\n      }\n      Text(`${this.thing}`)\n        .fontSize(24)\n        .decoration({ type: this.isFinished ? TextDecorationType.LineThrough : TextDecorationType.None })\n        .onClick(() => {\n          this.thing += 'lala';\n        })\n    }\n    .height('8%')\n    .width('90%')\n    .padding({ left: 15 })\n    .opacity(this.isFinished ? 0.3 : 1)\n    .border({ width: 1 })\n    .borderColor(Color.White)\n    .borderRadius(25)\n    .backgroundColor(Color.White)\n  }\n}\n\n@Entry\n@Component\nstruct BuilderIndex {\n  @State isFinished: boolean = false;\n  @State data: TodoListData = new TodoListData(); // View绑定ViewModel的数据\n\n  aboutToAppear(): void {\n    for (let i = 0; i < this.data.planList.length; i++) {\n      this.data.planList[i] =\n        resource.resourceToString(this.data.planList[i] as Resource);\n    }\n  }\n\n  build() {\n    Column() {\n      // 全部待办\n      StateTodoComponent()\n\n      // 全选\n      BuilderAllChooseComponent({ isFinished: this.isFinished })\n\n      List() {\n        ForEach(this.data.planList, (item: string) => {\n          // 待办事项1\n          BuilderThingComponent({ isFinished: this.isFinished, thing: item })\n            .margin(5)\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n    .margin({ top: 5, bottom: 5 })\n    .backgroundColor('#90f1f3f5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83400)/* ["default"] */.A) + "",
        width: "256",
        height: "548"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "总结",
      children: "总结"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过逐步优化代码结构，可以看到@Entry组件作为页面的入口，其build函数应该仅考虑将需要的组件组合起来，类似于搭积木。被page调用的子组件则如同积木，等着被需要的page进行调用。状态变量类似于粘合剂，当触发UI刷新事件时，状态变量自动刷新绑定的组件，实现page的按需刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "虽然现有的架构并未使用到MVVM的设计理念，但MVVM的核心理念已初见端倪。ArkUI的UI开发天然适合MVVM模式。在ArkUI中，page和组件构成View层，page负责组织组件，组件则作为构成元素。当组件需要更新时，通过状态变量驱动组件刷新，从而更新page。ViewModel的数据则来源于Model层。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例中的代码功能较为简单，但随着功能的增加，主页面的代码量也会逐渐增多。当备忘录需要添加更多功能，且其他页面也需要使用到主页面的组件时，可以考虑采用MVVM模式来组织项目结构。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过mvvm开发备忘录实战",
      children: "通过MVVM开发备忘录实战"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上一章节展示了非MVVM模式下的代码组织方式。随着主页面代码的增加，应该采取合理的分层策略，使项目结构清晰，组件之间不互相引用，避免后期维护时牵一发而动全身，增加功能更新的困难。本章将通过对MVVM的核心文件组织模式，向开发者展示如何使用MVVM来重构上一章节的代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mvvm文件结构说明",
      children: "MVVM文件结构说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├── src\n│   ├── ets\n│   │   ├── pages 存放页面组件。\n│   │   ├── views 存放业务组件。\n│   │   ├── shares 存放通用组件。\n│   │   └── viewmodel 数据服务。\n│   │   │   ├── LoginViewModel.ets 登录页ViewModel。\n│   │   │   └── xxxViewModel.ets 其他页ViewModel。\n│\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分层设计技巧",
      children: "分层设计技巧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Model层"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "model层存放本应用核心数据结构，这层本身和UI开发关系不大，让用户按照自己的业务逻辑进行封装。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ViewModel层"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViewModel层不只是存放数据，它同时需要提供数据的服务及处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ViewModel层是为视图服务的数据层。其设计具有两个特点：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "按照页面组织数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "每个页面数据进行懒加载。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "View层"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View层根据需要来组织，但View层需要区分一下三种组件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面组件：提供整体页面布局，实现多页面之间的跳转，前后台事件处理等页面内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务组件：被页面引用，构建出页面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "共享组件：与项目无关的多项目共享组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享组件和业务组件的区别："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务组件包含了ViewModel数据，没有ViewModel，这个组件不能运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享组件：不包含ViewModel层的数据，需要的数据从外部传入。共享组件包含一个自定义组件，只要外部参数（无业务参数）满足，就可以工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按MVVM模式组织结构，重构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├── src\n│   ├── ets\n│   │   ├── model\n│   │   │   ├── ThingModel.ets\n│   │   │   └── TodoListModel.ets\n│   │   ├── pages\n│   │   │   ├── Index.ets\n│   │   ├── views\n│   │   │   ├── AllChooseComponent.ets\n│   │   │   ├── ThingComponent.ets\n│   │   │   ├── TodoComponent.ets\n│   │   │   └── TodoListComponent.ets\n│   │   ├── viewmodel\n│   │   │   ├── ThingViewModel.ets\n│   │   │   └── TodoListViewModel.ets\n│   └── resources\n│   │   ├── rawfile\n│   │   │   ├── default_tasks.json\n│\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件代码如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ThingModel.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default class ThingModel {\n  public thingName: string = 'Todo';\n  public isFinish: boolean = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TodoListModel.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { util } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport ThingModel from './ThingModel';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'TodoListModel';\n\nexport default class TodoListModel {\n  public things: Array<ThingModel> = [];\n\n  constructor(things: Array<ThingModel>) {\n    this.things = things;\n  }\n\n  async loadTasks(context: common.UIAbilityContext) {\n    try {\n      let getJson = await context.resourceManager.getRawFileContent('default_tasks.json');\n      let textDecoderOptions: util.TextDecoderOptions = { ignoreBOM: true };\n      let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);\n      let result = textDecoder.decodeToString(getJson, { stream: false });\n      this.things = JSON.parse(result);\n    } catch (error) {\n      hilog.error(DOMAIN, TAG, 'Failed to load tasks. Cause: %{public}s', JSON.stringify(error.message));\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n// import ViewModel\nimport TodoListViewModel from '../viewmodel/TodoListViewModel';\n\n// import View\nimport { TodoComponent } from '../views/TodoComponent';\nimport { AllChooseComponent } from '../views/AllChooseComponent';\nimport { TodoListComponent } from '../views/TodoListComponent';\n\n@Entry\n@Component\nstruct TodoList {\n  @State todoListViewModel: TodoListViewModel = new TodoListViewModel(); // View绑定ViewModel的数据\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  async aboutToAppear() {\n    await this.todoListViewModel.loadTasks(this.context);\n  }\n\n  build() {\n    Column() {\n      Row({ space: 40 }) {\n        // 全部待办\n        TodoComponent()\n        // 全选\n        AllChooseComponent({ todoListViewModel: this.todoListViewModel })\n      }\n\n      Column() {\n        TodoListComponent({ thingViewModelArray: this.todoListViewModel.things })\n      }\n    }\n    .height('100%')\n    .width('100%')\n    .margin({ top: 5, bottom: 5 })\n    .backgroundColor('#90f1f3f5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AllChooseComponent.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import TodoListViewModel from '../viewmodel/TodoListViewModel';\nimport { common } from '@kit.AbilityKit';\n\n@Component\nexport struct AllChooseComponent {\n  context1 = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 请在resources\\base\\element\\string.json文件中配置name为'check_all'，value为非空字符串的资源\n  @State titleName: ResourceStr = this.context1.resourceManager.getStringSync($r('app.string.check_all').id);\n  @Link todoListViewModel: TodoListViewModel;\n\n  build() {\n    Row() {\n      Button(`${this.titleName}`, { type: ButtonType.Capsule })\n        .onClick(() => {\n          this.todoListViewModel.chooseAll(); // View层点击事件发生时，调用ViewModel层方法chooseAll处理逻辑\n          this.titleName = this.todoListViewModel.isChosen ?\n            // 请在resources\\base\\element\\string.json文件中配置name为'check_all'，value为非空字符串的资源\n            this.context1.resourceManager.getStringSync($r('app.string.check_all').id)\n            // 请在resources\\base\\element\\string.json文件中配置name为'deselect_all'，value为非空字符串的资源\n            : this.context1.resourceManager.getStringSync($r('app.string.deselect_all').id);\n        })\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .backgroundColor('#f7f6cc74')\n    }\n    .padding({ left: this.todoListViewModel.isChosen ? 15 : 0 })\n    .width('100%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ThingComponent.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import ThingViewModel from '../viewmodel/ThingViewModel';\n\n@Component\nexport struct ThingComponent {\n  @ObjectLink thing: ThingViewModel;\n\n  @Builder\n  displayIcon(icon: Resource) {\n    Image(icon)\n      .width(28)\n      .height(28)\n      .onClick(() => {\n        this.thing.updateIsFinish(); // View层点击事件发生时，调用ViewModel层方法updateIsFinish处理逻辑\n      })\n      .id(this.thing.thingName)\n  }\n\n  build() {\n    // 待办事项\n    Row({ space: 15 }) {\n      if (this.thing.isFinish) {\n        // 请将$r('app.media.finished')替换为实际资源文件\n        this.displayIcon($r('app.media.finished'));\n      } else {\n        // 请将$r('app.media.unfinished')替换为实际资源文件\n        this.displayIcon($r('app.media.unfinished'));\n      }\n\n      Text(`${this.thing.thingName}`)\n        .fontSize(24)\n        .decoration({ type: this.thing.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n        .onClick(() => {\n          this.thing.addSuffixes(); // View层点击事件发生时，调用ViewModel层方法addSuffixes处理逻辑\n        })\n    }\n    .height('8%')\n    .width('90%')\n    .padding({ left: 15 })\n    .opacity(this.thing.isFinish ? 0.3 : 1)\n    .border({ width: 1 })\n    .borderColor(Color.White)\n    .borderRadius(25)\n    .backgroundColor(Color.White)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TodoComponent.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nexport struct TodoComponent {\n  build() {\n    Row() {\n      // 请将$r('app.string.all_tasks')替换为实际资源文件，在本示例中该资源文件的value值为\"全部待办\"\n      Text($r('app.string.all_tasks'))\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n    .padding({ left: 15 })\n    .width('50%')\n    .margin({ top: 10, bottom: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TodoListComponent.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import ThingViewModel from '../viewmodel/ThingViewModel';\nimport { ThingViewModelArray } from '../viewmodel/TodoListViewModel'\nimport { ThingComponent } from './ThingComponent';\n\n@Component\nexport struct TodoListComponent {\n  @ObjectLink thingViewModelArray: ThingViewModelArray;\n\n  build() {\n    Column() {\n      List() {\n        ForEach(this.thingViewModelArray, (item: ThingViewModel) => {\n          // 待办事项\n          ListItem() {\n            ThingComponent({ thing: item })\n              .margin(5)\n          }\n        }, (item: ThingViewModel) => {\n          return item.thingName;\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ThingViewModel.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import ThingModel from '../model/ThingModel';\n\n@Observed\nexport default class ThingViewModel {\n  @Track public thingName: string = 'Todo';\n  @Track public isFinish: boolean = false;\n  public context: Context = AppStorage.get('context')!;\n\n  updateTask(thing: ThingModel) {\n    this.thingName = thing.thingName;\n    this.isFinish = thing.isFinish;\n  }\n\n  updateIsFinish(): void {\n    this.isFinish = !this.isFinish;\n  }\n\n  addSuffixes(): void {\n    this.thingName += 'lala';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TodoListViewModel.ets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import ThingViewModel from './ThingViewModel';\nimport { common } from '@kit.AbilityKit';\nimport TodoListModel from '../model/TodoListModel';\n\n@Observed\nexport class ThingViewModelArray extends Array<ThingViewModel> {\n}\n\n@Observed\nexport default class TodoListViewModel {\n  @Track public isChosen: boolean = true;\n  @Track public things: ThingViewModelArray = new ThingViewModelArray();\n\n  async loadTasks(context: common.UIAbilityContext) {\n    let todoList = new TodoListModel([]);\n    await todoList.loadTasks(context);\n    for (let thing of todoList.things) {\n      let todoListViewModel = new ThingViewModel();\n      todoListViewModel.updateTask(thing);\n      this.things.push(todoListViewModel);\n    }\n  }\n\n  chooseAll(): void {\n    for (let thing of this.things) {\n      thing.isFinish = this.isChosen;\n    }\n    this.isChosen = !this.isChosen;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "default_tasks.json"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[\n  {\"thingName\": \"7.30起床\", \"isFinish\": false},\n  {\"thingName\": \"8.30早餐\", \"isFinish\": false},\n  {\"thingName\": \"11.30中餐\", \"isFinish\": false},\n  {\"thingName\": \"17.30晚餐\", \"isFinish\": false},\n  {\"thingName\": \"21.30夜宵\", \"isFinish\": false},\n  {\"thingName\": \"22.30洗澡\", \"isFinish\": false},\n  {\"thingName\": \"1.30睡觉\", \"isFinish\": false}\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MVVM模式拆分后的代码结构更加清晰，模块职责更明确。新页面需要使用事件组件，比如TodoListComponent组件，只需导入组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47149)/* ["default"] */.A) + "",
        width: "396",
        height: "477"
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
47149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957594-df1a324121408a49842a4739d9b7ce73.gif");

},
83400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437639-4631b354cbf11036242f7b8e560cb53f.gif");

},
964218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437637-a96b39a672b389aebfb81f4c77c962e9.png");

},
150953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477593-f0b75f96e511df35e9d16d8b6c7b14eb.gif");

},
194389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797944-8d597bb4c5be87f3a623bac7b778076f.gif");

},
120285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957592-83ef7b19ffabc16f3d1ae06c564ec41f.gif");

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