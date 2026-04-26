"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["809833"], {
719645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_vision_kit_guide_core_vision_face_detector_core_vision_face_detector_md_e63_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-vision-kit-guide-core-vision-face-detector-core-vision-face-detector-md-e63.json
var site_docs_core_vision_kit_guide_core_vision_face_detector_core_vision_face_detector_md_e63_namespaceObject = JSON.parse('{"id":"core-vision-kit-guide/core-vision-face-detector/core-vision-face-detector","title":"人脸检测","description":"适用场景","source":"@site/docs/core-vision-kit-guide/core-vision-face-detector/core-vision-face-detector.md","sourceDirName":"core-vision-kit-guide/core-vision-face-detector","slug":"/core-vision-kit-guide/core-vision-face-detector/","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-face-detector/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"人脸检测","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-face-detector","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通用文字识别","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-text-recognition/"},"next":{"title":"人脸比对","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-face-comparator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-vision-kit-guide/core-vision-face-detector/core-vision-face-detector.md


const frontMatter = {
	title: '人脸检测',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-face-detector',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '人脸检测';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "世界坐标系",
  "id": "世界坐标系",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
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
        id: "人脸检测",
        children: "人脸检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测图片中的人脸，返回高精度人脸矩形框坐标、人脸五官位置、人脸朝向、人脸置信度。可通过对人脸的定位，实现对人脸特定位置的美化修饰。广泛应用于各类人脸识别场景，如人脸聚类、美颜等场景中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(359804)/* ["default"] */.A) + "",
        width: "320",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力当前不支持模拟器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AI能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "约束"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 输入图像具有合适的成像质量（建议720p以上），224px<高度<15210px，100px<宽度<10000px，高宽比例建议10:1以下（高度小于宽度的10倍），接近手机屏幕高宽比例为宜。  - 接口调用耗时较久，不适合在需要实时检测的场景下使用。  - 不支持同一用户启用多个线程。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "世界坐标系",
      children: "世界坐标系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下方图片指示坐标系辅助表示人脸朝向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(264622)/* ["default"] */.A) + "",
        width: "493",
        height: "439"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用人脸检测时，将实现人脸检测相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { faceDetector } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单配置页面的布局，并在Button组件添加点击事件，拉起图库，选择图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('选择图片')\n  .type(ButtonType.Capsule)\n  .fontColor(Color.White)\n  .alignSelf(ItemAlign.Center)\n  .width('80%')\n  .margin(10)\n  .onClick(() => {\n    // 拉起图库，获取图片资源\n    void this.selectImage();\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过图库获取图片资源，将图片转换为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private async selectImage() {\n  let uri = await this.openPhoto()\n  if (uri === undefined) {\n    hilog.error(0x0000, 'faceDetector', \"Failed to get uri.\");\n  }\n  this.loadImage(uri)\n}\n\nprivate async openPhoto(): Promise<string> {\n  return new Promise<string>((resolve) => {\n    let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    photoPicker.select({\n      MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n      maxSelectNumber: 1\n    }).then(res => {\n      resolve(res.photoUris[0])\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'faceDetector', `Failed to get photo image uri.code: ${err.code}, message: ${err.message}`);\n      resolve('');\n    })\n  })\n}\n\nprivate loadImage(name: string) {\n  setTimeout(async () => {\n    let imageSource: image.ImageSource | undefined = undefined;\n    let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);\n    imageSource = image.createImageSource(fileSource.fd);\n    this.chooseImage = await imageSource.createPixelMap();\n    this.dataValues = \"\";\n  }, 100\n  )\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实例化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-face-detector-api/core-vision-face-detector-api#visioninfo",
            children: "VisionInfo"
          }), "对象，并传入待检测图片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "，实现人脸检测功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化并调用人脸检测接口\nvoid faceDetector.init();\nlet visionInfo: faceDetector.VisionInfo = {\n  pixelMap: this.chooseImage,\n};\nlet data:faceDetector.Face[] = await faceDetector.detect(visionInfo);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果需要将结果展示在界面上，可以使用下列代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let data:faceDetector.Face[] = await faceDetector.detect(visionInfo);\nif (data.length === 0) {\n  this.dataValues = \"No face is detected in the image. Select an image that contains a face.\";\n} else {\n  let faceString = JSON.stringify(data);\n  hilog.info(0x0000, 'testTag', \"faceString data is \" + faceString);\n  this.dataValues = faceString;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { faceDetector } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct Index {\n  @State chooseImage: PixelMap | undefined = undefined\n  @State dataValues: string = ''\n\n  build() {\n    Column() {\n      Image(this.chooseImage)\n        .objectFit(ImageFit.Fill)\n        .height('60%')\n      Text(this.dataValues)\n        .copyOption(CopyOptions.LocalDevice)\n        .height('15%')\n        .margin(10)\n        .width('60%')\n      Button('选择图片')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          // 拉起图库\n          void this.selectImage()\n        })\n      Button('人脸检测')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          if(!this.chooseImage) {\n            hilog.error(0x0000, 'faceDetectorSample', \"Failed to detect face.\");\n            return;\n          }\n          // 调用人脸检测接口\n          void faceDetector.init();\n          let visionInfo: faceDetector.VisionInfo = {\n            pixelMap: this.chooseImage,\n          };\n          faceDetector.detect(visionInfo)\n            .then((data: faceDetector.Face[]) => {\n              if (data.length === 0) {\n                this.dataValues = \"No face is detected in the image. Select an image that contains a face.\";\n              } else {\n                let faceString = JSON.stringify(data);\n                hilog.info(0x0000, 'faceDetectorSample', \"faceString data is \" + faceString);\n                this.dataValues = faceString;\n              }\n            })\n            .catch((error: BusinessError) => {\n              hilog.error(0x0000, 'faceDetectorSample', `Face detection failed. Code: ${error.code}, message: ${error.message}`);\n              this.dataValues = `Error: ${error.message}`;\n            });\n          void faceDetector.release();\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  private async selectImage() {\n    let uri = await this.openPhoto()\n    if (uri === undefined) {\n      hilog.error(0x0000, 'faceDetectorSample', \"Failed to get uri.\");\n    }\n    this.loadImage(uri);\n  }\n\n  private async openPhoto(): Promise<string> {\n    return new Promise<string>((resolve) => {\n      let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n      photoPicker.select({\n        MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n        maxSelectNumber: 1\n      }).then(res => {\n        resolve(res.photoUris[0])\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, 'faceDetectorSample', `Failed to get photo image uri.code: ${err.code}, message: ${err.message}`);\n        resolve('');\n      })\n    })\n  }\n\n  private loadImage(name: string) {\n    setTimeout(async () => {\n      let imageSource: image.ImageSource | undefined = undefined;\n      try {\n        let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);\n        imageSource = image.createImageSource(fileSource.fd);\n        this.chooseImage = await imageSource.createPixelMap();\n        this.dataValues = \"\";\n        await fileIo.close(fileSource);\n      } catch (error) {\n        hilog.error(0x0000, 'faceDetectorSample', `Failed to open file. Error: ${error}`);\n      }\n    }, 100\n    )\n  }\n}\n"
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
264622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479307-0d64391edcefe5c9a0a089e2fb901235.png");

},
359804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959306-e6020be8a882e0b41ce091789e8e9bb3.png");

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