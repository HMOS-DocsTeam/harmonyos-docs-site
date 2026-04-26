"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["639819"], {
983149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_user_defined_node_faq_arkts_user_defined_node_faq_md_ea0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-development-faq-arkts-user-defined-node-faq-arkts-user-defined-node-faq-md-ea0.json
var site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_user_defined_node_faq_arkts_user_defined_node_faq_md_ea0_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/arkts-user-defined-node-faq","title":"自定义节点常见问题","description":"本文档介绍自定义节点的常见问题并提供参考。","source":"@site/docs/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/arkts-user-defined-node-faq.md","sourceDirName":"arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq","slug":"/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义节点常见问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-node-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI高性能开发","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-performance-overview/"},"next":{"title":"按钮与选择组件常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/arkts-user-defined-node-faq.md


const frontMatter = {
	title: '自定义节点常见问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-node-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义节点常见问题';

const assets = {

};



const toc = [{
  "value": "自定义组件的aboutToDisappear回调异常",
  "id": "自定义组件的abouttodisappear回调异常",
  "level": 2
}, {
  "value": "BuilderNode前后端循环引用导致的内存泄漏问题",
  "id": "buildernode前后端循环引用导致的内存泄漏问题",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "自定义节点常见问题",
        children: "自定义节点常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档介绍自定义节点的常见问题并提供参考。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件的abouttodisappear回调异常",
      children: "自定义组件的aboutToDisappear回调异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，自定义节点的子节点在页面退出后未立即回调自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
        children: "aboutToDisappear"
      }), "方法。自定义组件的aboutToDisappear通常在其销毁的时候触发，页面销毁后未立即回调则说明该自定义组件在页面销毁后未立即销毁。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义组件存在父节点且父节点未销毁。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件由", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
          children: "BuilderNode"
        }), "创建，该前端对象既未被回收，也未解除对后端自定义组件的引用。BuilderNode创建时，默认持有后端节点的强引用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-napi-h/capi-native-node-napi-h#oh_arkui_getnodehandlefromnapivalue",
          children: "OH_ArkUI_GetNodeHandleFromNapiValue"
        }), "方法，可以获取BuilderNode或ComponentContent对象中的root节点，此操作会使后端节点的引用计数加一。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent",
          children: "NodeContent"
        }), "中，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent#addframenode12",
          children: "addFrameNode"
        }), "方法增加了对被添加的FrameNode对象节点的引用关系。然而，该NodeContent对象未被回收，且未通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent#removeframenode12",
          children: "removeFrameNode"
        }), "接口删除所增加的引用关系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将需要释放的自定义组件从父节点上移除，排除父节点对自定义组件生命周期的影响。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件由", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
          children: "BuilderNode"
        }), "创建时，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#dispose12",
          children: "dispose"
        }), "接口，立即释放前端BuilderNode对象对于后端节点的强引用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于使用OH_ArkUI_GetNodeHandleFromNapiValue获取BuilderNode或ComponentContent对象的root节点，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#disposenode",
          children: "disposeNode"
        }), "减少OH_ArkUI_GetNodeHandleFromNapiValue增加的引用计数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["未调用dispose时，当前端的BuilderNode对象在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-runtime/gc-introduction",
          children: "GC"
        }), "中被回收会释放对后端根节点的引用。调试阶段可使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
          children: "hidumper"
        }), "指令触发GC或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper#%E6%9F%A5%E8%AF%A2%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%A0%86%E5%86%85%E5%AD%98",
          children: "查询堆内存"
        }), "来分析引用关系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中，根节点表示BuilderNode的根节点，aboutToDisappear表示BuilderNode中构建的自定义组件（即BuilderNodePage）中的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跳转至pageOneTmp页面后返回，通过指令触发GC，继续操作设备后可以看到aboutToDisappear回调。根节点相关的引用关系和解决方案："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "NodeContent对根节点的引用关系：需要触发NodeContent对象的回收，或主动调用removeFrameNode接口。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["全局对象对BuilderNode的引用关系：通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
              children: "ArrayList"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist#clear",
              children: "clear"
            }), "方法清除对BuilderNode的引用。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BuilderNode对象对根节点的引用关系：确保BuilderNode对象无其他引用关系，触发该对象的回收可以解除其对根节点的引用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跳转至pageTwoTmp页面后返回，可以直接看到aboutToDisappear回调。根节点相关的引用关系以及解决方案："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "NodeContent对根节点的引用关系：通过NodeContent的removeFrameNode接口解除引用关系。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BuilderNode对象对根节点的引用关系：通过BuilderNode的dispose接口直接解除引用关系。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跳转至pageThreeTmp页面后返回，可以直接看到aboutToDisappear回调。根节点相关的引用关系以及解决方案："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根节点的父节点对其的引用关系：由于父节点为FrameNode对象对应的节点，可以直接通过FrameNode的removeChild方法解除引用关系。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BuilderNode对象对根节点的引用关系：通过BuilderNode的dispose接口直接解除引用关系。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeContent } from '@kit.ArkUI';\nimport { ArrayList } from '@kit.ArkTS';\n\nconst CUSTOM_COMPONENT_CONT: string = \"CustomComponentCont\"\nAppStorage.setOrCreate<number>(CUSTOM_COMPONENT_CONT, 0);\nlet globalBuilderNodeList: ArrayList<BuilderNode<[]>> = new ArrayList<BuilderNode<[]>>();\n\n@Component\nstruct BuilderNodePage {\n  aboutToAppear(): void {\n    const count: number | undefined = AppStorage.get<number>(CUSTOM_COMPONENT_CONT);\n    const current: number = count ? count + 1 : 1;\n    AppStorage.setOrCreate<number>(CUSTOM_COMPONENT_CONT, current);\n    console.info(\"BuilderNodePage\", \"aboutToAppear \" + AppStorage.get<number>(CUSTOM_COMPONENT_CONT))\n  }\n\n  aboutToDisappear(): void {\n    setTimeout(() => {\n      const count: number | undefined = AppStorage.get<number>(CUSTOM_COMPONENT_CONT);\n      console.info(\"BuilderNodePage\", \"aboutToDisappear \" + count)\n      const current: number = count ? count - 1 : -1;\n      AppStorage.set<number>(CUSTOM_COMPONENT_CONT, current)\n      console.info(\"BuilderNodePage\", \"aboutToDisappear \" + AppStorage.get<number>(CUSTOM_COMPONENT_CONT))\n    }, 1)\n  }\n\n  build() {\n    Text(\"This is a BuilderNode\")\n  }\n}\n\n@Builder\nfunction BuilderNodeBuilder() {\n  BuilderNodePage();\n}\n\n@Entry\n@Component\nstruct NavigationExample {\n  @Provide('pageInfos') pageInfos: NavPathStack = new NavPathStack()\n  private arr: number[] = [1, 2, 3];\n  @StorageProp(CUSTOM_COMPONENT_CONT) customComponentCount: number | undefined =\n    AppStorage.get<number>(CUSTOM_COMPONENT_CONT);\n\n  @Builder\n  pageMap(name: string) {\n    if (name === \"NavDestinationTitle1\") {\n      pageOneTmp();\n    } else if (name === \"NavDestinationTitle2\") {\n      pageTwoTmp();\n    } else if (name === \"NavDestinationTitle3\") {\n      pageThreeTmp();\n    }\n  }\n\n  onPageShow(): void {\n    console.info(\"NavigationExample \" + this.customComponentCount);\n  }\n\n  build() {\n    Column() {\n      Navigation(this.pageInfos) {\n        Text(\"BuilderNode中自定义组件的遗留数量 \" + this.customComponentCount)\n          .width(\"90%\")\n          .height(40)\n          .backgroundColor('#FFFFFF')\n        Button(\"移除全局引用\")\n          .onClick(() => {\n            // 清除所有全局引用。\n            // 可以使用hidumper指令触发GC验证引用关系是否清零。\n            globalBuilderNodeList.clear();\n          })\n        List({ space: 12 }) {\n          ForEach(this.arr, (item: number) => {\n            ListItem() {\n              Text(\"Page\" + item)\n                .width(\"100%\")\n                .height(72)\n                .backgroundColor('#FFFFFF')\n                .borderRadius(24)\n                .fontSize(16)\n                .fontWeight(500)\n                .textAlign(TextAlign.Center)\n                .onClick(() => {\n                  this.pageInfos.pushPath({ name: \"NavDestinationTitle\" + item });\n                })\n            }\n          }, (item: number) => item.toString())\n        }\n        .width(\"100%\")\n        .margin({ top: 12 })\n      }\n      .title(\"主标题\")\n      .mode(NavigationMode.Stack)\n      .navDestination(this.pageMap)\n    }\n    .height('100%')\n    .width('100%')\n    .backgroundColor('#F1F3F5')\n  }\n}\n\n@Component\nexport struct pageOneTmp {\n  @Consume('pageInfos') pageInfos: NavPathStack;\n  private builderNode: BuilderNode<[]> = new BuilderNode(this.getUIContext());\n  private content: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    console.info(\"pageOneTmp\", \"aboutToAppear\")\n    this.builderNode.build(wrapBuilder(BuilderNodeBuilder));\n    if (this.builderNode.getFrameNode()) {\n      this.content.addFrameNode(this.builderNode.getFrameNode());\n    }\n    // 添加全局引用，该对象在全局引用移除前无法被GC。\n    globalBuilderNodeList.add(this.builderNode);\n  }\n\n  aboutToDisappear(): void {\n    console.info(\"pageOneTmp\", \"aboutToDisappear\")\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"pageOneTmp\")\n        ContentSlot(this.content)\n      }.width('100%').height('100%')\n    }.title(\"NavDestinationTitle1\")\n    .onBackPressed(() => {\n      const popDestinationInfo = this.pageInfos.pop(); // 弹出路由栈栈顶元素。\n      console.info('pop' + '返回值' + JSON.stringify(popDestinationInfo));\n      return true;\n    })\n  }\n}\n\n@Component\nexport struct pageTwoTmp {\n  @Consume('pageInfos') pageInfos: NavPathStack;\n  private builderNode: BuilderNode<[]> = new BuilderNode(this.getUIContext());\n  private content: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    console.info(\"pageTwoTmp\", \"aboutToAppear\")\n    this.builderNode!.build(wrapBuilder(BuilderNodeBuilder));\n    if (this.builderNode!.getFrameNode()) {\n      // 将BuilderNode的根节点挂载至NodeContent对象中。\n      // 如果要触发builderNode的根节点的析构，需要主动从NodeContent对象中移除该节点，或者等待NodeContent对象被GC。\n      // 否则，BuilderNode的根节点无法触发析构。\n      this.content.addFrameNode(this.builderNode!.getFrameNode());\n    }\n  }\n\n  aboutToDisappear(): void {\n    console.info(\"pageTwoTmp\", \"aboutToDisappear\")\n    if (this.builderNode?.getFrameNode()) {\n      // 将BuilderNode的根节点从NodeContent对象中移除。\n      // 需要在BuilderNode的dispose操作之前执行，否则无法获得该BuilderNode的根节点。\n      this.content.removeFrameNode(this.builderNode?.getFrameNode());\n    }\n    this.builderNode?.dispose();\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"pageTwoTmp\")\n        ContentSlot(this.content)\n      }.width('100%').height('100%')\n    }.title(\"NavDestinationTitle2\")\n    .onBackPressed(() => {\n      const popDestinationInfo = this.pageInfos.pop(); // 弹出路由栈栈顶元素。\n      console.info('pop' + '返回值' + JSON.stringify(popDestinationInfo));\n      return true;\n    })\n  }\n}\n\n@Component\nexport struct pageThreeTmp {\n  @Consume('pageInfos') pageInfos: NavPathStack;\n  private builderNode: BuilderNode<[]> = new BuilderNode(this.getUIContext());\n  private content: NodeContent = new NodeContent();\n  private rootNode: FrameNode = new FrameNode(this.getUIContext());\n\n  aboutToAppear(): void {\n    console.info(\"pageThreeTmp\", \"aboutToAppear\")\n    this.builderNode!.build(wrapBuilder(BuilderNodeBuilder));\n    if (this.builderNode!.getFrameNode()) {\n      this.content.addFrameNode(this.rootNode);\n      // BuilderNode的根节点被挂载至FrameNode对象对应的节点中。\n      // BuilderNode的根节点如果要触发析构需要从主动从FrameNode对象对应的节点中移除，或者等待FrameNode对象对应的节点析构。\n      // 否则，BuilderNode的根节点无法触发析构。\n      this.rootNode.appendChild(this.builderNode.getFrameNode());\n    }\n  }\n\n  aboutToDisappear(): void {\n    console.info(\"pageThreeTmp\", \"aboutToDisappear\")\n    if (this.builderNode?.getFrameNode()) {\n      // 将BuilderNode的根节点从FrameNode对象对应的节点中移除。\n      // 需要在BuilderNode的dispose操作以及FrameNode对象dispose之前执行，否则无法获得他们对应的节点。\n      this.rootNode.removeChild(this.builderNode?.getFrameNode());\n    }\n    this.builderNode?.dispose();\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(\"pageThreeTmp\")\n        ContentSlot(this.content)\n      }.width('100%').height('100%')\n    }.title(\"NavDestinationTitle3\")\n    .onBackPressed(() => {\n      const popDestinationInfo = this.pageInfos.pop(); // 弹出路由栈栈顶元素。\n      console.info('pop' + '返回值' + JSON.stringify(popDestinationInfo));\n      return true;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buildernode前后端循环引用导致的内存泄漏问题",
      children: "BuilderNode前后端循环引用导致的内存泄漏问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
        children: "BuilderNode"
      }), "创建自定义组件节点时，有可能出现前后端（ArkTS UI层与Native UI引擎层）之间的循环引用，使得自定义节点无法被销毁，进而引发内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
          children: "BuilderNode"
        }), "创建自定义节点，创建的前端BuilderNode对象默认持有后端节点的强引用，而后端节点可能通过某些路径（如事件回调、全局缓存）反过来引用前端BuilderNode对象，因此形成了前后端循环引用，前端对象无法被回收，后端节点也因为被前端对象持有强引用而无法释放，导致内存泄漏。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BuilderNode会持有", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#build",
          children: "build"
        }), "函数传递的参数对象，如果传递给BuilderNode的参数对象也引用了BuilderNode对象，会产生前端对象的循环引用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["步骤一：如果传递给BuilderNode的参数持有了BuilderNode对象，当不再需要一个BuilderNode节点时，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#update",
          children: "update"
        }), "接口更新参数，解除参数对象对BuilderNode的引用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["步骤二：当不再需要一个BuilderNode节点时，将此BuilderNode节点从组件树上移除，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#dispose12",
          children: "dispose"
        }), "接口，立即释放前端BuilderNode对象对于后端节点的强引用，解除前后端的引用关系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下示例中，将BuilderNode前端对象作为参数传递给了自定义组件，构造了前后端循环引用的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下文中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
        children: "aboutToDisappear"
      }), "表示BuilderNode中构建的自定义组件（即TestComponent）析构时的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不调用dispose接口的情况（点击示例中的\"Destroy\"按钮），由于前后端循环引用，导致自定义组件无法析构，体现为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
          children: "aboutToDisappear"
        }), "回调未触发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用dispose接口的情况（点击示例中的\"Destroy with dispose\"按钮），", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
          children: "aboutToDisappear"
        }), "回调能够触发。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n// 定义传递参数的接口\ninterface ParamsInterface {\n  builderRootNode: BuilderNode<[ParamsInterface]> | null;\n}\n\n// 自定义组件\n@Component\nstruct TestComponent {\n  builderRootNode: BuilderNode<[ParamsInterface]> | null = null;\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  // 自定义组件实例创建时的回调\n  aboutToAppear() {\n    hilog.info(0x0000, 'testTag', 'aboutToAppear');\n  }\n\n  // 自定义组件实例析构时的回调\n  aboutToDisappear() {\n    hilog.info(0x0000, 'testTag', 'aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent(params: ParamsInterface) {\n  TestComponent(params)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private builderNode: BuilderNode<[ParamsInterface]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.builderNode = new BuilderNode(uiContext);\n\n    // 将builderNode自身作为参数传递给自定义组件，产生前后端循环引用场景\n    this.builderNode.build(new WrappedBuilder(buildComponent), {builderRootNode: this.builderNode});\n\n    return this.builderNode.getFrameNode();\n  }\n\n  // 解除当前builderNode与后端实体的引用关系，并置空为null\n  dispose() {\n    if (this.builderNode !== null) {\n      this.builderNode.dispose();\n      this.builderNode = null;\n    }\n  }\n\n  // 清理builderNode对象持有的参数，解除参数对象对builderNode对象的引用\n  clearParams() {\n    this.builderNode?.update({builderRootNode: null} as ParamsInterface)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State myNodeController: MyNodeController | undefined = new MyNodeController();\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('Destroy')\n        .onClick(() => {\n          this.myNodeController?.clearParams();\n          // 通过将传入NodeContainer的NodeController置为undefined，使BuilderNode节点下树\n          this.myNodeController = undefined;\n        })\n        .width('100%')\n      Button('Destroy with dispose')\n        .onClick(() => {\n          this.myNodeController?.clearParams();\n          this.myNodeController?.dispose();\n          this.myNodeController = undefined;\n        })\n        .width('100%')\n      Button('Create')\n        .onClick(() => {\n          if (this.myNodeController === undefined) {\n            this.myNodeController = new MyNodeController();\n          }\n        })\n        .width('100%')\n    }\n  }\n}\n"
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