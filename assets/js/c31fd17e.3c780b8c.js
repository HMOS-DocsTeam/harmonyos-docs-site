"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["712158"], {
177816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_vision_kit_guide_core_vision_subject_segmentation_core_vision_subject_segmentation_md_c31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-vision-kit-guide-core-vision-subject-segmentation-core-vision-subject-segmentation-md-c31.json
var site_docs_core_vision_kit_guide_core_vision_subject_segmentation_core_vision_subject_segmentation_md_c31_namespaceObject = JSON.parse('{"id":"core-vision-kit-guide/core-vision-subject-segmentation/core-vision-subject-segmentation","title":"主体分割","description":"适用场景","source":"@site/docs/core-vision-kit-guide/core-vision-subject-segmentation/core-vision-subject-segmentation.md","sourceDirName":"core-vision-kit-guide/core-vision-subject-segmentation","slug":"/core-vision-kit-guide/core-vision-subject-segmentation/","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-subject-segmentation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"主体分割","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-subject-segmentation","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"人脸比对","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-face-comparator/"},"next":{"title":"多目标识别","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-object-detection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-vision-kit-guide/core-vision-subject-segmentation/core-vision-subject-segmentation.md


const frontMatter = {
	title: '主体分割',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-subject-segmentation',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '主体分割';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "主体分割",
        children: "主体分割"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主体分割，可以检测出图片中区别于背景的前景物体或区域（即“显著主体”），并将其从背景中分离出来，适用于需要识别和提取图像主要信息的场景，广泛使用于前景目标检测和前景主体分离的场景。例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主体贴纸，从图片中提取显著性的主体，去掉背景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "背景替换，替换并提取出主体对象的背景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "显著性检测，快速定位图片中显著性区域。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "辅助图片编辑，例如单独对主体进行美化处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763185)/* ["default"] */.A) + "",
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
            children: "主体分割"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 某个物体占比不小于原图大小的千分之五才会被认定为“主体”，才会支持分割。  - 不建议用于处理包含较多文字内容的图片分析场景。  - 输入图像具有合适成像的质量（建议720p以上），20px<高度<9000px，20px<宽度<9000px，高宽比例建议3:1以下（高度小于宽度的3倍），接近手机屏幕高宽比例为宜。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用相关类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { subjectSegmentation } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["准备预处理的图片资源，将图片转换为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "，并添加初始化和释放方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async aboutToAppear(): Promise<void> {\n  const initResult = await subjectSegmentation.init();\n  hilog.info(0x0000, 'subjectSegmentationSample', `Subject segmentation initialization result:${initResult}`);\n}\n\nasync aboutToDisappear(): Promise<void> {\n  await subjectSegmentation.release();\n  hilog.info(0x0000, 'subjectSegmentationSample', 'Subject segmentation released successfully');\n}\n\nprivate async selectImage() {\n  let uri = await this.openPhoto()\n  if (uri === undefined) {\n    hilog.error(0x0000, TAG, \"uri is undefined\");\n  }\n  this.loadImage(uri);\n}\n\nprivate async openPhoto(): Promise<Array<string>> {\n  return new Promise<Array<string>>((resolve, reject) => {\n    let PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n    PhotoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n    PhotoSelectOptions.maxSelectNumber = 1;\n    let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    hilog.info(0x0000, TAG, 'PhotoViewPicker.select successfully, PhotoSelectResult uri: ');\n    photoPicker.select(PhotoSelectOptions).then((PhotoSelectResult) => {\n      hilog.info(0x0000, TAG, `PhotoViewPicker.select successfully, PhotoSelectResult uri: ${PhotoSelectResult.photoUris}`);\n      resolve(PhotoSelectResult.photoUris)\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, TAG, `PhotoViewPicker.select failed with errCode: ${err.code}, errMessage: ${err.message}`);\n      reject();\n    });\n  })\n}\n\nprivate loadImage(names: string[]) {\n  setTimeout(async () => {\n    let imageSource: image.ImageSource | undefined = undefined\n    let fileSource = await fileIo.open(names[0], fileIo.OpenMode.READ_ONLY)\n    imageSource = image.createImageSource(fileSource.fd)\n    this.chooseImage = await imageSource.createPixelMap()\n  }, 100\n  )\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实例化待分割的入参项", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-subjectsegmentation-api/core-vision-subjectsegmentation-api#visioninfo",
            children: "VisionInfo"
          }), "，并传入待检测图片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let visionInfo: subjectSegmentation.VisionInfo = {\n  pixelMap: this.chooseImage,\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置通用文本识别的配置项", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-subjectsegmentation-api/core-vision-subjectsegmentation-api#segmentationconfig",
            children: "SegmentationConfig"
          }), "，包括最大分割主体个数、是否输出每个主体的分割信息，以及是否输出分割后的前景图。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let config: subjectSegmentation.SegmentationConfig = {\n  maxCount: parseInt(this.maxNum),\n  enableSubjectDetails: true,\n  enableSubjectForegroundImage: true,\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用subjectSegmentation的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-subjectsegmentation-api/core-vision-subjectsegmentation-api#subjectsegmentationdosegmentation",
            children: "subjectSegmentation.doSegmentation"
          }), "接口，实现主体分割。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let data: subjectSegmentation.SegmentationResult = await subjectSegmentation.doSegmentation(visionInfo, config);\nlet outputString = `Subject count: ${data.subjectCount}\\n`;\noutputString += `Max subject count: ${config.maxCount}\\n`;\noutputString += `Enable subject details: ${config.enableSubjectDetails ? 'Yes' : 'No'}\\n\\n`;\nlet segBox : subjectSegmentation.Rectangle = data.fullSubject.subjectRectangle;\nlet segBoxString = `Full subject box:\\nLeft: ${segBox.left}, Top: ${segBox.top}, Width: ${segBox.width}, Height: ${segBox.height}\\n\\n`;\noutputString += segBoxString;\n\nif (config.enableSubjectDetails) {\n  outputString += 'Individual subject boxes:\\n';\n  if (data.subjectDetails) {\n    for (let i = 0; i < data.subjectDetails.length; i++) {\n      let detailSegBox: subjectSegmentation.Rectangle = data.subjectDetails[i].subjectRectangle;\n      outputString += `Subject ${i + 1}:\\nLeft: ${detailSegBox.left}, Top: ${detailSegBox.top}, Width: ${detailSegBox.width}, Height: ${detailSegBox.height}\\n\\n`;\n    }\n  }\n}\n"
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
        children: "import { subjectSegmentation } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nconst TAG: string = \"ImageSegmentationSample\";\n\n@Entry\n@Component\nstruct Index {\n  @State chooseImage: PixelMap | undefined = undefined\n  @State dataValues: string = ''\n  @State segmentedImage: PixelMap | undefined = undefined\n  // 设置识别主体数量的上限\n  @State maxNum: string = '20'\n\n\n  build() {\n    Column() {\n      Image(this.chooseImage)\n        .objectFit(ImageFit.Fill)\n        .height('30%')\n        .accessibilityDescription(\"Image to be segmented\")\n\n      Scroll() {\n        Text(this.dataValues)\n          .copyOption(CopyOptions.LocalDevice)\n          .margin(10)\n          .width('100%')\n      }\n      .height('20%')\n\n      Image(this.segmentedImage)\n        .objectFit(ImageFit.Fill)\n        .height('30%')\n        .accessibilityDescription(\"Segmented subject image\")\n\n      Row() {\n        Text('Max subject count:')\n          .fontSize(16)\n        TextInput({ placeholder: 'Enter max subject count', text: this.maxNum })\n          .type(InputType.Number)\n          .placeholderColor(Color.Gray)\n          .fontSize(16)\n          .backgroundColor(Color.White)\n          .onChange((value: string) => {\n            this.maxNum = value\n          })\n      }\n      .width('80%')\n      .margin(10)\n\n      Button('Select Image')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          void this.selectImage()\n        })\n\n      Button('Image Segmentation')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          if (!this.chooseImage) {\n            hilog.error(0x0000, TAG, \"imageSegmentation not have chooseImage\");\n            return\n          }\n          let visionInfo: subjectSegmentation.VisionInfo = {\n            pixelMap: this.chooseImage,\n          };\n          let config: subjectSegmentation.SegmentationConfig = {\n            maxCount: parseInt(this.maxNum),\n            enableSubjectDetails: true,\n            enableSubjectForegroundImage: true,\n          };\n          subjectSegmentation.doSegmentation(visionInfo, config)\n            .then((data: subjectSegmentation.SegmentationResult) => {\n              let outputString = `Subject count: ${data.subjectCount}\\n`;\n              outputString += `Max subject count: ${config.maxCount}\\n`;\n              outputString += `Enable subject details: ${config.enableSubjectDetails ? 'Yes' : 'No'}\\n\\n`;\n              let segBox : subjectSegmentation.Rectangle = data.fullSubject.subjectRectangle;\n              let segBoxString = `Full subject box:\\nLeft: ${segBox.left}, Top: ${segBox.top}, Width: ${segBox.width}, Height: ${segBox.height}\\n\\n`;\n              outputString += segBoxString;\n\n              if (config.enableSubjectDetails) {\n                outputString += 'Individual subject boxes:\\n';\n                if (data.subjectDetails) {\n                  for (let i = 0; i < data.subjectDetails.length; i++) {\n                    let detailSegBox: subjectSegmentation.Rectangle = data.subjectDetails[i].subjectRectangle;\n                    outputString += `Subject ${i + 1}:\\nLeft: ${detailSegBox.left}, Top: ${detailSegBox.top}, Width: ${detailSegBox.width}, Height: ${detailSegBox.height}\\n\\n`;\n                  }\n                }\n              }\n\n              hilog.info(0x0000, TAG, \"Segmentation result: \" + outputString);\n              this.dataValues = outputString;\n\n              if (data.fullSubject && data.fullSubject.foregroundImage) {\n                this.segmentedImage = data.fullSubject.foregroundImage;\n              } else {\n                hilog.warn(0x0000, TAG, \"No foreground image in segmentation result\");\n              }\n            })\n            .catch((error: BusinessError) => {\n              hilog.error(0x0000, TAG, `Image segmentation failed errCode: ${error.code}, errMessage: ${error.message}`);\n              this.dataValues = `Error: ${error.message}`;\n              this.segmentedImage = undefined;\n            });\n        })\n    }\n    .width('100%')\n    .height('80%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  private async selectImage() {\n    let uri = await this.openPhoto()\n    if (uri === undefined) {\n      hilog.error(0x0000, TAG, \"uri is undefined\");\n    }\n    this.loadImage(uri);\n  }\n\n  private async openPhoto(): Promise<Array<string>> {\n    return new Promise<Array<string>>((resolve, reject) => {\n      let PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n      PhotoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n      PhotoSelectOptions.maxSelectNumber = 1;\n      let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n      photoPicker.select(PhotoSelectOptions).then((PhotoSelectResult) => {\n        hilog.info(0x0000, TAG, `PhotoViewPicker.select successfully, PhotoSelectResult uri: ${PhotoSelectResult.photoUris}`);\n        resolve(PhotoSelectResult.photoUris)\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, TAG, `PhotoViewPicker.select failed with errCode: ${err.code}, errMessage: ${err.message}`);\n        reject();\n      });\n    })\n  }\n\n  private loadImage(names: string[]) {\n    setTimeout(async () => {\n      let imageSource: image.ImageSource | undefined = undefined\n      try {\n        let fileSource = await fileIo.open(names[0], fileIo.OpenMode.READ_ONLY)\n        imageSource = image.createImageSource(fileSource.fd)\n        this.chooseImage = await imageSource.createPixelMap()\n        await fileIo.close(fileSource);\n      } catch (error) {\n        hilog.error(0x0000, TAG, `Failed to open file. Error: ${error}`);\n      }\n    }, 100\n    )\n  }\n}\n"
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
763185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439353-c8c1ca75370025700e44805eed367f79.png");

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