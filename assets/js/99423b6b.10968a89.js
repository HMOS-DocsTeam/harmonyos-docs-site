"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["163181"], {
213116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_mvvm_v_2_arkts_mvvm_v_2_md_994_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-mvvm-v-2-arkts-mvvm-v-2-md-994.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_mvvm_v_2_arkts_mvvm_v_2_md_994_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/arkts-mvvm-v2","title":"MVVM模式（V2）","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/arkts-mvvm-v2.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"MVVM模式（V2）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mvvm-v2","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MVVM模式（V1）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/"},"next":{"title":"@State装饰器：组件内状态","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/arkts-mvvm-v2.md


const frontMatter = {
	title: 'MVVM模式（V2）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mvvm-v2',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'MVVM模式（V2）';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "通过状态管理V2版本实现ViewModel",
  "id": "通过状态管理v2版本实现viewmodel",
  "level": 2
}, {
  "value": "基础示例",
  "id": "基础示例",
  "level": 3
}, {
  "value": "添加@Local，实现对组件内部状态观测",
  "id": "添加local实现对组件内部状态观测",
  "level": 3
}, {
  "value": "添加@Param，实现组件接收外部输入",
  "id": "添加param实现组件接收外部输入",
  "level": 3
}, {
  "value": "添加@Event，实现组件对外输出",
  "id": "添加event实现组件对外输出",
  "level": 3
}, {
  "value": "添加Repeat，实现子组件复用",
  "id": "添加repeat实现子组件复用",
  "level": 3
}, {
  "value": "添加@ObservedV2，@Trace，实现类属性观测变化",
  "id": "添加observedv2trace实现类属性观测变化",
  "level": 3
}, {
  "value": "添加@Monitor，@Computed，实现监听状态变量和计算属性",
  "id": "添加monitorcomputed实现监听状态变量和计算属性",
  "level": 3
}, {
  "value": "添加AppStorageV2，实现应用全局UI状态存储",
  "id": "添加appstoragev2实现应用全局ui状态存储",
  "level": 3
}, {
  "value": "添加PersistenceV2，实现持久化UI状态存储",
  "id": "添加persistencev2实现持久化ui状态存储",
  "level": 3
}, {
  "value": "添加@Builder，实现自定义构建函数",
  "id": "添加builder实现自定义构建函数",
  "level": 3
}, {
  "value": "效果图展示",
  "id": "效果图展示",
  "level": 3
}, {
  "value": "重构代码以符合MVVM架构",
  "id": "重构代码以符合mvvm架构",
  "level": 2
}, {
  "value": "重构后的代码结构",
  "id": "重构后的代码结构",
  "level": 3
}, {
  "value": "Model层",
  "id": "model层",
  "level": 3
}, {
  "value": "ViewModel层",
  "id": "viewmodel层",
  "level": 3
}, {
  "value": "View层",
  "id": "view层",
  "level": 3
}, {
  "value": "总结",
  "id": "总结",
  "level": 2
}, {
  "value": "代码示例",
  "id": "代码示例",
  "level": 2
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
        id: "mvvm模式v2",
        children: "MVVM模式（V2）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，UI的更新需要随着数据状态的变化进行实时同步，而这种同步往往决定了应用程序的性能和用户体验。为了解决数据与UI同步的复杂性，ArkUI采用了Model-View-ViewModel（MVVM）架构模式。MVVM将应用分为Model、View和ViewModel三个核心部分，实现数据、视图与逻辑的分离。通过这种模式，UI可以随着状态的变化自动更新，无需手动处理，从而高效管理数据和视图的绑定与更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model：存储和管理应用数据及业务逻辑，不直接与用户界面交互。通常从后端接口获取数据，是应用程序的数据基础，确保数据的一致性和完整性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View：负责用户界面展示数据并与用户交互，不包含任何业务逻辑。它通过绑定ViewModel层提供的数据来动态更新UI。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ViewModel：负责管理UI状态和交互逻辑。作为连接Model和View的桥梁，ViewModel监控Model数据的变化，通知View更新UI，同时处理用户交互事件并转换为数据操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过状态管理v2版本实现viewmodel",
      children: "通过状态管理V2版本实现ViewModel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在MVVM模式中，ViewModel负责管理数据状态，并在数据变化时自动更新视图。ArkUI的状态管理V2版本提供了丰富的装饰器和工具，帮助开发者在自定义组件之间共享数据，确保数据变化自动同步到UI。常用的状态管理装饰器包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
        children: "@Event"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2、@Trace"
      }), "等等。此外，V2还提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
        children: "AppStorageV2"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
        children: "PersistenceV2"
      }), "作为全局状态存储工具，用于应用间的状态共享和持久化存储。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节将通过一个简单的todolist示例，逐步引入和使用状态管理V2的装饰器及工具，从基础的静态任务列表开始，逐步扩展功能。每个步骤都基于上一步扩展，帮助开发者循序渐进地理解并掌握各个装饰器的使用方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础示例",
      children: "基础示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先，从静态待办事项列表开始。在示例1中，任务是静态的，没有状态变化和动态交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/BasicPage.ets\n@Entry\n@ComponentV2\nstruct TodoList {\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Text('task1')\n      Text('task2')\n      Text('task3')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加local实现对组件内部状态观测",
      children: "添加@Local，实现对组件内部状态观测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成静态待办列表展示后，为了让用户能够更改任务的完成状态，需要使待办事项能够响应交互并动态更新显示。为此，引入@Local装饰器管理组件内部的状态。被@Local装饰的变量发生变化时，触发绑定的UI组件刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例2中，新增@Local装饰的isFinish属性代表任务是否完成。两个图标finished.png和unfinished.png用于展示任务完成或未完成的状态。点击待办事项时，isFinish状态切换，更新图标和文本删除线的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/LocalPage.ets\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local isFinish: boolean = false;\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Row() {\n        // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n        Image(this.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n          .width(28)\n          .height(28)\n        Text('task1')\n          .decoration({ type: this.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      }\n      .onClick(() => this.isFinish = !this.isFinish)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加param实现组件接收外部输入",
      children: "添加@Param，实现组件接收外部输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现任务本地状态切换后，为增强待办事项列表的灵活性，需要能够动态设置每个任务的名称，而不是固定在代码中。引入@Param装饰器后，子组件被装饰的变量可以接收父组件传入的值，实现单向数据同步。@Param默认只读，使用@Param ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once",
        children: "@Once"
      }), "可在子组件中对传入的值进行本地更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例3中，每个待办事项抽象为TaskItem组件。@Param修饰的taskName属性从父组件TodoList传入任务名称，使TaskItem组件灵活且可复用，能够接收并渲染不同的任务名称。@Param @Once装饰的isFinish属性接收初始值后，可在子组件内更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/ParamPage.ets\n@ComponentV2\nstruct TaskItem {\n  @Param taskName: string = '';\n  @Param @Once isFinish: boolean = false;\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.taskName)\n        .decoration({ type: this.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n    }\n    .onClick(() => this.isFinish = !this.isFinish)\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      TaskItem({ taskName: 'Task 1', isFinish: false })\n      TaskItem({ taskName: 'Task 2', isFinish: false })\n      TaskItem({ taskName: 'Task 3', isFinish: false })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加event实现组件对外输出",
      children: "添加@Event，实现组件对外输出"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现任务名称动态设置后，任务列表内容固定。为了实现任务列表的动态扩展，需要增加任务项的添加和删除功能。为此，引入@Event装饰器，用于子组件向父组件输出数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例4中，每个TaskItem增加了删除按钮，同时任务列表底部增加了添加新任务的功能。点击子组件TaskItem的“删除”按钮时，deleteTask事件会被触发并传递给父组件TodoList，父组件响应并移除任务。通过使用@Param和@Event，子组件不仅能接收父组件的数据，还能将事件传递回父组件，实现数据双向同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例4"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/EventPage.ets\n@ComponentV2\nstruct TaskItem {\n  @Param taskName: string = '';\n  @Param @Once isFinish: boolean = false;\n  @Event deleteTask: () => void = () => {};\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.taskName)\n        .decoration({ type: this.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      Button('Delete')\n        .onClick(() => {\n          this.deleteTask();\n        })\n    }\n    .onClick(() => {\n      this.isFinish = !this.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local tasks: string[] = ['task1', 'task2', 'task3'];\n  @Local newTaskName: string = '';\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      ForEach(this.tasks, (task: string) => {\n        TaskItem({\n          taskName: task,\n          isFinish: false,\n          deleteTask: () => {\n            this.tasks.splice(this.tasks.indexOf(task), 1);\n          }\n        })\n      })\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        Button('+')\n          .onClick(() => {\n            this.tasks.push(this.newTaskName);\n            this.newTaskName = '';\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加repeat实现子组件复用",
      children: "添加Repeat，实现子组件复用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加任务增删功能后，任务列表项增加，需要高效渲染多个结构相同的子组件，提高界面性能。引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "组件，优化任务列表渲染。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat支持两种场景：懒加载场景和非懒加载场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "懒加载场景适用于大量数据的场景，在滚动类容器中按需加载组件，极大节省内存和提升渲染效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非懒加载场景适用于数据量较小的场景，一次性渲染所有组件，并在数据变化时仅更新需要变化的部分，避免整体重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例5中，由于任务量较少，使用Repeat非懒加载场景。新建任务数组tasks，并使用Repeat方法迭代数组中的每一项，动态生成并复用TaskItem组件。任务增删时，这种方式能高效复用已有组件，避免重复渲染，提高界面响应速度和性能。这种机制有效地提高了代码的复用性和渲染效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例5"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/RepeatPage.ets\n@ComponentV2\nstruct TaskItem {\n  @Param taskName: string = '';\n  @Param @Once isFinish: boolean = false;\n  @Event deleteTask: () => void = () => {};\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.taskName)\n        .decoration({ type: this.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      Button('Delete')\n        .onClick(() => {\n          this.deleteTask();\n        })\n    }\n    .onClick(() => {\n      this.isFinish = !this.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local tasks: string[] = ['task1', 'task2', 'task3'];\n  @Local newTaskName: string = '';\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Repeat<string>(this.tasks)\n        .each((obj: RepeatItem<string>) => {\n          TaskItem({\n            taskName: obj.item,\n            isFinish: false,\n            deleteTask: () => {\n              this.tasks.splice(this.tasks.indexOf(obj.item), 1);\n            }\n          })\n        })\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        Button('+')\n          .onClick(() => {\n            this.tasks.push(this.newTaskName);\n            this.newTaskName = '';\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加observedv2trace实现类属性观测变化",
      children: "添加@ObservedV2，@Trace，实现类属性观测变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现多个功能后，任务列表管理变得复杂。为了有效处理任务数据的变化，特别是在多层嵌套结构中，需要确保属性变化能够被深度观测并自动更新UI。为此，引入了@ObservedV2和@Trace装饰器。与仅能观测对象及其第一层变化的@Local不同，@ObservedV2和@Trace适用于多层嵌套和继承等复杂场景。在@ObservedV2装饰的类中，@Trace装饰的属性变化时，会触发绑定的UI组件刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例6中，任务（Task）被抽象为一个类，并用@ObservedV2标记该类，用@Trace标记isFinish属性。TodoList组件嵌套了TaskItem，TaskItem又嵌套了Task。在最外层的TodoList中，添加了\"全部完成\"和\"全部未完成\"的按钮，每次点击这些按钮都会直接更新最内层Task类的isFinish属性。@ObservedV2和@Trace确保可以观察到对应isFinish UI组件的刷新，从而实现了对嵌套类属性的深度观测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例6"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/ObservedV2TracePage.ets\n@ObservedV2\nclass Task {\n  public taskName: string = '';\n  @Trace public isFinish: boolean = false;\n\n  constructor(taskName: string, isFinish: boolean) {\n    this.taskName = taskName;\n    this.isFinish = isFinish;\n  }\n}\n\n@ComponentV2\nstruct TaskItem {\n  @Param task: Task = new Task('', false);\n  @Event deleteTask: () => void = () => {};\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.task.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.task.taskName)\n        .decoration({ type: this.task.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      Button('Delete')\n        .onClick(() => {\n          this.deleteTask();\n        })\n    }\n    .onClick(() => {\n      this.task.isFinish = !this.task.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local tasks: Task[] = [\n    new Task('task1', false),\n    new Task('task2', false),\n    new Task('task3', false),\n  ];\n  @Local newTaskName: string = '';\n\n  finishAll(ifFinish: boolean) {\n    for (let task of this.tasks) {\n      task.isFinish = ifFinish;\n    }\n  }\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Repeat<Task>(this.tasks)\n        .each((obj: RepeatItem<Task>) => {\n          TaskItem({\n            task: obj.item,\n            deleteTask: () => {\n              this.tasks.splice(this.tasks.indexOf(obj.item), 1);\n            }\n          })\n        })\n      Row() {\n        Button('All Completed')\n          .onClick(() => {\n            this.finishAll(true);\n          })\n        Button('All Not Completed')\n          .onClick(() => {\n            this.finishAll(false);\n          })\n      }\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        Button('+')\n          .onClick(() => {\n            this.tasks.push(new Task(this.newTaskName, false));\n            this.newTaskName = '';\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加monitorcomputed实现监听状态变量和计算属性",
      children: "添加@Monitor，@Computed，实现监听状态变量和计算属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在当前任务列表功能基础上，为了提升体验，可以增加一些额外的功能，如任务状态变化的监听和未完成任务数量的动态计算。为此，引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
        children: "@Computed"
      }), "装饰器。@Monitor用于深度监听状态变量，在属性变化时触发自定义回调方法。@Computed用于装饰getter方法，检测被计算的属性变化。被计算的值变化时，仅计算一次，减少重复计算开销。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例7中，使用@Monitor装饰器深度监听TaskItem中task的isFinish属性。当任务完成状态变化时，触发onTaskFinished回调，记录任务完成状态的变化。同时，新增对todolist中未完成任务数量的记录。使用@Computed装饰器定义tasksUnfinished，每当任务状态变化时自动重新计算。通过这两个装饰器，实现了状态变量的深度监听和高效的计算属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例7"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/MonitorComputedPage.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Task {\n  public taskName: string = '';\n  @Trace public isFinish: boolean = false;\n\n  constructor(taskName: string, isFinish: boolean) {\n    this.taskName = taskName;\n    this.isFinish = isFinish;\n  }\n}\n\n@ComponentV2\nstruct TaskItem {\n  @Param task: Task = new Task('', false);\n  @Event deleteTask: () => void = () => {};\n\n  @Monitor('task.isFinish')\n  onTaskFinished(mon: IMonitor) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Task ' + this.task.taskName + ' completion status changed from ' + mon.value()?.before + ' to ' + mon.value()?.now);\n  }\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.task.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.task.taskName)\n        .decoration({ type: this.task.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      Button('Delete')\n        .onClick(() => {\n          this.deleteTask();\n        })\n    }\n    .onClick(() => {\n      this.task.isFinish = !this.task.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local tasks: Task[] = [\n    new Task('task1', false),\n    new Task('task2', false),\n    new Task('task3', false),\n  ];\n  @Local newTaskName: string = '';\n\n  finishAll(ifFinish: boolean) {\n    for (let task of this.tasks) {\n      task.isFinish = ifFinish;\n    }\n  }\n\n  @Computed\n  get tasksUnfinished(): number {\n    return this.tasks.filter(task => !task.isFinish).length;\n  }\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Text('Unfinished task' + `：${this.tasksUnfinished}`)\n      Repeat<Task>(this.tasks)\n        .each((obj: RepeatItem<Task>) => {\n          TaskItem({\n            task: obj.item,\n            deleteTask: () => {\n              this.tasks.splice(this.tasks.indexOf(obj.item), 1);\n            }\n          })\n        })\n      Row() {\n        Button('All Completed')\n          .onClick(() => {\n            this.finishAll(true);\n          })\n        Button('All Not Completed')\n          .onClick(() => {\n            this.finishAll(false);\n          })\n      }\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        Button('+')\n          .onClick(() => {\n            this.tasks.push(new Task(this.newTaskName, false));\n            this.newTaskName = '';\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加appstoragev2实现应用全局ui状态存储",
      children: "添加AppStorageV2，实现应用全局UI状态存储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着待办事项功能的增强，应用涉及多个页面或功能模块时，需要在这些页面之间共享全局状态。例如：在待办事项应用中，新增一个设置页面与主界面联动。为实现跨页面的状态共享，引入AppStorageV2，用于在多个UIAbility实例之间存储和共享应用的全局状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这个示例中，新增了一个Ability，SettingAbility，用于加载设置页面SettingPage。SettingPage包含了一个Setting类，其中的showCompletedTask属性用于控制是否显示已完成的任务。用户可以通过一个开关切换该选项。两个Ability通过AppStorageV2共享设置数据，键为 \"Setting\"，对应的数据为Setting类。第一次通过connect连接Setting时，如果不存在存储的数据，会创建一个showCompletedTask默认为true的Setting实例。后续用户在设置页面修改设置后，主页面会根据这一设置更新任务列表的显示。通过AppStorageV2，实现了跨Ability、跨页面的数据共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例8"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/AppStorageV2Page.ets\nimport { AppStorageV2 } from '@kit.ArkUI';\nimport { common, Want } from '@kit.AbilityKit';\nimport { Setting } from './SettingPage';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Task {\n  public taskName: string = '';\n  @Trace public isFinish: boolean = false;\n\n  constructor(taskName: string, isFinish: boolean) {\n    this.taskName = taskName;\n    this.isFinish = isFinish;\n  }\n}\n\n@ComponentV2\nstruct TaskItem {\n  @Param task: Task = new Task('', false);\n  @Event deleteTask: () => void = () => {};\n\n  @Monitor('task.isFinish')\n  onTaskFinished(mon: IMonitor) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Task ' + this.task.taskName + ' completion status changed from ' + mon.value()?.before + ' to ' + mon.value()?.now);\n  }\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.task.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.task.taskName)\n        .decoration({ type: this.task.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      Button('Delete')\n        .onClick(() => {\n          this.deleteTask();\n        })\n    }\n    .onClick(() => {\n      this.task.isFinish = !this.task.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local tasks: Task[] = [\n    new Task('task1', false),\n    new Task('task2', false),\n    new Task('task3', false),\n  ];\n  @Local newTaskName: string = '';\n  @Local setting: Setting = AppStorageV2.connect(Setting, 'Setting', () => new Setting())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  finishAll(ifFinish: boolean) {\n    for (let task of this.tasks) {\n      task.isFinish = ifFinish;\n    }\n  }\n\n  @Computed\n  get tasksUnfinished(): number {\n    return this.tasks.filter(task => !task.isFinish).length;\n  }\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Text('Unfinished task' + `：${this.tasksUnfinished}`)\n      Repeat<Task>(this.tasks.filter(task => this.setting.showCompletedTask || !task.isFinish))\n        .each((obj: RepeatItem<Task>) => {\n          TaskItem({\n            task: obj.item,\n            deleteTask: () => {\n              this.tasks.splice(this.tasks.indexOf(obj.item), 1);\n            }\n          })\n        })\n      Row() {\n        Button('All Completed')\n          .onClick(() => {\n            this.finishAll(true);\n          })\n        Button('All Not Completed')\n          .onClick(() => {\n            this.finishAll(false);\n          })\n        Button('Setting')\n          .onClick(() => {\n            let wantInfo: Want = {\n              deviceId: '', // deviceId为空表示本设备。\n              bundleName: 'com.samples.statemgmtv2mvvm', // 替换成AppScope/app.json5里的bundleName。\n              abilityName: 'SettingAbility',\n            };\n            this.context.startAbility(wantInfo);\n          })\n      }\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        Button('+')\n          .onClick(() => {\n            this.tasks.push(new Task(this.newTaskName, false));\n            this.newTaskName = '';\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/SettingPage.ets\nimport { AppStorageV2 } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@ObservedV2\nexport class Setting {\n  @Trace public showCompletedTask: boolean = true;\n}\n\n@Entry\n@ComponentV2\nstruct SettingPage {\n  @Local setting: Setting = AppStorageV2.connect(Setting, 'Setting', () => new Setting())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text('Setting')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Row() {\n        Text('Show completed tasks')\n        Toggle({ type: ToggleType.Switch, isOn: this.setting.showCompletedTask })\n          .onChange((isOn) => {\n            this.setting.showCompletedTask = isOn;\n          })\n      }\n      Button('Back to To do')\n        .onClick(() => {\n          this.context.terminateSelf();\n        })\n        .margin({ top: 10 })\n    }\n    .alignItems(HorizontalAlign.Start)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加persistencev2实现持久化ui状态存储",
      children: "添加PersistenceV2，实现持久化UI状态存储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保用户重新打开应用时能看到之前的任务状态，建议使用PersistenceV2进行数据持久化存储。PersistenceV2可将数据保存在设备磁盘上，与AppStorageV2的运行时内存相比，它能确保数据在应用关闭后再次启动时保持不变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例9中，创建了一个TaskList类，用于通过PersistenceV2持久化存储所有任务信息，键为\"TaskList\"，数据对应TaskList类。第一次通过connect连接TaskList时，如果没有数据，会创建一个默认tasks数组为空的新TaskList实例。在aboutToAppear生命周期函数中，连接到PersistenceV2的TaskList，若无存储任务数据，会从本地文件defaultTasks.json中加载任务并存储到PersistenceV2中。此后，每个任务的完成状态都会同步到PersistenceV2中。这样，即使应用关闭后再次打开，所有任务数据依旧保持不变，实现了持久化的应用状态存储功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例9"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/PersistenceV2Page.ets\nimport { AppStorageV2, PersistenceV2, Type } from '@kit.ArkUI';\nimport { common, Want } from '@kit.AbilityKit';\nimport { Setting } from './SettingPage';\nimport { util } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Task {\n  // 未实现构造函数，因为@Type当前不支持带参数的构造函数。\n  @Trace public taskName: string = 'Todo';\n  @Trace public isFinish: boolean = false;\n}\n\n@ObservedV2\nclass TaskList {\n  // 对于复杂对象需要@Type修饰，确保序列化成功。\n  @Type(Task)\n  @Trace public tasks: Task[] = [];\n\n  constructor(tasks: Task[]) {\n    this.tasks = tasks;\n  }\n\n  async loadTasks(context: common.UIAbilityContext) {\n    let getJson = await context.resourceManager.getRawFileContent('defaultTasks.json');\n    let textDecoderOptions: util.TextDecoderOptions = { ignoreBOM: true };\n    let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);\n    let result = textDecoder.decodeToString(getJson);\n    this.tasks = JSON.parse(result).map((task: Task) => {\n      let newTask = new Task();\n      newTask.taskName = task.taskName;\n      newTask.isFinish = task.isFinish;\n      return newTask;\n    });\n  }\n}\n\n@ComponentV2\nstruct TaskItem {\n  @Param task: Task = new Task();\n  @Event deleteTask: () => void = () => {};\n\n  @Monitor('task.isFinish')\n  onTaskFinished(mon: IMonitor) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Task ' + this.task.taskName + ' completion status changed from ' + mon.value()?.before + ' to ' + mon.value()?.now);\n  }\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.task.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n      Text(this.task.taskName)\n        .decoration({ type: this.task.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n      Button('Delete')\n        .onClick(() => {\n          this.deleteTask();\n        })\n    }\n    .onClick(() => {\n      this.task.isFinish = !this.task.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local taskList: TaskList = new TaskList([]);\n  @Local newTaskName: string = '';\n  @Local setting: Setting = AppStorageV2.connect(Setting, 'Setting', () => new Setting())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  async aboutToAppear() {\n    this.taskList = PersistenceV2.connect(TaskList, 'TaskList', () => new TaskList([]))!;\n    if (this.taskList.tasks.length === 0) {\n      await this.taskList.loadTasks(this.context);\n    }\n  }\n\n  finishAll(ifFinish: boolean) {\n    for (let task of this.taskList.tasks) {\n      task.isFinish = ifFinish;\n    }\n  }\n\n  @Computed\n  get tasksUnfinished(): number {\n    return this.taskList.tasks.filter(task => !task.isFinish).length;\n  }\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Text('Unfinished task' + `：${this.tasksUnfinished}`)\n      Repeat<Task>(this.taskList.tasks.filter(task => this.setting.showCompletedTask || !task.isFinish))\n        .each((obj: RepeatItem<Task>) => {\n          TaskItem({\n            task: obj.item,\n            deleteTask: () => {\n              this.taskList.tasks.splice(this.taskList.tasks.indexOf(obj.item), 1);\n            }\n          })\n        })\n      Row() {\n        Button('All Completed')\n          .onClick(() => {\n            this.finishAll(true);\n          })\n        Button('All Not Completed')\n          .onClick(() => {\n            this.finishAll(false);\n          })\n        Button('Setting')\n          .onClick(() => {\n            let wantInfo: Want = {\n              deviceId: '', // deviceId为空表示本设备。\n              bundleName: 'com.samples.statemgmtv2mvvm', // 替换成AppScope/app.json5里的bundleName。\n              abilityName: 'SettingAbility',\n            };\n            this.context.startAbility(wantInfo);\n          })\n      }\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        Button('+')\n          .onClick(() => {\n            let newTask = new Task();\n            newTask.taskName = this.newTaskName;\n            this.taskList.tasks.push(newTask);\n            this.newTaskName = '';\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件存放在src/main/resources/rawfile/defaultTasks.json路径下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[\n  {\"taskName\": \"学习ArkTS开发\", \"isFinish\": false},\n  {\"taskName\": \"健身\", \"isFinish\": false},\n  {\"taskName\": \"买水果\", \"isFinish\": true},\n  {\"taskName\": \"取快递\", \"isFinish\": true},\n  {\"taskName\": \"刷题\", \"isFinish\": true}\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加builder实现自定义构建函数",
      children: "添加@Builder，实现自定义构建函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着应用功能逐步扩展，代码中的某些UI元素开始重复，不仅增加了代码量，也让维护变得复杂。为解决此问题，建议使用@Builder装饰器，将重复的UI组件抽象为独立的构建方法，便于复用和代码模块化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例10中，通过使用@Builder定义的ActionButton方法，实现了按钮文字、样式和点击事件的统一管理，提高了代码的简洁性和可维护性。同时优化了界面组件的布局和样式，包括间距、颜色和尺寸等视觉元素，最终呈现出一个功能完善且界面简洁美观的待办事项应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例10"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/BuilderPage.ets\nimport { AppStorageV2, PersistenceV2, Type } from '@kit.ArkUI';\nimport { common, Want } from '@kit.AbilityKit';\nimport { Setting } from './SettingPage';\nimport { util } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Task {\n  // 未实现构造函数，因为@Type当前不支持带参数的构造函数。\n  @Trace public taskName: string = 'Todo';\n  @Trace public isFinish: boolean = false;\n}\n\n@Builder\nfunction actionButton(text: string | Resource, onClick: () => void) {\n  Button(text, { buttonStyle: ButtonStyleMode.NORMAL })\n    .onClick(onClick)\n    .margin({\n      left: 10,\n      right: 10,\n      top: 5,\n      bottom: 5\n    })\n}\n\n@ObservedV2\nclass TaskList {\n  // 对于复杂对象需要@Type修饰，确保序列化成功。\n  @Type(Task)\n  @Trace public tasks: Task[] = [];\n\n  constructor(tasks: Task[]) {\n    this.tasks = tasks;\n  }\n\n  async loadTasks(context: common.UIAbilityContext) {\n    let getJson = await context.resourceManager.getRawFileContent('defaultTasks.json');\n    let textDecoderOptions: util.TextDecoderOptions = { ignoreBOM: true };\n    let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);\n    let result = textDecoder.decodeToString(getJson);\n    this.tasks = JSON.parse(result).map((task: Task) => {\n      let newTask = new Task();\n      newTask.taskName = task.taskName;\n      newTask.isFinish = task.isFinish;\n      return newTask;\n    });\n  }\n}\n\n@ComponentV2\nstruct TaskItem {\n  @Param task: Task = new Task();\n  @Event deleteTask: () => void = () => {};\n\n  @Monitor('task.isFinish')\n  onTaskFinished(mon: IMonitor) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Task ' + this.task.taskName + ' completion status changed from ' + mon.value()?.before + ' to ' + mon.value()?.now);\n  }\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.task.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n        .margin({ left: 15, right: 10 })\n      Text(this.task.taskName)\n        .decoration({ type: this.task.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n        .fontSize(18)\n      actionButton('Delete', () => {\n        this.deleteTask();\n      })\n    }\n    .height('7%')\n    .width('90%')\n    .backgroundColor('#90f1f3f5')\n    .borderRadius(25)\n    .onClick(() => {\n      this.task.isFinish = !this.task.isFinish;\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local taskList: TaskList = PersistenceV2.connect(TaskList, 'TaskList', () => new TaskList([]))!;\n  @Local newTaskName: string = '';\n  @Local setting: Setting = AppStorageV2.connect(Setting, 'Setting', () => new Setting())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  async aboutToAppear() {\n    if (this.taskList.tasks.length === 0) {\n      await this.taskList.loadTasks(this.context);\n    }\n  }\n\n  finishAll(ifFinish: boolean) {\n    for (let task of this.taskList.tasks) {\n      task.isFinish = ifFinish;\n    }\n  }\n\n  @Computed\n  get tasksUnfinished(): number {\n    return this.taskList.tasks.filter(task => !task.isFinish).length;\n  }\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin(10)\n      Text('Unfinished task' + `：${this.tasksUnfinished}`)\n        .margin({ left: 10, bottom: 10 })\n      Repeat<Task>(this.taskList.tasks.filter(task => this.setting.showCompletedTask || !task.isFinish))\n        .each((obj: RepeatItem<Task>) => {\n          TaskItem({\n            task: obj.item,\n            deleteTask: () => {\n              this.taskList.tasks.splice(this.taskList.tasks.indexOf(obj.item), 1);\n            }\n          })\n            .margin(5)\n        })\n      Row() {\n        actionButton('All Completed', (): void => this.finishAll(true))\n        actionButton('All Not Completed', (): void => this.finishAll(false))\n        actionButton('Setting', (): void => {\n          let wantInfo: Want = {\n            deviceId: '', // deviceId为空表示本设备。\n            bundleName: 'com.samples.statemgmtv2mvvm', // 替换成AppScope/app.json5里的bundleName。\n            abilityName: 'SettingAbility',\n          };\n          this.context.startAbility(wantInfo);\n        })\n      }\n      .margin({ top: 10, bottom: 5 })\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => {\n            this.newTaskName = value;\n          })\n          .width('70%')\n        actionButton('+', (): void => {\n          let newTask = new Task();\n          newTask.taskName = this.newTaskName;\n          this.taskList.tasks.push(newTask);\n          this.newTaskName = '';\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n    .alignItems(HorizontalAlign.Start)\n    .margin({ left: 15 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果图展示",
      children: "效果图展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(877639)/* ["default"] */.A) + "",
        width: "354",
        height: "718"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "重构代码以符合mvvm架构",
      children: "重构代码以符合MVVM架构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前面的例子通过使用一系列的状态管理装饰器，实现了todolist中的数据同步与UI更新。然而，随着应用功能的复杂化，代码的结构变得难以维护，Model、View和ViewModel的职责没有完全分离，存在耦合。为了更好地组织代码和提升可维护性，使用MVVM模式重构代码，进一步将数据层（Model）、逻辑层（ViewModel）和展示层（View）分离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重构后的代码结构",
      children: "重构后的代码结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/src\n├── /main\n│   ├── /ets\n│   │   ├── /entryability\n│   │   ├── /model\n│   │   │   ├── TaskListModel.ets\n│   │   │   └── TaskModel.ets\n│   │   ├── /pages\n│   │   │   ├── SettingPage.ets\n│   │   │   └── TodoListPage.ets\n│   │   ├── /settingability\n│   │   ├── /view\n│   │   │   ├── BottomView.ets\n│   │   │   ├── ListView.ets\n│   │   │   └── TitleView.ets\n│   │   ├── /viewmodel\n│   │   │   ├── TaskListViewModel.ets\n│   │   │   └── TaskViewModel.ets\n│   └── /resources\n│       ├── ...\n├─── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model层",
      children: "Model层"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model层负责管理应用的数据及其业务逻辑，通常与后端或数据存储进行交互。在todolist应用中，Model层的主要职责是存储任务数据、加载任务列表，并提供数据操作的接口，而不直接涉及UI展示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TaskModel：单个任务的基本数据结构，包含任务名称和完成状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class TaskModel {\n  public taskName: string = 'Todo';\n  public isFinish: boolean = false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TaskListModel：任务的集合，提供从本地加载任务数据的功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { util } from '@kit.ArkTS';\nimport TaskModel from './TaskModel';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nexport default class TaskListModel {\n  public tasks: TaskModel[] = [];\n\n  constructor(tasks: TaskModel[]) {\n    this.tasks = tasks;\n  }\n\n  async loadTasks(context: common.UIAbilityContext) {\n    try {\n      let getJson = await context.resourceManager.getRawFileContent('defaultTasks.json');\n      let textDecoderOptions: util.TextDecoderOptions = { ignoreBOM: true };\n      let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);\n      let result = textDecoder.decodeToString(getJson);\n      this.tasks = JSON.parse(result).map((task: TaskModel) => {\n        let newTask = new TaskModel();\n        newTask.taskName = task.taskName;\n        newTask.isFinish = task.isFinish;\n        return newTask;\n      });\n    } catch (e) {\n      hilog.error(DOMAIN, 'testTag', 'Failed to getRawFileContent', JSON.stringify(e) ?? '');\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewmodel层",
      children: "ViewModel层"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViewModel层管理UI状态和业务逻辑，连接Model和View。通过监控Model数据变化，处理应用逻辑，将数据同步到View层，从而实现UI的自动更新。使用ViewModel实现数据与视图解耦，提高代码可读性和可维护性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TaskViewModel：封装单个任务的数据和状态变更逻辑，通过状态装饰器监控数据的变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/viewmodel/TaskViewModel.ets\nimport TaskModel from '../model/TaskModel';\n\n@ObservedV2\nexport default class TaskViewModel {\n  @Trace public taskName: string = 'Todo';\n  @Trace public isFinish: boolean = false;\n\n  updateTask(task: TaskModel) {\n    this.taskName = task.taskName;\n    this.isFinish = task.isFinish;\n  }\n\n  updateIsFinish(): void {\n    this.isFinish = !this.isFinish;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TaskListViewModel：封装了任务列表以及管理功能，包括加载任务、批量更新任务状态，以及添加和删除任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/viewmodel/TaskListViewModel.ets\nimport { common } from '@kit.AbilityKit';\nimport { Type } from '@kit.ArkUI';\nimport TaskListModel from '../model/TaskListModel';\nimport TaskViewModel from './TaskViewModel';\n\n@ObservedV2\nexport default class TaskListViewModel {\n  @Type(TaskViewModel)\n  @Trace public tasks: TaskViewModel[] = [];\n\n  async loadTasks(context: common.UIAbilityContext) {\n    let taskList = new TaskListModel([]);\n    await taskList.loadTasks(context);\n    for (let task of taskList.tasks) {\n      let taskViewModel = new TaskViewModel();\n      taskViewModel.updateTask(task);\n      this.tasks.push(taskViewModel);\n    }\n  }\n\n  finishAll(ifFinish: boolean): void {\n    for (let task of this.tasks) {\n      task.isFinish = ifFinish;\n    }\n  }\n\n  addTask(newTask: TaskViewModel): void {\n    this.tasks.push(newTask);\n  }\n\n  removeTask(removedTask: TaskViewModel): void {\n    this.tasks.splice(this.tasks.indexOf(removedTask), 1);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "view层",
      children: "View层"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View层负责应用程序的UI展示和与用户的交互。它只关注如何渲染用户界面和展示数据，不包含业务逻辑。所有的数据状态和逻辑都来自ViewModel层，View层通过接收ViewModel传递的状态数据进行渲染，确保视图和数据分离。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TitleView：负责展示应用的标题和未完成任务的统计信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/view/TitleView.ets\n@ComponentV2\nexport default struct TitleView {\n  @Param tasksUnfinished: number = 0;\n\n  build() {\n    Column() {\n      Text('To do')\n        .fontSize(40)\n        .margin(10)\n      Text(`All Not Completed：${this.tasksUnfinished}`)\n        .margin({ left: 10, bottom: 10 })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ListView：负责展示任务列表，并根据Setting中的设置筛选是否显示已完成的任务。它依赖于TaskListViewModel来获取任务数据，并通过TaskItem组件进行渲染，包括任务的名称、完成状态以及删除按钮。通过TaskViewModel和TaskListViewModel实现用户的交互，如切换任务完成状态和删除任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/view/ListView.ets\nimport TaskViewModel from '../viewmodel/TaskViewModel';\nimport TaskListViewModel from '../viewmodel/TaskListViewModel';\nimport { Setting } from '../pages/SettingPage';\nimport { ActionButton } from './BottomView';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ComponentV2\nstruct TaskItem {\n  @Param task: TaskViewModel = new TaskViewModel();\n  @Event deleteTask: () => void = () => {};\n\n  @Monitor('task.isFinish')\n  onTaskFinished(mon: IMonitor) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Task ' + this.task.taskName + ' completion status changed from ' + mon.value()?.before + ' to ' + mon.value()?.now);\n  }\n\n  build() {\n    Row() {\n      // 请开发者自行在src/main/resources/base/media路径下添加finished.png和unfinished.png两张图片，否则运行时会因资源缺失而报错。\n      Image(this.task.isFinish ? $r('app.media.finished') : $r('app.media.unfinished'))\n        .width(28)\n        .height(28)\n        .margin({ left: 15, right: 10 })\n      Text(this.task.taskName)\n        .decoration({ type: this.task.isFinish ? TextDecorationType.LineThrough : TextDecorationType.None })\n        .fontSize(18)\n      ActionButton('Delete', () => this.deleteTask());\n    }\n    .height('7%')\n    .width('90%')\n    .backgroundColor('#90f1f3f5')\n    .borderRadius(25)\n    .onClick(() => this.task.updateIsFinish())\n  }\n}\n\n@ComponentV2\nexport default struct ListView {\n  @Param taskList: TaskListViewModel = new TaskListViewModel();\n  @Param setting: Setting = new Setting();\n\n  build() {\n    Repeat<TaskViewModel>(this.taskList.tasks.filter(task => this.setting.showCompletedTask || !task.isFinish))\n      .each((obj: RepeatItem<TaskViewModel>) => {\n        TaskItem({\n          task: obj.item,\n          deleteTask: () => this.taskList.removeTask(obj.item)\n        }).margin(5)\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BottomView：负责提供与任务操作相关的按钮和输入框，如\"全部完成\"、\"全部未完成\"，\"设置\"三个按钮，以及添加新任务的输入框。点击\"全部完成\"和\"全部未完成\"时，通过TaskListViewModel更改所有任务的状态。点击\"设置\"按钮时，会导航到SettingAbility的设置页面。添加新任务时，通过TaskListViewModel新增任务到任务列表中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/view/BottomView.ets\nimport { common, Want } from '@kit.AbilityKit';\nimport TaskViewModel from '../viewmodel/TaskViewModel';\nimport TaskListViewModel from '../viewmodel/TaskListViewModel';\n\n@Builder\nexport function ActionButton(text: string | Resource, onClick: () => void) {\n  Button(text, { buttonStyle: ButtonStyleMode.NORMAL })\n    .onClick(onClick)\n    .margin({\n      left: 10,\n      right: 10,\n      top: 5,\n      bottom: 5\n    })\n}\n\n@ComponentV2\nexport default struct BottomView {\n  @Param taskList: TaskListViewModel = new TaskListViewModel();\n  @Local newTaskName: string = '';\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Row() {\n        ActionButton('All Completed', (): void => this.taskList.finishAll(true))\n        ActionButton('All Not Completed', (): void => this.taskList.finishAll(false))\n      }\n      .margin({ top: 10 })\n\n      Row() {\n        ActionButton('Setting', (): void => {\n          let wantInfo: Want = {\n            deviceId: '', // deviceId为空表示本设备。\n            bundleName: 'com.samples.statemgmtv2mvvm', // 替换成AppScope/app.json5里的bundleName。\n            abilityName: 'SettingAbility',\n          };\n          this.context.startAbility(wantInfo);\n        })\n      }\n      .margin({ bottom: 5 })\n\n      Row() {\n        TextInput({ placeholder: 'Add new tasks', text: this.newTaskName })\n          .onChange((value) => this.newTaskName = value)\n          .width('70%')\n        ActionButton('+', (): void => {\n          let newTask = new TaskViewModel();\n          newTask.taskName = this.newTaskName;\n          this.taskList.addTask(newTask);\n          this.newTaskName = '';\n        })\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TodoListPage：todolist的主页面，包含以上的三个View组件（TitleView、ListView、BottomView），用于统一展示待办事项的各个部分，管理任务列表和用户设置。TodoListPage负责从ViewModel中获取数据，并将数据传递给各个子View组件进行渲染，通过PersistenceV2持久化任务数据，确保数据在应用重启后仍能保持一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/pages/TodoListPage.ets\nimport TaskListViewModel from '../viewmodel/TaskListViewModel';\nimport { common } from '@kit.AbilityKit';\nimport { AppStorageV2, PersistenceV2 } from '@kit.ArkUI';\nimport { Setting } from '../pages/SettingPage';\nimport TitleView from '../view/TitleView';\nimport ListView from '../view/ListView';\nimport BottomView from '../view/BottomView';\n\n@Entry\n@ComponentV2\nstruct TodoList {\n  @Local taskList: TaskListViewModel = PersistenceV2.connect(TaskListViewModel, 'TaskList', () => new TaskListViewModel())!;\n  @Local setting: Setting = AppStorageV2.connect(Setting, 'Setting', () => new Setting())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  async aboutToAppear() {\n    if (this.taskList.tasks.length === 0) {\n      await this.taskList.loadTasks(this.context);\n    }\n  }\n\n  @Computed\n  get tasksUnfinished(): number {\n    return this.taskList.tasks.filter(task => !task.isFinish).length;\n  }\n\n  build() {\n    Column() {\n      TitleView({ tasksUnfinished: this.tasksUnfinished })\n      ListView({ taskList: this.taskList, setting: this.setting });\n      BottomView({ taskList: this.taskList });\n    }\n    .height('100%')\n    .width('100%')\n    .alignItems(HorizontalAlign.Start)\n    .margin({ left: 15 })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SettingPage：设置页面，负责管理是否显示已完成任务的设置。通过AppStorageV2应用全局存储用户的设置，用户通过Toggle开关切换showCompletedTask状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/pages/SettingPage.ets\nimport { AppStorageV2 } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@ObservedV2\nexport class Setting {\n  @Trace public showCompletedTask: boolean = true;\n}\n\n@Entry\n@ComponentV2\nstruct SettingPage {\n  @Local setting: Setting = AppStorageV2.connect(Setting, 'Setting', () => new Setting())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build(){\n    Column(){\n      Text('Setting')\n        .fontSize(40)\n        .margin({ bottom: 10 })\n      Row() {\n        Text('Show completed tasks')\n        Toggle({ type: ToggleType.Switch, isOn:this.setting.showCompletedTask })\n          .onChange((isOn) => {\n            this.setting.showCompletedTask = isOn;\n          })\n      }\n      Button('Back to To do')\n        .onClick(()=>this.context.terminateSelf())\n        .margin({ top: 10 })\n    }\n    .alignItems(HorizontalAlign.Start)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南通过待办事项应用示例，引入状态管理V2装饰器，并通过代码重构实现MVVM架构。最终将数据、业务逻辑和视图展示分层处理，使得代码结构更加清晰且易于维护。开发者通过正确应用Model、View和ViewModel分层结构，能够更好地理解和应用MVVM模式，进而在实际项目中提升开发效率、保证代码质量，并优化数据与UI的同步机制，简化整体开发流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/ArkUISample/StateMgmtV2MVVM/entry",
        children: "完整源码"
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
877639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477595-9c4988097522a0a292a24b219a4c671f.gif");

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