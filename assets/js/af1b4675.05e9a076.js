"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["671774"], {
777564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_servicendk_servicecollaboration_servicendk_description_servicecollaboration_servicendk_description_md_af1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-service-collaboration-kit-guide-servicecollaboration-servicendk-servicecollaboration-servicendk-description-servicecollaboration-servicendk-description-md-af1.json
var site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_servicendk_servicecollaboration_servicendk_description_servicecollaboration_servicendk_description_md_af1_namespaceObject = JSON.parse('{"id":"system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/servicecollaboration-servicendk-description","title":"跨设备互通NDK特性概述","description":"跨设备互通提供相机、扫描以及图库（图片和视频）的跨设备调用能力，TV、平板或2in1设备可以调用手机的相机、扫描、图库等功能。","source":"@site/docs/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/servicecollaboration-servicendk-description.md","sourceDirName":"system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description","slug":"/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"跨设备互通NDK特性概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-servicendk-description","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备互通开发指导","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-service/servicecollaboration-dev-guides/"},"next":{"title":"跨设备互通NDK开发指导","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/servicecollaboration-servicendk-description.md


const frontMatter = {
	title: '跨设备互通NDK特性概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-servicendk-description',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备互通NDK特性概述';

const assets = {

};



const toc = [{
  "value": "运作机制",
  "id": "运作机制",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "跨设备互通ndk特性概述",
        children: "跨设备互通NDK特性概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备互通提供相机、扫描以及图库（图片和视频）的跨设备调用能力，TV、平板或2in1设备可以调用手机的相机、扫描、图库等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505951)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节以拍照为例展开介绍，扫描、图库功能的使用与拍照类似。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在TV、平板或2in1设备上使用富文本类编辑应用（如：备忘录、邮件、笔记等）时，想要拍摄一些照片作为素材，但是当前设备拍摄不太方便。通过跨设备互通-拍照，用户可以在当前设备的应用中指定平板或手机设备，并打开平板或手机的相机来拍摄所需的素材。通过手机或者平板设备拍摄，移动更便利、取景更灵巧、相机能力也更强大。拍摄的照片将实现快速回传到TV、平板或2in1设备的应用中，帮助用户高效完成图文并茂的文档设计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果同一组网下有多台手机或平板设备，用户可以选择不同的设备进行拍摄。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(26876)/* ["default"] */.A) + "",
        width: "525",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于分布式协同框架面向跨设备拍照的业务场景，为您提供了 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos",
        children: "HMS_ServiceCollaboration_GetCollaborationDeviceInfos"
      }), "（设备列表接口）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration",
        children: "HMS_ServiceCollaboration_StartCollaboration"
      }), "（跨端拍照、扫描、拉起图库选择图片）或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2",
        children: "HMS_ServiceCollaboration_StartCollaborationV2"
      }), "（跨端拍照、扫描、拉起图库选择图片和视频）和 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_stopcollaboration",
        children: "HMS_ServiceCollaboration_StopCollaboration"
      }), "（终止跨设备互通）四个接口。只需要调用这四个接口，即可完成跨设备互通，无需关注分布式场景下数据传输、指令控制等具体细节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统分布式协同框架跨设备自动建链"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["a. 通过系统的分布式协同框架，同账号下的本端设备（2in1设备/平板）与远端设备（手机/平板）自动建立连接。系统将自动完成设备的发现、连接、认证等流程，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos",
            children: "HMS_ServiceCollaboration_GetCollaborationDeviceInfos"
          }), "接口提供可用的具有相机、扫描和图库能力的远端设备信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(324315)/* ["default"] */.A) + "",
            width: "197",
            height: "283"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["b. 通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration",
            children: "HMS_ServiceCollaboration_StartCollaboration"
          }), "或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2",
            children: "HMS_ServiceCollaboration_StartCollaborationV2"
          }), "拉起对应跨设备互通能力，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_stopcollaboration",
            children: "HMS_ServiceCollaboration_StopCollaboration"
          }), "终止跨设备互通能力。分布式协同框架会将远端拍摄状态信息实时回传到应用侧，应用侧会根据错误码做相关提示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["拍摄状态可能为：对端设备拍摄中、图片导入中、协同失败、本端WLAN未开启、双端WLAN或者蓝牙未开启。具体拍摄状态提示可由应用选择绘制，对应提示信息参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#servicecollaborationeventcode-1",
            children: "ServiceCollaborationEventCode"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "对端设备拍摄中"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "图片导入中"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "协同失败"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "本端WLAN未开启"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "双端WLAN或者蓝牙未开启"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "用户使用远端设备拍照"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用户使用远端设备完成拍照并确认，照片将回传到本端设备的应用，完成整个流程。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "远端设备将自动退出相机界面，回到初始状态。"
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
505951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
324315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958436-51c6cc36db17adfeb8ed219f2f494de8.png");

},
26876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438477-032b64d1fc4186b5cc3a19defd729fd0.gif");

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