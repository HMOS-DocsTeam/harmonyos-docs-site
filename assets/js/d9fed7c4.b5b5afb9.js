"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["579228"], {
846284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_contentslot_arkts_rendering_control_contentslot_md_d9f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-rendering-control-arkts-rendering-control-contentslot-arkts-rendering-control-contentslot-md-d9f.json
var site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_contentslot_arkts_rendering_control_contentslot_md_d9f_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/arkts-rendering-control-contentslot","title":"ContentSlot：混合开发","description":"用于渲染并管理Native层使用C-API创建的组件。","source":"@site/docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/arkts-rendering-control-contentslot.md","sourceDirName":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot","slug":"/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"ContentSlot：混合开发","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-contentslot","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Repeat：可复用的循环渲染","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat/"},"next":{"title":"@Env：环境变量","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot/arkts-rendering-control-contentslot.md


const frontMatter = {
	title: 'ContentSlot：混合开发',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-contentslot',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ContentSlot：混合开发';

const assets = {

};



const toc = [{
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "ArkTS侧接口",
  "id": "arkts侧接口",
  "level": 3
}, {
  "value": "Native侧接口",
  "id": "native侧接口",
  "level": 3
}, {
  "value": "开发实现",
  "id": "开发实现",
  "level": 2
}, {
  "value": "ArkTS侧代码实现",
  "id": "arkts侧代码实现",
  "level": 3
}, {
  "value": "Native侧代码实现",
  "id": "native侧代码实现",
  "level": 3
}, {
  "value": "Native侧主要接口使用说明",
  "id": "native侧主要接口使用说明",
  "level": 3
}, {
  "value": "绑定规则说明",
  "id": "绑定规则说明",
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
        id: "contentslot混合开发",
        children: "ContentSlot：混合开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于渲染并管理Native层使用C-API创建的组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/drawing-effect/complex-drawing-effect-c#%E6%B7%B7%E5%90%88%E6%A8%A1%E5%BC%8F",
        children: "混合模式"
      }), "开发。当容器为ArkTS组件，且子组件在Native侧创建时，推荐使用ContentSlot占位组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242322)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ContentSlot从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文档仅为开发指南。组件接口规范见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
        children: "ContentSlot API参数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts侧接口",
      children: "ArkTS侧接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ContentSlot(content: Content)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content作为ContentSlot的管理器，通过Native侧提供的接口，可以注册并触发ContentSlot的上下树事件回调以及管理ContentSlot的子组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract class Content {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native侧接口",
      children: "Native侧接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_registercallback",
              children: "OH_ArkUI_NodeContent_RegisterCallback(ArkUI_NodeContentHandle content, ArkUI_NodeContentCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向管理器Content上注册事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontentevent_geteventtype",
              children: "OH_ArkUI_NodeContentEvent_GetEventType(ArkUI_NodeContentEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Content上触发的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_addnode",
              children: "OH_ArkUI_NodeContent_AddNode(ArkUI_NodeContentHandle content, ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Content上添加子组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_insertnode",
              children: "OH_ArkUI_NodeContent_InsertNode(ArkUI_NodeContentHandle content, ArkUI_NodeHandle node, int32_t position)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Content上插入子组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_removenode",
              children: "OH_ArkUI_NodeContent_RemoveNode(ArkUI_NodeContentHandle content, ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Content上移除子组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-napi-h/capi-native-node-napi-h#oh_arkui_getnodecontentfromnapivalue",
              children: "OH_ArkUI_GetNodeContentFromNapiValue(napi_env env, napi_value value, ArkUI_NodeContentHandle* content)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS侧创建的NodeContent对象，映射到Native侧的ArkUI_NodeContentHandle。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontentevent_getnodecontenthandle",
              children: "OH_ArkUI_NodeContentEvent_GetNodeContentHandle(ArkUI_NodeContentEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触发上下树事件的Content对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_setuserdata",
              children: "OH_ArkUI_NodeContent_SetUserData(ArkUI_NodeContentHandle content, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Content上设置用户自定义属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_getuserdata",
              children: "OH_ArkUI_NodeContent_GetUserData(ArkUI_NodeContentHandle content)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Content上获取用户自定义属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum {  NODE_CONTENT_EVENT_ON_ATTACH_TO_WINDOW = 0,  NODE_CONTENT_EVENT_ON_DETACH_FROM_WINDOW = 1,  } ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodecontenteventtype",
              children: "ArkUI_NodeContentEventType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content上会触发的上树和下树事件类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实现",
      children: "开发实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts侧代码实现",
      children: "ArkTS侧代码实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import nativeNode from 'libentry.so'; // 开发者自己实现的so\nimport { NodeContent } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Parent {\n  private nodeContent: Content = new NodeContent();\n  // ...\n\n  aboutToAppear() {\n    // 通过C-API创建节点，并添加到管理器nodeContent上\n    nativeNode.createNativeNode(this.nodeContent);\n    // ...\n  }\n\n  build() {\n    Column() {\n      // 显示nodeContent管理器里存放的Native侧的组件\n      ContentSlot(this.nodeContent);\n      // ...\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native侧代码实现",
      children: "Native侧代码实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Napi的基础开发知识请查看以下文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ndk-development-overview",
        children: "开发导读"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节描述实现ContentSlot相关逻辑代码。创建C侧组件的具体步骤，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-build-ui-overview",
        children: "使用NDK接口构建UI"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"arkui/native_type.h\"\n#include \"arkui/native_node.h\"\n#include \"arkui/native_node_napi.h\"\n#include \"arkui/native_interface.h\"\n#include \"hilog/log.h\"\n// ···\nArkUI_NodeContentHandle nodeContentHandle_ = nullptr;\nArkUI_NativeNodeAPI_1 *nodeAPI;\nconst unsigned int LOG_PRINT_DOMAIN = 0xFF00;\n\n// 在Native侧创建一个宽高为480vp*480vp、背景色为0xFFFF0000（红色）的Column组件。对于更详细的节点树创建方法，请参考ArkUI API文档的C API章节。\nArkUI_NodeHandle NodeManager::CreateNodeHandle()\n{\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue value[] = {480};\n    ArkUI_AttributeItem item{value, 1};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &item);\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &item);\n    value[0].u32 = 0xFFFF0000;\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &item);\n    return column;\n}\n    \n// ArkTS侧createNativeNode方法在Native侧的具体实现\nnapi_value NodeManager::CreateNativeNode(napi_env env, napi_callback_info info)\n{\n    // napi相关处理空指针&数据越界等问题\n    if ((env == nullptr) || (info == nullptr)) {\n        return nullptr;\n    }\n\n    size_t argc = 1;\n    napi_value args[1] = { nullptr };\n    if (napi_get_cb_info(env, info, &argc, args, nullptr, nullptr) != napi_ok) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"Manager\", \"CreateNativeNode napi_get_cb_info failed\");\n    }\n\n    if (argc != 1) {\n        return nullptr;\n    }\n\n    nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n\n    // 将nodeContentHandle_指向ArkTS侧传入的nodeContent\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &nodeContentHandle_);\n\n    if (nodeAPI != nullptr) {\n        if (nodeAPI->createNode != nullptr && nodeAPI->addChild != nullptr) {\n            ArkUI_NodeHandle component;\n            // 创建C侧组件\n            component = CreateNodeHandle();\n            // 将组件添加到nodeContent管理器中\n            OH_ArkUI_NodeContent_AddNode(nodeContentHandle_, component);\n            // ···\n        }\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native侧主要接口使用说明",
      children: "Native侧主要接口使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册上下树事件，并通过事件获取对应的Content对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto nodeContentEvent = [](ArkUI_NodeContentEvent *event) {\n    ArkUI_NodeContentHandle content = OH_ArkUI_NodeContentEvent_GetNodeContentHandle(event);\n    // 针对不同content需要额外做的逻辑\n    if (OH_ArkUI_NodeContentEvent_GetEventType(event) == NODE_CONTENT_EVENT_ON_ATTACH_TO_WINDOW) {\n        // ContentSlot上树时需要触发的逻辑\n        // ···\n    } else if (OH_ArkUI_NodeContentEvent_GetEventType(event) == NODE_CONTENT_EVENT_ON_DETACH_FROM_WINDOW) {\n        // ContentSlot下树时需要触发的逻辑\n        // ···\n    };\n};\n// 将该事件注册到nodeContent上\nOH_ArkUI_NodeContent_RegisterCallback(nodeContentHandle_, nodeContentEvent);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加子组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeHandle component;\n// 创建C侧组件\ncomponent = CreateNodeHandle();\n// 将组件添加到nodeContent管理器中\nOH_ArkUI_NodeContent_AddNode(nodeContentHandle_, component);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "插入子组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "size_t position = 0;\nArkUI_NodeHandle component1 = CreateNodeHandle();\n// 将组件插入nodeContent管理器对应位置\nOH_ArkUI_NodeContent_InsertNode(nodeContentHandle_, component1, position);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除子组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在nodeContent中移除对应组件\nOH_ArkUI_NodeContent_RemoveNode(nodeContentHandle_, component1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置自定义属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建需要定义的自定义数据\nvoid *userData = CreateUserData();\nOH_ArkUI_NodeContent_SetUserData(nodeContentHandle_, userData);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取自定义属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void *userData = OH_ArkUI_NodeContent_GetUserData(nodeContentHandle_);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定规则说明",
      children: "绑定规则说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果将同一个Content对象绑定到多个ContentSlot组件，最终该Content的内容仅在最后一个绑定的ContentSlot中显示，其他ContentSlot将不显示任何内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content与ContentSlot节点具有一对一的绑定关系。同一Content不能同时关联多个ContentSlot节点。如果尝试将同一Content挂载到多个ContentSlot节点，仅最后一次挂载生效，之前的ContentSlot节点将失去Content的关联，导致组件内容无法显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若需在多个ContentSlot节点下显示相同内容，每个节点需创建单独的Content。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import nativeNode from 'libentry.so'; // 开发者自己实现的so\nimport { NodeContent } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Parent {\n  // ···\n  private nodeContent_1: Content = new NodeContent();\n  private nodeContent_2: Content = new NodeContent();\n\n  aboutToAppear() {\n    // ···\n    // 通过C-API创建节点，并添加到管理器nodeContent_1和nodeContent_2上\n    nativeNode.createNativeNode(this.nodeContent_1);\n    nativeNode.createNativeNode(this.nodeContent_2);\n  }\n\n  build() {\n    Column() {\n      // ···\n      ContentSlot(this.nodeContent_1);// nodeContent_1将被挂载到下一个Contentslot节点，此处无法显示\n      ContentSlot(this.nodeContent_1); // 正常显示\n      ContentSlot(this.nodeContent_2); // 正常显示\n    }\n  }\n}\n"
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
242322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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