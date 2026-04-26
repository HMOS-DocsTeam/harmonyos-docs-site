"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["615037"], {
688166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_recording_arkts_video_recording_video_recording_md_b1f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-recording-arkts-video-recording-video-recording-md-b1f.json
var site_docs_media_kit_media_kit_dev_arkts_media_recording_arkts_video_recording_video_recording_md_b1f_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/video-recording","title":"使用AVRecorder录制视频(ArkTS)","description":"当前仅支持AVRecorder开发视频录制，集成了音频捕获，音频编码，视频编码，音视频封装功能，适用于实现简单视频录制并直接得到视频本地文件的场景。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/video-recording.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording","slug":"/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用AVRecorder录制视频(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVRecorder录制音频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/"},"next":{"title":"使用AVScreenCaptureRecorder录屏写文件(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording/video-recording.md


const frontMatter = {
	title: '使用AVRecorder录制视频(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVRecorder录制视频(ArkTS)';

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
        id: "使用avrecorder录制视频arkts",
        children: "使用AVRecorder录制视频(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avrecorder",
        children: "AVRecorder"
      }), "开发视频录制，集成了音频捕获，音频编码，视频编码，音视频封装功能，适用于实现简单视频录制并直接得到视频本地文件的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将以“开始录制-暂停录制-恢复录制-停止录制”的一次流程为示例，向开发者讲解如何使用AVRecorder进行视频录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行应用开发的过程中，开发者可以通过AVRecorder的state属性主动获取当前状态，或使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#onstatechange9",
        children: "on('stateChange')"
      }), "方法监听状态变化。开发过程中应该严格遵循状态机要求，例如只能在started状态下调用", (0,jsx_runtime.jsx)(_components.a, {
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
        src: (__webpack_require__(217496)/* ["default"] */.A) + "",
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
        children: ["当需要使用相机拍摄时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.CAMERA"
          })
        }), "相机权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要从图库读取图片或视频文件时，请优先使用媒体库", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
          children: "Picker选择媒体资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要保存图片或视频文件至图库时，请优先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-savebutton",
          children: "安全控件保存媒体资源"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52634)/* ["default"] */.A) + "",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(161200)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AVRecorder只负责视频数据的处理，需要与视频数据采集模块配合才能完成视频录制。视频数据采集模块需要通过Surface将视频数据传递给AVRecorder进行数据处理。当前主流的数据采集模块为相机模块，详细实现请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-recording",
        children: "相机-录像"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于文件的创建与存储操作，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
        children: "应用文件访问与管理"
      }), "，默认存储在应用的沙箱路径之下，如需存储至图库，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "安全控件保存媒体资源"
      }), "对沙箱内文件进行存储。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder",
        children: "AVRecorder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AVRecorder实例，实例创建完成进入idle状态。"
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
                children: "必要事件，监听播放器的state属性改变。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "error"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必要事件，监听播放器的错误信息。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 状态上报回调函数。\nthis.avRecorder?.on('stateChange', (state: media.AVRecorderState, reason: media.StateChangeReason) => {\n  console.info(`AVRecorder state is changed to ${state}, reason: ${reason}`);\n});\n// 错误上报回调函数。\nthis.avRecorder?.on('error', (error: BusinessError) => {\n  console.error(`Error occurred in avRecorder, error code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置视频录制参数，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#prepare9-1",
            children: "prepare"
          }), "接口，此时进入prepared状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(556173)/* ["default"] */.A) + "",
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
              children: "prepare接口的入参avConfig中仅设置视频相关的配置参数，如示例代码所示。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果添加了音频参数，系统将认为是“音频+视频录制”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["需要使用支持的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/media-kit/media-kit-intro#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F",
                children: "录制规格"
              }), "，视频比特率、分辨率、帧率以实际硬件设备支持的范围为准。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["录制输出的url地址（即示例里avConfig中的url），形式为fd://xx (fd number)。需要调用基础文件操作接口（", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
                children: "Core File Kit的ohos.file.fs"
              }), "）实现应用文件访问能力，获取方式参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
                children: "应用文件访问与管理"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["示例中配置的fileFormat视频文件封装格式、videoCodec视频编码格式请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderprofile9",
                children: "录制参数配置"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport fileIo from '@ohos.file.fs';\n\nlet avProfile: media.AVRecorderProfile = {\n  fileFormat: media.ContainerFormatType.CFT_MPEG_4, // 视频文件封装格式。\n  videoBitrate: 200000, // 视频比特率。\n  videoCodec: media.CodecMimeType.VIDEO_AVC, // 视频文件编码格式。\n  videoFrameWidth: 640,  // 视频分辨率的宽。\n  videoFrameHeight: 480, // 视频分辨率的高。\n  videoFrameRate: 30 // 视频帧率。\n};\n\nlet videoMetaData: media.AVMetadata = {\n  videoOrientation: '0' // 视频旋转角度，默认为0不旋转，支持的值为0、90、180、270。\n};\n\nconst context: Context = this.getUIContext().getHostContext()!; // 参考应用文件访问与管理。\nlet filePath: string = context.filesDir + '/example.mp4';\nlet videoFile: fileIo.File = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\nlet fileFd: number = videoFile.fd; // 获取文件fd。\n\nlet avConfig: media.AVRecorderConfig = {\n  videoSourceType: media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV, // 视频源类型，支持YUV和ES两种格式。\n  profile: avProfile,\n  url: 'fd://' + fileFd.toString(), // 参考应用文件访问与管理开发示例新建并读写一个视频文件。\n  metadata: videoMetaData\n};\n\ntry {\n  await this.avRecorder?.prepare(avConfig);\n  console.info('Succeeded in preparing avRecorder');\n} catch (err) {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to prepare avRecorder, error code: ${error.code}, message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取视频录制需要的SurfaceID。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#getinputsurface9-1",
            children: "getInputSurface"
          }), "接口，接口的返回值SurfaceID用于传递给视频数据输入源模块。常用的输入源模块为相机，以下示例代码中，采用相机作为视频输入源为例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入源模块通过SurfaceID可以获取到Surface，通过Surface可以将视频数据流传递给AVRecorder，由AVRecorder再进行视频数据的处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nthis.avRecorder?.getInputSurface().then((surfaceId: string) => {\n  console.info('Succeeded in getting input surface');\n}, (error: BusinessError) => {\n  console.error(`Failed to get input surface, error code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化视频数据输入源。该步骤需要在输入源模块完成，以相机为例，需要创建录像输出流，包括创建Camera对象、获取相机列表、创建相机输入流等，相机详细步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-recording",
            children: "相机-录像方案"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开始录制，启动输入源输入视频数据，例如相机模块调用camera.VideoOutput.start接口启动相机录制。然后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#start9-1",
            children: "start"
          }), "接口，此时AVRecorder进入started状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["暂停录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#pause9-1",
            children: "pause"
          }), "接口，此时AVRecorder进入paused状态，同时暂停输入源输入数据。例如相机模块调用camera.VideoOutput.stop停止相机视频数据输入。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["恢复录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#resume9-1",
            children: "resume"
          }), "接口，此时再次进入started状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["停止录制，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#stop9-1",
            children: "stop"
          }), "接口，此时进入stopped状态，同时停止相机录制。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重置资源，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#reset9-1",
            children: "reset"
          }), "接口，重新进入idle状态，允许重新配置录制参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["销毁实例，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#release9-1",
            children: "release"
          }), "接口，进入released状态，退出录制，释放视频数据输入源相关资源，例如相机资源。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，完成“开始录制-暂停录制-恢复录制-停止录制”的完整流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { camera } from '@kit.CameraKit';\nimport { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileUri } from '@kit.CoreFileKit';\nimport fileIo from '@ohos.file.fs';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function videoRecording(context: common.Context): Promise<void> {\n  // 创建avRecorder对象。\n  let avRecorder: media.AVRecorder | undefined = undefined;\n  try {\n    avRecorder = await media.createAVRecorder();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create avRecorder, error code: ${err.code}, message: ${err.message}`);\n    return;\n  }\n  \n  // 注册avRecorder回调函数。\n  try {\n    // 状态机变化回调函数。\n    avRecorder.on('stateChange', (state: media.AVRecorderState, reason: media.StateChangeReason) => {\n      console.info(`AVRecorder state is changed to ${state}, reason: ${reason}`);\n    });\n    // 错误上报回调函数。\n    avRecorder.on('error', (error: BusinessError) => {\n      console.error(`Error occurred in avRecorder, error code: ${error.code}, message: ${error.message}`);\n    });\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to set avRecorder callback, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 配置录制参数完成准备工作。\n  let avProfile: media.AVRecorderProfile = {\n    fileFormat: media.ContainerFormatType.CFT_MPEG_4, // 视频文件封装格式。\n    videoBitrate: 100000, // 视频比特率。\n    videoCodec: media.CodecMimeType.VIDEO_AVC, // 视频文件编码格式。\n    videoFrameWidth: 640,  // 视频分辨率的宽。\n    videoFrameHeight: 480, // 视频分辨率的高。\n    videoFrameRate: 30 // 视频帧率。\n  };\n  let videoMetaData: media.AVMetadata = {\n    videoOrientation: '0' // 视频旋转角度，默认为0不旋转，支持的值为0、90、180、270。\n  };\n  let avConfig: media.AVRecorderConfig = {\n    videoSourceType: media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV, // 视频源类型，支持YUV和ES两种格式。\n    profile: avProfile,\n    url: 'fd://35', // 参考应用文件访问与管理开发示例新建并读写一个文件。\n    metadata: videoMetaData\n  };\n\n  // 创建文件以及设置avConfig.url。\n  let filePath: string = ''; // 文件路径。\n  let videoFile: fileIo.File | undefined = undefined;\n  try {\n    filePath = context.filesDir + '/example.mp4'; // 文件沙箱路径，文件后缀名应与封装格式对应。\n    videoFile = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE); // 打开文件。\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to open file, error code: ${err.code}, message: ${err.message}`);\n  }\n  if (videoFile !== undefined) {\n    avConfig.url = 'fd://' + videoFile.fd; // 更新url。\n  }\n\n  // 配置录制参数完成准备工作。\n  try {\n    if (avRecorder.state === 'idle' || avRecorder.state === 'stopped') { // 仅在idle或者stopped状态下调用prepare为合理状态切换。\n      await avRecorder.prepare(avConfig);\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to prepare avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 完成相机相关准备工作。\n  let cameraManager: camera.CameraManager = camera.getCameraManager(context);\n  let videoOutSurfaceId: string = await avRecorder.getInputSurface();\n  await prepareCamera(cameraManager, videoOutSurfaceId);\n\n  // 启动录制。\n  try {\n    if (avRecorder.state === 'prepared') { // 仅在prepared状态下调用start为合理状态切换。\n      await startCameraOutput(); // 启动相机出流。\n      await avRecorder.start();\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to start avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 暂停录制。\n  try {\n    if (avRecorder.state === 'started') { // 仅在started状态下调用pause为合理状态切换。\n      await avRecorder.pause();\n      await stopCameraOutput(); // 停止相机出流。\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to pause avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 恢复录制。\n  try {\n    if (avRecorder.state === 'paused') { // 仅在paused状态下调用resume为合理状态切换。\n      await startCameraOutput(); // 启动相机出流。\n      await avRecorder.resume();\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to resume avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 停止录制。\n  try {\n    if (avRecorder.state === 'started' || avRecorder.state === 'paused') { // 仅在started或者paused状态下调用stop为合理状态切换。\n      await avRecorder.stop();\n      await stopCameraOutput(); // 停止相机出流。\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to stop avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n  \n  // 重置。\n  try {\n    await avRecorder.reset();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to reset avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 释放录制实例。\n  try {\n    await avRecorder.release();\n    avRecorder = undefined;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to release avRecorder, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 关闭录制文件fd。\n  try {\n    if (videoFile !== undefined) {\n      await fileIo.close(videoFile.fd);\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to close fd, error code: ${err.code}, message: ${err.message}`);\n  }\n\n  // 释放相机相关实例。\n  await releaseCamera();\n  \n  // 安全控件保存媒体资源至图库。\n  let phAccessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n\n  // 需要确保uriPath对应的资源存在。\n  let uriPath: string = fileUri.getUriFromPath(filePath); // 获取录制文件的uri，用于安全控件保存至图库。\n  let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =\n    photoAccessHelper.MediaAssetChangeRequest.createVideoAssetRequest(context, uriPath);\n  await phAccessHelper.applyChanges(assetChangeRequest);\n}\n\n// 相机相关准备工作。\nasync function prepareCamera(cameraManager: camera.CameraManager, videoOutSurfaceId: string) {\n  // 具体实现查看相机资料。\n}\n\n// 启动相机出流。\nasync function startCameraOutput() {\n  // 调用VideoOutput的start接口开始录像输出。\n}\n\n// 停止相机出流。\nasync function stopCameraOutput() {\n  // 调用VideoOutput的stop接口停止录像输出。\n}\n\n// 释放相机实例。\nasync function releaseCamera() {\n  // 释放相机准备阶段创建出的实例。\n}\n"
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
217496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478597-d28be1e45ba9912479e8d19d1eac1fcd.png");

},
556173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
161200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
52634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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