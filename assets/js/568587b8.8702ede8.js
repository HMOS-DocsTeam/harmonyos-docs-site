"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["794279"], {
680788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_overview_camera_overview_md_568_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-overview-camera-overview-md-568.json
var site_docs_camera_kit_camera_overview_camera_overview_md_568_namespaceObject = JSON.parse('{"id":"camera-kit/camera-overview/camera-overview","title":"Camera Kit简介","description":"开发者通过调用Camera Kit（相机服务）提供的接口可以开发相机应用，应用通过访问和操作相机硬件，实现基础操作，如预览、拍照和录像；还可以通过接口组合完成更多操作，如控制闪光灯和曝光时间、对焦或调焦等。","source":"@site/docs/camera-kit/camera-overview/camera-overview.md","sourceDirName":"camera-kit/camera-overview","slug":"/camera-kit/camera-overview/","permalink":"/harmonyos-docs-site/camera-kit/camera-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Camera Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"播控推荐服务","permalink":"/harmonyos-docs-site/avsession-kit/avsession-recommendation/"},"next":{"title":"申请相机开发的权限","permalink":"/harmonyos-docs-site/camera-kit/camera-preparation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-overview/camera-overview.md


const frontMatter = {
	title: 'Camera Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Camera Kit简介';

const assets = {

};



const toc = [{
  "value": "开发场景",
  "id": "开发场景",
  "level": 2
}, {
  "value": "开发模型",
  "id": "开发模型",
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
        id: "camera-kit简介",
        children: "Camera Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过调用Camera Kit（相机服务）提供的接口可以开发相机应用，应用通过访问和操作相机硬件，实现基础操作，如预览、拍照和录像；还可以通过接口组合完成更多操作，如控制闪光灯和曝光时间、对焦或调焦等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发场景",
      children: "开发场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者需要开发一个相机应用（或是在应用内开发相机模块）时，可参考以下开发模型了解相机的工作流程，进而开发相机应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者仅是需要拉起系统相机拍摄一张照片、录制一段视频，可直接使用CameraPicker，无需申请相机权限，直接拉起系统相机完成拍摄，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker",
        children: "CameraPicker"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发模型",
      children: "开发模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机应用调用相机设备采集、加工图像视频数据，精确控制对应的硬件，灵活输出图像、视频内容，满足多镜头硬件适配（如广角、长焦、TOF）、多业务场景适配（如不同分辨率、不同格式、不同效果）的要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机应用开发的工作流程如图1所示，可概括为相机设备、相机会话管理和相机输出管理三部分。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机应用调用相机设备采集数据，作为相机输入流。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机会话管理可配置输入流，即选择合适的相机镜头（如前置、后置）进行拍摄。另外还可以配置闪光灯、曝光时间、对焦和调焦等参数，实现不同效果的拍摄，从而适配不同的业务场景。应用可以通过切换会话满足不同场景的拍摄需求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机输出管理配置相机的输出流，即将图像内容以预览流、拍照流或视频流输出。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 相机工作流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(584555)/* ["default"] */.A) + "",
        width: "3793",
        height: "778"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为便于开发者更好地开发相机应用，建议先了解相机开发工作流程，再了解相机的开发模型（如图2所示）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机应用通过控制相机，实现图像显示（预览）、照片保存（拍照）、视频录制（录像）等基础操作。在实现基本操作过程中，相机服务会控制相机设备采集和输出数据，采集的图像数据经过图像信号处理器（ISP，Image Signal Processor）处理后，通过相机底层的设备硬件接口（HDI，Hardware Device Interfaces），直接利用缓存队列传递到具体的功能模块进行处理。 缓存队列在应用开发中无需关注，用于将底层处理的数据及时送到上层进行图像显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以视频录制为例进行说明：相机服务可控制相机设备采集视频数据，生成视频流。采集的数据通过底层相机HDI处理后，再通过Surface将视频流传递给媒体录制服务，最后由媒体录制服务对视频数据进行处理，保存为视频文件，完成视频录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 相机开发模型"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291829)/* ["default"] */.A) + "",
        width: "3490",
        height: "1946"
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
291829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798916-bd197a67f4de8e0c6a7ba309cace2f43.png");

},
584555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478565-13eadf7eb99df3204fb98c7fba1bec65.png");

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