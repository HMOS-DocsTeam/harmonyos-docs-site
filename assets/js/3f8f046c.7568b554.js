"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["976628"], {
466417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_knock_share_knock_share_pc_phones_knock_share_pc_phones_overview_knock_share_pc_phones_overview_md_3f8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-knock-share-knock-share-pc-phones-knock-share-pc-phones-overview-knock-share-pc-phones-overview-md-3f8.json
var site_docs_share_kit_guide_knock_share_knock_share_pc_phones_knock_share_pc_phones_overview_knock_share_pc_phones_overview_md_3f8_namespaceObject = JSON.parse('{"id":"share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/knock-share-pc-phones-overview","title":"概述","description":"场景介绍","source":"@site/docs/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/knock-share-pc-phones-overview.md","sourceDirName":"share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview","slug":"/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"邀请组队","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/"},"next":{"title":"分享内容直达应用界面","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/knock-share-pc-phones-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

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
  "value": "双向分享限制",
  "id": "双向分享限制",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "代码示例",
  "id": "代码示例",
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
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Share Kit支持Phone和PC/2in1之间的碰一碰分享。利用PC/2in1设备的屏幕感知能力，识别Phone轻碰屏幕的动作及位置，实现PC/2in1窗口级的交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从6.1.0(23)版本开始，支持Phone与Tablet设备之间的碰一碰分享。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809332)/* ["default"] */.A) + "",
        width: "480",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PC/2in1设备作为数据接收端"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(173418)/* ["default"] */.A) + "",
            width: "676",
            height: "628"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PC/2in1设备作为数据发送端"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(905239)/* ["default"] */.A) + "",
            width: "676",
            height: "604"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "双向分享限制",
      children: "双向分享限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta5版本开始，手机与PC/2in1设备之间不支持双向分享。遵循以下机制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当手机前台有可分享内容时，无论PC/2in1设备前台窗口是否有可分享内容，优先将手机作为发送端，PC/2in1设备作为接收端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当手机前台无可分享内容且PC/2in1设备前台窗口有可分享内容时，PC/2in1设备作为发送端，手机作为接收端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当手机前台和PC/2in1设备前台窗口均无可分享内容时，遵循无内容分享逻辑。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于6.0.0(20) Beta3及之前的版本，当手机前台和PC/2in1设备前台窗口均有可分享内容时，支持双向分享（发送分享内容的同时也可接收到分享内容）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手机与PC/2in1设备间碰一碰分享需登录相同的华为账号。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持直板手机或折叠手机直板态与PC/2in1屏幕碰一碰分享。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(970664)/* ["default"] */.A) + "",
            width: "631",
            height: "232"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "轻碰屏幕交互约束："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手机与PC/2in1屏幕俯视夹角应≤5°。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(988930)/* ["default"] */.A) + "",
                width: "400",
                height: "400"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手机与PC/2in1屏幕侧视夹角应＞35°。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(196114)/* ["default"] */.A) + "",
                width: "400",
                height: "400"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手机与PC/2in1屏幕正视夹角应≤25°。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(383228)/* ["default"] */.A) + "",
                width: "400",
                height: "400"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手机不能超出PC/2in1设备屏幕。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(469601)/* ["default"] */.A) + "",
                width: "400",
                height: "400"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持官方手机保护壳，不支持过厚的手机外壳。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持的PC/2in1系统：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-600#section1836613212578",
          children: "HarmonyOS 6.0.0 Beta1"
        }), "及以上版本。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["集成开发环境：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-600#section1836613212578",
          children: "DevEco Studio 6.0.0 Beta1"
        }), "及以上版本。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PC/2in1作为发送端接入参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content#%E5%8F%91%E9%80%81%E5%88%86%E4%BA%AB%E6%95%B0%E6%8D%AE",
          children: "发送分享数据"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PC/2in1作为接收端接入参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox",
          children: "分享内容直达应用界面"
        })]
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
469601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959192-15c95fe185eade8130444cf91c473142.png");

},
809332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959176-76e86ebbd752876abfb6832e328500e5.gif");

},
173418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799540-74e941ff6a070aa7b60670def375413c.png");

},
196114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799542-183b1e1b1ae7fa62bddfbdd8da406124.png");

},
905239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439235-9db331c205d3d40df87eb83485044acc.png");

},
383228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
970664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959190-45b9e1b2cb9a56a81f0518983fad3ee6.png");

},
988930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479191-5837e505ed6581d2e31a39e501e3f653.png");

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