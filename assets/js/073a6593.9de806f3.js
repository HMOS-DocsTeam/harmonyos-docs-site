"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["398804"], {
341607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_recording_arkts_using_avrecorder_for_recording_using_avrecorder_for_recording_md_073_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-recording-arkts-using-avrecorder-for-recording-using-avrecorder-for-recording-md-073.json
var site_docs_media_kit_media_kit_dev_arkts_media_recording_arkts_using_avrecorder_for_recording_using_avrecorder_for_recording_md_073_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/using-avrecorder-for-recording","title":"使用AVRecorder录制音频(ArkTS)","description":"使用AVRecorder可以实现音频录制功能，本开发指导将以“开始录制-暂停录制-恢复录制-停止录制”的一次流程为例，向开发者讲解AVRecorder音频录制相关功能。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/using-avrecorder-for-recording.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording","slug":"/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVRecorder录制音频(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avrecorder-for-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SoundPool播放短音频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback/"},"next":{"title":"使用AVRecorder录制视频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/using-avrecorder-for-recording.md


const frontMatter = {
	title: '使用AVRecorder录制音频(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avrecorder-for-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVRecorder录制音频(ArkTS)';

const assets = {

};



const toc = [{
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "开发音频录制应用须知",
  "id": "开发音频录制应用须知",
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
        id: "使用avrecorder录制音频arkts",
        children: "使用AVRecorder录制音频(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avrecorder",
        children: "AVRecorder"
      }), "可以实现音频录制功能，本开发指导将以“开始录制-暂停录制-恢复录制-停止录制”的一次流程为例，向开发者讲解AVRecorder音频录制相关功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行应用开发的过程中，开发者可以通过AVRecorder的state属性，主动获取当前状态或使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#onstatechange9",
        children: "on('stateChange')"
      }), "方法监听状态变化。开发过程中必须严格遵循状态机要求，例如只能在started状态下调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#pause9-1",
        children: "pause"
      }), "接口，只能在paused状态下调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#resume9-1",
        children: "resume"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 录制状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(358200)/* ["default"] */.A) + "",
        width: "1335",
        height: "783"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avrecorderstate9",
        children: "AVRecorderState"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发此功能前，开发者应根据实际需求申请相关权限："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要使用麦克风时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.MICROPHONE"
          })
        }), "麦克风权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要读取和保存音频文件时，请优先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
          children: "AudioViewPicker音频选择器对象"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(798830)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅应用需要克隆、备份或同步用户公共目录的音频类文件时，可申请ohos.permission.READ_AUDIO、ohos.permission.WRITE_AUDIO权限来读写音频文件，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受控权限"
      }), "，通过AGC审核后才能使用。为避免应用的上架申请被驳回，开发者应优先使用Picker/控件等替代方案，仅少量符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_audio",
        children: "特殊场景"
      }), "的应用被允许申请受限权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发音频录制应用须知",
      children: "开发音频录制应用须知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果需要持续录制或后台录制，请申请长时任务避免进入挂起（Suspend）状态。具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/continuous-task",
          children: "长时任务开发指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "录制需要在前台启动，启动后可以退后台。在后台启动录制将会失败。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用录制音频时需要使用合适的录制流类型，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/using-right-streamusage-and-sourcetype",
          children: "使用合适的音频流类型"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用录制音频时需要切换输入设备路由，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-device/audio-input-device-switcher",
          children: "实现音频输入设备路由切换"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder",
        children: "AVRecorder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AVRecorder实例，实例创建完成进入idle状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(451485)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要在avRecorder完成赋值后，再进行剩余操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nprivate avRecorder: media.AVRecorder | undefined = undefined;\n\ntry {\n  this.avRecorder = await media.createAVRecorder();\n} catch (err) {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to create avRecorder, error code: ${error.code}, message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置业务需要的监听事件，监听状态变化及错误上报。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "stateChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听AVRecorder的state属性改变。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "error"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听AVRecorder的错误信息。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 状态上报回调函数。\nthis.avRecorder?.on('stateChange', (state: media.AVRecorderState, reason: media.StateChangeReason) => {\n  console.info(`AVRecorder state is changed to ${state}, reason: ${reason}`);\n  // 用户可以在此补充状态发生切换后想要进行的动作。\n});\n\n// 错误上报回调函数。\nthis.avRecorder?.on('error', (error) => {\n  console.error(`Error occurred in avRecorder, error code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置音频录制参数，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#prepare9-1",
            children: "prepare"
          }), "接口，此时进入prepared状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(895500)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置参数需要注意："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["配置参数之前需要确保完成对应权限的申请，请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90",
                children: "申请权限"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "prepare接口的入参avConfig中仅设置音频相关的配置参数，如示例代码所示。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果只需要录制音频，请不要设置视频相关配置参数；如果需要录制视频，可以参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording",
                children: "视频录制开发指导"
              }), "进行开发。直接设置视频相关参数会导致后续步骤报错。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["需要使用支持的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-intro#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F",
                children: "录制规格"
              }), "，具体录制参数需严格契合既定的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderprofile9",
                children: "录制参数配置"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["录制输出的url地址（即示例里avConfig中的url），形式为fd://xx (fd number)。需要基础文件操作接口（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
                children: "Core File Kit的ohos.file.fs"
              }), "）实现应用文件访问能力，获取方式参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
                children: "应用文件访问与管理"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["示例中配置的audioCodec音频编码格式、aacProfile音频编码扩展格式、fileFormat封装格式请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderprofile9",
                children: "AVRecorderProfile"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport fileIo from '@ohos.file.fs';\n\nlet avProfile: media.AVRecorderProfile = {\n  audioBitrate: 112000, // 音频比特率。\n  audioChannels: 2, // 音频声道数。\n  audioCodec: media.CodecMimeType.AUDIO_AAC, // 音频编码格式。\n  aacProfile: media.AacProfile.AAC_HE, // 音频编码扩展格式。\n  audioSampleRate: 48000, // 音频采样率。\n  fileFormat: media.ContainerFormatType.CFT_MPEG_4A, // 封装格式。\n};\n\nconst context: Context = this.getUIContext().getHostContext()!; // 参考应用文件访问与管理。\nlet filePath: string = context.filesDir + '/example.mp3';\nlet audioFile: fileIo.File = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\nlet fileFd: number = audioFile.fd; // 获取文件fd。\n \nlet avConfig: media.AVRecorderConfig = {\n  audioSourceType: media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC, // 音频输入源，这里设置为麦克风。\n  profile: avProfile,\n  url: 'fd://' + fileFd.toString(), // 参考应用文件访问与管理中的开发示例获取创建的音频文件fd填入此处。\n};\n\ntry {\n  await this.avRecorder?.prepare(avConfig);\n  console.info('Succeeded in preparing avRecorder');\n} catch (err) {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to prepare avRecorder, error code: ${error.code}, message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开始录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#start9-1",
            children: "start"
          }), "接口，此时进入started状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开始录制。\nawait this.avRecorder?.start();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["暂停录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#pause9-1",
            children: "pause"
          }), "接口，此时进入paused状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 暂停录制。\nawait this.avRecorder?.pause();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["恢复录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#resume9-1",
            children: "resume"
          }), "接口，此时再次进入started状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 恢复录制。\nawait this.avRecorder?.resume();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["停止录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#stop9-1",
            children: "stop"
          }), "接口，此时进入stopped状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 停止录制。\nawait this.avRecorder?.stop();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重置资源，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#reset9-1",
            children: "reset"
          }), "接口，重新进入idle状态，允许重新配置录制参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 重置资源。\nawait this.avRecorder?.reset();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["销毁实例，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#release9-1",
            children: "release"
          }), "接口，进入released状态，退出录制。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁实例。\nawait this.avRecorder?.release();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完成“开始录制-暂停录制-恢复录制-停止录制”的完整流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用当前示例代码时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ohos.permission.MICROPHONE"
        })
      }), "麦克风权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport fileIo from '@ohos.file.fs';\n\nasync function audioRecording(context: common.Context): Promise<void> {\n  // 创建avRecorder对象。\n  let avRecorder: media.AVRecorder | undefined = undefined;\n  try {\n    avRecorder = await media.createAVRecorder();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create avRecorder, error code: ${err.code}, message: ${err.message}`);\n    return;\n  }\n  \n  // 注册avRecorder回调函数。\n  try {\n    // 状态机变化回调函数。\n    avRecorder.on('stateChange', (state: media.AVRecorderState, reason: media.StateChangeReason) => {\n      console.info(`AVRecorder state is changed to ${state}, reason: ${reason}`);\n    });\n    // 错误上报回调函数。\n    avRecorder.on('error', (error: BusinessError) => {\n      console.error(`Error occurred in avRecorder, error code: ${error.code}, message: ${error.message}`);\n    });\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to set avRecorder callback, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  let avProfile: media.AVRecorderProfile = {\n    audioBitrate: 112000, // 音频比特率。\n    audioChannels: 2, // 音频声道数。\n    audioCodec: media.CodecMimeType.AUDIO_AAC, // 音频编码格式。\n    aacProfile: media.AacProfile.AAC_HE, // 音频编码扩展格式。\n    audioSampleRate: 48000, // 音频采样率。\n    fileFormat: media.ContainerFormatType.CFT_MPEG_4A, // 封装格式。\n  };\n  let avConfig: media.AVRecorderConfig = {\n    audioSourceType: media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC, // 音频输入源，这里设置为麦克风。\n    profile: avProfile,\n    url: 'fd://35', // 参考应用文件访问与管理开发示例新建并读写一个文件。\n  };\n\n  // 创建文件以及设置avConfig.url。\n  let audioFile: fileIo.File | undefined = undefined;\n  try {\n    let path: string = context.filesDir + '/example.mp3'; // 文件沙箱路径，文件后缀名应与封装格式对应。\n    audioFile = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE); // 打开文件。\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to open file, error code: ${err.code}, message: ${err.message}`);\n  }\n  if (audioFile !== undefined) {\n    avConfig.url = 'fd://' + audioFile.fd; // 更新url。\n  }\n  \n  // 配置录制参数完成准备工作。\n  try {\n    if (avRecorder.state === 'idle' || avRecorder.state === 'stopped') { // 仅在idle或者stopped状态下调用prepare为合理状态切换。\n      await avRecorder.prepare(avConfig);\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to prepare avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 开始录制。\n  try {\n    if (avRecorder.state === 'prepared') { // 仅在prepared状态下调用start为合理状态切换。\n      await avRecorder.start();\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to start avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 暂停录制。\n  try {\n    if (avRecorder.state === 'started') { // 仅在started状态下调用pause为合理状态切换。\n      await avRecorder.pause();\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to pause avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 恢复录制。\n  try {\n    if (avRecorder.state === 'paused') { // 仅在paused状态下调用resume为合理状态切换。\n      await avRecorder.resume();\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to resume avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 停止录制。\n  try {\n    if (avRecorder.state === 'started' || avRecorder.state === 'paused') { // 仅在started或者paused状态下调用stop为合理状态切换。\n      await avRecorder.stop();\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to stop avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n  \n  // 重置。\n  try {\n    await avRecorder.reset();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to reset avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 释放录制实例。\n  try {\n    await avRecorder.release();\n    avRecorder = undefined;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to release avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 关闭录制文件fd。\n  try {\n    if (audioFile !== undefined) {\n      await fileIo.close(audioFile.fd);\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to close fd, error code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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
798830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
358200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958596-5905e4ee3eba8233f638e69ff1d8bb5d.png");

},
895500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
451485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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