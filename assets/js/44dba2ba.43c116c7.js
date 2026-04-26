"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["636432"], {
974303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_info_arkts_avmetadataextractor_avmetadataextractor_md_44d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-info-arkts-avmetadataextractor-avmetadataextractor-md-44d.json
var site_docs_media_kit_media_kit_dev_arkts_media_info_arkts_avmetadataextractor_avmetadataextractor_md_44d_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor/avmetadataextractor","title":"使用AVMetadataExtractor提取音视频元数据信息(ArkTS)","description":"使用AVMetadataExtractor可以实现从原始媒体资源中获取元数据。本指南将以获取一个媒体资源的元数据作为示例，向开发者讲解AVMetadataExtractor元数据相关功能。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor/avmetadataextractor.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor","slug":"/media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVMetadataExtractor提取音视频元数据信息(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avmetadataextractor","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVScreenCaptureRecorder录屏写文件(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts/"},"next":{"title":"使用AVImageGenerator提取视频指定时间图像(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-info-arkts/avimagegenerator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor/avmetadataextractor.md


const frontMatter = {
	title: '使用AVMetadataExtractor提取音视频元数据信息(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avmetadataextractor',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVMetadataExtractor提取音视频元数据信息(ArkTS)';

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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用avmetadataextractor提取音视频元数据信息arkts",
        children: "使用AVMetadataExtractor提取音视频元数据信息(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avmetadataextractor",
        children: "AVMetadataExtractor"
      }), "可以实现从原始媒体资源中获取元数据。本指南将以获取一个媒体资源的元数据作为示例，向开发者讲解AVMetadataExtractor元数据相关功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取音视频资源的元数据的全流程包含：创建AVMetadataExtractor、设置资源、获取元数据、获取音频资源的专辑封面或获取视频缩略图、释放资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avmetadataextractor/arkts-apis-media-avmetadataextractor",
        children: "AVMetadataExtractor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreateavmetadataextractor11-1",
            children: "createAVMetadataExtractor()"
          }), "创建实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n// 创建AVMetadataExtractor对象。\nlet avMetadataExtractor: media.AVMetadataExtractor = await media.createAVMetadataExtractor();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置资源：用户可以根据需要选择设置属性fdSrc（表示文件描述符）和属性dataSrc（表示dataSource描述符）或者调用setUrlSource设置在线媒体链接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者需根据实际情况，确认资源有效性并设置（只能设置其中一种）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果设置fdSrc，可以使用ResourceManager.getRawFd打开HAP资源文件描述符，使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9",
                children: "ResourceManager API参考"
              }), "。也可以通过应用沙箱路径访问对应资源（必须确保资源可用），参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
                children: "获取应用文件路径"
              }), "。应用沙箱的介绍及如何向应用沙箱推送文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-sandbox-directory",
                children: "文件管理"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { common } from '@kit.AbilityKit';\nimport { media } from '@kit.MediaKit';\n\n// 创建AVMetadataExtractor对象。\nlet avMetadataExtractor: media.AVMetadataExtractor = await media.createAVMetadataExtractor();\n// 获取rawfile目录下资源文件描述符，设置fdSrc属性。\n// 获取当前组件所在Ability的Context，并通过Context获取应用文件路径。\nlet context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n// 设置fdSrc，test.mp3为rawfile目录下的预置资源，需要开发者根据实际情况进行替换。\navMetadataExtractor.fdSrc = await context.resourceManager.getRawFd('test.mp3');\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果设置dataSrc，必须正确设置dataSrc中的callback属性，确保callback被调用时能正确读取到对应资源，使用应用沙箱路径访问对应资源，参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
                children: "获取应用文件路径"
              }), "。应用沙箱的介绍及如何向应用沙箱推送文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-sandbox-directory",
                children: "文件管理"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { fileIo, ReadOptions } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { media } from '@kit.MediaKit';\nconst TAG = 'MetadataDemo';\n\n// 创建AVMetadataExtractor对象。\nlet avMetadataExtractor: media.AVMetadataExtractor = await media.createAVMetadataExtractor();\nlet context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet rootPath: string = context.filesDir; // 应用文件目录。\nlet testFilename: string = '/test.mp3'; // test.mp3为应用文件目录下的预置资源，需要开发者根据实际情况进行替换。\n// 使用fileIo文件系统打开沙箱地址获取媒体文件地址，设置dataSrc属性。\n// 通过UIAbilityContext获取沙箱地址filesDir（以Stage模型为例）。\nlet fd: number = fileIo.openSync(rootPath + testFilename).fd;\nlet fileSize: number = fileIo.statSync(rootPath + testFilename).size;\n// 设置dataSrc描述符，通过callback从文件中获取资源，写入buffer中。\nlet dataSrc: media.AVDataSrcDescriptor = {\n  fileSize: fileSize,\n  callback: (buffer, len, pos) => {\n    if (buffer == undefined || len == undefined || pos == undefined) {\n      console.error(TAG, `dataSrc callback param invalid`);\n      return -1;\n    }\n    let options: ReadOptions = {\n      offset: pos,\n      length: len\n    };\n    let num = fileIo.readSync(fd, buffer, options);\n    console.info(TAG, 'readAt end, num: ' + num);\n    if (num > 0 && fileSize >= pos) {\n      return num;\n    }\n    return -1;\n  }\n};\n// 设置dataSrc。\navMetadataExtractor.dataSrc = dataSrc;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果设置", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avmetadataextractor/arkts-apis-media-avmetadataextractor#seturlsource20",
                children: "setUrlSource"
              }), "，必须正确设置setUrlSource中的url和headers属性，确保正确访问url。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { media } from '@kit.MediaKit';\n\n// 创建AVMetadataExtractor对象。\nlet avMetadataExtractor: media.AVMetadataExtractor = await media.createAVMetadataExtractor();\n// 调用setUrlSource设置网络点播媒体资源URL，用来获取在线音视频元数据和在线视频缩略图。\nlet url: string = 'http://xx.mp4';\nlet headers: Record<string, string> = {\n  \"User-Agent\" : \"User-Agent-Value\"\n};\navMetadataExtractor.setUrlSource(url, headers);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["不同AVMetadataExtractor或者", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avimagegenerator/arkts-apis-media-avimagegenerator",
                children: "AVImageGenerator"
              }), "实例，如果需要操作同一资源，需要多次打开文件描述符，不要共用同一文件描述符。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { common } from '@kit.AbilityKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { media } from '@kit.MediaKit';\n\n// 创建AVMetadataExtractor对象。\nlet avMetadataExtractor: media.AVMetadataExtractor = await media.createAVMetadataExtractor();\n// 使用fileIo文件系统打开沙箱地址获取媒体文件地址，设置fdSrc属性。\nlet context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet rootPath: string = context.filesDir; // 应用文件目录。\nlet testFilename: string = '/test.mp3'; // test.mp3为应用文件目录下的预置资源，需要开发者根据实际情况进行替换。\navMetadataExtractor.fdSrc = fileIo.openSync(rootPath + testFilename); // 设置fdSrc属性。\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取元数据：调用fetchMetadata()，可以获取到一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avmetadata11",
            children: "AVMetadata"
          }), "对象，通过访问该对象的各个属性，可以获取到元数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取元数据（callback模式）。\navMetadataExtractor.fetchMetadata((error, metadata) => {\n  if (error) {\n    console.error(TAG, `fetchMetadata callback failed, err = ${JSON.stringify(error)}`);\n    return;\n  }\n})\n\n// 获取元数据（promise模式）。\nlet metadata = await avMetadataExtractor.fetchMetadata();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于视频资源：可以通过fetchMetadata获取的AVMetadata对象metadata拿到视频资源的宽、高等数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取视频资源的宽和高。\nlet metadata = await avMetadataExtractor.fetchMetadata();\nlet width = metadata.videoWidth;\nlet height = metadata.videoHeight;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于音频资源而言，除了可以通过AVMetadata对象来获取音频资源的标题、时长等元数据外，还可以获取专辑封面（例如，调用fetchAlbumCover()，可以获取到专辑封面）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\n// pixelMap对象声明，用于图片显示。\n@State pixelMap: image.PixelMap | undefined = undefined;\n// 获取专辑封面（callback模式）。\navMetadataExtractor.fetchAlbumCover((err, pixelMap) => {\n  if (err) {\n    console.error(TAG, `fetchAlbumCover callback failed, err = ${JSON.stringify(err)}`);\n    return;\n  }\n  this.pixelMap = pixelMap;\n})\n\n// 获取专辑封面（promise模式）。\nthis.pixelMap = await avMetadataExtractor.fetchAlbumCover();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）获取视频缩略图：调用fetchFrameByTime，可以获取到视频缩略图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\n// pixelMap对象声明，用于图片显示。\n@State pixelMap: image.PixelMap | undefined = undefined;\n// 接口入参声明。\nlet timeUs: number = 0;\nlet queryOption: media.AVImageQueryOptions = media.AVImageQueryOptions.AV_IMAGE_QUERY_PREVIOUS_SYNC;\nlet param: media.PixelMapParams = {\n  width : 300,\n  height : 300\n}\n// 获取视频缩略图（promise模式）。\nthis.pixelMap = await avMetadataExtractor.fetchFrameByTime(timeUs, queryOption, param);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）批量获取视频缩略图：调用fetchFramesByTimes，能够批量获取视频缩略图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\n// pixelMap对象声明，用于图片显示。\n@State pixelMap: image.PixelMap | undefined = undefined;\n// 接口入参声明。\nlet timesUs: number[] = [0];\nlet queryOption: media.AVImageQueryOptions = media.AVImageQueryOptions.AV_IMAGE_QUERY_PREVIOUS_SYNC;\nlet param: media.PixelMapParams = {\n  width : 300,\n  height : 300\n}\n// 获取视频缩略图（callback模式）。\navMetadataExtractor.fetchFramesByTimes(timesUs, queryOption, param, async (frameInfo: media.FrameInfo, err: BusinessError) => {\n  if (err) {\n    console.error(`fetch failed, error = ${JSON.stringify(err)}`);\n    return;\n  }\n  console.info(`fetch success.`);\n  if (frameInfo !== undefined && frameInfo.image !== undefined) {\n    this.pixelMap = frameInfo.image;\n  }\n})\n\n// 批量获取缩略图任务耗时可能较长，可以调用cancelAllFetchFrames停止在当前extractor上所有缩略图获取任务（仅对批量获取接口生效）。\navMetadataExtractor.cancelAllFetchFrames();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放资源：调用release()销毁实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放资源（callback模式）。\navMetadataExtractor.release((error) => {\n  if (error) {\n    console.error(TAG, `release failed, err = ${JSON.stringify(error)}`);\n    return;\n  }\n  console.info(TAG, `release success.`);\n})\n\n// 释放资源（promise模式）。\navMetadataExtractor.release();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行示例工程",
      children: "运行示例工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，获取一个音频的元数据和专辑封面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVMetadataExtractor/AVMetadataExtractorArkTS",
            children: "完整示例工程"
          }), "，并将示例工程的资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " AVMetadataExtractorArkTS\n entry/src/main/ets/\n └── pages\n     └── Index.ets (获取元数据界面)\n entry/src/main/resources/\n ├── base\n │   ├── element\n │   │   ├── color.json\n │   │   ├── float.json\n │   │   └── string.json\n │   └── media\n │\n └── rawfile\n     └── test.mp3 (音频资源)\n"
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