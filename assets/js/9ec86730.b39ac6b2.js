"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["300957"], {
115888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_text_ui_js_components_text_md_9ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-text-ui-js-components-text-md-9ec.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_text_ui_js_components_text_md_9ec_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text/ui-js-components-text","title":"text开发指导","description":"text是文本组件，用于呈现一段文本信息。具体用法请参考text的API文档。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text/ui-js-components-text.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"text开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-text","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"swiper开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/"},"next":{"title":"input开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-input/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text/ui-js-components-text.md


const frontMatter = {
	title: 'text开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-text',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'text开发指导';

const assets = {

};



const toc = [{
  "value": "创建text组件",
  "id": "创建text组件",
  "level": 2
}, {
  "value": "设置text组件样式和属性",
  "id": "设置text组件样式和属性",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "text开发指导",
        children: "text开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["text是文本组件，用于呈现一段文本信息。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text",
        children: "text"
      }), "的API文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建text组件",
      children: "创建text组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个text组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\" style=\"text-align: center;justify-content: center; align-items: center;\">\n  <text>Hello World</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594020)/* ["default"] */.A) + "",
        width: "438",
        height: "802"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置text组件样式和属性",
      children: "设置text组件样式和属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加文本样式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置color、font-size、allow-scale、word-spacing、text-align属性分别为文本添加颜色、大小、缩放、文本之间的间距和文本在水平方向的对齐方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div class=\"container\" style=\"background-color:#F1F3F5;flex-direction: column;justify-content: center; align-items: center;\">   \n  <text style=\"color: blueviolet; font-size: 40px; allow-scale:true\"> \n    This is a passage\n  </text>\n  <text style=\"color: blueviolet; font-size: 40px; margin-top: 20px; allow-scale:true;word-spacing: 20px;text-align: center\">\n    This is a passage\n  </text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* xxx.css */\n.container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(531008)/* ["default"] */.A) + "",
            width: "406",
            height: "719"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加划线"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置text-decoration和text-decoration-color属性为文本添加划线和划线颜色，text-decoration枚举值请参考 text自有样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div class=\"container\" style=\"background-color:#F1F3F5;\">\n  <text style=\"text-decoration:underline\">\n    This is a passage\n  </text>\n  <text style=\"text-decoration:line-through;text-decoration-color: red\">\n    This is a passage\n   </text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\ntext{\n  font-size: 50px;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(934024)/* ["default"] */.A) + "",
            width: "411",
            height: "741"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "隐藏文本内容"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当文本内容过多而显示不全时，添加text-overflow属性将隐藏内容以省略号的形式展现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <text class=\"text\">\n    This is a passage\n  </text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  background-color: #F1F3F5;\n  justify-content: center;\n}\n.text{\n  width: 200px;\n  max-lines: 1;\n  text-overflow:ellipsis;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(36770)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "text-overflow样式需配合max-lines样式使用，在设置了最大行数的情况下才会生效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "max-lines属性设置文本最多可以展示的行数。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["​ ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(796376)/* ["default"] */.A) + "",
            width: "455",
            height: "795"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["text组件支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-span/js-components-basic-span",
            children: "span"
          }), "子组件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div class=\"container\" style=\"justify-content: center; align-items: center;flex-direction: column;background-color: #F1F3F5;  width: 100%;height: 100%;\">\n  <text style=\"font-size: 45px;\">\n    This is a passage\n  </text>\n  <text style=\"font-size: 45px;\">\n    <span style=\"color: aqua;\">This </span><span style=\"color: #F1F3F5;\">      1\n    </span>   \n    <span style=\"color: blue;\"> is a </span>    <span style=\"color: #F1F3F5;\">      1    </span>    \n    <span style=\"color: red;\">  passage </span>\n  </text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(399236)/* ["default"] */.A) + "",
            width: "447",
            height: "788"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(656079)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当使用span子组件组成文本段落时，如果span属性样式异常（例如：font-weight设置为1000），将导致文本段落显示异常。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在使用span子组件时，注意text组件内不能存在文本内容，如果在text组件同时包含文本内容和span子组件，则仅会显示子组件span中的内容。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "text组件通过数据绑定展示文本内容，span组件通过设置show属性来实现文本内容的隐藏和显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div style=\"align-items: center;justify-content: center;\">\n    <text class=\"title\">\n      {{ content }}\n    </text>\n    <switch checked=\"true\" onchange=\"test\"></switch>\n  </div>\n  <text class=\"span-container\" style=\"color: #ff00ff;\">\n    <span show=\"{{isShow}}\">  {{ content  }}  </span>\n    <span style=\"color: white;\">\n        1\n    </span>\n    <span style=\"color: #f76160\">Hide clip </span>\n  </text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n.title {\n  font-size: 26px;\n  text-align:center;\n  width: 200px;\n  height: 200px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    isShow:true,\n    content: 'Hello World'\n  },\n  onInit(){    },\n  test(e) {\n    this.isShow = e.checked\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617406)/* ["default"] */.A) + "",
        width: "274",
        height: "502"
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
594020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbYAAAMiCAYAAAACYeYMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABhASURBVHhe7d3nt2V1fcfx/A9RYBozw9CbVFcMVRfi2E0s0SBIXBoEbKhoWCpVTZ4YKwhiIxR1YaepBBVEY0WlS+9lYJh6LY929ve3Z8/cO3MZBnGFuZ+8HrzWOWf3fR/sN7999hn+ZsWq1R0ApBA2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCxoywfOXU1yeyqctN9pes89f2dB3DU9/vxDTT4OkhbMwIy1as6i++ZXX32PKV0y5T81ZN/LFbufoP7X0tP91y06nlly5bsXY/tY1xOzWt5tX76dZ9MiZvo85j/WMcz22YPrHBPuvzH/705/7YJprJ856K2u74951u/nRq2eEYRI3Ni7AxY3ztG9/q3v/BE6edN5joHlryaHfC+z/Q3XDTzdPM37i6UM+ZN7/ba5992/sK2rXX39htNXtud/Mttz1uUJ+Mn/7s5/05nNTdePMtG8yrfVZAj/+3E7qLL72s7a+OYf1lPnjSKd0Xzzl3yvSnbqI759zz27nWPqZfZqpDF7+om7v1/P69sLF5ETZmjHe9573dlrNmTztvMNHddc+93RZbzequuvon08zfuCFsW3d77LVP/3miReX6G2/qtze7u+n3t26w/F+iYvXMLWd1Rx1zbP95wyA8+PAjbX+777FnfzyrNgjbbXfc1c2eu3V37vkXrB21/TVGTbWN8y74Stv3dPOnU2GbN3/hmv1Pvww8HYSNGeOJw7b6KYVtWR+S2XPndXvuPYStplXYtpw1px8B/r5F6alexCtUC7bZtps1p0ZGk6M13Hb817cc0/ZX85c8urTtc90twonu9M+c1cJYI9P1o/fUPPmwveCFLxY2NkvCxoxx3LuP36QRW1341w/b4118a3oFYhwdzZpTYdu3nzcsf90NQ9hu+v0tLS7jdup1/Vt2U0P1+M4487MtIDX6GtdZNfGH9lq3Auv2Xp3n5Vf8YMo+lvcOft4hbZlh2nAM43eB43Jrl59m2sac/+WvPsmwGbGxeRI2ZowhbHOmnVfqQn7PfQ+0sF3546unzFu5enX34JKHuw+cdGL3j696VXfYEYd3V/3k6haFMVLLVqxsYRtvRdZ6FbYKSd2KHCO0fOWK/nVVd92NN3RvfPObule+5tXd29/5zu7e+x9o8zduorvjrnvaebz9ne+aMv2e++7vj32r7hvf+k4bOb7+iDcM3+v1x1evjy1f0R/LnO5Tp58xJVp1/I8sXda+u/uHV766O/KNb+r+5+e/bPPG5SraDzy0pI347nvgoe7a62/oXnfY4d1hh7+hu/ve+9py04Wtzrn+Rhd+/Zvdaw87rHvtP7+uu/jSS/t5K7vFL3phN2/B/H7+X3PkCE+dsDFjjGGrC/z6httyE93td97dbkVe+eOftIt13V6sYF106SXdM7Z4Zjdn3rxu9z326LbZdlG/ra26I478lzZ/XLaCMjVsw8MjFbbx1t/y/qJ+3Lvf1U+f3W29cEG3y+67te3WsX3y00N0phu9tX30+6r3u+z2rDYyrOXKI0sf6846+/PtO76KVM2r79KG0eSwbj3IUvuo+XV8FbSa/98/+FELYh3nLrvt3i1cVLc653Uve8U/dkuXLW/r1vK33HZHv/7s7pvfvqhtZ/sdd+4WbbdDd/+DD7Vjmnwrcvx7VlB33X2P9jddsGhRv86O3ZazZ3UHPffg7tDFi4WNzZKwMWNU2OriXa+P55i3vr1dnOtW5BiYm2+5tb/Qz+kOfeHibsmjj/bTKmQrupNOPaUte8ll32vbr7BtOGLbMGyfOv3T7eJ+/Pve209b3i7sDy1Z0r305a9owfjZL4bR0nTGUL3juArjnO7Bh5e0zzW91q/v32qEVLGq+fXd3hCm1f1I8zXddjvsOOmnBxNtfu1zvwMOaiPGml6h/8+Pf7Kd29HHvq2fNuzz1tvvaOdS53jZ9y5v64/bKfVAyhi2ml7hrFFdRa1iOJzDyj6Qt7agzZo7R9jYLAkbM0aFqy68dWGu16lmtQt83Yas1wpbxaK86jX/1K8zux+ZPNhvZ2UfsBXdiv5iXIGrZetiX9uv0dSmjNi22GrLfuSyQ79+BWaNfrsVgxpl1ahrPObHc9c997V91yhp+H5tou3nrLM/12+nQvlIC9vrjzhyzToT3Y4779K9+ai3tOXrWCqAL37py/v9ze/P7eEWonbca17rtmRtY8mjj7Xlb739zjayq4c+xnMp9d1dLT85bKUeUKnPL3nZK9oxLVtRt2CH/ygoFXdhY3MkbMwYFba6UE+eVjEZRh2Du++9v0VufHikIlCx2WbbbbvTz/xMd+ZnP9ud9bmzmzPOOrPbedfdWmCGC/em3YqsC/q5F5zfrZyoKPQX+t5wwV/Vve0dx/Xbmz0s2wKz7thG4yiplluwzaL2vuJT0RlvVda2/n7/A7uddtmtBey2O+5sx/nDK69qy9c2lvYjt4p83bYcojb5bzHRXfrd73fP2GKr9pu4+lxhq1Cd/fkvth+yr3886z8Vec1vr237rNFjnUv9h8AYtvqPgx123knY2CwJGzNGhW26pyIrAnVxrtcaCU0OW02vMM2ZN7fbc5+9+2jt2Ydgr26v/v1g36aNgvr1Nxa22v6tfWC2mLVV96trrunnDxf5eh3er+4++rFPtEDV79HGJx3XNx7rCe//YPe3z9yyfY911NHHdDvstMuaZSoiq9rtxHrsv6J2zrnntXOv24zD/CFsdWzP2e+AKdse3//iV9e08H3uC19q51Zhq+195+JLWggnL1vOPf/LU8J2+RU/XHvu9bmOqYI2hu2QQ58vbGyWhI0ZYwjbxp+KrCf81g9bPZK+6+7PWvN5+ovwOIIZwzY+LTn5cf+aP9yem9V95cILh9HV6mH98Tbge977vja/YjWOoh7Pr3/z2xbBC7/+jW7u1gu64993QjveGu1ViB59bFkLyyc+dXq3/4EHtxHc5BjV/it2e+3z7DXnNQRx9L3Lr2jzv33RxW35W267vd/enO6iS2oEN+xn3Fate94FX27Lj5+HEdvs7kdXXb12m4+tqKjV7dyV7Ufk8+YveMLzhP9rwsaM8XgjttG6sA0PjwzT133XdO/9D7aLc0WrQjY5EkMU1oWtPtf062+8uYXqxpuHhzgqBhWbHXfetY3Ialq74Pchq9caEW3Kd2yltjV/4TbdgQc/t42sfv7LX6+dV9uq13pqcf7CRe34r/jhlf20dRGpoBxy6OJu6wUL23dy47HUduv94W84sp1PPeZfy45PRV586XfXLDv5eIZbkev+w2GifW9Xn+s7ypo2hHD4O9X51veZfsfG5kjYmDGe6F8eqYv68C+PzF77O7a66Naoqy7C+x1wYH9xXtmCVBfmupVXIfru9+sJwWHZ+nH0s/bcu/88XKx/d90N7eI+jtjKKad9uD2wcdqHP9KvMzzIUdusgG7ZB6huAY7LbkwFYvGLXtLOqeI5NTTD94OfPuMz7Rjre8K6vTl5fh1vjarqfOupyIp1mfjjn7qvXvi1Nv11h72+nWtta13YLmt/q8n7q/dTw1Ym2vFVVH/2i1+1z3Wudc5z+5FabUvY2BwJGzNCXYiPe/d72sV0uvmjO+++p13QxxHbOHr5wpfOaSOtisTzDnl+t/+BB7UHK7bfcaf2G7Jatr6/qoDUrb1xe7+99rq2vfrJQF3Qx+DVj6dre3XRP+Cgg1s46/2pH/pI29844tqYWm74J7tm96O2563Z/uRlxt/lzW63IcewTF6/pn3+i+e0INXx1Ohv0Xbbt2N5ycte3o5jPJ7hVuTcdityatiGUdh/nXf+pL/vMK1uh+6+x15tvfrd2977Pru9f85++3dHHX1su4U6+UEU2BwIGzPERPuXMepftp9+/nChr9tuJ5/6oXbrcP15S/sRWt3OrNt79UPmCkJd4Gs0U6OOeuz9pFNO6z76sY/369SFfVV7yvLEk09t/6JJTatt1fdftU79huz5L1jcbbPtdu2238OPLF27v00zbO/kU09r4Zw8r463VMg+/O//0X39m9+admRU0+pYKspHH/vWbuGi7bpn/91zWpAn/vjnfplaZ6IP1PJ2K/bEk0/pfvO769q51fbH7dR+rrr6p+38199+rV8Pr9Tfbdvtd2z/l4Vav46pRq2TtwObA2FjRtiUi+cTLVMjorpQj2radOsM06ZGZPKoZLr5k+eN234itWwFYvLnyfNrH5NHaNMZ91e3GzecV7cNh2MZR67r5q2/7NTPo1p/unlPdFzwdBI2/t+YLmzD9E0LETAzCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkAUYQMgirABEEXYAIgibABEETYAoggbAFGEDYAowgZAFGEDIIqwARBF2ACIImwARBE2AKIIGwBRhA2AKMIGQBRhAyCKsAEQRdgAiCJsAEQRNgCiCBsAUYQNgCjCBkCQ1d3/AkDPG2IJkCsCAAAAAElFTkSuQmCC");

},
531008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478099-f1f6011440493574daac9ffc1a91d97b.png");

},
617406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478101-52a173bb0c883cb0884881102bb4188a.gif");

},
796376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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COIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAAjiCABBHAEgiCMABHEEgCCOABDEEQCCOAJAEEcACOIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAAjiCABBHAEgiCMABHEEgCCOABDEEQCCOAJAEEcACOIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAAjiCABBHAEgiCMABHEEgCCOABDEEQCCOAJAEEcACOIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAAjiCABBHAEgiCMABHEEgCCOABDEEQCCOAJAEEcACOIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAAjiCABBHAEgiCMABHEEgCCOABDEEQCCOAJAEEcACOIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAAjiCABBHAEgiCMABHEEgCCOABDEEQCCOAJAEEcACOIIAEEcASCIIwAEcQSAII4AEMQRAII4AkAQRwAI4ggAQRwBIIgjAARxBIAgjgAQxBEAgjgCQBBHAFhkd/d/D9t1AKcsGEwAAAAASUVORK5CYII=");

},
399236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958100-bb294b828e9c16acbddf49b96b2fb52e.png");

},
36770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
934024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798450-34182655fdbdcad5adbe9a4d8dc8d13b.png");

},
656079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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