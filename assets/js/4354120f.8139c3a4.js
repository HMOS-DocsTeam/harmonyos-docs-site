"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["789317"], {
946074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_display_manager_screenproperty_guideline_screenproperty_guideline_md_435_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-display-manager-screenproperty-guideline-screenproperty-guideline-md-435.json
var site_docs_arkui_display_manager_screenproperty_guideline_screenproperty_guideline_md_435_namespaceObject = JSON.parse('{"id":"arkui/display-manager/screenproperty-guideline/screenproperty-guideline","title":"使用Display实现屏幕属性查询及状态监听 (ArkTS)","description":"场景介绍","source":"@site/docs/arkui/display-manager/screenproperty-guideline/screenproperty-guideline.md","sourceDirName":"arkui/display-manager/screenproperty-guideline","slug":"/arkui/display-manager/screenproperty-guideline/","permalink":"/harmonyos-docs-site/arkui/display-manager/screenproperty-guideline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用Display实现屏幕属性查询及状态监听 (ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screenproperty-guideline","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)","permalink":"/harmonyos-docs-site/arkui/display-manager/native-display-manager/"},"next":{"title":"屏幕管理开发术语","permalink":"/harmonyos-docs-site/arkui/display-manager/display-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/display-manager/screenproperty-guideline/screenproperty-guideline.md


const frontMatter = {
	title: '使用Display实现屏幕属性查询及状态监听 (ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screenproperty-guideline',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Display实现屏幕属性查询及状态监听 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "获取Display对象",
  "id": "获取display对象",
  "level": 2
}, {
  "value": "获取屏幕相关属性",
  "id": "获取屏幕相关属性",
  "level": 2
}, {
  "value": "监听屏幕状态变化",
  "id": "监听屏幕状态变化",
  "level": 2
}, {
  "value": "监听折叠设备状态变化",
  "id": "监听折叠设备状态变化",
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
        id: "使用display实现屏幕属性查询及状态监听-arkts",
        children: "使用Display实现屏幕属性查询及状态监听 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display",
        children: "Display"
      }), "屏幕属性提供管理设备屏幕的一些基础能力，例如获取默认显示设备的相关信息、获取全部显示设备的信息，此外还能对显示设备的插拔行为进行监听。应用可以根据对应的屏幕信息、屏幕状态变化、屏幕折叠状态等适配不同的UI界面显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕属性的常见使用场景有以下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["查询屏幕信息：包括屏幕的分辨率、物理像素密度、逻辑像素密度、刷新率、屏幕尺寸、屏幕旋转方向、屏幕旋转角度等，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
          children: "Display属性"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听屏幕状态变化，包括屏幕旋转变化，屏幕分辨率变化、屏幕刷新率变化等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询当前设备是否为可折叠设备，同时支持折叠状态（展开/折叠）变化的监听。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["屏幕属性的常用接口如下表所示，更多功能及接口说明和使用请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display",
        children: "@ohos.display (屏幕属性)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "getAllDisplays(): Promise<Array<Display>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前所有的Display对象，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDefaultDisplaySync(): Display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前默认的Display对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getDisplayByIdSync(displayId: number): Display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据DisplayId获取对应的Display对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'add'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'remove'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'add'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'remove'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'captureStatusChange', callback: Callback<boolean>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启屏幕截屏、投屏、录屏状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'captureStatusChange', callback?: Callback<boolean>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭屏幕截屏、投屏、录屏状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'availableAreaChange', callback: Callback<Rect>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启当前设备屏幕的可用区域监听。当前设备屏幕有可用区域变化时，触发回调函数，返回可用区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'availableAreaChange', callback?: Callback<Rect>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭当前设备屏幕可用区域变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isFoldable(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查设备是否可折叠，true表示设备可折叠，false表示设备不可折叠。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'foldStatusChange', callback: Callback<FoldStatus>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启折叠设备折叠状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'foldStatusChange', callback?: Callback<FoldStatus>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭折叠设备折叠状态变化的监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取display对象",
      children: "获取Display对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Display对象，即屏幕实例，提供屏幕相关属性及监听变化的接口。目前有以下几种不同获取Display的方式，开发者可根据具体场景需要选择使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取当前默认的Display对象：使用getDefaultDisplaySync()接口获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取当前所有Display对象：使用getAllDisplays()获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据屏幕Id获取对应的Display对象：使用getDisplayByIdSync()接口获取。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处，以使用getDefaultDisplaySync()获取当前默认Display对象为例，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let displayClass: display.Display | null = null;\ntry {\n  displayClass = display.getDefaultDisplaySync();\n  hilog.info(DOMAIN, 'DisplayTest', `The display info is: ${JSON.stringify(displayClass)}`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to get default display. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取屏幕相关属性",
      children: "获取屏幕相关属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确保获取到Display对象之后（具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%8E%B7%E5%8F%96display%E5%AF%B9%E8%B1%A1",
            children: "获取Display对象"
          }), "），可以通过相关属性查询屏幕的一些基础信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let displayClass: display.Display | null = null;\ntry {\n  displayClass = display.getDefaultDisplaySync();\n  // 获取屏幕Id\n  hilog.info(DOMAIN, 'DisplayTest', `The screen Id is ${displayClass.id}.`);\n  // 获取屏幕刷新率\n  hilog.info(DOMAIN, 'DisplayTest', `The screen is ${displayClass.refreshRate}.`);\n  // 获取屏幕宽度\n  hilog.info(DOMAIN, 'DisplayTest', `The screen width is ${displayClass.width}.`);\n  // 获取屏幕高度\n  hilog.info(DOMAIN, 'DisplayTest', `The screen height is ${displayClass.height}.`);\n  // ...\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to get default display. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "还可以通过getCutoutInfo()获取挖孔屏、刘海屏、瀑布屏等不可用的屏幕区域信息，以在UI布局时更好地规避该区域。也可以通过getAvailableArea()获取当前设备屏幕的可用区域。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let displayClass: display.Display | null = null;\ntry {\n  displayClass = display.getDefaultDisplaySync();\n  displayClass.getCutoutInfo().then((cutoutInfo: display.CutoutInfo) => {\n    // 在有挖孔信息的时候进行处理\n    if (cutoutInfo.boundingRects.length > 0) {\n      hilog.info(DOMAIN, 'DisplayTest', `cutoutInfo boundingRects: ${JSON.stringify(cutoutInfo.boundingRects)}`);\n    } else {\n      hilog.info(DOMAIN, 'DisplayTest', 'There is no cutout info on the screen.');\n    }\n    // 处理瀑布屏的区域信息\n    hilog.info(DOMAIN, 'DisplayTest',\n      `cutoutInfo waterfallDisplayAreaRects: ${JSON.stringify(cutoutInfo.waterfallDisplayAreaRects)}`);\n  }).catch((err: BusinessError) => {\n    hilog.error(DOMAIN, 'DisplayTest',\n      `Failed to obtain the cutout info object. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to get default display. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，还可以通过display.isCaptured()判断当前设备是否正在截屏、投屏或录屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  hilog.info(DOMAIN, 'DisplayTest', `The screen is captured or not : ${display.isCaptured()}`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to get display isCaptured. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听屏幕状态变化",
      children: "监听屏幕状态变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过display.on('add'|'remove'|'change')监听设备屏幕变化，支持监听屏幕设备的增加、移除和改变等，可以通过display.off('add'|'remove'|'change')关闭对应的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 注册监听的callback参数要采用对象传递.\n * 若使用匿名函数注册，每次调用会创建一个新的底层对象，引起内存泄漏问题。\n */\nlet callback1: Callback<number> = (displayId: number) => {\n  hilog.info(DOMAIN, 'DisplayTest', `Listening enabled. displayId: ${displayId}`);\n};\ntry {\n  // 此处以监听显示设备的增加为例\n  display.on('add', callback1);\n  hilog.info(DOMAIN, 'DisplayTest', `register add success`);\n\n  // 关闭单个callback监听\n  display.off('add', callback1);\n  hilog.info(DOMAIN, 'DisplayTest', `unregister add success`);\n  // 如果通过on注册多个callback，同时关闭所有callback监听\n  display.off('add');\n  hilog.info(DOMAIN, 'DisplayTest', `unregister all add success`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to register/unregister callback. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过display.on('captureStatusChange')开启屏幕截屏、投屏或录屏状态变化的监听；可以通过display.off('captureStatusChange')关闭对应的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback2: Callback<boolean> = (captureStatus: boolean) => {\n  // captureStatus为true表示显示设备开始截屏、投屏或录屏，false表示结束截屏、投屏或录屏\n  hilog.info(DOMAIN, 'DisplayTest', 'Listening capture status: ' + captureStatus);\n};\n\ntry {\n  // 开启屏幕截屏、投屏、录屏状态变化的监听\n  display.on('captureStatusChange', callback2);\n  hilog.info(DOMAIN, 'DisplayTest', `register captureStatusChange success`);\n  // 关闭屏幕截屏、投屏、录屏状态变化的监听\n  display.off('captureStatusChange', callback2);\n  hilog.info(DOMAIN, 'DisplayTest', `unregister captureStatusChange success`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to register/unregister callback. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，还可以通过on('availableAreaChange')监听当前屏幕对象（Display对象）的可用区域变化；可通过off('availableAreaChange')关闭对应的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 注册监听的callback参数要采用对象传递.\n * 若使用匿名函数注册，每次调用会创建一个新的底层对象，引起内存泄漏问题。\n */\nlet callback3: Callback<display.Rect> = (data: display.Rect) => {\n  hilog.info(DOMAIN, 'DisplayTest', 'Listening enabled. Data: ' + JSON.stringify(data));\n};\nlet displayClass: display.Display | null = null;\ntry {\n  displayClass = display.getDefaultDisplaySync();\n  // 开启当前屏幕可用区域变化的监听\n  displayClass.on('availableAreaChange', callback3);\n  hilog.info(DOMAIN, 'DisplayTest', `register availableAreaChange success`);\n  // 关闭当前屏幕可用区域变化的监听\n  displayClass.off('availableAreaChange', callback3);\n  hilog.info(DOMAIN, 'DisplayTest', `unregister availableAreaChange success`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to register/unregister callback. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听折叠设备状态变化",
      children: "监听折叠设备状态变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过display.isFoldable()接口查询当前设备是不是折叠设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let isFoldableDevice: boolean = false;\ntry {\n  isFoldableDevice = display.isFoldable();\n  // 打印此设备是否为折叠设备\n  hilog.info(DOMAIN, 'DisplayTest', `This device is foldable: ${isFoldableDevice}`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to get foldable message. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若当前设备为折叠设备，可以通过display.on('foldStatusChange')开启折叠设备折叠状态变化的监听；可通过display.off('foldStatusChange')关闭对应的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 注册监听的callback参数要采用对象传递.\n * 若使用匿名函数注册，每次调用会创建一个新的底层对象，引起内存泄漏问题。\n */\nlet callback: Callback<display.FoldStatus> = (data: display.FoldStatus) => {\n  hilog.info(DOMAIN, 'DisplayTest', 'Listening enabled. Data: ' + JSON.stringify(data));\n};\ntry {\n  display.on('foldStatusChange', callback);\n  // 如果通过on注册多个callback，同时关闭所有callback监听\n  hilog.info(DOMAIN, 'DisplayTest', `register foldStatusChange success`);\n\n  // 关闭单个callback监听\n  display.off('foldStatusChange', callback);\n  hilog.info(DOMAIN, 'DisplayTest', `unregister all foldStatusChange success`);\n  // 关闭所有callback监听\n  display.off('foldStatusChange');\n  hilog.info(DOMAIN, 'DisplayTest', `unregister foldStatusChange success`);\n} catch (exception) {\n  hilog.error(DOMAIN, 'DisplayTest',\n    `Failed to register/unregister callback. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
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