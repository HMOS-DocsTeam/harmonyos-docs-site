"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["40219"], {
619121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_decorator_intents_skill_all_rec_decorator_page_intents_skill_all_rec_decorator_page_md_72a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-skill-all-rec-intents-skill-all-rec-access-programme-intents-skill-all-rec-decorator-intents-skill-all-rec-decorator-page-intents-skill-all-rec-decorator-page-md-72a.json
var site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_decorator_intents_skill_all_rec_decorator_page_intents_skill_all_rec_decorator_page_md_72a_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-page/intents-skill-all-rec-decorator-page","title":"基于Page的装饰器方案","description":"开发者使用@InsightIntentPage装饰器进行基于Page的意图声明，可快速将已有的Page页面接入意图框架，以购买电影票的意图为例，详细说明如下：","source":"@site/docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-page/intents-skill-all-rec-decorator-page.md","sourceDirName":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-page","slug":"/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-page/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"基于Page的装饰器方案","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-decorator-page","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于Link的装饰器方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-link/"},"next":{"title":"基于函数的装饰器方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-function/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-page/intents-skill-all-rec-decorator-page.md


const frontMatter = {
	title: '基于Page的装饰器方案',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-decorator-page',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '基于Page的装饰器方案';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "基于page的装饰器方案",
        children: "基于Page的装饰器方案"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用@InsightIntentPage装饰器进行基于Page的意图声明，可快速将已有的Page页面接入意图框架，以购买电影票的意图为例，详细说明如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "装饰器添加位置：基于Page的装饰器需要添加在Entry页面组件上，建议在目标页面中进行声明。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { InsightIntentPage } from \"@kit.AbilityKit\";\n\n@Builder\nexport function PurchaseMovieTicketsIntentPageBuilder(pageName: string, param: object) {\n  PurchaseMovieTicketsIntentPage({ param: param });\n}\n\n@InsightIntentPage({\n  intentName: 'PurchaseMovieTickets',\n  domain: 'PurchaseTickets',\n  intentVersion: '1.0.1',\n  displayName: '购买电影票',\n  llmDescription: '用于在线购买电影票，允许用户选择指定影院、电影和场次时间进行购票。在用户明确表达购票需求，且已提供所有必要信息（cinema, film, time）时使用。如果信息不全或者用户只是查询电影信息、放映时间或票价，不应调用此工具。',\n  uiAbility: 'EntryAbility',\n  pagePath: './ets/pages/MainPage',\n  navDestinationName: 'PurchaseMovieTicketsIntentPage',\n  parameters: {\n    \"type\": \"object\",\n    \"properties\": {\n      \"cinema\": {\n        \"type\": \"string\",\n        \"description\": \"目标影院名称，仅支持平台合作的影院\"\n      },\n      \"film\": {\n        \"type\": \"string\",\n        \"description\": \"目标电影名称，需为当前上映或即将上映且在影院排片列表中的电影\"\n      },\n      \"time\": {\n        \"type\": \"string\",\n        \"description\": \"放映时间，必须为未来的场次，且需为影院当天有效排片时间；时间格式应为'YYYY-MM-DD HH:MM'（例如'2025-07-01 19:30'）\"\n      }\n    },\n    \"required\": [\"cinema\", \"film\", \"time\"]\n  }\n})\n@Entry\n@Component\nstruct PurchaseMovieTicketsIntentPage {\n  param: object = new Object();\n  cinema: string = '';\n  film: string = '';\n  time: string = '';\n  aboutToAppear(): void {\n    this.cinema= this.param?.['cinema'];\n    this.film = this.param?.['film'];\n    this.time = this.param?.['time'];\n  }\n  build() {\n    NavDestination(){\n      Text(`${this.cinema} ${this.film} ${this.time}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bolder)\n    }\n    .title('IntentPage')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "装饰器的字段说明以及示例：@InsightIntentPage字段以及具体说明如下。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "intentName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图名称，最大长度：64。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "domain"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图所属的功能垂域。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "intentVersion"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图的版本号，用于兼容性管理。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "displayName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图的展示名称，用于界面显示，最大长度：64。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "llmDescription"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图的描述，详细描述该意图可实现的能力，便于大模型理解并调用。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "parameters"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Record<string, object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图参数定义，描述参数类型以及含义。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "uiAbility"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面依赖的UiAbility名，如果不传递默认使用EntryAbility。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pagePath"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Navigation组件所在页面的路径，路径基于Module的根目录的相对路径。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navDestinationName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Navigation子页面名称，如果不填写，则跳转到pagePath指定的页面。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为便于大模型理解和调用，相关参数定义需要遵照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification",
            children: "自定义意图相关信息定义规范"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "装饰器的添加方式：装饰器可以直接手动添加，同时也支持一键生成装饰器，建议使用后者，此方式需要安装相应插件，详细步骤如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["打开CodeGenie插件：在DevEco Studio右侧边栏点击CodeGenie或输入快捷键Alt/Option+U，可以进入DevEco CodeGenie。若使用非最新版本的DevEco Studio，可通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/download/deveco-codegenie",
                children: "下载中心"
              }), "获取并使用相关功能，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-codegenie#section18337533718",
                children: "插件获取及安装"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(524043)/* ["default"] */.A) + "",
                width: "1903",
                height: "943"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "框选想要接入意图框架功能的代码。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(901854)/* ["default"] */.A) + "",
                width: "1886",
                height: "945"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在选中的代码块上右键CodeGenie > Insight Intent > 选择适合的装饰器。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(737955)/* ["default"] */.A) + "",
                width: "1886",
                height: "945"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在DevEco CodeGenie对话框中对意图定义，功能，参数等进行描述。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(672113)/* ["default"] */.A) + "",
                width: "1884",
                height: "950"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "回车或者点击发送按钮，即可生成对应的装饰器内容。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(585450)/* ["default"] */.A) + "",
                width: "1908",
                height: "956"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将光标放置于要插入装饰器的位置，点击插入图标，即可在对应位置插入装饰器。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "插入前："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(339074)/* ["default"] */.A) + "",
                width: "1549",
                height: "991"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "插入后："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(995036)/* ["default"] */.A) + "",
                width: "5511",
                height: "3519"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "装饰器的使用约束和说明："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "仅支持Navigation页面架构跳转。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该跳转不能有自定义上下文依赖，比如必须打开前置页面才能跳转，开发者需要进行验证，确认兜底策略。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "跳转页面时，默认使用Navigation页面栈进行push，如果开发者需要实现其他跳转逻辑，则需要自行适配。"
          }), "\n"]
        }), "\n"]
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
524043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439369-a83209163cda4331d44330ad8cd201bd.png");

},
995036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479327-e89c699c8545a9f21ea868eb1fd0bc60.png");

},
901854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959324-7cfa221d2d106955e3cad972fb1bf742.png");

},
672113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799676-ceda8217705738dce6b55e7eb33b6ed3.png");

},
737955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479325-5409d5a0e715c0772d8c58c60cba2f0b.png");

},
339074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959326-fab4e77d0ced361918e553b7f420b4b4.png");

},
585450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439371-50eff08597d481339fb7b699dcacae98.png");

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