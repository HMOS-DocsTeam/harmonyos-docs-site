"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["514453"], {
605697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_opengles_opengles_md_b5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-opengles-opengles-md-b5d.json
var site_docs_ref_opengles_opengles_md_b5d_namespaceObject = JSON.parse('{"id":"opengles/opengles","title":"OpenGL ES","description":"OpenGL 是一种跨平台的图形 API，用于为 3D 图形处理硬件指定标准的软件接口。OpenGL ES 是 OpenGL 规范的一种形式，适用于嵌入式设备。HarmonyOS 现已支持 OpenGL ES 3.2。","source":"@site/docs-ref/opengles/opengles.md","sourceDirName":"opengles","slug":"/opengles/opengles","permalink":"/harmonyos-docs-site/ref/opengles/opengles","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"OpenGL ES","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengles","kit":"标准库","last_updated":"2026-04-22","slug":"opengles"},"sidebar":"ref","previous":{"title":"OpenSL ES","permalink":"/harmonyos-docs-site/ref/opensles/opensles"},"next":{"title":"OpenGL","permalink":"/harmonyos-docs-site/ref/opengl/opengl"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/opengles/opengles.md


const frontMatter = {
	title: 'OpenGL ES',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengles',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'opengles'
};
const contentTitle = 'OpenGL ES';

const assets = {

};



const toc = [{
  "value": "支持的能力",
  "id": "支持的能力",
  "level": 2
}, {
  "value": "标准库中导出的符号列表",
  "id": "标准库中导出的符号列表",
  "level": 2
}, {
  "value": "引入OpenGL能力",
  "id": "引入opengl能力",
  "level": 2
}, {
  "value": "相关参考",
  "id": "相关参考",
  "level": 2
}, {
  "value": "OpenGL ES扩展接口",
  "id": "opengl-es扩展接口",
  "level": 2
}, {
  "value": "简单示例",
  "id": "简单示例",
  "level": 2
}, {
  "value": "使用eglGetDisplay连接渲染目标设备",
  "id": "使用eglgetdisplay连接渲染目标设备",
  "level": 3
}, {
  "value": "使用eglInitialize初始化EGL",
  "id": "使用eglinitialize初始化egl",
  "level": 3
}, {
  "value": "使用eglChooseConfig确定渲染配置",
  "id": "使用eglchooseconfig确定渲染配置",
  "level": 3
}, {
  "value": "使用eglCreateWindowSurface创建窗口表面",
  "id": "使用eglcreatewindowsurface创建窗口表面",
  "level": 3
}, {
  "value": "使用eglCreateContext创建渲染上下文",
  "id": "使用eglcreatecontext创建渲染上下文",
  "level": 3
}, {
  "value": "使用eglMakeCurrent将EGL上下文与绘图表面进行关联",
  "id": "使用eglmakecurrent将egl上下文与绘图表面进行关联",
  "level": 3
}, {
  "value": "创建并使用着色器程序",
  "id": "创建并使用着色器程序",
  "level": 3
}, {
  "value": "使用glViewport设置视口大小",
  "id": "使用glviewport设置视口大小",
  "level": 3
}, {
  "value": "使用glClearColor设置清除颜色缓冲区时使用的颜色",
  "id": "使用glclearcolor设置清除颜色缓冲区时使用的颜色",
  "level": 3
}, {
  "value": "使用glClear执行清除操作",
  "id": "使用glclear执行清除操作",
  "level": 3
}, {
  "value": "使用glGetAttribLocation获取属性变量位置",
  "id": "使用glgetattriblocation获取属性变量位置",
  "level": 3
}, {
  "value": "使用glGetUniformLocation获取统一变量位置",
  "id": "使用glgetuniformlocation获取统一变量位置",
  "level": 3
}, {
  "value": "使用glUniformMatrix4fv传递4×4矩阵",
  "id": "使用gluniformmatrix4fv传递44矩阵",
  "level": 3
}, {
  "value": "使用glUniform3f向着色器传递颜色和方向",
  "id": "使用gluniform3f向着色器传递颜色和方向",
  "level": 3
}, {
  "value": "创建缓冲区并上传数据到GPU",
  "id": "创建缓冲区并上传数据到gpu",
  "level": 3
}, {
  "value": "启用功能",
  "id": "启用功能",
  "level": 3
}, {
  "value": "绘制图元并显示",
  "id": "绘制图元并显示",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "opengl-es",
        children: "OpenGL ES"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OpenGL 是一种跨平台的图形 API，用于为 3D 图形处理硬件指定标准的软件接口。", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/opengles/",
        children: "OpenGL ES"
      }), " 是 OpenGL 规范的一种形式，适用于嵌入式设备。HarmonyOS 现已支持 OpenGL ES 3.2。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的能力",
      children: "支持的能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenGL ES 3.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准库中导出的符号列表",
      children: "标准库中导出的符号列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/appendixes/openglesv3-symbol/openglesv3-symbol",
        children: "native api中导出的OpenGL ES 3.2符号列表"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入opengl能力",
      children: "引入OpenGL能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者使用OpenGL的相关能力，需要添加相关动态链接库和头文件。"
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
        children: "libace_ndk.z.so\nlibace_napi.z.so\nlibGLESv3.so\nlibEGL.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <EGL/egl.h>\n#include <EGL/eglext.h>\n#include <EGL/eglplatform.h>\n#include <GLES3/gl3.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关参考",
      children: "相关参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对OpenGL ES的使用和相关开发，需要同步了解NDK的开发过程，以及XComponent组件等的使用。具体可参考:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "opengl-es扩展接口",
      children: "OpenGL ES扩展接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenGL ES扩展接口的官方参考文档：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://registry.khronos.org/OpenGL/index_es.php",
          children: "OpenGL ES扩展接口"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以调用glGetString查询芯片厂商支持的扩展接口，调用之前务必初始化上下文。具体示例如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLDisplay display;\nEGLConfig config;\nEGLContext context;\nEGLSurface surface;\nEGLint majorVersion;\nEGLint minorVersion;\nEGLNativeWindowType win;\ndisplay = eglGetDisplay(EGL_DEFAULT_DISPLAY);\neglInitialize(display, &majorVersion, &minorVersion);\nEGLint attribs[] = {\n    EGL_RENDERABLE_TYPE,\n    EGL_OPENGL_ES2_BIT,\n    EGL_BLUE_SIZE, 8,\n    EGL_GREEN_SIZE, 8,\n    EGL_RED_SIZE, 8,\n    EGL_NONE\n};\neglChooseConfig(display, attribs, &config, 1, &numConfigs);\ncontext = eglCreateContext(display, config, EGL_NO_CONTEXT, NULL);\nsurface = eglCreatePbufferSurface(display, config, NULL);\neglMakeCurrent(display, surface, surface, context);\n\nchar *strTest = new char[1024];\nstrTest = (char *)glGetString(GL_EXTENSIONS); // 返回值strTest中会列出所有的扩展接口，并且用空格分隔开\nbool isHave = strTest.find(\"GL_OES_matrix_palette\") != -1 ?\n    true :\n    false; // 查询是否有某个扩展接口，有则isHave为true，没有则为false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简单示例",
      children: "简单示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void enableVertexAttrib(GLuint index, float *data, int32_t len)\n{\n    GLuint buffer;\n    glGenBuffers(1, &buffer);\n    glBindBuffer(GL_ARRAY_BUFFER, buffer);\n    glBufferData(GL_ARRAY_BUFFER, len, data, GL_STATIC_DRAW);\n    glVertexAttribPointer(index, TRIANGLES_POINT, GL_FLOAT, GL_FALSE, 0, 0);\n    glEnableVertexAttribArray(index);\n    return;\n}\n\nint32_t Init(void *window, int32_t width,  int32_t height)\n{\n    EGLNativeWindowType mEglWindow;\n    EGLDisplay mEGLDisplay = EGL_NO_DISPLAY;\n    EGLConfig mEGLConfig = nullptr;\n    EGLContext mEGLContext = EGL_NO_CONTEXT;\n    EGLContext mSharedEGLContext = EGL_NO_CONTEXT;\n    EGLSurface mEGLSurface = nullptr;\n    EGLint configsNum;\n    mEglWindow = reinterpret_cast<EGLNativeWindowType>(window);\n    \n    // 初始化EGL Display\n    mEGLDisplay = eglGetDisplay(EGL_DEFAULT_DISPLAY);\n    EGLint eglMajVers;\n    EGLint eglMinVers;\n    eglInitialize(mEGLDisplay, &eglMajVers, &eglMinVers);\n\n    // 配置EGL\n    EGLint attribList[] = {\n            EGL_SURFACE_TYPE, EGL_WINDOW_BIT, EGL_RENDERABLE_TYPE, EGL_OPENGL_ES3_BIT,\n            EGL_RED_SIZE, 8,\n            EGL_GREEN_SIZE, 8,\n            EGL_BLUE_SIZE, 8,\n            EGL_NONE\n    };\n    eglChooseConfig(mEGLDisplay, attribList, &mEGLConfig, 1, &configsNum);\n\n    EGLint winAttribs[] = {EGL_GL_COLORSPACE_KHR, EGL_GL_COLORSPACE_SRGB_KHR, EGL_NONE};\n    \n    // 创建EGL Surface\n    mEGLSurface = eglCreateWindowSurface(mEGLDisplay, mEGLConfig, mEglWindow, winAttribs);\n    \n    // 创建EGL Context\n    EGLint attrib3_list[] = {\n        EGL_CONTEXT_CLIENT_VERSION, 3,\n    };\n    mEGLContext = eglCreateContext(mEGLDisplay, mEGLConfig, mSharedEGLContext, attrib3_list);\n    \n    // 绑定EGL Context和Surface\n    eglMakeCurrent(mEGLDisplay, mEGLSurface, mEGLSurface, mEGLContext);\n    \n    // 创建着色点程序\n    const char* g_vertexShader =\n        \"#version 300 es\\n\"\n        \"in vec4 a_pos;\\n\"\n        \"in vec4 a_color;\\n\"\n        \"uniform mat4 a_mx;\\n\"\n        \"uniform mat4 a_my;\\n\"\n        \"out vec4 v_color;\\n\"\n        \"void main() {\\n\"\n        \"    gl_Position = a_mx * a_my * a_pos;\\n\"\n        \"    v_color = a_color;\\n\"\n        \"}\";\n    \n    const char* g_fragmentShader =\n        \"#version 300 es\\n\"\n        \"precision mediump float;\\n\"\n        \"in vec4 v_color;\\n\"\n        \"out vec4 fragColor;\\n\"\n        \"void main() {\\n\"\n        \"    fragColor = v_color;\\n\"\n        \"}\";\n    \n    // 创建顶点着色器\n    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);\n    glShaderSource(vertexShader, 1, &g_vertexShader, nullptr);\n    glCompileShader(vertexShader);\n\n    // 创建片段着色器\n    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\n    glShaderSource(fragmentShader, 1, &g_fragmentShader, nullptr);\n    glCompileShader(fragmentShader);\n\n    \n    // 创建着色器程序\n    mProgramHandle = glCreateProgram();\n    glAttachShader(mProgramHandle, vertexShader);\n    glAttachShader(mProgramHandle, fragmentShader);\n    glLinkProgram(mProgramHandle);\n    \n    // 使用着色器程序\n    glUseProgram(mProgramHandle);\n    \n    // 清理\n    glDeleteShader(vertexShader);\n    glDeleteShader(fragmentShader);\n    \n    return 0;\n}\n\nvoid Update(float angleXOffset, float angleYOffset)\n{\n    const float pi = 3.141592;\n    \n    // 创建顶点位置数据数组vertexData\n    float g_vertexData[] = {\n        -0.75, -0.50, -0.43, 0.75, -0.50, -0.43, 0.00,  -0.50, 0.87,  0.75, -0.50, -0.43,\n        0.00,  -0.50, 0.87,  0.00, 1.00,  0.00,  0.00,  -0.50, 0.87,  0.00, 1.00,  0.00,\n        -0.75, -0.50, -0.43, 0.00, 1.00,  0.00,  -0.75, -0.50, -0.43, 0.75, -0.50, -0.43,\n    };\n    \n    // 创建顶点颜色数组colorData\n    float g_colorData[] = {\n        1, 0, 0, 1, 0, 0, 1, 0, 0, /* 红色——面1 */\n        1, 0, 0, 1, 0, 0, 1, 0, 0, /* 红色——面2 */\n        1, 0, 0, 1, 0, 0, 1, 0, 0, /* 红色——面3 */\n        1, 0, 0, 1, 0, 0, 1, 0, 0  /* 红色——面4 */\n    };\n    \n    // 顶点法向量数组normalData\n    float g_normalData[] = {\n        0.00,  -1.00, 0.00,  0.00,  -1.00, 0.00,  0.00,  -1.00, 0.00, -0.83, -0.28, -0.48,\n        -0.83, -0.28, -0.48, -0.83, -0.28, -0.48, -0.83, 0.28,  0.48, -0.83, 0.28,  0.48,\n        -0.83, 0.28,  0.48,  0.00,  -0.28, 0.96,  0.00,  -0.28, 0.96, 0.00,  -0.28, 0.96,\n    };\n    \n    // 设置视口大小\n    glViewport(0, 0, m_width, m_height);\n    \n    // 清除颜色缓存\n    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);\n    glClear(GL_COLOR_BUFFER_BIT);\n    \n    // 获取着色器程序中变量的位置句柄\n    GLint aPos = glGetAttribLocation(mProgramHandle, \"a_pos\");\n    GLint aColor = glGetAttribLocation(mProgramHandle, \"a_color\");\n    GLint aNormal = glGetAttribLocation(mProgramHandle, \"a_normal\");\n    GLint uLightColor = glGetUniformLocation(mProgramHandle, \"u_lightColor\");\n    GLint uLightDirection = glGetUniformLocation(mProgramHandle, \"u_lightDirection\");\n    GLint aMx = glGetUniformLocation(mProgramHandle, \"a_mx\");\n    GLint aMy = glGetUniformLocation(mProgramHandle, \"a_my\");\n\n    angleX = angleXOffset;\n    angleY = angleYOffset;\n\n    // y轴旋转度\n    float radianY = (angleY * pi) / 180.0;\n    float cosY = cosf(radianY);\n    float sinY = sinf(radianY);\n    float myArr[] = {\n        cosY, 0, -sinY, 0,\n        0, 1, 0, 0,\n        sinY, 0, cosY, 0,\n        0, 0, 0, 1\n    };\n\n    // 向着色器传递4x4矩阵数据\n    glUniformMatrix4fv(aMy, 1, false, myArr);\n\n    // x轴旋转度\n    float radianX = (angleX * pi) / 180.0;\n    float cosX = cosf(radianX);\n    float sinX = sinf(radianX);\n    float mxArr[] = {\n        1, 0, 0, 0, 0, cosX, -sinX, 0, 0, sinX, cosX, 0, 0, 0, 0, 1\n    };\n\n    glUniformMatrix4fv(aMx, 1, false, mxArr);\n\n    // 给平行光传入颜色和方向数据，RGB(1,1,1),单位向量(x,y,z)\n    glUniform3f(uLightColor, 1.0, 1.0, 1.0);\n\n    // 保证向量(x,y,z)的长度为1，即单位向量\n    float x = 2.0 / sqrt(15);\n    float y = 2.0 / sqrt(15);\n    float z = 3.0 / sqrt(15);\n\n    glUniform3f(uLightDirection, x, -y, z);\n\n    // 创建缓冲区buffer，传入顶点位置数据g_vertexData\n    enableVertexAttrib(aPos, g_vertexData, sizeof(g_vertexData));\n    enableVertexAttrib(aNormal, g_normalData, sizeof(g_normalData));\n    // 创建缓冲区colorBuffer，传入顶点颜色数据g_colorData\n    enableVertexAttrib(aColor, g_colorData, sizeof(g_colorData));\n\n    glEnable(GL_DEPTH_TEST);\n\n    // 绘制四棱锥\n    glDrawArrays(GL_TRIANGLES, 0, TETRAHEDRON_POINT);\n    \n    // 交换缓冲区\n    eglSwapBuffers(mEGLDisplay, mEGLSurface);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过EGL创建和设置整个OpenGL ES渲染环境，实现一个3D四棱锥的渲染程序，下面详细地解释下每个步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用eglgetdisplay连接渲染目标设备",
      children: "使用eglGetDisplay连接渲染目标设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLDisplay eglGetDisplay(EGLNativeDisplayType display_id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglGetDisplay是EGL库中的函数，它返回EGLDisplay对象用于表示与渲染目标设备的连接。当显示连接不可用时，将返回EGL_NO_DISPLAY表示连接不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "display_id 参数通常是一个表示显示设备的本地显示类型，EGLNativeDisplayType是为了匹配窗口显示类型，在各个平台有不同的定义。如果您只是希望使用默认的显示设备，那么您可以直接使用 EGL_DEFAULT_DISPLAY，而不需要显式地指定 display_id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用eglinitialize初始化egl",
      children: "使用eglInitialize初始化EGL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当成功打开连接之后则需要调用eglInitialize初始化EGL。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLBoolean eglInitialize(EGLDisplay display,    // 指定EGL显示连接\n                         EGLint *majorVersion,  // 指定EGL实现返回的主版本号，可能为NULL\n                         EGLint *minorVersion); // 指定EGL实现返回的次版本号，可能为NULL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数用于初始化EGL内部数据结构，将返回EGL的版本号，并将其保存在majorVersion和minorVersion中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果初始化成功，则返回EGL_TRUE，否则返回EGL_FALSE。另外还可以通过EGLint eglGetError()，查询EGL的错误状态："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EGL_BAD_DISPLAY：表示没有指定有效的EGLDisplay。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EGL_NOT_INITIALIZED：表示EGL不能初始化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用eglchooseconfig确定渲染配置",
      children: "使用eglChooseConfig确定渲染配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EGL初始化成功之后，需要确定可用渲染表面的类型和配置，目前支持两种方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以指定一组需要的配置，使用eglChooseConfig使EGL推荐最佳配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当没有特殊配置需求时建议使用此种方法，因为这样更容易获得最佳配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EGLBoolean eglChooseConfig(EGLDisplay dpy,     // EGL显示连接句柄，标识了要进行配置选择的显示连接。\n                    const EGLint *attrib_list, // 一个以EGL_NONE结尾的整数数组，用于指定所需配置的属性。属性列表中的每个元素都由属性名称（如EGL_RED_SIZE）和相应的属性值组成。如{EGL_RED_SIZE, 8, EGL_GREEN_SIZE, 8, EGL_BLUE_SIZE, 8, EGL_NONE}。\n                        EGLConfig *configs,     // 一个用于存储选择配置的指针数组。eglChooseConfig函数将从可用配置中选择适合条件的配置，并将其存储在此数组中。\n                        EGLint config_size,     // configs数组的大小\n                        EGLint *num_config);    // 存储满足attrib_list需求，得到的满足需求的实际配置数量。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 如以上代码所示这里指定所需配置的属性为\nEGLint attribList[] = {\n        EGL_SURFACE_TYPE, EGL_WINDOW_BIT, EGL_RENDERABLE_TYPE, EGL_OPENGL_ES3_BIT,  // 指定了渲染类型为 OpenGL ES 3\n        EGL_RED_SIZE, 8,    // 指定红色缓冲区的位数是8位\n        EGL_GREEN_SIZE, 8,  // 指定绿色缓冲区的位数是8位\n        EGL_BLUE_SIZE, 8,   // 指定蓝色缓冲区的位数是8位\n        EGL_NONE\n};\neglChooseConfig(mEGLDisplay, attribList, &mEGLConfig, 1, &configsNum);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在调用eglChooseConfig函数后，系统将根据指定的配置属性attribList返回满足需求的EGL配置，这些配置将存储在mEGLConfig参数中。示例代码中的configsNum参数传入值为1，表明mEGLConfig数组的大小为1，即仅能保存一组可用配置。尽管此设置限制了返回配置的数量，但在大多数应用场景下已能满足基本需求。同时，configsNum参数将实际保存满足指定属性的配置总数，为开发者提供完整的可选配置数量信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "也可以使用eglGetConfigs查询支持的所有配置，并使用eglGetConfigAttrib筛选需要的配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下提供使用此种方法得到满足需求的配置，具体可见示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <EGL/egl.h>\n#include <iostream>\n#include <vector>\nint main() {\n    // 初始化 EGL\n    EGLDisplay display = eglGetDisplay(EGL_DEFAULT_DISPLAY);\n    eglInitialize(display, nullptr, nullptr);\n\n    // 获取所有配置\n    EGLint numConfigs;\n    eglGetConfigs(display, nullptr, 0, &numConfigs);\n    std::vector<EGLConfig> configs(numConfigs);\n    eglGetConfigs(display, configs.data(), numConfigs, &numConfigs);\n\n    // 选择合适的配置\n    EGLConfig chosenConfig = nullptr;\n    for (const auto& config : configs) {\n        EGLint redSize, greenSize, blueSize;\n        eglGetConfigAttrib(display, config, EGL_RED_SIZE, &redSize);\n        eglGetConfigAttrib(display, config, EGL_GREEN_SIZE, &greenSize);\n        eglGetConfigAttrib(display, config, EGL_BLUE_SIZE, &blueSize);\n        if (redSize == 8 && greenSize == 8 && blueSize == 6) {\n            chosenConfig = config;\n            break;\n        }\n    }\n\n    // 如果未选择配置，则打印错误信息并退出\n    if (!chosenConfig) {\n        std::cerr << \"Failed to find a suitable EGL configuration.\" << std::endl;\n        return 1;\n    }\n    return 0;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EGLBoolean eglGetConfigs(EGLDisplay display, // EGL显示连接句柄，标识了要进行配置选择的显示连接。\n                         EGLConfig *configs, // 用于保存得到配置的数组\n                         EGLint config_size, // configs的数组大小\n                         EGLint *num_config);// 得到的EGL所有可用配置数量\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "eglGetConfigs接口有以下两种用法："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当我们传递configs为nullptr时，接口会返回EGL_TRUE，并将得到的EGL所有可用配置数量保存在num_config中，这时即可根据得到的数量初始化configs来保存这些配置了，具体见如上代码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当传递configs数组接受所有配置时，将得到所有配置并保存在configs，这样即可得到所有的可用配置，接下来可以根据具体需求筛选一组config保存下来。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 选择合适的配置\n   EGLConfig chosenConfig = nullptr;\n       for (const auto& config : configs) {\n           EGLint redSize, greenSize, blueSize;\n           eglGetConfigAttrib(display, config, EGL_RED_SIZE, &redSize);\n           eglGetConfigAttrib(display, config, EGL_GREEN_SIZE, &greenSize);\n           eglGetConfigAttrib(display, config, EGL_BLUE_SIZE, &blueSize);\n           if (redSize == 8 && greenSize == 8 && blueSize == 6) {\n               chosenConfig = config;\n               break;\n           }\n       }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如上所示遍历configs每个配置，使用eglGetConfigAttrib查询该配置下特定属性的值，将该值保存在第4个参数中，并判断值是否是自己需要的，如果需要则保存该配置，以待使用。调用成功则返回EGL_TRUE，调用失败则返回EGL_FALSE。 如果返回EGL_FALSE，可以使用eglGetError查询失败的原因，如果返回EGL_BAD ATTRIBUTE则attribute不是有效的属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EGLBoolean eglGetConfigAttrib(EGLDisplay display,     // EGL 显示连接句柄，标识了要进行配置选择的显示连接\n                                   EGLConfig config,  // EGLConfig 对象，表示要查询的 EGL 配置\n                                   EGLint attribute,  // EGLint 类型的属性标识符，表示要查询的属性\n                                   EGLint *value);    // 指向 EGLint 类型变量的指针，用于存储查询到的属性值。\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用eglcreatewindowsurface创建窗口表面",
      children: "使用eglCreateWindowSurface创建窗口表面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "得到符合渲染需求的EGLConfig之后，可以使用eglCreateWindowSurface创建窗口表面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLSurface eglCreateWindowSurface(EGLDisplay dpy,             // EGLDisplay对象，表示与窗口表面关联的显示连接。\n                                  EGLConfig config,           // EGLConfig对象，表示要创建窗口表面的EGL配置。\n                                  EGLNativeWindowType win,    // EGLNativeWindowType类型的参数，表示窗口的句柄或标识符，用于与EGL表面关联。\n                                  const EGLint *attrib_list); // 指向EGL属性列表的指针，用于指定窗口表面的属性。是一个以EGL_NONE结尾的整数数组。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglCreateWindowSurface接受的属性attrib_list的值如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGL_RENDER_BUFFER EGL_SINGLE_BUFFER或EGL_BACK_BUFFER\nEGL_SINGLE_BUFFER // 表示渲染表面将只有一个渲染缓冲区，在绘制完成后，渲染缓冲区中的内容将直接显示到屏幕上，不会进行双缓冲，可能会出现闪烁或撕裂的现象。\nEGL_BACK_BUFFER   // 表示渲染表面将具有双缓冲区，即前缓冲区和后缓冲区。在绘制完成后，渲染缓冲区中的内容首先会绘制到后缓冲区，然后通过交换缓冲区的操作将后缓冲区的内容显示到屏幕上，这样可以避免闪烁和撕裂现象。\n// 默认情况下是EGL_BACK_BUFFER，当设置为null，则为默认属性。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglCreateWindowSurface创建窗口表面失败的可能原因如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EGL_BAD_MATCH：表示窗口属性与提供的 EGLConfig 不匹配。这可能是因为EGLConfig不支持渲染到窗口（即EGL_SURFACE_TYPE 属性没有设置为 EGL_WINDOW_BIT）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EGL_BAD_CONFIG：如果提供的EGLConfig没有得到系统的支持，则会发生这种错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EGL_BAD_NATIVE_WINDOW：如果提供的窗口句柄无效，则会发生这种错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EGL_BAD_ALLOC：如果eglCreateWindowSurface无法为新的EGL窗口分配资源，或者已经有与提供的窗口关联的EGLConfig，则会发生这种错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLint attribList[] = { EGL_RENDER_BUFFER, EGL_BACK_BUFFER, EGL_NONE };\nEGLSurface surface = eglCreateWindowSurface(display, config, nativeWindow, attribList);\nif (surface == EGL_NO_SURFACE) {\n    switch (eglGetError()) {\n        case EGL_BAD_MATCH:\n            // 检查窗口和 EGLConfig 属性以确定兼容性，或者验证 EGLConfig 是否支持渲染到窗口\n            break;\n        case EGL_BAD_CONFIG:\n            // 验证提供的 EGLConfig 是否有效\n            break;\n        case EGL_BAD_NATIVE_WINDOW:\n            // 验证提供的 EGLNativeWindow 是否有效\n            break;\n        case EGL_BAD_ALLOC:\n            // 资源不足；处理并恢复\n            break;\n        default:\n            // 处理任何其他错误\n            break;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用XComponent获取nativeWindow的过程中，通常涉及以下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先需要在ArkTS 中定义XComponent并设置 XComponentController。XComponent组件用于在UI中嵌入基于OpenGL或Vulkan等图形API实现的渲染内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n    XComponent({\n        id: 'myXComponent',\n        type: XComponentType.SURFACE,\n        controller: this.xComponentController\n    })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建 XComponentController子类，实现回调方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class MyXComponentController extends XComponentController {\n    onSurfaceCreated(surfaceId: string): void {\n        console.info(`onSurfaceCreated surfaceId: ${surfaceId}`);\n        nativeRender.SetSurfaceId(BigInt(surfaceId));\n        // 之后会使用 surfaceId 关联 native window\n    }\n\n    onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void {\n        console.info(`onSurfaceChanged surfaceId: ${surfaceId}`);\n    }\n\n    onSurfaceDestroyed(surfaceId: string): void {\n        console.info(`onSurfaceDestroyed surfaceId: ${surfaceId}`);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用surfaceId获取NativeWindow：surfaceId是在XComponent创建过程中生成的。在onSurfaceCreated 回调中，可以使用OH_NativeWindow_CreateNativeWindowFromSurfaceId函数通过surfaceId获取nativeWindow。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value PluginManager::SetSurfaceId(napi_env env, napi_callback_info info)\n{\n    int64_t surfaceId = ParseId(env, info);\n    OHNativeWindow *nativeWindow;\n    PluginRender *pluginRender;\n    if (windowMap_.find(surfaceId) == windowMap_.end()) {\n        OH_NativeWindow_CreateNativeWindowFromSurfaceId(surfaceId, &nativeWindow);\n        windowMap_[surfaceId] = nativeWindow;\n    } else {\n        return nullptr;\n    }\n    if (pluginRenderMap_.find(surfaceId) == pluginRenderMap_.end()) {\n        pluginRender = new PluginRender(surfaceId);\n        pluginRenderMap_[surfaceId] = pluginRender;\n    }\n    pluginRender->InitNativeWindow(nativeWindow);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用eglcreatecontext创建渲染上下文",
      children: "使用eglCreateContext创建渲染上下文"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglCreateContext函数用于创建一个新的EGL上下文，并将其与特定的显示设备（display）和配置（config）关联起来。允许指定共享上下文（shareContext），以便与已经存在的OpenGL上下文共享状态信息。该函数的参数说明如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLContext eglCreateContext(EGLDisplay display,        // EGLDisplay类型，表示要创建上下文的EGL显示连接。\n                            EGLConfig config,          // EGLConfig类型，表示与上下文关联的EGL配置。\n                            EGLContext shareContext,   // EGLContext类型，表示要与新创建的上下文共享状态信息的现有上下文。如果不想共享状态信息，可以传递EGL_NO_CONTEXT。\n                            const EGLint *attribList); // 指向属性列表的指针，用于指定上下文的属性。属性列表是以EGL_NONE结尾的一系列属性值对。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglCreateContext 的attribList属性列表如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLint attrib3_list[] = {\n    EGL_CONTEXT_CLIENT_VERSION, 3, // 指定使用的openglES版本3相关的上下文类型\n    EGL_NONE\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglCreateContext 创建渲染上下文失败的原因为EGL_BAD_CONFIG，即提供的EGLConfig无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用eglmakecurrent将egl上下文与绘图表面进行关联",
      children: "使用eglMakeCurrent将EGL上下文与绘图表面进行关联"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLBoolean eglMakeCurrent(EGLDisplay display, // EGL显示连接的句柄，用于标识渲染设备。\n                          EGLSurface draw,    // EGL绘图表面的句柄，指定要渲染到的目标表面。\n                          EGLSurface read,    // EGL读取表面的句柄，用于像素读取等操作。通常情况下，可以将其设为与 draw 相同的值。\n                          EGLContext context);// 要与指定表面关联的 EGL 上下文的句柄。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建并使用着色器程序",
      children: "创建并使用着色器程序"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建顶点着色器\nGLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);\nglShaderSource(vertexShader, 1, &g_vertexShader, nullptr);\nglCompileShader(vertexShader);\n\n// 创建片段着色器\nGLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\nglShaderSource(fragmentShader, 1, &g_fragmentShader, nullptr);\nglCompileShader(fragmentShader);\n\n// 创建着色器程序\nmProgramHandle = glCreateProgram();\nglAttachShader(mProgramHandle, vertexShader);\nglAttachShader(mProgramHandle, fragmentShader);\nglLinkProgram(mProgramHandle);\n\n// 使用着色器程序\nglUseProgram(mProgramHandle);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLuint glCreateShader(GLenum shaderType);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glCreateShader用于创建一个指定类型（顶点着色器、片段着色器等）的着色器对象，并返回该对象的句柄。其中shaderType参数指定要创建的着色器类型，可以是GL_VERTEX_SHADER（顶点着色器）或 GL_FRAGMENT_SHADER（片段着色器）等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glShaderSource(GLuint shader, GLsizei count, const GLchar \\**string, const GLint *length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glShaderSource函数用于设置着色器对象的源代码。其中各参数含义如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shader：要设置源代码的着色器对象的标识符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "count：源代码字符串的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "string：指向源代码字符串的指针数组。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "length：指向包含每个源代码字符串长度的整数数组，可以为nullptr，表示每个字符串都以null结尾。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glCompileShader(GLuint shader);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glCompileShader函数用于编译指定的着色器对象，其中shader参数是要编译的着色器对象的标识符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLuint glCreateProgram(void);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glCreateProgram函数用于创建一个新的着色器程序对象，该函数返回一个新创建的着色器程序对象的标识符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glAttachShader(GLuint program, GLuint shader);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glAttachShader函数用于将一个着色器对象附加到一个着色器程序对象上，参数program是目标着色器程序对象的标识符，参数shader是要附加的着色器对象的标识符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glLinkProgram(GLuint program);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glLinkProgram函数用于链接一个着色器程序对象，将附加到该程序对象的着色器链接成一个可执行的渲染管线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数program是要链接的着色器程序对象的标识符。链接着色器程序时，OpenGL将会执行以下操作：将各个着色器对象中的代码合并成一个可执行的渲染管线。执行连接器优化，以优化渲染管线的性能。并将Uniform变量和Uniform块的信息进行绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glUseProgram(GLuint program);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glUseProgram函数用于激活指定的着色器程序对象。在调用glUseProgram 之后，所有的渲染调用将会使用该着色器程序进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用glCompileShader时可以使用以下代码检查是否正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 编译着色器\nglCompileShader(shader);\n\n// 检查编译状态\nglGetShaderiv(shader, GL_COMPILE_STATUS, &compiled);\n\nif (!compiled)\n{\n    GLint infoLen = 0;\n    // 获取着色器信息日志的长度\n    glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &infoLen);\n    if ( infoLen > 1 )\n    {\n        // 分配存储信息日志的内存\n        char *infoLog = malloc(sizeof(char) * infoLen);\n        // 获取并打印着色器信息日志\n        glGetShaderInfoLog(shader, infoLen, NULL, infoLog);\n        esLogMessage(\"Error compiling shader:\\n%s\\n\", infoLog);\n        // 释放分配的内存\n        free(infoLog);\n    }\n    // 删除编译失败的着色器\n    glDeleteShader(shader);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用glLinkProgram可使用如下代码检查是否正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 链接程序对象\nglLinkProgram(programObject);\n\n// 检查链接状态\nglGetProgramiv(programObject, GL_LINK_STATUS, &linked);\n\nif (!linked)\n{\n    GLint infoLen = 0;\n    // 获取程序对象信息日志的长度\n    glGetProgramiv(programObject, GL_INFO_LOG_LENGTH, &infoLen);\n    if (infoLen > 1)\n    {\n        // 分配存储信息日志的内存\n        char *infoLog = malloc(sizeof(char) * infoLen);\n        // 获取并打印程序对象的信息日志\n        glGetProgramInfoLog(programObject, infoLen, NULL, infoLog);\n        esLogMessage(\"Error linking program:\\n%s\\n\", infoLog);\n        // 释放分配的内存\n        free(infoLog);\n    }\n    // 删除链接失败的程序对象\n    glDeleteProgram(programObject);\n    return FALSE;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用glviewport设置视口大小",
      children: "使用glViewport设置视口大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glViewport(GLint x, GLint y, GLsizei width, GLsizei height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glViewport函数用于设置视口，指定OpenGL ES渲染区域在窗口的位置和大小。其中x、y指定视口的左下角在窗口中的坐标，width、height参数则指定视口的宽度和高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用glclearcolor设置清除颜色缓冲区时使用的颜色",
      children: "使用glClearColor设置清除颜色缓冲区时使用的颜色"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glClearColor(GLfloat red, GLfloat green, GLfloat blue, GLfloat alpha);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glClearColor(1.0f, 1.0f, 1.0f, 1.0f)此时设置清除颜色缓冲区时使用的颜色为 (1.0, 1.0, 1.0)，即红色分量为1.0、绿色分量为1.0、蓝色分量为1.0、透明度为1.0（不透明）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用glclear执行清除操作",
      children: "使用glClear执行清除操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glClear(GLbitfield mask);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glClear函数用于清除指定的缓冲区。参数mask指定需要清除的缓冲区，可以是以下值的组合："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GL_COLOR_BUFFER_BIT：清除颜色缓冲区。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GL_DEPTH_BUFFER_BIT：清除深度缓冲区。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GL_STENCIL_BUFFER_BIT：清除模板缓冲区。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可调用glClear(GL_COLOR_BUFFER_BIT)清除颜色缓冲区，并用之前glClearColor设置的颜色填充整个缓冲区。清除颜色缓冲区是在开始绘制新帧之前的一个常见操作，这可以确保屏幕上的每个像素都被初始化为指定的颜色值，以便绘制新的图像。也是绘制新帧的准备工作，类似于在画布上涂上底色，以便开始新的绘画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用glgetattriblocation获取属性变量位置",
      children: "使用glGetAttribLocation获取属性变量位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLint glGetAttribLocation(GLuint program, const GLchar *name);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glGetAttribLocation函数用于获取顶点着色器中某个属性的位置，这个位置在编译链接顶点着色器程序后就已经确定了，它是根据属性的名称来确定的。其中program指要查询的程序对象，name指要查询其位置的属性变量的名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用glgetuniformlocation获取统一变量位置",
      children: "使用glGetUniformLocation获取统一变量位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLint glGetUniformLocation(GLuint program, const GLchar *name);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glGetUniformLocation函数用于查询特定统一变量在程序对象中的位置。其中program指要查询的程序对象，name指要查询其位置的统一变量的名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用gluniformmatrix4fv传递44矩阵",
      children: "使用glUniformMatrix4fv传递4×4矩阵"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glUniformMatrix4fv(GLint location, GLsizei count, GLboolean transpose, const GLfloat *value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glGetUniformLocation函数用于获取着色器中uniform变量的位置。其中各个参数含义如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "location：要修改的uniform变量的位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "count：要修改的矩阵的数量。如果目标uniform变量不是数组，则此值应为1；如果是数组，则应大于等于1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "transpose：是否转置矩阵。如果是GL_FALSE，则矩阵按列优先(column major)顺序传递；如果是GL_TRUE，则矩阵按行优先(row major)顺序传递。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "value：由count个元素组成的数组的指针，这些元素将用于更新指定的uniform变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用gluniform3f向着色器传递颜色和方向",
      children: "使用glUniform3f向着色器传递颜色和方向"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glUniform3f(GLint location, GLfloat v0, GLfloat v1, GLfloat v2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glUniform3f函数为当前程序对象指定Uniform变量的值。其中location指明要更改的变量位置，v0、v1、v2表示变量中要使用的新值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建缓冲区并上传数据到gpu",
      children: "创建缓冲区并上传数据到GPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GLuint buffer;\nglGenBuffers(1, &buffer);                                                  // 生成一个缓冲区对象\nglBindBuffer(GL_ARRAY_BUFFER, buffer);                                     // 绑定缓冲区，将缓冲区设置为当前操作的缓冲区\nglBufferData(GL_ARRAY_BUFFER, len, data, GL_STATIC_DRAW);                  // 上传数据到GPU\nglVertexAttribPointer(index, TRIANGLES_POINT, GL_FLOAT, GL_FALSE, 0, 0);   // 设置顶点属性指针\nglEnableVertexAttribArray(index);                                          // 启用顶点属性数组\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glBindBuffer(GLenum target,   // target：指定要绑定的缓冲目标,可为以下值之一：\n                                   // GL_ARRAY_BUFFER：用于存储顶点属性数据；\n                                   // GL_ELEMENT_ARRAY_BUFFER：用于存储索引数据等其他。\n                  GLuint buffer);  // buffer为要绑定的顶点缓冲对象的名称。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glBufferData(GLenum target,       // target：指定缓冲对象的类型，可为以下值之一：\n                                       // GL_ARRAY_BUFFER：用于存储顶点属性数据;\n                                       // GL_ELEMENT_ARRAY_BUFFER：用于存储索引数据。\n                  GLsizeiptr size,     // 指定要分配的缓冲区的大小（以字节为单位）。\n                  const GLvoid* data,  // 指定要复制到缓冲区的初始数据。\n                  GLenum usage);       // 指定缓冲区的预期使用方式，可为以下值之一：\n                                       // GL_STATIC_DRAW：数据不会或几乎不会被修改，并且被绘制命令多次使用；\n                                       // GL_DYNAMIC_DRAW：数据会被频繁修改，并且被绘制命令多次使用；\n                                       // GL_STREAM_DRAW：数据会被修改，并且被绘制命令少量使用。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一旦调用glBufferData函数，数据就被复制到了OpenGL的缓冲对象中，并存储在GPU的显存中。这意味着数据可以在GPU上被高效地访问和处理，而无需频繁地从CPU内存传输数据，从而提高了渲染性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glVertexAttribPointer(GLuint index,         // 指定要修改的顶点数组的起始索引，索引它与顶点着色器中的属性变量绑定。（layout (location = 0) in vec3 aPos;）\n                           GLint size,           // 指定每个顶点属性的分量个数\n                           GLenum type,          // 指定每个顶点属性分量的类型\n                           GLboolean normalized, // 指定在访问顶点数据时是否将其映射到[0, 1]或[-1, 1]范围内\n                           GLsizei stride,       // 指定顶点属性之间的偏移量,如果是精密性排列可以设置为0\n                           const void *offset);  // 属性在缓冲区中的偏移量，允许在缓冲区中指定一个位置开始读取数据。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glEnableVertexAttribArray(GLuint index);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glEnableVertexAttribArray函数用于启用指定索引的顶点属性数组。例如，调用glEnableVertexAttribArray(0)可以启用位置索引为0的顶点属性数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启用功能",
      children: "启用功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glEnable(GLenum cap);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glEnable函数用于启用各种功能，具体功能由参数cap决定，cap可为以下值："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GL_BLEND：启用颜色混合，例如实现半透明效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GL_DEPTH_TEST：启用深度测试，根据坐标的远近自动隐藏被遮住的图形。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GL_CULL_FACE：根据多边形在窗口坐标中的缠绕来剔除多边形。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绘制图元并显示",
      children: "绘制图元并显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void glDrawArrays(GLenum mode,   // 参数指定要绘制的图元的类型，比如GL_TRIANGLES表示绘制三角形。\n                  GLint first,   // 参数指定要绘制的顶点数组的起始索引。\n                  GLsizei count  // 参数指定要绘制的顶点数量\n                  );\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "glDrawArrays函数用于根据当前绑定的顶点数组和顶点属性以及其他设置来绘制图元。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EGLBoolean eglSwapBuffers(EGLDisplay dpy,      // EGL显示连接\n                          EGLSurface surface); // 要交换其缓冲区的EGL表面\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eglSwapBuffers函数用于交换前后缓冲区的内容，并将渲染结果显示在屏幕上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/ndk-opengl",
          children: "基于OpenGL图形库实现绘制三棱锥功能"
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