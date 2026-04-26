"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444524"], {
7737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_universal_comp_inform_js_service_widget_common_mediaquery_js_service_widget_common_mediaquery_md_b66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-universal-comp-inform-js-service-widget-common-mediaquery-js-service-widget-common-mediaquery-md-b66.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_universal_comp_inform_js_service_widget_common_mediaquery_js_service_widget_common_mediaquery_md_b66_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-mediaquery/js-service-widget-common-mediaquery","title":"媒体查询","description":"媒体查询（MediaQuery）在移动设备上应用十分广泛，开发者经常需要根据设备的大致类型或者特定的特征和设备参数（例如屏幕分辨率）来修改应用的样式。为此媒体查询提供了如下功能：","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-mediaquery/js-service-widget-common-mediaquery.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-mediaquery","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-mediaquery/js-service-widget-common-mediaquery","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-mediaquery/js-service-widget-common-mediaquery","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"媒体查询","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-mediaquery","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-common-mediaquery"},"sidebar":"ref","previous":{"title":"渐变样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-gradient/js-service-widget-common-gradient"},"next":{"title":"自定义字体样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-customizing-font/js-service-widget-common-customizing-font"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-mediaquery/js-service-widget-common-mediaquery.md


const frontMatter = {
	title: '媒体查询',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-common-mediaquery',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-common-mediaquery'
};
const contentTitle = '媒体查询';

const assets = {

};



const toc = [{
  "value": "CSS语法规则",
  "id": "css语法规则",
  "level": 2
}, {
  "value": "页面中引用资源",
  "id": "页面中引用资源",
  "level": 2
}, {
  "value": "媒体类型",
  "id": "媒体类型",
  "level": 2
}, {
  "value": "媒体逻辑操作",
  "id": "媒体逻辑操作",
  "level": 2
}, {
  "value": "媒体特征",
  "id": "媒体特征",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "媒体查询",
        children: "媒体查询"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体查询（MediaQuery）在移动设备上应用十分广泛，开发者经常需要根据设备的大致类型或者特定的特征和设备参数（例如屏幕分辨率）来修改应用的样式。为此媒体查询提供了如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对设备和应用的属性信息，可以设计出相匹配的布局样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当屏幕发生动态改变时（比如分屏、横竖屏切换），应用页面布局同步更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(168491)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "media属性值默认为设备的真实尺寸大小、物理像素和真实的屏幕分辨率。请勿与以720px为基准的项目配置宽度px混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "css语法规则",
      children: "CSS语法规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@media来引入查询语句，具体规则如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@media [media-type] [and|not|only] [(media-feature)] {\n  CSS-Code;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@media screen and (round-screen: true) { … } // 当设备屏幕是圆形时条件成立"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@media (max-height: 800) { … } // 范围查询，CSS level 3 写法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@media (height <= 800) { … } // 范围查询，CSS level 4 写法，与CSS level3写法等价"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@media screen and (device-type: tv) or (resolution < 2) { … } // 同时包含媒体类型和多个媒体特征的多条件复杂语句查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面中引用资源",
      children: "页面中引用资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过@import方式引入媒体查询，具体使用方法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@import url [media-type] [and|not|only] [(media-feature)];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@import '../common/style.css' screen and (min-width: 600) and (max-width: 1200);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体类型",
      children: "媒体类型"
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
            children: "screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按屏幕相关参数进行媒体查询。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体逻辑操作",
      children: "媒体逻辑操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体逻辑操作符：and、or、not、only用于构成复杂媒体查询，也可以通过comma（,）将其组合起来，详细解释说明如下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 媒体逻辑操作符"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "and"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将多个媒体特征（Media Feature）以逻辑运算符“与”的方式连接成一个媒体查询，只有当所有媒体特征都为true，查询条件成立。另外，它还可以将媒体类型和媒体功能结合起来。  例如：screen and (device-type: wearable) and (max-height: 600) 表示当设备类型是智能穿戴同时应用的最大高度小于等于600个像素单位时成立。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "not"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取反媒体查询结果，媒体查询结果不成立时返回true，否则返回false。在媒体查询列表中应用not，则not仅取反应用它的媒体查询。  例如：not screen and (min-height: 50) and (max-height: 600) 表示当应用高度小于50个像素单位或者大于600个像素单位时成立。  使用not运算符时必须指定媒体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当整个表达式都匹配时，才会应用选择的样式，可以应用在防止某些较早的版本的浏览器上产生歧义的场景。一些较早版本的浏览器对于同时包含了媒体类型和媒体特征的语句会产生歧义，比如：  screen and (min-height: 50)  老版本浏览器会将这句话理解成screen，从而导致仅仅匹配到媒体类型（screen），就应用了指定样式，使用only可以很好地规避这种情况。  使用only时必须指定媒体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ",(comma)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将多个媒体特征以“或”的方式连接成一个媒体查询，如果存在结果为true的媒体特征，则查询条件成立。其效果等同于or运算符。  例如：screen and (min-height: 1000), （round-screen：true） 表示当应用高度大于等于1000个像素单位或者设备屏幕是圆形时，条件成立。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "or"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将多个媒体特征以“或”的方式连接成一个媒体查询，如果存在结果为true的媒体特征，则查询条件成立。  例如：screen and (max-height: 1000) or （round-screen：true）表示当应用高度小于等于1000个像素单位或者设备屏幕是圆形时，条件成立。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在MediaQuery Level 4中引入了范围查询，使其能够使用max-，min-的同时，也支持了<=，>=，<，>操作符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 媒体逻辑范围操作符"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小于等于，例如：screen and (height <= 50)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于，例如：screen and (height >= 600)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小于，例如：screen and (height < 50)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大于，例如：screen and (height > 600)。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体特征",
      children: "媒体特征"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的最小高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的最大高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的最小宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的最大宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的分辨率，支持dpi，dppx和dpcm单位。其中：  - dpi表示每英寸中物理像素个数，1dpi≈0.39dpcm；  - dpcm表示每厘米上的物理像素个数，1dpcm ≈ 2.54dpi；  - dppx表示每个px中的物理像素数（此单位按96px=1英寸为基准，与页面中的px单位计算方式不同），1dppx = 96dpi。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最小分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最大分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的方向。  可选值：  - orientation: portrait（设备竖屏）  - orientation: landscape（设备横屏）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aspect-ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的宽度与高度的比值。  例如：aspect-ratio:1/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-aspect-ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的宽度与高度的最小比值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-aspect-ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用页面显示区域的宽度与高度的最大比值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-device-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最小高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-device-height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最大高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min-device-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最小宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max-device-width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的最大宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "round-screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕类型，圆形屏幕为true， 非圆形屏幕为 false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dark-mode6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统为深色模式时为true，否则为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <div class=\"container\">\n    <text class=\"title\">Hello World</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 300px;\n  height: 600px;\n  background-color: #008000;\n}\n\n@media (device-type: wearable) {\n    .container-inner {\n        justify-content: center;\n        align-items: center;\n        padding: 40px 26px;\n    }\n\n    .title {\n        text-align: center;\n    }\n\n    .detail_text {\n        max-lines: 2;\n        text-align: center;\n    }\n}\n\n@media (device-type: tv) {\n    .title {\n        font-size: 16px;\n    }\n\n    .detail_text {\n        font-size: 12px;\n    }\n}\n\n@media (device-type: car) {\n    .title {\n        font-size: 12px;\n        color: #FFFFFF;\n        font-family: @id_text_font_family_medium;\n    }\n\n    .detail_text {\n        font-size: 12px;\n        margin-top: 2px;\n        font-family: @id_text_font_family_regular;\n        color: #FFFFFF;\n    }\n}\n"
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
168491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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