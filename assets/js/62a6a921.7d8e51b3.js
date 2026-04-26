"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["996068"], {
464774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_vision_kit_guide_core_vision_face_comparator_core_vision_face_comparator_md_62a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-vision-kit-guide-core-vision-face-comparator-core-vision-face-comparator-md-62a.json
var site_docs_core_vision_kit_guide_core_vision_face_comparator_core_vision_face_comparator_md_62a_namespaceObject = JSON.parse('{"id":"core-vision-kit-guide/core-vision-face-comparator/core-vision-face-comparator","title":"人脸比对","description":"适用场景","source":"@site/docs/core-vision-kit-guide/core-vision-face-comparator/core-vision-face-comparator.md","sourceDirName":"core-vision-kit-guide/core-vision-face-comparator","slug":"/core-vision-kit-guide/core-vision-face-comparator/","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-face-comparator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"人脸比对","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-face-comparator","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"人脸检测","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-face-detector/"},"next":{"title":"主体分割","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-subject-segmentation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-vision-kit-guide/core-vision-face-comparator/core-vision-face-comparator.md


const frontMatter = {
	title: '人脸比对',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-face-comparator',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '人脸比对';

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
        id: "人脸比对",
        children: "人脸比对"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入的两张比对图片是同一个人的照片时，系统返回的比对结果为\"同一个人\"，置信分数比较高；当两张比对图片不是同一个人的照片时，系统返回的比对结果为\"非同一个人\"，置信分数很低。可以用于APP中需要用到人脸比对功能的场景，比如娱乐类APP中比较两个人的相似度、与明星的相似度等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179734)/* ["default"] */.A) + "",
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
            children: "人脸比对"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当前功能只支持1v1人脸比对。  - 输入的两张图像都需要合适的成像质量（建议720p以上），224px<高度<15210px，100px<宽度<10000px，高宽比例建议10:1以下（高度小于宽度的10倍），接近手机屏幕高宽比例为宜。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用人脸比对时，将实现人脸比对相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { faceComparator } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
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
          }), "，并添加初始化和释放方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async aboutToAppear(): Promise<void> {\n  const initResult = await faceComparator.init();\n  hilog.info(0x0000, TAG, `Face comparator initialization result:${initResult}`);\n}\n\nasync aboutToDisappear(): Promise<void> {\n  await faceComparator.release();\n  hilog.info(0x0000, TAG, 'Face comparator released successfully');\n}\n\nprivate async selectImage() {\n  let uri = await this.openPhoto()\n  if (uri === undefined) {\n    hilog.error(0x0000, 'faceCompare', \"Failed to get two image uris.\");\n  }\n  this.loadImage(uri);\n}\n\nprivate async openPhoto(): Promise<string[]> {\n  return new Promise<string[]>((resolve, reject) => {\n    let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    photoPicker.select({\n      MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n      maxSelectNumber: 2\n    }).then(res => {\n      resolve(res.photoUris);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, TAG, `Failed to get photo image uris. code: ${err.code}, message: ${err.message}`);\n      reject();\n    });\n  });\n}\n\nprivate loadImage(names: string[]) {\n  setTimeout(async () => {\n    let imageSource: image.ImageSource | undefined = undefined;\n    let fileSource = await fileIo.open(names[0], fileIo.OpenMode.READ_ONLY);\n    imageSource = image.createImageSource(fileSource.fd);\n    this.chooseImage = await imageSource.createPixelMap();\n    fileSource = await fileIo.open(names[1], fileIo.OpenMode.READ_ONLY);\n    imageSource = image.createImageSource(fileSource.fd);\n    this.chooseImage1 = await imageSource.createPixelMap();\n  }, 100\n  )\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现人脸比对功能。实例化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api#visioninfo",
            children: "VisionInfo"
          }), "对象，传入两张图片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-facecomparator-api/core-vision-facecomparator-api#facecomparatorcomparefaces",
            children: "faceComparator.compareFaces"
          }), "方法进行人脸比对。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用人脸比对接口\nlet visionInfo: faceComparator.VisionInfo = {\n  pixelMap: this.chooseImage,\n};\nlet visionInfo1: faceComparator.VisionInfo = {\n  pixelMap: this.chooseImage1,\n};\nlet data:faceComparator.FaceCompareResult = await faceComparator.compareFaces(visionInfo, visionInfo1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果需要将结果展示在界面上，可以用下列代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let data:faceComparator.FaceCompareResult = await faceComparator.compareFaces(visionInfo, visionInfo1);\nlet faceString = \"degree of similarity: \"+ this.toPercentage(data.similarity)+((data.isSamePerson)?\". is\":\". no\")+ \" same person\";\nhilog.info(0x0000, 'testTag', \"faceString data is \" + faceString);\nthis.dataValues = faceString;\n"
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
        children: "import { faceComparator } from '@kit.CoreVisionKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nconst TAG: string = \"FaceCompareSample\";\n\n@Entry\n@Component\nstruct Index {\n  @State chooseImage: PixelMap | undefined = undefined\n  @State chooseImage1: PixelMap | undefined = undefined\n  @State dataValues: string = ''\n\n  async aboutToAppear(): Promise<void> {\n    const initResult = await faceComparator.init();\n    hilog.info(0x0000, TAG, `Face comparator initialization result:${initResult}`);\n  }\n\n  async aboutToDisappear(): Promise<void> {\n    await faceComparator.release();\n    hilog.info(0x0000, TAG, 'Face comparator released successfully');\n  }\n\n  build() {\n    Column() {\n      Image(this.chooseImage)\n        .objectFit(ImageFit.Fill)\n        .height('30%')\n        .accessibilityDescription(\"默认图片1\")\n      Image(this.chooseImage1)\n        .objectFit(ImageFit.Fill)\n        .height('30%')\n        .accessibilityDescription(\"默认图片2\")\n      Text(this.dataValues)\n        .copyOption(CopyOptions.LocalDevice)\n        .height('15%')\n        .margin(10)\n        .width('60%')\n      Button('选择图片')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          // 拉起图库\n          void this.selectImage()\n        })\n      Button('人脸比对')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          if(!this.chooseImage || !this.chooseImage1) {\n            hilog.error(0x0000, TAG, \"Failed to choose image\");\n            return;\n          }\n          // 调用人脸比对接口\n          let visionInfo: faceComparator.VisionInfo = {\n            pixelMap: this.chooseImage,\n          };\n          let visionInfo1: faceComparator.VisionInfo = {\n            pixelMap: this.chooseImage1,\n          };\n          faceComparator.compareFaces(visionInfo, visionInfo1)\n            .then((data: faceComparator.FaceCompareResult) => {\n              let faceString = \"degree of similarity: \"+ this.toPercentage(data.similarity)+((data.isSamePerson)?\". is\":\". no\")+ \" same person\";\n              hilog.info(0x0000, TAG, \"faceString data is \" + faceString);\n              this.dataValues = faceString;\n            })\n            .catch((error: BusinessError) => {\n              hilog.error(0x0000, TAG, `Face comparison failed. Code: ${error.code}, message: ${error.message}`);\n              this.dataValues = `Error: ${error.message}`;\n            });\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  private toPercentage(num: number): string {\n    return `${(num * 100).toFixed(2)}%`;\n  }\n\n  private async selectImage() {\n    let uri = await this.openPhoto()\n    if (uri === undefined) {\n      hilog.error(0x0000, TAG, \"Failed to get two image uris.\");\n    }\n    this.loadImage(uri);\n  }\n\n  private async openPhoto(): Promise<string[]> {\n    return new Promise<string[]>((resolve, reject) => {\n      let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n      photoPicker.select({\n        MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n        maxSelectNumber: 2\n      }).then(res => {\n        resolve(res.photoUris);\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, TAG, `Failed to get photo image uris. code: ${err.code}, message: ${err.message}`);\n        reject();\n      });\n    });\n  }\n\n  private loadImage(names: string[]) {\n    setTimeout(async () => {\n      let imageSource: image.ImageSource | undefined = undefined;\n      let fileSource: fileIo.File\n      try {\n        fileSource = await fileIo.open(names[0], fileIo.OpenMode.READ_ONLY);\n        imageSource = image.createImageSource(fileSource.fd);\n        this.chooseImage = await imageSource.createPixelMap();\n      } catch (error) {\n        hilog.error(0x0000, TAG, `Failed to open file. Error: ${error}`);\n      }\n      try {\n        fileSource = await fileIo.open(names[1], fileIo.OpenMode.READ_ONLY);\n        imageSource = image.createImageSource(fileSource.fd);\n        this.chooseImage1 = await imageSource.createPixelMap();\n        await fileIo.close(fileSource);\n      } catch (error) {\n        hilog.error(0x0000, TAG, `Failed to open the second file. Error: ${error}`);\n      }\n    }, 100\n    )\n  }\n}\n"
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
179734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799658-68c8730aefa67cb927139e8ea4588215.png");

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