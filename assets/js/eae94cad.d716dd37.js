"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["952736"], {
292738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_form_overview_arkts_form_overview_md_eae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-form-overview-arkts-form-overview-md-eae.json
var site_docs_form_kit_arkts_ui_arkts_form_overview_arkts_form_overview_md_eae_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-form-overview/arkts-form-overview","title":"ArkTS卡片概述","description":"以下内容介绍基于ArkTS声明式开发范式语言开发卡片。","source":"@site/docs/form-kit/arkts-ui/arkts-form-overview/arkts-form-overview.md","sourceDirName":"form-kit/arkts-ui/arkts-form-overview","slug":"/form-kit/arkts-ui/arkts-form-overview/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-form-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS卡片概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-form-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Form Kit简介","permalink":"/harmonyos-docs-site/form-kit/formkit-overview/"},"next":{"title":"创建ArkTS卡片","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-creation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-form-overview/arkts-form-overview.md


const frontMatter = {
	title: 'ArkTS卡片概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-form-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片概述';

const assets = {

};



const toc = [{
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "ArkTS卡片类型",
  "id": "arkts卡片类型",
  "level": 2
}, {
  "value": "动态卡片",
  "id": "动态卡片",
  "level": 3
}, {
  "value": "静态卡片",
  "id": "静态卡片",
  "level": 3
}, {
  "value": "互动卡片",
  "id": "互动卡片",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
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
    ol: "ol",
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
        id: "arkts卡片概述",
        children: "ArkTS卡片概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下内容介绍基于ArkTS声明式开发范式语言开发卡片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "统一开发范式"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ArkTS卡片统一了卡片和应用页面的开发范式，应用页面的布局可以直接复用到卡片布局中，提升开发体验和开发效率。具体请参考图1 卡片工程结构对比。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 卡片工程结构对比"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(573370)/* ["default"] */.A) + "",
            width: "1478",
            height: "580"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卡片能力增强"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["新增了动效的能力：ArkTS卡片开放了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty",
              children: "属性动画"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation",
              children: "显式动画"
            }), "的能力，使卡片的交互更加友好。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["新增了自定义绘制的能力：ArkTS卡片开放了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
              children: "Canvas"
            }), "画布组件的能力，卡片可以使用自定义绘制的能力构建更多样的显示和交互效果。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "允许卡片中运行逻辑代码：开放逻辑代码运行能力后，部分业务逻辑可以在卡片内部实现，拓宽了业务适用场景。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片使用方：显示卡片内容的宿主应用，控制卡片在宿主中展示的位置，当前仅系统应用可以作为卡片使用方。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片提供方：提供卡片显示内容的应用，控制卡片的显示内容、控件布局以及控件点击事件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["卡片管理服务：用于管理系统中所添加卡片的常驻代理服务，提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider",
          children: "formProvider"
        }), "的接口能力，同时提供卡片对象的管理与使用以及卡片周期性刷新等能力。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片渲染服务：用于管理卡片渲染实例，渲染实例与卡片使用方的卡片组件一一绑定。卡片渲染服务根据form_config.json配置的卡片信息运行widget.abc文件的卡片页面代码进行渲染，并将渲染后的数据发送至卡片使用方对应的卡片组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " ArkTS卡片实现原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572197)/* ["default"] */.A) + "",
        width: "871",
        height: "493"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " ArkTS卡片渲染服务运行原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(788074)/* ["default"] */.A) + "",
        width: "801",
        height: "281"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与JS卡片相比，ArkTS卡片支持在卡片中运行逻辑代码，为确保ArkTS卡片发生问题后不影响卡片使用方应用的使用，ArkTS卡片新增了卡片渲染服务用于运行卡片页面代码widget.abc，卡片渲染服务由卡片管理服务管理。卡片使用方的每个卡片组件都对应了卡片渲染服务里的一个渲染实例，同一卡片提供方的渲染实例运行在同一个ArkTS虚拟机运行环境中，不同卡片提供方的渲染实例运行在不同的ArkTS虚拟机运行环境中，通过ArkTS虚拟机运行环境隔离不同卡片提供方卡片之间的资源与状态。开发过程中需要注意的是globalThis对象的使用，相同卡片提供方的卡片globalThis对象是同一个，不同卡片提供方的卡片globalThis对象是不同的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts卡片类型",
      children: "ArkTS卡片类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS卡片分为动态卡片、静态卡片和互动卡片三种类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态卡片整体的运行框架、渲染流程与动态卡片是一致的。主要区别在于，卡片渲染服务将卡片内容渲染完毕后，卡片使用方会使用最后一帧渲染的数据作为静态图片显示，其次卡片渲染服务中的卡片实例会释放该卡片的所有运行资源以节省内存。因此频繁的刷新会导致静态卡片运行时资源不断的创建和销毁，增加卡片功耗。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "卡片类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "优缺点"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "静态卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持UI组件和布局能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要用于展示静态信息（UI相对固定），仅可以通过FormLink组件跳转到指定的UIAbility。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能简单但可以有效控制内存开销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "除了支持UI组件和布局能力，还支持通用事件能力和自定义动效能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于有复杂业务逻辑和交互的场景。例如：卡片页面图片的刷新、卡片内容的刷新等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能丰富但内存开销较大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "互动卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在动态卡片基础上，额外支持破框动效能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于有复杂业务逻辑和交互，需要执行破框动效呈现更好视觉体验的场景。例如：桌面卡片游戏等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能丰富但内存开销较大。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态卡片",
      children: "动态卡片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片中提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1",
        children: "postCardAction"
      }), "接口用于卡片Card.ets和FormExtensionAbility之间的交互，当前支持router、message和call三种类型的事件，仅在卡片控件的点击事件中可以调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " ArkTS事件交互实现原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974501)/* ["default"] */.A) + "",
        width: "713",
        height: "228"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态卡片事件的主要使用场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "router事件：可以使用router事件跳转到应用自身的UIAbility，以完成点击卡片跳转应用内页面的交互功能。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["call事件：可以使用call事件拉起应用自身的UIAbility到后台，再通过UIAbility申请对应后台", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-overview",
          children: "长时任务"
        }), "完成音乐播放等功能。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "message事件：可以使用message拉起FormExtensionAbility，通过onFormEvent接口回调通知，以完成卡片内控件点击消息传递，从而更新卡片内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "静态卡片",
      children: "静态卡片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片提供FormLink静态卡片交互组件，用于静态卡片内部和提供方应用间的交互，当前支持router、message和call三种类型的事件。请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink",
        children: "FormLink"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "互动卡片",
      children: "互动卡片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始支持互动卡片，互动卡片提供破框动效能力，并实现人机交互，提升信息提醒、浅层交互和可玩性。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview",
        children: "互动卡片概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器开发，但与真机存在部分能力差异，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器中不支持 1 * 1卡片预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器中不支持背板透明卡片预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器中不支持互动卡片预览。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS卡片支持在UI内运行逻辑代码，相较于JS卡片具备了更加丰富的能力，但也增加了使用卡片进行恶意行为的风险。因为承载ArkTS卡片UI部分的widget.abc代码运行在系统公共的FRS进程内，并最终显示在卡片使用方应用中（一般为桌面应用），为确保系统渲染进程的稳定性、各卡片之间的隔离安全性，以及内存功耗等资源考虑，对ArkTS卡片UI可使用的能力做了以下约束："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅支持基于ArkUI框架开发卡片，暂不支持跨平台开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当导入模块时，仅支持导入标识“支持在ArkTS卡片中使用”的模块。若使用了不支持使用的API，卡片加载显示异常。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持导入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
          children: "HAR"
        }), "静态共享包，不支持导入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
          children: "HSP"
        }), "动态共享包。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持使用native语言开发，不支持加载native so。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["针对卡片UI页面开发，ArkTS卡片仅支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-development-overview",
          children: "声明式开发范式"
        }), "的部分组件、事件、动效、数据管理、状态管理和API能力。对于支持在ArkTS卡片UI页面中使用的接口，会添加“卡片能力”的标记，如：从API version 12开始，该接口支持在ArkTS卡片中使用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片组件内容的事件处理和卡片使用方的事件处理是独立的，为防止手势冲突，卡片内不支持左右滑动的控件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，当前ArkTS卡片还存在如下约束："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持极速预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持断点调试能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持Hot Reload热重载。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/common-basic-arkts/js-apis-timer/js-apis-timer#settimeout",
          children: "setTimeout"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DevEco Studio的相关约束请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-service-widget#section1181172254318",
          children: "使用约束"
        }), "。"]
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
572197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958284-6d9e3bef79a27a3f5fea9c060f6cc8e1.png");

},
974501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798636-fb6c851dee5ed2a25446fa065775f6c6.png");

},
788074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478285-cfff84294c01c3e021f5a897112498d0.png");

},
573370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438329-41a72d47320547421faf0c0f410480d2.png");

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