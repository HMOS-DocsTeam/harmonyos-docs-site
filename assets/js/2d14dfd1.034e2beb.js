"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["814326"], {
300869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_components_grid_ui_js_components_grid_md_2d1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-components-grid-ui-js-components-grid-md-2d1.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_components_grid_ui_js_components_grid_md_2d1_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-components-grid/ui-js-components-grid","title":"栅格布局","description":"栅格布局容器根节点，使用grid-row与grid-col进行栅格布局。API具体描述请参考grid-container。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-components-grid/ui-js-components-grid.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-components-grid","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-components-grid/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-components-grid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"栅格布局","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-grid","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"OffscreenCanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas/"},"next":{"title":"基础知识","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-components-grid/ui-js-components-grid.md


const frontMatter = {
	title: '栅格布局',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-grid',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '栅格布局';

const assets = {

};



const toc = [{
  "value": "创建grid-container组件",
  "id": "创建grid-container组件",
  "level": 2
}, {
  "value": "调用方法",
  "id": "调用方法",
  "level": 2
}, {
  "value": "添加grid-col",
  "id": "添加grid-col",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "栅格布局",
        children: "栅格布局"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["栅格布局容器根节点，使用grid-row与grid-col进行栅格布局。API具体描述请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-container/js-components-grid-container",
        children: "grid-container"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建grid-container组件",
      children: "创建grid-container组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在pages/index目录下的hml文件中创建一个grid-container组件，并添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-row/js-components-grid-row",
        children: "grid-row"
      }), "子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <grid-container id=\"mygrid\" gutter=\"20px\" style=\"background-color: pink;\">\n    <grid-row style=\"height:100px;justify-content:space-around;width: 80%;background-color: #f67002;margin-left:\n      10%;\"></grid-row>\n    <grid-row style=\"height:300px;justify-content:space-around;background-color: #ffcf00;width: 100%;\"></grid-row>\n    <grid-row style=\"height:150px;justify-content:space-around;background-color: #032cf8;width: 100%;\"></grid-row>\n  </grid-container>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  background-color: #F1F3F5;\n  margin-top: 500px;\n  justify-content: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541696)/* ["default"] */.A) + "",
        width: "445",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892694)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "grid-container仅支持grid-row为子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用方法",
      children: "调用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，通过点击grid-container组件调用getColumns、getColumnWidth、getGutterWidth方法以返回栅格容器列数、column宽度及gutter宽度，通过长按调用getSizeType方法以返回当前容器响应尺寸类型（xs|sm|md|lg）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <grid-container id=\"mygrid\" gutter=\"20px\" style=\"background-color: pink;padding-top: 100px;\"\n    onclick=\"getColumns\" onlongpress=\"getSizeType\">\n    <grid-row style=\"height:100px;justify-content:space-around;background-color: #4cedf3;width: 20%;margin-left:\n      40%;\"></grid-row>\n    <grid-row style=\"height:150px;justify-content:space-around;background-color: #4cbff3;width: 50%;margin-left:\n      25%;\"></grid-row>\n    <grid-row style=\"height:200px;justify-content:space-around;background-color: #465ff6;width: 80%;margin-left:\n      10%;\"></grid-row>\n    <grid-row style=\"height:200px;justify-content:space-around;background-color: #5011ec;width: 100%;\"></grid-row>\n  </grid-container>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  background-color: #F1F3F5;\n  margin-top: 400px;\n  justify-content: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data:{\n    gutterWidth:'',\n    columnWidth:'',\n    columns:'',\n  },\n  getColumns(){\n    this.$element('mygrid').getColumnWidth((result)=>{\n      this.columnWidth = result;\n    })\n    this.$element('mygrid').getGutterWidth((result)=>{\n      this.gutterWidth = result;\n    })\n    this.$element('mygrid').getColumns((result)=>{\n      this.columns= result;\n    })\n    setTimeout(()=>{\n      promptAction.showToast({duration:5000,message:'columnWidth:'+this.columnWidth+',gutterWidth:'+\n      this.gutterWidth+',getColumns:'+this.columns})\n    })\n  },\n  getSizeType(){\n      this.$element('mygrid').getSizeType((result)=>{\n      promptAction.showToast({duration:2000,message:'get size type:'+result})\n    })\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675846)/* ["default"] */.A) + "",
        width: "288",
        height: "592"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加grid-col",
      children: "添加grid-col"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建grid-container组件并添加grid-row，在grid-row组件内添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-col/js-components-grid-col",
        children: "grid-col"
      }), "组件形成布局。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <grid-container id=\"mygrid\" columns=\"4\" gutter=\"0\" style=\"background-color: pink;\" onclick=\"getColumns\" onlongpress=\"getSizeType\">\n    <grid-row style=\"height: 100px;justify-content: space-around;background-color: #4cbff3;width: 100%;\">\n      <grid-col span=\"0\">\n        <div style=\"align-items: center;justify-content: center;height: 100%;width: 100%;\">\n          <text style=\"color: dodgerblue;\" onclick=\"getCol\">top</text>\n        </div>\n      </grid-col>\n    </grid-row>\n    <grid-row style=\"height:500px;justify-content:space-around;background-color: #3b55ef;width: 100%;\">\n      <grid-col span=\"0\" style=\"width: 20%;\">\n        <div style=\"align-items: center;justify-content: center;height: 100%;width: 100%;\">\n          <text style=\"color: dodgerblue;\">left</text>\n        </div>\n      </grid-col>\n      <grid-col span=\"0\" style=\"background-color:orange;width: 80%;\">\n        <div style=\"width: 100%;height: 100%;align-items: center;justify-content: center;\">\n          <text>right</text>\n        </div>\n      </grid-col>\n    </grid-row>\n    <grid-row style=\"height: 100px;justify-content: space-around;background-color: #4cbff3;width: 100%;\">\n      <grid-col style=\"background-color:#c075ef;\" span=\"0\">\n        <div style=\"width: 100%;height: 100%;padding: 20px;align-items: center;justify-content: center;\">\n          <text>bottom</text>\n        </div>\n      </grid-col>\n    </grid-row>\n  </grid-container>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  background-color: #F1F3F5;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\ntext{\n  color: white;\n  font-size: 40px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167616)/* ["default"] */.A) + "",
        width: "449",
        height: "703"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(128393)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "grid-row仅支持grid-col为子组件，只能在grid-col组件中添加填充的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本场景中循环输出list中的内容，创建出网格布局。进行下拉操作时触发refresh（刷新页面）方法，这时会向list数组中添加一条数据并设置setTimeout（延迟触发），达到刷新请求数据的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <refresh refreshing=\"{{fresh}}\" onrefresh=\"refresh\">\n    <grid-container id=\"mygrid\" gutter=\"20\" style=\"margin: 10px;\">\n      <grid-row style=\"height:200px;width: 100%;background-color: #e7e7e2;margin-top: 50px; padding: 0px 20px;border-radius: 15px;\" for=\"item in list\">\n        <grid-col span=\"0\" style=\"width: 40%;\">\n          <div style=\"align-items: center;justify-content: center\">\n            <image src=\"{{item.src}}\" style=\"object-fit: contain;border-radius: 30px;\"></image>\n          </div>\n        </grid-col>\n        <grid-col span=\"0\" style=\"width: 60%;\">\n          <div style=\"align-items: center;justify-content: center;width: 100%;height: 100%;text-align: center;\">\n            <text>image{{item.id}}</text>\n          </div>\n        </grid-col>\n      </grid-row>\n    </grid-container>\n  </refresh>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  background-color: #F1F3F5;\n  width: 100%;\n  height: 100%;\n}\ntext{\n  color: #0a0aef;\n  font-size: 60px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data:{\n    list:[\n      {src:'common/images/1.png',id:'1'},\n      {src:'common/images/2.png',id:'2'},\n      {src:'common/images/3.png',id:'3'}\n    ],\n    fresh:false\n  },\n  refresh(e) {\n    promptAction.showToast({\n      message: 'refreshing'\n    })\n    var that = this;\n    that.fresh = e.refreshing;\n    setTimeout(function () {\n      that.fresh = false;\n      that.list.unshift({src: 'common/images/4.png',id:'4'});\n      promptAction.showToast({\n        message: 'succeed'\n      })\n    }, 2000)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(281522)/* ["default"] */.A) + "",
        width: "316",
        height: "641"
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
541696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
128393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
675846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438183-679fc9b3b03632908f897c7b54bf1d08.gif");

},
167616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958138-acbd39bc0c1615ac5225d28adf12e576.png");

},
892694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
281522(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478139-4d109bb6709bb8bb49d57a8fd062a2e1.gif");

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