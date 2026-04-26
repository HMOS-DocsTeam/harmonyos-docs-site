"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["907358"], {
3584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_speech_api_speech_arkts_component_speech_textreadericon_speech_textreadericon_md_704_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-speech-api-speech-arkts-component-speech-textreadericon-speech-textreadericon-md-704.json
var site_docs_ref_speech_api_speech_arkts_component_speech_textreadericon_speech_textreadericon_md_704_namespaceObject = JSON.parse('{"id":"speech-api/speech-arkts-component/speech-textreadericon/speech-textreadericon","title":"TextReaderIcon（朗读听筒图标）","description":"朗读听筒图标，可以作为动态组件加载，并配置成为播放面板的主入口。","source":"@site/docs-ref/speech-api/speech-arkts-component/speech-textreadericon/speech-textreadericon.md","sourceDirName":"speech-api/speech-arkts-component/speech-textreadericon","slug":"/speech-api/speech-arkts-component/speech-textreadericon/speech-textreadericon","permalink":"/harmonyos-docs-site/ref/speech-api/speech-arkts-component/speech-textreadericon/speech-textreadericon","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"TextReaderIcon（朗读听筒图标）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/speech-textreadericon","kit":"AI","last_updated":"2026-04-22","slug":"speech-textreadericon"},"sidebar":"ref","previous":{"title":"WindowManager（窗口管理）","permalink":"/harmonyos-docs-site/ref/speech-api/speech-arkts/speech-windowmanager/speech-windowmanager"},"next":{"title":"AICaptionComponent（AI字幕组件）","permalink":"/harmonyos-docs-site/ref/speech-api/speech-arkts-component/speech-aicaptioncomponent/speech-aicaptioncomponent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/speech-api/speech-arkts-component/speech-textreadericon/speech-textreadericon.md


const frontMatter = {
	title: 'TextReaderIcon（朗读听筒图标）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/speech-textreadericon',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'speech-textreadericon'
};
const contentTitle = 'TextReaderIcon（朗读听筒图标）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "TextReaderIcon",
  "id": "textreadericon",
  "level": 2
}, {
  "value": "build",
  "id": "build",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "textreadericon朗读听筒图标",
        children: "TextReaderIcon（朗读听筒图标）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "朗读听筒图标，可以作为动态组件加载，并配置成为播放面板的主入口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextReaderIcon } from '@kit.SpeechKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textreadericon",
      children: "TextReaderIcon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "朗读听筒图标，可以作为动态组件加载。设置onClick回调，在用户点击听筒图标时启动朗读控件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.3(15)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Component.TextReader"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/speech-api/speech-arkts/speech-readstatecode/speech-readstatecode",
              children: "ReadStateCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Link"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播报状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  ReadState使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link装饰器：父子双向同步"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textreadericon",
        children: "TextReaderIcon"
      }), "对象的构造函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.3(15)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.Component.TextReader"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextReader, TextReaderIcon, ReadStateCode } from '@kit.SpeechKit';\n\n@Entry\n@Component\nstruct Index {\n\n  /**\n   * 待加载的文章\n   */\n  @State readInfoList: TextReader.ReadInfo[] = [];\n  @State selectedReadInfo: TextReader.ReadInfo = this.readInfoList[0];\n\n  /**\n   * 播放状态\n   */\n  @State readState: ReadStateCode = ReadStateCode.WAITING;\n\n  /**\n   * 用于显示当前页的按钮状态\n   */\n  @State isInit: boolean = false;\n\n  async aboutToAppear(){\n    /**\n     * 加载数据\n     */\n    let readInfoList: TextReader.ReadInfo[] = [{\n      id: '001',\n      title: {\n        text:'水调歌头.明月几时有',\n        isClickable:true\n      },\n      author:{\n        text:'宋.苏轼',\n        isClickable:true\n      },\n      date: {\n        text:'2024/01/01',\n        isClickable:false\n      },\n      bodyInfo: '明月几时有？把酒问青天。'\n    }];\n    this.readInfoList = readInfoList;\n    this.selectedReadInfo = this.readInfoList[0];\n    this.init();\n  }\n\n  /**\n   * 初始化\n   */\n  async init() {\n    const readerParam: TextReader.ReaderParam = {\n      isVoiceBrandVisible: true,\n      businessBrandInfo: {\n        panelName: '小艺朗读',\n        panelIcon: $r('app.media.startIcon')\n      }\n    }\n    try {\n      let context: Context | undefined = this.getUIContext().getHostContext()\n      if (context) {\n        await TextReader.init(context, readerParam);\n        this.isInit = true;\n      }\n    } catch (err) {\n      console.error(`TextReader failed to init. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 设置操作监听\n  setActionListener() {\n    TextReader.on('stateChange', (state: TextReader.ReadState) => {\n      this.onStateChanged(state)\n    });\n    TextReader.on('requestMore', () => this.onStateChanged);\n  }\n\n  onStateChanged = (state: TextReader.ReadState) => {\n    if (this.selectedReadInfo?.id === state.id) {\n      this.readState = state.state;\n    } else {\n      this.readState = ReadStateCode.WAITING;\n    }\n  }\n\n  build() {\n    Column() {\n      TextReaderIcon({ readState: this.readState })\n        .margin({ right: 20 })\n        .width(32)\n        .height(32)\n        .onClick(async () => {\n          try {\n            this.setActionListener();\n            await TextReader.start(this.readInfoList, this.selectedReadInfo?.id);\n          } catch (err) {\n            console.error(`TextReader failed to start. Code: ${err.code}, message: ${err.message}`);\n          }\n        })\n    }\n    .height('100%')\n  }\n}\n"
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