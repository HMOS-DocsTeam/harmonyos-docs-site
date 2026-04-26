"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["510842"], {
759095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_qrcode_ui_js_components_qrcode_md_0a3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-qrcode-ui-js-components-qrcode-md-0a3.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_qrcode_ui_js_components_qrcode_md_0a3_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode/ui-js-components-qrcode","title":"qrcode开发指导","description":"生成并显示二维码，具体用法请参考qrcode。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode/ui-js-components-qrcode.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"qrcode开发指导","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-qrcode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"marquee开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-marquee/"},"next":{"title":"search开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode/ui-js-components-qrcode.md


const frontMatter = {
	title: 'qrcode开发指导',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-qrcode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'qrcode开发指导';

const assets = {

};



const toc = [{
  "value": "创建qrcode组件",
  "id": "创建qrcode组件",
  "level": 2
}, {
  "value": "设置组件类型",
  "id": "设置组件类型",
  "level": 2
}, {
  "value": "设置样式",
  "id": "设置样式",
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
        id: "qrcode开发指导",
        children: "qrcode开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生成并显示二维码，具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-qrcode/js-components-basic-qrcode",
        children: "qrcode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建qrcode组件",
      children: "创建qrcode组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个qrcode组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <qrcode value=\"Hello\"></qrcode>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(351830)/* ["default"] */.A) + "",
        width: "308",
        height: "623"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710244)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "qrcode组件在创建的时候value的值为必填项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置组件类型",
      children: "设置组件类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置qrcode的type属性来选择二维码类型，如定义qrcode为矩形二维码、圆形二维码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <select onchange=\"settype\">\n    <option for=\"{{bcol_list}}\" value=\"{{$item}}\">{{$item}}</option>\n  </select>\n  <qrcode value=\"Hello\" type=\"{{qr_type}}\"></qrcode>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\nselect{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nexport default {\n  data: {\n    qr_type: 'rect',\n    bcol_list: ['rect','circle']\n  },\n  settype(e) {\n    this.qr_type = e.newValue\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639829)/* ["default"] */.A) + "",
        width: "182",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置样式",
      children: "设置样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过color和background-color样式为二维码设置显示颜色和背景颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <qrcode value=\"Hello\" type=\"rect\"></qrcode>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\nqrcode{\n  width: 300px;\n  height: 300px;\n color: blue;  background-color: #ffffff;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986235)/* ["default"] */.A) + "",
        width: "316",
        height: "558"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(669626)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "width和height不一致时，取二者较小值作为二维码的边长，且最终生成的二维码居中显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "width和height只设置一个时，取设置的值作为二维码的边长。都不设置时，使用200px作为默认边长。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中将二维码与输入框绑定，通过改变输入框的内容改变二维码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <input style=\"margin-bottom: 100px;\" onchange=\"change\"></input>\n  <qrcode value=\"{{textVal}}\"></qrcode>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\nqrcode{\n  width: 400px;\n  height: 400px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nexport default{\n  data: {\n    textVal: ''\n  },\n  change(e){\n    this.textVal = e.value\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862682)/* ["default"] */.A) + "",
        width: "308",
        height: "598"
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
862682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438173-88c82a0cd5498767cfcb98cd9c5767fe.gif");

},
710244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
639829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478127-859117e86734c79da121dc67f4e05533.gif");

},
669626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
986235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798478-5673ac4db987e853757849a456566117.png");

},
351830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAJvCAYAAAD1IC02AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABvJSURBVHhe7d3LjmRXueBx2zBCajAeMaRxNa8B5iZGCF4CsGHAqF0XIyEuj8BF4gEYdGP7nAlqQAhxFerTOnSPMKYsMWLoqiyXq8pVdnR+UbnSK1auHRk7KyJW5le/T/opMiPW3rEjsuJfEXl94uattxYAGQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIag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");

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