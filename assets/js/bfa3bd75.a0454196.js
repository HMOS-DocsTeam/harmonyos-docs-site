"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465454"], {
18479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_introduction_c_pen_point_prediction_c_pen_point_prediction_c_md_bfa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-introduction-c-pen-point-prediction-c-pen-point-prediction-c-md-bfa.json
var site_docs_system_hardware_pen_kit_guide_pen_introduction_c_pen_point_prediction_c_pen_point_prediction_c_md_bfa_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c/pen-point-prediction-c","title":"接入报点预测","description":"从6.0.0(20)开始，报点预测新增C API接口。","source":"@site/docs/system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c/pen-point-prediction-c.md","sourceDirName":"system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c","slug":"/system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"接入报点预测","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-point-prediction-c","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入全局取色","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction-c/pen-image-feature-picker-c/"},"next":{"title":"Pen Kit手写套件是否支持自定义笔刷？","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-faq/pen-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-introduction-c/pen-point-prediction-c/pen-point-prediction-c.md


const frontMatter = {
	title: '接入报点预测',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-point-prediction-c',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入报点预测';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "接入步骤",
  "id": "接入步骤",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "接入报点预测",
        children: "接入报点预测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，报点预测新增C API接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入报点预测功能，可以优化应用中手写效果的绘制跟手性，提升应用中手写笔书写场景的跟手体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用的自定义界面中，获取到界面的触摸事件，通过调用报点预测的接口，可以得到预测的下一个报点的位置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186084)/* ["default"] */.A) + "",
        width: "525",
        height: "263"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-handwrite-c/pen-handwrite-c#hms_handwrite_getpredictpoint",
              children: "HMS_HandWrite_GetPredictPoint"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint",
              children: "HandWrite_HistoricalPoint"
            }), " *event, int32_t size, float *predictPointX, float *predictPointY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预测点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入步骤",
      children: "接入步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["报点预测功能的历史点，通常需要在自定义渲染（XComponent）上注册触摸事件回调获得，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
        children: "自定义渲染开发指南"
      }), "，获得历史触摸点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_include_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/include) # 当编译过程中报点预测头文件缺失时尝试加入此命令\ntarget_link_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/lib/aarch64-linux-ohos) # 当编译过程中报点预测API链接异常时尝试加入此命令\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libhandwrite_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <handwrite/native_handwrite_api.h>\n#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-handwrite-headerfile-declare/pen-handwrite-headerfile-declare",
        children: "native_handwrite_api.h"
      }), "提供HMS_HandWrite_GetPredictPoint()接口获取预测点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <handwrite/native_handwrite_api.h>\n#include <hilog/log.h>\n\nvoid DispatchTouchEvent(OH_NativeXComponent *xcomponent, void *window)\n{\n    int32_t historicalPointSize = 0;\n    OH_NativeXComponent_HistoricalPoint *historicalPoints = nullptr;\n    if (OH_NativeXComponent_GetHistoricalPoints(xcomponent, window, &historicalPointSize, &historicalPoints) !=\n        OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0x0000, \"PenKit\", \"failed to get historical points\");\n        return;\n    }\n\n    std::vector<HandWrite_HistoricalPoint> handWriteHisPoints(historicalPointSize);\n    for (int32_t i = 0; i < historicalPointSize; ++i) {\n        handWriteHisPoints[i].x = historicalPoints[i].x;\n        handWriteHisPoints[i].y = historicalPoints[i].y;\n        handWriteHisPoints[i].timeStamp = historicalPoints[i].timeStamp;\n        handWriteHisPoints[i].force = historicalPoints[i].force;\n    }\n\n    float predictPointX = 0.0f;\n    float predictPointY = 0.0f;\n    int32_t errcode = HMS_HandWrite_GetPredictPoint(handWriteHisPoints.data(), historicalPointSize, &predictPointX, &predictPointY);\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"PenKit\", \"error code is %{public}d\", errcode);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0x0000, \"PenKit\", \"predict point is (%{public}f, %{public}f)\", predictPointX, predictPointY);\n}\n"
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
186084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438523-f4fbb6397fc12b307e2044bd36836021.png");

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