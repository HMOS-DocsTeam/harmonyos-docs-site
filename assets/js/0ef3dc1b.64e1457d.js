"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["566646"], {
864537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_rotation_window_rotation_md_0ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-rotation-window-rotation-md-0ef.json
var site_docs_arkui_window_manager_window_rotation_window_rotation_md_0ef_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-rotation/window-rotation","title":"窗口旋转","description":"窗口旋转简介","source":"@site/docs/arkui/window-manager/window-rotation/window-rotation.md","sourceDirName":"arkui/window-manager/window-rotation","slug":"/arkui/window-manager/window-rotation/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-rotation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"窗口旋转","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-rotation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理应用窗口（FA模型）","permalink":"/harmonyos-docs-site/arkui/window-manager/application-window-fa/"},"next":{"title":"窗口元数据配置","permalink":"/harmonyos-docs-site/arkui/window-manager/window-config-m/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-rotation/window-rotation.md


const frontMatter = {
	title: '窗口旋转',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-rotation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '窗口旋转';

const assets = {

};



const toc = [{
  "value": "窗口旋转简介",
  "id": "窗口旋转简介",
  "level": 2
}, {
  "value": "窗口旋转与屏幕方向的关系",
  "id": "窗口旋转与屏幕方向的关系",
  "level": 2
}, {
  "value": "旋转接口的行为限制",
  "id": "旋转接口的行为限制",
  "level": 2
}, {
  "value": "旋转策略及设备差异性",
  "id": "旋转策略及设备差异性",
  "level": 2
}, {
  "value": "固定方向类型",
  "id": "固定方向类型",
  "level": 3
}, {
  "value": "自动旋转方向类型",
  "id": "自动旋转方向类型",
  "level": 3
}, {
  "value": "临时方向类型",
  "id": "临时方向类型",
  "level": 3
}, {
  "value": "其他方向类型",
  "id": "其他方向类型",
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
        id: "窗口旋转",
        children: "窗口旋转"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "窗口旋转简介",
      children: "窗口旋转简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动设备在用户手中可以任意改变握持方向。在特定场景下，应用需要根据用户握持的方向调整显示页面，或者主动指定在固定方向显示页面，以提供更好的用户体验。比如，双手操作的游戏更倾向于在横屏显示，视频类应用更倾向于在全屏播放和小窗播放间自由切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了横竖屏旋转功能，可满足应用开发者设置应用不同方向的显示策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备有四个显示方向：当用户正向握持设备时，若屏幕的宽度大于高度时，称为横屏（LANDSCAPE），与之倒置的方向则称为反向横屏（LANDSCAPE_INVERTED）；若屏幕高度大于宽度时，称为竖屏（PORTRAIT），与之倒置的方向称为反向竖屏（PORTRAIT_INVERTED）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统会根据应用设置的旋转策略、设备当前握持方向（重力传感器Sensor角度）、系统旋转锁定开关状态（可下拉控制中心查看/设置）、应用所处的场景（比如分屏、悬浮窗、应用后台等），综合判断并决定应用的显示方向。系统设置旋转策略均针对主窗口生效，对非主窗口设置旋转策略不会影响显示方向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“应用所处的场景”影响显示方向的大致原则为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若应用主窗口全屏显示，改变旋转策略后，显示方向变化会立刻生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若应用主窗口没有全屏显示，改变旋转策略后不会立刻生效，当应用主窗进入全屏显示后方向变化才会生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同旋转策略之间的差异及设备相关差异性可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%97%8B%E8%BD%AC%E7%AD%96%E7%95%A5%E5%8F%8A%E8%AE%BE%E5%A4%87%E5%B7%AE%E5%BC%82%E6%80%A7",
        children: "旋转策略及设备差异性"
      }), "。不同应用场景的旋转策略呈现与限制可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%97%8B%E8%BD%AC%E6%8E%A5%E5%8F%A3%E7%9A%84%E8%A1%8C%E4%B8%BA%E9%99%90%E5%88%B6",
        children: "旋转接口的行为限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "窗口旋转与屏幕方向的关系",
      children: "窗口旋转与屏幕方向的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常说的窗口旋转是指应用调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation()"
      }), "接口设置旋转策略，来改变应用在屏幕上的显示方向。更准确的说法是，应用通过旋转策略改变了屏幕的显示方向，系统通过屏幕显示方向变化，来改变屏幕上应用和系统组件（桌面、状态栏、下拉控制中心、下拉通知中心等）的显示方向和布局。这里的关键点是应用设置旋转策略后，影响的不仅是应用自身，还会影响屏幕上所有可见元素，也包括后台不可见的元素。这些元素最终通过一个旋转动画，从一个方向过渡到另外一个方向。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供了屏幕属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display",
        children: "@ohos.display"
      }), "来获取屏幕的基本信息，其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "Orientation"
      }), "即表示当前设备屏幕的显示方向。窗口旋转后屏幕属性对应的Orientation也会相应改变。需要注意，旋转策略的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#orientation9",
        children: "Orientation"
      }), "与屏幕属性的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "Orientation"
      }), "是不同的概念，尤其是四个方向代表的名称都一样，代表的含义是有所区别的。区别差异请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction",
        children: "窗口方向"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用窗口的宽高比与屏幕属性的Orientation没有直接关系，不建议根据屏幕属性的Orientation来做窗口布局适配。屏幕属性的Orientation仅用于辅助sensor和相机的方向修正。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "旋转接口的行为限制",
      children: "旋转接口的行为限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在前台时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation()"
      }), "接口设置旋转策略，系统会立刻判断当前屏幕的显示方向是否满足应用设置的旋转策略。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果不满足，一般情况下系统会立刻触发一次旋转动效，调整应用的方向以满足旋转策略要求。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景1：用户在应用旋转策略为“PORTRAIT”下竖屏握持手机，若应用改变旋转策略为“LANDSCAPE”。此时，应用显示方向会立刻旋转到横屏，即使用户仍然竖屏方向握持手机。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景2：用户在应用旋转策略为“PORTRAIT”下横屏握持手机，若应用改变旋转策略为“AUTO_ROTATION”。此时，应用的显示方向与握持角度不一致，应用会从竖屏显示立刻旋转到横屏显示。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特殊情况下，比如悬浮窗、分屏、多任务、应用后台、自由多窗等场景，应用设置旋转策略后，系统忽略此旋转策略，接口可正常调用，但应用显示方向并不会改变。仅当应用退出这些场景时，系统才根据应用设置的旋转策略，重新调整应用的显示布局。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景1：在分屏、悬浮窗等特殊的场景，系统为了保持显示效果，会强制应用按照竖屏方向布局显示。此时，若应用改变旋转策略为“LANDSCAPE”，应用显示方向不会变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景2：在自由多窗模式下，应用都会被强制成小窗显示。此时，若应用修改旋转策略，均不会触发旋转。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此外，应用的显示方向跟sensor强相关，在无sensor的设备上，设置旋转策略同样不会生效。比如：TV等设备没有sensor，可正常调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation()"
      }), "接口，但实际应用方向不会变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "旋转策略及设备差异性",
      children: "旋转策略及设备差异性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "model.json5配置文件"
      }), "中配置\"orientation\"字段或者在运行时调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setpreferredorientation9-1",
        children: "setPreferredOrientation()"
      }), "接口设置\"orientation\"字段，设置应用的显示方向。无论是哪种方式设置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#orientation9",
        children: "orientation字段"
      }), "含义都一样，即旋转显示方向类型枚举（也叫旋转策略）。详情可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-landscape-and-portrait-development#section58861731201715",
        children: "设置窗口的旋转策略"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了18种的方向类型枚举，以应对不同场景的需要。根据使用场景的不同，这些方向类型可分为：固定方向类型、自动旋转方向类型、临时方向类型和其他方向类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "固定方向类型",
      children: "固定方向类型"
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
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示竖屏显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LANDSCAPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示横屏显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PORTRAIT_INVERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示反向竖屏显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LANDSCAPE_INVERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示反向横屏显示模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这4种方向类型通常用于设置应用固定在设备的一个方向显示，如游戏类应用。不论用户如何握持设备，应用的显示方向均不会变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(967675)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["旋转策略的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#orientation9",
        children: "Orientation"
      }), "与屏幕属性的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "Orientation"
      }), "是不同的概念，尤其是四个方向代表的名称都一样，代表的含义是有所区别的。区别差异请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction",
        children: "窗口方向"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动旋转方向类型",
      children: "自动旋转方向类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AUTO_ROTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_ROTATION_PORTRAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_ROTATION_LANDSCAPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_ROTATION_RESTRICTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且受控制中心的旋转开关控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_ROTATION_PORTRAIT_RESTRICTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且受控制中心的旋转开关控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_ROTATION_LANDSCAPE_RESTRICTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且受控制中心的旋转开关控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_ROTATION_UNSPECIFIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定（如在某种设备，可以旋转到竖屏、横屏、反向横屏三个方向，无法旋转到反向竖屏）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这7种显示方向类型，通常用于设置应用可以跟随重力传感器调整应用方向，以使得用户握持设备时应用始终保持正向显示页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这7种方向类型根据不同的使用场景，也存在一些差异。比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "带有“RESTRICTED”字样的类型“AUTO_ROTATION_RESTRICTED”、“AUTO_ROTATION_PORTRAIT_RESTRICTED”和“AUTO_ROTATION_LANDSCAPE_RESTRICTED”受控制中心的旋转开关控制。当旋转锁定打开时，设置了该类型的应用会固定在锁定的方向，不再跟随重力传感器调整页面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "带有“PORTRAIT”或“LANDSCAPE”的类型，将应用限制在“竖屏/反向竖屏”，“横屏/反向横屏”两个方向旋转。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“AUTO_ROTATION_UNSPECIFIED”是比较特殊的自动旋转类型。该类型既支持自动旋转，又受控制中心旋转锁定控制，与“AUTO_ROTATION_RESTRICTED”非常类似。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303252)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“AUTO_ROTATION_RESTRICTED”和“AUTO_ROTATION_UNSPECIFIED”两个旋转策略在功能上非常相似，都支持受到旋转锁定开关控制自动旋转。但在不同的产品上，这两个旋转策略还是有一些区别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统旋转锁定开关关闭"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "“AUTO_ROTATION_RESTRICTED”策略可以旋转到设备的四个方向。而“AUTO_ROTATION_UNSPECIFIED”策略，可以旋转到的方向受系统搭载的产品形态影响。在直板机或者设备处于类直板机形态时，该方向类型的应用支持旋转到竖屏、横屏、反向横屏三个方向，无法旋转到反向竖屏；而在平板或者设备处于类平板形态时，支持应用旋转到设备的四个方向。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统旋转锁定开关打开"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在直板机或者设备处于类直板机形态时，“AUTO_ROTATION_RESTRICTED”和“AUTO_ROTATION_UNSPECIFIED”在都不支持锁定在横屏。当应用设置为这两个旋转策略且旋转到横屏时，再下拉控制中心开启旋转锁定，那么应用会被强制旋转到竖屏并保持旋转锁定状态。在平板或者设备处于类平板形态时， 这两个旋转策略则支持锁定在横屏。如果应用希望在直板机上支持自动旋转，且可以锁定到当前方向，则推荐优先使用“USER_ROTATION”类型的旋转策略。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "临时方向类型",
      children: "临时方向类型"
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
            children: "USER_ROTATION_PORTRAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用时临时旋转到竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_ROTATION_LANDSCAPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用时临时旋转到横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_ROTATION_PORTRAIT_INVERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用时临时旋转到反向竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_ROTATION_LANDSCAPE_INVERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用时临时旋转到反向横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这4种方向类型支持根据重力传感器实现自动旋转，同时又受控制中心旋转锁定控制。它们与“AUTO_ROTATION_RESTRICTED”的区别在于，这4种方向类型在应用设置时，会立即临时将应用旋转到指定方向。例如，用户竖屏握持手机且应用竖屏显示，当应用设置旋转策略为调整“USER_ROTATION_LANDSCAPE”时，应用会立刻旋转到横屏显示。这4种类型通常用于视频类应用在小窗播放进入全屏播放时使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824248)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“USER_ROTATION_PORTRAIT_INVERTED”是比较特殊的临时方向类型，在不同的设备上有差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在直板机或设备处于类直板机形态时，设置“USER_ROTATION_PORTRAIT_INVERTED”旋转策略的应用无法临时旋转为反向竖屏，而是仍然以竖屏方向显示，且自动旋转时只能旋转到竖屏、横屏、反向横屏三个方向，无法旋转到反向竖屏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在平板或者设备处于类平板形态时，在旋转锁定开关关闭时，可以支持自动旋转到竖屏、反向竖屏、横屏、反向横屏四个方向。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他方向类型",
      children: "其他方向类型"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "UNSPECIFIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未定义方向模式，由系统判定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示锁定模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOLLOW_DESKTOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示跟随桌面的旋转模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这3种方向类型是在以下特定场景下使用的："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“UNSPECIFIED”是未定义方向类型，即当应用既没有在model.json5文件设置，也没有在运行时调用setPreferredOrientation()设置时，系统默认应用使用该类型。此时，应用的显示方向由系统判定。通常直板机上默认竖屏显示且不支持旋转；平板上支持旋转到四个方向，且受控制中心系统旋转锁定开关控制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“LOCKED”是锁定模式，通常用于应用拉起应用场景。设置该策略的应用，被其他应用拉起时，保持和前一个应用相同的方向。此策略生效时，应用的方向也可能因为应用的切换等原因而改变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“FOLLOW_DESKTOP”是跟随桌面模式。通常直板机桌面固定竖屏显示不可旋转，平板桌面可以旋转。而折叠机比较特别，在折叠态时桌面与直板机一样不可旋转，但是在展开态时与平板规格一样可以旋转。"
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
303252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
824248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
967675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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