"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["599793"], {
285820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_formkit_overview_formkit_overview_md_c5f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-formkit-overview-formkit-overview-md-c5f.json
var site_docs_form_kit_formkit_overview_formkit_overview_md_c5f_namespaceObject = JSON.parse('{"id":"form-kit/formkit-overview/formkit-overview","title":"Form Kit简介","description":"Form Kit（卡片开发服务）提供了一种在桌面、锁屏等系统应用上嵌入显示应用信息的开发框架和API，可以将应用内用户关注的重要信息或常用操作抽取到服务卡片（简称“卡片”）上，通过将卡片添加到桌面、锁屏等系统应用上，以达到信息展示、服务直达的便捷体验效果。","source":"@site/docs/form-kit/formkit-overview/formkit-overview.md","sourceDirName":"form-kit/formkit-overview","slug":"/form-kit/formkit-overview/","permalink":"/harmonyos-docs-site/form-kit/formkit-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Form Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"端侧问答模型","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-localchatmodel/"},"next":{"title":"ArkTS卡片概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-form-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/formkit-overview/formkit-overview.md


const frontMatter = {
	title: 'Form Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Form Kit简介';

const assets = {

};



const toc = [{
  "value": "卡片使用场景",
  "id": "卡片使用场景",
  "level": 2
}, {
  "value": "服务卡片架构",
  "id": "服务卡片架构",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "开发模式",
  "id": "开发模式",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "form-kit简介",
        children: "Form Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form Kit（卡片开发服务）提供了一种在桌面、锁屏等系统应用上嵌入显示应用信息的开发框架和API，可以将应用内用户关注的重要信息或常用操作抽取到服务卡片（简称“卡片”）上，通过将卡片添加到桌面、锁屏等系统应用上，以达到信息展示、服务直达的便捷体验效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片使用场景",
      children: "卡片使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持设备类型：手机、平板、PC/2in1、智慧屏、智能手表、车机。轻量级智能穿戴设备不支持使用本Kit。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持开发卡片应用类型：应用和元服务内均支持开发卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持卡片使用位置：用户可以在桌面、锁屏等系统应用上添加使用，不支持在普通应用内嵌入显示卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片常见使用步骤："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长按“桌面的应用图标”，弹出操作菜单。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击“卡片”选项，进入卡片管理页面，可以预览卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击“添加到桌面”按钮，即可在桌面上看到新添加的卡片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 卡片常见使用步骤"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224382)/* ["default"] */.A) + "",
        width: "805",
        height: "593"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务卡片架构",
      children: "服务卡片架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 服务卡片架构"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287054)/* ["default"] */.A) + "",
        width: "837",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片场景中涉及到的基本概念"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片使用方：如上图中的桌面，作为显示卡片内容的宿主应用，用于与用户直接进行交互，完成卡片添加、删除、显示功能，并能控制卡片在宿主中具体展示的位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片提供方：提供卡片的应用或元服务，是卡片功能的具体实现者，需要设计实现卡片UI、数据更新、以及点击交互处理功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片管理服务：操作系统内管理整机卡片信息的系统服务，作为卡片提供方和使用方的桥梁，向使用方提供卡片信息查询、添加、删除等能力，同时向提供方提供卡片被添加、被删除、刷新、点击事件等通知能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "信息呈现：将应用/元服务的重要信息以卡片形式展示在桌面，同时支持信息定时更新能力，用户可以随时查看关注的信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "服务直达：通过点击卡片内按钮，就可以实现功能快捷操作，也支持点击后跳转到应用/元服务对应功能页，实现功能服务一步直达的效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发模式",
      children: "开发模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型选择"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统中应用支持Stage和FA两种开发模型，所以Form Kit也同时支持开发者使用Stage模型和FA模型来开发卡片应用，但更推荐使用Stage模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI开发范式选择"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage模型支持两种卡片UI开发方式，可以基于ArkTS声明式开发范式语言开发卡片（简称ArkTS卡片）、也可以基于兼容JS的类Web开发范式语言开发卡片（简称JS卡片）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FA模型仅支持基于类Web范式JS语言开发JS卡片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS卡片与JS卡片具备不同的实现原理及特征，在场景能力上的差异如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JS卡片"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS卡片"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开发范式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类Web范式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明式范式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "组件能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "布局能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "事件能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义动效"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义绘制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "逻辑代码执行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ability Kit: Form Kit内部实现依赖Ability Kit提供的Extension基础能力，与Ability Kit存在生命周期调度交互。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkUI: Form Kit卡片提供方在卡片页面中可以使用ArkUI提供的部分组件、事件、动效、状态管理等能力。"
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
224382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478283-a009cc5b306647d0f39e9216eae88e3a.png");

},
287054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798634-64d8c9ac7a45ac6ca0a59452dacf81e4.png");

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