"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["899500"], {
510426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_button_ui_js_components_button_md_771_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-button-ui-js-components-button-md-771.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_button_ui_js_components_button_md_771_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button/ui-js-components-button","title":"button开发指导","description":"button是按钮组件，其类型包括胶囊按钮、圆形按钮、文本按钮、弧形按钮、下载按钮。具体用法请参考button API。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button/ui-js-components-button.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"button开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-button","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"input开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-input/"},"next":{"title":"picker开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-picker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button/ui-js-components-button.md


const frontMatter = {
	title: 'button开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-button',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'button开发指导';

const assets = {

};



const toc = [{
  "value": "创建button组件",
  "id": "创建button组件",
  "level": 2
}, {
  "value": "设置button类型",
  "id": "设置button类型",
  "level": 2
}, {
  "value": "显示下载进度",
  "id": "显示下载进度",
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
        id: "button开发指导",
        children: "button开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["button是按钮组件，其类型包括胶囊按钮、圆形按钮、文本按钮、弧形按钮、下载按钮。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-button/js-components-basic-button",
        children: "button API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建button组件",
      children: "创建button组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个button组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">       \n  <button  type=\"capsule\" value=\"Capsule button\"></button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(416754)/* ["default"] */.A) + "",
        width: "455",
        height: "826"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置button类型",
      children: "设置button类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置button的type属性来选择按钮类型，如定义button为圆形按钮、文本按钮等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">    \n  <button class=\"circle\" type=\"circle\" >+</button>\n  <button class=\"text\" type=\"text\"> button</button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  background-color: #F1F3F5;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.circle {\n  font-size: 120px;\n  background-color: blue;\n  radius: 72px;\n}\n.text {\n  margin-top: 30px;\n  text-color: white;\n  font-size: 30px;\n  font-style: normal;\n  background-color: blue;\n  width: 50%;\n  height: 100px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(808980)/* ["default"] */.A) + "",
        width: "447",
        height: "817"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608365)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "button组件使用的icon图标如果来自云端路径，需要添加网络访问权限 ohos.permission.INTERNET。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要添加ohos.permission.INTERNET权限，则在resources文件夹下的config.json文件里进行权限配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- config.json -->\n\"module\": {\n  \"reqPermissions\": [{\n    \"name\": \"ohos.permission.INTERNET\"\n  }],\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示下载进度",
      children: "显示下载进度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为button组件添加setProgress方法，来实时显示下载进度条的进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <button class=\"button download\" type=\"download\" id=\"download-btn\" onclick=\"setProgress\">{{downloadText}}</button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  background-color: #F1F3F5;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.download {\n  width: 280px;\n  text-color: white;\n  background-color: #007dff;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    percent: 0,\n    downloadText: \"Download\",\n    isPaused: true,\n    intervalId : null,\n  },\n  start(){\n    this.intervalId = setInterval(()=>{\n      if(this.percent <100){\n        this.percent += 1;\n        this.downloadText = this.percent+ \"%\";\n       } else{\n         promptAction.showToast({\n            message: \"Download succeeded.\"\n         })\n         this.paused()\n         this.downloadText = \"Download\";\n         this.percent = 0;\n         this.isPaused = true;\n       }\n    },100)\n  },\n  paused(){\n    clearInterval(this.intervalId);\n    this.intervalId = null;\n  },\n setProgress(e) {\n    if(this.isPaused){\n      promptAction.showToast({\n        message: \"Started Downloading\"\n      })\n      this.start();\n      this.isPaused = false;\n    }else{\n      promptAction.showToast({\n        message: \"Paused.\"\n      })\n      this.paused();\n      this.isPaused = true;\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(803815)/* ["default"] */.A) + "",
        width: "313",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465987)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setProgress方法只支持button的类型为download。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，开发者可根据输入的文本内容进行button类型切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"input-item\">\n    <input class=\"input-text\" id=\"change\" type=\"{{mytype}}\"  placeholder=\"{{myholder}}\"\n      style=\"background-color:{{mystyle1}};\n      placeholder-color:{{mystyle2}};flex-grow:{{myflex}};\"name=\"{{myname}}\" value=\"{{myvalue}}\"></input>\n  </div>\n  <div class=\"input-item\">\n    <div class=\"doc-row\">\n      <input type=\"button\" class=\"select-button color-3\" value=\"text\" onclick=\"changetype3\"></input>\n      <input type=\"button\" class=\"select-button color-3\" value=\"data\" onclick=\"changetype4\"></input>\n    </div>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.input-item {\n  margin-bottom: 80px;\n  flex-direction: column;\n}\n.doc-row {\n  justify-content: center;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.input-text {\n  height: 80px;\n  line-height: 80px;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-top:100px;\n  border: 3px solid;\n  border-color: #999999;\n  font-size: 30px;\n  background-color: #ffffff;\n  font-weight: 400;\n}\n.select-button {\n  width: 35%;\n  text-align: center;\n  height: 70px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 30px;\n  font-size: 30px;\n  color: #ffffff;\n}\n.color-3 {\n  background-color: #0598db;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    myflex: '',\n    myholder: 'Enter text.',\n    myname: '',\n    mystyle1: \"#ffffff\",\n    mystyle2: \"#ff0000\",\n    mytype: 'text',\n    myvalue: '',\n  },\n  onInit() {\n  },\n  changetype3() {\n    this.myflex = '';\n    this.myholder = 'Enter text.';\n    this.myname = '';\n    this.mystyle1 = \"#ffffff\";\n    this.mystyle2 = \"#FF0000\";\n    this.mytype = 'text';\n    this.myvalue = '';\n  },\n  changetype4() {\n    this.myflex = '';\n    this.myholder = 'Enter a date.';\n    this.myname = '';\n    this.mystyle1 = \"#ffffff\";\n    this.mystyle2 = \"#FF0000\";\n    this.mytype = 'date';\n    this.myvalue = '';\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(921927)/* ["default"] */.A) + "",
        width: "314",
        height: "568"
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
416754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438149-5b5d3bc217b69741031881f0b6bd3701.png");

},
921927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798456-8ebf476d3de1d92ce49ace51922826dd.gif");

},
465987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
808980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958104-16c2d226dbb30fb5f87a9a5cd4a398f3.png");

},
803815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478105-6d83ae51325d8e359890161e1ecc7cc7.gif");

},
608365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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