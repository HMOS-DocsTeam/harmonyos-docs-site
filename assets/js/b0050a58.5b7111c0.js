"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["951007"], {
397802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_webgl_webgl_2_d_guidelines_webgl_2_d_guidelines_md_b00_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-webgl-webgl-2-d-guidelines-webgl-2-d-guidelines-md-b00.json
var site_docs_arkui_ui_js_dev_ui_js_webgl_webgl_2_d_guidelines_webgl_2_d_guidelines_md_b00_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/webgl-2d-guidelines","title":"使用WebGL绘制图形","description":"场景介绍","source":"@site/docs/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/webgl-2d-guidelines.md","sourceDirName":"arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines","slug":"/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用WebGL绘制图形","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/webgl-2d-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组件","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-custom-components/"},"next":{"title":"UI稳定性故障分析概述","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/webgl-2d-guidelines.md


const frontMatter = {
	title: '使用WebGL绘制图形',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/webgl-2d-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用WebGL绘制图形';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "着色器程序",
  "id": "着色器程序",
  "level": 3
}, {
  "value": "着色器",
  "id": "着色器",
  "level": 3
}, {
  "value": "图片光栅化",
  "id": "图片光栅化",
  "level": 3
}, {
  "value": "帧缓冲区对象",
  "id": "帧缓冲区对象",
  "level": 3
}, {
  "value": "纹理",
  "id": "纹理",
  "level": 3
}, {
  "value": "变量与接口说明",
  "id": "变量与接口说明",
  "level": 2
}, {
  "value": "变量类型",
  "id": "变量类型",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
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
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "使用webgl绘制图形",
        children: "使用WebGL绘制图形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WebGL的全称为Web Graphics Library（网页图形库），主要用于交互式渲染2D图形。目前HarmonyOS中使用的WebGL是基于OpenGL裁剪的OpenGL ES，可以在HTML5的Canvas元素对象中使用，无需使用插件，支持跨平台。WebGL程序是由JavaScript代码组成的，其中使用的API可以利用用户设备提供的GPU硬件完成图形渲染和加速。更多信息请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/registry/webgl/specs/latest/1.0/",
        children: "WebGL™标准"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(198151)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前该功能仅支持使用兼容JS的类Web开发范式开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "着色器程序",
      children: "着色器程序"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将缓冲区中的数据推送到着色器中还需涉及“着色器程序”，一个负责关联着色器和缓冲区的JavaScript对象。一个WebGLProgram对象由两个编译过后的WebGLShader组成，即顶点着色器和片元着色器（均由GLSL语言所写）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "着色器",
      children: "着色器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "着色器可以理解为运行在显卡中的指令和数据。在WebGL中，着色器是用OpenGL ES着色语言（GLSL）编写的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整的着色器包括顶点着色器和片元着色器。顶点着色器和片元着色器的交互则涉及到图片光栅化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "顶点着色器：最基本的任务是接收三维空间中点的坐标，将其处理为二维空间中的坐标并输出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "片元着色器：最基本的任务是对需要处理的屏幕上的每个像素输出一个颜色值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图片光栅化",
      children: "图片光栅化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将顶点着色器输出的二维空间中的点坐标，转化为需要处理的像素并传递给片元着色器的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "帧缓冲区对象",
      children: "帧缓冲区对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "帧缓冲区对象为绘图缓冲区提供替代呈现目标。它们是颜色、深度和模板缓冲区的集合，通常用于渲染图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "纹理",
      children: "纹理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纹理是一种图像，可以应用到3D模型的表面上。WebGL中的纹理有许多属性，包括宽度、高度、格式和类型。在使用纹理时，需要将其加载到WebGL中，并将其绑定到一个纹理单元上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量与接口说明",
      children: "变量与接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量类型",
      children: "变量类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应Web IDL类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLenum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLboolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true或者false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLbitfield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无符号整数，可以包含多个位标志。每个位标志都代表一个特定的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLbyte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纹理八位（一个字节），2的补码表示的有符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLshort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位2的补码表示的有符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位2的补码表示的有符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLsizei"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来描述尺寸（例如：绘画缓冲drawing buffer 的宽和高）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLintptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来表示指针的特殊类型，通常用于指定缓冲区对象的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLsizeiptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来表示指针的特殊类型，通常用于指定缓冲区对象的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLubyte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "octet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "八位（一个字节）2的补码表示的无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLushort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位2的补码表示的无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLuint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位2的补码表示的无符号整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLfloat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unrestricted float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位的IEEE标准的浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLclampf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unrestricted float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "限值32位IEEE浮点数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "canvas.getContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取canvas对象上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.createBuffer(): WebGLBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.bindBuffer(target: GLenum, buffer: WebGLBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null): void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.bufferData(target: GLenum, srcData: ArrayBufferView, usage: GLenum, srcOffset: GLuint, length?: GLuint): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并初始化WebGL的数据存储区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.getAttribLocation(program: WebGLProgram, name: string): GLint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定WebGL着色程序中获取着色器中attribute变量的地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.vertexAttribPointer(index GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将缓冲区对象分配给变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.enableVertexAttribArray(index: GLuint): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接变量与分配给它的缓冲区对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空canvas指定的颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.clear(mask: GLbitfield): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空canvas。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.drawArrays(mode: GLenum, first: GLint, count: GLsizei): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行数据绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.flush(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新数据至GPU，清空缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webgl.createProgram(): WebGLProgram"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下以实现一个彩色正方形为例，来演示使用WebGL绘制2D图形的过程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用WebGL进行3D渲染前，首先需要一个Canvas元素。以下示例创建了一个Canvas元素并设置一个onclick事件处理程序来初始化WebGL上下文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " <div class=\"container\">\n     <canvas ref=\"canvas1\" style=\"width : 400px; height : 400px; background-color : lightyellow;\"></canvas>\n     <button class=\"btn-button\" onclick=\"BtnColorTriangle\">BtnColorTriangle</button>\n </div>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置WebGL的上下文。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "JavaScript 代码中的 main() 函数将会在文档加载完成之后被调用。它的任务是设置WebGL上下文并开始渲染内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当获取到canvas之后，会调用getContext函数并向它传递 \"webgl\" 参数，来尝试获取WebGLRenderingContext。如果浏览器不支持WebGL，getContext将会返回null，如果WebGL上下文成功初始化，变量'gl'会用来引用该上下文。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function main() {\n  const canvas = document.querySelector(\"#glcanvas\");\n  // 初始化WebGL上下文\n  const gl = canvas.getContext(\"webgl\");\n\n  // 确认WebGL支持性\n  if (!gl) {\n    alert(\"你的浏览器、操作系统或硬件等可能不支持WebGL。\");\n    return;\n  }\n  // 使用完全不透明的黑色清除所有图像\n  gl.clearColor(0.0, 0.0, 0.0, 1.0);\n  // 用上面指定的颜色清除缓冲区\n  gl.clear(gl.COLOR_BUFFER_BIT);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义顶点着色器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "顶点着色器需要对顶点坐标进行必要的转换，在每个顶点基础上进行其他调整或计算，然后通过将其保存在由GLSL提供的特殊变量中来返回变换后的顶点。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在矩阵计算之前需要先引入gl-matrix开源工具库，可以从", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://glmatrix.net/",
            children: "gl-matrix官网"
          }), "下载，也可以使用npm命令下载："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "npm install gl-matrix"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 引入mat4\nimport { mat4 } from 'gl-matrix'\nconst vsSource = `\n    attribute vec4 aVertexPosition;\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n    void main() {\n      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    }\n  `;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义片段着色器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "片段着色器在顶点着色器处理完图形的顶点后，会被要绘制的每个图形的每个像素点调用一次。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const fsSource = `\n    void main() {\n      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n    }\n `;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将着色器传递给WebGL。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义顶点着色器与片段着色器之后，需要将它们传递给WebGL，并将其编译连接在一起。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下代码通过调用 loadShader()，为着色器传递类型和来源。创建了两个着色器。然后创建一个附加着色器的程序，将它们连接在一起。如果编译或链接失败，代码将弹出alert。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化着色器程序，让WebGL知道如何绘制数据\nfunction initShaderProgram(gl, vsSource, fsSource) {\n  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);\n  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);\n  // 创建着色器程序\n  const shaderProgram = gl.createProgram();\n  gl.attachShader(shaderProgram, vertexShader);\n  gl.attachShader(shaderProgram, fragmentShader);\n  gl.linkProgram(shaderProgram);\n  // 如果创建失败，将会弹出alert\n  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {\n    alert(\n      \"无法初始化着色器程序: \" +\n     gl.getProgramInfoLog(shaderProgram),\n    );\n    return null;\n  }\n  return shaderProgram;\n}\n// 创建指定类型的着色器，上传source源码并编译\nfunction loadShader(gl, type, source) {\n  const shader = gl.createShader(type);\n  // 将资源发送到着色器对象\n  gl.shaderSource(shader, source);\n  // 编译着色器程序\n  gl.compileShader(shader);\n  // 查看是否编译成功\n  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\n    alert(\n   \"编译着色器时出错：\" + gl.getShaderInfoLog(shader),\n    );\n    gl.deleteShader(shader);\n    return null;\n  }\n  return shader;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查找WebGL返回分配的输入位置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在创建着色器程序之后，需要查找WebGL返回分配的输入位置。上述有一个属性和两个Uniform。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "属性从缓冲区接收值。顶点着色器的每次迭代都从分配给该属性的缓冲区接收下一个值。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uniform类似于JavaScript全局变量。它们在着色器的所有迭代中保持相同的值。由于属性的位置是特定于单个着色器程序的，因此将它们存储在一起以易于传递。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const programInfo = {\n  program: shaderProgram,\n  attribLocations: {\n    vertexPosition: gl.getAttribLocation(shaderProgram, \"aVertexPosition\"),\n  },\n  uniformLocations: {\n    projectionMatrix: gl.getUniformLocation(shaderProgram, \"uProjectionMatrix\"),\n    modelViewMatrix: gl.getUniformLocation(shaderProgram, \"uModelViewMatrix\"),\n  },\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建缓冲器对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在画正方形前，需要创建一个缓冲器来存储它的顶点。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "首先调用gl的成员函数createBuffer()得到缓冲对象并存储在顶点缓冲器。然后调用 bindBuffer() 函数绑定上下文。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建一个Javascript数组去记录每一个正方体的每一个顶点。然后将其转化为WebGL浮点型类型的数组，并将其传到gl对象的bufferData()方法来建立对象的顶点。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function initBuffers(gl) {\n  const positionBuffer = initPositionBuffer(gl);\n  return {\n    position: positionBuffer,\n  };\n}\nfunction initPositionBuffer(gl) {\n  // 为正方形的位置创建一个缓冲区。\n  const positionBuffer = gl.createBuffer();\n  // 选择positionBuffer作为应用缓冲区的位置。\n  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n  // 创建一个正方形的位置数组。\n  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];\n  //将位置列表传递给WebGL以构建形状。\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);\n  return positionBuffer;\n}\nexport { initBuffers };\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渲染场景。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用背景色擦除画布，然后建立摄像机透视矩阵。设置45度的视图角度，并且设置一个适合实际图像的宽高比。指定在摄像机距离0.1到100单位长度的范围内的物体可见。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "加载特定位置，并把正方形放在距离摄像机6个单位的位置。然后，绑定正方形的顶点缓冲到上下文，并配置好，再通过调用drawArrays()方法来画出对象。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function drawScene(gl, programInfo, buffers) {\n  gl.clearColor(0.0, 0.0, 0.0, 1.0);\n  gl.clearDepth(1.0); // 清除所有内容。\n  gl.depthFunc(gl.LEQUAL);\n  // 清除画布。\n   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n  //创建透视矩阵用于模拟相机中的透视变形。\n  const fieldOfView = (45 * Math.PI) / 180;\n  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;\n  const zNear = 0.1;\n  const zFar = 100.0;\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);\n  // 将绘制位置设置为标识点，即场景的中心。\n  const modelViewMatrix = mat4.create();\n  // 开始绘制正方形。\n  mat4.translate(\n    modelViewMatrix, // 目标矩阵\n    modelViewMatrix, // 要转换的矩阵\n    [-0.0, 0.0, -6.0],\n  );\n  {\n    const numComponents = 2;\n    const type = gl.FLOAT;\n    const normalize = false;\n    const stride = 0; // 从一组值到下一组值需要多少字节\n    const offset = 0;\n    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);\n    gl.vertexAttribPointer(\n      programInfo.attribLocations.vertexPosition,\n      numComponents,\n      type,\n      normalize,\n      stride,\n      offset,\n    );\n    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);\n  }\n  gl.useProgram(programInfo.program);\n  gl.uniformMatrix4fv(\n    programInfo.uniformLocations.projectionMatrix,\n    false,\n    projectionMatrix,\n  );\n  gl.uniformMatrix4fv(\n    programInfo.uniformLocations.modelViewMatrix,\n    false,\n    modelViewMatrix,\n  );\n  {\n    const offset = 0;\n    const vertexCount = 4;\n    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);\n  }\n}\n// 告诉WebGL如何从位置中拉出位置缓冲到vertexPosition属性中。\nfunction setPositionAttribute(gl, buffers, programInfo) {\n  const numComponents = 2;\n  const type = gl.FLOAT;\n  const normalize = false;\n  const stride = 0; // 从一组值到下一组值需要多少字节\n  const offset = 0;\n  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);\n  gl.vertexAttribPointer(\n    programInfo.attribLocations.vertexPosition,\n    numComponents,\n    type,\n    normalize,\n    stride,\n    offset,\n  );\n  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);\n}\nexport { drawScene };\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最终实现效果示意如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925639)/* ["default"] */.A) + "",
        width: "781",
        height: "585"
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
198151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
925639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438197-5f07a934a09df3701fd29d64b5936bf4.png");

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