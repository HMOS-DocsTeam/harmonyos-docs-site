"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["277999"], {
243830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_3_d_overview_arkgraphics_3_d_overview_md_bf2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-3-d-overview-arkgraphics-3-d-overview-md-bf2.json
var site_docs_arkgraphics_3_d_arkgraphics_3_d_overview_arkgraphics_3_d_overview_md_bf2_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics3d-overview/arkgraphics3d-overview","title":"ArkGraphics 3D简介","description":"ArkGraphics 3D（方舟3D图形）基于轻量级的3D引擎以及渲染管线为开发者提供基础3D场景绘制能力，供开发者便捷、高效地构建3D场景并完成渲染。","source":"@site/docs/arkgraphics-3d/arkgraphics3d-overview/arkgraphics3d-overview.md","sourceDirName":"arkgraphics-3d/arkgraphics3d-overview","slug":"/arkgraphics-3d/arkgraphics3d-overview/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkGraphics 3D简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-overview","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图形开发术语","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-term/"},"next":{"title":"ArkGraphics 3D场景搭建以及管理","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-scene/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics3d-overview/arkgraphics3d-overview.md


const frontMatter = {
	title: 'ArkGraphics 3D简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics3d-overview',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGraphics 3D简介';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "框架原理",
  "id": "框架原理",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkgraphics-3d简介",
        children: "ArkGraphics 3D简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D（方舟3D图形）基于轻量级的3D引擎以及渲染管线为开发者提供基础3D场景绘制能力，供开发者便捷、高效地构建3D场景并完成渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 3D以自定义场景模式为核心能力，支持开发者自行构建和管理Scene、Camera、Light等节点，从而对3D场景的渲染效果与交互行为进行完全控制。同时，为了便于快速预览和展示模型，也提供自动场景模式，允许开发者直接加载glTF（.gltf文件和.glb文件）模型，由框架自动创建基础相机、光源及交互控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供加载并解析标准glTF（GL Transmission Format）模型（.gltf文件和.glb文件）的能力，支持开发者将glTF模型文件置于应用文件沙盒中，并通过ArkGraphics 3D提供的异步接口完成模型的加载以及渲染。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene",
          children: "Scene (场景管理)"
        }), "，glTF相关介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",
          children: "glTF-Specification"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供自定义灯光（Light）、相机（Camera）节点以及通用节点（Node）的能力，可支撑开发者自定义场景灯光、渲染视角等信息，同时支撑用户动态地调整场景树结构以及节点属性进而调整3D场景。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene",
          children: "Scene (场景管理)"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-nodes/js-apis-inner-scene-nodes",
          children: "SceneNode (节点管理)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供创建图片（Image）、材质（Material）、环境（Environment）以及自定义着色器（Shader）的能力，支撑开发者通过调用ArkGraphics 3D提供的能力来创建3D场景中使用的各种资源，支撑开发者自定义着色器，完成自定义3D材质渲染。具体可以参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene/js-apis-inner-scene",
          children: "Scene (场景管理)"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources",
          children: "SceneResource (资源管理)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供控制3D场景动画状态的能力，支撑开发者控制动画的开始、暂停、结束、播放到指定位置等操作，同时提供动画开始、结束时的回调函数支持开发者进行逻辑控制。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-resources/js-apis-inner-scene-resources",
          children: "SceneResource (资源管理)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供基础的3D渲染后处理能力，提供接口支撑开发者进行ToneMapping后处理相关控制。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/graphics3d/js-apis-inner-scene-post-process-settings/js-apis-inner-scene-post-process-settings",
          children: "ScenePostProcessSettings (后处理管理)"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "综上，ArkGraphics 3D提供以自定义Scene为核心的3D场景渲染能力，同时通过自动场景模式为模型的快速展示提供便捷入口，满足从简单预览到复杂渲染控制的不同开发需求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口的使用和参数说明，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-3d-api/arkgraphics-3d-arkts/js-apis-scene/js-apis-scene",
        children: "@ohos.graphics.scene (ArkGraphics 3D模块)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "框架原理",
      children: "框架原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(405477)/* ["default"] */.A) + "",
        width: "1158",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图 ArkGraphics 3D接口能力由图形后端、引擎层以及接口层三个关键部分共同组成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图形后端：主要指GPU硬件提供的驱动接口类型，业界通用的主要包含OpenGL ES以及Vulkan两类。引擎层通过下发GPU指令调用这些接口，实现场景的渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引擎层：依托Ark Graphics Platform渲染引擎部件提供渲染能力，AGP引擎具有易用性、高画质、可扩展等特性。引擎使用先进的ECS（Entity-Component-System）架构设计，进行模块化封装（如材质定义、后处理特效等），为开发者提供了灵活易用的开发套件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口层：基于引擎的ECS Framework，通过NAPI层对数据进行组织处理，向开发者暴露简单易用的3D渲染接口，支持开发者使用少量代码完成3D场景的开发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ArkGraphics 3D模块需要硬件设备支持OpenGL ES 3.2以上或者Vulkan 1.0以上的GPU驱动。"
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
405477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478703-4c263125260ce07d3ff1ea83dac34701.png");

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