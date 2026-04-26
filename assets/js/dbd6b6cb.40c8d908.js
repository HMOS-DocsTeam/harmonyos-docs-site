"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["936793"], {
25136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_develop_apply_immersive_effects_arkts_develop_apply_immersive_effects_md_dbd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-layout-development-arkts-develop-apply-immersive-effects-arkts-develop-apply-immersive-effects-md-dbd.json
var site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_develop_apply_immersive_effects_arkts_develop_apply_immersive_effects_md_dbd_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/arkts-develop-apply-immersive-effects","title":"开发应用沉浸式效果","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/arkts-develop-apply-immersive-effects.md","sourceDirName":"arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects","slug":"/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"开发应用沉浸式效果","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-develop-apply-immersive-effects","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"选项卡 (Tabs)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/"},"next":{"title":"列表与网格概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/arkts-develop-apply-immersive-effects.md


const frontMatter = {
	title: '开发应用沉浸式效果',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-develop-apply-immersive-effects',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '开发应用沉浸式效果';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "窗口全屏布局方案",
  "id": "窗口全屏布局方案",
  "level": 2
}, {
  "value": "应用扩展布局，全屏显示，不隐藏避让区",
  "id": "应用扩展布局全屏显示不隐藏避让区",
  "level": 3
}, {
  "value": "应用扩展布局，隐藏避让区",
  "id": "应用扩展布局隐藏避让区",
  "level": 3
}, {
  "value": "组件安全区方案",
  "id": "组件安全区方案",
  "level": 2
}, {
  "value": "扩展安全区域属性原理",
  "id": "扩展安全区域属性原理",
  "level": 3
}, {
  "value": "背景图和视频场景",
  "id": "背景图和视频场景",
  "level": 3
}, {
  "value": "滚动类场景",
  "id": "滚动类场景",
  "level": 3
}, {
  "value": "底部页签场景",
  "id": "底部页签场景",
  "level": 3
}, {
  "value": "图文场景",
  "id": "图文场景",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发应用沉浸式效果",
        children: "开发应用沉浸式效果"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["典型应用全屏窗口UI元素包括顶部", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/status-bar-0000001776775568",
        children: "状态栏"
      }), "、应用界面和底部导航区域（根据用户设置可表现为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/navigation-0000001957075737",
        children: "导航条"
      }), "或三键导航），其中状态栏和导航区域，通常在沉浸式布局下称为避让区；避让区之外的区域称为安全区。开发应用沉浸式效果主要指通过调整状态栏、应用界面和底部导航区域的显示效果来减少状态栏、导航条或三键导航等系统界面的突兀感，从而使用户获得最佳的UI体验。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 界面元素示意图（此处以导航区域表现为导航条为例给出示意）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94106)/* ["default"] */.A) + "",
        width: "802",
        height: "1179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发应用沉浸式效果主要要考虑如下几个设计要素："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI元素避让处理：底部导航区域可以响应点击事件，除此之外的可交互UI元素和应用关键信息不建议放到导航区域。状态栏显示系统信息，如果与界面元素有冲突，需要考虑避让状态栏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "沉浸式效果处理：设置状态栏的颜色和导航区域的显隐与界面元素颜色相匹配，不出现明显的突兀感。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对上面的设计要求，可以通过如下两种方式实现应用沉浸式效果："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%AA%97%E5%8F%A3%E5%85%A8%E5%B1%8F%E5%B8%83%E5%B1%80%E6%96%B9%E6%A1%88",
          children: "窗口全屏布局方案"
        }), "：调整布局系统为全屏布局，界面元素延伸到状态栏和导航区域实现沉浸式效果。当不隐藏避让区时，可通过接口查询状态栏和导航区域进行可交互元素避让处理，并设置状态栏或导航区域的颜色或显隐等属性与界面元素匹配。当隐藏避让区时，通过对应接口设置全屏布局即可。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%BB%84%E4%BB%B6%E5%AE%89%E5%85%A8%E5%8C%BA%E6%96%B9%E6%A1%88",
          children: "组件安全区方案"
        }), "：布局系统保持安全区内布局，然后通过接口延伸绘制内容（如背景色，背景图）到状态栏和导航区域实现沉浸式效果。该方案下，界面元素仅做绘制延伸，无法单独布局到状态栏和导航区域，针对需要单独布局UI元素到状态栏和导航区域的场景建议使用窗口全屏布局方案处理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "窗口全屏布局方案",
      children: "窗口全屏布局方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["窗口全屏布局方案主要涉及以下", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E6%89%A9%E5%B1%95%E5%B8%83%E5%B1%80%E5%85%A8%E5%B1%8F%E6%98%BE%E7%A4%BA%E4%B8%8D%E9%9A%90%E8%97%8F%E9%81%BF%E8%AE%A9%E5%8C%BA",
        children: "应用扩展布局，全屏显示，不隐藏避让区"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E6%89%A9%E5%B1%95%E5%B8%83%E5%B1%80%E9%9A%90%E8%97%8F%E9%81%BF%E8%AE%A9%E5%8C%BA",
        children: "应用扩展布局，隐藏避让区"
      }), "两个应用场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用扩展布局全屏显示不隐藏避让区",
      children: "应用扩展布局，全屏显示，不隐藏避让区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过调用窗口强制全屏布局接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
        children: "setWindowLayoutFullScreen()"
      }), "实现界面元素延伸到状态栏和导航区域；然后通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
        children: "getWindowAvoidArea()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onavoidareachange9",
        children: "on('avoidAreaChange')"
      }), "获取并动态监听避让区域的变更信息，页面布局根据避让区域信息进行动态调整；设置状态栏或导航区域的颜色或显隐等属性与界面元素进行匹配。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用setWindowLayoutFullScreen()接口设置窗口全屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        return;\n      }\n\n      let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口\n      // 1. 设置窗口全屏\n      let isLayoutFullScreen = true;\n      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {\n        console.info('Succeeded in setting the window layout to full-screen mode.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to set the window layout to full-screen mode. Code is ${err.code}, message is ${err.message}`);\n      });\n      // 进行后续步骤2-3中的操作\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
            children: "getWindowAvoidArea()"
          }), "接口获取当前布局遮挡区域（此处以状态栏、导航区域为例）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\n// 2. 获取布局避让遮挡的区域\nlet type = window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR; // 此处以导航条避让为例\nlet avoidArea = windowClass.getWindowAvoidArea(type);\nlet bottomRectHeight = avoidArea.bottomRect.height; // 获取到导航区域的高度\nAppStorage.setOrCreate('bottomRectHeight', bottomRectHeight);\n\ntype = window.AvoidAreaType.TYPE_SYSTEM; // 以状态栏避让为例\navoidArea = windowClass.getWindowAvoidArea(type);\nlet topRectHeight = avoidArea.topRect.height; // 获取状态栏区域高度\nAppStorage.setOrCreate('topRectHeight', topRectHeight);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册监听函数，动态获取避让区域的实时数据。常见的触发避让区回调的场景如下：应用窗口在全屏模式、悬浮模式、分屏模式之间的切换；应用窗口旋转；多折叠设备在屏幕折叠态和展开态之间的切换；应用窗口在多设备之间的流转。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\n// 3. 注册监听函数，动态获取避让区域数据\nwindowClass.on('avoidAreaChange', (data) => {\n  if (data.type === window.AvoidAreaType.TYPE_SYSTEM) {\n    let topRectHeight = data.area.topRect.height;\n    AppStorage.setOrCreate('topRectHeight', topRectHeight);\n  } else if (data.type == window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {\n    let bottomRectHeight = data.area.bottomRect.height;\n    AppStorage.setOrCreate('bottomRectHeight', bottomRectHeight);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布局中的UI元素需要避让状态栏和导航区域，否则可能产生UI元素重叠等情况。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(191706)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "避让区域存在大小为0的情况，当获取到的避让区域为0时，开发者需注意针对性处理适配此时的页面区域和布局，避免贴边、内容裁剪等问题，影响应用界面正常显示或美观性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下例子中，对控件顶部设置padding（具体数值与状态栏高度一致），实现对状态栏的避让；对底部设置padding（具体数值与底部导航区域高度一致），实现对导航条的避让。如果去掉顶部和底部的padding设置，即不避让状态栏和导航条，UI元素就会发生重叠。具体可见下文步骤中图2和图3的效果对比。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n@Entry\n@Component\nstruct Index {\n  @StorageProp('bottomRectHeight')\n  bottomRectHeight: number = 0;\n  @StorageProp('topRectHeight')\n  topRectHeight: number = 0;\n\n  build() {\n    Column() {\n      Row() {\n        Text('Top Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#2786d9')\n\n      Row() {\n        Text('Display Content 2').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 3').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 4').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 5').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Bottom Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#96dffa')\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .backgroundColor('#d5d5d5')\n    .justifyContent(FlexAlign.SpaceBetween)\n    // top数值与状态栏区域高度保持一致；bottom数值与导航区域高度保持一致\n    .padding({\n      top: this.getUIContext().px2vp(this.topRectHeight),\n      bottom: this.getUIContext().px2vp(this.bottomRectHeight)\n    })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据实际的UI界面显示或相关UI元素背景颜色等，还可以按需设置状态栏的文字颜色、背景色或设置导航区域的显示或隐藏，以使UI界面效果呈现和谐。状态栏和导航区域默认是透明的，透传的是应用界面的背景色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此例中UI颜色主要有两种，比较简单，故未对状态栏文字颜色、背景色进行设置，未对导航区域进行隐藏。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " 布局避让状态栏和导航区域（此处以导航区域表现为导航条为例给出示意）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(84941)/* ["default"] */.A) + "",
            width: "323",
            height: "697"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图3"
            })
          }), " 布局未避让状态栏和导航区域，UI元素重叠（此处以导航区域表现为导航条为例给出示意）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(772888)/* ["default"] */.A) + "",
            width: "321",
            height: "692"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用扩展布局隐藏避让区",
      children: "应用扩展布局，隐藏避让区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此场景下状态栏和导航区域需要隐藏，适用于游戏、电影等应用场景。用户可以通过从底部上滑唤出导航条或三键导航。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722850)/* ["default"] */.A) + "",
        width: "395",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用setWindowLayoutFullScreen()接口设置窗口全屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        return;\n      }\n\n      let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口\n      // 1. 设置窗口全屏\n      let isLayoutFullScreen = true;\n      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {\n        console.info('Succeeded in setting the window layout to full-screen mode.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to set the window layout to full-screen mode. Code is ${err.code}, message is ${err.message}`);\n      });\n      // 进行后续步骤2中的状态栏和导航区域的隐藏操作\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setspecificsystembarenabled11",
            children: "setSpecificSystemBarEnabled()"
          }), "接口设置状态栏和导航区域的具体显隐状态，此场景下将其设置为隐藏。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\n// 2. 设置状态栏隐藏\nwindowClass.setSpecificSystemBarEnabled('status', false).then(() => {\n  console.info('Succeeded in setting the status bar to be invisible.');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to set the status bar to be invisible. Code is ${err.code}, message is ${err.message}`);\n});\n// 2. 设置导航区域隐藏\nwindowClass.setSpecificSystemBarEnabled('navigationIndicator', false).then(() => {\n  console.info('Succeeded in setting the navigation indicator to be invisible.');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to set the navigation indicator to be invisible. Code is ${err.code}, message is ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在界面中无需进行导航区域避让操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n@Entry()\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Row() {\n          Text('Top Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n        }.backgroundColor('#2786d9')\n\n        Row() {\n          Text('Display Content 2').fontSize(30)\n        }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n        Row() {\n          Text('Display Content 3').fontSize(30)\n        }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n        Row() {\n          Text('Display Content 4').fontSize(30)\n        }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n        Row() {\n          Text('Display Content 5').fontSize(30)\n        }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n        Row() {\n          Text('Bottom Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n        }.backgroundColor('#96dffa')\n      }\n      .width('100%')\n      .height('100%')\n      .alignItems(HorizontalAlign.Center)\n      .justifyContent(FlexAlign.SpaceBetween)\n      .backgroundColor('#d5d5d5')\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件安全区方案",
      children: "组件安全区方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用未使用setWindowLayoutFullScreen()接口设置窗口全屏布局时，默认采取组件安全区布局方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在默认情况下窗口背景绘制范围是全屏，但UI元素被限制在安全区内（自动排除状态栏和导航区域）进行布局，来避免界面元素被状态栏和导航区域遮盖。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 界面元素自动避让状态栏和导航区域示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(326460)/* ["default"] */.A) + "",
        width: "473",
        height: "427"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对状态栏和导航区域颜色与界面元素颜色不匹配问题，可以通过如下两种方式实现沉浸式效果："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["状态栏和导航区域颜色相同场景，可以通过设置窗口的背景色来实现沉浸式效果。窗口背景色可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowbackgroundcolor9",
            children: "setWindowBackgroundColor()"
          }), "进行设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        return;\n      }\n\n      // 设置全窗颜色和应用元素颜色一致\n      windowStage.getMainWindowSync().setWindowBackgroundColor('#d5d5d5');\n    });\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "界面状态栏和导航区域颜色相同场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct Example {\n  build() {\n    Column() {\n      Row() {\n        Text('Top Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#2786d9')\n\n      Row() {\n        Text('Display Content 2').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 3').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 4').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 5').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Bottom Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#96dffa')\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .backgroundColor('#d5d5d5')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(115623)/* ["default"] */.A) + "",
            width: "294",
            height: "643"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["状态栏和导航区域颜色不同时，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#expandsafearea",
            children: "expandSafeArea"
          }), "属性扩展安全区域属性进行调整。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct Example {\n  build() {\n    Column() {\n      Row() {\n        Text('Top Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#2786d9')\n      // 设置顶部绘制延伸到状态栏\n      .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP])\n\n      Row() {\n        Text('Display Content 2').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 3').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 4').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 5').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Bottom Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#96dffa')\n      // 设置底部绘制延伸到导航区域\n      .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .backgroundColor('#d5d5d5')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(308999)/* ["default"] */.A) + "",
            width: "297",
            height: "644"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扩展安全区域属性原理",
      children: "扩展安全区域属性原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布局阶段按照安全区范围大小进行UI元素布局。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布局完成后查看设置了expandSafeArea的组件边界（不包括margin）是否和安全区边界相交。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果设置了expandSafeArea的组件和安全区边界相交，根据expandSafeArea传递的属性则进一步扩大组件绘制区域大小覆盖状态栏、导航区域这些非安全区域。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述过程仅改变组件自身绘制大小，不进行二次布局，不影响子节点和兄弟节点的大小和位置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子节点可以单独设置该属性，只需要自身边界和安全区域重合就可以延伸自身大小至非安全区域内，需要确保父组件未设置clip等裁剪属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置expandSafeArea属性组件进行绘制扩展时，需要关注组件不能配置固定宽高尺寸，百分比除外。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件可以设置通用属性safeAreaPadding，给自身添加组件级安全区域。该属性作为一种特殊边距，在提供布局约束的同时作为安全区可以被一些系统组件利用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "safeAreaPadding位于原有的padding内侧。容器自外向内各层分别为border、padding、safeAreaPadding、内容区。当border和padding确定后，若容器可用空间不足以满足safeAreaPadding的设置，则优先分配给左侧和上侧safeAreaPadding、其次分配给右侧和下侧safeAreaPadding。safeAreaPadding实际尺寸确定后，余下空间为内容区。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(656604)/* ["default"] */.A) + "",
                width: "379",
                height: "286"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "系统组件如Navigation、List、Scroll、Tabs等可以利用外层或容器自身safeAreaPadding实现扩大裁剪范围等能力。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "背景图和视频场景",
      children: "背景图和视频场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置背景图、视频组件大小为安全区域大小并配置expandSafeArea属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(949512)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Video组件在使用expandSafeArea扩展到安全区域时，组件视频显示内容区域不支持扩展。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SafeAreaExample1 {\n  build() {\n    Stack() {\n      Image($r('app.media.bg'))\n        .height('100%').width('100%')\n        .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]) // 图片组件的绘制区域扩展至状态栏和导航区域。\n    }.height('100%').width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974784)/* ["default"] */.A) + "",
        width: "205",
        height: "364"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "滚动类场景",
      children: "滚动类场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滚动容器设置expandSafeArea属性生效，但当父组件是滚动容器时，子组件设置expandSafeArea属性不生效。对于滚动容器的子组件，有两种方法实现沉浸式效果："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置父组件滚动容器和子组件相同的背景色，给父组件设置expandSafeArea属性扩展安全区。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct ScrollExample {\n  scroller: Scroller = new Scroller()\n  private arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Scroll(this.scroller) {\n        Column() {\n          ForEach(this.arr, (item: number) => {\n            Stack() {\n              Text('Display Content ' + item.toString()).fontSize(30)\n            }\n            .width('80%').padding(20).borderRadius(15).backgroundColor(Color.White).margin({ top:30, bottom:30 })\n          }, (item: string) => item)\n        }.width('100%').backgroundColor('rgb(213,213,213)')\n      }.backgroundColor('rgb(213,213,213)')\n      .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n    }.width('100%').height('100%')\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图5"
            })
          }), " 滚动类容器设置expandSafeArea属性实现沉浸式效果"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(36329)/* ["default"] */.A) + "",
            width: "325",
            height: "716"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置父组件滚动容器和子组件相同的背景色，设置滚动容器的内容裁剪属性clipContent(ContentClipMode.SAFE_AREA)，将内容层裁剪区域扩展至避让区。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Entry\n@Component\nstruct ScrollExample {\n  scroller: Scroller = new Scroller()\n  private arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Scroll(this.scroller) {\n        Column() {\n          ForEach(this.arr, (item: number) => {\n            Stack() {\n              Text('Display Content ' + item.toString()).fontSize(30)\n            }\n            .width('80%').padding(20).borderRadius(15).backgroundColor(Color.White).margin({ top:30, bottom:30 })\n          }, (item: string) => item)\n        }.width('100%').backgroundColor('rgb(213,213,213)')\n      }.backgroundColor('rgb(213,213,213)')\n      .clipContent(ContentClipMode.SAFE_AREA)\n    }.width('100%').height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 滚动类容器设置clipContent属性实现沉浸式效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(314659)/* ["default"] */.A) + "",
        width: "867",
        height: "612"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "底部页签场景",
      children: "底部页签场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要求页签背景色能够延伸到导航区域（此处以导航区域表现为导航条为例给出示意），但页签内部可操作元素需要在导航区域之上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308090)/* ["default"] */.A) + "",
        width: "543",
        height: "382"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对底部的页签部分，Navigation组件和Tabs组件默认实现了页签的延伸处理，开发者只需要保证Navigation和Tabs组件的底部边界和底部导航区域重合即可。若开发者显式调用expandSafeArea接口，则安全区效果由expandSafeArea参数指定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果未使用上述组件而是采用自定义方式实现页签的场景，可以针对底部元素设置expandSafeArea属性实现底部元素的背景扩展。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 顶部和底部UI元素未设置和设置expandSafeArea属性效果对比"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768907)/* ["default"] */.A) + "",
        width: "617",
        height: "644"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Example {\n  build() {\n    Column() {\n      Row() {\n        Text('Top Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#2786d9')\n      // 设置顶部绘制延伸到状态栏\n      .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP])\n\n      Row() {\n        Text('Display Content 2').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 3').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 4').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Display Content 5').fontSize(30)\n      }.backgroundColor(Color.White).padding(20).borderRadius(15).width('80%')\n\n      Row() {\n        Text('Bottom Content').fontSize(40).textAlign(TextAlign.Center).width('100%')\n      }.backgroundColor('#96dffa')\n      // 设置底部绘制延伸到导航区域\n      .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n    }\n    .width('100%').height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .backgroundColor('#d5d5d5')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图文场景",
      children: "图文场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当状态栏元素和底部导航区域元素不同时，无法单纯通过窗口背景色或者背景图组件延伸实现，此时需要对顶部元素和底部元素分别配置expandSafeArea属性，顶部元素配置expandSafeArea([SafeAreaType.SYSTEM],[SafeAreaEdge.TOP])，底部元素配置expandSafeArea([SafeAreaType.SYSTEM],[SafeAreaEdge.BOTTOM])。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206289)/* ["default"] */.A) + "",
        width: "287",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Swiper() {\n      Column() {\n        Image($r('app.media.start'))\n          .height('50%').width('100%')\n          // 设置图片延伸到状态栏\n          .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP])\n        Column() {\n          Text('HarmonyOS 第一课')\n            .fontSize(32)\n            .margin(30)\n          Text('通过循序渐进的学习路径，无经验和有经验的开发者都可以掌握ArkTS语言声明式开发范式，体验更简洁、更友好的HarmonyOS应用开发旅程。')\n            .fontSize(20).margin(20)\n        }.height('50%').width('100%')\n        .backgroundColor(Color.White)\n        // 设置文本内容区背景延伸到导航栏\n        .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])\n      }\n    }\n    .width('100%')\n    .height('100%')\n    // 关闭Swiper组件默认的裁剪效果以便子节点可以绘制在Swiper外。\n    .clip(false)\n  }\n}\n"
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
772888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798108-9f1d528c4fe3832c52af77a01d1aea08.jpg");

},
308999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798110-14ecb3b85d7b603fb64c165a6ae44749.png");

},
94106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957756-c2993c74d5d293150f34d17f561a62b7.png");

},
308090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437807-d3134f8070d2b0effeaadac5561b235f.png");

},
722850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437803-e0d8501ef8cc14e600b401494e2f18e3.png");

},
949512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
206289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477763-4165526a8f7d91399b8ba078b7bc39e7.png");

},
84941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477757-ed15e2eb848280e8bd7c63d6da40d26b.jpg");

},
191706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
314659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798112-6d3aabf8bfa82eb6e515091ac8a8ae84.png");

},
326460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957758-961e49a5539f45db8cbcdd8de293c3ff.png");

},
115623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477759-1138cce325ab0273781db413c30a55de.png");

},
36329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477761-2b578cce4acd01ac4ba3ea756d820e0b.png");

},
768907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957762-a2b5cdaf6bf3a1201a121e45e7a3da7f.png");

},
656604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437805-1e965ad63274433cc19b6bfb47aa47dd.png");

},
974784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957760-15df2c23665f4f54190aec34cc35dd64.png");

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