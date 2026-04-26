"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["85832"], {
200349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_3_d_resource_arkgraphics_3_d_resource_environment_arkgraphics_3_d_resource_environment_md_c80_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-3-d-resource-arkgraphics-3-d-resource-environment-arkgraphics-3-d-resource-environment-md-c80.json
var site_docs_arkgraphics_3_d_arkgraphics_3_d_resource_arkgraphics_3_d_resource_environment_arkgraphics_3_d_resource_environment_md_c80_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment/arkgraphics3d-resource-environment","title":"创建并使用环境资源","description":"环境（Environment）：环境是3D场景背景的一种描述，可以基于图片进行创建。通过将一张图片进行正方体或者球体的映射处理，将图片贴在正方体或者球体上，在3D场景中模拟真实的环境。","source":"@site/docs/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment/arkgraphics3d-resource-environment.md","sourceDirName":"arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment","slug":"/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"创建并使用环境资源","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-resource-environment","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建并使用图片资源","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-image/"},"next":{"title":".shader资源文件格式要求","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-environment/arkgraphics3d-resource-environment.md


const frontMatter = {
	title: '创建并使用环境资源',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-resource-environment',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '创建并使用环境资源';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建并使用环境资源",
        children: "创建并使用环境资源"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环境（Environment）：环境是3D场景背景的一种描述，可以基于图片进行创建。通过将一张图片进行正方体或者球体的映射处理，将图片贴在正方体或者球体上，在3D场景中模拟真实的环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D支持用户创建环境资源，定义3D场景的背景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于创建场景、相机、材质、图片等对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Camera, Environment, Geometry, Image, Material, MaterialType, Scene, SceneResourceFactory,\n  SceneResourceParameters, Shader, ShaderMaterial, EnvironmentBackgroundType } from '@kit.ArkGraphics3D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载场景并设置渲染参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用Scene.load()方法加载.glb或.gltf格式的模型文件，并在加载完成后获取Scene对象。随后构建SceneOptions对象，指定场景及渲染模式，用于后续通过Component3D将场景内容渲染到界面中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.scene === null) {\n  // Switched from .gltf to .glb; same content, different format\n  Scene.load($rawfile('gltf/CubeWithFloor/glTF/AnimatedCube.glb'))\n    .then(async (result: Scene) => {\n      // Assign loaded scene to globalScene for unified resource creation\n      globalScene = result;\n      this.scene = result;\n      this.sceneOpt = { scene: this.scene, modelType: ModelType.SURFACE } as SceneOptions;\n      this.rf = this.scene.getResourceFactory();\n      // ...\n    })\n    .catch((error: string) => {\n      console.error('init error: ' + error + '.');\n    });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化相机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相机对象并设置相机启用状态与观察位置，用于后续展示模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.cam = await this.rf.createCamera({ 'name': 'Camera1' });\nthis.cam.enabled = true;\nthis.cam.position.z = 5;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取几何体节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Scene.getNodeByPath()方法获取目标模型的几何体（Geometry）节点，并记录其原始材质，以便在后续修改材质后可进行回退或恢复操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.geom = this.scene.getNodeByPath('rootNode_/Unnamed Node 1/AnimatedCube') as Geometry;\n\n// record original material\nthis.originalMat = this.geom.mesh.subMeshes[0].material;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建环境并绑定图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用SceneResourceFactory.createEnvironment()创建环境对象，并通过createImage()加载环境贴图。设置backgroundType为等距柱状投影背景，将图片绑定到environmentImage，再调整indirectDiffuseFactor等属性以控制环境光强度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function createEnvironmentPromise() : Promise<Environment> {\n  return new Promise((resolve, reject) => {\n    // Ensure the scene is loaded before accessing sceneFactory\n    if (globalScene) {\n      let sceneFactory: SceneResourceFactory = globalScene.getResourceFactory();\n\n      // Manually load environment maps (.ktx/.jpg/.png etc.)\n      let sceneImageParameter: SceneResourceParameters = { name: 'image', uri: $rawfile('image/Cube_BaseColor.png') };\n      let image: Promise<Image> = sceneFactory.createImage(sceneImageParameter);\n      image.then(async (imageEntity: Image) => {\n        // Create Environment\n        let sceneEnvironmentParameter: SceneResourceParameters = { name: 'env' };\n        let env: Promise<Environment> = sceneFactory.createEnvironment(sceneEnvironmentParameter);\n        env.then(async (envEntity: Environment) => {\n          envEntity.backgroundType = EnvironmentBackgroundType.BACKGROUND_EQUIRECTANGULAR;\n          envEntity.environmentImage  = imageEntity;\n          // Set environment related properties\n          envEntity.indirectDiffuseFactor.x = 1;\n          envEntity.indirectDiffuseFactor.y = 1;\n          envEntity.indirectDiffuseFactor.z = 1;\n          envEntity.indirectDiffuseFactor.w = 1;\n          resolve(envEntity);\n        }).catch((err: string) => {\n          console.error('Environment mapping material create failed: ' + err + '.');\n          reject(err);\n        });\n      }).catch((err: string) => {\n        console.error('Image load failed: ' + err);\n        reject(err);\n      });\n    } else {\n      reject('Scene is not loaded yet.');\n    }\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用环境到场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在按钮点击事件中调用createEnvironmentPromise()创建环境资源，并将其赋值给场景的environment属性，使环境背景立即生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('Add to Environment')\n  // ...\n  .onClick(async (): Promise<void> => {\n    console.info('Start to replace with a material of image');\n\n    if (!this.scene || !this.cam) {\n      return;\n    }\n\n    this.env = await createEnvironmentPromise();\n    if (this.env) {\n      this.scene.environment = this.env;\n    }\n  });\n"
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