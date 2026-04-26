"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["525493"], {
108893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_vision_kit_guide_core_vision_object_detection_core_vision_object_detection_md_cd2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-vision-kit-guide-core-vision-object-detection-core-vision-object-detection-md-cd2.json
var site_docs_core_vision_kit_guide_core_vision_object_detection_core_vision_object_detection_md_cd2_namespaceObject = JSON.parse('{"id":"core-vision-kit-guide/core-vision-object-detection/core-vision-object-detection","title":"多目标识别","description":"适用场景","source":"@site/docs/core-vision-kit-guide/core-vision-object-detection/core-vision-object-detection.md","sourceDirName":"core-vision-kit-guide/core-vision-object-detection","slug":"/core-vision-kit-guide/core-vision-object-detection/","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-object-detection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"多目标识别","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-object-detection","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"主体分割","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-subject-segmentation/"},"next":{"title":"骨骼点检测","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-skeleton-detection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-vision-kit-guide/core-vision-object-detection/core-vision-object-detection.md


const frontMatter = {
	title: '多目标识别',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-object-detection',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '多目标识别';

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
        id: "多目标识别",
        children: "多目标识别"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可同时检测出给定图片中的各种物体，包括风景、动物、植物、建筑、人脸、表格、文本等位置，并框选出物体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154614)/* ["default"] */.A) + "",
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
            children: "多目标识别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 输入图像具有合适成像的质量（建议720p以上），100px<高度<10000px，100px<宽度<10000px，高宽比例建议5:1以下（高度小于宽度的5倍），接近手机屏幕高宽比例为宜。  - 图片中的物体占比需要大于0.1%。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用多目标识别时，将实现多目标识别相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { objectDetection, visionBase } from '@kit.CoreVisionKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
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
            children: "private async selectImage() {\n  let uri = await this.openPhoto()\n  if (uri === undefined) {\n    hilog.error(0x0000, 'objectDetectSample', \"Failed to define uri.\");\n  }\n  this.loadImage(uri)\n}\n\nprivate async openPhoto(): Promise<string> {\n  return new Promise<string>((resolve, reject) => {\n    let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    photoPicker.select({\n      MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE, maxSelectNumber: 1\n    }).then(res => {\n      resolve(res.photoUris[0])\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'objectDetectSample', `Failed to get photo image uri. code: ${err.code}, message: ${err.message}`);\n      reject('')\n    })\n  })\n}\n\nprivate loadImage(name: string) {\n  setTimeout(async () => {\n    let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);\n    this.imageSource = image.createImageSource(fileSource.fd);\n    this.chooseImage = await this.imageSource.createPixelMap();\n  }, 100)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实例化Request对象，并传入待检测图片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "，调用多目标识别的实现多目标识别功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用多目标检测接口\nlet request: visionBase.Request = {\n  inputData: { pixelMap: this.chooseImage }\n};\nlet data: objectDetection.ObjectDetectionResponse = await (await objectDetection.ObjectDetector.create()).process(request);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果需要将结果展示在界面上，可以使用下列代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let objectJson = JSON.stringify(data);\nhilog.info(0x0000, 'objectDetectSample', `Succeeded in object detection: ${objectJson}`);\nthis.dataValues = objectJson;\n"
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
        children: "import { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { objectDetection, visionBase } from '@kit.CoreVisionKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct Index {\n  private imageSource: image.ImageSource | undefined = undefined;\n  @State chooseImage: PixelMap | undefined = undefined\n  @State dataValues: string = ''\n\n  build() {\n    Column() {\n      Image(this.chooseImage)\n        .objectFit(ImageFit.Fill)\n        .height('60%')\n\n      Text(this.dataValues)\n        .copyOption(CopyOptions.LocalDevice)\n        .height('15%')\n        .margin(10)\n        .width('60%')\n\n      Button('选择图片')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          // 拉起图库\n          void this.selectImage()\n        })\n\n      Button('开始多目标识别')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          // 调用封装的异步识别函数\n          void this.handleMultiObjectDetection();\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  // 封装多目标识别的异步逻辑\n  private async handleMultiObjectDetection() {\n    if(!this.chooseImage) {\n      hilog.error(0x0000, 'objectDetectSample', `Failed to choose image.`);\n      return;\n    }\n    let request: visionBase.Request = {\n      inputData: { pixelMap: this.chooseImage }\n    };\n    try {\n      let data: objectDetection.ObjectDetectionResponse =\n        await (await objectDetection.ObjectDetector.create()).process(request);\n      let objectJson = JSON.stringify(data);\n      hilog.info(0x0000, 'objectDetectSample', `Succeeded in object detection: ${objectJson}`);\n      this.dataValues = objectJson;\n    } catch (error) {\n      hilog.error(0x0000, 'objectDetectSample', `Failed to get result. Error: ${error}`);\n    }\n  }\n\n  private async selectImage() {\n    try {\n      let uri = await this.openPhoto();\n      if (uri === undefined) {\n        hilog.error(0x0000, 'objectDetectSample', \"Failed to define uri.\");\n        return;\n      }\n      this.loadImage(uri);\n    } catch (err) {\n      hilog.error(0x0000, 'objectDetectSample', `Failed to get photo image uri. code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  private async openPhoto(): Promise<string> {\n    return new Promise<string>((resolve, reject) => {\n      let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n      photoPicker.select({\n        MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE, maxSelectNumber: 1\n      }).then(res => {\n        resolve(res.photoUris[0]);\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, 'objectDetectSample', `Failed to get photo image uri. code: ${err.code}, message: ${err.message}`);\n        reject(err);\n      })\n    })\n  }\n\n  private loadImage(name: string) {\n    setTimeout(async () => {\n      try {\n        let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);\n        this.imageSource = image.createImageSource(fileSource.fd);\n        this.chooseImage = await this.imageSource.createPixelMap();\n        await fileIo.close(fileSource);\n      } catch (error) {\n        hilog.error(0x0000, 'objectDetectSample', `Failed to open file. Error: ${error}`);\n      }\n    }, 100)\n  }\n}\n"
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
154614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959308-169bcdbe11a0bbad176bb3576bbf829c.png");

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