"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["957289"], {
983081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_transition_ts_universal_attributes_modal_transition_ts_universal_attributes_modal_transition_md_523_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-transition-ts-universal-attributes-modal-transition-ts-universal-attributes-modal-transition-md-523.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_transition_ts_universal_attributes_modal_transition_ts_universal_attributes_modal_transition_md_523_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition","title":"全屏模态转场","description":"通过bindContentCover属性为组件绑定全屏模态页面，在组件插入和移除时可通过设置转场参数ModalTransition显示过渡动效。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"全屏模态转场","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-modal-transition"},"sidebar":"ref","previous":{"title":"无障碍属性","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility"},"next":{"title":"半模态转场","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition.md


const frontMatter = {
	title: '全屏模态转场',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-modal-transition'
};
const contentTitle = '全屏模态转场';

const assets = {

};



const toc = [{
  "value": "bindContentCover",
  "id": "bindcontentcover",
  "level": 2
}, {
  "value": "bindContentCover",
  "id": "bindcontentcover-1",
  "level": 2
}, {
  "value": "ContentCoverOptions",
  "id": "contentcoveroptions",
  "level": 2
}, {
  "value": "DismissContentCoverAction12+类型说明",
  "id": "dismisscontentcoveraction12类型说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（使用全屏模态转场）",
  "id": "示例1使用全屏模态转场",
  "level": 3
}, {
  "value": "示例2（自定义转场动画）",
  "id": "示例2自定义转场动画",
  "level": 3
}, {
  "value": "示例3（上下切换转场）",
  "id": "示例3上下切换转场",
  "level": 3
}, {
  "value": "示例4（透明度渐变转场）",
  "id": "示例4透明度渐变转场",
  "level": 3
}, {
  "value": "示例5（设置不同效果的自定义转场）",
  "id": "示例5设置不同效果的自定义转场",
  "level": 3
}, {
  "value": "示例6（设置全屏模态适配安全区）",
  "id": "示例6设置全屏模态适配安全区",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    void: "void",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "全屏模态转场",
        children: "全屏模态转场"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过bindContentCover属性为组件绑定全屏模态页面，在组件插入和移除时可通过设置转场参数ModalTransition显示过渡动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239571)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持横竖屏切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持路由跳转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bindcontentcover",
      children: "bindContentCover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，显示方式可设置无动画过渡，上下切换过渡以及透明渐变过渡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(306388)/* ["default"] */.A) + "",
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
            children: "isShow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示全屏模态页面。  -true：显示全屏模态页面。  -false：隐藏全屏模态页面。  从API version 10开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  从API version 18开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "!!"
            }), "双向绑定变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置全屏模态页面内容。builder里面的根节点需要唯一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#modaltransition",
              children: "ModalTransition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全屏模态页面的系统转场方式。  默认值：ModalTransition.DEFAULT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  与transition同时设置时，此属性不生效。"]
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
      id: "bindcontentcover-1",
      children: "bindContentCover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，可自定义设置转场方式。"
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
            children: "isShow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示全屏模态页面。  -true：显示全屏模态页面。  -false：隐藏全屏模态页面。  从API version 10开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  从API version 18开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "!!"
            }), "双向绑定变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置全屏模态页面内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#contentcoveroptions",
              children: "ContentCoverOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置全屏模态页面的可选属性。"
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
      id: "contentcoveroptions",
      children: "ContentCoverOptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindoptions",
        children: "BindOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全屏模态页面内容选项。"
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
            children: "modalTransition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#modaltransition",
              children: "ModalTransition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全屏模态页面的系统转场方式。  默认值：ModalTransition.DEFAULT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  与transition同时设置时，此属性不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDismiss12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dismisscontentcoveraction12%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "DismissContentCoverAction"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全屏模态页面交互式关闭回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当用户执行back事件关闭交互操作时，如果注册该回调函数，则不会立刻关闭。在回调函数中可以通过reason得到阻拦关闭页面的操作类型，从而根据原因选择是否关闭全屏模态页面。在onWillDismiss回调中，不能再做onWillDismiss拦截。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transition12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TransitionEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全屏模态页面的自定义转场方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableSafeArea20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["全屏模态是否适配安全区域，true表示全屏模态适配安全区域，将内容限制在安全区内，避让导航条和状态栏，false表示不做处理，和之前的样式保持一致。默认值为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dismisscontentcoveraction12类型说明",
      children: "DismissContentCoverAction12+类型说明"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "dismiss"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全屏模态页面关闭回调函数。开发者需要退出页面时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#dismissreason12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DismissReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回本次拦截全屏模态页面退出的事件原因。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1使用全屏模态转场",
      children: "示例1（使用全屏模态转场）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示通过bindContentCover来实现全屏模态转场。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ModalTransitionExample {\n  @State isShow: boolean = false;\n  @State isShow2: boolean = false;\n\n  @Builder\n  myBuilder2() {\n    Column() {\n      Button(\"close modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Button(\"transition modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = true;\n        }).bindContentCover(this.isShow2, this.myBuilder2(), {\n        modalTransition: ModalTransition.NONE,\n        backgroundColor: Color.Orange,\n        onWillAppear: () => {\n          console.info(\"BindContentCover onWillAppear.\");\n        },\n        onAppear: () => {\n          console.info(\"BindContentCover onAppear.\");\n        },\n        onWillDisappear: () => {\n          console.info(\"BindContentCover onWillDisappear.\");\n        },\n        onDisappear: () => {\n          console.info(\"BindContentCover onDisappear.\");\n        }\n      })\n\n      Button(\"close modal 1\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  build() {\n    Column() {\n      Button(\"transition modal 1\")\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindContentCover(this.isShow, this.myBuilder(), {\n          modalTransition: ModalTransition.NONE,\n          backgroundColor: Color.Pink,\n          onWillAppear: () => {\n            console.info(\"BindContentCover onWillAppear.\");\n          },\n          onAppear: () => {\n            console.info(\"BindContentCover onAppear.\");\n          },\n          onWillDisappear: () => {\n            console.info(\"BindContentCover onWillDisappear.\");\n          },\n          onDisappear: () => {\n            console.info(\"BindContentCover onDisappear.\");\n          }\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .backgroundColor(\"#ff49c8ab\")\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767186)/* ["default"] */.A) + "",
        width: "272",
        height: "583"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义转场动画",
      children: "示例2（自定义转场动画）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全屏模态无动画转场模式下，自定义转场动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { curves } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ModalTransitionExample {\n  @State @Watch(\"isShow1Change\") isShow: boolean = false;\n  @State @Watch(\"isShow2Change\") isShow2: boolean = false;\n  @State isScale1: number = 1;\n  @State isScale2: number = 1;\n\n  isShow1Change() {\n    this.isShow ? this.isScale1 = 0.95 : this.isScale1 = 1;\n  }\n\n  isShow2Change() {\n    this.isShow2 ? this.isScale2 = 0.95 : this.isScale2 = 1;\n  }\n\n  @Builder\n  myBuilder2() {\n    Column() {\n      Button(\"close modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Button(\"transition modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = true;\n        }).bindContentCover(this.isShow2, this.myBuilder2(), {\n        modalTransition: ModalTransition.NONE,\n        backgroundColor: Color.Orange,\n        onWillAppear: () => {\n          console.info(\"BindContentCover onWillAppear.\");\n        },\n        onAppear: () => {\n          console.info(\"BindContentCover onAppear.\");\n        },\n        onWillDisappear: () => {\n          console.info(\"BindContentCover onWillDisappear.\");\n        },\n        onDisappear: () => {\n          console.info(\"BindContentCover onDisappear.\");\n        }\n      })\n\n      Button(\"close modal 1\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n    .scale({ x: this.isScale2, y: this.isScale2 })\n    .animation({ curve: curves.springMotion() })\n  }\n\n  build() {\n    Column() {\n      Button(\"transition modal 1\")\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindContentCover(this.isShow, this.myBuilder(), {\n          modalTransition: ModalTransition.NONE,\n          backgroundColor: Color.Pink,\n          onWillAppear: () => {\n            console.info(\"BindContentCover onWillAppear.\");\n          },\n          onAppear: () => {\n            console.info(\"BindContentCover onAppear.\");\n          },\n          onWillDisappear: () => {\n            console.info(\"BindContentCover onWillDisappear.\");\n          },\n          onDisappear: () => {\n            console.info(\"BindContentCover onDisappear.\");\n          }\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .backgroundColor(\"#ff49c8ab\")\n    .width('100%')\n    .height('100%')\n    .scale({ x: this.isScale1, y: this.isScale1 })\n    .animation({ curve: curves.springMotion() })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332802)/* ["default"] */.A) + "",
        width: "272",
        height: "583"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3上下切换转场",
      children: "示例3（上下切换转场）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全屏模态上下切换转场。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ModalTransitionExample {\n  @State isShow: boolean = false;\n  @State isShow2: boolean = false;\n\n  @Builder\n  myBuilder2() {\n    Column() {\n      Button(\"close modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Button(\"transition modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = true;\n        }).bindContentCover(this.isShow2, this.myBuilder2(), {\n        modalTransition: ModalTransition.DEFAULT,\n        backgroundColor: Color.Gray,\n        onWillAppear: () => {\n          console.info(\"BindContentCover onWillAppear.\");\n        },\n        onAppear: () => {\n          console.info(\"BindContentCover onAppear.\");\n        },\n        onWillDisappear: () => {\n          console.info(\"BindContentCover onWillDisappear.\");\n        },\n        onDisappear: () => {\n          console.info(\"BindContentCover onDisappear.\");\n        }\n      })\n\n      Button(\"close modal 1\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  build() {\n    Column() {\n      Button(\"transition modal 1\")\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindContentCover(this.isShow, this.myBuilder(), {\n          modalTransition: ModalTransition.DEFAULT,\n          backgroundColor: Color.Pink,\n          onWillAppear: () => {\n            console.info(\"BindContentCover onWillAppear.\");\n          },\n          onAppear: () => {\n            console.info(\"BindContentCover onAppear.\");\n          },\n          onWillDisappear: () => {\n            console.info(\"BindContentCover onWillDisappear.\");\n          },\n          onDisappear: () => {\n            console.info(\"BindContentCover onDisappear.\");\n          }\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .backgroundColor(Color.White)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530915)/* ["default"] */.A) + "",
        width: "272",
        height: "583"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4透明度渐变转场",
      children: "示例4（透明度渐变转场）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全屏模态透明度渐变转场。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ModalTransitionExample {\n  @State isShow: boolean = false;\n  @State isShow2: boolean = false;\n\n  @Builder\n  myBuilder2() {\n    Column() {\n      Button(\"close modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Button(\"transition modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = true;\n        }).bindContentCover(this.isShow2, this.myBuilder2(), {\n        modalTransition: ModalTransition.ALPHA,\n        backgroundColor: Color.Gray,\n        onWillAppear: () => {\n          console.info(\"BindContentCover onWillAppear.\");\n        },\n        onAppear: () => {\n          console.info(\"BindContentCover onAppear.\");\n        },\n        onWillDisappear: () => {\n          console.info(\"BindContentCover onWillDisappear.\");\n        },\n        onDisappear: () => {\n          console.info(\"BindContentCover onDisappear.\");\n        }\n      })\n\n      Button(\"close modal 1\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  build() {\n    Column() {\n      Button(\"transition modal 1\")\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindContentCover(this.isShow, this.myBuilder(), {\n          modalTransition: ModalTransition.ALPHA,\n          backgroundColor: Color.Pink,\n          onWillAppear: () => {\n            console.info(\"BindContentCover onWillAppear.\");\n          },\n          onAppear: () => {\n            console.info(\"BindContentCover onAppear.\");\n          },\n          onWillDisappear: () => {\n            console.info(\"BindContentCover onWillDisappear.\");\n          },\n          onDisappear: () => {\n            console.info(\"BindContentCover onDisappear.\");\n          }\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .backgroundColor(Color.White)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771743)/* ["default"] */.A) + "",
        width: "272",
        height: "583"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置不同效果的自定义转场",
      children: "示例5（设置不同效果的自定义转场）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示全屏模态旋转，平移等自定义转场。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ModalTransitionExample {\n  @State isShow: boolean = false;\n  @State isShow2: boolean = false;\n\n  @Builder\n  myBuilder2() {\n    Column() {\n      Button(\"Close Modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Button(\"Transition Modal 2\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow2 = true;\n        })\n        .bindContentCover(\n          this.isShow2,\n          this.myBuilder2(),\n          {\n            modalTransition: ModalTransition.DEFAULT,\n            backgroundColor: Color.Gray,\n            transition: TransitionEffect.SLIDE.animation({ duration: 5000, curve: Curve.LinearOutSlowIn }),\n            onWillDismiss: ((dismissContentCoverAction: DismissContentCoverAction) => {\n              if (dismissContentCoverAction.reason == DismissReason.PRESS_BACK) {\n                console.info(\"BindContentCover dismiss reason is back pressed\");\n              }\n              dismissContentCoverAction.dismiss();\n            }),\n            onAppear: () => {\n              console.info(\"BindContentCover onAppear.\");\n            },\n            onDisappear: () => {\n              this.isShow2 = false;\n              console.info(\"BindContentCover onDisappear.\");\n            }\n          })\n\n      Button(\"Close Modal 1\")\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  build() {\n    Column() {\n      Button(\"Transition Modal 1\")\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindContentCover(\n          this.isShow,\n          this.myBuilder(),\n          {\n            modalTransition: ModalTransition.DEFAULT,\n            backgroundColor: Color.Pink,\n            transition: TransitionEffect.asymmetric(\n              TransitionEffect.OPACITY.animation({ duration: 1100 }).combine(\n                TransitionEffect.rotate({ z: 1, angle: 180 }).animation({ delay: 1000, duration: 1000 }))\n              ,\n              TransitionEffect.OPACITY.animation({ duration: 1200 }).combine(\n                TransitionEffect.rotate({ z: 1, angle: 180 }).animation({ duration: 1300 }))\n            ),\n            onWillDismiss: ((dismissContentCoverAction: DismissContentCoverAction) => {\n              if (dismissContentCoverAction.reason == DismissReason.PRESS_BACK) {\n                console.info(\"back pressed\");\n              }\n              dismissContentCoverAction.dismiss();\n            }),\n            onAppear: () => {\n              console.info(\"BindContentCover onAppear.\");\n            },\n            onDisappear: () => {\n              this.isShow = false;\n              console.info(\"BindContentCover onDisappear.\");\n            }\n          })\n    }\n    .justifyContent(FlexAlign.Center)\n    .backgroundColor(Color.White)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767246)/* ["default"] */.A) + "",
        width: "270",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置全屏模态适配安全区",
      children: "示例6（设置全屏模态适配安全区）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，该示例主要演示设置enableSafeArea为true后全屏模态适配安全区的内容效果。全屏模态容器其背景色为浅蓝色，内容颜色为灰色，内容在安全区内布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SafeAreaController {\n  @State isShow: boolean = false;\n  @State SafeArea: boolean | undefined = true;\n  @State heightMode: string = '100%';\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Column() {\n        Button(\"Content\")\n          .fontSize(20)\n      }\n      .width('100%')\n      .height('50%')\n      .borderRadius(10)\n      .borderStyle(BorderStyle.Dotted)\n      .borderWidth(2)\n      Column() {\n        Button(\"Content\")\n          .margin({top:340})\n          .fontSize(20)\n      }\n      .width('100%')\n      .height('50%')\n      .borderRadius(10)\n      .borderStyle(BorderStyle.Dotted)\n      .borderWidth(2)\n    }\n    .backgroundColor(Color.Grey)\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height(this.heightMode)\n  }\n  build() {\n    Column() {\n      Button(\"Open ContentCover\")\n        .onClick(() => this.isShow = true)\n        .fontSize(20)\n        .margin(10)\n        .bindContentCover(this.isShow, this.myBuilder(), {\n          modalTransition: ModalTransition.ALPHA,\n          backgroundColor: 0x87CEEB,\n          // 动态设置安全区域模式\n          enableSafeArea: this.SafeArea\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(946611)/* ["default"] */.A) + "",
        width: "362",
        height: "647"
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
306388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
530915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959564-e19dc812a1e10e646ed1b1dfc2258030.gif");

},
767186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799914-3bf8e2ad7df154ee6154fea03f4484dc.gif");

},
946611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439611-d087372f7ae1de6e104d69fc6b281b86.png");

},
332802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439609-fa3d12e326f5dc17811f51059b0c8b73.gif");

},
771743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479565-dc46608d679172b57b60de35d4226531.gif");

},
239571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
767246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799916-31f2ea54873665ae24a9f9a5175a075b.gif");

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