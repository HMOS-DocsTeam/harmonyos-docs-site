"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["992900"], {
185309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_chart_ui_js_components_chart_md_f84_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-chart-ui-js-components-chart-md-f84.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_chart_ui_js_components_chart_md_f84_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart/ui-js-components-chart","title":"chart开发指导","description":"chart为图表组件，用于呈现线形图、柱状图和量规图界面。具体用法请参考chart。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart/ui-js-components-chart.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"chart开发指导","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-chart","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"slider开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-slider/"},"next":{"title":"switch开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart/ui-js-components-chart.md


const frontMatter = {
	title: 'chart开发指导',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-chart',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'chart开发指导';

const assets = {

};



const toc = [{
  "value": "创建chart组件",
  "id": "创建chart组件",
  "level": 2
}, {
  "value": "设置图表类型",
  "id": "设置图表类型",
  "level": 2
}, {
  "value": "设置图表属性",
  "id": "设置图表属性",
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
        id: "chart开发指导",
        children: "chart开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["chart为图表组件，用于呈现线形图、柱状图和量规图界面。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-chart/js-components-basic-chart",
        children: "chart"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建chart组件",
      children: "创建chart组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个chart组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <chart class=\"chart-data\" type=\"line\" options=\"{{lineOps}}\" datasets=\"{{lineData}}\"></chart>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.chart-data {\n  width: 700px;\n  height: 600px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    lineData: [\n      {\n        data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716]\n      }\n    ],\n    lineOps: {\n      xAxis: {\n        min: 0,\n        max: 20,\n        display: false,\n      },\n      yAxis: {\n        min: 0,\n        max: 1000,\n        display: false,\n      },\n      series: {\n        lineStyle: {\n          width: 15,\n        },\n      }\n    },\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711071)/* ["default"] */.A) + "",
        width: "437",
        height: "684"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置图表类型",
      children: "设置图表类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chart组件通过设置type属性定义图表类型，如将图表设置为柱状图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"container\">\n    <div class=\"switch-block\">\n      <text class=\"title\">\n        {{ title }}\n      </text>\n    </div>\n    <tabs class=\"tabs\" index=\"0\" vertical=\"false\" onchange=\"changes\">\n      <tab-content class=\"tabcontent\" scrollable=\"true\">\n        <tabs >\n          <tab-bar class=\"tab-bar\" mode=\"fixed\"style=\"margin-bottom: 50px;\">\n            <text class=\"tab-text\">线形图</text>\n            <text class=\"tab-text\">柱状图</text>\n            <text class=\"tab-text\">量规图</text>\n          </tab-bar>\n          <tab-content>\n            <div class=\"bar-block\" style=\"margin-left: 30px;\">\n              <chart class=\"chart-data\" type=\"line\" ref=\"linechart\" options=\"{{ lineOps }}\" datasets=\"{{ lineData }}\">\n              </chart>\n            </div>\n            <div class=\"bar-block\">\n              <chart class=\"data-bar\" type=\"bar\" id=\"bar-chart\" options=\"{{ barOps }}\" datasets=\"{{ barData }}\">\n              </chart>\n            </div>\n            <div class=\"chart-block\">\n              <chart type=\"gauge\" ></chart>\n            </div>\n          </tab-content>\n        </tabs>\n      </tab-content>\n    </tabs>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n.tab-bar{\n  background-color: #F1F3F5;\n}\n.chart-data {\n  width: 700px;\n  height: 600px;\n}\n.title{\n  margin-left: 50px;\n  margin-top: 50px;\n  font-size: 50px;\n}\n.line-block{\n  align-items: center;\n  justify-content: center;\n}\n.bar-block{\n  align-items: center;\n  justify-content: center;\n}\n.chart-block{\n  width: 90%;\n  margin-left: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    title: \"类型展示\",\n    barData: [\n      {\n        fillColor: '#3848e8',\n        data: [763, 550, 551, 554, 731, 654, 525, 696, 595],\n      }\n    ],\n    lineData: [\n      {\n        strokeColor: '#0081ff',\n        fillColor: '#cce5ff',\n        data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716],\n        gradient: true,\n      }\n    ],\n    lineOps: {\n      xAxis: {\n        min: 0,\n        max: 20,\n        display: false,\n      },\n      yAxis: {\n        min: 0,\n        max: 1000,\n        display: false,\n      },\n      series:{\n        lineStyle: {\n          width: \"5px\",\n          smooth: true,\n        },\n        headPoint: {\n          shape:\"circle\",\n          size: 20,\n          strokeWidth: 5,\n          fillColor: '#ffffff',\n          strokeColor: '#007aff',\n          display: true,\n        },\n        loop:{\n          margin: 2,\n          gradient: true\n        }\n      },\n    },\n    barOps: {\n      xAxis: {\n        min: 0,\n        max: 20,\n        display: false,\n        axisTick: 10,\n      },\n      yAxis: {\n        min: 0,\n        max: 1000,\n      },\n    },\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(585673)/* ["default"] */.A) + "",
        width: "299",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211134)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chart不支持显示每个点的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置图表属性",
      children: "设置图表属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chart组件在options属性中设置对x轴、y轴和数据序列参数的设置，在datasets属性里添加对线条颜色、填充颜色、填充渐变颜色和绘制点集的设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <chart class=\"chart-data\" type=\"line\" options=\"{{lineOps}}\" datasets=\"{{lineData}}\"></chart>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.chart-data {\n  width: 700px;\n  height: 600px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    //线形图数据\n    lineData: [\n      {\n        strokeColor: '#0081ff',\n        fillColor: '#cce5ff',  //填充色\n        data: [463, 250, 251, 254, 431, 354, 225, 396, 295, 328, 491, 205, 313, 275, 475, 553, 491, 380, 357, 416],\n        gradient: true,\n      }\n    ],\n    lineOps: {\n     //x轴参数设置\n      xAxis: {\n        min: 0,\n        max: 20,\n        display: false,\n      },\n     //y轴参数设置\n      yAxis: {\n        min: 0,\n        max: 1000,\n        display: false,\n      },\n     //数据序列参数设置\n      series: {\n        //线样式设置\n        lineStyle: {\n          width: \"5px\",\n          smooth: true,\n        },\n        //线最前端位置白点的样式和大小\n        headPoint: {\n          shape: \"circle\",\n          size: 20,\n          strokeWidth: 5,\n          fillColor: '#ffffff',\n          strokeColor: '#007aff',\n          display: true,\n        },\n        //设置屏幕显示满时，是否需要重头开始绘制\n        loop: {\n          margin: 2,\n          gradient: true\n        }\n      }\n    },\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(646790)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "options只支持柱状图和线形图设置参数，量规图不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "datasets只支持柱状图和线形图设置数据集合，量规图不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "series只有线形图支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以根据开关Switch的状态来选择数据展示的状态，当Switch状态为true时，通过定时器来实现数据的动态展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"container\">\n    <div class=\"switch-block\">\n      <text class=\"title\">{{ title }} </text>\n      <switch class=\"switch\" showtext=\"{{ showText }}\" allow-scale=\"{{ allowScale }}\"onchange=\"change\">\n      </switch>\n    </div>\n    <tabs class=\"tabs\" index=\"0\" vertical=\"false\" onchange=\"changes\">\n      <tab-content class=\"tabcontent\" scrollable=\"true\">\n        <div>\n          <tabs class=\"tabs\" index=\"0\" vertical=\"false\" onchange=\"changes\">\n            <tab-content class=\"tabcontent\" scrollable=\"true\">\n              <div class=\"line-class\">\n                <div class=\"bar-block\">\n                  <chart class=\"chart-data\" type=\"line\" ref=\"linechart\" options=\"{{ lineOps }}\"\n                  datasets=\"{{ lineData }}\">\n                  </chart>\n                </div>\n                <div class=\"bar-block\">\n                  <chart class=\"data-bar\" type=\"bar\" id=\"bar-chart\" options=\"{{ barOps }}\"datasets=\"{{ barData }}\">\n                  </chart>\n                </div>\n             </div>\n           </tab-content>\n         </tabs>\n       </div>\n       <div>\n         <div class=\"container\">\n           <list class=\"todo-wrapper\">\n             <list-item for=\"{{ barData }}\" class=\"todo-item\">\n               <text class=\"todo-title\">{{ $item.data }}</text>\n             </list-item>\n           </list>\n           <list class=\"todo-wrapper\">\n             <list-item for=\"{{ lineData.data }}\" class=\"todo-item\">\n               <text class=\"todo-title\">{{ $item.value }}</text>\n             </list-item>\n           </list>\n         </div>\n       </div>\n      </tab-content>\n    </tabs>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  display:flex;\n  flex-direction:column;\n  background-color: #F1F3F5;\n}\n.line-class{\n  display: flex;\n  flex-direction: column;\n}\n.title{\n  font-size: 40px;\n  margin-left: 40px;\n}\n.switch-block {\n  margin-top: 30px;\n  width: 98%;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n}\n.switch{\n  font-size: 40px;\n}\n.bar-block {\n  margin-top: 80px;\n  margin-left: 40px;\n  position: relative;\n  width: 90%;\n  border-radius: 10px;\n  background-color: #25FAB27B;\n  height: 40%;\n  justify-content: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    interval: null,\n    title: \"数据展示\",\n    allowScale: true,\n    dataLength: 30,\n    barGroup: 3,\n    lineData: null,\n    lineOps: {\n      xAxis: {\n        min: 0,\n        max: 5\n      },\n      yAxis: {\n        min: 0,\n        max: 100\n      },\n      series: {\n        lineStyle: {\n        width: '1px',\n      },\n        headPoint: {\n          shape: 'circle',\n          size: 10,\n          strokeWidth: 2,\n          fillColor: '#ffffff',\n          strokeColor: '#8477DF'\n        },\n        loop: {\n          margin: 2\n        }\n      }\n    },\n    barData: [\n      {\n        fillColor: '#97CF0A2C',\n        data: [20, 20,40, 56]\n      },\n      {\n        fillColor: '#6D0A7ACF',\n        data: [52, 40, 2, 67]\n      },\n      {\n        fillColor: '#6A0ACFA1',\n        data: [56, 2, 77, 40]\n      }\n    ],\n    barOps: {\n      xAxis: {\n        min: 0,\n        max: 20,\n        axisTick: 5\n      },\n      yAxis: {\n        min: 0,\n        max: 100\n      }\n    }\n  },\n  onInit() {\n    this.changeLine();\n  },\n  change(e) {\n    if (e.checked) {\n      this.interval = setInterval(() => {\n        this.changeLine();\n        this.changeBar();\n      }, 1000)\n    } else {\n      clearInterval(this.interval);\n    }\n  },\n  changeLine() {\n    var dataArray = [];\n    for (var i = 0; i < this.dataLength; i++) {\n      var nowValue = Math.floor(Math.random() * 99 + 1);\n      var obj = {\n        \"value\": nowValue,\n        \"description\": nowValue + \"\",\n        \"textLocation\": \"top\",\n        \"textColor\": \"#CDCACA\",\n        \"pointStyle\": {\n          \"shape\": \"circle\",\n          \"size\": 5,\n          \"fillColor\": \"#CF0A2C\",\n          \"strokeColor\": \"#CF0A2C\"\n        }\n      };\n      dataArray.push(obj);\n    }\n    this.lineData = [\n      {\n        strokeColor: '#0081ff',\n        fillColor: '#FF07CDC4',\n        data: dataArray,\n        gradient: true,\n      }\n    ]\n  },\n  changeBar() {\n    for (var i = 0;i < this.barGroup; i++) {\n      var dataArray = this.barData[i].data;\n      for (var j = 0;j < 4; j++) {\n        dataArray[j] = Math.floor(Math.random() * 99 + 1);\n      }\n    }\n    this.barData = this.barData.splice(0, this.barGroup + 1);\n  },\n  changes(e) {\n    console.info(\"Tab index: \" + e.index);\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830978)/* ["default"] */.A) + "",
        width: "298",
        height: "593"
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
585673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438163-44a0b768b7aeecac39c7fab409e63775.gif");

},
211134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
830978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958118-d8b3cc4d629d8153e4e441f9ca55dedf.gif");

},
646790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
711071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798468-2637f82859ccabc0477cc4cd5a892a56.png");

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