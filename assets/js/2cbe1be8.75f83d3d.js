"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["661164"], {
577575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_faqs_window_faqs_md_2cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-faqs-window-faqs-md-2cb.json
var site_docs_arkui_window_manager_window_faqs_window_faqs_md_2cb_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-faqs/window-faqs","title":"窗口开发常见问题","description":"如何在应用A启动过程中拉起另一个应用B","source":"@site/docs/arkui/window-manager/window-faqs/window-faqs.md","sourceDirName":"arkui/window-manager/window-faqs","slug":"/arkui/window-manager/window-faqs/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-faqs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"窗口开发常见问题","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-faqs","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"窗口开发术语","permalink":"/harmonyos-docs-site/arkui/window-manager/window-terminology/"},"next":{"title":"屏幕管理简介","permalink":"/harmonyos-docs-site/arkui/display-manager/displaymanager-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-faqs/window-faqs.md


const frontMatter = {
	title: '窗口开发常见问题',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-faqs',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '窗口开发常见问题';

const assets = {

};



const toc = [{
  "value": "如何在应用A启动过程中拉起另一个应用B",
  "id": "如何在应用a启动过程中拉起另一个应用b",
  "level": 2
}, {
  "value": "如何动态获取窗口宽高",
  "id": "如何动态获取窗口宽高",
  "level": 2
}, {
  "value": "如何获取软键盘高度",
  "id": "如何获取软键盘高度",
  "level": 2
}, {
  "value": "如何获取PC设备顶部系统默认标题栏的高度",
  "id": "如何获取pc设备顶部系统默认标题栏的高度",
  "level": 2
}, {
  "value": "如何实现或判断窗口沉浸式布局",
  "id": "如何实现或判断窗口沉浸式布局",
  "level": 2
}, {
  "value": "如何隐藏状态栏和底部导航区域",
  "id": "如何隐藏状态栏和底部导航区域",
  "level": 2
}, {
  "value": "如何获取状态栏高度",
  "id": "如何获取状态栏高度",
  "level": 2
}, {
  "value": "如何设置窗口背景透明",
  "id": "如何设置窗口背景透明",
  "level": 2
}, {
  "value": "如何实现横竖屏切换",
  "id": "如何实现横竖屏切换",
  "level": 2
}, {
  "value": "如何保持屏幕为横屏/竖屏，不随传感器旋转",
  "id": "如何保持屏幕为横屏竖屏不随传感器旋转",
  "level": 2
}, {
  "value": "如何获取设备的横竖屏状态",
  "id": "如何获取设备的横竖屏状态",
  "level": 2
}, {
  "value": "如何设置应用默认横屏宽高比例",
  "id": "如何设置应用默认横屏宽高比例",
  "level": 2
}, {
  "value": "如何设置窗口支持的显示模式supportWindowMode",
  "id": "如何设置窗口支持的显示模式supportwindowmode",
  "level": 2
}, {
  "value": "如何判断当前窗口是否为自由悬浮窗口模式",
  "id": "如何判断当前窗口是否为自由悬浮窗口模式",
  "level": 2
}, {
  "value": "如何设置全局悬浮窗背景色为透明",
  "id": "如何设置全局悬浮窗背景色为透明",
  "level": 2
}, {
  "value": "如何判断应用被部分遮挡或完全遮挡",
  "id": "如何判断应用被部分遮挡或完全遮挡",
  "level": 2
}, {
  "value": "如何判断设备是否开启了自由多窗",
  "id": "如何判断设备是否开启了自由多窗",
  "level": 2
}, {
  "value": "如何设置隐私窗口",
  "id": "如何设置隐私窗口",
  "level": 2
}, {
  "value": "resize、moveWindowTo等接口有什么位置/大小限制",
  "id": "resizemovewindowto等接口有什么位置大小限制",
  "level": 2
}, {
  "value": "如何设置或取消水印",
  "id": "如何设置或取消水印",
  "level": 2
}, {
  "value": "如何将创建的窗口移动到扩展屏",
  "id": "如何将创建的窗口移动到扩展屏",
  "level": 2
}, {
  "value": "子窗口背景如何实现半透明效果",
  "id": "子窗口背景如何实现半透明效果",
  "level": 2
}, {
  "value": "如何设置页面级亮度",
  "id": "如何设置页面级亮度",
  "level": 2
}, {
  "value": "如何恢复系统屏幕亮度",
  "id": "如何恢复系统屏幕亮度",
  "level": 2
}, {
  "value": "如何正常获取顶层窗口",
  "id": "如何正常获取顶层窗口",
  "level": 2
}, {
  "value": "getWindowProperties接口返回值中的窗口类型（type字段）不符合预期",
  "id": "getwindowproperties接口返回值中的窗口类型type字段不符合预期",
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
        id: "窗口开发常见问题",
        children: "窗口开发常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何在应用a启动过程中拉起另一个应用b",
      children: "如何在应用A启动过程中拉起另一个应用B"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用A调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#onwindowstageevent9",
        children: "on('windowStageEvent')"
      }), "接口监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowstageeventtype9",
        children: "WindowStageEvent.ACTIVE"
      }), "事件后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "接口拉起应用B。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// applicationA EntryAbility.ts\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, StartOptions } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n    onWindowStageCreate(windowStage: window.WindowStage): void {\n        let want: Want = {\n            deviceId: '',\n            bundleName: 'com.example.applicationB',\n            abilityName: 'EntryAbility'\n        };\n\n        let options: StartOptions = {\n            displayId: 0\n        };\n\n        windowStage.on('windowStageEvent', (data) => {\n            let eventType: window.WindowStageEventType = data;\n            // 监听应用A切换到ACTIVE状态\n            if (eventType === window.WindowStageEventType.ACTIVE) {\n                try {\n                    // 拉起应用B\n                    this.context.startAbility(want, options, (err: BusinessError) => {\n                        if (err.code) {\n                            // 处理业务逻辑错误\n                            console.error(`Failed to start ability, code is ${err.code}, message is ${err.message}.`);\n                            return;\n                        }\n                        // 执行正常业务\n                        console.info('Succeeded in starting Ability.');\n                    });\n                } catch (err) {\n                    // 处理入参错误异常\n                    let code = (err as BusinessError).code;\n                    let message = (err as BusinessError).message;\n                    console.error(`Failed to start ability, code is ${code}, message is ${message}.`);\n                }\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何动态获取窗口宽高",
      children: "如何动态获取窗口宽高"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，动态获取窗口宽高主要用于实现响应式布局，以适应不同尺寸的设备或窗口状态变化（如分屏、最大化恢复、拖拽缩放等）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#getmainwindowsync9",
        children: "getMainWindowSync()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#getmainwindow9-1",
        children: "getMainWindow()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#getsubwindow9-1",
        children: "getSubWindow()"
      }), "中的任一方法获取到Window实例（windowClass），再通过此实例调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
        children: "getWindowProperties()"
      }), "接口得到其属性WindowProperties，通过属性获取窗口宽高即可。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    try {\n      let properties = windowClass.getWindowProperties();\n      let rect = properties.windowRect;\n      let windowWidth = rect.width;  // 窗口宽度，单位px\n      let windowHeight = rect.height; // 窗口高度，单位px\n      console.info(`Window Size: ${windowWidth} x ${windowHeight}`);\n    } catch (exception) {\n      console.error('Failed to obtain the window properties. Cause: ' + JSON.stringify(exception));\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取软键盘高度",
      children: "如何获取软键盘高度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["固定态软键盘为一种特定的避让区域类型，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#avoidareatype7",
        children: "AvoidAreaType"
      }), "中对应为固定态软键盘（TYPE_KEYBOARD）类型，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
        children: "getWindowAvoidArea()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onavoidareachange9",
        children: "on('avoidAreaChange')"
      }), "动态监听软键盘避让区高度的变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["另外，开发者也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onkeyboardheightchange7",
        children: "on('keyboardHeightChange')"
      }), "接口监听软键盘的占用高度。与避让区域不同的是，此接口回调仅返回软键盘的高度数值（number），而", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onavoidareachange9",
        children: "on('avoidAreaChange')"
      }), "回调会返回整个软键盘区域（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#rect7",
        children: "Rect"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    // 获取应用主窗口\n    let windowClass: window.Window = windowStage.getMainWindowSync();\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    try {\n      // 获取软键盘避让区高度\n      let keyboardHeight = windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_KEYBOARD).bottomRect.height;\n      // 动态监听软键盘避让区高度\n      windowClass.on('avoidAreaChange', (data) => {\n        if (data.type == window.AvoidAreaType.TYPE_KEYBOARD) {\n          keyboardHeight = data.area.bottomRect.height;\n        }\n      });\n    } catch (exception) {\n      console.error(`Failed to enable the listener for system avoid area changes. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取pc设备顶部系统默认标题栏的高度",
      children: "如何获取PC设备顶部系统默认标题栏的高度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowdecorheight11",
        children: "getWindowDecorHeight()"
      }), "获取窗口的标题栏高度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    // 获取应用主窗口\n    let windowClass: window.Window = windowStage.getMainWindowSync();\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    windowClass.setUIContent('pages/WindowPage').then(() => {\n      try {\n        let height = windowClass?.getWindowDecorHeight();\n        console.info(`Succeeded in getting the height of window decor: ${height}`);\n      } catch (exception) {\n        console.error(`Failed to get the height of window decor. Cause code: ${exception.code}, message: ${exception.message}`);\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何实现或判断窗口沉浸式布局",
      children: "如何实现或判断窗口沉浸式布局"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/window-terminology#%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%B8%83%E5%B1%80",
        children: "沉浸式布局"
      }), "是一种让应用界面聚焦内容，减少无关元素干扰的窗口状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["非", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
        children: "自由窗口"
      }), "可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
        children: "setWindowLayoutFullScreen()"
      }), "设置沉浸式布局；自由窗口可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowdecorvisible11",
        children: "setWindowDecorVisible()"
      }), "接口控制窗口标题栏显隐，当标题栏隐藏时，窗口处于沉浸式布局。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#isimmersivelayout20",
        children: "isImmersiveLayout()"
      }), "判断当前窗口是否处于沉浸式布局。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    // 获取应用主窗口\n    let windowClass: window.Window = windowStage.getMainWindowSync();\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    try {\n      // 设置沉浸式布局\n      let promise = windowClass.setWindowLayoutFullScreen(true);\n      // 判断当前窗口是否处于沉浸式布局\n      let isImmersiveLayout = windowClass.isImmersiveLayout();\n      console.info(`isImmersiveLayout: ${isImmersiveLayout}`);\n    } catch (exception) {\n      console.error('Failed to obtain isImmersiveLayout. Cause: ' + JSON.stringify(exception));\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何隐藏状态栏和底部导航区域",
      children: "如何隐藏状态栏和底部导航区域"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setspecificsystembarenabled11",
        children: "setSpecificSystemBarEnabled()"
      }), "隐藏状态栏和底部导航区域。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    // 获取应用主窗口\n    let windowClass: window.Window = windowStage.getMainWindowSync();\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    try {\n      // 隐藏状态栏\n      windowClass.setSpecificSystemBarEnabled('status', false);\n      // 隐藏底部导航区域\n      windowClass.setSpecificSystemBarEnabled('navigationIndicator', false);\n    } catch (exception) {\n      console.error('Failed to obtain isImmersiveLayout. Cause: ' + JSON.stringify(exception));\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取状态栏高度",
      children: "如何获取状态栏高度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态栏为一种特定的避让区域类型，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#avoidareatype7",
        children: "AvoidAreaType"
      }), "中对应为系统栏（TYPE_SYSTEM）类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主窗口全屏时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
        children: "getWindowAvoidArea()"
      }), "获取到包含状态栏的避让区域", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#avoidarea7",
        children: "AvoidArea"
      }), "，间接获取到状态栏的高度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    try {\n      // 获取状态栏避让区高度\n      let statusBarHeight = windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM).topRect.height;\n    } catch (exception) {\n      console.error(`Failed to enable the listener for system avoid area changes. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置窗口背景透明",
      children: "如何设置窗口背景透明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
        children: "setWindowBackgroundColor()"
      }), "接口，传入'#00XXXXXX'（其中X代表任意十六进制数字）或者透明的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
        children: "ColorMetrics"
      }), "实现窗口背景透明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(320080)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E5%A4%9A%E7%AA%97%E6%A8%A1%E5%BC%8F",
          children: "自由多窗"
        }), "的设备上，存在窗口容器，窗口容器背景色覆盖整个窗口区域，包括标题栏和内容区域。调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
          children: "setWindowBackgroundColor()"
        }), "接口仅可设置应用内容背景色，此时会透出窗口容器背景色。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在2in1和Tablet设备上可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowcontainercolor20",
          children: "setWindowContainerColor()"
        }), "接口设置容器透明，在其他设备上暂不支持设置容器背景色。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { ColorMetrics } from '@kit.ArkUI';\nimport { window } from '@kit.ArkUI';\n\nlet storage: LocalStorage = new LocalStorage();\nstorage.setOrCreate('storageSimpleProp', 121);\nwindowClass.loadContent(\"pages/page2\", storage, (err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n  console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);\n  return;\n  }\n  console.info('Succeeded in loading the content.');\n  // 采用ARGB方式\n  let color1: string = '#0000FF33';\n  // 采用ColorMetrics方式\n  let color2: ColorMetrics = ColorMetrics.numeric(0x00112233);\n  try {\n    windowClass?.setWindowBackgroundColor(color1);\n    windowClass?.setWindowBackgroundColor(color2);\n  } catch (exception) {\n    console.error(`Failed to set the background color. Cause code: ${exception.code}, message: ${exception.message}`);\n  };\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何实现横竖屏切换",
      children: "如何实现横竖屏切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要先获取到主窗实例，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation()"
      }), "接口设置窗口方向。更多详细信息请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/window-rotation",
        children: "窗口旋转"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit'\nimport { common } from '@kit.AbilityKit'\nimport { window } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct OrientationTestView {\n  private orientation: number =  1;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private windowClass = (this.context as common.UIAbilityContext).windowStage.getMainWindowSync();\n  setOrientation(orientation: number) {\n    this.windowClass.setPreferredOrientation(orientation).then(() => {\n      console.info('setWindowOrientation: ' + orientation + ' Succeeded.');\n    }).catch((err: BusinessError) => {\n      console.error('setWindowOrientation: ' + orientation + ' Failed. Cause: ' + JSON.stringify(err));\n    })\n  }\n  build() {\n    Column() {\n      Button('changeOrientation')\n        .onClick(() => {\n          this.setOrientation(this.orientation++ % 4 + 1)\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .margin({'top' : 100})\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更多内容请参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-landscape-and-portrait-development",
          children: "最佳实践：横竖屏切换"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#orientation9",
          children: "setPreferredOrientation()入参枚举：Orientation"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何保持屏幕为横屏竖屏不随传感器旋转",
      children: "如何保持屏幕为横屏/竖屏，不随传感器旋转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation()"
      }), "接口设置应用的旋转策略为LANDSCAPE，则应用保持在横屏；设置为PORTRAIT，则应用保持在竖屏；设置为LOCKED时，可以锁定当前应用方向，不随屏幕旋转（不建议使用LOCKED，可能会发生非预期的方向改变）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于单一页面（Navigation）的禁用旋转，可以通过设置组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#preferredorientation19",
        children: "preferredOrientation"
      }), "属性来实现，如果设置为横屏、竖屏、反向横屏或反向竖屏中某一方向，则该页面无法旋转到其他方向，从而实现页面级的旋转禁用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取设备的横竖屏状态",
      children: "如何获取设备的横竖屏状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetdefaultdisplaysync9",
        children: "display.getDefaultDisplaySync()"
      }), "获取当前默认的Display实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["再通过该实例对象获取对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "Orientation"
      }), "属性，以判断当前设备的横竖屏状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Orientation是显示设备当前显示的方向枚举，具体包括以下四种类型："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PORTRAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备当前以竖屏方式显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LANDSCAPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备当前以横屏方式显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PORTRAIT_INVERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备当前以反向竖屏方式显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LANDSCAPE_INVERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备当前以反向横屏方式显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(949437)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation"
      }), "接口设置旋转策略为LANDSCAPE，此时通过以上步骤获取到的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "Orientation"
      }), "属性为反向横屏（即LANDSCAPE_INVERTED），这是因为窗口的方向与屏幕的方向定义不一致。开发者也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#convertorientationandrotation23",
        children: "convertOrientationAndRotation()"
      }), "来获取转换结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { display } from '@kit.ArkUI';\n\nlet displayClass: display.Display | null = null;\ntry {\n  displayClass = display.getDefaultDisplaySync();\n  let orientation = displayClass.Orientation;\n} catch (exception) {\n  console.error(`Failed to get default display. Code: ${exception.code}, message: ${exception.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置应用默认横屏宽高比例",
      children: "如何设置应用默认横屏宽高比例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发中，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setcontentaspectratio21",
        children: "setContentAspectRatio()"
      }), "设置窗口内容布局的比例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(81145)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据相同的ratio参数调整窗口宽高时，窗口宽高会跟随窗口边框装饰尺寸或可见性变化而调整。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowdecorvisible11",
          children: "setWindowDecorVisible"
        }), "将窗口标题栏设置为不可见时，窗口内容区域将占据原本标题栏的高度空间。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过其他接口如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#resize9-1",
          children: "resize"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#resizeasync12",
          children: "resizeAsync"
        }), "设置窗口大小时，不受ratio约束。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 21以前的版本，请使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setaspectratio10",
          children: "setAspectRatio()"
        }), "设置窗口内容布局。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    try {\n      let windowClass = windowStage.getMainWindowSync();\n      let ratio = 1.0;\n      let promise = windowClass.setContentAspectRatio(ratio, true, true);\n      promise.then(() => {\n        console.info('Succeeded in setting aspect ratio of window.');\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to set the aspect ratio of window. Cause code: ${err.code}, message: ${err.message}`);\n      });\n    } catch (exception) {\n      console.error(`Failed to set the aspect ratio of window. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置窗口支持的显示模式supportwindowmode",
      children: "如何设置窗口支持的显示模式supportWindowMode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用开发中， 推荐通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "配置文件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "的supportWindowMode字段设置窗口支持的显示模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportWindowMode支持的取值如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"fullscreen\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全屏模式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"split\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分屏模式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"floating\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "悬浮窗模式"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(697035)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "supportWindowMode字段类型为字符串数组，可缺省，缺省值为[\"fullscreen\", \"split\", \"floating\"]。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
          children: "自由窗口"
        }), "状态下同时配置fullscreen和split时，如果应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "targetAPIVersion"
        }), "小于15，窗口将以悬浮窗模式启动；如果应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "targetAPIVersion"
        }), "大于等于15，窗口将以全屏模式启动。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5配置示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"displayName\": \"$string:EntryAbility_displayName\",\n        \"windowSize\": {\n          \"minWidth\": 320,\n          \"minHeight\": 240\n        },\n        // 控制支持的窗口模式\n        \"supportWindowMode\": [\"fullscreen\", \"split\", \"floating\"],\n        \"launchType\": \"standard\",\n        \"excludeFromMissions\": false\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除以上配置方式外，应用可参考以下几种方式配置窗口支持的模式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-config-m",
          children: "metadata"
        }), "标签配置，name为'ohos.ability.window.supportWindowModeInFreeMultiWindow'，该字段配置仅在自由多窗下生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在启动UIAbility时，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
          children: "StartOptions"
        }), "中的supportWindowModes字段指定窗口是否显示最大化/窗口化/分屏按键。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在启动后，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#setsupportedwindowmodes15",
          children: "setSupportedWindowModes()"
        }), "接口动态修改当前主窗口支持的窗口模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844297)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自由多窗下的可支持窗口模式可以采用多种方法进行配置，配置优先级为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#setsupportedwindowmodes15",
        children: "setSupportedWindowModes"
      }), "接口配置 > 通过StartAbility配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
        children: "StartOption"
      }), "中的SupportWindowMode > 使用metadata配置 > 配置module.json5中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities"
      }), "标签下的SupportWindowMode属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何判断当前窗口是否为自由悬浮窗口模式",
      children: "如何判断当前窗口是否为自由悬浮窗口模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，有以下两种方式可判断应用是否处于自由悬浮窗口模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowstatus12",
            children: "getWindowStatus()"
          }), "直接查询当前的窗口模式。当WindowStatusType为FLOATING时，表示应用处于自由悬浮窗口模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同返回值及对应的窗口模式如下表所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "UNDEFINED"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示APP未定义窗口模式。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FULL_SCREEN"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示APP全屏模式。  ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
                  children: "自由窗口"
                }), "状态下，窗口铺满整个屏幕，默认无dock栏、标题栏和状态栏显示。  可通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#maximize12",
                  children: "maximize()"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#settitleanddockhovershown14",
                  children: "setTitleAndDockHoverShown()"
                }), "配置，当hover到热区时是否显示标题栏和dock栏。  当maximize()和setTitleAndDockHoverShown()接口都调用时，以最后调用设置的效果为准。  非", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
                  children: "自由窗口"
                }), "状态下，窗口铺满整个屏幕，无标题栏和dock栏显示。可通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setspecificsystembarenabled11",
                  children: "setSpecificSystemBarEnabled()"
                }), "配置是否显示状态栏。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MAXIMIZE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示APP窗口最大化模式，在2in1设备中，窗口铺满整个屏幕，有dock栏和状态栏。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MINIMIZE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示APP窗口最小化模式。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FLOATING"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示APP自由悬浮窗口模式。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SPLIT_SCREEN"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "5"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示APP分屏模式。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowstatuschange11",
            children: "on('windowStatusChange')"
          }), "接口监听窗口模式变化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果应用需要在窗口模式发生变化时（例如从全屏切换到悬浮窗）立即做出响应，可以使用此接口监听窗口模式变化，以实现对应业务适配。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('onWindowStageCreate');\n    let windowClass: window.Window = windowStage.getMainWindowSync(); // 获取应用主窗口\n    if (!windowClass) {\n      console.info('windowClass is null');\n    }\n    try {\n      // 注册窗口状态变化监听\n      windowClass.on('windowStatusChange', (windowStatusType: window.WindowStatusType) => {\n        console.info(`status change, new status: ${windowStatusType}`);\n      });\n    } catch (error) {\n      console.error(`status listen err: ${JSON.stringify(error)}`);\n    }\n    // 注意：在合适的时机，例如组件销毁时，记得取消监听\n    // windowClass.off('windowStatusChange');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowstatusdidchange20",
            children: "on('windowStatusDidChange')"
          }), "接口监听窗口模式变化。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用此接口开启窗口模式变化的监听后，当窗口windowStatus发生变化后进行通知（此时窗口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#rect7",
            children: "Rect"
          }), "属性已经完成更新）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { window } from '@kit.ArkUI';\n\ntry {\n  // 请先获取Window实例\n  windowClass.on('windowStatusDidChange', (WindowStatusType) => {\n    console.info(`Succeeded in enabling the listener for window status changes. Data: ${JSON.stringify(WindowStatusType)}`);\n  });\n} catch (exception) {\n  console.error(`Failed to unregister callback. Cause code: ${exception.code}, message: ${exception.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618928)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowstatuschange11",
        children: "on('windowStatusChange')"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowstatusdidchange20",
        children: "on('windowStatusDidChange')"
      }), "均在窗口windowStatus发生变化时进行通知，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowstatuschange11",
        children: "on('windowStatusChange')"
      }), "不保证回调发生时窗口属性更新完成，应用若需要在收到windowStatus变化通知时能够立即获取到变化后的窗口大小、位置，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowstatusdidchange20",
        children: "on('windowStatusDidChange')"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置全局悬浮窗背景色为透明",
      children: "如何设置全局悬浮窗背景色为透明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
        children: "setWindowBackgroundColor()"
      }), "接口，传入'#00XXXXXX'（其中X代表任意十六进制数字）或者透明的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
        children: "ColorMetrics"
      }), "实现窗口背景透明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何判断应用被部分遮挡或完全遮挡",
      children: "如何判断应用被部分遮挡或完全遮挡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前要判断当前窗口是否被遮挡有两个接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowvisibilitychange11",
          children: "on('windowVisibilityChange')"
        }), "：监听窗口可见性，当回调为false时，表示当前窗口不可见，完全被遮挡；当回调返回true时，表示当前窗口可见，但不能区分是部分遮挡还是无遮挡。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onocclusionstatechanged22",
          children: "on('occlusionStateChanged')"
        }), "：监听窗口可见性，返回三种可见状态：无遮挡（表示完全可见，值为0）、部分遮挡（表示部分可见，值为1）、完全遮挡（表示不可见，值为2）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何判断设备是否开启了自由多窗",
      children: "如何判断设备是否开启了自由多窗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#isinfreewindowmode22",
        children: "isInFreeWindowMode()"
      }), "接口查询是否处于自由窗口状态。返回值为true时，表示当前窗口在自由窗口模式，返回值为false时，表示在非自由窗口模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onfreewindowmodechange22",
        children: "on('freeWindowModeChange')"
      }), "接口监听自由窗口模式变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置隐私窗口",
      children: "如何设置隐私窗口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowprivacymode9-1",
        children: "setWindowPrivacyMode()"
      }), "接口设置窗口为隐私模式，设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于画中画和闪控球窗口，其隐私模式跟随父窗口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若需要对隐私窗口进行截图，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#snapshotignoreprivacy18",
        children: "snapshotIgnorePrivacy()"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resizemovewindowto等接口有什么位置大小限制",
      children: "resize、moveWindowTo等接口有什么位置/大小限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#resize9-1",
        children: "resize()"
      }), "接口调整窗口大小时，窗口尺寸大小范围会受到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#windowlimits11",
        children: "WindowLimits"
      }), "限制，具体尺寸限制范围可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowlimits11",
        children: "getWindowLimits"
      }), "接口进行查询。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#movewindowto9-1",
        children: "moveWindowTo()"
      }), "接口调整窗口位置对窗口位置无限制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(967534)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "resize接口其他限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
          children: "自由窗口"
        }), "状态下，窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，WindowStatusType可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowstatus12",
          children: "getWindowStatus()"
        }), "获取）时调用生效，否则抛出错误码1300002。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在非", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
          children: "自由窗口"
        }), "状态下，主窗口调用不生效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "moveWindowTo接口其他限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不建议在除自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，WindowStatusType可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowstatus12",
          children: "getWindowStatus()"
        }), "获取）外的其他窗口模式下使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
          children: "自由窗口"
        }), "状态下，窗口相对于屏幕移动；在非自由窗口状态下，窗口相对于父窗口移动。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若需在非自由窗口状态下实现相对于屏幕的移动，请使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#movewindowtoglobal15",
          children: "moveWindowToGlobal()"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在非", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
          children: "自由窗口"
        }), "状态下，主窗口调用不生效。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置或取消水印",
      children: "如何设置或取消水印"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["进程级水印：可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-f/arkts-apis-window-f#windowsetwatermarkimageforappwindows21",
          children: "setWatermarkImageForAppWindows()"
        }), "设置或取消应用进程级水印，针对当前应用进程的窗口生效，包括后续该进程新创建的窗口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何将创建的窗口移动到扩展屏",
      children: "如何将创建的窗口移动到扩展屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用可通过主动调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#movewindowtoglobal15",
          children: "moveWindowToGlobal()"
        }), "接口将当前窗口移动到扩展屏幕，通过配置接口参数中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#moveconfiguration15",
          children: "MoveConfiguration"
        }), "指定当前窗口期望移动的目标屏幕。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用也可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#startmoving14",
          children: "startMoving()"
        }), "接口通过鼠标或触摸点拖拽将当前窗口移动到目标屏幕上。该接口仅在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
          children: "onTouch"
        }), "事件（其中，事件类型必须为TouchType.Down）的回调方法中调用才会有移动效果，成功调用此接口后，窗口将跟随鼠标或触摸点移动。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子窗口背景如何实现半透明效果",
      children: "子窗口背景如何实现半透明效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["子窗口可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowbackgroundcolor9",
        children: "setWindowBackgroundColor()"
      }), "接口，传入'#XXYYYYYY'（其中XX代表任意十六进制且不为0数值，Y表示任意十六进制数字）或者半透明的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
        children: "ColorMetrics"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { ColorMetrics } from '@kit.ArkUI';\nimport { window } from '@kit.ArkUI';\n\nlet storage: LocalStorage = new LocalStorage();\nstorage.setOrCreate('storageSimpleProp', 121);\nwindowClass.loadContent(\"pages/page2\", storage, (err: BusinessError) => {\n  let errCode: number = err.code;\n  if (errCode) {\n  console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);\n  return;\n  }\n  console.info('Succeeded in loading the content.');\n  let color1: string = '#8800FF33'; // 采用ARGB方式\n  let color2: ColorMetrics = ColorMetrics.numeric(0x88112233);  // 采用ColorMetrics方式\n  try {\n    windowClass?.setWindowBackgroundColor(color1);\n    windowClass?.setWindowBackgroundColor(color2);\n  } catch (exception) {\n    console.error(`Failed to set the background color. Cause code: ${exception.code}, message: ${exception.message}`);\n  };\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何设置页面级亮度",
      children: "如何设置页面级亮度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前不支持设置页面级亮度，仅支持设置窗口级亮度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用若想实现页面级亮度调整，可以在进入特定页面时在主窗调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowbrightness9-1",
        children: "setWindowBrightness()"
      }), "调整亮度，在退出特定页面时，在主窗调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowbrightness9-1",
        children: "setWindowBrightness()"
      }), "传入-1，恢复为系统屏幕亮度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何恢复系统屏幕亮度",
      children: "如何恢复系统屏幕亮度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对Phone、Tablet设备，应用可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowbrightness9-1",
        children: "setWindowBrightness()"
      }), "传入-1，即可恢复为系统屏幕亮度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对PC/2in1设备，由于窗口亮度和系统亮度已实现归一化，故调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowbrightness9-1",
        children: "setWindowBrightness()"
      }), "接口后将直接改变系统亮度，目前尚无恢复至调用前窗口亮度的方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何正常获取顶层窗口",
      children: "如何正常获取顶层窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-f/arkts-apis-window-f#windowgetlastwindow9",
        children: "getLastWindow()"
      }), "获取应用最顶层窗口时，获取到了正在销毁的子窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#destroywindow9",
        children: "destroyWindow()"
      }), "销毁子窗时，未等待其销毁完成即调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-f/arkts-apis-window-f#windowgetlastwindow9",
        children: "getLastWindow()"
      }), "，导致获取到了正在销毁的子窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-f/arkts-apis-window-f#windowgetlastwindow9",
        children: "getLastWindow()"
      }), "获取应用最顶层窗口前，应确保子窗销毁、窗口创建等操作已完成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n\nlet lastWindow: window.Window | undefined = undefined;\n// 不建议写法\ntry {\n  // 请先获取window实例\n  windowClass.destroyWindow();\n  try {\n    window.getLastWindow(this.context).then((topWindow) => {\n      lastWindow = topWindow;\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to obtain the last window. Cause code: ${err.code}, message: ${err.message}`);\n    });\n  } catch (exception) {\n    console.error(`Failed to obtain the last window. Cause code: ${exception.code}, message: ${exception.message}`);\n  }\n} catch (exception) {\n  console.error(`Failed to destroy. Cause code: ${exception.code}, message: ${exception.message}`);\n};\n\n// 建议写法\ntry {\n  // 请先获取window实例\n  windowClass.destroyWindow().then(() => {\n    try {\n      window.getLastWindow(this.context).then((topWindow) => {\n        lastWindow = topWindow;\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to obtain the last window. Cause code: ${err.code}, message: ${err.message}`);\n      });\n    } catch (exception) {\n      console.error(`Failed to obtain the last window. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to destroy the window. Cause code: ${err.code}, message: ${err.message}`);\n  });\n} catch (exception) {\n  console.error(`Failed to destroy. Cause code: ${exception.code}, message: ${exception.message}`);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getwindowproperties接口返回值中的窗口类型type字段不符合预期",
      children: "getWindowProperties接口返回值中的窗口类型（type字段）不符合预期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因为历史问题，主窗场景调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
        children: "getWindowProperties()"
      }), "获取到的窗口类型即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowtype7",
        children: "WindowType"
      }), "为TYPE_SYSTEM_ALERT而不是TYPE_MAIN。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统的后续API版本中将提供新的字段修正。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内创建窗口时需要指明窗口类型，开发者可以直接感知窗口类型，不必要通过此接口主动获取。"
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
320080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
697035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
81145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
967534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
949437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
618928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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