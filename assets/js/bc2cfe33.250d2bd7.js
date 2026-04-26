"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["965919"], {
485470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_speech_kit_guide_speech_aicaption_guide_speech_aicaption_guide_md_bc2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-speech-kit-guide-speech-aicaption-guide-speech-aicaption-guide-md-bc2.json
var site_docs_speech_kit_guide_speech_aicaption_guide_speech_aicaption_guide_md_bc2_namespaceObject = JSON.parse('{"id":"speech-kit-guide/speech-aicaption-guide/speech-aicaption-guide","title":"AI字幕控件","description":"适用场景","source":"@site/docs/speech-kit-guide/speech-aicaption-guide/speech-aicaption-guide.md","sourceDirName":"speech-kit-guide/speech-aicaption-guide","slug":"/speech-kit-guide/speech-aicaption-guide/","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-aicaption-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"AI字幕控件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/speech-aicaption-guide","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"朗读控件","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-textreader-guide/"},"next":{"title":"Vision Kit简介","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/speech-kit-guide/speech-aicaption-guide/speech-aicaption-guide.md


const frontMatter = {
	title: 'AI字幕控件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/speech-aicaption-guide',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'AI字幕控件';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
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
        id: "ai字幕控件",
        children: "AI字幕控件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI字幕控件应用广泛，例如在用户不熟悉音频源语言或者静音的时候，为用户提供字幕服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节将向您介绍如何使用AI字幕组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent",
        children: "AICaptionComponent"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent#aicaptioncontroller",
        children: "AICaptionController"
      }), "展示AI字幕，效果如下图所示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(8087)/* ["default"] */.A) + "",
        width: "332",
        height: "533"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI字幕功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent",
        children: "AICaptionComponent"
      }), "提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent",
              children: "AICaptionComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI字幕组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent#aicaptionoptions",
              children: "AICaptionOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI字幕初始化参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent#aicaptioncontroller",
              children: "AICaptionController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI字幕组件的控制器，是AI字幕组件的主要功能入口类，用来操作AI字幕。它所承载的工作包括：写音频数据、获取音频流信息等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从项目根目录进入/src/main/ets/pages/Index.ets文件，在使用AI字幕控件前，将实现AI字幕控件和其他相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AICaptionComponent, AICaptionController, AICaptionOptions } from '@kit.SpeechKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单配置页面的布局，加入AI字幕组件，并在aboutToAppear中设置AI字幕组件的传入参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'AI_CAPTION_DEMO'\n\nclass Logger {\n  static info(...msg: string[]) {\n    hilog.info(0x0000, TAG, msg.join())\n  }\n\n  static error(...msg: string[]) {\n    hilog.error(0x0000, TAG, msg.join())\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private captionOption ?: AICaptionOptions;\n  private controller = new AICaptionController();\n  @State isShown: boolean = false;\n\n  aboutToAppear(): void {\n    // AI字幕初始化参数，设置字幕的不透明度和回调函数\n    this.captionOption = {\n      initialOpacity: 1,\n      onPrepared: () => {\n        Logger.info('onPrepared')\n      },\n      onError: (error) => {\n        Logger.error(`onError, code: ${error.code}, msg: ${error.message}`)\n      }\n    }\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      // 调用AICaptionComponent组件初始化字幕\n      AICaptionComponent({\n        isShown: this.isShown,\n        controller: this.controller,\n        options: this.captionOption\n      })\n        .width('100%')\n        .height(100)\n      Divider()\n      if (this.isShown) {\n        Text('上面是字幕区域')\n          .fontColor(Color.White)\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .padding(10)\n    .backgroundColor('#7A7D6A')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在布局中加入两个按钮以及点击事件的回调函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第一个按钮的回调函数负责控制AI字幕组件的显示状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "第二个按钮的回调函数负责读取资源目录中的音频文件，将音频数据传给AI字幕组件。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AudioData } from '@kit.SpeechKit';\n\n@Entry\n@Component\nstruct Index {\n\n  isReading: boolean = false;\n\n  async readPcmAudio() {\n    this.isReading = true;\n    let fileData: Uint8Array | undefined = undefined;\n    try {\n      fileData =\n        await this.getUIContext()?.getHostContext()?.resourceManager.getMediaContent($r('app.media.chineseAudio').id);\n    } catch (e) {\n      Logger.info(`get fileData fail , msg ${e} `)\n    }\n    if (fileData === undefined) {\n      return;\n    }\n    const bufferSize = 640;\n    const byteLength = fileData.byteLength;\n    let offset = 0;\n    Logger.info('byteLength', byteLength.toString())\n    let startTime = new Date().getTime();\n    while (offset < byteLength) {\n      // 模拟实际情况，读文件比录音机返回流快，所以要等待一段时间\n      let nextOffset = offset + bufferSize\n      if (offset > byteLength) {\n        this.isReading = false;\n        return\n      }\n      const arrayBuffer = fileData.buffer.slice(offset, nextOffset);\n      let data = new Uint8Array(arrayBuffer);\n      Logger.info('data byteLength', data.byteLength.toString())\n      const audioData: AudioData = {\n        data: data\n      }\n      Logger.info(`offset: ${offset} | byteLength: ${byteLength} | bufferSize: ${bufferSize}`)\n\n      if (this.controller) {\n        Logger.info(`writeAudio: ${audioData.data.byteLength}`)\n       try {\n          this.controller.writeAudio(audioData)\n        } catch (e) {\n          Logger.error(`writeAudio exception`)\n        }\n      }\n      offset = offset + bufferSize;\n      const waitTime = bufferSize / 32\n      await this.sleep(waitTime)\n    }\n    let endTime = new Date().getTime()\n    this.isReading = false;\n    Logger.info('playtime', JSON.stringify(endTime - startTime))\n  }\n\n  async sleep(time: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, time))\n  }\n\n  build() {\n    Column({ space: 20 }) {\n     // ...\n      Button('切换字幕显示状态：' + (this.isShown ? '显示' : '隐藏'))\n        .backgroundColor('#B8BDA0')\n        .width(200)\n        .onClick(() => {\n          this.isShown = !this.isShown;\n        })\n      Button('读取PCM音频')\n        .backgroundColor('#B8BDA0')\n        .width(200)\n        .onClick(() => {\n          if (!this.isReading) {\n            void this.readPcmAudio()\n          }\n        })\n     // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AICaptionComponent, AICaptionOptions, AICaptionController, AudioData } from '@kit.SpeechKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'AI_CAPTION_DEMO'\n\nclass Logger {\n  static info(...msg: string[]) {\n    hilog.info(0x0000, TAG, msg.join())\n  }\n\n  static error(...msg: string[]) {\n    hilog.error(0x0000, TAG, msg.join())\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private captionOption?: AICaptionOptions;\n  private controller: AICaptionController = new AICaptionController();\n  @State isShown: boolean = false;\n  isReading: boolean = false;\n\n  aboutToAppear(): void {\n    // AI字幕初始化参数，设置字幕的不透明度和回调函数\n    this.captionOption = {\n      initialOpacity: 1,\n      onPrepared: () => {\n        Logger.info('onPrepared')\n      },\n      onError: (error: BusinessError) => {\n        Logger.error(`AICaption component error. Error code: ${error.code}, message: ${error.message}`)\n      }\n    }\n  }\n\n  async readPcmAudio() {\n    this.isReading = true;\n    // chineseAudio.pcm文件放在entry\\src\\main\\resources\\base\\media路径下\n    let fileData: Uint8Array | undefined = undefined;\n    try {\n      fileData =\n        await this.getUIContext()?.getHostContext()?.resourceManager.getMediaContent($r('app.media.chineseAudio').id);\n    } catch (e) {\n      Logger.info(`get fileData fail , msg ${e} `)\n    }\n    if (fileData === undefined) {\n      return;\n    }\n    const bufferSize = 640;\n    const byteLength = fileData.byteLength;\n    let offset = 0;\n    Logger.info(`Pcm data total bytes: ${byteLength.toString()}`)\n    let startTime = new Date().getTime();\n    while (offset < byteLength) {\n      // 模拟实际情况，读文件比录音机返回流快，所以要等待一段时间\n      let nextOffset = offset + bufferSize\n      if (offset > byteLength) {\n        this.isReading = false;\n        return\n      }\n      const arrayBuffer = fileData.buffer.slice(offset, nextOffset);\n      let data = new Uint8Array(arrayBuffer);\n      const audioData: AudioData = {\n        data: data\n      }\n\n      if (this.controller) {\n        try {\n          this.controller.writeAudio(audioData)\n        } catch (e) {\n          Logger.error(`writeAudio exception`)\n        }\n      }\n      offset = offset + bufferSize;\n      const waitTime = bufferSize / 32\n      await this.sleep(waitTime)\n    }\n    let endTime = new Date().getTime()\n    this.isReading = false;\n    Logger.info(`Audio play time: ${JSON.stringify(endTime - startTime)}`)\n  }\n\n  async sleep(time: number): Promise<void> {\n    return new Promise(resolve => setTimeout(resolve, time))\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      Button('切换字幕显示状态：' + (this.isShown ? '显示' : '隐藏'))\n        .backgroundColor('#B8BDA0')\n        .width(200)\n        .onClick(() => {\n          this.isShown = !this.isShown;\n        })\n      Button('读取PCM音频')\n        .backgroundColor('#B8BDA0')\n        .width(200)\n        .onClick(() => {\n          if (!this.isReading) {\n            void this.readPcmAudio()\n          }\n        })\n      Divider()\n      // 调用AICaptionComponent组件初始化字幕\n      AICaptionComponent({\n        isShown: this.isShown,\n        controller: this.controller,\n        options: this.captionOption\n      })\n        .width('100%')\n        .height(100)\n      Divider()\n      if (this.isShown) {\n        Text('上面是字幕区域')\n          .fontColor(Color.White)\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .padding(10)\n    .backgroundColor('#7A7D6A')\n  }\n}\n"
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
8087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439397-8db179092fc0e6d29be45fb8fc7dbb88.jpg");

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