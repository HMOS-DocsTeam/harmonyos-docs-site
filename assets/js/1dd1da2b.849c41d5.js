"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["455573"], {
703766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_syntax_js_framework_syntax_hml_js_framework_syntax_hml_md_1dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-js-framework-overview-js-framework-syntax-js-framework-syntax-hml-js-framework-syntax-hml-md-1dd.json
var site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_syntax_js_framework_syntax_hml_js_framework_syntax_hml_md_1dd_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml/js-framework-syntax-hml","title":"HML语法参考","description":"HML是一套类HTML的标记语言，通过组件，事件构建出页面的内容。页面具备数据绑定、事件绑定、列表渲染、条件渲染和逻辑控制等高级能力。","source":"@site/docs/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml/js-framework-syntax-hml.md","sourceDirName":"arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml","slug":"/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HML语法参考","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-syntax-hml","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"app.js","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-js-file/"},"next":{"title":"CSS语法参考","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml/js-framework-syntax-hml.md


const frontMatter = {
	title: 'HML语法参考',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-syntax-hml',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'HML语法参考';

const assets = {

};



const toc = [{
  "value": "页面结构",
  "id": "页面结构",
  "level": 2
}, {
  "value": "数据绑定",
  "id": "数据绑定",
  "level": 2
}, {
  "value": "普通事件绑定",
  "id": "普通事件绑定",
  "level": 2
}, {
  "value": "冒泡事件绑定5+",
  "id": "冒泡事件绑定5",
  "level": 2
}, {
  "value": "捕获事件绑定5+",
  "id": "捕获事件绑定5",
  "level": 2
}, {
  "value": "列表渲染",
  "id": "列表渲染",
  "level": 2
}, {
  "value": "条件渲染",
  "id": "条件渲染",
  "level": 2
}, {
  "value": "逻辑控制块",
  "id": "逻辑控制块",
  "level": 2
}, {
  "value": "模板引用",
  "id": "模板引用",
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
        id: "hml语法参考",
        children: "HML语法参考"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HML是一套类HTML的标记语言，通过组件，事件构建出页面的内容。页面具备数据绑定、事件绑定、列表渲染、条件渲染和逻辑控制等高级能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面结构",
      children: "页面结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"item-container\">\n  <text class=\"item-title\">Image Show</text>\n  <div class=\"item-content\">\n    <image src=\"/common/xxx.png\" class=\"image\"></image>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据绑定",
      children: "数据绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\" onclick=\"changeText\">\n  <text> {{content[1]}} </text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*xxx.css*/\n.container{\n    margin: 200px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    content: ['Hello World!', 'Welcome to my world!']\n  },\n  changeText: function() {\n    this.content.splice(1, 1, this.content[0]);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624868)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对数组内的数据修改，请使用splice方法生效数据绑定变更。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hml文件中的js表达式不支持ES6语法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(950675)/* ["default"] */.A) + "",
        width: "372",
        height: "114"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "普通事件绑定",
      children: "普通事件绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件通过'on'或者'@'绑定在组件上，当组件触发事件时会执行JS文件中对应的事件处理函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件支持的写法有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"funcName\"：funcName为事件回调函数名（在JS文件中定义相应的函数实现）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"funcName(a,b)\"：函数参数例如a，b可以是常量，或者是在JS文件中的data中定义的变量（前面不用写this.）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\">{{count}}</text>\n    <div class=\"box\">\n        <input type=\"button\" class=\"btn\" value=\"increase\" onclick=\"increase\" />\n        <input type=\"button\" class=\"btn\" value=\"decrease\" @click=\"decrease\" />\n        <!-- 传递额外参数 -->\n        <input type=\"button\" class=\"btn\" value=\"double\" @click=\"multiply(2)\" />\n        <input type=\"button\" class=\"btn\" value=\"decuple\" @click=\"multiply(10)\" />\n        <input type=\"button\" class=\"btn\" value=\"square\" @click=\"multiply(count)\" />\n    </div>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.js\nexport default {\n  data: {\n    count: 0\n  },\n  increase() {\n    this.count++;\n  },\n  decrease() {\n    this.count--;\n  },\n  multiply(multiplier) {\n    this.count = multiplier * this.count;\n  }\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* xxx.css */\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    left: 0px;\n    top: 0px;\n    width: 454px;\n    height: 454px;\n}\n.title {\n    font-size: 30px;\n    text-align: center;\n    width: 200px;\n    height: 100px;\n}\n.box {\n    width: 454px;\n    height: 200px;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.btn {\n    width: 200px;\n    border-radius: 0;\n    margin-top: 10px;\n    margin-left: 10px;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355503)/* ["default"] */.A) + "",
        width: "396",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "冒泡事件绑定5",
      children: "冒泡事件绑定5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "冒泡事件绑定包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定冒泡事件：on:{event}.bubble。on:{event}等价于on:{event}.bubble。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定并阻止冒泡事件向上冒泡：grab:{event}.bubble。grab:{event}等价于grab:{event}.bubble。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(666727)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "冒泡事件是指多个组件嵌套时，组件之间会有层次关系，当这些组件注册了相同的事件时，这个事件会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，一直向上到其他祖先上的处理程序。如果当一个组件触发了这个事件，它会首先触发该组件的回调函数，然后触发其父元素上的回调函数，然后触发其他祖先上的处理程序。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细冒泡事件说明参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-events/js-components-common-events",
            children: "通用事件"
          }), "章节。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div>\n   <!-- 使用事件冒泡模式绑定事件回调函数。5+ -->;\n    <div on:touchstart.bubble=\"touchstartfunc\" style=\"background-color: red; width: 10%; height: 100%\"></div>\n    <div on:touchstart=\"touchstartfunc\" style=\"background-color: orange; width: 10%; height: 100%\"></div>\n    <!-- 绑定事件回调函数，但阻止事件向上传递。5+ -->\n    <div grab:touchstart.bubble=\"touchstartfunc\" style=\"background-color: yellow; width: 10%; height: 100%\"></div>\n    <div grab:touchstart=\"touchstartfunc\" style=\"background-color: greenyellow; width: 10%; height: 100%\"></div>\n    <!-- 使用事件冒泡模式绑定事件回调函数。6+ -->\n    <div on:click.bubble=\"clickfunc\" style=\"background-color: lightskyblue; width: 10%; height: 100%\"></div>\n    <div on:click=\"clickfunc\" style=\"background-color: cornflowerblue; width: 10%; height: 100%\"></div>\n    <!-- 绑定事件回调函数，但阻止事件向上传递。6+ -->\n    <div grab:click.bubble=\"clickfunc\" style=\"background-color: mediumslateblue; width: 10%; height: 100%\"></div>\n    <div grab:click=\"clickfunc\" style=\"background-color: purple; width: 10%; height: 100%\"></div>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.js\nexport default {\n    clickfunc: function(e) {\n        console.info(e);\n    },\n    touchstartfunc: function(e) {\n        console.info(e);\n    },\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(980845)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采用旧写法(onclick)的事件绑定在最小API版本6以下时采用不冒泡处理，在最小API版本为6及6以上时采用冒泡处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "捕获事件绑定5",
      children: "捕获事件绑定5+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Touch触摸类事件支持捕获，捕获阶段位于冒泡阶段之前，捕获事件先到达父组件然后到达子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "捕获事件绑定包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定捕获事件：on:{event}.capture。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定并阻止事件向下传递：grab:{event}.capture。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div>\n    <!-- 使用事件捕获模式绑定事件回调函数。5+ -->    \n    <div on:touchstart.capture=\"touchstartfunc\"></div>\n    <!-- 绑定事件回调函数，但阻止事件向下传递。5+ -->\n    <div grab:touchstart.capture=\"touchstartfunc\"></div>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.js\nexport default {\n    touchstartfunc: function(e) {\n        console.info(e);\n    },\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "列表渲染",
      children: "列表渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"array-container\" style=\"flex-direction: column;margin: 200px;\">\n  <!-- div列表渲染 -->\n  <!-- 默认$item代表数组中的元素, $idx代表数组中的元素索引 -->\n  <div for=\"{{array}}\" tid=\"id\" onclick=\"changeText\">\n    <text>{{$idx}}.{{$item.name}}</text>\n  </div>\n  <!-- 自定义元素变量名称 -->\n  <div for=\"{{value in array}}\" tid=\"id\" onclick=\"changeText\">    \n    <text>{{$idx}}.{{value.name}}</text>\n  </div>\n  <!-- 自定义元素变量、索引名称 -->\n  <div for=\"{{(index, value) in array}}\" tid=\"id\" onclick=\"changeText\">    \n    <text>{{index}}.{{value.name}}</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    array: [\n      {id: 1, name: 'jack', age: 18},\n      {id: 2, name: 'tony', age: 18},\n    ],\n  },\n  changeText: function() {\n    if (this.array[1].name === \"tony\"){\n      this.array.splice(1, 1, {id:2, name: 'Isabella', age: 18});\n    } else {\n      this.array.splice(2, 1, {id:3, name: 'Bary', age: 18});\n    }\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tid属性主要用来加速for循环的重渲染，旨在列表中的数据有变更时，提高重新渲染的效率。tid属性是用来指定数组中每个元素的唯一标识，如果未指定，数组中每个元素的索引为该元素的唯一id。例如上述tid=\"id\"表示数组中的每个元素的id属性为该元素的唯一标识。for循环支持的写法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "for=\"array\"：其中array为数组对象，array的元素变量默认为$item。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "for=\"v in array\"：其中v为自定义的元素变量，元素索引默认为$idx。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "for=\"(i, v) in array\"：其中元素索引为i，元素变量为v，遍历数组对象array。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(2212)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数组中的每个元素必须存在tid指定的数据属性，否则运行时可能会导致异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数组中被tid指定的属性要保证唯一性，如果不是则会造成性能损耗。比如，示例中只有id和name可以作为tid字段，因为它们属于唯一字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tid不支持表达式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303120)/* ["default"] */.A) + "",
        width: "344",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "条件渲染",
      children: "条件渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "条件渲染分为2种：if/elif/else和show。两种写法的区别在于：第一种写法里if为false时，组件不会在vdom中构建，也不会渲染，而第二种写法里show为false时虽然也不渲染，但会在vdom中构建；另外，当使用if/elif/else写法时，节点必须是兄弟节点，否则编译无法通过。实例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <button class=\"btn\" type=\"capsule\" value=\"toggleShow\" onclick=\"toggleShow\"></button>\n  <button class=\"btn\" type=\"capsule\" value=\"toggleDisplay\" onclick=\"toggleDisplay\"></button>\n  <text if=\"{{visible}}\"> Hello-world1 </text>\n  <text elif=\"{{display}}\"> Hello-world2 </text>\n  <text else> Hello-World </text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  align-items: center;\n}\n.btn{\n  width: 280px;\n  font-size: 26px;\n  margin: 10px 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    visible: false,\n    display: true,\n  },\n  toggleShow: function() {\n    this.visible = !this.visible;\n  },\n  toggleDisplay: function() {\n    this.display = !this.display;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(942075)/* ["default"] */.A) + "",
        width: "344",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化渲染：show方法。当show为true时，节点正常渲染；当为false时，仅仅设置display样式为none。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <button class=\"btn\" type=\"capsule\" value=\"toggle\" onclick=\"toggle\"></button>\n  <text show=\"{{visible}}\" > Hello World </text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  flex-direction: column;\n  align-items: center;\n}\n.btn{\n  width: 280px;\n  font-size: 26px;\n  margin: 10px 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    visible: false,\n  },\n  toggle: function() {\n    this.visible = !this.visible;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(704838)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止在同一个元素上同时设置for和if属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(592488)/* ["default"] */.A) + "",
        width: "344",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "逻辑控制块",
      children: "逻辑控制块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<block>控制块使得循环渲染和条件渲染变得更加灵活；block在构建时不会被当作真实的节点编译。注意block标签只支持for和if属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<list>\n  <block for=\"glasses\">\n    <list-item type=\"glasses\">\n      <text>{{$item.name}}</text>\n    </list-item>\n    <block for=\"$item.kinds\">\n      <list-item type=\"kind\">\n        <text>{{$item.color}}</text>\n      </list-item>\n    </block>\n  </block>\n</list>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    glasses: [\n      {name:'sunglasses', kinds:[{name:'XXX',color:'XXX'},{name:'XXX',color:'XXX'}]},\n      {name:'nearsightedness mirror', kinds:[{name:'XXX',color:'XXX'}]},\n    ],\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397872)/* ["default"] */.A) + "",
        width: "339",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模板引用",
      children: "模板引用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HML可以通过element引用模板文件，详细介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage",
        children: "自定义组件的基本用法"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- template.hml -->\n<div class=\"item\"> \n  <text>Name: {{name}}</text>\n  <text>Age: {{age}}</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<element name='comp' src='../../common/template.hml'></element>\n<div>\n  <comp name=\"Tony\" age=\"18\"></comp>\n</div>\n"
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
980845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
2212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
624868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
355503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958076-5010a8dd84e3a39ada6b8ae5d94923a0.gif");

},
592488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
950675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
397872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
704838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
666727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
942075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
303120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

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