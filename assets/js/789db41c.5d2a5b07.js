"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["330760"], {
474060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_arworld_arengine_arworld_md_789_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-arworld-arengine-arworld-md-789.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_arworld_arengine_arworld_md_789_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-arworld/arengine-arworld","title":"物体摆放（ArkTS）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-arworld/arengine-arworld.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-arworld","slug":"/ar-engine-kit-guide/arengine-guide/arengine-arworld/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-arworld/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"物体摆放（ArkTS）","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arworld","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图像跟踪（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-image-track/"},"next":{"title":"高精几何重建（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-arworld/arengine-arworld.md


const frontMatter = {
	title: '物体摆放（ArkTS）',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arworld',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '物体摆放（ArkTS）';

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
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "定义变量",
  "id": "定义变量",
  "level": 3
}, {
  "value": "显示预览流",
  "id": "显示预览流",
  "level": 3
}, {
  "value": "渲染识别的平面和放置的物体",
  "id": "渲染识别的平面和放置的物体",
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
        id: "物体摆放arkts",
        children: "物体摆放（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节给出了关键开发步骤，完整代码可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/arengine_samplecode_clientdemo_arkts",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["物体摆放能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arfeaturetype",
        children: "ARENGINE_FEATURE_TYPE_SLAM"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AR物体摆放主要依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
        children: "ARViewContext"
      }), "，以下接口为AR物体摆放相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine",
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextinit",
              children: "ARViewContext.init"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
              children: "ARViewContext"
            }), "，初始化AR会话和设置AR渲染场景等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextpause",
              children: "ARViewContext.pause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停相机跟踪与AR场景渲染。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextdestroy",
              children: "ARViewContext.destroy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
              children: "ARViewContext"
            }), "，释放ARView使用资源，包括AR会话与呈现场景销毁，在退出ARView场景时使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextresume",
              children: "ARViewContext.resume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于恢复暂停的相机跟踪与AR场景渲染。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextscene",
              children: "ARViewContext.scene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置ARView的AR场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextscene-1",
              children: "ARViewContext.scene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得的AR呈现场景，用于管理空间节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextsession",
              children: "ARViewContext.session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AR会话，用于获取相关AR环境跟踪、相机跟踪、命中检测等能力，如相机位姿、平面信息、创建锚点等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextconfig",
              children: "ARViewContext.config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AR会话的配置文件，如北向坐标、性能模式等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontextcallback",
              children: "ARViewContext.callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置回调函数，以根据回调功能实现对应业务逻辑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframegetcamera",
              children: "ARFrame.getCamera"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的摄像机参数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframegetupdatedtrackables",
              children: "ARFrame.getUpdatedTrackables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取更新后的指定类型的可追踪对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframehittest",
              children: "ARFrame.hitTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据相机投射光线，获取预览区域中的像素坐标（pixelX和pixelY）来确定射线方向，然后检测这个射线在平面或点云中是否有交点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#aranchorgetpose",
              children: "ARAnchor.getPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取锚点在世界坐标系中的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arhitresultgethitpose",
              children: "ARHitResult.getHitPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取交点位姿。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arhitresultgettrackable",
              children: "ARHitResult.getTrackable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取被命中的可追踪对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arposegetmatrix",
              children: "ARPose.getMatrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将位姿数据转换为一个4x4的矩阵。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AR Engine仅输出识别到的平面数据。为便于用户观察，可使用AGP（Ark Graphics Platform）渲染引擎或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "绘制识别的平面。关于AGP的介绍可以查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-3d/arkgraphics3d-overview",
        children: "ArkGraphics 3D简介"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/graphic_graphic_3d",
        children: "AGP引擎"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于使用ArkTS的任何AR应用，首先需要创建一个AR会话", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
        children: "ARViewContext"
      }), "，用于管理AR Engine的系统状态。AR会话", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcontext",
        children: "ARViewContext"
      }), "的创建可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arsession",
        children: "管理AR会话"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR物体摆放所需要导入的模块如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene, Vec3 } from '@kit.ArkGraphics3D';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义变量",
      children: "定义变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义变量hitAnchorList存储放置物体处的锚点信息、hitPoseList存储放置物体处的位姿信息和statusBarHeight设备状态栏高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户点击设备的坐标和显示预览流的坐标不一致，预览流的窗口略小于设备屏幕，因此需要减去设备状态栏高度以获取准确的点击坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let frame: arEngine.ARFrame;\nlet hitAnchorList: arEngine.ARAnchor[] = [];\nlet hitPoseList: Vec3[] = [];\nlet statusBarHeight: number = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示预览流",
      children: "显示预览流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ARView中加入点击事件，进行碰撞检测，获取锚点位姿数据加入列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function ARWorldBuilder(): void {\n  ARWorld();\n}\n\n@Component\nstruct ARWorld {\n  @State arContext?: arViewController.ARViewContext = undefined;\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n            .onClick((event: ClickEvent) => {\n              this.objectCollisionDetection(event);\n            })\n        }\n      }\n    }\n    .onAppear(() => {\n      this.initARView();\n      this.getAvoidArea();\n    })\n    .onWillDisappear(() => {\n      this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  // 获取用户点击坐标，获取碰撞检测结果\n  private objectCollisionDetection(event: ClickEvent): void {\n    let x: number = this.getUIContext().vp2px(event.windowX);\n    let y: number = this.getUIContext().vp2px(event.windowY) - statusBarHeight;\n    console.info(`Get onclick position, x: ${x} y: ${y}.`);\n\n    try {\n      let result: arEngine.ARHitResult[] = frame.hitTest(x, y);\n      console.info(`The hitResult size is: ${result.length}.`);\n      if (!result) {\n        return;\n      }\n\n      for (let i = 0; i < result.length; i++) {\n        let hitResult: arEngine.ARHitResult = result[i];\n        let trackable: arEngine.ARTrackable = hitResult.getTrackable();\n\n        if (trackable.type !== arEngine.ARTrackableType.PLANE) {\n          continue;\n        }\n\n        let hitPlane: arEngine.ARPlane = trackable as arEngine.ARPlane;\n        let hitPose: arEngine.ARPose = hitResult.getHitPose();\n        let inPolygon: boolean = hitPlane.isPoseInPolygon(hitPose);\n        let distance: number = hitResult.distance;\n        console.info(`The hitResult inPolygon is: ${inPolygon}, distance is: ${distance}.`);\n\n        if (!inPolygon || distance <= 0) {\n          continue;\n        }\n\n        let hitAnchor: arEngine.ARAnchor = hitResult.createAnchor();\n        let pos: Vec3 = hitAnchor.getPose().translation;\n\n        hitPoseList.push(pos);\n        hitAnchorList.push(hitAnchor);\n\n      }\n      console.info('Succeeded in getting hit result.');\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to get hitResults. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();\n      viewContext.scene = scene;\n      viewContext.callback = new ARViewCallbackImpl();\n      viewContext.config = {\n        type: arEngine.ARType.WORLD,\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticMode: arEngine.ARSemanticMode.NONE,\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.AUTOMATIC,\n        meshMode: arEngine.ARMeshMode.DISABLED,\n        focusMode: arEngine.ARFocusMode.AUTO\n      }\n      viewContext.init().then(() => {\n        this.arContext = viewContext;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);\n      })\n    })\n  }\n\n // 获取屏幕上减去状态栏的真实高度（预览流高度）\n  private getAvoidArea(): void {\n    let avoidAreaType: window.AvoidAreaType = window.AvoidAreaType.TYPE_SYSTEM;\n    window.getLastWindow(this.context).then((data) => {\n      // 获取顶部状态栏高度\n      let avoidArea: window.AvoidArea = data.getWindowAvoidArea(avoidAreaType);\n      statusBarHeight = avoidArea.topRect.height;\n      console.info(`The statusBarHeight is ${statusBarHeight}.`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to obtain the window. Code is ${err.code}, message is ${err.message}.`);\n    })\n  }\n\n  private stopARView(): void {\n    // ...\n  }\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渲染识别的平面和放置的物体",
      children: "渲染识别的平面和放置的物体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
        children: "ARViewCallback"
      }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
        children: "onFrameUpdate"
      }), "方法进行帧数据更新，获取平面信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    if (!ctx.session) {\n      return;\n    }\n\n    let arSession: arEngine.ARSession = ctx.session;\n\n    try {\n      frame = arSession.getFrame();\n      let camera: arEngine.ARCamera = frame.getCamera();\n      let trackable: arEngine.ARTrackable[] = [];\n\n      if (camera.state === arEngine.ARTrackingState.TRACKING) {\n        trackable = arSession.getAllTrackables(arEngine.ARTrackableType.PLANE);\n        console.info(`Succeeded in getting tracking plane，length is: ${trackable.length}.`);  // 输出识别到的平面数量\n      }\n\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to update data. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n}\n"
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