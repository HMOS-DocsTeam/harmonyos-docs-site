"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["744438"], {
970373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_ui_cross_process_arkts_fullscreencomponent_arkts_fullscreencomponent_md_864_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-ui-cross-process-arkts-fullscreencomponent-arkts-fullscreencomponent-md-864.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_ui_cross_process_arkts_fullscreencomponent_arkts_fullscreencomponent_md_864_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/arkts-fullscreencomponent","title":"全屏启动元服务组件（FullScreenLaunchComponent）","description":"FullScreenLaunchComponent允许开发者以全屏方式拉起元服务，使得应用能够提供更友好的用户体验。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/arkts-fullscreencomponent.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"全屏启动元服务组件（FullScreenLaunchComponent）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-fullscreencomponent","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体查询 (@ohos.mediaquery)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/"},"next":{"title":"同应用进程嵌入式组件 (EmbeddedComponent)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/arkts-fullscreencomponent.md


const frontMatter = {
	title: '全屏启动元服务组件（FullScreenLaunchComponent）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-fullscreencomponent',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '全屏启动元服务组件（FullScreenLaunchComponent）';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "组件基本能力",
  "id": "组件基本能力",
  "level": 3
}, {
  "value": "EmbeddableUIAbility进程应用可用能力范围",
  "id": "embeddableuiability进程应用可用能力范围",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "安全能力约束",
  "id": "安全能力约束",
  "level": 3
}, {
  "value": "嵌套约束",
  "id": "嵌套约束",
  "level": 3
}, {
  "value": "事件处理机制约束",
  "id": "事件处理机制约束",
  "level": 3
}, {
  "value": "页面渲染效果体验约束",
  "id": "页面渲染效果体验约束",
  "level": 3
}, {
  "value": "其他约束",
  "id": "其他约束",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "全屏启动元服务组件fullscreenlaunchcomponent",
        children: "全屏启动元服务组件（FullScreenLaunchComponent）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FullScreenLaunchComponent允许开发者以全屏方式拉起元服务，使得应用能够提供更友好的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(671697)/* ["default"] */.A) + "",
        width: "742",
        height: "175"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-fullscreenlaunchcomponent/ohos-arkui-advanced-fullscreenlaunchcomponent",
            children: "FullScreenLaunchComponent"
          }), "组件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FullScreenLaunchComponent是由ArkUI提供的组件，允许在使用方应用中通过ArkTS的声明式范式进行定义和使用。FullScreenLaunchComponent向第三方应用开放使用权限，当被拉起方授权使用方应用嵌入式运行元服务时，使用方应用可全屏嵌入式运行该服务。若未授权，则使用方应用将以跳出式方式拉起元服务。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddableuiability/js-apis-app-ability-embeddableuiability",
            children: "EmbeddableUIAbility"
          }), "组件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供方应用中定义使用，用于运行提供方应用在一个独立进程中，同时具备跳转启动和嵌入式启动两种启动方式。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FullScreenLaunchComponent提供的一种全屏启动元服务的能力。需要拉起元服务时，拉起方向AMS查询拉起方是否授权使用方可以嵌入式运行元服务。已授权时，使用方全屏嵌入式运行元服务；未授权时，使用方跳出式拉起元服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跳出式运行元服务是指，非组件化的方式拉起EmbeddableUIAbility，交互体验接近独立窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147824)/* ["default"] */.A) + "",
        width: "976",
        height: "577"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件基本能力",
      children: "组件基本能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当被拉起方授权使用方可以嵌入式运行元服务时，使用方全屏嵌入式运行元服务"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当被拉起方未授权使用方可以嵌入式运行元服务时，使用方跳出式拉起元服务"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供图标占位自定义组件功能，控件展示图标占位，点击图标后拉起元服务"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embeddableuiability进程应用可用能力范围",
      children: "EmbeddableUIAbility进程应用可用能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FullScreenLaunchComponent为了实现跨应用的能力共享，存在较开放的灵活性，通过跨进程的方式拉起提供方应用提供的能力供当前使用方（宿主方）使用。在运行机制上，是两个进程之间的业务交互行为，和一般组件和宿主方存在根本上的差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出针对FullScreenLaunchComponent，在EmbeddableUIAbility内提供方应用能够使用的属性、事件、组件、Node-API接口等方面的范围，便于使用方应用与提供方应用在使用FullScreenLaunchComponent组件时进行参照。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为当前组件不支持及部分支持的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通用属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持通用属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用提供方使用组件时，需要和使用方（宿主方）的组件、应用进程上下文交互的场景，默认不支持。主要包括如下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件展示效果范围超过组件本身的范围、控制影响到使用方应用侧的场景，如Navigation展示到安全区的场景；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件能力依赖其他组件或者支持跨组件、跨应用控制与访问的场景，如PluginComponent提供访问其他组件，FormComponent卡片提供跨进程载体展示其他应用页面的能力；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件能力依赖宿主方窗口信息、进程实例UIContext上下文实现能力、交互、动效等场景，如FolderStack组件；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "详情如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "能力规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格补充说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-fullscreenlaunchcomponent/ohos-arkui-advanced-fullscreenlaunchcomponent",
              children: "FullScreenLaunchComponent (全屏启动元服务组件)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全屏启动元服务组件，当被拉起方授权使用方可以嵌入式运行元服务时，使用方全屏嵌入式运行元服务；未授权时，使用方跳出式拉起元服务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是一种跨应用调度的能力，FullScreenLaunchComponent中暂不支持嵌套拉起。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
              children: "EmbeddedComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["EmbeddedComponent用于支持在当前页面嵌入本应用内其他", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
              children: "EmbeddedUIExtensionAbility"
            }), "提供的UI。EmbeddedUIExtensionAbility在独立进程中运行，完成页面布局和渲染。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于是一种跨应用调度的能力，FullScreenLaunchComponent中暂不支持嵌套拉起。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext",
              children: "RichText"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本组件，解析并显示HTML格式文本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack",
              children: "FolderStack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通常用于有Abc热更新（可动态替换Isolated加载的abc文件，无需通过重新安装应用的方式实现内容更新）诉求的模块化开发场景。FolderStack继承于Stack(层叠布局)控件，新增了折叠屏悬停能力，通过识别upperItems自动避让折叠屏折痕区后移到上半屏。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "折叠屏划分组件能力，需要和宿主方窗口形成联动，从而需要在提供方内获取宿主主窗的信息，目前无法支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
              children: "XComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可用于EGL/OpenGLES和媒体数据写入，并显示在XComponent组件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink",
              children: "FormLink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供静态卡片交互组件，用于静态卡片内部和提供方应用间的交互，当前支持router、message和call三种类型的事件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供的是跨进程的组件调用能力，FullScreenLaunchComponent中嵌套使用会导致进程关系复杂，导致功能性能方面的问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
              children: "HyperLink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超链接组件，组件宽高范围内点击实现跳转。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-methods-menu/ts-methods-menu",
              children: "ContextMenu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在页面范围内关闭通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
              children: "bindContextMenu"
            }), "属性绑定的菜单。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box",
              children: "警告弹窗"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示警告弹窗组件，可设置文本内容与响应回调。若在FullScreenLaunchComponent中设置showInSubWindow为true, 弹窗将基于FullScreenLaunchComponent的宿主窗口对齐。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要依赖主窗的信息实现弹窗对齐，弹窗组件基于FullScreenLaunchComponent提供的信息获取宿主应用的窗口信息实现了对齐应用窗口的能力。仅限于窗口对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-action-sheet/ts-methods-action-sheet",
              children: "列表选择弹窗"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表弹窗。若在FullScreenLaunchComponent中设置showInSubWindow为true, 弹窗将基于FullScreenLaunchComponent的宿主窗口对齐。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要依赖主窗的信息实现弹窗对齐，弹窗组件基于FullScreenLaunchComponent提供的信息获取宿主应用的窗口信息实现了对齐应用窗口的能力。仅限于窗口对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box",
              children: "自定义弹窗"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过CustomDialogController类显示自定义弹窗。使用弹窗组件时，可优先考虑自定义弹窗，便于自定义弹窗的样式与内容。若在FullScreenLaunchComponent中设置showInSubWindow为true, 弹窗将基于FullScreenLaunchComponent的宿主窗口对齐。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要依赖主窗的信息实现弹窗对齐，弹窗组件基于FullScreenLaunchComponent提供的信息获取宿主应用的窗口信息实现了对齐应用窗口的能力。仅限于窗口对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该组件从API Version 11开始默认支持安全区避让特性(默认值为：expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重写该属性覆盖默认行为。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1、如果FullScreenLaunchComponent未设置模态或沉浸式，Navigation无法扩展到安全区。  2、无法路由到宿主方的页面中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Node-API接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native API接口提供能力，在FullScreenLaunchComponent场景下也需要考虑是否是跨出当前组件的能力，以及和使用方（宿主方）组件、应用进程上下文交互的场景。主要包括如下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口功能所需的信息依赖使用方的上下文、窗口等信息，如UIContext。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口功能控制非组件本身，需要控制影响其他组件或者使用方应用侧的场景，如用户界面外观。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "详情如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模块"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "能力规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格补充说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation",
              children: "页面间转场"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当路由进行切换时，可以通过在pageTransition函数中自定义页面入场和页面退场的转场动效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-geometrytransition/ts-transition-animation-geometrytransition",
              children: "组件内隐式共享元素转场"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在视图切换过程中提供丝滑的上下文传承过渡。通用transition机制提供了opacity、scale等转场效果，geometryTransition通过安排绑定的in/out组件(in指新视图、out指旧视图)的frame、position使得原本独立的transition动画在空间位置上发生联系，将视觉焦点由旧视图位置引导到新视图位置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-componentutils/js-apis-arkui-componentutils",
              children: "componentUtils"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供获取组件绘制区域坐标和大小的能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取信息来自于窗口，默认情况下直接获取到的位置信息是EmbeddableUIAbility的WindowProxy的信息，非宿主应用的主窗口信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@ohos.window在API version 10 新增", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10",
              children: "getUIContext"
            }), "接口，获取UI上下文实例UIContext对象，使用UIContext对象提供的替代方法，可以直接作用在对应的UI实例上。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于window获取，但FullScreenLaunchComponent内部默认方式下，提供方无真正的窗口承载，无法使用该接口获取到正确的UIContext。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-dragcontroller/js-apis-arkui-dragcontroller",
              children: "DragController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["本模块提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。  本模块功能依赖UI的执行上下文，不可在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface",
              children: "UI上下文不明确"
            }), "的地方使用，参见UIContext说明。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽时通过UIContext上下文传递组件间的事件传递，使用方应用和提供方应用不共享UIContext内容，默认能力下无法支持拖拽事件的传递。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector",
              children: "布局回调"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供注册组件布局和绘制完成回调通知的能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果指定FullScreenLaunchComponent组件，预期是获得所有FullScreenLaunchComponent中的组件信息，尚未支持该能力；提供方内部可以正常使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-font/js-apis-font",
              children: "注册自定义字体"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本模块提供注册自定义字体。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册字体存在影响范围的问题，提供方侧无法影响使用方应用的字体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-plugincomponent/js-apis-plugincomponent",
              children: "PluginComponentManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于给插件组件的使用者请求组件与数据，使用者发送组件模板和数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖获取其他组件的数据，提供方组件在另一个进程中，无法提供访问宿主组件的能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安全能力约束",
      children: "安全能力约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FullScreenLaunchComponent组件（使用方）可以访问调用集成了EmbeddableUIAbility的应用（提供方），提供了一种通用应用共享能力。FullScreenLaunchComponent能力无法独立提供安全保障机制，作为提供服务的应用（提供方）需要结合使用其他ArkUI的能力进行安全保护，以保护自己不被使用方应用攻击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于FullScreenLaunchComponent能力（包含基于FullScreenLaunchComponent衍生的相关能力）机制的灵活性，如果提供方应用存在安全方面的诉求，无法在现有FullScreenLaunchComponent的场景下解决的，建议优先使用其他方案。如选择继续采用FullScreenLaunchComponent能力，提供方应用以及使用方应用都需要承担一定的安全风险。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当被拉起方授权使用方可以嵌入式运行元服务时，使用方全屏嵌入式运行元服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未授权时，使用方跳出式拉起元服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "嵌入式模式下为了避免被使用方的子窗遮挡，使用方的交互行为将受限，使用方无法再创建任何子窗覆盖到提供方的窗口上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "嵌套约束",
      children: "嵌套约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FullScreenLaunchComponent暂不支持嵌套，比如A应用(UIAbility)->B应用(EmbeddableUIAbility)->C应用(EmbeddableUIAbility)这种嵌套能力依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事件处理机制约束",
      children: "事件处理机制约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FullScreenLaunchComponent不支持通用事件，会将事件经过坐标转换后传递给提供方EmbeddableUIAbility处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对事件传递处理方式进行区分，针对不同事件使用场景确定同步或异步方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主进程与提供方进程的交互默认均是异步处理：优先考虑从默认机制上避免性能（影响整体交互体验）和死锁问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同步事件处理原则：能够支持同步的事件，触发频率较低，性能影响较小；尽量满足应用实际场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者使用FullScreenLaunchComponent能力时，需要遵守如下设计场景约束："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步处理的事件场景：FullScreenLaunchComponent组件以及宿主应用侧组件可以同时收到事件。需要应用开发者结合应用场景进行处理，如宿主应用侧组件不做事件处理。如果无法避免，建议替换FullScreenLaunchComponent组件来保障交互体验。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "同步/异步（宿主与提供方）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击事件（Click）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件（Touch）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽事件（onDragXXX）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件（KeyEvent）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持超时等待机制，超时后会结束等待，对上层来说相当于事件未处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点事件（onFocus/onBlur）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持超时等待机制，超时后会结束等待，对上层来说相当于事件未处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件（onHover/onMouse）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手势处理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持超时等待机制，超时后会结束等待，对上层来说相当于事件未处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "页面渲染效果体验约束",
      children: "页面渲染效果体验约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于FullScreenLaunchComponent是一种跨进程的应用调用，使用方应用进程和提供方应用进程的处理不能实现同步，会导致在交互体验上存在和一般组件不同的体验问题。应用开发者应知悉本组件存在跨多个进程渲染页面的性能约束，从而进行针对性的处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "闪白现象"
          })
        }), "：FullScreenLaunchComponent创建并拉起另一个进程为应用提供能力，创建、拉起进程并完成页面渲染是一个耗时的过程，使用方在等待的过程中会感知到FullScreenLaunchComponent的背景色（默认是白色），所以会有闪白的现象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "渲染显示不同步现象"
          })
        }), "：当使用方应用页面快速变化时（如横竖屏切换、拖拽窗口大小），会出现使用方页面渲染过程和FullScreenLaunchComponent组件中展示的内容不同步的情况。这种现象是跨进程交互带来的，提供方进程任务是使用方触发，而对于布局等任务均是在各自进程的JS线程中，无法保障使用方和提供方的渲染任务同步，最终导致了不同步的效果。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者（提供方）需要考虑如下设计约束："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尽量使用布局变化少的场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当由布局变化时，提供方js线程尽量少的执行任务，确保js线程能够及时响应布局变化的任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者（使用方）可以通过如下方式消减闪白问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据使用方应用的页面以及提供方页面的背景色，更改FullScreenLaunchComponent的背景色（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background",
          children: "背景设置"
        }), "），做到在加载过程中配合场景过渡显示，从而实现无跳变感知。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果消减后效果不能完全满足应用交互诉求，由于跨进程的能力约束，建议应用优先考虑其他方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他约束",
      children: "其他约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持在运行过程中修改切换后端拉起的元服务EmbeddableUIAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持预览，不在开发DevEco Studio中提供预览能力。"
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
671697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798410-c7f8063979262a1bad3ec98efc06466d.png");

},
147824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438105-49571373ce735ca0361616aee4548ceb.png");

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