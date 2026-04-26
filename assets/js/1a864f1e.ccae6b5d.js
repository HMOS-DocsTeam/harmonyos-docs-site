"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["967088"], {
55110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_canvas_ui_js_components_canvas_md_1a8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-canvas-ui-js-components-canvas-ui-js-components-canvas-md-1a8.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_canvas_ui_js_components_canvas_ui_js_components_canvas_md_1a8_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/ui-js-components-canvas","title":"Canvas对象","description":"Canvas组件提供画布，用于自定义绘制图形。具体用法请参考CanvasRenderingContext2D对象。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/ui-js-components-canvas.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Canvas对象","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-canvas","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"search开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/"},"next":{"title":"CanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/ui-js-components-canvas.md


const frontMatter = {
	title: 'Canvas对象',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-canvas',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Canvas对象';

const assets = {

};



const toc = [{
  "value": "创建Canvas组件",
  "id": "创建canvas组件",
  "level": 2
}, {
  "value": "添加样式",
  "id": "添加样式",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
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
        id: "canvas对象",
        children: "Canvas对象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canvas组件提供画布，用于自定义绘制图形。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-components-canvas-canvasrenderingcontext2d/js-components-canvas-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D对象"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建canvas组件",
      children: "创建Canvas组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个Canvas组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n}\n\ncanvas {\n    background-color: #00ff73;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979582)/* ["default"] */.A) + "",
        width: "350",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763520)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canvas组件默认背景色与父组件的背景色一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canvas默认宽高为width: 300px，height: 150px。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加样式",
      children: "添加样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas组件设置宽（width）、高（height）、背景色（background-color）及边框样式（border）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <canvas></canvas>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n    width: 100%;\n    height: 100%;\n}\n\ncanvas {\n    width: 500px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533323)/* ["default"] */.A) + "",
        width: "401",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas添加长按事件，长按后可获取Canvas组件的dataUrl值（toDataURL方法返回的图片信息），打印在下方文本区域内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(419121)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["promptAction相关接口参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction",
        children: "弹窗"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <canvas ref=\"canvas1\" onlongpress=\"getUrl\"></canvas>\n    <text>dataURL</text>\n    <text class=\"content\">{{ dataURL }}</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #F1F3F5;\n}\n\ncanvas {\n    width: 500px;\n    height: 500px;\n    background-color: #fdfdfd;\n    border: 5px solid red;\n    margin-bottom: 50px;\n}\n\n.content {\n    border: 5px solid blue;\n    padding: 10px;\n    width: 90%;\n    height: 400px;\n    overflow: scroll;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\n\nexport default {\n    data: {\n        dataURL: null,\n    },\n    onShow() {\n        let el = this.$refs.canvas1;\n        let ctx = el.getContext(\"2d\");\n        ctx.strokeRect(100, 100, 300, 300);\n    },\n    getUrl() {\n        let el = this.$refs.canvas1\n        let dataUrl = el.toDataURL()\n        this.dataURL = dataUrl;\n        promptAction.showToast({ duration: 2000, message: \"long press,get dataURL\" })\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(736595)/* ["default"] */.A) + "",
        width: "313",
        height: "584"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(868100)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画布不支持在onInit和onReady中进行创建。"
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
736595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438177-1071f2eacf78fae927961ac648c12b49.gif");

},
533323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAALFCAYAAAAC1t4rAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABYMSURBVHhe7d3db2TnXcBx70uaN3oHSVCbtIK8NPRfalQqLrgAJQgaKkEVpIYLSPpCC2oiClKiBgRF7RVclK0QCImmqOKmJaJKyctuNvuSza49tnfp2uuHc8Y+uzODY2l/5ycx9u9z8dEcz5kZW2PpfP2c5/GZlbX1jQYAESICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCEiQgAYSICQJiIABAmIgCELWVE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");

},
419121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
763520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
979582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
868100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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