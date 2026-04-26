"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["388423"], {
451167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_3_d_api_arkgraphics_3_d_arkts_graphics_3_d_js_apis_inner_scene_js_apis_inner_scene_md_05f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-3-d-api-arkgraphics-3-d-arkts-graphics-3-d-js-apis-inner-scene-js-apis-inner-scene-md-05f.json
var site_docs_ref_arkgraphics_3_d_api_arkgraphics_3_d_arkts_graphics_3_d_js_apis_inner_scene_js_apis_inner_scene_md_05f_namespaceObject = JSON.parse('{"id":"arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene","title":"Scene","description":"本模块作为ArkGraphics 3D基础模块，提供SceneResourceParameters、SceneNodeParameters等通用数据类型。同时提供glTF模型加载，场景元素、资源创建等基础方法。","source":"@site/docs-ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene.md","sourceDirName":"arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene","slug":"/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene","permalink":"/harmonyos-docs-site/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Scene","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene","kit":"图形","last_updated":"2026-04-22","slug":"js-apis-inner-scene"},"sidebar":"ref","previous":{"title":"@ohos.graphics.scene (ArkGraphics 3D模块)","permalink":"/harmonyos-docs-site/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/js-apis-scene/js-apis-scene"},"next":{"title":"SceneNode","permalink":"/harmonyos-docs-site/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene.md


const frontMatter = {
	title: 'Scene',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'js-apis-inner-scene'
};
const contentTitle = 'Scene';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "SceneResourceParameters",
  "id": "sceneresourceparameters",
  "level": 2
}, {
  "value": "SceneNodeParameters",
  "id": "scenenodeparameters",
  "level": 2
}, {
  "value": "RaycastResult20+",
  "id": "raycastresult20",
  "level": 2
}, {
  "value": "RaycastParameters20+",
  "id": "raycastparameters20",
  "level": 2
}, {
  "value": "RenderResourceFactory20+",
  "id": "renderresourcefactory20",
  "level": 2
}, {
  "value": "createShader20+",
  "id": "createshader20",
  "level": 3
}, {
  "value": "createImage20+",
  "id": "createimage20",
  "level": 3
}, {
  "value": "createMesh20+",
  "id": "createmesh20",
  "level": 3
}, {
  "value": "createSampler20+",
  "id": "createsampler20",
  "level": 3
}, {
  "value": "createScene20+",
  "id": "createscene20",
  "level": 3
}, {
  "value": "CameraParameters21+",
  "id": "cameraparameters21",
  "level": 2
}, {
  "value": "EffectParameters21+",
  "id": "effectparameters21",
  "level": 2
}, {
  "value": "SceneResourceFactory",
  "id": "sceneresourcefactory",
  "level": 2
}, {
  "value": "createCamera",
  "id": "createcamera",
  "level": 3
}, {
  "value": "createCamera21+",
  "id": "createcamera21",
  "level": 3
}, {
  "value": "createLight",
  "id": "createlight",
  "level": 3
}, {
  "value": "createNode",
  "id": "createnode",
  "level": 3
}, {
  "value": "createMaterial",
  "id": "creatematerial",
  "level": 3
}, {
  "value": "createEnvironment",
  "id": "createenvironment",
  "level": 3
}, {
  "value": "createGeometry18+",
  "id": "creategeometry18",
  "level": 3
}, {
  "value": "createEffect21+",
  "id": "createeffect21",
  "level": 3
}, {
  "value": "SceneComponent20+",
  "id": "scenecomponent20",
  "level": 2
}, {
  "value": "RenderContext20+",
  "id": "rendercontext20",
  "level": 2
}, {
  "value": "getRenderResourceFactory20+",
  "id": "getrenderresourcefactory20",
  "level": 3
}, {
  "value": "loadPlugin20+",
  "id": "loadplugin20",
  "level": 3
}, {
  "value": "registerResourcePath20+",
  "id": "registerresourcepath20",
  "level": 3
}, {
  "value": "RenderConfiguration23+",
  "id": "renderconfiguration23",
  "level": 2
}, {
  "value": "RenderParameters15+",
  "id": "renderparameters15",
  "level": 2
}, {
  "value": "Scene",
  "id": "scene-1",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "load",
  "id": "load",
  "level": 3
}, {
  "value": "getNodeByPath",
  "id": "getnodebypath",
  "level": 3
}, {
  "value": "getResourceFactory",
  "id": "getresourcefactory",
  "level": 3
}, {
  "value": "destroy",
  "id": "destroy",
  "level": 3
}, {
  "value": "importNode18+",
  "id": "importnode18",
  "level": 3
}, {
  "value": "importScene18+",
  "id": "importscene18",
  "level": 3
}, {
  "value": "renderFrame15+",
  "id": "renderframe15",
  "level": 3
}, {
  "value": "createComponent20+",
  "id": "createcomponent20",
  "level": 3
}, {
  "value": "getComponent20+",
  "id": "getcomponent20",
  "level": 3
}, {
  "value": "getDefaultRenderContext20+",
  "id": "getdefaultrendercontext20",
  "level": 3
}, {
  "value": "cloneNode23+",
  "id": "clonenode23",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "scene",
        children: "Scene"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块作为ArkGraphics 3D基础模块，提供SceneResourceParameters、SceneNodeParameters等通用数据类型。同时提供glTF模型加载，场景元素、资源创建等基础方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462345)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 12开始支持，后续版本的新增接口，采用上角标标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["关于.shader资源文件，具体请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource",
          children: ".shader资源文件格式要求"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneResourceParameters, SceneNodeParameters, RaycastResult, RaycastParameters,RenderResourceFactory,\n  SceneResourceFactory, SceneComponent, RenderContext, RenderConfiguration, RenderParameters, Scene } from '@kit.ArkGraphics3D';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sceneresourceparameters",
      children: "SceneResourceParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景资源参数对象，包含name和uri，用于提供场景资源的名称以及3D场景所需的资源文件路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要创建资源的名称，可由开发者自定填写，用于标识该场景资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D场景所需的资源文件路径。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Shader, SceneResourceParameters, SceneResourceFactory, Scene } from '@kit.ArkGraphics3D';\n\nfunction createShaderPromise(): Promise<Shader> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n\n      // 创建shader资源（通过SceneResourceParameters配置），路径和文件名可根据项目实际资源自定义\n      let sceneResourceParameter: SceneResourceParameters = { name: \"shaderResource\",\n        uri: $rawfile(\"shaders/custom_shader/custom_material_sample.shader\") };\n      let shader: Shader = await sceneFactory.createShader(sceneResourceParameter);\n      resolve(shader);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenenodeparameters",
      children: "SceneNodeParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景节点参数对象，它用于提供场景节点层次中的名称和路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要创建的节点名称，可由开发者自定义填写，用于标识场景节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点层次中的路径。用于指定创建的摄影机、灯光或节点在场景节点层次中的放置位置。每层之间使用'/'符号进行分割。如果未提供，则将其设置为根节点的子节点。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneNodeParameters, SceneResourceFactory, Scene, Node } from '@kit.ArkGraphics3D';\n\nfunction createNodePromise() : Promise<Node> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n\n      // 创建SceneNodeParameters类型变量并以此创建node\n      let sceneNodeParameter: SceneNodeParameters = { name: \"empty_node\",\n        path:\"/rootNode_/empty_node\" };\n      let node: Node = await sceneFactory.createNode(sceneNodeParameter);\n      resolve(node);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "raycastresult20",
      children: "RaycastResult20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "射线检测命中结果对象，包含被射线击中的3D物体详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被射线击中的3D场景节点，可通过该节点操作目标物体（如移动、旋转、隐藏）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "centerDistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命中物体包围盒中心到摄像机中心的距离，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hitPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#position3",
              children: "Position3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "射线与物体碰撞点的精确世界坐标（{x: number, y: number, z: number}），单位为世界坐标系下的场景单位（比如cm、m、km等）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "raycastparameters20",
      children: "RaycastParameters20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "射线检测参数配置，用于定义射线检测的行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rootNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "限定检测范围：仅检测该节点及其子节点。未设置时检测全场景。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "renderresourcefactory20",
      children: "RenderResourceFactory20+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于创建可在共享", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rendercontext20",
        children: "RenderContext"
      }), "的多个场景（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scene-1",
        children: "Scene"
      }), "）中共享的渲染资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createshader20",
      children: "createShader20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createShader(params: SceneResourceParameters): Promise<Shader>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定场景资源参数创建一个着色器，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneresourceparameters",
              children: "SceneResourceParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建着色器的参数。详细.shader文件格式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource",
              children: ".shader资源文件格式要求"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#shader",
              children: "Shader"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的着色器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Shader, SceneResourceParameters, Scene, RenderContext, RenderResourceFactory } from '@kit.ArkGraphics3D';\n\nfunction createShaderResource(): Promise<Shader> {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    return Promise.reject(new Error(\"RenderContext is null\"));\n  }\n  const renderResourceFactory: RenderResourceFactory = renderContext.getRenderResourceFactory();\n  // 创建shader资源，路径和文件名可根据项目实际资源自定义\n  let shaderParams: SceneResourceParameters = {\n    name: \"custom_shader\",\n    uri: $rawfile(\"shaders/custom_shader/custom_material_sample.shader\")\n  };\n  return renderResourceFactory.createShader(shaderParams);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createimage20",
      children: "createImage20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createImage(params: SceneResourceParameters): Promise<Image>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定场景资源参数创建一个图像资源，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneresourceparameters",
              children: "SceneResourceParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建图像的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#image",
              children: "Image"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的图像对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Image, SceneResourceParameters, Scene, RenderContext, RenderResourceFactory } from '@kit.ArkGraphics3D';\n\nfunction createImageResource(): Promise<Image> {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    return Promise.reject(new Error(\"RenderContext is null\"));\n  }\n  const renderResourceFactory: RenderResourceFactory = renderContext.getRenderResourceFactory();\n  // 加载图片资源，路径和文件名可根据项目实际资源自定义\n  let imageParams: SceneResourceParameters = {\n    name: \"sampleImage\",\n    uri: $rawfile(\"image/Cube_BaseColor.png\")\n  };\n  return renderResourceFactory.createImage(imageParams);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createmesh20",
      children: "createMesh20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定场景资源参数和几何体定义（GeometryDefinition）创建一个网格资源（MeshResource），使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneresourceparameters",
              children: "SceneResourceParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建网格资源的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "geometry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#geometrydefinition18",
              children: "GeometryDefinition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "几何形状定义，描述要创建的网格形状。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#meshresource18",
              children: "MeshResource"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的网格资源对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneResourceParameters, Scene, CustomGeometry, PrimitiveTopology, RenderContext, RenderResourceFactory,\n  MeshResource }  from '@kit.ArkGraphics3D';\n\nfunction createMeshResource(): Promise<MeshResource> {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    return Promise.reject(new Error(\"RenderContext is null\"));\n  }\n  const renderResourceFactory: RenderResourceFactory = renderContext.getRenderResourceFactory();\n  const geometry = new CustomGeometry();\n  geometry.vertices = [\n    { x: 0, y: 0, z: 0 },\n    { x: 1, y: 0, z: 0 },\n    { x: 1, y: 1, z: 0 },\n    { x: 0, y: 1, z: 0 },\n    { x: 0, y: 0, z: 1 },\n    { x: 1, y: 0, z: 1 },\n    { x: 1, y: 1, z: 1 },\n    { x: 0, y: 1, z: 1 }\n  ];\n  geometry.indices = [\n    0, 1, 2, 2, 3, 0,     // front\n    4, 5, 6, 6, 7, 4,     // back\n    0, 4, 5, 5, 1, 0,     // bottom\n    1, 5, 6, 6, 2, 1,     // right\n    3, 2, 6, 6, 7, 3,     // top\n    3, 7, 4, 4, 0, 3      // left\n  ];\n  geometry.topology = PrimitiveTopology.TRIANGLE_LIST;\n  geometry.normals = [\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 },\n    { x: 0, y: 0, z: 1 }\n  ];\n  geometry.uvs = [\n    { x: 0, y: 0 },\n    { x: 1, y: 0 },\n    { x: 1, y: 1 },\n    { x: 0, y: 1 },\n    { x: 0, y: 0 },\n    { x: 1, y: 0 },\n    { x: 1, y: 1 },\n    { x: 0, y: 1 }\n  ];\n  geometry.colors = [\n    { r: 1, g: 0, b: 0, a: 1 },\n    { r: 0, g: 1, b: 0, a: 1 },\n    { r: 0, g: 0, b: 1, a: 1 },\n    { r: 1, g: 1, b: 0, a: 1 },\n    { r: 1, g: 0, b: 1, a: 1 },\n    { r: 0, g: 1, b: 1, a: 1 },\n    { r: 1, g: 1, b: 1, a: 1 },\n    { r: 0, g: 0, b: 0, a: 1 }\n  ];\n  // 加载图片资源，路径和文件名可根据项目实际资源自定义\n  let sceneResourceParameter: SceneResourceParameters = {\n    name: \"cubeMesh\",\n    uri: $rawfile(\"image/Cube_BaseColor.png\")\n  };\n  return renderResourceFactory.createMesh(sceneResourceParameter, geometry);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createsampler20",
      children: "createSampler20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createSampler(params:SceneResourceParameters): Promise<Sampler>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定场景资源参数创建一个采样器资源，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneresourceparameters",
              children: "SceneResourceParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建采样器的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#sampler20",
              children: "Sampler"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的采样器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneResourceParameters, Scene, RenderContext, RenderResourceFactory, Sampler } from '@kit.ArkGraphics3D';\n\nfunction createSamplerResource(): Promise<Sampler> {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    return Promise.reject(new Error(\"RenderContext is null\"));\n  }\n  const renderResourceFactory: RenderResourceFactory = renderContext.getRenderResourceFactory();\n  // 加载图片资源，路径和文件名可根据项目实际资源自定义\n  let samplerParams: SceneResourceParameters = {\n    name: \"sampler1\",\n    uri: $rawfile(\"image/Cube_BaseColor.png\")\n  };\n  return renderResourceFactory.createSampler(samplerParams);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createscene20",
      children: "createScene20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createScene(uri?: ResourceStr): Promise<Scene>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指定的资源URI创建一个新的场景。如果不指定URI，则创建一个空场景，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建场景使用的资源路径，如果未传入资源路径，则默认创建一个空场景。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scene-1",
              children: "Scene"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的场景对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderResourceFactory } from '@kit.ArkGraphics3D';\n\n// fromFile=true：从指定glb文件加载场景，fromFile=false：创建一个空场景，此参数是为了示例展示两种常见场景创建方式\nfunction createScenePromise(fromFile: boolean = false): Promise<Scene> {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    return Promise.reject(new Error(\"RenderContext is null\"));\n  }\n\n  const renderResourceFactory: RenderResourceFactory = renderContext.getRenderResourceFactory();\n  if (fromFile) {\n    // 创建场景并加载.gltf或.glb文件作为初始内容，路径和名称可根据项目实际资源自定义\n    return renderResourceFactory.createScene($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n  } else {\n    // 创建空场景\n    return renderResourceFactory.createScene();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cameraparameters21",
      children: "CameraParameters21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机创建参数配置，用于定义相机创建的额外选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "msaa22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机是否使能MSAA，true表示使能MSAA，false表示不使能MSAA。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renderingPipeline21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#renderingpipelinetype21",
              children: "RenderingPipelineType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择初始渲染管线类型，默认为轻量级前向渲染管线类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "effectparameters21",
      children: "EffectParameters21+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["特效参数配置，用于指定创建特效时所需的特效ID，作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createeffect21",
        children: "createEffect"
      }), "接口的入参来创建特效对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建特效的ID，固定格式为'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'，比如'e68a7f45-2d21-4a0d-9aef-7d9c825d3f12'。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sceneresourcefactory",
      children: "SceneResourceFactory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于创建3D场景中资源的接口，例如相机、光源等，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#renderresourcefactory20",
        children: "RenderResourceFactory"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createcamera",
      children: "createCamera"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCamera(params: SceneNodeParameters): Promise<Camera>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据节点参数创建相机，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenenodeparameters",
              children: "SceneNodeParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#camera",
              children: "Camera"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回相机对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneNodeParameters, Camera, SceneResourceFactory, Scene } from '@kit.ArkGraphics3D';\n\nfunction createCameraPromise(): Promise<Camera> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      let sceneCameraParameter: SceneNodeParameters = { name: \"camera1\" };\n      // 创建相机\n      let camera: Camera = await sceneFactory.createCamera(sceneCameraParameter);\n      resolve(camera);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createcamera21",
      children: "createCamera21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据节点参数与相机参数创建相机，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenenodeparameters",
              children: "SceneNodeParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cameraParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cameraparameters21",
              children: "CameraParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#camera",
              children: "Camera"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回相机对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneNodeParameters, Camera, SceneResourceFactory, Scene, CameraParameters,\n  RenderingPipelineType } from '@kit.ArkGraphics3D';\n\nfunction createCameraPromise(): Promise<Camera> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      let nodeParameter: SceneNodeParameters = { name: \"camera1\" };\n      let camParameter: CameraParameters = {renderingPipeline: RenderingPipelineType.FORWARD};\n      // 创建相机\n      let camera: Camera = await sceneFactory.createCamera(nodeParameter, camParameter);\n      resolve(camera);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createlight",
      children: "createLight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据节点参数和灯光类型创建灯光，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenenodeparameters",
              children: "SceneNodeParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lightType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#lighttype",
              children: "LightType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灯光类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#light",
              children: "Light"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回灯光对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneNodeParameters, LightType, Light, SceneResourceFactory, Scene } from '@kit.ArkGraphics3D';\n\nfunction createLightPromise() : Promise<Light> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      let sceneLightParameter: SceneNodeParameters = { name: \"light\" };\n      // 创建平行光\n      let light: Light = await sceneFactory.createLight(sceneLightParameter, LightType.DIRECTIONAL);\n      resolve(light);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnode",
      children: "createNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(params: SceneNodeParameters): Promise<Node>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建节点，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenenodeparameters",
              children: "SceneNodeParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回节点对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneNodeParameters, SceneResourceFactory, Scene, Node } from '@kit.ArkGraphics3D';\n\nfunction createNodePromise(): Promise<Node> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      let sceneNodeParameter: SceneNodeParameters = { name: \"empty_node\",\n        path:\"/rootNode_/empty_node\" };\n      // 创建节点\n      let node: Node = await sceneFactory.createNode(sceneNodeParameter);\n      resolve(node);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creatematerial",
      children: "createMaterial"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据场景资源参数和材质类型创建材质，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneresourceparameters",
              children: "SceneResourceParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景资源参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "materialType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#materialtype",
              children: "MaterialType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "材质类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#material",
              children: "Material"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回材质对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MaterialType, Material, SceneResourceParameters, SceneResourceFactory, Scene } from '@kit.ArkGraphics3D';\n\nfunction createMaterialPromise() : Promise<Material> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      let sceneMaterialParameter: SceneResourceParameters = { name: \"material\" };\n      // 创建材质\n      let material: Material = await sceneFactory.createMaterial(sceneMaterialParameter, MaterialType.SHADER);\n      resolve(material);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createenvironment",
      children: "createEnvironment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createEnvironment(params: SceneResourceParameters): Promise<Environment>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据场景资源参数创建环境，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sceneresourceparameters",
              children: "SceneResourceParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景资源参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#environment",
              children: "Environment"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回环境对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Environment, SceneResourceParameters, SceneResourceFactory, Scene } from '@kit.ArkGraphics3D';\n\nfunction createEnvironmentPromise(): Promise<Environment> {\n  return new Promise((resolve, reject) => {\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n    scene.then(async (result: Scene) => {\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      // 加载环境贴图资源，路径和文件名可根据项目实际资源自定义\n      let sceneEnvironmentParameter: SceneResourceParameters = { name: \"env\", uri: $rawfile(\"KTX/quarry_02_2k_radiance.ktx\") };\n      // 创建Environment\n      let env: Environment = await sceneFactory.createEnvironment(sceneEnvironmentParameter);\n      resolve(env);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creategeometry18",
      children: "createGeometry18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据场景节点参数和网格数据创建几何对象，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenenodeparameters",
              children: "SceneNodeParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#meshresource18",
              children: "MeshResource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网格数据参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#geometry",
              children: "Geometry"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回几何对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneResourceFactory, Scene, Geometry, CubeGeometry } from '@kit.ArkGraphics3D';\n\nfunction createGeometryPromise() : Promise<Geometry> {\n  return new Promise((resolve, reject) => {\n    let scene: Promise<Scene> = Scene.load();\n    scene.then(async (result: Scene | undefined) => {\n      if (!result) {\n        return;\n      }\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      // 创建立方体几何数据\n      let cubeGeom = new CubeGeometry();\n      cubeGeom.size = { x: 1, y: 1, z: 1 };\n      // 根据立方体几何数据创建网格资源\n      let meshRes = await sceneFactory.createMesh({ name: \"MeshName\" }, cubeGeom);\n      console.info(\"TEST createGeometryPromise\");\n      // 根据场景节点参数和网格资源创建几何对象\n      let geometry: Geometry = await sceneFactory.createGeometry({ name: \"GeometryName\" }, meshRes);\n      resolve(geometry);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createeffect21",
      children: "createEffect21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createEffect(params: EffectParameters): Promise<Effect>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据特效参数创建特效对象，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#effectparameters21",
              children: "EffectParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#effect21",
              children: "Effect"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回特效对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneResourceFactory, Scene, Effect, EffectParameters } from '@kit.ArkGraphics3D';\n\nfunction createEffect() : Promise<Effect> {\n  return new Promise((resolve, reject) => {\n    let scene: Promise<Scene> = Scene.load();\n    scene.then(async (result: Scene | undefined) => {\n      if (!result) {\n        return;\n      }\n      let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n      // 特效ID，固定格式为'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'，比如'e68a7f45-2d21-4a0d-9aef-7d9c825d3f12'\n      let params: EffectParameters = {effectId: \"e68a7f45-2d21-4a0d-9aef-7d9c825d3f12\"}\n      let effect: Effect = await sceneFactory.createEffect(params);\n      resolve(effect);\n    }).catch((error: Error) => {\n      console.error('Scene load failed:', error);\n      reject(error);\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenecomponent20",
      children: "SceneComponent20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示基础场景组件，用于描述场景节点的组件信息，包括组件名称及其对应的属性集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要创建场景组件的名称，可由开发者自定填写，用于标识场景组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#vec2",
              children: "Vec2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#vec3",
              children: "Vec3"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rendercontext20",
      children: "RenderContext20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义了所有渲染资源的上下文。在同一渲染上下文中创建的多个场景之间，可以共享渲染资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getrenderresourcefactory20",
      children: "getRenderResourceFactory20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRenderResourceFactory() : RenderResourceFactory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取渲染资源工厂，提供创建不同渲染资源的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#renderresourcefactory20",
              children: "RenderResourceFactory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个RenderResourceFactory实例，用于创建渲染资源。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext, RenderResourceFactory } from '@kit.ArkGraphics3D';\n\nfunction getRenderResourceFactory(): void {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    console.error(\"RenderContext is null\");\n    return;\n  }\n  const renderResourceFactory: RenderResourceFactory = renderContext.getRenderResourceFactory();\n  console.info(\"TEST getRenderResourceFactory\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loadplugin20",
      children: "loadPlugin20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "loadPlugin(name: string): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于加载指定名称的插件，通过插件名称查找并加载对应的插件资源，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要加载的插件名称，必须是系统预定义或已注册且可用的插件名称，且符合命名规范。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个Promise对象，解析结果为boolean类型，表示插件加载是否成功。true表示加载成功，false表示加载失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext } from '@kit.ArkGraphics3D';\n\nfunction loadPlugin(): Promise<boolean> {\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (!renderContext) {\n    console.error(\"RenderContext is null\");\n    return Promise.reject(new Error(\"RenderContext is null\"));\n  }\n  return renderContext.loadPlugin(\"pluginName\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registerresourcepath20",
      children: "registerResourcePath20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerResourcePath(protocol: string, uri: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册shader等资产文件所在的路径目录及其检索名，通过检索名查找并替换shader内部关联文件的路径描述，找到对应的资产路径目录，实现资产及其关联文件的正确加载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的路径检索名，用作shader内部关联文件路径的前缀标识，必须是系统未预定义或未注册且非空的检索名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要注册的资产路径目录，与检索名对应，shader加载时会将路径中的检索名前缀替换为该目录，必须是资产文件所在文件夹路径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回资产文件路径是否注册成功。true表示注册成功；false表示注册失败，可能原因为检索名已被注册或输入参数不可用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext } from '@kit.ArkGraphics3D';\n\nfunction registerResourcePath(): void {\n  // 创建shader资源，路径和文件名可根据项目实际资源自定义\n  Scene.load($rawfile(\"shaders/custom_shader/custom_material_sample.shader\"))\n    .then(() => {\n      const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n      if (!renderContext) {\n        console.error(\"RenderContext is null\");\n        return false;\n      }\n      // 注册路径检索名\"myproto\"及其对应的资产路径目录\"OhosRawFile://shaders/custom_shader/\"\n      // 当shader内部通过检索名引用关联文件，如路径为\"myproto://textures/base.png\"，\n      // 系统会将\"myproto://\"替换为\"OhosRawFile://shaders/custom_shader/\"，\n      // 最终从\"OhosRawFile://shaders/custom_shader/textures/base.png\"加载关联文件\n      return renderContext.registerResourcePath(\"myproto\", \"OhosRawFile://shaders/custom_shader/\");\n    })\n    .then(result => {\n      if (result) {\n        console.info(\"resource path registration success\");\n      } else {\n        console.error(\"resource path registration failed\");\n      }\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "renderconfiguration23",
      children: "RenderConfiguration23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染配置接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadowResolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-types/js-apis-inner-scene-types#vec2",
              children: "Vec2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示全局阴影贴图分辨率，单位为像素（px）。默认值为undefined，表示阴影贴图分辨率设置为1024 * 1024。输入的值需要大于0才能正确生效。如果输入值为浮点数则自动截取整数部分；如果输入值小于或等于0则无视该输入，维持原有配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "renderparameters15",
      children: "RenderParameters15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染参数接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alwaysRender15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否每一帧都渲染。true表示每一帧都渲染，false表示按需渲染。默认值为true。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scene-1",
      children: "Scene"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#environment",
              children: "Environment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#animation",
              children: "Animation"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画数组，用于保存3D场景中的动画对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renderConfiguration23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#renderconfiguration23",
              children: "RenderConfiguration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染配置接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load",
      children: "load"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static load(uri?: ResourceStr): Promise<Scene>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过传入的资源路径加载资源，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待加载的模型文件资源路径，默认值为undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scene-1",
              children: "Scene"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回场景对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：通过rawfile加载（相对路径）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene } from '@kit.ArkGraphics3D';\n\nfunction loadModel(): void {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n  scene.then((result: Scene) => {\n    console.info(\"Scene loaded, root node: \" + result.root?.name);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：通过绝对路径加载（从应用沙盒目录/data/storage/el2/base/files加载模型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { Scene } from '@kit.ArkGraphics3D';\n\nasync function loadModelFromAbsolutePath(context: common.UIAbilityContext): Promise<void> {\n  // 获取应用沙盒目录（Scene.load仅能读取应用自身写入的文件，不能读取hdc/adb push写入的文件）\n  const appCtx = context.getApplicationContext();\n  const filesDir = appCtx.filesDir; // /data/storage/el2/base/files\n\n  // 从rawfile读取模型内容（实际使用中也可以替换为其他来源的数据）\n  // 使用.glb文件更易于复制加载；若为.gltf，请将其.bin和贴图文件一并复制到同一目录\n  const src = 'gltf/CubeWithFloor/glTF/AnimatedCube.glb';\n  const load_uri = `${filesDir}/AnimatedCube.glb`;\n\n  // 写入模型文件到应用沙盒目录，生成可被Scene.load(绝对路径)访问的实际文件\n  const rawData = await context.resourceManager.getRawFileContent(src);\n  const file = fileIo.openSync(load_uri, fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC | fileIo.OpenMode.WRITE_ONLY);\n  fileIo.writeSync(file.fd, rawData.buffer.slice(rawData.byteOffset, rawData.byteOffset + rawData.byteLength));\n  fileIo.closeSync(file);\n\n  // 使用绝对路径加载模型\n  Scene.load(load_uri).then((scene: Scene) => {\n    // 加载成功后的逻辑处理\n  }).catch((error: string) => {\n    console.error('Scene load failed: ' + error);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodebypath",
      children: "getNodeByPath"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodeByPath(path: string, type?: NodeType): Node | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过路径获取节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景节点层次中的路径。每层之间使用'/'符号进行分割。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#nodetype",
              children: "NodeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预期返回的节点类型。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, Node } from '@kit.ArkGraphics3D';\n\nfunction getNode(): void {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n  scene.then(async (result: Scene) => {\n    if (result) {\n         // 寻找指定路径的节点\n        let node : Node | null = result.getNodeByPath(\"rootNode_\");\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getresourcefactory",
      children: "getResourceFactory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getResourceFactory(): SceneResourceFactory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取场景资源工厂对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene#sceneresourcefactory",
              children: "SceneResourceFactory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回场景资源工厂对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SceneResourceFactory, Scene } from '@kit.ArkGraphics3D';\n\nfunction getFactory(): void {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n  scene.then(async (result: Scene) => {\n    if (result) {\n         // 获得SceneResourceFactory对象\n        let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "destroy",
      children: "destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "destroy(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁场景，释放所有的场景资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene } from '@kit.ArkGraphics3D';\n\nfunction destroy(): void {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  let scene: Promise<Scene> = Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.glb\"));\n  scene.then(async (result: Scene) => {\n    if (result) {\n         // 销毁scene\n        result.destroy();\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importnode18",
      children: "importNode18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "importNode(name: string, node: Node, parent: Node | null): Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般用于从其他场景导入节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入节点后的名称，由开发者自定义，无特殊要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被导入的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被导入的节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene } from '@kit.ArkGraphics3D';\n\nfunction ImportNodeTest() {\n  Scene.load().then(async (result: Scene | undefined) => {\n    if (!result) {\n      return;\n    }\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    Scene.load($rawfile(\"gltf/AnimatedCube/glTF/AnimatedCube.glb\"))\n      .then(async (extScene: Scene) => {\n        let extNode = extScene.getNodeByPath(\"rootNode_/Unnamed Node 1/AnimatedCube\");\n        console.info(\"TEST ImportNodeTest\");\n        let node = result.importNode(\"scene\", extNode, result.root);\n        if (node) {\n          node.position.x = 5;\n        }\n      });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importscene18",
      children: "importScene18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "importScene(name: string, scene: Scene, parent: Node | null): Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前场景中导入其他场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导入场景的根节点名称，由开发者自定义，无特殊要求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scene-1",
              children: "Scene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被导入的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被导入场景的根节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene } from '@kit.ArkGraphics3D';\n\nfunction ImportSceneTest() {\n  Scene.load().then(async (result: Scene | undefined) => {\n    if (!result) {\n      return;\n    }\n    // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n    let content = await result.getResourceFactory().createScene($rawfile(\"gltf/DamagedHelmet/glTF/DamagedHelmet.glb\"))\n    console.info(\"TEST ImportSceneTest\");\n    result.importScene(\"helmet\", content, null);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "renderframe15",
      children: "renderFrame15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "renderFrame(params?: RenderParameters): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过该接口可以实现按需渲染，例如控制渲染帧率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#renderparameters15",
              children: "RenderParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染参数，默认值为undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染被成功调度返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene } from '@kit.ArkGraphics3D';\n\nfunction RenderFrameTest() {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  Scene.load($rawfile(\"gltf/DamagedHelmet/glTF/DamagedHelmet.glb\"))\n    .then(async (result: Scene | undefined) => {\n      if (!result) {\n        return;\n      }\n      console.info(\"TEST RenderFrameTest\");\n      result.renderFrame({ alwaysRender: true });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createcomponent20",
      children: "createComponent20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createComponent(node: Node, name: string): Promise<SceneComponent>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在指定节点上创建新的组件，根据组件名称异步创建并附加到节点上，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件需要附加到的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要创建的组件名称，由各插件定义有效名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenecomponent20",
              children: "SceneComponent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回新创建的场景组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, SceneComponent } from '@kit.ArkGraphics3D';\n\nfunction createComponentTest(): Promise<SceneComponent> {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  return Scene.load($rawfile(\"gltf/DamagedHelmet/glTF/DamagedHelmet.glb\"))\n    .then(scene => {\n      if (!scene) {\n        return Promise.reject(new Error(\"Scene load failed\"));\n      }\n      // RenderConfigurationComponent为引擎内置组件，创建时无需依赖插件\n      return scene.createComponent(scene.root, \"RenderConfigurationComponent\");\n    })\n    .then(component => {\n      if (!component) {\n        return Promise.reject(new Error(\"createComponent failed\"));\n      }\n      return component;\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcomponent20",
      children: "getComponent20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getComponent(node: Node, name: string): SceneComponent | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的组件名称，从给定节点上获取对应的组件实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件附加的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要获取的组件名称，必须为系统预定义或已注册的自定义组件名称，且需符合命名规范。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scenecomponent20",
              children: "SceneComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene } from '@kit.ArkGraphics3D';\n\nfunction getComponentTest() {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  Scene.load($rawfile(\"gltf/DamagedHelmet/glTF/DamagedHelmet.glb\"))\n    .then(async (result: Scene | undefined) => {\n      if (!result) {\n        console.error(\"Scene load failed\");\n        return;\n      }\n      console.info(\"TEST getComponentTest\");\n      let component = result.getComponent(result.root, \"myComponent\");\n      if (component) {\n        console.info(\"getComponent success\");\n      } else {\n        console.warn(\"Component not found\");\n      }\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getdefaultrendercontext20",
      children: "getDefaultRenderContext20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static getDefaultRenderContext(): RenderContext | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前图形对象所关联的渲染环境信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rendercontext20",
              children: "RenderContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, RenderContext } from '@kit.ArkGraphics3D';\n\nfunction getDefaultRenderContextTest() {\n  console.info(\"TEST getDefaultRenderContextTest\");\n  const renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n  if (renderContext) {\n    console.info(\"getDefaultRenderContext success\");\n  } else {\n    console.error(\"RenderContext is null\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clonenode23",
      children: "cloneNode23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cloneNode(node: Node, parent: Node, name: string): Node | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前所在场景中克隆节点，不支持跨场景克隆节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUi.Graphics3D"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被克隆的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被克隆的节点在当前所在场景中的目标父节点。被克隆的节点node和目标父节点parent需要属于同一个场景scene。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "克隆节点的名称，由开发者自定义，无特殊要求。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes#node",
              children: "Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Scene, Node } from '@kit.ArkGraphics3D';\n\nfunction CloneNode() {\n  // 加载场景资源，支持.gltf和.glb格式，路径和文件名可根据项目实际资源自定义\n  Scene.load($rawfile(\"gltf/CubeWithFloor/glTF/AnimatedCube.gltf\"))\n    .then(async (result: Scene) => {\n      let node = result.getNodeByPath(\"rootNode_/Unnamed Node 1/AnimatedCube\") as Node;\n      let parent = result.root as Node;\n      let name = \"cloneNode_\";\n      let clone = result.cloneNode(node, parent, name);\n      if (clone) {\n        console.info(\"cloneNode success\");\n      } else {\n        console.error(\"cloneNode failed\");\n      }\n    });\n}\n"
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
462345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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