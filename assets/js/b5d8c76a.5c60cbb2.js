"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["668426"], {
692639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_embed_arkts_components_ndk_embed_arkts_components_md_b5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-embed-arkts-components-ndk-embed-arkts-components-md-b5d.json
var site_docs_arkui_arkts_use_ndk_ndk_embed_arkts_components_ndk_embed_arkts_components_md_b5d_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-embed-arkts-components/ndk-embed-arkts-components","title":"嵌入ArkTS组件","description":"ArkUI在Native侧提供的能力作为ArkTS的子集，部分能力不会在Native侧提供，如声明式UI语法，自定义struct组件，UI高级组件。","source":"@site/docs/arkui/arkts-use-ndk/ndk-embed-arkts-components/ndk-embed-arkts-components.md","sourceDirName":"arkui/arkts-use-ndk/ndk-embed-arkts-components","slug":"/arkui/arkts-use-ndk/ndk-embed-arkts-components/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embed-arkts-components/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"嵌入ArkTS组件","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embed-arkts-components","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构建自定义组件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-custom-components/"},"next":{"title":"构建渲染节点","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embed-render-components/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-embed-arkts-components/ndk-embed-arkts-components.md


const frontMatter = {
	title: '嵌入ArkTS组件',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embed-arkts-components',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '嵌入ArkTS组件';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "嵌入arkts组件",
        children: "嵌入ArkTS组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI在Native侧提供的能力作为ArkTS的子集，部分能力不会在Native侧提供，如声明式UI语法，自定义struct组件，UI高级组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对需要使用ArkTS侧独立能力的场景，ArkUI开发框架提供了Native侧嵌入ArkTS组件的能力，该能力依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
        children: "ComponentContent"
      }), "机制，通过ComponentContent完成对ArkTS组件的封装，然后将封装对象传递到Native侧，通过Native侧的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-napi-h/capi-native-node-napi-h#oh_arkui_getnodehandlefromnapivalue",
        children: "OH_ArkUI_GetNodeHandleFromNapiValue"
      }), "接口转化为ArkUI_NodeHandle对象用于Native侧组件挂载使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724581)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过OH_ArkUI_GetNodeHandleFromNapiValue接口获得的ArkUI_NodeHandle对象只能作为子组件参数使用，如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addchild",
          children: "addChild"
        }), "接口的第二个参数，将该对象使用在其他场景下，如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute",
          children: "setAttribute"
        }), "设置属性将不生效并返回错误码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["针对Native侧修改ArkTS组件的场景，需要在Native侧通过Node-API方式构建ArkTS侧的更新数据，再通过ComponentContent的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#update",
          children: "update"
        }), "接口更新。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-use-ndk/ndk-build-custom-components",
          children: "构建自定义组件"
        }), "时，相关函数如measureNode等无法对ArkTS模块内部的组件进行调用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例代码在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "章节基础上引入ArkTS的Refresh组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Refresh组件挂载文本列表"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855252)/* ["default"] */.A) + "",
        width: "347",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册ArkTS组件创建函数给Native侧，以便Native侧调用，创建函数使用ComponentContent能力进行封装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用ComponentContent能力创建ArkTS组件\n\nimport { NodeContent, UIContext, RefreshModifier, ComponentContent } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n// 定义Native侧和ArkTS进行交互的数据对象。\ninterface NativeRefreshAttribute {\n  isRefreshing: boolean;\n  width?: number;\n  height?: number;\n  backgroundColor?: number;\n  refreshOffset?: number;\n  pullToRefresh?: boolean;\n  onRefreshing?: () => void;\n  onOffsetChange?: (offset: number) => void;\n}\n\n// 定义@Builder函数的入参格式。\ninterface RefreshAttribute {\n  isRefreshing: boolean;\n  // 属性设置通过Modifier优化性能\n  modifier?: RefreshModifier;\n  slot?: NodeContent;\n  onRefreshing?: () => void;\n  onOffsetChange?: (offset: number) => void;\n}\n\n// ComponentContent封装ArkTS组件依赖全局@Builder函数，涉及复杂自定义组件场景，可以在@Builder函数中嵌套@Component自定义组件。\n// @Builder函数提供入参方式，方便后续通过ComponentContent的update接口进行参数更新。\n@Builder\nfunction mixedRefresh(attribute: RefreshAttribute) {\n  Refresh({ refreshing: attribute.isRefreshing }) {\n    // Refresh作为容器组件，需要使用ContentSlot机制预留子组件占位\n    ContentSlot(attribute.slot);\n  }.attributeModifier(attribute.modifier)\n  .onRefreshing(() => {\n    hilog.info(DOMAIN, 'testTag', 'on onRefreshing');\n    if (attribute.onRefreshing) {\n      hilog.info(DOMAIN, 'testTag', 'on native onRefreshing');\n      attribute.onRefreshing();\n    }\n  })\n  .onOffsetChange((value: number) => {\n    hilog.info(DOMAIN, 'testTag', 'on offset change: ' + value);\n    if (attribute.onOffsetChange) {\n      hilog.info(DOMAIN, 'testTag', 'on native onOffsetChange');\n      attribute.onOffsetChange(value);\n    }\n  });\n}\n\n// 定义创建函数的返回值，用于ArkTS侧和Native侧的交互。\ninterface MixedModuleResult {\n  // 定义针对Refresh构建函数的封装对象，用于Native侧转化为ArkUI_NodeHandle对象。\n  content?: ComponentContent<RefreshAttribute>;\n  // Refresh作为容器组件，需要使用ContentSlot机制挂载Native侧的子组件。\n  childSlot?: NodeContent;\n}\n\n// 提供创建ArkTS组件的入口函数。\nexport function createMixedRefresh(value: NativeRefreshAttribute): MixedModuleResult {\n  hilog.info(DOMAIN, 'testTag', 'createMixedRefresh');\n  // 通过AppStorage对象在Ability启动的时候保持UI上下文对象。\n  let uiContent = AppStorage.get<UIContext>('context');\n  let modifier = new RefreshModifier();\n  if (value.width) {\n    modifier.width(value.width);\n  }\n  if (value.height) {\n    modifier.height(value.height);\n  }\n  if (value.backgroundColor) {\n    modifier.backgroundColor(value.backgroundColor);\n  }\n  if (value.pullToRefresh) {\n    modifier.pullToRefresh(value.pullToRefresh);\n  }\n  if (value.refreshOffset) {\n    modifier.refreshOffset(value.refreshOffset);\n  }\n  // 创建NodeContent插槽对象用于Refresh子组件挂载。\n  let nodeSlot = new NodeContent();\n  // 通过ComponentContent创建Refresh组件并将它封装起来。\n  let content = new ComponentContent<RefreshAttribute>(uiContent!, wrapBuilder<[RefreshAttribute]>(mixedRefresh),\n    {\n      isRefreshing: value.isRefreshing,\n      modifier: modifier,\n      slot: nodeSlot,\n      onRefreshing: value.onRefreshing,\n      onOffsetChange: value.onOffsetChange\n    });\n  // 将Refresh组件的封装对象及其子组件插槽对象传递给Native侧。\n  return { content: content, childSlot: nodeSlot };\n}\n\n// 定义Refresh组件的更新函数，用于Native侧更新。\n// 在更新场景下，需要将Refresh组件的封装对象及其子组件插槽对象返回，防止组件重新创建。\nexport function updateMixedRefresh(refresh: ComponentContent<RefreshAttribute>, childSlot: NodeContent,\n  value: NativeRefreshAttribute): void {\n  let modifier = new RefreshModifier();\n  if (value.width) {\n    modifier.width(value.width);\n  }\n  if (value.height) {\n    modifier.height(value.height);\n  }\n  if (value.backgroundColor) {\n    modifier.backgroundColor(value.backgroundColor);\n  }\n  if (value.pullToRefresh) {\n    modifier.pullToRefresh(value.pullToRefresh);\n  }\n  if (value.refreshOffset) {\n    modifier.refreshOffset(value.refreshOffset);\n  }\n  // 调用ComponentContent的update接口进行更新。\n  refresh.update({\n    isRefreshing: value.isRefreshing,\n    modifier: modifier,\n    slot: childSlot,\n    onRefreshing: value.onRefreshing,\n    onOffsetChange: value.onOffsetChange\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将创建和更新函数注册给Native侧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//  Index.ets\nimport nativeNode from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\nimport { createMixedRefresh, updateMixedRefresh } from './MixedModule';\n\n@Entry\n@Component\nstruct Index {\n  private rootSlot = new NodeContent();\n  @State @Watch('changeNativeFlag') showNative: boolean = false;\n\n  aboutToAppear(): void {\n    // 设置uiContext;\n    AppStorage.setOrCreate<UIContext>('context', this.getUIContext());\n    // 设置混合模式下的builder函数。\n    nativeNode.registerCreateMixedRefreshNode(createMixedRefresh);\n    nativeNode.registerUpdateMixedRefreshNode(updateMixedRefresh);\n  }\n\n  changeNativeFlag(): void {\n    if (this.showNative) {\n      // 创建NativeModule组件挂载\n      nativeNode.createNativeRoot(this.rootSlot);\n    } else {\n      // 销毁NativeModule组件\n      nativeNode.destroyNativeRoot();\n    }\n  }\n\n  build() {\n    Column() {\n      Button(this.showNative ? 'HideNativeUI' : 'ShowNativeUI').onClick(() => {\n        this.showNative = !this.showNative;\n      });\n      Row() {\n        // ArkTS插入Native组件。\n        ContentSlot(this.rootSlot);\n      }.layoutWeight(1)\n      .id('row_');\n    }\n    .width('100%')\n    .height('100%');\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// native_init.cpp\n#include \"napi/native_api.h\"\n#include \"ArkUIMixedRefresh.h\"\n#include \"NativeEntry.h\"\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"createNativeRoot\", nullptr, NativeModule::CreateNativeRoot, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"registerCreateMixedRefreshNode\", nullptr, NativeModule::ArkUIMixedRefresh::RegisterCreateRefresh, nullptr,\n         nullptr, nullptr, napi_default, nullptr},\n        {\"registerUpdateMixedRefreshNode\", nullptr, NativeModule::ArkUIMixedRefresh::RegisterUpdateRefresh, nullptr,\n         nullptr, nullptr, napi_default, nullptr},\n        {\"destroyNativeRoot\", nullptr, NativeModule::DestroyNativeRoot, nullptr, nullptr, nullptr, napi_default,\n         nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧通过Node-API保存创建和更新函数，用于后续调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 混合模式交互类。\n\n#ifndef MYAPPLICATION_ARKUIMIXEDREFRESHTEMPLATE_H\n#define MYAPPLICATION_ARKUIMIXEDREFRESHTEMPLATE_H\n\n#include \"ArkUIMixedNode.h\"\n\n#include <optional>\n\n#include <arkui/native_node_napi.h>\n#include <js_native_api_types.h>\n\nnamespace NativeModule {\n\nclass ArkUIMixedRefresh : public ArkUIMixedNode {\npublic:\n    static napi_value RegisterCreateAndUpdateRefresh(napi_env env, napi_callback_info info);\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUIMIXEDREFRESHTEMPLATE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相关实现类说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 混合模式交互类。\n\n#include \"ArkUIMixedRefreshTemplate.h\"\n\nnamespace NativeModule {\nnamespace {\nnapi_env g_env;\nnapi_ref g_createRefresh;\nnapi_ref g_updateRefresh;\n} // namespace\n\nnapi_value ArkUIMixedRefresh::RegisterCreateAndUpdateRefresh(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    g_env = env;\n    napi_ref refer;\n    // 创建引用之后保存，防止释放。\n    napi_create_reference(env, args[0], 1, &refer);\n\n    g_createRefresh = refer;\n    return nullptr;\n}\n\n} // namespace NativeModule\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相关的CMakeLists的配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  # CMakeLists.txt\n \n  # the minimum version of CMake.\n  cmake_minimum_required(VERSION 3.4.1)\n  project(testndk)\n  \n  # optional依赖C++17\n  set(CMAKE_CXX_STANDARD 17)\n  set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n  \n  include_directories(${NATIVERENDER_ROOT_PATH}\n                       ${NATIVERENDER_ROOT_PATH}/include)\n  \n  add_library(entry SHARED NativeEntry.cpp ArkUIMixedRefresh.cpp napi_init.cpp)\n  # target_link_libraries(entry PUBLIC libace_napi.z.so, libace_ndk.z.so, libhilog_ndk.z.so)\n  \n  find_library(\n       # Sets the name of the path variable.\n       hilog-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       hilog_ndk.z\n   )\n  \n  find_library(\n       # Sets the name of the path variable.\n       libace-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       ace_ndk.z\n   )\n  \n  find_library(\n       # Sets the name of the path variable.\n       libnapi-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       ace_napi.z\n   )\n  \n   find_library(\n        # Sets the name of the path variable.\n        libuv-lib\n        uv\n    )\n  \n  target_link_libraries(entry PUBLIC\n       ${hilog-lib} ${libace-lib} ${libnapi-lib} ${libuv-lib} )\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "抽象混合模式下组件的基类，用于通用逻辑管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIMixedNode.h\n// 混合模式基类。\n\n#ifndef MYAPPLICATION_ARKUIMIXEDNODE_H\n#define MYAPPLICATION_ARKUIMIXEDNODE_H\n\n#include <js_native_api.h>\n#include <js_native_api_types.h>\n\n#include \"ArkUIBaseNode.h\"\n#include \"NativeModule.h\"\n\nnamespace NativeModule {\n\n// Wrap ArkTS Node\nclass ArkUIMixedNode : public ArkUIBaseNode {\npublic:\n    ArkUIMixedNode(ArkUI_NodeHandle handle, napi_env env, napi_ref componentContent)\n        : ArkUIBaseNode(handle), env_(env), componentContent_(componentContent) {}\n\n    // 在基类析构的时候需要把混合模式在ArkTS侧的对象释放掉。\n    ~ArkUIMixedNode() override { napi_delete_reference(env_, componentContent_); }\n\nprotected:\n    napi_env env_;\n    napi_ref componentContent_;\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUIMIXEDNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现Refresh组件的混合模式封装对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIMixedRefresh.h\n// Refresh混合模式在Native侧的封装对象。\n\n#ifndef MYAPPLICATION_ARKUIMIXEDREFRESH_H\n#define MYAPPLICATION_ARKUIMIXEDREFRESH_H\n\n#include \"ArkUIMixedNode.h\"\n#include \"ArkUIBaseNode.h\"\n\n#include <optional>\n\n#include <arkui/native_node_napi.h>\n#include <js_native_api_types.h>\n\nnamespace NativeModule {\n\n// 定义Native侧和ArkTS侧的交互数据结构。\nstruct NativeRefreshAttribute {\n    std::optional<bool> isRefreshing;\n    std::optional<float> width;\n    std::optional<float> height;\n    std::optional<uint32_t> backgroundColor;\n    std::optional<float> refreshOffset;\n    std::optional<bool> pullToRefresh;\n    std::function<void()> onRefreshing;\n    std::function<void(float)> onOffsetChange;\n};\n\nclass ArkUIMixedRefresh : public ArkUIMixedNode {\npublic:\n    // 调用ArkTS的方法创建Refresh组件。\n    static const std::shared_ptr<ArkUIMixedRefresh> Create(const NativeRefreshAttribute &attribute);\n\n    ArkUIMixedRefresh(ArkUI_NodeHandle handle, ArkUI_NodeContentHandle contentHandle, napi_env env,\n                      napi_ref componentContent, napi_ref nodeContent)\n        : ArkUIMixedNode(handle, env, componentContent), contentHandle_(contentHandle), nodeContent_(nodeContent) {}\n\n    ArkUIMixedRefresh() : ArkUIMixedNode(nullptr, nullptr, nullptr) {}\n\n    ~ArkUIMixedRefresh() override { napi_delete_reference(env_, nodeContent_); } // 释放子节点占位组件插槽对象。\n\n    void SetWidth(float width) { attribute_.width = width; }\n\n    void SetHeight(float height) { attribute_.height = height; }\n\n    void SetBackgroundColor(uint32_t color) { attribute_.backgroundColor = color; }\n\n    void SetRefreshState(bool isRefreshing) { attribute_.isRefreshing = isRefreshing; }\n\n    void SetPullToRefresh(bool pullToRefresh) { attribute_.pullToRefresh = pullToRefresh; }\n\n    void SetRefreshOffset(float offset) { attribute_.refreshOffset = offset; }\n\n    void SetRefreshCallback(const std::function<void()> &callback) { attribute_.onRefreshing = callback; }\n\n    void SetOnOffsetChange(const std::function<void(float)> &callback) { attribute_.onOffsetChange = callback; }\n\n    // 避免频繁跨语言，在Native侧缓存属性事件，批量通知。\n    void FlushMixedModeCmd();\n\n    static napi_value RegisterCreateRefresh(napi_env env, napi_callback_info info);\n    static napi_value RegisterUpdateRefresh(napi_env env, napi_callback_info info);\n\nprotected:\n    void OnAddChild(const std::shared_ptr<ArkUIBaseNode> &child) override\n    {\n        // 使用NodeContent挂载组件（可以使用ArkTS在Native侧通过ComponentContent的转化对象，也可以是纯Native组件）到ArkTS组件下面。\n        OH_ArkUI_NodeContent_AddNode(contentHandle_, child->GetHandle());\n    }\n\n    void OnRemoveChild(const std::shared_ptr<ArkUIBaseNode> &child) override\n    {\n        // 使用NodeContent卸载组件。\n        OH_ArkUI_NodeContent_RemoveNode(contentHandle_, child->GetHandle());\n    }\n\n    void OnInsertChild(const std::shared_ptr<ArkUIBaseNode> &child, int32_t index) override\n    {\n        // 使用NodeContent插入组件。\n        OH_ArkUI_NodeContent_InsertNode(contentHandle_, child->GetHandle(), index);\n    }\n\nprivate:\n    // 使用napi接口创建ArkTS侧的数据结构。\n    static napi_value CreateRefreshAttribute(const NativeRefreshAttribute &attribute, void *userData);\n    \n    static void Attribute2Descriptor(const NativeRefreshAttribute &attribute, napi_property_descriptor *desc);\n\n    ArkUI_NodeContentHandle contentHandle_;\n    napi_ref nodeContent_;\n    NativeRefreshAttribute attribute_;\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUIMIXEDREFRESH_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相关实现类说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIMixedRefresh.cpp\n\n#include \"ArkUIMixedRefresh.h\"\n#include <hilog/log.h>\n\nnamespace NativeModule {\nnamespace {\nnapi_env g_env;\nnapi_ref g_createRefresh;\nnapi_ref g_updateRefresh;\nconst int REFRESH_OFFSET_INDEX0 = 0;\nconst int REFRESH_OFFSET_INDEX1 = 1;\nconst int REFRESH_OFFSET_INDEX2 = 2;\nconst int REFRESH_OFFSET_INDEX3 = 3;\nconst int REFRESH_OFFSET_INDEX4 = 4;\nconst int REFRESH_OFFSET_INDEX5 = 5;\nconst int REFRESH_OFFSET_INDEX6 = 6;\nconst int REFRESH_OFFSET_INDEX7 = 7;\n} // namespace\n\nvoid ArkUIMixedRefresh::Attribute2Descriptor(const NativeRefreshAttribute &attribute, napi_property_descriptor *desc)\n{\n    if (attribute.width) {\n        napi_value width;\n        napi_create_double(g_env, attribute.width.value(), &width);\n        desc[REFRESH_OFFSET_INDEX0].value = width;\n    }\n    if (attribute.height) {\n        napi_value height;\n        napi_create_double(g_env, attribute.height.value(), &height);\n        desc[REFRESH_OFFSET_INDEX1].value = height;\n    }\n    if (attribute.backgroundColor) {\n        napi_value backgroundColor;\n        napi_create_uint32(g_env, attribute.backgroundColor.value(), &backgroundColor);\n        desc[REFRESH_OFFSET_INDEX2].value = backgroundColor;\n    }\n    if (attribute.pullToRefresh) {\n        napi_value pullToRefresh;\n        napi_create_int32(g_env, attribute.pullToRefresh.value(), &pullToRefresh);\n        desc[REFRESH_OFFSET_INDEX3].value = pullToRefresh;\n    }\n    if (attribute.isRefreshing) {\n        napi_value isRefreshing;\n        napi_create_int32(g_env, attribute.isRefreshing.value(), &isRefreshing);\n        desc[REFRESH_OFFSET_INDEX4].value = isRefreshing;\n    }\n    if (attribute.refreshOffset) {\n        napi_value refreshOffset;\n        napi_create_double(g_env, attribute.refreshOffset.value(), &refreshOffset);\n        desc[REFRESH_OFFSET_INDEX5].value = refreshOffset;\n    }\n    if (attribute.onRefreshing) {\n        OH_LOG_INFO(LOG_APP, \"onRefreshing start\");\n        desc[REFRESH_OFFSET_INDEX6].method = [](napi_env env, napi_callback_info info) -> napi_value {\n            OH_LOG_INFO(LOG_APP, \"onRefreshing callback\");\n            size_t argc = 0;\n            napi_value args[0];\n            void *data;\n            napi_get_cb_info(env, info, &argc, args, nullptr, &data);\n            auto refresh = reinterpret_cast<ArkUIMixedRefresh *>(data);\n            if (refresh && refresh->attribute_.onRefreshing) {\n                refresh->attribute_.onRefreshing();\n            }\n            return nullptr;\n        };\n    }\n}\n\n// 使用Napi接口创建与ArkTS侧交互的数据结构，用于Refresh组件的创建和更新。\nnapi_value ArkUIMixedRefresh::CreateRefreshAttribute(const NativeRefreshAttribute &attribute, void *userData)\n{\n    napi_property_descriptor desc[] = {\n        {\"width\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"height\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"backgroundColor\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"pullToRefresh\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"isRefreshing\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"refreshOffset\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"onRefreshing\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n        {\"onOffsetChange\", nullptr, nullptr, nullptr, nullptr, nullptr, napi_default, userData},\n    };\n    Attribute2Descriptor(attribute, desc);\n    if (attribute.onOffsetChange) {\n        OH_LOG_INFO(LOG_APP, \"onOffsetChange start\");\n        desc[REFRESH_OFFSET_INDEX7].method = [](napi_env env, napi_callback_info info) -> napi_value {\n            OH_LOG_INFO(LOG_APP, \"onOffsetChange callback\");\n            size_t argc = 1;\n            napi_value args[1] = {nullptr};\n            void *data;\n            napi_get_cb_info(env, info, &argc, args, nullptr, &data);\n            double offset = 0.0;\n            napi_get_value_double(env, args[0], &offset);\n            auto refresh = reinterpret_cast<ArkUIMixedRefresh *>(data);\n            if (refresh && refresh->attribute_.onOffsetChange) {\n                refresh->attribute_.onOffsetChange(offset);\n            }\n            return nullptr;\n        };\n    }\n    napi_value refreshAttribute = nullptr;\n    auto result = napi_create_object_with_properties(g_env, &refreshAttribute, sizeof(desc) / sizeof(desc[0]), desc);\n    if (result != napi_ok) {\n        return nullptr;\n    }\n    return refreshAttribute;\n}\n\n// 创建ArkTS侧的组件并保存在Native侧的封装对象中。\nconst std::shared_ptr<ArkUIMixedRefresh> ArkUIMixedRefresh::Create(const NativeRefreshAttribute &attribute)\n{\n    napi_handle_scope scope;\n    napi_open_handle_scope(g_env, &scope);\n    auto refresh = std::make_shared<ArkUIMixedRefresh>();\n    auto refreshAttribute = CreateRefreshAttribute(attribute, refresh.get());\n    if (refreshAttribute == nullptr) {\n        napi_close_handle_scope(g_env, scope);\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    napi_value argv[1] = {refreshAttribute};\n    napi_value createRefresh = nullptr;\n    napi_get_reference_value(g_env, g_createRefresh, &createRefresh);\n    // 调用ArkTS的Create函数创建ArkTS的ComponentContent。\n    napi_call_function(g_env, nullptr, createRefresh, 1, argv, &result);\n\n    // 获取ArkTS的Refresh组件。\n    napi_value componentContent = nullptr;\n    napi_get_named_property(g_env, result, \"content\", &componentContent);\n    ArkUI_NodeHandle handle;\n    OH_ArkUI_GetNodeHandleFromNapiValue(g_env, componentContent, &handle);\n    // 获取ArkTS的Refresh组件的子组件插槽。\n    napi_value nodeContent = nullptr;\n    napi_get_named_property(g_env, result, \"childSlot\", &nodeContent);\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(g_env, nodeContent, &contentHandle);\n    // 保存ArkTS的ComponentContent用于防止ArkTS侧对象释放以及后续的更新。\n    napi_ref componentContentRef;\n    napi_create_reference(g_env, componentContent, 1, &componentContentRef);\n    // 保存ArkTS的NodeContent用于防止ArkTS侧对象释放以及后续的更新。\n    napi_ref nodeContentRef;\n    napi_create_reference(g_env, nodeContent, 1, &nodeContentRef);\n    // 更新Refresh组件相关参数。\n    refresh->handle_ = handle;\n    refresh->env_ = g_env;\n    refresh->componentContent_ = componentContentRef;\n    refresh->nodeContent_ = nodeContentRef;\n    refresh->contentHandle_ = contentHandle;\n    refresh->attribute_ = attribute;\n    return refresh;\n}\n// 更新函数实现。\nvoid ArkUIMixedRefresh::FlushMixedModeCmd()\n{\n    napi_handle_scope scope;\n    napi_open_handle_scope(g_env, &scope);\n    // 创建调用ArkTS接口入参。\n    auto refreshAttribute = CreateRefreshAttribute(attribute_, this);\n    if (refreshAttribute == nullptr) {\n        napi_close_handle_scope(g_env, scope);\n        return;\n    }\n    // 获取更新接口的剩余两个接口参数。\n    napi_value componentContent = nullptr;\n    napi_get_reference_value(g_env, componentContent_, &componentContent);\n    napi_value nodeContent = nullptr;\n    napi_get_reference_value(g_env, nodeContent_, &nodeContent);\n\n    napi_value argv[3] = {componentContent, nodeContent, refreshAttribute};\n    napi_value updateRefresh = nullptr;\n    napi_get_reference_value(g_env, g_updateRefresh, &updateRefresh);\n    // 调用ArkTS的Update函数进行更新。\n    napi_value result = nullptr;\n    napi_call_function(g_env, nullptr, updateRefresh, sizeof(argv) / sizeof(argv[0]), argv, &result);\n}\n\nnapi_value ArkUIMixedRefresh::RegisterCreateRefresh(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    g_env = env;\n    napi_ref refer;\n    napi_create_reference(env, args[0], 1, &refer);\n\n    g_createRefresh = refer;\n    return nullptr;\n}\n\nnapi_value ArkUIMixedRefresh::RegisterUpdateRefresh(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    g_env = env;\n    napi_ref refer;\n    napi_create_reference(env, args[0], 1, &refer);\n\n    g_updateRefresh = refer;\n    return nullptr;\n}\n\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定时器模块相关简单实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// UITimer.h\n// 定时器模块。\n\n#ifndef MYAPPLICATION_UITIMER_H\n#define MYAPPLICATION_UITIMER_H\n\n#include <hilog/log.h>\n#include <js_native_api.h>\n#include <js_native_api_types.h>\n#include <node_api.h>\n#include <node_api_types.h>\n#include <string>\n#include <thread>\n#include <uv.h>\n\nnamespace NativeModule {\n\nstruct UIData {\n    void *userData = nullptr;\n    int32_t count = 0;\n    int32_t totalCount = 0;\n    void (*func)(void *userData, int32_t count) = nullptr;\n};\n\nnapi_threadsafe_function threadSafeFunction = nullptr;\n\nvoid CreateNativeTimer(napi_env env, void *userData, int32_t totalCount, void (*func)(void *userData, int32_t count))\n{\n    napi_value name;\n    std::string str = \"UICallback\";\n    napi_create_string_utf8(env, str.c_str(), str.size(), &name);\n    // UI主线程回调函数。\n    napi_create_threadsafe_function(\n        env, nullptr, nullptr, name, 0, 1, nullptr, nullptr, nullptr,\n        [](napi_env env, napi_value value, void *context, void *data) {\n            auto userdata = reinterpret_cast<UIData *>(data);\n            userdata->func(userdata->userData, userdata->count);\n            delete userdata;\n        },\n        &threadSafeFunction);\n    // 启动定时器，模拟数据变化。\n    std::thread timerThread([data = userData, totalCount, func]() {\n        uv_loop_t *loop = uv_loop_new();\n        uv_timer_t *timer = new uv_timer_t();\n        uv_timer_init(loop, timer);\n        timer->data = new UIData{data, 0, totalCount, func};\n        uint64_t timeout = 4000;\n        uint64_t repeat = 4000;\n        uv_timer_start(\n            timer,\n            [](uv_timer_t *handle) {\n                OH_LOG_INFO(LOG_APP, \"on timeout\");\n                napi_acquire_threadsafe_function(threadSafeFunction);\n                auto *customData = reinterpret_cast<UIData *>(handle->data);\n                // 创建回调数据。\n                auto *callbackData =\n                    new UIData{customData->userData, customData->count, customData->totalCount, customData->func};\n                napi_call_threadsafe_function(threadSafeFunction, callbackData, napi_tsfn_blocking);\n                customData->count++;\n                if (customData->count > customData->totalCount) {\n                    uv_timer_stop(handle);\n                    delete handle;\n                    delete customData;\n                }\n            },\n            timeout, repeat);\n        uv_run(loop, UV_RUN_DEFAULT);\n        uv_loop_delete(loop);\n    });\n    timerThread.detach();\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_UITIMER_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
            children: "接入ArkTS页面"
          }), "章节的页面结构，将Refresh组件作为文本列表的父组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// MixedRefreshExample.h\n// 混合模式示例代码。\n\n#ifndef MYAPPLICATION_MIXEDREFRESHEXAMPLE_H\n#define MYAPPLICATION_MIXEDREFRESHEXAMPLE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIMixedRefresh.h\"\n#include \"NormalTextListExample.h\"\n#include \"UITimer.h\"\n\n#include <js_native_api_types.h>\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateMixedRefreshList(napi_env env)\n{\n    auto list = CreateTextListExample();\n    // 混合模式创建Refresh组件并挂载List组件。\n    NativeRefreshAttribute nativeRefreshAttribute{\n        .backgroundColor = 0xFF89CFF0, .refreshOffset = 64, .pullToRefresh = true};\n    auto refresh = ArkUIMixedRefresh::Create(nativeRefreshAttribute);\n    refresh->AddChild(list);\n\n    // 设置混合模式下的事件。\n    refresh->SetOnOffsetChange(\n        [](float offset) { OH_LOG_INFO(LOG_APP, \"on refresh offset changed: %{public}f\", offset); });\n    refresh->SetRefreshCallback([refreshPtr = refresh.get(), env]() {\n        OH_LOG_INFO(LOG_APP, \"on refreshing\");\n        // 启动定时器，模拟数据获取。\n        CreateNativeTimer(env, refreshPtr, 1, [](void *userData, int32_t count) {\n            // 数据获取后关闭刷新。\n            auto refresh = reinterpret_cast<ArkUIMixedRefresh *>(userData);\n            refresh->SetRefreshState(false);\n            refresh->FlushMixedModeCmd();\n        });\n    });\n\n    // 更新事件到ArkTS侧。\n    refresh->FlushMixedModeCmd();\n    return refresh;\n}\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_MIXEDREFRESHEXAMPLE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "替换入口组件创建为下拉刷新文本列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n\n#include \"NativeEntry.h\"\n\n#include \"ArkUIMixedRefresh.h\"\n#include \"MixedRefreshExample.h\"\n#include \"NormalTextListExample.h\"\n\n#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n#include <uv.h>\n\nnamespace NativeModule {\n\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取NodeContent\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    // 创建Refresh文本列表\n    auto refresh = CreateMixedRefreshList(env);\n\n    // 保持Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(refresh);\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Native侧提供Node-API的桥接方法，实现ArkTS侧的NativeNode模块接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const createNativeRoot: (content: Object) => void;\nexport const destroyNativeRoot: () => void;\n\nexport const registerCreateMixedRefreshNode: (content: Object) => void;\nexport const registerUpdateMixedRefreshNode: (content: Object) => void;\n"
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
724581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
855252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438115-37ea406e50f318dec7ed8cf566ecb493.gif");

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