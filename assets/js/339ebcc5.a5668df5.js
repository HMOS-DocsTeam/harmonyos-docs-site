"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["406300"], {
31510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_inspector_profiler_ui_inspector_profiler_md_339_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-inspector-profiler-ui-inspector-profiler-md-339.json
var site_docs_arkui_ui_debug_optimize_ui_inspector_profiler_ui_inspector_profiler_md_339_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-inspector-profiler/ui-inspector-profiler","title":"UI调优","description":"本章节主要介绍UI的dump和调优能力，用于提高开发效率和优化开发者体验。","source":"@site/docs/arkui/ui-debug-optimize/ui-inspector-profiler/ui-inspector-profiler.md","sourceDirName":"arkui/ui-debug-optimize/ui-inspector-profiler","slug":"/arkui/ui-debug-optimize/ui-inspector-profiler/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-inspector-profiler/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"UI调优","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-inspector-profiler","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI预览","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-ide-previewer/"},"next":{"title":"UI高性能开发","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-performance-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-inspector-profiler/ui-inspector-profiler.md


const frontMatter = {
	title: 'UI调优',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-inspector-profiler',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI调优';

const assets = {

};



const toc = [{
  "value": "状态管理hidumper、调试与调优",
  "id": "状态管理hidumper调试与调优",
  "level": 2
}, {
  "value": "状态管理hidumper能力",
  "id": "状态管理hidumper能力",
  "level": 3
}, {
  "value": "状态管理Profiler调优能力",
  "id": "状态管理profiler调优能力",
  "level": 3
}, {
  "value": "状态管理Inspector调试能力",
  "id": "状态管理inspector调试能力",
  "level": 3
}, {
  "value": "Trace调试能力",
  "id": "trace调试能力",
  "level": 2
}, {
  "value": "Inspector调试能力",
  "id": "inspector调试能力",
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
        id: "ui调优",
        children: "UI调优"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节主要介绍UI的dump和调优能力，用于提高开发效率和优化开发者体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理hidumper调试与调优",
      children: "状态管理hidumper、调试与调优"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为提升开发者定位状态管理问题的效率，UI提供针对状态变量的hidumper、调试与调优功能，将状态变量的黑盒信息暴露给开发者，帮助开发者深入了解状态变量和UI组件的变化过程，提升开发高性能应用的效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理hidumper能力",
      children: "状态管理hidumper能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
        children: "hidumper"
      }), "，支持通过-jsdump获取状态变量关联的组件、自定义组件树等信息，方便开发者了解状态变量影响的UI范围，写出高性能应用代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面介绍dump状态变量每个参数的含义："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jsdump：请求状态管理中的dump信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "viewHierarchy：打印自定义组件树信息，默认只打印根自定义组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r：递归从根节点打印，自定义组件和其拥有组件的elementId。默认值打印根节点信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "viewId：打印指定viewId的自定义组件的信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stateVariable：打印状态变量及关联的组件和同步对象的信息。当前命令不支持r递归dump。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "registeredElementIds：打印当前自定义组件拥有的elementId。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体例子如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的例子为嵌套两层子组件的典型示例，使用了装饰器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "和 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "。开发者可组合使用上述命令，展示前端组件树、状态变量和其影响的组件等信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Page {\n  @State message: string = 'hello world';\n\n  build() {\n    Column() {\n      Text('Parent:' + this.message).fontSize(20).onClick(() => {\n        this.message += '1';\n      })\n      Child({ message: this.message })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Link message: string;\n\n  build() {\n    Column() {\n      Text('Child:' + this.message).fontSize(20)\n      GrandChild({ message: this.message })\n    }\n  }\n}\n\n@Component\nstruct GrandChild {\n  @Link message: string;\n\n  build() {\n    Column() {\n      Text('GrandChild: ' + this.message).fontSize(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤1：获取当前激活窗口的id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell hidumper -s WindowManagerService -a '-a'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2：执行打印状态变量dump信息的命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假定激活的窗口id是90，可通过下面的命令dump出自定义组件树和根节点的状态变量的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令1：递归打印所有自定义组件和根节点的状态变量信息："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell hidumper -s WindowManagerService -a '-w 90 -jsdump -dumpAll -r'\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行上述命令后，dump信息代表的含义如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Page[4]：自定义组件根节点。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "View Hierarchy：前端自定义组件树结构信息。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["State variables：根节点状态变量。从下面的信息可以看到Page下有状态变量@State 'message'[0]的具体信息：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "[0]代表状态变量id。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Owned by @Component 'Page'[4]：当前状态变量属于组件'Page'[4],[4]为自定义组件id。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Sync peers：当前状态变量的同步对象，即@State message改变会通知@Link 'message'[-1] <@Component 'Child'[7]>刷新。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["dependencies：\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "variable assignment affects elmtIds：状态变量改变会触发的组件的刷新。例如，@State message的改变会触发Text[6]的刷新。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Dependent elements：当前状态变量和其同步对象的关联组件。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Registered Element IDs：自定义组件和build()方法下声明的组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dirty Registered Element IDs：自定义组件下未更新的脏节点列表。状态变量变化后，会标记其关联节点为脏节点，并请求在下一帧更新。在下一帧中更新脏节点并清空脏节点列表。手动执行dump时，Dirty Registered Element IDs通常为空。因为以目前大多数设备的帧间隔，开发者难以在两帧之间dump出脏节点列表。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--------------------ViewPUInfo--------------------\n[-dumpAll, viewId=4, isRecursive=true]\n\n@Component\nPage[4]\n\nView Hierarchy:\n\n|--Page[4]ViewPU {isViewActive: true, isDeleting_: false}\n  |--Child[7]ViewPU {isViewActive: true, isDeleting_: false}\n    |--GrandChild[10]ViewPU {isViewActive: true, isDeleting_: false}\n\nState variables:\n|--Page[4]\n  @State 'message'[0]\n  |--Owned by @Component 'Page'[4]\n  |--Sync peers: {\n    @Link 'message'[-1] <@Component 'Child'[7]>\n  }\n  dependencies: variable assignment affects elmtIds: Text[6]\n  |--Dependent elements: Text[6]; @Component 'Child'[7], Text[9]; @Component 'GrandChild'[10], Text[12]\n\nRegistered Element IDs:\n\n|--Page[4]: {\n    Column[5]\n    Text[6]\n    Child[7]\n  }[3]\n  |--Child[7]: {\n      Column[8]\n      Text[9]\n      GrandChild[10]\n    }[3]\n    |--GrandChild[10]: {\n        Column[11]\n        Text[12]\n      }[2]\nTotal: 8\n\nDirty Registered Element IDs:\n\n|--Page[4]: {\n  }[0]\n  |--Child[7]: {\n    }[0]\n    |--GrandChild[10]: {\n      }[0]\nTotal: 0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令2：打印指定自定义组件的状态变量信息。例如，dump组件id为7的状态变量，可执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell hidumper -s WindowManagerService -a '-w 90 -jsdump -dumpAll -viewId=7'\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输出信息如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--------------------ViewPUInfo--------------------\n[-dumpAll, viewId=7, isRecursive=false]\n\n@Component\nChild[7]\n\nView Hierarchy:\n\n|--Child[7]ViewPU {isViewActive: true, isDeleting_: false}\n  |--GrandChild[10]ViewPU {isViewActive: true, isDeleting_: false}\n\nState variables:\n|--Child[7]\n  @Link 'message'[-1]\n  |--Owned by @Component 'Child'[7]\n  |--Sync peers: {\n    @Link 'message'[-2] <@Component 'GrandChild'[10]>\n  }\n  dependencies: variable assignment affects elmtIds: Text[9]\n  |--Dependent elements: Text[9]; @Component 'GrandChild'[10], Text[12]\n\nRegistered Element IDs:\n\n|--Child[7]: {\n    Column[8]\n    Text[9]\n    GrandChild[10]\n  }[3]\n\nDirty Registered Element IDs:\n\n|--Child[7]: {\n  }[0]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理profiler调优能力",
      children: "状态管理Profiler调优能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio的Profiler工具可抓取状态变量的变化打点。在Profiler工具中选择ArkUI，则抓取ArkUI State泳道。该泳道主要展示录制期间有哪些状态变量发生变化，和其会触发哪些关联组件刷新，以便开发者根据状态变量关联组件的数量分析当前场景内的更新负载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理在Profiler工具中，会展示如下信息内容："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量修改的时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量的属性名"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Owned by Component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量所属自定义组件名"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Owned by Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量所属类名"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Property Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量装饰器名称"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Current Values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量当前值"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制ArkUI State泳道图步骤如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤1：点击ArkUI模板创建session，并启动录制。录制过程中点击第一个Text组件，修改状态变量@State message为hello world1，通知其同步对象@Link message的变更，及其关联组件的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2： 录制结束等待数据处理完成，ArkUI State泳道会记录状态变量变化的事件打点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 录制ArkUI State泳道流程示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641480)/* ["default"] */.A) + "",
        width: "1888",
        height: "787"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤3：选中状态变量变化的打点，将显示当前状态变量更新触发了哪些组件的刷新，以及对应组件的创建、测量和布局的耗时。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " ArkUI State泳道图示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499195)/* ["default"] */.A) + "",
        width: "1892",
        height: "742"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(910303)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于隐私安全政策，已上架应用市场的应用不支持录制ArkUI State泳道。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理inspector调试能力",
      children: "状态管理Inspector调试能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio的ArkUI Inspector可以显示当前页面自定义组件内的状态变量的详细信息，具体包括以下内容。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件内状态变量装饰器，如@State、@Link等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件内状态变量的属性名，如@State message: string = 'hello world';中message。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前状态变量值。对于超长或者嵌套多层的复杂类型会进行截断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态变量观察模式，包括：  Compatible Mode：状态管理V1状态变量，且其装饰变量的类型没有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
              children: "@Track"
            }), "装饰的属性。  Track Mode：状态管理V1状态变量，且其装饰的类型有@Track装饰的属性。  V2：状态管理V2状态变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "elmtIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量关联的组件。声明式UI语法规则中，状态会驱动UI刷新。  目前状态管理可以做到组件级别的更新，即状态变量变化后仅会触发使用该变量的组件的刷新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "syncPeers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变量同步对象，仅限状态管理V1的状态变量。例如@State的同步对象为@Link。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开ArkUI Inspector展示@Component Page自定义组件状态变量相关信息如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " ArkUI Inspector显示状态变量相关信息"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812459)/* ["default"] */.A) + "",
        width: "1874",
        height: "657"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(442736)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于隐私安全政策，已上架应用市场的应用不支持使用ArkUI Inspector。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上主要介绍了状态管理的hidumper、调试与调优能力，这些工具方便开发者调测，有助于提升开发高性能应用的效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trace调试能力",
      children: "Trace调试能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI内部针对关键的UI处理流程添加了Trace信息，帮助开发者通过Trace工具观测应用的UI耗时，辅助定位问题。详细Trace说明及案例参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-optimization-overview#section085643405116",
        children: "常用Trace使用指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inspector调试能力",
      children: "Inspector调试能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI Inspector是DevEco Studio内置的页面布局检查工具，帮助开发者查看应用的UI层级结构、组件属性和布局效果。详细Inspector使用方法及案例参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-debug-app/ide-arkui-inspector",
        children: "页面布局检查器ArkUI Inspector使用指导"
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
910303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
499195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438207-124fd7c9d88fb5bac4951d61faf6a6da.png");

},
641480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798512-139628a914d72c7421b4d9007fcc40a2.gif");

},
812459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958162-2155b7846de8d63f6d8ba6e02abe8d35.png");

},
442736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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