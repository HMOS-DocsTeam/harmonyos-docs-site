"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534265"], {
878026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_swiper_ui_js_components_swiper_md_990_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-container-components-ui-js-components-swiper-ui-js-components-swiper-md-990.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_swiper_ui_js_components_swiper_md_990_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/ui-js-components-swiper","title":"swiper开发指导","description":"swiper为滑动容器，提供切换显示子组件的能力。具体用法请参考swiper。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/ui-js-components-swiper.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"swiper开发指导","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-swiper","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"tabs开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/"},"next":{"title":"text开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/ui-js-components-swiper.md


const frontMatter = {
	title: 'swiper开发指导',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-swiper',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'swiper开发指导';

const assets = {

};



const toc = [{
  "value": "创建swiper组件",
  "id": "创建swiper组件",
  "level": 2
}, {
  "value": "添加属性",
  "id": "添加属性",
  "level": 2
}, {
  "value": "设置样式",
  "id": "设置样式",
  "level": 2
}, {
  "value": "绑定事件",
  "id": "绑定事件",
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
        id: "swiper开发指导",
        children: "swiper开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["swiper为滑动容器，提供切换显示子组件的能力。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-swiper/js-components-container-swiper",
        children: "swiper"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建swiper组件",
      children: "创建swiper组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个swiper组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <swiper>\n    <div class=\"item\" style=\"background-color: #bf45ea;\">\n      <text>item1</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #088684;\">\n      <text>item2</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #7786ee;\">\n      <text>item3</text>\n    </div>\n  </swiper>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nswiper{\n  height: 30%;\n}\n.item{\n  width: 100%;\n  height: 500px;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 50px;\n  color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745594)/* ["default"] */.A) + "",
        width: "311",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771489)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "swiper组件支持除<list>之外的子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加属性",
      children: "添加属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在swiper组件不开启循环播放（loop=\"false\"）时添加自动播放属性（autoplay），设置自动播放时播放时间间隔（interval），页面会自动切换并停留在最后一个子组件页面。添加digital属性启用数字导航点，设置切换时为渐隐滑动效果（scrolleffect=\"fade\"）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <swiper index=\"1\"  autoplay=\"true\" interval=\"2000\" indicator=\"true\" digital=\"true\" duration=\"500\"\n  scrolleffect=\"fade\" loop=\"false\">\n    <div class=\"item\" style=\"background-color: #bf45ea;\">\n      <text>item1</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #088684;\">\n      <text>item2</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #7786ee;\">\n      <text>item3</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #c88cee;\">\n      <text>item4</text>\n    </div>\n  </swiper>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n}\nswiper{\n  height: 30%;\n}\n.item{\n  width: 100%;\n  height: 500px;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 50px;\n  color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213615)/* ["default"] */.A) + "",
        width: "296",
        height: "462"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(716916)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置indicator（是否启用导航点指示器）属性为true时digital（是否启用数字导航点）属性才会生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "swiper子组件的个数大于等于2时设置的loop属性才会生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scrolleffect属性仅在loop属性值为false时生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置样式",
      children: "设置样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置swiper组件的宽高，导航点指示器的直径大小（indicator-size）、颜色（indicator-color）、相对位置（indicator-top）及选中时的颜色（indicator-selected-color）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n    <swiper index=\"1\" autoplay=\"true\" interval=\"2000\"  duration=\"500\" >\n        <div class=\"item\" style=\"background-color: bisque;\">\n            <text>item1</text>\n        </div>\n        <div class=\"item\" style=\"background-color: darkkhaki;\">\n            <text>item2</text>\n        </div>\n        <div class=\"item\" style=\"background-color: cadetblue;\">\n            <text>item3</text>\n        </div>\n    </swiper>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n}\nswiper{\n  width:  500px;\n  height: 500px;\n  border-radius: 250px;\n  indicator-color: white;\n  indicator-selected-color: blue;\n  indicator-size: 40px;\n  indicator-top: 100px;\n  overflow: hidden ;\n}\n.item{\n  width: 100%;\n  height: 500px;\n}\ntext{\n  width: 100%;\n  text-align: center;\n  margin-top: 150px;\n  font-size: 50px;\n  color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(116121)/* ["default"] */.A) + "",
        width: "288",
        height: "592"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定事件",
      children: "绑定事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建两个text组件添加点击事件，当点击后就调用showPrevious（显示上一个子组件）或showNext（显示下一个子组件）方法。添加select组件下拉选择时触发change事件后调用swipeTo方法跳转到指定轮播页面。swiper组件绑定change（当前显示的组件索引变化时触发）和finish（切换动画结束时触发）事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <swiper interval=\"2000\" onchange=\"change\" loop=\"false\" onanimationfinish=\"finish\" id=\"swiper\">\n    <div class=\"item\" style=\"background-color: #bf45ea\">\n      <text>item1</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #088684;\">\n      <text>item2</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #7786ee;\">\n      <text>item3</text>\n    </div>\n    <div class=\"item\" style=\"background-color: #c88cee;\">\n      <text>item4</text>\n    </div>\n  </swiper>\n  <div class=\"content\">\n      <button class=\"pnbtn\" onclick=\"previous\">Previous</button>\n      <select onchange=\"selectChange\">\n          <option value=\"0\">swipeTo 1</option>\n          <option value=\"1\">swipeTo 2</option>\n          <option value=\"2\">swipeTo 3</option>\n          <option value=\"3\">swipeTo 4</option>\n      </select>\n    <button class=\"pnbtn\" onclick=\"next\">Next</button>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n}\nswiper{\n  height: 30%;\n}\n.item{\n  width: 100%;\n  height: 500px;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 50px;\n  color: white;\n}\nselect{\n  background-color: white;\n  width: 250px;\n  height: 80px;\n}\n.content{\n  margin-top: 100px;\n  justify-content: space-around;\n}\n.pnbtn{\n  width: 200px;\n  height: 80px;\n  font-size: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default{\n  change(e){\n    promptAction.showToast({duration:2000,message:\"current index:\"+e.index});\n  },\n  finish(){\n    promptAction.showToast({duration:2000,message:\"切换动作结束\"});\n  },\n  selectChange(e){\n    this.$element('swiper').swipeTo({index: Number(e.newValue)});\n  },\n  previous(){\n    this.$element('swiper').showPrevious();\n  },\n  next(){\n    this.$element('swiper').showNext();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(516794)/* ["default"] */.A) + "",
        width: "313",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本场景中使用swiper创建一个轮播图，在轮播图底部制作一个缩略图，点击缩略图后调用swipeTo方法切换到对应的轮播图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <swiper duration=\"500\" indicator=\"false\" id=\"swiper\" onchange=\"change\">\n    <div class=\"item\" for=\"item in list\">\n      <image src=\"{{item.src}}\"></image>\n    </div>\n  </swiper>\n  <div class=\"content\">\n    <div class=\"content_item {{index == $idx?'activated':''}}\" for=\"item in list\" onclick=\"imageTo({{$idx}})\">\n      <image src=\"{{item.src}}\"></image>\n    </div>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nswiper{\n  width: 100%;\n  height: 500px;\n}\n.item{\n  width: 100%;\n  height: 500px;\n}\n.content{\n  margin-top: -120px;\n  width: 70%;\n  display: flex;\n  justify-content: space-around;\n  height: 100px;\n}\n.content_item{\n  padding: 5px;\n  transform: scale(0.5);\n}\n.activated{\n  transform: scale(1);\n  border: 1px solid #b20937ea;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data:{\n    index: 0,\n    list:[\n      {src: 'common/images/1.png'},\n      {src: 'common/images/2.png'},\n      {src: 'common/images/3.png'},\n      {src: 'common/images/4.png'},]\n    },\n  imageTo(index){\n    this.index = index;\n    this.$element('swiper').swipeTo({index: index});\n  },\n  change(e){\n    this.index = e.index;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(369658)/* ["default"] */.A) + "",
        width: "280",
        height: "317"
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
716916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
745594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438141-2e88c62135e94fdf518aef501789cac3.gif");

},
369658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438143-859daecb7e6c747bca9e5410486eb86a.gif");

},
213615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958096-931554e3d19f2b9573fbeb09e6fc924b.gif");

},
771489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
116121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478097-6710a506802aecf522f130a19e55580d.gif");

},
516794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798448-dd27e0f7310989c05ee9283f7880fa68.gif");

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