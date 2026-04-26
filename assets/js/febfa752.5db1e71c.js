"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["878582"], {
447108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_gesture_binding_ts_gesture_settings_ts_gesture_settings_md_feb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-gesture-handling-gesture-binding-ts-gesture-settings-ts-gesture-settings-md-feb.json
var site_docs_ref_arkui_api_arkui_declarative_comp_gesture_handling_gesture_binding_ts_gesture_settings_ts_gesture_settings_md_feb_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings","title":"绑定手势方法","description":"为组件绑定不同类型的手势事件，并设置事件的响应方法。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings.md","sourceDirName":"arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings","slug":"/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"绑定手势方法","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-gesture-settings"},"sidebar":"ref","previous":{"title":"工具栏设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-toolbar/ts-universal-attributes-toolbar"},"next":{"title":"设置组件绑定的手势","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-uigestureevent/ts-uigestureevent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings.md


const frontMatter = {
	title: '绑定手势方法',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-gesture-settings'
};
const contentTitle = '绑定手势方法';

const assets = {

};



const toc = [{
  "value": "gesture",
  "id": "gesture",
  "level": 2
}, {
  "value": "priorityGesture",
  "id": "prioritygesture",
  "level": 2
}, {
  "value": "parallelGesture",
  "id": "parallelgesture",
  "level": 2
}, {
  "value": "SourceType枚举说明8+",
  "id": "sourcetype枚举说明8",
  "level": 2
}, {
  "value": "SourceTool枚举说明9+",
  "id": "sourcetool枚举说明9",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（父组件优先识别手势和父子组件同时触发手势）",
  "id": "示例1父组件优先识别手势和父子组件同时触发手势",
  "level": 3
}, {
  "value": "示例2（实时监测参与滑动手势的有效触点数量）",
  "id": "示例2实时监测参与滑动手势的有效触点数量",
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
        id: "绑定手势方法",
        children: "绑定手势方法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为组件绑定不同类型的手势事件，并设置事件的响应方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(613202)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以通过gesture、priorityGesture和parallelGesture给组件绑定手势识别，手势识别成功后可以通过事件回调通知组件。可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target",
          children: "触摸热区"
        }), "指定可识别手势的区域。gesture、priorityGesture和parallelGesture当前不支持使用三目运算符（条件? 表达式1 : 表达式2）切换手势绑定。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gesture",
      children: "gesture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gesture(gesture: GestureType, mask?: GestureMask): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(14721)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "gesture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturetype",
              children: "GestureType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定的手势类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturemask%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "GestureMask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件响应设置。  默认值：GestureMask.Normal"
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
      id: "prioritygesture",
      children: "priorityGesture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "priorityGesture(gesture: GestureType, mask?: GestureMask): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定优先识别手势。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认情况下，子组件优先识别通过gesture绑定的手势，当父组件配置priorityGesture时，父组件优先识别priorityGesture绑定的手势。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绑定长按手势时，设置触发长按的最短时间小的组件会优先响应，会忽略priorityGesture设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701438)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "gesture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturetype",
              children: "GestureType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定的手势对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturemask%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "GestureMask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件响应设置。  默认值：GestureMask.Normal"
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
      id: "parallelgesture",
      children: "parallelGesture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parallelGesture(gesture: GestureType, mask?: GestureMask): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绑定可与子组件手势同时触发的手势。手势事件为非冒泡事件。父组件设置parallelGesture时，父子组件相同的手势事件都可以触发，实现类似冒泡效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481304)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "gesture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturetype",
              children: "GestureType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定的手势对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gesturemask%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "GestureMask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件响应设置。  默认值：GestureMask.Normal"
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
      id: "sourcetype枚举说明8",
      children: "SourceType枚举说明8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义输入源对应的设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未知输入源。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TouchScreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触摸屏。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 22开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOYSTICK22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手柄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 22开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sourcetool枚举说明9",
      children: "SourceTool枚举说明9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义输入源对应的工具类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未知输入源。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手指输入。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手写笔输入。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标输入。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCHPAD12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触控板输入。触控板单指输入被视为鼠标输入操作。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOYSTICK12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手柄输入。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1父组件优先识别手势和父子组件同时触发手势",
      children: "示例1（父组件优先识别手势和父子组件同时触发手势）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置priorityGesture和parallelGesture分别实现了父组件优先识别手势和父子组件同时触发手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct GestureSettingsExample {\n  @State priorityTestValue: string = ''\n  @State parallelTestValue: string = ''\n\n  build() {\n    Column() {\n      Column() {\n        Text('TapGesture:' + this.priorityTestValue).fontSize(28)\n          .gesture(\n            TapGesture()\n              .onAction((event: GestureEvent) => {\n                this.priorityTestValue += '\\nText'\n              }))\n      }\n      .height(200)\n      .width(250)\n      .padding(20)\n      .margin(20)\n      .border({ width: 3 })\n      // 设置为priorityGesture时，点击文本会忽略Text组件的TapGesture手势事件，优先识别父组件Column的TapGesture手势事件\n      .priorityGesture(\n        TapGesture()\n          .onAction((event: GestureEvent) => {\n            this.priorityTestValue += '\\nColumn'\n          }), GestureMask.IgnoreInternal)\n\n      Column() {\n        Text('TapGesture:' + this.parallelTestValue).fontSize(28)\n          .gesture(\n            TapGesture()\n              .onAction((event: GestureEvent) => {\n                this.parallelTestValue += '\\nText'\n              }))\n      }\n      .height(200)\n      .width(250)\n      .padding(20)\n      .margin(20)\n      .border({ width: 3 })\n      // 设置为parallelGesture时，点击文本会同时触发子组件Text与父组件Column的TapGesture手势事件\n      .parallelGesture(\n        TapGesture()\n          .onAction((event: GestureEvent) => {\n            this.parallelTestValue += '\\nColumn'\n          }), GestureMask.Normal)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(34534)/* ["default"] */.A) + "",
        width: "281",
        height: "466"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2实时监测参与滑动手势的有效触点数量",
      children: "示例2（实时监测参与滑动手势的有效触点数量）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置fingerInfos实时监测参与滑动手势的有效触点数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PanGestureWithFingerCount {\n  @State offsetX: number = 0\n  @State offsetY: number = 0\n  @State positionX: number = 0\n  @State positionY: number = 0\n  @State fingerCount: number = 0 // 用于记录参与手势的触点数量\n  private panOption: PanGestureOptions = new PanGestureOptions({\n    direction: PanDirection.All,\n    fingers: 1\n  })\n\n  build() {\n    Column() {\n      // 显示当前有效触点数量\n      Text(`触点数量: ${this.fingerCount}`)\n        .fontSize(20)\n        .margin(10)\n\n      Column() {\n        Text('PanGesture offset:\\nX: ' + this.offsetX + '\\n' + 'Y: ' + this.offsetY)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .translate({ x: this.offsetX, y: this.offsetY, z: 0 })\n      .gesture(\n        PanGesture(this.panOption)\n          .onActionStart((event: GestureEvent) => {\n            console.info('Pan start')\n            this.fingerCount = event.fingerInfos?.length || 0 // 记录触点数量\n          })\n          .onActionUpdate((event: GestureEvent) => {\n            if (event) {\n              console.info(`fingerInfos ${JSON.stringify(event.fingerInfos)}`)\n              this.offsetX = this.positionX + event.offsetX\n              this.offsetY = this.positionY + event.offsetY\n              this.fingerCount = event.fingerInfos?.length || 0 // 更新触点数量，记录下参与当前手势的有效触点的数量\n            }\n          })\n          .onActionEnd((event: GestureEvent) => {\n            this.positionX = this.offsetX\n            this.positionY = this.offsetY\n            this.fingerCount = 0 // 触点离开触摸区域后归零\n            console.info('Pan end')\n          })\n          .onActionCancel(() => {\n            this.fingerCount = 0 // 手势取消后归零\n          })\n      )\n\n      Button('切换为双指滑动')\n        .onClick(() => {\n          this.panOption.setFingers(2)\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805204)/* ["default"] */.A) + "",
        width: "368",
        height: "403"
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
14721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
481304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
805204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959580-5a70870513c4036ab4e347e3ff39bb6a.gif");

},
34534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
701438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
613202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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