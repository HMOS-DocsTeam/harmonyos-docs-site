"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["415299"], {
295456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_depth_arengine_get_depth_md_0e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-get-depth-arengine-get-depth-md-0e9.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_depth_arengine_get_depth_md_0e9_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-get-depth/arengine-get-depth","title":"获取深度估计信息（ArkTS）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-get-depth/arengine-get-depth.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-get-depth","slug":"/ar-engine-kit-guide/arengine-guide/arengine-get-depth/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-depth/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"获取深度估计信息（ArkTS）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-depth","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"识别平面语义（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-semantics/"},"next":{"title":"获取网格扫描信息（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-mesh/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-get-depth/arengine-get-depth.md


const frontMatter = {
	title: '获取深度估计信息（ArkTS）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-depth',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '获取深度估计信息（ArkTS）';

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
  "value": "显示深度估计信息",
  "id": "显示深度估计信息",
  "level": 3
}, {
  "value": "获取深度估计信息",
  "id": "获取深度估计信息",
  "level": 3
}, {
  "value": "获取深度估计信息的自定义方法",
  "id": "获取深度估计信息的自定义方法",
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
        id: "获取深度估计信息arkts",
        children: "获取深度估计信息（ArkTS）"
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
      children: ["获取深度估计信息能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arfeaturetype",
        children: "ARENGINE_FEATURE_TYPE_DEPTH"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取深度估计信息可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframe",
        children: "ARFrame"
      }), "帧对象获取，以下接口为深度估计相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsessiongetframe",
              children: "ARSession.getFrame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AR Engine处理后的一帧数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframeacquiredepthimage16bits",
              children: "ARFrame.acquireDepthImage16Bits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧对应的深度图像对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframeacquiredepthconfidenceimage",
              children: "ARFrame.acquireDepthConfidenceImage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前帧的深度置信度图像。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
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
      children: "获取深度估计信息能力所需的模块导入方法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene } from '@kit.ArkGraphics3D';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义变量",
      children: "定义变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义变量centerDistance深度估计距离和centerConfidence深度置信度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let centerDistance: number;\nlet centerConfidence: number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示深度估计信息",
      children: "显示深度估计信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先初始化AR会话和AR场景，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arsession#%E5%88%9D%E5%A7%8B%E5%8C%96ar%E4%BC%9A%E8%AF%9D%E5%92%8Car%E5%9C%BA%E6%99%AF",
        children: "初始化AR会话和AR场景"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备界面上显示深度估计信息及深度置信度信息，使用重复调用函数方法在设备界面上实时更新深度估计信息及置信度信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function ARDepthBuilder(): void {\n  ARDepth();\n}\n\n@Component\nstruct ARDepth {\n  private delayInterval: number = 33;\n  private intervalId: number = -1;\n  @State arContext?: arViewController.ARViewContext = undefined;\n  @State depthConfidence: number = 0;\n  @State depthDistance: string = '0';\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: \"__container__\", align: VerticalAlign.Center },\n              middle: { anchor: \"__container__\", align: HorizontalAlign.Center }\n            })\n\n          // 在屏幕上显示中心点、深度估计值及置信度\n          Text('●')\n            .fontSize(8)\n            .fontColor(Color.Red)\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n\n          Column() {\n            Text(`${this.depthDistance} | ${this.depthConfidence}`)\n              .fontColor(Color.Yellow)\n              .fontSize(24)\n              .textShadow({\n                radius: 10,\n                color: Color.Black,\n                offsetX: 0,\n                offsetY: 0\n              })\n          }\n          .alignItems(HorizontalAlign.Center)\n          .margin({ bottom: 10 })\n          .alignRules({\n            bottom: { anchor: \"__container__\", align: VerticalAlign.Bottom },\n            middle: { anchor: \"__container__\", align: HorizontalAlign.Center }\n          })\n        }\n      }\n    }\n    .onAppear(() => {\n      this.initARView();\n      this.renderDepthMsg();\n    })\n    .onWillAppear(() => {\n      this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();\n      viewContext.scene = scene;\n      viewContext.callback = new ARViewCallbackImpl();\n      viewContext.config = {\n        type: arEngine.ARType.WORLD,\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticMode: arEngine.ARSemanticMode.NONE,\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.AUTOMATIC,\n        meshMode: arEngine.ARMeshMode.DISABLED,\n        focusMode: arEngine.ARFocusMode.AUTO\n      }\n      viewContext.init().then(() => {\n        this.arContext = viewContext;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}`);\n      })\n    })\n  }\n\n  private renderDepthMsg(): void {\n    this.intervalId = setInterval(() => {\n      if (centerDistance === undefined || centerConfidence === undefined) {\n        return;\n      }\n      this.depthDistance = centerDistance.toFixed(4);\n      this.depthConfidence = centerConfidence;\n    }, this.delayInterval)\n  }\n\n  private stopARView(): void {\n    if (!this.arContext) {\n      return;\n    }\n    try {\n      clearInterval(this.intervalId);\n      this.arContext.destroy();\n      centerDistance = 0;\n      centerConfidence = 0;\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to stop context. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取深度估计信息",
      children: "获取深度估计信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
        children: "ARViewCallback"
      }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
        children: "onFrameUpdate"
      }), "方法获取到AR会话对象后进行深度估计，获取深度信息、置信度信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    if (!ctx.session) {\n      return;\n    }\n\n    let session: arEngine.ARSession | undefined = ctx.session;\n\n    try {\n      let frame: arEngine.ARFrame = session.getFrame();\n      let depthImage: arEngine.ARImage = frame.acquireDepthImage16Bits();\n      let confidenceImage: arEngine.ARImage = frame.acquireDepthConfidenceImage();\n      let depthPlane: number[] = arrayBufferInt32ToNumber(depthImage.planes[0].buffer);\n      let confidencePlane: number[] = arrayBufferInt32ToNumber(confidenceImage.planes[0].buffer);\n      const index: number = depthImage.height * depthImage.width / 2 + depthImage.width / 2;\n\n      centerDistance = depthPlane[index] / 1000;\n      centerConfidence = confidencePlane[index];\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to acquire depth information. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取深度估计信息的自定义方法",
      children: "获取深度估计信息的自定义方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义数据转换方法arrayBufferInt32ToNumber可参考", (0,jsx_runtime.jsx)(_components.a, {
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