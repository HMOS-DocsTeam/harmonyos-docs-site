"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["862195"], {
915307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_decorator_intents_skill_all_rec_specification_intents_skill_all_rec_specification_md_537_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-skill-all-rec-intents-skill-all-rec-access-programme-intents-skill-all-rec-decorator-intents-skill-all-rec-specification-intents-skill-all-rec-specification-md-537.json
var site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_decorator_intents_skill_all_rec_specification_intents_skill_all_rec_specification_md_537_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification/intents-skill-all-rec-specification","title":"自定义意图相关信息定义规范","description":"Intents Kit支持开发者自定义意图，开发者可通过在其代码上添加自然语言装饰器接入，装饰器中相关信息建议参考以下规范，以便于大模型更好的理解和分发调用。","source":"@site/docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification/intents-skill-all-rec-specification.md","sourceDirName":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification","slug":"/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"自定义意图相关信息定义规范","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-specification","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于函数的装饰器方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-function/"},"next":{"title":"功能一步达场景方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification/intents-skill-all-rec-specification.md


const frontMatter = {
	title: '自定义意图相关信息定义规范',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-specification',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义意图相关信息定义规范';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义意图相关信息定义规范",
        children: "自定义意图相关信息定义规范"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intents Kit支持开发者自定义意图，开发者可通过在其代码上添加自然语言装饰器接入，装饰器中相关信息建议参考以下规范，以便于大模型更好的理解和分发调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "意图名称"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "意图名称应当遵循动词+名词的结构，命名风格通常使用大写字母开头的驼峰式命名法。命名应精准反映意图的核心功能，不宜过长（最大长度：64）或模糊。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "形式：动词+名词，采用驼峰命名，如CancelAlarm、CheckWeather、CreateReminder等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "逻辑：意图名应直接描述该意图的操作行为，看到意图名称即可推测出意图功能，且避免使用模棱两可的词汇。例如，SwitchRoute本意是切换导航路线，但SwitchRoute也有切换路由的意思，可以改为SwitchNavigationRoute。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "意图描述"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "准确全面性：确保描述涵盖意图的全部功能，避免遗漏可能的功能点。例如，SendEmail意图的描述应明确指出其能发送邮件的能力，包括发送文本和附件功能。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "边界性（功能解耦）：意图必须有清晰的功能边界，避免与其他意图功能重叠或模糊，比如 ShareFile不能通过邮件分享。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "独立性：一个意图应只做一件事，如果功能可以拆解，应拆分为多个意图，每个意图各司其职。这样有助于保持结构简洁，功能独立，便于大语言模型的正确理解与使用。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "备注：意图描述中可以增加使用示例，举例说明使用者可以如何使用，更有利于大模型理解和分发调用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数命名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参数命名应简洁且语义明确，采用小驼峰命名法，确保参数名能够直观反映其功能。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "语义明确：可简洁明了的看出参数用途。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数定义"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参数定义包含参数的功能描述、参数类型（type）、必须参数（required）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "功能描述：需详细描述每个参数的含义及其对意图功能的影响，每个参数应仅负责一个功能，避免单一参数混合多种用途。例如，modifyAttribute参数，不能同时具有修改属性和属性值的含义。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "参数类型（type）：定义参数的类型，如string、int、array等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "必须参数（required）：定位意图的必须参数，使用某一意图时必须指定的参数。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以购买电影票为例，使用基于Link的装饰器来进行意图声明，实现的功能为通过deepLink的方式来拉起电影票购买页面，包含影院，影片名，时间三个自定义参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentLink, LinkParamCategory } from \"@ohos.app.ability.InsightIntentDecorator\";\nimport { url } from \"@kit.ArkTS\";\n\n@InsightIntentLink({\n  intentName: 'PurchaseMovieTickets',\n  domain: 'PurchaseTickets',\n  intentVersion: '1.0.1',\n  displayName: '购买电影票',\n  llmDescription: '用于在线购买电影票，允许用户选择指定影院、电影和场次时间进行购票。在用户明确表达购票需求，且已提供所有必要信息（cinema, film, time）时使用。如果信息不全或者用户只是查询电影信息、放映时间或票价，不应调用此工具。',\n  uri: 'decorator://ability.entry/main',\n  parameters: {\n    \"type\": \"object\",\n    \"properties\": {\n      \"cinema\": {\n        \"type\": \"string\",\n        \"description\": \"目标影院名称，仅支持平台合作的影院\"\n      },\n      \"film\": {\n        \"type\": \"string\",\n        \"description\": \"目标电影名称，需为当前上映或即将上映且在影院排片列表中的电影\"\n      },\n      \"time\": {\n        \"type\": \"string\",\n        \"description\": \"放映时间，必须为未来的场次，且需为影院当天有效排片时间；时间格式应为'YYYY-MM-DD HH:MM'（例如'2025-07-01 19:30'）\"\n      }\n    },\n    \"required\": [\"cinema\", \"film\", \"time\"]\n  },\n  paramMappings:[\n    {\n      paramName: 'cinema',\n      paramMappingName: 'location',\n      paramCategory: LinkParamCategory.LINK\n    },\n    {\n      paramName: 'film',\n      paramMappingName: 'title',\n      paramCategory: LinkParamCategory.LINK\n    },\n    {\n      paramName: 'time',\n      paramMappingName: 'time',\n      paramCategory: LinkParamCategory.LINK\n    }\n  ]\n})\nexport class PurchaseMovieTicketsLinkIntent {\n   private purchaseMovieTickets(uri: string): void {\n     // 从want中获取传入的链接信息。\n     // 如传入的url为：decorator://ability.entry/main?location=XXX影城&title=XXX&time=2025.06.01\n     let urlObject = url.URL.parseURL(uri);\n     let location = urlObject.params.get('location');\n     if (location === \"XXX影城\") {\n       // ...\n     }\n   }\n }\n"
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