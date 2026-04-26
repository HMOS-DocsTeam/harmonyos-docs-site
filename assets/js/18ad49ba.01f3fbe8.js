"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["728410"], {
4452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_status_bar_extension_kit_guide_statusbar_extension_guide_statusbar_extension_guide_md_18a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-status-bar-extension-kit-guide-statusbar-extension-guide-statusbar-extension-guide-md-18a.json
var site_docs_system_basicfun_status_bar_extension_kit_guide_statusbar_extension_guide_statusbar_extension_guide_md_18a_namespaceObject = JSON.parse('{"id":"system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide/statusbar-extension-guide","title":"应用接入状态栏","description":"应用接入状态栏之后，状态栏会显示应用自定义的图标，图标提供左键显示自定义弹窗以及右键显示菜单的功能；应用退出时，状态栏图标会随着应用进程的销毁而消失。","source":"@site/docs/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide/statusbar-extension-guide.md","sourceDirName":"system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide","slug":"/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide/","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用接入状态栏","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/statusbar-extension-guide","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DeskTop Extension Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-introduction/"},"next":{"title":"应用接入快捷栏","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide/statusbar-extension-guide.md


const frontMatter = {
	title: '应用接入状态栏',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/statusbar-extension-guide',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用接入状态栏';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "完整示例代码",
  "id": "完整示例代码",
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
        id: "应用接入状态栏",
        children: "应用接入状态栏"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入状态栏之后，状态栏会显示应用自定义的图标，图标提供左键显示自定义弹窗以及右键显示菜单的功能；应用退出时，状态栏图标会随着应用进程的销毁而消失。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.2(22)版本开始支持更新状态栏图标hover时显示内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下列出应用接入状态栏的相关API，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager",
        children: "接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505367)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DeskTop Extension Kit（桌面拓展服务）相关API仅在2in1设备上生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 应用接入状态栏相关功能接口介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageraddtostatusbar",
              children: "addToStatusBar"
            }), "(context: common.Context, statusBarItem: StatusBarItem): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用图标到状态栏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerremovefromstatusbar",
              children: "removeFromStatusBar"
            }), "(context: common.Context): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除状态栏的应用图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatequickoperationheight",
              children: "updateQuickOperationHeight"
            }), "(context: common.Context, height: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新状态栏图标左键弹窗应用定制区域的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenu",
              children: "updateStatusBarMenu"
            }), "(context: common.Context, statusBarGroupMenus: StatusBarGroupMenu[]): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新接入状态栏图标的右键菜单内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbaricon",
              children: "updateStatusBarIcon"
            }), "(context: common.Context, statusBarIcon: StatusBarIcon): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新状态栏图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbarhovertips",
              children: "updateStatusBarHoverTips"
            }), "(context: common.Context, hoverTips: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新状态栏图标hover时显示内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageronstatusbariconclick",
              children: "on"
            }), "(type: 'statusBarIconClick', callback: Callback<emitter.EventData>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听状态栏图标点击事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageroffstatusbariconclick",
              children: "off"
            }), "(type: 'statusBarIconClick', callback?: Callback<emitter.EventData>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销状态栏图标点击事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageronrightmenuclick",
              children: "on"
            }), "(type: 'rightMenuClick', callback: Callback<emitter.EventData>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听状态栏右键菜单点击事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageroffrightmenuclick",
              children: "off"
            }), "(type: 'rightMenuClick', callback?: Callback<emitter.EventData>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销状态栏右键菜单点击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { statusBarManager, StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';\nimport { UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { emitter } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个MyStatusBarViewAbility.ets文件（例如在entry/src/main/ets/statusbarviewextensionability文件夹下），同时新建一个StatusBarPage的页面（例如在entry/src/main/ets/pages目录下），该页面用于在状态栏图标的左键业务弹窗中显示，然后构建自定义的StatusBarViewExtensionAbility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let TAG = 'MyStatusBarViewExtAbility';\nexport default class MyStatusBarViewAbility extends StatusBarViewExtensionAbility {\n  onCreate() {\n    console.info(TAG, `onCreate`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionCreate, want: ${want.abilityName}`);\n    // pages/StatusBarPage为状态栏图标左键业务弹窗显示的页面\n    session.loadContent('pages/StatusBarPage');\n  }\n\n  onForeground() {\n    console.info(TAG, `onForeground`);\n  }\n\n  onBackground() {\n    console.info(TAG, `onBackground`);\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionDestroy`);\n  }\n\n  onDestroy() {\n    console.info(TAG, `onDestroy`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在MyStatusBarViewAbility所在模块下的module.json5文件中配置状态栏扩展Ability的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"name\": \"MyStatusBarViewAbility\",\n    \"icon\": \"$media:startIcon\",\n    \"description\": \"statusBar\",\n    \"type\": \"statusBarView\",\n    \"exported\": true,\n    // 此处为MyStatusBarViewAbility类所在的文件路径\n    \"srcEntry\": \"./ets/statusbarviewextensionability/MyStatusBarViewAbility.ets\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在对应模块的rawfile文件夹（例如entry/src/main/resources/rawfile）下预置两张24", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
            children: "vp"
          }), " * 24vp尺寸的图片（例如本示例中testWhite.png和testBlack.png两张图片），在页面组件内(如：index.ets)配置应用接入状态栏显示的图标信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (!context) {\n  console.error('getHostContext failed');\n  return;\n}\n// 获取resourceManager资源管理器\nconst resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n\n// 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp\nconst whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');\nconst whiteBuffer = whiteFileData.buffer;\nconst whiteImageSource = image.createImageSource(whiteBuffer);\nlet whitePixelMap = await whiteImageSource.createPixelMap();\n\n// 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp\nconst blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');\nconst blackBuffer = blackFileData.buffer;\nconst blackImageSource = image.createImageSource(blackBuffer);\nlet blackPixelMap = await blackImageSource.createPixelMap();\n\n// 构建图标信息\nlet icon: statusBarManager.StatusBarIcon = {\n  white: whitePixelMap,\n  black: blackPixelMap\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置状态栏左键点击弹窗相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建左键业务弹窗信息\nlet operation: statusBarManager.QuickOperation = {\n  // 此处abilityName为上述配置的module.json5中配置的自定义StatusBarViewExtensionAbility名称\n  abilityName: \"MyStatusBarViewAbility\",\n  title: \"测试Demo\",\n  height: 300,\n  // 可缺省\n  moduleName: 'entry'\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）配置状态栏右键菜单内容信息，可在状态栏图标的右键菜单中增加自定义菜单选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建右键菜单项内容\nlet subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];\nlet subMenuItemAction: statusBarManager.StatusBarMenuAction = {\n  abilityName: \"EntryAbility\"\n}\nlet subMenu: statusBarManager.StatusBarSubMenuItem = {\n  subTitle: \"子菜单项\",\n  menuAction: subMenuItemAction\n}\nsubMenus.push(subMenu);\n\nlet statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];\nlet menuItem: statusBarManager.StatusBarMenuItem = {\n  title: \"一级菜单项\",\n  // 一级menuAction和subMenu两项不可都缺省\n  subMenu: subMenus\n};\nstatusBarMenuItems.push(menuItem);\n\nlet statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];\nstatusBarGroupMenus.push(statusBarMenuItems);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "整合配置信息，接入状态栏，显示应用图标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建添加到状态栏的图标详细信息\nlet item: statusBarManager.StatusBarItem = {\n  icons: icon,\n  quickOperation: operation,\n  // 该参数可选\n  statusBarGroupMenu: statusBarGroupMenus\n};\n\ntry {\n  statusBarManager.addToStatusBar(context, item);\n} catch (error) {\n  console.error(`addToStatusBar failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用接入状态栏之后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenu",
            children: "updateStatusBarMenu"
          }), "接口更新状态栏的右键菜单。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建右键菜单项内容\nlet subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];\nlet subMenuItemAction: statusBarManager.StatusBarMenuAction = {\n  abilityName: \"EntryAbility\"\n}\nlet subMenu: statusBarManager.StatusBarSubMenuItem = {\n  subTitle: \"二级菜单项\",\n  menuAction: subMenuItemAction\n}\nsubMenus.push(subMenu);\n\nlet statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];\nlet menuItem: statusBarManager.StatusBarMenuItem = {\n  title: \"一级菜单项\",\n  // 一级menuAction和subMenu两项不可都缺省\n  subMenu: subMenus\n};\nstatusBarMenuItems.push(menuItem);\n\nlet statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];\nstatusBarGroupMenus.push(statusBarMenuItems);\n\nlet context: Context | undefined = this.getUIContext().getHostContext();\nif (!context) {\n  console.error('getHostContext failed');\n  return;\n}\ntry {\n  statusBarManager.updateStatusBarMenu(context, statusBarGroupMenus);\n} catch (error) {\n  console.error(`updateStatusBarMenu failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用接入状态栏之后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatequickoperationheight",
            children: "updateQuickOperationHeight"
          }), "接口更新状态栏图标左键业务弹窗的高度。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (!context) {\n  console.error('getHostContext failed');\n  return;\n}\nlet height = 200;\nstatusBarManager.updateQuickOperationHeight(context, height);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用接入状态栏之后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbaricon",
            children: "updateStatusBarIcon"
          }), "接口将状态栏中对应的应用图标进行更改。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (!context) {\n  console.error('getHostContext failed');\n  return;\n}\n// 获取resourceManager资源管理器\nconst resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n\n// 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp\nconst whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');\nconst whiteBuffer = whiteFileData.buffer;\nconst whiteImageSource = image.createImageSource(whiteBuffer);\nlet whitePixelMap = await whiteImageSource.createPixelMap();\n\n// 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp\nconst blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');\nconst blackBuffer = blackFileData.buffer;\nconst blackImageSource = image.createImageSource(blackBuffer);\nlet blackPixelMap = await blackImageSource.createPixelMap();\n\n// 构建图标信息\nlet icons: statusBarManager.StatusBarIcon = {\n  white: whitePixelMap,\n  black: blackPixelMap\n}\nstatusBarManager.updateStatusBarIcon(context, icons);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用接入状态栏之后，且未指定图标", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerquickoperation",
            children: "QuickOperation"
          }), "的abilityName可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageronstatusbariconclick",
            children: "on"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageroffstatusbariconclick",
            children: "off"
          }), "接口自定义状态栏图标左键业务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private onStatusBarIconClick = (eventData: emitter.EventData) => {\n  // 自定义图标点击业务\n  let data = eventData.data;\n  if (data) {\n    switch (data['iconClickType']) {\n      case 'leftClickType':\n        // 自定义左键点击业务\n        break;\n      default:\n        break;\n    }\n  }\n}\n\n// 监听状态栏图标点击事件\nstatusBarManager.on('statusBarIconClick', this.onStatusBarIconClick);\n\n// 注销状态栏图标点击事件\nstatusBarManager.off('statusBarIconClick', this.onStatusBarIconClick);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用接入状态栏之后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenu",
            children: "updateStatusBarMenu"
          }), "接口，指定菜单", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerstatusbarmenuaction",
            children: "StatusBarMenuAction"
          }), "的notifyOnly使能和menuCode菜单项标识，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageronstatusbariconclick",
            children: "on"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanageroffstatusbariconclick",
            children: "off"
          }), "接口自定义状态栏图标右键菜单点击业务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private onRightMenuClick = (eventData: emitter.EventData) => {\n  // 自定义图标右键菜单点击业务\n  let data = eventData.data;\n  if (data) {\n    let menuCode = data['menuCode'] as string;\n    // 处理点击菜单项业务\n  }\n}\n\n// 监听状态栏图标右键菜单点击事件\nstatusBarManager.on('rightMenuClick', this.onRightMenuClick);\n\n// 注销状态栏图标右键菜单点击事件\nstatusBarManager.off('rightMenuClick', this.onRightMenuClick);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）应用接入状态栏之后，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager#statusbarmanagerupdatestatusbarhovertips",
            children: "updateStatusBarHoverTips"
          }), "接口可以自定义图标hover时的显示内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (!context) {\n  console.error('getHostContext failed');\n  return;\n}\nlet hoverTips: string = 'hoverTips';\ntry {\n  await statusBarManager.updateStatusBarHoverTips(context, hoverTips);\n} catch (err) {\n  console.error(`updateStatusBarHoverTips ${err.message} ${err.code}`)\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例代码",
      children: "完整示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/status-bar-extension-kit-samplecode",
        children: "状态栏开放服务"
      }), "。"]
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
505367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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