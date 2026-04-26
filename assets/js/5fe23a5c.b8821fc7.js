"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["2580"], {
39538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_picker_camera_picker_md_5fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-picker-camera-picker-md-5fe.json
var site_docs_camera_kit_camera_dev_arkts_camera_picker_camera_picker_md_5fe_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-picker/camera-picker","title":"通过系统相机拍照和录像(CameraPicker)","description":"应用可调用CameraPicker拍摄照片或录制视频，无需申请相机权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-picker/camera-picker.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-picker","slug":"/camera-kit/camera-dev-arkts/camera-picker/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-picker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"通过系统相机拍照和录像(CameraPicker)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-picker","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"会话管理(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts-mandatory/camera-session-management/"},"next":{"title":"预览(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-preview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-picker/camera-picker.md


const frontMatter = {
	title: '通过系统相机拍照和录像(CameraPicker)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-picker',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '通过系统相机拍照和录像(CameraPicker)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通过系统相机拍照和录像camerapicker",
        children: "通过系统相机拍照和录像(CameraPicker)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可调用CameraPicker拍摄照片或录制视频，无需申请相机权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CameraPicker的相机交互界面由系统提供，在用户点击拍摄和确认按钮后，调用CameraPicker的应用获取对应的照片或者视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者如果只是需要获取即时拍摄的照片或者视频，则可以使用CameraPicker能力来轻松实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于照片的拍摄和确认都是由用户进行主动确认，因此应用开发者可以不用申请操作相机的相关权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker",
        children: "@ohos.multimedia.cameraPicker (相机选择器)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关接口，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera, cameraPicker as picker } from '@kit.CameraKit';\nimport { fileIo, fileUri } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker#pickerprofile",
            children: "PickerProfile"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(106482)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PickerProfile的saveUri为可选参数，如果未配置该项，拍摄的照片和视频默认存入媒体库中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果不想将照片和视频存入媒体库，请自行配置应用沙箱内的文件路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用沙箱内的这个文件必须是一个存在的、可写的文件。这个文件的uri传入picker接口之后，相当于应用给系统相机授权该文件的读写权限。系统相机在拍摄结束之后，会对此文件进行覆盖写入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "createPickerProfile(context: Context): picker.PickerProfile {\n  let pathDir = context.filesDir;\n  let fileName = `${new Date().getTime()}`;\n  let filePath = pathDir + `/${fileName}.tmp`;\n  fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE);\n\n  let uri = fileUri.getUriFromPath(filePath);\n  let pickerProfile: picker.PickerProfile = {\n    cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK,\n    saveUri: uri\n  };\n  return pickerProfile;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["fileIo接口调用方法请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileiocreaterandomaccessfilesync10",
            children: "createRandomAccessFileSync"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri#fileurigeturifrompath",
            children: "getUriFromPath"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用picker拍摄接口获取拍摄的结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async getPickerResult(context: Context, pickerProfile: picker.PickerProfile): Promise<picker.PickerResult> {\n  let result: picker.PickerResult =\n    await picker.pick(context, [picker.PickerMediaType.PHOTO, picker.PickerMediaType.VIDEO],\n      pickerProfile);\n  console.info(`picker resultCode: ${result.resultCode},resultUri: ${result.resultUri},mediaType: ${result.mediaType}`);\n  return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera, cameraPicker as picker } from '@kit.CameraKit';\nimport { fileIo, fileUri } from '@kit.CoreFileKit';\n\n@Entry\n@Component\nstruct Index {\n  @State imgSrc: string = '';\n  @State videoSrc: string = '';\n  createPickerProfile(context: Context): picker.PickerProfile {\n    let pathDir = context.filesDir;\n    let fileName = `${new Date().getTime()}`;\n    let filePath = pathDir + `/${fileName}.tmp`;\n    fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE);\n\n    let uri = fileUri.getUriFromPath(filePath);\n    let pickerProfile: picker.PickerProfile = {\n      cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK,\n      saveUri: uri\n    };\n    return pickerProfile;\n  }\n\n  async getPickerResult(context: Context, pickerProfile: picker.PickerProfile): Promise<picker.PickerResult> {\n    let result: picker.PickerResult =\n      await picker.pick(context, [picker.PickerMediaType.PHOTO, picker.PickerMediaType.VIDEO],\n        pickerProfile);\n    console.info(`picker resultCode: ${result.resultCode},resultUri: ${result.resultUri},mediaType: ${result.mediaType}`);\n    return result;\n  }\n\n  getContext(): Context | undefined {\n    let uiContext: UIContext = this.getUIContext();\n    let context: Context | undefined = uiContext.getHostContext();\n    return context;\n  }\n\n  build() {\n    RelativeContainer() {\n      Column() {\n        Image(this.imgSrc).width(200).height(200).backgroundColor(Color.Black).margin(5);\n        Video({ src: this.videoSrc}).width(200).height(200).autoPlay(true);\n        Button(\"Test Picker Photo&Video\").fontSize(20)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            let context = this.getContext();\n            if (context === undefined) {\n              return;\n            }\n            let pickerProfile = this.createPickerProfile(context);\n            let result = await this.getPickerResult(context, pickerProfile);\n            if (result.resultCode == 0) {\n              if (result.mediaType === picker.PickerMediaType.PHOTO) {\n                this.imgSrc = result.resultUri;\n              } else {\n                this.videoSrc = result.resultUri;\n              }\n            }\n          }).margin(5);\n\n      }.alignRules({\n        center: { anchor: '__container__', align: VerticalAlign.Center },\n        middle: { anchor: '__container__', align: HorizontalAlign.Center }\n      })\n      .id('CaptureOrVideoButton')\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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
106482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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