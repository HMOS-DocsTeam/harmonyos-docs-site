"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["862401"], {
739433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_skill_introduction_payment_skill_introduction_md_e42_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-skill-introduction-payment-skill-introduction-md-e42.json
var site_docs_payment_kit_guide_payment_skill_introduction_payment_skill_introduction_md_e42_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-skill-introduction/payment-skill-introduction","title":"接入Skill能力说明","description":"鸿蒙支付服务接入Skill是一套面向开发者/外部商户接入的能力，基于Payment Kit文档沉淀标准流程与关键校验点，将“文档阅读”转化为“任务清单执行”，帮助开发者更快完成接入闭环并降低上线风险。","source":"@site/docs/payment-kit-guide/payment-skill-introduction/payment-skill-introduction.md","sourceDirName":"payment-kit-guide/payment-skill-introduction","slug":"/payment-kit-guide/payment-skill-introduction/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-skill-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"接入Skill能力说明","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-skill-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入规范学习","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-access-specifications/"},"next":{"title":"收银台设计规范","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-cashier-design/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-skill-introduction/payment-skill-introduction.md


const frontMatter = {
	title: '接入Skill能力说明',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-skill-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '接入Skill能力说明';

const assets = {

};



const toc = [{
  "value": "能力覆盖范围",
  "id": "能力覆盖范围",
  "level": 2
}, {
  "value": "使用方式",
  "id": "使用方式",
  "level": 2
}, {
  "value": "在工具里触发Skill的使用",
  "id": "在工具里触发skill的使用",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "声明",
  "id": "声明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接入skill能力说明",
        children: "接入Skill能力说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鸿蒙支付服务接入Skill是一套面向开发者/外部商户接入的能力，基于Payment Kit文档沉淀标准流程与关键校验点，将“文档阅读”转化为“任务清单执行”，帮助开发者更快完成接入闭环并降低上线风险。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入Skill能力可获得："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标准接入路径：基础支付最小闭环，从预下单到拉起收银台到回调处理一步到位"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关键安全内置：签名规则、SM2回调验签、先验签后入库、私钥保护等红线控制"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "稳定性保障：回调3秒响应要求、重试处理与幂等策略、上线切换检查清单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排障提效：应用端和服务端错误码定位路径与修复建议"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力覆盖范围",
      children: "能力覆盖范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础支付（直连/平台/服务商通用接入逻辑）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调验签（SM2）与幂等处理方法"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "沙盒联调指导与生产环境切换检查清单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "常见错误码排障（应用端/服务端）"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方式",
      children: "使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java/tree/master/skills",
        children: "下载Skill技能"
      }), "，把Skill放到AI编码工具的skills目录，工具就能在对话中自动或按需使用它。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在工具里触发skill的使用",
      children: "在工具里触发Skill的使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在对话中出现这些关键词时会更容易触发："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "鸿蒙支付服务接入/Payment Kit/预下单/orderStr/回调验签/幂等/错误码。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以直接这样提问以“强制触发”："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用huawei-payment-integrationSkill，给出基础支付最小闭环接入清单。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用该Skill帮忙设计回调SM2验签与幂等方案，并给出验收点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私钥严禁出现在客户端、日志、公共仓库"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调必须先验签再更新订单状态"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不以客户端返回作为最终交易结果依据"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生产上线前务必完成回调幂等与压测验证"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明",
      children: "声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保障平台及开发者双方的合法权益，特此声明如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "代码生成责任：我方不对生成代码的正确性、安全性做任何担保。使用本Skill文档自动生成的代码，开发者在使用过程中应自行审核、测试并确保其适用性与准确性。因代码错误、不兼容或使用不当所引发的任何直接或间接损失，包括但不限于经济损失、数据丢失、系统故障等，均由开发者自行承担全部责任。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "平台免责：开发者应自行选择合法合规的AI工具，严格遵循所选AI工具的版权规定及使用规范。我们不对因使用本Skill文档生成的代码所导致的任何问题承担责任，包括但不限于法律纠纷、第三方索赔、系统运行异常等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用前提：开发者在使用本Skill文档前，应充分理解并接受其使用风险，建议在正式上线前进行充分测试与验证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "合规提示：开发者应确保其使用行为符合相关法律法规及行业规范，平台不对开发者的行为合法性进行担保或审查。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "版权声明：本Skill文档的版权归属我方所有，开发者不得擅自篡改、传播、转售、出租本文档，不得用于与接入鸿蒙支付服务无关的其他用途。如开发者存在前述违规使用行为，我方有权追究法律责任。"
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