"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["699365"], {
725800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_semantics_arengine_get_semantics_md_19c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-get-semantics-arengine-get-semantics-md-19c.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_semantics_arengine_get_semantics_md_19c_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-get-semantics/arengine-get-semantics","title":"识别平面语义（ArkTS）","description":"约束与限制","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-get-semantics/arengine-get-semantics.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-get-semantics","slug":"/ar-engine-kit-guide/arengine-guide/arengine-get-semantics/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-semantics/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"识别平面语义（ArkTS）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-semantics","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"检测环境中的平面（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-plane/"},"next":{"title":"获取深度估计信息（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-depth/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-get-semantics/arengine-get-semantics.md


const frontMatter = {
	title: '识别平面语义（ArkTS）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-semantics',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '识别平面语义（ArkTS）';

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
  "value": "显示平面语义信息",
  "id": "显示平面语义信息",
  "level": 3
}, {
  "value": "获取语义信息",
  "id": "获取语义信息",
  "level": 3
}, {
  "value": "识别平面语义的自定义方法",
  "id": "识别平面语义的自定义方法",
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
        id: "识别平面语义arkts",
        children: "识别平面语义（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别平面语义能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arfeaturetype",
        children: "ARENGINE_FEATURE_TYPE_SEMANTIC"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取平面语义信息可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplane",
        children: "ARPlane"
      }), "平面对象获取，以下接口为平面相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#artrackablegetpose",
              children: "ARTrackable.getPose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取追踪目标的位姿信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#artrackablegetanchors",
              children: "ARTrackable.getAnchors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取绑定到输入可跟踪对象的锚点对象。"
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplanegetpolygonxz",
              children: "ARPlane.getPolygonXZ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检测到的平面2D顶点数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplanegetsubsumedby",
              children: "ARPlane.getSubsumedBy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取平面的父平面（当平面与另一个平面合并时会生成父平面）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplaneisposeinextents",
              children: "ARPlane.isPoseInExtents"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定位姿是否在平面的边界矩形内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplaneisposeinpolygon",
              children: "ARPlane.isPoseInPolygon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定位姿是否在平面的边界多边形内。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别平面语义之前需要先检测识别环境中的平面，如何检测识别环境中的平面请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-get-plane",
        children: "检测环境中的平面"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "识别平面语义能力所需要导入的模块如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene } from '@kit.ArkGraphics3D';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义变量",
      children: "定义变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义变量planeLabel接收平面类型标签信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let planeLabel: arEngine.ARSemanticPlaneLabel;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示平面语义信息",
      children: "显示平面语义信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先初始化AR会话和AR场景，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arsession#%E5%88%9D%E5%A7%8B%E5%8C%96ar%E4%BC%9A%E8%AF%9D%E5%92%8Car%E5%9C%BA%E6%99%AF",
        children: "初始化AR会话和AR场景"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更改semanticMode为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticmode",
        children: "ARSemanticMode"
      }), ".PLANE，启用平面语义识别能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备界面上显示识别到平面的信息，使用重复调用函数方法在设备界面上实时更新识别到的平面语义信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function ARTargetBuilder(): void {\n  ARTarget();\n}\n\n@Component\nstruct ARTarget {\n  @State arContext?: arViewController.ARViewContext = undefined;\n  // 平面类型\n  @State targetPlaneLabel: arEngine.ARSemanticPlaneLabel = planeLabel;\n  private intervalId: number = -1;\n  // 重复调用函数时间间隔为33ms，即设定为30fps\n  private delayInterval: number = 33;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n\n          // 在屏幕底部显示识别的平面信息\n          Column() {\n            Text(`Label: ${convertSemanticLabel(this.targetPlaneLabel)}`)\n              .infoStyles()\n          }\n          .alignItems(HorizontalAlign.Center)\n          .margin({ bottom: 10 })\n          .alignRules({\n            bottom: { anchor: \"__container__\", align: VerticalAlign.Bottom },\n            middle: { anchor: \"__container__\", align: HorizontalAlign.Center }\n          })\n        }\n      }\n    }\n    .onAppear(() => {\n      this.initARView();\n      // 设定在30fps下更新识别平面语义信息\n      this.intervalId = setInterval(() => {\n        this.targetPlaneLabel = planeLabel;\n      }, this.delayInterval);\n    })\n    .onWillDisappear(() => {\n      // 退出setInterval函数\n      clearInterval(this.intervalId);\n      this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();\n      viewContext.scene = scene;\n      viewContext.callback = new ARViewCallbackImpl();\n      viewContext.config = {\n        type: arEngine.ARType.WORLD,\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticMode: arEngine.ARSemanticMode.PLANE, // 识别平面语义\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.AUTOMATIC,\n        meshMode: arEngine.ARMeshMode.DISABLED,\n        focusMode: arEngine.ARFocusMode.AUTO\n      }\n      viewContext.init().then(() => {\n        this.arContext = viewContext;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);\n      })\n    })\n  }\n\n  private stopARView(): void {\n    // ...\n  }\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n}\n\n// 界面显示文本样式\n@Extend(Text)\nfunction infoStyles() {\n  .fontColor(Color.Yellow)\n  .fontSize(24)\n  .textShadow({\n    radius: 10,\n    color: Color.Black,\n    offsetX: 0,\n    offsetY: 0\n  })\n  .textAlign(TextAlign.Start)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取语义信息",
      children: "获取语义信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
        children: "ARViewCallback"
      }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
        children: "onFrameUpdate"
      }), "方法进行帧数据更新，在设备界面上显示识别到的平面类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加获取语义信息的方法plane.label，获取每一帧识别到的平面语义信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    if (!ctx.session) {\n      return;\n    }\n\n    let arSession: arEngine.ARSession = ctx.session;\n\n    try {\n      let frame: arEngine.ARFrame = arSession.getFrame();\n      let camera: arEngine.ARCamera = frame.getCamera();\n      let trackable: arEngine.ARTrackable[] = [];\n\n      if (camera.state === arEngine.ARTrackingState.TRACKING) {\n        trackable = arSession.getAllTrackables(arEngine.ARTrackableType.PLANE);\n        console.info(`Succeeded in getting tracking plane, length is: ${trackable.length}`);\n      }\n\n      for (let i = 0; i < trackable.length; ++i) {\n        let plane: arEngine.ARPlane = trackable[i] as arEngine.ARPlane;\n\n        // 更新识别的平面语义信息\n        planeLabel = plane.label;\n        console.info(`Succeeded in updating frame data for loop: ${plane.label}`);\n      }\n\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to update data. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "识别平面语义的自定义方法",
      children: "识别平面语义的自定义方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义方法获取顶点数据getVertices、创建索引generateMeshIndex、创建mesh数据generateMeshInput，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-get-plane#%E6%A3%80%E6%B5%8B%E5%B9%B3%E9%9D%A2%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95",
        children: "检测平面的自定义方法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["arrayBufferFloat32ToNumber可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info",
        children: "数据类型转换说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "平面语义标签转换convertSemanticLabel可参考如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function convertSemanticLabel(obj: number): string {\n  let res: string = '';\n  if (obj === 0) {\n    res = 'UNKNOWN';\n  } else if (obj === 1) {\n    res = 'WALL';\n  } else if (obj === 2) {\n    res = 'FLOOR';\n  } else if (obj === 3) {\n    res = 'SEAT';\n  } else if (obj === 4) {\n    res = 'TABLE';\n  } else if (obj === 5) {\n    res = 'CEILING';\n  } else if (obj === 6) {\n    res = 'DOOR';\n  } else if (obj === 7) {\n    res = 'WINDOW';\n  } else if (obj === 8) {\n    res = 'BED';\n  } else if (obj === 9) {\n    res = 'PLANE SPACE';\n  } else if (obj === 10) {\n    res = 'CUBE VOLUME';\n  } else if (obj === 11) {\n    res = 'CUBE SPACE';\n  }\n  return res;\n}\n"
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