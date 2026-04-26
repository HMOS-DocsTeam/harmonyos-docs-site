"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["689296"], {
833966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_rendering_faq_graphics_accelerate_faq_4_graphics_accelerate_faq_4_md_250_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-rendering-faq-graphics-accelerate-faq-4-graphics-accelerate-faq-4-md-250.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_rendering_faq_graphics_accelerate_faq_4_graphics_accelerate_faq_4_md_250_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-4/graphics-accelerate-faq-4","title":"ABR进行Buffer分辨率调整引起其他Pass渲染效果异常，该如何解决？","description":"*现象描述*","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-4/graphics-accelerate-faq-4.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-4","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-4/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ABR进行Buffer分辨率调整引起其他Pass渲染效果异常，该如何解决？","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-faq-4","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"哪些特征的Buffer适合使能ABR？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-3/"},"next":{"title":"集成ABR后，从游戏引擎获取到的Native纹理内容为空，该如何解决?","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-rendering-faq/graphics-accelerate-faq-4/graphics-accelerate-faq-4.md


const frontMatter = {
	title: 'ABR进行Buffer分辨率调整引起其他Pass渲染效果异常，该如何解决？',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-faq-4',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ABR进行Buffer分辨率调整引起其他Pass渲染效果异常，该如何解决？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "abr进行buffer分辨率调整引起其他pass渲染效果异常该如何解决",
        children: "ABR进行Buffer分辨率调整引起其他Pass渲染效果异常，该如何解决？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以团结引擎URP管线为例，ABR对DrawOpaqueObjects绑定的Buffer进行分辨率调整时会引起SSAO shadow效果异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(227265)/* ["default"] */.A) + "",
        width: "411",
        height: "242"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上述URP管线可以看到，SSAO在渲染管线中是一个“前处理”，SSAO输出的图像会作为DrawOpaqueObjects的输入。当ABR对DrawOpaqueObjects绑定的Buffer进行自适应分辨率调整时，SSAO输出的图像为原始分辨率，而DrawOpaqueObjects绑定的Buffer使用低分辨率，分辨率不一致导致SSAO shadow效果异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持渲染线程的游戏引擎处理步骤"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "方案1"
                })
              }), "：调整渲染管线，将SSAO作为“后处理”，SSAO不受DrawOpaqueObjects绑定的Buffer分辨率影响。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在URP资产中勾选“After Opaque”："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(300625)/* ["default"] */.A) + "",
                width: "439",
                height: "157"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "方案2"
                })
              }), "：获取实时的ABR Buffer分辨率因子，并根据Buffer分辨率因子对相关渲染数据进行同步调整。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SSAO的shader会根据scaledScreenParams参数进行计算，该变量与渲染分辨率相关，在集成ABR后，scaledScreenParams需要根据实时的ABR Buffer分辨率因子调整。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对于团结引擎，可在ScriptableRenderer.cs的SetPerCameraShaderVariables函数中根据Buffer分辨率因子设置scaledScreenParams参数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void SetPerCameraShaderVariables(CommandBuffer cmd, ref CameraData cameraData, bool isTargetFlipped)\n{\n    Camera camera = cameraData.camera;\n    float scaledCameraWidth = (float)cameraData.cameraTargetDescriptor.width;\n    float scaledCameraHeight = (float)cameraData.cameraTargetDescriptor.height;\n    // scale为通过HMS_ABR_GetScale接口获取的ABR Buffer分辨率因子\n    scaledCameraWidth *= scale;\n    scaledCameraHeight *= scale;\n    cmd.SetGlobalVector(ShaderPropertyId.scaledScreenParams, new Vector4(scaledCameraWidth, scaledCameraHeight, 1.0f + 1.0f / scaledCameraWidth, 1.0f + 1.0f / scaledCameraHeight));\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持渲染线程、RHI线程的游戏引擎处理步骤"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于同时支持渲染线程、RHI线程的游戏引擎，而且RHI线程延迟于渲染线程的场景，渲染线程通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_getscale",
            children: "HMS_ABR_GetScale"
          }), "接口获取的ABR Buffer分辨率因子无法解决上述问题。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于该场景，渲染线程在Buffer渲染后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_getnextscale",
            children: "HMS_ABR_GetNextScale"
          }), "接口获取下一帧的ABR Buffer分辨率因子，并根据Buffer分辨率因子对相关渲染数据进行同步调整。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在Buffer渲染后调用\nfloat scale = 1.0f;\nerrorCode = HMS_ABR_GetNextScale(context_, &scale);\nif (errorCode != ABR_SUCCESS) {\n    GOLOGE(\"HMS_ABR_GetNextScale execution failed, error code: %d.\", errorCode);\n}\n\n// 根据Buffer分辨率因子对渲染数据进行同步调整\nvoid SetViewUniformParameters()\n{\n    ViewUniformParameters.BufferSize.X = (int)(ViewUniformParameters.BufferSize.X * scale);\n    ViewUniformParameters.BufferSize.Y = (int)(ViewUniformParameters.BufferSize.Y * scale);\n    ViewUniformParameters.BufferInvSize.X /= scale;\n    ViewUniformParameters.BufferInvSize.Y /= scale;\n}\n"
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
300625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478733-e4c337f9bda22d40a41a8e5fe98b8949.png");

},
227265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958732-e28a3db3b56808223ebbb94c0a82c287.png");

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