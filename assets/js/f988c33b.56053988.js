"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["405710"], {
98700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_scene_experience_intents_skill_all_rec_scene_experience_md_f98_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-skill-all-rec-intents-skill-all-rec-scene-experience-intents-skill-all-rec-scene-experience-md-f98.json
var site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_scene_experience_intents_skill_all_rec_scene_experience_md_f98_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-scene-experience/intents-skill-all-rec-scene-experience","title":"场景体验","description":"用户通过小艺对话进行自然语言输入实现服务闭环和内容查询。主要场景分为两大类：任务执行和功能一步达。其中任务执行体验又分为两种：功能服务类和信息交互类。","source":"@site/docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-scene-experience/intents-skill-all-rec-scene-experience.md","sourceDirName":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-scene-experience","slug":"/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-scene-experience/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-scene-experience/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"场景体验","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-scene-experience","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-introduction/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-access-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-scene-experience/intents-skill-all-rec-scene-experience.md


const frontMatter = {
	title: '场景体验',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-scene-experience',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '场景体验';

const assets = {

};



const toc = [{
  "value": "典型场景",
  "id": "典型场景",
  "level": 2
}, {
  "value": "功能服务类",
  "id": "功能服务类",
  "level": 3
}, {
  "value": "信息交互类",
  "id": "信息交互类",
  "level": 3
}, {
  "value": "功能一步达",
  "id": "功能一步达",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "场景体验",
        children: "场景体验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户通过小艺对话进行自然语言输入实现服务闭环和内容查询。主要场景分为两大类：任务执行和功能一步达。其中任务执行体验又分为两种：功能服务类和信息交互类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "任务执行："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "功能服务类：端侧意图调用直接进入应用或元服务对应意图功能服务页面，可携带业务参数。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["信息交互类：端侧或云侧意图调用进行内容查询后展示，用户点击进行端侧意图调用闭环（此场景请发送邮件至“", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:hagservice@huawei.com",
              children: "hagservice@huawei.com"
            }), "”邮箱申请接入）。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "功能一步达：端侧意图调用直接进入应用功能页面，无需其他业务参数，开发者可自定义批量声明接入。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能服务类",
      children: "功能服务类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跳转页面不带参数场景。例如查询交易明细：语音对话输入“查询XX银行卡交易明细”，即跳转至对应App落地页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跳转页面带参数场景。例如用XX应用打车：语音对话输入“用xx应用打车去xx商场”，即可跳转对应打车页面并填入提取的地址信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能执行并展示窗口化界面。例如操控蓝牙开关：语音对话输入“打开蓝牙”，即可弹窗蓝牙设置窗口，并执行打开蓝牙开关操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "信息交互类",
      children: "信息交互类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内容展示场景。例如查找菜谱：语音对话输入“鱼香肉丝怎么做”，即可搜索到对应的菜谱。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能履约场景。例如订电影票：语音对话输入“买两张今天的电影票，xxx电影”，即可进行电影票购买选座。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能一步达",
      children: "功能一步达"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者将应用内的功能声明接入意图框架后，用户可以通过小艺直接打开相应功能页面，比如“打开XX视频的会员中心”，可直接拉起对应页面，实现一步直达。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78669)/* ["default"] */.A) + "",
        width: "3180",
        height: "2652"
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
78669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479319-4de21131340c63d4268f690f69f81626.png");

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