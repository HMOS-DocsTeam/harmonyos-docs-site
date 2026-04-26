"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["554550"], {
982634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_events_component_change_ts_universal_component_visible_area_change_event_ts_universal_component_visible_area_change_event_md_c01_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-events-component-change-ts-universal-component-visible-area-change-event-ts-universal-component-visible-area-change-event-md-c01.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_events_component_change_ts_universal_component_visible_area_change_event_ts_universal_component_visible_area_change_event_md_c01_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event","title":"组件可见区域变化事件","description":"组件可见区域变化事件是组件在屏幕中的显示区域面积变化时触发的事件，提供了判断组件是否完全或部分显示在屏幕中的能力，适用于广告曝光埋点之类的场景。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"组件可见区域变化事件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-component-visible-area-change-event"},"sidebar":"ref","previous":{"title":"组件尺寸变化事件","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-size-change-event/ts-universal-component-size-change-event"},"next":{"title":"组件标识","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event.md


const frontMatter = {
	title: '组件可见区域变化事件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-component-visible-area-change-event'
};
const contentTitle = '组件可见区域变化事件';

const assets = {

};



const toc = [{
  "value": "onVisibleAreaChange",
  "id": "onvisibleareachange",
  "level": 2
}, {
  "value": "onVisibleAreaChange22+",
  "id": "onvisibleareachange22",
  "level": 2
}, {
  "value": "onVisibleAreaApproximateChange17+",
  "id": "onvisibleareaapproximatechange17",
  "level": 2
}, {
  "value": "VisibleAreaEventOptions12+",
  "id": "visibleareaeventoptions12",
  "level": 2
}, {
  "value": "VisibleAreaChangeCallback12+",
  "id": "visibleareachangecallback12",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1 (使用onVisibleAreaChange来监听区域变化)",
  "id": "示例1-使用onvisibleareachange来监听区域变化",
  "level": 3
}, {
  "value": "示例2 (使用onVisibleAreaApproximateChange来监听区域变化)",
  "id": "示例2-使用onvisibleareaapproximatechange来监听区域变化",
  "level": 3
}, {
  "value": "示例3 (设置measureFromViewport子组件超出父组件显示)",
  "id": "示例3-设置measurefromviewport子组件超出父组件显示",
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
        id: "组件可见区域变化事件",
        children: "组件可见区域变化事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件可见区域变化事件是组件在屏幕中的显示区域面积变化时触发的事件，提供了判断组件是否完全或部分显示在屏幕中的能力，适用于广告曝光埋点之类的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83198)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onvisibleareachange",
      children: "onVisibleAreaChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件可见区域变化时触发该回调。开发指导及常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility",
        children: "感知组件可见性"
      }), "指南。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997256)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "attributeModifier"
        }), "中调用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅提供自身节点相对于所有祖先节点（直到window边界）的相对裁切面积与自身面积的比值及其变化趋势。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持兄弟组件对自身节点的遮挡计算，不支持所有祖先的兄弟节点对自身节点的遮挡计算，不支持窗口遮挡计算，不支持组件旋转计算，如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
          children: "Stack"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order",
          children: "Z序控制"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#rotate",
          children: "rotate"
        }), "等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持非挂树节点的可见面积变化计算。例如，预加载的节点、通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay#overlay",
          children: "overlay"
        }), "能力挂载的自定义节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
          children: "scale"
        }), "属性，如果想要支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
          children: "scale"
        }), "，则需使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onvisibleareachange22",
          children: "onVisibleAreaChange22+"
        }), "，将measureFromViewport设置为true。"]
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
            children: "ratios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。当组件可见面积与自身面积的比值接近阈值时，均会触发该回调。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当数值接近边界0和1时，将会按照误差不超过0.001的规则进行舍入。例如，0.9997会被近似为1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#visibleareachangecallback12",
              children: "VisibleAreaChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件可见区域变化事件的回调。"
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
      id: "onvisibleareachange22",
      children: "onVisibleAreaChange22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件可见区域变化时触发该回调。可以通过measureFromViewport设置可见区域计算模式。开发指导及常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility",
        children: "感知组件可见性"
      }), "指南。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ratios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阈值数组。其中，每个阈值代表组件可见面积与组件自身面积的比值。当组件可见面积与自身面积的比值接近阈值时，均会触发该回调。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当数值接近边界0和1时，将会按照误差不超过0.001的规则进行舍入。例如，0.9997会被近似为1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#visibleareachangecallback12",
              children: "VisibleAreaChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件可见区域变化事件的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "measureFromViewport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置可见区域计算模式。  当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), " 属性设置。如果父组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), "为false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), "设置为true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。而当measureFromViewport设置为false时，则不考虑", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), "的影响，直接将组件超出父组件的部分视为不可见区域。  measureFromViewport设置为true时，祖先节点设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
              children: "scale"
            }), "属性，组件可见比例会被正确计算。"]
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
        src: (__webpack_require__(616393)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅提供自身节点相对于所有祖先节点（直到window边界）的相对裁切面积与自身面积的比值及其变化趋势。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持兄弟组件对自身节点的遮挡计算，不支持所有祖先的兄弟节点对自身节点的遮挡计算，不支持窗口遮挡计算，不支持组件旋转计算，如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
          children: "Stack"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order",
          children: "Z序控制"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#rotate",
          children: "rotate"
        }), "等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持非挂树节点的可见面积变化计算。例如，预加载的节点、通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay#overlay",
          children: "overlay"
        }), "能力挂载的自定义节点。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onvisibleareaapproximatechange17",
      children: "onVisibleAreaApproximateChange17+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置onVisibleAreaApproximateChange事件的回调参数，限制它的执行间隔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(152850)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 17开始，该接口支持在元服务中使用。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#visibleareaeventoptions12",
              children: "VisibleAreaEventOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可见区域变化相关的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#visibleareachangecallback12",
              children: "VisibleAreaChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
        src: (__webpack_require__(892752)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此接口与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange",
          children: "onVisibleAreaChange"
        }), "接口存在如下差异：onVisibleAreaChange在每一帧都会进行可见区域比例的计算，如果注册节点太多，系统功耗存在劣化。而此接口降低了可见区域比例计算的频度，计算间隔由", (0,jsx_runtime.jsx)(_components.a, {
          href: "#visibleareaeventoptions12",
          children: "VisibleAreaEventOptions"
        }), "的expectedUpdateInterval参数决定。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前接口的可见区域回调阈值默认包含0。例如，开发者设置回调阈值为[0.5]，实际生效的阈值为[0.0, 0.5]。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 18开始，支持在自定义组件中调用该接口。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
          children: "scale"
        }), "属性，如果想要支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
          children: "scale"
        }), "，则需将", (0,jsx_runtime.jsx)(_components.a, {
          href: "#visibleareaeventoptions12",
          children: "VisibleAreaEventOptions"
        }), "的measureFromViewport设置为true。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 21开始，返回值类型由void改为T。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visibleareaeventoptions12",
      children: "VisibleAreaEventOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于区域变化相关的参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ratios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.0；如果设置的阈值大于1.0，则实际取值为1.0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expectedUpdateInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义了开发者期望的计算间隔，单位为ms。当该字段小于100或为NaN时，默认取值为100；当该字段大于2^31-1时，默认取值为2^31-1。  默认值：1000  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "measureFromViewport22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置可见区域计算模式。  当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), " 属性设置。如果父组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), "为false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), "设置为true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。而当measureFromViewport设置为false时，则不考虑", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
              children: "clip"
            }), "的影响，直接将组件超出父组件的部分视为不可见区域。  默认值：false  measureFromViewport设置为true时，祖先节点设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
              children: "scale"
            }), "属性，组件可见比例会被正确计算。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 22开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visibleareachangecallback12",
      children: "VisibleAreaChangeCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件可见区域变化事件的回调类型。"
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
            children: "isExpanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视组件的可见面积与自身面积的比值与上一次回调相比的情况而定，比值变大为true，比值变小为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentRatio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发回调时，组件可见面积与自身面积的比值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1-使用onvisibleareachange来监听区域变化",
      children: "示例1 (使用onVisibleAreaChange来监听区域变化)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例对组件设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onvisibleareachange",
        children: "onVisibleAreaChange"
      }), "事件，当组件完全显示或者完全消失时触发回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ScrollExample {\n  scroller: Scroller = new Scroller()\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n  @State testTextStr: string = 'test'\n  @State testRowStr: string = 'test'\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.testTextStr)\n          .fontSize(20)\n\n        Text(this.testRowStr)\n          .fontSize(20)\n      }\n      .height(100)\n      .backgroundColor(Color.Gray)\n      .opacity(0.3)\n\n      Scroll(this.scroller) {\n        Column() {\n          Text(\"Test Text Visible Change\")\n            .fontSize(20)\n            .height(200)\n            .margin({ top: 50, bottom: 20 })\n            .backgroundColor(Color.Green)\n            // 通过设置ratios为[0.0, 1.0]，实现当组件完全显示或完全消失在屏幕中时触发回调。\n            .onVisibleAreaChange([0.0, 1.0], (isExpanding: boolean, currentRatio: number) => {\n              console.info(`Test Text isExpanding: ${isExpanding}, currentRatio: ${currentRatio}`)\n              if (isExpanding && currentRatio >= 1.0) {\n                console.info(`Test Text is fully visible. currentRatio: ${currentRatio}`)\n                this.testTextStr = 'Test Text is fully visible'\n              }\n\n              if (!isExpanding && currentRatio <= 0.0) {\n                console.info('Test Text is completely invisible.')\n                this.testTextStr = 'Test Text is completely invisible'\n              }\n            })\n\n          Row() {\n            Text('Test Row Visible Change')\n              .fontSize(20)\n              .margin({ bottom: 20 })\n\n          }\n          .height(200)\n          .backgroundColor(Color.Yellow)\n          .onVisibleAreaChange([0.0, 1.0], (isExpanding: boolean, currentRatio: number) => {\n            console.info(`Test Text isExpanding: ${isExpanding}, currentRatio: ${currentRatio}`)\n            if (isExpanding && currentRatio >= 1.0) {\n              console.info('Test Row is fully visible.')\n              this.testRowStr = 'Test Row is fully visible'\n            }\n\n            if (!isExpanding && currentRatio <= 0.0) {\n              console.info('Test Row is completely invisible.')\n              this.testRowStr = 'Test Row is completely invisible'\n            }\n          })\n\n          ForEach(this.arr, (item: number) => {\n            Text(item.toString())\n              .width('90%')\n              .height(150)\n              .backgroundColor(0xFFFFFF)\n              .borderRadius(15)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .margin({ top: 10 })\n          }, (item: number) => (item.toString()))\n\n        }.width('100%')\n      }\n      .backgroundColor(0x317aff)\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n      .onWillScroll((xOffset: number, yOffset: number, scrollState: ScrollState) => {\n        console.info(`${xOffset} ${yOffset}`)\n      })\n      .onScrollEdge((side: Edge) => {\n        console.info('To the edge')\n      })\n      .onScrollStop(() => {\n        console.info('Scroll Stop')\n      })\n\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2-使用onvisibleareaapproximatechange来监听区域变化",
      children: "示例2 (使用onVisibleAreaApproximateChange来监听区域变化)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 17开始，该示例对组件设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onvisibleareaapproximatechange17",
        children: "onVisibleAreaApproximateChange"
      }), "事件，当组件完全显示或者完全消失时触发回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ScrollExample {\n  scroller: Scroller = new Scroller()\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n  @State testTextStr: string = 'test'\n  @State testRowStr: string = 'test'\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.testTextStr)\n          .fontSize(20)\n\n        Text(this.testRowStr)\n          .fontSize(20)\n      }\n      .height(100)\n      .backgroundColor(Color.Gray)\n      .opacity(0.3)\n\n      Scroll(this.scroller) {\n        Column() {\n          Text(\"Test Text Visible Change\")\n            .fontSize(20)\n            .height(200)\n            .margin({ top: 50, bottom: 20 })\n            .backgroundColor(Color.Green)\n            // 通过设置ratios为[0.0, 1.0]，实现当组件完全显示或完全消失在屏幕中时触发回调。\n            .onVisibleAreaApproximateChange({ ratios: [0.0, 1.0], expectedUpdateInterval: 1000 },\n              (isExpanding: boolean, currentRatio: number) => {\n                console.info(`Test Text isExpanding: ${isExpanding}, currentRatio: ${currentRatio}`)\n                if (isExpanding && currentRatio >= 1.0) {\n                  console.info(`Test Text is fully visible. currentRatio: ${currentRatio}`)\n                  this.testTextStr = 'Test Text is fully visible'\n                }\n\n                if (!isExpanding && currentRatio <= 0.0) {\n                  console.info('Test Text is completely invisible.')\n                  this.testTextStr = 'Test Text is completely invisible'\n                }\n              })\n\n          Row() {\n            Text('Test Row Visible Change')\n              .fontSize(20)\n              .margin({ bottom: 20 })\n\n          }\n          .height(200)\n          .backgroundColor(Color.Yellow)\n          .onVisibleAreaChange([0.0, 1.0], (isExpanding: boolean, currentRatio: number) => {\n            console.info(`Test Text isExpanding: ${isExpanding}, currentRatio: ${currentRatio}`)\n            if (isExpanding && currentRatio >= 1.0) {\n              console.info('Test Row is fully visible.')\n              this.testRowStr = 'Test Row is fully visible'\n            }\n\n            if (!isExpanding && currentRatio <= 0.0) {\n              console.info('Test Row is completely invisible.')\n              this.testRowStr = 'Test Row is completely invisible'\n            }\n          })\n\n          ForEach(this.arr, (item: number) => {\n            Text(item.toString())\n              .width('90%')\n              .height(150)\n              .backgroundColor(0xFFFFFF)\n              .borderRadius(15)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .margin({ top: 10 })\n          }, (item: number) => (item.toString()))\n\n        }.width('100%')\n      }\n      .backgroundColor(0x317aff)\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n      .onWillScroll((xOffset: number, yOffset: number, scrollState: ScrollState) => {\n        console.info(`${xOffset} ${yOffset}`)\n      })\n      .onScrollEdge((side: Edge) => {\n        console.info('To the edge')\n      })\n      .onScrollStop(() => {\n        console.info('Scroll Stop')\n      })\n\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(310804)/* ["default"] */.A) + "",
        width: "248",
        height: "537"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3-设置measurefromviewport子组件超出父组件显示",
      children: "示例3 (设置measureFromViewport子组件超出父组件显示)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例展示onVisibleAreaChange事件设置measureFromViewport参数效果对比，主要差异体现在回调返回值组件可见比例（currentRatio）的不同，设置measureFromViewport为true时，返回的组件可见比例（currentRatio）更符合实际效果。该示例在不同设备上currentRatio会有微小差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct OnVisibleAreaChangeSample {\n  @State ratio1: number = 0.0;\n  @State ratio2: number = 0.0;\n  @State ratio3: number = 0.0;\n\n  build() {\n    Column() {\n      Text(`onVisibleChange1 with measureFromViewport \\nratio: ${this.ratio1}`)\n      Column() {\n        Row() {\n          Row() {\n\n          }\n          .backgroundColor(Color.Blue)\n          .height(120)\n          .width(120)\n          .offset({ x: 0, y: 60 })\n          // measureFromViewport设置为true，父组件未设置clip(true)，超出父组件的区域被视为可见区域。\n          .onVisibleAreaApproximateChange({\n            ratios: [0.0, 1.0],\n            expectedUpdateInterval: 500,\n            measureFromViewport: true\n          }, (isExpanding: boolean, currentRatio: number) => {\n            console.info(`onVisibleAreaApproximateChange1 isExpanding: ${isExpanding} currentRatio: ${currentRatio}`)\n          })\n          .onVisibleAreaChange([0.0, 1.0], (isExpanding: boolean, currentRatio: number) => {\n            this.ratio1 = currentRatio\n          }, true)\n        }\n        .backgroundColor(Color.Pink)\n        .height(120)\n        .width(120)\n      }\n      .padding(5)\n      .borderWidth(1)\n      .height(200)\n      .width(200)\n\n      Text(`onVisibleChange2 without measureFromViewport \\nratio: ${this.ratio2}`)\n      Column() {\n        Row() {\n          Row() {\n\n          }\n          .backgroundColor(Color.Blue)\n          .height(120)\n          .width(120)\n          .offset({ x: 0, y: 60 })\n          // 不设置measureFromViewport，measureFromViewport默认为false，父组件未设置clip(true)，超出父组件的区域被视为不可见区域。\n          .onVisibleAreaApproximateChange({ ratios: [0.0, 1.0], expectedUpdateInterval: 500 },\n            (isExpanding: boolean, currentRatio: number) => {\n              console.info(`onVisibleAreaApproximateChange2 isExpanding: ${isExpanding} currentRatio: ${currentRatio}`)\n            })\n          .onVisibleAreaChange([0.0, 1.0], (isExpanding: boolean, currentRatio: number) => {\n            this.ratio2 = currentRatio\n          })\n        }\n        .backgroundColor(Color.Pink)\n        .height(120)\n        .width(120)\n      }\n      .padding(5)\n      .borderWidth(1)\n      .height(200)\n      .width(200)\n\n      Text(`parent set clip(true) onVisibleChange3 with measureFromViewport \\nratio: ${this.ratio3}`)\n      Column() {\n        Row() {\n          Row() {\n\n          }\n          .backgroundColor(Color.Blue)\n          .height(120)\n          .width(120)\n          .offset({ x: 0, y: 60 })\n          // measureFromViewport设置为true，父组件设置clip(true)，超出父组件的区域被视为不可见区域。\n          .onVisibleAreaApproximateChange({\n            ratios: [0.0, 1.0],\n            expectedUpdateInterval: 500,\n            measureFromViewport: true\n          }, (isExpanding: boolean, currentRatio: number) => {\n            console.info(`onVisibleAreaApproximateChange3 isExpanding: ${isExpanding} currentRatio: ${currentRatio}`)\n          })\n          .onVisibleAreaChange([0.0, 1.0], (isExpanding: boolean, currentRatio: number) => {\n            this.ratio3 = currentRatio\n          }, true)\n        }\n        .clip(true)\n        .backgroundColor(Color.Pink)\n        .height(120)\n        .width(120)\n      }\n      .padding(5)\n      .borderWidth(1)\n      .height(200)\n      .width(200)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94282)/* ["default"] */.A) + "",
        width: "350",
        height: "710"
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
152850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
892752(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
94282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439521-9e077b4c0eada87876217b2ccedc76f3.jpg");

},
997256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
310804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799826-cd9213508c2f21e32ec17ecbc17c082b.gif");

},
616393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
83198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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