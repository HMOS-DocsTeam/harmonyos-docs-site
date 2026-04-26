"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["205230"], {
473205(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_native_surface_native_image_guidelines_native_image_guidelines_md_3b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-native-surface-native-image-guidelines-native-image-guidelines-md-3b6.json
var site_docs_arkgraphics_2_d_native_surface_native_image_guidelines_native_image_guidelines_md_3b6_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/native-surface/native-image-guidelines/native-image-guidelines","title":"NativeImage开发指导 (C/C++)","description":"场景介绍","source":"@site/docs/arkgraphics-2d/native-surface/native-image-guidelines/native-image-guidelines.md","sourceDirName":"arkgraphics-2d/native-surface/native-image-guidelines","slug":"/arkgraphics-2d/native-surface/native-image-guidelines/","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-image-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"NativeImage开发指导 (C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-image-guidelines","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NativeBuffer开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-buffer-guidelines/"},"next":{"title":"NativeWindow开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-window-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/native-surface/native-image-guidelines/native-image-guidelines.md


const frontMatter = {
	title: 'NativeImage开发指导 (C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-image-guidelines',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'NativeImage开发指导 (C/C++)';

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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "nativeimage开发指导-cc",
        children: "NativeImage开发指导 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NativeImage是提供", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Surface与OpenGL外部纹理相互绑定"
        })
      }), "的模块，表示图形队列的消费者端。开发者可以通过NativeImage接口接收和使用Buffer，并将Buffer关联输出到绑定的OpenGL外部纹理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NativeImage常见的开发场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过NativeImage提供的Native API接口创建NativeImage实例作为消费者端，获取与该实例对应的NativeWindow作为生产者端。NativeWindow相关接口可用于填充Buffer内容并提交，NativeImage将Buffer内容更新到OpenGL外部纹理上。本模块需要配合NativeWindow、NativeBuffer、EGL、GLES3模块一起使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NativeImage_Create (uint32_t textureId, uint32_t textureTarget)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个OH_NativeImage实例，该实例与OpenGL ES的纹理ID和纹理目标相关联。本接口需要与OH_NativeImage_Destroy接口配合使用，否则会存在内存泄露。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_AcquireNativeWindow (OH_NativeImage *image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与OH_NativeImage相关联的OHNativeWindow指针，该OHNativeWindow在调用OH_NativeImage_Destroy时会将其释放，不需要调用OH_NativeWindow_DestroyNativeWindow释放，否则会出现访问已释放内存错误，可能会导致崩溃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_AttachContext (OH_NativeImage *image, uint32_t textureId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeImage实例附加到当前OpenGL ES上下文，且该OpenGL ES纹理会绑定到 GL_TEXTURE_EXTERNAL_OES，并通过OH_NativeImage进行更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_DetachContext (OH_NativeImage *image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeImage实例从当前OpenGL ES上下文分离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_UpdateSurfaceImage (OH_NativeImage *image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_NativeImage获取最新帧更新相关联的OpenGL ES纹理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_GetTimestamp (OH_NativeImage *image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的相关时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_GetTransformMatrixV2 (OH_NativeImage *image, float matrix[16])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的变化矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage_Destroy (OH_NativeImage **image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁通过OH_NativeImage_Create创建的OH_NativeImage实例，销毁后该OH_NativeImage指针会被赋值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativeimage/capi-oh-nativeimage",
        children: "native_image"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用NativeImage提供的Native API接口，创建OH_NativeImage实例作为消费者端，将数据内容更新到OpenGL外部纹理上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下库文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libEGL.so\nlibGLESv3.so\nlibnative_image.so\nlibnative_window.so\nlibnative_buffer.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include <string>\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <GLES3/gl3.h>\n#include <GLES2/gl2ext.h>\n#include <sys/mman.h>\n#include <native_image/native_image.h>\n#include <native_window/external_window.h>\n#include <native_buffer/native_buffer.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "初始化EGL环境"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["这里提供初始化EGL环境的代码示例。XComponent模块的详细使用方法，请参阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
            children: "XComponent开发指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool ImageRender::InitEGL(EGLNativeWindowType window, uint64_t width, uint64_t height)\n{\n    window_ = window;\n    width_ = width;\n    height_ = height;\n\n    if (!InitializeEGLDisplay() || !ChooseEGLConfig() || !CreateEGLContext() || !CreateEGLSurface()) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to initialize EGL\");\n        return false;\n    }\n\n    if (!MakeCurrentContext()) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to make EGL context current\");\n        return false;\n    }\n\n    if (!CompileAndLinkShaders()) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to compile and link shaders\");\n        return false;\n    }\n\n    UpdateViewport();\n\n    return true;\n}\n\n// ...\nbool ImageRender::InitializeEGLDisplay()\n{\n    display_ = eglGetDisplay(EGL_DEFAULT_DISPLAY);\n    if (display_ == EGL_NO_DISPLAY) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to get EGL display\");\n        return false;\n    }\n\n    if (!eglInitialize(display_, nullptr, nullptr)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to initialize EGL\");\n        return false;\n    }\n\n    return true;\n}\n\nbool ImageRender::ChooseEGLConfig()\n{\n    const EGLint attribs[] = {\n        EGL_RENDERABLE_TYPE, EGL_OPENGL_ES2_BIT,\n        EGL_SURFACE_TYPE, EGL_WINDOW_BIT,\n        EGL_RED_SIZE, 8,\n        EGL_GREEN_SIZE, 8,\n        EGL_BLUE_SIZE, 8,\n        EGL_ALPHA_SIZE, 8,\n        EGL_NONE\n    };\n\n    EGLint numConfigs;\n    if (!eglChooseConfig(display_, attribs, &config_, 1, &numConfigs) || numConfigs == 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to choose EGL config\");\n        return false;\n    }\n    return true;\n}\n\nbool ImageRender::CreateEGLContext()\n{\n    const EGLint contextAttribs[] = { EGL_CONTEXT_CLIENT_VERSION, 2, EGL_NONE };\n    context_ = eglCreateContext(display_, config_, EGL_NO_CONTEXT, contextAttribs);\n    if (context_ == EGL_NO_CONTEXT) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to create EGL context\");\n        return false;\n    }\n    return true;\n}\n\nbool ImageRender::CreateEGLSurface()\n{\n    surface_ = eglCreateWindowSurface(display_, config_, window_, nullptr);\n    if (surface_ == EGL_NO_SURFACE) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to create EGL surface\");\n        return false;\n    }\n    return true;\n}\n\nbool ImageRender::MakeCurrentContext()\n{\n    if (!eglMakeCurrent(display_, surface_, surface_, context_)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ImageRender\", \"Failed to make EGL context current\");\n        return false;\n    }\n    return true;\n}\n\nvoid ImageRender::UpdateViewport()\n{\n    glViewport(0, 0, static_cast<GLsizei>(width_), static_cast<GLsizei>(height_));\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ImageRender\",\n                 \"Viewport updated to %{public}llu x %{public}llu\", width_, height_);\n}\n\nbool ImageRender::CompileAndLinkShaders()\n{\n    GLuint vertexShader = CompileShader(GL_VERTEX_SHADER, g_vertexShaderSource);\n    if (vertexShader == 0) {\n        return false;\n    }\n\n    GLuint fragmentShader = CompileShader(GL_FRAGMENT_SHADER, g_fragmentShaderSource);\n    if (fragmentShader == 0) {\n        glDeleteShader(vertexShader);\n        return false;\n    }\n\n    shaderProgram_ = glCreateProgram();\n    glAttachShader(shaderProgram_, vertexShader);\n    glAttachShader(shaderProgram_, fragmentShader);\n    glLinkProgram(shaderProgram_);\n\n    GLint linked;\n    glGetProgramiv(shaderProgram_, GL_LINK_STATUS, &linked);\n    if (!linked) {\n        PrintProgramLinkError(shaderProgram_);\n        glDeleteProgram(shaderProgram_);\n        glDeleteShader(vertexShader);\n        glDeleteShader(fragmentShader);\n        return false;\n    }\n\n    glUseProgram(shaderProgram_);\n\n    positionAttrib_ = glGetAttribLocation(shaderProgram_, \"aPosition\");\n    texCoordAttrib_ = glGetAttribLocation(shaderProgram_, \"aTexCoord\");\n    textureUniform_ = glGetUniformLocation(shaderProgram_, \"uTexture\");\n\n    glDeleteShader(vertexShader);\n    glDeleteShader(fragmentShader);\n\n    return true;\n}\n\nvoid ImageRender::PrintProgramLinkError(GLuint program)\n{\n    GLint infoLen = 0;\n    glGetProgramiv(program, GL_INFO_LOG_LENGTH, &infoLen);\n    if (infoLen > 1) {\n        std::unique_ptr<char[]> infoLog = std::make_unique<char[]>(infoLen);\n        glGetProgramInfoLog(program, infoLen, nullptr, infoLog.get());\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                     \"ImageRender\", \"Error linking program: %{public}s\", infoLog.get());\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "创建OH_NativeImage实例"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "glGenTextures(1, &nativeImageTexId_);\n// ...\nnativeImage_ = OH_NativeImage_Create(nativeImageTexId_, GL_TEXTURE_EXTERNAL_OES);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取对应的数据生产者端NativeWindow"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nativeWindow_ = OH_NativeImage_AcquireNativeWindow(image);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置NativeWindow的宽高"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t result = OH_NativeWindow_NativeWindowHandleOpt(nativeWindow_, SET_BUFFER_GEOMETRY,\n    static_cast<int32_t>(width_), static_cast<int32_t>(height_));\nif (result != SUCCESS) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"OHNativeRender\", \"Failed to set buffer geometry.\");\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "将生产的内容写入OHNativeWindowBuffer"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从NativeWindow中获取OHNativeWindowBuffer。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OHNativeWindowBuffer *buffer = nullptr;\nint releaseFenceFd = INVALID_FD;\nint32_t result = OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow_, &buffer, &releaseFenceFd);\nif (result != SUCCESS || buffer == nullptr) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                 \"OHNativeRender\", \"Failed to request buffer, ret : %{public}d.\", result);\n    return;\n}\n// ...\nBufferHandle *handle = OH_NativeWindow_GetBufferHandleFromNative(buffer);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将生产的内容写入OHNativeWindowBuffer。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 使用 mmap 获取虚拟地址\nvoid *mappedAddr = mmap(nullptr, handle->size, PROT_READ | PROT_WRITE, MAP_SHARED, handle->fd, 0);\nif (mappedAddr == MAP_FAILED) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"OHNativeRender\", \"Failed to mmap buffer.\");\n    return;\n}\n\n// 获取像素指针\nuint32_t *pixel = static_cast<uint32_t *>(mappedAddr);\n\n// 调用封装的函数来绘制渐变\nDrawGradient(pixel, handle->stride / BYTES_PER_PIXEL, height_);\n\n// 解除内存映射\nresult = munmap(mappedAddr, handle->size);\nif (result == FAILURE) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"OHNativeRender\", \"Failed to munmap buffer.\");\n}\n// ...\nvoid OHNativeRender::DrawGradient(uint32_t* pixel, uint64_t width, uint64_t height)\n{\n    static double time = 0.0;\n    time += ANIMATION_SPEED_INCREMENT;\n    double offset = (sin(time) + MAX_INTENSITY) / INTENSITY_MULTIPLIER;\n\n    // 箭头参数\n    const int arrowSize = std::min(width, height) / ARROW_SIZE_DIVISOR;\n    const int arrowX = width / ARROW_SIZE_DIVISOR;\n    const int arrowY = height / ARROW_SIZE_DIVISOR;\n    const int stemWidth = arrowSize / STEM_WIDTH_DIVISOR;\n    const int headWidth = arrowSize / HEAD_WIDTH_DIVISOR;\n    const int headLength = arrowSize / HEAD_LENGTH_DIVISOR;\n    const int stemStart = arrowX - arrowSize / ARROW_SIZE_DIVISOR;\n    const int stemEnd = arrowX + arrowSize / ARROW_SIZE_DIVISOR - headLength;\n\n    for (uint64_t y = 0; y < height; y++) {\n        for (uint64_t x = 0; x < width; x++) {\n            double normalizedX = static_cast<double>(x) / static_cast<double>(width - 1);\n            bool isArrow = false;\n\n            if ((x >= stemStart && x <= stemEnd && y >= arrowY - stemWidth * HEAD_SLOPE_MULTIPLIER &&\n                y <= arrowY + stemWidth * HEAD_SLOPE_MULTIPLIER) || (x >= stemEnd && x <= stemEnd + headLength &&\n                fabs(static_cast<int>(y - arrowY)) <= (headWidth * HEAD_SLOPE_MULTIPLIER) *\n                (1.0 - static_cast<double>(x - stemEnd) / headLength))) {\n                isArrow = true;\n            }\n\n            uint8_t red = static_cast<uint8_t>((1.0 - normalizedX) * MAX_COLOR_VALUE);\n            uint8_t blue = static_cast<uint8_t>(normalizedX * MAX_COLOR_VALUE);\n            uint8_t green = 0;\n            uint8_t alpha = MAX_COLOR_VALUE;\n            if (isArrow) {\n                red = green = blue = MAX_COLOR_VALUE;\n            }\n            double intensity = fabs(normalizedX - offset);\n            intensity = MAX_INTENSITY - std::min(INTENSITY_MULTIPLIER * intensity, INTENSITY_LIMIT);\n            intensity = std::max(intensity, MIN_INTENSITY);\n\n            red = static_cast<uint8_t>(red * intensity);\n            green = static_cast<uint8_t>(green * intensity);\n            blue = static_cast<uint8_t>(blue * intensity);\n\n            *pixel++ = (static_cast<uint32_t>(alpha) << ALPHA_SHIFT) | (static_cast<uint32_t>(red) << RED_SHIFT) |\n                (static_cast<uint32_t>(green) << GREEN_SHIFT) | (static_cast<uint32_t>(blue) << BLUE_SHIFT);\n        }\n    }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将OHNativeWindowBuffer提交到NativeWindow。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 设置刷新区域\nRegion region{nullptr, 0};\n// 提交给消费者\nresult = OH_NativeWindow_NativeWindowFlushBuffer(nativeWindow_, buffer, NO_FENCE, region);\nif (result != SUCCESS) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN,\n                 \"OHNativeRender\", \"Failed to flush buffer, result : %{public}d.\", result);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "更新内容到OpenGL纹理"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " int32_t ret = OH_NativeImage_UpdateSurfaceImage(nativeImage_);\n if (ret != 0) {\n     OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderEngine\",\n                 \"OH_NativeImage_UpdateSurfaceImage failed, ret: %{public}d, texId: %{public}u\",\n                 ret, nativeImageTexId_);\n     return;\n }\n\n UpdateTextureMatrix();\n if (imageRender_) {\n     imageRender_->Render();\n } else {\n     OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderEngine\", \"ImageRender is null\");\n }\n // ...\n\nvoid RenderEngine::UpdateTextureMatrix()\n{\n    float matrix[16];\n    int32_t ret = OH_NativeImage_GetTransformMatrixV2(nativeImage_, matrix);\n    if (ret != 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderEngine\",\n                     \"OH_NativeImage_GetTransformMatrix failed, ret: %{public}d\", ret);\n        return;\n    }\n    imageRender_->SetTransformMatrix(matrix);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解绑OpenGL纹理，绑定到新的外部纹理上"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将OH_NativeImage实例从当前OpenGL ES上下文分离\nOH_NativeImage_DetachContext(nativeImage_);\nglGenTextures(1, &nativeImageTexId_);\nglBindTexture(GL_TEXTURE_EXTERNAL_OES, nativeImageTexId_);\n// ...\nint ret = OH_NativeImage_AttachContext(nativeImage_, nativeImageTexId_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_NativeImage实例使用完需要销毁掉"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NativeImage_Destroy(&nativeImage_);\n"
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