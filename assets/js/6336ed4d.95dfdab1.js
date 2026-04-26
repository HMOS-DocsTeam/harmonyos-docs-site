"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86251"], {
38348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_application_window_fa_application_window_fa_md_633_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-application-window-fa-application-window-fa-md-633.json
var site_docs_arkui_window_manager_application_window_fa_application_window_fa_md_633_namespaceObject = JSON.parse('{"id":"arkui/window-manager/application-window-fa/application-window-fa","title":"管理应用窗口（FA模型）","description":"基本概念","source":"@site/docs/arkui/window-manager/application-window-fa/application-window-fa.md","sourceDirName":"arkui/window-manager/application-window-fa","slug":"/arkui/window-manager/application-window-fa/","permalink":"/harmonyos-docs-site/arkui/window-manager/application-window-fa/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"管理应用窗口（FA模型）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-window-fa","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理应用窗口（Stage模型）","permalink":"/harmonyos-docs-site/arkui/window-manager/application-window-stage/"},"next":{"title":"窗口旋转","permalink":"/harmonyos-docs-site/arkui/window-manager/window-rotation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/application-window-fa/application-window-fa.md


const frontMatter = {
	title: '管理应用窗口（FA模型）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-window-fa',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '管理应用窗口（FA模型）';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "设置应用子窗口",
  "id": "设置应用子窗口",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "体验窗口沉浸式能力",
  "id": "体验窗口沉浸式能力",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
        id: "管理应用窗口fa模型",
        children: "管理应用窗口（FA模型）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口沉浸式能力：指对状态栏、导航栏等系统窗口进行控制，减少状态栏导航栏等系统界面的突兀感，从而使用户获得最佳体验的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沉浸式能力只在应用主窗口作为全屏窗口时生效。通常情况下，应用子窗口（弹窗、悬浮窗口等辅助窗口）和处于自由窗口下的应用主窗口无法使用沉浸式能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155487)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前沉浸式界面开发仅支持窗口级别的配置，暂不支持Page级别的配置。若有Page级别切换的需要，可以在页面生命周期开始，例如onPageShow中设置沉浸模式，然后在页面退出，例如onPageHide中恢复默认设置来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在FA模型下，管理应用窗口的典型场景有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置应用子窗口属性及目标页面"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "体验窗口沉浸式能力"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下分别介绍具体开发方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述场景涉及的常用接口如下表所示。更多API说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "实例名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window静态方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createWindow(config: Configuration, callback: AsyncCallback<Window>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建子窗口。  -config：创建窗口时的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window静态方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "findWindow(name: string): Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查找name所对应的窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setUIContent(path: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据当前工程中某个页面的路径为窗口加载具体的页面内容。  其中path为要加载到窗口中的页面内容的路径，在FA模型下该路径需添加到工程的config.json文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "moveWindowTo(x: number, y: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动当前窗口位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowBrightness(brightness: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕亮度值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resize(width: number, height: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "改变当前窗口大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主窗口或子窗口的布局是否为沉浸式布局。true表示沉浸式布局；false表示非沉浸式布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowSystemBarEnable(names: Array<'status'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'navigation'>): Promise<void>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置窗口内导航栏、状态栏属性。  systemBarProperties：导航栏、状态栏的属性集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showWindow(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示当前窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'touchOutside', callback: Callback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启本窗口区域外的点击事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "destroyWindow(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁当前窗口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置应用子窗口",
      children: "设置应用子窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以按需创建应用子窗口，如弹窗等，并对其进行属性设置等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957963)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下几种场景不建议使用子窗口，建议优先考虑使用控件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay",
        children: "overlay"
      }), "能力实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "移动设备（手机、在非自由模式下的平板设备）场景下子窗口不能超出处于悬浮窗、分屏状态的主窗口范围，与控件一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分屏窗口与自由窗口模式下，主窗口位置大小发生改变时控件实时跟随变化能力优于子窗口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "部分设备平台下根据实际的系统配置限制，子窗只有系统默认的动效和圆角阴影，应用无法设置，自由度低。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建/获取子窗口对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可以通过window.createWindow接口创建子窗口。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["非", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
                children: "自由窗口"
              }), "状态下，子窗口创建后默认是", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/window-manager/window-terminology#%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%B8%83%E5%B1%80",
                children: "沉浸式布局"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["自由窗口状态下，子窗口参数", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#configuration9",
                children: "decorEnabled"
              }), "为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口创建后为非沉浸式布局。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "也可以通过window.findWindow接口来查找已经创建的窗口从而得到子窗口。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet windowClass: window.Window | null = null;\n// 方式一：创建子窗口。\nlet config: window.Configuration = { name: \"subWindow\", windowType: window.WindowType.TYPE_APP };\nwindow.createWindow(config, (err: BusinessError, data) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error(`Failed to create the subWindow. Code:${err.code}, message:${err.message}`);\n    return;\n  }\n  console.info('Succeeded in creating subWindow. Data: ' + JSON.stringify(data));\n  windowClass = data;\n  if (!windowClass) {\n   console.error('windowClass is null');\n   return;\n  }\n});\n// 方式二：查找得到子窗口。\ntry {\n  windowClass = window.findWindow('subWindow');\n} catch (exception) {\n  console.error('Failed to find the Window. Cause: ' + JSON.stringify(exception));\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置子窗口属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子窗口创建成功后，可以改变其大小、位置等，还可以根据应用需要设置窗口背景色、亮度等属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 移动子窗口位置。\nwindowClass.moveWindowTo(300, 300, (err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error('Failed to move the window. Cause:' + JSON.stringify(err));\n    return;\n  }\n  console.info('Succeeded in moving the window.');\n});\n// 改变子窗口大小。\nwindowClass.resize(500, 500, (err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error('Failed to change the window size. Cause:' + JSON.stringify(err));\n    return;\n  }\n  console.info('Succeeded in changing the window size.');\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载显示子窗口的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用setUIContent和showWindow接口加载显示子窗口的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 为子窗口加载对应的目标页面。\nwindowClass.setUIContent(\"pages/page2\", (err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error('Failed to load the content. Cause: ' + JSON.stringify(err));\n    return;\n  }\n  console.info('Succeeded in loading the content.');\n  if (!windowClass) {\n    console.error('windowClass is null');\n    return;\n  }\n  // 显示子窗口。\n  windowClass.showWindow((err: BusinessError) => {\n    let errCode: number = err.code;\n    if (errCode) {\n      console.error('Failed to show the window. Cause: ' + JSON.stringify(err));\n      return;\n    }\n    console.info('Succeeded in showing the window.');\n  });\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁子窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要某些子窗口时，可根据场景的具体实现逻辑，使用destroyWindow接口销毁子窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁子窗口。当不再需要某些子窗口时，可根据场景的具体实现逻辑，使用destroy接口销毁子窗口。\nwindowClass.destroyWindow((err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error('Failed to destroy the subwindow. Cause:' + JSON.stringify(err));\n    return;\n  }\n  console.info('Succeeded in destroying the subwindow.');\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "体验窗口沉浸式能力",
      children: "体验窗口沉浸式能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在看视频、玩游戏等场景下，用户往往希望隐藏状态栏、导航栏等不必要的系统窗口，从而获得更佳的沉浸式体验。此时可以借助窗口沉浸式能力（窗口沉浸式能力都是针对应用主窗口而言的），达到预期效果。从API version 10开始，沉浸式窗口默认配置为全屏大小并由组件模块控制布局，状态栏、导航栏背景颜色为透明，文字颜色为黑色；应用窗口调用setWindowLayoutFullScreen接口，设置为true表示由组件模块控制忽略状态栏、导航栏的沉浸式全屏布局，设置为false表示由组件模块控制避让状态栏、导航栏的非沉浸式全屏布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取主窗口对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(708647)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "沉浸式能力需要在成功获取应用主窗口对象的前提下进行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确保应用内最后显示的窗口为主窗口，然后再使用window.getLastWindow接口来获取得到主窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet mainWindowClass: window.Window | null = null;\n\n// 获取主窗口。\nclass BaseContext {\n  stageMode: boolean = false;\n}\n\nlet context: BaseContext = { stageMode: false };\nwindow.getLastWindow(context, (err: BusinessError, data) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error('Failed to get the mainWindow. Cause: ' + JSON.stringify(err));\n    return;\n  }\n  console.info('Succeeded in getting mainWindow. Data: ' + JSON.stringify(data));\n  mainWindowClass = data;\n  if (!mainWindowClass) {\n   console.error('mainWindowClass is null');\n   return;\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现沉浸式效果。有以下两种方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方式一：应用主窗口为全屏窗口时，调用setWindowSystemBarEnable接口，设置导航栏、状态栏不显示，从而达到沉浸式效果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方式二：调用setWindowLayoutFullScreen接口，设置应用主窗口为全屏布局；然后调用setWindowSystemBarProperties接口，设置导航栏、状态栏的透明度、背景/文字颜色以及高亮图标等属性，使之保持与主窗口显示协调一致，从而达到沉浸式效果。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 实现沉浸式效果。方式一：设置导航栏、状态栏不显示。\nlet names: Array<'status' | 'navigation'> = [];\nmainWindowClass.setWindowSystemBarEnable(names)\n .then(() => {\n   console.info('Succeeded in setting the system bar to be visible.');\n })\n .catch((err: BusinessError) => {\n   console.error('Failed to set the system bar to be visible. Cause:' + JSON.stringify(err));\n });\n// 实现沉浸式效果。\n// 方式二：设置窗口为全屏布局，配合设置状态栏、导航栏的透明度、背景/文字颜色及高亮图标等属性，与主窗口显示保持协调一致。\nlet isLayoutFullScreen: boolean = true;\nmainWindowClass.setWindowLayoutFullScreen(isLayoutFullScreen)\n .then(() => {\n   console.info('Succeeded in setting the window layout to full-screen mode.');\n })\n .catch((err: BusinessError) => {\n   console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));\n });\nlet sysBarProps: window.SystemBarProperties = {\n  statusBarColor: '#ff00ff',\n  navigationBarColor: '#00ff00',\n  // 以下两个属性从API Version8开始支持。\n  statusBarContentColor: '#ffffff',\n  navigationBarContentColor: '#ffffff'\n};\nmainWindowClass.setWindowSystemBarProperties(sysBarProps)\n .then(() => {\n   console.info('Succeeded in setting the system bar properties.');\n })\n .catch((err: BusinessError) => {\n   console.error('Failed to set the system bar properties. Cause: ' + JSON.stringify(err));\n });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载显示沉浸式窗口的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用setUIContent和showWindow接口加载显示沉浸式窗口的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 为沉浸式窗口加载对应的目标页面。\nmainWindowClass.setUIContent(\"pages/page3\", (err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n    console.error('Failed to load the content. Cause: ' + JSON.stringify(err));\n    return;\n  }\n  console.info('Succeeded in loading the content.');\n  if (!mainWindowClass) {\n   console.error('mainWindowClass is null');\n   return;\n  }\n  // 显示沉浸式窗口。\n  mainWindowClass.showWindow((err: BusinessError) => {\n    let errCode: number = err.code;\n    if (errCode) {\n      console.error('Failed to show the window. Cause: ' + JSON.stringify(err));\n      return;\n    }\n    console.info('Succeeded in showing the window.');\n  });\n});\n"
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
708647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
957963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
155487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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