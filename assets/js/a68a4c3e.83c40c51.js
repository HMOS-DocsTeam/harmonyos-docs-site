"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["361201"], {
196801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_development_overview_arkts_ui_development_overview_md_a68_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-development-overview-arkts-ui-development-overview-md-a68.json
var site_docs_arkui_arkts_ui_development_arkts_ui_development_overview_arkts_ui_development_overview_md_a68_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-development-overview/arkts-ui-development-overview","title":"UI开发（ArkTS声明式开发范式）概述","description":"基于ArkTS的声明式开发范式的方舟开发框架是一套开发极简、高性能、支持跨设备的UI开发框架，提供了构建应用UI所必需的能力，主要包括：","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-development-overview/arkts-ui-development-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-development-overview","slug":"/arkui/arkts-ui-development/arkts-ui-development-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-development-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"UI开发（ArkTS声明式开发范式）概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-development-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkUI简介","permalink":"/harmonyos-docs-site/arkui/arkui-overview/"},"next":{"title":"基本语法概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-development-overview/arkts-ui-development-overview.md


const frontMatter = {
	title: 'UI开发（ArkTS声明式开发范式）概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-development-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI开发（ArkTS声明式开发范式）概述';

const assets = {

};



const toc = [{
  "value": "特点",
  "id": "特点",
  "level": 2
}, {
  "value": "整体架构",
  "id": "整体架构",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "通用规则",
  "id": "通用规则",
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
        id: "ui开发arkts声明式开发范式概述",
        children: "UI开发（ArkTS声明式开发范式）概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于ArkTS的声明式开发范式的方舟开发框架是一套开发极简、高性能、支持跨设备的UI开发框架，提供了构建应用UI所必需的能力，主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ArkTS"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkTS是优选的主力应用开发语言，围绕应用开发在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "TypeScript"
          }), "（简称TS）生态基础上做了进一步扩展。扩展能力包含声明式UI描述、自定义组件、动态扩展UI元素、状态管理和渲染控制。状态管理作为基于ArkTS的声明式开发范式的特色，通过功能不同的装饰器给开发者提供了清晰的页面更新渲染流程和管道。状态管理包括UI组件状态和应用程序状态，两者协作可以使开发者完整地构建整个应用的数据更新和UI渲染。ArkTS语言的基础知识请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/learning-arkts/arkts-get-started",
            children: "初识ArkTS语言"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "布局"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布局是UI的必要元素，它定义了组件在界面中的位置。ArkUI框架提供了多种布局方式，除了基础的线性布局、层叠布局、弹性布局、相对布局、栅格布局外，也提供了相对复杂的列表、宫格、轮播。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "组件"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["组件是UI的必要元素，形成了在界面中的样子，由框架直接提供的称为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统组件"
            })
          }), "，由开发者定义的称为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义组件"
            })
          }), "。系统组件包括按钮、单选框、进度条、文本等。开发者可以通过链式调用的方式设置系统组件的渲染效果。开发者可以将系统组件组合为自定义组件，通过这种方式将页面组件化为一个个独立的UI单元，实现页面不同单元的独立创建、开发和复用，具有更强的工程性。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "页面路由和组件导航"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可以将应用的用户界面设计为多个功能页面", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
            children: "NavDestination"
          }), "，页面通过栈结构管理，并通过导航容器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
            children: "Navigation"
          }), "完成页面间的调度管理如跳转、回退等操作，以实现应用内的功能解耦。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图形"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方舟开发框架提供了多种类型图片的显示能力和多种自定义绘制的能力，以满足开发者的自定义绘图需求，支持绘制形状、填充颜色、绘制文本、变形与裁剪、嵌入图片等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "动画"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动画是UI的重要元素之一。优秀的动画设计能够极大地提升用户体验，框架提供了丰富的动画能力，除了组件内置动画效果外，还包括属性动画、显式动画、自定义转场动画以及动画API等，开发者可以通过封装的物理模型或者调用动画能力API来实现自定义动画轨迹。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "交互事件"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "交互事件是UI和用户交互的必要元素。方舟开发框架提供了多种交互事件，除了触摸事件、鼠标事件、键盘按键事件、焦点事件等通用事件外，还包括基于通用事件进行进一步识别的手势事件。手势事件有单一手势如点击手势、长按手势、拖动手势、捏合手势、旋转手势、滑动手势，以及通过单一手势事件进行组合的组合手势事件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义能力"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义能力是UI开发框架提供给开发者对UI界面进行开发和定制化的能力。包括：自定义组合、自定义扩展、自定义节点和自定义渲染。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "特点",
      children: "特点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发效率高，开发体验好"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "代码简洁：通过接近自然语义的方式描述UI，不必关心框架如何实现UI绘制和渲染。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "数据驱动UI变化：让开发者更专注自身业务逻辑的处理。当UI发生变化时，开发者无需编写在不同的UI之间进行切换的UI代码， 开发人员仅需要编写引起界面变化的数据，具体UI如何变化交给框架。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发体验好：界面也是代码，让开发者的编程体验得到提升。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "性能优越"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "声明式UI前端和UI后端分层：UI后端采用C++语言构建，提供对应前端的基础组件、布局、动效、交互事件、组件状态管理和渲染管线。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "语言编译器和运行时的优化：统一字节码、高效FFI（Foreign Function Interface）、AOT（Ahead Of Time）、引擎极小化、类型优化等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生态容易快速推进"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "能够借力主流语言生态快速推进，语言相对中立友好，有相应的标准组织可以逐步演进。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "整体架构",
      children: "整体架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 整体架构图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934693)/* ["default"] */.A) + "",
        width: "565",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "声明式UI前端"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供了UI开发范式的基础语言规范，并提供内置的UI组件、布局和动画，提供了多种状态管理机制，为应用开发者提供一系列接口支持。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "语言运行时"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选用方舟语言运行时，提供了针对UI范式语法的解析能力、跨语言调用支持的能力和TS语言高性能运行环境。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "声明式UI后端引擎"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后端引擎提供了兼容不同开发范式的UI渲染管线，提供多种基础组件、布局计算、动效、交互事件，提供了状态管理和绘制能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "渲染引擎"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供了高效的绘制能力，将渲染管线收集的渲染指令，绘制到屏幕的能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "平台适配层"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供了对系统平台的抽象接口，具备接入不同系统的能力，如系统渲染管线、生命周期调度等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UI开发框架开发应用时，主要涉及以下开发过程。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "简介"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "相关指导"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "学习ArkTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了ArkTS的基本语法、状态管理和渲染控制的场景。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
              children: "基本语法"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
              children: "状态管理"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview",
              children: "渲染控制"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件导航和页面路由"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何设置组件间的导航以及页面路由。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
              children: "组件导航（推荐）"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing",
              children: "页面路由"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "组件布局"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了几种常用的布局方式。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview",
              children: "常用布局"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "列表与网格"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了几种列表与网格组件的使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview",
              children: "列表与网格"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了输入框、富文本和属性字符串等文本组件的使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display",
              children: "文本显示"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input",
              children: "文本输入"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor",
              children: "富文本"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol",
              children: "图标小符号"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string",
              children: "属性字符串"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "媒体展示"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了几种媒体展示组件的使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display",
              children: "显示图片 (Image)"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player",
              children: "视频播放 (Video)"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping",
              children: "创建轮播 (Swiper)"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper",
              children: "创建弧形轮播 (ArcSwiper)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "按钮与选择"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了几种常用按钮与选择组件的使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-form-selection/arkts-forms-overview",
              children: "按钮与选择组件"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "添加组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了XComponent和Progress组件的使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
              children: "自定义渲染 (XComponent)"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator",
              children: "进度条 (Progress)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用弹窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了弹窗的应用场景与使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview",
              children: "使用弹出框"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview",
              children: "菜单"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-overview",
              children: "气泡提示"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-modal-overview",
              children: "绑定模态页面"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast",
              children: "即时反馈"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager",
              children: "设置浮层"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "显示图形"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何显示图片、绘制自定义几何图形以及使用画布绘制自定义图形。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-draw-graphics/arkts-shape-overview",
              children: "几何图形"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas",
              children: "画布"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "添加交互响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了交互基础机制、输入设备与事件和手势响应的能力。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles",
              children: "交互基础机制"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rkts-interaction-development-guide-raw-input-event",
              children: "输入设备与事件"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rkts-interaction-development-guide-support-gesture",
              children: "手势响应"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了组件和页面使用动画的典型场景。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview",
              children: "属性动画"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview",
              children: "转场动画"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation",
              children: "粒子动画"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation",
              children: "组件动画"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve",
              children: "动画曲线"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing",
              children: "动画衔接"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect",
              children: "动画效果"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animator",
              children: "帧动画"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用自定义能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了自定义能力的基本概念和如何使用自定义能力。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition",
              children: "自定义组合"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node",
              children: "自定义节点"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier",
              children: "自定义扩展"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI国际化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍如何实现应用程序UI界面的国际化，包含资源配置和镜像布局。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-internationalization",
              children: "UI国际化"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍与适老化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了无障碍和适老化的使用场景和使用方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility",
              children: "支持无障碍"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation",
              children: "支持适老化"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "主题设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了应用级和页面级的主题设置能力。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation",
              children: "应用深浅色适配"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-theme/theme_skinning",
              children: "设置应用内主题换肤"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI系统场景化能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何使用UIContext中对应的接口获取与实例绑定的对象，以及全屏方式拉起元服务的方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface",
              children: "使用UI上下文接口操作界面"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent",
              children: "全屏启动元服务组件"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用规则",
      children: "通用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "默认单位"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["表示长度的入参单位默认为vp，即入参为number类型、以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
            children: "Length"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
            children: "Dimension"
          }), "类型中的number单位为vp。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "异常值处理"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入的参数为异常（undefined，null或无效值）时，处理规则如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）对应参数有默认值，按默认值处理；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）对应参数无默认值，该参数对应的属性或接口不生效。"
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
934693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797902-efad74e689a63e63a648df75abf7241f.png");

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