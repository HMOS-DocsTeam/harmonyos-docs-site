"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["702209"], {
940320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_egl_egl_md_33d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-egl-egl-md-33d.json
var site_docs_ref_egl_egl_md_33d_namespaceObject = JSON.parse('{"id":"egl/egl","title":"EGL","description":"EGL 是Khronos官方提供的渲染API (如OpenGLES 或 OpenVG) 与底层窗口系统之间的接口。HarmonyOS 现已支持 EGL。","source":"@site/docs-ref/egl/egl.md","sourceDirName":"egl","slug":"/egl/egl","permalink":"/harmonyos-docs-site/ref/egl/egl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"EGL","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/egl","kit":"标准库","last_updated":"2026-04-22","slug":"egl"},"sidebar":"ref","previous":{"title":"OpenGL","permalink":"/harmonyos-docs-site/ref/opengl/opengl"},"next":{"title":"ICU4C","permalink":"/harmonyos-docs-site/ref/icu4c/icu4c"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/egl/egl.md


const frontMatter = {
	title: 'EGL',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/egl',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'egl'
};
const contentTitle = 'EGL';

const assets = {

};



const toc = [{
  "value": "引入EGL能力",
  "id": "引入egl能力",
  "level": 2
}, {
  "value": "部分扩展接口使用说明",
  "id": "部分扩展接口使用说明",
  "level": 2
}, {
  "value": "支持的接口说明",
  "id": "支持的接口说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "egl",
        children: "EGL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.khronos.org/EGL/sdk/docs/man/",
        children: "EGL"
      }), " 是Khronos官方提供的渲染API (如", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.khronos.org/OpenGL-Refpages/es3/",
        children: "OpenGLES"
      }), " 或 OpenVG) 与底层窗口系统之间的接口。HarmonyOS 现已支持 EGL。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入egl能力",
      children: "引入EGL能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用EGL相关功能，首先请添加头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <EGL/egl.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libEGL.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要调用EGL扩展接口，需要额外添加头文件并且在CMakeLists.txt中添加宏定义："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <EGL/eglext.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGL_EGLEXT_PROTOTYPES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "部分扩展接口使用说明",
      children: "部分扩展接口使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "eglGetNativeClientBufferANDROID"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，支持使用EGL扩展接口eglGetNativeClientBufferANDROID，将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h",
        children: "OH_NativeBuffer"
      }), "转换为EGLClientBuffer类型，以实现纹理的绑定并进行GPU采样。具体使用方法请参考如下示例代码："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在EGLCore成员变量中已经定义好了如下变量\nEGLDisplay m_eglDisplay = EGL_NO_DISPLAY;\nOH_NativeBuffer* m_nativeBuffer = {nullptr};\nGLuint m_textureId = 0;\n// 通过如下函数流程即可实现将OH_NativeBuffer绑定为纹理\nbool EGLCore::PrepareNativeBuffer() {\n    // 检查并分配nativeBuffer\n    if (m_nativeBuffer != nullptr) {\n        return true;\n    }\n    OH_NativeBuffer_Config config {\n        .width = 128,\n        .height = 128,\n        .format = NATIVEBUFFER_PIXEL_FMT_RGBA_8888,\n        .usage = NATIVEBUFFER_USAGE_CPU_WRITE | NATIVEBUFFER_USAGE_CPU_READ | NATIVEBUFFER_USAGE_HW_RENDER | NATIVEBUFFER_USAGE_HW_TEXTURE | NATIVEBUFFER_USAGE_CPU_READ_OFTEN | NATIVEBUFFER_USAGE_ALIGNMENT_512\n        };\n    m_nativeBuffer = OH_NativeBuffer_Alloc(&config);\n    if (m_nativeBuffer == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Failed to allocate native buffer.\");\n    }\n\n    // CPU侧对nativeBuffer进行写入\n    uint32_t* nativeBuffer;\n    OH_NativeBuffer_Map(m_nativeBuffer, (void**)&nativeBuffer);\n    for (uint32_t i = 0; i < 128; i++) {\n        for (uint32_t j = 0; j < 128; j++) {\n            float ypos = static_cast<float>(i) / 127.0f;\n            float hue = ypos * 360.0f;\n            float xpos = static_cast<float>(j) / 127.0f * 0.6f + 0.4f;\n            // 饱和度和亮度设置为最大值以获取鲜艳的颜色\n            nativeBuffer[i * 128 + j] = HSVtoRGB_U32(hue, xpos, 1.0f);\n        }\n    }\n    OH_NativeBuffer_Unmap(m_nativeBuffer);\n\n    // 检查EGL扩展支持\n    const char* extensions = eglQueryString(m_eglDisplay, EGL_EXTENSIONS);\n    if(!strstr(extensions, \"EGL_ANDROID_get_native_client_buffer\")) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Extension not support.\");\n        return false;\n    }\n\n    // 获取EGL函数指针\n    PFNEGLGETNATIVECLIENTBUFFERANDROIDPROC eglGetNativeClientBufferANDROID =\n        reinterpret_cast<PFNEGLGETNATIVECLIENTBUFFERANDROIDPROC>(\n            eglGetProcAddress(\"eglGetNativeClientBufferANDROID\"));\n    if (!eglGetNativeClientBufferANDROID) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Failed to get eglGetNativeClientBufferANDROID pointer.\");\n        return false;\n    }\n\n    // 获取EGLClientBuffer\n    EGLClientBuffer clientBuffer = eglGetNativeClientBufferANDROID((struct AHardwareBuffer*)m_nativeBuffer);\n    if(!clientBuffer) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Client buffer error.\");\n        return false;\n    }\n    PFNEGLCREATEIMAGEKHRPROC eglCreateImageKHR =\n        reinterpret_cast<PFNEGLCREATEIMAGEKHRPROC>(\n            eglGetProcAddress(\"eglCreateImageKHR\"));\n    if(!eglCreateImageKHR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Failed to get eglCreateImageKHR pointer.\");\n        return false;\n    }\n\n    // 创建并绑定纹理\n    EGLint attribs[] = {EGL_IMAGE_PRESERVED_KHR, EGL_TRUE, EGL_NONE};\n    EGLImageKHR eglImage = eglCreateImageKHR(\n        m_eglDisplay,\n        EGL_NO_CONTEXT,\n        EGL_NATIVE_BUFFER_OHOS,\n        clientBuffer,\n        attribs);\n    if (eglImage == EGL_NO_IMAGE_KHR) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Failed to create eglImage.\");\n        return false;\n    }\n    glGenTextures(1, &m_textureId);\n    if(m_textureId == 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"EGLCore\", \"Failed to generate textures.\");\n        return false;\n    }\n    glBindTexture(GL_TEXTURE_2D, m_textureId);\n\n    // 设置纹理参数\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);\n    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);\n\n    // 绑定EGLImage\n    glEGLImageTargetTexture2DOES(GL_TEXTURE_2D, eglImage);\n    // 此时m_nativeBuffer已经绑定到了m_textureId纹理上，可以当作正常纹理使用\n    return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用eglGetNativeClientBufferANDROID所产生的EGLClientBuffer对象在使用完成后需要主动销毁，否则会产生内存泄漏，具体销毁方式参考下列代码片段的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在前面已经通过eglGetNativeClientBufferANDROID创建了EGLClientBuffer类型的clientBuffer变量\n// 使用完成后调用如下函数进行销毁\nOH_NativeWindow_DestroyNativeWindowBuffer((OHNativeWindowBuffer*)clientBuffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的接口说明",
      children: "支持的接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS目前支持EGL部分接口，支持的接口会随着版本演进，持续更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持的接口如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/appendixes/egl-symbol/egl-symbol",
        children: "native api中导出的EGL符号列表"
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