"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["678904"], {
39573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_button_annotation_scenario_button_annotation_md_3a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-button-annotation-scenario-button-annotation-md-3a2.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_button_annotation_scenario_button_annotation_md_3a2_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/scenario-button-annotation","title":"按钮标注场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/scenario-button-annotation.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"按钮标注场景","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-button-annotation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组合场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/"},"next":{"title":"插画/视频/动画的播报场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/scenario-button-annotation.md


const frontMatter = {
	title: '按钮标注场景',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-button-annotation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '按钮标注场景';

const assets = {

};



const toc = [{
  "value": "设计场景",
  "id": "设计场景",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "按钮标注场景",
        children: "按钮标注场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于用户可点击等操作的任何按钮，如果不是文本类控件，则须通过给出标注信息，包括用户自定义的控件中的虚拟按钮区域，否则可能会导致屏幕朗读用户无法完成对应的功能。此类控件在进行标注时，标注文本不要包含控件类型、“单指双击即可打开”之类的字符串，此部分指引由屏幕朗读根据控件类型、控件状态，并结合用户是否开启了“新手指引”自动追加朗读。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125005)/* ["default"] */.A) + "",
        width: "331",
        height: "85"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的代码片段中，您可以看到Image组件（它实际上是一个播放/暂停按钮），通过设置accessibilityText属性提供标注信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const RESOURCE_STR_PLAY = $r('app.media.play')\nconst RESOURCE_STR_PAUSE = $r('app.media.pause')\n\n@Entry\n@Component\nexport struct Rule_2_1_5 {\n  title: string = 'Rule 2.1.5'\n  @State isPlaying: boolean = false\n  play() {\n    // play audio file\n  }\n\n  pause() {\n    // pause playing of audio file\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Flex({\n          direction: FlexDirection.Column,\n          alignItems: ItemAlign.Center,\n          justifyContent: FlexAlign.Center,\n        }) {\n          Row() {\n            Image(this.isPlaying ? RESOURCE_STR_PAUSE : RESOURCE_STR_PLAY)\n              .width(50)\n              .height(50)\n              .onClick(() => {\n                this.isPlaying = !this.isPlaying\n                if (this.isPlaying) {\n                  this.play()\n                } else {\n                  this.pause()\n                }\n              })\n              .accessibilityRole(BUTTON_TYPE)\n              .accessibilityText(this.isPlaying ? 'Pause' : 'Play') // 设置注释信息\n            Text('Good_morning.mp3')\n              .margin({\n                left: 10\n              })\n          }\n        }\n        .width('100%')\n        .height('100%')\n        .backgroundColor(Color.White)\n      }\n    }\n    .title(this.title)\n  }\n}\n"
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
125005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957516-bcc70c9cfded2106faa17e4b9f2127f3.png");

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