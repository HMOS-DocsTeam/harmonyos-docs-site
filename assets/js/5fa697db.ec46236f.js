"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["867190"], {
739923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_management_ide_emulator_start_and_close_ide_emulator_start_and_close_md_5fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-management-ide-emulator-start-and-close-ide-emulator-start-and-close-md-5fa.json
var site_docs_ide_run_emulator_ide_emulator_management_ide_emulator_start_and_close_ide_emulator_start_and_close_md_5fa_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close/ide-emulator-start-and-close","title":"启动和关闭模拟器","description":"在设备管理器页面，单击即可启动模拟器。模拟器启动时会默认携带之前运行时的用户数据，包括用户上传的文件，安装的应用等。如果是新创建的模拟器，则不会携带用户数据。如果想清除之前运行时的用户数据，点击*Actions >  > Wipe User Data*。","source":"@site/docs/ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close/ide-emulator-start-and-close.md","sourceDirName":"ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close","slug":"/ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"启动和关闭模拟器","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-start-and-close","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"创建模拟器","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-management/ide-emulator-create/"},"next":{"title":"操控屏幕","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-control-screen/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-management/ide-emulator-start-and-close/ide-emulator-start-and-close.md


const frontMatter = {
	title: '启动和关闭模拟器',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-start-and-close',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '启动和关闭模拟器';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动和关闭模拟器",
        children: "启动和关闭模拟器"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在设备管理器页面，单击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100774)/* ["default"] */.A) + "",
        width: "13",
        height: "14"
      }), "即可启动模拟器。模拟器启动时会默认携带之前运行时的用户数据，包括用户上传的文件，安装的应用等。如果是新创建的模拟器，则不会携带用户数据。如果想清除之前运行时的用户数据，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions >"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(643160)/* ["default"] */.A) + "",
        width: "13",
        height: "13"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Wipe User Data"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(590205)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1643",
        height: "727"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，如果创建模拟器时选择热启动，则启动模拟器时会加载上次关闭时保存的快照，启动后会恢复至上次关闭时的状态。热启动后，多屏状态会恢复为单屏状态，折叠屏模拟器会恢复成默认展开状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果热启动后出现异常，可点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions >"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(740468)/* ["default"] */.A) + "",
        width: "13",
        height: "13"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Wipe User Data"
        })
      }), "清除用户数据后重新启动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如推包运行后关闭模拟器，再次启动时会显示在上次运行的界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(565075)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "448",
        height: "796"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在模拟器运行期间，可以点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions >"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(230344)/* ["default"] */.A) + "",
        width: "13",
        height: "13"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Show on Disk"
        })
      }), "显示模拟器在本地生成的用户数据。点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions >"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458159)/* ["default"] */.A) + "",
        width: "13",
        height: "13"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Generate logs"
        })
      }), "可以生成模拟器自启动到此刻的所有日志信息。想要关闭运行中的模拟器，可以在设备管理器页面点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(570333)/* ["default"] */.A) + "",
        width: "17",
        height: "17"
      }), "，或者点击模拟器工具栏上的关闭按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1492)/* ["default"] */.A) + "",
        width: "16",
        height: "17"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(275922)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1643",
        height: "726"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器关闭后，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions >"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(456788)/* ["default"] */.A) + "",
        width: "13",
        height: "13"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Delete"
        })
      }), "可以删除模拟器，并清除模拟器的用户数据和配置信息。"]
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
643160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAzklEQVQoFW1RgQ3DIAzrgR3c0SWvbXAU5gCSA7YkhVbTUFWhxLGDvakfERURVVEd6xMZamUrbmrXABnCyt6YaBsWGdsd5L1ALtaJc61TTuQ/X+gaba0FaIFbW4oMALVWw4lIKe+UdqKj93an770xc865lJfhem9ER0o7MwHwBUcUc87MDLQtVHyUck5eBbAm2SfNl/OBs/cget7pg8j8C4dUQ+uZ0sOJCbjWvXx290fvYDsGijxOn2ceIW/2AvCHj2WT5RH5zv9vxJHeF/cBRuurT0gqTtYAAAAASUVORK5CYII=");

},
740468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAzklEQVQoFW1RgQ3DIAzrgR3c0SWvbXAU5gCSA7YkhVbTUFWhxLGDvakfERURVVEd6xMZamUrbmrXABnCyt6YaBsWGdsd5L1ALtaJc61TTuQ/X+gaba0FaIFbW4oMALVWw4lIKe+UdqKj93an770xc865lJfhem9ER0o7MwHwBUcUc87MDLQtVHyUck5eBbAm2SfNl/OBs/cget7pg8j8C4dUQ+uZ0sOJCbjWvXx290fvYDsGijxOn2ceIW/2AvCHj2WT5RH5zv9vxJHeF/cBRuurT0gqTtYAAAAASUVORK5CYII=");

},
458159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAzklEQVQoFW1RgQ3DIAzrgR3c0SWvbXAU5gCSA7YkhVbTUFWhxLGDvakfERURVVEd6xMZamUrbmrXABnCyt6YaBsWGdsd5L1ALtaJc61TTuQ/X+gaba0FaIFbW4oMALVWw4lIKe+UdqKj93an770xc865lJfhem9ER0o7MwHwBUcUc87MDLQtVHyUck5eBbAm2SfNl/OBs/cget7pg8j8C4dUQ+uZ0sOJCbjWvXx290fvYDsGijxOn2ceIW/2AvCHj2WT5RH5zv9vxJHeF/cBRuurT0gqTtYAAAAASUVORK5CYII=");

},
590205(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751076-4c34ebe76f9f93f21ec57c280f122e0c.png");

},
570333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABFElEQVQ4EXVTQRLDIAjM54LmM20mb47pQU+1p5pDZ1kl1k5nuAgsyyJMKZ8pl5RLfJ7NSnwW9cPDaMonnC/YxMdx38LsmkmYJcxul0XNq1925491i7lMrM2kP5gFUQEmiJAHjbVsq02GZRdPwDdGW4RL/GBBUH4w7S2XmMvuPKmHDJbvQxWjvVXdJl0VwslyBoMejrVLdeywU6g9t0bqrMmjqTbcftaYG6Ld3PBr6gWAX/Ezemcw9oYPHpKMsy9BqooZeBTguQSqE3psJOn1rrtjhduyQE8zfl2VGvMbu2M8ljS02qkVYLjXj9vaAJg1Mbaj6gHt47ZemOEWdP+v02jngM2Enu8LYZ7GcFfX/ej61/v5AOXDJXClUBqPAAAAAElFTkSuQmCC");

},
565075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911092-a074405ba8bd1d2840287d5bd6dc1be9.png");

},
100774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAABo0lEQVR4AVSPXShDYRjHzw4ZCQ0lcrNEXFjJpSTlK9RWxFhpLraVi2mFXZDEhbALW25mihWbj2RbrQz5SO5ILbU2LSsXay2m7aizZTv+Z69W3n4953n+7/95nvPS0djH0sUmCEZCDMMkEgg8uYQvGIY+83kCn6G8gvzhoynzoz35k+I4ihwkBJT0FxuXVDdq2yZs48ZALCQ9VF8G73EhEFAE5ICmKAGVPTVlVeuD+pU+nfnZrnTM+aNvWZmCGwl8HD5kPmJrbbNdYepv6tS455dvTTE2DhHAh3kcmgBpyBPQQ5Jeh9IsLBRK7ap9rxM6fIiwIv6BbmQlwuKZDtXuyIbr9coduCE+6P+AFRCJozJYBR/+D/Ai6hyJ5LfhzjJ5PCur7+mv74QPSwHvIzMyXObUey6zqliWdY5ZFBIp7uBDpOAAyJ7eX+QHWrfventgdbFjWlRYSjbAh6X8e8PxiN69tuAxaFrGrDJDQ6UYbWgGSOjyIpE37Dc+7ClsugaR2CXf6a5rxwUZQyJKWtbU1VghTqfSJ6Nb6la5ML8Aag4MI/wCAAD//xrVZBcAAAAGSURBVAMAWFXA0nGLxM4AAAAASUVORK5CYII=");

},
275922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751013-33665e5c8e8869bdc1e419044f33edfe.png");

},
1492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARBAMAAAAmgTH3AAAAKlBMVEX///8lJSW5ubm+vr6ysrK4uLg9PT2zs7O/v7+IiIiBgYFCQkI3NzcaGhoK9EHdAAAAPklEQVQI12NgIAnwBDAwlIEYrEIMLMJgIUUFRwMwg0lKAqpq7QQIzSIpBGE4NgQqgGh2YQYmsBAbUIs2XpsAXpAFFDK0vPYAAAAASUVORK5CYII=");

},
230344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAzklEQVQoFW1RgQ3DIAzrgR3c0SWvbXAU5gCSA7YkhVbTUFWhxLGDvakfERURVVEd6xMZamUrbmrXABnCyt6YaBsWGdsd5L1ALtaJc61TTuQ/X+gaba0FaIFbW4oMALVWw4lIKe+UdqKj93an770xc865lJfhem9ER0o7MwHwBUcUc87MDLQtVHyUck5eBbAm2SfNl/OBs/cget7pg8j8C4dUQ+uZ0sOJCbjWvXx290fvYDsGijxOn2ceIW/2AvCHj2WT5RH5zv9vxJHeF/cBRuurT0gqTtYAAAAASUVORK5CYII=");

},
456788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAzklEQVQoFW1RgQ3DIAzrgR3c0SWvbXAU5gCSA7YkhVbTUFWhxLGDvakfERURVVEd6xMZamUrbmrXABnCyt6YaBsWGdsd5L1ALtaJc61TTuQ/X+gaba0FaIFbW4oMALVWw4lIKe+UdqKj93an770xc865lJfhem9ER0o7MwHwBUcUc87MDLQtVHyUck5eBbAm2SfNl/OBs/cget7pg8j8C4dUQ+uZ0sOJCbjWvXx290fvYDsGijxOn2ceIW/2AvCHj2WT5RH5zv9vxJHeF/cBRuurT0gqTtYAAAAASUVORK5CYII=");

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