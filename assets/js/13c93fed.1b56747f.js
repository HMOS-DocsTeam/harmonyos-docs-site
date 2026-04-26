"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["370120"], {
341235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_arworld_arengine_c_arworld_md_13c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-arworld-arengine-c-arworld-md-13c.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_arworld_arengine_c_arworld_md_13c_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/arengine-c-arworld","title":"物体摆放（C/C++）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/arengine-c-arworld.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"物体摆放（C/C++）","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图像跟踪（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/"},"next":{"title":"高精几何重建（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-volume-measurement/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-arworld/arengine-c-arworld.md


const frontMatter = {
	title: '物体摆放（C/C++）',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '物体摆放（C/C++）';

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
  "value": "创建AR场景",
  "id": "创建ar场景",
  "level": 3
}, {
  "value": "获取平面",
  "id": "获取平面",
  "level": 3
}, {
  "value": "点击屏幕",
  "id": "点击屏幕",
  "level": 3
}, {
  "value": "放置虚拟物体",
  "id": "放置虚拟物体",
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
        id: "物体摆放cc",
        children: "物体摆放（C/C++）"
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
      children: ["物体摆放能力支持部分Phone、Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_SLAM"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为AR物体摆放相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            }), "对象，将指针存储到中*outFrame。"]
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
            children: "设置可用于存储相机预览流数据的openGL纹理。"
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_hittest",
              children: "HMS_AREngine_ARFrame_HitTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据屏幕上兴趣点位置获取命中检测结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_getsize",
              children: "HMS_AREngine_ARHitResultList_GetSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取命中检测结果对象列表中包含的对象数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_getitem",
              children: "HMS_AREngine_ARHitResultList_GetItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在命中检测结果列表中获取指定索引的命中检测结果对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_create",
              children: "HMS_AREngine_ARHitResult_Create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空的命中检测结果对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_acquirenewanchor",
              children: "HMS_AREngine_ARHitResult_AcquireNewAnchor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在碰撞命中位置创建一个新的锚点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresult_acquiretrackable",
              children: "HMS_AREngine_ARHitResult_AcquireTrackable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取被命中的可追踪对象。"
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "声明native接口",
      children: "声明Native接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS接口声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { resourceManager } from '@kit.LocalizationKit';\n\nexport const start: (id: string, params: Int32Array) => void;\nexport const show: (id: string) => void;\nexport const hide: (id: string) => void;\nexport const update: (id: string) => number;\nexport const stop: (id: string) => void;\nexport const init: (resmgr: resourceManager.ResourceManager) => void;\nexport const getDistance: (id: string) => string;\nexport const initImage: (id: string, width: number, height: number, buffer: ArrayBuffer) => number;\nexport const setPath: (id: string, path: string) => void;\nexport const saveImageDataBaseToLocal: (id: string, path: string) => void;\nexport const getImageCount: (id: string) => number;\nexport const getVolume: (id: string) => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建立ArkTS接口与C++接口之间的映射。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_property_descriptor desc[] = {\n    {\"init\", nullptr, Global::Init, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"start\", nullptr, NapiManager::NapiOnPageAppear, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"show\", nullptr, NapiManager::NapiOnPageShow, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"hide\", nullptr, NapiManager::NapiOnPageHide, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"update\", nullptr, NapiManager::NapiOnPageUpdate, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"stop\", nullptr, NapiManager::NapiOnPageDisappear, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"getDistance\", nullptr, NapiManager::NapiGetDistance, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"initImage\", nullptr, NapiManager::NapiInitImage, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"setPath\", nullptr, NapiManager::NapiSetPath, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"saveImageDataBaseToLocal\", nullptr, NapiManager::NapiSaveImageDataBaseToLocal, nullptr, nullptr, nullptr,\n     napi_default, nullptr},\n    {\"getImageCount\", nullptr, NapiManager::NapiGetImageCount, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"getVolume\", nullptr, NapiManager::NapiGetVolume, nullptr, nullptr, nullptr, napi_default, nullptr}\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ui界面",
      children: "创建UI界面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个UI界面，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件用于显示相机预览画面，并定时触发每一帧绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARWorld.ets。\nimport { PromptAction } from '@kit.ArkUI';\nimport { deviceInfo } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport arEngineDemo from 'libentry.so';\n\n@Builder\nexport function ARWorldBuilder() {\n  ARWorld();\n}\n\n@Component\nstruct ARWorld {\n  pageInfo: NavPathStack = new NavPathStack();\n  private currentMillisecond: number = 0;\n  private interval: number = -1;\n  private isUpdate: boolean = true;\n  private xComponentId: string = 'ARWorld';\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;\n  @State numberOfPlans: number = 0;\n  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })\n          .width('100%')\n          .height('100%')\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onLoad(() => {\n            this.interval = setInterval(() => {\n              if (this.isUpdate) {\n                // 每一帧通过调用AR Engine的Native API update来更新计算结果\n                this.numberOfPlans = arEngineDemo.update(this.xComponentId);\n                this.planeNum();\n              }\n            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）\n          })\n          .onDestroy(() => {\n            clearInterval(this.interval);\n          })\n      }\n    }\n    .onAppear(() => {\n      arEngineDemo.init(this.resMgr);\n      let config: Int32Array = new Int32Array([1, this.rotation]);\n      arEngineDemo.start(this.xComponentId, config);\n    })\n    .onWillDisappear(() => {\n      arEngineDemo.stop(this.xComponentId);\n    })\n    .onShown(() => {\n      this.isUpdate = true;\n      arEngineDemo.show(this.xComponentId);\n    })\n    .onHidden(() => {\n      this.isUpdate = false;\n      arEngineDemo.hide(this.xComponentId);\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  private messageNotification(): void {\n    let promptAction: PromptAction = this.getUIContext().getPromptAction();\n    promptAction.showToast({\n      message: '当前特征点较少，无法识别平面，请移动相机。',\n      bottom: 300\n    })\n  }\n\n  private planeNum(): void {\n    if (this.numberOfPlans < 1) {\n      // 平面数量少于1\n      let tempMillisecond: number = new Date().getTime();\n      // 为首次启动的时间分配一个值\n      if (this.currentMillisecond === 0) {\n        this.currentMillisecond = tempMillisecond;\n        return;\n      }\n      // 当识别平面时间超过10s，则展示一个弹窗\n      if (tempMillisecond - this.currentMillisecond > 10000) {\n        this.messageNotification();\n        this.currentMillisecond = 0;\n      }\n    } else {\n      this.currentMillisecond = 0;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引入ar-engine",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考管理AR会话章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建ar场景",
      children: "创建AR场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_create",
            children: "HMS_AREngine_ARSession_Create"
          }), "函数创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsession",
            children: "AREngine_ARSession"
          }), "会话。您可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession",
            children: "管理AR会话"
          }), "创建ARSession。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置AR会话及预览尺寸。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 【可选】创建一个拥有合理默认配置的配置对象。\nAREngine_ARConfig *arConfig = nullptr;\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 【可选】配置AREngine_ARSession会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n// 【可选】释放指定的配置对象的内存空间。\nHMS_AREngine_ARConfig_Destroy(arConfig);\n\n// 创建一个新的AREngine_ARFrame对象。\nAREngine_ARFrame *arFrame = nullptr;\nHMS_AREngine_ARFrame_Create(arSession, &arFrame);\n// 预览区域的实际宽高，如使用xComponent组件显示，则该宽和高是xComponent的宽和高，如果不一致，会导致显示相机预览出错。\nint32_t width = 1440;\nint32_t height = 1080;\n// 显示旋转常量，值为AREngine_ARPoseType中定义的枚举值。\nAREngine_ARPoseType displayRotation = ARENGINE_POSE_TYPE_IDENTITY;\n// 设置显示的宽和高（以Pixel为单位）。\nHMS_AREngine_ARSession_SetDisplayGeometry(arSession, displayRotation, width, height);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过OpenGL接口获取纹理ID。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过openGL接口获取纹理ID。\nGLuint textureId = 0;\nglGenTextures(1, &textureId);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置OpenGL纹理，存储相机预览流数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置可用于存储相机预览流数据的openGL纹理。\nHMS_AREngine_ARSession_SetCameraGLTexture(arSession, textureId );\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取平面",
      children: "获取平面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
            children: "HMS_AREngine_ARSession_Update"
          }), "函数更新当前", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arframe",
            children: "AREngine_ARFrame"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取帧数据AREngine_ARFrame。\nHMS_AREngine_ARSession_Update(arSession, arFrame);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取相机的视图矩阵和相机的投影矩阵，用于后续渲染。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据AREngine_ARFrame对象可以获取相机对象AREngine_ARCamera。\nAREngine_ARCamera *arCamera = nullptr;\nHMS_AREngine_ARFrame_AcquireCamera(arSession, arFrame, &arCamera);\n// 获取最新帧中相机的视图矩阵。\nHMS_AREngine_ARCamera_GetViewMatrix(arSession, arCamera, glm::value_ptr(*viewMat), 16);\n// 获取用于在相机图像上层渲染虚拟内容的投影矩阵，可用于相机坐标系到裁剪坐标系转换。Near (0.1) Far (100)。\nHMS_AREngine_ARCamera_GetProjectionMatrix(arSession, arCamera, {0.1f, 100.f}, glm::value_ptr(*projectionMat), 16);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(503538)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["这里直接获取相机的视图矩阵和相机的投影矩阵，是为了便于渲染。获取相机运动中的位姿变化，还可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getpose",
            children: "HMS_AREngine_ARCamera_GetPose"
          }), "函数配合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_getposeraw",
            children: "HMS_AREngine_ARPose_GetPoseRaw"
          }), "函数进行获取。详细可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E5%BD%93%E5%89%8D%E4%BD%8D%E5%A7%BF",
            children: "获取设备当前位姿"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
            children: "HMS_AREngine_ARSession_GetAllTrackables"
          }), "函数获取平面列表。详细可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane",
            children: "检测环境中的平面"
          }), "章节。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取当前检测到的平面列表。\nAREngine_ARTrackableList *planeList = nullptr;\n// 创建一个可跟踪对象列表。\nHMS_AREngine_ARTrackableList_Create(arSession, &planeList);\n// 获取所有指定类型为ARENGINE_TRACKABLE_PLANE的可跟踪对象集合。\nAREngine_ARTrackableType planeTrackedType = ARENGINE_TRACKABLE_PLANE;\nHMS_AREngine_ARSession_GetAllTrackables(arSession, planeTrackedType, planeList);\nint32_t planeListSize = 0;\n// 获取此列表中的可跟踪对象的数量。\nHMS_AREngine_ARTrackableList_GetSize(arSession, planeList, &planeListSize);\nfor (int i = 0; i < planeListSize; ++i) {\n    AREngine_ARTrackable *arTrackable = nullptr;\n    // 从可跟踪列表中获取指定index的对象。\n    HMS_AREngine_ARTrackableList_AcquireItem(arSession, planeList, i, &arTrackable);\n    AREngine_ARPlane *arPlane = reinterpret_cast<AREngine_ARPlane*>(arTrackable);\n    // 获取当前可跟踪对象的跟踪状态。如果状态为：ARENGINE_TRACKING_STATE_TRACKING（可跟踪状态）才进行绘制。\n    AREngine_ARTrackingState outTrackingState;\n    HMS_AREngine_ARTrackable_GetTrackingState(arSession, arTrackable, &outTrackingState);\n    AREngine_ARPlane *subsumePlane = nullptr;\n    // 获取平面的父平面（一个平面被另一个平面合并时，会产生父平面），如果无父平面返回为NULL。\n     HMS_AREngine_ARPlane_AcquireSubsumedBy(arSession, arPlane, &subsumePlane);\n    if (subsumePlane != nullptr) {\n        HMS_AREngine_ARTrackable_Release(reinterpret_cast<AREngine_ARTrackable*>(subsumePlane));\n        // 如果当前平面有父平面，则当前平面不进行展示。否则会出现双平面。\n        continue;\n    }\n    // 跟踪状态为：ARENGINE_TRACKING_STATE_TRACKING时才进行绘制。\n    if (AREngine_ARTrackingState::ARENGINE_TRACKING_STATE_TRACKING != outTrackingState) {\n        continue;\n    }\n    // 进行平面绘制。\n}\nHMS_AREngine_ARTrackableList_Destroy(planeList);\nplaneList = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getpolygon",
            children: "HMS_AREngine_ARPlane_GetPolygon"
          }), "函数获取平面的二维顶点坐标数组，用于绘制平面边界。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取检测到平面的二维顶点数组大小。\nint32_t polygonLength = 0;\nHMS_AREngine_ARPlane_GetPolygonSize(arSession, arPlane, &polygonLength);\n\n// 获取检测到平面的二维顶点数组，格式为[x1，z1，x2，z2，...]。\nconst int32_t verticesSize = polygonLength / 2;\nstd::vector<glm::vec2> raw_vertices(verticesSize);\nHMS_AREngine_ARPlane_GetPolygon(arSession, arPlane, glm::value_ptr(raw_vertices.front()), polygonLength);\n\n// 局部坐标系顶点坐标。\nfor (int32_t i = 0; i < verticesSize; ++i) {\n    vertices.emplace_back(raw_vertices[i].x, raw_vertices[i].y, 0.75f);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(372493)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getpolygon",
            children: "HMS_AREngine_ARPlane_GetPolygon"
          }), "函数获取平面的二维顶点坐标数组格式为[x1，z1，x2，z2，...]。这些值均在平面局部坐标系的x-z平面中定义，须先调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getcenterpose",
            children: "HMS_AREngine_ARPlane_GetCenterPose"
          }), "函数获取从平面的局部坐标系到世界坐标系转换的位姿数据，然后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_getmatrix",
            children: "HMS_AREngine_ARPose_GetMatrix"
          }), "函数将位姿数据转换成4X4的矩阵，该矩阵与局部坐标系的坐标点做乘法，可以得到局部坐标系到世界坐标系的转换。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将平面的二维顶点坐标转换到世界坐标系，并绘制平面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取从平面的局部坐标系到世界坐标系转换的位姿信息。\nAREngine_ARPose *scopedArPose = nullptr;\nHMS_AREngine_ARPose_Create(arSession, nullptr, 0, &scopedArPose);\nHMS_AREngine_ARPlane_GetCenterPose(arSession, arPlane, scopedArPose);\n\n// 将位姿数据转换成4X4的矩阵，outMatrixColMajor4x4为存放数组，其中的数据按照列优先存储。\n// 该矩阵与局部坐标系的坐标点做乘法，可以得到局部坐标系到世界坐标系的转换。\nHMS_AREngine_ARPose_GetMatrix(arSession, scopedArPose, glm::value_ptr(modelMat), 16);\nHMS_AREngine_ARPose_Destroy(scopedArPose);\n\n// 构筑绘制渲染平面所需的数据。\n// 生成三角形。\nfor (int i = 1; i < verticesSize - 1; ++i) {\n    triangles.push_back(0);\n    triangles.push_back(i);\n    triangles.push_back(i + 1);\n}\n// 生成平面包围线。\nfor (int i = 0; i < verticesSize; ++i) {\n    lines.push_back(i);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点击屏幕",
      children: "点击屏幕"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户点击屏幕后，基于点击事件获取屏幕坐标。可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
            children: "Native XComponent"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件：native_interface_xcomponent.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过点击事件获取屏幕点击坐标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "float pixelX= 0.0f;\nfloat pixelY= 0.0f;\nint32_t ret = OH_NativeXComponent_GetTouchEvent(component, window, &mTouchEvent);\n\nif (ret == OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n    if (mTouchEvent.type == OH_NATIVEXCOMPONENT_DOWN) {\n        pixelX= mTouchEvent.touchPoints[0].x;\n        pixelY= mTouchEvent.touchPoints[0].y;\n    } else {\n        return;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_hittest",
            children: "HMS_AREngine_ARFrame_HitTest"
          }), "函数进行碰撞检测，结果存放在碰撞检测结果列表中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个命中检测结果对象列表，arSession为创建AR场景步骤中创建的会话对象。\nAREngine_ARHitResultList *hitResultList = nullptr;\nHMS_AREngine_ARHitResultList_Create(arSession, &hitResultList);\n\n// 获取命中检测结果对象列表，arFrame为创建AR场景步骤中创建的帧对象，pixelX/pixelY为屏幕点坐标。\nHMS_AREngine_ARFrame_HitTest(arSession, arFrame, pixelX, pixelY, hitResultList);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(857828)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "碰撞结果按照交点与设备的距离从近到远进行排序，存放在碰撞结果列表中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "放置虚拟物体",
      children: "放置虚拟物体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arhitresultlist_getitem",
            children: "HMS_AREngine_ARHitResultList_GetItem"
          }), "函数遍历碰撞检测结果列表，获取命中的可跟踪对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建命中检测结果对象。\nAREngine_ARHitResult *arHit = nullptr;\nHMS_AREngine_ARHitResult_Create(arSession, &arHit);\n\n// 获取第一个命中检测结果对象。\nHMS_AREngine_ARHitResultList_GetItem(arSession, hitResultList, 0, arHit);\n\n// 获取被命中的可追踪对象。\nAREngine_ARTrackable *arHitTrackable = nullptr;\nHMS_AREngine_ARHitResult_AcquireTrackable(arSession, arHit, &arHitTrackable);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "判断碰撞结果是否存在于平面内部。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AREngine_ARTrackableType ar_trackable_type = ARENGINE_TRACKABLE_INVALID;\nHMS_AREngine_ARTrackable_GetType(arSession, arTrackable, &ar_trackable_type);\nif (ARENGINE_TRACKABLE_PLANE == ar_trackable_type) {\n    AREngine_ARPose *arPose = nullptr;\n    HMS_AREngine_ARPose_Create(arSession, nullptr, 0, &arPose);\n    HMS_AREngine_ARHitResult_GetHitPose(arSession, arHit, arPose);\n    // 判断位姿是否位于平面的多边形范围内。0表示不在范围内，非0表示在范围内。\n    HMS_AREngine_ARPlane_IsPoseInPolygon(arSession, arPlane, arPose, &inPolygon);\n    HMS_AREngine_ARPose_Destroy(arPose);\n    if (!inPolygon) {\n        // 不在平面内，就跳过当前平面。\n        continue;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在碰撞结果位置创建一个新的锚点，并基于此锚点放置虚拟模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在碰撞命中位置创建一个新的锚点。\nAREngine_ARAnchor *anchor = nullptr;\nHMS_AREngine_ARHitResult_AcquireNewAnchor(arSession, arHitResult, &anchor);\n\n// 判断锚点的可跟踪状态\nAREngine_ARTrackingState trackingState = ARENGINE_TRACKING_STATE_STOPPED;\nHMS_AREngine_ARAnchor_GetTrackingState(arSession, anchor, &trackingState);\nif (trackingState != ARENGINE_TRACKING_STATE_TRACKING) {\n    HMS_AREngine_ARAnchor_Release(anchor);\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制模型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_aranchor_getpose",
            children: "HMS_AREngine_ARAnchor_GetPose"
          }), "函数获取锚点位姿，并基于该位姿绘制虚拟模型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取锚点的位姿。\nAREngine_ARPose *pose = nullptr;\nHMS_AREngine_ARPose_Create(arSession, nullptr, 0, &pose);\nHMS_AREngine_ARAnchor_GetPose(arSession, anchor, pose);\n// 将位姿数据转换成4X4的矩阵modelMat。\nHMS_AREngine_ARPose_GetMatrix(arSession, pose, glm::value_ptr(modelMat), 16);\nHMS_AREngine_ARPose_Destroy(pose);\n// 绘制虚拟模型。\n// 开发者可以使用OpenGL进行模型绘制，可参考示例代码：world_render_manager.cpp及world_object_renderer.cpp。\n"
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
857828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
503538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
372493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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