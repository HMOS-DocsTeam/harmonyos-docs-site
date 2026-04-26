"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["516720"], {
65616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_introduction_reader_introduction_md_846_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-introduction-reader-introduction-md-846.json
var site_docs_reader_kit_guide_reader_introduction_reader_introduction_md_846_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-introduction/reader-introduction","title":"Reader Kit简介","description":"Reader Kit（阅读服务）为开发者提供多种格式电子书的解析、排版、阅读交互能力，开发者可以借助Reader Kit的能力和组件快速构建书籍阅读能力。","source":"@site/docs/reader-kit-guide/reader-introduction/reader-introduction.md","sourceDirName":"reader-kit-guide/reader-introduction","slug":"/reader-kit-guide/reader-introduction/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Reader Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/push-kit-guide/push-appendix/push-country/"},"next":{"title":"获取书籍信息","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-parser/reader-book-info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-introduction/reader-introduction.md


const frontMatter = {
	title: 'Reader Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Reader Kit简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "设备限制",
  "id": "设备限制",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "reader-kit简介",
        children: "Reader Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reader Kit（阅读服务）为开发者提供多种格式电子书的解析、排版、阅读交互能力，开发者可以借助Reader Kit的能力和组件快速构建书籍阅读能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reader Kit提供的能力如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多种格式书籍的解析能力：提供对txt、epub、mobi、azw、azw3格式书籍进行解析的能力，可获取书籍中的书名、作者、书封、目录以及目录对应的正文内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "txt、富文本内容排版能力：支持对标准的txt、富文本内容（html+css）按仿真和横滑方式进行分页排版，并提供排版快照和排版信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "阅读页组件（ReadPageComponent）：支持对书籍排版内容的显示、多种翻页交互和翻页动效，以及翻页阅读过程中阅读器所需要的进度、行为感知能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持多种电子书籍格式解析，提供标准规范的书籍信息和内容数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对富文本内容（html+css）的排版符合W3C标准规范，且对排版过程做了高效的算法优化，提高了排版速度和效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对内容进行展示时，除了支持系统字体之外，还支持扩展自定义字体，满足用户的个性化需求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "阅读页组件（ReadPageComponent）提供常用的阅读交互能力，支持多种翻页方式，采用OpenGL（C/C++）绘制翻页动效，阅读过程更丝滑，更流畅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ReadPageComponent"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Reader Kit封装的阅读页UI组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/reader-api/reader-api-component/reader-api-readpagecomponent/reader-api-readpagecomponent",
            children: "ReadPageComponent"
          }), "（ets），支持对书籍排版内容的显示、多种翻页交互和翻页动效，以及翻页阅读过程中阅读器所需要的进度、行为感知能力。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BookParser"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["电子书解析引擎", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser",
            children: "bookParser"
          }), "，支持txt、epub、mobi、azw、azw3格式书籍文件的解析。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "spine(书脊)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["书的背脊；平装书或精装书封面和封底的联结处。一般印有书名、作者名、出版单位名等。在Reader Kit中，spine(书脊)定义了书籍内容的阅读顺序，每一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#spineitem",
            children: "SpineItem"
          }), "表示一个可阅读的内容节点，标识着可阅读的一个内容资源。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在书籍处理过程中，Reader Kit只支持有本地文件的书籍，不支持在线的文件流，且不同的书籍文件需要存放在应用沙箱下的不同目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在书籍处理过程中，Reader Kit不提供对书籍的DRM保护能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析能力只支持对txt、epub、mobi、azw、azw3标准格式的书籍文件进行解析，对于非标准格式的书籍在解析时可能会抛出异常，开发者需要捕获和处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排版引擎及交互能力需要配套Reader Kit的阅读页组件（ReadPageComponent）使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备限制",
      children: "设备限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reader Kit仅适用于HarmonyOS NEXT 5.0.4及以上版本的Phone、PC/2in1、Tablet设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reader Kit当前仅在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reader Kit开发指南涉及到的示例代码均为片段，全量示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_NEXT-ReaderKit",
        children: "CodeLabs"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/readerkit_samplecode_arkts",
        children: "SampleCode"
      }), "。CodeLabs和SampleCode包括了导入本地书籍、构建阅读器、构建目录列表、修改阅读设置等场景的完整实践示例，可帮助开发者更好地使用Reader Kit API。"]
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