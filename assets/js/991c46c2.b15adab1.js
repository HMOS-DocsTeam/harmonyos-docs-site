"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["880637"], {
491270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_ui_design_i_18_n_ui_design_md_991_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-ui-design-i-18-n-ui-design-md-991.json
var site_docs_localization_kit_i_18_n_i_18_n_ui_design_i_18_n_ui_design_md_991_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-ui-design/i18n-ui-design","title":"国际化界面设计","description":"一套有效的国际化界面布局设计规则，既可以树立产品在国际化设计中产品调性，还可以保证操作的一致性，遵循以下设计规则可有效提升应用全球化质量。","source":"@site/docs/localization-kit/i18n/i18n-ui-design/i18n-ui-design.md","sourceDirName":"localization-kit/i18n/i18n-ui-design","slug":"/localization-kit/i18n/i18n-ui-design/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-ui-design/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"国际化界面设计","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-ui-design","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"国际化和本地化概述","permalink":"/harmonyos-docs-site/localization-kit/i18n-l10n/"},"next":{"title":"区域ID与文化习惯划分","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-locale-culture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-ui-design/i18n-ui-design.md


const frontMatter = {
	title: '国际化界面设计',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-ui-design',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '国际化界面设计';

const assets = {

};



const toc = [{
  "value": "界面空间预留与灵活布局",
  "id": "界面空间预留与灵活布局",
  "level": 2
}, {
  "value": "界面镜像",
  "id": "界面镜像",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "国际化界面设计",
        children: "国际化界面设计"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一套有效的国际化界面布局设计规则，既可以树立产品在国际化设计中产品调性，还可以保证操作的一致性，遵循以下设计规则可有效提升应用全球化质量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "界面空间预留与灵活布局",
      children: "界面空间预留与灵活布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同语言的译文长度存在较大差异，翻译可能造成界面文本长度增加。为了确保界面字符串翻译成其他语言后不被截断，最佳做法是使用灵活的动态布局，即UI控件根据文本内容长度动态调整，重新排版。若无法保证灵活布局，则应预留足够的文本空间。以英文为基础，相对于原始英语字符串，翻译需要预留的空间参考如表1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 界面预留空间参考表"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "英文字符数量（个）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预留的空间比率"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "小于等于10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%～200%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于11，小于等于20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%~100%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于21，小于等于30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%~80%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于31，小于等于50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%~60%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于51，小于等于70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%~40%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大于等于71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "界面镜像",
      children: "界面镜像"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同国家对文本对齐方式和读取顺序有所不同，例如英语采用从左到右的顺序，阿拉伯语则采用从右到左（RTL）的顺序。为了使界面显示的内容符合当地用户语言习惯，需确保UI元素布局支持界面镜像，如图1和图2。UI元素界面镜像的设计要点如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户界面（UI）布局镜像。用户界面排列允许从右到左的内容按其原始布局显示，满足双向市场体验。如“ABC”，按照从左到右的顺序应显示“ABC”，按照从右向左的顺序应显示为“CBA”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI元素镜像。带有方向性的UI元素控件和图标，遵循镜像规则。如图3、图4、图5。某些图标没有方向性或者与现实中的物体相关，不需要镜像，例如时钟表盘。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触控与操作。界面各元素触控或操作符合从右至左的阅读顺序。例如，对于多页签，一般情况下往左划表示往后，而在RTL语言下，往右划表示往后。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持混合文本。文本方向支持可实现出色的混合文本呈现（双向版本中有英语文本，反之亦然）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 一般布局示例（英文）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171068)/* ["default"] */.A) + "",
        width: "399",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 镜像布局示例（阿拉伯文）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213730)/* ["default"] */.A) + "",
        width: "393",
        height: "226"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 一般图标资源"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(948339)/* ["default"] */.A) + "",
        width: "360",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " RTL语言系统下提供的图标资源"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(169230)/* ["default"] */.A) + "",
        width: "360",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " RTL语言下提供的镜像控件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872863)/* ["default"] */.A) + "",
        width: "338",
        height: "333"
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
872863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798672-5df58bfc2a584fbaa4b4d9bf605db2e1.png");

},
169230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
948339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
171068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798670-77c6b405ca354d2b05595670a5443085.png");

},
213730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438365-5a01a90743b176eca2f2a7acad493f64.png");

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