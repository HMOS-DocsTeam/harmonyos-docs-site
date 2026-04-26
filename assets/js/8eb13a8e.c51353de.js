"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["220353"], {
953843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_pipwindow_pipwindow_overview_pipwindow_overview_md_8eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-pipwindow-pipwindow-overview-pipwindow-overview-md-8eb.json
var site_docs_arkui_window_manager_window_pipwindow_pipwindow_overview_pipwindow_overview_md_8eb_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-pipwindow/pipwindow-overview/pipwindow-overview","title":"画中画开发概述","description":"场景介绍","source":"@site/docs/arkui/window-manager/window-pipwindow/pipwindow-overview/pipwindow-overview.md","sourceDirName":"arkui/window-manager/window-pipwindow/pipwindow-overview","slug":"/arkui/window-manager/window-pipwindow/pipwindow-overview/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"画中画开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用WindowManager管理多模输入事件（C/C++）","permalink":"/harmonyos-docs-site/arkui/window-manager/native-window-event-filter/"},"next":{"title":"使用XComponent实现画中画功能开发（ArkTS）","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-xcomponent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-pipwindow/pipwindow-overview/pipwindow-overview.md


const frontMatter = {
	title: '画中画开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '画中画开发概述';

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
  "value": "配置画中画控制层可选控件",
  "id": "配置画中画控制层可选控件",
  "level": 2
}, {
  "value": "在画中画内容上方展示自定义UI",
  "id": "在画中画内容上方展示自定义ui",
  "level": 2
}, {
  "value": "更新画中画控制面板控件状态",
  "id": "更新画中画控制面板控件状态",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "画中画开发概述",
        children: "画中画开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在视频播放、视频会议、视频通话等场景下，可以使用画中画能力将视频内容以小窗（画中画）模式呈现。切换为小窗（画中画）模式后，用户可以进行其他界面操作，提升使用体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画中画的常见使用场景有以下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频通话。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频会议。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "直播。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供以下三种画中画功能的开发方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-pipwindow/pipwindow-xcomponent",
          children: "使用XComponent实现画中画功能开发"
        }), "：适用于应用通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
          children: "Navigation"
        }), "管理页面或Ability单页面情况下使用画中画的场景，这种实现方式无需应用管理页面。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-pipwindow/pipwindow-typenode",
          children: "使用typeNode实现画中画功能开发"
        }), "：适用于所有场景，这种实现方式灵活性高，需要应用自行管理页面，推荐通过该方式使用画中画功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-pipwindow/pipwindow-native",
          children: "使用NDK接口实现画中画功能开发"
        }), "：适用于依赖NDK接口开发的应用，需要应用自行管理页面。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于安全考虑，应用处于后台时不允许通过startPiP启动画中画。针对应用返回后台时需要启动画中画的场景，建议使用setAutoStartEnabled(true)实现自动启动。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是画中画功能的常用ArkTS接口，更多接口及使用参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow",
        children: "@ohos.PiPWindow (画中画窗口)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isPiPEnabled(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前系统是否开启画中画功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "create(config: PiPConfiguration): Promise<PiPController>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建画中画控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "create(config: PiPConfiguration, contentNode: typeNode.XComponent): Promise<PiPController>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用typeNode创建画中画控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startPiP(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动画中画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopPiP(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止画中画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAutoStartEnabled(enable: boolean): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否需要在应用退后台时自动启动画中画，true表示需要自动启动，false表示不需要自动启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateContentSize(width: number, height: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当媒体源切换时，向画中画控制器更新媒体源尺寸信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'stateChange', callback: (state: PiPState, reason: string) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画生命周期状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'stateChange'): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画生命周期状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'controlPanelActionEvent', callback: ControlPanelActionEventCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画控制面板控件动作事件的监听。推荐使用on('controlEvent')来开启画中画控制面板控件动作事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'controlPanelActionEvent'): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画控制面板控件动作事件的监听。推荐使用off('controlEvent')来关闭画中画控制面板控件动作事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updatePiPControlStatus(controlType: PiPControlType, status: PiPControlStatus): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新画中画控制面板控件状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setPiPControlEnabled(controlType: PiPControlType, enabled: boolean): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置控制面板控件使能状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'controlEvent', callback: CallBack<ControlEventParam>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画控制面板控件动作事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'controlEvent', callback?: CallBack<ControlEventParam>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画控制面板控件动作事件的监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是画中画功能的常用NDK接口，更多接口及使用参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-pip-h/capi-oh-window-pip-h",
        children: "oh_window_pip.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "int32_t OH_PictureInPicture_CreatePipConfig(PictureInPicture_PipConfig* pipConfig)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建画中画参数配置器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_DestroyPipConfig(PictureInPicture_PipConfig* pipConfig)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁画中画参数配置器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_CreatePip(PictureInPicture_PipConfig pipConfig, uint32_t* controllerId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建画中画控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_DeletePip(uint32_t controllerId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除画中画控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_StartPip(uint32_t controllerId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动画中画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_StopPip(uint32_t controllerId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止画中画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_UpdatePipContentSize(uint32_t controllerId, uint32_t width, uint32_t height)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当媒体源切换时，向画中画控制器更新媒体源尺寸信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_UpdatePipControlStatus(uint32_t controllerId, PictureInPicture_PipControlType controlType, PictureInPicture_PipControlStatus status)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新画中画控制面板控件状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_SetPipControlEnabled(uint32_t controllerId, PictureInPicture_PipControlType controlType, bool enabled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置画中画控制面板控件使能状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_RegisterStartPipCallback(uint32_t controllerId, WebPipStartPipCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画surface创建完成的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_UnregisterStartPipCallback(uint32_t controllerId, WebPipStartPipCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画surface创建完成的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_RegisterLifecycleListener(uint32_t controllerId, WebPipLifeCycleCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画生命周期状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_UnregisterLifecycleListener(uint32_t controllerId, WebPipLifeCycleCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画生命周期状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_RegisterControlEventListener(uint32_t controllerId, WebPipControlEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画控制面板控件动作事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_UnregisterControlEventListener(uint32_t controllerId, WebPipControlEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画控制面板控件动作事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_RegisterResizeListener(uint32_t controllerId, WebPipResizeCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启画中画窗口尺寸变化事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_PictureInPicture_UnregisterResizeListener(uint32_t controllerId, WebPipResizeCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭画中画窗口尺寸变化事件的监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "交互方式",
      children: "交互方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画中画窗口提供以下交互方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单击画中画窗口：如果画中画控制层未显示，则显示画中画控制层，3秒后自动隐藏控制层；如果当前控制层已显示，则隐藏画中画控制层。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "双击画中画窗口：放大或缩小画中画窗口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖动画中画窗口：可以将画中画窗口拖动到屏幕任意位置。如果将画中画窗口拖动到屏幕左右边缘，画中画窗口会自动隐藏；隐藏后在屏幕边缘显示画中画隐藏图标，点击该图标后画中画窗口恢复显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖拽缩放画中画窗口：可以拖拽画中画窗口四边以及四个对角缩放画中画窗口大小，窗口尺寸不能超过默认最大档与最小档，当拖拽过程中画中画窗口超过窗口尺寸限制以及超出屏幕尺寸，会触发回弹效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拖动删除画中画窗口：可以将画中画窗口拖动到底部垃圾桶热区，删除画中画窗口。对于申请长时任务的应用，需要主动监听画中画生命周期STOPPED事件，关闭任务或进程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画中画控制层提供以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "窗口控制：包括“关闭”和“恢复全屏窗口”功能。点按“关闭”按钮后，画中画窗口关闭；点按“恢复全屏窗口”按钮后，将从画中画窗口恢复到应用原始界面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内容控制：内容控制区根据不同场景呈现不同，应用可根据实际场景需要进行设置，各场景控制层示意图如下所示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 不同场景下画中画控制层的不同呈现"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558305)/* ["default"] */.A) + "",
        width: "651",
        height: "276"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置画中画控制层可选控件",
      children: "配置画中画控制层可选控件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#pipwindowcreate",
        children: "create"
      }), "接口创建画中画时，可通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#pipconfiguration",
        children: "PiPConfiguration"
      }), "中新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#pipcontrolgroup12",
        children: "PiPControlGroup"
      }), "类型的数组配置当前画中画控制层控件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["视频播放场景可通过配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#videoplaycontrolgroup12",
            children: "VideoPlayControlGroup"
          }), "来显示可选的控制层控件。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " 视频播放场景配置控制层可选控件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(592390)/* ["default"] */.A) + "",
            width: "672",
            height: "160"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["视频通话场景可通过配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#videocallcontrolgroup12",
            children: "VideoCallControlGroup"
          }), "来显示可选的控制层控件。示意图如下所示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图3"
            })
          }), " 视频通话场景配置控制层可选控件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(249218)/* ["default"] */.A) + "",
            width: "827",
            height: "304"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若不配置，视频通话模版默认不存在任何按钮，点击画中画窗口即可启动还原（见下图左，未配置任何控件的操作示意图）。下图右为配置控件的操作示意图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(642227)/* ["default"] */.A) + "",
            width: "224",
            height: "469"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(398462)/* ["default"] */.A) + "",
            width: "224",
            height: "469"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["视频会议场景可通过配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#videomeetingcontrolgroup12",
            children: "VideoMeetingControlGroup"
          }), "来显示可选的控制层控件。示意图如下所示。若不配置，视频会议模版默认不存在任何按钮，点击画中画窗口即可启动还原（与视频通话模版操作示意图一致）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图4"
            })
          }), " 视频会议场景配置控制层可选控件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(202731)/* ["default"] */.A) + "",
            width: "831",
            height: "306"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["直播场景可通过配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#videolivecontrolgroup12",
            children: "VideoLiveControlGroup"
          }), "来显示可选的控制层控件。示意图如下所示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图5"
            })
          }), " 直播场景配置控制层可选控件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(126206)/* ["default"] */.A) + "",
            width: "664",
            height: "313"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在画中画内容上方展示自定义ui",
      children: "在画中画内容上方展示自定义UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#pipwindowcreate",
        children: "create"
      }), "接口创建画中画时，可通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#pipconfiguration",
        children: "PiPConfiguration"
      }), "中传入customUIController来显示自定义UI。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567046)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义显示的UI无法响应交互事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 在画中画内容上方显示自定义UI"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(262856)/* ["default"] */.A) + "",
        width: "203",
        height: "128"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新画中画控制面板控件状态",
      children: "更新画中画控制面板控件状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以使用updatePiPControlStatus接口更新控制面板控件的功能状态，如将视频播放模板下VIDEO_PLAY_PAUSE控件的播放状态更改为暂停状态，见下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用也可以使用setPiPControlEnabled接口设置控制面板控件的使能状态，如将视频播放模板下VIDEO_PREVIOUS控件从可点击状态变为不可点击状态，见下图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 更新控件功能状态"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789372)/* ["default"] */.A) + "",
        width: "240",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " 设置控件使能状态"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(165907)/* ["default"] */.A) + "",
        width: "259",
        height: "299"
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
165907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438225-67f85d0c53bc8fd5c2722d4a22c88729.gif");

},
202731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438223-42473ba9e5a74a35cad50608cc57b367.png");

},
262856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
567046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
642227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478177-7ef22eee2ff0deb780acef3e79131343.gif");

},
249218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958176-bc51702fc6e3a6351cb273dfd691dd64.png");

},
592390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438221-507253e233c1a06ad9e9630eba51598a.png");

},
789372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798530-69ae07ef5af480d19e488bfbc2870d4a.gif");

},
558305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798526-9aba376dedf1ab417cf37b9ec22a8c94.png");

},
126206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958178-569a85255b2f220c7ebad97ef9a57ac3.png");

},
398462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798528-4792c60381fa297984ede29c26fdb4a6.gif");

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