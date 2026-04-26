"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["589123"], {
404965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_multi_window_guide_multi_window_intro_multi_window_intro_md_967_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-multi-window-guide-multi-window-intro-multi-window-intro-md-967.json
var site_docs_arkui_window_manager_multi_window_guide_multi_window_intro_multi_window_intro_md_967_namespaceObject = JSON.parse('{"id":"arkui/window-manager/multi-window-guide/multi-window-intro/multi-window-intro","title":"智慧多窗简介","description":"智慧多窗是一种多任务处理解决方案，它允许用户在同一时间、同一屏幕上以悬浮窗、分屏或全景多窗的方式同时运行多个应用窗口。在智慧多窗的显示模式下，用户可以根据自己的需求，合理安排应用窗口的位置和大小。","source":"@site/docs/arkui/window-manager/multi-window-guide/multi-window-intro/multi-window-intro.md","sourceDirName":"arkui/window-manager/multi-window-guide/multi-window-intro","slug":"/arkui/window-manager/multi-window-guide/multi-window-intro/","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"智慧多窗简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-intro","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"全局闪控球开发指导","permalink":"/harmonyos-docs-site/arkui/window-manager/floatingball-guide/"},"next":{"title":"应用声明支持智慧多窗","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/multi-window-guide/multi-window-intro/multi-window-intro.md


const frontMatter = {
	title: '智慧多窗简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-intro',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '智慧多窗简介';

const assets = {

};



const toc = [{
  "value": "悬浮窗",
  "id": "悬浮窗",
  "level": 2
}, {
  "value": "悬浮窗的类型",
  "id": "悬浮窗的类型",
  "level": 3
}, {
  "value": "悬浮窗的触发及恢复方式",
  "id": "悬浮窗的触发及恢复方式",
  "level": 3
}, {
  "value": "适配注意事项",
  "id": "适配注意事项",
  "level": 3
}, {
  "value": "分屏",
  "id": "分屏",
  "level": 2
}, {
  "value": "分屏的触发方式",
  "id": "分屏的触发方式",
  "level": 3
}, {
  "value": "全景多窗",
  "id": "全景多窗",
  "level": 2
}, {
  "value": "全景多窗的样式",
  "id": "全景多窗的样式",
  "level": 3
}, {
  "value": "全景多窗的进入方式",
  "id": "全景多窗的进入方式",
  "level": 3
}, {
  "value": "适配注意事项",
  "id": "适配注意事项-1",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "智慧多窗简介",
        children: "智慧多窗简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智慧多窗是一种多任务处理解决方案，它允许用户在同一时间、同一屏幕上以悬浮窗、分屏或全景多窗的方式同时运行多个应用窗口。在智慧多窗的显示模式下，用户可以根据自己的需求，合理安排应用窗口的位置和大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "悬浮窗",
      children: "悬浮窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "悬浮窗是一种在设备屏幕上悬浮的非全屏应用窗口。一般用于在已有全屏任务运行的基础上，临时处理另一个任务，或短时间多任务并行使用。如浏览网页的同时回复消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对手机，一个屏幕内最多支持显示一个悬浮窗；在折叠屏手机展开态、平板类设备上，一个屏幕内最多支持显示两个悬浮窗。在超出悬浮窗显示最大个数限制时，打开新的悬浮窗会替换最近久未操作的悬浮窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "悬浮窗的类型",
      children: "悬浮窗的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "悬浮窗的常见类型主要分为如下两种："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "竖向悬浮窗：一般用于新闻资讯、社交以及购物类应用等场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(302511)/* ["default"] */.A) + "",
            width: "525",
            height: "282"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "横向悬浮窗：主要用于横向游戏和视频全屏播放的场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(13166)/* ["default"] */.A) + "",
            width: "525",
            height: "262"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "悬浮窗的触发及恢复方式",
      children: "悬浮窗的触发及恢复方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "悬浮窗的触发方式有以下几种："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手势触发：应用全屏时从屏幕底部向上滑至右上方热区，松手后可开启悬浮窗模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(396664)/* ["default"] */.A) + "",
            width: "4980",
            height: "2386"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知消息下拉触发：在系统接收到通知消息未收起时，可直接下拉此通知消息开启悬浮窗模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(86468)/* ["default"] */.A) + "",
            width: "525",
            height: "306"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "侧边Dock触发：侧滑调出侧边Dock栏，点击Dock上的应用，支持悬浮窗的应用以悬浮窗模式开启。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(820757)/* ["default"] */.A) + "",
            width: "525",
            height: "298"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分屏切换悬浮窗：分屏时，按住分屏应用顶部横条，拖拽到相应的热区，应用从分屏切换到悬浮窗模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(177845)/* ["default"] */.A) + "",
            width: "525",
            height: "216"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "悬浮窗的恢复方式主要有以下两种："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多任务中心中恢复：对于已开启悬浮窗模式的应用，在进入多任务中心时，悬浮窗应用同全屏应用一起显示在多任务中心，用户选择点击悬浮窗应用卡片时可恢复悬浮窗模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(824962)/* ["default"] */.A) + "",
            width: "4084",
            height: "2384"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "侧边条恢复：对于已开启悬浮窗模式的应用，其最小化后会暂存在屏幕上的侧边条中，点击或者长按侧边条可展开任务选择界面，选择点击侧边条中悬浮窗应用卡片时可恢复悬浮窗模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(234423)/* ["default"] */.A) + "",
            width: "525",
            height: "200"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "适配注意事项",
      children: "适配注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对在Tablet设备上运行的PC应用，不支持悬浮窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用module.json5配置文件中的设备类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
        children: "deviceTypes标签"
      }), "包含\"2in1\"且不包含\"phone\"时，系统判定其为PC应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分屏",
      children: "分屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分屏一般用于两个应用长时间并行使用的场景。例如：边看购物攻略边浏览商品；边看视频边玩游戏；看学习类视频的同时做笔记等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分屏的触发方式",
      children: "分屏的触发方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分屏通过手势触发：应用全屏时，从屏幕底部向上滑至左上方热区，进入待分屏状态，点击桌面另一个支持分屏的应用图标或卡片，可形成分屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(372984)/* ["default"] */.A) + "",
            width: "10494",
            height: "3432"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用自主启动分屏：除了通过手势触发分屏之外，应用可以自主选择启动分屏，具体步骤可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support#%E5%BA%94%E7%94%A8%E5%86%85%E5%88%86%E5%B1%8F",
            children: "应用内分屏"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "侧边Dock栏触发：长按Dock栏中的应用图标并拖出，和前台支持分屏的全屏应用形成分屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(244902)/* ["default"] */.A) + "",
            width: "525",
            height: "221"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "悬浮窗切分屏：按住悬浮窗顶部横条，拖到相应热区，悬浮窗和前台全屏应用形成分屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(398845)/* ["default"] */.A) + "",
            width: "525",
            height: "216"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "全景多窗",
      children: "全景多窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 5.0.1开始，折叠机、部分Tablet设备支持全景多窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全景多窗旨在帮助用户在折叠机设备展开态时高效处理多个任务。通过全景多窗，用户可以突破物理屏幕的围墙，实现在同一屏幕上同时运行多个应用，并在这些应用之间快速切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全景多窗在折叠机设备上最多可支持三个窗口同时运行（部分Tablet设备最多可支持四个窗口）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全景多窗的样式",
      children: "全景多窗的样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前全景多窗在双折叠设备上支持小窗口与大窗口两个档位显示，在三折叠与Tablet设备上支持小窗口、中窗口、大窗口三个档位显示，且窗口的档位与位置支持调节。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双折叠设备全景多窗窗口档位及窗口宽高比："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(693103)/* ["default"] */.A) + "",
            width: "851",
            height: "450"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "三折叠与Tablet设备全景多窗窗口档位及窗口宽高比："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(23587)/* ["default"] */.A) + "",
            width: "872",
            height: "351"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "窗口状态分为平铺和侧身两种状态："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(652580)/* ["default"] */.A) + "",
            width: "868",
            height: "459"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全景多窗的进入方式",
      children: "全景多窗的进入方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全景多窗通过手势触发："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用全屏时，从屏幕底部向上滑至上方中间热区，点击桌面另一个支持全景多窗的应用图标或卡片，可形成全景多窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(983065)/* ["default"] */.A) + "",
            width: "856",
            height: "279"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用分屏时，从屏幕底部向上滑至上方中间热区，点击桌面另一个支持全景多窗的应用图标或卡片，可形成全景多窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(984499)/* ["default"] */.A) + "",
            width: "855",
            height: "279"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用分屏时，从屏幕底部向上滑至左上方热区，点击桌面另一个支持全景多窗的应用图标或卡片，可形成三小窗全景多窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(728325)/* ["default"] */.A) + "",
            width: "857",
            height: "280"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全景多窗通过顶部横条触发："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用全屏时，点击全屏应用顶部横条，选择“全景多窗”，点击桌面另一个支持全景多窗的应用图标或卡片，可形成全景多窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(649762)/* ["default"] */.A) + "",
            width: "10494",
            height: "3432"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用分屏时，点击分屏应用顶部横条，选择“增加窗口”，点击桌面另一个支持全景多窗的应用图标或卡片，可形成全景多窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(299491)/* ["default"] */.A) + "",
            width: "861",
            height: "281"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全景多窗通过分屏拖拽触发：应用分屏时，调节分屏比例到相应热区，进入全景多窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(956541)/* ["default"] */.A) + "",
            width: "863",
            height: "355"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "适配注意事项-1",
      children: "适配注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["全景多窗侧身窗口为不可见窗口，可以通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowvisibilitychange11",
        children: "on('windowVisibilityChange')"
      }), "感知应用是否处于侧身。"]
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
820757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478189-c6587d5666126319ef552b60fe9e4313.png");

},
23587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478193-2199c4d64b49e1299604456cb65d3b12.jpg");

},
728325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478195-0347ea89a96d27a0d3756dba271e89f1.png");

},
956541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958196-200301de1f7243bb83a3d5640f892ec5.png");

},
13166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
86468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
398845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438237-70a6d53971515b5ddcd33973e59cb250.png");

},
824962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438235-da41cd99c1c478af981919d8214772c5.png");

},
693103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958192-d95b8b6815a246122c06d3cbfada1f11.jpg");

},
372984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478191-75157fc90bfa25e6f4a944efb5e80b86.png");

},
396664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438233-a429daee249253319865d236b7501bd1.jpg");

},
299491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438241-a72c47655a96644ba1e3a1ea46e85ea0.png");

},
244902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798542-655de7f7b5d0c3845e7ab2e63ad5b2ed.png");

},
649762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798546-77a9df6146a3a9896c3ec506be9aeba1.png");

},
234423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
302511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
177845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798540-f26cf4fbeec7da9ddb442efa7760950b.png");

},
983065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438239-56b3e634bb1b2f435178de9420114229.png");

},
984499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958194-c7e5829f80d95c9110741127b15740db.png");

},
652580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798544-91156598a8c54cf15d6fb8045d7777db.png");

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