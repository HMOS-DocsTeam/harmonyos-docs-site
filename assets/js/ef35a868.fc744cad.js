"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["367060"], {
887780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_erms_store_erms_md_ef3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-erms-store-erms-md-ef3.json
var site_docs_store_kit_guide_store_erms_store_erms_md_ef3_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-erms/store-erms","title":"生态查询服务","description":"场景介绍","source":"@site/docs/store-kit-guide/store-erms/store-erms.md","sourceDirName":"store-kit-guide/store-erms","slug":"/store-kit-guide/store-erms/","permalink":"/harmonyos-docs-site/store-kit-guide/store-erms/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"生态查询服务","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-erms","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"产品特性按需分发(C/C++)","permalink":"/harmonyos-docs-site/store-kit-guide/store-moduleinstall/store-moduleinstall_c/"},"next":{"title":"应用市场更新功能","permalink":"/harmonyos-docs-site/store-kit-guide/store-update/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-erms/store-erms.md


const frontMatter = {
	title: '生态查询服务',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-erms',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '生态查询服务';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "查询自身场景值",
  "id": "查询自身场景值",
  "level": 3
}, {
  "value": "查询广告验签版本",
  "id": "查询广告验签版本",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "生态查询服务",
        children: "生态查询服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生态查询服务可以为您提供应用/元服务运行信息的查询，当前提供场景值查询和广告验签信息查询。场景值是用来描述用户进入应用和元服务的路径。您可以通过本服务，来查询您的元服务/应用是通过何种场景被打开的（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-attribution-appendix/appgallery-scene-list#%E5%9C%BA%E6%99%AF%E5%80%BC%E5%88%97%E8%A1%A8",
        children: "场景值列表"
      }), "）。当前我们支持元服务的场景值查询，后续我们会继续公布应用场景值的查询。广告验签版本查询只在您的应用涉及广告场景下才会被使用到。您可以通过本查询服务，查询广告验签参数处理逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(374450)/* ["default"] */.A) + "",
        width: "635",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户需要查询应用/元服务自身场景值或者查询广告验签版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetselfscenecode",
          children: "getSelfSceneCode"
        }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetadsverificationversion",
          children: "getAdsVerificationVersion"
        }), "接口分别获取自身场景值和广告验签版本。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回自身场景值和广告验签版本给应用/元服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回结果给用户。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生态查询服务支持Phone、Tablet、PC/2in1设备。并且从5.1.1(19)版本开始，新增支持TV设备。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果应用或者元服务没有产生场景值，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetselfscenecode",
          children: "getSelfSceneCode"
        }), "接口返回的场景值为空。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生态查询服务不支持模拟器，请使用真机调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生态查询服务场景提供以下接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetselfscenecode",
              children: "getSelfSceneCode"
            }), "():string"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取自身场景值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetadsverificationversion",
              children: "getAdsVerificationVersion"
            }), "(): number"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询广告验签版本。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询自身场景值",
      children: "查询自身场景值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { sceneManager } from '@kit.AppGalleryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetselfscenecode",
            children: "getSelfSceneCode"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const sceneCode: string = sceneManager.getSelfSceneCode();\n  hilog.info(0, 'TAG', \"Succeeded in getting SelfSceneCode res = \" + sceneCode);\n} catch (error) {\n  hilog.error(0, 'TAG', `getSelfSceneCode failed. code is ${error.code}, message is ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询广告验签版本",
      children: "查询广告验签版本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { sceneManager } from '@kit.AppGalleryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-scenemanager/store-scenemanager#scenemanagergetadsverificationversion",
            children: "getAdsVerificationVersion"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const version: number = sceneManager.getAdsVerificationVersion();\n  hilog.info(0, 'TAG', \"Succeeded in getting AdsVerificationVersion res = \" + version);\n} catch (error) {\n  hilog.error(0, 'TAG', `getAdsVerificationVersion failed. code is ${error.code}, message is ${error.message}`);\n}\n"
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
374450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438825-fbd0be295cc4beab9c700c552ce55bb0.png");

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