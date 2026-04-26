"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["116865"], {
852988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_3_d_scene_arkgraphics_3_d_scene_md_5bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-3-d-scene-arkgraphics-3-d-scene-md-5bb.json
var site_docs_arkgraphics_3_d_arkgraphics_3_d_scene_arkgraphics_3_d_scene_md_5bb_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics3d-scene/arkgraphics3d-scene","title":"ArkGraphics 3D场景搭建以及管理","description":"一个3D场景通常由光源、相机、模型三个关键部分组成。","source":"@site/docs/arkgraphics-3d/arkgraphics3d-scene/arkgraphics3d-scene.md","sourceDirName":"arkgraphics-3d/arkgraphics3d-scene","slug":"/arkgraphics-3d/arkgraphics3d-scene/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-scene/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ArkGraphics 3D场景搭建以及管理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-scene","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGraphics 3D简介","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-overview/"},"next":{"title":"创建并使用材质资源","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics3d-scene/arkgraphics3d-scene.md


const frontMatter = {
	title: 'ArkGraphics 3D场景搭建以及管理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-scene',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGraphics 3D场景搭建以及管理';

const assets = {

};



const toc = [{
  "value": "模型的加载及呈现",
  "id": "模型的加载及呈现",
  "level": 2
}, {
  "value": "相机的创建及管理",
  "id": "相机的创建及管理",
  "level": 2
}, {
  "value": "光源的创建及管理",
  "id": "光源的创建及管理",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkgraphics-3d场景搭建以及管理",
        children: "ArkGraphics 3D场景搭建以及管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个3D场景通常由光源、相机、模型三个关键部分组成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "光源：为整个3D场景提供光照，使得3D场景中的模型变得可见。与真实物理场景一致，没有光源场景将变得一片漆黑，得到的渲染结果也就是全黑色。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机：为3D场景提供一个观察者。3D渲染本质上是从一个角度观察3D场景并投影到2D图片上。没有相机就没有3D场景的观察者，也就不会得到渲染结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模型：3D场景中的模型用于描述对象的形状、结构和外观，一般具有网格、材质、纹理、动画等属性。一些常见的3D模型格式有OBJ、FBX、glTF等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模型加载后，可以通过ArkUI的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-component3d/ts-basic-components-component3d",
        children: "Component3D"
      }), "渲染组件呈现给用户，Component3D负责将ArkGraphics 3D场景渲染到界面中。在自定义场景模式下，开发者可以使用ArkTS API创建并管理相机和光源节点，从而设置合适的观察角度和光照效果；在自动场景模式下，框架会根据模型自动创建基础相机和光照。ArkTS API可通过napi调用AGP中由C++实现的相应能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58787)/* ["default"] */.A) + "",
        width: "567",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模型的加载及呈现",
      children: "模型的加载及呈现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模型的格式多种多样，目前ArkGraphics 3D仅支持glTF模型的加载，glTF是一种对于3D场景描述的格式，glTF作为一种开源3D场景格式在业界被广泛采用。关于glTF的介绍可以参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",
        children: "glTF-2.0"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个glTF模型可以包含光源、相机、模型等3D场景关键要素，如果一个glTF模型中包含相机，使用ArkGraphics 3D提供的接口加载glTF就可以直接完成该相机视角下3D场景的渲染。如果不包含相机，也可以利用ArkGraphics 3D创建一个相机完成渲染。由于3D模型往往数据量很大，通常采用异步方式进行加载，加载成功后将返回一个scene对象，通过该对象可对整个3D场景进行编辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于创建和管理3D场景与相机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Camera, Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载场景资源。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkGraphics 3D提供Scene.load()接口用于加载glTF模型文件，模型加载成功后会返回一个Scene实例，可通过它继续创建相机或光照等组件。模型文件支持.gltf与.glb格式，其中.glb为二进制封装形式，与.gltf内容等价但更便于加载与使用。模型加载支持相对路径和绝对路径两种方式：相对路径加载使用$rawfile()，从应用的resources/rawfile/目录读取内置资源文件；绝对路径加载需从应用沙箱目录读取文件，Scene.load()仅支持访问应用自身创建或写入的沙箱文件，具体示例可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene#load",
            children: "load()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例展示通过相对路径加载.glb模型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.scene == null) {\n  // Load the model and place the gltf file in the related path. Use the actual path during loading.\n  // Switched from .gltf to .glb; same content, different format\n  Scene.load($rawfile('gltf/DamagedHelmet/glTF/DamagedHelmet.glb'))\n    .then(async (result: Scene) => {\n      this.scene = result;\n      let rf: SceneResourceFactory = this.scene.getResourceFactory();\n      // ...\n    })\n    .catch((error: string) => {\n    console.error('Scene load failed: ' + error);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相机并设置场景渲染参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用SceneResourceFactory.createCamera()创建相机，并设置相机启用状态与观察位置。通过调整相机的z轴位置，可控制观察距离。随后将加载完成的Scene封装为SceneOptions，并指定渲染类型为ModelType.SURFACE，用于Component3D渲染显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Create a Camera.\nthis.cam = await rf.createCamera({ 'name': 'Camera' });\n// Set proper camera parameters.\nthis.cam.enabled = true;\nthis.cam.position.z = 5;\n\nthis.sceneOpt = { scene: this.scene, modelType: ModelType.SURFACE } as SceneOptions;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渲染3D模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Component3D渲染加载完成的3D场景。若模型尚未加载完成，则显示提示文本。Component3D会根据传入的SceneOptions自动进行渲染。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.sceneOpt) {\n  // Use Component3D to display the 3D scenario.\n  Component3D(this.sceneOpt);\n} else {\n  Text('Loading···');\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相机的创建及管理",
      children: "相机的创建及管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机作为3D场景中的重要部分，决定了整个3D场景向2D图片的投影过程，相机的近远平面、FoV角等关键参数也会对整个3D渲染产生重要的影响。开发者可以通过设置相机参数，控制这个渲染过程，得到开发者想要的渲染效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D提供了灵活的相机接口，开发者可根据需要动态创建、配置与控制相机。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于加载场景、创建相机及资源管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Camera, Scene, SceneNodeParameters, SceneResourceFactory } from '@kit.ArkGraphics3D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载场景资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Scene.load()从应用的resources/rawfile/目录加载.glb模型文件，.glb为glTF的二进制封装格式，与.gltf内容等价但更便于加载与使用。模型加载成功后返回Scene对象，可通过它获取SceneResourceFactory用于后续创建相机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let scene: Promise<Scene> = Scene.load($rawfile('gltf/CubeWithFloor/glTF/AnimatedCube.glb'));\nscene.then(async (result: Scene) => {\n  // ...\n  let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n  let sceneCameraParameter: SceneNodeParameters = { name: 'camera' };\n  // ...\n}).catch((error: string) => {\n  console.error('Scene load failed: ' + error);\n  reject(error);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相机并配置相机参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用 SceneResourceFactory.createCamera()创建相机，并配置相机的启用状态、位置、视场角（FoV）等参数。相机位置影响场景的观察距离，FoV决定画面透视范围。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let camera: Promise<Camera> = sceneFactory.createCamera(sceneCameraParameter);\ncamera.then(async (cameraEntity: Camera) => {\n  // Enable the camera node.\n  cameraEntity.enabled = true;\n\n  // Set the camera position.\n  cameraEntity.position.z = 5;\n\n  // Set the FoV.\n  cameraEntity.fov = 60 * Math.PI / 180;\n\n  // Set other camera parameters.\n  // ...\n  // ...\n}).catch((error: string) => {\n  console.error('Camera create failed: ' + error + '.');\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化与渲染绑定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成相机初始化后，将加载好的场景与相机绑定，并设置场景渲染参数。通过构建SceneOptions对象，即可将场景交由Component3D渲染显示，具体渲染方式可参考模型加载示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.camera = await createCameraPromise();\nif (globalScene && this.camera) {\n  this.scene = globalScene;\n  this.positionX = this.camera.position.x;\n  this.positionY = this.camera.position.y;\n  this.positionZ = this.camera.position.z;\n  this.sceneOpt = { scene: this.scene, modelType: ModelType.SURFACE } as SceneOptions;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相机交互。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可通过设置相机的位置、旋转、缩放、FoV等参数，以实现交互式视角控制。以下示例以Z轴控制为例，X/Y轴逻辑与此类似。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Slider({\n  value: this.positionZ,\n  min: 5,\n  max: 10,\n  step: 0.1,\n  style: SliderStyle.OutSet\n})\n  .showTips(false)\n  .onChange((value: number, mode: SliderChangeMode) => {\n    this.positionZ = value;\n    if (mode === SliderChangeMode.End) {\n      if (!this.scene || !this.camera) {\n        return;\n      }\n      this.camera.position.z = value;\n    }\n  })\n  .width('100%')\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "光源的创建及管理",
      children: "光源的创建及管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3D场景的光源是对于物理世界中光源的一种数据建模，模拟物理世界的光源对于3D场景中的物体产生影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光源具有多种类型，例如平行光、锥形光。平行光用于模拟生活中的太阳光照，其光线平行且强度均匀。锥形光类似于手电筒，从一个点向扇形区域发射光线，光线强度随距离衰减。光源的颜色会影响场景中物体的最终着色，渲染时依据物理规律计算光源与物体表面颜色的交互，使光照效果更加真实。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D提供创建光源及修改光源参数的功能，支持开发者通过设置光源属性调整3D场景，以实现预期的渲染效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于加载场景、创建相机与灯光。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Camera, Light, LightType, Scene, SceneNodeParameters, SceneResourceFactory } from '@kit.ArkGraphics3D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载场景资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Scene.load()从应用的resources/rawfile/目录加载.glb模型文件，.glb为glTF的二进制封装格式，与.gltf内容等价但更便于加载与使用。模型加载成功后返回Scene对象，可通过它获取SceneResourceFactory用于后续创建灯光。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let scene: Promise<Scene> = Scene.load($rawfile('gltf/CubeWithFloor/glTF/AnimatedCube.glb'));\nscene.then(async (result: Scene) => {\n  // ...\n  let sceneFactory: SceneResourceFactory = result.getResourceFactory();\n  let lightParameter: SceneNodeParameters = { name: 'light' };\n  // ...\n}).catch((error: string) => {\n  console.error('Scene load failed: ' + error);\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建灯光并配置灯光参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用 SceneResourceFactory.createLight()创建灯光，并配置灯光的类型、位置、颜色等参数。灯光类型决定了光线的方向，位置决定了光线的位置，颜色决定了光线的颜色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let light: Promise<Light> = sceneFactory.createLight(lightParameter, LightType.DIRECTIONAL);\nlight.then(async (lightEntity: Light) => {\n  // Set the color of the directional light.\n  lightEntity.color = { r: 0.8, g: 0.1, b: 0.2, a: 1.0 };\n\n  // Set other light parameters.\n  // ...\n  // ...\n}).catch((err: string) => {\n  console.error('Light create failed: ' + err + '.');\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化与渲染绑定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成灯光初始化后，将加载好的场景与灯光进行绑定，并设置场景渲染参数。通过构建SceneOptions对象，即可将场景交由Component3D渲染显示。同时创建相机并设置观察位置，用于控制场景显示效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.light = await createLightPromise();\nif (globalScene && this.light) {\n  this.scene = globalScene;\n  this.sceneOpt = { scene: this.scene, modelType: ModelType.SURFACE } as SceneOptions;\n  this.rf = this.scene.getResourceFactory();\n  this.cam = await this.rf.createCamera({ 'name': 'Camera1' });\n  this.cam.enabled = true;\n  this.cam.position.z = 5;\n  // Initialize color value\n  this.red = this.light.color.r;\n  this.green = this.light.color.g;\n  this.blue = this.light.color.b;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "灯光交互。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可通过调整灯光的颜色、位置或方向等参数，实现交互式光照控制。以下示例展示了基于颜色分量（R/G/B）的交互逻辑，其余参数的控制方式与此类似。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Slider({\n  value: this.red,\n  min: 0,\n  max: 1,\n  step: 0.01,\n  style: SliderStyle.OutSet\n})\n  .showTips(false)\n  .onChange((value: number, mode: SliderChangeMode) => {\n    this.red = value;\n    if (mode === SliderChangeMode.End) {\n      if (!this.scene || !this.light) {\n        return;\n      }\n      this.light.color = {\n        r: this.red,\n        g: this.green,\n        b: this.blue,\n        a: 1.0\n      }\n    }\n  })\n  .width('100%')\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/Graphics3D",
          children: "基于3D引擎接口实现3D图形渲染功能（ArkTS）"
        })
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
58787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799054-083af4078e694fa35ecb850658e53329.png");

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