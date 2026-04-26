"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["239327"], {
498624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_security_components_security_component_overview_security_component_overview_md_d19_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-security-components-security-component-overview-security-component-overview-md-d19.json
var site_docs_system_security_access_control_security_components_security_component_overview_security_component_overview_md_d19_namespaceObject = JSON.parse('{"id":"system-security/access-control/security-components/security-component-overview/security-component-overview","title":"安全控件概述","description":"安全控件是系统提供的一组ArkUI基础组件，包括保存控件和粘贴控件。它们可以作为一种“特殊的按钮”融入应用页面，实现用户“点击即许可”的设计思路。","source":"@site/docs/system-security/access-control/security-components/security-component-overview/security-component-overview.md","sourceDirName":"system-security/access-control/security-components/security-component-overview","slug":"/system-security/access-control/security-components/security-component-overview/","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/security-component-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"安全控件概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/security-component-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"抓包/调试权限常见问题","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/faqs-permissions-debug/"},"next":{"title":"使用粘贴控件","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/pastebutton/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/security-components/security-component-overview/security-component-overview.md


const frontMatter = {
	title: '安全控件概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/security-component-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '安全控件概述';

const assets = {

};



const toc = [{
  "value": "安全控件列表",
  "id": "安全控件列表",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "安全控件概述",
        children: "安全控件概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全控件是系统提供的一组ArkUI基础组件，包括保存控件和粘贴控件。它们可以作为一种“特殊的按钮”融入应用页面，实现用户“点击即许可”的设计思路。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于动态申请权限的方式，安全控件可基于场景化授权，简化开发者和用户的操作，主要优点有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户可掌握授权时机，授权范围最小化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "授权场景可匹配用户真实意图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "减少弹窗打扰。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全控件坚持仅采集实现业务功能所必须的个人数据，以服务于用户的需求，帮助开发透明、可选、可控的隐私合规应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安全控件列表",
      children: "安全控件列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前系统提供两类安全控件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/security-components/pastebutton",
            children: "粘贴控件（PasteButton）"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该控件对应剪贴板读取特权。应用集成粘贴控件后，用户点击该控件，应用读取剪贴板数据时不会弹窗提示，进入后台10秒后应用权限被回收。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议使用场景：粘贴控件可以用于任何应用需要读取剪贴板的场景，避免弹窗提示对用户造成干扰。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/security-components/savebutton",
            children: "保存控件（SaveButton）"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该控件对应媒体库写入特权。应用集成保存控件后，用户首次使用保存控件展示弹窗，在点击允许后自动授权，应用会在短时间内获取访问媒体库特权接口的授权。后续使用无需弹窗授权。在API version 19及之前的版本中，授权持续时间为10秒；在API version 20及之后的版本中，授权持续时间为1分钟。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议使用场景：保存控件可以用于应用需要保存文件到媒体库的场景（保存图片、保存视频等）。与Picker需要拉起系统应用再由用户选择具体路径保存的方式不同，保存控件可以直接保存到指定媒体库路径，操作更快捷。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整体方案由安全控件UI组件、安全控件管理服务、安全控件增强组成："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件UI组件：实现了固定文字图标的样式，便于用户识别，同时提供了相对丰富的定制化能力，便于开发者定制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件管理服务：提供控件注册管理能力、控件临时授权机制、管理授权生效周期，确保应用后台、锁屏下无法注册使用安全控件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件增强：安全控件实现相关安全防护能力，例如：地址随机化、挑战值检查、回调UI框架复核控件信息、调用者地址检查、组件防覆盖、真实点击事件校验等机制，防止应用开发者通过混淆、隐藏、篡改、仿冒等方式滥用授权机制，泄露用户隐私。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者调用接口时，运作流程如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(176692)/* ["default"] */.A) + "",
        width: "772",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用开发者在ETS文件中集成安全控件，通过JS引擎解析后，在ArkUI框架中生成具体的控件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全控件注册控件信息到安全控件管理服务，安全控件管理服务检查控件信息的合法性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户点击事件分发到安全控件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全控件将点击事件上报到安全控件管理服务。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全控件管理服务根据控件种类对应不同权限，调用权限管理服务进行临时授权。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "授权成功后，安全控件回调OnClick通知应用层授权成功。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用调用相应的特权操作，如读取剪贴板信息、媒体库中创建文件等。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不同类型的安全控件，对于权限的使用方式不同、授权的有效期也不同，详情请查阅具体安全控件的", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%89%E5%85%A8%E6%8E%A7%E4%BB%B6%E5%88%97%E8%A1%A8",
            children: "开发指导"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应的服务会调用权限管理服务或安全控件管理服务，获取授权结果，返回鉴权结果。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于安全控件具有点击即授权的特性，为了保障用户的隐私不被恶意应用获取，系统针对安全控件做了很多的限制。应用开发者需保证安全控件在应用界面上清晰可见、用户能明确识别，防止因覆盖、混淆等因素导致授权失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当控件样式不合法导致授权失败的情况发生时，请开发者检查设备日志，过滤关键字\"SecurityComponentCheckFail\"可以获取具体原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840843)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该关键字相关的日志可能出现在不同级别的日志上，建议在过滤该关键字时不要筛选日志级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能会导致授权失败的问题（包括但不限于）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字体、图标尺寸过小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件整体尺寸过大。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字体、图标、背景按钮的颜色透明度过高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字体或图标与背景按钮颜色过于相似。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件超出屏幕、超出窗口等，导致显示不全。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件被其他组件或窗口遮挡。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全控件的父组件有类似变形模糊等可能导致安全控件显示不完整的属性。"
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
176692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478359-16b365fb1676d2638f377c3a42a8024e.png");

},
840843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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