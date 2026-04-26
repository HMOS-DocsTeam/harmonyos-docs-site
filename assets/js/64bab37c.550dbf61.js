"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["632002"], {
785022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_preview_kit_guide_preview_introduction_preview_introduction_md_64b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-preview-kit-guide-preview-introduction-preview-introduction-md-64b.json
var site_docs_preview_kit_guide_preview_introduction_preview_introduction_md_64b_namespaceObject = JSON.parse('{"id":"preview-kit-guide/preview-introduction/preview-introduction","title":"Preview Kit简介","description":"Preview Kit（文件预览服务）为应用提供便捷的文件快速预览和文件打开加速能力。","source":"@site/docs/preview-kit-guide/preview-introduction/preview-introduction.md","sourceDirName":"preview-kit-guide/preview-introduction","slug":"/preview-kit-guide/preview-introduction/","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Preview Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PDF文档支持在线预览吗？","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-faq/pdf-faq-4-online-preview/"},"next":{"title":"文件预览","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-filepreview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/preview-kit-guide/preview-introduction/preview-introduction.md


const frontMatter = {
	title: 'Preview Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Preview Kit简介';

const assets = {

};



const toc = [{
  "value": "文件预览场景介绍",
  "id": "文件预览场景介绍",
  "level": 2
}, {
  "value": "文件打开加速场景介绍",
  "id": "文件打开加速场景介绍",
  "level": 2
}, {
  "value": "通用文件缓存加速场景介绍",
  "id": "通用文件缓存加速场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家和地区",
  "id": "支持的国家和地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持的情况",
  "id": "模拟器支持的情况",
  "level": 2
}, {
  "value": "文件预览支持的文件类型",
  "id": "文件预览支持的文件类型",
  "level": 2
}, {
  "value": "文件打开加速支持的文件类型",
  "id": "文件打开加速支持的文件类型",
  "level": 2
}, {
  "value": "文件预览基本概念",
  "id": "文件预览基本概念",
  "level": 2
}, {
  "value": "通用文件缓存加速基本概念",
  "id": "通用文件缓存加速基本概念",
  "level": 2
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
    p: "p",
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
        id: "preview-kit简介",
        children: "Preview Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preview Kit（文件预览服务）为应用提供便捷的文件快速预览和文件打开加速能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过Preview Kit提供的预览API，快速启动预览界面，实现对各类文件的预览。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Preview Kit，用户可以对用户文件（包括图片、视频、音频、文本、html等）进行内容查看。同时用户还可以通过点击右上角的“使用其他应用打开”的按钮跳转到具体的应用进行展示，从而进行其他操作，如图片的旋转、放大等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前，Preview Kit实现Office的预览能力，主要是借助WPS的能力实现的，预览界面会有WPS提供的技术支持，并展示WPS的入口，统一按照文件预览的风格进行页面布局。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Preview Kit还提供了文件打开加速功能，通常用户打开一个较大文件通常要花费几秒甚至十几秒，文件打开加速服务提供了预加载机制提前加载文件，缩短用户打开文件时间，给用户提供流畅顺滑的爽感体验。详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/preview-kit-guide/preview-openfileboost",
            children: "文件打开加速功能"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Preview Kit还提供了通用文件缓存加速功能，通常用户打开或浏览一个文件时，应用需要对文件中的图片、视频等内容进行解码，花费较长时间，通用文件缓存加速功能提供了缓存机制将解码数据缓存到磁盘中，后续用户再次打开或浏览该文件，应用无需执行解码流程，可直接从磁盘中获取缓存的解码数据，省去耗时的解码时间，缩短用户打开或浏览文件的时间，给用户提供极致流畅的体验。详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-filecacheboost",
            children: "通用文件缓存加速功能"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件预览场景介绍",
      children: "文件预览场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preview Kit能够对图片、视频、音频、文本、html进行预览查看，满足绝大多数办公开发的需求，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预览展示：呈现文件的基本内容，如文本、图片等，支持选中多文件，在预览列表切换显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件分享：将文件以分享的形式传给另一个软件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用其他软件打开：使用预览打开时，会获取到该文件类型的默认打开软件，然后点击“使用其他应用打开”进行跳转。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图片翻转放大：在非2in1设备时，预览能够对图片进行旋转放大等处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件打开加速场景介绍",
      children: "文件打开加速场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文档类应用接入后，文件打开加速服务会根据算法推荐用户可能打开的文件信息给应用，应用可提前在后台对文件进行预加载， 一旦用户打开已经预加载的文件，则整个打开过程可以在很短时间内完成。给用户提供顺滑流畅的文件打开体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用文件缓存加速场景介绍",
      children: "通用文件缓存加速场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过文件缓存服务，应用在打开或浏览文件时，文件缓存服务会创建一个以key为索引名的缓存文件，用于存放缓存数据，系统会对应用所有的缓存做持久化管理。应用再次打开或浏览文件时，需先用key值查找是否有对应的缓存，如果命中，则直接从磁盘中读取缓存数据，无需重复计算解码，大大减少了重复解码时间，给用户提供顺滑流畅的文件打开及浏览体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家和地区",
      children: "支持的国家和地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前Preview Kit仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件预览功能支持华为Phone、Tablet和2in1，文件打开加速功能仅支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持的情况",
      children: "模拟器支持的情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器的文件预览功能不支持.pdf/.pptx/.xlsx/.docx等文档类文件格式的预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持文件打开加速功能和通用文件缓存加速功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件预览支持的文件类型",
      children: "文件预览支持的文件类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Preview Kit支持图片、视频、音频、文本、html进行查看，表中提供的为常见的部分格式类型，实际支持情况可采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/preview-api/preview-api-reference/preview-arkts/preview-arkts#canpreview",
        children: "canPreview"
      }), "接口进行判断文件是否支持预览。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "文件后缀"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mimeType类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "txt、cpp、c、h、java、xhtml、xml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain、text/x-c++src、text/x-csrc、text/x-chdr、text/x-java、application/xhtml+xml、text/xml"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网页"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "html、htm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text/html"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jpg、png、gif、webp、bmp、svg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image/jpeg、image/png、image/gif、image/webp、image/bmp、image/svg+xml"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m4a、aac、mp3、ogg、wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mp4a-latm、audio/aac、audio/mpeg、audio/ogg、audio/x-wav"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mp4、mkv、ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "video/mp4、video/x-matroska、video/mp2ts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文件夹"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文档"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/pdf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Office文档"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "doc、docx、xls、xlsx、ppt、pptx、csv、ofd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application/msword、application/vnd.openxmlformats-officedocument.wordprocessingml.document、application/vnd.ms-excel、application/vnd.openxmlformats-officedocument.spreadsheetml.sheet、application/vnd.ms-powerpoint、application/vnd.openxmlformats-officedocument.presentationml.presentation、text/csv、general.ofd"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件打开加速支持的文件类型",
      children: "文件打开加速支持的文件类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后缀为doc、docx、xls、xlsx、ppt、pptx的文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件预览基本概念",
      children: "文件预览基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446878)/* ["default"] */.A) + "",
        width: "528",
        height: "710"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模态窗：和父窗口绑定，模态窗存在时父窗口不可移动，不可操作，模态窗永远置于父窗口前面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用窗：应用窗口，可以通过AMS启动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AMS：AbilityManagerService，用于协调各Ability运行关系、及对生命周期进行调度的系统服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用文件缓存加速基本概念",
      children: "通用文件缓存加速基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在通用文件缓存加速服务中，Key值是每个缓存文件对象的唯一标识符，用于管理缓存数据。Key值可以通过哈希算法计算文件内容得到，例如可以将一张图片进行SHA-256哈希运算，得到的哈希值作为该图片缓存对象的Key值。"
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
446878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439151-d4ecbe9bed478b6452fd6b878dc1733e.png");

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