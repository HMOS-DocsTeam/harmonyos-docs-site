"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["461654"], {
552033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_natural_language_kit_guide_natural_language_getentity_natural_language_getentity_md_517_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-natural-language-kit-guide-natural-language-getentity-natural-language-getentity-md-517.json
var site_docs_natural_language_kit_guide_natural_language_getentity_natural_language_getentity_md_517_namespaceObject = JSON.parse('{"id":"natural-language-kit-guide/natural-language-getentity/natural-language-getentity","title":"实体抽取","description":"适用场景","source":"@site/docs/natural-language-kit-guide/natural-language-getentity/natural-language-getentity.md","sourceDirName":"natural-language-kit-guide/natural-language-getentity","slug":"/natural-language-kit-guide/natural-language-getentity/","permalink":"/harmonyos-docs-site/natural-language-kit-guide/natural-language-getentity/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"实体抽取","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/natural-language-getentity","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分词","permalink":"/harmonyos-docs-site/natural-language-kit-guide/natural-language-getwordsegmentation/"},"next":{"title":"Neural Network Runtime Kit简介","permalink":"/harmonyos-docs-site/neural-network-runtime-kit/neural-network-runtime-kit-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/natural-language-kit-guide/natural-language-getentity/natural-language-getentity.md


const frontMatter = {
	title: '实体抽取',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/natural-language-getentity',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '实体抽取';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实体抽取",
        children: "实体抽取"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实体抽取是自然语言处理服务的一项关键能力。通过综合分析上下文信息，从文本中准确识别出多种类型的实体："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日期时间（DATETIME）：提取文本中的具体日期，如“2024年6月18日”等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "电子邮件（EMAIL）：识别文本中的电子邮件地址，如“***@example.com”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "快递单号（EXPRESS_NO）：抽取文本中的快递单号信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "航班号（FLIGHT_NO）：定位文本中的航班号，如“CA1234”等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "地址（LOCATION）：从文本中提取详细的地址描述。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人名（NAME）：找出文本中出现的人名信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机号（PHONE_NO）：识别文本中的手机号码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网址（URL）：抽取文本中的网址链接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证码（VERIFICATION_CODE）：定位文本中的验证码数字。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "身份证号（ID_NO）：识别文本中的身份证号码信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过准确抽取以上多种类型的实体信息，该项能力可以广泛应用于新闻阅读、信息检索、客户服务、社交聊天、金融运营等多种场景。例如，在新闻阅读场景中，可以对新闻正文进行实体抽取，并对人名、地名、时间、网址等关键实体信息进行高亮标识，帮助读者快速获取文章要点；在客服场景，通过抽取用户留言中的手机号、快递单号、验证码等信息，客服人员能够更高效地定位问题并给出解决方案。实体抽取为各行业的智能化应用提供了坚实的基础支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力当前不支持模拟器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AI能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "约束"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实体抽取"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的语言：简体中文、英文、繁体中文。  - 支持的实体：时间、地点、邮箱、快递单号、航班号、人名、电话号码、网址链接、验证码、证件号。  - 文本长度：不超过1000字符。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用实体抽取功能时，将实现实体抽取的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { textProcessing, EntityType } from '@kit.NaturalLanguageKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置输入文本框。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private inputText: string = '张三的电话号码是12345';\n@State outputText: string = '';\n\nTextInput({ placeholder: '请输入文本', text: this.inputText })\n  .height(40)\n  .fontSize(16)\n  .width('90%')\n  .margin(10)\n  .onChange((value: string) => {\n    this.inputText = value;\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置按钮，调用实体抽取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/natural-language-api/natural-language-arkts/natural-language-text-processing-api/natural-language-text-processing-api#textprocessinggetentity",
            children: "textProcessing.getEntity"
          }), "接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('获取实体结果')\n  .type(ButtonType.Capsule)\n  .fontColor(Color.White)\n  .width('45%')\n  .margin(10)\n  .onClick(async () => {\n    try {\n      let result = await textProcessing.getEntity(this.inputText, {entityTypes: [EntityType.NAME, EntityType.PHONE_NO]});\n      this.outputText = this.formatEntityResult(result);\n    } catch (err) {\n      console.error(`getEntity errorCode: ${err.code}, errorMessage: ${err.message}`);\n      this.outputText = 'Error occurred while getting entities.';\n    }\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在界面上展示实体抽取结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private formatEntityResult(entities: textProcessing.Entity[]): string {\n  if (!entities || !entities.length) {\n    return 'No entities found.';\n  }\n\n  let output = 'Entities:\\n';\n  for (let i = 0; i < entities.length; i++) {\n    let entity = entities[i];\n    output += `Entity[${i}]:\\n`;\n    output += `  oriText: ${entity.text}\\n`;\n    output += `  charOffset: ${entity.charOffset}\\n`;\n    output += `  entityType: ${entity.type}\\n`;\n    output += `  jsonObject: ${entity.jsonObject}\\n\\n`;\n  }\n  return output;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { textProcessing, EntityType } from '@kit.NaturalLanguageKit';\n\n@Entry\n@Component\nstruct Index {\n  private inputText: string = '张三的电话号码是12345';\n  @State outputText: string = '';\n\n  build() {\n    Column() {\n      TextInput({ placeholder: '请输入文本', text: this.inputText })\n        .height(40)\n        .fontSize(16)\n        .width('90%')\n        .margin(10)\n        .onChange((value: string) => {\n          this.inputText = value;\n        })\n\n      Scroll() {\n        Text(this.outputText)\n          .fontSize(16)\n          .width('90%')\n          .margin(10)\n      }\n      .height('40%')\n\n      // 调用实体抽取接口\n      Row() {\n        Button('获取实体结果')\n          .type(ButtonType.Capsule)\n          .fontColor(Color.White)\n          .width('45%')\n          .margin(10)\n          .onClick(async () => {\n            try {\n              let result = await textProcessing.getEntity(this.inputText, {entityTypes: [EntityType.NAME, EntityType.PHONE_NO]});\n              this.outputText = this.formatEntityResult(result);\n            } catch (err) {\n              console.error(`getEntity errorCode: ${err.code}, errorMessage: ${err.message}`);\n              this.outputText = 'Error occurred while getting entities.';\n            }\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  // 实体结果转义\n  private formatEntityResult(entities: textProcessing.Entity[]): string {\n    if (!entities || !entities.length) {\n      return 'No entities found.';\n    }\n\n    let output = 'Entities:\\n';\n    for (let i = 0; i < entities.length; i++) {\n      let entity = entities[i];\n      output += `Entity[${i}]:\\n`;\n      output += `  oriText: ${entity.text}\\n`;\n      output += `  charOffset: ${entity.charOffset}\\n`;\n      output += `  entityType: ${entity.type}\\n`;\n      output += `  jsonObject: ${entity.jsonObject}\\n\\n`;\n    }\n    return output;\n  }\n}\n"
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