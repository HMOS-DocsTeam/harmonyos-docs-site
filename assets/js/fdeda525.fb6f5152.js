"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["237736"], {
165092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_volume_measurement_arengine_c_volume_measurement_md_fde_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-volume-measurement-arengine-c-volume-measurement-md-fde.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_volume_measurement_arengine_c_volume_measurement_md_fde_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/arengine-c-volume-measurement","title":"高精几何重建（C/C++）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/arengine-c-volume-measurement.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"高精几何重建（C/C++）","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-volume-measurement","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"物体摆放（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/"},"next":{"title":"获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/arengine-c-volume-measurement.md


const frontMatter = {
	title: '高精几何重建（C/C++）',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-volume-measurement',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '高精几何重建（C/C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "引入AR Engine",
  "id": "引入ar-engine",
  "level": 2
}, {
  "value": "声明Native接口",
  "id": "声明native接口",
  "level": 3
}, {
  "value": "创建UI界面",
  "id": "创建ui界面",
  "level": 3
}, {
  "value": "引入AR Engine",
  "id": "引入ar-engine-1",
  "level": 3
}, {
  "value": "创建AR会话并配置高精几何重建相关模式",
  "id": "创建ar会话并配置高精几何重建相关模式",
  "level": 3
}, {
  "value": "获取当前环境中的高精几何重建信息",
  "id": "获取当前环境中的高精几何重建信息",
  "level": 3
}, {
  "value": "获取高精几何重建信息中的立方体数据",
  "id": "获取高精几何重建信息中的立方体数据",
  "level": 3
}, {
  "value": "绘制相关几何信息",
  "id": "绘制相关几何信息",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "高精几何重建cc",
        children: "高精几何重建（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节给出了关键开发步骤，完整代码可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高精几何重建能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_SEMANTIC_DENSE"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为AREngine高精几何重建相关接口，详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiresemanticdensedata",
              children: "HMS_AREngine_ARFrame_AcquireSemanticDenseData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的高精几何重建对象数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_getsemanticdensemode",
              children: "HMS_AREngine_ARConfig_GetSemanticDenseMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取已设置的高精几何重建模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setsemanticdensemode",
              children: "HMS_AREngine_ARConfig_SetSemanticDenseMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前所需的高精几何重建模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata",
              children: "HMS_AREngine_ARSemanticDense_AcquireCubeData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别到的高精几何重建对象数据中的立方体数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedatasize",
              children: "HMS_AREngine_ARSemanticDense_AcquireCubeDataSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取识别到的高精几何重建对象数据中的立方体数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_release",
              children: "HMS_AREngine_ARSemanticDense_Release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放高精几何重建对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入ar-engine",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考管理AR会话章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "声明native接口",
      children: "声明Native接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考AR物体摆放章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld#%E5%A3%B0%E6%98%8Enative%E6%8E%A5%E5%8F%A3",
        children: "声明Native接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ui界面",
      children: "创建UI界面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先创建一个UI界面ARSemanticDense.ets，用于选择高精几何重建相关模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARSemanticDense.ets。\nimport { display} from '@kit.ArkUI';\n\n@Builder\nexport function ARSemanticDenseBuilder() {\n  ARSemanticDense();\n}\n\n@Component\nstruct ARSemanticDense {\n  pageInfo: NavPathStack = new NavPathStack();\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  @State showPage: boolean = true;\n  @State rotation: number = display.getDefaultDisplaySync().rotation;\n  @State volume: string = '';\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('开启稠密点云', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.pageInfo.pushDestinationByName('ARSemanticDenseRender', 0).catch((error: BusinessError) => {\n              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n            });\n          })\n\n        Button('打开体积测量', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.pageInfo.pushDestinationByName('ARSemanticDenseRender', 1).catch((error: BusinessError) => {\n              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n            });\n          })\n\n        Button('打开空间测量', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.pageInfo.pushDestinationByName('ARSemanticDenseRender', 2).catch((error: BusinessError) => {\n              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);\n            });\n          })\n      }\n      .justifyContent(FlexAlign.SpaceEvenly)\n      .width('100%')\n      .height('100%')\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["最后创建一个ARSemanticDenseRender.ets，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件用于加载相机预览画面，并定时触发每一帧绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARSemanticDenseRender.ets。\nimport { display } from '@kit.ArkUI';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport arEngineDemo from 'libentry.so';\n\n@Builder\nexport function ARSemanticDenseRenderBuilder() {\n  ARSemanticDenseRender();\n}\n\n@Component\nstruct ARSemanticDenseRender {\n  pageInfo: NavPathStack = new NavPathStack();\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  private xComponentId: string = 'ARSemanticDense';\n  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;\n  private interval: number = -1;\n  private inputInterval: number = -1;\n  private getCubeInfoInterval: number = -1;\n  private isUpdate: boolean = false;\n  private semanticDenseMode: number = 0;\n  @State showPage: boolean = true;\n  @State rotation: number = display.getDefaultDisplaySync().rotation;\n  @State volume: string = '';\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n\n        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })\n          .opacity(0.2)\n          .width('100%')\n          .height('100%')\n          .zIndex(0.1)\n          .visibility(this.showPage ? Visibility.Visible : Visibility.None)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onLoad(() => {\n            this.interval = setInterval(() => {\n              if (this.isUpdate) {\n                arEngineDemo.update(this.xComponentId);\n                if (this.semanticDenseMode != 0) {\n                  this.volume = arEngineDemo.getVolume(this.xComponentId);\n                }\n              }\n            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）\n          })\n          .onDestroy(() => {\n            if (this.interval !== -1) {\n              clearInterval(this.interval);\n              this.interval = -1;\n            }\n\n            if (this.inputInterval !== -1) {\n              clearInterval(this.inputInterval);\n              this.inputInterval = -1;\n            }\n\n            if (this.getCubeInfoInterval !== -1) {\n              clearInterval(this.getCubeInfoInterval);\n              this.getCubeInfoInterval = -1;\n            }\n          })\n\n        Text(this.volume)\n          .fontColor(Color.Red)\n          .fontSize(14)\n          .textAlign(TextAlign.Center)\n          .alignRules({\n            bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n      }\n    }\n    .onAppear(() => {\n      arEngineDemo.init(this.resMgr);\n      let config: Int32Array = new Int32Array([1,this.rotation, 2, this.semanticDenseMode]);\n      arEngineDemo.start(this.xComponentId, config);\n    })\n    .onWillDisappear(async () => {\n      arEngineDemo.stop(this.xComponentId);\n    })\n    .onShown(() => {\n      this.isUpdate = true;\n      arEngineDemo.show(this.xComponentId);\n    })\n    .onHidden(() => {\n      this.isUpdate = false;\n      arEngineDemo.hide(this.xComponentId);\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n      this.semanticDenseMode = context.pathInfo.param as number;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引入ar-engine-1",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考AR物体摆放章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ar会话并配置高精几何重建相关模式",
      children: "创建AR会话并配置高精几何重建相关模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSession *arSession = nullptr;\n// 创建AR会话。\nHMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);\nAREngine_ARConfig *arConfig = nullptr;\n// 创建AR会话配置器。\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 配置高精几何重建模式中的体积识别模式。\nHMS_AREngine_ARConfig_SetSemanticDenseMode(arSession, arConfig, ARENGINE_SEMANTIC_DENSE_MODE_CUBE_VOLUME);\n// 配置器设置给AR会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取当前环境中的高精几何重建信息",
      children: "获取当前环境中的高精几何重建信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个帧对象，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiresemanticdensedata",
        children: "HMS_AREngine_ARFrame_AcquireSemanticDenseData"
      }), "函数，从当前帧中获取环境中的高精几何重建信息，其中包含了环境中的稠密点云信息和立方体信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARFrame *arFrame = nullptr;\n// 创建AR单帧对象\nHMS_AREngine_ARFrame_Create(arSession, &arFrame);\nAREngine_ARSemanticDenseData *arSemanticDense = nullptr;\n// 获取当前帧的稠密点云信息\nHMS_AREngine_ARFrame_AcquireSemanticDenseData(arSession, arFrame, &arSemanticDense);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取高精几何重建信息中的立方体数据",
      children: "获取高精几何重建信息中的立方体数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata",
            children: "HMS_AREngine_ARSemanticDense_AcquireCubeData"
          }), "函数，获取当前环境中的立方体数据，立方体的数据结构详情参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata",
            children: "AREngine_ARSemanticDenseCubeData"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AREngine_ARSemanticDenseCubeData *semanticDenseCubeData = nullptr;\nHMS_AREngine_ARSemanticDense_AcquireCubeData(arSession, arSemanticDense, &semanticDenseCubeData);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedatasize",
            children: "HMS_AREngine_ARSemanticDense_AcquireCubeDataSize"
          }), "函数，获取当前环境中的立方体数量，如果立方体数量大于0，即可从中获取单个立方体的数据进行绘制和体积计算。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int64_t cubeDataSize = 0;\nHMS_AREngine_ARSemanticDense_AcquireCubeDataSize(arSession, arSemanticDense, &cubeDataSize);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绘制相关几何信息",
      children: "绘制相关几何信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过获取到的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata",
            children: "AREngine_ARSemanticDenseCubeData"
          }), "对象来绘制立方体。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 判断获取的立方体数据及数量。\nif (semanticDenseCubeData != nullptr && cubeDataSize > 0) {\n    // 绘制立方体。\n    mCubeRenderer.Draw(projectionMat, viewMat, arSession, semanticDenseCubeData);\n}\n"
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