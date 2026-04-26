"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["874947"], {
312757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_floatingball_guide_floatingball_guide_md_3ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-floatingball-guide-floatingball-guide-md-3ea.json
var site_docs_arkui_window_manager_floatingball_guide_floatingball_guide_md_3ea_namespaceObject = JSON.parse('{"id":"arkui/window-manager/floatingball-guide/floatingball-guide","title":"全局闪控球开发指导","description":"场景介绍","source":"@site/docs/arkui/window-manager/floatingball-guide/floatingball-guide.md","sourceDirName":"arkui/window-manager/floatingball-guide","slug":"/arkui/window-manager/floatingball-guide/","permalink":"/harmonyos-docs-site/arkui/window-manager/floatingball-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"全局闪控球开发指导","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/floatingball-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"画中画常见问题","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pip-faqs/"},"next":{"title":"智慧多窗简介","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/floatingball-guide/floatingball-guide.md


const frontMatter = {
	title: '全局闪控球开发指导',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/floatingball-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '全局闪控球开发指导';

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
  "value": "交互方式",
  "id": "交互方式",
  "level": 2
}, {
  "value": "闪控球规格与样式布局",
  "id": "闪控球规格与样式布局",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "全局闪控球开发指导",
        children: "全局闪控球开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "闪控球是一种在设备屏幕上悬浮的非全屏应用窗口，为应用提供临时的全局能力，完成跨应用交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以将关键信息以小窗（闪控球）模式呈现。切换为小窗（闪控球）模式后，用户可以进行其他界面操作，提升使用体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914358)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始，支持使用闪控球能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持在DevEco Studio 6.0.1 Release及以上版本的模拟器中使用闪控球相关功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基于安全考虑，仅允许应用在前台时启动闪控球，并且需要具有", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionuse_float_ball",
          children: "ohos.permission.USE_FLOAT_BALL"
        }), "权限，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl#",
          children: "申请受限权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅对跨应用的题目搜索、账单记录、商品比价、抢单、翻译场景，以及金融类应用的实时盯盘场景开放此权限。接入后需在以上场景范围内使用，否则将会进行相关处罚与限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个应用只能启动一个闪控球，同一个设备最多同时存在两个闪控球，在超出闪控球最大个数限制时，打开新的闪控球会替换最早启动的闪控球。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持手机和平板设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是闪控球功能的常用接口，更多接口及使用参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-floatingball/js-apis-floatingball",
        children: "@ohos.window.floatingBall (闪控球窗口)"
      }), " 。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isFloatingBallEnabled(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前设备是否支持闪控球功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "create(config: FloatingBallConfiguration): Promise<FloatingBallController>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建闪控球控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startFloatingBall(params: FloatingBallParams): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动闪控球。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateFloatingBall(params: FloatingBallParams): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新闪控球。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopFloatingBall(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止闪控球。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'stateChange', callback: Callback<FloatingBallState>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启闪控球生命周期状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'stateChange', callback?: Callback<FloatingBallState>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭闪控球生命周期状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'click', callback: Callback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启闪控球点击事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'click', callback?: Callback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭闪控球点击事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getFloatingBallWindowInfo(): Promise<FloatingBallWindowInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取闪控球窗口信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restoreMainWindow(want: Want): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "恢复应用主窗口，加载指定页面。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "交互方式",
      children: "交互方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "闪控球提供以下交互方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单击闪控球：触发闪控球点击事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长按闪控球：长按闪控球震动变为待删除态，可以点击图标单个删除或全部删除。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["拖动闪控球：可以手动拖拽闪控球改变位置，拖拽时自动避让状态栏、固定态软键盘（改变软键盘为固定态或者悬浮态的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#changeflag10",
          children: "输入法服务"
        }), "）、导航条等其他组件，设备处于横屏场景时不会自动避让输入法。拖拽松手时闪控球自动吸附在最近的侧边，拖拽到垃圾桶区域（底部中部区域）松手即可删除。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "闪控球位置记忆：关闭闪控球会记录当前位置，下一次打开功能时自动展示在上次关闭时的位置。旋转屏幕或重启设备会恢复到默认位置，默认位置位于屏幕右上侧。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "闪控球规格与样式布局",
      children: "闪控球规格与样式布局"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前支持四种闪控球模板布局，具体可见闪控球模板类型枚举", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-floatingball/js-apis-floatingball#floatingballtemplate",
        children: "FloatingBallTemplate"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "静态布局：支持图标和标题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "普通文本布局：支持标题和内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "强调文本布局：支持图标、标题和内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "纯文本布局：仅支持标题，可双行展示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前闪控球的规格为：整体尺寸宽为70vp-98vp之间，高为40vp，标题和内容不支持自定义字体大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同闪控球模板与样式布局示意如下，不同语言或内容以实际显示效果为准："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 静态布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764194)/* ["default"] */.A) + "",
        width: "280",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 静态布局-超长文本标题"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615364)/* ["default"] */.A) + "",
        width: "392",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 普通文本布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(344187)/* ["default"] */.A) + "",
        width: "280",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 普通文本布局-超长文本内容"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183768)/* ["default"] */.A) + "",
        width: "392",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 强调文本布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(698517)/* ["default"] */.A) + "",
        width: "280",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 强调文本布局-超长文本内容"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790672)/* ["default"] */.A) + "",
        width: "392",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 强调文本布局-图标"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(977620)/* ["default"] */.A) + "",
        width: "288",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " 强调文本布局-图标和超长文本内容"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233715)/* ["default"] */.A) + "",
        width: "381",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图9"
        })
      }), " 纯文本布局"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804094)/* ["default"] */.A) + "",
        width: "280",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图10"
        })
      }), " 纯文本布局-超长文本标题"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379243)/* ["default"] */.A) + "",
        width: "392",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当有两个应用启动了闪控球后，闪控球将合并展示，如下图所示。整体高度为76vp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图11"
        })
      }), " 闪控球上下合并展示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(709234)/* ["default"] */.A) + "",
        width: "280",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入模块并声明闪控球控制器。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-floatingball/js-apis-floatingball#floatingballcreate",
          children: "create()"
        }), "接口创建闪控球控制器实例后注册点击事件回调和状态变化事件回调，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-floatingball/js-apis-floatingball#startfloatingball",
          children: "startFloatingBall()"
        }), "接口启动闪控球。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-floatingball/js-apis-floatingball#updatefloatingball",
          children: "updateFloatingBall()"
        }), "更新闪控球信息，以此控制闪控球展示的内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-floatingball/js-apis-floatingball#stopfloatingball",
          children: "stopFloatingBall()"
        }), "停止闪控球。当不再需要显示闪控球时，可根据业务需要关闭闪控球。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Utils.ts\n// 该页面提供工具类，展示闪控球的创建、更新、关闭逻辑\nimport hilog from '@ohos.hilog';\nimport image from '@ohos.multimedia.image';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { floatingBall } from '@kit.ArkUI';\nimport { Want } from '@kit.AbilityKit';\nimport { ContextUtil } from './ContextUtil';\n\nconst DOMAIN: number = 0xF811;\nconst TAG: string = '[Sample_FloatingBall]';\nconst BUNDLE_NAME: string = ContextUtil.context.abilityInfo.bundleName;\n\nexport class Utils {\n    public static getRawfilePixelMapSync(path: string): image.PixelMap {\n        try {\n            const BUFFER = ContextUtil.context.resourceManager.getRawFileContentSync(path);\n            const IMAGE_SOURCE: image.ImageSource = image.createImageSource(BUFFER.buffer as ArrayBuffer);\n            hilog.debug(DOMAIN, TAG, `Get rawfile pixelMap path '${path}' successfully`);\n            return IMAGE_SOURCE.createPixelMapSync();\n        } catch (e) {\n            hilog.error(DOMAIN, TAG, `Get rawfile pixelMap path '${path}' failed, error: ${e}`);\n            throw e as Error;\n        }\n    }\n\n    // 闪控球启动逻辑\n    public static async onClickCreateFloatingBall(\n        floatingBallController: floatingBall.FloatingBallController | undefined,\n        template: floatingBall.FloatingBallTemplate,\n        onActiveRowChange: (value: number) => void,  // 接收状态更新回调函数\n        title: string = 'title',\n        content: string = 'content',\n        backgroundColor: string = '#0ff77c',\n        icon?: image.PixelMap): Promise<void> {\n        // 注册 监听点击回调事件\n        floatingBallController?.on('click', () => {\n            hilog.debug(DOMAIN, TAG, `FloatingBall onClickEvent`);\n            let want: Want = {\n                bundleName: BUNDLE_NAME,\n                abilityName: 'MainAbility'\n            }\n            // 使用promise异步回调\n            floatingBallController?.restoreMainWindow(want)\n            .then(() => {\n                hilog.debug(DOMAIN, TAG, `Success in restoring FloatingBall main window`);\n            }).catch((err: BusinessError) => {\n                hilog.error(DOMAIN, TAG, `failed to restore FloatingBall main window. code: ${err.code}, message: ${err.message}`);\n            })\n        })\n        // 注册 监听状态变化事件\n        floatingBallController?.on('stateChange',\n        (state: floatingBall.FloatingBallState) => {\n            hilog.debug(DOMAIN, TAG, `FloatingBall stateCange: ${state}`);\n            if(state === floatingBall.FloatingBallState.STOPPED) {\n                floatingBallController?.off('click')\n                floatingBallController?.off('stateChange')\n                floatingBallController = undefined;\n                // 执行状态更新回调\n                onActiveRowChange?.(-1);\n            }\n        })\n        // 最后启动闪控球\n        let startParams: floatingBall.FloatingBallParams = icon? {\n            template: template,\n            title: title,\n            content: content,\n            backgroundColor: backgroundColor,\n            icon: icon\n        } : {\n            template: template,\n            title: title,\n            content: content,\n            backgroundColor: backgroundColor\n        }\n        try {\n            floatingBallController?.startFloatingBall(startParams)\n            .then(() => {\n                hilog.debug(DOMAIN, TAG, `succeed in starting FloatingBall`);\n            }).catch((err: BusinessError) => {\n                hilog.error(DOMAIN, TAG, `failed to start FloatingBall. code: ${err.code}, message: ${err.message}`);\n            })\n        } catch (e) {\n            console.error('startFloatingBall Error', e)\n        }\n    }\n\n// 闪控球更新逻辑\npublic static onClickUpdateFloatingBall(\n    floatingBallController: floatingBall.FloatingBallController | undefined,\n    template: floatingBall.FloatingBallTemplate,\n    title: string = 'newTitle',\n    content: string = 'newContent',\n    icon?: image.PixelMap): void {\n        // 更新时给标题、内容 随机使用数字后缀\n        let random_string: string = Math.floor(Math.random() * 100).toString();\n        let updateParams: floatingBall.FloatingBallParams = icon ? {\n            template: template,\n            title: title + random_string,\n            content: content + random_string,\n            backgroundColor: '#f6ea0a',\n            icon: icon\n        } : {\n            template: template,\n            title: title + random_string,\n            content: content + random_string,\n            backgroundColor: '#f6ea0a',\n        }\n        try {\n            floatingBallController?.updateFloatingBall(updateParams).then(() => {\n                hilog.debug(DOMAIN, TAG, `Succeed in updating FloatingBall`);\n            }).catch((err: BusinessError) => {\n                hilog.error(DOMAIN, TAG, `failed to update FloatingBall. code: ${err.code}, message: ${err.message}`);\n            })\n        } catch (e) {\n            console.error('updateFloatingBall Error:', e)\n        }\n    }\n\n    // 闪控球停止逻辑\n    public static onClickStopFloatingBall(floatingBallController: floatingBall.FloatingBallController | undefined): void {\n        // stop 是异步流程，需要通过 stateChange 状态回调获取实际删除结果\n        floatingBallController?.stopFloatingBall().then(() => {\n            hilog.debug(DOMAIN, TAG, `Succeed in stopping FloatingBall`);\n        }).catch((err: BusinessError) => {\n            hilog.error(DOMAIN, TAG, `failed to stop FloatingBall. code: ${err.code}, message: ${err.message}`);\n        })\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n// 该页面利用按钮点击事件展示闪控球基本操作\nimport hilog from '@ohos.hilog';\nimport image from '@ohos.multimedia.image';\nimport { floatingBall } from '@kit.ArkUI';\nimport { Utils } from '../util/Utils';\n\nconst DOMAIN: number = 0xF811;\nconst TAG: string = '[Sample_FloatingBall]';\n\n@Entry\n@Component\nstruct Index {\n  // 当前可用的行，-1 表示全部行可见\n  @State private activeRow: number = -1;\n  // 声明闪控球控制器\n  private floatingBallController: floatingBall.FloatingBallController | undefined = undefined;\n  // 缓存 icon 图标（静态布局）\n  private cachedIcon1: image.PixelMap | undefined = undefined;\n  // 缓存 icon 图标（强调文本布局）\n  private cachedIcon2: image.PixelMap | undefined = undefined;\n\n  // activeRow 的状态更新函数（确保闪控球销毁时，activeRow的值更新为-1）\n  private activeRowChange = (value: number) => {this.activeRow = value};\n\n  // 判断某个布局是否可用（是否置灰）\n  private isEnabled(rowInex: number): boolean {\n    return this.activeRow === -1 || this.activeRow === rowInex;\n  }\n\n  build() {\n    Column({space: 12}) {\n      // 静态布局，支持标题和图标，该布局在创建后无法修改\n      Row({space: 6}) {\n        Button('STATIC').onClick( async () => {\n          // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext\n          if (!this.floatingBallController) {\n            this.floatingBallController = await floatingBall.create({\n              context: this.getUIContext().getHostContext()\n            })\n          }\n          if (this.floatingBallController) {\n            // 仅当没有缓存 cachedIcon1 时才加载；有缓存时，直接使用；\n            if (!this.cachedIcon1) {\n              let pixelMap = Utils.getRawfilePixelMapSync('books.png');  // 图片尺寸有最大限制\n              if (pixelMap) {\n                this.cachedIcon1 = pixelMap;  // 把图标缓存起了\n                hilog.debug(DOMAIN, TAG, `Success to load icon PixelMap`);\n              } else {\n                hilog.error(DOMAIN, TAG, `Failed to load icon PixelMap`);\n              }\n            }\n            Utils.onClickCreateFloatingBall(this.floatingBallController,\n              floatingBall.FloatingBallTemplate.STATIC, this.activeRowChange, 'title', 'content', '#0ff77c', this.cachedIcon1)\n              this.activeRow = 0;\n          }\n        })\n        .enabled(this.isEnabled(0))\n        // 更新闪控球信息（该布局在创建后无法更新，按钮永久置灰）\n        Button('Update1').enabled(false)\n        // 关闭闪控球\n        Button('Close1').onClick(() => {\n          Utils.onClickStopFloatingBall(this.floatingBallController);\n          this.activeRow = -1;  // 关闭后恢复所有行显示\n        })\n        .enabled(this.isEnabled(0))\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n      \n    // 普通文本布局，支持标题和内容\n    Row({space: 6}) {\n      Button('NORMAL').onClick( async () => {\n        // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext\n        if (!this.floatingBallController) {\n          this.floatingBallController = await floatingBall.create({\n            context: this.getUIContext().getHostContext()\n          })\n        }\n        if (this.floatingBallController) {\n          Utils.onClickCreateFloatingBall(this.floatingBallController,\n            floatingBall.FloatingBallTemplate.NORMAL, this.activeRowChange, 'title', 'content')\n            this.activeRow = 1;\n        }\n      })\n      .enabled(this.isEnabled(1))\n      // 更新闪控球信息\n      Button('Update2').onClick(() => Utils.onClickUpdateFloatingBall(this.floatingBallController,\n        floatingBall.FloatingBallTemplate.NORMAL))\n        .enabled(this.isEnabled(1))\n      // 关闭闪控球\n      Button('Close2').onClick(() => {\n        Utils.onClickStopFloatingBall(this.floatingBallController);\n        this.activeRow = -1;  // 关闭后恢复所有行显示\n      })\n      .enabled(this.isEnabled(1))\n    }\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n    \n     // 强调文本布局，支持标题、图标和内容\n     Row({space: 6}) {\n      Button('EMPHATIC').onClick( async () => {\n        // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext\n        if (!this.floatingBallController) {\n          this.floatingBallController = await floatingBall.create({\n            context: this.getUIContext().getHostContext()\n          })\n        }\n        if (this.floatingBallController) {\n          // 仅当没有缓存 cachedIcon2 时才加载；有缓存时，直接使用；\n          if(!this.cachedIcon2) {\n            let pixelMap = Utils.getRawfilePixelMapSync('video.png');  // 图片尺寸有最大限制\n            if (pixelMap) {\n              this.cachedIcon2 = pixelMap;  // 把图标缓存起了\n              hilog.debug(DOMAIN, TAG, `Success to load icon PixelMap`);\n            } else {\n              hilog.debug(DOMAIN, TAG, `Failed to load icon PixelMap`);\n            }\n          }\n          Utils.onClickCreateFloatingBall(this.floatingBallController,\n            floatingBall.FloatingBallTemplate.EMPHATIC, this.activeRowChange, '16', 'Min', '#0ff77c', this.cachedIcon2)\n            this.activeRow = 2;\n        }\n      })\n      .enabled(this.isEnabled(2))\n      // 更新闪控球信息\n      Button('Update3').onClick(() => Utils.onClickUpdateFloatingBall(this.floatingBallController,\n        floatingBall.FloatingBallTemplate.EMPHATIC, '', 'Min', this.cachedIcon2))\n        .enabled(this.isEnabled(2))\n      // 关闭闪控球\n      Button('Close3').onClick(() => {\n        Utils.onClickStopFloatingBall(this.floatingBallController);\n        this.activeRow = -1;  // 关闭后恢复所有行显示\n      })\n      .enabled(this.isEnabled(2))\n    }\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n\n    // 纯文本布局，只支持标题\n    Row({space: 6}) {\n      Button('SIMPLE').onClick( async () => {\n        // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext\n        if (!this.floatingBallController) {\n          this.floatingBallController = await floatingBall.create({\n            context: this.getUIContext().getHostContext()\n          })\n        }\n        if (this.floatingBallController) {\n          Utils.onClickCreateFloatingBall(this.floatingBallController,\n            floatingBall.FloatingBallTemplate.SIMPLE, this.activeRowChange, 'title')\n            this.activeRow = 3;\n        }\n      })\n      .enabled(this.isEnabled(3))\n      // 更新闪控球信息\n      Button('Update4').onClick(() => Utils.onClickUpdateFloatingBall(this.floatingBallController,\n        floatingBall.FloatingBallTemplate.SIMPLE))\n        .enabled(this.isEnabled(3))\n      // 关闭闪控球\n      Button('Close4').onClick(() => {\n        Utils.onClickStopFloatingBall(this.floatingBallController);\n        this.activeRow = -1;  // 关闭后恢复所有行显示\n      })\n      .enabled(this.isEnabled(3))\n    }\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/FloatingBall",
        children: "闪控球"
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
709234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958186-04909e2207b9d3e604a0ef62faf86282.png");

},
233715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478185-b0e59f7a191d81c88b442d85aa64adbb.png");

},
183768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478183-ee4fed3f0e53ee66249e66606caecc53.png");

},
977620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958184-e82faca9c30d93ba515d1933f2881a60.png");

},
790672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438229-b1cc7187d877477b66965fc8092b7f8f.png");

},
914358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
379243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
615364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
698517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
804094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAACgCAMAAADgvoMSAAAAAXNSR0IB2cksfwAAAXdQTFRFAAAAzMzM8vLy8PDw7u7u8vLy8PDw7u7u8PDw8fHx8fHx7+/v8PDw7u7u////7+/v8PDw8fHx8fHx7+/v8PDw8PDw8vLy8PDw8PDw////8vLy8vLy7+/v7e3t7+/v6enp8PDw9PT06urq8PDw7e3t6+vr8fHx8PDw////7e3t8vLy4+Pj7e3t7+/v8/Pz8/Pz8PDw5OTk8vLy8/Pz8PDw8/Pz7+/vpKSkcXFxT09PNzc3JiYmGRkZERERCgoKBAQEAAAABQUF8vLyra2tYmJiNTU1GBgYAwMD7u7u7u7uc3NzEBAQ8vLycHBwKysrn5+fPT09CgoK8fHxdnZ2IyMj7u7uaGhoGBgY8vLylJSU5ubmDw8PNzc3kJCQFBQUFhYWW1tb7+/vOzs75OTkJycnv7+/GxsbrKysExMTpaWl5eXlq6urc3NzOTk58/Pzd3d3a2trGhoaJSUlmJiYPj4+OTk5FhYWkpKSW1tbPDw8KCgoKCgo6enpo1B7ywAAAH10Uk5TAAUUIS45Q0xTWV5iZloKIDRHJT9XM1ARVQIoTRA5YRdCFxhFRxkSRAc6OwkrXywVMhNOKWUqPn6Vq73O3Ofx+P/4T3qev977HmeU6F+WyIC58DiT0Tya3T2FaOm+h+Lho1C6ac1023vkff////8Wkpnbz4O4vOCForrMzWgscb+YAAAJuUlEQVR4nO2d90PbRhTHjQGbkYDZm1DSUtJCCSUNG5yAmWUFEpKQveORpNlp88e3lpf8xum0fJaqz0+gZ457X51PN947hUL2qQnX1tVHog2NTc3nFNLcdL4hGqmvqw3XOOCUTVpaY22NKtWgaWyLtbaoE6W9o1O1AiI6O9oViBPu6lbtuAzdXeFKqtIT61XtsTy9sZ7KqNLXP6DaV7MM9Pe5Lsvg0LBqN60wPDToqiwXRlR7aJ3ID67JMnpRtXP2+PEnV2QZi6h2zD4/O/+MGr+k2iln+OVXZ3WZmFTtkVMM/+agLFNR1e44ycAFp3S5rNoVp4k5Isu058ZzxvzuQCc8c0W1F67wh11drkr9m9m5+YXFpeWV1bhCrq0sLy0uzM/NSlW5w5Ysg9cN/8HaemJjU6UemM2NxPqaYcW7bUwStgwe0ts7iV3VKnDsJna2xbX/c8uqLjPigvf2lX5zjFnd3xN7MGNNF+FT+uDwSLXfMhwdHoi8uGxFlxuCAo9PVHssz8mxwJEb5nW5yZd261S1s+Y4vcX7ctOsLrfZovY8JkuWU76zue1Qe7njoS+RnpM7jrQZrn+5e6jaQesc3mWcMtHPcM+jvTPV3tnhjPs+ST+buPHLPdWu2eUe45jkeGaL/uv7D1T7ZZ+H92nfpMbAg/Q84JFqp5zhEencpMy86TH5p09Ue+QUT0j3rhvrQq4zPH2m2h/nePaU8vCqkS5kx/v8hWpvnOTFc8pHgw54mlqve/lKtS/O8uol4eSVaaEw1Prua0+PXijOXhNuDoh0oUZ2L32ny3/KUG1GMM6bIj7+3GffoxyvqH5mihWG2Fd76qt+t8QL4tkU5XSZIFT00XO6nGeEsxO0LuPEkNd4XJdMJlNVZEtyNgQx0pscJ4Uh4hkeGRafzlYmU/02AmJ2cInSZQx/7r5x6dm6cLfQDVtKYEsLbBTEjHKMEIaIC3poWLZWF6b9StjI2yuyZQS2uMhG8QB7HMG6jOJPSay/SDiYtmgjb71VGw2xPjOKhMHxdXsSRWcrwlXGwMY2JzdsDHhN7yLU5Q36yF2JEW867zzVZLI2rjt0zZbimiHNGV4HhlFFOE5VZt1bu0FMs3DDlhLYssLk7pRExQscIrdHynUZRB+4I1GsdpNyHSK6hW7YMgJbXGTjwbsq5Yt5Q8gus3+UztWCbL86G7qFOecrZxNwghwf0uvSh+LgZXrewig0TXV5+WsZt2ywWYhsIlD/O6zPO+hHusnsw+ZvElmZgi1ux5a2YDPbZE6R6/06YdD61C2ZMos3laiMG7ZUQccUbk5FYcjmKwLt+OtWrHpsNRiqydixpRhbRmArCWr6u4SbTCm/KQZNxzIl6vpcdHvTVWQzAsXPlMKAUb6azCNJ3z2i9qv7HXWj0JZx2WYEejD1FnQJQ8uBTHm6m4Qqo7fBrtKULWXBZrrJoGi0Qnh0FzRIBXtoPhUAFTVlS5bbUowtZdFmDBr+duWFQfmwMnGH+bmsnoybtow5m4kJU/wI+t+d06UFXpca3KVwZYrNgnBQmU0GNMjL5Wu3w8v7EmURN6l0C6vJJsM+VKBdE6YDXN2WiWvWurtMCX1PAm2ZCthSepvZ7ncVxpDnEg3gOQQ7MmWhm6IbjWZ/SjtmyxR/lLaZXBWPx3eABJ1kF5OQKAkPvEtPbIdtzEC/ZMPzTX1zkiJBdTKt8KJM3gSx0lBsv+nK2ZJGNkl2oQatxHxgTaIgalGg2H4JW0bWlhHY0hZsssAsnuysoA1cW5coh7hJxfZL2eI6G2rikjZydYazme1+14EIbf8JA8/FkeliiJtUbL+8LeOKjV0/NNNkYCfTGArVwK/XhnEx9JpHrv0KbGmBLWXVRi71me5+N6AKNXgGKZHHpw0WuMvVZJNmE6oQDtWCK7PypfkJmGFaG6oDV+ZUV1ENc0CGulA9uDKvuopqmAcy1KMghwXVVVTDApAhguLuFlVXUQ2LQIZoqAFcWVJdRTUsARkaQufBlWXVVVTDMpChMdQErqyorqIaVoAMTSF4bug11VVUwyqQoTkELpxTXUNVQB0CYfIEwjAEwjAgYWDnW+VHn7jFNSBDc/C4zoEf13ABLxjgaZwPpgQ58JQgmERq4ElksOyggZcdgoUqDbxQFSxtauClzWAxXAMvhlvZPtEj2r9RYDMVY1aC2D6xsuGmo5ryHk1Hf5QgNtwsbdGWSAq2/NywOZkTqYPYorW0qV9eF6/mROqgNvWthIEU8XZOZAkqDMRS4FCBpLdzIguQgUOWQs3yeD0nsgAZamYtODGHdoO8nBOZhwxOtBbOWqyLx3MiNZhwVksB0EUnPJ4TqcEEQFsLmc+S9EFOZBYmZN5akkXcJzmRcT7JwmJajl9yIgVpOdYSufySEylI5LKW+uebnEg+9Q8ni76VKM83OZFvofelZFGcXiyxV+CXnEi4P6BPL8YJ6e+MC9R88kFO5Dvou/4IRXyEwV9G5fklJxI3GP0RBvjQC8MJk19yIuE0qfzQC+KYlPfi8vySE/keOV52TApxsM4HcYF+yYn8gBwHp2Tjo5g+CgtEN8WbOZEfkdsj5bqELqBPbItW8nySE7mLX8H0BghDHPcm6n99khOJel583Bt1QOAntkCf5ER+wj7jAwKpIyU/cyX6IyfyM/aYOFKSOoT0C1ckcZM8mBP5BXtMHUJKHVv7lS7RHzmRX7G/5LG15EHH38gifZET+Q17yxx0TB6N/bewcA/zD+EsczQ2eZj6d78epv4d+8oeph4cv88SvLCBI3jFB0PwUhiO4DVCHMGLpzjoV1z7/FVlj411CV5ux8K9DtH49Q1VzwM7r0MMXqDJE7xylSN4SS9H8FpnjuBF4KbbzP/81fF8P5Pl2ENfqBN0WLoOU/1LAe7ZpHFwKBnBqJajQxRHpsfE80gPN57Js7df5Vn9q/t816IhPX6BbNGzgyLbOwkzGRkVZTexg/dfy5iUHO9SDNIvv9aztp7YMJkt6DabG4l1mGeDuS41P2IhVyEQs3PzC4tLyytKjytaXVleWlyYn4N5nzQS6wxiZqg1Pc9zxXL3UmKaWgf2OAMG65iSCJ/bXsTiUxozRezEeZeoYP/INBMGD27vMMnuw1pjnIiF8CKXmH17G4wRkUVeI0LGv9hmFMfpeYqLRByZQ7zBUa+eYQS+TNVZBodQdL0XGB6yNwGQoa/fcyO+gf4+Y7+coCeGcuKql95Yj7FHzhHuQrm31Uh3V9jYF6dpae+Apx9UFZ0d7S2VV6UgTmusDZ7MUwU0tsVa1YlSpCZcW1cfiTacb4InmlaU5qbGhmikvq42XOOAU/8CKECfev827jAAAAAASUVORK5CYII=");

},
344187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958182-442ed0ca64537bdb61c3bda120d60450.png");

},
764194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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