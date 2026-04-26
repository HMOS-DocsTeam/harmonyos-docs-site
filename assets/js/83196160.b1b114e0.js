"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["116320"], {
816766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_multimedia_web_picture_in_picture_web_picture_in_picture_md_831_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-multimedia-web-picture-in-picture-web-picture-in-picture-md-831.json
var site_docs_arkweb_web_use_multimedia_web_picture_in_picture_web_picture_in_picture_md_831_namespaceObject = JSON.parse('{"id":"arkweb/web-use-multimedia/web-picture-in-picture/web-picture-in-picture","title":"Web组件支持画中画","description":"Web组件提供画中画功能支持，应用可利用W3C标准的Picture-in-Picture API在网页中创建浮动窗口以播放视频，使用户在浏览其他网页或与其他应用交互时，可通过该画中画窗口继续观看视频。","source":"@site/docs/arkweb/web-use-multimedia/web-picture-in-picture/web-picture-in-picture.md","sourceDirName":"arkweb/web-use-multimedia/web-picture-in-picture","slug":"/arkweb/web-use-multimedia/web-picture-in-picture/","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web-picture-in-picture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Web组件支持画中画","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-picture-in-picture","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"托管网页中的媒体播放","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/app-takeovers-web-media/"},"next":{"title":"Web组件支持视频沉浸式全屏播放","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web_full_screen/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-multimedia/web-picture-in-picture/web-picture-in-picture.md


const frontMatter = {
	title: 'Web组件支持画中画',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-picture-in-picture',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件支持画中画';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "进入画中画",
  "id": "进入画中画",
  "level": 2
}, {
  "value": "退出画中画",
  "id": "退出画中画",
  "level": 2
}, {
  "value": "监听画中画事件",
  "id": "监听画中画事件",
  "level": 2
}, {
  "value": "画中画窗口交互",
  "id": "画中画窗口交互",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "web组件支持画中画",
        children: "Web组件支持画中画"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件提供画中画功能支持，应用可利用W3C标准的Picture-in-Picture API在网页中创建浮动窗口以播放视频，使用户在浏览其他网页或与其他应用交互时，可通过该画中画窗口继续观看视频。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若使用线上视频资源，则需在配置文件中设置网络权限。权限的添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前H264/H265/HLS格式的视频可在创建的画中画窗口中播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "画中画窗口的大小调整依据系统能力，具体参照设计指南中的系统特性与能力部分。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "进入画中画",
      children: "进入画中画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以仅包含媒体源的video元素和一个用户交互的button元素为例，介绍如何创建一个浮动窗口播放视频，使用户在浏览其他网页或与其他应用交互时，能够通过该画中画窗口持续观看视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- 使用时需要自行替换视频链接 -->\n<video id=\"video\" src=\"https://example.com/file.mp4\" controls></video>\n<button id=\"togglePipButton\">开启画中画</button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTMLVideoElement接口提供的requestPictureInPicture()方法请求启动画中画，如果系统支持画中画能力，则会以画中画模式显示视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "togglePipButton.addEventListener(\"click\", async () => {\n  try {\n    // 请求进入画中画模式\n    await video.requestPictureInPicture();\n  } catch (err) {\n    // 如果画中画模式切换失败，打印错误信息\n    console.error(\"Picture-in-Picture mode failed:\", err);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "退出画中画",
      children: "退出画中画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求退出画中画模式，请使用Document接口的exitPictureInPicture()方法，视频将重新在原始标签页中显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\ntry {\n  if (videoElement !== document.pictureInPictureElement) {\n    await videoElement.requestPictureInPicture();\n  } else {\n    await document.exitPictureInPicture();\n  }\n}\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听画中画事件",
      children: "监听画中画事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户启动画中画模式播放视频时，会显示一个浮动窗口用于播放视频。系统规定每次只能播放一个画中画视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTMLVideoElement的enterpictureinpicture事件在HTMLVideoElement成功进入画中画模式时触发，而HTMLVideoElement的leavepictureinpicture事件在HTMLVideoElement成功退出画中画模式时触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在监听到这些事件变化时，开发者可以进行相应的处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "videoElement.addEventListener('enterpictureinpicture', function (event) {\n// 视频进入画中画模式。\n});\n\nvideoElement.addEventListener('leavepictureinpicture', function (event) {\n// 视频退出画中画模式。\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画中画窗口交互",
      children: "画中画窗口交互"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画整体窗口控制："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持双击画中画窗口控制放大或缩小窗口尺寸。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持拖拽画中画窗口到屏幕任意位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持单击画中画窗口控制画中画控制层UI控件的显示与隐藏。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画控制层UI控件："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画中画窗口控制层包含“关闭”（关闭画中画窗口）、“恢复”（从画中画窗口恢复到原应用界面）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放控制包含暂停，播放，前进/后退（默认显示前进/后退UI控件，若原视频不支持前进后退，单击无响应）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(556019)/* ["default"] */.A) + "",
            width: "193",
            height: "111"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持启动/退出画中画的完整示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧ets代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State videoSrc: Resource = $rawfile('PictureInPicture.html');\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({src: this.videoSrc, controller: this.controller})\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面html代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- PictureInPicture.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Picture-in-Picture Demo</title>\n    <style>\n        body {\n          font-family: Arial, sans-serif;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          height: 100vh;\n          margin: 0;\n        }\n        video {\n          width: 60%;\n          border: 1px solid #ccc;\n          border-radius: 8px;\n          margin-bottom: 20px;\n        }\n        button {\n          padding: 10px 20px;\n          font-size: 16px;\n          cursor: pointer;\n        }\n    </style>\n</head>\n<body>\n<!-- 使用时需要自行替换视频链接 -->\n<video id=\"video\" src=\"https://example.com/file.mp4\" controls></video>\n<button id=\"togglePipButton\">开启画中画</button>\n\n<script>\n    const video = document.getElementById(\"video\");\n    const togglePipButton = document.getElementById(\"togglePipButton\");\n\n    // 如果浏览器不支持画中画功能或被禁用，则隐藏按钮\n    togglePipButton.hidden =\n      !document.pictureInPictureEnabled || video.disablePictureInPicture;\n\n    // 监听按钮单击事件，切换画中画模式\n    togglePipButton.addEventListener(\"click\", async () => {\n      try {\n        if (document.pictureInPictureElement) {\n          // 如果当前处于画中画模式，退出画中画\n          await document.exitPictureInPicture();\n        } else {\n          // 否则，进入画中画模式\n          await video.requestPictureInPicture();\n        }\n      } catch (err) {\n        // 如果画中画模式切换失败，打印错误信息\n        console.error(\"Picture-in-Picture mode failed:\", err);\n      }\n    });\n\n    // 监听进入画中画事件\n    video.addEventListener(\"enterpictureinpicture\", () => {\n      // 更新按钮文本为“退出画中画”\n      togglePipButton.textContent = \"退出画中画\";\n    });\n\n    // 监听退出画中画事件\n    video.addEventListener(\"leavepictureinpicture\", () => {\n      // 更新按钮文本为“开启画中画”\n      togglePipButton.textContent = \"开启画中画\";\n    });\n</script>\n</body>\n</html>\n"
          })
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
556019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958232-c16646f741c817fb3f749fffe15cf97e.png");

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