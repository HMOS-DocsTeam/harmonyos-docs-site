"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["629552"], {
930186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_abr_graphics_accelerate_abr_md_cda_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-rendering-graphics-accelerate-abr-graphics-accelerate-abr-md-cda.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_rendering_graphics_accelerate_abr_graphics_accelerate_abr_md_cda_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/graphics-accelerate-abr","title":"ABR功能开发","description":"业务流程","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/graphics-accelerate-abr.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ABR功能开发","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-abr","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Vulkan平台","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-fg/graphics-accelerate-fg-ai/graphics-accelerate-fg-ai-vulkan/"},"next":{"title":"OpenGTX功能开发","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-opengtx/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-rendering/graphics-accelerate-abr/graphics-accelerate-abr.md


const frontMatter = {
	title: 'ABR功能开发',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-abr',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ABR功能开发';

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
}, {
  "value": "设置项目配置项",
  "id": "设置项目配置项",
  "level": 3
}, {
  "value": "头文件引用",
  "id": "头文件引用",
  "level": 3
}, {
  "value": "编写CMakeLists.txt",
  "id": "编写cmakeliststxt",
  "level": 3
}, {
  "value": "ABR初始化",
  "id": "abr初始化",
  "level": 3
}, {
  "value": "相机运动数据更新",
  "id": "相机运动数据更新",
  "level": 3
}, {
  "value": "自适应渲染",
  "id": "自适应渲染",
  "level": 3
}, {
  "value": "销毁ABR实例",
  "id": "销毁abr实例",
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
        id: "abr功能开发",
        children: "ABR功能开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于相机运动感知策略的ABR主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(651636)/* ["default"] */.A) + "",
        width: "965",
        height: "955"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进入ABR适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_createcontext",
          children: "HMS_ABR_CreateContext"
        }), "接口并指定图形API类型，创建ABR上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_settargetfps",
          children: "HMS_ABR_SetTargetFps"
        }), "接口初始化ABR实例，配置目标帧率属性，ABR结合目标帧率属性实时感知GPU负载状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_setscalerange",
          children: "HMS_ABR_SetScaleRange"
        }), "接口初始化ABR实例，配置Buffer分辨率因子范围属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_activate",
          children: "HMS_ABR_Activate"
        }), "接口激活ABR上下文实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_updatecameradata",
          children: "HMS_ABR_UpdateCameraData"
        }), "接口并传入相机运动信息，包含相机旋转、位移信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用在使能ABR的Buffer渲染前调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_markframebuffer_gles",
          children: "HMS_ABR_MarkFrameBuffer_GLES"
        }), "接口，对Buffer进行标记。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffer渲染处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绘制UI。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一帧送显。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户退出ABR适用的游戏场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_destroycontext",
          children: "HMS_ABR_DestroyContext"
        }), "接口销毁ABR上下文实例并释放内存资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述基于相机运动感知策略的ABR使用，从流程上分别阐述每个步骤的实现和调用。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/adaptive-buffer-resolution-samplecode-clientdemo-cpp",
        children: "图形开发Sample（ABR）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置项目配置项",
      children: "设置项目配置项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“src/main/module.json5”的module层级中添加以下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"metadata\": [\n  {\n    \"name\": \"GraphicsAccelerateKit_ABR\",\n    \"value\": \"true\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "头文件引用",
      children: "头文件引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引用Graphics Accelerate Kit ABR头文件：abr_gles.h。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 引用ABR头文件 abr_gles.h\n#include <graphics_game_sdk/abr_gles.h>\n#include <GLES3/gl32.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写cmakeliststxt",
      children: "编写CMakeLists.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "find_library(\n    # Sets the name of the path variable.\n    abr-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    libabr.so\n)\nfind_library(\n    # Sets the name of the path variable.\n    GLES-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    GLESv3\n)\nfind_library(\n    # Sets the name of the path variable.\n    hilog-lib\n    # Specifies the name of the NDK library that you want CMake to locate.\n    hilog_ndk.z\n)\n\ntarget_link_libraries(entry PUBLIC\n    ${abr-lib} ${GLES-lib} ${hilog-lib}\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abr初始化",
      children: "ABR初始化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用创建Surface后会触发其事件回调函数Core::OnSurfaceCreated()，在该函数中完成ABR上下文实例创建、ABR属性配置和功能激活。其中ABR上下文实例负责管理ABR整个生命周期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_createcontext",
            children: "HMS_ABR_CreateContext"
          }), "接口创建ABR上下文实例，指定图形API类型。如果返回nullptr，则说明ABR上下文实例创建失败，或当前硬件设备不支持开启ABR。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建ABR上下文实例，指定图形API类型\nABR_Context *context_ = HMS_ABR_CreateContext(RENDER_API_GLES);\nif (context_ == nullptr) {\n      return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_settargetfps",
            children: "HMS_ABR_SetTargetFps"
          }), "接口初始化ABR实例，根据游戏的目标帧率配置ABR的目标帧率属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化ABR接口调用错误码\nABR_ErrorCode errorCode = ABR_SUCCESS;\n\n// 初始化ABR实例，配置ABR的目标帧率属性。例如游戏目标帧率为120fps，则配置ABR的目标帧率属性为120fps\nerrorCode = HMS_ABR_SetTargetFps(context_, 120);\nif (errorCode != ABR_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_setscalerange",
            children: "HMS_ABR_SetScaleRange"
          }), "接口初始化ABR实例，配置Buffer分辨率因子范围属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化ABR实例，配置Buffer分辨率因子范围属性，结合具体游戏分辨率、画质设置合适的范围\n// 例如设置ABR对Buffer分辨率进行0.5~1.0倍的自适应调整\nerrorCode = HMS_ABR_SetScaleRange(context_, 0.5f, 1.0f);\nif (errorCode != ABR_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_activate",
            children: "HMS_ABR_Activate"
          }), "接口激活ABR上下文实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 激活ABR上下文实例\nerrorCode = HMS_ABR_Activate(context_);\nif (errorCode != ABR_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相机运动数据更新",
      children: "相机运动数据更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在帧循环中，ABR根据获取的实时相机运动数据进行Buffer分辨率因子决策。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_updatecameradata",
        children: "HMS_ABR_UpdateCameraData"
      }), "接口并传入相机运动信息，包含相机旋转、位移信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 相机运动数据结构体，设置每帧实时相机运动数据\nABR_CameraData cameraData;\n// 每帧位置\nABR_Vector3 position_;\n// 每帧的相机旋转角，范围是[0, 360]\nABR_Vector3 rotation_;\ncameraData.position = position_;\ncameraData.rotation = rotation_;\n\n// 每帧相机运动数据更新\nerrorCode = HMS_ABR_UpdateCameraData(context_, &cameraData);\nif (errorCode != ABR_SUCCESS) {\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自适应渲染",
      children: "自适应渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在帧循环中，ABR将对所标记的Buffer进行自适应渲染处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择着色器处理耗时较高的Buffer，并在Buffer渲染前绑定帧缓冲。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建帧缓冲对象\nGLuint fbo;\nglGenFramebuffers(1, &fbo);\n// 绑定帧缓冲\nglBindFramebuffer(GL_FRAMEBUFFER, fbo);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_markframebuffer_gles",
            children: "HMS_ABR_MarkFrameBuffer_GLES"
          }), "接口对Buffer进行标记。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在Buffer渲染前调用，执行失败不影响Buffer正常渲染\nerrorCode = HMS_ABR_MarkFrameBuffer_GLES(context_);\nif (errorCode != ABR_SUCCESS) {\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行Buffer原有渲染流程。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "销毁abr实例",
      children: "销毁ABR实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Surface销毁时，会触发其事件回调函数Core::OnSurfaceDestroyed()，在该函数中完成ABR实例的销毁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_destroycontext",
        children: "HMS_ABR_DestroyContext"
      }), "接口销毁ABR实例，释放内存资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 销毁ABR上下文实例并释放内存资源\nABR_ErrorCode errorCode = HMS_ABR_DestroyContext(&context_);\nif (errorCode != ABR_SUCCESS) {\n     return false;\n}\n"
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
651636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799064-3a91c42c996ac905291ee53232b01e10.png");

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