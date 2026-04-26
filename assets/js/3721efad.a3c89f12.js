"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["785389"], {
711276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_list_ui_js_components_list_md_372_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-container-components-ui-js-components-list-ui-js-components-list-md-372.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_list_ui_js_components_list_md_372_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/ui-js-components-list","title":"list开发指导","description":"list是用来显示列表的组件，包含一系列相同宽度的列表项，适合连续、多行地呈现同类数据。具体用法请参考list API。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/ui-js-components-list.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"list开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-list","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"页面路由","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/"},"next":{"title":"dialog开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/ui-js-components-list.md


const frontMatter = {
	title: 'list开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-list',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'list开发指导';

const assets = {

};



const toc = [{
  "value": "创建list组件",
  "id": "创建list组件",
  "level": 2
}, {
  "value": "添加滚动条",
  "id": "添加滚动条",
  "level": 2
}, {
  "value": "添加侧边索引栏",
  "id": "添加侧边索引栏",
  "level": 2
}, {
  "value": "实现列表折叠和展开",
  "id": "实现列表折叠和展开",
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
        id: "list开发指导",
        children: "list开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["list是用来显示列表的组件，包含一系列相同宽度的列表项，适合连续、多行地呈现同类数据。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-list/js-components-container-list",
        children: "list API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建list组件",
      children: "创建list组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个list组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\"> \n <list>    \n   <list-item class=\"listItem\"></list-item>\n   <list-item class=\"listItem\"></list-item>\n   <list-item class=\"listItem\"></list-item>\n   <list-item class=\"listItem\"></list-item>\n </list>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.listItem{\n  height: 20%;\n  background-color:#d2e0e0;\n  margin-top: 20px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(747559)/* ["default"] */.A) + "",
        width: "454",
        height: "831"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(945557)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "<list-item-group>是<list>的子组件，实现列表分组功能，不能再嵌套<list>，可以嵌套<list-item>。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "<list-item>是<list>的子组件，展示列表的具体项。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加滚动条",
      children: "添加滚动条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置scrollbar属性为on即可在屏幕右侧生成滚动条，实现长列表或者屏幕滚动等效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <list class=\"listCss\" scrollbar=\"on\" >\n    <list-item class=\"listItem\"></list-item>\n    <list-item class=\"listItem\"></list-item>\n    <list-item class=\"listItem\"></list-item>\n    <list-item class=\"listItem\"></list-item>\n    <list-item class=\"listItem\"></list-item>\n    <list-item class=\"listItem\"></list-item>\n </list>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\n.listItem{\n  height: 20%;\n  background-color:#d2e0e0;\n  margin-top: 20px;\n}\n.listCss{\n  height: 100%;\n  scrollbar-color: #8e8b8b;\n  scrollbar-width: 50px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(994288)/* ["default"] */.A) + "",
        width: "310",
        height: "564"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加侧边索引栏",
      children: "添加侧边索引栏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置indexer属性为自定义索引时，索引栏会显示在列表右边界处，indexer属性设置为true，默认为字母索引表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">   \n  <list class=\"listCss\"  indexer=\"{{['#','1','2','3','4','5','6','7','8']}}\" >  \n    <list-item class=\"listItem\"  section=\"#\" ></list-item>   \n  </list>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  background-color: #F1F3F5;\n }\n.listCss{\n  height: 100%;\n  flex-direction: column;\n  columns: 1\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767887)/* ["default"] */.A) + "",
        width: "456",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(104380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "indexer属性生效需要flex-direction属性配合设置为column，且columns属性设置为1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "indexer可以自定义索引表，自定义时\"#\"必须要存在。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现列表折叠和展开",
      children: "实现列表折叠和展开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为list组件添加groupcollapse和groupexpand事件实现列表的折叠和展开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\">\n  <list style=\"width: 100%;\" id=\"mylist\">\n    <list-item-group for=\"listgroup in list\" id=\"{{listgroup.value}}\" ongroupcollapse=\"collapse\" ongroupexpand=\"expand\">\n      <list-item type=\"item\" style=\"background-color:#FFF0F5;height:95px;\">\n        <div class=\"item-group-child\">\n          <text>One---{{listgroup.value}}</text>\n        </div>\n      </list-item>\n      <list-item type=\"item\" style=\"background-color: #87CEFA;height:145px;\" primary=\"true\">\n        <div class=\"item-group-child\">\n          <text>Primary---{{listgroup.value}}</text>\n        </div>\n      </list-item>\n    </list-item-group>\n  </list>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\n.list-item {\n  margin-top:30px;\n}\n.top-list-item {\n  width:100%;\n  background-color:#D4F2E7;\n}\n.item-group-child {\n  justify-content: center;\n  align-items: center;\n  width:100%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    direction: 'column',\n    list: []\n  },\n  onInit() {\n    this.list = []\n    this.listAdd = []\n    for (var i = 1; i <= 2; i++) {\n      var dataItem = {\n        value: 'GROUP' + i,\n      };\n        this.list.push(dataItem);\n    }\n  },\n  collapse(e) {\n    promptAction.showToast({\n      message: 'Close ' + e.groupid\n    })\n  },\n  expand(e) {\n    promptAction.showToast({\n    message: 'Open ' + e.groupid\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240479)/* ["default"] */.A) + "",
        width: "319",
        height: "529"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(509380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "groupcollapse和groupexpand事件仅支持list-item-group组件使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，开发者可以根据字母索引表查找对应联系人。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\"> \n  <text style=\"font-size: 35px; font-weight: 500; text-align: center; margin-top: 20px; margin-bottom: 20px;\"> \n      <span>Contacts</span> \n  </text> \n  <list class=\"list\" indexer=\"true\"> \n    <list-item class=\"item\" for=\"{{namelist}}\" type=\"{{$item.section}}\" section=\"{{$item.section}}\"> \n      <div class=\"container\"> \n        <div class=\"in-container\"> \n          <text class=\"name\">{{$item.name}}</text> \n          <text class=\"number\">18888888888</text> \n        </div> \n      </div> \n    </list-item> \n    <list-item type=\"end\" class=\"item\"> \n      <div style=\"align-items:center;justify-content:center;width:750px;\"> \n        <text style=\"text-align: center;\">Total: 10</text> \n      </div> \n    </list-item> \n  </list> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\n.list {\n  width: 100%;\n  height: 90%;\n  flex-grow: 1;\n}\n.item {\n  height: 120px;\n  padding-left: 10%;\n  border-top: 1px solid #dcdcdc;\n}\n.name {\n  color: #000000;\n  font-size: 39px;\n}\n.number {\n  color: black;\n  font-size: 25px;\n}\n.container {\n  flex-direction: row;\n  align-items: center;\n}\n.in-container {\n  flex-direction: column;\n  justify-content: space-around;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n   data: {\n     namelist:[{\n       name: 'Zoey',\n       section:'Z'\n     },{\n       name: 'Quin',\n       section:'Q'\n     },{\n       name:'Sam',\n       section:'S'\n     },{\n       name:'Leo',\n       section:'L'\n     },{\n       name:'Zach',\n       section:'Z'\n     },{\n       name:'Wade',\n       section:'W'\n     },{\n       name:'Zoe',\n       section:'Z'\n     },{\n        name:'Warren',\n        section:'W'\n     },{\n        name:'Kyle',\n        section:'K'\n     },{\n       name:'Zaneta',\n       section:'Z'\n     }]\n   },\n   onInit() {\n   }\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(419689)/* ["default"] */.A) + "",
        width: "306",
        height: "576"
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
509380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
419689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798438-cb8e8ad8bf810be714effd9cfdd007c6.gif");

},
994288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438131-58148a627243570592613cbae769e624.gif");

},
767887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAANMCAYAAADYHz0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB32SURBVHhe7d1ZjF13gedxs4gnJDQg0T3qaaSWRiMQL/MyD/0wEs8jgUajhiA0JN6zOCsmrB3WNDSBELYOCUuAHgjQTDfZg0NnIAmhk5A4eM9iu1x2HMeJXXvZSUjyn/M/t65zXf5V2eWk4/j485c+XfeerRxL5tv/e8+yaP/+/WUu+/btW9Dy+bycx5qLP++xLz8e/rzHvnw+IyMjhwzu3182uO3LY+F/xn8v9b83/Z3N//f46vnz032D/w4XTU1Nlenp6VZ9PSgt6y+fa/v59plr+UKONddxqrnWzXes+faZa/lCjjXXcarjOVZa3l831/KFHGuu41THc6y0vL9uruULOdZcx6nmWjffsebbZ67lCzlWf9nk5ORh6w8cOHBon/q6v03V34+5Df799c339+bvlKT/b67/73PR008/XU6kgwcPxuWvVqfyn/eV+G8/Ff5+6z7PPPNMa8uWLeXyyy8/dJwrrriirF279rDtn3322cPe01P//uZb3v87Tuvn2hcGLfrTn/7U/gOsP4F/f/V/nOu/ueeee64sWbKkvP3tb2+XT0xMlNe85jVl69at7fpBs48BvPxm/5tb9PzzzxfglfHCCy8c+lm9853vLKtWrWpf33///WXRokVH7HM0NbSz3/fNXj74c/byudb1HevywfezLWSf+ZbPdYzBn2m72duk5bOXpe3m2nb2stnL5zrWQpYPvp9trn3SfnMda3D72dv01821fHDZfMsH181eP9c+adns5XMd63iXLyqGYbxio4awjve85z3lda97XRvE6rWvfW37s79sdHS03W6+0Y9s/5j98VKWz7ducCx0eR1zrTve5YNjcNtkcBxt+eCYb9nxLJ9v3eBY6PI65lr3UpbPt25wLHR5HXOteynL51s3OI5luUAaxgkamzdvLtddd10bw3vvvbfcd9995S1veUu58MILy1133dV+DGsYxokdAmkYJ2hce+215Q1veEP7XUcdNZY7d+5sXxuGceKHQBrGCRpve9vbyurVq9vX/RN06tmshmG8OoZAGsYrPOr3jzWGdcbY/97x9a9//aH3119//cyWhmGcyCGQ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BAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkAAQCCQABAIJAIFAAkAgkABwhKny/wHUfAZ+0fdhxwAAAABJRU5ErkJggg==");

},
104380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
240479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478087-9592f08c53b0f020fb5ead653795d5c0.gif");

},
945557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
747559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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