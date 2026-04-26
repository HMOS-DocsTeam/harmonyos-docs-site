"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["164932"], {
35427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_canvas_imagebitmap_ts_components_canvas_imagebitmap_md_f25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-canvas-drawing-ts-components-canvas-imagebitmap-ts-components-canvas-imagebitmap-md-f25.json
var site_docs_ref_arkui_api_arkui_declarative_comp_canvas_drawing_ts_components_canvas_imagebitmap_ts_components_canvas_imagebitmap_md_f25_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap","title":"ImageBitmap","description":"ImageBitmap对象可以存储canvas渲染的像素数据。从API version 11开始，当应用创建Worker线程，支持使用postMessage将ImageBitmap实例传到Worker中进行绘制，并使用onmessage接收Worker线程发送的绘制结果进行显示。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap.md","sourceDirName":"arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap","slug":"/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"ImageBitmap","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-imagebitmap","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-components-canvas-imagebitmap"},"sidebar":"ref","previous":{"title":"DrawingRenderingContext","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext"},"next":{"title":"ImageData","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagedata/ts-components-canvas-imagedata"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-imagebitmap/ts-components-canvas-imagebitmap.md


const frontMatter = {
	title: 'ImageBitmap',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-imagebitmap',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-components-canvas-imagebitmap'
};
const contentTitle = 'ImageBitmap';

const assets = {

};



const toc = [{
  "value": "constructor",
  "id": "constructor",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12-1",
  "level": 2
}, {
  "value": "close",
  "id": "close",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（加载图片）",
  "id": "示例1加载图片",
  "level": 3
}, {
  "value": "示例2（创建ImageBitmap）",
  "id": "示例2创建imagebitmap",
  "level": 3
}, {
  "value": "示例3（支持并发线程绘制）",
  "id": "示例3支持并发线程绘制",
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
    strong: "strong",
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
        id: "imagebitmap",
        children: "ImageBitmap"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ImageBitmap对象可以存储canvas渲染的像素数据。从API version 11开始，当应用创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker线程"
      }), "，支持使用postMessage将ImageBitmap实例传到Worker中进行绘制，并使用onmessage接收Worker线程发送的绘制结果进行显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916541)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从 API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(src: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ImageSrc创建ImageBitmap对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的数据源支持本地图片。  1、string格式用于加载本地图片，例如ImageBitmap(\"common/images/example.jpg\")，type为\"entry\"和\"feature\"类型的Module，其图片加载路径的起点为当前Module的ets文件夹，type为\"har\"和\"shared\"类型的Module，其图片加载路径的起点为当前构建的\"entry\"或\"feature\"类型Module的ets文件夹。  type为\"har\"和\"shared\"类型的Module中推荐使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
              children: "ImageSource"
            }), "图片解码方式将资源图片解码为统一的PixelMap加载使用。  2、支持本地图片类型：bmp、jpg、png、svg和webp类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - ArkTS卡片上不支持", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://等网络相关路径前缀、datashare://路径前缀以及file://data/storage路径前缀的字符串"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor-1",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(data: PixelMap)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过PixelMap创建ImageBitmap对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的数据源支持PixelMap对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(src: string, unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ImageSrc创建ImageBitmap对象，支持使用unit配置Path2D对象的单位模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的数据源支持本地图片。  1、string格式用于加载本地图片，例如ImageBitmap(\"common/images/example.jpg\")，type为\"entry\"和\"feature\"类型的Module，其图片加载路径的起点为当前Module的ets文件夹，type为\"har\"和\"shared\"类型的Module，其图片加载路径的起点为当前构建的\"entry\"或\"feature\"类型Module的ets文件夹。  type为\"har\"和\"shared\"类型的Module中推荐使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
              children: "ImageSource"
            }), "图片解码方式将资源图片解码为统一的PixelMap加载使用。  2、支持本地图片类型：bmp、jpg、png、svg和webp类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - ArkTS卡片上不支持", (0,jsx_runtime.jsx)(_components.code, {
              children: "http://等网络相关路径前缀、datashare://路径前缀以及file://data/storage路径前缀的字符串"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置ImageBitmap对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。  异常值undefined、NaN和Infinity按默认值处理。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor12-1",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(data: PixelMap, unit: LengthMetricsUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过PixelMap创建ImageBitmap对象，支持使用unit配置Path2D对象的单位模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的数据源支持PixelMap对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetricsunit12",
              children: "LengthMetricsUnit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来配置ImageBitmap对象的单位模式，配置后无法动态更改，配置方法同", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
              children: "CanvasRenderingContext2D"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放ImageBitmap对象相关联的所有图形资源，并将ImageBitmap对象的宽高置为0。close示例代码同创建ImageBitmap代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageBitmap的像素宽度。  默认单位为vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageBitmap的像素高度。  默认单位为vp。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1加载图片",
      children: "示例1（加载图片）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ImageBitmap加载本地图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(548201)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "copyCodeResource"
      }), "相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ImageExample {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.context.drawImage(this.img, 0, 0, 500, 500, 0, 0, 400, 200)\n          this.img.close()\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(609303)/* ["default"] */.A) + "",
        width: "234",
        height: "82"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2创建imagebitmap",
      children: "示例2（创建ImageBitmap）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过PixelMap创建ImageBitmap对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807161)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio的预览器不支持getPixelMap接口，不支持显示PixelMap绘制的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Demo {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('50%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.context.fillStyle = \"#00ff00\"\n          this.context.fillRect(0, 0, 100, 100)\n          let pixel = this.context.getPixelMap(0, 0, 100, 100)\n          let image = new ImageBitmap(pixel)\n          this.context.drawImage(image, 100, 100)\n        })\n\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(300027)/* ["default"] */.A) + "",
        width: "164",
        height: "164"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3支持并发线程绘制",
      children: "示例3（支持并发线程绘制）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过创建Worker线程，实现并发线程绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59916)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio的预览器不支持显示在Worker线程中绘制的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct imageBitmapExamplePage {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  private myWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n  // \"common/images/example.jpg\"需要替换为开发者所需的图像资源文件\n  private img: ImageBitmap = new ImageBitmap(\"common/images/example.jpg\");\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .backgroundColor('#ffff00')\n        .onReady(() => {\n          this.myWorker.postMessage({ myImage: this.img });\n          this.myWorker.onmessage = (e): void => {\n            if (e.data.myImage) {\n              let image: ImageBitmap = e.data.myImage\n              this.context.transferFromImageBitmap(image)\n            }\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程在onmessage中接收到主线程postMessage发送的ImageBitmap，并进行绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { image } from '@kit.ImageKit';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\nworkerPort.onmessage = (e: MessageEvents) => {\n  if (e.data.myImage) {\n    let img: ImageBitmap = e.data.myImage\n    let offCanvas = new OffscreenCanvas(600, 600)\n    let offContext = offCanvas.getContext(\"2d\")\n    offContext.drawImage(img, 0, 0, 500, 500, 0, 0, 400, 200)\n    let image = offCanvas.transferToImageBitmap()\n    workerPort.postMessage({ myImage: image });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401063)/* ["default"] */.A) + "",
        width: "234",
        height: "82"
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
609303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800320-6cb25f65b0378849f21743aa4ec7e340.png");

},
401063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800320-6cb25f65b0378849f21743aa4ec7e340.png");

},
300027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
916541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
59916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
548201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
807161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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