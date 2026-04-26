"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["568949"], {
923058(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_package_fundamentals_application_package_install_application_package_install_uninstall_application_package_install_uninstall_md_f74_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-package-fundamentals-application-package-install-application-package-install-uninstall-application-package-install-uninstall-md-f74.json
var site_docs_development_fundamentals_application_package_fundamentals_application_package_install_application_package_install_uninstall_application_package_install_uninstall_md_f74_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall/application-package-install-uninstall","title":"应用安装卸载与更新开发指导","description":"本章节介绍应用程序包的安装卸载流程和两种更新方式。","source":"@site/docs/development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall/application-package-install-uninstall.md","sourceDirName":"development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall","slug":"/development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall/","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用安装卸载与更新开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-install-uninstall","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HSP","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp/"},"next":{"title":"应用安装与更新一致性校验","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-install/install-and-update-consistency-verification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-package-fundamentals/application-package-install/application-package-install-uninstall/application-package-install-uninstall.md


const frontMatter = {
	title: '应用安装卸载与更新开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-install-uninstall',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '应用安装卸载与更新开发指导';

const assets = {

};



const toc = [{
  "value": "应用程序包的安装卸载",
  "id": "应用程序包的安装卸载",
  "level": 2
}, {
  "value": "应用程序包的更新",
  "id": "应用程序包的更新",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用安装卸载与更新开发指导",
        children: "应用安装卸载与更新开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍应用程序包的安装卸载流程和两种更新方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用程序包的安装卸载",
      children: "应用程序包的安装卸载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过调试命令安装和卸载应用，安装应用命令参考bm工具中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/bm-tool#%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4install",
        children: "install"
      }), "，卸载应用命令参考bm工具中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/bm-tool#%E5%8D%B8%E8%BD%BD%E5%91%BD%E4%BB%A4uninstall",
        children: "uninstall"
      }), "，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-stage#%E5%8F%91%E5%B8%83%E6%80%81%E5%8C%85%E7%BB%93%E6%9E%84",
        children: "编译发布与上架部署流程图"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 应用程序包安装和卸载流程（开发者）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179265)/* ["default"] */.A) + "",
        width: "734",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用上架应用市场后，终端设备用户可在设备上通过应用市场安装应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 应用程序包安装和卸载流程（终端设备用户）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(755255)/* ["default"] */.A) + "",
        width: "721",
        height: "486"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用程序包的更新",
      children: "应用程序包的更新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于开发者，应用程序包的更新，首先需要更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5配置文件"
      }), "中的versionCode版本号字段，通过DevEco Studio打包后在应用市场发布，发布流程与首次发布一致。对于终端设备用户，新版本发布后，可以通过以下两种方式更新应用程序包。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用市场内更新：应用市场通知用户该应用有新版本，用户根据通知到应用市场（客户端）进行升级。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用内检测升级：开发者根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/store-kit-guide/store-update#section316371715233",
          children: "更新指导"
        }), "实现版本更新提醒功能，应用启动完成或用户在应用中主动检查新版本时，会弹出升级对话框，用户根据对话框提示升级。"]
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
755255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477477-a7d7edc2a342b580d010aa00f26e5e88.png");

},
179265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957476-a21ed7bf74fbaddbe8f403a8ed82308a.png");

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