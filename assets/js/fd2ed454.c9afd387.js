"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843774"], {
737649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_arkts_js_apis_graphics_drawing_arkts_apis_graphics_drawing_lattice_arkts_apis_graphics_drawing_lattice_md_fd2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-arkts-js-apis-graphics-drawing-arkts-apis-graphics-drawing-lattice-arkts-apis-graphics-drawing-lattice-md-fd2.json
var site_docs_ref_arkgraphics_api_arkgraphics_arkts_js_apis_graphics_drawing_arkts_apis_graphics_drawing_lattice_arkts_apis_graphics_drawing_lattice_md_fd2_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice","title":"Class (Lattice)","description":"矩形网格对象。该对象用于将图片按照矩形网格进行划分。","source":"@site/docs-ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice.md","sourceDirName":"arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice","slug":"/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Class (Lattice)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-lattice","kit":"图形","last_updated":"2026-04-22","slug":"arkts-apis-graphics-drawing-lattice"},"sidebar":"ref","previous":{"title":"Class (ImageFilter)","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-imagefilter/arkts-apis-graphics-drawing-imagefilter"},"next":{"title":"Class (MaskFilter)","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-maskfilter/arkts-apis-graphics-drawing-maskfilter"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice.md


const frontMatter = {
	title: 'Class (Lattice)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing-lattice',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-graphics-drawing-lattice'
};
const contentTitle = 'Class (Lattice)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "createImageLattice12+",
  "id": "createimagelattice12",
  "level": 2
}, {
  "value": "createImageLattice18+",
  "id": "createimagelattice18",
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
        id: "class-lattice",
        children: "Class (Lattice)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩形网格对象。该对象用于将图片按照矩形网格进行划分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(490671)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块使用屏幕物理像素单位px。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from '@kit.ArkGraphics2D';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createimagelattice12",
      children: "createImageLattice12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number, fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建矩形网格对象。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格是固定的，如果目标网格足够大，则这些固定网格以其原始大小进行绘制。如果目标网格太小，无法容纳这些固定网格，则所有固定网格都会按比例缩小以适应目标网格。其余网格将进行缩放，来适应剩余的空间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "xDivs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于划分图像的X坐标值数组。该参数为整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "yDivs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于划分图像的Y坐标值数组。该参数为整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fXCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fYCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fBounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fRectTypes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#recttype12",
              children: "RectType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fColors"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#color",
              children: "common2D.Color"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice",
              children: "Lattice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的矩形网格对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types;3.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass DrawingRenderNode extends RenderNode {\n  draw(context : DrawContext) {\n    let xDivs : Array<number> = [1, 2, 4];\n    let yDivs : Array<number> = [1, 2, 4];\n    let lattice = drawing.Lattice.createImageLattice(xDivs, yDivs, 3, 3); // 划分(3+1)*(3+1)的网格，下图蓝色填充矩形为固定网格\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80619)/* ["default"] */.A) + "",
        width: "348",
        height: "276"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createimagelattice18",
      children: "createImageLattice18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number, fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建矩形网格对象。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格是固定的，如果目标网格足够大，则这些固定网格以其原始大小进行绘制。如果目标网格太小，无法容纳这些固定网格，则所有固定网格都会按比例缩小以适应目标网格。其余网格将进行缩放，来适应剩余的空间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphics.Drawing"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "xDivs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于划分图像的X坐标值数组。该参数为整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "yDivs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于划分图像的Y坐标值数组。该参数为整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fXCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fYCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fBounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-common2d/js-apis-graphics-common2d#rect",
              children: "common2D.Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fRectTypes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-e/arkts-apis-graphics-drawing-e#recttype12",
              children: "RectType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fColors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice",
              children: "Lattice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建的矩形网格对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types;3.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RenderNode } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nclass DrawingRenderNode extends RenderNode {\n  draw(context : DrawContext) {\n    let xDivs : Array<number> = [1, 2, 4];\n    let yDivs : Array<number> = [1, 2, 4];\n    let colorArray :Array<number>=[0xffffffff,0x44444444,0x99999999,0xffffffff,0x44444444,0x99999999,0xffffffff,0x44444444,0x99999999,0x44444444,0x99999999,0xffffffff,0x44444444,0x99999999,0xffffffff,0x44444444];\n    let lattice = drawing.Lattice.createImageLattice(xDivs, yDivs, 3, 3,null,null,colorArray);\n  }\n}\n"
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
490671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
80619(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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