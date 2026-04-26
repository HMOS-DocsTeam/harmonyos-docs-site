"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["903682"], {
874100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_plane_arengine_get_plane_md_54e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-get-plane-arengine-get-plane-md-54e.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_get_plane_arengine_get_plane_md_54e_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-get-plane/arengine-get-plane","title":"检测环境中的平面（ArkTS）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-get-plane/arengine-get-plane.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-get-plane","slug":"/ar-engine-kit-guide/arengine-guide/arengine-get-plane/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-plane/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"检测环境中的平面（ArkTS）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-plane","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取设备位姿（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-pose/"},"next":{"title":"识别平面语义（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-get-semantics/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-get-plane/arengine-get-plane.md


const frontMatter = {
	title: '检测环境中的平面（ArkTS）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-get-plane',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '检测环境中的平面（ArkTS）';

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
  "value": "显示预览流",
  "id": "显示预览流",
  "level": 3
}, {
  "value": "检测环境平面",
  "id": "检测环境平面",
  "level": 3
}, {
  "value": "检测平面的自定义方法",
  "id": "检测平面的自定义方法",
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
        id: "检测环境中的平面arkts",
        children: "检测环境中的平面（ArkTS）"
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
      children: ["检测环境平面能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
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
      children: ["检测平面通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplane",
        children: "ARPlane"
      }), "平面对象进行，以下接口为平面相关接口。详细接口和说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "平面检测能力所需的模块导入如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { arEngine, ARView, arViewController } from '@kit.AREngine';\nimport { Node, Scene, Vec3 } from '@kit.ArkGraphics3D';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Matrix4 } from '@kit.ArkUI';\n"
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
        children: "@Builder\nexport function ARPlaneBuilder(): void {\n  ARPlane();\n}\n\n@Component\nstruct ARPlane {\n  @State arContext?: arViewController.ARViewContext = undefined;\n\n  build(): void {\n    // ...\n  }\n\n  private initARView(): void {\n    // ...\n  }\n  private stopARView(): void {\n    // ...\n  }\n  private resumeARView(): void {\n    // ...\n  }\n  private pauseARView(): void {\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测环境平面",
      children: "检测环境平面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallback",
        children: "ARViewCallback"
      }), "，使用其中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arviewcontroller/arengine-api-arviewcontroller#arviewcallbackonframeupdate",
        children: "onFrameUpdate"
      }), "方法进行帧数据更新，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsessiongetalltrackables",
        children: "ARSession.getAllTrackables"
      }), "方法获取所有识别到的平面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ARViewCallbackImpl extends arViewController.ARViewCallback {\n  onAnchorAdd(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onAnchorUpdate(ctx: arViewController.ARViewContext, node: Node, anchor: arEngine.ARAnchor): void {\n    // ...\n  }\n\n  onFrameUpdate(ctx: arViewController.ARViewContext, sysBootTs: number): void {\n    if (!ctx.session) {\n      return;\n    }\n\n    let arSession: arEngine.ARSession = ctx.session;\n\n    try {\n      let frame: arEngine.ARFrame = arSession.getFrame();\n      let camera: arEngine.ARCamera = frame.getCamera();\n      let trackable: arEngine.ARTrackable[] = [];\n\n      if (camera.state === arEngine.ARTrackingState.TRACKING) {\n        trackable = arSession.getAllTrackables(arEngine.ARTrackableType.PLANE);\n        console.info(`Succeeded in getting tracking plane, length is: ${trackable.length}`);  // 打印当前识别到的平面数量\n      }\n\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to update data. Code is ${err.code}, message is ${err.message}.`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测平面的自定义方法",
      children: "检测平面的自定义方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义方法获取顶点数据getVertices、创建索引generateMeshIndex、创建mesh数据generateMeshInput。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取三维空间顶点坐标，第一个入参的位姿矩阵按垂直列排列，第二个坐标点为(x, 0, z, 1)，对应x-z平面。\nexport function getVertices(mat: Matrix4, point: number[]): Vec3[] {\n  let result: Vec3[] = [];\n  for (let i = 0; i < point.length; i += 2) {\n    let single: Vec3 = {\n      x: (mat[2] * point[i] + mat[6] * 0\n        + mat[10] * point[i + 1] + mat[14] * 1.0),\n      y: mat[1] * point[i] + mat[5] * 0\n        + mat[9] * point[i + 1] + mat[13] * 1.0,\n      z: -(mat[0] * point[i] + mat[4] * 0\n        + mat[8] * point[i + 1] + mat[12] * 1.0),\n    }\n    result.push(single);\n  }\n  return result;\n}\n// 创建 ARWorld 的 mesh索引。由于平面是由三角形拼接而成的，因此每个平面上的每个三角形的首个顶点索引都是相同的。\nexport function generateMeshIndex(input: Vec3[][]): number[] {\n  let result: number[] = [];\n  let start: number = 0;\n\n  for (let i = 0; i < input.length; i++) {\n    let length: number = input[i].length;\n\n    for (let j = start + 1; j < start + length - 1; j++) {\n      result.push(start);\n      result.push(j);\n      result.push(j + 1);\n    }\n    start += length;\n  }\n  return result;\n}\n\nexport function generateMeshInput(vex: Vec3[][]): Vec3[] {\n  let result: Vec3[] = [];\n  for (let i = 0; i < vex.length; i++) {\n    let tmp: Vec3[] = vex[i];\n    for (let j = 0; j < tmp.length; j++) {\n      result.push(tmp[j]);\n    }\n  }\n  return result;\n}\n"
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