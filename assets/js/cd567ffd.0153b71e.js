"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["8927"], {
806129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_transcoder_arkts_using_avtranscoder_for_transcodering_using_avtranscoder_for_transcodering_md_cd5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-transcoder-arkts-using-avtranscoder-for-transcodering-using-avtranscoder-for-transcodering-md-cd5.json
var site_docs_media_kit_media_kit_dev_arkts_media_transcoder_arkts_using_avtranscoder_for_transcodering_using_avtranscoder_for_transcodering_md_cd5_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering/using-avtranscoder-for-transcodering","title":"使用AVTranscoder实现视频转码(ArkTS)","description":"使用AVTranscoder可以实现视频转码功能，从API 20开始支持视频转码的C/C++开发，转码功能可在手机、平板、2in1设备上作为系统提供的基础能力使用。可以通过调用canIUse接口来判断当前设备是否支持AVTranscoder，当canIUse(\\"SystemCapability.Multimedia.Media.AVTranscoder\\")的返回值为true时，表示可以使用转码能力。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering/using-avtranscoder-for-transcodering.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering","slug":"/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVTranscoder实现视频转码(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avtranscoder-for-transcodering","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVImageGenerator提取视频指定时间图像(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-info-arkts/avimagegenerator/"},"next":{"title":"创建异步线程执行AVTranscoder视频转码(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering/using-avtranscoder-for-transcodering.md


const frontMatter = {
	title: '使用AVTranscoder实现视频转码(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avtranscoder-for-transcodering',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVTranscoder实现视频转码(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "运行示例工程",
  "id": "运行示例工程",
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
        id: "使用avtranscoder实现视频转码arkts",
        children: "使用AVTranscoder实现视频转码(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avtranscoder",
        children: "AVTranscoder"
      }), "可以实现视频转码功能，从API 20开始支持视频转码的C/C++开发，转码功能可在手机、平板、2in1设备上作为系统提供的基础能力使用。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap#caniuse",
        children: "canIUse"
      }), "接口来判断当前设备是否支持AVTranscoder，当canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\")的返回值为true时，表示可以使用转码能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将以“开始转码-暂停转码-恢复转码-转码完成”的一次流程为示例，向开发者讲解AVTranscoder视频转码相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avtranscoder/arkts-apis-media-avtranscoder",
        children: "AVTranscoder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(7225)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需对转码后的文件进行转发、上传、转存等处理，应用须收到complete事件后调用系统接口await avTranscoder.release()，以保证视频文件完整性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreateavtranscoder12",
            children: "AVTranscoder"
          }), "实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n\nprivate avTranscoder: media.AVTranscoder | undefined = undefined;\n// 创建转码实例。\nthis.avTranscoder = await media.createAVTranscoder();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置业务需要的监听事件，监听状态变化及错误上报。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "事件类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "complete"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听AVTranscoder的转码完成。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "error"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听AVTranscoder的错误信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "progressUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听AVTranscoder的进度。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { media } from '@kit.MediaKit';\nprivate currentProgress: number = 0;\nprivate avTranscoder: media.AVTranscoder | undefined = undefined;\n\nasync test() {\n  // 创建转码实例。\n  this.avTranscoder = await media.createAVTranscoder();\n  if (this.avTranscoder != undefined) {\n    // 转码完成回调函数。\n    this.avTranscoder.on('complete', async () => {\n      console.info(`AVTranscoder is completed`);\n      await this.releaseTranscoderingProcess();\n    });\n    // 错误上报回调函数。\n    this.avTranscoder.on('error', (err: BusinessError) => {\n      console.error(`AVTranscoder failed, code is ${err.code}, message is ${err.message}`);\n    });\n    // 进度上报回调函数。\n    this.avTranscoder.on('progressUpdate', (progress: number) => {\n      console.info(`AVTranscoder progressUpdate = ${progress}`);\n      this.currentProgress = progress;\n    })\n  }\n}\n\n// 获取当前进度。\ngetCurrentProgress(): number {\n  console.info(`getCurrentProgress = ${this.currentProgress}`);\n  return this.currentProgress;\n}\n// 释放转码流程。\nasync releaseTranscoderingProcess() {\n  if (canIUse('SystemCapability.Multimedia.Media.AVTranscoder')) {\n    if (this.avTranscoder != undefined) {\n      // 1.释放转码实例。\n      await this.avTranscoder.release();\n      this.avTranscoder = undefined;\n      // 2.关闭转码目标文件fd。\n      fileIo.closeSync(this.avTranscoder!.fdDst);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置源视频文件fd：设置属性fdSrc。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(177124)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面代码示例中的fdSrc仅作示意使用，开发者需根据实际情况，确认资源有效性并设置："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果使用本地资源转码，必须确认资源文件可用，并使用应用沙箱路径访问对应资源，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
              children: "获取应用文件路径"
            }), "。应用沙箱的介绍及如何向应用沙箱推送文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/app-file/app-sandbox-directory",
              children: "文件管理"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应通过Context属性获取应用文件路径，建议使用getUIContext获取UIContext实例，并使用getHostContext调用绑定实例的getContext，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#gethostcontext12",
              children: "getHostContext"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果使用ResourceManager.getRawFd()打开HAP资源文件描述符，使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9",
              children: "ResourceManager API参考"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入来自于ets/transcoder/AVTranscoderManager.ets文件。\nimport {AVTranscoderDemo} from '../transcoder/AVTranscoderManager'\n\n@Entry\n@Component\nstruct Index {\n  // 获取当前组件所在Ability的Context，以通过Context获取应用文件路径。\n  private context:Context | undefined = this.getUIContext()?.getHostContext();\n  // 获取转码功能管理类。\n  @State avTranscoder: AVTranscoderDemo | undefined = this.context ? new AVTranscoderDemo(this.context) : undefined;\n\n  build() {\n    RelativeContainer() {\n      Column() {\n        Button($r('app.string.StartTranscoder')) // 来自于resources/base/element/string.json文件中的name:StartTranscoder的值。\n          .onClick(async () => {\n            console.info(`Button put`);\n            await this.avTranscoder?.avTranscoderDemo();\n          })\n          .id('AVTranscoderButton')\n          // 获取转码进度。\n          Progress({ value: 0, total: 100, type: ProgressType.Linear }).value(this.avTranscoder?.getCurrentProgress())\n            .height(50)\n            .width('80%')\n      }\n      .alignRules({\n        center: { anchor: '__container__', align: VerticalAlign.Center },\n        middle: { anchor: '__container__', align: HorizontalAlign.Center }\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nprivate avTranscoder: media.AVTranscoder | undefined = undefined;\nprivate context: Context | undefined;\nconstructor(context: Context | undefined) {\n  if (context != undefined) {\n    this.context = context; // this.getUIContext().getHostContext();。\n  }\n}\n\nasync test() {\n  // 创建转码实例。\n  this.avTranscoder = await media.createAVTranscoder();\n  // 获取输入文件fd，H264_AAC.mp4为rawfile目录下的预置资源，需要开发者根据实际情况进行替换。\n  if (this.context != undefined) {\n    let fileDescriptor = await this.context.resourceManager.getRawFd('H264_AAC.mp4');\n    // 设置转码的源文件属性fdSrc。\n    this.avTranscoder.fdSrc = fileDescriptor;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置目标视频文件fd：设置属性fdDst。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(308738)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["转码输出文件fd（即示例里fdDst），形式为number。需要调用基础文件操作接口（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
            children: "Core File Kit的ohos.file.fs"
          }), "）实现应用文件访问能力，获取方式参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
            children: "应用文件访问与管理"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo } from '@kit.CoreFileKit';\nimport { media } from '@kit.MediaKit';\nprivate avTranscoder: media.AVTranscoder | undefined = undefined;\nprivate context: Context | undefined;\nconstructor(context: Context | undefined) {\n  if (context != undefined) {\n    this.context = context; // this.getUIContext().getHostContext();。\n  }\n}\n\nasync test() {\n  // 创建转码实例。\n  this.avTranscoder = await media.createAVTranscoder();\n  if (this.context != undefined) {\n    // 设置输出目标文件的沙箱路径。\n    let outputFilePath = this.context.filesDir + \"/output.mp4\";\n    // 文件不存在时创建并打开文件，文件存在时打开文件。\n    let file = fileIo.openSync(outputFilePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n    // 设置转码的目标文件属性fdDst。\n    this.avTranscoder.fdDst = file.fd; // 参考应用文件访问与管理中的开发示例获取创建的视频文件fd填入此处。\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置视频转码参数，调用prepare()接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(542783)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "写入配置参数时需要注意，prepare()接口的入参avConfig中仅设置转码相关的配置参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["受限于解析/封装/编解码能力，只能使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-intro#avtranscoder",
            children: "支持的转码格式"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nprivate avTranscoder: media.AVTranscoder | undefined = undefined;\nprivate avConfig: media.AVTranscoderConfig = {\n  audioBitrate: 100000, // 音频比特率。\n  audioCodec: media.CodecMimeType.AUDIO_AAC, // 音频编码格式。\n  fileFormat: media.ContainerFormatType.CFT_MPEG_4, // 封装格式。\n  videoBitrate: 2000000, // 视频比特率。\n  videoCodec: media.CodecMimeType.VIDEO_AVC, // 视频编码格式。\n};\n\nasync test() {\n  // 创建转码实例。\n  this.avTranscoder = await media.createAVTranscoder();\n  // 配置转码参数完成准备工作。\n  await this.avTranscoder.prepare(this.avConfig);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可在avConfig中设置目标视频的分辨率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let avConfig: media.AVTranscoderConfig = {\n  audioBitrate: 100000, // 音频比特率。\n  audioCodec: media.CodecMimeType.AUDIO_AAC, // 音频编码格式。\n  fileFormat: media.ContainerFormatType.CFT_MPEG_4, // 封装格式。\n  videoBitrate: 2000000, // 视频比特率。\n  videoCodec: media.CodecMimeType.VIDEO_AVC, // 视频编码格式。\n  videoFrameWidth: 640, // 目标视频分辨率的宽为640。\n  videoFrameHeight: 480, // 目标视频分辨率的高为480。\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始转码，调用start()接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async startTranscoderingProcess() {\n  if (canIUse('SystemCapability.Multimedia.Media.AVTranscoder')) {\n    if (this.avTranscoder != undefined) {\n      await this.avTranscoder.release();\n      this.avTranscoder = undefined;\n    }\n   // 开始转码前需要创建转码实例、设置回调、设置fd并完成prepare。\n   // 具体创建步骤参考开发步骤1-5。\n\n   // 开始转码。\n   await this.avTranscoder.start();\n }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "暂停转码，调用pause()接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 暂停转码对应的流程。\nasync pauseTranscoderingProcess() {\n  if (canIUse('SystemCapability.Multimedia.Media.AVTranscoder')) {\n    if (this.avTranscoder != undefined) { // 仅在调用start返回后调用pause为合理调用。\n      await this.avTranscoder.pause();\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "恢复转码，调用resume()接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 恢复转码。\nasync resumeTranscoderingProcess() {\n  if (canIUse('SystemCapability.Multimedia.Media.AVTranscoder')) {\n    if (this.avTranscoder != undefined) { // 仅在调用pause返回后调用resume为合理调用。\n      await this.avTranscoder.resume();\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁实例，调用release()接口，退出转码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁实例。\nasync releaseTranscoderingProcess() {\n  if (canIUse('SystemCapability.Multimedia.Media.AVTranscoder')) {\n    if (this.avTranscoder != undefined) {\n      // 1.销毁实例。\n      await this.avTranscoder.release();\n      this.avTranscoder = undefined;\n      // 2.关闭转码目标文件fd。\n      fileIo.closeSync(this.avTranscoder!.fdDst);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完整的【开始转码-暂停转码-恢复转码-转码完成】流程"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async avTranscoderDemo() {\n  await this.startTranscoderingProcess(); // 开始转码。\n  await this.pauseTranscoderingProcess(); // 暂停转码。\n  await this.resumeTranscoderingProcess(); // 恢复转码。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行示例工程",
      children: "运行示例工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完成“开始转码-暂停转码-恢复转码-转码完成”的完整流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVTranscoder/AVTranscoderArkTS",
            children: "完整示例工程"
          }), "，并将示例工程的资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVTranscoderArkTS\nentry/src/main/ets/\n└── pages\n│    └── Index.ets (转码界面)\n│\n└── transcoder\n    └── AVTranscoderManager.ets (转码功能)\n\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│\n└── rawfile\n    └── H264_AAC.mp4 (视频资源)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译新建工程并运行。"
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
177124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
7225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
308738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
542783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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