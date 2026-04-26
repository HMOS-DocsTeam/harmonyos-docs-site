"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["829671"], {
160079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_vision_kit_guide_visionkit_personal_data_visionkit_personal_data_md_d43_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vision-kit-guide-visionkit-personal-data-visionkit-personal-data-md-d43.json
var site_docs_vision_kit_guide_visionkit_personal_data_visionkit_personal_data_md_d43_namespaceObject = JSON.parse('{"id":"vision-kit-guide/visionkit-personal-data/visionkit-personal-data","title":"个人数据处理说明","description":"此文档针对华为作为最终用户数据处理者，客户作为最终用户数据控制者的数据处理进行说明，包括：","source":"@site/docs/vision-kit-guide/visionkit-personal-data/visionkit-personal-data.md","sourceDirName":"vision-kit-guide/visionkit-personal-data","slug":"/vision-kit-guide/visionkit-personal-data/","permalink":"/harmonyos-docs-site/vision-kit-guide/visionkit-personal-data/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"个人数据处理说明","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/visionkit-personal-data","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AI识图","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-imageanalyzer/"},"next":{"title":"一次开发，多端部署文档路径调整","permalink":"/harmonyos-docs-site/multi-device-overview-path-change/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/vision-kit-guide/visionkit-personal-data/visionkit-personal-data.md


const frontMatter = {
	title: '个人数据处理说明',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/visionkit-personal-data',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '个人数据处理说明';

const assets = {

};



const toc = [{
  "value": "华为处理的个人数据清单",
  "id": "华为处理的个人数据清单",
  "level": 2
}, {
  "value": "指导开发者如何帮助最终用户实现对数据的控制",
  "id": "指导开发者如何帮助最终用户实现对数据的控制",
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
        id: "个人数据处理说明",
        children: "个人数据处理说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此文档针对华为作为最终用户数据处理者，客户作为最终用户数据控制者的数据处理进行说明，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为处理的个人数据清单；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指导开发者如何帮助最终用户实现对数据的控制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "华为处理的个人数据清单",
      children: "华为处理的个人数据清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后修改时间：2025/6/13"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "个人数据清单"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用目的"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存留期"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vision Kit各子能力API：场景化视觉服务通过对基础视觉服务的场景化封装，提供服务于某种场景的场景化能力，同时提供消费者层面一致的交互和开发者层面的控制API，使用场景化视觉服务需要开发者提供待处理的图片。具体为：  AI识图功能API：开发者提供图片，配合用户长按手势等操作，Vision Kit帮助开发者在应用内达成为消费者提供完成图片上主体提取、文字提取、物体识别的功能。其中主体提取部分包含基础的拖拽、复制、分享等功能，同时支持分割结果数据返回开发者做自身业务扩展，如站内以图搜图功能；文字提取部分包含基础的文本提取后的复制、分享、全选、翻译等基础功能，还包括识别文本中电话、邮箱、地址、网址、日程等实体，并提供基于实体的拨打电话、新建邮件、导航、打开网址、创建日程等快捷操作，同时支持提取的文本返回开发者做自身业务扩展，如站内搜索等；物体识别部分包含识别图片上动植物、建筑物等目标，并在目标物上进行图标标识，消费者用户可点击图标获取基于识别物的详细百科知识等扩展功能。  卡证识别控件API：在使用卡证识别功能的选图识别和相机识别过程中，用于读取或拍摄待识别的图片。  文档扫描控件API：在使用扫描功能的选图扫描和相机扫描过程中，用于读取或拍摄待扫描的图片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vision Kit各子能力API：场景化视觉服务通过对基础视觉服务的场景化封装，提供服务于某种场景的场景化能力，同时提供消费者层面一致的交互和开发者层面的控制API，使用场景化视觉服务需要提供待检测的视频。  活体检测控件API：在使用动作人脸活体检测功能过程中，用户配合采集、用于判断是真实活体还是非活体攻击的视频。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "传感器信息（光照传感器）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vision Kit各子能力API：  文档扫描控件API：光照传感器用于暗光下打开手电筒，为用户提供更清晰的文档图片，以上个人信息均在端侧使用。  卡证识别控件API：光照传感器用于暗光下打开手电筒，为用户提供更清晰的卡证图片，以上个人信息均在端侧使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备信息（设备型号）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "活体检测控件API：在使用动作人脸活体检测功能过程中，收集设备型号名称，用于功能优化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "活体检测控件API：在使用动作人脸活体检测功能过程中，用于相关UI界面的优化以及适配，为用户提供更好的体验。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指导开发者如何帮助最终用户实现对数据的控制",
      children: "指导开发者如何帮助最终用户实现对数据的控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云端不存储用户数据，由数据控制者面向最终用户提供相应的数据主体权利及其相关解释。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在您接入、使用Vision Kit服务前，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "我们要求您在隐私政策中向用户告知我们是如何处理其个人数据的，并获取用户同意或取得其他合法性基础"
        })
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