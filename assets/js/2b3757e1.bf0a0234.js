"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["242944"], {
108786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_volume_measurement_arengine_volume_measurement_md_2b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-volume-measurement-arengine-volume-measurement-md-2b3.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_volume_measurement_arengine_volume_measurement_md_2b3_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/arengine-volume-measurement","title":"高精几何重建（ArkTS）","description":"约束与限制","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/arengine-volume-measurement.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-volume-measurement","slug":"/ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"高精几何重建（ArkTS）","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-volume-measurement","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"物体摆放（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-arworld/"},"next":{"title":"数据类型转换说明","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/arengine-volume-measurement.md


const frontMatter = {
	title: '高精几何重建（ArkTS）',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-volume-measurement',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '高精几何重建（ArkTS）';

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
  "value": "获取立方体体积数据",
  "id": "获取立方体体积数据",
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
        id: "高精几何重建arkts",
        children: "高精几何重建（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高精几何重建能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arfeaturetype",
        children: "ARENGINE_FEATURE_TYPE_SEMANTIC_DENSE"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高精几何重建主要依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensedata",
        children: "ARSemanticDenseData"
      }), "，以下接口为高精几何重建的相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine",
        children: "AR Engine API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframeacquiresemanticdense",
              children: "ARFrame.acquireSemanticDense"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前帧的高精几何重建对象数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensedataacquirecubedata",
              children: "ARSemanticDenseData.acquireCubeData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个高精几何重建对象的立方体数据信息的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensedatarelease",
              children: "ARSemanticDenseData.release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放高精几何重建对象数据。"
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
      children: "高精几何重建能力所需要导入的模块如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene } from '@kit.ArkGraphics3D';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义变量",
      children: "定义变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义变量cubeVertexData接收立方体顶点数据，定义变量cubeConfidence接收识别出立方体的置信度数据，定义变量cubeLabel接收立方体的语义信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let cubeVertexData: Array<number>;\nlet cubeConfidence: number;\nlet cubeLabel: arEngine.ARSemanticPlaneLabel;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显示预览流",
      children: "显示预览流"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先初始化AR会话和AR场景，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-guide/arengine-arsession#%E5%88%9D%E5%A7%8B%E5%8C%96ar%E4%BC%9A%E8%AF%9D%E5%92%8Car%E5%9C%BA%E6%99%AF",
        children: "初始化AR会话和AR场景"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更改semanticDenseMode为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensemode",
        children: "ARSemanticDenseMode"
      }), ".CUBE_VOLUME，启用体积测量识别能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备界面上显示识别到的几何数据信息，使用重复调用函数方法在设备界面上实时更新识别到的几何数据信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function ARSemanticDenseBuilder(): void {\n  ARSemanticDense();\n}\n\n@Component\nstruct ARSemanticDense {\n  @State arContext?: arViewController.ARViewContext = undefined;\n\n  build(): void {\n    NavDestination() {\n      RelativeContainer() {\n        if (this.arContext) {\n          ARView({ context: this.arContext })\n            .height('100%')\n            .width('100%')\n            .alignRules({\n              center: { anchor: '__container__', align: VerticalAlign.Center },\n              middle: { anchor: '__container__', align: HorizontalAlign.Center }\n            })\n        }\n      }\n    }\n    .onAppear(() => {\n      this.initARView();\n    })\n    .onWillDisappear(() => {\n      this.stopARView();\n    })\n    .onShown(() => {\n      this.resumeARView();\n    })\n    .onHidden(() => {\n      this.pauseARView();\n    })\n    .hideTitleBar(true)\n    .hideBackButton(true)\n    .hideToolBar(true)\n  }\n\n  private initARView(): void {\n    Scene.load().then((scene: Scene) => {\n      let viewContext: arViewController.ARViewContext = new arViewController.ARViewContext();\n      viewContext.scene = scene;\n      viewContext.callback = new ARViewCallbackImpl();\n      viewContext.config = {\n        type: arEngine.ARType.WORLD,\n        planeFindingMode: arEngine.ARPlaneFindingMode.HORIZONTAL_AND_VERTICAL,\n        powerMode: arEngine.ARPowerMode.NORMAL,\n        semanticDenseMode: arEngine.ARSemanticDenseMode.CUBE_VOLUME, // 开启体积测量\n        poseMode: arEngine.ARPoseMode.GRAVITY,\n        depthMode: arEngine.ARDepthMode.DISABLED,\n        meshMode: arEngine.ARMeshMode.DISABLED,\n        focusMode: arEngine.ARFocusMode.AUTO\n      }\n      viewContext.init().then(() => {\n        this.arContext = viewContext;\n        console.info('Succeeded in initializing ARView.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to init ARView. Code is ${err.code}, message is ${err.message}.`);\n      })\n    })\n  }\n\n  private stopARView(): void {\n    // ...\n  }\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取立方体体积数据",
      children: "获取立方体体积数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
        children: "ARViewCallback"
      }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
        children: "onFrameUpdate"
      }), "方法进行帧数据更新，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsessiongetframe",
        children: "ARSession.getFrame"
      }), "方法获取当前帧，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arframeacquiresemanticdense",
        children: "ARFrame.acquireSemanticDense"
      }), "获得当前帧的高精几何重建对象数据，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensedataacquirecubedata",
        children: "ARSemanticDenseData.acquireCubeData"
      }), "从高精几何重建对象数据中获取识别到的立方体体积数据，相关变量定义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F",
        children: "定义变量"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  async onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): Promise<void> {\n    if (!ctx.session) {\n      return;\n    }\n\n    let arSession: arEngine.ARSession = ctx.session;\n\n    try {\n      let frame: arEngine.ARFrame = arSession.getFrame();\n      if (frame) {\n        let semanticData: arEngine.ARSemanticDenseData = frame.acquireSemanticDense();\n        if(semanticData){\n          if(semanticData.cubeDataSize>0){\n            // 获取第一个Cube的体积数据\n            let semanticCubeData: arEngine.ARSemanticDenseCubeData = semanticData.acquireCubeData()[0];\n            cubeVertexData = semanticCubeData.vertexData;\n            cubeConfidence = semanticCubeData.confidence;\n            cubeLabel = semanticCubeData.label;\n          }\n          await semanticData.release();\n        }\n      }\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to update data. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n}\n"
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