"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["191123"], {
753059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_richtext_ts_basic_components_richtext_md_e57_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-text-and-input-ts-basic-components-richtext-ts-basic-components-richtext-md-e57.json
var site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_richtext_ts_basic_components_richtext_md_e57_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext","title":"RichText","description":"富文本组件，解析并显示HTML格式文本。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext.md","sourceDirName":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext","slug":"/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"RichText","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richtext","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-richtext"},"sidebar":"ref","previous":{"title":"Hyperlink","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink"},"next":{"title":"属性字符串","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext.md


const frontMatter = {
	title: 'RichText',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richtext',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-richtext'
};
const contentTitle = 'RichText';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onStart",
  "id": "onstart",
  "level": 3
}, {
  "value": "onComplete",
  "id": "oncomplete",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "支持标签",
  "id": "支持标签",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    font: "font",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h6: "h6",
    header: "header",
    hr: "hr",
    i: "i",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    script: "script",
    strong: "strong",
    style: "style",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    u: "u",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "richtext",
        children: "RichText"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "富文本组件，解析并显示HTML格式文本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["RichText组件适用于加载与显示一段HTML字符串，且不需要对显示效果进行较多自定义的应用场景。RichText组件仅支持有限的通用属性和事件。具体见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%B1%9E%E6%80%A7",
            children: "属性"
          }), "与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BA%8B%E4%BB%B6",
            children: "事件"
          }), "小节。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RichText组件底层复用了Web组件来提供基础能力，包括但不限于HTML页面的解析、渲染等。因此使用RichText组件需要遵循Web约束条件。常见典型约束如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移动设备的视口默认值大小为980px，默认值可以确保大部分网页在移动设备下可以正常浏览。如果RichText组件宽度低于这个值，content内部的HTML则可能会产生一个可以滑动的页面被RichText组件包裹。如果想替换默认值，可以在content中添加以下标签："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<meta name=\"viewport\" content=\"width=device-width\">\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不适用场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["RichText组件不适用于对HTML字符串的显示效果进行较多自定义的应用场景。例如RichText组件不支持通过设置属性与事件，来修改背景颜色、字体颜色、字体大小、动态改变内容等。在这种情况下，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
            children: "Web组件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RichText组件消耗较多内存资源，在List下循环重复使用RichText组件时，会出现卡顿、滑动响应迟缓等现象。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(82472)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件无法根据内容自适应设置宽高属性，需要开发者设置显示布局。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该组件不再更新和维护，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
          children: "Web组件"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不包含子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichText(content:string | Resource)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            }), " 20+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstart",
      children: "onStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onStart(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载网页时触发回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncomplete",
      children: "onComplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onComplete(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页加载结束时触发回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "中width，height，size，layoutWeight四个属性。由于padding，margin，constraintSize属性使用时与通用属性描述不符，暂不支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持标签",
      children: "支持标签"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.h1, {
              children: "--"
            }), (0,jsx_runtime.jsx)(_components.h6, {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["被用来定义HTML，", (0,jsx_runtime.jsx)(_components.h1, {
              children: "定义重要等级最高的标题，"
            }), (0,jsx_runtime.jsx)(_components.h6, {
              children: "定义重要等级最低的标题。"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<h1>这是一个标题</h1><h2>这是h2标题</h2>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.p, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义段落。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<p>这是一个段落</p>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.br, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入一个简单的换行符。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<p>这是一个段落<br/>这是换行段落</p>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.font, {})
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["规定文本的字体、字体尺寸、字体颜色。在标签中font size能够设置的值只有1到7的数字，默认值是3，由于标签在HTML 4.01中不建议使用，在XHTML1.0 Strict DTD中不支持，所以不建议使用此标签，请使用CSS代替。CSS语法：", (0,jsx_runtime.jsx)(_components.p, {
              style: {
                fontSize: "35px",
                fontFamily: "verdana",
                color: "rgb(24,78,228)"
              }
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.font, {
              size: "3",
              face: "arial",
              color: "red",
              children: "这是一段红色字体。"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.hr, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义HTML页面中的主题变化（比如话题的转移），并显示为一条水平线。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<p>这是一个段落</p><hr/><p>这是一个段落</p>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.img, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来定义图片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: "resource://rawfile/icon.png"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.div, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常用于组合块级元素，以便通过CSS来对这些元素进行格式化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.div, {
              style: {
                color: "#0000FF"
              },
              children: (0,jsx_runtime.jsx)(_components.h3, {
                children: "这是一个在div元素中的标题。"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.i, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与文本中其余部分不同的部分，并把这部分文本呈现为斜体文本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<i>这是一个斜体</i>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.u, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与常规文本风格不同的文本，像拼写错误的单词或者汉语中的专有名词，应尽量避免使用<u>为文本加下划线，用户会把它混淆为一个超链接。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<p><u>这是带有下划线的段落</u></p>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.style, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义HTML文档的样式信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.style, {
              children: "h1{color:red;}p{color:blue;}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性规定元素的行内样式，写在标签内部，在使用的时候需用引号来进行区分，并以; 间隔样式，style='width: 500px;height: 500px;border: 1px solid;margin: 0 auto;'。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<h1 style='color:blue;text-align:center'>这是一个标题</h1><p style='color:green'>这是一个段落。</p>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.script, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于定义客户端脚本，比如JavaScript。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.script, {
              children: "document.write(\"Hello World!\")"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果请以真机运行为准，当前DevEco Studio预览器不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RichTextExample {\n  @State data: string = '<h1 style=\"text-align: center;\">h1标题</h1>' +\n  '<h1 style=\"text-align: center;\"><i>h1斜体</i></h1>' +\n  '<h1 style=\"text-align: center;\"><u>h1下划线</u></h1>' +\n  '<h2 style=\"text-align: center;\">h2标题</h2>' +\n  '<h3 style=\"text-align: center;\">h3标题</h3>' +\n  '<p style=\"text-align: center;\">p常规</p><hr/>' +\n  '<div style=\"width: 500px;height: 500px;border: 1px solid;margin: 0 auto;\">' +\n  '<p style=\"font-size: 35px;text-align: center;font-weight: bold; color: rgb(24,78,228)\">字体大小35px,行高45px</p>' +\n  '<p style=\"background-color: #e5e5e5;line-height: 45px;font-size: 35px;text-indent: 2em;\">' +\n  '<p>这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字</p>';\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center,\n      justifyContent: FlexAlign.Center }) {\n      RichText(this.data)\n        .onStart(() => {\n          console.info('RichText onStart');\n        })\n        .onComplete(() => {\n          console.info('RichText onComplete');\n        })\n        .width(500)\n        .height(500)\n        .backgroundColor(0XBDDB69)\n      RichText('layoutWeight(1)')\n        .onStart(() => {\n          console.info('RichText onStart');\n        })\n        .onComplete(() => {\n          console.info('RichText onComplete');\n        })\n        .size({ width: '100%', height: 110 })\n        .backgroundColor(0X92D6CC)\n        .layoutWeight(1)\n      RichText('layoutWeight(2)')\n        .onStart(() => {\n          console.info('RichText onStart');\n        })\n        .onComplete(() => {\n          console.info('RichText onComplete');\n        })\n        .size({ width: '100%', height: 110 })\n        .backgroundColor(0X92C48D)\n        .layoutWeight(2)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(613988)/* ["default"] */.A) + "",
        width: "340",
        height: "522"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载本地资源文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过$rawfile方式加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RichTextComponent {\n\n  build() {\n    Column() {\n      // 通过$rawfile加载本地资源文件。\n      RichText($rawfile(\"index.html\"))\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过resources协议加载，适用Webview加载带有\"#\"路由的链接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 resource://rawfile/ 协议前缀可以避免常规 $rawfile 方式在处理带有\"#\"路由链接时的局限性。当URL中包含\"#\"号时，\"#\"后面的内容会被视为锚点（fragment）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RichTextComponent {\n\n  build() {\n    Column() {\n      // 通过resource协议加载本地资源文件。\n      RichText(\"resource://rawfile/index.html#home\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“src\\main\\resources\\rawfile”文件夹下创建index.html："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n    <body>\n        <p>Hello World</p>\n    </body>\n</html>\n"
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
82472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
613988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439865-ddde8e1af70f147912a3cb42090ee0b6.png");

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