"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["519781"], {
862420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_systempresent_graphics_accelerate_fg_systempresent_gles_graphics_accelerate_fg_systempresent_gles_md_30f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-fg-graphics-accelerate-fg-systempresent-graphics-accelerate-fg-systempresent-gles-graphics-accelerate-fg-systempresent-gles-md-30f.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_fg_graphics_accelerate_fg_systempresent_graphics_accelerate_fg_systempresent_gles_graphics_accelerate_fg_systempresent_gles_md_30f_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-gles/graphics-accelerate-fg-systempresent-gles","title":"OpenGL ES平台","description":"业务流程","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-gles/graphics-accelerate-fg-systempresent-gles.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-gles","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-gles/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-gles/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"OpenGL ES平台","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-systempresent-gles","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-overview/"},"next":{"title":"Vulkan平台","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-vulkan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-systempresent/graphics-accelerate-fg-systempresent-gles/graphics-accelerate-fg-systempresent-gles.md


const frontMatter = {
	title: 'OpenGL ES平台',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-fg-systempresent-gles',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'OpenGL ES平台';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "opengl-es平台",
        children: "OpenGL ES平台"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于OpenGL ES图形API平台，系统送显模式的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(871053)/* ["default"] */.A) + "",
        width: "965",
        height: "893"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进入超帧适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_gles",
          children: "HMS_FG_CreateContext_GLES"
        }), "接口创建超帧上下文实例。如超帧上下文实例创建失败，则无需在步骤6提供当前帧信息，只需逐帧对场景进行渲染送显即可。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用接口配置超帧实例属性。包括调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setalgorithmmode_gles",
          children: "HMS_FG_SetAlgorithmMode_GLES"
        }), "（必选）设置超帧算法模式并选择内插模式；按需调用其他插帧相关配置接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置集成模式，选择系统侧集成调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setintegrationmode_gles",
          children: "HMS_FG_SetIntegrationMode_GLES"
        }), "（必选）设置超帧预测的集成信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info",
          children: "FG_IntegrationInfo"
        }), "并选择系统侧送显；系统送显预测帧模式下可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_setuipredictionenabled_gles",
          children: "HMS_FG_SetUiPredictionEnabled_GLES"
        }), "（可选）启用UI预测功能，不启用时预测帧会复用上一帧的UI进行展示；系统送显模式下可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_settargetfps_gles",
          children: "HMS_FG_SetTargetFps_GLES"
        }), "（可选）设置超帧后的目标帧率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_gles",
          children: "HMS_FG_Activate_GLES"
        }), "接口激活超帧上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用渲染真实帧，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
          children: "HMS_FG_Dispatch_GLES"
        }), "接口并传入真实帧颜色信息、深度信息、相机矩阵信息，生成预测帧。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏应用完成UI绘制，并送显当前真实帧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出超帧适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_gles",
          children: "HMS_FG_DestroyContext_GLES"
        }), "接口销毁超帧上下文实例并释放内存资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节阐述基于OpenGL ES图形API平台的系统送显模式调用示例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置meta-data。在应用的module.json5中声明meta-data以支持系统送显模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"module\": {\n         /*\n          其他的配置项\n          ...\n         */\n        \"metadata\": [\n            {\n                \"name\": \"GraphicsAccelerateKit_FusionAware\",\n                \"value\": \"GLES\"\n            }\n        ]\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用Graphics Accelerate Kit超帧头文件：frame_generation_gles.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引用超帧frame_generation_gles.h头文件\n#include <graphics_game_sdk/frame_generation_gles.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createcontext_gles",
            children: "HMS_FG_CreateContext_GLES"
          }), "接口创建超帧上下文实例。如果返回nullptr，则说明超帧上下文实例创建失败，或当前硬件设备不支持开启超帧。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建超帧上下文实例\nFG_Context_GLES* context_ = HMS_FG_CreateContext_GLES();\nif (context_ == nullptr) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用超帧实例属性配置接口，超帧算法模式选择内插模式并指定系统送显预测帧模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化超帧接口调用错误码\nFG_ErrorCode errorCode = FG_SUCCESS;\n\n// 超帧算法模式\nFG_AlgorithmModeInfo aInfo{};\naInfo.predictionMode = FG_PREDICTION_MODE_INTERPOLATION;                  // 内插模式\naInfo.meMode = FG_ME_MODE_BASIC;                                          // 运动估计基础模式\nerrorCode = HMS_FG_SetAlgorithmMode_GLES(context_, &aInfo);               // [必选] 设置超帧算法模式\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// 超帧预测的集成信息\nFG_IntegrationInfo integrationInfo {};\nintegrationInfo.presentMode = FG_PRESENT_BY_SYSTEM;                       // 预测帧送显模式\nintegrationInfo.textureCachedByGame = false;                              // 输入的颜色纹理和深度纹理游戏侧缓存 系统不会复制一份再做预测 默认游戏不会缓存\nintegrationInfo.needFlipInputColor = false;                               // 颜色纹理需要翻转 默认false\nintegrationInfo.needFlipOutputColor = false;                              // 预测帧需要翻转 默认false\n// [可选] 设置超帧预测的集成信息\nerrorCode = HMS_FG_SetIntegrationMode_GLES(context_, &integrationInfo);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// 调用其他插帧相关配置接口\n// ...\n\n// [可选] 设置是否启用UI预测功能，仅在系统送显模式下有效，在游戏送显模式下无效，接口不调用默认为false，预测帧会复用上一帧的UI进行展示\nerrorCode = HMS_FG_SetUiPredictionEnabled_GLES(context_, false);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n\n// [可选] 设置超帧后的目标帧率，仅在系统送显模式下且游戏上架后有效，在游戏送显模式下无效，接口不调用默认不会限制帧率，取决于游戏渲染帧率\nerrorCode = HMS_FG_SetTargetFps_GLES(context_, 60);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_activate_gles",
            children: "HMS_FG_Activate_GLES"
          }), "接口激活超帧上下文实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 激活超帧上下文实例\nerrorCode = HMS_FG_Activate_GLES(context_);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏运行中，渲染真实帧时，缓存颜色信息、深度信息和相机矩阵等属性信息。渲染预测帧时，需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
            children: "HMS_FG_Dispatch_GLES"
          }), "接口并传入真实帧属性信息，生成预测帧。游戏送显真实帧，系统会在真实帧和上一帧间完成预测帧的展示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 帧生成属性配置结构体\nFG_DispatchDescription_GLES dispatchDescriptionData_ {\n    .inputColor = 0U,\n    .inputDepthStencil = 0U,\n    .viewProj{},\n    .invViewProj{},\n    .outputColor = 0U\n};\n\n// 变量声明\nuint32_t inputColor = 0;\nuint32_t inputDepthStencil = 0;\nFG_Mat4x4 preViewProj;\nFG_Mat4x4 preInvViewProj;\n\n// 帧循环\nwhile (true) {\n    // 真实帧渲染阶段\n    // 绘制真实帧\n    // ...\n\n    // 绘制UI\n    // ...\n\n    // 渲染当前帧渲染画面，缓存颜色、深度、相机矩阵等信息，用于下一帧预测帧生成\n    // ...\n\n    // 预测帧渲染阶段\n    // 传入上一帧真实渲染帧颜色缓冲区索引\n    dispatchDescriptionData_.inputColor = inputColor;\n    // 传入上一帧真实渲染帧深度模板缓冲区索引\n    dispatchDescriptionData_.inputDepthStencil = inputDepthStencil;\n    // 传入上一帧真实渲染帧视图投影矩阵\n    dispatchDescriptionData_.viewProj = preViewProj;\n    // 传入上一帧真实渲染帧视图投影逆矩阵\n    dispatchDescriptionData_.invViewProj= preInvViewProj;\n\n    // [可选] 当视图投影矩阵的平移分量非常大时，可提供相机扩展属性信息获得更加准确的超帧效果\n    FG_PerFrameExtendedCameraInfo info;\n    errorCode = HMS_FG_SetExtendedCameraInfo_GLES(context_, &info);\n\n    // 生成预测帧，更新预测帧缓冲区的内存\n    errorCode = HMS_FG_Dispatch_GLES(context_, &dispatchDescriptionData_);\n    switch (errorCode) {\n        case FG_SUCCESS:\n            // 生成预测帧成功\n            break;\n        case FG_COLLECTING_PREVIOUS_FRAMES:\n            // 传入真实帧数量未达到固定阈值，无预测帧生成，基础内插模式传入真实帧数量<2时返回该状态码，此时不要将预测帧送显\n            break;\n        default:\n            // 预测帧生成失败\n            break;\n    }\n\n    // 送显真实帧\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroycontext_gles",
            children: "HMS_FG_DestroyContext_GLES"
          }), "接口销毁超帧实例，释放内存资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁超帧上下文实例并释放内存资源\nerrorCode = HMS_FG_DestroyContext_GLES(&context_);\nif (errorCode != FG_SUCCESS) {\n    return false;\n}\n"
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
871053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799062-f43b37cbaf78bfeddc74688a3aab791a.png");

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