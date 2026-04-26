"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["954183"], {
399968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_appendix_arengine_appendix_md_2e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-appendix-arengine-appendix-md-2e2.json
var site_docs_ar_engine_kit_guide_arengine_appendix_arengine_appendix_md_2e2_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-appendix/arengine-appendix","title":"附录","description":"AR Engine深度估计功能技术局限性及免责声明","source":"@site/docs/ar-engine-kit-guide/arengine-appendix/arengine-appendix.md","sourceDirName":"ar-engine-kit-guide/arengine-appendix","slug":"/ar-engine-kit-guide/arengine-appendix/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-appendix/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"附录","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-appendix","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-personal-privacy/"},"next":{"title":"ArkGraphics 2D简介","permalink":"/harmonyos-docs-site/arkgraphics-2d/arkgraphics2d-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-appendix/arengine-appendix.md


const frontMatter = {
	title: '附录',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-appendix',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '附录';

const assets = {

};



const toc = [{
  "value": "AR Engine深度估计功能技术局限性及免责声明",
  "id": "ar-engine深度估计功能技术局限性及免责声明",
  "level": 2
}, {
  "value": "AR Engine高精几何重建功能技术局限性及免责声明",
  "id": "ar-engine高精几何重建功能技术局限性及免责声明",
  "level": 2
}, {
  "value": "AR Engine人脸跟踪功能技术局限性及免责声明",
  "id": "ar-engine人脸跟踪功能技术局限性及免责声明",
  "level": 2
}, {
  "value": "AR Engine人体跟踪与骨骼关键点识别功能技术局限性及免责声明",
  "id": "ar-engine人体跟踪与骨骼关键点识别功能技术局限性及免责声明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "附录",
        children: "附录"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ar-engine深度估计功能技术局限性及免责声明",
      children: "AR Engine深度估计功能技术局限性及免责声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "技术局限性声明：本功能提供的能力，涉及深度估计精度可能受以下因素影响："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "环境光照条件（例如强光/弱光/反光场景）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "物体表面材质特性（例如透明/镜面/单色物体）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备硬件性能差异（例如摄像头/传感器参数）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动态场景下的实时性限制等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "免责声明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本深度估计仅提供功能，并不构成对产品的质量保证或任何承诺。开发者自主选择是否使用HarmonyOS提供的功能开发应用软件，开发者对应用软件的使用目的、效果和责任自行负责。若开发用于视障人士避障、残疾人辅助等场景的应用软件，开发者应承担开展多场景压力测试，并建立数据校验机制，特别在安全相关场景需部署冗余保障方案，并确保应用合法合规的开发和运营。HarmonyOS不承担由此产生的任何直接或间接责任。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "深度估计提供的功能："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不作为医疗设备或生命安全系统设计。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "未经认证，不作为医疗辅助设备；不作为医疗器材；未经无障碍设施认证或生命安全认证。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ar-engine高精几何重建功能技术局限性及免责声明",
      children: "AR Engine高精几何重建功能技术局限性及免责声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "技术局限性声明：本功能提供的能力，涉及几何数值精度可能受以下因素影响："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "环境光照条件（例如强光/弱光/反光场景）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "物体表面材质特性（例如透明/镜面/单色物体）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备硬件性能差异（例如摄像头/传感器参数）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动态场景下的实时性限制等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "免责声明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本高精几何重建仅提供功能，并不构成对产品的质量保证或任何承诺。开发者自主选择是否使用HarmonyOS提供的功能开发应用软件，开发者对应用软件的使用目的、效果和责任自行负责。若开发用于视障人士避障、残疾人辅助等场景的应用软件，开发者应承担开展多场景压力测试，并建立数据校验机制，特别在安全相关场景需部署冗余保障方案，并确保应用合法合规的开发和运营。HarmonyOS不承担由此产生的任何直接或间接责任。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "高精几何重建提供的功能："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不作为医疗设备或生命安全系统设计。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "未经认证，不作为医疗辅助设备；不作为医疗器材；未经无障碍设施认证或生命安全认证。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ar-engine人脸跟踪功能技术局限性及免责声明",
      children: "AR Engine人脸跟踪功能技术局限性及免责声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "技术局限性声明：本功能提供的能力，涉及人脸跟踪精度可能受以下因素影响："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "环境光照条件（例如强光/弱光/反光场景）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "物体表面材质特性（例如透明/镜面/单色物体）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备硬件性能差异（例如摄像头/传感器参数）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动态场景下的实时性限制等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "免责声明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本人脸跟踪仅提供功能，并不构成对产品的质量保证或任何承诺。开发者自主选择是否使用HarmonyOS提供的功能开发应用软件，开发者对应用软件的使用目的、效果和责任自行负责。若开发用于视障人士避障、残疾人辅助等场景的应用软件，开发者应承担开展多场景压力测试，并建立数据校验机制，特别在安全相关场景需部署冗余保障方案，并确保应用合法合规的开发和运营。HarmonyOS不承担由此产生的任何直接或间接责任。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "人脸跟踪提供的功能："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不作为医疗设备或生命安全系统设计。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "未经认证，不作为医疗辅助设备；不作为医疗器材；未经无障碍设施认证或生命安全认证。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ar-engine人体跟踪与骨骼关键点识别功能技术局限性及免责声明",
      children: "AR Engine人体跟踪与骨骼关键点识别功能技术局限性及免责声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "技术局限性声明：本功能提供的能力，涉及人体跟踪与骨骼关键点识别精度可能受以下因素影响："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "环境光照条件（例如强光/弱光/反光场景）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "物体表面材质特性（例如透明/镜面/单色物体）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备硬件性能差异（例如摄像头/传感器参数）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "动态场景下的实时性限制等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "免责声明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本人体跟踪与骨骼关键点识别仅提供功能，并不构成对产品的质量保证或任何承诺。开发者自主选择是否使用HarmonyOS提供的功能开发应用软件，开发者对应用软件的使用目的、效果和责任自行负责。若开发用于视障人士避障、残疾人辅助等场景的应用软件，开发者应承担开展多场景压力测试，并建立数据校验机制，特别在安全相关场景需部署冗余保障方案，并确保应用合法合规的开发和运营。HarmonyOS不承担由此产生的任何直接或间接责任。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "人体跟踪与骨骼关键点识别提供的功能："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不作为医疗设备或生命安全系统设计。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "未经认证，不作为医疗辅助设备；不作为医疗器材；未经无障碍设施认证或生命安全认证。"
          }), "\n"]
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