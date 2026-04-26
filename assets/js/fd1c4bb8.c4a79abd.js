"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["430198"], {
177536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_3_d_animation_arkgraphics_3_d_animation_md_fd1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-3-d-animation-arkgraphics-3-d-animation-md-fd1.json
var site_docs_arkgraphics_3_d_arkgraphics_3_d_animation_arkgraphics_3_d_animation_md_fd1_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics3d-animation/arkgraphics3d-animation","title":"ArkGraphics 3D场景动画控制以及管理","description":"动画（animation）：动画是3D场景中重要的资源类型，用于控制场景中各种元素的运动。比如想要场景中的人物进行走路这个动作，每帧计算人物每一个关节的旋转角并进行设置是难以实现的。所以在完成类似的要求时，3D场景资源的制作者会将动画制作好，在模型文件中保存动画的关键帧数据以及关键帧间的插值器类型。","source":"@site/docs/arkgraphics-3d/arkgraphics3d-animation/arkgraphics3d-animation.md","sourceDirName":"arkgraphics-3d/arkgraphics3d-animation","slug":"/arkgraphics-3d/arkgraphics3d-animation/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"ArkGraphics 3D场景动画控制以及管理","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-animation","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":".shader资源文件格式要求","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-resource/arkgraphics3d-shader-resource/"},"next":{"title":"ArkGraphics Editor插件及编辑器的下载与安装","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics-editor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics3d-animation/arkgraphics3d-animation.md


const frontMatter = {
	title: 'ArkGraphics 3D场景动画控制以及管理',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-animation',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGraphics 3D场景动画控制以及管理';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "arkgraphics-3d场景动画控制以及管理",
        children: "ArkGraphics 3D场景动画控制以及管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画（animation）：动画是3D场景中重要的资源类型，用于控制场景中各种元素的运动。比如想要场景中的人物进行走路这个动作，每帧计算人物每一个关节的旋转角并进行设置是难以实现的。所以在完成类似的要求时，3D场景资源的制作者会将动画制作好，在模型文件中保存动画的关键帧数据以及关键帧间的插值器类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D提供播放并控制场景动画的能力，支持开发者灵活地控制动画的状态，达到预期的渲染效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面脚本中导入ArkGraphics 3D提供的核心类型，用于创建和控制3D场景、相机以及动画资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Animation, Camera, Scene, SceneResourceFactory } from '@kit.ArkGraphics3D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载场景资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用Scene.load()方法从应用的resources/rawfile/目录加载.glb（或.gltf）模型，并在加载完成后获取Scene对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Scene.load($rawfile('gltf/BrainStem/glTF/BrainStem.glb'))\n  .then(async (result: Scene) => {\n    this.scene = result;\n    let rf: SceneResourceFactory = this.scene.getResourceFactory();\n    // ...\n  }).catch((err: string) => {\n    console.error(err);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取动画并注册回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从scene.animations[0]获取动画资源，启用并注册onStarted()、onFinished()回调，用于监听动画播放状态或触发逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkGraphics 3D提供以下动画回调接口："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "onStarted()：动画开始播放时触发，start与restart操作均会触发该回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "onFinished()：动画播放完成或执行finish操作时触发。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.anim = this.scene.animations[0];\nif (this.anim) {\n  this.anim.enabled = true;\n  // Register callback function\n  this.anim.onStarted(() => {\n    // ...\n    this.animationCallbackInvoked = 'animation on start';\n  });\n\n  this.anim.onFinished(() => {\n    // ...\n    this.animationCallbackInvoked = 'animation on finish';\n  });\n  // ...\n} else {\n  console.error('No animation found in scene.');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相机与设置场景渲染参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过SceneResourceFactory.createCamera()创建相机并调整观察位置。随后将加载完成的Scene封装为SceneOptions，并指定渲染类型为ModelType.SURFACE，以便通过Component3D在界面上进行渲染。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// create a new camera.\nthis.cam = await rf.createCamera({ 'name': 'Camera' });\n// set the camera.\nthis.cam.enabled = true;\nthis.cam.position.z = 5;\nthis.sceneOpt = { scene: this.scene, modelType: ModelType.SURFACE } as SceneOptions;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建界面与动画控制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Component3D渲染3D场景，并在界面中添加按钮以控制动画播放状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkGraphics 3D提供的动画状态控制操作主要包含如下几种："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开始（start）：基于当前进度开始播放一个动画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "停止（stop）：停止播放一个动画，并将动画的进度设置到未开始状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "结束（finish）：直接跳转到动画的最后，并将动画的进度设置到已结束状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "暂停（pause）：将动画暂停，动画的播放进度保持在当前状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "重启（restart）：从动画的起点开始播放动画。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "跳转（seek）：按比例跳转动画进度（例如seek(0.3)跳至总时长的30%）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('start')\n  // ...\n  .onClick(async () => {\n    if (!this.scene || !this.scene.animations[0]) {\n      return;\n    }\n    this.anim = this.scene.animations[0];\n    this.anim.start();\n  });\n\nButton('pause')\n  // ...\n  .onClick(async () => {\n    if (!this.scene || !this.scene.animations[0]) {\n      return;\n    }\n    this.anim = this.scene.animations[0];\n    this.anim.pause();\n  });\n\nButton('stop')\n  // ...\n  .onClick(async () => {\n    if (!this.scene || !this.scene.animations[0]) {\n      return;\n    }\n    this.anim = this.scene.animations[0];\n    this.anim.stop();\n  });\n\nButton('finish')\n  // ...\n  .onClick(async () => {\n    if (!this.scene || !this.scene.animations[0]) {\n      return;\n    }\n    this.anim = this.scene.animations[0];\n    this.anim.finish();\n  });\n\nButton('restart')\n  // ...\n  .onClick(async () => {\n    if (!this.scene || !this.scene.animations[0]) {\n      return;\n    }\n    this.anim = this.scene.animations[0];\n    this.anim.restart();\n  });\n\nButton('seek to 30% progress')\n  // ...\n  .onClick(async () => {\n    if (!this.scene || !this.scene.animations[0]) {\n      return;\n    }\n    this.anim = this.scene.animations[0];\n    // seek to 30%\n    this.anim.seek(0.3);\n  });\n"
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