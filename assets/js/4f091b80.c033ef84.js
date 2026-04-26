"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["699838"], {
26551(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_mindspore_guidelines_based_js_mindspore_guidelines_based_js_md_4f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-mindspore-guidelines-based-js-mindspore-guidelines-based-js-md-4f0.json
var site_docs_mindspore_lite_kit_mindspore_guidelines_based_js_mindspore_guidelines_based_js_md_4f0_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/mindspore-guidelines-based-js/mindspore-guidelines-based-js","title":"使用MindSpore Lite实现图像分类（ArkTS）","description":"场景说明","source":"@site/docs/mindspore-lite-kit/mindspore-guidelines-based-js/mindspore-guidelines-based-js.md","sourceDirName":"mindspore-lite-kit/mindspore-guidelines-based-js","slug":"/mindspore-lite-kit/mindspore-guidelines-based-js/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-guidelines-based-js/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用MindSpore Lite实现图像分类（ArkTS）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-guidelines-based-js","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MindSpore Lite进行端侧训练 (C/C++)","permalink":"/harmonyos-docs-site/mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/"},"next":{"title":"使用MindSpore Lite实现图像分类（C/C++）","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-guidelines-based-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/mindspore-guidelines-based-js/mindspore-guidelines-based-js.md


const frontMatter = {
	title: '使用MindSpore Lite实现图像分类（ArkTS）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-guidelines-based-js',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MindSpore Lite实现图像分类（ArkTS）';

const assets = {

};



const toc = [{
  "value": "场景说明",
  "id": "场景说明",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "选择模型",
  "id": "选择模型",
  "level": 3
}, {
  "value": "编写推理代码",
  "id": "编写推理代码",
  "level": 3
}, {
  "value": "实现图像输入和预处理，并执行推理",
  "id": "实现图像输入和预处理并执行推理",
  "level": 3
}, {
  "value": "调测验证",
  "id": "调测验证",
  "level": 3
}, {
  "value": "效果示意",
  "id": "效果示意",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
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
    strong: "strong",
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
        id: "使用mindspore-lite实现图像分类arkts",
        children: "使用MindSpore Lite实现图像分类（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景说明",
      children: "场景说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-arkts/js-apis-mindsporelite/js-apis-mindsporelite",
        children: "@ohos.ai.mindSporeLite"
      }), "，在UI代码中集成MindSpore Lite能力，快速部署AI算法，进行AI模型推理，实现图像分类的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像分类可实现对图像中物体的识别，在医学影像分析、自动驾驶、电子商务、人脸识别等领域有广泛的应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若需基于本Demo适配自有模型，请优先选择静态Shape模型。由于ArkTS暂不支持动态Shape，如确有相关需求，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/mindspore-lite-kit/mindspore-guidelines-based-native",
        children: "使用MindSpore Lite实现图像分类（C/C++）"
      }), "，通过Native侧的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelresize",
        children: "OH_AI_ModelResize"
      }), "接口对模型inputs进行动态调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行开发前，请先了解以下概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "张量"
        })
      }), "：它与数组和矩阵非常相似，是MindSpore Lite网络运算中的基本数据结构。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Float16推理模式"
        })
      }), "： Float16又称半精度，它使用16比特表示一个数。Float16推理模式表示推理的时候用半精度进行推理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这里给出MindSpore Lite推理的通用开发流程中涉及的一些接口，具体请见下列表格。更多接口及详细内容，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-arkts/js-apis-mindsporelite/js-apis-mindsporelite",
        children: "@ohos.ai.mindSporeLite (推理能力)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadModelFromFile(model: string, context?: Context): Promise<Model>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从路径加载模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getInputs(): MSTensor[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模型的输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predict(inputs: MSTensor[]): Promise<MSTensor[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推理模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getData(): ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setData(inputArray: ArrayBuffer): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置张量的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选择图像分类模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在端侧使用MindSpore Lite推理模型，实现对选择的图片进行分类。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以对相册的一张图片进行推理为例，提供使用MindSpore Lite实现图像分类的开发指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择模型",
      children: "选择模型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例程序中使用的图像分类模型文件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://download.mindspore.cn/model_zoo/official/lite/mobilenetv2_openimage_lite/1.5/mobilenetv2.ms",
        children: "mobilenetv2.ms"
      }), "，放置在entry/src/main/resources/rawfile工程目录下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者有其他图像分类的预训练模型，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/mindspore-lite-kit/mindspore-lite-converter-guidelines",
        children: "MindSpore Lite 模型转换"
      }), "介绍，将原始模型转换成.ms格式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写推理代码",
      children: "编写推理代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程默认设备定义的能力集可能不包含MindSporeLite。需在DevEco Studio工程的entry/src/main目录下，手动创建syscap.json文件，内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"devices\": {\n    \"general\": [\n      // 需跟module.json5中deviceTypes保持一致。\n      \"default\"\n    ]\n  },\n  \"development\": {\n    \"addedSysCaps\": [\n      \"SystemCapability.AI.MindSporeLite\"\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/mindspore-lite-api/mindspore-lite-arkts/js-apis-mindsporelite/js-apis-mindsporelite",
            children: "@ohos.ai.mindSporeLite"
          }), "实现端侧推理。具体开发过程及细节如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建上下文，设置线程数、设备类型等参数。本样例模型，不支持使用NNRt推理。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "加载模型。本文从内存加载模型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "加载数据。模型执行之前需要先获取输入，再向输入的张量中填充数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行推理。使用predict接口进行模型推理。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// model.ets\nimport { mindSporeLite } from '@kit.MindSporeLiteKit'\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default async function modelPredict(\n  modelBuffer: ArrayBuffer, inputsBuffer: ArrayBuffer[]): Promise<mindSporeLite.MSTensor[]> {\n\n  // 1.创建上下文，设置线程数、设备类型等参数。本样例模型，不支持配置context.target = [\"nnrt\"]。\n  let context: mindSporeLite.Context = {};\n  context.target = ['cpu'];\n  context.cpu = {}\n  context.cpu.threadNum = 2;\n  context.cpu.threadAffinityMode = 1;\n  context.cpu.precisionMode = 'enforce_fp32';\n\n  // 2.从内存加载模型。\n  let msLiteModel: mindSporeLite.Model = await mindSporeLite.loadModelFromBuffer(modelBuffer, context);\n\n  // 3.设置输入数据。\n  let modelInputs: mindSporeLite.MSTensor[] = msLiteModel.getInputs();\n  for (let i = 0; i < inputsBuffer.length; i++) {\n    let inputBuffer = inputsBuffer[i];\n    if (inputBuffer != null) {\n      modelInputs[i].setData(inputBuffer as ArrayBuffer);\n    }\n  }\n\n  // 4.执行推理。\n  hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s', `=========MS_LITE_LOG: MS_LITE predict start=====`);\n  let modelOutputs: mindSporeLite.MSTensor[] = await msLiteModel.predict(modelInputs);\n  return modelOutputs;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现图像输入和预处理并执行推理",
      children: "实现图像输入和预处理，并执行推理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处以获取相册图片为例，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker",
            children: "@ohos.file.picker"
          }), " 实现相册图片文件的选择。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据模型的输入尺寸，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image",
            children: "@ohos.multimedia.image"
          }), " （实现图片处理）、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
            children: "@ohos.file.fs"
          }), " （实现基础文件操作） API对选择图片进行裁剪、获取图片buffer数据，并进行标准化处理。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载模型文件，调用推理函数，对相册选择的图片进行推理，并对推理结果进行处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport modelPredict from './model';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst PERMISSIONS: Permissions[] = ['ohos.permission.READ_IMAGEVIDEO'];\n\n@Entry\n@Component\nstruct Index {\n  @State modelPredict: string = 'MindSporeLite ArkTS Demo';\n  @State modelName: string = 'mobilenetv2.ms';\n  @State modelInputHeight: number = 224;\n  @State modelInputWidth: number = 224;\n  @State uris: Array<string> = [];\n  @State max: number = 0;\n  @State maxIndex: number = 0;\n  @State maxArray: Array<number> = [];\n  @State maxIndexArray: Array<number> = [];\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.modelPredict)\n        Button() {\n          Text('photo')\n            .fontSize(30)\n            .fontWeight(FontWeight.Bold)\n        }\n        .onClick(() => {\n          let resMgr = this.getUIContext()?.getHostContext()?.getApplicationContext().resourceManager;\n          if (resMgr === null || resMgr === undefined){\n            hilog.error(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s', `MS_LITE_ERR: get resMgr failed.`);\n            return\n          }\n          resMgr?.getRawFileContent(this.modelName).then(modelBuffer => {\n\n            // 获取相册图片\n            // 1.创建图片文件选择实例\n            let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n\n            // 2.设置选择媒体文件类型为IMAGE，设置选择媒体文件的最大数目\n            photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE; // 过滤选择媒体文件类型为IMAGE\n            photoSelectOptions.maxSelectNumber = 1; // 选择媒体文件的最大数目\n\n            // 3.创建图库选择器实例，调用select()接口拉起图库界面进行文件选择。文件选择成功后，返回photoSelectResult结果集。\n            let photoPicker = new photoAccessHelper.PhotoViewPicker();\n            photoPicker.select(photoSelectOptions, async (\n              err: BusinessError, photoSelectResult: photoAccessHelper.PhotoSelectResult) => {\n              if (err) {\n                hilog.error(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                  `MS_LITE_ERR: PhotoViewPicker.select failed with err: ${JSON.stringify(err)}`);\n                return;\n              }\n              hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                `MS_LITE_LOG: PhotoViewPicker.select successfully, uri: ${JSON.stringify(photoSelectResult)}`);\n              this.uris = photoSelectResult.photoUris;\n              hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s', `MS_LITE_LOG: uri: ${this.uris}`);\n\n              // 预处理图片数据\n              try {\n                // 1.使用fileIo.openSync接口，通过uri打开这个文件得到fd\n                let file = fileIo.openSync(this.uris[0], fileIo.OpenMode.READ_ONLY);\n                hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s', `MS_LITE_LOG: file fd: ${file.fd}`);\n\n                // 2.通过fd使用fileIo.readSync接口读取这个文件内的数据\n                let inputBuffer = new ArrayBuffer(4096000);\n                let readLen = fileIo.readSync(file.fd, inputBuffer);\n                hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                  `MS_LITE_LOG: readSync data to file succeed and inputBuffer size is: ${readLen}`);\n\n                // 3.通过PixelMap预处理\n                let imageSource = image.createImageSource(file.fd);\n                if (imageSource === undefined) {\n                  hilog.error(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s', `MS_LITE_ERR: createImageSource failed.`);\n                  return\n                }\n                imageSource.createPixelMap().then((pixelMap) => {\n                  pixelMap.getImageInfo().then((info) => {\n                    hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                      `MS_LITE_LOG: info.width = ${info.size.width}`);\n                    hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                      `MS_LITE_LOG: info.height = ${info.size.height}`);\n\n                    // 4.根据模型输入的尺寸，将图片裁剪为对应的size，获取图片buffer数据readBuffer\n                    pixelMap.scale(256.0 / info.size.width, 256.0 / info.size.height).then(() => {\n                      pixelMap.crop(\n                        { x: 16, y: 16, size: { height: this.modelInputHeight, width: this.modelInputWidth } }\n                      ).then(async () => {\n                        let info = await pixelMap.getImageInfo();\n                        hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_LOG: crop info.width = ${info.size.width}`);\n                        hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_LOG: crop info.height = ${info.size.height}`);\n\n                        // 需要创建的像素buffer大小\n                        let readBuffer = new ArrayBuffer(this.modelInputHeight * this.modelInputWidth * 4);\n                        await pixelMap.readPixelsToBuffer(readBuffer);\n                        hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_LOG: Succeeded in reading image pixel data, buffer: ${readBuffer.byteLength}`);\n                        // 处理readBuffer，转换成float32格式，并进行标准化处理\n                        const imageArr = new Uint8Array(\n                          readBuffer.slice(0, this.modelInputHeight * this.modelInputWidth * 4));\n                        hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_LOG: imageArr length: ${imageArr.length}`);\n\n                        let means = [0.485, 0.456, 0.406];\n                        let stds = [0.229, 0.224, 0.225];\n                        let float32View = new Float32Array(this.modelInputHeight * this.modelInputWidth * 3);\n                        let index = 0;\n                        for (let i = 0; i < imageArr.length; i++) {\n                          if ((i + 1) % 4 === 0) {\n                            float32View[index] = (imageArr[i - 3] / 255.0 - means[0]) / stds[0]; // B\n                            float32View[index+1] = (imageArr[i - 2] / 255.0 - means[1]) / stds[1]; // G\n                            float32View[index+2] = (imageArr[i - 1] / 255.0 - means[2]) / stds[2]; // R\n                            index += 3;\n                          }\n                        }\n                        hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_LOG: float32View length: ${float32View.length}`);\n                        let printStr = 'float32View data:';\n                        for (let i = 0; i < 20; i++) {\n                          printStr += ' ' + float32View[i];\n                        }\n                        hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_LOG: float32View data: ${printStr}`);\n\n                        let inputs: ArrayBuffer[] = [float32View.buffer];\n\n                        // predict\n                        modelPredict(modelBuffer.buffer.slice(0), inputs).then(outputs => {\n                          hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                            `=========MS_LITE_LOG: MS_LITE predict success=====`);\n\n                          // 结果打印\n                          for (let i = 0; i < outputs.length; i++) {\n                            let out = new Float32Array(outputs[i].getData());\n\n                            let printStr = outputs[i].name + ':';\n                            for (let j = 0; j < out.length; j++) {\n                              printStr += out[j].toString() + ',';\n                            }\n                            hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s', `MS_LITE_LOG: ${printStr}`);\n\n                            // 取分类占比的最大值top5\n                            this.max = 0;\n                            this.maxIndex = 0;\n                            this.maxArray = [];\n                            this.maxIndexArray = [];\n                            let newArray = out.filter(value => value !== this.max)\n                            for (let n = 0; n < 5; n++) {\n                              this.max = out[0];\n                              this.maxIndex = 0;\n                              // 取最大值\n                              for (let m = 0; m < newArray.length; m++) {\n                                if (newArray[m] > this.max) {\n                                  this.max = newArray[m];\n                                  this.maxIndex = m;\n                                }\n                              }\n                              this.maxArray.push(Math.round(this.max * 10000));\n                              this.maxIndexArray.push(this.maxIndex);\n                              // filter数组过滤函数\n                              newArray = newArray.filter(value => value !== this.max)\n                            }\n                            hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                              `MS_LITE_LOG: max: ${this.maxArray}`);\n                            hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                              `MS_LITE_LOG: maxIndex: ${this.maxIndexArray}`);\n                          }\n                          hilog.info(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                            `=========MS_LITE_LOG END=========`);\n                        })\n                      }).catch((error: BusinessError) => {\n                        hilog.error(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                          `MS_LITE_ERR: getRawFileContent promise error is: ${error}`);\n                      })\n                    })\n                  })\n                })\n\n                // 5.关闭文件\n                fileIo.closeSync(file);\n              } catch (err) {\n                hilog.error(0xFF00, 'MindSporeLiteArkTSDemo', '%{public}s',\n                  `MS_LITE_ERR: uri: open file fd failed. ${err}`);\n              }\n            })\n          })\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中连接设备，点击Run entry，编译Hap，有如下显示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Launching com.samples.mindsporelitearktsdemo\n$ hdc shell aa force-stop com.samples.mindsporelitearktsdemo\n$ hdc shell mkdir data/local/tmp/xxx\n$ hdc file send C:\\Users\\xxx\\MindSporeLiteArkTSDemo\\entry\\build\\default\\outputs\\default\\entry-default-signed.hap \"data/local/tmp/xxx\"\n$ hdc shell bm install -p data/local/tmp/xxx\n$ hdc shell rm -rf data/local/tmp/xxx\n$ hdc shell aa start -a EntryAbility -b com.samples.mindsporelitearktsdemo\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备屏幕点击photo按钮，选择图片，点击确定。设备屏幕显示所选图片的分类结果，在日志打印结果中，过滤关键字”MS_LITE“，可得到如下结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "08-06 03:24:33.743   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: PhotoViewPicker.select successfully, photoSelectResult uri: {\"photoUris\":[\"file://media/Photo/13/IMG_1501955351_012/plant.jpg\"]}\n08-06 03:24:33.795   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: readSync data to file succeed and inputBuffer size is:32824\n08-06 03:24:34.147   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: crop info.width = 224\n08-06 03:24:34.147   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: crop info.height = 224\n08-06 03:24:34.160   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: Succeeded in reading image pixel data, buffer: 200704\n08-06 03:24:34.970   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     =========MS_LITE_LOG: MS_LITE predict start=====\n08-06 03:24:35.432   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     =========MS_LITE_LOG: MS_LITE predict success=====\n08-06 03:24:35.447   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: Default/head-MobileNetV2Head/Sigmoid-op466:0.0000034338463592575863,0.000014028532859811094,9.119685273617506e-7,0.000049100715841632336,9.502661555416125e-7,3.945370394831116e-7,0.04346757382154465,0.00003971960904891603...\n08-06 03:24:35.499   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: max:9497,7756,1970,435,46\n08-06 03:24:35.499   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     MS_LITE_LOG: maxIndex:323,46,13,6,349\n08-06 03:24:35.499   22547-22547  A03d00/JSAPP                   com.sampl...liteark+  I     =========MS_LITE_LOG END=========\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果示意",
      children: "效果示意"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备上，点击photo按钮，选择相册中的一张图片，点击确定。在图片下方显示此图片占比前4的分类信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517009)/* ["default"] */.A) + "",
        width: "370",
        height: "624"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555254)/* ["default"] */.A) + "",
        width: "391",
        height: "669"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(284668)/* ["default"] */.A) + "",
        width: "395",
        height: "619"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193281)/* ["default"] */.A) + "",
        width: "353",
        height: "663"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/MindSporeLiteKit/MindSporeLiteArkTSDemo",
          children: "基于MindSporeLite接口实现图像分类（ArkTS）"
        })
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
193281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439393-4fe4c1e1751aeac2e132c3e0843b192c.png");

},
517009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959346-7c0389ea574e2a482dedfcd28d00a7b6.png");

},
284668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799698-56ef020073bfb83dc7ebbb4279b6be85.png");

},
555254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479347-d303046a8350f6dfbc8affc375410067.png");

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