"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["180584"], {
475170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_vision_kit_guide_vision_cardrecognition_vision_cardrecognition_md_c6f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vision-kit-guide-vision-cardrecognition-vision-cardrecognition-md-c6f.json
var site_docs_vision_kit_guide_vision_cardrecognition_vision_cardrecognition_md_c6f_namespaceObject = JSON.parse('{"id":"vision-kit-guide/vision-cardrecognition/vision-cardrecognition","title":"卡证识别","description":"从5.1.1(19)开始，CardRecognition接口中的callback参数废弃，请使用onResult代替。","source":"@site/docs/vision-kit-guide/vision-cardrecognition/vision-cardrecognition.md","sourceDirName":"vision-kit-guide/vision-cardrecognition","slug":"/vision-kit-guide/vision-cardrecognition/","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-cardrecognition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"卡证识别","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"人脸活体检测","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-interactiveliveness/"},"next":{"title":"文档扫描","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-documentscanner/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/vision-kit-guide/vision-cardrecognition/vision-cardrecognition.md


const frontMatter = {
	title: '卡证识别',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '卡证识别';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
  "value": "Index.ets",
  "id": "indexets",
  "level": 3
}, {
  "value": "CardDemoPage.ets",
  "id": "carddemopageets",
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
        id: "卡证识别",
        children: "卡证识别"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从5.1.1(19)开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vision-api/vision-component/vision-card-recognition/vision-card-recognition#cardrecognition",
        children: "CardRecognition"
      }), "接口中的callback参数废弃，请使用onResult代替。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡证识别控件提供身份证（目前仅支持中国大陆二代身份证，且不包含民汉双文身份证）、行驶证、驾驶证、护照、银行卡的结构化识别服务，满足卡证的自动分类功能，系统可自动判断所属卡证类型并返回结构化信息和卡证图片信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要填充卡证信息的场景，如身份证、银行卡信息等，可使用卡证识别控件读取OCR（Optical Character Recognition）信息，将结果信息返回后进行填充。支持单独识别正面、反面，或同时进行双面识别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 银行卡识别示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24953)/* ["default"] */.A) + "",
        width: "269",
        height: "559"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的语种类型：简体中文、英文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡证识别暂时只支持中国二代身份证、中国国内银行卡、中国护照、中国驾驶证、中国行驶证（暂不支持中国港澳台地区及海外证件）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡证需要保持与真实证件一致的长宽比、没有形变、正向拍摄角度小于30度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡证图像清晰、完整。无摩尔纹、无遮挡、无反光、无卡套。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许被其他组件或窗口遮挡。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅列出demo中调用的部分主要接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vision-api/vision-component/vision-card-recognition/vision-card-recognition",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vision-api/vision-component/vision-card-recognition/vision-card-recognition#cardrecognition",
              children: "CardRecognition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡证识别控件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vision-api/vision-component/vision-card-recognition/vision-card-recognition#cardrecognitionresult",
              children: "CardRecognitionResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡证识别结果"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将卡证识别控件相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { CardRecognition, CardRecognitionResult, CardType, CardSide, CardRecognitionConfig, ShootingMode, CardContentConfig, BankCardConfig } from \"@kit.VisionKit\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置页面的布局，选择需要识别的卡证类型和需要识别的卡证页面，配置对应设置项，在回调中获取结果返回值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下分别为身份证、银行卡、护照、驾驶证和行驶证的示例代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'CardRecognition'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // 身份证\n      CardRecognition({\n        supportType: CardType.CARD_ID,\n        // 身份证可双面识别\n        cardSide: CardSide.DEFAULT,\n        cardRecognitionConfig: {\n          defaultShootingMode: ShootingMode.MANUAL,\n          isPhotoSelectionSupported: true\n        },\n        onResult: ((params: CardRecognitionResult) => {\n          hilog.info(0x0001, TAG, `params code: ${params.code}`)\n          hilog.info(0x0001, TAG, `params cardType: ${params.cardType}`)\n          hilog.info(0x0001, TAG, `params cardInfo front: ${JSON.stringify(params.cardInfo?.front)}`)\n          hilog.info(0x0001, TAG, `params cardInfo back: ${JSON.stringify(params.cardInfo?.back)}`)\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'CardRecognition'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // 银行卡\n      CardRecognition({\n        supportType: CardType.CARD_BANK,\n        // 银行卡为单面识别\n        cardSide: CardSide.FRONT,\n        cardRecognitionConfig: {\n          defaultShootingMode: ShootingMode.MANUAL,\n          isPhotoSelectionSupported: true,\n          cardContentConfig: { bankCard: { isBankNumberDialogShown: true} }\n        },\n        onResult: ((params: CardRecognitionResult) => {\n          hilog.info(0x0001, TAG, `params code: ${params.code}`)\n          hilog.info(0x0001, TAG, `params cardType: ${params.cardType}`)\n          hilog.info(0x0001, TAG, `params cardInfo: ${JSON.stringify(params.cardInfo?.main)}`)\n        })})\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'CardRecognition'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // 护照\n      CardRecognition({\n        supportType: CardType.CARD_PASSPORT,\n        // 护照为单面识别\n        cardSide: CardSide.FRONT,\n        cardRecognitionConfig: {\n          defaultShootingMode: ShootingMode.MANUAL,\n          isPhotoSelectionSupported: true\n        },\n        onResult: ((params: CardRecognitionResult) => {\n          hilog.info(0x0001, TAG, `params code: ${params.code}`)\n          hilog.info(0x0001, TAG, `params cardType: ${params.cardType}`)\n          hilog.info(0x0001, TAG, `params cardInfo: ${JSON.stringify(params.cardInfo?.main)}`)\n        })})\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'CardRecognition'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // 驾驶证\n      CardRecognition({\n        supportType: CardType.CARD_DRIVER_LICENSE,\n        // 驾驶证可双面识别\n        cardSide: CardSide.DEFAULT,\n        cardRecognitionConfig: {\n          defaultShootingMode: ShootingMode.MANUAL,\n          isPhotoSelectionSupported: true\n        },\n        onResult: ((params: CardRecognitionResult) => {\n          hilog.info(0x0001, TAG, `params code: ${params.code}`)\n          hilog.info(0x0001, TAG, `params cardType: ${params.cardType}`)\n          hilog.info(0x0001, TAG, `params cardInfo front: ${JSON.stringify(params.cardInfo?.front)}`)\n          hilog.info(0x0001, TAG, `params cardInfo back: ${JSON.stringify(params.cardInfo?.back)}`)\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'CardRecognition'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      // 行驶证\n      CardRecognition({\n        supportType: CardType.CARD_VEHICLE_LICENSE,\n        // 行驶证可双面识别\n        cardSide: CardSide.DEFAULT,\n        cardRecognitionConfig: {\n          defaultShootingMode: ShootingMode.MANUAL,\n          isPhotoSelectionSupported: true\n        },\n        onResult: ((params: CardRecognitionResult) => {\n          hilog.info(0x0001, TAG, `params code: ${params.code}`)\n          hilog.info(0x0001, TAG, `params cardType: ${params.cardType}`)\n          hilog.info(0x0001, TAG, `params cardInfo front: ${JSON.stringify(params.cardInfo?.front)}`)\n          hilog.info(0x0001, TAG, `params cardInfo back: ${JSON.stringify(params.cardInfo?.back)}`)\n        })\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 卡证识别开发实例分两页实现，一页为卡证识别入口页，一页为卡证识别实现页\n// 卡证识别入口页，需引入卡证识别实现页，以下文实例为例，实现页文件名为CardDemoPage\nimport { CardDemoPage } from './CardDemoPage'\n\n@Entry\n@Component\nstruct MainPage {\n  @Provide('pathStack') pathStack: NavPathStack = new NavPathStack()\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'cardRecognition') {\n      CardDemoPage()\n    }\n  }\n\n  // 卡证识别入口按钮\n  build() {\n    Navigation(this.pathStack) {\n      Button('CardRecognition', { stateEffect: true, type: ButtonType.Capsule })\n        .width('50%')\n        .height(40)\n        .onClick(() => {\n          this.pathStack.pushPath({ name: 'cardRecognition' })\n        })\n    }.title('卡证识别控件demo').navDestination(this.PageMap)\n    .mode(NavigationMode.Stack)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "carddemopageets",
      children: "CardDemoPage.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 卡证识别实现页，文件名为CardDemoPage，需被引入至入口页\nimport { CardRecognition, CardRecognitionResult, CardType, CardSide, ShootingMode } from \"@kit.VisionKit\"\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'CardRecognitionPage'\n\n// 卡证识别页，用于加载UIExtensionAbility\n@Component\nexport struct CardDemoPage {\n  @State cardDataSource: Record<string, string>[] = []\n  @Consume('pathStack') pathStack: NavPathStack\n\n  build() {\n    NavDestination() {\n      Stack({ alignContent: Alignment.Top }) {\n        Stack() {\n          this.cardDataShowBuilder()\n        }\n        .width('80%')\n        .height('80%')\n\n        CardRecognition({\n          // 此处选择身份证类型作为示例\n          supportType: CardType.CARD_ID,\n          cardSide: CardSide.DEFAULT,\n          cardRecognitionConfig: {\n            defaultShootingMode: ShootingMode.MANUAL,\n            isPhotoSelectionSupported: true\n          },\n          onResult: ((params: CardRecognitionResult) => {\n            hilog.info(0x0001, TAG, `params code: ${params.code}`)\n            if (params.code !== 200) {\n              this.pathStack.pop()\n            }\n            hilog.info(0x0001, TAG, `params cardType: ${params.cardType}`)\n            if (params.cardInfo?.front !== undefined) {\n              this.cardDataSource.push(params.cardInfo?.front)\n            }\n\n            if (params.cardInfo?.back !== undefined) {\n              this.cardDataSource.push(params.cardInfo?.back)\n            }\n\n            if (params.cardInfo?.main !== undefined) {\n              this.cardDataSource.push(params.cardInfo?.main)\n            }\n            hilog.info(0x0001, TAG, `params cardInfo front: ${JSON.stringify(params.cardInfo?.front)}`)\n            hilog.info(0x0001, TAG, `params cardInfo back: ${JSON.stringify(params.cardInfo?.back)}`)\n          })\n        })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .width('100%')\n    .height('100%')\n    .hideTitleBar(true)\n  }\n\n  @Builder\n  cardDataShowBuilder() {\n    List() {\n      ForEach(this.cardDataSource, (cardData: Record<string, string>) => {\n        ListItem() {\n          Column() {\n            Image(cardData.cardImageUri)\n              .objectFit(ImageFit.Contain)\n              .width(100)\n              .height(100)\n\n            Text(JSON.stringify(cardData))\n              .width('100%')\n              .fontSize(12)\n          }\n        }\n      })\n    }\n    .listDirection(Axis.Vertical)\n    .alignListItem(ListItemAlign.Center)\n    .margin({\n      top: 50\n    })\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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
24953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799704-ab58b991aa77dac5624f98872a50f41f.png");

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