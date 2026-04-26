"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["926307"], {
809654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_mesh_arengine_get_mesh_md_02f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-get-mesh-arengine-get-mesh-md-02f.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_mesh_arengine_get_mesh_md_02f_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-get-mesh/arengine-get-mesh","title":"获取网格扫描信息（ArkTS）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-get-mesh/arengine-get-mesh.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-get-mesh","slug":"/ar-engine-kit-guide/arengine-guide/arengine-get-mesh/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-mesh/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"获取网格扫描信息（ArkTS）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-mesh","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取深度估计信息（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-depth/"},"next":{"title":"图像跟踪（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-image-track/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-get-mesh/arengine-get-mesh.md


const frontMatter = {
	title: '获取网格扫描信息（ArkTS）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-mesh',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '获取网格扫描信息（ArkTS）';

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
  "value": "获取mesh网格数据",
  "id": "获取mesh网格数据",
  "level": 3
}, {
  "value": "获取网格扫描信息的自定义方法",
  "id": "获取网格扫描信息的自定义方法",
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
        id: "获取网格扫描信息arkts",
        children: "获取网格扫描信息（ArkTS）"
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
      children: ["获取网格扫描信息能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arfeaturetype",
        children: "ARENGINE_FEATURE_TYPE_MESH"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网格扫描主要依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemesh",
        children: "ARSceneMesh"
      }), "，以下接口为AR网格扫描相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgetvertices",
              children: "ARSceneMesh.getVertices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取场景网格中的顶点坐标数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgetvertexnormals",
              children: "ARSceneMesh.getVertexNormals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取场景网格中的顶点法线坐标数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgettriangleindices",
              children: "ARSceneMesh.getTriangleIndices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取场景网格中的三角形索引数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshrelease",
              children: "ARSceneMesh.release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放环境网格数据对象。"
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arhitresultcreateanchor",
              children: "ARHitResult.createAnchor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在交点（intersection）创建一个锚点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arhitresultrelease",
              children: "ARHitResult.release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放命中检测结果对象占用的内存。"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arposerelease",
              children: "ARPose.release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放位姿对象占用的内存。"
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
      children: "网格扫描能力所需要导入的模块如下："
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先初始化AR会话和AR场景，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arsession#%E5%88%9D%E5%A7%8B%E5%8C%96ar%E4%BC%9A%E8%AF%9D%E5%92%8Car%E5%9C%BA%E6%99%AF",
        children: "初始化AR会话和AR场景"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function ARMeshBuilder(): void {\n  ARMesh();\n}\n\n@Component\nstruct ARMesh {\n  @State arContext?: arViewController.ARViewContext = undefined;\n  @State context: Context = this.getUIContext().getHostContext() as Context;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n            .onClick((event) => {\n              this.objectCollisionDetection(event);\n            })\n        }\n      }\n    }\n    .onAppear(() => {\n      this.initARView();\n      this.getAvoidArea();\n    })\n    .onWillDisappear(() => {\n      this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  // 获取用户点击坐标，获取碰撞检测结果\n  private objectCollisionDetection(event: ClickEvent): void {\n    let x: number = this.getUIContext().vp2px(event.windowX);\n    let y: number = this.getUIContext().vp2px(event.windowY) - statusBarHeight;\n    console.info(`Get onclick position, x: ${x} y: ${y}.`);\n\n    try {\n      let result: arEngine.ARHitResult[] = frame.hitTest(x, y);\n      console.info(`The hitResult size is: ${result.length}.`);\n      if (!result) {\n        return;\n      }\n\n      for (let i = 0; i < result.length; i++) {\n        let hitResult: arEngine.ARHitResult = result[i];\n        let distance: number = hitResult.distance;\n\n        if (distance <= 0) {\n          continue;\n        }\n\n        let hitAnchor: arEngine.ARAnchor = hitResult.createAnchor();\n        let pos: Vec3 = hitAnchor.getPose().translation;\n\n        hitPoseList.push(pos);\n        hitAnchorList.push(hitAnchor);\n\n      }\n      console.info('Succeeded in getting hit result.');  // 成功获取碰撞目标\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to get hitResults. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();\n      viewContext.scene = scene;\n      viewContext.callback = new ARViewCallbackImpl();\n      viewContext.config = {\n        type: arEngine.ARType.WORLD,\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticMode: arEngine.ARSemanticMode.NONE,\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.AUTOMATIC,\n        meshMode: arEngine.ARMeshMode.ENABLE,  // 开启mesh\n        focusMode: arEngine.ARFocusMode.AUTO\n      }\n      viewContext.init().then(() => {\n        this.arContext = viewContext;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);\n      })\n    })\n  }\n\n  // 获取屏幕上减去状态栏的真实高度（预览流高度）\n  private getAvoidArea(): void {\n    let avoidAreaType: window.AvoidAreaType = window.AvoidAreaType.TYPE_SYSTEM;\n    window.getLastWindow(this.context).then((data) => {\n      // 获取顶部状态栏高度\n      let avoidArea1: window.AvoidArea = data.getWindowAvoidArea(avoidAreaType);\n      statusBarHeight = avoidArea1.topRect.height;\n      console.info(`The statusBarHeight is ${statusBarHeight}.`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to obtain the window. Code is ${err.code}, message is ${err.message}.`);\n    })\n  }\n\n  private stopARView(): void {\n    // ...\n  }\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取mesh网格数据",
      children: "获取mesh网格数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
        children: "ARViewCallback"
      }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
        children: "onFrameUpdate"
      }), "方法进行帧数据更新，获取mesh网格数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    let planeVertices: number[] = [];\n    let vertexNormals: number[] = [];\n    let triangleIndices: number[] = [];\n\n    if (!ctx.session) {\n      return;\n    }\n\n    let session: arEngine.ARSession | undefined = ctx.session;\n\n    try {\n      frame = session.getFrame();\n      let camera: arEngine.ARCamera = frame.getCamera();\n      let sceneMesh: arEngine.ARSceneMesh = frame.acquireSceneMesh();\n\n      if (camera.state === arEngine.ARTrackingState.TRACKING) {\n        planeVertices = arrayBufferFloat32ToNumber(sceneMesh.getVertices());\n        triangleIndices = arrayBufferInt32ToNumber(sceneMesh.getTriangleIndices());\n        vertexNormals = arrayBufferFloat32ToNumber(sceneMesh.getVertexNormals());\n\n        // 输出mesh数据\n        console.info(`The mesh data planeVertices is: ${planeVertices}, triangleIndices is: ${triangleIndices},\n          vertexNormals is: ${vertexNormals}.`);\n      }\n\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to acquire depth information. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取网格扫描信息的自定义方法",
      children: "获取网格扫描信息的自定义方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义数据转换方法arrayBufferFloat32ToNumber及arrayBufferInt32ToNumber可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info",
        children: "数据类型转换说明"
      }), "。"]
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