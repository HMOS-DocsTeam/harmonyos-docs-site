"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["796506"], {
469406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_typical_scenarios_app_clone_app_clone_md_82d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-typical-scenarios-app-clone-app-clone-md-82d.json
var site_docs_development_fundamentals_application_typical_scenarios_app_clone_app_clone_md_82d_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-typical-scenarios/app-clone/app-clone","title":"创建应用分身","description":"应用分身能在一个设备上安装多个相同的应用，实现多个账号同时登录并独立运行。主要应用场景有社交账号双开、游戏大小号双开等，无需账号切换，从而省去频繁登录的繁琐。","source":"@site/docs/development-fundamentals/application-typical-scenarios/app-clone/app-clone.md","sourceDirName":"development-fundamentals/application-typical-scenarios/app-clone","slug":"/development-fundamentals/application-typical-scenarios/app-clone/","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/app-clone/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建应用分身","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-clone","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建应用静态快捷方式","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/typical-scenario-configuration/"},"next":{"title":"创建应用多实例","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/multiinstance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-typical-scenarios/app-clone/app-clone.md


const frontMatter = {
	title: '创建应用分身',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-clone',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '创建应用分身';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "应用分身的开发步骤",
  "id": "应用分身的开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建应用分身",
        children: "创建应用分身"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用分身能在一个设备上安装多个相同的应用，实现多个账号同时登录并独立运行。主要应用场景有社交账号双开、游戏大小号双开等，无需账号切换，从而省去频繁登录的繁琐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建应用分身之后，桌面上会出现多个相同图标的应用，其中带有下角标的应用图标表示分身应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主应用与分身应用之间的关系如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主应用和分身应用共享同一个应用。例如，当主应用更新/升级时，主应用与分身应用都会同步更新，包括应用的图标（icon）和名称（label）、应用的新特性等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主应用和分身应用，其对应的使能和相关配置都是独立的，数据也是彼此隔离。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主应用被卸载时，所有分身应用也会同步卸载。卸载分身应用时，不会影响主应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下图片展示了应用分身的效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827456)/* ["default"] */.A) + "",
        width: "252",
        height: "95"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法应用配置分身无效，无法创建应用分身。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用分身的开发步骤",
      children: "应用分身的开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置应用分身的方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程项目中对AppScope/app.json5配置文件配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#multiappmode%E6%A0%87%E7%AD%BE",
            children: "multiAppMode"
          }), "字段。具体配置如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    // ...\n    \"multiAppMode\": {\n      \"multiAppModeType\": \"appClone\",\n      \"maxCount\": 2\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建分身应用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "首先将已配置好的工程编译打包安装到设备上。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(505315)/* ["default"] */.A) + "",
                width: "151",
                height: "112"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "然后打开设置>系统>应用分身，点击“创建分身”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(657763)/* ["default"] */.A) + "",
                width: "333",
                height: "246"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(109593)/* ["default"] */.A) + "",
                width: "333",
                height: "432"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "返回桌面，检查创建是否成功。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(311794)/* ["default"] */.A) + "",
                width: "252",
                height: "95"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "图中的三个应用的进程、运行、数据、通知等，都是彼此独立的。"
            }), "\n"]
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
109593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437525-7fdaabf4b513d9cc19f3db59dc72db0b.png");

},
657763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797830-1f538375aadb42a3cff29a439e23f398.png");

},
827456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957478-af9b6fe372515ef439dc1e13c5d447db.png");

},
311794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957478-af9b6fe372515ef439dc1e13c5d447db.png");

},
505315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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