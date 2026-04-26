"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["976764"], {
565050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_support_accessibility_friendliness_arkts_universal_attributes_accessibility_arkts_universal_attributes_accessibility_md_eee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-support-accessibility-friendliness-arkts-universal-attributes-accessibility-arkts-universal-attributes-accessibility-md-eee.json
var site_docs_arkui_arkts_ui_development_arkts_support_accessibility_friendliness_arkts_universal_attributes_accessibility_arkts_universal_attributes_accessibility_md_eee_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/arkts-universal-attributes-accessibility","title":"无障碍开发指导","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/arkts-universal-attributes-accessibility.md","sourceDirName":"arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility","slug":"/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"无障碍开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-universal-attributes-accessibility","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI国际化","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-internationalization/"},"next":{"title":"支持适老化","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility/arkts-universal-attributes-accessibility.md


const frontMatter = {
	title: '无障碍开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-universal-attributes-accessibility',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '无障碍开发指导';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "屏幕朗读",
  "id": "屏幕朗读",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 3
}, {
  "value": "亮点特征",
  "id": "亮点特征",
  "level": 3
}, {
  "value": "屏幕朗读操作指导",
  "id": "屏幕朗读操作指导",
  "level": 3
}, {
  "value": "屏幕朗读聚焦原则",
  "id": "屏幕朗读聚焦原则",
  "level": 3
}, {
  "value": "屏幕朗读播报原则",
  "id": "屏幕朗读播报原则",
  "level": 3
}, {
  "value": "无障碍属性开发指导",
  "id": "无障碍属性开发指导",
  "level": 2
}, {
  "value": "设置无障碍文本",
  "id": "设置无障碍文本",
  "level": 3
}, {
  "value": "设置无障碍提醒",
  "id": "设置无障碍提醒",
  "level": 3
}, {
  "value": "设置无障碍组件类型",
  "id": "设置无障碍组件类型",
  "level": 3
}, {
  "value": "设置无障碍节点是否被选中",
  "id": "设置无障碍节点是否被选中",
  "level": 3
}, {
  "value": "设置无障碍分组",
  "id": "设置无障碍分组",
  "level": 3
}, {
  "value": "设置无障碍重要性",
  "id": "设置无障碍重要性",
  "level": 3
}, {
  "value": "设置无障碍虚拟子节点",
  "id": "设置无障碍虚拟子节点",
  "level": 3
}, {
  "value": "设置无障碍下一个焦点",
  "id": "设置无障碍下一个焦点",
  "level": 3
}, {
  "value": "设置可滚动模式",
  "id": "设置可滚动模式",
  "level": 3
}, {
  "value": "设置无障碍焦点绘制图层层级",
  "id": "设置无障碍焦点绘制图层层级",
  "level": 3
}, {
  "value": "无障碍方法开发指导",
  "id": "无障碍方法开发指导",
  "level": 2
}, {
  "value": "无障碍焦点状态回调",
  "id": "无障碍焦点状态回调",
  "level": 3
}, {
  "value": "无障碍触屏事件回调",
  "id": "无障碍触屏事件回调",
  "level": 3
}, {
  "value": "无障碍点击事件回调",
  "id": "无障碍点击事件回调",
  "level": 3
}, {
  "value": "主动聚焦",
  "id": "主动聚焦",
  "level": 3
}, {
  "value": "主动播报",
  "id": "主动播报",
  "level": 3
}, {
  "value": "开关状态查询及监听",
  "id": "开关状态查询及监听",
  "level": 2
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
        id: "无障碍开发指导",
        children: "无障碍开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无障碍服务是为保障所有人在任何情况下都能平等、便捷地获取和利用信息打造的系统级无障碍能力体系。其中为视障用户提供的屏幕朗读功能会将设备屏幕上的可见信息转化为语音播报，助力视障用户使用电子设备完成信息的获取和交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "屏幕朗读",
      children: "屏幕朗读"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["屏幕朗读可帮助视障用户在无需查看屏幕的情况下操作设备。", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "后，用户通过无障碍手势控制焦点移动，设备将实时语音播报焦点对应的详细信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "覆盖所有用户交互场景（如按钮点击、文本浏览、图表交互、动态内容更新）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适用于Phone、Tablet设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "亮点特征",
      children: "亮点特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拓宽用户覆盖边界：适配屏幕朗读的应用，能精准触达数百万依赖辅助技术的视障用户，打破数字适用壁垒，让产品受众覆盖更全面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "契合合规与设计规范：适配屏幕朗读是遵循全球无障碍设计标准的核心举措，既符合各国数字包容相关法规要求，也契合现代产品“人人可用”的设计理念。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "践行社会责任与品牌价值：适配屏幕朗读本质是促进数字公平的具体行动，彰显品牌尊重所有用户、助力无障碍环境建设的责任担当，提升品牌好感度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化视障用户体验：在适配过程中聚焦核心体验优化，通过清晰的文本描述和操作提示，以及合理的焦点热区尺寸设计，为视障用户带来更流畅、更友好的使用体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "轻量级适配不影响核心体验：适配屏幕朗读无需改动应用核心逻辑或UI设计。在实现无障碍支持的同时，完全保留产品的创新特点与视觉风格。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏幕朗读操作指导",
      children: "屏幕朗读操作指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持通过三种方法开启屏幕朗读。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "快捷手势开启：若已将辅助功能快捷键设置为屏幕朗读，同时长按音量上、下键，便能一键开启屏幕朗读。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置开启：进入系统设置页面，在搜索栏输入“屏幕朗读”，点击功能对应开关，完成开启。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "语音唤醒：直接通过小艺语音说出“开启屏幕朗读”，即可快速启用该功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用屏幕朗读后，普通手势转为无障碍手势。无障碍手势支持在系统设置中的屏幕朗读->更多设置->自定义快捷手势中自定义，默认手势及对应行为如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 无障碍手势及对应行为"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "手势"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "行为"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "单指点击"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单指点击元素，将触发元素的焦点聚焦并播报相关信息。例如单指单击桌面“设置”图标，聚焦后播报“设置，单指双击即可执行......”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "单指上下/左右滑动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单指上下/左右滑动，即可切换焦点至相邻元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "单指双击"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点聚焦目标元素后，在屏幕任意位置单指双击，即可触发该元素的点击操作。如聚焦“设置”图标后双击，便可打开设置应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "单指双击并长按"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "聚焦目标元素后，单指双击并长按，即可激活元素普通手势下的长按操作。如长按应用图标，可弹出对应快捷操作菜单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "双指滑动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过拖动操作，实现列表滑动或触发系统返回功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏幕朗读聚焦原则",
      children: "屏幕朗读聚焦原则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "浏览顺序"
          })
        }), "：焦点浏览遵循界面从上至下、从左至右的视觉布局顺序依次切换。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "聚焦范围"
          })
        }), "：仅支持对界面可见组件进行触摸、滑动聚焦，隐藏内容不纳入聚焦范围。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "焦点数量"
          })
        }), "：可视界面内有且仅有1个焦点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "焦点热区大小"
          })
        }), "：焦点热区大小需合理设置，避免过小导致用户难以触摸感知，或过大遮挡其他无障碍节点、引发焦点丢失。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "默认焦点"
          })
        }), "：新应用界面、同应用新页面、新弹窗弹出时，自动聚焦至页面首个元素。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过无障碍接口，实现上述聚焦原则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 焦点控制及对应接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "实现方案"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "浏览顺序控制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitynextfocusid18",
              children: "accessibilityNextFocusId"
            }), "自定义焦点移动逻辑，明确指定焦点切换时的下一个聚焦组件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "聚焦范围控制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 对隐藏/非交互内容，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitylevel",
              children: "accessibilityLevel"
            }), "('no')禁止其被聚焦选中。  - 针对无实际节点的交互区域，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityvirtualnode11",
              children: "accessibilityVirtualNode"
            }), "配置虚拟节点作为焦点占位符。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "保证有1个焦点"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确保页面可见区域内始终有且仅有1个焦点，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
              children: "sendAccessibilityEvent('requestFocusForAccessibility')"
            }), "在无焦点时自动指定默认聚焦目标。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "焦点热区大小"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 焦点热区过小：建议将语义一致、操作热区更大的父组件通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitygroup",
              children: "accessibilityGroup"
            }), "封装为整体焦点单元。  - 焦点热区过大：建议调整UI组件可聚焦热区范围，避免遮挡其他无障碍节点。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏幕朗读播报原则",
      children: "屏幕朗读播报原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元素选中时，屏幕朗读会按照：组件状态→文本内容→组件类型→操作提示的优先级顺序组合播报内容，仅播报实际存在的属性内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述4类播报元素均支持开发者自定义内容，如果需要修改某类属性的播报文案，可参照该属性对应的自定义接口进行配置，具体请参考表3。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 组件选中时基础播报内容配置"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "播报内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "组件状态"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitychecked13",
              children: "accessibilityChecked"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityselected13",
              children: "accessibilitySelected"
            }), "配置组件选中状态的播报文案，如“已选中”、“未选中”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitytext",
              children: "accessibilityText"
            }), "配置组件核心文本的朗读内容，如“首页”、“设置”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "组件类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityrole18",
              children: "accessibilityRole"
            }), "声明组件的类型标识，如“按钮”、“编辑框”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "操作提示"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitydescription",
              children: "accessibilityDescription"
            }), "定义组件的操作指引说明，如“单指双击即可播放”。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当焦点未切换，但需实时更新播报内容，如动态数据变更时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
        children: "sendAccessibilityEvent('announceForAccessibility')"
      }), "主动播报接口实现。该接口适用于内容动态变化场景，播报实时变动的信息，如“已下载50%”。例如："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件状态为“已选中”、文本内容为“首页”的焦点，屏幕朗读播报内容为：“已选中，首页”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文本内容为“播放”、组件类型为“按钮”，操作提示为“单指双击即可执行”的焦点，屏幕朗读播报内容为：“播放，按钮，单指双击即可执行”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无障碍属性开发指导",
      children: "无障碍属性开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无障碍属性支持开发者自定义组件的状态、文本内容、组件类型及操作提示的无障碍播报文本，精准控制屏幕朗读的播报内容，提升无障碍场景下的使用体验。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E6%97%A0%E9%9A%9C%E7%A2%8D%E6%96%87%E6%9C%AC",
              children: "自定义播报内容"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持开发者自定义组件的状态、文本内容、组件类型及操作提示的无障碍播报文本，精准控制屏幕朗读的播报内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E6%97%A0%E9%9A%9C%E7%A2%8D%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%84%A6%E7%82%B9",
              children: "自定义聚焦"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持自定义焦点组合、可聚焦性和浏览的顺序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E5%8F%AF%E6%BB%9A%E5%8A%A8%E6%A8%A1%E5%BC%8F",
              children: "设置可滚动模式"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持设置可滚动模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E6%97%A0%E9%9A%9C%E7%A2%8D%E7%84%A6%E7%82%B9%E7%BB%98%E5%88%B6%E5%9B%BE%E5%B1%82%E5%B1%82%E7%BA%A7",
              children: "设置无障碍焦点绘制图层层级"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持设置无障碍焦点绘制图层层级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍文本",
      children: "设置无障碍文本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitytext",
        children: "accessibilityText"
      }), "是用于为组件配置核心无障碍文本内容的专属属性，核心作用是传递组件的关键信息，建议配置的文案简洁、精准且表意完整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置无障碍文本需遵循如下原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请勿在accessibilityText中设置组件状态（如“已选中”）、组件类型（如“按钮”）、操作提醒（如“单指双击即可执行”）等信息。屏幕朗读默认播报内容已包括这些属性，重复配置会导致播报内容冗余。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果组件本身已有可视文本内容，且同时配置了accessibilityText，屏幕朗读将仅播报accessibilityText的内容，因此配置时请确保文案表意完整，无关键信息缺失。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下将通过2个示例，对比展示如何为无默认文本的按钮配置accessibilityText，补充核心无障碍朗读信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(569919)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：无默认文本的按钮，屏幕朗读播报内容为：“按钮，单指双击可执行”，用户无法通过语音播报感知此按钮的功能（播放）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityTextCase01 {\n  build() {\n    // ...\n    Column() {\n        Button()\n        .onClick(() => {\n            // 播放音频、视频的核心逻辑\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1的基础上，增加accessibilityText属性，屏幕朗读播报内容为：“播放，按钮，单指双击即可执行”，用户通过语音播报可以感知此按钮的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityTextCase02 {\n  build() {\n    // ...\n      Column() {\n        // 需确保resource/base/media目录下图标存在，可用其他图标替换演示。\n        Button()\n          .onClick(() => {\n            // 播放音频、视频的核心逻辑\n          })\n          .accessibilityText('播放') // 配置核心无障碍文本\n      }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍提醒",
      children: "设置无障碍提醒"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitydescription",
        children: "accessibilityDescription"
      }), "属性用于为组件提供操作提醒的说明，帮助用户理解将要执行的操作。例如系统默认的新手提醒不能表达的含义等场景。该信息在文本内容之后播报，并且如果当前控件有默认的新手提醒（如支持点击的组件，默认新手提醒为：单指双击即可执行）时，accessibilityDescription会替代系统的新手提醒，即仅播报accessibilityDescription内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭屏幕朗读的新手提醒开关后，accessibilityDescription内容也不会播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍在Button组件中，如何设置无障碍提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(603202)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：以Button组件作为视频播放全屏按钮时，聚焦该按钮后屏幕朗读仅播报：“按钮，单指双击即可​执行​”，用户无法明确该操作的具体含义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityDescriptionCase01 {\n  build() {\n    // ...\n    Button()\n      .background(Color.Blue)\n      .onClick(() => {\n        // 全屏逻辑\n      })\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1基础上添加accessibilityDescription，聚焦按钮后屏幕朗读播报“按钮，单指双击即可全屏”，用户可明确操作意图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityDescriptionCase02 {\n  build() {\n    // ...\n    Button()\n      .background(Color.Blue)\n      .onClick(() => {\n        // 全屏逻辑\n      })\n      // 业务自定义提示信息\n      .accessibilityDescription('单指双击即可全屏') // 业务自定义提示信息\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍组件类型",
      children: "设置无障碍组件类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityrole18",
        children: "accessibilityRole"
      }), "属性用于为自定义组件设置无障碍角色类型，帮助用户理解当前操作组件的类型。例如使用Column、Row等基础组件自定义可点击组件时，若希望该组件被屏幕朗读播报为“按钮”，可将无障碍角色属性accessibilityRole设置为BUTTON。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍如何自定义组件的无障碍角色类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(880056)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例以Column组件为例，由于该Column组件并非标准按钮组件，屏幕朗读仅会播报其文本内容“点赞”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityRoleCase01 {\n  build() {\n    // ...\n    Column() {\n      Text('点赞')\n    }\n    .onClick(() => {\n      // 业务逻辑\n    })\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1的基础上，为该Column组件设置accessibilityRole属性值为BUTTON（播报为“按钮”），屏幕朗读最终播报内容为：“点赞，按钮，单指双击即可执行”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityRoleCase02 {\n  build() {\n    // ...\n    Column() {\n      Text('点赞')\n    }\n    .onClick(() => {\n      // 业务逻辑\n    })\n    .accessibilityRole(AccessibilityRoleType.BUTTON)\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍节点是否被选中",
      children: "设置无障碍节点是否被选中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitychecked13",
        children: "accessibilityChecked"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityselected13",
        children: "accessibilitySelected"
      }), "是两个用于增强无障碍体验的属性，主要用于向屏幕朗读等屏幕朗读传达组件的选中状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在支持多选的情况下，设置无障碍节点是否被选中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitychecked13",
        children: "accessibilityChecked"
      }), "属性，用于表示组件在支持多选的情况下是否被勾选（如复选框、开关按钮等二态或三态组件），适用于需要明确“选中/未选中”语义的场景，支持以下值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "undefined（默认）：由系统自动判断（依赖组件自身的状态，如Toggle组件的isOn属性）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "false：未选中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "true：选中（如复选框打勾）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，介绍accessibilityChecked不同值的播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261066)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例以Text组件为例，设置accessibilityChecked为true时，表示当前组件为被选中状态，当聚焦到“选项1”时，播报“已选中，选项1”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityCheckedCase01 {\n  build() {\n    // ...\n    Column() {\n      Text('选项1')\n        .accessibilityChecked(true)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：本示例以Text组件为例，设置accessibilityChecked为false时，表示当前组件为未选中状态，当聚焦到“选项1”时，播报“未选中，选项1”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityCheckedCase02 {\n  build() {\n    // ...\n    Column() {\n      Text('选项1')\n        .accessibilityChecked(false)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在支持单选的情况下，设置无障碍节点是否被选中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityselected13",
        children: "accessibilitySelected"
      }), "属性，用于表示组件在支持单选的情况下是否被选择（如单选列表项、标签页等），适用于需要区分“当前选中项”的场景（如单选组、导航菜单），支持以下值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "undefined（默认）：由系统自动判断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "false：未选中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "true：当前选中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，介绍accessibilitySelected不同值的播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791918)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例以Text组件为例，设置accessibilitySelected为true时，表示当前组件为被选中状态，当聚焦到“选项1”时，播报“已选中，选项1”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilitySelectedCase01 {\n  build() {\n    // ...\n    Column() {\n      Text('选项1')\n        .accessibilitySelected(true)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：本示例以Text组件为例，设置accessibilitySelected为false时，表示当前组件为未选中状态，当聚焦到“选项1”时，播报“选项1”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilitySelectedCase02 {\n  build() {\n    // ...\n    Column() {\n      Text('选项1')\n        .accessibilitySelected(false)\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ArkUI无障碍属性中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitychecked13",
        children: "accessibilityChecked"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityselected13",
        children: "accessibilitySelected"
      }), "均用于表示组件的状态，但二者应用场景与语义含义存在本质差异。以下是二者的对比："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " accessibilityChecked与accessibilitySelected属性对比"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitychecked13",
              children: "accessibilityChecked"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityselected13",
              children: "accessibilitySelected"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复选框、开关等二态/三态组件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单选列表、标签页等互斥选择场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语义目标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控件物理状态（如开关是否打开）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航焦点项（如列表当前选中项）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "状态持久性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通常需显式保存（如表单提交）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "临时性（随焦点移动变化）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "典型组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkbox，Toggle。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List，Tabs。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "播报内容"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：“已选中”，false：“未选中”"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：“已选中”，false：不播报。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍分组",
      children: "设置无障碍分组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitygroup",
        children: "accessibilityGroup"
      }), "属性用于配置组件是否启用无障碍分组功能。若启用该功能，该组件及其所有子组件将被视为一个统一的无障碍节点处理，无障碍服务不会再单独识别和处理其下的子组件。该属性支持以下值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "false（默认值）：不启用无障碍分组，子组件可被无障碍服务单独识别和聚焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "true：启用无障碍分组，组件及其所有子组件合并为一个无障碍节点，仅该父组件可被聚焦。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出两个示例，对比介绍在Column组件中使用无障碍分组的作用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(761430)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：该场景下包含3个可被单独聚焦的Text子组件节点，用户无法连贯感知完整的时间信息，需多次聚焦才能获取全部内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityGroupCase01 {\n  build() {\n    // ...\n    Column() {\n      Text('2026年')\n      Text('1月27日')\n      Text('星期二')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1基础上为Column组件启用accessibilityGroup后，仅Column组件可被聚焦，其下所有Text文本会拼接为“2026年1月27日星期二”播报，且单个Text节点无法被单独聚焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityGroupCase02 {\n  build() {\n    // ...\n    Column() {\n      Text('2026年')\n      Text('1月27日')\n      Text('星期二')\n    }\n    .accessibilityGroup(true)\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍重要性",
      children: "设置无障碍重要性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitylevel",
        children: "accessibilityLevel"
      }), "属性用于标识组件的无障碍重要性等级，核心作用是控制组件是否可被无障碍服务识别，该属性支持以下取值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'auto'（默认）：由无障碍分组服务和ArkUI进行综合判断组件是否可被无障碍辅助服务所识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'yes'：当前组件可被无障碍辅助服务所识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'no'：当前组件不可被无障碍辅助服务所识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'no-hide-descendants'：当前组件及其所有子组件均不可被无障碍辅助服务所识别。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例以Text组件为例，为其设置Text.accessibilityLevel('yes')后，该组件可被屏幕朗读功能识别。若未配置该属性，“文本1”对应的Text组件无法被单独聚焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375675)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityLevelCase01 {\n  build() {\n    // ...\n    Column() {\n      Text('HelloWorld').fontSize(50).fontWeight(FontWeight.Bold)\n    }\n    .accessibilityGroup(true)\n    .accessibilityLevel('yes')\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍虚拟子节点",
      children: "设置无障碍虚拟子节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityvirtualnode11",
        children: "accessibilityVirtualNode"
      }), "属性主要用于为系统无法识别为无障碍节点的自绘制组件添加虚拟无障碍节点，使屏幕朗读可以聚焦并读取该节点的信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例以Column组件下的Text('文本1')模拟系统无法识别的自绘制组件，为Column设置accessibilityVirtualNode后，Text('文本2')会在Text('文本1')的位置进行无障碍节点占位，屏幕朗读即可聚焦到Text('文本2')并进行播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615217)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct VirtualNodeExample {\n  @Builder customAccessibilityNode() {\n    Text('文本2')\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n\n  build() {\n    Column() {\n      Text('文本1')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n    .accessibilityVirtualNode(this.customAccessibilityNode)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍下一个焦点",
      children: "设置无障碍下一个焦点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitynextfocusid18",
        children: "accessibilityNextFocusId"
      }), "属性用于指定焦点移动过程中下一个被聚焦组件的id。建议开发者将聚焦顺序按照画面显示的自上而下、自左向右方向设置。若实际焦点移动顺序与视觉呈现顺序不一致，可通过此属性调整节点的聚焦顺序。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍如何改变焦点遍历顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15488)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例中组件的视觉呈现顺序为“A->C->B->D”，焦点浏览顺序与视觉顺序一致，同样为“A->C->B->D”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityNextFocusIdCase01 {\n  build() {\n    // ...\n    Column() {\n      Button('A')\n      Button('C')\n      Button('B')\n      Button('D')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1的基础上，通过accessibilityNextFocusId自定义焦点浏览顺序，最终走焦顺序为“A->B->C->D”"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityNextFocusIdCase02 {\n  build() {\n    // ...\n    Column() {\n      Button('A')\n        .accessibilityNextFocusId('b')\n      Button('C')\n        .id('c')\n        .accessibilityNextFocusId('d')\n      Button('B')\n        .id('b')\n        .accessibilityNextFocusId('c')\n      Button('D')\n        .id('d')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(289316)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免焦点移动陷入死循环。例如为A配置accessibilityNextFocusId为B、为B配置该属性为A后，焦点移动顺序会变为A→B→A→B…，最终陷入死循环，适配无障碍功能时需避免此类情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非必要情况下，需避免出现节点无法被焦点遍历到的情况。例如组件树包含A、B、C、D、E组件，默认焦点移动顺序为A→B→C→D→E。若仅为B配置accessibilityNextFocusId为D，焦点移动顺序会变为A→B→D→E→A→B→D→E…，导致节点C始终无法被焦点遍历到。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置可滚动模式",
      children: "设置可滚动模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityscrolltriggerable18",
        children: "accessibilityScrollTriggerable"
      }), "属性用于设置无障碍组件是否支持滚动触发操作。当用户通过滑动屏幕触发焦点移动时，若容器当前视觉可见范围内无可用的可聚焦组件，屏幕朗读功能会自动发起一次滚动操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "true（默认值）：启用自动滚动功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "false：不启用自动滚动功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍如何通过配置accessibilityScrollTriggerable属性设置无障碍模式下的滚动触发状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74277)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例以List组件为例，当焦点处于可见范围内列表的最后一个节点，如“第5项”时，若继续向下触发焦点移动，会触发列表的自动滚动，焦点将聚焦到原本不可见的内容节点“第6项”上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityScrollTriggerableCase01 {\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n  build() {\n    // ...\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text(`第${item}项`)\n              .width('100%')\n              .height(100)\n              .textAlign(TextAlign.Center)\n          }\n        }, (item: string) => item)\n      }\n    }\n    .width('100%')\n    .height('100%')\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1的基础上，为List组件配置accessibilityScrollTriggerable(false)后，当焦点处于可见范围内列表的最后一个节点，如“第5项”时，若继续向下触发焦点移动，将不再触发列表的自动滚动。若再次向下触发焦点移动，焦点会聚焦回页面的首个可聚焦节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityScrollTriggerableCase02 {\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n  build() {\n    // ...\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text(`第${item}项`)\n              .width('100%')\n              .height(100)\n              .textAlign(TextAlign.Center)\n          }\n        }, (item: string) => item)\n      }\n      .accessibilityScrollTriggerable(false)\n    }\n    .width('100%')\n    .height('100%')\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无障碍焦点绘制图层层级",
      children: "设置无障碍焦点绘制图层层级"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilityfocusdrawlevel19",
        children: "accessibilityFocusDrawLevel"
      }), "属性用于设置无障碍焦点绿色边框的绘制层级；当标识焦点的绿色边框被更高Z序的图层遮挡覆盖时，可通过配置该属性提升其绘制层级的Z序，确保绿色边框能够清晰显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍如何通过配置accessibilityFocusDrawLevel属性提升无障碍焦点绿色边框绘制的Z序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74788)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例运行，需在设备上提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%8F%E5%B9%95%E6%9C%97%E8%AF%BB%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC",
        children: "开启屏幕朗读"
      }), "，否则无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：“文本1”按钮的焦点绿色边框被“文本2”按钮遮挡裁切，无法完整显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityFocusDrawLevelCase01 {\n  build() {\n    // ...\n    Stack() {\n      Button('文本1')\n\n      Button('文本2')\n        .accessibilityLevel('no')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：在示例1的基础上，为“文本1”按钮配置accessibilityFocusDrawLevel(FocusDrawLevel.TOP)后，该按钮的焦点绿色边框能够完整显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityFocusDrawLevelCase02 {\n  build() {\n    // ...\n    Stack() {\n      Button('文本1')\n        .accessibilityFocusDrawLevel(FocusDrawLevel.TOP)\n\n      Button('文本2')\n        .accessibilityLevel('no')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "无障碍方法开发指导",
      children: "无障碍方法开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["无障碍方法主要为开发者提供两类核心能力，主要包括ArkUI组件提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/accessibility-related",
        children: "无障碍操作回调"
      }), "以及无障碍服务提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility",
        children: "状态查询方法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文中所有示例的效果验证，均需开启屏幕朗读后进行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " 无障碍方法主要功能"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法/属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%97%A0%E9%9A%9C%E7%A2%8D%E7%84%A6%E7%82%B9%E7%8A%B6%E6%80%81%E5%9B%9E%E8%B0%83",
              children: "无障碍焦点状态回调"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-event/ts-universal-accessibility-event#onaccessibilityfocus",
              children: "onAccessibilityFocus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听组件获取或失去无障碍焦点的状态变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%97%A0%E9%9A%9C%E7%A2%8D%E8%A7%A6%E5%B1%8F%E4%BA%8B%E4%BB%B6%E5%9B%9E%E8%B0%83",
              children: "无障碍触屏事件回调"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-hover-event/ts-universal-accessibility-hover-event#onaccessibilityhover",
              children: "onAccessibilityHover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听单指触摸（悬停）操作，在屏幕朗读模式下触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%97%A0%E9%9A%9C%E7%A2%8D%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%E5%9B%9E%E8%B0%83",
              children: "无障碍点击事件回调"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-event/ts-universal-accessibility-event#onaccessibilityactionintercept20",
              children: "onAccessibilityActionIntercept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍点击操作回调，可以拦截消费该事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BC%80%E5%85%B3%E7%8A%B6%E6%80%81%E6%9F%A5%E8%AF%A2%E5%8F%8A%E7%9B%91%E5%90%AC",
              children: "触摸浏览状态判断"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityontouchguidestatechange",
              children: "on/off touchGuideStateChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听触摸浏览功能的启用/关闭状态变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%B8%BB%E5%8A%A8%E8%81%9A%E7%84%A6",
              children: "主动聚焦"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
              children: "sendAccessibilityEvent('requestFocusForAccessibility')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发焦点的主动聚焦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%B8%BB%E5%8A%A8%E6%92%AD%E6%8A%A5",
              children: "主动播报"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
              children: "accessibility.sendAccessibilityEvent('announceForAccessibility')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发焦点的主动播报。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "无障碍焦点状态回调",
      children: "无障碍焦点状态回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-event/ts-universal-accessibility-event#onaccessibilityfocus",
        children: "onAccessibilityFocus"
      }), "方法是用于监听组件无障碍焦点获取、失去焦点状态的回调函数，当组件的无障碍焦点状态发生变化时，会触发该回调函数执行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例以Button组件为例，当焦点聚焦至Text组件时，该Button组件显示“未获焦”；当焦点聚焦至Button组件时，因触发onAccessibilityFocus回调且接收到的isFocus参数为true，Button组件的显示文本会被修改为“已获焦”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct OnAccessibilityFocusCase01 {\n  @State isFocus: boolean = false;\n\n  build() {\n    // ...\n    Column() {\n      Text('文本') // 聚焦到此组件时，下面焦点丢失，可验证未获焦状态。\n      Button(this.isFocus ? '已获焦' : '未获焦')\n        .onAccessibilityFocus((isFocus: boolean) => {\n          this.isFocus = isFocus\n          console.info(`current isFocus: ${this.isFocus}`)\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "无障碍触屏事件回调",
      children: "无障碍触屏事件回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-hover-event/ts-universal-accessibility-hover-event#onaccessibilityhover",
        children: "onAccessibilityHover"
      }), "方法提供对单指触摸操作的无障碍回调监听能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍在开启屏幕朗读功能时，如何监听无障碍触屏事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例以Text组件为例，其默认显示文本为“无”。在无障碍读屏模式下，触摸该Text组件时，显示文本无任何变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct OnAccessibilityHoverCase01 {\n  @State hoverText: string = '无';\n\n  build() {\n    // ...\n    Column() {\n      Text(this.hoverText)\n        .onTouch((event: TouchEvent) => {\n          this.hoverText = '上屏文字';\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：通过配置onAccessibilityHover回调函数修改hoverText变量后，当触摸到该Text组件时，其显示文本会变更为“上屏文字”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct OnAccessibilityHoverCase02 {\n  @State hoverText: string = '无';\n\n  build() {\n    // ...\n    Column() {\n      Text(this.hoverText)\n        .onTouch((event: TouchEvent) => {\n          this.hoverText = '上屏文字';\n        })\n        .onAccessibilityHover((isHover: boolean, event: AccessibilityHoverEvent) => {\n          // 模拟单击上屏\n          this.hoverText = '上屏文字';\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "无障碍点击事件回调",
      children: "无障碍点击事件回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-event/ts-universal-accessibility-event#onaccessibilityactionintercept20",
        children: "onAccessibilityActionIntercept"
      }), "方法提供无障碍控制操作的拦截回调能力，注册方可通过该回调决定是否拦截当前无障碍操作；若为不支持Click操作的组件注册该回调，则无法触发此回调函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍如何配置onAccessibilityActionIntercept回调函数处理点击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：点击Toggle组件时会弹出弹框，屏幕朗读先播报“开启开关”，再播报弹框弹出的内容“确认开启”。由于间隔很短，导致“确认开启”的播报内容打断“开启开关”的播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityActionInterceptCase01 {\n  @State isOn: boolean = false;\n\n  build() {\n    // ...\n    Column() {\n    Toggle({ type: ToggleType.Switch, isOn: this.isOn})\n        .onClick(() => {\n        this.getUIContext().showAlertDialog({\n            title: '',\n            message: this.isOn ? '确认关闭' : '确认开启?',\n            primaryButton: {\n            value: '确认',\n            action: () => {\n                this.isOn = !this.isOn;\n            }\n            },\n            secondaryButton: {\n            value: '取消',\n            action: () => {}\n            }\n        })\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2：通过配置onAccessibilityActionIntercept回调函数，在组件内部消费点击事件后，Toggle被点击时，屏幕朗读不再播报“开启开关”/“关闭开关”，仅播报弹框内容“确认开启”/“确认关闭”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AccessibilityActionInterceptCase02 {\n  @State isOn: boolean = false;\n\n  build() {\n    // ...\n    Column() {\n    Toggle({ type: ToggleType.Switch, isOn: this.isOn})\n        .onClick(() => {\n        })\n        .onAccessibilityActionIntercept((action: AccessibilityAction) => {\n        // ...\n        if (action == AccessibilityAction.ACCESSIBILITY_CLICK) {\n            this.getUIContext().showAlertDialog({\n            title: '',\n            message: this.isOn ? '确认关闭' : '确认开启?',\n            primaryButton: {\n                value: '确认',\n                action: () => {\n                this.isOn = !this.isOn;\n                }\n            },\n            secondaryButton: {\n                value: '取消',\n                action: () => {}\n            }\n            })\n            return AccessibilityActionInterceptResult.ACTION_INTERCEPT;\n        }\n        return AccessibilityActionInterceptResult.ACTION_CONTINUE;\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主动聚焦",
      children: "主动聚焦"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当页面无默认聚焦元素时，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
        children: "accessibility.sendAccessibilityEvent"
      }), "方法，发送requestFocusForAccessibility类型的无障碍事件，强制将无障碍焦点聚焦至指定组件，以此提升视障用户的操作体验与效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下给出2个示例，对比介绍如何通过调用sendAccessibilityEvent方法触发无障碍主动聚焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：本示例以Button组件为例，当“文本1”按钮处于Visibility.Hidden状态时，页面会出现无障碍焦点丢失的问题，即页面无任何焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct SendAccessibilityEventCase01 {\n  @State isVisible: boolean = true;\n\n  build() {\n    // ...\n    Column() {\n      Button('文本1')\n        .visibility(this.isVisible ? Visibility.Visible : Visibility.Hidden)\n        .onClick((event: ClickEvent) => {\n          this.isVisible = false;\n      })\n\n      Button('文本2')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例2：通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
        children: "accessibility.sendAccessibilityEvent"
      }), "方法发送requestFocusForAccessibility类型的无障碍主动聚焦事件，在“文本1”按钮变为Visibility.Hidden时，主动聚焦到“文本2”按钮，保证页面至少有一个焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { accessibility } from '@kit.AccessibilityKit';\n\n@Entry\n@Component\nexport struct SendAccessibilityEventCase02 {\n  @State isVisible: boolean = true;\n\n  build() {\n    // ...\n    Column() {\n      Button('文本1')\n        .visibility(this.isVisible ? Visibility.Visible : Visibility.Hidden)\n        .onClick(() => {\n          this.isVisible = false;\n          const event: accessibility.EventInfo = {\n            type: \"requestFocusForAccessibility\",\n            // 需要替换为当前的工程名称\n            bundleName: \"com.samples.uiextensionandaccessibility\",\n            triggerAction: \"common\",\n            customId: '123'\n          }\n          accessibility.sendAccessibilityEvent(event);\n      })\n\n      Button('文本2')\n        .id('123') // 设置组件id\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主动播报",
      children: "主动播报"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要触发动态播报时，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
        children: "accessibility.sendAccessibilityEvent"
      }), "方法，发送announceForAccessibility类型的无障碍事件触发主动播报，以此提升视障用户的播报体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例1：当Button组件的文本内容发生变化时，屏幕朗读不会重新播报内容，视障用户难以感知该按钮的功能已发生改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct SendAccessibilityEventCase03 {\n  @State text: string = '暂停';\n  private isPlay: boolean = false;\n\n  build() {\n    // ...\n    Column() {\n      Button(this.text)\n        .onClick(() => {\n          this.isPlay = !this.isPlay;\n          this.text = this.isPlay ? '暂停' : '播放';\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例2：当Button组件的文本内容发生变化时，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilitysendaccessibilityevent9",
        children: "accessibility.sendAccessibilityEvent"
      }), "方法，发送announceForAccessibility类型的无障碍事件，触发屏幕朗读主动播报 “播放”/“暂停”，实现按钮文本内容变化与播报同步的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { accessibility } from '@kit.AccessibilityKit';\n\n@Entry\n@Component\nexport struct SendAccessibilityEventCase04 {\n  @State text: string = '暂停';\n  private isPlay: boolean = false;\n\n  build() {\n    // ...\n    Column() {\n      Button(this.text)\n        .onClick(() => {\n          this.isPlay = !this.isPlay;\n          this.text = this.isPlay ? '暂停' : '播放';\n          const event: accessibility.EventInfo = {\n            type: \"announceForAccessibility\",\n            // 需要替换为当前的工程名称\n            bundleName: \"com.samples.uiextensionandaccessibility\",\n            triggerAction: \"common\",\n            textAnnouncedForAccessibility: this.text,\n          }\n          accessibility.sendAccessibilityEvent(event);\n        })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开关状态查询及监听",
      children: "开关状态查询及监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无障碍支持监听和查询屏幕朗读开关和触摸浏览状态，接口及对应功能参考表6和表7。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " 监听查询屏幕朗读开关状态"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityonscreenreaderstatechange18",
              children: "accessibility.on('screenReaderStateChange')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听屏幕朗读功能启用状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityoffscreenreaderstatechange18",
              children: "accessibility.off('screenReaderStateChange')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听屏幕朗读功能启用状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityisscreenreaderopensync18",
              children: "accessibility.isScreenReaderOpenSync(): boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步检测当前是否开启屏幕朗读模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " 监听查询触摸浏览开关状态"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方案"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityontouchguidestatechange",
              children: "accessibility.on('touchGuideStateChange')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听触摸浏览功能启用状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityofftouchguidestatechange",
              children: "accessibility.off('touchGuideStateChange')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听触摸浏览功能启用状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#accessibilityisopentouchguidesync10",
              children: "accessibility.isOpenTouchGuideSync()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步检测当前是否开启触摸浏览模式。"
          })]
        })]
      })]
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
761430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
74788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
615217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
15488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
375675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
603202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
289316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
261066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
569919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
791918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
880056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
74277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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