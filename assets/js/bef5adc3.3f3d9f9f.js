"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["987183"], {
997842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_terminology_window_terminology_md_bef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-terminology-window-terminology-md-bef.json
var site_docs_arkui_window_manager_window_terminology_window_terminology_md_bef_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-terminology/window-terminology","title":"窗口开发术语","description":"窗口类型","source":"@site/docs/arkui/window-manager/window-terminology/window-terminology.md","sourceDirName":"arkui/window-manager/window-terminology","slug":"/arkui/window-manager/window-terminology/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"窗口开发术语","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动页资源分类配置","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-resource-config/"},"next":{"title":"窗口开发常见问题","permalink":"/harmonyos-docs-site/arkui/window-manager/window-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-terminology/window-terminology.md


const frontMatter = {
	title: '窗口开发术语',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-terminology',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '窗口开发术语';

const assets = {

};



const toc = [{
  "value": "窗口类型",
  "id": "窗口类型",
  "level": 2
}, {
  "value": "系统窗口",
  "id": "系统窗口",
  "level": 3
}, {
  "value": "应用窗口",
  "id": "应用窗口",
  "level": 3
}, {
  "value": "悬浮窗",
  "id": "悬浮窗",
  "level": 2
}, {
  "value": "自由窗口",
  "id": "自由窗口",
  "level": 2
}, {
  "value": "自由多窗模式",
  "id": "自由多窗模式",
  "level": 3
}, {
  "value": "电脑模式",
  "id": "电脑模式",
  "level": 3
}, {
  "value": "沉浸式布局",
  "id": "沉浸式布局",
  "level": 2
}, {
  "value": "全局坐标系",
  "id": "全局坐标系",
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
        id: "窗口开发术语",
        children: "窗口开发术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "窗口类型",
      children: "窗口类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口有系统窗口、应用窗口两种分类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统窗口",
      children: "系统窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统窗口指完成系统特定功能的窗口。如音量条、壁纸、通知栏、状态栏、导航栏等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统窗口仅系统应用可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用窗口",
      children: "应用窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用窗口区别于系统窗口，指与应用显示相关的窗口，用来显示应用的内容。根据管理方式和用途的不同，应用窗口又可以分为主窗口、辅助窗口两种类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主窗口"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主窗口由UIAbility创建时默认创建，会在“任务管理界面”中以一个独立的任务卡片显示，用于显示应用UIAbility主界面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "辅助窗口"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "辅助窗口由应用自行管理创建和销毁，不会在“任务管理界面”中以一个独立的任务卡片显示，可以用于显示应用的辅助内容，例如弹窗等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "辅助窗口包括子窗口、全局悬浮窗、模态窗口、画中画和闪控球。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "悬浮窗",
      children: "悬浮窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "悬浮窗分为智慧多窗悬浮窗和全局悬浮窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "智慧多窗悬浮窗是指设备屏幕上悬浮的、非全屏的应用窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般用于在已有全屏任务运行的基础上，临时处理另一个任务，或短时间多任务并行使用。如浏览网页的同时回复消息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相关参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/window-manager/multi-window-guide/multi-window-intro",
            children: "智慧多窗简介"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-window-practice",
            children: "智慧多窗最佳实践"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局悬浮窗是指一种特殊的应用辅助窗口，具备在应用主窗口和对应Ability退至后台后仍然可以在前台显示的能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局悬浮窗可以用于应用退至后台后，使用小窗继续显示UI，例如音乐应用用于显示桌面歌词等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在创建全局悬浮窗前，需要申请对应的权限。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/application-window-stage#%E8%AE%BE%E7%BD%AE%E5%85%A8%E5%B1%80%E6%82%AC%E6%B5%AE%E7%AA%97%E5%8F%97%E9%99%90%E5%BC%80%E6%94%BE",
        children: "设置全局悬浮窗"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自由窗口",
      children: "自由窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自由窗口是一种允许用户在同一屏幕上以自由大小、位置显示的窗口状态。自由窗口支持拖拽、缩放和分屏组合，从而实现多任务处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自由窗口按照打开或者获取焦点的顺序在Z轴层叠排布。当自由窗口被点击或触摸时，将导致其Z轴高度提升，并获取焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动新的自由窗口时，默认以一定间距在上一个窗口的右下方层叠显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个自由窗口默认会在窗口上方显示窗口标题栏，标题栏左侧显示应用图标，右侧显示三键控制按钮（窗口最大化/还原、窗口最小化和关闭窗口），且窗口标题栏支持额外的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive#section359241062916",
        children: "沉浸式配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自由窗口可以通过拖动窗口边缘调节窗口大小，可以通过拖动标题栏移动窗口位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(380298)/* ["default"] */.A) + "",
        width: "2400",
        height: "1600"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备支持情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "2in1设备"
          })
        }), "：2in1设备上的窗口，默认为自由窗口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tablet设备"
          })
        }), "：部分Tablet设备，支持开启", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%87%AA%E7%94%B1%E5%A4%9A%E7%AA%97%E6%A8%A1%E5%BC%8F",
          children: "自由多窗模式"
        }), "（通过下拉控制中心，点击“自由多窗”按钮开启），开启此模式后，应用窗口默认为自由窗口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Phone设备"
          })
        }), "：部分Phone设备，支持开启", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%87%AA%E7%94%B1%E5%A4%9A%E7%AA%97%E6%A8%A1%E5%BC%8F",
          children: "自由多窗模式"
        }), "（通过下拉控制中心，点击“自由多窗”按钮开启），开启此模式后，应用窗口默认为自由窗口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自由多窗模式",
      children: "自由多窗模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自由多窗模式是一种支持用户在移动设备上进行多任务处理的交互方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自由多窗下，允许用户在一块屏幕上同时显示多个应用窗口。此时的应用窗口为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
        children: "自由窗口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分Tablet设备上，可通过下拉控制中心，点击“自由多窗”按钮开启自由多窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分Phone设备上，可通过下拉控制中心，点击“自由多窗”按钮开启自由多窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(117307)/* ["default"] */.A) + "",
        width: "3882",
        height: "1510"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "电脑模式",
      children: "电脑模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电脑模式是一种支持用户在移动设备上进行多任务处理的交互方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["电脑模式下，允许用户在一块屏幕上同时显示多个应用窗口。此时的应用窗口为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
        children: "自由窗口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分Tablet设备上，可通过下拉控制中心，点击“电脑模式”按钮开启电脑模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "沉浸式布局",
      children: "沉浸式布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沉浸式布局是一种让应用界面聚焦内容，减少无关元素干扰的窗口状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["非", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
        children: "自由窗口"
      }), "可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
        children: "setWindowLayoutFullScreen"
      }), "进入沉浸式布局。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非自由窗口的非沉浸式布局示意"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非自由窗口的沉浸式布局示意"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自由窗口可以通过隐藏装饰栏进入沉浸式布局。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "自由窗口的非沉浸式布局示意"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自由窗口的沉浸式布局示意"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用窗口进入沉浸式布局之后，页面的所有组件布局范围从安全区域扩展为整个窗口。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#isimmersivelayout20",
        children: "isImmersiveLayout"
      }), "判断当前窗口是否处于沉浸式布局。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多设备场景下不同窗口形态的沉浸式开发与实现可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive",
        children: "窗口沉浸式最佳实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "全局坐标系",
      children: "全局坐标系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["全局坐标系是指在设备连接", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/display-manager/display-terminology#%E6%89%A9%E5%B1%95%E5%B1%8F",
        children: "扩展屏"
      }), "（多物理屏幕）的场景下，以主屏幕左上角为原点(0, 0)，屏幕右侧为x轴正方向，屏幕下侧为y轴正方向，对窗口、指针等对象的位置进行统一描述的坐标体系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该坐标系中，所有物理屏幕被映射到同一连续的虚拟坐标空间内，各类窗口操作、坐标转换及窗口矩形变化事件均基于该坐标空间进行计算和回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48739)/* ["default"] */.A) + "",
        width: "800",
        height: "323"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "窗口跨屏移动：调用基于全局坐标系的接口移动窗口，无需传递具体屏幕ID参数，即可实现窗口在多屏之间移动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "窗口位置变化监听：基于全局坐标系监听窗口矩形变化事件，统一获取窗口在多屏环境中的位置与尺寸变化信息。"
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
117307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478203-9646e47ae64bd87779552ff34ce47cda.png");

},
380298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958202-93ec305bf56ab76e141f4d17773838e6.png");

},
48739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798556-6d99a531e7a40efb32dce859c8f81bb3.png");

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