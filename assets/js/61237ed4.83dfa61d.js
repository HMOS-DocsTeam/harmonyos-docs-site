"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["542062"], {
832976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_expand_safe_area_ts_universal_attributes_expand_safe_area_md_612_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-layout-property-ts-universal-attributes-expand-safe-area-ts-universal-attributes-expand-safe-area-md-612.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_expand_safe_area_ts_universal_attributes_expand_safe_area_md_612_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area","title":"安全区域","description":"安全区域是指页面的显示区域，默认情况下开发者开发的界面都布局在安全区域内，不与系统设置的避让区比如状态栏、导航栏区域重叠。提供属性方法允许开发者设置组件绘制内容突破安全区域的限制，通过expandSafeArea属性支持组件不改变布局情况下扩展其绘制区域至安全区外，通过设置setKeyboardAvoidMode来配置虚拟键盘弹出时页面的避让模式。页面中有标题栏等文字不希望和避让区重叠时，建议对组件设置expandSafeArea属性实现沉浸式效果，也可直接通过窗口接口setWindowLayoutFullScreen实现全屏沉浸式效果。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"安全区域","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-expand-safe-area"},"sidebar":"ref","previous":{"title":"Flex布局","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-flex-layout/ts-universal-attributes-flex-layout"},"next":{"title":"组件级像素取整","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-pixelroundforcomponent/ts-universal-attributes-pixelroundforcomponent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area.md


const frontMatter = {
	title: '安全区域',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-expand-safe-area'
};
const contentTitle = '安全区域';

const assets = {

};



const toc = [{
  "value": "expandSafeArea",
  "id": "expandsafearea",
  "level": 2
}, {
  "value": "SafeAreaType",
  "id": "safeareatype",
  "level": 2
}, {
  "value": "SafeAreaEdge",
  "id": "safeareaedge",
  "level": 2
}, {
  "value": "setKeyboardAvoidMode11+",
  "id": "setkeyboardavoidmode11",
  "level": 2
}, {
  "value": "getKeyboardAvoidMode11+",
  "id": "getkeyboardavoidmode11",
  "level": 2
}, {
  "value": "ignoreLayoutSafeArea20+",
  "id": "ignorelayoutsafearea20",
  "level": 2
}, {
  "value": "LayoutSafeAreaType12+",
  "id": "layoutsafeareatype12",
  "level": 2
}, {
  "value": "LayoutSafeAreaEdge12+",
  "id": "layoutsafeareaedge12",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（实现沉浸式效果）",
  "id": "示例1实现沉浸式效果",
  "level": 3
}, {
  "value": "示例2（同时设置固定宽高和expandSafeArea属性）",
  "id": "示例2同时设置固定宽高和expandsafearea属性",
  "level": 3
}, {
  "value": "示例3（键盘避让时固定背景图位置）",
  "id": "示例3键盘避让时固定背景图位置",
  "level": 3
}, {
  "value": "示例4（设置键盘避让模式为压缩）",
  "id": "示例4设置键盘避让模式为压缩",
  "level": 3
}, {
  "value": "示例5（设置键盘避让模式为上抬）",
  "id": "示例5设置键盘避让模式为上抬",
  "level": 3
}, {
  "value": "示例6（切换避让模式）",
  "id": "示例6切换避让模式",
  "level": 3
}, {
  "value": "示例7（滚动类容器扩展安全区）",
  "id": "示例7滚动类容器扩展安全区",
  "level": 3
}, {
  "value": "示例8（ignoreLayoutSafeArea延伸组件布局范围）",
  "id": "示例8ignorelayoutsafearea延伸组件布局范围",
  "level": 3
}, {
  "value": "示例9（ignoreLayoutSafeArea配合LayoutPolicy.matchParent延伸组件布局范围）",
  "id": "示例9ignorelayoutsafearea配合layoutpolicymatchparent延伸组件布局范围",
  "level": 3
}, {
  "value": "示例10（expandSafeArea与ignoreLayoutSafeArea的区别）",
  "id": "示例10expandsafearea与ignorelayoutsafearea的区别",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "安全区域",
        children: "安全区域"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安全区域是指页面的显示区域，默认情况下开发者开发的界面都布局在安全区域内，不与系统设置的避让区比如状态栏、导航栏区域重叠。提供属性方法允许开发者设置组件绘制内容突破安全区域的限制，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#expandsafearea",
        children: "expandSafeArea"
      }), "属性支持组件不改变布局情况下扩展其绘制区域至安全区外，通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setkeyboardavoidmode11",
        children: "setKeyboardAvoidMode"
      }), "来配置虚拟键盘弹出时页面的避让模式。页面中有标题栏等文字不希望和避让区重叠时，建议对组件设置expandSafeArea属性实现沉浸式效果，也可直接通过窗口接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
        children: "setWindowLayoutFullScreen"
      }), "实现全屏沉浸式效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971125)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "摄像头挖孔区域不属于避让区，页面默认不避让挖孔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，可在module.json5中添加以下配置项，摄像头挖孔区域会视为避让区，实现页面默认避让挖孔："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"metadata\": ["
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"name\": \"avoid_cutout\","
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"value\": \"true\","
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "],"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandsafearea",
      children: "expandSafeArea"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制组件扩展其安全区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(655803)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置expandSafeArea属性进行组件绘制扩展时，建议组件尺寸不要设置固定宽高（百分比除外），当设置固定宽高（包括设置'auto'）时，扩展安全区域的方向只支持[SafeAreaEdge.TOP, SafeAreaEdge.START]，扩展后的组件尺寸保持不变。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全区域不会限制内部组件的布局和大小，不会裁剪内部组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当父容器为滚动容器时，组件设置expandSafeArea属性后，自身不会延伸，但仍可触发其子节点中设置了expandSafeArea的延伸范围更新。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置expandSafeArea()时，不传参，走默认值处理；设置expandSafeArea([],[])时，相当于入参是空数组，此时expandSafeArea属性设置无效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件设置expandSafeArea生效的条件为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.type为SafeAreaType.KEYBOARD时默认生效，表现为组件不避让键盘。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.设置其他type，组件的边界与安全区域重合时组件能够延伸到安全区域下。例如：设备顶部状态栏高度100，那么组件在屏幕中的绝对位置需要为0 <= y <= 100。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件延伸到避让区时，在避让区的事件如点击事件等可能会被系统拦截，优先给状态栏等系统组件响应。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["滚动类容器内的组件不建议设置expandSafeArea属性，如果设置，需要按照组件嵌套关系，将当前节点到滚动类祖先容器间所有直接节点设置expandSafeArea属性，否则expandSafeArea属性在滚动后可能会失效，写法参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%A4%BA%E4%BE%8B7%E6%BB%9A%E5%8A%A8%E7%B1%BB%E5%AE%B9%E5%99%A8%E6%89%A9%E5%B1%95%E5%AE%89%E5%85%A8%E5%8C%BA",
            children: "示例7"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "expandSafeArea属性仅作用于当前组件，不会向父组件或子组件传递，因此使用过程中，所有相关组件均需配置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时设置expandSafeArea和position属性时，position属性会优先生效，expandSafeArea属性会后生效。对于未设置position、offset等绘制属性的组件，如果其边界未与避让区重叠，设置expandSafeArea属性将不生效，如弹窗和半模态组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于expandSafeArea属性无法生效的场景，若要将组件部署在避让区，需要手动调整组件的坐标。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "#safeareatype",
              children: "SafeAreaType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置扩展安全区域的类型。未添加", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-metadata/js-apis-bundlemanager-metadata",
              children: "Metadata"
            }), "配置项时，页面不避让挖孔，CUTOUT类型不生效。  默认值：[SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD]  非法值：按默认值处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "edges"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "#safeareaedge",
              children: "SafeAreaEdge"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置扩展安全区域的边缘。  默认值：[SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END]  非法值：按默认值处理。  扩展至所有避让区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "safeareatype",
      children: "SafeAreaType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展安全区域的枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认非安全区域，包括状态栏、导航栏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CUTOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的非安全区域，例如刘海屏或挖孔屏区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "safeareaedge",
      children: "SafeAreaEdge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展安全区域的边缘。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上方区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下方区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前部区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尾部区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setkeyboardavoidmode11",
      children: "setKeyboardAvoidMode11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setKeyboardAvoidMode(value: KeyboardAvoidMode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制虚拟键盘抬起时页面的避让模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-e/arkts-apis-uicontext-e#keyboardavoidmode11",
              children: "KeyboardAvoidMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置虚拟键盘抬起时页面的避让模式。  默认值：KeyboardAvoidMode.OFFSET，键盘抬起时默认避让模式为上抬。  setKeyboardAvoidMode传入异常值时，该属性设置不生效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195418)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KeyboardAvoidMode.RESIZE模式会压缩页面大小，页面中设置百分比宽高的组件会跟随页面压缩，而直接设置宽高的组件会按设置的固定大小布局。设置KeyboardAvoidMode的RESIZE模式时，expandSafeArea([SafeAreaType.KEYBOARD],[SafeAreaEdge.BOTTOM])不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KeyboardAvoidMode.NONE模式配置页面不避让键盘，页面会被抬起的键盘遮盖。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["setKeyboardAvoidMode针对页面生效，对于弹窗类组件不生效，比如Dialog、Popup、Menu、BindSheet、BindContentCover、Toast、OverlayManager。弹窗类组件的避让模式可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions对象说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getkeyboardavoidmode11",
      children: "getKeyboardAvoidMode11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getKeyboardAvoidMode(): KeyboardAvoidMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回虚拟键盘抬起时页面的避让模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-e/arkts-apis-uicontext-e#keyboardavoidmode11",
              children: "KeyboardAvoidMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回虚拟键盘抬起时的页面避让模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ignorelayoutsafearea20",
      children: "ignoreLayoutSafeArea20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展组件布局时的安全区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutsafeareatype12",
              children: "LayoutSafeAreaType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展布局安全区域的类型。  默认值：[LayoutSafeAreaType.SYSTEM]，扩展至所有安全区域，比如：状态栏，导航栏和组件级安全区（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#safeareapadding14",
              children: "safeAreaPadding"
            }), "）。  非法值：按默认值处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "edges"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array <", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutsafeareaedge12",
              children: "LayoutSafeAreaEdge"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展布局安全区的边缘，并且支持镜像能力。  默认值：[LayoutSafeAreaEdge.ALL]，扩展组件所有边缘。  非法值：按默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(329760)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["忽略布局安全区边缘的组件，如果其宽度或高度设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
        children: "LayoutPolicy.matchParent"
      }), "，其大小和位置都会改变，否则仅改变其位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依据safeAreaPadding累积功能，组件可扩展其安全区边缘到所有能感知的连续安全区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滚动类组件的子元素忽略布局安全区边缘时在滚动方向不考虑滚动组件自身及其父组件的安全区域，包括：List、ArcListItem、Grid、WaterFlow、Swiper和Tabs。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "忽略布局安全区属性.ignoreLayoutSafeArea和忽略渲染安全区属性.expandSafeArea都设置时，.ignoreLayoutSafeArea先生效，.expandSafeArea在前者基础上再生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutsafeareatype12",
      children: "LayoutSafeAreaType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展布局安全区域的枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置后，组件的布局范围可扩展至组件级安全区（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#safeareapadding14",
              children: "safeAreaPadding"
            }), "）和页面级安全区（状态栏、导航栏、挖孔区）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutsafeareaedge12",
      children: "LayoutSafeAreaEdge12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展安全区域的边缘。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上方区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下方区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["前部区域。LTR模式时表示左侧区域，RTL模式表示右侧区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "END20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["尾部区域。LTR模式时表示右侧区域，RTL模式表示左侧区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTICAL20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["垂直区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HORIZONTAL20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水平区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALL20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全部区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1实现沉浸式效果",
      children: "示例1（实现沉浸式效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过设置expandSafeArea属性向顶部和底部扩展安全区实现沉浸式效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SafeAreaExample1 {\n  @State text: string = ''\n  controller: TextInputController = new TextInputController()\n\n  build() {\n    Row() {\n      Column()\n        .width('100%')\n        .height('100%')\n        // $r('app.media.bg')需要替换为开发者所需的图像资源文件\n        .backgroundImage($r('app.media.bg'))\n        .backgroundImageSize(ImageSize.Cover)\n        .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806203)/* ["default"] */.A) + "",
        width: "288",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2同时设置固定宽高和expandsafearea属性",
      children: "示例2（同时设置固定宽高和expandSafeArea属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了同时设置固定宽高和expandSafeArea属性的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SafeAreaExample2 {\n  @State text: string = ''\n  controller: TextInputController = new TextInputController()\n\n  build() {\n    Column() {\n      TextInput({ text: this.text, placeholder: 'input your word...', controller: this.controller })\n        .placeholderFont({ size: 14, weight: 400 })\n        .width(320).height(40).offset({y: 120})\n        .fontSize(14).fontColor(Color.Black)\n        .backgroundColor(Color.White)\n    }\n    .height('780')\n    .width('100%')\n    .backgroundColor('rgb(179,217,235)')\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图：Column组件扩展至了顶部状态栏[SafeAreaEdge.TOP]，未扩展至底部导航条[SafeAreaEdge.BOTTOM]，扩展后的组件高度维持设置值不变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(36267)/* ["default"] */.A) + "",
        width: "290",
        height: "514"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3键盘避让时固定背景图位置",
      children: "示例3（键盘避让时固定背景图位置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过为背景图组件设置expandSafeArea属性，来实现拉起键盘进行避让时，背景图保持不动的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SafeAreaExample3 {\n  @State text: string = ''\n  controller: TextInputController = new TextInputController()\n\n  build() {\n    Row() {\n      Stack() {\n        Column()\n          .width('100%')\n          .height('100%')\n          // $r('app.media.bg')需要替换为开发者所需的图像资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundImageSize(ImageSize.Cover)\n          .expandSafeArea([SafeAreaType.KEYBOARD, SafeAreaType.SYSTEM])\n        Column() {\n          Button('Set caretPosition 1')\n            .onClick(() => {\n              this.controller.caretPosition(1)\n            })\n          TextInput({ text: this.text, placeholder: 'input your word...', controller: this.controller })\n            .placeholderFont({ size: 14, weight: 400 })\n            .width(320)\n            .height(40)\n            .offset({ y: 120 })\n            .fontSize(14)\n            .fontColor(Color.Black)\n            .backgroundColor(Color.White)\n        }.width('100%').alignItems(HorizontalAlign.Center)\n      }\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154360)/* ["default"] */.A) + "",
        width: "290",
        height: "584"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置键盘避让模式为压缩",
      children: "示例4（设置键盘避让模式为压缩）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过调用setKeyboardAvoidMode设置键盘避让模式为RESIZE模式，实现键盘抬起时page的压缩效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { KeyboardAvoidMode } from '@kit.ArkUI';\nexport default class EntryAbility extends UIAbility{\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // Main window is created, set main page for this ability\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      let keyboardAvoidMode = windowStage.getMainWindowSync().getUIContext().getKeyboardAvoidMode();\n      // 设置虚拟键盘抬起时压缩页面大小为减去键盘的高度\n    windowStage.getMainWindowSync().getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.RESIZE);\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct KeyboardAvoidExample1 {\n  build() {\n    Column() {\n      Row()\n        .width('100%')\n        .height('30%')\n        .backgroundColor(Color.Gray)\n      TextArea()\n        .width('100%')\n        .borderWidth(1)\n      Text('I can see the bottom of the page')\n        .width('100%')\n        .textAlign(TextAlign.Center)\n        .backgroundColor('rgb(179,217,235)')\n        .layoutWeight(1)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396857)/* ["default"] */.A) + "",
        width: "290",
        height: "584"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置键盘避让模式为上抬",
      children: "示例5（设置键盘避让模式为上抬）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过调用setKeyboardAvoidMode设置键盘避让模式为OFFSET模式，实现键盘抬起时page的上抬效果。但当输入光标距离屏幕底部的高度大于键盘高度时，page不会抬起，如本例中所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { KeyboardAvoidMode } from '@kit.ArkUI';\nexport default class EntryAbility extends UIAbility{\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // Main window is created, set main page for this ability\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      let keyboardAvoidMode = windowStage.getMainWindowSync().getUIContext().getKeyboardAvoidMode();\n      // 设置虚拟键盘抬起时把页面上抬直到露出光标\n    windowStage.getMainWindowSync().getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET);\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct KeyboardAvoidExample2 {\n  build() {\n    Column() {\n      Row()\n        .width('100%')\n        .height('30%')\n        .backgroundColor(Color.Gray)\n      TextArea()\n        .width('100%')\n        .borderWidth(1)\n      Text('I can see the bottom of the page')\n        .width('100%')\n        .textAlign(TextAlign.Center)\n        .backgroundColor('rgb(179,217,235)')\n        .layoutWeight(1)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64705)/* ["default"] */.A) + "",
        width: "427",
        height: "856"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6切换避让模式",
      children: "示例6（切换避让模式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过调用setKeyboardAvoidMode来实现OFFSET、RESIZE和NONE模式之间的切换，实现三种不同的键盘避让效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { KeyboardAvoidMode } from '@kit.ArkUI';\n@Entry\n@Component\n\nstruct KeyboardAvoidExample3 {\n  build() {\n    Column() {\n      Row({space:15}) {\n        Button('OFFSET')\n          .onClick(() => {\n            this.getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET);\n            hilog.info(0x0000, 'keyboardAvoidMode: %{public}s', JSON.stringify(this.getUIContext().getKeyboardAvoidMode()));\n          })\n          .layoutWeight(1)\n        Button('RESIZE')\n          .onClick(() => {\n            this.getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.RESIZE);\n            hilog.info(0x0000, 'keyboardAvoidMode: %{public}s', JSON.stringify(this.getUIContext().getKeyboardAvoidMode()));\n          })\n          .layoutWeight(1)\n        Button('NONE')\n          .onClick(() => {\n            this.getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.NONE);\n            hilog.info(0x0000, 'keyboardAvoidMode: %{public}s', JSON.stringify(this.getUIContext().getKeyboardAvoidMode()));\n          })\n          .layoutWeight(1)\n      }\n      .height('30%')\n      .width('100%')\n      .backgroundColor(Color.Gray)\n\n      TextArea()\n        .width('100%')\n        .borderWidth(1)\n      \n      Text('I can see the bottom of the page')\n        .width('100%')\n        .textAlign(TextAlign.Center)\n        .backgroundColor('rgb(179,217,235)')\n        .layoutWeight(1)\n      \n      TextArea()\n        .width('100%')\n        .borderWidth(1)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821493)/* ["default"] */.A) + "",
        width: "290",
        height: "584"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7滚动类容器扩展安全区",
      children: "示例7（滚动类容器扩展安全区）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过在滚动类容器内调用expandSafeArea属性实现沉浸式效果，Scroll内的Swiper可以延伸到状态栏上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SwiperDataSource implements IDataSource {\n  private list: Array<Color> = []\n  constructor(list: Array<Color>) {\n    this.list = list\n  }\n  totalCount(): number {\n    return this.list.length\n  }\n  getData(index: number): Color {\n    return this.list[index]\n  }\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n@Entry\n@Component\nstruct ExpandSafeAreaTest {\n  private swiperController: SwiperController = new SwiperController()\n  private swiperData: SwiperDataSource = new SwiperDataSource([])\n  private list: Array<Color> = [\n    Color.Pink,\n    Color.Blue,\n    Color.Green\n  ]\n  aboutToAppear(): void {\n    this.swiperData = new SwiperDataSource(this.list)\n  }\n  build() {\n    Scroll() {\n      Column() {\n        Swiper(this.swiperController) {\n          LazyForEach(this.swiperData, (item: Color, index: number) => {\n            Column() {\n              Text('banner' + index).fontSize(50).fontColor(Color.White)\n            }\n            .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n            .width('100%')\n            .height(400)\n            .backgroundColor(item)\n          })\n        }\n        .loop(true)\n        .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n        .clip(false)\n        Column(){\n          Text('Tab页Content').fontSize(50)\n        }.width('100%').height(1000)\n        .backgroundColor(Color.Grey)\n      }.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n    }\n    .clip(false)\n    .edgeEffect(EdgeEffect.None)\n    .width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(17698)/* ["default"] */.A) + "",
        width: "288",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8ignorelayoutsafearea延伸组件布局范围",
      children: "示例8（ignoreLayoutSafeArea延伸组件布局范围）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ignorelayoutsafearea20",
        children: "ignoreLayoutSafeArea"
      }), "改变组件位置。相比未使用该属性，配置ignoreLayoutSafeArea后，Row组件基于Stack内容区、Stack组件级安全区、系统状态栏共同组成的范围，取其左上部分，作左上对齐。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct IgnoreLayoutSafeAreaTest1 {\n  build() {\n    Column() {\n      Stack() {\n        Row()\n          .backgroundColor('rgb(39, 135, 217)')\n          .width(75)  // 固定宽度\n          .height(75) // 固定高度\n          .ignoreLayoutSafeArea([LayoutSafeAreaType.SYSTEM], [LayoutSafeAreaEdge.START, LayoutSafeAreaEdge.TOP])  // 设置布局区域延伸取左和上方向，至系统避让区SYSTEM\n        \n        Row()\n          .backgroundColor('rgb(0, 74, 175)')\n          .width(75)\n          .height(75)\n\n      }\n      .width(200)\n      .height(200)\n      .backgroundColor(Color.Gray)\n      .align(Alignment.TopStart)  // 子组件相对于Stack容器左上对齐\n      .padding({\n        left: 10  // 设置左侧10vp普通内边距\n      })\n      .safeAreaPadding(LengthMetrics.vp(10))  // 设置10vp安全区内边距（即组件级安全区）\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830288)/* ["default"] */.A) + "",
        width: "360",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9ignorelayoutsafearea配合layoutpolicymatchparent延伸组件布局范围",
      children: "示例9（ignoreLayoutSafeArea配合LayoutPolicy.matchParent延伸组件布局范围）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ignorelayoutsafearea20",
        children: "ignoreLayoutSafeArea"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
        children: "LayoutPolicy.matchParent"
      }), "同时改变组件大小和位置。相比未使用该属性，配置ignoreLayoutSafeArea后，Row组件基于Stack内容区、Stack组件级安全区，取其右下部分并撑满可用空间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct IgnoreLayoutSafeAreaTest2 {\n  build() {\n    Column() {\n      Stack() {\n        Row()\n          .backgroundColor('rgb(39, 135, 217)')\n          .width(LayoutPolicy.matchParent)  // 自适应宽度\n          .height(LayoutPolicy.matchParent) // 自适应高度\n          .ignoreLayoutSafeArea([LayoutSafeAreaType.SYSTEM], [LayoutSafeAreaEdge.END, LayoutSafeAreaEdge.BOTTOM])  // 设置布局区域延伸取右和下方向，至系统避让区SYSTEM\n\n        Row()\n          .backgroundColor('rgb(0, 74, 175)')\n          .width(LayoutPolicy.matchParent)\n          .height(LayoutPolicy.matchParent)\n\n      }\n      .width(200)\n      .height(200)\n      .backgroundColor(Color.Gray)\n      .align(Alignment.TopStart)  // 子组件相对于Stack容器左上对齐\n      .padding(10) // 设置10vp普通内边距\n      .safeAreaPadding(LengthMetrics.vp(10))  // 设置10vp安全区内边距（即组件级安全区）\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(576759)/* ["default"] */.A) + "",
        width: "160",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10expandsafearea与ignorelayoutsafearea的区别",
      children: "示例10（expandSafeArea与ignoreLayoutSafeArea的区别）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了容器分别设置了expandSafeArea和ignoreLayoutSafeArea的布局效果和各自对子组件布局效果的影响。两种设置下，容器都可见地进行了延伸，但前者的子组件不受延伸影响，后者的子组件因父容器的延伸改变了位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct IgnoreLayoutSafeAreaTest3 {\n  build() {\n    Row(){\n      Column(){\n        Stack(){\n          Stack(){\n\n          }\n          .width(30)\n          .height(30)\n          .backgroundColor('rgb(0, 74, 175)')\n        }\n        .width(100)\n        .height(100)\n        .backgroundColor('rgb(39, 135, 217)')\n        .align(Alignment.TopStart)\n\n        Text('基准效果').fontColor(Color.White)\n      }\n\n      Column(){\n        Stack(){\n          Stack(){\n\n          }\n          .width(30)\n          .height(30)\n          .backgroundColor('rgb(0, 74, 175)')\n        }\n        .width(100)\n        .height(100)\n        .backgroundColor('rgb(39, 135, 217)')\n        .align(Alignment.TopStart)\n        .expandSafeArea()  // 设置绘制区域延伸，自身绘制区域上抬，子组件相对屏幕位置不变\n\n        Text('expandSafeArea').fontColor(Color.White)\n      }\n\n      Column(){\n        Stack(){\n          Stack(){\n\n          }\n          .width(30)\n          .height(30)\n          .backgroundColor('rgb(0, 74, 175)')\n        }\n        .width(100)\n        .height(100)\n        .backgroundColor('rgb(39, 135, 217)')\n        .align(Alignment.TopStart)\n        .ignoreLayoutSafeArea()  // 设置布局区域延伸，自身布局区域上抬，子组件相对容器位置不变\n\n        Text('ignoreLayoutSafeArea').fontColor(Color.White)\n      }\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n    .justifyContent(FlexAlign.SpaceEvenly)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(635665)/* ["default"] */.A) + "",
        width: "360",
        height: "131"
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
64705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959498-3eb6436ebbbcf87bb73230ea9238dad4.gif");

},
154360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799848-82fd0d30d1b313ea91140412c968ecea.gif");

},
36267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479497-a1e453a48cc530af4e25da7649de17a1.png");

},
806203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959496-be97d887bf6fe396a2d703fc0a8b32a7.png");

},
329760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
655803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
17698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799850-acd72dd4fdb647f4dc21c54cd2593578.png");

},
635665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479501-d52dc8fcf5fb1289049225fcfb596c85.jpg");

},
396857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439543-b7ab835f040ba165b30e68200b55c713.gif");

},
576759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
830288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
821493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479499-5c39d3d6dfb075d7c6ecb51419e8cb33.gif");

},
971125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
195418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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