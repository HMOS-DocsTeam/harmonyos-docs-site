"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["920658"], {
376788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_images_and_videos_ts_basic_svg_ts_basic_svg_md_113_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-images-and-videos-ts-basic-svg-ts-basic-svg-md-113.json
var site_docs_ref_arkui_api_arkui_declarative_comp_images_and_videos_ts_basic_svg_ts_basic_svg_md_113_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg","title":"SVG标签说明","description":"SVG（Scalable Vector Graphics）是可缩放矢量图形，它是一种基于XML（可扩展标记语言）的图形格式，用于描述二维图形和图像。Image组件支持的SVG范围，为SVG1.1规范的部分功能。支持的标签以及属性如下：","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg.md","sourceDirName":"arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg","slug":"/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"SVG标签说明","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-svg","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-svg"},"sidebar":"ref","previous":{"title":"图像类型定义","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common"},"next":{"title":"SVG标签解析能力增强","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg.md


const frontMatter = {
	title: 'SVG标签说明',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-svg',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-svg'
};
const contentTitle = 'SVG标签说明';

const assets = {

};



const toc = [{
  "value": "基础形状",
  "id": "基础形状",
  "level": 2
}, {
  "value": "图形效果",
  "id": "图形效果",
  "level": 2
}, {
  "value": "滤镜",
  "id": "滤镜",
  "level": 3
}, {
  "value": "遮罩",
  "id": "遮罩",
  "level": 3
}, {
  "value": "裁剪",
  "id": "裁剪",
  "level": 3
}, {
  "value": "图案",
  "id": "图案",
  "level": 3
}, {
  "value": "渐变色",
  "id": "渐变色",
  "level": 3
}, {
  "value": "静态图片",
  "id": "静态图片",
  "level": 2
}, {
  "value": "动画",
  "id": "动画",
  "level": 2
}, {
  "value": "其它",
  "id": "其它",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    animate: "animate",
    animatetransform: "animatetransform",
    circle: "circle",
    clippath: "clippath",
    code: "code",
    defs: "defs",
    ellipse: "ellipse",
    feblend: "feblend",
    fecolormatrix: "fecolormatrix",
    fecomposite: "fecomposite",
    feflood: "feflood",
    fegaussianblur: "fegaussianblur",
    feoffset: "feoffset",
    filter: "filter",
    g: "g",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    line: "line",
    lineargradient: "lineargradient",
    mask: "mask",
    p: "p",
    path: "path",
    pattern: "pattern",
    polygon: "polygon",
    polyline: "polyline",
    pre: "pre",
    radialgradient: "radialgradient",
    rect: "rect",
    stop: "stop",
    strong: "strong",
    svg: "svg",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    use: "use",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "svg标签说明",
        children: "SVG标签说明"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SVG（Scalable Vector Graphics）是可缩放矢量图形，它是一种基于XML（可扩展标记语言）的图形格式，用于描述二维图形和图像。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件支持的SVG范围，为SVG1.1规范的部分功能。支持的标签以及属性如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础形状",
      children: "基础形状"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础形状标签包括：<rect>、<circle>、<ellipse>、<line>、<polyline>、<polygon>和<path>。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18539)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础标签支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-common-attributes/js-components-svg-common-attributes",
        children: "通用属性"
      }), "：id、fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、opacity、transform、clip-path、clip-rule，其中transform属性只支持平移。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#supportsvg221",
        children: "supportSvg2"
      }), "属性设置为true时，transform属性支持平移、旋转、缩放、倾斜、矩阵变换，详细请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities",
        children: "SVG标签解析能力增强"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.rect, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：x轴方向偏移分量；  y：y轴方向偏移分量；  width：宽度；  height：高度；  rx：圆角x轴半径；  ry：圆角y轴半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.circle, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆形"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cx：圆心x轴坐标；  cy：圆心y轴坐标；  r：圆形半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.ellipse, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cx：x轴坐标；  cy：y轴坐标；  rx：x轴半径；  ry：y轴半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.line, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x1：起点x轴坐标；  y1：起点y轴坐标；  x2：终点x轴坐标；  y2：终点y轴坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.polyline, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折线"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "points：顶点坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.polygon, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多边形"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "points：顶点坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.path, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d：路径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVG基础形状标签与支持的通用属性的示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- svg01.svg -->\n<svg width=\"800\" height=\"600\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#f0f0f0\">\n    <!-- 1. <rect> 矩形 -->\n    <rect x=\"50\" y=\"50\" width=\"100\" height=\"60\"\n          id=\"myRect\"\n          fill=\"#4CAF50\"\n          stroke=\"#333\"\n          stroke-width=\"4\"\n          stroke-dasharray=\"10,5\"\n          stroke-linecap=\"round\"\n          opacity=\"0.9\"\n          transform=\"translate(1,0)\"/>\n\n    <!-- 2. <circle> 圆形 -->\n    <circle cx=\"200\" cy=\"100\" r=\"50\"\n            id=\"myCircle\"\n            fill=\"none\"\n            stroke=\"#FF5722\"\n            stroke-width=\"6\"\n            stroke-linejoin=\"bevel\"\n            fill-opacity=\"0.7\"\n            stroke-opacity=\"0.9\"\n            transform=\"translate(30,0)\"/>\n\n    <!-- 3. <ellipse> 椭圆 -->\n    <ellipse cx=\"350\" cy=\"100\" rx=\"70\" ry=\"40\"\n             id=\"myEllipse\"\n             fill=\"#2196F3\"\n             fill-rule=\"evenodd\"\n             stroke=\"#000\"\n             stroke-width=\"3\"\n             opacity=\"0.8\"\n             transform=\"translate(20,0)\"/>\n\n    <!-- 4. <line> 直线 -->\n    <line x1=\"50\" y1=\"200\" x2=\"350\" y2=\"200\"\n          stroke=\"#9C27B0\"\n          stroke-width=\"5\"\n          stroke-dasharray=\"8,4\"\n          stroke-linecap=\"square\"\n          transform=\"translate(0,100)\"/>\n\n    <!-- 5. <polyline> 折线（开放路径） -->\n    <polyline points=\"50,250 100,220 150,270 200,240 250,280\"\n              fill=\"none\"\n              stroke=\"#FFC107\"\n              stroke-width=\"4\"\n              stroke-linejoin=\"round\"\n              opacity=\"0.9\"\n              transform=\"translate(0,100)\"/>\n\n    <!-- 6. <polygon> 多边形（闭合路径） -->\n    <polygon points=\"400,100 450,50 500,100 450,150\"\n             id=\"myPolygon\"\n             fill=\"#E91E63\"\n             fill-rule=\"nonzero\"\n             stroke=\"#333\"\n             stroke-width=\"3\"\n             stroke-dasharray=\"6,3\"\n             fill-opacity=\"0.8\"\n             transform=\"translate(-350,80)\"/>\n\n    <!-- 7. <path> 路径（复杂图形） -->\n    <path d=\"M550,100 C600,50 700,50 750,100 S800,150 750,200 Z\"\n          fill=\"#00BCD4\"\n          fill-rule=\"evenodd\"\n          stroke=\"#009688\"\n          stroke-width=\"4\"\n          stroke-opacity=\"0.7\"\n          transform=\"translate(-300,90)\"/>\n</svg>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // $r('app.media.svg01')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svg01'))\n        .objectFit(ImageFit.None)\n        .width('100%')\n        .height('100%')\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285579)/* ["default"] */.A) + "",
        width: "337",
        height: "268"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图形效果",
      children: "图形效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "滤镜",
      children: "滤镜"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滤镜标签包括：<filter>、<feOffset>、<feGaussianBlur>、<feBlend>、<feComposite>、<feColorMatrix>、<feFlood>。其中，<filter>定义滤镜范围，其它标签定义滤镜效果。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.filter, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义滤镜"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["x：滤镜区域x轴偏移分量，默认值为0；  y：滤镜区域y轴偏移分量，默认值为0；  width：滤镜区域宽；  height：滤镜区域高。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 21开始，当Image组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#supportsvg221",
              children: "supportSvg2"
            }), "属性设置为true时，默认值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities#filter%E5%8F%82%E6%95%B0%E5%BC%82%E5%B8%B8%E6%97%B6%E9%BB%98%E8%AE%A4%E6%95%88%E6%9E%9C%E5%8F%98%E6%9B%B4",
              children: "filter参数异常时默认效果变更"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.feoffset, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义沿x、y方向偏移距离"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）;  result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入，dx和dy。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.fegaussianblur, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义高斯模糊效果"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）;  result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入，edgemode和stddeviation。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.feblend, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义两张输入图像混合模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）;  result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入；  in2：第二图源（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result），mode。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.fecomposite, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义两张输入图像合成方式，  算法：result = k1 * in * in2 + k2 * in + k3 * in2 + k4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）；  in2：第二图源（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result），operator( over"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.fecolormatrix, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于转换矩阵对颜色进行变换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）；  result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入；  type ( matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.feflood, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义填充颜色和透明度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in：滤镜原始输入（仅支持SourceGraphic、SourceAlpha、其它滤镜效果的result）；  result：经过滤镜处理之后的输出，可以作为下一个滤镜的输入；flood-color和flood-opacity。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "遮罩",
      children: "遮罩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遮罩标签：<mask>"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.mask, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义遮罩"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["x：遮罩区域x轴偏移分量；  y：遮罩区域y轴偏移分量；  width：遮罩区域宽；  height：遮罩区域高。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 21开始，当Image组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#supportsvg221",
              children: "supportSvg2"
            }), "属性设置为true时，默认值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities#mask%E5%8F%82%E6%95%B0%E5%BC%82%E5%B8%B8%E6%97%B6%E9%BB%98%E8%AE%A4%E6%95%88%E6%9E%9C%E5%8F%98%E6%9B%B4",
              children: "mask参数异常时默认效果变更"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "裁剪",
      children: "裁剪"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "裁剪标签：<clippath>"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.clippath, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一条剪切路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：裁剪区域x轴偏移分量；  y：裁剪区域y轴偏移分量；  width：裁剪区域宽；  height：裁剪区域高。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图案",
      children: "图案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图案标签：<pattern>"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.pattern, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义填充图案"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：填充区域x轴偏移分量；  y：填充区域y轴偏移分量；  width：填充区域宽；  height：填充区域高。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渐变色",
      children: "渐变色"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渐变色相关的标签包括：<linearGradient>、<radialGradient>、<stop>"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.lineargradient, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性渐变"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x1、y1、x2、y2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.radialgradient, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放射渐变"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fx、fy、cx、cy、r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.stop, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色阶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset、stop-color"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "静态图片",
      children: "静态图片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片标签：<image>"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.img, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于图像显示"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：图像x轴偏移；  y：图像y轴偏移；  width：图像宽；  height：图像高；  href：目标图片(支持：jpg、jpeg、png、bmp、webp、heic、base64，不支持svg)。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动画",
      children: "动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画标签：<animate>、<animateTransform>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(865354)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持单个元素的属性动画或者变形动画，不支持元素间动画嵌套。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.animate, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义元素属性动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "attributeName：定义动画属性，取值：( cx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.animatetransform, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义元素变形动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "attributeName：定义动画属性，取值：transform；  type：属性定义转换类型取值：( translate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其它",
      children: "其它"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了标识图形图像效果的标签，还支持分组等标签，分别有<svg>、<g>、<use>和<defs>。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149616)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的颜色值格式包括#rgb、#rrggbb、rgb()、rgba()，以及常用颜色关键字（如red、black、blue等）。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特有属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "通用属性"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.svg, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "容器，定义个svg片段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：x轴偏移分量；  y：y轴偏移分量；  width：宽度；  height：高度；  viewBox：视口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.g, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：x轴偏移分量；  y：y轴偏移分量；  width：宽度；  height：高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.use, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复用已有元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x：x轴偏移分量；  y：y轴偏移分量；  href：目标元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.defs, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义可复用对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无特有属性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fill、fill-rule、fill-opacity、stroke、stroke-dasharray、stroke-dashoffset、stroke-opacity、stroke-width、stroke-linecap、stroke-linejoin、stroke-miterlimit、transform"
          })]
        })]
      })]
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
149616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
285579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479849-0eb0435a8e928f80b31a1e105c1337b7.png");

},
865354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
18539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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