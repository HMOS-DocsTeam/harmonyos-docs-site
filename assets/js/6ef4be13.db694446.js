"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["587398"], {
580322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_introduction_arengine_coordinate_arengine_coordinate_md_6ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-introduction-arengine-coordinate-arengine-coordinate-md-6ef.json
var site_docs_ar_engine_kit_guide_arengine_introduction_arengine_coordinate_arengine_coordinate_md_6ef_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-introduction/arengine-coordinate/arengine-coordinate","title":"坐标系说明","description":"AR Engine重力对齐世界坐标系","source":"@site/docs/ar-engine-kit-guide/arengine-introduction/arengine-coordinate/arengine-coordinate.md","sourceDirName":"ar-engine-kit-guide/arengine-introduction/arengine-coordinate","slug":"/ar-engine-kit-guide/arengine-introduction/arengine-coordinate/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-introduction/arengine-coordinate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"坐标系说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-coordinate","kit":"graphics","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"能力介绍","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-introduction/arengine-ability/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-introduction/arengine-coordinate/arengine-coordinate.md


const frontMatter = {
	title: '坐标系说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-coordinate',
	kit: 'graphics',
	last_updated: '2026-04-20'
};
const contentTitle = '坐标系说明';

const assets = {

};



const toc = [{
  "value": "AR Engine重力对齐世界坐标系",
  "id": "ar-engine重力对齐世界坐标系",
  "level": 2
}, {
  "value": "AR Engine重力对齐北向坐标系",
  "id": "ar-engine重力对齐北向坐标系",
  "level": 2
}, {
  "value": "AGP世界坐标系",
  "id": "agp世界坐标系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "坐标系说明",
        children: "坐标系说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ar-engine重力对齐世界坐标系",
      children: "AR Engine重力对齐世界坐标系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以相机启动时相机中心为坐标原点；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重力方向为Y轴，向上+Y，向下-Y；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备水平前后移动为X轴，由近及远+X，由远及近-X；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备水平左右移动为Z轴，向右+Z，向左-Z。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 重力对齐世界坐标系示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/AXOCo3JmT_C4h5viPAoSLA/zh-cn_image_0000002573854567.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=3275889CAE128E29D982623C4371D55647D5F487775929A7B5221725EC661FA4",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ar-engine重力对齐北向坐标系",
      children: "AR Engine重力对齐北向坐标系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以相机启动时相机中心为坐标原点；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重力方向为Y轴，向上+Y，向下-Y；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指南针北向为+X轴，南向为-X轴；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指南针东向为+Z轴，西向为-Z轴；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重力对齐北向坐标系为固定坐标系，不受设备位姿变化影响。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 重力对齐北向坐标系示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/Ah31GlL2RfaY2W2a2VJ9Jw/zh-cn_image_0000002573974543.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=AF8C1E06AFE2DC0A94118BA32F473BC796E8E9801C125E50CCCD650FA4B79202",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agp世界坐标系",
      children: "AGP世界坐标系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以相机启动时相机中心为坐标原点；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备垂直方向为Y轴，向上+Y，向下-Y；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备水平前后移动为Z轴，向前+Z，向后-Z；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备水平左右移动为X轴，向左+X，向右-X。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " AGP世界坐标系示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/3DnY9-4DStydVrszsdSBNQ/zh-cn_image_0000002573854567.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=4D54829D3453AB3FEDDEE2C00F231C3FE26467FD72A5361DBAFA7A93A8E85832",
        alt: ""
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