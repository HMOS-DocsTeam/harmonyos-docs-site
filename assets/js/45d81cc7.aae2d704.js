"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["810349"], {
759037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_opengl_opengl_md_45d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-opengl-opengl-md-45d.json
var site_docs_ref_opengl_opengl_md_45d_namespaceObject = JSON.parse('{"id":"opengl/opengl","title":"OpenGL","description":"OpenGL是一种跨平台的图形API，用于为3D图形处理硬件指定标准的软件接口。HarmonyOS现已支持OpenGL 4.2。","source":"@site/docs-ref/opengl/opengl.md","sourceDirName":"opengl","slug":"/opengl/opengl","permalink":"/harmonyos-docs-site/ref/opengl/opengl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"OpenGL","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengl","kit":"标准库","last_updated":"2026-04-22","slug":"opengl"},"sidebar":"ref","previous":{"title":"OpenGL ES","permalink":"/harmonyos-docs-site/ref/opengles/opengles"},"next":{"title":"EGL","permalink":"/harmonyos-docs-site/ref/egl/egl"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/opengl/opengl.md


const frontMatter = {
	title: 'OpenGL',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengl',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'opengl'
};
const contentTitle = 'OpenGL';

const assets = {

};



const toc = [{
  "value": "支持的能力及设备",
  "id": "支持的能力及设备",
  "level": 2
}, {
  "value": "查询当前设备是否支持OpenGL",
  "id": "查询当前设备是否支持opengl",
  "level": 2
}, {
  "value": "标准库中导出的符号列表",
  "id": "标准库中导出的符号列表",
  "level": 2
}, {
  "value": "OpenGL扩展接口及示例",
  "id": "opengl扩展接口及示例",
  "level": 2
}, {
  "value": "引入OpenGL能力",
  "id": "引入opengl能力",
  "level": 2
}, {
  "value": "相关参考",
  "id": "相关参考",
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
        id: "opengl",
        children: "OpenGL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/opengl/",
        children: "OpenGL"
      }), "是一种跨平台的图形API，用于为3D图形处理硬件指定标准的软件接口。HarmonyOS现已支持OpenGL 4.2。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的能力及设备",
      children: "支持的能力及设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始，支持使用OpenGL 3.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 22开始，支持使用OpenGL 4.2。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持设备："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持在PC设备上使用OpenGL能力；从API version 22开始，新增支持在部分Tablet设备上使用OpenGL能力，具体Tablet设备是否支持可通过OH_Graphics_QueryGL接口判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询当前设备是否支持opengl",
      children: "查询当前设备是否支持OpenGL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，支持使用OH_Graphics_QueryGL接口判断设备是否支持使用OpenGL功能以及是否需要回退使用OpenGL ES 。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " OH_Graphics_QueryGL接口在PC、Tablet设备上可正常调用，在其他设备上返回为空。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef EGLBoolean(*OH_Graphics_QueryGL_FUNC)(void);\nstatic napi_value QueryGL(napi_env env, napi_callback_info info)\n{\n    const char &r0 = u8\"OH_Graphics_QueryGL不存在，使用GLES\";\n    const char &r1 = u8\"OH_Graphics_QueryGL存在，返回0，使用GLES\";\n    const char &r2 = u8\"OH_Graphics_QueryGL存在，返回1，使用GL\";\n    napi_value result = nullptr;\n    napi_status status = napi_invalid_arg;\n    OH_Graphics_QueryGL_FUNC OH_Graphics_QueryGL = (OH_Graphics_QueryGL_FUNC)eglGetProcAddress(\"OH_Graphics_QueryGL\");\n    if (OH_Graphics_QueryGL) {\n        if (OH_Graphics_QueryGL()) {\n            status = napi_create_string_utf8(env, r2, (size_t)strlen(r2), &result);\n        } else {\n            status = napi_create_string_utf8(env, r1, (size_t)strlen(r1), &result);\n        }\n    } else {\n        status = napi_create_string_utf8(env, r0, (size_t)strlen(r0), &result);\n    }\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to create UTF-8 string\");\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准库中导出的符号列表",
      children: "标准库中导出的符号列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/appendixes/opengl-symbol/opengl-symbol",
        children: "native api中导出的OpenGL符号列表"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "opengl扩展接口及示例",
      children: "OpenGL扩展接口及示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OpenGL扩展接口及使用，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/opengles/opengles#opengl-es%E6%89%A9%E5%B1%95%E6%8E%A5%E5%8F%A3",
        children: "OpenGL ES扩展接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关接口使用示例，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/opengles/opengles#%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B",
        children: "OpenGL ES简单示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入opengl能力",
      children: "引入OpenGL能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用OpenGL的相关能力，需要添加相关动态链接库和头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libace_ndk.z.so\nlibace_napi.z.so\nlibGLv4.so\nlibEGL.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <EGL/eglplatform.h>\n#include <GL/gl.h>\n#include <GL/glcorearb.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修改app.json5配置文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"appEnvironments\": [\n {\n   \"name\":\"NEED_OPENGL\",\n   \"value\": \"1\"\n }\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关参考",
      children: "相关参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对OpenGL的使用和相关开发，需要同步了解NDK的开发过程，以及XComponent组件等的使用。具体可参考:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ndk-development-overview",
          children: "NDK开发参考"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/napi/napi",
          children: "Node-API参考"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-arkui-xcomponentnode/js-apis-arkui-xcomponentnode",
          children: "XComponentNode参考"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
          children: "XComponent参考"
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