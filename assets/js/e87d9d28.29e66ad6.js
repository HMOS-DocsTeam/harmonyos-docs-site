"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["352229"], {
776373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_svg_comp_js_components_svg_textpath_js_components_svg_textpath_md_e87_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-svg-comp-js-components-svg-textpath-js-components-svg-textpath-md-e87.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_svg_comp_js_components_svg_textpath_js_components_svg_textpath_md_e87_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-textpath/js-components-svg-textpath","title":"textPath","description":"沿路径绘制文本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-textpath/js-components-svg-textpath.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-textpath","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-textpath/js-components-svg-textpath","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-textpath/js-components-svg-textpath","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"textPath","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-textpath","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-svg-textpath"},"sidebar":"ref","previous":{"title":"tspan","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-tspan/js-components-svg-tspan"},"next":{"title":"animate","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-animate/js-components-svg-animate"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-textpath/js-components-svg-textpath.md


const frontMatter = {
	title: 'textPath',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-textpath',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-svg-textpath'
};
const contentTitle = 'textPath';

const assets = {

};



const toc = [{
  "value": "权限列表",
  "id": "权限列表",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    color: "color",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    length: "length",
    li: "li",
    p: "p",
    percentage: "percentage",
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
        id: "textpath",
        children: "textPath"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沿路径绘制文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610059)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按指定的路径绘制文本，可嵌套子标签tspan分段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只支持被父元素标签text嵌套。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "权限列表",
      children: "权限列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-tspan/js-components-svg-tspan",
        children: "tspan"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持以下表格中的属性。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件的唯一标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置路径的形状。  字母指令表示的意义如下：  - M = moveto  - L = lineto  - H = horizontal lineto  - V = vertical lineto  - C = curveto  - S = smooth curveto  - Q = quadratic Bezier curve  - T = smooth quadratic Bezier curveto  - A = elliptical Arc  - Z = closepath  默认值：0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.percentage, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的尺寸。  默认值：30px"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "black"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体填充颜色。  默认值：black"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对被指定动画的属性偏移值，from默认为原属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "opacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元素的透明度，取值范围为0到1，1表示为不透明，0表示为完全透明。支持属性动画。  默认值：1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill-opacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体填充透明度。  默认值：1.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stroke"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.color, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "black"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绘制字体边框并指定颜色。  默认值：black"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stroke-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体边框宽度。  默认值：1px"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stroke-opacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体边框透明度。  默认值：1.0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textPath属性示例，textpath文本内容沿着属性path中的路径绘制文本，起点偏移20%的path长度。（绘制的元素<path>曲线仅做参照）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\" x=\"50\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\" fill=\"none\"></path>\n    <text>\n      <textpath fill=\"blue\" startOffset=\"20%\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"30px\">\n        This is textpath test.\n      </textpath>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    height: 1200px;\n    width: 600px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284025)/* ["default"] */.A) + "",
        width: "503",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textpath与tspan组合示例与效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\" x=\"50\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\" fill=\"none\"></path>\n      <text>\n        <textpath fill=\"blue\" startOffset=\"20%\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"15px\">\n          <tspan dx=\"-50px\" fill=\"red\">This is tspan onTextPath.</tspan>\n          <tspan font-size=\"25px\">Let's play.</tspan>\n          <tspan font-size=\"30px\" fill=\"#00FF00\">12345678912354567891234567891234567891234567891234567890</tspan>\n        </textpath>\n      </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(209383)/* ["default"] */.A) + "",
        width: "504",
        height: "259"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\" x=\"50\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\" fill=\"none\"></path>\n    <text>\n      <textpath fill=\"#D2691E\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"30px\" stroke=\"black\" stroke-width=\"1\" >\n        This is TextPath.\n        <tspan font-size=\"20px\" fill=\"red\">This is tspan onTextPath.</tspan>\n        <tspan font-size=\"30px\">Let's play.</tspan>\n        <tspan font-size=\"40px\" fill=\"#00FF00\"  stroke=\"blue\" stroke-width=\"2\">12345678912354567891234567891234567891234567891234567890\n        </tspan>\n      </textpath>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186034)/* ["default"] */.A) + "",
        width: "461",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\" x=\"50\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\" fill=\"none\">\n    </path>\n    <!--      数值百分比    -->\n    <text>\n      <textpath fill=\"#D2691E\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"30px\">\n        This is TextPath.\n        <tspan x=\"50\" fill=\"blue\">This is first tspan.</tspan>\n        <tspan x=\"50%\">This is second tspan.</tspan>\n        <tspan dx=\"10%\">12345678912354567891234567891234567891234567891234567890</tspan>\n      </textpath>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841117)/* ["default"] */.A) + "",
        width: "458",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startOffset属性动画，文本绘制时起点偏移从10%运动到40%，不绘制超出path长度范围的文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    height: 3000px;\n    width: 1080px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\" fill=\"none\"></path>\n    <text>\n      <textpath fill=\"blue\" startOffset=\"10%\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"15px\">\n        <tspan dx=\"-50px\" fill=\"red\">This is tspan onTextPath.</tspan>\n        <tspan font-size=\"25px\">Let's play.</tspan>\n        <tspan font-size=\"30px\" fill=\"#00FF00\">12345678912354567891234567891234567891234567891234567890</tspan>\n        <animate attributeName=\"startOffset\" from=\"10%\" to=\"40%\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n      </textpath>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(788479)/* ["default"] */.A) + "",
        width: "458",
        height: "247"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textpath与tspan组合属性动画与效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\" fill=\"none\">\n    </path>\n    <text>\n      <textpath fill=\"#D2691E\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"30px\">\n        This is TextPath.\n        <tspan x=\"50\" fill=\"blue\">\n          tspan attribute x|rotate\n          <animate attributeName=\"x\" from=\"50\" to=\"100\" dur=\"5s\" repeatCount=\"indefinite\"></animate>\n          <animate attributeName=\"rotate\" from=\"0\" to=\"360\" dur=\"5s\" repeatCount=\"indefinite\"></animate>\n        </tspan>\n        <tspan x=\"30%\">tspan static.</tspan>\n        <tspan>\n          tspan attribute dx|opacity\n          <animate attributeName=\"dx\" from=\"0%\" to=\"30%\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n          <animate attributeName=\"opacity\" from=\"0.01\" to=\"0.99\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n        </tspan>\n        <tspan dx=\"5%\">tspan move</tspan>\n      </textpath>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(851339)/* ["default"] */.A) + "",
        width: "458",
        height: "263"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(1) \"tspan attribute x|rotate\" 文本绘制起点偏移从50px运动到100px，顺时针旋转0度到360度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) \"tspan attribute dx|opacity\" 在 \"tspan static.\" 绘制结束后再开始绘制，向后偏移量从0%运动到30%，透明度从浅到深变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3) \"tspan move\" 在上一段tspan绘制完成后，向后偏移5%的距离进行绘制，呈现跟随前一段tspan移动的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textpath与tspan组合属性动画与效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\"\n      fill=\"none\">\n    </path>\n    <text>\n      <textpath fill=\"#D2691E\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"30px\">\n        This is TextPath.\n        <tspan dx=\"20\" fill=\"blue\">\n          tspan attribute fill|fill-opacity\n          <animate attributeName=\"fill\" from=\"blue\" to=\"red\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n          <animate attributeName=\"fill-opacity\" from=\"0.01\" to=\"0.99\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n        </tspan>\n        <tspan dx=\"20\" fill=\"blue\">\n          tspan attribute font-size\n          <animate attributeName=\"font-size\" from=\"10\" to=\"50\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n        </tspan>\n      </textpath>\n        <tspan font-size=\"30\">Single tspan</tspan>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(205739)/* ["default"] */.A) + "",
        width: "458",
        height: "247"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(1) \"This is TextPath.\" 在path上无偏移绘制第一段文本内容，大小30px，颜色\"#D2691E\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) \"tspan attribute fill|fill-opacity\" 相对上一段文本结束后偏移20px，颜色从蓝到红，透明度从浅到深。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3) \"tspan attribute font-size\" 绘制起点相对上一段结束后偏移20px，起点静止，字体大小从10px到50px，整体长度持续拉长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(4) \"Single tspan\" 在上一段的尾部做水平绘制，呈现跟随上一段运动的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textpath与tspan组合属性动画与效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\">\n    <path d=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" stroke=\"red\"\n      fill=\"none\">\n    </path>\n    <text>\n      <textpath fill=\"#D2691E\" path=\"M40,360 Q360,360 360,180 Q360,40 200,40 Q40,40 40,160 Q40,280 180,280 Q280,280 300,200\" font-size=\"30px\">\n          This is TextPath.\n          <tspan dx=\"20\" fill=\"blue\">\n            tspan attribute stroke\n            <animate attributeName=\"stroke\" from=\"red\" to=\"#00FF00\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n          </tspan>\n          <tspan dx=\"20\" fill=\"white\" stroke=\"red\">\n            tspan attribute stroke-width-opacity\n            <animate attributeName=\"stroke-width\" from=\"1\" to=\"5\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n            <animate attributeName=\"stroke-opacity\" from=\"0.01\" to=\"0.99\" dur=\"3s\" repeatCount=\"indefinite\"></animate>\n          </tspan>\n      </textpath>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774831)/* ["default"] */.A) + "",
        width: "458",
        height: "247"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(1) \"tspan attribute stroke\" 轮廓颜色从红色逐渐转变成绿色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) \"tspan attribute stroke-width-opacity\" 轮廓宽度从细1px转变粗5px，透明度从浅到深。"
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
851339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800602-70dac192a1c108bb68023d75dd5f9f19.gif");

},
205739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440297-b555c282dde5f3b93b16c73e43ab54a2.gif");

},
774831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960252-7a1901c45e88b4ea0395ce30269fc7d5.gif");

},
610059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
841117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960250-a8368c53a9f8085aac994415619d63ff.png");

},
186034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440295-72152d9ea6c9b2618d5cca063456fa52.png");

},
284025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480249-272560912ae191da76806ffdb12d4ad1.png");

},
788479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480251-deb88790a84acacb3b0293b4c2e4c8f9.gif");

},
209383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800600-bffeaf0b0e0f3b7fa76a166045e696bc.png");

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