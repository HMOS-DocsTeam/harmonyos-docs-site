"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["962683"], {
605908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_status_bar_extension_kit_guide_desktop_quickbar_extension_guide_desktop_quickbar_extension_guide_md_720_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-status-bar-extension-kit-guide-desktop-quickbar-extension-guide-desktop-quickbar-extension-guide-md-720.json
var site_docs_system_basicfun_status_bar_extension_kit_guide_desktop_quickbar_extension_guide_desktop_quickbar_extension_guide_md_720_namespaceObject = JSON.parse('{"id":"system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/desktop-quickbar-extension-guide","title":"应用接入快捷栏","description":"从6.0.2(22)开始，支持应用接入快捷栏。","source":"@site/docs/system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/desktop-quickbar-extension-guide.md","sourceDirName":"system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide","slug":"/system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"应用接入快捷栏","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/desktop-quickbar-extension-guide","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用接入状态栏","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/statusbar-extension-guide/"},"next":{"title":"FAST Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/desktop-quickbar-extension-guide.md


const frontMatter = {
	title: '应用接入快捷栏',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/desktop-quickbar-extension-guide',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '应用接入快捷栏';

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
  "value": "快捷栏菜单分组",
  "id": "快捷栏菜单分组",
  "level": 2
}, {
  "value": "快捷栏自定义窗口分组",
  "id": "快捷栏自定义窗口分组",
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
        id: "应用接入快捷栏",
        children: "应用接入快捷栏"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.2(22)开始，支持应用接入快捷栏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快捷栏指的是PC/2in1设备的屏幕底部的图标区域，具体如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870944)/* ["default"] */.A) + "",
        width: "517",
        height: "345"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入快捷栏之后，快捷栏的应用图标菜单会显示应用自定义的菜单项，应用可以添加、删除、更新、查询菜单项，具体效果如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(317575)/* ["default"] */.A) + "",
        width: "204",
        height: "399"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下列出应用接入快捷栏菜单的相关API，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager",
        children: "接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102113)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DeskTop Extension Kit相关API仅在2in1设备上生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 应用接入快捷栏菜单相关功能接口介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagergetcustomcategories",
              children: "getCustomCategories"
            }), "(context: common.Context): Promise<CustomCategory[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有在快捷栏菜单定义的分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanageraddcustomcategory",
              children: "addCustomCategory"
            }), "(context: common.Context, categoryName: string): Promise<CustomCategory>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加快捷栏菜单分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerupdatecustomcategory",
              children: "updateCustomCategory"
            }), "(context: common.Context, category: CustomCategory): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新快捷栏菜单分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerdeletecustomcategory",
              children: "deleteCustomCategory"
            }), "(context: common.Context, categoryId: number): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除快捷栏菜单分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagergettasksfromcategory",
              children: "getTasksFromCategory"
            }), "(context: common.Context, categoryId: number): Promise<QuickTask[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取某个快捷栏菜单的分组下的所有任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanageraddquicktask",
              children: "addQuickTask"
            }), "(context: common.Context, categoryId: number, taskInfo: QuickTaskInfo): Promise<QuickTask>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加快捷栏菜单任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerupdatequicktask",
              children: "updateQuickTask"
            }), "(context: common.Context, task: QuickTask): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新快捷栏菜单任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerdeletequicktask",
              children: "deleteQuickTask"
            }), "(context: common.Context, taskId: number): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除快捷栏菜单任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanageraddquickbargroup",
              children: "addQuickBarGroup"
            }), "(context: common.Context, group: QuickBarGroup): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加快捷栏分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerdeletequickbargroup",
              children: "deleteQuickBarGroup"
            }), "(context: common.Context, , groupKey: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除快捷栏分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagergetquickbargroups",
              children: "getQuickBarGroup"
            }), "(context: common.Context): Promise<QuickBarGroup[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有分组信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagersetwindowtogroup",
              children: "setWindowToGroup"
            }), "(context: common.Context, , windowId:string, groupKey?: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给分组增加窗口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快捷栏菜单分组",
      children: "快捷栏菜单分组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { quickBarManager }  from '@kit.DeskTopExtensionKit';\nimport { UIExtensionContentSession, Want, UIAbility } from '@kit.AbilityKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个TestAbility.ets文件（例如在entry/src/main/ets/entryability文件夹下），同时新建一个TestIndex的页面（例如在entry/src/main/ets/pages目录下），点击图标菜单任务后可跳转到该页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let TAG = 'TestAbility';\nexport default class TestAbility extends UIAbility {\n  onCreate() {\n    console.info(TAG, `onCreate`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionCreate, want: ${want.abilityName}`);\n    // pages/TestIndex为点击菜单任务拉起的页面\n    session.loadContent('pages/TestIndex');\n  }\n\n  onForeground() {\n    console.info(TAG, `onForeground`);\n  }\n\n  onBackground() {\n    console.info(TAG, `onBackground`);\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionDestroy`);\n  }\n\n  onDestroy() {\n    console.info(TAG, `onDestroy`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在TestAbility所在模块下的module.json5文件中配置的Ability的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"TestAbility\",\n  \"srcEntry\": \"./ets/entryability/TestAbility.ets\",\n  \"description\": \"$string:EntryAbility_desc\",\n  \"icon\": \"$media:layered_image\",\n  \"label\": \"$string:EntryAbility_label\",\n  \"startWindowIcon\": \"$media:startIcon\",\n  \"startWindowBackground\": \"$color:start_window_background\",\n  \"exported\": true,\n  \"skills\": [\n    {\n      \"entities\": [\n        \"entity.system.home\"\n      ],\n      \"actions\": [\n        \"action.system.home\"\n      ]\n    }\n  ],\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在页面组件内(如：TestIndex.ets)中调用接口完成如下步骤。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanageraddcustomcategory",
            children: "addCustomCategory"
          }), "接口添加一个快捷栏菜单分组，添加分组后才可以往分组里添加任务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\ntry {\n  const res = await quickBarManager.addCustomCategory(context, '最近任务');\n  console.info(`customCategory info: ${JSON.stringify(res)}`);\n} catch (error) {\n  console.error(`addCustomCategory failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加分组后可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanageraddquicktask",
            children: "addQuickTask"
          }), "接口在分组中添加快捷栏菜单任务。打开应用图标在快捷栏的右键菜单，即可看到添加后对应的菜单项。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\n// 获取resourceManager资源管理器\nconst resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n// 创建任务的pixelMap，需在资源rawfile文件夹中预置testImage.png图片\nconst fileData = resourceMgr.getRawFileContentSync('testImage.png');\nconst imageSource = image.createImageSource(fileData.buffer);\nconst imagePixelMap = await imageSource.createPixelMap();\nlet parameters: quickBarManager.ParameterItem = {\n  key: 'testKey',\n  value: 'testValue'\n}\n// 构建task任务信息\nconst task: quickBarManager.QuickTaskInfo = {\n  taskName: '测试任务名称',\n  abilityName: 'TestAbility',\n  // 参数可选\n  moduleName: 'entry',\n  // 参数可选\n  taskIcon: imagePixelMap,\n  // 参数可选\n  taskDetail: '任务的描述',\n  // 参数可选\n  parameters: [parameters]\n}\n\ntry {\n  // 获取所有的分组信息，将任务添加到想要的分组中\n  const categoryList = await quickBarManager.getCustomCategories(context);\n  // 选择添加任务到第一个分组中\n  const res = await quickBarManager.addQuickTask(context, categoryList[0].categoryId, task);\n  console.info(`quickTask info: ${JSON.stringify(res)}`);\n} catch (error) {\n  console.error(`addQuickTask failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagergetcustomcategories",
            children: "getCustomCategories"
          }), "接口获取定义所有分组信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\ntry {\n  const res = await quickBarManager.getCustomCategories(context);\n  console.info(`customCategoryList info: ${JSON.stringify(res)}`);\n} catch (error) {\n  console.error(`getCustomCategories failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagergettasksfromcategory",
            children: "getTasksFromCategory"
          }), "接口获取分组下的所有任务信息，此处获取了第一个分组下的所有任务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\ntry {\n  // 获取所有的分组信息，用于获取分组下所有的任务\n  const category = await quickBarManager.getCustomCategories(context);\n  // 选择获取第一个分组下的所有任务\n  const res = await quickBarManager.getTasksFromCategory(context, category[0].categoryId);\n  console.info(`quickTaskList info: ${JSON.stringify(res)}`);\n} catch (error) {\n  console.error(`getTasksFromCategory failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerupdatecustomcategory",
            children: "updateCustomCategory"
          }), "接口更新快捷栏菜单分组信息，此处更新了分组的名称。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\nconst category: quickBarManager.CustomCategory = {\n  categoryId: 1,\n  categoryName: 'demo'\n}\ntry {\n  await quickBarManager.updateCustomCategory(context, category);\n} catch (error) {\n  console.error(`updateCustomCategory failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerupdatequicktask",
            children: "updateQuickTask"
          }), "接口更新快捷栏菜单任务信息。以下示例代码以更新任务的图标信息为例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\n// 获取resourceManager资源管理器\nconst resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n// 创建任务的pixelMap，需在资源rawfile文件夹中预置testUpdateImage.png图片\nconst fileData = resourceMgr.getRawFileContentSync('testUpdateImage.png');\nconst imageSource = image.createImageSource(fileData.buffer);\nconst imagePixelMap = await imageSource.createPixelMap();\nlet parameters: quickBarManager.ParameterItem = {\n  key: 'testKey',\n  value: 'testValue'\n}\n// 构建task任务信息\nconst taskInfo: quickBarManager.QuickTaskInfo = {\n  taskName: '测试任务名称',\n  abilityName: 'TestAbility',\n  // 参数可选\n  moduleName: 'entry',\n  // 参数可选\n  taskIcon: imagePixelMap,\n  // 参数可选\n  taskDetail: '任务的描述',\n  // 参数可选\n  parameters: [parameters]\n}\n\nconst task: quickBarManager.QuickTask = {\n  taskId: 1,\n  categoryId: 1,\n  taskInfo: taskInfo\n}\n\ntry {\n  await quickBarManager.updateQuickTask(context,task);\n} catch (error) {\n  console.error(`updateQuickTask failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerdeletequicktask",
            children: "deleteQuickTask"
          }), "接口删除不需要的快捷栏菜单任务，此处删除了taskId为1的任务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\ntry {\n  // 删除taskId为1的任务\n  await quickBarManager.deleteQuickTask(context, 1);\n} catch (error) {\n  console.error(`deleteQuickTask failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerdeletecustomcategory",
            children: "deleteCustomCategory"
          }), "接口删除不需要的快捷栏菜单分组，此处删除了categoryId为1的分组，它的所有任务也会被一起删除。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: Context | undefined = this.getUIContext().getHostContext();\nif (context === undefined) {\n  return;\n}\ntry {\n  // 删除categoryId为1的分组\n  await quickBarManager.deleteCustomCategory(context, 1);\n} catch (error) {\n  console.error(`deleteCustomCategory failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快捷栏自定义窗口分组",
      children: "快捷栏自定义窗口分组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry/src/main/ets/pages目录下创建一个空页面文件，并增加一个按钮控件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Button('button')\n      .onClick(e => {\n        // 处理点击事件\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在按钮控件的onClick方法中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanageraddquickbargroup",
            children: "addQuickBarGroup"
          }), "接口，增加快捷栏分组。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { quickBarManager } from '@kit.DeskTopExtensionKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n// 获取资源管理器\nconst resourceMgr: resourceManager.ResourceManager = getContext().resourceManager;\n// 从rawfile目录中获取图片\nconst whiteFileData = resourceMgr.getRawFileContentSync('icon.png');\nconst whiteImageSource = image.createImageSource(whiteFileData.buffer);\nconst imagePixelMap = await whiteImageSource.createPixelMap();\n try {\n   // 增加分组\n   await quickBarManager.addQuickBarGroup(getContext(), {\n     groupKey: 'group_one', // 分组名\n     groupIcon: imagePixelMap // 分组图标\n   });\n } catch (error) {\n   console.error(`error code: ${error.code}, error message: ${error.message}`);\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新增加一个按钮控件，并在onClick方法中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagergetquickbargroups",
            children: "getQuickBarGroups"
          }), "接口，获取所有分组信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { quickBarManager } from '@kit.DeskTopExtensionKit';\n\ntry {\n  // 获取所有分组\n  const groups = await quickBarManager.getQuickBarGroups(getContext());\n} catch (error) {\n  console.error(`error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新增加一个按钮控件，并在onClick方法中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagersetwindowtogroup",
            children: "setWindowToGroup"
          }), "接口，给分组增加窗口信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { quickBarManager } from '@kit.DeskTopExtensionKit';\n\ntry {\n  // 将id为80的窗口，增加到分组名为 group_one 的分组\n  await quickBarManager.setWindowToGroup(getContext(), '80', 'group_one');\n} catch (error) {\n  console.error(`deleteCustomCategory failed. error code: ${error.code}, error message: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新增加一个按钮控件，并在onClick方法中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager#quickbarmanagerdeletequickbargroup",
            children: "deleteQuickBarGroup"
          }), "接口，删除快捷栏分组。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { quickBarManager } from '@kit.DeskTopExtensionKit';\n\ntry {\n  // 删除分组名为group_one的分组\n  await quickBarManager.deleteQuickBarGroup(getContext(), 'group_one');\n} catch (error) {\n  console.error(`error code: ${error.code}, error message: ${error.message}`);\n}\n"
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
317575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798800-6637249b84bc5d43f382da500d4f56db.png");

},
870944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478449-3df499b76cb0f84fd4deb0d65eab6456.png");

},
102113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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