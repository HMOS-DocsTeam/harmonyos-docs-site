"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["335077"], {
469910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_plane_shape_arengine_c_get_plane_shape_md_f29_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-get-plane-shape-arengine-c-get-plane-shape-md-f29.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_plane_shape_arengine_c_get_plane_shape_md_f29_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/arengine-c-get-plane-shape","title":"识别目标形状（C/C++）","description":"约束与限制","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/arengine-c-get-plane-shape.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"识别目标形状（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-plane-shape","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"识别平面语义（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics/"},"next":{"title":"获取深度图（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-depth/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/arengine-c-get-plane-shape.md


const frontMatter = {
	title: '识别目标形状（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-plane-shape',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '识别目标形状（C/C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "引入AR Engine",
  "id": "引入ar-engine",
  "level": 2
}, {
  "value": "创建AR会话",
  "id": "创建ar会话",
  "level": 2
}, {
  "value": "创建可跟踪对象列表",
  "id": "创建可跟踪对象列表",
  "level": 2
}, {
  "value": "获取当前环境中的可跟踪对象",
  "id": "获取当前环境中的可跟踪对象",
  "level": 2
}, {
  "value": "获取可跟踪对象数量",
  "id": "获取可跟踪对象数量",
  "level": 2
}, {
  "value": "遍历并识别物体形状",
  "id": "遍历并识别物体形状",
  "level": 2
}, {
  "value": "销毁可跟踪对象列表",
  "id": "销毁可跟踪对象列表",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "识别目标形状cc",
        children: "识别目标形状（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别目标形状能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_SEMANTIC"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入ar-engine",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考管理AR会话章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建ar会话",
      children: "创建AR会话"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建AR会话并配置为目标形状识别模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSession *arSession = nullptr;\n// 创建AR会话。\nHMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);\nAREngine_ARConfig *arConfig = nullptr;\n// 创建AR会话配置器。\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 设置语义识别模式为目标形状识别。\nHMS_AREngine_ARConfig_SetSemanticMode(arSession, arConfig, ARENGINE_SEMANTIC_MODE_TARGET);\n// 配置器设置给AR会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建可跟踪对象列表",
      children: "创建可跟踪对象列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个可跟踪对象列表targetList，用于存放AR Engine运行过程中检测到的所有可跟踪对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARTrackableList *targetList = nullptr;\nHMS_AREngine_ARTrackableList_Create(arSession, &targetList);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取当前环境中的可跟踪对象",
      children: "获取当前环境中的可跟踪对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_getalltrackables",
        children: "HMS_AREngine_ARSession_GetAllTrackables"
      }), "函数，检测当前环境中的所有可跟踪对象，并将结果存放在targetList中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HMS_AREngine_ARSession_GetAllTrackables(arSession, ARENGINE_TRACKABLE_TARGET, targetList);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取可跟踪对象数量",
      children: "获取可跟踪对象数量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_artrackablelist_getsize",
        children: "HMS_AREngine_ARTrackableList_GetSize"
      }), "函数获取当前可跟踪对象数量，结果存放在targetSize中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t targetSize = 0;\nHMS_AREngine_ARTrackableList_GetSize(arSession, targetList, &targetSize);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当targetSize等于0时，代表当前环境中无可跟踪对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当targetSize等于1时，代表当前环境中仅存在1个可跟踪对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当targetSize大于1时，代表当前环境中存在多个可跟踪对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "遍历并识别物体形状",
      children: "遍历并识别物体形状"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当环境中存在一个或多个可跟踪对象时，依次遍历targetList中所有可跟踪对象进行目标形状识别。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "for (int i = 0; i < targetSize; ++i) {\n    // 遍历可跟踪对象，进行形状识别。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于第i个对象，创建并获取对象实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AREngine_ARTrackable *target = nullptr;\nHMS_AREngine_ARTrackableList_AcquireItem(arSession, targetList, i, &target);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取该实例跟踪状态，仅当跟踪状态为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artrackingstate",
            children: "ARENGINE_TRACKING_STATE_TRACKING"
          }), "时，才可进行形状识别。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AREngine_ARTrackingState outTrackingState;\nHMS_AREngine_ARTrackable_GetTrackingState(arSession, target, &outTrackingState);\n\nif (AREngine_ARTrackingState::ARENGINE_TRACKING_STATE_TRACKING != outTrackingState) {\n    continue;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取该实例目标形状，识别结果存放在label中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AREngine_ARTargetShapeLabel label = ARENGINE_TARGET_SHAPE_UNKNOWN;\nHMS_AREngine_ARTarget_GetShapeType(arSession, reinterpret_cast<AREngine_ARTarget *>(target), &label);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其中，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_artargetshapelabel",
            children: "AREngine_ARTargetShapeLabel"
          }), "为枚举类型，描述了目标物体形状。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "销毁可跟踪对象列表",
      children: "销毁可跟踪对象列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HMS_AREngine_ARTrackableList_Destroy(targetList);\n"
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