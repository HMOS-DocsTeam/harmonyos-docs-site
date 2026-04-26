"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["722520"], {
958724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_screenshot_ide_screenshot_md_6fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-screenshot-ide-screenshot-md-6fb.json
var site_docs_ide_debug_app_ide_screenshot_ide_screenshot_md_6fb_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-screenshot/ide-screenshot","title":"截屏","description":"在调试过程中，可以通过多种方式截取屏幕截图。","source":"@site/docs/ide-debug-app/ide-screenshot/ide-screenshot.md","sourceDirName":"ide-debug-app/ide-screenshot","slug":"/ide-debug-app/ide-screenshot/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-screenshot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"截屏","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-screenshot","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"数据库调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-database-inspector/"},"next":{"title":"录屏","permalink":"/harmonyos-docs-site/ide-debug-app/ide-screen-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-screenshot/ide-screenshot.md


const frontMatter = {
	title: '截屏',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-screenshot',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '截屏';

const assets = {

};



const toc = [{
  "value": "通过DevEco Studio截屏",
  "id": "通过deveco-studio截屏",
  "level": 2
}, {
  "value": "通过命令行方式截屏",
  "id": "通过命令行方式截屏",
  "level": 2
}, {
  "value": "方式一：hdc shell snapshot_display",
  "id": "方式一hdc-shell-snapshot_display",
  "level": 3
}, {
  "value": "方式二：hdc shell wukong special -p",
  "id": "方式二hdc-shell-wukong-special--p",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "截屏",
        children: "截屏"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调试过程中，可以通过多种方式截取屏幕截图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过deveco-studio截屏",
      children: "通过DevEco Studio截屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接真机设备或模拟器，并在其中运行应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio底部切换到", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log"
            })
          }), "页签。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击左侧工具栏中", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(526048)/* ["default"] */.A) + "",
            width: "17",
            height: "17"
          }), "，即可截取屏幕截图。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "截图的图片将直接显示在DevEco Studio中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(407893)/* ["default"] */.A) + "",
            width: "1129",
            height: "276"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在图片显示区域右击，选择****Copy Path/Reference...****可以查看截屏的本地存储路径或者在菜单栏下方查看本地存储路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(673719)/* ["default"] */.A) + "",
            width: "993",
            height: "728"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过命令行方式截屏",
      children: "通过命令行方式截屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hdc是可以用于调试的命令行工具，通过该工具可以实现截屏功能。更多关于命令行工具hdc的说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc",
        children: "hdc工具使用指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方式一hdc-shell-snapshot_display",
      children: "方式一：hdc shell snapshot_display"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell snapshot_display -f /data/local/tmp/0.jpeg  // -f参数指定图片在设备上的存储路径，如不指定，会在命令执行完成后显示图片默认存储路径。\nhdc file recv /data/local/tmp/0.jpeg  // 将图片从设备发送到本地目录，本示例将图片发送到当前执行hdc命令的目录。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方式二hdc-shell-wukong-special--p",
      children: "方式二：hdc shell wukong special -p"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["wukong是系统稳定性测试工具，通过指定参数-p可以实现截图功能。更多关于稳定性测试工具wukong的说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/test-service/indev_cmd/wukong-guidelines",
        children: "wukong工具使用指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell wukong special -p\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令执行效果如下图所示，其中Report currentTestDir为结果存储路径，包含截屏图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(576571)/* ["default"] */.A) + "",
        width: "1077",
        height: "224"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过hdc命令可以将该路径文件发送到本地，例如发送到当前执行hdc命令的目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc file recv /data/local/tmp/wukong/report/20231010_141610/\n"
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
526048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAFPSURBVCiRzZK/q4JQGIbfbhd/kCCezcGtzb/AIUdpdXdz6E9ycrLdoUWapNlVhAgqHQSFLCEkIbzDia51f0B3ut90vo/znI/34QzqusaL9fYq8Efmvd80TTOfz0+n030iiqJlWTzP/8hEUbTf7/uT4/EYRdFkMukPB3VdV1UVBMH5fM6y7Hq9AmAYBkDbtgCGw6GiKKPRaDqdSpJ02xOGYRzH9A1CiGma4/EYwGaz8X3/cDjsdjsAHMeZpnlzcLlcKMAwjG3bABzHcRwHgG3bdGf/2oM3VVVZlvU8L03TNE09z2NZVlXVJ28PDCGkLEsag+Ypy5IQ8huT57ksy4Ig0FYQBFmW8zx/Yh5cJ0lSFMVsNlutVgB0XS+KIkmSb5h7yq7rXNc1DEPXdQDr9Xq5XHZddzf0yWiatt1uq6qichaLBb6UJEmaptHz4B//6w8FLZErfuJb1AAAAABJRU5ErkJggg==");

},
576571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753420-05278e40711632addb6337e547058263.png");

},
673719(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913412-3133c5de03e9687df0fa573318093b3b.png");

},
407893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913418-f7f22f19e511d4af1094d386a27c5ff9.png");

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