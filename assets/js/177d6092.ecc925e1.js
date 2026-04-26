"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417822"], {
545762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_faq_cloudfoundation_faq_prefetch_cloudfoundation_faq_5_cloudfoundation_faq_5_md_177_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-faq-cloudfoundation-faq-prefetch-cloudfoundation-faq-5-cloudfoundation-faq-5-md-177.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_faq_cloudfoundation_faq_prefetch_cloudfoundation_faq_5_cloudfoundation_faq_5_md_177_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5/cloudfoundation-faq-5","title":"如何通过应用侧日志定位预加载问题","description":"预加载的日志进程为“clouddevelopproxy”，日志过滤选择“No filters”。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5/cloudfoundation-faq-5.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5","slug":"/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"如何通过应用侧日志定位预加载问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-faq-5","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"调用云存储业务接口失败，app日志提示“\\"state\\":65”，upload进程日志提示“404 Not Found”","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-cloudstorage/cloudfoundation-faq-6/"},"next":{"title":"运行应用时提示“appid **** is not in white list, to skip”","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-5/cloudfoundation-faq-5.md


const frontMatter = {
	title: '如何通过应用侧日志定位预加载问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-faq-5',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '如何通过应用侧日志定位预加载问题';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "如何通过应用侧日志定位预加载问题",
        children: "如何通过应用侧日志定位预加载问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预加载的日志进程为“clouddevelopproxy”，日志过滤选择“No filters”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文列举几种场景下的日志提示信息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景一：系统服务在应用安装期间预加载数据成功"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(532419)/* ["default"] */.A) + "",
            width: "1328",
            height: "358"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预加载数据成功时日志会提示：http onSuccess code: 200，并且提示预加载的数据大小：get rsp data, len 47（单位为字节）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景二：应用调用getPrefetchResult接口获取预加载数据成功"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(529442)/* ["default"] */.A) + "",
            width: "1106",
            height: "445"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据获取成功时，无Error级别日志，会提示OnGetPreloadCache: end status:0。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景三：应用调用getPrefetchResult接口获取预加载数据失败"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(746145)/* ["default"] */.A) + "",
            width: "1105",
            height: "359"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "问题现象"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据获取失败时，存在Error级别日志，会提示GetPreloadData get cache fail。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解决措施"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "出现此问题，可按照如下步骤排查和解决："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "检查系统服务在应用安装期间预加载数据的日志。如果打印日志与上文场景一提示的日志信息不一致，则继续执行后续步骤。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确认是否存在多次调用安装预加载接口问题。安装预加载接口不支持多次调用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["排除以上原因后，检查日志中是否出现“appid **** is not in white list, to skip”或者“XXX Read timed out”。如果出现，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-3",
              children: "运行应用时提示“appid **** is not in white list, to skip”"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cloud-foundation-kit-guide/cloudfoundation-faq/cloudfoundation-faq-prefetch/cloudfoundation-faq-4",
              children: "运行应用时报“XXX Read timed out”异常"
            }), "解决。"]
          }), "\n"]
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
532419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958880-43ddde710776f300c313144b69c936ee.png");

},
529442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478881-9276967626ed6c1f17416b02755d05bb.png");

},
746145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799232-53706c6add7fb3d390acc73542034af6.png");

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