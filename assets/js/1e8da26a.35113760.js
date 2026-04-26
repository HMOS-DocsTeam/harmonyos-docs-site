"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["74712"], {
723836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ui_design_api_ui_design_arkts_component_ui_design_hdssidebar_ui_design_hdssidebar_md_1e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ui-design-api-ui-design-arkts-component-ui-design-hdssidebar-ui-design-hdssidebar-md-1e8.json
var site_docs_ref_ui_design_api_ui_design_arkts_component_ui_design_hdssidebar_ui_design_hdssidebar_md_1e8_namespaceObject = JSON.parse('{"id":"ui-design-api/ui-design-arkts-component/ui-design-hdssidebar/ui-design-hdssidebar","title":"HdsSideBar","description":"本模块支持显示和隐藏的侧边栏容器，并且可以自定义侧边栏和内容区。","source":"@site/docs-ref/ui-design-api/ui-design-arkts-component/ui-design-hdssidebar/ui-design-hdssidebar.md","sourceDirName":"ui-design-api/ui-design-arkts-component/ui-design-hdssidebar","slug":"/ui-design-api/ui-design-arkts-component/ui-design-hdssidebar/ui-design-hdssidebar","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts-component/ui-design-hdssidebar/ui-design-hdssidebar","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"HdsSideBar","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssidebar","kit":"应用框架","last_updated":"2026-04-22","slug":"ui-design-hdssidebar"},"sidebar":"ref","previous":{"title":"HdsNavDestination","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination"},"next":{"title":"HdsSnackBar","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts-component/ui-design-hdssnackbar/ui-design-hdssnackbar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ui-design-api/ui-design-arkts-component/ui-design-hdssidebar/ui-design-hdssidebar.md


const frontMatter = {
	title: 'HdsSideBar',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssidebar',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ui-design-hdssidebar'
};
const contentTitle = 'HdsSideBar';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "build",
  "id": "build",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
    code: "code",
    h1: "h1",
    h2: "h2",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hdssidebar",
        children: "HdsSideBar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块支持显示和隐藏的侧边栏容器，并且可以自定义侧边栏和内容区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HdsSideBar } from '@kit.UIDesignKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsSideBar({contentAreaMask?: boolean, isShowSideBar?: boolean, $isShowSideBar?: Callback<boolean>, minSideBarWidth?: Length, maxSideBarWidth?: Length, minContentWidth?: Length, sideBarColor?: ResourceColor, contentColor?: ResourceColor, sideBarWidth?: Length, autoHide?: boolean, isSideBarBlur?: boolean, sideBarPosition?: sideBarPosition, onChange?: Callback<boolean>, sideBarPanelBuilder: CustomBuilder, contentPanelBuilder: CustomBuilder, sideBarContainerType?: SideBarContainerType, scaleContentEnabled?: boolean, swipeEnabled?: boolean})"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @ComponentV2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSPattern.Standard"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentAreaMask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏悬浮显示的场景下内容区是否有蒙层。  true：内容区有蒙层。false：内容区没有蒙层。  默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isShowSideBar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件是否显示侧边栏。  true：显示侧边栏。  false：不显示侧边栏。  默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$isShowSideBar"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HdsSideBar组件侧边栏控制按钮点击后，是否显示侧边栏的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minSideBarWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏的最小宽度。  默认值：200vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxSideBarWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏的最大宽度。  默认值：280vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minContentWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件内容区可显示的最小宽度。  默认值：360vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sideBarColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏区的背景颜色。  默认值：Color.Transparent。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件内容区的背景颜色。  默认值：Color.Transparent。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sideBarWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏的宽度。  默认值：240vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoHide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏拖拽到小于最小宽度后，是否自动隐藏。  true：会自动隐藏。  false：不会自动隐藏。  默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSideBarBlur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件窗口获焦时侧边栏是否有模糊效果。  true：窗口获焦时HdsSideBar组件侧边栏会有模糊效果，失焦时没有模糊效果。  false：窗口始终没有模糊效果。  默认值：true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sideBarPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer#sidebarposition9%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SideBarPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏显示位置。  默认值：SideBarPosition.Start，侧边栏位于容器左侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onChange"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当HdsSideBar组件侧边栏的状态在显示和隐藏之间切换时触发回调。  触发该事件的条件：  1. showSideBar属性值变换时。  2. showSideBar属性自适应行为变化时。  3. 分割线拖拽触发autoHide时。  true表示显示侧边栏，false表示隐藏侧边栏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sideBarPanelBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏的子组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentPanelBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件内容区的子组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sideBarContainerType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer#sidebarcontainertype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SideBarContainerType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HdsSideBar组件侧边栏的显示类型。  默认值：SideBarContainerType.AUTO，侧边栏嵌入到组件内，和内容区并列显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scaleContentEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置侧边栏展开内容区是否为缩放样式。  true：侧边栏展开内容区为缩放样式。  false：侧边栏展开内容区为平移样式。  默认值：true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：6.1.0(23)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swipeEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置侧边栏抽屉是否可跟随滑动手势展开关闭。  true：侧边栏抽屉跟随滑动手势展开关闭。  false：侧边栏抽屉不跟随滑动手势展开关闭。  默认值：false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：6.1.0(23)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  swipeEnabled仅在平移场景下（scaleContentEnabled为false）生效，其他场景下不支持侧滑手势。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct的默认构造函数，无法直接调用此方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.HDSPattern.Standard"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HdsSideBar提供侧边栏可以显示和隐藏的侧边栏容器，可以自定义侧边栏区和内容区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { HdsSideBar } from '@kit.UIDesignKit';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local isShowSidebar: boolean = true;\n\n  //左侧侧边栏区\n  @Builder\n  SideBarPanelBuilder() {\n    Column() {\n      Text('左侧侧边栏区')\n    }\n    .width('100%')\n    .height('100%')\n    .margin(40)\n  }\n\n  //右侧内容区\n  @Builder\n  ContentPanelBuilder() {\n    Text('右侧内容区')\n      .margin(40)\n  }\n\n  @BuilderParam contentBuilder: () => void = this.ContentPanelBuilder\n  @BuilderParam sideBarBuilder: () => void = this.SideBarPanelBuilder\n\n  @Builder\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Button() {\n        SymbolGlyph(this.isShowSidebar ? $r('sys.symbol.open_sidebar') : $r('sys.symbol.close_sidebar'))\n          .fontWeight(FontWeight.Normal)\n          .fontSize($r('sys.float.ohos_id_text_size_headline7'))\n          .fontColor([$r('sys.color.ohos_id_color_titlebar_icon')])\n          .hitTestBehavior(HitTestMode.None)\n      }\n      .id('side_bar_button')\n      .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n      .height(30)\n      .width(30)\n      .onClick(() => {\n        this.isShowSidebar = !this.isShowSidebar;\n      })\n      .zIndex(1)\n      .margin({ top: 10, left: 10 })\n\n      HdsSideBar({\n        sideBarPanelBuilder: (): void => {\n          this.sideBarBuilder()\n        },\n        contentPanelBuilder: (): void => {\n          this.contentBuilder()\n        },\n        sideBarContainerType: SideBarContainerType.Overlay,\n        maxSideBarWidth: 100,\n        isShowSideBar: this.isShowSidebar,\n        $isShowSideBar: (isShowSidebar: boolean) => {\n          this.isShowSidebar = !isShowSidebar\n        },\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(835860)/* ["default"] */.A) + "",
        width: "315",
        height: "232"
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
835860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440571-1fc3cd1ba3ba2653324bf7805c030d38.gif");

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