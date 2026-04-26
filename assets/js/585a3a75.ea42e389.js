"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["47451"], {
706651(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_control_center_camera_control_center_md_585_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-control-center-camera-control-center-md-585.json
var site_docs_camera_kit_camera_dev_arkts_camera_control_center_camera_control_center_md_585_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-control-center/camera-control-center","title":"相机控制器(ArkTS)","description":"从API version 20开始，相机框架通过相机控制器，为应用在直播场景提供美颜、虚化等能力。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-control-center/camera-control-center.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-control-center","slug":"/camera-kit/camera-dev-arkts/camera-control-center/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-control-center/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"相机控制器(ArkTS)","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-control-center","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"压力管控(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-system-pressure/"},"next":{"title":"微距能力设置(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-macro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-control-center/camera-control-center.md


const frontMatter = {
	title: '相机控制器(ArkTS)',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-control-center',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '相机控制器(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "状态监听",
  "id": "状态监听",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "相机控制器arkts",
        children: "相机控制器(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，相机框架通过相机控制器，为应用在直播场景提供美颜、虚化等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机控制器为直播和视频通话场景设计，目前仅支持在前置镜头的录像模式下使用，最高可支持1080P分辨率和30fps帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "Camera"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入camera接口，接口中提供了相机相关的属性和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-controlcenterquery/arkts-apis-camera-controlcenterquery#iscontrolcentersupported20",
            children: "isControlCenterSupported"
          }), "接口，查询当前设备及当前场景是否支持相机控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function isControlCenterSupported(videoSession: camera.VideoSession): boolean {\n  let isSupported: boolean = videoSession.isControlCenterSupported();\n  return isSupported;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-controlcenterquery/arkts-apis-camera-controlcenterquery#getsupportedeffecttypes20",
            children: "getSupportedEffectTypes"
          }), "接口，查询当前设备及当前场景下，相机控制器支持的效果类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSupportedEffectTypes(videoSession: camera.VideoSession): Array<camera.ControlCenterEffectType> {\n  let effectTypes: Array<camera.ControlCenterEffectType> = [];\n  effectTypes = videoSession.getSupportedEffectTypes();\n  return effectTypes;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若设备及场景支持相机控制器，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-controlcenter/arkts-apis-camera-controlcenter#enablecontrolcenter20",
            children: "enableControlCenter"
          }), "接口可启用或关闭控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function enableControlCenter(videoSession: camera.VideoSession, enable: boolean): void {\n  let isSupported: boolean = videoSession.isControlCenterSupported();\n  if (isSupported) {\n    videoSession.enableControlCenter(enable);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使能相机控制器后，可以在状态栏看到新增的视频效果图标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(423389)/* ["default"] */.A) + "",
            width: "173",
            height: "60"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击视频效果图标，在弹出的二级页面中，用户可调节控制器支持的效果，如图所示为美颜和背景虚化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(381955)/* ["default"] */.A) + "",
            width: "402",
            height: "337"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用相机控制器的过程中，应用可以监听控制器效果的使能状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videosession/arkts-apis-camera-videosession#oncontrolcentereffectstatuschange20",
        children: "controlCenterEffectStatusChange"
      }), "的回调函数获取控制器中各效果的使能状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当控制器中某效果使能状态发生变化时，callback返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#controlcenterstatusinfo20",
        children: "ControlCenterStatusInfo"
      }), "参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction callback(err: BusinessError, status: camera.ControlCenterStatusInfo): void {\n  if (err !== undefined && err.code !== 0) {\n    console.error(`Callback Error, errorCode: ${err.code}`);\n    return;\n  }\n  console.info(`controlCenterEffectStatusChange: ${status}`);\n}\n\nfunction registerControlCenterEffectStatusChangeCallback(videoSession: camera.VideoSession): void {\n  videoSession.on('controlCenterEffectStatusChange', callback);\n}\n"
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
423389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478571-d7e0fd90f48e30a65b2fa7fde3dde83f.png");

},
381955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798922-9c6cc150d53f775e15f8e70d4990ddb2.png");

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