"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["425234"], {
417682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_3_d_resource_arkgraphics_3_d_resource_material_arkgraphics_3_d_resource_material_md_105_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-3-d-resource-arkgraphics-3-d-resource-material-arkgraphics-3-d-resource-material-md-105.json
var site_docs_arkgraphics_3_d_arkgraphics_3_d_resource_arkgraphics_3_d_resource_material_arkgraphics_3_d_resource_material_md_105_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material/arkgraphics3d-resource-material","title":"创建并使用材质资源","description":"材质（Material）：材质是用于定义物体表面视觉效果的重要资源。材质决定了物体如何与光线交互，从而影响其最终的渲染效果，如颜色、金属感、粗糙度等外观属性。","source":"@site/docs/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material/arkgraphics3d-resource-material.md","sourceDirName":"arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material","slug":"/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"创建并使用材质资源","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-resource-material","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGraphics 3D场景搭建以及管理","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-scene/"},"next":{"title":"创建并使用图片资源","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-image/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-resource-material/arkgraphics3d-resource-material.md


const frontMatter = {
	title: '创建并使用材质资源',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-resource-material',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '创建并使用材质资源';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "材质类型（MaterialType）",
  "id": "材质类型materialtype",
  "level": 2
}, {
  "value": "材质的属性",
  "id": "材质的属性",
  "level": 2
}, {
  "value": "通用属性",
  "id": "通用属性",
  "level": 3
}, {
  "value": "PBR材质属性",
  "id": "pbr材质属性",
  "level": 3
}, {
  "value": "创建Shader材质并设置属性",
  "id": "创建shader材质并设置属性",
  "level": 2
}, {
  "value": "创建PBR材质并设置属性",
  "id": "创建pbr材质并设置属性",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建并使用材质资源",
        children: "创建并使用材质资源"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "材质（Material）：材质是用于定义物体表面视觉效果的重要资源。材质决定了物体如何与光线交互，从而影响其最终的渲染效果，如颜色、金属感、粗糙度等外观属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D采用基于物理的渲染（PBR, Physically-Based Rendering）模型，其材质实现遵循通用的PBR原理。开发者既可以使用标准材质快速实现真实感效果，也可以通过自定义Shader材质灵活控制渲染逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器（Shader）：着色器是GPU上可以执行的一段程序，可以控制GPU执行哪些并行计算操作。AGP引擎提供的默认着色器实现了PBR渲染，开发者只需要指定对应的参数就可以完成不同的PBR渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D支持开发者创建自定义的着色器，开发者可以通过自定义着色器自定义渲染计算过程，完全控制渲染计算流程，比如控制某物体不受某光源的影响、自定义边缘描边、高亮效果等个性化视觉呈现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器通常配合MaterialType.SHADER材质使用，是实现个性化渲染的重要手段。其创建依赖名称及沙箱路径，创建后可绑定至材质上，替代默认的渲染行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "材质类型materialtype",
      children: "材质类型（MaterialType）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkGraphics 3D中的材质类型通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#materialtype",
        children: "MaterialType"
      }), "枚举指定，目前支持以下两种类型："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MaterialType.SHADER：基于Shader（着色器）的材质类型，支持绑定自定义着色器，开发者可通过自定义渲染程序实现个性化的视觉表现，适用于高级图形渲染需求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MaterialType.METALLIC_ROUGHNESS：基于金属-粗糙度模型的标准PBR材质类型，符合glTF材质规范，适合快速构建真实感渲染效果，支持设置基础色、金属度、粗糙度、法线贴图等常见属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["材质的创建一般通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene#creatematerial",
        children: "SceneResourceFactory.createMaterial()"
      }), "方法完成，需指定材质名称和类型。不同类型的材质支持不同的参数配置，开发者可按需选择以实现预期的渲染效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "材质的属性",
      children: "材质的属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "材质的属性定义了其在渲染时的视觉表现行为，例如颜色、金属感、粗糙度、光照响应以及透明度控制等。通过设置这些属性，开发者可以精准控制物体在场景中的外观效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkGraphics 3D中，材质属性设计既提供了统一的基础能力，也根据材质类型提供了差异化扩展，满足从基础场景搭建到高级视觉定制的多样需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通用属性",
      children: "通用属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所有材质均具备以下基础属性（如materialType、shadowReceiver、blend等）可通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#material",
        children: "Material"
      }), "类型对象实现，用于控制材质的类型及其渲染基础行为："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "materialType：材质类型，标识该材质是标准PBR材质还是基于Shader的自定义材质。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：当需要快速使用预设真实感材质时选择PBR材质，需实现个性化或特殊渲染效果时选择Shader材质。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "shadowReceiver：材质是否可以接收场景中的阴影投射，true表示可以接收，false表示不能接收，默认为false。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：需要表现阴影效果的物体，如地面、墙体、角色等开启；纯发光物体或不参与阴影计算的可关闭以优化性能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cullMode：剔除模式，决定是否剔除背面几何体，默认值为BACK，即剔除背面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：普通实体模型一般开启剔除背面提升渲染效率；透明或双面材质（如树叶、布料）需要禁用剔除以显示完整模型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "blend：是否启用材质的透明效果模式。true表示开启透明，false表示关闭透明，默认值为false。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：表现透明或半透明材质时开启，如玻璃、水面、烟雾、透明塑料等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "alphaCutoff：透明度阈值，取值范围[0,1]，默认值为1。像素的alpha值低于该阈值时不进行渲染，用于实现透明裁剪效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：需要硬透明裁剪的材质，比如树叶、铁丝网、布料边缘等带有透明区域但无半透明渐变的模型。通过设置阈值，可以快速裁剪掉透明部分像素。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "renderSort：渲染排序设置，用于控制材质在渲染队列中的渲染顺序，确保透明或特殊效果材质正确叠加显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：多重透明材质、叠加特效、UI元素等需要严格渲染顺序的场景。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pbr材质属性",
      children: "PBR材质属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["符合glTF标准的基于物理渲染（PBR）的金属-粗糙度材质，通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#metallicroughnessmaterial20",
        children: "MetallicRoughnessMaterial"
      }), "实现，其中各项属性采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources#materialproperty20",
        children: "MaterialProperty"
      }), "类型封装，支持绑定纹理和设置因子（factor）值。具体属性包括："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "baseColor：基础颜色和透明度，包含纹理及对应因子，用于定义材质表面的主色调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：所有材质的基本颜色设置，适用于任何物体表面，尤其是需要表现颜色和透明度的模型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "normal：法线贴图，用于模拟表面细节凹凸，增强光照效果的真实感。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：需要表现表面细节如石材纹理、皮肤毛孔、木纹凹凸等，提升真实感的模型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "material：金属度、粗糙度与反射率参数，描述材质表面的光学特性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：区分金属和非金属表面，控制材质的光滑或粗糙程度，常用于金属件、塑料、橡胶等多种材质。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ambientOcclusion：环境光遮蔽贴图，提升材质细节处的阴影层次和真实感。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：增强模型细节阴影效果，适合复杂结构或细节丰富的物体，如建筑物裂缝、机械零件缝隙。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "emissive：自发光颜色及纹理，表达材质自发光的效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：灯光、屏幕、发光标志、荧光材料等需要表现光源或自发光效果的材质。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearCoat：清漆层强度，模拟车漆等具有透明反光层的材质。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：汽车车身、家具表面等有光泽涂层的材质，表现透明光泽和反射。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearCoatRoughness：清漆层的粗糙度，控制清漆层的反光细节。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：配合clearCoat使用，调节涂层表面的光滑度或粗糙感。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearCoatNormal：清漆层法线贴图，增强清漆层的光照变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：清漆层带有细节纹理时使用，增加涂层的真实光照反馈。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sheen：微纤维漫反射层，用于表现布料、织物的光泽感。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：衣物、窗帘、沙发等纺织品，表现柔和的光泽和细腻质感。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "specular：镜面反射属性，控制非金属材质的高光反射强度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景：玻璃、水面、塑料等非金属材质的高光表现，增强材质的镜面反射效果。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建shader材质并设置属性",
      children: "创建Shader材质并设置属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在需要自定义渲染逻辑或实现特殊视觉效果时，可以通过MaterialType.SHADER类型创建Shader材质。Shader材质支持绑定自定义的.shader文件，开发者可以在其中编写自定义的渲染计算逻辑，灵活控制模型的外观表现，实现如描边、高光、发光等个性化视觉效果。以下示例展示了Shader材质的创建与使用流程，包括场景加载、Shader资源创建与绑定，以及将Shader材质应用到目标几何体节点的过程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于创建Shader材质及绑定Shader资源。"
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
          children: "创建Shader材质（空白）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用SceneResourceFactory.createMaterial()创建Shader类型的空白材质，为后续绑定自定义Shader做准备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function createMaterialPromise(): Promise<Material> {\n  return new Promise((resolve, reject) => {\n    // Ensure the scene is loaded before accessing sceneFactory\n    if (globalScene) {\n      let sceneFactory: SceneResourceFactory = globalScene.getResourceFactory();\n      let sceneMaterialParameter: SceneResourceParameters = { name: 'material' };\n      // Create Material\n      let material: Promise<Material> = sceneFactory.createMaterial(sceneMaterialParameter, MaterialType.SHADER);\n      material.then(resolve)\n      .catch((err: string) => {\n        console.error('Blank material create failed: ' + err);\n        reject(err);\n      });\n    } else {\n      reject('Scene is not loaded yet.');\n    }\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建并绑定Shader资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过SceneResourceFactory.createShader()创建自定义着色器资源，并将其绑定到Shader材质上，实现自定义渲染逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function createShaderPromise(): Promise<Shader> {\n  return new Promise((resolve, reject) => {\n    // Ensure the scene is loaded before accessing sceneFactory\n    if (globalScene) {\n      let sceneFactory: SceneResourceFactory = globalScene.getResourceFactory();\n\n      // Create a SceneResourceParameters object and use it to create a shader\n      let sceneResourceParameter: SceneResourceParameters = {\n        name: 'shaderResource',\n        uri: $rawfile('shaders/custom_shader/custom_material_sample.shader')\n      };\n\n      let shader: Promise<Shader> = sceneFactory.createShader(sceneResourceParameter);\n      shader.then((shaderEntity: Shader) => {\n        resolve(shaderEntity);\n      }).catch((err: string) => {\n        console.error('Shader load failed: ' + err + '.');\n        reject(err);\n      });\n    } else {\n      reject('Scene is not loaded yet.');\n    }\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用Shader材质到几何体节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过按钮点击事件调用不同的函数，可在运行时动态切换模型的材质，实现从默认材质到Shader材质的过渡效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('Replace with a blank material')\n  // ...\n  .onClick(async (): Promise<void> => {\n    console.info('Start to replace with a blank material');\n\n    if (!this.blankMat) {\n      this.blankMat = await createMaterialPromise();\n    }\n\n    if (!this.scene || !this.rf) {\n      return;\n    }\n\n    this.geom = this.scene.getNodeByPath('rootNode_/Unnamed Node 1/AnimatedCube') as Geometry;\n\n    this.geom.mesh.materialOverride = undefined;\n    if (this.blankMat) {\n      this.geom.mesh.subMeshes[0].material = this.blankMat;\n    }\n\n  });\n\nButton('Replace with a Shader material')\n  // ...\n  .onClick(async (): Promise<void> => {\n    console.info('Start to replace with a shader material');\n\n    if (!this.shader) {\n      this.shader = await createShaderPromise();\n    }\n\n    if (!this.scene || !this.rf) {\n      return;\n    }\n\n    if (!this.shaderMat) {\n      let rf = this.scene.getResourceFactory();\n      this.shaderMat = await rf.createMaterial({ name: 'shaderMat' }, MaterialType.SHADER);\n    }\n\n    if (this.shader) {\n      this.shaderMat.colorShader = this.shader;\n    }\n\n    this.geom = this.scene.getNodeByPath('rootNode_/Unnamed Node 1/AnimatedCube') as Geometry;\n\n    this.geom.mesh.materialOverride = undefined;\n\n    if (this.shaderMat) {\n      this.geom.mesh.subMeshes[0].material = this.shaderMat;\n    }\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建pbr材质并设置属性",
      children: "创建PBR材质并设置属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkGraphics 3D中，基于物理的渲染（PBR）材质允许开发者通过调整金属度、粗糙度、透明度等参数精确控制物体的外观效果，从而实现高度真实的渲染表现。由于不同模型在导出时所携带的PBR属性可能存在差异，因此在设置材质前建议根据模型内容进行适配。本示例选用CompareClearcoat模型，该模型自带清漆层（Clearcoat）相关的材质参数，适合用于演示清漆效果的调节。通过设置clearCoat与clearCoatRoughness等属性，可以直观观察清漆层的强度、光泽度与反射特性的变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于创建PBR材质及绑定贴图资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Scene, Camera, Material, Node, Image, SceneResourceFactory, Geometry, EnvironmentBackgroundType,\n  PostProcessSettings, ToneMappingType, MetallicRoughnessMaterial, Vec4 } from '@kit.ArkGraphics3D';\nimport {lookAt, OrbitCameraHelper } from '../common/utils';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载场景资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用Scene.load()方法加载.glb或.gltf格式的模型文件，并在加载完成后获取Scene对象。场景加载完成后，可以访问场景的资源工厂以创建材质和其他资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.scene == null) {\n  // Switched from .gltf to .glb; same content, different format\n  Scene.load($rawfile('gltf/CompareClearcoat/CompareClearcoat.glb'))\n    .then(async (scene: Scene) => {\n      this.scene = scene;\n      if (!this.scene.root) {\n        return;\n      }\n      let rf: SceneResourceFactory = scene.getResourceFactory();\n\n      // ...\n    });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取几何体节点并预加载纹理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过场景的节点路径获取目标几何体节点，并提取其材质，随后预加载清漆层（Clearcoat）相关的纹理资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let pbrNode: Node | null | undefined = this.scene.root?.getNodeByPath('Unnamed Node 1/GeoSphere003');\nif (pbrNode) {\n  this.material = (pbrNode as Geometry).mesh.subMeshes[0].material;\n  let mrMaterial = (this.material as MetallicRoughnessMaterial);\n  let original: Image | null = mrMaterial.clearCoat.image;\n  const helmAlbedo: Resource = $rawfile('image/round_pattern.png');\n  const irregularUri: Resource = $rawfile('image/irregular_pattern.png');\n  let round: Image | null = await rf.createImage({name: 'round', uri: helmAlbedo });\n  let irregular: Image | null = await rf.createImage({name: 'irregular', uri: irregularUri });\n  if (original && round && irregular ) {\n    this.textures.push(original);\n    this.textures.push(round);\n    this.textures.push(irregular);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置环境光照。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建图像基础的光照（IBL）环境，配置环境贴图和辐射贴图，以实现真实的环境光照效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "scene.environment = await rf.createEnvironment({ name: 'env' });\nscene.environment.backgroundType = EnvironmentBackgroundType.BACKGROUND_CUBEMAP;\nscene.environment.environmentImage = await rf.createImage({ name: 'cube', uri: $rawfile('Environment/quarry_02_2k_skybox.ktx') });\nscene.environment.radianceImage = await rf.createImage({ name: 'rad', uri: $rawfile('Environment/quarry_02_2k_radiance.ktx') });\nscene.environment.irradianceCoefficients =\n  [{ x: 1.080343842506409, y: 0.936282396316528, z: 0.665518164634705 },\n    { x: 0.959947884082794, y: 0.828918874263763, z: 0.569704353809357 },\n    { x: 0.848236382007599, y: 0.715092182159424, z: 0.473145037889481 },\n    { x: -0.591795265674591, y: -0.501678705215454, z: -0.334018945693970 },\n    { x: -0.775423347949982, y: -0.655484378337860, z: -0.437325984239578 },\n    { x: 1.053589701652527, y: 0.887459456920624, z: 0.587381422519684 },\n    { x: -0.018954016268253, y: -0.014871496707201, z: -0.008891185745597 },\n    { x: -0.566255271434784, y: -0.476870059967041, z: -0.314557582139969 },\n    { x: -0.239390164613724, y: -0.200478553771973, z: -0.132790848612785 }];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相机并设置视角。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个相机对象，并设置其位置和观察目标。然后启用轨道控制功能，让用户可以通过手势旋转和缩放视图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.cam = await rf.createCamera({ 'name': 'ClearcoatCam' });\nthis.cam.enabled = true;\nlookAt(this.cam,{x:0,y:0,z:-3},{x:0,y:0,z:0},{x:0,y:1,z:0});\nthis.sceneOpt = { scene: this.scene, modelType: ModelType.SURFACE } as SceneOptions;\nthis.orbitCamera.SetOrbitFromEye(this.cam.position, this.scene.root.position, this.cam.rotation);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换清漆层纹理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "允许用户在不同的清漆纹理之间切换。通过按下按钮或触发事件来实现纹理的动态切换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "changeClearcoatTex() {\n  if (this.textures.length > 0) {\n    let i = ++this.textureInUse % this.textures.length;\n    (this.material as MetallicRoughnessMaterial).clearCoat.image = this.textures[i];\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调整清漆层强度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过滑动条调整清漆层的强度。这个方法通过更新材质的clearCoat.factor属性来实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "setClearcoat(v: number) {\n  if (this.material) {\n    const f: Vec4 = (this.material as MetallicRoughnessMaterial).clearCoat.factor;\n    f.x = v / RESO;\n    (this.material as MetallicRoughnessMaterial).clearCoat.factor = f;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换粗糙度纹理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类似于清漆层纹理切换，用户也可以在不同的粗糙度纹理之间切换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "changeClearcoatRoughTex() {\n  if (this.textures.length > 0) {\n    let i = ++this.textureInUse % this.textures.length;\n    (this.material as MetallicRoughnessMaterial).clearCoatRoughness.image = this.textures[i];\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调整清漆层粗糙度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过滑动条调整清漆层的粗糙度，同样地，这通过更新clearCoatRoughness.factor来实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "setClearcoatRoughness(v: number) {\n  if (this.material) {\n    const f: Vec4 = (this.material as MetallicRoughnessMaterial).clearCoatRoughness.factor;\n    f.y = v / RESO;\n    (this.material as MetallicRoughnessMaterial).clearCoatRoughness.factor = f;\n  }\n}\n"
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