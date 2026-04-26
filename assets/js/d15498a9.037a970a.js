"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["529085"], {
437783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_add_component_napi_xcomponent_guidelines_napi_xcomponent_guidelines_md_d15_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-add-component-napi-xcomponent-guidelines-napi-xcomponent-guidelines-md-d15.json
var site_docs_arkui_arkts_ui_development_arkts_add_component_napi_xcomponent_guidelines_napi_xcomponent_guidelines_md_d15_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines/napi-xcomponent-guidelines","title":"自定义渲染 (XComponent)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines/napi-xcomponent-guidelines.md","sourceDirName":"arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines","slug":"/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义渲染 (XComponent)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-xcomponent-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"切换按钮 (Toggle)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-switch/"},"next":{"title":"进度条 (Progress)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines/napi-xcomponent-guidelines.md


const frontMatter = {
	title: '自定义渲染 (XComponent)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-xcomponent-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义渲染 (XComponent)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "XComponent渲染上屏原理",
  "id": "xcomponent渲染上屏原理",
  "level": 2
}, {
  "value": "创建XComponent和管理Surface生命周期",
  "id": "创建xcomponent和管理surface生命周期",
  "level": 2
}, {
  "value": "创建XComponent",
  "id": "创建xcomponent",
  "level": 3
}, {
  "value": "管理XComponent持有Surface的生命周期",
  "id": "管理xcomponent持有surface的生命周期",
  "level": 3
}, {
  "value": "XComponent的开发范式",
  "id": "xcomponent的开发范式",
  "level": 3
}, {
  "value": "OH_NativeXComponent向OH_ArkUI_SurfaceHolder的迁移",
  "id": "oh_nativexcomponent向oh_arkui_surfaceholder的迁移",
  "level": 2
}, {
  "value": "组件创建",
  "id": "组件创建",
  "level": 3
}, {
  "value": "绑定Surface生命周期",
  "id": "绑定surface生命周期",
  "level": 3
}, {
  "value": "获取NativeWindow方式",
  "id": "获取nativewindow方式",
  "level": 3
}, {
  "value": "监听交互事件",
  "id": "监听交互事件",
  "level": 3
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "在Native侧使用NativeWindow进行渲染绘制",
  "id": "在native侧使用nativewindow进行渲染绘制",
  "level": 3
}, {
  "value": "在ArkTS侧使用SurfaceId进行渲染绘制",
  "id": "在arkts侧使用surfaceid进行渲染绘制",
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
        id: "自定义渲染-xcomponent",
        children: "自定义渲染 (XComponent)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XComponent组件作为一种渲染组件，可用于EGL/OpenGLES和媒体数据写入，通过使用XComponent持有的“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/native-surface/native-window-guidelines",
        children: "NativeWindow"
      }), "”渲染画面，满足开发需要实现高级自定义渲染的需求，例如相机预览流的显示和游戏画面的渲染。开发者可通过指定XComponent组件的type字段来实现不同的渲染方式，分别为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#xcomponenttype10",
        children: "XComponentType"
      }), ".SURFACE和XComponentType.TEXTURE。对于SURFACE类型，开发者将定制的绘制内容单独展示到屏幕上。对于TEXTURE类型，开发者将定制的绘制内容和XComponent组件的内容合成后展示到屏幕上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以将XComponent类比为一个“画布”，在其上支持使用各种渲染技术（如OpenGL、Vulkan等）绘制复杂的图形，而XComponent组件则负责管理这个画布的位置、大小和各种交互事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前XComponent主要用于两类场景："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高性能渲染"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏画面、3D图形、复杂动画等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "媒体数据处理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机预览、视频播放、图像处理等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者传输的绘制内容包含透明元素时，Surface区域的显示效果会与下方内容进行合成展示。例如，若传输的内容完全透明，且XComponent的背景色被设置为黑色，同时Surface保持默认的大小与位置，则最终显示的将是一片黑色区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "xcomponent渲染上屏原理",
      children: "XComponent渲染上屏原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XComponent持有一个Surface，开发者能通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/native-surface/native-window-guidelines",
        children: "NativeWindow"
      }), "等接口，申请并提交Buffer至图形队列，以此方式将自绘制内容传送至该Surface，其主体流程如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用RequestBuffer获取空闲帧 → 应用生产帧数据 → 应用调用FlushBuffer提交到BufferQueue → 系统渲染侧通过AcquireBuffer获取帧 → 渲染到屏幕 → 系统渲染侧通过调用ReleaseBuffer释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["经过上述流程，应用自绘制的内容就可以显示在XComponent持有的Surface区域，而XComponent则负责将此Surface整合进UI界面，其中展示的内容正是开发者发送的自绘制内容。Surface的默认位置与大小与XComponent组件一致，开发者可利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#setxcomponentsurfacerect12",
        children: "setXComponentSurfaceRect"
      }), "接口自定义调整Surface的位置和大小。XComponent组件负责创建Surface，并通过回调将Surface的相关信息告知应用。应用可以通过一系列接口设定Surface的属性。该组件本身不对所绘制的内容进行感知，亦不提供渲染绘制的接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(611583)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主体流程中提到需要应用进行的RequestBuffer和FlushBuffer操作，在具体场景下一般已经被相关API（如相机模块、播放器模块、OpenGL相关接口等）封装，应用的实际开发者只需按要求调用这些API即可，不需要直接操作BufferQueue。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建xcomponent和管理surface生命周期",
      children: "创建XComponent和管理Surface生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为满足开发者的各种需求，XComponent组件提供了多种创建方式以及多种Surface生命周期的管理方式，下面将进行介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建xcomponent",
      children: "创建XComponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前ArkUI提供了三种UI组件的创建方式，分别是使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description",
        children: "ArkTS声明式UI描述"
      }), "创建、使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode",
        children: "ArkTS自定义组件节点"
      }), "创建以及使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-build-ui-overview",
        children: "NDK接口"
      }), "创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用UI界面开发场景下，建议使用ArkTS声明式UI描述创建XComponent组件。对于需要使用ArkTS自定义组件节点创建以及NDK接口创建的具体场景请参考这两种创建方式的相关介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "管理xcomponent持有surface的生命周期",
      children: "管理XComponent持有Surface的生命周期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xcomponent%E6%B8%B2%E6%9F%93%E4%B8%8A%E5%B1%8F%E5%8E%9F%E7%90%86",
        children: "XComponent渲染上屏原理"
      }), "中提到，XComponent能够显示应用自绘制的内容依赖的是其持有的Surface，因此了解如何获取XComponent持有的Surface的生命周期也十分重要。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XComponent推荐使用两种方式获取XComponent持有Surface的生命周期，分别为在ArkTS侧使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#xcomponentcontroller",
        children: "XComponentController"
      }), "管理Surface生命周期，以及在Native侧使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "管理Surface生命周期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要在ArkTS侧使用已封装接口进行功能开发（如相机预览、视频播放等）或对跨语言性能损耗不敏感的跨语言开发，建议直接在ArkTS侧使用XComponentController管理Surface生命周期。其生命周期的触发时机如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onSurfaceCreated回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发时刻：XComponent创建完成且创建好Surface后触发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧onSurfaceCreated的时序如下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(23265)/* ["default"] */.A) + "",
            width: "319",
            height: "139"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onSurfaceChanged回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发时刻：Surface大小变化触发重新布局之后触发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧onSurfaceChanged的时序如下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(814009)/* ["default"] */.A) + "",
            width: "317",
            height: "141"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onSurfaceDestroyed回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发时刻：XComponent组件被销毁时触发，与一般ArkUI的组件销毁时机一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧onSurfaceDestroyed的时序图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(982881)/* ["default"] */.A) + "",
            width: "316",
            height: "142"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于复杂的交互逻辑需跨语言开发，追求极致渲染性能或业务需求自主控制Surface的创建和销毁的，建议在Native侧使用OH_ArkUI_SurfaceHolder管理Surface生命周期。其生命周期触发时机如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OnSurfaceCreated回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发时刻：XComponent创建完成且Surface绑定生命周期回调后，满足以下任一条件时触发。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "组件上树且autoInitialize = true。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调用OH_ArkUI_XComponent_Initialize。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧OnSurfaceCreated的时序如下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(539190)/* ["default"] */.A) + "",
            width: "721",
            height: "523"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OnSurfaceChanged回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发时刻：OnSurfaceCreated回调成功触发且Surface大小变化触发重新布局之后触发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧OnSurfaceChanged的时序如下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(296170)/* ["default"] */.A) + "",
            width: "319",
            height: "205"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OnSurfaceDestroyed回调"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发时刻：组件下树且autoInitialize=true 或者调用 OH_ArkUI_XComponent_Finalize后触发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧OnSurfaceDestroyed的时序图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(167170)/* ["default"] */.A) + "",
            width: "836",
            height: "279"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xcomponent的开发范式",
      children: "XComponent的开发范式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BAxcomponent",
        children: "创建XComponent"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%AE%A1%E7%90%86xcomponent%E6%8C%81%E6%9C%89surface%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
        children: "管理XComponent持有Surface的生命周期"
      }), "进行排列组合，除使用NDK接口创建的XComponent无法在ArkTS侧使用XComponentController来管理Surface生命周期外，目前共有以下五种XComponent开发范式："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ArkTS声明式UI描述来创建组件并结合XComponentController实现对Surface生命周期的管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeRender from 'libnativerender.so';\n\n// 重写XComponentController，设置生命周期回调\nclass MyXComponentController extends XComponentController{\n  onSurfaceCreated(surfaceId: string): void {\n    console.info(`onSurfaceCreated surfaceId: ${surfaceId}`);\n    nativeRender.SetSurfaceId(BigInt(surfaceId));\n  }\n  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void {\n    console.info(`onSurfaceChanged surfaceId: ${surfaceId}, rect: ${JSON.stringify(rect)}}`);\n    // 在onSurfaceChanged中调用ChangeSurface绘制内容\n    nativeRender.ChangeSurface(BigInt(surfaceId), rect.surfaceWidth, rect.surfaceHeight);\n  }\n  onSurfaceDestroyed(surfaceId: string): void {\n    console.info(`onSurfaceDestroyed surfaceId: ${surfaceId}`);\n    nativeRender.DestroySurface(BigInt(surfaceId));\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State currentStatus: string = 'index';\n  xComponentController: XComponentController = new MyXComponentController();\n  build() {\n    Column() {\n      // ···\n      // 在xxx.ets中定义XComponent\n      Column({ space: 10 }) {\n        XComponent({\n          type: XComponentType.SURFACE,\n          controller: this.xComponentController\n        })\n        Text(this.currentStatus)\n          .fontSize('24fp')\n          .fontWeight(500)\n      }\n      .onClick(() => {\n        let surfaceId = this.xComponentController.getXComponentSurfaceId();\n        nativeRender.ChangeColor(BigInt(surfaceId));\n        let hasChangeColor: boolean = false;\n        if (nativeRender.GetXComponentStatus(BigInt(surfaceId))) {\n          hasChangeColor = nativeRender.GetXComponentStatus(BigInt(surfaceId)).hasChangeColor;\n        }\n        if (hasChangeColor) {\n          this.currentStatus = \"change color\";\n        }\n      })\n      // ···\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ArkTS声明式UI描述来创建组件并结合OH_ArkUI_SurfaceHolders实现对Surface生命周期的管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import native from 'libnativerender.so';\n\n// ...\n\n@Component\nexport struct SurfaceHolderDeclarative {\n  @State currentStatus: string = 'init';\n  private xcNode: FrameNode | null = null;\n  build() {\n    NavDestination() {\n      // ...\n      Column({ space: 10 }) {\n        // 创建XComponent组件\n        XComponent({\n          type: XComponentType.SURFACE,\n        })\n          .id('XComponentSurfaceHolder')\n          .onAttach(() => {\n            this.xcNode = this.getUIContext().getAttachedFrameNodeById('XComponentSurfaceHolder');\n            if (!this.xcNode) {\n              return;\n            }\n            native.bindNode('XComponentSurfaceHolder', this.xcNode); // 跨语言调用至Native侧获取SurfaceHolder并绑定Surface生命周期回调\n          })\n          .onDetach(() => {\n            native.unbindNode('XComponentSurfaceHolder');\n            this.xcNode = null;\n          })\n      }\n      // ...\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧获取SurfaceHolder并绑定Surface生命周期回调的具体实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value PluginManager::BindNode(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    ArkUI_NodeHandle handle;\n    OH_ArkUI_GetNodeHandleFromNapiValue(env, args[1], &handle);             // 获取nodeHandle\n    OH_ArkUI_SurfaceHolder *holder = OH_ArkUI_SurfaceHolder_Create(handle); // 获取SurfaceHolder\n    nodeHandleMap_[nodeId] = handle;\n    surfaceHolderMap_[handle] = holder;\n    auto callback = OH_ArkUI_SurfaceCallback_Create(); // 创建SurfaceCallback\n    callbackMap_[holder] = callback;\n    auto render = new EGLRender();\n    OH_ArkUI_SurfaceHolder_SetUserData(holder, render);                                // 将render保存在holder中\n    OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(callback, OnSurfaceCreatedNative); // 注册OnSurfaceCreated回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(callback, OnSurfaceChangedNative); // 注册OnSurfaceChanged回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(callback, OnSurfaceDestroyedNative); // 注册OnSurfaceDestroyed回调\n    OH_ArkUI_SurfaceHolder_AddSurfaceCallback(holder, callback);                // 注册SurfaceCallback回调\n    // ...\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ArkTS自定义组件节点来创建组件并结合XComponentController实现对Surface生命周期的管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 重写XComponentController，设置生命周期回调\nclass MyXComponentController extends XComponentController {\n  onSurfaceCreated(surfaceId: string): void {\n    console.info(`onSurfaceCreated surfaceId: ${surfaceId}`);\n  }\n\n  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void {\n    console.info(`onSurfaceChanged surfaceId: ${surfaceId}, rect: ${JSON.stringify(rect)}}`);\n  }\n\n  onSurfaceDestroyed(surfaceId: string): void {\n    console.info(`onSurfaceDestroyed surfaceId: ${surfaceId}`);\n  }\n}\n\nclass MyNodeController extends NodeController {\n  public xComponent: typeNode.XComponent | undefined = undefined;\n  public xComponentId: string = 'xcp' + (new Date().getTime());\n  public node: FrameNode | undefined = undefined;\n  public column: typeNode.Column | undefined = undefined;\n  private xcController: MyXComponentController = new MyXComponentController();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.node = new FrameNode(uiContext);\n    this.column = typeNode.createNode(uiContext, 'Column')\n    this.column.initialize()\n      .width('100%')\n      .height('100%')\n    try {\n      this.node.appendChild(this.column);\n    } catch (error) {\n      console.error('Fail to append child: ', error);\n    }\n    // 创建XComponent组件节点，并绑定XComponentController\n    this.xComponent =\n      typeNode.createNode(uiContext, 'XComponent', { type: XComponentType.SURFACE, controller: this.xcController });\n    this.xComponent.attribute\n    try {\n      this.column.appendChild(this.xComponent);\n    } catch (error) {\n      console.error('Fail to append child: ', error);\n    }\n    return this.node;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ArkTS自定义组件节点来创建组件并结合OH_ArkUI_SurfaceHolder实现对Surface生命周期的管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import native from 'libnativerender.so';\nimport { FrameNode, NodeController, typeNode, UIContext } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  // ...\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    // ...\n    // 创建XComponent组件节点\n    this.xComponent = typeNode.createNode(uiContext, 'XComponent', { type: XComponentType.SURFACE });\n    this.xComponent.attribute\n      .id(this.xComponentId)\n      .focusable(true)\n      .focusOnTouch(true)\n    native.bindNode(this.xComponentId, this.xComponent) // 跨语言调用至Native侧绑定Surface生命周期回调\n    // ...\n  }\n\n  // ...\n}\n\n// ...\n\n@Component\nexport struct SurfaceHolderTypeNode {\n  // ...\n  myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    NavDestination() {\n      Column() {\n        // ...\n        Column() {\n          if (this.isShow) {\n            NodeContainer(this.myNodeController)\n              .width(200)\n              .height(200)\n              .focusable(true)\n              .focusOnTouch(true)\n              .defaultFocus(true)\n          }\n        }.height(200)\n        // ...\n      }\n      .width('100%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧绑定Surface生命周期回调的具体实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value PluginManager::BindNode(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    ArkUI_NodeHandle handle;\n    OH_ArkUI_GetNodeHandleFromNapiValue(env, args[1], &handle);             // 获取nodeHandle\n    OH_ArkUI_SurfaceHolder *holder = OH_ArkUI_SurfaceHolder_Create(handle); // 获取SurfaceHolder\n    nodeHandleMap_[nodeId] = handle;\n    surfaceHolderMap_[handle] = holder;\n    auto callback = OH_ArkUI_SurfaceCallback_Create(); // 创建SurfaceCallback\n    callbackMap_[holder] = callback;\n    auto render = new EGLRender();\n    OH_ArkUI_SurfaceHolder_SetUserData(holder, render);                                // 将render保存在holder中\n    OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(callback, OnSurfaceCreatedNative); // 注册OnSurfaceCreated回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(callback, OnSurfaceChangedNative); // 注册OnSurfaceChanged回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(callback, OnSurfaceDestroyedNative); // 注册OnSurfaceDestroyed回调\n    OH_ArkUI_SurfaceHolder_AddSurfaceCallback(holder, callback);                // 注册SurfaceCallback回调\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过NDK接口来创建组件并使用OH_ArkUI_SurfaceHolder实现对Surface生命周期的管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nexport struct SurfaceHolderNDK {\n  @State currentStatus: string = 'init';\n  private nodeContent: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    nativeNode.createNativeNode(this.nodeContent, 'SurfaceHolderNDK');\n    this.currentStatus = 'index'\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        // ...\n        Column({ space: 10 }) {\n          ContentSlot(this.nodeContent);\n          // ...\n        }\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧createNativeNode可以参照如下代码实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value PluginManager::createNativeNode(napi_env env, napi_callback_info info)\n{\n    // ...\n    ArkUI_NodeContentHandle nodeContentHandle_ = nullptr;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &nodeContentHandle_);\n    nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    std::string tag = value2String(env, args[1]);\n    // ...\n    if (nodeAPI != nullptr && nodeAPI->createNode != nullptr && nodeAPI->addChild != nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"PluginManager\", \"CreateNativeNode tag=%{public}s\",\n                     tag.c_str());\n        auto nodeContentEvent = [](ArkUI_NodeContentEvent *event) {\n          ArkUI_NodeContentHandle handle = OH_ArkUI_NodeContentEvent_GetNodeContentHandle(event);\n          std::string *userData = reinterpret_cast<std::string *>(OH_ArkUI_NodeContent_GetUserData(handle));\n          if (!userData) {\n              return;\n          }\n          if (OH_ArkUI_NodeContentEvent_GetEventType(event) != NODE_CONTENT_EVENT_ON_ATTACH_TO_WINDOW) {\n              return;\n          }\n          ArkUI_NodeHandle testNode;\n          if (userData->find(\"SurfaceHolder\") == std::string::npos) {\n              // ...\n          } else {\n              // 创建XComponent组件并使用SurfaceHolder管理Surface生命周期\n              testNode = CreateNodeHandleUsingSurfaceHolder(*userData);\n          }\n          delete userData;\n          userData = nullptr;\n          OH_ArkUI_NodeContent_AddNode(handle, testNode);\n      };\n        OH_ArkUI_NodeContent_RegisterCallback(nodeContentHandle_, nodeContentEvent);\n    }\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建XComponent组件并使用SurfaceHolder管理Surface生命周期的实现如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeHandle CreateNodeHandleUsingSurfaceHolder(const std::string &tag)\n{\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    // ...\n    xc = nodeAPI->createNode(ARKUI_NODE_XCOMPONENT); // 创建XComponent节点\n    // ...\n    OH_ArkUI_SurfaceHolder *holder = OH_ArkUI_SurfaceHolder_Create(xc); // 获取SurfaceHolder\n    PluginManager::surfaceHolderMap_[xc] = holder;\n    PluginManager::nodeHandleMap_[tag] = xc;\n    auto callback = OH_ArkUI_SurfaceCallback_Create(); // 创建SurfaceCallback\n    PluginManager::callbackMap_[holder] = callback;\n    auto render = new EGLRender();\n    OH_ArkUI_SurfaceHolder_SetUserData(holder, render);                                // 将render保存在holder中\n    OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(callback, OnSurfaceCreatedNative); // 注册OnSurfaceCreated回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(callback, OnSurfaceChangedNative); // 注册OnSurfaceChanged回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(callback, OnSurfaceDestroyedNative); // 注册OnSurfaceDestroyed回调\n    OH_ArkUI_SurfaceHolder_AddSurfaceCallback(holder, callback); // 添加SurfaceCallback回调\n    if (!nodeAPI->addNodeEventReceiver(xc, onEvent)) {           // 添加事件监听，返回成功码 0\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"addNodeEventReceiver error\");\n    }\n    if (!nodeAPI->registerNodeEvent(xc, NODE_TOUCH_EVENT, 0, nullptr)) { // 用C接口注册touch事件，返回成功码 0\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"registerTouchEvent error\");\n    }\n    nodeAPI->addChild(column, xc); // 将XComponent挂载到Column下\n    return column;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh_nativexcomponent向oh_arkui_surfaceholder的迁移",
      children: "OH_NativeXComponent向OH_ArkUI_SurfaceHolder的迁移"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始，开发者可以通过基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例相关的接口进行XComponent组件Surface的生命周期监听、获取NativeWindow实例以及监听基础事件，实现渲染绘制和响应交互功能。但使用OH_NativeXComponent相关的接口存在以下问题："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_NativeXComponent实例生命周期与XComponent组件强相关，开发者如果在XComponent组件销毁后仍然操作该对象将可能出现稳定性问题，造成应用的崩溃。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_NativeXComponent提供的交互事件接口不够丰富，只提供基础的触摸、鼠标、键盘交互接口，开发者若想识别长按、拖拽等高级手势需要自己写识别逻辑。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述问题，建议使用OH_ArkUI_SurfaceHolder相关接口代替OH_NativeXComponent相关接口，以下以使用ArkTS声明式UI描述创建组件为例，介绍如何将使用OH_NativeXComponent管理Surface生命周期切换为使用OH_ArkUI_SurfaceHolder管理Surface生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件创建",
      children: "组件创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件创建过程中的主要差异在于使用OH_NativeXComponent需要传入id和libraryname属性以支持在Native侧获取对应的OH_NativeXComponent实例；而使用OH_ArkUI_SurfaceHolder管理Surface生命周期的XComponent不再需要在XComponent的构造参数中传入id和libraryname属性，而是直接将组件对应的FrameNode节点传递至Native侧进行生命周期绑定和其他设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_NativeXComponent"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XComponent({\n  id: 'xcomponentId',\n  type: XComponentType.SURFACE,\n  libraryname: 'nativerender' // 利用id和libraryname属性在Native侧获取NativeXcomponent并绑定Surface生命周期\n})\n  .onLoad((xComponentContext) => {\n    this.xComponentContext = xComponentContext as XComponentContext;\n    this.currentStatus = 'index';\n  })\n  .onDestroy(() => {\n    console.info('onDestroy');\n  })\n  .id('xcomponent')\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_ArkUI_SurfaceHolder"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XComponent({\n  type: XComponentType.SURFACE,\n})\n  .id('XComponentSurfaceHolder')\n  .onAttach(() => {\n    this.xcNode = this.getUIContext().getAttachedFrameNodeById('XComponentSurfaceHolder');\n    if (!this.xcNode) {\n      return;\n    }\n    native.bindNode('XComponentSurfaceHolder', this.xcNode); // 跨语言调用至Native侧获取SurfaceHolder并绑定Surface生命周期回调\n    this.currentStatus = 'index';\n  })\n  .onDetach(() => {\n    native.unbindNode('XComponentSurfaceHolder');\n    this.xcNode = null;\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绑定surface生命周期",
      children: "绑定Surface生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定Surface生命周期中的主要差异在于注册生命周期回调的接口不同，具体回调内执行的逻辑基本保持不变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_NativeXComponent"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PluginManager::Export(napi_env env, napi_value exports)\n{\n    if ((env == nullptr) || (exports == nullptr)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"PluginManager\", \"Export: env or exports is null\");\n        return;\n    }\n\n    napi_value exportInstance = nullptr;\n    // 利用OH_NATIVE_XCOMPONENT_OBJ字段获取NativeXComponent实例\n    if (napi_get_named_property(env, exports, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance) != napi_ok) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"PluginManager\", \"Export: napi_get_named_property fail\");\n        return;\n    }\n\n    OH_NativeXComponent *nativeXComponent = nullptr;\n    if (napi_unwrap(env, exportInstance, reinterpret_cast<void **>(&nativeXComponent)) != napi_ok) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"PluginManager\", \"Export: napi_unwrap fail\");\n        return;\n    }\n\n    char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\\0'};\n    uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;\n    // 从NativeXComponent实例中获取id属性用来和ArkTS侧的XComponent组件一一对应\n    if (OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"PluginManager\",\n                     \"Export: OH_NativeXComponent_GetXComponentId fail\");\n        return;\n    }\n\n    std::string id(idStr);\n    auto context = PluginManager::GetInstance();\n    if ((context != nullptr) && (nativeXComponent != nullptr)) {\n        context->SetNativeXComponent(id, nativeXComponent);\n        auto render = context->GetRender(id);\n        if (render != nullptr) {\n            // 注册Surface生命周期\n            render->RegisterCallback(nativeXComponent);\n            render->Export(env, exports);\n        }\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册Surface生命周期。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PluginRender::RegisterCallback(OH_NativeXComponent* nativeXComponent)\n{\n    renderCallback_.OnSurfaceCreated = OnSurfaceCreatedCB;\n    renderCallback_.OnSurfaceChanged = OnSurfaceChangedCB;\n    renderCallback_.OnSurfaceDestroyed = OnSurfaceDestroyedCB;\n    // ...\n    OH_NativeXComponent_RegisterCallback(nativeXComponent, &renderCallback_);\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_ArkUI_SurfaceHolder"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value PluginManager::BindNode(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    ArkUI_NodeHandle handle;\n    OH_ArkUI_GetNodeHandleFromNapiValue(env, args[1], &handle);             // 获取nodeHandle\n    OH_ArkUI_SurfaceHolder *holder = OH_ArkUI_SurfaceHolder_Create(handle); // 获取SurfaceHolder\n    nodeHandleMap_[nodeId] = handle;\n    surfaceHolderMap_[handle] = holder;\n    auto callback = OH_ArkUI_SurfaceCallback_Create(); // 创建SurfaceCallback\n    callbackMap_[holder] = callback;\n    auto render = new EGLRender();\n    OH_ArkUI_SurfaceHolder_SetUserData(holder, render);                                // 将render保存在holder中\n    OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(callback, OnSurfaceCreatedNative); // 注册OnSurfaceCreated回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(callback, OnSurfaceChangedNative); // 注册OnSurfaceChanged回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(callback, OnSurfaceDestroyedNative); // 注册OnSurfaceDestroyed回调\n    OH_ArkUI_SurfaceHolder_AddSurfaceCallback(holder, callback);                // 注册SurfaceCallback回调\n    // ...\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取nativewindow方式",
      children: "获取NativeWindow方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NativeWindow方式的差异如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_NativeXComponent"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在OnSurfaceCreated等生命周期回调返回的参数(即下面的void *window)中获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void OnSurfaceCreatedCB(OH_NativeXComponent *component, void *window)\n{\n    // ...\n}\nvoid OnSurfaceChangedCB(OH_NativeXComponent *component, void *window)\n{\n    // ...\n}\nvoid OnSurfaceDestroyedCB(OH_NativeXComponent *component, void *window)\n{\n    // ...\n}\nvoid DispatchTouchEventCB(OH_NativeXComponent *component, void *window)\n{\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_ArkUI_SurfaceHolder"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_ArkUI_XComponent_GetNativeWindow接口从OH_ArkUI_SurfaceHolder中获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void OnSurfaceCreatedNative(OH_ArkUI_SurfaceHolder *holder)\n{\n    auto window = OH_ArkUI_XComponent_GetNativeWindow(holder); // 获取native window\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听交互事件",
      children: "监听交互事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_NativeXComponent方式进行交互事件的监听，只能使用OH_NativeXComponent上相关的接口监听触摸、鼠标、按键等基础事件。而使用OH_ArkUI_SurfaceHolder相关的接口，除监听基础事件外还能监听长按、拖拽等高级手势。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_NativeXComponent"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "renderCallback_.DispatchTouchEvent = DispatchTouchEventCB; // 注册触摸事件\nOH_NativeXComponent_RegisterCallback(nativeXComponent, &renderCallback_);\nmouseCallback_.DispatchMouseEvent = DispatchMouseEventCB;\nmouseCallback_.DispatchHoverEvent = DispatchHoverEventCB;\nOH_NativeXComponent_RegisterMouseEventCallback(nativeXComponent, &mouseCallback_); // 注册鼠标事件\n\nOH_NativeXComponent_RegisterFocusEventCallback(nativeXComponent, OnFocusEventCB); // 注册获焦事件\nOH_NativeXComponent_RegisterKeyEventCallback(nativeXComponent, OnKeyEventCB);  // 注册按键事件\nOH_NativeXComponent_RegisterBlurEventCallback(nativeXComponent, OnBlurEventCB); // 注册失焦事件\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_ArkUI_SurfaceHolder"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下只以注册touch事件为例，鼠标、按键以及更多的手势请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events",
            children: "监听组件事件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (!nodeAPI->addNodeEventReceiver(handle, onEvent)) { // 添加事件监听，返回成功码 0\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"addNodeEventReceiver error\");\n}\nif (!nodeAPI->registerNodeEvent(handle, NODE_TOUCH_EVENT, 0, nullptr)) { // 用C接口注册touch事件，返回成功码 0\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"registerTouchEvent error\");\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在native侧使用nativewindow进行渲染绘制",
      children: "在Native侧使用NativeWindow进行渲染绘制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下展示完整使用NativeWindow和EGL接口进行自绘制的示例，主要开发场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在ArkTS侧创建的XComponent组件可以将其对应的FrameNode节点传递到Native侧以获取ArkUI_NodeHandle，或者在Native侧直接创建XComponent组件对应的ArkUI_NodeHandle，然后调用OH_ArkUI_SurfaceHolder_Create接口创建OH_ArkUI_SurfaceHolder实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于OH_ArkUI_SurfaceHolder实例注册相应的生命周期回调，获取NativeWindow实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "利用NativeWindow和EGL接口开发自定义绘制内容，并申请提交Buffer到图形队列。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XComponent组件相关的无障碍、可变帧率等能力根据ArkUI_NodeHandle通过相关接口来实现。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["XComponent组件上的基础事件（如点击、触摸）和手势事件（如滑动、缩放）可通过ArkUI_NodeHandle对象使用ArkUI NDK接口来监听，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events",
          children: "监听组件事件"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_ArkUI_QueryModuleInterfaceByName(ArkUI_NativeAPIVariantKind type, const char* structName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定类型的Native模块接口集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_XComponent_GetNativeWindow(OH_ArkUI_SurfaceHolder* surfaceHolder)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与OH_ArkUI_SurfaceHolder实例关联的nativeWindow。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceHolder_RemoveSurfaceCallback(OH_ArkUI_SurfaceHolder* surfaceHolder, OH_ArkUI_SurfaceCallback* callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OH_ArkUI_SurfaceHolder实例中移除先前添加的Surface生命周期回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_Dispose(OH_ArkUI_SurfaceCallback* callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_ArkUI_SurfaceCallback对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceHolder_Dispose(OH_ArkUI_SurfaceHolder* surfaceHolder)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_ArkUI_SurfaceHolder对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_NodeEvent_GetEventType(ArkUI_NodeEvent* event)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从组件事件获取事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_NodeEvent_GetNodeHandle(ArkUI_NodeEvent* event)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触发组件事件的组件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_GetNodeHandleFromNapiValue(napi_env env, napi_value frameNode, ArkUI_NodeHandle* handle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS侧创建的FrameNode节点对象映射到Native侧的ArkUI_NodeHandle。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceHolder_Create(ArkUI_NodeHandle node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从XComponent节点创建一个OH_ArkUI_SurfaceHolder对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个OH_ArkUI_SurfaceCallback对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceCreated)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往OH_ArkUI_SurfaceCallback对象中注册onSurfaceCreated回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceChanged)(OH_ArkUI_SurfaceHolder* surfaceHolder, uint64_t width, uint64_t height))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往OH_ArkUI_SurfaceCallback对象中注册onSurfaceChanged回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceDestroyed)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往OH_ArkUI_SurfaceCallback对象中注册onSurfaceDestroyed回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_SetSurfaceShowEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceShow)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往OH_ArkUI_SurfaceCallback对象中注册onSurfaceShow回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback_SetSurfaceHideEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceHide)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往OH_ArkUI_SurfaceCallback对象中注册onSurfaceHide回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_XComponent_RegisterOnFrameCallback(ArkUI_NodeHandle node, void (*callback)(ArkUI_NodeHandle node, uint64_t timestamp, uint64_t targetTimestamp))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为XComponent节点注册onFrame回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceHolder_AddSurfaceCallback(OH_ArkUI_SurfaceHolder* surfaceHolder, OH_ArkUI_SurfaceCallback* callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往OH_ArkUI_SurfaceHolder实例注册OH_ArkUI_SurfaceCallback对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_AccessibilityProvider_Create(ArkUI_NodeHandle node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从XComponent节点创建一个ArkUI_AccessibilityProvider对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_XComponent_UnregisterOnFrameCallback(ArkUI_NodeHandle node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册XComponent节点的onFrame回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_AccessibilityProvider_Dispose(ArkUI_AccessibilityProvider* provider)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放ArkUI_AccessibilityProvider对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_XComponent_SetExpectedFrameRateRange(ArkUI_NodeHandle node, OH_NativeXComponent_ExpectedRateRange range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为XComponent节点设置预期的帧率范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_XComponent_SetNeedSoftKeyboard(ArkUI_NodeHandle node, bool needSoftKeyboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置XComponent节点在获得焦点时是否需要显示软键盘。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下步骤通过在ArkTS侧创建SURFACE类型的XComponent为例（Native侧如何创建XComponent组件对应的ArkUI_NodeHandle可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1",
        children: "ArkUI_NativeNodeAPI_1"
      }), "），描述了如何使用XComponent组件调用OH_ArkUI_SurfaceHolder相关接口管理Surface生命周期，并在Native侧创建EGL/GLES环境，实现在主页面绘制图形，以及可以改变图形的颜色。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在界面中定义XComponent。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import native from 'libnativerender.so';\nimport { common } from '@kit.AbilityKit';\n// ...\n@Component\nexport struct PageThree {\n  @State isShow: boolean = true;\n  @State minRate: number = 0;\n  @State maxRate: number = 120;\n  @State expected: number = 60;\n  needSoftKeyboard: boolean = false;\n  @State needSoftKeyboardState: string = 'needSoftKeyboard=' + this.needSoftKeyboard;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 请将$r('app.string.pagethree_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"单指点击XComponent软键盘消失\"\n  @State text: ResourceStr = $r('app.string.pagethree_text1');\n  controller: TextInputController = new TextInputController();\n  myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    NavDestination() {\n    Column() {\n      TextInput({ text: this.text, placeholder: 'please input ...', controller: this.controller })\n        .id('textInput')\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .caretColor(Color.Blue)\n        .width(400)\n        .height(40)\n        .margin(10)\n        .fontSize(14)\n        .fontColor(Color.Black)\n        .onChange((value: string) => {\n          this.text = value\n        })\n      Column() {\n        if (this.isShow) {\n          NodeContainer(this.myNodeController)\n            .width(200)\n            .height(200)\n            .focusable(true)\n            .focusOnTouch(true)\n            .defaultFocus(true)\n        }\n      }.height(200)\n\n      // 请将$r('app.string.pagethree_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"创建/销毁\"\n      Button($r('app.string.pagethree_text2')).onClick(() => {\n        this.isShow = !this.isShow;\n      }).width('50%')\n        .margin({\n          top: 10,\n          bottom: 10,\n          left: 12,\n          right: 12\n        })\n\n      Column() {\n        // 请将$r('app.string.pagethree_text3')替换为实际资源文件，在本示例中该资源文件的value值为\"期望帧率设置：\"\n        Text($r('app.string.pagethree_text3'))\n          .textAlign(TextAlign.Start)\n          .fontSize(15)\n          .border({ width: 1 })\n          .padding(10)\n          .width('100%')\n          .margin(5)\n        Text('min: ' + this.minRate)\n        Slider({\n          value: this.minRate,\n          min: 0,\n          max: 240,\n          step: 1\n        }).onChange((value: number, mode: SliderChangeMode) => {\n          this.minRate = value;\n          native.setFrameRate(this.myNodeController.xComponentId, this.minRate, this.maxRate, this.expected)\n        }).width('100%')\n          .id('minSlider')\n        Text('max: ' + this.maxRate)\n        Slider({\n          value: this.maxRate,\n          min: 0,\n          max: 240,\n          step: 1\n        }).onChange((value: number, mode: SliderChangeMode) => {\n          this.maxRate = value;\n          native.setFrameRate(this.myNodeController.xComponentId, this.minRate, this.maxRate, this.expected)\n        }).width('100%')\n          .id('maxSlider')\n        Text('expected: ' + this.expected)\n        Slider({\n          value: this.expected,\n          min: 0,\n          max: 240,\n          step: 1\n        }).onChange((value: number, mode: SliderChangeMode) => {\n          this.expected = value;\n          native.setFrameRate(this.myNodeController.xComponentId, this.minRate, this.maxRate, this.expected)\n        }).width('100%')\n          .id('expectedSlider')\n      }.backgroundColor('#F0FAFF')\n\n      Button(this.needSoftKeyboardState)\n        .onClick(() => {\n          this.needSoftKeyboard = !this.needSoftKeyboard;\n          this.needSoftKeyboardState = 'needSoftKeyboard=' + this.needSoftKeyboard;\n          native.setNeedSoftKeyboard(this.myNodeController.xComponentId, this.needSoftKeyboard);\n          // 请将$r('app.string.pagethree_text4')替换为实际资源文件，在本示例中该资源文件的value值为\"单指点击XComponent软键盘不消失\"\n          // 请将$r('app.string.pagethree_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"单指点击XComponent软键盘消失\"\n          this.text = this.needSoftKeyboard ? $r('app.string.pagethree_text4') : $r('app.string.pagethree_text1')\n        })\n        .width('50%')\n        .margin({\n          top: 10,\n          bottom: 10,\n          left: 12,\n          right: 12\n        })\n      // ...\n    }\n    .width('100%')\n  }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Node-API模块注册，具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-guidelines",
            children: "Node-API开发规范"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <hilog/log.h>\n\n#include \"common/common.h\"\n#include \"manager/plugin_manager.h\"\n\nnamespace NativeXComponentSample {\n// 在napi_init.cpp文件中，Init方法注册接口函数，从而将封装的C++方法传递出来，供ArkTS侧调用\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Init\", \"Init begins\");\n    if ((env == nullptr) || (exports == nullptr)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"Init\", \"env or exports is null\");\n        return nullptr;\n    }\n    // 向ArkTS侧暴露接口\n    napi_property_descriptor desc[] = {\n        // ···\n        {\"bindNode\", nullptr, PluginManager::BindNode, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"unbindNode\", nullptr, PluginManager::UnbindNode, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"setFrameRate\", nullptr, PluginManager::SetFrameRate, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"setNeedSoftKeyboard\", nullptr, PluginManager::SetNeedSoftKeyboard, nullptr, nullptr, nullptr, napi_default,\n        nullptr},\n        // ···\n    };\n    if (napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc) != napi_ok) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"Init\", \"napi_define_properties failed\");\n        return nullptr;\n    }\n    PluginManager::GetInstance()->Export(env, exports);\n    return exports;\n}\nEXTERN_C_END\n\n// 编写接口的描述信息，根据实际需要可以修改对应参数\nstatic napi_module nativerenderModule = { .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    // 入口函数\n    .nm_register_func = Init, // 指定加载对应模块时的回调函数\n    // 模块名称\n    .nm_modname = \"nativerender\", // 指定模块名称，对于XComponent相关开发，这个名称必须和ArkTS侧XComponent中libraryname的值保持一致\n    .nm_priv = ((void*)0),\n    .reserved = { 0 } };\n\n// __attribute__((constructor))修饰的方法由系统自动调用，使用Node-API接口napi_module_register()传入模块描述信息进行模块注册\nextern \"C\" __attribute__((constructor)) void RegisterModule(void)\n{\n    napi_module_register(&nativerenderModule);\n}\n} // namespace NativeXComponentSample\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册XComponent生命周期、事件、无障碍和可变帧率回调，使用CAPI实现往XComponent注册回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 定义BindNode、UnbindNode、SetFrameRate、SetNeedSoftKeyboard方法，暴露到ArkTS侧的bindNode、unbindNode、setFrameRate、setNeedSoftKeyboard方法会执行该方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// plugin_manager.h\nnamespace NativeXComponentSample {\n// ···\nclass PluginManager {\npublic:\n    // ···\n    static napi_value BindNode(napi_env env, napi_callback_info info);\n    static napi_value UnbindNode(napi_env env, napi_callback_info info);\n    static napi_value SetFrameRate(napi_env env, napi_callback_info info);\n    static napi_value SetNeedSoftKeyboard(napi_env env, napi_callback_info info);\n    // ···\n\npublic:\n    // ···\n    static std::unordered_map<std::string, ArkUI_NodeHandle> nodeHandleMap_;\n    static std::unordered_map<void *, OH_ArkUI_SurfaceCallback *> callbackMap_;\n    static std::unordered_map<void *, OH_ArkUI_SurfaceHolder *> surfaceHolderMap_;\n    static ArkUI_AccessibilityProvider *provider_;\n};\n} // namespace NativeXComponentSample\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// plugin_manager.cpp\nstd::unordered_map<std::string, ArkUI_NodeHandle> PluginManager::nodeHandleMap_;\nstd::unordered_map<void *, OH_ArkUI_SurfaceCallback *> PluginManager::callbackMap_;\nstd::unordered_map<void *, OH_ArkUI_SurfaceHolder *> PluginManager::surfaceHolderMap_;\nArkUI_AccessibilityProvider *PluginManager::provider_ = nullptr;\nArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n// ···\nstatic std::string value2String(napi_env env, napi_value value)\n{\n    size_t stringSize = 0;\n    napi_get_value_string_utf8(env, value, nullptr, 0, &stringSize);\n    std::string valueString;\n    valueString.resize(stringSize);\n    napi_get_value_string_utf8(env, value, &valueString[0], stringSize+1, &stringSize);\n    return valueString;\n}\n// ···\nnapi_value PluginManager::BindNode(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    ArkUI_NodeHandle handle;\n    OH_ArkUI_GetNodeHandleFromNapiValue(env, args[1], &handle);             // 获取nodeHandle\n    OH_ArkUI_SurfaceHolder *holder = OH_ArkUI_SurfaceHolder_Create(handle); // 获取SurfaceHolder\n    nodeHandleMap_[nodeId] = handle;\n    surfaceHolderMap_[handle] = holder;\n    auto callback = OH_ArkUI_SurfaceCallback_Create(); // 创建SurfaceCallback\n    callbackMap_[holder] = callback;\n    auto render = new EGLRender();\n    OH_ArkUI_SurfaceHolder_SetUserData(holder, render); // 将render保存在holder中\n    OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(callback, OnSurfaceCreatedNative);     // 注册OnSurfaceCreated回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(callback, OnSurfaceChangedNative);     // 注册OnSurfaceChanged回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(callback, OnSurfaceDestroyedNative); // 注册OnSurfaceDestroyed回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceShowEvent(callback, OnSurfaceShowNative);           // 注册OnSurfaceShow回调\n    OH_ArkUI_SurfaceCallback_SetSurfaceHideEvent(callback, OnSurfaceHideNative);           // 注册OnSurfaceHide回调\n    OH_ArkUI_XComponent_RegisterOnFrameCallback(handle, OnFrameCallbackNative);            // 注册OnFrameCallback回调\n    OH_ArkUI_SurfaceHolder_AddSurfaceCallback(holder, callback);                     // 注册SurfaceCallback回调\n    if (!nodeAPI->addNodeEventReceiver(handle, onEvent)) { // 添加事件监听，返回成功码 0\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"addNodeEventReceiver error\");\n    }\n    if (!nodeAPI->registerNodeEvent(handle, NODE_TOUCH_EVENT, 0, nullptr)) { // 用C接口注册touch事件，返回成功码 0\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"registerTouchEvent error\");\n    }\n    provider_ = OH_ArkUI_AccessibilityProvider_Create(handle); // 创建一个ArkUI_AccessibilityProvider类型的对象\n    /**\n     * 获取ArkUI_AccessibilityProvider后，如果注册无障碍回调函数请参考：\n     * https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/ui/ndk-accessibility-xcomponent.md\n     * **/\n    return nullptr;\n}\n\nnapi_value PluginManager::UnbindNode(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    ArkUI_NodeHandle node;\n    if (nodeHandleMap_.find(nodeId) == nodeHandleMap_.end()) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"SetNeedSoftKeyboard\", \"nodeId not exit error\");\n        return nullptr;\n    }\n    node = nodeHandleMap_[nodeId];\n    OH_ArkUI_XComponent_UnregisterOnFrameCallback(node); // 解注册帧回调\n    OH_ArkUI_AccessibilityProvider_Dispose(provider_);   // 销毁ArkUI_AccessibilityProvider\n    auto holder = surfaceHolderMap_[node];\n    if (PluginManager::callbackMap_.count(holder)) {\n        auto callback = PluginManager::callbackMap_[holder];\n        OH_ArkUI_SurfaceHolder_RemoveSurfaceCallback(holder, callback); // 移除SurfaceCallback\n        OH_ArkUI_SurfaceCallback_Dispose(callback);                     // 销毁surfaceCallback\n        PluginManager::callbackMap_.erase(holder);\n    }\n    auto render = reinterpret_cast<EGLRender*>(OH_ArkUI_SurfaceHolder_GetUserData(holder));\n    delete render; // 销毁EGLRender对象\n    OH_ArkUI_SurfaceHolder_Dispose(holder); // 销毁surfaceHolder\n    nodeAPI->disposeNode(node);             // 销毁nodeHandle\n    nodeHandleMap_.erase(nodeId);\n    return nullptr;\n}\n\nnapi_value PluginManager::SetFrameRate(napi_env env, napi_callback_info info)\n{\n    size_t argc = 4;\n    napi_value args[4] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    auto node = nodeHandleMap_[nodeId];\n\n    int32_t min = 0;\n    napi_get_value_int32(env, args[FIRST_ARG], &min);\n\n    int32_t max = 0;\n    napi_get_value_int32(env, args[SECOND_ARG], &max);\n\n    int32_t expected = 0;\n    napi_get_value_int32(env, args[THIRD_ARG], &expected);\n    OH_NativeXComponent_ExpectedRateRange range = {.min = min, .max = max, .expected = expected};\n    OH_ArkUI_XComponent_SetExpectedFrameRateRange(node, range); // 设置期望帧率\n    return nullptr;\n}\n\nnapi_value PluginManager::SetNeedSoftKeyboard(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    std::string nodeId = value2String(env, args[0]);\n    ArkUI_NodeHandle node;\n    if (nodeHandleMap_.find(nodeId) == nodeHandleMap_.end()) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"SetNeedSoftKeyboard\", \"nodeId not exit error\");\n        return nullptr;\n    }\n    node = nodeHandleMap_[nodeId];\n\n    bool needSoftKeyboard = false;\n    napi_get_value_bool(env, args[1], &needSoftKeyboard);\n    OH_ArkUI_XComponent_SetNeedSoftKeyboard(node, needSoftKeyboard); // 设置是否需要软键盘\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 定义Surface创建成功，发生改变，销毁和事件，可变帧率回调接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void OnSurfaceCreatedNative(OH_ArkUI_SurfaceHolder *holder)\n{\n    auto window = OH_ArkUI_XComponent_GetNativeWindow(holder); // 获取native window\n    auto render = reinterpret_cast<EGLRender*>(OH_ArkUI_SurfaceHolder_GetUserData(holder));\n    render->SetUpEGLContext(window); // 初始化egl环境\n}\n\nvoid OnSurfaceChangedNative(OH_ArkUI_SurfaceHolder *holder, uint64_t width, uint64_t height)\n{\n    EGLRender* render = reinterpret_cast<EGLRender*>(OH_ArkUI_SurfaceHolder_GetUserData(holder));\n    render->SetEGLWindowSize(width, height); // 设置绘制区域大小\n    render->DrawStar(true);                  // 绘制五角星\n}\n\nvoid OnSurfaceDestroyedNative(OH_ArkUI_SurfaceHolder *holder)\n{\n    OH_LOG_Print(LOG_APP, LOG_ERROR, 0xff00, \"onBind\", \"on destroyed\");\n    EGLRender* render = reinterpret_cast<EGLRender*>(OH_ArkUI_SurfaceHolder_GetUserData(holder));\n    render->DestroySurface();  // 销毁eglSurface相关资源\n}\n\nvoid OnSurfaceShowNative(OH_ArkUI_SurfaceHolder *holder)\n{\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"on surface show\");\n}\n\nvoid OnSurfaceHideNative(OH_ArkUI_SurfaceHolder *holder)\n{\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"on surface hide\");\n}\n\nvoid OnFrameCallbackNative(ArkUI_NodeHandle node, uint64_t timestamp, uint64_t targetTimestamp)\n{\n    if (!PluginManager::surfaceHolderMap_.count(node)) {\n        return;\n    }\n    static uint64_t count = 0;\n    count++;\n    // 在头文件plugin_manager.h中定义，FRAME_COUNT的值为50\n    if (count % FRAME_COUNT == 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"OnFrameCallback count = %{public}ld\", count);\n    }\n}\n\nvoid onEvent(ArkUI_NodeEvent *event)\n{\n    auto eventType = OH_ArkUI_NodeEvent_GetEventType(event); // 获取组件事件类型\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"on event\");\n    if (eventType == NODE_TOUCH_EVENT) {\n        ArkUI_NodeHandle handle = OH_ArkUI_NodeEvent_GetNodeHandle(event); // 获取触发该事件的组件对象\n        auto holder = PluginManager::surfaceHolderMap_[handle];\n        EGLRender* render = reinterpret_cast<EGLRender*>(OH_ArkUI_SurfaceHolder_GetUserData(holder));\n        render->DrawStar(false); // 绘制五角星\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"onBind\", \"on touch\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化环境，包括初始化可用的EGLDisplay、确定可用的Surface配置、创建渲染区域Surface、创建并关联上下文等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EGLConst.h\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <GLES3/gl3.h>\n\nconst unsigned int LOG_PRINT_DOMAIN = 0xFF00;\n\n/**\n * Program 错误\n */\nconst GLuint PROGRAM_ERROR = 0;\n\n/**\n * 位置错误。\n */\nconst GLint POSITION_ERROR = -1;\n\n/**\n * 默认x坐标。\n */\nconst int DEFAULT_X_POSITION = 0;\n\n/**\n * 默认y坐标。\n */\nconst int DEFAULT_Y_POSITION = 0;\n\n/**\n * Gl 红色默认值。\n */\nconst GLfloat GL_RED_DEFAULT = 0.0;\n\n/**\n * Gl 绿色默认值。\n */\nconst GLfloat GL_GREEN_DEFAULT = 0.0;\n\n/**\n * Gl 蓝色默认值。\n */\nconst GLfloat GL_BLUE_DEFAULT = 0.0;\n\n/**\n * Gl 透明度。\n */\nconst GLfloat GL_ALPHA_DEFAULT = 1.0;\n\n/**\n * Pointer 数量。\n */\nconst GLint POINTER_SIZE = 2;\n\n/**\n * Triangle fan 尺寸。\n */\nconst GLsizei TRIANGLE_FAN_SIZE = 4;\n\n/**\n * 50%。\n */\nconst float FIFTY_PERCENT = 0.5;\n\n/**\n * 位置句柄名字。\n */\nconst char POSITION_NAME[] = \"a_position\";\n\n// ···\n\n/**\n * 背景色 #f4f4f4.\n */\nconst GLfloat BACKGROUND_COLOR[] = {244.0f / 255, 244.0f / 255, 244.0f / 255, 1.0f};\n\n// ···\n\n/**\n * Draw 颜色 #7E8FFB.\n */\nconst GLfloat DRAW_COLOR[] = {126.0f / 255, 143.0f / 255, 251.0f / 255, 1.0f};\n\n/**\n * Change 颜色 #92D6CC.\n */\nconst GLfloat CHANGE_COLOR[] = {146.0f / 255, 214.0f / 255, 204.0f / 255, 1.0f};\n\n/**\n * 背景区域。\n */\nconst GLfloat BACKGROUND_RECTANGLE_VERTICES[] = {-1.0f, 1.0f, 1.0f, 1.0f, 1.0f, -1.0f, -1.0f, -1.0f};\n\nconst EGLint ATTRIB_LIST[] = {\n    // 键，值。\n    EGL_SURFACE_TYPE, EGL_WINDOW_BIT, EGL_RED_SIZE, 8, EGL_GREEN_SIZE, 8, EGL_BLUE_SIZE, 8, EGL_ALPHA_SIZE, 8,\n    EGL_RENDERABLE_TYPE, EGL_OPENGL_ES2_BIT,\n    // 结束。\n    EGL_NONE};\n\nconst EGLint CONTEXT_ATTRIBS[] = {EGL_CONTEXT_CLIENT_VERSION, 2, EGL_NONE};\n\n/**\n * 顶点着色器\n */\nconst char VERTEX_SHADER[] = \"#version 300 es\\n\"\n                            \"layout(location = 0) in vec4 a_position;\\n\"\n                            \"layout(location = 1) in vec4 a_color;   \\n\"\n                            \"out vec4 v_color;                       \\n\"\n                            \"void main()                             \\n\"\n                            \"{                                       \\n\"\n                            \"   gl_Position = a_position;            \\n\"\n                            \"   v_color = a_color;                   \\n\"\n                            \"}                                       \\n\";\n\n/**\n * 片元着色器。\n */\nconst char FRAGMENT_SHADER[] = \"#version 300 es\\n\"\n                            \"precision mediump float;                  \\n\"\n                            \"in vec4 v_color;                          \\n\"\n                            \"out vec4 fragColor;                       \\n\"\n                            \"void main()                               \\n\"\n                            \"{                                         \\n\"\n                            \"   fragColor = v_color;                   \\n\"\n                            \"}                                         \\n\";\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EGLRender.h\n#include \"EGLConst.h\"\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <EGL/eglplatform.h>\n#include <GLES3/gl3.h>\n#include <string>\n\nclass EGLRender {\npublic:\n    bool SetUpEGLContext(void *window);\n    void SetEGLWindowSize(int width, int height);\n    void DrawStar(bool drawColor);\n    void DestroySurface();\n    // ···\n\n    std::string xcomponentId;\n    EGLNativeWindowType eglWindow_;\n\n    EGLDisplay eglDisplay_ = EGL_NO_DISPLAY;\n    EGLConfig eglConfig_ = EGL_NO_CONFIG_KHR;\n    EGLSurface eglSurface_ = EGL_NO_SURFACE;\n    EGLContext eglContext_ = EGL_NO_CONTEXT;\n    GLuint program_;\n    int width_ = 0;\n    int height_ = 0;\n\nprivate:\n    GLint PrepareDraw();\n    bool ExecuteDraw(GLint position, const GLfloat *color, const GLfloat shapeVertices[]);\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EGLRender.cpp\n#include \"EGLRender.h\"\n#include \"EGLConst.h\"\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <GLES3/gl3.h>\n#include <cmath>\n#include <cstdio>\n#include <algorithm>\n#include <hilog/log.h>\n#include <iostream>\n\nnamespace {\nvoid Rotate2d(GLfloat centerX, GLfloat centerY, GLfloat *rotateX, GLfloat *rotateY, GLfloat theta)\n{\n    GLfloat tempX = cos(theta) * (*rotateX - centerX) - sin(theta) * (*rotateY - centerY);\n    GLfloat tempY = sin(theta) * (*rotateX - centerX) + cos(theta) * (*rotateY - centerY);\n    *rotateX = tempX + centerX;\n    *rotateY = tempY + centerY;\n}\n\nGLuint LoadShader(GLenum type, const char *shaderSrc)\n{\n    if ((type <= 0) || (shaderSrc == nullptr)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"glCreateShader type or shaderSrc error\");\n        return PROGRAM_ERROR;\n    }\n\n    GLuint shader = glCreateShader(type);\n    if (shader == 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"glCreateShader unable to load shader\");\n        return PROGRAM_ERROR;\n    }\n\n    // The gl function has no return value.\n    glShaderSource(shader, 1, &shaderSrc, nullptr);\n    glCompileShader(shader);\n\n    GLint compiled;\n    glGetShaderiv(shader, GL_COMPILE_STATUS, &compiled);\n    if (compiled != 0) {\n        return shader;\n    }\n\n    GLint infoLen = 0;\n    glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &infoLen);\n    if (infoLen <= 1) {\n        glDeleteShader(shader);\n        return PROGRAM_ERROR;\n    }\n\n    char *infoLog = (char *)malloc(sizeof(char) * (infoLen + 1));\n    if (infoLog != nullptr) {\n        memset(infoLog, 0, infoLen + 1);\n        glGetShaderInfoLog(shader, infoLen, nullptr, infoLog);\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"glCompileShader error = %s\", infoLog);\n        free(infoLog);\n        infoLog = nullptr;\n    }\n    glDeleteShader(shader);\n    return PROGRAM_ERROR;\n}\n\n// 创建program\nGLuint CreateProgram(const char *vertexShader, const char *fragShader)\n{\n    if ((vertexShader == nullptr) || (fragShader == nullptr)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\",\n                     \"createProgram: vertexShader or fragShader is null\");\n        return PROGRAM_ERROR;\n    }\n\n    GLuint vertex = LoadShader(GL_VERTEX_SHADER, vertexShader);\n    if (vertex == PROGRAM_ERROR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"createProgram vertex error\");\n        return PROGRAM_ERROR;\n    }\n\n    GLuint fragment = LoadShader(GL_FRAGMENT_SHADER, fragShader);\n    if (fragment == PROGRAM_ERROR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"createProgram fragment error\");\n        return PROGRAM_ERROR;\n    }\n\n    GLuint program = glCreateProgram();\n    if (program == PROGRAM_ERROR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"createProgram program error\");\n        glDeleteShader(vertex);\n        glDeleteShader(fragment);\n        return PROGRAM_ERROR;\n    }\n\n    // 该gl函数没有返回值。\n    glAttachShader(program, vertex);\n    glAttachShader(program, fragment);\n    glLinkProgram(program);\n\n    GLint linked;\n    glGetProgramiv(program, GL_LINK_STATUS, &linked);\n    if (linked != 0) {\n        glDeleteShader(vertex);\n        glDeleteShader(fragment);\n        return program;\n    }\n\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"createProgram linked error\");\n    GLint infoLen = 0;\n    glGetProgramiv(program, GL_INFO_LOG_LENGTH, &infoLen);\n    if (infoLen > 1) {\n        char *infoLog = (char *)malloc(sizeof(char) * (infoLen + 1));\n        memset(infoLog, 0, infoLen + 1);\n        glGetProgramInfoLog(program, infoLen, nullptr, infoLog);\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"glLinkProgram error = %s\", infoLog);\n        free(infoLog);\n        infoLog = nullptr;\n    }\n    glDeleteShader(vertex);\n    glDeleteShader(fragment);\n    glDeleteProgram(program);\n    return PROGRAM_ERROR;\n}\n} // namespace\n\nbool EGLRender::SetUpEGLContext(void *window)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"EGLRender\", \"EglContextInit execute\");\n    eglWindow_ = (EGLNativeWindowType)(window);\n    // 初始化display。\n    eglDisplay_ = eglGetDisplay(EGL_DEFAULT_DISPLAY);\n    if (eglDisplay_ == EGL_NO_DISPLAY) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"eglGetDisplay: unable to get EGL display\");\n        return false;\n    }\n    EGLint majorVersion;\n    EGLint minorVersion;\n    if (!eglInitialize(eglDisplay_, &majorVersion, &minorVersion)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\",\n                     \"eglInitialize: unable to get initialize EGL display\");\n        return false;\n    };\n    // 选择配置。\n    const EGLint maxConfigSize = 1;\n    EGLint numConfigs;\n    if (!eglChooseConfig(eglDisplay_, ATTRIB_LIST, &eglConfig_, maxConfigSize, &numConfigs)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"eglChooseConfig: unable to choose configs\");\n        return false;\n    };\n    // 创建环境。\n    // 创建 Surface。\n    eglSurface_ = eglCreateWindowSurface(eglDisplay_, eglConfig_, eglWindow_, NULL);\n    if (eglSurface_ == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\",\n                     \"eglCreateWindowSurface: unable to create surface\");\n        return false;\n    }\n    if (eglSurface_ == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\",\n                     \"eglCreateWindowSurface: unable to create surface\");\n        return false;\n    }\n    // 创建上下文。\n    eglContext_ = eglCreateContext(eglDisplay_, eglConfig_, EGL_NO_CONTEXT, CONTEXT_ATTRIBS);\n    if (!eglMakeCurrent(eglDisplay_, eglSurface_, eglSurface_, eglContext_)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"eglMakeCurrent failed\");\n        return false;\n    }\n    // 创建program。\n    program_ = CreateProgram(VERTEX_SHADER, FRAGMENT_SHADER);\n    if (program_ == PROGRAM_ERROR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"CreateProgram: unable to create program\");\n        return false;\n    }\n    return true;\n}\n\nGLint EGLRender::PrepareDraw()\n{\n    if ((eglDisplay_ == nullptr) || (eglSurface_ == nullptr) || (eglContext_ == nullptr) ||\n        (!eglMakeCurrent(eglDisplay_, eglSurface_, eglSurface_, eglContext_))) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"PrepareDraw: param error\");\n        return POSITION_ERROR;\n    }\n\n    // 该gl函数没有返回值。\n    glViewport(DEFAULT_X_POSITION, DEFAULT_Y_POSITION, width_, height_);\n    glClearColor(GL_RED_DEFAULT, GL_GREEN_DEFAULT, GL_BLUE_DEFAULT, GL_ALPHA_DEFAULT);\n    glClear(GL_COLOR_BUFFER_BIT);\n    glUseProgram(program_);\n\n    return glGetAttribLocation(program_, POSITION_NAME);\n}\n\n// 绘制五角星\nvoid EGLRender::DrawStar(bool drawColor)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"EGLRender\", \"Draw\");\n    GLint position = PrepareDraw();\n    if (position == POSITION_ERROR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"Draw get position failed\");\n        return;\n    }\n\n    // 绘制背景\n    if (!ExecuteDraw(position, BACKGROUND_COLOR, BACKGROUND_RECTANGLE_VERTICES)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"Draw execute draw background failed\");\n        return;\n    }\n\n    // 将其划分为五个四边形，并计算其中一个四边形的顶点\n    GLfloat rotateX = 0;\n    GLfloat rotateY = FIFTY_PERCENT * height_;\n    GLfloat centerX = 0;\n    // 将角度 54° 和 18° 转换为弧度\n    GLfloat centerY = -rotateY * (M_PI / 180 * 54) * (M_PI / 180 * 18);\n    // 将角度 18° 转换为弧度\n    GLfloat leftX = -rotateY * (M_PI / 180 * 18);\n    GLfloat leftY = 0;\n    // 将角度 18° 转换为弧度\n    GLfloat rightX = rotateY * (M_PI / 180 * 18);\n    GLfloat rightY = 0;\n\n    // 确定绘制四边形的顶点，使用绘制区域的百分比表示\n    const GLfloat shapeVertices[] = {centerX / width_, centerY / height_, leftX / width_,  leftY / height_,\n                                     rotateX / width_, rotateY / height_, rightX / width_, rightY / height_};\n    auto color = drawColor ? DRAW_COLOR : CHANGE_COLOR;\n    if (!ExecuteDraw(position, color, shapeVertices)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"Draw execute draw shape failed\");\n        return;\n    }\n\n    // 将角度 72° 转换为弧度\n    GLfloat rad = M_PI / 180 * 72;\n    // 旋转四次。\n    // 在头文件EGLConst.h中定义，NUM_0的值为0，NUM_4的值为4\n    for (int i = NUM_0; i < NUM_4; ++i) {\n        // 旋转得其他四个四边形的顶点\n        Rotate2d(centerX, centerY, &rotateX, &rotateY, rad);\n        Rotate2d(centerX, centerY, &leftX, &leftY, rad);\n        Rotate2d(centerX, centerY, &rightX, &rightY, rad);\n\n        // 确定绘制四边形的顶点，使用绘制区域的百分比表示\n        const GLfloat shapeVertices[] = {centerX / width_, centerY / height_, leftX / width_,  leftY / height_,\n                                         rotateX / width_, rotateY / height_, rightX / width_, rightY / height_};\n\n        // 绘制图形\n        if (!ExecuteDraw(position, color, shapeVertices)) {\n            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"Draw execute draw shape failed\");\n            return;\n        }\n    }\n    // 将绘制命令提交给GPU，GPU执行完成后将渲染结果显示到屏幕\n    glFlush();\n    glFinish();\n    if (!eglSwapBuffers(eglDisplay_, eglSurface_)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"Draw FinishDraw failed\");\n        return;\n    }\n}\n\n// ···\n\nbool EGLRender::ExecuteDraw(GLint position, const GLfloat *color, const GLfloat shapeVertices[])\n{\n    if ((position > 0) || (color == nullptr)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLRender\", \"ExecuteDraw: param error\");\n        return false;\n    }\n\n    // 该gl函数没有返回值。\n    glVertexAttribPointer(position, POINTER_SIZE, GL_FLOAT, GL_FALSE, 0, shapeVertices);\n    glEnableVertexAttribArray(position);\n    glVertexAttrib4fv(1, color);\n    glDrawArrays(GL_TRIANGLE_FAN, 0, TRIANGLE_FAN_SIZE);\n    glDisableVertexAttribArray(position);\n\n    return true;\n}\n\nvoid EGLRender::SetEGLWindowSize(int width, int height)\n{\n    width_ = width;\n    height_ = height;\n}\n\n// 释放相关资源\nvoid EGLRender::DestroySurface()\n{\n    if ((eglDisplay_ == nullptr) || (eglSurface_ == nullptr) || (!eglDestroySurface(eglDisplay_, eglSurface_))) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0xff00, \"EGLRender\", \"Release eglDestroySurface failed\");\n    }\n\n    if ((eglDisplay_ == nullptr) || (eglContext_ == nullptr) || (!eglDestroyContext(eglDisplay_, eglContext_))) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0xff00, \"EGLRender\", \"Release eglDestroySurface failed\");\n    }\n\n    if ((eglDisplay_ == nullptr) || (!eglTerminate(eglDisplay_))) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0xff00, \"EGLRender\", \"Release eglDestroySurface failed\");\n    }\n    eglDisplay_ = EGL_NO_DISPLAY;\n    eglSurface_ = EGL_NO_SURFACE;\n    eglContext_ = EGL_NO_CONTEXT;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists，使用CMake工具链将C++源代码编译成动态链接库文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(LCNXComponent2)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/render\n                    ${NATIVERENDER_ROOT_PATH}/manager)\n\nadd_library(nativerender SHARED\n            render/EGLRender.cpp\n            manager/plugin_manager.cpp\n            napi_init.cpp)\nfind_library(\n    # 设置路径变量的名称。\n    EGL-lib\n    # 指定要让CMake查找的NDK库的名称。\n    EGL\n)\n\nfind_library(\n    # 设置路径变量的名称。\n    GLES-lib\n    # 指定要让CMake查找的NDK库的名称。\n    GLESv3\n)\n\nfind_library(\n    # 设置路径变量的名称。\n    hilog-lib\n    # 指定要让CMake查找的NDK库的名称。\n    hilog_ndk.z\n)\n\nfind_library(\n    # 设置路径变量的名称。\n    libace-lib\n    # 指定要让CMake查找的NDK库的名称。\n    ace_ndk.z\n)\n\nfind_library(\n    # 设置路径变量的名称。\n    libnapi-lib\n    # 指定要让CMake查找的NDK库的名称。\n    ace_napi.z\n)\n\nfind_library(\n    # 设置路径变量的名称。\n    libuv-lib\n    # 指定要让CMake查找的NDK库的名称。\n    uv\n)\n\ntarget_link_libraries(nativerender PUBLIC ${EGL-lib} ${GLES-lib} ${hilog-lib} ${libace-lib} ${libnapi-lib} ${libuv-lib} libnative_window.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["上述用例具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/ArkUISample/NativeXComponentSample",
            children: "NativeXComponent"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(123552)/* ["default"] */.A) + "",
            width: "462",
            height: "737"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在arkts侧使用surfaceid进行渲染绘制",
      children: "在ArkTS侧使用SurfaceId进行渲染绘制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整使用SurfaceId进行渲染绘制的示例及其主要开发场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在ArkTS侧创建XComponent组件，并使用XComponentController来管理其持有的Surface生命周期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在OnSurfaceCreated回调内获取surfaceId并将其传递给AVPlayer。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用surfaceId初始化AVPlayer，并为其设置必要信息，实现视频的播放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397661)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多AVPlayer用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer",
        children: "AVPlayer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "onSurfaceCreated(surfaceId: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当XComponent持有的Surface创建后进行该回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤展示如何在ArkTS侧创建SURFACE类型的XComponent，获取surfaceId，并将其设置给AVPlayer实现视频播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建XComponent并传入XComponentController。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "XComponent({ type: XComponentType.SURFACE, controller: this.videoXComponentController })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在XComponentController中注册onSurfaceCreated生命周期，并在其中获取surfaceId，将获取到的surfaceId和待播的视频源信息传递给AVPlayer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class VideoXComponentController extends XComponentController {\n  private avPlayerController: AVPlayerController;\n\n  constructor(avPlayerController: AVPlayerController) {\n    super();\n    this.avPlayerController = avPlayerController;\n  }\n\n  onSurfaceCreated(surfaceId: string): void {\n    let source: VideoData = {\n      type: VideoDataType.RAW_FILE,\n      videoSrc: 'videoTest.mp4'\n    };\n    // 将surfaceId和视频源信息传递给AVPlayer\n    this.avPlayerController.initAVPlayer(source, surfaceId);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化AVPlayer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public async initAVPlayer(source: VideoData, surfaceId: string) {\n  this.curSource = source;\n  if (source.seekTime) {\n    this.seekTime = source.seekTime;\n  }\n  if (source.isMuted) {\n    this.isMuted = source.isMuted;\n  }\n  if (!this.curSource) {\n    return;\n  }\n  this.surfaceID = surfaceId; // 存储surfaceId\n  try {\n    this.avPlayer = await media.createAVPlayer();\n    this.setAVPlayerCallback();\n    // 根据不同的视频文件格式设置视频源\n    switch (this.curSource.type) {\n      case VideoDataType.RAW_FILE:\n        let fileDescriptor = await this.context?.resourceManager.getRawFd(this.curSource.videoSrc);\n        this.avPlayer.fdSrc = fileDescriptor;\n        break;\n      case VideoDataType.URL:\n        this.avPlayer.url = this.curSource.videoSrc;\n        break;\n      case VideoDataType.RAW_M3U8_FILE:\n        // ...\n      case VideoDataType.RAW_MAP4_FILE:\n        // ...\n      default:\n        break;\n    }\n  } catch (err) {\n    hilog.error(CommonConstants.LOG_DOMAIN, TAG,\n      `InitPlayer failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n\nprivate setAVPlayerCallback() {\n  if (!this.avPlayer) {\n    return;\n  }\n  this.avPlayer.on('durationUpdate', (time: number) => {\n    AppStorage.setOrCreate('DurationTime', time); // 更新视频总时长\n  });\n  this.avPlayer.on('timeUpdate', (time: number) => {\n    this.currentTime = time; // 更新当前进度\n    AppStorage.setOrCreate('CurrentTime', time);\n  });\n  this.avPlayer.on('error', (err: BusinessError) => {\n    if (!this.avPlayer) {\n      return;\n    }\n    hilog.error(CommonConstants.LOG_DOMAIN, TAG,\n      `Invoke avPlayer failed, code is ${err.code}, message is ${err.message}`);\n    this.avPlayer.reset().catch((err: BusinessError) => {\n      hilog.error(CommonConstants.LOG_DOMAIN, TAG,\n        `Reset failed, code is ${err.code}, message is ${err.message}`);\n    });\n  })\n  this.setStateChangeCallback();\n}\n\nprivate setStateChangeCallback() {\n  if (!this.avPlayer) {\n    return;\n  }\n  this.avPlayer.on('stateChange', async (state) => {\n    if (!this.avPlayer) {\n      return;\n    }\n    switch (state) {\n      case 'idle':\n        hilog.info(CommonConstants.LOG_DOMAIN, TAG, `setAVPlayerCallback AVPlayer state idle called.`);\n        break;\n      case 'initialized':\n        this.avPlayer.surfaceId = this.surfaceID; // 设置surfaceId，作为视频画面承载的画布\n        this.avPlayer.prepare().catch((err: BusinessError) => {\n          hilog.error(CommonConstants.LOG_DOMAIN, TAG,\n            `prepare failed, code is ${err.code}, message is ${err.message}`);\n        });\n        break;\n      case 'prepared':\n        // ...\n        // 实现自动播放\n        this.avPlayer.play().catch((err: BusinessError) => {\n          hilog.error(CommonConstants.LOG_DOMAIN, TAG, `play failed, code is ${err.code}, message is ${err.message}`);\n        })\n        break;\n      case 'playing':\n        this.isPlaying = true;\n        break;\n      case 'completed':\n        this.currentTime = 0;\n        break;\n      default:\n        break;\n    }\n  });\n}\n"
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
539190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798240-979c725078f544a95157e2a13fd6fe9e.png");

},
23265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437933-32d75c1050cab07970cd4c7f8d754df1.png");

},
814009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957888-a588a42cdad82fc9772ccb2738b866d5.png");

},
167170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957890-2793d060fbe77466d03155f2d4ef27c9.png");

},
611583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
296170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437935-eef82e0f75c04be0b7cff4520a9bd22d.png");

},
982881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477889-5a50fb385416a608124fba3ff3ffcdee.png");

},
397661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
123552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477891-84602eb8465864e63a46632d6bc8ae87.jpeg");

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