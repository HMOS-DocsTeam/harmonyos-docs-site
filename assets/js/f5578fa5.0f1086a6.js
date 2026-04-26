"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["206033"], {
19041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_media_reading_scenario_media_reading_md_f55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-media-reading-scenario-media-reading-md-f55.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_media_reading_scenario_media_reading_md_f55_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/scenario-media-reading","title":"插画/视频/动画的播报场景","description":"开发实例1","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/scenario-media-reading.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"插画/视频/动画的播报场景","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-media-reading","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"按钮标注场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/"},"next":{"title":"内容动态变化场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/scenario-media-reading.md


const frontMatter = {
	title: '插画/视频/动画的播报场景',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-media-reading',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '插画/视频/动画的播报场景';

const assets = {

};



const toc = [{
  "value": "开发实例1",
  "id": "开发实例1",
  "level": 2
}, {
  "value": "开发实例2",
  "id": "开发实例2",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "插画视频动画的播报场景",
        children: "插画/视频/动画的播报场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例1",
      children: "开发实例1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图，插画信息有一定提示作用，插画和对应的功能介绍应该组合在一起，当焦点落到插画或者包含插画的符合控件时，需要朗读出对应的功能描述。建议插画和功能介绍作为一个组合使用一个焦点朗读。它可以借助“accessibilityGroup(true)”属性来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743622)/* ["default"] */.A) + "",
        width: "362",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Rule_2_1_6_1 {\n  title: string = 'Rule 2.1.6.1'\n  private description: string = 'gesture swipe left then up'\n\n  build() {\n    NavDestination() {\n      Column() {\n        Flex({\n          direction: FlexDirection.Column,\n          alignItems: ItemAlign.Center,\n          justifyContent: FlexAlign.Center,\n        }) {\n          Column() {\n            Image($r(\"app.media.gesture_swipe_left_then_up\"))\n              .width(220)\n              .height(220)\n            Text(this.description)\n              .fontSize(22)\n              .fontColor(Color.Red)\n              .fontWeight(FontWeight.Bold)\n              .textAlign(TextAlign.Center)\n          }.accessibilityGroup(true) // 将图像和文本合并为一个辅助功能对象\n        }\n        .width('100%')\n        .height('100%')\n        .backgroundColor(Color.White)\n      }\n    }\n    .title(this.title)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例2",
      children: "开发实例2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下List的每个Item，应该进行组合标注，从而给用户一个完整的提示信息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于列表/网格控件，控件中的每个项目默认需要一起标记。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列表/网格控件，每个item应提供item包含的元素的所有信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议朗读列表每一项的所有嵌套元素的组合信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(462873)/* ["default"] */.A) + "",
            width: "362",
            height: "296"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "它可以借助“accessibilityGroup(true)”属性来实现："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Preview\n@Component\nexport struct Rule_2_1_6_2 {\n  title: string = 'Rule 2.1.6.2'\n\n  build() {\n    NavDestination() {\n      Flex({\n        direction: FlexDirection.Column,\n        alignItems: ItemAlign.Center,\n        justifyContent: FlexAlign.Center,\n      }) {\n        Column() {\n          Item_2_1_6_3({\n            title: 'Video card',\n            subtitle: 'provided with options',\n            time: '1:23 hrs',\n            color: '#ffdee5ff'\n          })\n          Item_2_1_6_3({\n            title: 'Music card',\n            subtitle: 'sound feedback available',\n            time: '2:75 min',\n            color: '#92e1ffd8'\n          })\n          Item_2_1_6_3({\n            title: 'Live card',\n            subtitle: 'health support on request',\n            time: '10:55',\n            color: '#fff3deff'\n          })\n          Item_2_1_6_3({\n            title: 'Play card',\n            subtitle: 'play station tournament',\n            time: '5:12 hrs',\n            color: '#92e1ffd8'\n          })\n          Item_2_1_6_3({\n            title: 'Theater card',\n            subtitle: 'ticket on concert',\n            time: '2:75 min',\n            color: '#ffdee5ff'\n          })\n        }\n      }\n    }.title(this.title)\n  }\n}\n\n@Component\nexport struct Item_2_1_6_3 {\n  title: string = 'Video card'\n  subtitle: string = 'provided with additional options'\n  time: string = '1:23 hr'\n  color: ResourceColor = \"#80FAFAFA\"\n\n  build() {\n    Flex({\n      direction: FlexDirection.Row,\n      alignItems: ItemAlign.Center,\n      justifyContent: FlexAlign.SpaceBetween,\n    }) {\n      Column() {\n        Text(this.title)\n          .fontSize(22)\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Center)\n          .padding({ left: 20, right: 0 })\n        Text(this.subtitle)\n          .fontSize(14)\n          .fontColor(Color.Gray)\n          .fontWeight(FontWeight.Normal)\n          .textAlign(TextAlign.Center)\n          .padding({ left: 20, right: 0 })\n      }\n\n      Column() {\n        Text(this.time)\n          .fontSize(20)\n          .fontWeight(FontWeight.Normal)\n          .textAlign(TextAlign.Center)\n          .padding({ left: 10, right: 10 })\n      }\n\n      Column() {\n        Image($r(\"app.media.ic_arrow\")) // 此处为图片资源，请替换为本地图片\n          .width(28)\n          .height(28)\n          .fillColor(Color.Gray)\n      }.align(Alignment.End)\n\n    }\n    .width('90%')\n    .height(75)\n    .border({\n      width: 1,\n      color: '#FFC0C0C0',\n      radius: 8,\n      style: {\n        top: BorderStyle.Solid,\n      }\n    })\n    .backgroundColor(this.color)\n    .accessibilityGroup(true) // combines text and image into single object\n    .margin({ top: 10 })\n  }\n}\n"
          })
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
462873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797868-d5d771338409d4f86bea52de5c5fe40e.png");

},
743622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477517-2f1b94ec1da6027aae07c487e067decf.png");

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