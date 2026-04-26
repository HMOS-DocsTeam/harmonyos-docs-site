"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["749341"], {
873418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_arkts_js_apis_media_arkts_apis_media_avrecorder_arkts_apis_media_avrecorder_md_415_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-arkts-js-apis-media-arkts-apis-media-avrecorder-arkts-apis-media-avrecorder-md-415.json
var site_docs_ref_media_api_media_arkts_js_apis_media_arkts_apis_media_avrecorder_arkts_apis_media_avrecorder_md_415_namespaceObject = JSON.parse('{"id":"media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder","title":"Interface (AVRecorder)","description":"音视频录制管理类，用于音视频媒体录制。在调用AVRecorder的方法前，需要先调用createAVRecorder接口构建一个AVRecorder实例。","source":"@site/docs-ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder.md","sourceDirName":"media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder","slug":"/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder","permalink":"/harmonyos-docs-site/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Interface (AVRecorder)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder","kit":"媒体","last_updated":"2026-04-22","slug":"arkts-apis-media-avrecorder"},"sidebar":"ref","previous":{"title":"Interface (AVPlayer)","permalink":"/harmonyos-docs-site/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer"},"next":{"title":"Interface (AVScreenCaptureRecorder)","permalink":"/harmonyos-docs-site/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder.md


const frontMatter = {
	title: 'Interface (AVRecorder)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-media-avrecorder'
};
const contentTitle = 'Interface (AVRecorder)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "prepare9+",
  "id": "prepare9",
  "level": 2
}, {
  "value": "prepare9+",
  "id": "prepare9-1",
  "level": 2
}, {
  "value": "getInputSurface9+",
  "id": "getinputsurface9",
  "level": 2
}, {
  "value": "getInputSurface9+",
  "id": "getinputsurface9-1",
  "level": 2
}, {
  "value": "updateRotation12+",
  "id": "updaterotation12",
  "level": 2
}, {
  "value": "setWillMuteWhenInterrupted20+",
  "id": "setwillmutewheninterrupted20",
  "level": 2
}, {
  "value": "start9+",
  "id": "start9",
  "level": 2
}, {
  "value": "start9+",
  "id": "start9-1",
  "level": 2
}, {
  "value": "pause9+",
  "id": "pause9",
  "level": 2
}, {
  "value": "pause9+",
  "id": "pause9-1",
  "level": 2
}, {
  "value": "resume9+",
  "id": "resume9",
  "level": 2
}, {
  "value": "resume9+",
  "id": "resume9-1",
  "level": 2
}, {
  "value": "stop9+",
  "id": "stop9",
  "level": 2
}, {
  "value": "stop9+",
  "id": "stop9-1",
  "level": 2
}, {
  "value": "reset9+",
  "id": "reset9",
  "level": 2
}, {
  "value": "reset9+",
  "id": "reset9-1",
  "level": 2
}, {
  "value": "release9+",
  "id": "release9",
  "level": 2
}, {
  "value": "release9+",
  "id": "release9-1",
  "level": 2
}, {
  "value": "getCurrentAudioCapturerInfo11+",
  "id": "getcurrentaudiocapturerinfo11",
  "level": 2
}, {
  "value": "getCurrentAudioCapturerInfo11+",
  "id": "getcurrentaudiocapturerinfo11-1",
  "level": 2
}, {
  "value": "getAudioCapturerMaxAmplitude11+",
  "id": "getaudiocapturermaxamplitude11",
  "level": 2
}, {
  "value": "getAudioCapturerMaxAmplitude11+",
  "id": "getaudiocapturermaxamplitude11-1",
  "level": 2
}, {
  "value": "getAvailableEncoder11+",
  "id": "getavailableencoder11",
  "level": 2
}, {
  "value": "getAvailableEncoder11+",
  "id": "getavailableencoder11-1",
  "level": 2
}, {
  "value": "getAVRecorderConfig11+",
  "id": "getavrecorderconfig11",
  "level": 2
}, {
  "value": "getAVRecorderConfig11+",
  "id": "getavrecorderconfig11-1",
  "level": 2
}, {
  "value": "on(&#39;stateChange&#39;)9+",
  "id": "onstatechange9",
  "level": 2
}, {
  "value": "off(&#39;stateChange&#39;)9+",
  "id": "offstatechange9",
  "level": 2
}, {
  "value": "on(&#39;error&#39;)9+",
  "id": "onerror9",
  "level": 2
}, {
  "value": "off(&#39;error&#39;)9+",
  "id": "offerror9",
  "level": 2
}, {
  "value": "on(&#39;audioCapturerChange&#39;)11+",
  "id": "onaudiocapturerchange11",
  "level": 2
}, {
  "value": "off(&#39;audioCapturerChange&#39;)11+",
  "id": "offaudiocapturerchange11",
  "level": 2
}, {
  "value": "on(&#39;photoAssetAvailable&#39;)12+",
  "id": "onphotoassetavailable12",
  "level": 2
}, {
  "value": "off(&#39;photoAssetAvailable&#39;)12+",
  "id": "offphotoassetavailable12",
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
        id: "interface-avrecorder",
        children: "Interface (AVRecorder)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音视频录制管理类，用于音视频媒体录制。在调用AVRecorder的方法前，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreateavrecorder9",
        children: "createAVRecorder"
      }), "接口构建一个AVRecorder实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音视频录制demo可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording",
        children: "音频录制开发指导"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording",
        children: "视频录制开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10092)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Interface首批接口从API version 9开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["相机视频录制功能需配合相机模块使用，相机模块接口的使用详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
          children: "相机管理"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avrecorderstate9",
              children: "AVRecorderState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音视频录制的状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12 开始，该接口支持在元服务中使用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prepare9",
      children: "prepare9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "prepare(config: AVRecorderConfig, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音视频录制的参数设置。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.MICROPHONE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不涉及音频录制时，无需获取ohos.permission.MICROPHONE权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderconfig9",
              children: "AVRecorderConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置音视频录制的相关参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当prepare接口成功，err为undefined，否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 配置参数以实际硬件设备支持的范围为准。\nlet avRecorderProfile: media.AVRecorderProfile = {\n  audioBitrate : 48000,\n  audioChannels : 2,\n  audioCodec : media.CodecMimeType.AUDIO_AAC,\n  audioSampleRate : 48000,\n  fileFormat : media.ContainerFormatType.CFT_MPEG_4,\n  videoBitrate : 2000000,\n  videoCodec : media.CodecMimeType.VIDEO_AVC,\n  videoFrameWidth : 640,\n  videoFrameHeight : 480,\n  videoFrameRate : 30\n};\nlet videoMetaData: media.AVMetadata = {\n  videoOrientation: '0' // 合理值0、90、180、270，非合理值prepare接口报错。\n};\nlet avRecorderConfig: media.AVRecorderConfig = {\n  audioSourceType : media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC,\n  videoSourceType : media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV,\n  profile : avRecorderProfile,\n  url : 'fd://', // 文件需先由调用者创建，赋予读写权限，将文件fd传给此参数，eg.fd://45\n  metadata: videoMetaData,\n  location : { latitude : 30, longitude : 130 }\n};\n\navRecorder.prepare(avRecorderConfig, (err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to prepare and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in preparing');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prepare9-1",
      children: "prepare9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "prepare(config: AVRecorderConfig): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音视频录制的参数设置。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.MICROPHONE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不涉及音频录制时，无需获取ohos.permission.MICROPHONE权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderconfig9",
              children: "AVRecorderConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置音视频录制的相关参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\n// 配置参数以实际硬件设备支持的范围为准。\nlet avRecorderProfile: media.AVRecorderProfile = {\n  audioBitrate : 48000,\n  audioChannels : 2,\n  audioCodec : media.CodecMimeType.AUDIO_AAC,\n  audioSampleRate : 48000,\n  fileFormat : media.ContainerFormatType.CFT_MPEG_4,\n  videoBitrate : 2000000,\n  videoCodec : media.CodecMimeType.VIDEO_AVC,\n  videoFrameWidth : 640,\n  videoFrameHeight : 480,\n  videoFrameRate : 30\n};\nlet videoMetaData: media.AVMetadata = {\n  videoOrientation: '0' // 合理值0、90、180、270，非合理值prepare接口报错。\n};\nlet avRecorderConfig: media.AVRecorderConfig = {\n  audioSourceType : media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC,\n  videoSourceType : media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV,\n  profile : avRecorderProfile,\n  url : 'fd://',  // 文件需先由调用者创建，赋予读写权限，将文件fd传给此参数，eg.fd://45\n  metadata : videoMetaData,\n  location : { latitude : 30, longitude : 130 }\n};\n\navRecorder.prepare(avRecorderConfig).then(() => {\n  console.info('Succeeded in preparing');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to prepare and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getinputsurface9",
      children: "getInputSurface9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getInputSurface(callback: AsyncCallback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获得录制需要的surface。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者从此surface中获取surfaceBuffer，填入相应的视频数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口成功调用后，才能调用getInputSurface接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取surface成功，err为undefined，data为获取到的surfaceId，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet surfaceID: string; // 该surfaceID用于传递给相机接口创建videoOutput。\n\navRecorder.getInputSurface((err: BusinessError, surfaceId: string) => {\n  if (err) {\n    console.error(`Failed to do getInputSurface and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in doing getInputSurface');\n    surfaceID = surfaceId;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getinputsurface9-1",
      children: "getInputSurface9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getInputSurface(): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获得录制需要的surface。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者从此surface中获取surfaceBuffer，填入相应的视频数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "接口成功调用后，才能调用getInputSurface接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回surface中获取的surfaceBuffer。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet surfaceID: string; // 该surfaceID用于传递给相机接口创建videoOutput。\n\navRecorder.getInputSurface().then((surfaceId: string) => {\n  console.info('Succeeded in getting InputSurface');\n  surfaceID = surfaceId;\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to get InputSurface and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updaterotation12",
      children: "updateRotation12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateRotation(rotation: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新视频旋转角度。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当且仅当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "接口成功调用后，且在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#start9",
        children: "start"
      }), "接口之前，才能调用updateRotation接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度，取值仅支持0、90、180、270度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet rotation = 90;\n\navRecorder.updateRotation(rotation).then(() => {\n  console.info('Succeeded in doing updateRotation');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to do updateRotation and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setwillmutewheninterrupted20",
      children: "setWillMuteWhenInterrupted20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前录制音频流是否启用静音打断模式。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "muteWhenInterrupted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前录制音频流是否启用静音打断模式, true表示启用，false表示不启用，保持为默认打断模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.setWillMuteWhenInterrupted(true).then(() => {\n  console.info('Succeeded in doing setWillMuteWhenInterrupted');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to do setWillMuteWhenInterrupted and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start9",
      children: "start9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "start(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始视频录制。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["纯音频录制需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口成功调用后，才能调用start接口。纯视频录制，音视频录制需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getinputsurface9",
        children: "getInputSurface"
      }), "接口成功调用后，才能调用start接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当开始录制视频成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.start((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to start AVRecorder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in starting AVRecorder');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start9-1",
      children: "start9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "start(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始视频录制。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["纯音频录制需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "接口成功调用后，才能调用start接口。纯视频录制，音视频录制需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getinputsurface9-1",
        children: "getInputSurface"
      }), "接口成功调用后，才能调用start接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.start().then(() => {\n  console.info('Succeeded in starting AVRecorder');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to start AVRecorder and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pause9",
      children: "pause9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pause(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂停视频录制。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "#start9",
        children: "start"
      }), "接口成功调用后，才能调用pause接口，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resume9",
        children: "resume"
      }), "接口来恢复录制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当暂停视频录制成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.pause((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to pause AVRecorder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in pausing');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pause9-1",
      children: "pause9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pause(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂停视频录制。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "#start9-1",
        children: "start"
      }), "接口成功调用后，才能调用pause接口，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resume9-1",
        children: "resume"
      }), "接口来恢复录制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.pause().then(() => {\n  console.info('Succeeded in pausing');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to pause AVRecorder and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resume9",
      children: "resume9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resume(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复视频录制。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pause9",
        children: "pause"
      }), "接口成功调用后，才能调用resume接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当恢复视频录制成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.resume((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to resume AVRecorder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in resuming AVRecorder');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resume9-1",
      children: "resume9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resume(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复视频录制。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pause9-1",
        children: "pause"
      }), "接口成功调用后，才能调用resume接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.resume().then(() => {\n  console.info('Succeeded in resuming AVRecorder');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to resume AVRecorder failed and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stop9",
      children: "stop9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stop(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止视频录制。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#start9",
        children: "start"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pause9",
        children: "pause"
      }), "接口成功调用后，才能调用stop接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["纯音频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口才能重新录制。纯视频录制，音视频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getinputsurface9",
        children: "getInputSurface"
      }), "接口才能重新录制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当停止视频录制成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.stop((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to stop AVRecorder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in stopping AVRecorder');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stop9-1",
      children: "stop9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stop(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止视频录制。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#start9-1",
        children: "start"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pause9-1",
        children: "pause"
      }), "接口成功调用后，才能调用stop接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["纯音频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "接口才能重新录制。纯视频录制，音视频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getinputsurface9-1",
        children: "getInputSurface"
      }), "接口才能重新录制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.stop().then(() => {\n  console.info('Succeeded in stopping AVRecorder');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to stop AVRecorder and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reset9",
      children: "reset9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reset(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置音视频录制。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["纯音频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口才能重新录制。纯视频录制，音视频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getinputsurface9",
        children: "getInputSurface"
      }), "接口才能重新录制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当重置音视频录制成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.reset((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to reset AVRecorder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in resetting AVRecorder');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reset9-1",
      children: "reset9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reset(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置音视频录制。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["纯音频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "接口才能重新录制。纯视频录制，音视频录制时，需要重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getinputsurface9-1",
        children: "getInputSurface"
      }), "接口才能重新录制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.reset().then(() => {\n  console.info('Succeeded in resetting AVRecorder');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to reset AVRecorder and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release9",
      children: "release9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放音视频录制资源。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放音视频录制资源之后，该AVRecorder实例不能再进行任何操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当释放音视频录制资源成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.release((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to release AVRecorder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in releasing AVRecorder');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release9-1",
      children: "release9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放音视频录制资源。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放音视频录制资源之后，该AVRecorder实例不能再进行任何操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.release().then(() => {\n  console.info('Succeeded in releasing AVRecorder');\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to release AVRecorder and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcurrentaudiocapturerinfo11",
      children: "getCurrentAudioCapturerInfo11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前音频采集参数。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口成功调用后，才能调用此接口。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stop9",
        children: "stop"
      }), "接口成功调用后，调用此接口会报错。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiocapturerchangeinfo9",
              children: "audio.AudioCapturerChangeInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取音频采集参数成功时，err为undefined，data为获取到的audio.AudioCapturerChangeInfo，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { audio } from '@kit.AudioKit';\n\nlet currentCapturerInfo: audio.AudioCapturerChangeInfo;\n\navRecorder.getCurrentAudioCapturerInfo((err: BusinessError, capturerInfo: audio.AudioCapturerChangeInfo) => {\n  if (err) {\n    console.error(`Failed to get CurrentAudioCapturerInfo and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in getting CurrentAudioCapturerInfo');\n    currentCapturerInfo = capturerInfo;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcurrentaudiocapturerinfo11-1",
      children: "getCurrentAudioCapturerInfo11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前音频采集参数。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口成功调用后，才能调用此接口。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stop9",
        children: "stop"
      }), "接口成功调用后，调用此接口会报错。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiocapturerchangeinfo9",
              children: "audio.AudioCapturerChangeInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取的当前音频采集参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { audio } from '@kit.AudioKit';\n\nlet currentCapturerInfo: audio.AudioCapturerChangeInfo;\n\navRecorder.getCurrentAudioCapturerInfo().then((capturerInfo: audio.AudioCapturerChangeInfo) => {\n  console.info('Succeeded in getting CurrentAudioCapturerInfo');\n  currentCapturerInfo = capturerInfo;\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to get CurrentAudioCapturerInfo and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getaudiocapturermaxamplitude11",
      children: "getAudioCapturerMaxAmplitude11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAudioCapturerMaxAmplitude(callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前音频最大振幅。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口成功调用后，才能调用此接口。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stop9",
        children: "stop"
      }), "接口成功调用后，调用此接口会报错。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口时，获取到的返回值是上一次获取最大振幅的时刻到当前这段区间内的音频最大振幅。例如，在1s时获取了一次最大振幅，到2s时再获取到的最大振幅是1-2s这个区间里面的最大值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。获取当前音频最大振幅成功时，err为undefined，data为获取到的最大振幅，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet maxAmplitude: number;\n\navRecorder.getAudioCapturerMaxAmplitude((err: BusinessError, amplitude: number) => {\n  if (err) {\n    console.error(`Failed to get AudioCapturerMaxAmplitude and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in getting AudioCapturerMaxAmplitude');\n    maxAmplitude = amplitude;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getaudiocapturermaxamplitude11-1",
      children: "getAudioCapturerMaxAmplitude11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAudioCapturerMaxAmplitude(): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前音频最大振幅。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口成功调用后，才能调用此接口。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stop9",
        children: "stop"
      }), "接口成功调用后，调用此接口会报错。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口时，获取到的返回值是上一次获取最大振幅的时刻到当前这段区间内的音频最大振幅。例如，在1s时获取了一次最大振幅，到2s时再获取到的最大振幅是1-2s这个区间里面的最大值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取的当前音频最大振幅。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet maxAmplitude: number;\n\navRecorder.getAudioCapturerMaxAmplitude().then((amplitude: number) => {\n  console.info('Succeeded in getting AudioCapturerMaxAmplitude');\n  maxAmplitude = amplitude;\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to get AudioCapturerMaxAmplitude and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getavailableencoder11",
      children: "getAvailableEncoder11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAvailableEncoder(callback: AsyncCallback<Array<EncoderInfo>>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取可用的编码器参数。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#encoderinfo11",
              children: "EncoderInfo"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。获取可用的编码器参数成功时，err为undefined，data为获取到的编码器参数，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet encoderInfo: media.EncoderInfo;\n\navRecorder.getAvailableEncoder((err: BusinessError, info: media.EncoderInfo[]) => {\n  if (err) {\n    console.error(`Failed to get AvailableEncoder and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in getting AvailableEncoder');\n    if (info.length > 0) {\n      encoderInfo = info[0];\n    } else {\n      console.error('No available encoder');\n    }\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getavailableencoder11-1",
      children: "getAvailableEncoder11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAvailableEncoder(): Promise<Array<EncoderInfo>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取可用的编码器参数。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#encoderinfo11",
              children: "EncoderInfo"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取的可用的编码器参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet encoderInfo: media.EncoderInfo;\n\navRecorder.getAvailableEncoder().then((info: media.EncoderInfo[]) => {\n  console.info('Succeeded in getting AvailableEncoder');\n    if (info.length > 0) {\n      encoderInfo = info[0];\n    } else {\n      console.error('No available encoder');\n    }\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to get AvailableEncoder and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getavrecorderconfig11",
      children: "getAVRecorderConfig11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取实时的配置参数。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只能在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9",
        children: "prepare"
      }), "接口调用成功后调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderconfig9",
              children: "AVRecorderConfig"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。获取实时配置的参数成功时，err为undefined，data为获取到的配置参数，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet avConfig: media.AVRecorderConfig;\n\navRecorder.getAVRecorderConfig((err: BusinessError, config: media.AVRecorderConfig) => {\n  if (err) {\n    console.error(`Failed to get avConfig and error is: Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info('Succeeded in getting AVRecorderConfig');\n    avConfig = config;\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getavrecorderconfig11-1",
      children: "getAVRecorderConfig11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAVRecorderConfig(): Promise<AVRecorderConfig>;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取实时的配置参数。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只能在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prepare9-1",
        children: "prepare"
      }), "接口调用成功后调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderconfig9",
              children: "AVRecorderConfig"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回实时配置参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate not permit. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by promise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by promise."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nlet avConfig: media.AVRecorderConfig;\n\navRecorder.getAVRecorderConfig().then((config: media.AVRecorderConfig) => {\n  console.info('Succeeded in getting AVRecorderConfig');\n  avConfig = config;\n}).catch((err: Error) => {\n  let error: BusinessError = err as BusinessError;\n  console.error(`Failed to get AVRecorderConfig and error is: Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onstatechange9",
      children: "on('stateChange')9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅录制状态机AVRecorderState切换的事件，当AVRecorderState状态机发生变化时，会通过订阅的回调方法通知用户。用户只能订阅一个录制状态机切换事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#onavrecorderstatechangehandler12",
              children: "OnAVRecorderStateChangeHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回录制状态机切换事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "avRecorder.on('stateChange', async (state: media.AVRecorderState, reason: media.StateChangeReason) => {\n  console.info('case state has changed, new state is: ' + state + ', and reason is: ' + reason);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offstatechange9",
      children: "off('stateChange')9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'stateChange', callback?: OnAVRecorderStateChangeHandler): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消订阅录制状态机", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avrecorderstate9",
        children: "AVRecorderState"
      }), "切换的事件。使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#onavrecorderstatechangehandler12",
              children: "OnAVRecorderStateChangeHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回录制状态机切换事件。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。  从API version 12开始支持此参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "avRecorder.off('stateChange');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onerror9",
      children: "on('error')9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'error', callback: ErrorCallback): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["订阅AVRecorder的错误事件，该事件仅用于错误提示，不需要用户停止播控动作。如果此时", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avrecorderstate9",
        children: "AVRecorderState"
      }), "也切换至error状态，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#reset9",
        children: "reset"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "#release9",
        children: "release"
      }), "接口退出录制操作。使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户只能订阅一个错误事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制错误事件回调类型'error'。  - 'error'：录制过程中发生错误，触发该事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback",
              children: "ErrorCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回录制错误事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time out."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio interrupted."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n\navRecorder.on('error', (err: BusinessError) => {\n  console.error(`case avRecorder.on(error) called. Code: ${err.code}, message: ${err.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offerror9",
      children: "off('error')9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'error', callback?: ErrorCallback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅录制错误事件，取消后不再接收到AVRecorder的错误事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制错误事件回调类型'error'。  - 'error'：录制过程中发生错误，触发该事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#errorcallback",
              children: "ErrorCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回录制错误事件。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。  从API version 12开始支持此参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "avRecorder.off('error');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onaudiocapturerchange11",
      children: "on('audioCapturerChange')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'audioCapturerChange', callback: Callback<audio.AudioCapturerChangeInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅录音配置变化的回调，任意录音配置的变化会触发变化后的录音配置全量信息回调。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户重复订阅时，以最后一次订阅的回调接口为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录音配置变化的回调类型，支持的事件：'audioCapturerChange'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiocapturerchangeinfo9",
              children: "audio.AudioCapturerChangeInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回变化后的录音配置全量信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit'\n\nlet capturerChangeInfo: audio.AudioCapturerChangeInfo;\n\navRecorder.on('audioCapturerChange',  (audioCapturerChangeInfo: audio.AudioCapturerChangeInfo) => {\n  console.info('audioCapturerChange called');\n  capturerChangeInfo = audioCapturerChangeInfo;\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offaudiocapturerchange11",
      children: "off('audioCapturerChange')11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'audioCapturerChange', callback?: Callback<audio.AudioCapturerChangeInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅录音变化的回调事件。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录音配置变化的回调类型，支持的事件：'audioCapturerChange'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiocapturerchangeinfo9",
              children: "audio.AudioCapturerChangeInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回变化后的录音配置全量信息。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。  从API version 12开始支持此参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "avRecorder.off('audioCapturerChange');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onphotoassetavailable12",
      children: "on('photoAssetAvailable')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'photoAssetAvailable', callback: Callback<photoAccessHelper.PhotoAsset>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["订阅媒体资源回调事件，当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-e/arkts-apis-media-e#filegenerationmode12",
        children: "FileGenerationMode"
      }), "枚举设置为系统创建媒体文件时，会在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stop9",
        children: "stop"
      }), "操作结束后把", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset",
        children: "PhotoAsset"
      }), "对象回调给应用。使用callback异步回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户重复订阅时，以最后一次订阅的回调接口为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录像资源的回调类型，支持的事件：'photoAssetAvailable'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset",
              children: "photoAccessHelper.PhotoAsset"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回系统创建的资源文件对应的PhotoAsset对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media",
        children: "Media错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO error. Return by callback."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5400105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service died. Return by callback."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nlet photoAsset: photoAccessHelper.PhotoAsset;\n\n// 例：处理photoAsset回调，保存video。\nasync function saveVideo(context: Context, asset: photoAccessHelper.PhotoAsset) {\n  console.info(\"saveVideo called\");\n  try {\n    let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(asset);\n    assetChangeRequest.saveCameraPhoto();\n    await phAccessHelper.applyChanges(assetChangeRequest);\n    console.info('apply saveVideo successfully');\n  } catch (err) {\n    console.error(`apply saveVideo failed with error: ${err.code}, ${err.message}`);\n  }\n}\n// 注册photoAsset监听。\navRecorder.on('photoAssetAvailable', (asset: photoAccessHelper.PhotoAsset) => {\n  console.info('photoAssetAvailable called');\n  if (asset != undefined) {\n    photoAsset = asset;\n    // 处理photoAsset回调。\n    // 例：this.saveVideo(context, asset);\n  } else {\n    console.error('photoAsset is undefined');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "offphotoassetavailable12",
      children: "off('photoAssetAvailable')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'photoAssetAvailable', callback?: Callback<photoAccessHelper.PhotoAsset>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅媒体资源的回调类型。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录音配置变化的回调类型，支持的事件：'photoAssetAvailable'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset",
              children: "photoAccessHelper.PhotoAsset"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回系统创建的资源文件对应的PhotoAsset对象。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "avRecorder.off('photoAssetAvailable');\n"
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
10092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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