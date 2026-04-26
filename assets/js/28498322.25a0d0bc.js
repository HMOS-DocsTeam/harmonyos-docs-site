"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["430816"], {
605137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_speech_kit_guide_speech_textreader_guide_speech_textreader_guide_md_284_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-speech-kit-guide-speech-textreader-guide-speech-textreader-guide-md-284.json
var site_docs_speech_kit_guide_speech_textreader_guide_speech_textreader_guide_md_284_namespaceObject = JSON.parse('{"id":"speech-kit-guide/speech-textreader-guide/speech-textreader-guide","title":"朗读控件","description":"适用场景","source":"@site/docs/speech-kit-guide/speech-textreader-guide/speech-textreader-guide.md","sourceDirName":"speech-kit-guide/speech-textreader-guide","slug":"/speech-kit-guide/speech-textreader-guide/","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-textreader-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"朗读控件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/speech-textreader-guide","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Speech Kit简介","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-production/"},"next":{"title":"AI字幕控件","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-aicaption-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/speech-kit-guide/speech-textreader-guide/speech-textreader-guide.md


const frontMatter = {
	title: '朗读控件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/speech-textreader-guide',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '朗读控件';

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
}, {
  "value": "2in1适配步骤",
  "id": "2in1适配步骤",
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
        id: "朗读控件",
        children: "朗读控件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "朗读控件应用广泛，例如在用户不方便或者无法查看屏幕文字的时候，为用户朗读新闻，提供资讯。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将向您介绍如何使用朗读组件，效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(320964)/* ["default"] */.A) + "",
        width: "1022",
        height: "531"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅列出demo中调用的部分主要接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/speech-api/speech-arkts/speech-textreader-api/speech-textreader-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts/speech-textreader-api/speech-textreader-api#init",
              children: "init"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
              children: "common.BaseContext"
            }), ", readParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts/speech-textreader-api/speech-textreader-api#readerparam",
              children: "ReaderParam"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化TextReader。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts/speech-textreader-api/speech-textreader-api#start",
              children: "start"
            }), "(readInfoList: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts/speech-textreader-api/speech-textreader-api#readinfo",
              children: "ReadInfo"
            }), "[], articleId?: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动TextReader。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: string, callback: function): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册所有事件回调，具体事件类型详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts/speech-textreader-api/speech-textreader-api",
              children: "API参考"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先从项目根目录进入/src/main/ets/entryability/EntryAbility.ets文件，将WindowManager添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { WindowManager } from '@kit.SpeechKit';\nimport { ConfigurationConstant } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在onWindowStageCreate(windowStage: window.WindowStage)生命周期方法中，添加setWindowStage方法设置窗口管理器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onWindowStageCreate(windowStage: window.WindowStage): void {\n  console.info('Ability onWindowStageCreate');\n  WindowManager.setWindowStage(windowStage);\n  \n  windowStage.loadContent('pages/Index', (err, data) => {\n    if (err) {\n      console.error(`Failed to load the content. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info(`Succeeded in loading the content. Data: ${JSON.stringify(data)}.` );\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onCreate()生命周期方法中，设置应用的颜色模式，使控件颜色模式跟应用的颜色模式保持一致。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果应用想要跟随系统切换深浅色模式，请将颜色模式设置为COLOR_MODE_NOT_SET。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果应用想要主动配置颜色模式，请将颜色模式设置为COLOR_MODE_LIGHT（浅色）或者COLOR_MODE_DARK（深色）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面以自动跟随系统切换为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onCreate(): void {\n  this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从项目根目录进入/src/main/ets/pages/Index.ets文件，在使用朗读控件前，将实现朗读控件和其他相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { TextReader, TextReaderIcon, ReadStateCode } from '@kit.SpeechKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单配置页面的布局，加入听筒图标，并且设置onClick点击事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 播放状态\n */\n@State readState: ReadStateCode = ReadStateCode.WAITING;\n\nbuild() {\n    Column() {\n      TextReaderIcon({ readState: this.readState })\n        .margin({ right: 20 })\n        .width(32)\n        .height(32)\n        .onClick(() => {\n            // 设置点击事件\n            // ...\n        })\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化朗读控件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 用于显示当前页的按钮状态\n@State isInit: boolean = false;\n/**\n* 待加载的文章\n*/\n@State readInfoList: TextReader.ReadInfo[] = [];\n@State selectedReadInfo: TextReader.ReadInfo = this.readInfoList[0];\n\nasync aboutToAppear() {\n  // ...\n  void this.init();\n  /**\n   * 加载数据\n   */\n  let readInfoList: TextReader.ReadInfo[] = [{\n    id: '001',\n    title: {\n      text:'水调歌头.明月几时有',\n      isClickable:true\n    },\n    author:{\n      text:'宋.苏轼',\n      isClickable:true\n    },\n    date: {\n      text:'2024/01/01',\n      isClickable:false\n    },\n    bodyInfo: '明月几时有？把酒问青天。'\n  }];\n  this.readInfoList = readInfoList;\n  this.selectedReadInfo = this.readInfoList[0];\n  // ...\n}\n\n/**\n * 初始化\n */\nasync init() {\n  const readerParam: TextReader.ReaderParam = {\n    isVoiceBrandVisible: true,\n    businessBrandInfo: {\n      panelName: '小艺朗读',\n      panelIcon: $r('app.media.startIcon')\n    }\n  }\n  try {\n    let context: Context | undefined = this.getUIContext().getHostContext()\n    if (context) {\n      await TextReader.init(context, readerParam);\n      this.isInit = true;\n      this.setActionListener();\n    }\n  } catch (err) {\n    console.error(`TextReader failed to init. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n\nonStateChanged = (state: TextReader.ReadState) => {\n  if (this.selectedReadInfo?.id === state.id) {\n    this.readState = state.state;\n  } else {\n    this.readState = ReadStateCode.WAITING;\n  }\n}\n\n// 设置操作监听\nsetActionListener() {\n  TextReader.on('stateChange', (state: TextReader.ReadState) => {\n    this.onStateChanged(state);\n  });\n  // 在列表页无更多内容时，会显示加载失败，需要设置requestMore监听，调用loadMore函数以获得正确的显示信息。\n  TextReader.on('requestMore', () => {\n    TextReader.loadMore([], true);\n  })\n}\n\n// 注销监听，根据业务情况在合适的时机调用\nreleaseActionListener() {\n  TextReader.off('stateChange');\n  TextReader.off('requestMore');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在setActionListener方法中设置更多监听，在用户与控件进行交互时触发回调通知开发者。注销监听，监听结束后进行释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置监听\nsetActionListener() {\n  TextReader.on('setArticle', async (id: string) => { console.info(`setArticle ${id}`) });\n  TextReader.on('clickArticle', (id: string) => {console.info(`onClickArticle ${id}`) });\n  TextReader.on('clickAuthor', (id: string) => { console.info(`onClickAuthor ${id}`) });\n  TextReader.on('clickNotification',  (id: string) => { console.info(`onClickNotification ${id}`) });\n  TextReader.on('showPanel', () => { console.info(`onShowPanel`) });\n  TextReader.on('hidePanel', () => { console.info(`onHidePanel`) });\n  // ...\n}\n// 注销监听\nreleaseActionListener() {\n  TextReader.off('setArticle');\n  TextReader.off('clickArticle');\n  TextReader.off('clickAuthor');\n  TextReader.off('clickNotification');\n  TextReader.off('showPanel');\n  TextReader.off('hidePanel');\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动朗读控件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "build() {\n  Column() {\n    TextReaderIcon({ readState: this.readState })\n      // ...\n      .onClick(() => {\n        try {\n          void TextReader.start(this.readInfoList, this.selectedReadInfo?.id);\n        } catch (err) {\n          console.error(`TextReader failed to start. Code: ${err.code}, message: ${err.message}`);\n        }\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）若要配置长时任务，需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中添加ohos.permission.KEEP_BACKGROUND_RUNNING权限，并且加入backgroundModes选项，然后在readerParam中将keepBackgroundRunning配置为true，确保朗读控件后台播报正常。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// module.json5\n{\n  \"module\": {\n    // ...\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.KEEP_BACKGROUND_RUNNING\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"FormAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      },\n    ],\n    \"abilities\": [\n      {\n        // ...\n        \"backgroundModes\": [\n          \"audioPlayback\"\n        ],\n        // ...\n      }\n    ]\n  }\n}\n\n// Index.ets\nasync init() {\n  const readerParam: TextReader.ReaderParam = {\n    // ...\n    keepBackgroundRunning: true\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）若要在控件使用功能时切换音色，需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中添加ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO权限，确保朗读控件可以正常切换音色。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module.json5\n{\n  \"module\": {\n    // ...\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.INTERNET\",\n        \"reason\": \"$string:reason\",\n        \"usedScene\": {\"abilities\": []}\n      },\n      {\n        \"name\": \"ohos.permission.GET_NETWORK_INFO\",\n        \"reason\": \"$string:reason\",\n        \"usedScene\": {\"abilities\": []}\n      },\n    ],\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EntryAbility.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { WindowManager } from '@kit.SpeechKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    } catch (err) {\n      console.error(`error code: ${err.code}, message: ${err.message}.`)\n    }\n    console.info('Ability onCreate');\n  }\n\n  onDestroy(): void {\n    console.info('Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    console.info('Ability onWindowStageCreate');\n    WindowManager.setWindowStage(windowStage);\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        console.error(`Failed to load the content. Code: ${err.code}, message: ${err.message}`);\n        return;\n      }\n      console.info(`Succeeded in loading the content. Data: ${JSON.stringify(data)}.` );\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    console.info('Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    console.info('Ability onForeground');\n  }\n\n  onBackground(): void {\n    console.info('Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextReader, TextReaderIcon, ReadStateCode } from '@kit.SpeechKit';\n\n@Entry\n@Component\nstruct Index {\n\n  /**\n   * 待加载的文章\n   */\n  @State readInfoList: TextReader.ReadInfo[] = [];\n  @State selectedReadInfo: TextReader.ReadInfo = this.readInfoList[0];\n\n  /**\n   * 播放状态\n   */\n  @State readState: ReadStateCode = ReadStateCode.WAITING;\n\n  /**\n   * 用于显示当前页的按钮状态\n   */\n  @State isInit: boolean = false;\n\n  aboutToAppear(){\n    /**\n     * 加载数据\n     */\n    let readInfoList: TextReader.ReadInfo[] = [{\n      id: '001',\n      title: {\n        text:'水调歌头.明月几时有',\n        isClickable:true\n      },\n      author:{\n        text:'宋.苏轼',\n        isClickable:true\n      },\n      date: {\n        text:'2024/01/01',\n        isClickable:false\n      },\n      bodyInfo: '明月几时有？把酒问青天。'\n    }];\n    this.readInfoList = readInfoList;\n    this.selectedReadInfo = this.readInfoList[0];\n    void this.init();\n  }\n\n  /**\n   * 初始化\n   */\n  async init() {\n    const readerParam: TextReader.ReaderParam = {\n      isVoiceBrandVisible: true,\n      businessBrandInfo: {\n        panelName: '小艺朗读',\n        panelIcon: $r('app.media.startIcon')\n      }\n    }\n    try {\n      let context: Context | undefined = this.getUIContext().getHostContext()\n      if (context) {\n        await TextReader.init(context, readerParam);\n        this.isInit = true;\n        this.setActionListener();\n      }\n    } catch (err) {\n      console.error(`TextReader failed to init. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 设置操作监听\n  setActionListener() {\n    TextReader.on('stateChange', (state: TextReader.ReadState) => {\n      this.onStateChanged(state);\n    });\n\n    TextReader.on('requestMore', () => {\n      TextReader.loadMore([], true);\n    })\n  }\n\n  onStateChanged = (state: TextReader.ReadState) => {\n    if (this.selectedReadInfo?.id === state.id) {\n      this.readState = state.state;\n    } else {\n      this.readState = ReadStateCode.WAITING;\n    }\n  }\n\n  build() {\n    Column() {\n      TextReaderIcon({ readState: this.readState })\n        .margin({ right: 20 })\n        .width(32)\n        .height(32)\n        .onClick(() => {\n          try {\n            void TextReader.start(this.readInfoList, this.selectedReadInfo?.id);\n          } catch (err) {\n            console.error(`TextReader failed to start. Code: ${err.code}, message: ${err.message}`);\n          }\n        })\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2in1适配步骤",
      children: "2in1适配步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2in1设备除了适配", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "开发步骤"
      }), "，还需执行以下步骤。如果开发者按照上述开发步骤来适配2in1，将会出现无法拉起播放面板的情况。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在/src/main/ets/entryability下新建一个ability，用来承载2in1主窗，导入相关依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { TextReader, WindowManager } from '@kit.SpeechKit';\nimport { commonEventManager } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在新ability中声明一个应用全局的状态变量isReadyToStart，并且通过AppStorage管理此状态变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private link: SubscribedAbstractProperty<boolean>= AppStorage.link('isReadyToStart');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Index.ets的aboutToAppear生命周期方法中，创建全局的状态变量isReadyToStart。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear() {\n  AppStorage.setOrCreate('isReadyToStart', false);\n  // ...其他配置\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置WindowStage。说明：从6.0.0(20)开始使用以下逻辑实现。对于5.1.1(19)及之前版本，使用getContext(this)接口实现。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在新ability的onWindowStageCreate生命周期方法中，发送onLoadSubAbility事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过WindowManager.setWindowStage(windowStage)来设置新ability的windowStage。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在onWindowStageCreate中将isReadyToStart设为true。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onWindowStageCreate(windowStage: window.WindowStage): void {\n  // Main window is created, set main page for this ability\n  WindowManager.setWindowStage(windowStage)\n  let eventData: emitter.EventData = {\n    data: {\n      'state': 'publish'\n    }\n  }\n  emitter.emit(\"onLoadSubAbility\", eventData);\n  this.link.set(true);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在新ability的onWindowStageDestroy生命周期方法中，将isReadyToStart设为false，同时隐藏面板并停止播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async onWindowStageDestroy(): Promise<void> {\n  try {\n    TextReader.hidePanel();\n    await TextReader.stop();\n    this.link.set(false);\n  }catch (e) {\n    console.error(`onWindowStageDestroy fail , msg: ${e}`)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entryability中，onCreate方法需要用eventHub设置'onShowPanel'回调，用来创造新的ability；onShowPanel回调中，首先构造want，然后通过context.startAbility接口创建新的ability。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, Want } from '@kit.AbilityKit';\nimport { common } from \"@kit.AbilityKit\";\nimport { BusinessError } from \"@kit.BasicServicesKit\";\n\n\nonCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n  // ...其他配置\n  let eventHub = this.context.eventHub;\n  eventHub.on('onShowPanel', this.onShowPanel);\n}\n\nonShowPanel = () => {\n  let context: common.UIAbilityContext = this.context;\n  let want: Want = {\n    deviceId: '',\n    bundleName: 'com.example.speechkit', // 需替换成实际应用包名\n    abilityName: 'SubAbility',\n    parameters: {\n      info: 'From EntryAbility onShowPanel'\n    }\n  }\n  context?.startAbility(want).then(() => {\n    console.info('Succeeded in starting ability');\n  }).catch((e: BusinessError) => {\n    console.error(`Failed to start ability. Code is ${e.code}, message is ${e.message}`);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在调用start之前根据设备类型进行判断，如果是2in1需要首先发送'onShowPanel'事件构造ability。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { deviceInfo } from '@kit.BasicServicesKit';\n\nif (deviceInfo.deviceType === '2in1') {\n  let context = this.getUIContext().getHostContext();\n  context?.eventHub.emit('onShowPanel');\n}\ntry {\n  TextReader.showPanel();\n} catch (err) {\n  console.error(`error code: ${err.code}, message: ${err.message}.`)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5中添加ability配置项，max和min的值需要保持一致，固定窗口的大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"SubAbility\", // UIAbility组件的名称\n  \"srcEntry\": \"./ets/entryability/SubAbility.ets\", // UIAbility组件的代码路径\n  \"description\": \"$string:SubAbility_desc\", // UIAbility组件的描述信息\n  \"icon\": \"$media:icon\", // UIAbility组件的图标\n  \"label\": \"$string:EntryAbility_label\", // UIAbility组件的标签\n  \"startWindowIcon\": \"$media:icon\", // UIAbility组件启动页面图标资源文件的索引\n  \"startWindowBackground\": \"$color:start_window_background\", // UIAbility组件启动页面背景颜色资源文件的索引\n  \"supportWindowMode\": ['floating'], // 窗口支持悬浮窗显示\n  \"maxWindowWidth\": 1158,  // 最大窗口宽度\n  \"minWindowWidth\": 1158,  // 最小窗口宽度\n  \"maxWindowHeight\": 772,  // 最大窗口高度\n  \"minWindowHeight\": 772,  // 最小窗口高度\n }\n"
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
320964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799702-dd0403026936553d2138155a6bdabcda.png");

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