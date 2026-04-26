"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["463925"], {
741869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_multiple_languages_js_framework_multiple_languages_md_04c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-js-framework-overview-js-framework-multiple-languages-js-framework-multiple-languages-md-04c.json
var site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_multiple_languages_js_framework_multiple_languages_md_04c_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages/js-framework-multiple-languages","title":"多语言支持","description":"基于开发框架的应用会覆盖多个国家和地区，开发框架支持多语言能力后，可以让应用开发者无需开发多个不同语言的版本，就可以同时支持多种语言的切换，为项目维护带来便利。","source":"@site/docs/arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages/js-framework-multiple-languages.md","sourceDirName":"arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages","slug":"/arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"多语言支持","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-multiple-languages","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"资源限定与访问","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/"},"next":{"title":"组件介绍","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-component/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages/js-framework-multiple-languages.md


const frontMatter = {
	title: '多语言支持',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-multiple-languages',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多语言支持';

const assets = {

};



const toc = [{
  "value": "定义资源文件",
  "id": "定义资源文件",
  "level": 2
}, {
  "value": "引用资源",
  "id": "引用资源",
  "level": 2
}, {
  "value": "获取语言",
  "id": "获取语言",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
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
        id: "多语言支持",
        children: "多语言支持"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于开发框架的应用会覆盖多个国家和地区，开发框架支持多语言能力后，可以让应用开发者无需开发多个不同语言的版本，就可以同时支持多种语言的切换，为项目维护带来便利。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者仅需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9A%E4%B9%89%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6",
        children: "定义资源文件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%95%E7%94%A8%E8%B5%84%E6%BA%90",
        children: "引用资源"
      }), "两个步骤，就可以使用开发框架的多语言能力；如果需要在应用中获取当前系统语言，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E8%AF%AD%E8%A8%80",
        children: "获取语言"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义资源文件",
      children: "定义资源文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["资源文件用于存放应用在多种语言场景下的资源内容，开发框架使用JSON文件保存资源定义。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-js-dev/js-framework-overview/js-framework-file",
        children: "文件组织"
      }), "中指定的i18n文件夹内放置语言资源文件，语言资源文件的命名是由语言、文字、国家或地区的限定词通过中划线连接组成，其中文字和国家或地区可以省略，如zh-Hant-HK（中国香港地区使用的繁体中文）、zh-CN（中国使用的简体中文）、zh（中文）。命名规则如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "language[-script-region].json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "限定词的取值需符合下表要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表1 限定词取值要求"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "限定词类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义与取值说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语言"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备使用的语言类型，由2~3个小写字母组成。例如：zh表示中文，en表示英语，mai表示迈蒂利语。  详细取值范围，请查阅ISO 639（ISO制定的语言编码标准）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备使用的文字类型，由1个大写字母（首字母）和3个小写字母组成。例如：Hans表示简体中文，Hant表示繁体中文。  详细取值范围，请查阅ISO 15924（ISO制定的文字编码标准）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "国家或地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户所在的国家或地区，由2~3个大写字母或者3个数字组成。例如：CN表示中国，GB表示英国。  详细取值范围，请查阅ISO 3166-1（ISO制定的国家和地区编码标准）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发框架无法在应用中找到系统语言的资源文件时，默认使用en-US.json中的资源内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源文件内容格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "en-US.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"strings\": {\n        \"hello\": \"Hello world!\",\n        \"object\": \"Object parameter substitution-{name}\",\n        \"array\": \"Array type parameter substitution-{0}\",\n        \"symbol\": \"@#$%^&*()_+-={}[]\\\\|:;\\\"'<>,./?\"\n    },\n\n    \"files\": {\n        \"image\": \"image/en_picture.PNG\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于不同语言针对单复数有不同的匹配规则，在资源文件中使用“zero”“one”“two”“few”“many”“other”定义不同单复数场景下的词条内容。例如中文不区分单复数，仅存在“other”场景；英文存在“one”、“other”场景；阿拉伯语存在上述6种场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以en-US.json和ar-AE.json为例，资源文件内容格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "en-US.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"strings\": {\n        \"people\": {\n            \"one\": \"one person\",\n            \"other\": \"{count} people\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ar-AE.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"strings\": {\n        \"people\": {\n            \"zero\": \"لا أحد\",\n            \"one\": \"وحده\",\n            \"two\": \"اثنان\",\n            \"few\": \"ستة اشخاص\",\n            \"many\": \"خمسون شخص\",\n            \"other\": \"مائة شخص\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用资源",
      children: "引用资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发的页面中使用多语言的语法，包含简单格式化和单复数格式化两种，都可以在hml或js中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单格式化方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用中使用$t方法引用资源，$t既可以在hml中使用，也可以在js中使用。系统将根据当前语言环境和指定的资源路径（通过$t的path参数设置），显示对应语言的资源文件中的内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表2 简单格式化"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$t"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Function"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "请见表 $t参数说明"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据系统语言完成简单的替换：this.$t('strings.hello')。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表3 $t参数说明"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "path"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "资源路径。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "params"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Array"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单格式化示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div>\n  <!-- 不使用占位符，text中显示“Hello world!” -->\n  <text>{{ $t('strings.hello') }}</text>\n  <!-- 具名占位符格式，运行时将占位符{name}替换为“Hello world” -->\n  <text>{{ $t('strings.object', { name: 'Hello world' }) }}</text>\n  <!-- 数字占位符格式，运行时将占位符{0}替换为“Hello world” -->\n  <text>{{ $t('strings.array', ['Hello world']) }}</text>\n  <!-- 先在js中获取资源内容，再在text中显示“Hello world” -->\n  <text>{{ hello }}</text>\n  <!-- 先在js中获取资源内容，并将占位符{name}替换为“Hello world”，再在text中显示“Object parameter substitution-Hello world” -->\n  <text>{{ replaceObject }}</text>\n  <!-- 先在js中获取资源内容，并将占位符{0}替换为“Hello world”，再在text中显示“Array type parameter substitution-Hello world” -->\n  <text>{{ replaceArray }}</text>\n\n  <!-- 获取图片路径 -->\n  <image src=\"{{ $t('files.image') }}\" class=\"image\"></image>\n  <!-- 先在js中获取图片路径，再在image中显示图片 -->\n  <image src=\"{{ replaceSrc }}\" class=\"image\"></image>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.js\n// 下面为在js文件中的使用方法。\nexport default {\n  data: {\n    hello: '',\n    replaceObject: '',\n    replaceArray: '',\n    replaceSrc: '',\n  },\n  onInit() {\n    this.hello = this.$t('strings.hello');\n    this.replaceObject = this.$t('strings.object', { name: 'Hello world' });\n    this.replaceArray = this.$t('strings.array', ['Hello world']);\n    this.replaceSrc = this.$t('files.image');\n  },\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单复数格式化方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表4 单复数格式化"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "$tc"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Function"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "请见表 $tc参数说明"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["根据系统语言完成单复数替换：this.$tc('strings.people')。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), "  定义资源的内容通过json格式的key为“zero”、“one”、“two”、“few”、“many”和“other”区分。"]
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表5 $tc参数说明"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "path"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "资源路径。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "要表达的值。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单复数格式化示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!--xxx.hml-->\n<div>\n  <!-- 传递数值为0时： \"0 people\" 阿拉伯语中此处匹配key为zero的词条-->\n  <text>{{ $tc('strings.people', 0) }}</text>\n  <!-- 传递数值为1时： \"one person\" 阿拉伯语中此处匹配key为one的词条-->\n  <text>{{ $tc('strings.people', 1) }}</text>\n  <!-- 传递数值为2时： \"2 people\" 阿拉伯语中此处匹配key为two的词条-->\n  <text>{{ $tc('strings.people', 2) }}</text>\n  <!-- 传递数值为6时： \"6 people\" 阿拉伯语中此处匹配key为few的词条-->\n  <text>{{ $tc('strings.people', 6) }}</text>\n  <!-- 传递数值为50时： \"50 people\" 阿拉伯语中此处匹配key为many的词条-->\n  <text>{{ $tc('strings.people', 50) }}</text>\n  <!-- 传递数值为100时： \"100 people\" 阿拉伯语中此处匹配key为other的词条-->\n  <text>{{ $tc('strings.people', 100) }}</text>\n</div>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取语言",
      children: "获取语言"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取语言功能请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "@ohos.app.ability.Configuration (环境变量)"
      }), "。"]
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