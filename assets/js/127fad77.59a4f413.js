"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["578709"], {
501435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_depth_arengine_c_get_depth_md_127_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-get-depth-arengine-c-get-depth-md-127.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_depth_arengine_c_get_depth_md_127_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/arengine-c-get-depth","title":"获取深度图（C/C++）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/arengine-c-get-depth.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"获取深度图（C/C++）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-depth","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"识别目标形状（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/"},"next":{"title":"获取网格扫描信息（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/arengine-c-get-depth.md


const frontMatter = {
	title: '获取深度图（C/C++）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-depth',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '获取深度图（C/C++）';

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
  "value": "声明Native接口",
  "id": "声明native接口",
  "level": 3
}, {
  "value": "创建UI界面",
  "id": "创建ui界面",
  "level": 3
}, {
  "value": "引入AR Engine",
  "id": "引入ar-engine",
  "level": 3
}, {
  "value": "创建AR会话",
  "id": "创建ar会话",
  "level": 3
}, {
  "value": "获取当前环境中的深度图",
  "id": "获取当前环境中的深度图",
  "level": 3
}, {
  "value": "获取当前深度图对应的深度置信度图",
  "id": "获取当前深度图对应的深度置信度图",
  "level": 3
}, {
  "value": "获取深度图和深度置信度图中的值",
  "id": "获取深度图和深度置信度图中的值",
  "level": 3
}, {
  "value": "使用完毕后，销毁深度图和深度置信度图",
  "id": "使用完毕后销毁深度图和深度置信度图",
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
        id: "获取深度图cc",
        children: "获取深度图（C/C++）"
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
      children: ["获取深度估计信息能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_DEPTH"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为AR深度估计相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_create",
              children: "HMS_AREngine_ARSession_Create"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
              children: "HMS_AREngine_ARSession_Update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新AR Engine的计算结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_configure",
              children: "HMS_AREngine_ARSession_Configure"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
              children: "AREngine_ARSession"
            }), "会话。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_create",
              children: "HMS_AREngine_ARFrame_Create"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
              children: "AREngine_ARFrame"
            }), "对象，将指针存储到*outFrame中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_setdisplaygeometry",
              children: "HMS_AREngine_ARSession_SetDisplayGeometry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置显示的高和宽（以Pixel为单位）。该高度和宽度是显示视图的高度和宽度，如果不一致，会导致显示相机预览出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_setcameragltexture",
              children: "HMS_AREngine_ARSession_SetCameraGLTexture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置可用于存储相机预览流数据的OpenGL纹理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
              children: "HMS_AREngine_ARSession_GetAllTrackables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有指定类型的可跟踪对象集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem",
              children: "HMS_AREngine_ARTrackableList_AcquireItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从可跟踪列表中获取指定index的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getcenterpose",
              children: "HMS_AREngine_ARPlane_GetCenterPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取从平面的局部坐标系到世界坐标系转换的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirecamera",
              children: "HMS_AREngine_ARFrame_AcquireCamera"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的相机参数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_create",
              children: "HMS_AREngine_ARPose_Create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配并初始化一个新的位姿对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getpose",
              children: "HMS_AREngine_ARCamera_GetPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前相机对象在AR世界空间中的位姿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arconfig_setdepthmode",
              children: "HMS_AREngine_ARConfig_SetDepthMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置深度模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiredepthimage16bits",
              children: "HMS_AREngine_ARFrame_AcquireDepthImage16Bits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的深度图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiredepthconfidenceimage",
              children: "HMS_AREngine_ARFrame_AcquireDepthConfidenceImage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的深度图像对应的置信度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arimage_getnativebuffer",
              children: "HMS_AREngine_ARImage_GetNativeBuffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧图像对象的NativeBuffer数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
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
      children: "首先创建一个UI界面ARDepth.ets，用于选择是否开启深度图渲染模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARDepth.ets。\n@Builder\nexport function ARDepthBuilder() {\n  ARDepth();\n}\n\n@Component\nstruct ARDepth {\n  pageInfo: NavPathStack = new NavPathStack();\n\n  build(): void {\n    NavDestination() {\n      Column() {\n        Button('关闭深度图渲染模式', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.pageInfo.pushPathByName('ARDepthRender', 0); // 0表示关闭渲染\n          })\n\n        Button('开启深度图渲染模式', { type: ButtonType.Normal, stateEffect: true })\n          .borderRadius(8)\n          .width('50%')\n          .height('5%')\n          .onClick(() => {\n            this.pageInfo.pushPathByName('ARDepthRender', 1); // 1表示打开渲染\n          })\n      }\n      .justifyContent(FlexAlign.SpaceEvenly)\n      .width('100%')\n      .height('100%')\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["最后创建一个ARDepthRender.ets，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件用于加载相机预览画面，并定时触发每一帧绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARDepthRender.ets。\nimport { deviceInfo } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport arEngineDemo from 'libentry.so';\n\n@Builder\nexport function ARDepthRenderBuilder() {\n  ARDepthRender();\n}\n\n@Component\nstruct ARDepthRender {\n  pageInfo: NavPathStack = new NavPathStack();\n  private interval: number = -1;\n  private isUpdate: boolean = true;\n  private params: number = 0;\n  private xComponentId = 'ARDepth';\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;\n  @State distance: string = '';\n  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })\n          .width('100%')\n          .height('100%')\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onLoad(() => {\n            this.interval = setInterval(() => {\n              if (this.isUpdate) {\n                // 每一帧通过调用AR Engine的Native API update来更新计算结果\n                arEngineDemo.update(this.xComponentId);\n                this.distance = arEngineDemo.getDistance(this.xComponentId);\n              }\n            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）\n          })\n          .onDestroy(() => {\n            clearInterval(this.interval);\n          })\n\n        Text(this.distance)\n          .fontColor(Color.Yellow)\n          .fontSize(24)\n          .textShadow({\n            radius: 10,\n            color: Color.Black,\n            offsetX: 0,\n            offsetY: 0\n          })\n          .textAlign(TextAlign.Center)\n          .alignRules({\n            bottom: { anchor: '__container__', align: VerticalAlign.Bottom },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n      }\n    }\n    .onAppear(() => {\n      arEngineDemo.init(this.resMgr);\n      let config: Int32Array = new Int32Array([0, this.params, 1, this.rotation]);\n      arEngineDemo.start(this.xComponentId, config);\n    })\n    .onWillDisappear(() => {\n      arEngineDemo.stop(this.xComponentId);\n    })\n    .onShown(() => {\n      this.isUpdate = true;\n      arEngineDemo.show(this.xComponentId);\n    })\n    .onHidden(() => {\n      this.isUpdate = false;\n      arEngineDemo.hide(this.xComponentId);\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n      this.params = context.pathInfo.param as number;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置路由进行页面间跳转，页面路由配置详细可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation",
        children: "组件导航(Navigation) (推荐)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引入ar-engine",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考AR物体摆放章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ar会话",
      children: "创建AR会话"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建AR会话并配置为开启深度模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSession *arSession = nullptr;\n// 创建AR会话。\nHMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);\nAREngine_ARConfig *arConfig = nullptr;\n// 创建AR会话配置器。\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 设置深度模式为开启状态。\nHMS_AREngine_ARConfig_SetDepthMode(arSession, arConfig, ARENGINE_DEPTH_MODE_AUTOMATIC);\n// 配置器设置给AR会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取当前环境中的深度图",
      children: "获取当前环境中的深度图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiredepthimage16bits",
        children: "HMS_AREngine_ARFrame_AcquireDepthImage16Bits"
      }), "函数，获取当前环境中的深度信息，并将结果存放在depthImage中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARFrame *arFrame = nullptr;\n// 创建AR单帧对象\nHMS_AREngine_ARFrame_Create(arSession, &arFrame);\nAREngine_ARImage *depthImage = nullptr;\n// 获取深度图\nHMS_AREngine_ARFrame_AcquireDepthImage16Bits(arSession, arFrame, &depthImage);\n// 获取深度图的nativeBuffer\nOH_NativeBuffer* depthBuffer;\nHMS_AREngine_ARImage_GetNativeBuffer(arSession, depthImage, &depthBuffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取当前深度图对应的深度置信度图",
      children: "获取当前深度图对应的深度置信度图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquiredepthconfidenceimage",
        children: "HMS_AREngine_ARFrame_AcquireDepthConfidenceImage"
      }), "函数，获取当前深度图对应的置信度图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARFrame *arFrame = nullptr;\n// 创建AR单帧对象\nHMS_AREngine_ARFrame_Create(arSession, &arFrame);\nAREngine_ARImage *depthConfidenceImage = nullptr;\n// 获取深度置信度图\nHMS_AREngine_ARFrame_AcquireDepthConfidenceImage(arSession, arFrame, &depthConfidenceImage);\n// 获取深度置信图的nativeBuffer\nOH_NativeBuffer* depthConfidenceBuffer;\nHMS_AREngine_ARImage_GetNativeBuffer(arSession, depthConfidenceImage, &depthConfidenceBuffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取深度图和深度置信度图中的值",
      children: "获取深度图和深度置信度图中的值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["深度图和深度置信度图包装为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arimage",
        children: "AREngine_ARImage"
      }), "对象，可以通过此对象获取对应的深度图和深度置信度图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARImageFormat format;\n// 获取当前帧图像的数据格式\nHMS_AREngine_ARImage_GetFormat(arSession, depthImage, &format);\nint32_t depthWidth;\n// 获取深度图的宽度\nHMS_AREngine_ARImage_GetWidth(arSession, depthImage, &depthWidth);\nint32_t depthHeight;\n// 获取深度图的高度\nHMS_AREngine_ARImage_GetHeight(arSession, depthImage, &depthHeight);\nuint8_t *depthData = nullptr;\nint32_t depthLength = 0;\n// 获取深度图的数据\nHMS_AREngine_ARImage_GetPlaneData(arSession, depthImage, 0, (const uint8_t **)&depthData, &depthLength);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用完毕后销毁深度图和深度置信度图",
      children: "使用完毕后，销毁深度图和深度置信度图"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HMS_AREngine_ARImage_Release(depthImage);\nHMS_AREngine_ARImage_Release(depthConfidenceImage);\n"
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