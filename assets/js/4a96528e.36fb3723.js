"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["852328"], {
741577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_recording_arkts_using_avscreencapture_arkts_using_avscreencapture_arkts_md_4a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-recording-arkts-using-avscreencapture-arkts-using-avscreencapture-arkts-md-4a9.json
var site_docs_media_kit_media_kit_dev_arkts_media_recording_arkts_using_avscreencapture_arkts_using_avscreencapture_arkts_md_4a9_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/using-avscreencapture-arkts","title":"使用AVScreenCaptureRecorder录屏写文件(ArkTS)","description":"屏幕录制主要为主屏幕录屏功能。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/using-avscreencapture-arkts.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts","slug":"/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用AVScreenCaptureRecorder录屏写文件(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avscreencapture-arkts","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVRecorder录制视频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/"},"next":{"title":"使用AVMetadataExtractor提取音视频元数据信息(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/using-avscreencapture-arkts.md


const frontMatter = {
	title: '使用AVScreenCaptureRecorder录屏写文件(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avscreencapture-arkts',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVScreenCaptureRecorder录屏写文件(ArkTS)';

const assets = {

};



const toc = [{
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用avscreencapturerecorder录屏写文件arkts",
        children: "使用AVScreenCaptureRecorder录屏写文件(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕录制主要为主屏幕录屏功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以调用录屏（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avscreencapture",
        children: "AVScreenCaptureRecorder"
      }), "）模块的ArkTs接口，完成屏幕录制，采集设备内、麦克风等的音视频源数据。可以调用录屏模块获取音视频文件，然后通过文件的形式流转到其他模块进行播放或处理，达成文件形式分享屏幕内容的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏模块和窗口（Window）、图形（Graphic）等模块协同完成整个视频采集的流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVScreenCaptureRecorder录制屏幕涉及到AVScreenCaptureRecorder实例的创建、音视频采集参数的配置、采集的开始与停止、资源的释放等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始屏幕录制时正在通话中或者屏幕录制过程中来电，录屏将自动停止。因通话中断的录屏会上报SCREENCAPTURE_STATE_STOPPED_BY_CALL状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本开发指导将以完成一次屏幕数据录制的过程为例，向开发者讲解如何使用AVScreenCaptureRecorder进行屏幕录制，详细的API声明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder",
        children: "AVScreenCaptureRecorder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配置了采集麦克风音频数据，需对应配置麦克风权限ohos.permission.MICROPHONE和申请长时任务，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请权限"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "申请长时任务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发此功能前，开发者应根据实际需求申请相关权限："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当需要使用麦克风时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ohos.permission.MICROPHONE"
            })
          }), "麦克风权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当需要读取图片或视频文件时，请优先使用媒体库", (0,jsx_runtime.jsx)(_components.a, {
            href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
            children: "Picker选择媒体资源"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当需要保存图片或视频文件时，请优先使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/medialibrary-kit/photoaccesshelper-savebutton",
            children: "安全控件保存媒体资源"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 22开始，在PC/2in1设备上对应用进行录屏时，可通过申请权限", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ohos.permission.TIMEOUT_SCREENOFF_DISABLE_LOCK"
            })
          }), "，实现在屏幕熄灭但不锁屏的场景下，继续保持录制的效果，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 22开始，在PC/2in1设备上对应用进行录屏时，可通过申请权限", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ohos.permission.CUSTOM_SCREEN_RECORDING"
            })
          }), "，实现在录制屏幕时不再弹出隐私告警弹窗。配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
            children: "受限开放权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(686451)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仅应用需要克隆、备份或同步用户公共目录的图片、视频类文件时，可申请ohos.permission.READ_IMAGEVIDEO、ohos.permission.WRITE_IMAGEVIDEO权限来读写音频文件，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
            children: "申请受控权限"
          }), "，通过AGC审核后才能使用。为避免应用的上架申请被驳回，开发者应优先使用Picker/控件等替代方案，仅少量符合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_imagevideo",
            children: "特殊场景"
          }), "的应用被允许申请受限权限。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVScreenCaptureRecorder时要明确其状态的变化，在创建实例后，调用对应的方法可以进入指定的状态实现对应的行为。在确定的状态下执行不合适的方法会导致AVScreenCaptureRecorder发生错误，开发者需要在调用状态转换的方法前进行状态检查，避免程序运行异常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { media } from '@kit.MediaKit';\nimport fileIo from '@ohos.file.fs';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AVScreenCaptureRecorder类型的成员变量screenCapture。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 声明一个AVScreenCaptureRecorder类型的变量。\nprivate screenCapture?: media.AVScreenCaptureRecorder;\n// 创建一个AVScreenCaptureRecorder，并赋值给screenCapture成员变量。\nthis.screenCapture = await media.createAVScreenCaptureRecorder();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对成员变量screenCapture设置监听函数，分别监听不同状态和异常情况。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.screenCapture.on('stateChange', async (infoType: media.AVScreenCaptureStateCode) => {\n  switch (infoType) {\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STARTED:\n            console.info(\"录屏成功开始后会收到的回调\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_CANCELED:\n            this.screenCapture?.release();\n            this.screenCapture = undefined;\n            console.info(\"不允许使用录屏功能\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STOPPED_BY_USER:\n            this.screenCapture?.release();\n            this.screenCapture = undefined;\n            console.info(\"通过录屏胶囊结束录屏，底层录制会停止\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_INTERRUPTED_BY_OTHER:\n            console.info(\"录屏因其他中断而停止，底层录制会停止\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STOPPED_BY_CALL:\n            console.info(\"录屏过程因通话中断，底层录制会停止\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_MIC_UNAVAILABLE:\n            console.info(\"录屏麦克风不可用\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_MIC_MUTED_BY_USER:\n            console.info(\"录屏麦克风被用户静音\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_MIC_UNMUTED_BY_USER:\n            console.info(\"录屏麦克风被用户取消静音\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_ENTER_PRIVATE_SCENE:\n            // 目前可以从系统直接注册监听到进入隐私场景。\n            console.info(\"录屏进入隐私场景\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_EXIT_PRIVATE_SCENE:\n            console.info(\"录屏退出隐私场景\");\n            break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STOPPED_BY_USER_SWITCHES:\n            console.info(\"用户账号切换，底层录制会停止\");\n            break;\n        default:\n            break;\n    }\n})\nthis.screenCapture.on('error', (err) => {\n    console.error(`处理异常情况, code is ${err.code}, message is ${err.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置屏幕录制参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "​创建AVScreenCaptureRecorder实例screenCapture后，可以设置屏幕录制所需要的参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "​参数videoBitrate、audioSampleRate、audioChannelCount、audioBitrate、preset、displayId为可选参数，若不设置则可按默认值进行设置，如下示例中提供了可选参数的默认值。麦克风和系统音的音频流共用一套音频参数，分别是音频采样率、音频通道数和音频比特率，对应audioSampleRate、audioChannelCount和audioBitrate参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参数fd可以参考应用文件访问与管理的开发实例", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
            children: "新建并读写一个文件fd"
          }), "。本示例中提供的getFileFd()仅作为参考。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2in1设备配置displayId为扩展屏Id，可拉起录屏窗口选择界面，用户在界面上选择录屏内容，最终录屏内容以用户在弹窗界面上的选择为准。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet filePath: string = context.filesDir + '/screenCapture.mp4';\nlet captureFile: fileIo.File = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\nif (!captureFile) {\n  console.error(\"处理异常情况\");\n  return;\n}\n\ncaptureConfig: media.AVScreenCaptureRecordConfig = {\n    // 开发者可以根据自身的需要设置宽高。\n    frameWidth: 768,\n    frameHeight: 1280,\n    // 参考应用文件访问与管理开发示例新建并读写一个文件fd。\n    fd: captureFile.fd,\n    // 可选参数及其默认值。\n    videoBitrate: 10000000,\n    audioSampleRate: 48000,\n    audioChannelCount: 2,\n    audioBitrate: 96000,\n    displayId: 0,\n    preset: media.AVScreenCaptureRecordPreset.SCREEN_RECORD_PRESET_H264_AAC_MP4\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于预先配置的屏幕录制参数，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder#init12",
            children: "init"
          }), "方法初始化screenCapture。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "await this.screenCapture.init(this.captureConfig);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建豁免隐私窗口，这里填写的是子窗口id和主窗口id，具体开发步骤可参见窗口API", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#windowproperties",
            children: "WindowProperties"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let windowIDs = [57, 86];\nawait this.screenCapture.skipPrivacyMode(windowIDs);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder#startrecording12",
            children: "startRecording"
          }), "方法开始进行屏幕录制，并通过监听函数监听状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "await this.screenCapture.startRecording();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止录屏。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击录屏胶囊中的结束按钮停止录制：基于回调函数实现，录屏对象实例screenCapture会触发SCREENCAPTURE_STATE_STOPPED_BY_USER的回调，通知应用此次录屏已停止，不需要开发者主动调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder#stoprecording12",
                children: "stopRecording"
              }), "方法。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["应用主动调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder#stoprecording12",
                children: "stopRecording"
              }), "方法，停止录屏。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "await this.screenCapture.stopRecording();\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder#release12",
            children: "release"
          }), "方法销毁实例，释放资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "await this.screenCapture.release();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是通过AVScreenCaptureRecorder实现录屏存文件的完整代码示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\nimport fileIo from '@ohos.file.fs';\n\nexport class AVScreenCaptureDemo {\n  private screenCapture?: media.AVScreenCaptureRecorder;\n  private captureFile: fileIo.File | undefined = undefined;\n  private captureConfig: media.AVScreenCaptureRecordConfig | undefined = undefined;\n\n  private openFile(context: Context): void {\n    const path: string = context.filesDir + '/screenCapture.mp4'; // 文件沙箱路径，文件后缀名应与封装格式对应。\n    this.captureFile = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  }\n\n  private closeFile(): void {\n    if (!this.captureFile) {\n      return;\n    }\n    fileIo.closeSync(this.captureFile);\n  }\n\n  private setConfig(): void {\n    if (!this.captureFile) {\n      return;\n    }\n    this.captureConfig = {\n        // 开发者可以根据自身的需要设置宽高。\n        frameWidth: 768,\n        frameHeight: 1280,\n        // 参考应用文件访问与管理开发示例新建并读写一个文件fd。\n        fd: this.captureFile.fd,\n        // 可选参数及其默认值。\n        videoBitrate: 10000000,\n        audioSampleRate: 48000,\n        audioChannelCount: 2,\n        audioBitrate: 96000,\n        displayId: 0,\n        preset: media.AVScreenCaptureRecordPreset.SCREEN_RECORD_PRESET_H264_AAC_MP4\n      };\n  }\n\n  // 注册screenCapture回调函数。\n  private registerScreenCaptureCallback(): void {\n    this.screenCapture?.on('stateChange', async (infoType: media.AVScreenCaptureStateCode) => {\n      switch (infoType) {\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STARTED:\n          console.info(\"录屏成功开始后会收到的回调\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_CANCELED:\n          this.screenCapture?.release();\n          this.screenCapture = undefined;\n          console.info(\"不允许使用录屏功能\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STOPPED_BY_USER:\n          this.screenCapture?.release();\n          this.screenCapture = undefined;\n          console.info(\"通过录屏胶囊结束录屏，底层录制会停止\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_INTERRUPTED_BY_OTHER:\n          console.info(\"录屏因其他中断而停止，底层录制会停止\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STOPPED_BY_CALL:\n          console.info(\"录屏过程因通话中断，底层录制会停止\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_MIC_UNAVAILABLE:\n          console.info(\"录屏麦克风不可用\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_MIC_MUTED_BY_USER:\n          console.info(\"录屏麦克风被用户静音\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_MIC_UNMUTED_BY_USER:\n          console.info(\"录屏麦克风被用户取消静音\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_ENTER_PRIVATE_SCENE:\n          // 目前可以从系统直接注册监听到进入隐私场景。\n          console.info(\"录屏进入隐私场景\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_EXIT_PRIVATE_SCENE:\n          console.info(\"录屏退出隐私场景\");\n          break;\n        case media.AVScreenCaptureStateCode.SCREENCAPTURE_STATE_STOPPED_BY_USER_SWITCHES:\n          console.info(\"用户账号切换，底层录制会停止\");\n          break;\n        default:\n          break;\n      }\n    })\n    this.screenCapture?.on('error', (err) => {\n      console.error(`处理异常情况, code is ${err.code}, message is ${err.message}.`);\n    })\n  }\n\n  // 取消注册screenCapture回调函数。\n  private unRegisterScreenCaptureCallback(): void {\n    this.screenCapture?.off('stateChange');\n    this.screenCapture?.off('error');\n  }\n\n  // 调用startRecording方法可以开始一次录屏存文件的流程，结束录屏可以通过点击录屏胶囊停止按钮进行操作。\n  async startRecording(context: Context): Promise<void> {\n    this.screenCapture = await media.createAVScreenCaptureRecorder();\n    if (!this.screenCapture) {\n      // failed.\n      return;\n    }\n    this.openFile(context);\n    if (!this.captureFile) {\n      console.error(\"处理异常情况\");\n      return;\n    }\n    this.setConfig();\n    await this.screenCapture?.init(this.captureConfig);\n\n    this.registerScreenCaptureCallback();\n    // 豁免隐私窗口。\n    let windowIDs = [57, 86];\n    await this.screenCapture?.skipPrivacyMode(windowIDs);\n\n    await this.screenCapture?.startRecording();\n  }\n\n  // 可以主动调用stopRecording方法来停止录屏。\n  async stopRecording(): Promise<void> {\n    if (!this.screenCapture) {\n      // Error.\n      this.closeFile();\n      return;\n    }\n\n    await this.screenCapture?.stopRecording();\n    this.unRegisterScreenCaptureCallback();\n    // 调用release()方法销毁实例，释放资源。\n    await this.screenCapture?.release();\n\n    // 最后需要关闭创建的录屏文件;\n    this.closeFile();\n  }\n}\n"
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
686451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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