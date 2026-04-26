"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["669362"], {
253024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_card_comp_syntax_js_service_widget_syntax_hml_js_service_widget_syntax_hml_md_d10_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-framework-overview-card-comp-syntax-js-service-widget-syntax-hml-js-service-widget-syntax-hml-md-d10.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_card_comp_syntax_js_service_widget_syntax_hml_js_service_widget_syntax_hml_md_d10_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml","title":"HML语法参考","description":"HML是一套类HTML的标记语言，通过组件，事件构建出页面的内容。页面具备数据绑定、事件绑定、条件渲染和逻辑控制等高级能力。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HML语法参考","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-syntax-hml","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-syntax-hml"},"sidebar":"ref","previous":{"title":"文件组织","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file"},"next":{"title":"CSS语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css/js-service-widget-syntax-css"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml.md


const frontMatter = {
	title: 'HML语法参考',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-syntax-hml',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-syntax-hml'
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
  "value": "事件绑定",
  "id": "事件绑定",
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
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
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
        id: "hml语法参考",
        children: "HML语法参考"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HML是一套类HTML的标记语言，通过组件，事件构建出页面的内容。页面具备数据绑定、事件绑定、条件渲染和逻辑控制等高级能力。"
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
        children: "<!-- xxx.hml -->\n<div class=\"item-container\">\n  <text>{{content}}</text>            <!-- 输出：Hello World！-->\n  <text>{{key1}} {{key2}}</text>       <!-- 输出：Hello World-->\n  <text>key1 {{key1}}</text>           <!-- 输出：key1 Hello-->\n  <text>{{flag1 && flag2}}</text>      <!-- 输出：false-->\n  <text>{{flag1 || flag2}}</text>      <!-- 输出：true-->\n  <text>{{!flag1}}</text>              <!-- 输出：false-->\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片hml文件中的变量需要在json文件的data字段下进行声明："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"content\": \"Hello World!\",\n    \"key1\": \"Hello\",\n    \"key2\": \"World\",\n    \"flag1\": true,\n    \"flag2\": false\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426613)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "key值支持对象操作符和数组操作符，如{{key.value}}、{{key[0]}}。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持字符串拼接、逻辑运算和三元表达式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字符串拼接："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持变量跟变量：{{key1}}{{key2}}等"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持常量跟变量： \"my name is {{name}}， i am from {{city}}.\" \"key1 {{key1}}\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "逻辑运算："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "与：{{flag1 && flag2}}（仅支持两个boolean变量间的与逻辑运算）"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "或：{{flag1 || flag2}} （仅支持两个boolean变量间的或逻辑运算）"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "非：{{!flag1}} （仅支持boolean变量的非逻辑运算）"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "三元表达式"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{{flag? key1:key2}}（flag为boolean变量，key1和key2可以是变量，也可以是常量）"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意事项"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "非boolean类型值进行bool运算默认为false"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "以上所有变量解析跟运算解析均不支持嵌套"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件绑定",
      children: "事件绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片的事件需要在json文件的actions字段下进行声明。卡片仅支持click通用事件，事件的定义只能是直接命令式，事件定义必须包含action字段，用以说明事件类型。卡片支持两种事件类型：跳转事件(router)和消息事件(message)。跳转事件可以跳转到卡片提供方的应用，消息事件可以将开发者自定义信息传递给卡片提供方。事件参数支持变量，变量以\"{{}}\"修饰。跳转事件中若定义了params字段，则在被拉起应用的onStart的intent中，可用\"params\"作为key将跳转事件定义的params字段的值取到。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跳转事件格式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过定义ability名称和携带的参数字段params直接跳转，可用\"params\"作为key提取到跳转事件定义的params字段值。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "选择器"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "样例"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "默认值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "样例描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "action"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "\"router\""
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "事件类型。  - \"router\"：用于应用跳转。  - \"message\"：自定义点击事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "abilityName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跳转ability名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "params"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跳转应用携带的额外参数。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"data\": {\n    \"mainAbility\": \"xxx.xxx.xxx\"\n  },\n  \"actions\": {\n    \"routerEvent\": {\n      \"action\": \"router\",\n      \"abilityName\": \"{{mainAbility}}\",\n      \"params\":{}\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "消息事件格式"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "选择器"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "样例"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "默认值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "样例描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "action"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "message"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示事件类型。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "params"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "跳转应用携带的额外参数。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"actions\": {\n    \"activeEvent\": {\n      \"action\": \"message\",\n      \"params\": {}\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定路由事件和消息事件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml --> \n<div> \n  <!-- 正常格式 --> \n  <div onclick=\"activeEvent\"></div> \n  <!-- 缩写 --> \n  <div @click=\"activeEvent\"></div> \n</div>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "列表渲染",
      children: "列表渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"array-container\">\n  <!-- div列表渲染 -->\n  <!-- 默认$item代表数组中的元素, $idx代表数组中的元素索引 -->\n  <div for=\"{{array}}\" tid=\"id\">\n    <text>{{$item.name}}</text>\n  </div>\n  <!-- 自定义元素变量名称 -->\n  <div for=\"{{value in array}}\" tid=\"id\">    \n    <text>{{value.name}}</text>\n  </div>\n  <!-- 自定义元素变量、索引名称 -->\n  <div for=\"{{(index, value) in array}}\" tid=\"id\">    \n    <text>{{value.name}}</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"array\": [\n      {\"id\": 1, \"name\": \"jack\", \"age\": 18},\n      {\"id\": 2, \"name\": \"tony\", \"age\": 18}\n    ]\n  }\n}\n"
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
        src: (__webpack_require__(720017)/* ["default"] */.A) + "",
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持for嵌套使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "for对应的变量数组，当前要求数组中的object是相同类型，不支持多种object类型混合写在一个数组中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "条件渲染",
      children: "条件渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "条件渲染分为2种：if/elif/else和show。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用if/elif/else写法时，节点必须是兄弟节点，否则编译无法通过。实例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n  <text if=\"{{show}}\"> Hello-TV </text>\n  <text elif=\"{{display}}\"> Hello-Wearable </text>\n  <text else> Hello-World </text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"show\": false,\n    \"display\": true\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当show为真时，节点正常渲染；当show为假时，节点不渲染，效果等同display样式为none。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<text show=\"{{visible}}\"> Hello World </text>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"visible\": false\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "逻辑控制块",
      children: "逻辑控制块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<block>控制块使得循环渲染和条件渲染变得更加灵活；block在构建时不会被当作真实的节点编译。block标签只支持if属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml --> \n<div> \n  <block if=\"{{show}}\"> \n    <text>Hello</text> \n    <text>World</text> \n  </block>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"show\": true\n  }\n}\n"
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
426613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
720017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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