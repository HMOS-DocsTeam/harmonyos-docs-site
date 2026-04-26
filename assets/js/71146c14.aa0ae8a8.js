"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["341735"], {
939185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_syntax_js_framework_syntax_js_js_framework_syntax_js_md_711_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-js-framework-overview-js-framework-syntax-js-framework-syntax-js-js-framework-syntax-js-md-711.json
var site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_syntax_js_framework_syntax_js_js_framework_syntax_js_md_711_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/js-framework-syntax-js","title":"JS语法参考","description":"JS文件用来定义HML页面的业务逻辑，支持ECMA规范的JavaScript语言。基于JavaScript语言的动态化能力，可以使应用更加富有表现力，具备更加灵活的设计能力。下面讲述JS文件的编译和运行的支持情况。","source":"@site/docs/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/js-framework-syntax-js.md","sourceDirName":"arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js","slug":"/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"JS语法参考","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-syntax-js","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CSS语法参考","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/"},"next":{"title":"生命周期","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/js-framework-syntax-js.md


const frontMatter = {
	title: 'JS语法参考',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-syntax-js',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'JS语法参考';

const assets = {

};



const toc = [{
  "value": "语法",
  "id": "语法",
  "level": 2
}, {
  "value": "对象",
  "id": "对象",
  "level": 2
}, {
  "value": "方法",
  "id": "方法",
  "level": 2
}, {
  "value": "获取DOM元素",
  "id": "获取dom元素",
  "level": 2
}, {
  "value": "获取ViewModel",
  "id": "获取viewmodel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "js语法参考",
        children: "JS语法参考"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS文件用来定义HML页面的业务逻辑，支持ECMA规范的JavaScript语言。基于JavaScript语言的动态化能力，可以使应用更加富有表现力，具备更加灵活的设计能力。下面讲述JS文件的编译和运行的支持情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法",
      children: "语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持ES6语法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用import方法引入功能模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import router from '@ohos.router';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码引用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用import方法导入js代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import utils from '../../common/utils.js';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对象",
      children: "对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用对象"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$def"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["使用this.$app.$def获取在app.js中暴露的对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), "  应用对象不支持数据绑定，需主动触发UI更新。"]
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// app.js\nexport default {\n  onCreate() {\n    console.info('Application onCreate');\n  },\n  onDestroy() {\n    console.info('Application onDestroy');\n  },\n  globalData: {\n    appData: 'appData',\n    appVersion: '2.0',\n  },\n  globalMethod() {\n    console.info('This is a global method!');\n    this.globalData.appVersion = '3.0';\n  }\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.js页面逻辑代码\nexport default {\n  data: {\n    appData: 'localData',\n    appVersion:'1.0',\n  },\n  onInit() {\n    this.appData = this.$app.$def.globalData.appData;\n    this.appVersion = this.$app.$def.globalData.appVersion;\n  },\n  invokeGlobalMethod() {\n    this.$app.$def.globalMethod();\n  },\n  getAppVersion() {\n    this.appVersion = this.$app.$def.globalData.appVersion;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面对象"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "data"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object/Function"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面的数据模型，类型是对象或者函数，如果类型是函数，返回值必须是对象。属性名不能以$或_开头，不要使用保留字for, if, show, tid。  data字段不可与private/public字段同时使用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$refs"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["持有注册过ref 属性的DOM元素或子组件实例的对象。示例见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%8E%B7%E5%8F%96dom%E5%85%83%E7%B4%A0",
                  children: "获取DOM元素"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "private"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面的数据模型，private下的数据属性只能由当前页面修改。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "public"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面的数据模型，public下的数据属性的行为与data保持一致。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "props"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Array/Object"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["props用于组件之间的通信，可以通过<tag xxxx='value'>方式传递给组件；props名称必须用小写，不能以$或_开头，不要使用保留字for, if, show, tid。目前props的数据类型不支持Function。示例见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props#props",
                  children: "Props"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "computed"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["用于在读取或设置进行预先处理，计算属性的结果会被缓存。计算属性名不能以$或_开头，不要使用保留字。示例见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-props/js-components-custom-props#computed",
                  children: "computed"
                }), "。"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方法",
      children: "方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据方法"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "方法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$set"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "key: string, value: any"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "添加新的数据属性或者修改已有数据属性。  用法：  this.$set('key',value)：添加数据属性。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$delete"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "key: string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "删除数据属性。  用法：  this.$delete('key')：删除数据属性。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.js\nexport default {\n  data: {\n    keyMap: {\n      OS: 'OS',\n      Version: '2.0',\n    },\n  },\n  getAppVersion() {\n    this.$set('keyMap.Version', '3.0');\n    console.info(\"keyMap.Version = \" + this.keyMap.Version); // keyMap.Version = 3.0\n\n    this.$delete('keyMap');\n    console.info(\"keyMap.Version = \" + this.keyMap); // log print: keyMap.Version = undefined\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "公共方法"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "方法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$element"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "id: string"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["获得指定id的组件对象，如果无指定id，则返回根组件对象。示例见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%8E%B7%E5%8F%96dom%E5%85%83%E7%B4%A0",
                  children: "获取DOM元素"
                }), "。  用法：  ", (0,jsx_runtime.jsx)(_components.div, {
                  id: "xxx"
                }), "  - this.$element('xxx')：获得id为xxx的组件对象。  - this.$element()：获得根组件对象。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$rootElement"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "无"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "获取根组件对象。  用法：  this.$rootElement().scrollTo({ duration: 500, position: 300 }), 页面在500ms内滚动300px。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$root"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "无"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["获得顶级ViewModel实例。", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%8E%B7%E5%8F%96viewmodel",
                  children: "获取ViewModel"
                }), "示例。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$parent"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "无"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["获得父级ViewModel实例。", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%8E%B7%E5%8F%96viewmodel",
                  children: "获取ViewModel"
                }), "示例。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$child"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "id: string"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["获得指定id的子级自定义组件的ViewModel实例。", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%8E%B7%E5%8F%96viewmodel",
                  children: "获取ViewModel"
                }), "示例。  用法：  this.$child('xxx') ：获取id为xxx的子级自定义组件的ViewModel实例。"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件方法"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "方法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$watch"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "data: string, callback: string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Function"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面方法"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "方法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "scrollTo6+"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "scrollPageParam: ScrollPageParam"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "将页面滚动到目标位置，可以通过ID选择器指定或者滚动距离指定。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " ScrollPageParam6+"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "默认值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "position"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指定滚动位置。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指定需要滚动到的元素id。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "duration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "300"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指定滚动时长，单位为毫秒。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timingFunction"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ease"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["指定滚动动画曲线，可选值参考  ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-animation/js-components-common-animation",
                  children: "动画样式animation-timing-function"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "complete"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "() => void"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "指定滚动完成后需要执行的回调函数。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.$rootElement().scrollTo({ position: 0 });\nthis.$rootElement().scrollTo({ id: 'id', duration: 200, timingFunction: 'ease-in', complete: () => {\n    console.info('滚动已完成');\n} });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取dom元素",
      children: "获取DOM元素"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过$refs获取DOM元素"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.hml -->\n<div class=\"container\">\n  <image-animator class=\"image-player\" ref=\"animator\" images=\"{{images}}\" duration=\"1s\" onclick=\"handleClick\"></image-animator>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.js\nexport default {\n  data: {\n    images: [\n      { src: '/common/frame1.png' },\n      { src: '/common/frame2.png' },\n      { src: '/common/frame3.png' }\n    ]\n  },\n  handleClick() {\n    const animator = this.$refs.animator; // 获取ref属性为animator的DOM元素\n    const state = animator.getState();\n    if (state === 'Paused') {\n      animator.resume();\n    } else if (state === 'Stopped') {\n      animator.start();\n    } else {\n      animator.pause();\n    }\n  },\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过$element获取DOM元素"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.hml -->\n<div class=\"container\" style=\"width:500px;height: 700px; margin: 100px;\">\n  <image-animator class=\"image-player\" id=\"animator\" images=\"{{images}}\" duration=\"1s\" onclick=\"handleClick\"></image-animator>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.js\nexport default {\n  data: {\n    images: [\n      { src: '/common/frame1.png' },\n      { src: '/common/frame2.png' },\n      { src: '/common/frame3.png' }\n    ]\n  },\n  handleClick() {\n    const animator = this.$element('animator'); // 获取id属性为animator的DOM元素\n    const state = animator.getState();\n    if (state === 'Paused') {\n      animator.resume();\n    } else if (state === 'Stopped') {\n      animator.start();\n    } else {\n      animator.pause();\n    }\n  },\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308243)/* ["default"] */.A) + "",
        width: "187",
        height: "249"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取viewmodel",
      children: "获取ViewModel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根节点所在页面："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- root.hml -->\n<element name='parentComp' src='../../common/component/parent/parent.hml'></element>\n<div class=\"container\">\n  <div class=\"container\">\n    <text>{{text}}</text>\n    <parentComp></parentComp>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// root.js\nexport default {\n  data: {\n    text: 'I am root!',\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480218)/* ["default"] */.A) + "",
        width: "334",
        height: "79"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义parent组件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- parent.hml -->\n<element name='childComp' src='../child/child.hml'></element>\n<div class=\"item\" onclick=\"textClicked\">\n  <text class=\"text-style\" onclick=\"parentClicked\">parent component click</text>\n  <text class=\"text-style\" if=\"{{showValue}}\">hello parent component!</text>\n  <childComp id = \"selfDefineChild\"></childComp>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// parent.js\nexport default {\n  data: {\n    showValue: false,\n    text: 'I am parent component!',\n  },\n  parentClicked () {\n    this.showValue = !this.showValue;\n    console.info('parent component get parent text');\n    console.info(`${this.$parent().text}`);\n    console.info(\"parent component get child function\");\n    console.info(`${this.$child('selfDefineChild').childClicked()}`);\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义child组件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- child.hml -->\n<div class=\"item\" onclick=\"textClicked\">\n  <text class=\"text-style\" onclick=\"childClicked\">child component clicked</text>\n  <text class=\"text-style\" if=\"{{isShow}}\">hello child component</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// child.js\nexport default {\n  data: {\n    isShow: false,\n    text: 'I am child component!',\n  },\n  childClicked () {\n    this.isShow = !this.isShow;\n    console.info('child component get parent text');\n    console.info('${this.$parent().text}');\n    console.info('child component get root text');\n    console.info('${this.$root().text}');\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(779441)/* ["default"] */.A) + "",
        width: "405",
        height: "179"
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
480218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
308243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798430-151eb85116bc1a567d3713e3dd421e10.gif");

},
779441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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