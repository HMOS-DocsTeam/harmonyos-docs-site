"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["699483"], {
531531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_vision_kit_guide_core_vision_text_recognition_core_vision_text_recognition_md_b0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-vision-kit-guide-core-vision-text-recognition-core-vision-text-recognition-md-b0f.json
var site_docs_core_vision_kit_guide_core_vision_text_recognition_core_vision_text_recognition_md_b0f_namespaceObject = JSON.parse('{"id":"core-vision-kit-guide/core-vision-text-recognition/core-vision-text-recognition","title":"通用文字识别","description":"适用场景","source":"@site/docs/core-vision-kit-guide/core-vision-text-recognition/core-vision-text-recognition.md","sourceDirName":"core-vision-kit-guide/core-vision-text-recognition","slug":"/core-vision-kit-guide/core-vision-text-recognition/","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-text-recognition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通用文字识别","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-text-recognition","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Core Vision Kit简介","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-introduction/"},"next":{"title":"人脸检测","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-face-detector/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-vision-kit-guide/core-vision-text-recognition/core-vision-text-recognition.md


const frontMatter = {
	title: '通用文字识别',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-text-recognition',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '通用文字识别';

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
        id: "通用文字识别",
        children: "通用文字识别"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用文字识别，是通过拍照、扫描等光学输入方式，将各种票据、卡证、表格、报刊、书籍等印刷品文字转化为图像信息，再利用文字识别技术将图像信息转化为计算机等设备可以使用的字符信息的技术。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以对文档翻拍、街景翻拍等图片进行文字检测和识别，也可以集成于其他应用中，提供文字检测、识别的功能，并根据识别结果提供翻译、搜索等相关服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以处理来自相机、图库等多种来源的图像数据，提供一个自动检测文本、识别图像中文本位置以及文本内容功能的开放能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持特定角度范围内的文本倾斜、拍摄角度倾斜、复杂光照条件以及复杂文本背景等场景的文字识别。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805180)/* ["default"] */.A) + "",
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
            children: "文字识别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的图片格式：JPEG、JPG、PNG。  - 支持的语言：简体中文、英文、日文、韩文、繁体中文。  - 文本长度：不超过10000字符。  - 支持文档印刷体识别，在识别手写字体方面能力有所欠缺。  - 输入图像具有合适成像的质量（建议720p以上），100px<高度<15210px，100px<宽度<10000px，高宽比例建议10:1以下（高度小于宽度的10倍），接近手机屏幕高宽比例为宜。  - 拍摄角度与文本所在平面垂直方向的夹角应小于30度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用通用文字识别时，将实现文字识别的相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { textRecognition } from '@kit.CoreVisionKit'\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
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
            children: "async aboutToAppear(): Promise<void> {\n  const initResult = await textRecognition.init();\n  hilog.info(0x0000, 'OCRDemo', `OCR service initialization result:${initResult}`);\n}\n\nasync aboutToDisappear(): Promise<void> {\n  await textRecognition.release();\n  hilog.info(0x0000, 'OCRDemo', 'OCR service released successfully');\n}\n\nprivate async selectImage() {\n  let uri = await this.openPhoto();\n  if (uri === undefined) {\n    hilog.error(0x0000, 'OCRDemo', \"Failed to get uri.\");\n    return;\n  }\n  this.loadImage(uri);\n}\n\nprivate async openPhoto(): Promise<string> {\n  return new Promise<string>((resolve) => {\n    let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    photoPicker.select({\n      MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n      maxSelectNumber: 1\n    }).then((res: photoAccessHelper.PhotoSelectResult) => {\n      resolve(res.photoUris[0]);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'OCRDemo', `Failed to get photo image uri. code: ${err.code}, message: ${err.message}`);\n      resolve('');\n    })\n  })\n}\n\nprivate loadImage(name: string) {\n  setTimeout(async () => {\n    let imageSource: image.ImageSource | undefined = undefined;\n    let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);\n    imageSource = image.createImageSource(fileSource.fd);\n    this.chooseImage = await imageSource.createPixelMap();\n  }, 100)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实例化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-text-recognition-api/core-vision-text-recognition-api#visioninfo",
            children: "VisionInfo"
          }), "对象，并传入待检测图片的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VisionInfo为待OCR检测识别的入参项，目前仅支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "类型的视觉信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let visionInfo: textRecognition.VisionInfo = {\n  pixelMap: this.chooseImage\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置通用文本识别的配置项", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-text-recognition-api/core-vision-text-recognition-api#textrecognitionconfiguration",
            children: "TextRecognitionConfiguration"
          }), "，用于配置是否支持朝向检测。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let textConfiguration: textRecognition.TextRecognitionConfiguration = {\n  isDirectionDetectionSupported: false\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用textRecognition的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-text-recognition-api/core-vision-text-recognition-api#textrecognitionrecognizetext-1",
            children: "recognizeText"
          }), "接口，对识别到的结果进行处理。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当调用成功时，获取文字识别的结果；调用失败时，将返回对应错误码。recognizeText接口提供了三种调用形式，当前以其中一种作为示例，其他方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-vision-api/core-vision-arkts/core-vision-text-recognition-api/core-vision-text-recognition-api",
            children: "API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "textRecognition.recognizeText(visionInfo, textConfiguration)\n  .then((data: textRecognition.TextRecognitionResult) => {\n    // 识别成功，获取对应的结果\n    let recognitionString = JSON.stringify(data);\n    hilog.info(0x0000, 'OCRDemo', `Succeeded in recognizing text: ${recognitionString}`);\n    // 将结果更新到Text中显示\n    this.dataValues = data.value;\n  })\n  .catch((error: BusinessError) => {\n    hilog.error(0x0000, 'OCRDemo', `Failed to recognize text. Code: ${error.code}, message: ${error.message}`);\n    this.dataValues = `Error: ${error.message}`;\n  });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮，识别一张图片的文字内容，并通过日志打印。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { textRecognition } from '@kit.CoreVisionKit'\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct Index {\n  private imageSource: image.ImageSource | undefined = undefined;\n  @State chooseImage: PixelMap | undefined = undefined;\n  @State dataValues: string = '';\n\n  async aboutToAppear(): Promise<void> {\n    const initResult = await textRecognition.init();\n    hilog.info(0x0000, 'OCRDemo', `OCR service initialization result:${initResult}`);\n  }\n\n  async aboutToDisappear(): Promise<void> {\n    await textRecognition.release();\n    hilog.info(0x0000, 'OCRDemo', 'OCR service released successfully');\n  }\n\n  build() {\n    Column() {\n      Image(this.chooseImage)\n        .objectFit(ImageFit.Fill)\n        .height('60%')\n\n      Text(this.dataValues)\n        .copyOption(CopyOptions.LocalDevice)\n        .height('15%')\n        .margin(10)\n        .width('60%')\n\n      Button('选择图片')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          // 拉起图库，获取图片资源\n          void this.selectImage();\n        })\n\n      Button('开始识别')\n        .type(ButtonType.Capsule)\n        .fontColor(Color.White)\n        .alignSelf(ItemAlign.Center)\n        .width('80%')\n        .margin(10)\n        .onClick(() => {\n          this.textRecognitionTest();\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  private textRecognitionTest() {\n    if (!this.chooseImage) {\n      return;\n    }\n    // 调用文本识别接口\n    let visionInfo: textRecognition.VisionInfo = {\n      pixelMap: this.chooseImage\n    };\n    let textConfiguration: textRecognition.TextRecognitionConfiguration = {\n      isDirectionDetectionSupported: false\n    };\n    textRecognition.recognizeText(visionInfo, textConfiguration)\n      .then((data: textRecognition.TextRecognitionResult) => {\n        // 识别成功，获取对应的结果\n        let recognitionString = JSON.stringify(data);\n        hilog.info(0x0000, 'OCRDemo', `Succeeded in recognizing text: ${recognitionString}`);\n        // 将结果更新到Text中显示\n        this.dataValues = data.value;\n      })\n      .catch((error: BusinessError) => {\n        hilog.error(0x0000, 'OCRDemo', `Failed to recognize text. Code: ${error.code}, message: ${error.message}`);\n        this.dataValues = `Error: ${error.message}`;\n      });\n  }\n\n  private async selectImage() {\n    let uri = await this.openPhoto();\n    if (uri === undefined) {\n      hilog.error(0x0000, 'OCRDemo', \"Failed to get uri.\");\n      return;\n    }\n    this.loadImage(uri);\n  }\n\n  private async openPhoto(): Promise<string> {\n    return new Promise<string>((resolve) => {\n      let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();\n      photoPicker.select({\n        MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE,\n        maxSelectNumber: 1\n      }).then((res: photoAccessHelper.PhotoSelectResult) => {\n        resolve(res.photoUris[0]);\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, 'OCRDemo', `Failed to get photo image uri. code: ${err.code}, message: ${err.message}`);\n        resolve('');\n      })\n    })\n  }\n\n  private loadImage(name: string) {\n    setTimeout(async () => {\n      try {\n        let fileSource = await fileIo.open(name, fileIo.OpenMode.READ_ONLY);\n        this.imageSource = image.createImageSource(fileSource.fd);\n        this.chooseImage = await this.imageSource.createPixelMap();\n        await fileIo.close(fileSource);\n      } catch (error) {\n        hilog.error(0x0000, 'OCRDemo', `Failed to open file. Error: ${error}`);\n      }\n    }, 100)\n  }\n}\n"
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
805180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439351-9d4e7f558897de155772d8072a2b3cd9.png");

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