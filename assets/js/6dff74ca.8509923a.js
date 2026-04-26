"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["745525"], {
172211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_mesh_arengine_c_get_mesh_md_6df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-get-mesh-arengine-c-get-mesh-md-6df.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_mesh_arengine_c_get_mesh_md_6df_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/arengine-c-get-mesh","title":"获取网格扫描信息（C/C++）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/arengine-c-get-mesh.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"获取网格扫描信息（C/C++）","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-mesh","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取深度图（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/"},"next":{"title":"图像跟踪（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-image-track/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-mesh/arengine-c-get-mesh.md


const frontMatter = {
	title: '获取网格扫描信息（C/C++）',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-mesh',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '获取网格扫描信息（C/C++）';

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
  "value": "获取当前环境中的mesh信息",
  "id": "获取当前环境中的mesh信息",
  "level": 3
}, {
  "value": "获取当前mesh信息对应的mesh顶点信息",
  "id": "获取当前mesh信息对应的mesh顶点信息",
  "level": 3
}, {
  "value": "获取当前mesh信息对应的mesh面片信息",
  "id": "获取当前mesh信息对应的mesh面片信息",
  "level": 3
}, {
  "value": "使用完毕后，销毁mesh信息",
  "id": "使用完毕后销毁mesh信息",
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
        id: "获取网格扫描信息cc",
        children: "获取网格扫描信息（C/C++）"
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
      children: ["获取网格扫描信息能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_MESH"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下接口为AR网格扫描相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
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
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirescenemesh",
              children: "HMS_AREngine_ARFrame_AcquireSceneMesh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的mesh信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireverticessize",
              children: "HMS_AREngine_ARSceneMesh_AcquireVerticesSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh的顶点个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquirevertexlist",
              children: "HMS_AREngine_ARSceneMesh_AcquireVertexList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh顶点集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireindexlistsize",
              children: "HMS_AREngine_ARSceneMesh_AcquireIndexListSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh面片的索引个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireindexlist",
              children: "HMS_AREngine_ARSceneMesh_AcquireIndexList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取mesh面片的索引集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_release",
              children: "HMS_AREngine_ARSceneMesh_Release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放当前帧的mesh信息。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个UI界面，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "组件用于显示相机预览画面，并定时触发每一帧绘制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARMesh.ets。\nimport { deviceInfo } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport arEngineDemo from 'libentry.so';\n\n@Builder\nexport function ARMeshBuilder() {\n  ARMesh();\n}\n\n@Component\nstruct ARMesh {\n  pageInfo: NavPathStack = new NavPathStack();\n  private interval: number = -1;\n  private xComponentId: string = 'ARMesh';\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;\n  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })\n          .width('100%')\n          .height('100%')\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onLoad(() => {\n            console.info(`XComponent onLoad ${this.xComponentId}.`);\n            this.interval = setInterval(() => {\n              // 调用更新Native API来更新AR Engine每帧的计算结果\n              arEngineDemo.update(this.xComponentId);\n            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）\n          })\n          .onDestroy(() => {\n            console.info(`XComponent onDestroy ${this.xComponentId}.`);\n            clearInterval(this.interval);\n          })\n      }\n    }\n    .onAppear(() => {\n      arEngineDemo.init(this.resMgr);\n      let config: Int32Array = new Int32Array([1, this.rotation]);\n      arEngineDemo.start(this.xComponentId, config);\n    })\n    .onWillDisappear(() => {\n      arEngineDemo.stop(this.xComponentId);\n    })\n    .onShown(() => {\n      arEngineDemo.show(this.xComponentId);\n    })\n    .onHidden(() => {\n      arEngineDemo.hide(this.xComponentId);\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n}\n"
      })
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
      children: "创建AR会话并配置为开启mesh模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSession *arSession = nullptr;\n// 创建AR会话。\nHMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);\nAREngine_ARConfig *arConfig = nullptr;\n// 创建AR会话配置器。\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 设置mesh模式为开启状态。\nHMS_AREngine_ARConfig_SetMeshMode(arSession, arConfig, ARENGINE_MESH_MODE_ENABLED);\n// 配置器设置给AR会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取当前环境中的mesh信息",
      children: "获取当前环境中的mesh信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arframe_acquirescenemesh",
        children: "HMS_AREngine_ARFrame_AcquireSceneMesh"
      }), "函数，获取当前环境中的mesh信息，并将结果存放在sceneMesh中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARFrame *arFrame = nullptr;\n// 创建AR单帧对象\nHMS_AREngine_ARFrame_Create(arSession, &arFrame);\nAREngine_ARSceneMesh *sceneMesh = nullptr;\n// 获取当前帧的mesh信息\nHMS_AREngine_ARFrame_AcquireSceneMesh(arSession, arFrame, &sceneMesh);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取当前mesh信息对应的mesh顶点信息",
      children: "获取当前mesh信息对应的mesh顶点信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireverticessize",
            children: "HMS_AREngine_ARSceneMesh_AcquireVerticesSize"
          }), "函数，获取mesh顶点信息包含的浮点数数量，每三个浮点数组成一个mesh顶点，将结果存放在meshVerticesSize 中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t meshVerticesSize = 0;\n// 获取mesh顶点信息包含的浮点数数量\nHMS_AREngine_ARSceneMesh_AcquireVerticesSize(arSession, sceneMesh, &meshVerticesSize);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquirevertexlist",
            children: "HMS_AREngine_ARSceneMesh_AcquireVertexList"
          }), "函数，获取mesh顶点信息，并将结果保存在meshVertices中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "float *meshVertices = new float[meshVerticesSize];\n// 获取mesh顶点信息\nHMS_AREngine_ARSceneMesh_AcquireVertexList(arSession, sceneMesh, meshVertices, meshVerticesSize);\n// 获取mesh顶点个数\nint32_t mPointsNum = meshVerticesSize / 3;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取当前mesh信息对应的mesh面片信息",
      children: "获取当前mesh信息对应的mesh面片信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireindexlistsize",
            children: "HMS_AREngine_ARSceneMesh_AcquireIndexListSize"
          }), "函数，获取mesh面片信息对应顶点的索引个数，每三个顶点索引表示一个mesh面片，将结果存放在triangleIndicesSize 中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t triangleIndicesSize = 0;\n// 获取mesh面片信息对应顶点的索引个数\nHMS_AREngine_ARSceneMesh_AcquireIndexListSize(arSession, sceneMesh, &triangleIndicesSize);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arscenemesh_acquireindexlist",
            children: "HMS_AREngine_ARSceneMesh_AcquireIndexList"
          }), "函数，获取mesh面片信息对应顶点的索引列表，并将结果保存在meshTriangleIndices中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t *meshTriangleIndices = new int32_t[triangleIndicesSize];\n// 获取mesh面片信息对应顶点的索引列表\nHMS_AREngine_ARSceneMesh_AcquireIndexList(arSession, sceneMesh, meshTriangleIndices, triangleIndicesSize);\n// 获取mesh面片个数\nint32_t mTrianglesNum = triangleIndicesSize / 3;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用完毕后销毁mesh信息",
      children: "使用完毕后，销毁mesh信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_AREngine_ARSceneMesh_Release(AREngine_ARSceneMesh *sceneMesh);\n"
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