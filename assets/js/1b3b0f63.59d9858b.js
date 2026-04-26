"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["778407"], {
375398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_spatial_recon_kit_guide_spatial_recon_filter_spatial_recon_filter_md_1b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-spatial-recon-kit-guide-spatial-recon-filter-spatial-recon-filter-md-1b3.json
var site_docs_spatial_recon_kit_guide_spatial_recon_filter_spatial_recon_filter_md_1b3_namespaceObject = JSON.parse('{"id":"spatial-recon-kit-guide/spatial-recon-filter/spatial-recon-filter","title":"添加滤镜效果","description":"给3DGS模型渲染出的画面加上不同的效果，包括：复古效果、漫画效果、黑白bit效果、颜色编辑效果四种风格化滤镜。","source":"@site/docs/spatial-recon-kit-guide/spatial-recon-filter/spatial-recon-filter.md","sourceDirName":"spatial-recon-kit-guide/spatial-recon-filter","slug":"/spatial-recon-kit-guide/spatial-recon-filter/","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-filter/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"添加滤镜效果","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-filter","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"加载3DGS模型","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-load/"},"next":{"title":"XEngine Kit简介","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/spatial-recon-kit-guide/spatial-recon-filter/spatial-recon-filter.md


const frontMatter = {
	title: '添加滤镜效果',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/spatial-recon-filter',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '添加滤镜效果';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
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
        id: "添加滤镜效果",
        children: "添加滤镜效果"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给3DGS模型渲染出的画面加上不同的效果，包括：复古效果、漫画效果、黑白bit效果、颜色编辑效果四种风格化滤镜。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下仅列出本指南示例代码中调用的部分主要接口："
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
            children: "RETRO_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示复古效果对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMIC_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示漫画效果对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OBRA_DINN_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示黑白bit效果对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COLOR_EDITING_EFFECT_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示颜色编辑效果对应的ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先从项目根目录进入/src/main/ets/entryability/EntryAbility.ets文件，导入空间建模模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Scene, RenderContext } from '@kit.ArkGraphics3D';\nimport { spatialRender } from '@kit.SpatialReconKit';\nimport { RenderingPipelineType } from '@ohos.graphics.scene'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载当前场景的上下文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let renderContext: RenderContext | null = Scene.getDefaultRenderContext();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用滤镜接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (renderContext != null) {\n  renderContext.loadPlugin(spatialRender.GSPlugin.PLUGIN_ID);\n  Scene.load().then(async (scene: Scene) => {\n    let rf = scene.getResourceFactory();\n    let effect : spatialRender.RetroEffect =\n      await rf.createEffect({ effectId: spatialRender.GSPlugin.RETRO_EFFECT_ID }) as spatialRender.RetroEffect;\n    let camera = await rf.createCamera({ name: \"gsCam\", path: \"//gsCam\" }, { renderingPipeline: RenderingPipelineType.FORWARD });\n    camera.effects.append(effect)\n  });\n}\n"
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