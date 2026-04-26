"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["218578"], {
776830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_playback_url_setting_method_playback_url_setting_method_md_56d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-playback-arkts-playback-url-setting-method-playback-url-setting-method-md-56d.json
var site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_playback_url_setting_method_playback_url_setting_method_md_56d_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/playback-url-setting-method","title":"使用AVPlayer设置播放URL(ArkTS)","description":"本开发指导将介绍如何使用AVPlayer开发播放功能，在不同的场景下如何设置URL。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/playback-url-setting-method.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method","slug":"/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用AVPlayer设置播放URL(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/playback-url-setting-method","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVPlayer播放视频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback/"},"next":{"title":"使用AVPlayer播放流媒体(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method/playback-url-setting-method.md


const frontMatter = {
	title: '使用AVPlayer设置播放URL(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/playback-url-setting-method',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVPlayer设置播放URL(ArkTS)';

const assets = {

};



const toc = [{
  "value": "流媒体播放场景下设置URL",
  "id": "流媒体播放场景下设置url",
  "level": 2
}, {
  "value": "本地raw文件播放场景下设置URL",
  "id": "本地raw文件播放场景下设置url",
  "level": 2
}, {
  "value": "运行完整示例",
  "id": "运行完整示例",
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
        id: "使用avplayer设置播放urlarkts",
        children: "使用AVPlayer设置播放URL(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将介绍如何使用AVPlayer开发播放功能，在不同的场景下如何设置URL。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前指导仅介绍播放URL设置方法，其他场景及完整示例代码，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback",
        children: "视频播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前开发指导将提供以下设置播放URL的方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B5%81%E5%AA%92%E4%BD%93%E6%92%AD%E6%94%BE%E5%9C%BA%E6%99%AF%E4%B8%8B%E8%AE%BE%E7%BD%AEurl",
          children: "流媒体播放场景下设置URL"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9C%AC%E5%9C%B0raw%E6%96%87%E4%BB%B6%E6%92%AD%E6%94%BE%E5%9C%BA%E6%99%AF%E4%B8%8B%E8%AE%BE%E7%BD%AEurl",
          children: "本地Raw文件播放场景下设置URL"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流媒体播放场景下设置url",
      children: "流媒体播放场景下设置URL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况一：播放HTTP/HTTPS媒体资源"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n // 类成员定义avPlayer。\n private avPlayer: media.AVPlayer | null = null;\n\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n\n // 设置对应的播放url。\n let url = 'https://xxx.xxx.xxx.mp4';\n if (this.avPlayer == null) {\n    return;\n }\n this.avPlayer.url = url;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况二：HLS媒体资源播放（点播/直播）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n // 类成员定义avPlayer。\n private avPlayer: media.AVPlayer | null = null;\n\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n\n // 设置对应的播放url。\n let url = 'https://xxx.xxx.xxx.xxx:xx/xx/index.m3u8';\n if (this.avPlayer == null) {\n    return;\n }\n this.avPlayer.url = url;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况三：设置HTTP请求头信息播放"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当服务器需要校验HTTP请求头信息时，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreatemediasourcewithurl12",
        children: "createMediaSourceWithUrl"
      }), "设置HTTP请求头信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n // 类成员定义avPlayer。\n private avPlayer: media.AVPlayer | null = null;\n\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n\n // 设置对应的播放url。\n let url = 'https://xxx.xxx.xxx.xxx:xx/xx/index.m3u8';\n // 创建mediaSource实例对象，设置媒体来源，定制HTTP请求，如需要，可以键值对的形式设置User-Agent、Cookie、Referer等字段。\n let mediaSource : media.MediaSource = media.createMediaSourceWithUrl(url,\n   {\"User-Agent\" : \"User-Agent-Value\", \"Cookie\" : \"Cookie-Value\", \"Referer\" : \"Referer-Value\"});\n // 设置播放策略，设置缓冲区数据量为3s。\n let playbackStrategy : media.PlaybackStrategy =\n   {preferredWidth: 1, preferredHeight: 2, preferredBufferDuration: 3, preferredHdr: false};\n // 为avPlayer设置媒体来源和播放策略。\n this.avPlayer.setMediaSource(mediaSource, playbackStrategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况四：通过本地Raw文件中的m3u8文件播放在线流媒体资源"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要通过解析本地Raw文件中的m3u8文件，播放在线流媒体资源时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9",
        children: "resourceManager.getRawFd"
      }), "获取文件描述符，将其拼接成fdUrl，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-mediasource/arkts-apis-media-mediasource#setmimetype12",
        children: "setMimeType"
      }), "设置MIME类型为APPLICATION_M3U8。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n import { common } from '@kit.AbilityKit';\n // 类成员定义avPlayer和context。\n private avPlayer: media.AVPlayer | null = null;\n private context: common.UIAbilityContext | undefined = undefined;\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n this.context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n // 通过本地m3u8文件名，获取文件描述符。\n let fileDescriptor = await this.context.resourceManager.getRawFd('xxx.m3u8');\n // 用文件描述符构造本地m3u8的URL。\n let fdUrl : string = \"fd://\" + fileDescriptor.fd +\n   \"?offset=\" + fileDescriptor.offset + \"&size=\" + fileDescriptor.length;\n // 按需设置HTTP请求头。\n let headers : Record<string,string> = {\"User-Agent\" : \"User-Agent-Value\", \"Cookie\" : \"Cookie-Value\"};\n // 通过本地m3u8的URL和HTTP请求头构造mediaSource媒体来源。\n let mediaSource : media.MediaSource = media.createMediaSourceWithUrl(fdUrl, headers);\n\n // 设置媒体MIME类型为APPLICATION_M3U8。\n let mimeType : media.AVMimeTypes = media.AVMimeTypes.APPLICATION_M3U8;\n mediaSource?.setMimeType(mimeType);\n\n // 设置播放策略，设置缓冲区数据量为20s。\n let playbackStrategy : media.PlaybackStrategy = {preferredBufferDuration: 20};\n // 为avPlayer设置媒体来源和播放策略。\n this.avPlayer.setMediaSource(mediaSource, playbackStrategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况五：通过应用沙箱中的m3u8文件播放在线流媒体资源"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要通过解析应用沙箱中的m3u8文件，播放在线流媒体资源时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopensync",
        children: "fileIo.openSync"
      }), "获取文件句柄，将其拼接成fdUrl，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-mediasource/arkts-apis-media-mediasource#setmimetype12",
        children: "setMimeType"
      }), "设置MIME类型为APPLICATION_M3U8。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n import { fileIo } from '@kit.CoreFileKit';\n import { common } from '@kit.AbilityKit';\n // 类成员定义avPlayer和context。\n private avPlayer: media.AVPlayer | null = null;\n private context: common.UIAbilityContext | undefined = undefined;\n private m3u8FileName: string = '';\n\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n this.context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n // 通过UIAbilityContext获取沙箱地址filesDir，以Stage模型为例。\n let m3u8FileName = '';\n let filePath = `${this.context.filesDir}/${m3u8FileName}`;\n // 通过fs.openSync获取文件句柄。\n let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_ONLY);\n let fd : string = file.fd.toString();\n // 用文件句柄构造本地m3u8的URL。\n let fdUrl : string = \"fd://\" + fd + \"?offset=\" + \"0\" + \"&size=\" + \"0\";\n\n // 按需设置HTTP请求头。\n let headers : Record<string,string> = {\"User-Agent\" : \"User-Agent-Value\", \"Cookie\" : \"Cookie-Value\"};\n // 通过本地m3u8的URL和HTTP请求头构造mediaSource媒体来源。\n let mediaSource : media.MediaSource = media.createMediaSourceWithUrl(fdUrl, headers);\n\n // 设置媒体MIME类型为APPLICATION_M3U8。\n let mimeType : media.AVMimeTypes = media.AVMimeTypes.APPLICATION_M3U8;\n mediaSource?.setMimeType(mimeType);\n\n // 设置播放策略，设置缓冲区数据量为20s。\n let playbackStrategy : media.PlaybackStrategy = {preferredBufferDuration: 20};\n // 为avPlayer设置媒体来源和播放策略。\n this.avPlayer.setMediaSource(mediaSource, playbackStrategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地raw文件播放场景下设置url",
      children: "本地raw文件播放场景下设置URL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况一：应用沙箱文件播放"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n import { fileIo } from '@kit.CoreFileKit';\n import { common } from '@kit.AbilityKit';\n // 类成员定义avPlayer，context和fileName。\n private avPlayer: media.AVPlayer | null = null;\n private context: common.UIAbilityContext | undefined = undefined;\n private fileName: string = '';\n\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n this.context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n let fdPath = 'fd://';\n let fileName = 'test.mp4'; // test.mp4为应用文件目录下的预置资源，需要开发者根据实际情况进行替换。\n // 通过UIAbilityContext获取沙箱地址filesDir，以Stage模型为例。\n let path = `${this.context?.filesDir}/${this.fileName}`;\n // 打开相应的资源文件地址获取fd，并为url赋值触发initialized状态机上报。\n let file = await fileIo.open(path);\n fdPath = fdPath + '' + file.fd;\n this.avPlayer.url = fdPath;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "情况二：本地文件播放"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296557)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用AVPlayer播放本地资源时，AVPlayer会独占此fd。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " import { media } from '@kit.MediaKit';\n import { common } from '@kit.AbilityKit';\n // 类成员定义avPlayer，context和fileName。\n private avPlayer: media.AVPlayer | null = null;\n private fileName: string = '';\n private context: common.UIAbilityContext | undefined = undefined;\n // 在业务函数中（示例工程函数名为avSetupURL）：\n // 创建avPlayer实例对象。\n this.avPlayer = await media.createAVPlayer();\n this.context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n // 通过UIAbilityContext的resourceManager成员的getRawFd接口获取媒体资源播放地址。\n // 返回类型为{fd,offset,length},fd为HAP包fd地址，offset为媒体资源偏移量，length为播放长度。\n let fileName = 'test.mp4'; // test.mp4为应用文件目录下的预置资源，需要开发者根据实际情况进行替换。\n let fileDescriptor = await this.context?.resourceManager.getRawFd(this.fileName);\n let avFileDescriptor: media.AVFileDescriptor =\n  { fd: fileDescriptor.fd, offset: fileDescriptor.offset, length: fileDescriptor.length };\n // 为fdSrc赋值触发initialized状态机上报。\n this.avPlayer.fdSrc = avFileDescriptor;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行完整示例",
      children: "运行完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVPlayer/AVPlayerArkTSURL",
            children: "示例工程"
          }), "（也可直接运行），并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVPlayerArkTSURL\nentry/src/main/ets/\n└── pages\n    └── Index.ets (播放界面)\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│       ├── ic_video_play.svg  (播放键图片资源)\n│       └── ic_video_pause.svg (暂停键图片资源)\n└── rawfile\n    ├── test.m3u8    (m3u8资源)\n    └── test_01.mp3 （音频资源）\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在/entry/src/main/module.json5中，申请使用网络的权限（或直接替换为示例工程的module.json5）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  },\n  {\n    \"name\": \"ohos.permission.GET_WIFI_INFO\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注释、解注释/entry/src/main/ets/pages/Index.ets中的上文示例的各种情况，编译并运行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在安装应用后，可将示例工程的/entry/src/main/resources/rawfile/test.m3u8通过以下命令加入应用沙箱，从而运行应用沙箱相关示例:（<FILESDIR>为物理路径，以示例工程为例，可通过console.info打印\"this.context.filesDir\"得到应用沙箱路径，再根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory",
            children: "应用沙箱指南"
          }), "的应用沙箱路径和真实物理路径的对应关系表找到物理路径）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file send \"[目录]\\test.m3u8\" <FILESDIR>\nhdc file send \"[目录]\\test_01.mp3\" <FILESDIR>\n"
          })
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
296557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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