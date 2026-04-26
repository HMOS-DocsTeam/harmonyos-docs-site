"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["806378"], {
167629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_security_privacy_experience_standards_standard_security_privacy_overview_standard_security_privacy_overview_md_966_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-security-privacy-experience-standards-standard-security-privacy-overview-standard-security-privacy-overview-md-966.json
var site_docs_security_privacy_experience_standards_standard_security_privacy_overview_standard_security_privacy_overview_md_966_namespaceObject = JSON.parse('{"id":"security-privacy-experience-standards/standard-security-privacy-overview/standard-security-privacy-overview","title":"概述","description":"背景及目的","source":"@site/docs/security-privacy-experience-standards/standard-security-privacy-overview/standard-security-privacy-overview.md","sourceDirName":"security-privacy-experience-standards/standard-security-privacy-overview","slug":"/security-privacy-experience-standards/standard-security-privacy-overview/","permalink":"/harmonyos-docs-site/security-privacy-experience-standards/standard-security-privacy-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/standard-security-privacy-overview","kit":"experience","last_updated":"2026-04-16"},"sidebar":"docs","previous":{"title":"前台资源使用","permalink":"/harmonyos-docs-site/app-power-experience-standards/standard-foreground-power/standard-foreground-resource/"},"next":{"title":"组件安全","permalink":"/harmonyos-docs-site/security-privacy-experience-standards/standard-security/standard-security-base/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/security-privacy-experience-standards/standard-security-privacy-overview/standard-security-privacy-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/standard-security-privacy-overview',
	kit: 'experience',
	last_updated: '2026-04-16'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "背景及目的",
  "id": "背景及目的",
  "level": 2
}, {
  "value": "适用范围",
  "id": "适用范围",
  "level": 2
}, {
  "value": "术语",
  "id": "术语",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "背景及目的",
      children: "背景及目的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本标准旨在提升应用的用户体验，规范应用全生命周期的安全、隐私行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用范围",
      children: "适用范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本标准适用于应用的设计、开发及检测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "术语",
      children: "术语"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "个人数据"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与一个身份已被识别或者身份可被识别的自然人（“数据主体”）相关的任何信息。身份可识别的自然人是指其身份可以通过诸如姓名、身份证号、位置数据等识别码或者通过一个或多个与自然人的身体、生理、精神、经济、文化或者社会身份相关的特定因素来直接或者间接地被识别。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "个人数据包括：自然人的email地址、电话号码、生物特征（指纹）、位置数据、IP地址、医疗信息、宗教信仰、社保号、婚姻状态等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "敏感个人数据"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "敏感个人数据是个人数据的一个重要子集，指的是涉及数据主体的最私密领域的信息或者一旦泄露可能会给数据主体造成重大不利影响的数据。欧盟等国家和地区法律定义的敏感个人数据包括种族、政治观点、宗教和哲学信仰、工会成员资格、基因数据、生物信息、健康和性生活状况、性取向等。根据业界最佳实践，敏感个人数据还包括可与自然人身份相关联的银行卡号、身份证号、护照号、口令等。敏感个人数据的处理需要更多更严格的保护措施。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "信任边界"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "信任边界是指一个系统或网络中被认为是可信的边界或界限，是一个安全域与另外一个安全区域之间的边界，边界的划分通常是以物理隔离、权限变化等维度划分。"
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