"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["144264"], {
147328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_access_the_arkts_page_ndk_access_the_arkts_page_md_ace_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-access-the-arkts-page-ndk-access-the-arkts-page-md-ace.json
var site_docs_arkui_arkts_use_ndk_ndk_access_the_arkts_page_ndk_access_the_arkts_page_md_ace_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-access-the-arkts-page/ndk-access-the-arkts-page","title":"接入ArkTS页面","description":"占位组件","source":"@site/docs/arkui/arkts-use-ndk/ndk-access-the-arkts-page/ndk-access-the-arkts-page.md","sourceDirName":"arkui/arkts-use-ndk/ndk-access-the-arkts-page","slug":"/arkui/arkts-use-ndk/ndk-access-the-arkts-page/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-access-the-arkts-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"接入ArkTS页面","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-access-the-arkts-page","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于NDK构建UI概述","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-ui-overview/"},"next":{"title":"监听组件事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-access-the-arkts-page/ndk-access-the-arkts-page.md


const frontMatter = {
	title: '接入ArkTS页面',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-access-the-arkts-page',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '接入ArkTS页面';

const assets = {

};



const toc = [{
  "value": "占位组件",
  "id": "占位组件",
  "level": 2
}, {
  "value": "NDK组件模块",
  "id": "ndk组件模块",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "接入arkts页面",
        children: "接入ArkTS页面"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "占位组件",
      children: "占位组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用NDK接口构建UI界面时，需要在ArkTS页面创建用于挂载NDK接口创建组件的占位组件。占位组件类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
        children: "ContentSlot"
      }), "，ContentSlot能够绑定一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontent/js-apis-arkui-nodecontent",
        children: "NodeContent"
      }), "对象，该对象可通过Node-API传递到Native侧挂载显示Native组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NDK配置文件entry/src/main/cpp/types/libentry/oh-package.json5如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"libentry.so\",\n  \"types\": \"./Index.d.ts\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["占位组件和其他ArkTS系统组件使用方法相同。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%A4%BA%E4%BE%8B",
            children: "示例"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeNode from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  // 初始化NodeContent对象。\n  private rootSlot:NodeContent = new NodeContent();\n  @State @Watch('changeNativeFlag') showNative: boolean = false;\n\n  changeNativeFlag(): void {\n    if (this.showNative) {\n      // 传递NodeContent对象用于Native创建组件的挂载显示\n      nativeNode.createNativeRoot(this.rootSlot)\n    } else {\n      // 销毁NativeModule组件\n      nativeNode.destroyNativeRoot()\n    }\n  }\n\n  build() {\n    Column() {\n      Button(this.showNative ? 'HideNativeUI' : 'ShowNativeUI')\n        .onClick(() => {\n        this.showNative = !this.showNative\n      })\n        .id('btn')\n      Row() {\n        // 将NodeContent和ContentSlot占位组件绑定\n        ContentSlot(this.rootSlot)\n      }.layoutWeight(1)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "占位组件可以通过相关接口在Native侧转化为挂载对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeContentHandle contentHandle;\nOH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "挂载对象提供了相关挂载和卸载组件接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ArkUI_NodeContent_AddNode(handle_, myNativeNode);\nOH_ArkUI_NodeContent_RemoveNode(handle_, myNativeNode);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ndk组件模块",
      children: "NDK组件模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK提供的UI组件能力如组件创建、树操作、属性设置、事件注册等是通过函数指针结构体（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1",
        children: "ArkUI_NativeNodeAPI_1"
      }), "）进行暴露，该函数指针结构体可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_getmoduleinterface",
        children: "模块查询接口"
      }), "获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46248)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_getmoduleinterface",
          children: "模块查询接口"
        }), "带有初始化NDK的逻辑，建议先调用该接口进行全局初始化，再使用NDK进行UI构造。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_NativeNodeAPI_1* arkUINativeNodeApi = nullptr;\nOH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, arkUINativeNodeApi);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获取到函数指针结构体后，可以使用该结构体内的函数实现相关UI组件操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件创建和销毁。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto listNode = arkUINativeNodeApi->createNode(ARKUI_NODE_LIST);\narkUINativeNodeApi->disposeNode(listNode);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取NDK接口支持的组件范围可以通过查询", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
            children: "ArkUI_NodeType"
          }), "枚举值。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件树操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto parent = arkUINativeNodeApi->createNode(ARKUI_NODE_STACK);\nauto child = arkUINativeNodeApi->createNode(ARKUI_NODE_STACK);\narkUINativeNodeApi->addChild(parent, child);\narkUINativeNodeApi->removeChild(parent, child);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto stack = arkUINativeNodeApi->createNode(ARKUI_NODE_STACK);\nArkUI_NumberValue value[] = {{.f32 = 100}};\nArkUI_AttributeItem item = {value, 1};\narkUINativeNodeApi->setAttribute(stack, NODE_WIDTH, &item);\nArkUI_NumberValue value_color[] = {{.u32 = 0xff112233}};\nArkUI_AttributeItem item_color = {value_color, 1};\narkUINativeNodeApi->setAttribute(stack, NODE_BACKGROUND_COLOR, &item);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取NDK接口支持的属性范围可以通过查询", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
            children: "ArkUI_NodeAttributeType"
          }), "枚举值。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件注册。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto stack = arkUINativeNodeApi->createNode(ARKUI_NODE_STACK);\narkUINativeNodeApi->addNodeEventReceiver(stack, [](ArkUI_NodeEvent* event){\n    // process event\n});\narkUINativeNodeApi->registerNodeEvent(stack, NODE_ON_CLICK, 0, nullptr);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取NDK接口支持的事件范围可以通过查询", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
            children: "ArkUI_NodeEventType"
          }), "枚举值。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例展示了如何使用ContentSlot挂载Native侧的文本列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码的目录结构及其文件说明如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".\n|——cpp\n|    |——types\n|    |      |——libentry\n|    |      |       |——index.d.ts 提供Native和ArkTS侧的桥接方法。\n|    |——napi_init.cpp 与index.d.ts对应的桥接方法对接Native侧的定义处。\n|    |——NativeEntry.cpp 桥接方法的Native侧实现。\n|    |——NativeEntry.h 桥接方法的Native侧定义。\n|    |——NativeModule.h 提供获取ArkUI在Native侧模块的封装接口。\n|    |——CMakeLists.txt C语言库引用文件。\n|    |——ArkUIBaseNode.h 节点封装扩展类。\n|    |——ArkUINode.h 节点封装扩展类。\n|    |——ArkUIListNode.h 节点封装扩展类。\n|    |——ArkUIListItemNode.h 节点封装扩展类。\n|    |——ArkUITextNode.h 节点封装扩展类。\n|    |——NormalTextListExample.h 示例代码文件。\n|\n|——ets\n|    |——pages\n|         |——entry.ets 应用启动页，加载承载Native的容器。\n|\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Native文本列表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272306)/* ["default"] */.A) + "",
        width: "347",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkTS页面上声明用于Native页面挂载的占位组件，并在页面创建时通知Native侧创建文本列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeNode from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  // 初始化NodeContent对象。\n  private rootSlot:NodeContent = new NodeContent();\n  @State @Watch('changeNativeFlag') showNative: boolean = false;\n\n  changeNativeFlag(): void {\n    if (this.showNative) {\n      // 传递NodeContent对象用于Native创建组件的挂载显示\n      nativeNode.createNativeRoot(this.rootSlot)\n    } else {\n      // 销毁NativeModule组件\n      nativeNode.destroyNativeRoot()\n    }\n  }\n\n  build() {\n    Column() {\n      Button(this.showNative ? 'HideNativeUI' : 'ShowNativeUI')\n        .onClick(() => {\n        this.showNative = !this.showNative\n      })\n        .id('btn')\n      Row() {\n        // 将NodeContent和ContentSlot占位组件绑定\n        ContentSlot(this.rootSlot)\n      }.layoutWeight(1)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Native模板创建工程，并在Native侧提供Node-API的桥接方法，实现ArkTS侧的NativeNode模块接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/types/libentry/Index.d.ts\nexport const createNativeRoot: (content: Object) => void;\nexport const destroyNativeRoot: () => void;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/napi_init.cpp\n#include \"napi/native_api.h\"\n#include \"NativeEntry.h\"\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // 绑定Native侧的创建组件和销毁组件。\n    napi_property_descriptor desc[] = {\n        {\"createNativeRoot\", nullptr,\n        NativeModule::CreateNativeRoot, nullptr, nullptr,\n        nullptr, napi_default, nullptr},\n        {\"destroyNativeRoot\", nullptr,\n        NativeModule::DestroyNativeRoot, nullptr, nullptr,\n        nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NativeEntry.h文件中创建Native界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.h\n\n#ifndef MYAPPLICATION_NATIVEENTRY_H\n#define MYAPPLICATION_NATIVEENTRY_H\n\n#include <ArkUIBaseNode.h>\n#include <arkui/native_type.h>\n#include <js_native_api_types.h>\n\nnamespace NativeModule {\n\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info);\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info);\n\n// 管理Native组件的生命周期和内存。\nclass NativeEntry {\npublic:\n    static NativeEntry *GetInstance()\n    {\n        static NativeEntry nativeEntry;\n        return &nativeEntry;\n    }\n\n    void SetContentHandle(ArkUI_NodeContentHandle handle)\n    {\n        handle_ = handle;\n    }\n\n    void SetRootNode(const std::shared_ptr<ArkUIBaseNode> &baseNode)\n    {\n        root_ = baseNode;\n        // 添加Native组件到NodeContent上用于挂载显示。\n        OH_ArkUI_NodeContent_AddNode(handle_, root_->GetHandle());\n    }\n    void DisposeRootNode()\n    {\n        // 从NodeContent上卸载组件并销毁Native组件。\n        OH_ArkUI_NodeContent_RemoveNode(handle_, root_->GetHandle());\n        root_.reset();\n    }\n\nprivate:\n    std::shared_ptr<ArkUIBaseNode> root_;\n    ArkUI_NodeContentHandle handle_;\n};\n\n} // namespace NativeModule\n\n#endif  // MYAPPLICATION_NATIVEENTRY_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应实现文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n\n#include <arkui/native_node_napi.h>\n#include <js_native_api.h>\n#include \"NativeEntry.h\"\n#include \"NormalTextListExample.h\"\n\nnamespace NativeModule {\n\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取NodeContent\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    // 创建文本列表\n    auto list = CreateTextListExample();\n\n    // 保持Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(list);\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n} // namespace NativeModule\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用NDK提供的C接口需要在CMakeLists.txt中增加libace_ndk.z.so的引用，如下所示。其中entry为工程导出的动态库名称，如当前示例使用的是默认的名称libentry.so。新增cpp文件后，同样需要在CMakeLists.txt中添加相应的cpp文件。若未进行此配置，对应的文件将不会被编译。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_library(entry SHARED napi_init.cpp NativeEntry.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libace_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于NDK接口提供的是C接口，为了使用面向对象的方式简化编程和工程管理，这里建议使用C++进行二次封装，下面示例代码展示了示例界面中所需的列表，文本组件封装类。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["1）获取ArkUI在NDK接口的入口模块", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1",
            children: "ArkUI_NativeNodeAPI_1"
          }), "，该结构体模块提供了一系列组件创建、树构建、属性设置和事件注册等函数指针。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeModule.h\n// 提供获取ArkUI在Native侧模块的封装接口\n\n#ifndef MYAPPLICATION_NATIVEMODULE_H\n#define MYAPPLICATION_NATIVEMODULE_H\n\n#include <arkui/native_node.h>\n#include <cassert>\n\n#include <arkui/native_interface.h>\n\nnamespace NativeModule {\n\nclass NativeModuleInstance {\npublic:\n    static NativeModuleInstance *GetInstance()\n    {\n        static NativeModuleInstance instance;\n        return &instance;\n    }\n    NativeModuleInstance()\n    {\n        OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, arkUINativeNodeApi_);\n    }\n    // 暴露给其他模块使用。\n    ArkUI_NativeNodeAPI_1 *GetNativeNodeAPI() { return arkUINativeNodeApi_; }\n\nprivate:\n    ArkUI_NativeNodeAPI_1 *arkUINativeNodeApi_ = nullptr;\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_NATIVEMODULE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2）提供列表，文本组件的基类对象，用于封装通用属性和事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIBaseNode.h\n// 提供组件树操作的基类。\n#ifndef MYAPPLICATION_ARKUIBASENODE_H\n#define MYAPPLICATION_ARKUIBASENODE_H\n\n#include <arkui/native_type.h>\n#include <list>\n#include <memory>\n\n#include \"NativeModule.h\"\n\nnamespace NativeModule {\n\nclass ArkUIBaseNode {\npublic:\n    explicit ArkUIBaseNode(ArkUI_NodeHandle handle)\n        : handle_(handle), nativeModule_(NativeModuleInstance::GetInstance()->GetNativeNodeAPI()) {}\n\n    virtual ~ArkUIBaseNode()\n    {\n        // 封装析构函数，实现子节点移除功能。\n        if (!children_.empty()) {\n            for (const auto& child : children_) {\n                nativeModule_->removeChild(handle_, child->GetHandle());\n            }\n            children_.clear();\n        }\n        // 封装析构函数，统一回收节点资源。\n        nativeModule_->disposeNode(handle_);\n    }\n\n    void AddChild(const std::shared_ptr<ArkUIBaseNode> &child)\n    {\n        children_.emplace_back(child);\n        OnAddChild(child);\n    }\n\n    void RemoveChild(const std::shared_ptr<ArkUIBaseNode> &child)\n    {\n        children_.remove(child);\n        OnRemoveChild(child);\n    }\n\n    void InsertChild(const std::shared_ptr<ArkUIBaseNode> &child, int32_t index)\n    {\n        if (index >= children_.size()) {\n            AddChild(child);\n        } else {\n            auto iter = children_.begin();\n            std::advance(iter, index);\n            children_.insert(iter, child);\n            OnInsertChild(child, index);\n        }\n    }\n\n    ArkUI_NodeHandle GetHandle() const { return handle_; }\n\nprotected:\n    // 针对父容器子类需要重载下面的函数，实现组件挂载和卸载。\n    virtual void OnAddChild(const std::shared_ptr<ArkUIBaseNode> &child) {}\n    virtual void OnRemoveChild(const std::shared_ptr<ArkUIBaseNode> &child) {}\n    virtual void OnInsertChild(const std::shared_ptr<ArkUIBaseNode> &child, int32_t index) {}\n\n    ArkUI_NodeHandle handle_;\n    ArkUI_NativeNodeAPI_1 *nativeModule_ = nullptr;\n\nprivate:\n    std::list<std::shared_ptr<ArkUIBaseNode>> children_;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUIBASENODE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUINode.h\n// 提供通用属性和事件的封装。\n#ifndef MYAPPLICATION_ARKUINODE_H\n#define MYAPPLICATION_ARKUINODE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"NativeModule.h\"\n#include <arkui/native_node.h>\n#include <arkui/native_type.h>\n\nnamespace NativeModule {\n\nclass ArkUINode : public ArkUIBaseNode {\npublic:\n    explicit ArkUINode(ArkUI_NodeHandle handle) : ArkUIBaseNode(handle) {}\n\n    ~ArkUINode() override {}\n    \n    void SetWidth(float width)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = width}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_WIDTH, &item);\n    }\n    void SetPercentWidth(float percent)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = percent}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_WIDTH_PERCENT, &item);\n    }\n    void SetHeight(float height)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = height}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_HEIGHT, &item);\n    }\n    void SetPercentHeight(float percent)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = percent}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_HEIGHT_PERCENT, &item);\n    }\n    void SetBackgroundColor(uint32_t color)\n    {\n        ArkUI_NumberValue value[] = {{.u32 = color}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_BACKGROUND_COLOR, &item);\n    }\n\nprotected:\n    // 组件树操作的实现类对接。\n    void OnAddChild(const std::shared_ptr<ArkUIBaseNode> &child) override\n    {\n        nativeModule_->addChild(handle_, child->GetHandle());\n    }\n    void OnRemoveChild(const std::shared_ptr<ArkUIBaseNode> &child) override\n    {\n        nativeModule_->removeChild(handle_, child->GetHandle());\n    }\n    void OnInsertChild(const std::shared_ptr<ArkUIBaseNode> &child, int32_t index) override\n    {\n        nativeModule_->insertChildAt(handle_, child->GetHandle(), index);\n    }\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUINODE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3）实现列表组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 提供列表组件的封装。\n#ifndef MYAPPLICATION_ARKUILISTNODE_H\n#define MYAPPLICATION_ARKUILISTNODE_H\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\nclass ArkUIListNode : public ArkUINode {\npublic:\n    ArkUIListNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_LIST)) {}\n\n    ~ArkUIListNode() override {}\n    \n    void SetScrollBarState(bool isShow)\n    {\n        ArkUI_ScrollBarDisplayMode displayMode =\n            isShow ? ARKUI_SCROLL_BAR_DISPLAY_MODE_ON : ARKUI_SCROLL_BAR_DISPLAY_MODE_OFF;\n        ArkUI_NumberValue value[] = {{.i32 = displayMode}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_SCROLL_BAR_DISPLAY_MODE, &item);\n    }\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUILISTNODE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "4）实现列表项组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListItemNode.h\n// 提供列表项的封装类。\n#ifndef MYAPPLICATION_ARKUISTACKNODE_H\n#define MYAPPLICATION_ARKUISTACKNODE_H\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\nclass ArkUIListItemNode : public ArkUINode {\npublic:\n    ArkUIListItemNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_LIST_ITEM)) {}\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUISTACKNODE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5）实现文本组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUITextNode.h\n// 实现文本组件的封装类。\n#ifndef MYAPPLICATION_ARKUITEXTNODE_H\n#define MYAPPLICATION_ARKUITEXTNODE_H\n\n#include \"ArkUINode.h\"\n\n#include <string>\n\nnamespace NativeModule {\nclass ArkUITextNode : public ArkUINode {\npublic:\n    ArkUITextNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_TEXT)) {}\n    \n    void SetFontSize(float fontSize)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = fontSize}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_FONT_SIZE, &item);\n    }\n    void SetFontColor(uint32_t color)\n    {\n        ArkUI_NumberValue value[] = {{.u32 = color}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_FONT_COLOR, &item);\n    }\n    void SetTextContent(const std::string &content)\n    {\n        ArkUI_AttributeItem item = {nullptr, 0, content.c_str()};\n        nativeModule_->setAttribute(handle_, NODE_TEXT_CONTENT, &item);\n    }\n    void SetTextAlign(ArkUI_TextAlignment align)\n    {\n        ArkUI_NumberValue value[] = {{.i32 = align}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_TEXT_ALIGN, &item);\n    }\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUITEXTNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完善步骤3的CreateTextListExample函数，实现Native文本列表的创建和挂载显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NormalTextListExample.h\n\n#ifndef MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n#define MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIListItemNode.h\"\n#include \"ArkUIListNode.h\"\n#include \"ArkUITextNode.h\"\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateTextListExample()\n{\n    // 创建组件并挂载\n    // 1：使用智能指针创建List组件。\n    auto list = std::make_shared<ArkUIListNode>();\n    list->SetPercentWidth(1);\n    list->SetPercentHeight(1);\n    list->SetScrollBarState(true);\n    const int itemCount = 30;\n    const int fontSizes = 16;\n    const float screenWidth = 1;\n    const int defaultHeight = 100;\n    // 2：创建ListItem子组件并挂载到List上。\n    for (int32_t i = 0; i < itemCount; ++i) {\n        auto listItem = std::make_shared<ArkUIListItemNode>();\n        auto textNode = std::make_shared<ArkUITextNode>();\n        textNode->SetTextContent(std::to_string(i));\n        textNode->SetFontSize(fontSizes);\n        textNode->SetFontColor(0xFF000000);\n        textNode->SetPercentWidth(1);\n        textNode->SetPercentWidth(screenWidth);\n        textNode->SetHeight(defaultHeight);\n        textNode->SetBackgroundColor(0xFFfffacd);\n        textNode->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);\n        listItem->InsertChild(textNode, i);\n        list->AddChild(listItem);\n    }\n    return list;\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n"
          })
        }), "\n"]
      }), "\n"]
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
46248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
272306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438107-c3aaa14fbff0716346e86b4b278458e8.gif");

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