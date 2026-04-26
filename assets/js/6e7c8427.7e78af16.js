"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["504180"], {
622595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_syntax_js_framework_syntax_css_js_framework_syntax_css_md_6e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-js-framework-overview-js-framework-syntax-js-framework-syntax-css-js-framework-syntax-css-md-6e7.json
var site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_syntax_js_framework_syntax_css_js_framework_syntax_css_md_6e7_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/js-framework-syntax-css","title":"CSS语法参考","description":"CSS是描述HML页面结构的样式语言。所有组件均存在系统默认样式，也可在页面CSS样式文件中对组件、页面自定义不同的样式。请参考通用样式了解兼容JS的类Web开发范式支持的组件样式。","source":"@site/docs/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/js-framework-syntax-css.md","sourceDirName":"arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css","slug":"/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CSS语法参考","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-syntax-css","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HML语法参考","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml/"},"next":{"title":"JS语法参考","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css/js-framework-syntax-css.md


const frontMatter = {
	title: 'CSS语法参考',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-syntax-css',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'CSS语法参考';

const assets = {

};



const toc = [{
  "value": "尺寸单位",
  "id": "尺寸单位",
  "level": 2
}, {
  "value": "样式导入",
  "id": "样式导入",
  "level": 2
}, {
  "value": "声明样式",
  "id": "声明样式",
  "level": 2
}, {
  "value": "选择器",
  "id": "选择器",
  "level": 2
}, {
  "value": "选择器优先级",
  "id": "选择器优先级",
  "level": 2
}, {
  "value": "伪类",
  "id": "伪类",
  "level": 2
}, {
  "value": "样式预编译",
  "id": "样式预编译",
  "level": 2
}, {
  "value": "CSS样式继承6+",
  "id": "css样式继承6",
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
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "css语法参考",
        children: "CSS语法参考"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSS是描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml",
        children: "HML"
      }), "页面结构的样式语言。所有组件均存在系统默认样式，也可在页面CSS样式文件中对组件、页面自定义不同的样式。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-styles/js-components-common-styles",
        children: "通用样式"
      }), "了解兼容JS的类Web开发范式支持的组件样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "尺寸单位",
      children: "尺寸单位"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "逻辑像素px（文档中以<length>表示）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["默认屏幕具有的逻辑宽度为720px（配置见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/ui-js-dev/js-framework-overview/js-framework-js-tag",
              children: "js标签配置"
            }), "中的window小节），实际显示时会将页面布局缩放至屏幕实际宽度，如100px在实际宽度为1440物理像素的屏幕上，实际渲染为200物理像素（从720px向1440物理像素，所有尺寸放大2倍）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["额外配置autoDesignWidth为true时（配置见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/ui-js-dev/js-framework-overview/js-framework-js-tag",
              children: "js标签配置"
            }), "中的window小节），逻辑像素px将按照屏幕密度进行缩放，如100px在屏幕密度为3的设备上，实际渲染为300物理像素。应用需要适配多种设备时，建议采用此方法。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "百分比（文档中以<percentage>表示）：表示该组件占父组件尺寸的百分比，如组件的width设置为50%，代表其宽度为父组件的50%。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式导入",
      children: "样式导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了模块化管理和代码复用，CSS样式文件支持 @import 语句，导入css文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明样式",
      children: "声明样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个页面目录下存在一个与布局hml文件同名的css文件，用来描述该hml页面中组件的样式，决定组件应该如何显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内部样式，支持使用style、class属性来控制组件的样式。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.hml -->\n<div class=\"container\">\n  <text style=\"color: red\">Hello World</text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.css */\n.container {\n  justify-content: center;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件导入，合并外部样式文件。例如，在common目录中定义样式文件style.css，并在index.css文件首行中进行导入："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* style.css */\n.title {\n  font-size: 50px;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.css */\n@import '../../common/style.css';\n.container {\n  justify-content: center;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择器",
      children: "选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css选择器用于选择需要添加样式的元素，支持的选择器如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选择器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择class=\"container\"的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#titleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择id=\"titleId\"的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择text组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ","
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".title, .content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择class=\"title\"和class=\"content\"的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#id .class tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#containerId .content text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非严格父子关系的后代选择器，选择具有id=\"containerId\"作为祖先元素，class=\"content\"作为次级祖先元素的所有text组件。如需使用严格的父子关系，可以使用“>”代替空格，如：#containerId>.content。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- 页面布局xxx.hml -->\n<div id=\"containerId\" class=\"container\">\n  <text id=\"titleId\" class=\"title\">标题</text>\n  <div class=\"content\">\n    <text id=\"contentId\">内容</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 页面样式xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n/* 对所有div组件设置样式 */\ndiv {\n  flex-direction: column;\n}\n/* 对class=\"title\"的组件设置样式 */\n.title {\n  font-size: 30px;\n}\n/* 对id=\"contentId\"的组件设置样式 */\n#contentId {\n  font-size: 20px;\n}\n/* 对所有class=\"title\"以及class=\"content\"的组件都设置padding为5px */\n.title, .content {\n  padding: 5px;\n}\n/* 对class=\"container\"的组件下的所有text设置样式 */\n.container text {\n  color: #007dff;\n}\n/* 对class=\"container\"的组件下的直接后代text设置样式 */\n.container > text {\n  color: #fa2a2d;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上样式运行效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465291)/* ["default"] */.A) + "",
        width: "145",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中“.container text”将“标题”和“内容”设置为蓝色，而“.container > text”直接后代选择器将“标题”设置为红色。2者优先级相同，但直接后代选择器声明顺序靠后，将前者样式覆盖（优先级计算见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7",
        children: "选择器优先级"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择器优先级",
      children: "选择器优先级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择器的优先级计算规则与w3c规则保持一致（只支持：内联样式，id，class，tag，后代和直接后代），其中内联样式为在元素style属性中声明的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当多条选择器声明匹配到同一元素时，各类选择器优先级由高到低顺序为：内联样式 > id > class > tag。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "伪类",
      children: "伪类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css伪类是选择器中的关键字，用于指定要选择元素的特殊状态。例如，:disabled状态可以用来设置元素的disabled属性变为true时的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了单个伪类之外，还支持伪类的组合，例如，:focus:checked状态可以用来设置元素的focus属性和checked属性同时为true时的样式。支持的单个伪类如下表所示，按照优先级降序排列："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":disabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持disabled属性的组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示disabled属性变为true时的元素（不支持动画样式的设置）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持click事件的组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示被用户激活的元素，如：被用户按下的按钮、被激活的tab-bar页签（不支持动画样式的设置）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":waiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示waiting属性为true的元素（不支持动画样式的设置）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "input[type=\"checkbox\"、type=\"radio\"]、 switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示checked属性为true的元素（不支持动画样式的设置）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "伪类示例如下，设置按钮的:active伪类可以控制被用户按下时的样式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <input type=\"button\" class=\"button\" value=\"Button\"></input>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* index.css */\n.container {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.button:active {\n  background-color: #888888;/*按钮被激活时，背景颜色变为#888888 */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555695)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对弹窗类组件及其子元素不支持伪类效果，包括popup、dialog、menu、option、picker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式预编译",
      children: "样式预编译"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预编译提供了利用特有语法生成css的程序，可以提供变量、运算等功能，令开发者更便捷地定义组件样式，目前支持less、sass和scss的预编译。使用样式预编译时，需要将原css文件后缀改为less、sass或scss，如index.css改为index.less、index.sass或index.scss。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前文件使用样式预编译，例如将原index.css改为index.less："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.less */\n/* 定义变量 */\n@colorBackground: #000000;\n.container {\n  background-color: @colorBackground; /* 使用当前less文件中定义的变量 */\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用预编译文件，例如common中存在style.scss文件，将原index.css改为index.scss，并引入style.scss："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* style.scss */\n/* 定义变量 */\n$colorBackground: #000000;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在index.scss中引用："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.scss */\n/* 引入外部scss文件 */\n@import '../../common/style.scss';\n.container {\n  background-color: $colorBackground; /* 使用style.scss中定义的变量 */\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(617940)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用的预编译文件建议放在common目录进行管理。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "css样式继承6",
      children: "CSS样式继承6+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css样式继承提供了子节点继承父节点样式的能力，继承下来的样式在多选择器样式匹配的场景下，优先级排最低，当前支持以下样式的继承："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "font-family"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "font-weight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "font-size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "font-style"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "text-align"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "line-height"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "letter-spacing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "color"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "visibility"
      }), "\n"]
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
617940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
555695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
465291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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